import { useEffect, useRef, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import CurrentLocationButton from '@/components/Home/CurrentLocationButton';
import { IBound } from '@/types';
import styled from 'styled-components';
import MyLocation from '@/components/Home/MyLocation';
import ToiletBasicInfo from '@/components/Home/ToiletBasicInfo';
import ToiletMarker from '@/components/Home/ToiletMarker';
import useMapInfo from '@/hooks/useMapInfo';
import Search from '@/components/Home/Search';

const Home = () => {
  const mapRef = useRef<kakao.maps.Map>(null);
  const {
    toiletInfoData,
    center,
    zoomLevel,
    setCenter,
    setZoomLevel,
    getToiletInfoData,
  } = useMapInfo();
  const [bound, setBound] = useState<IBound | null>(null);

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
      <Map
        id="map"
        center={{
          lat: center.latitude as number,
          lng: center.longitude as number,
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
        <MyLocation />
        {toiletInfoData.map((item) => (
          <ToiletMarker key={item.id} info={item} />
        ))}
      </Map>
      <Search />
      <CurrentLocationButton />
      <ToiletBasicInfo />
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
