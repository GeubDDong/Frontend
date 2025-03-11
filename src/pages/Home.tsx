import { useEffect, useRef, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import useKakaoLoader from '@/hooks/useKakaoLoader';
import CurrentLocationButton from '@/components/Main/CurrentLocationButton';
import { ILocation } from '@/types';
import styled from 'styled-components';
import MyLocation from '@/components/Main/MyLocation';
import useLocationStore from '@/store/locationStore';
import useCurrentLocation from '@/hooks/useCurrentLocation';

const Home = () => {
  const mapRef = useRef<kakao.maps.Map>(null);
  const location = useLocationStore.getState().location;
  const errorCode = useLocationStore((state) => state.errorCode);
  const { getLocation } = useCurrentLocation();
  const [center, setCenter] = useState<ILocation>(location);

  useKakaoLoader();

  useEffect(() => {
    const getInitialLocation = async () => {
      await getLocation();
      const location = useLocationStore.getState().location;
      setCenter(location);
    };
    getInitialLocation();
  }, []);

  const handleIdle = (map: kakao.maps.Map) => {
    const newCenter = map.getCenter();
    const latitude = newCenter.getLat();
    const longitude = newCenter.getLng();
    setCenter({ latitude, longitude });
  };

  return (
    <HomeStyle>
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
      <CurrentLocationButton setCenter={setCenter} />
    </HomeStyle>
  );
};

export default Home;

const HomeStyle = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;
