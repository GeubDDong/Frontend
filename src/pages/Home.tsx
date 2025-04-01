import { useEffect, useRef, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import useKakaoLoader from '@/hooks/useKakaoLoader';
import CurrentLocationButton from '@/components/Home/CurrentLocationButton';
import { IBound } from '@/types';
import styled from 'styled-components';
import MyLocation from '@/components/Home/MyLocation';
import ToiletBasicInfo from '@/components/Home/ToiletBasicInfo';
import HomeMenuButton from '@/components/Home/HomeMenuButton';
import ToiletMarker from '@/components/Home/ToiletMarker';
import useMapInfo from '@/hooks/useMapInfo';

const Home = () => {
  const mapRef = useRef<kakao.maps.Map>(null);
  const {
    toiletInfoData,
    center,
    zoomLevel,
    errorCode,
    setCenter,
    setZoomLevel,
    getToiletInfoData,
  } = useMapInfo();
  const [bound, setBound] = useState<IBound | null>(null);

  useKakaoLoader();

  useEffect(() => {
    if (!mapRef.current) return;
    const top = mapRef.current.getBounds().getNorthEast().getLat();
    const right = mapRef.current.getBounds().getNorthEast().getLng();
    const bottom = mapRef.current.getBounds().getSouthWest().getLat();
    const left = mapRef.current.getBounds().getSouthWest().getLng();
    setBound({ top, left, bottom, right });
  }, [mapRef.current, center, zoomLevel]);

  useEffect(() => {
    if (bound === null) return;
    getToiletInfoData(bound);
  }, [bound]);

  const handleIdle = (map: kakao.maps.Map) => {
    const newCenter = map.getCenter();
    const latitude = newCenter.getLat();
    const longitude = newCenter.getLng();
    const newZoomLevel = map.getLevel();
    if (latitude !== center.latitude || longitude !== center.longitude) {
      setCenter({ latitude, longitude });
    }
    if (newZoomLevel !== zoomLevel) {
      setZoomLevel(newZoomLevel);
    }
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
        level={zoomLevel}
        ref={mapRef}
        onIdle={handleIdle}
        isPanto={true}
        minLevel={10}
        maxLevel={1}
      >
        {errorCode === null && <MyLocation />}
        {toiletInfoData.map((item) => (
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
