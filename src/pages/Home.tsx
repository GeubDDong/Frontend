import { useEffect, useRef, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import useKakaoLoader from '@/hooks/useKakaoLoader';
import CurrentLocationButton from '@/components/Home/CurrentLocationButton';
import { IBound, ILocation } from '@/types';
import styled from 'styled-components';
import MyLocation from '@/components/Home/MyLocation';
import useLocationStore from '@/store/locationStore';
import useCurrentLocation from '@/hooks/useCurrentLocation';
import { toast } from 'react-toastify';
import { GEOLOCATION_ERROR_TOAST_MESSAGE } from '@/constants/errorMessage';
import ToiletBasicInfo from '@/components/Home/ToiletBasicInfo';
import HomeMenuButton from '@/components/Home/HomeMenuButton';
import { INITIAL_BOUNDS } from '@/constants/initialCoord';
import { mainToiletInfo } from '@/api/mainToiletInfo.api';
import { IToiletBasicInfo } from '@/models/toiletBasicInfo.model';
import ToiletMarker from '@/components/Home/ToiletMarker';
import useToiletInfoStore from '@/store/toiletInfoStore';

const Home = () => {
  const mapRef = useRef<kakao.maps.Map>(null);
  const errorCode = useLocationStore((state) => state.errorCode);
  const setSelectedToiletDataInfo = useToiletInfoStore(
    (state) => state.setInfo,
  );
  const center = useLocationStore((state) => state.center);
  const setCenter = useLocationStore((store) => store.setCenter);
  const { getLocation } = useCurrentLocation();
  const [bound, setBound] = useState<IBound>({
    top: INITIAL_BOUNDS.TOP,
    left: INITIAL_BOUNDS.LEFT,
    bottom: INITIAL_BOUNDS.BOTTOM,
    right: INITIAL_BOUNDS.RIGHT,
  });
  const [data, setData] = useState<IToiletBasicInfo[]>([]);

  useKakaoLoader();

  useEffect(() => {
    const setInitialLocation = async () => {
      await getLocation()
        .then((location) => {
          setCenter(location);
        })
        .catch((errorCode) => {
          toast(GEOLOCATION_ERROR_TOAST_MESSAGE[errorCode]);
        });
    };
    setInitialLocation();
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;
    const top = mapRef.current.getBounds().getNorthEast().getLat();
    const right = mapRef.current.getBounds().getNorthEast().getLng();
    const bottom = mapRef.current.getBounds().getSouthWest().getLat();
    const left = mapRef.current.getBounds().getSouthWest().getLng();
    setBound({ top, left, bottom, right });
  }, [center, mapRef.current]);

  useEffect(() => {
    async function fetchAPI(center: ILocation, bound: IBound) {
      await mainToiletInfo(center, bound)
        .then((data) => {
          setData(data);
          setSelectedToiletDataInfo(data[0] || null);
        })
        .catch((err) => console.error(err));
    }
    fetchAPI(center, bound);
  }, [bound]);

  const handleIdle = (map: kakao.maps.Map) => {
    const newCenter = map.getCenter();
    const latitude = newCenter.getLat();
    const longitude = newCenter.getLng();
    const top = map.getBounds().getNorthEast().getLat();
    const left = map.getBounds().getNorthEast().getLng();
    const bottom = map.getBounds().getSouthWest().getLat();
    const right = map.getBounds().getSouthWest().getLng();
    setCenter({ latitude, longitude });
    setBound({ top, left, bottom, right });
  };

  return (
    <HomeStyle>
      <ToiletBasicInfo />
      <Map
        id="map"
        center={{
          lat: center.latitude,
          lng: center.longitude,
        }}
        style={{
          width: '100%',
          height: '100%',
        }}
        level={3}
        ref={mapRef}
        onIdle={handleIdle}
        isPanto={true}
      >
        {errorCode === null && <MyLocation />}
        {data.map((item) => (
          <ToiletMarker key={item.id} info={item} />
        ))}
      </Map>
      <HomeMenuButton />
      <CurrentLocationButton />
    </HomeStyle>
  );
};

export default Home;

const HomeStyle = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow-y: hidden;
`;
