import { useEffect, useRef, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import useKakaoLoader from '@/hooks/useKakaoLoader';
import CurrentLocationButton from '@/components/Home/CurrentLocationButton';
import { ILocation } from '@/types';
import styled from 'styled-components';
import MyLocation from '@/components/Home/MyLocation';
import useLocationStore from '@/store/locationStore';
import useCurrentLocation from '@/hooks/useCurrentLocation';
import { toast } from 'react-toastify';
import { GEOLOCATION_ERROR_TOAST_MESSAGE } from '@/constants/errorMessage';
import ToiletBasicInfo from '@/components/Home/ToiletBasicInfo';

const Home = () => {
  const mapRef = useRef<kakao.maps.Map>(null);
  const errorCode = useLocationStore((state) => state.errorCode);
  const { getLocation } = useCurrentLocation();
  const [center, setCenter] = useState<ILocation>(
    useLocationStore.getInitialState().location,
  );

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

  const handleIdle = (map: kakao.maps.Map) => {
    const newCenter = map.getCenter();
    const latitude = newCenter.getLat();
    const longitude = newCenter.getLng();
    setCenter({ latitude, longitude });
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
      </Map>
      <CurrentLocationButton onLocationChanged={setCenter} />
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
