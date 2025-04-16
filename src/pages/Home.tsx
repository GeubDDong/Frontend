import { useEffect, useRef, useState } from 'react';
import { Map, MarkerClusterer } from 'react-kakao-maps-sdk';
import CurrentLocationButton from '@/components/Home/CurrentLocationButton';
import { IBound } from '@/types';
import styled from 'styled-components';
import MyLocation from '@/components/Home/MyLocation';
import ToiletInfo from '@/components/Home/ToiletInfo';
import ToiletMarker from '@/components/Home/ToiletMarker';
import useMapInfo from '@/hooks/useMapInfo';
import BottomSheet from '@/components/Common/BottomSheet';
import useSelectedToiletInfo from '@/hooks/useSelectedToiletInfo';
import Search from '@/components/Home/Search';
import {
  CLUSTERER_ZOOM_LEVEL,
  MAX_ZOOM_LEVEL,
  MIN_ZOOM_LEVEL,
} from '@/constants/initialMapInfo';

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
  const { setSelectedToiletInfo, selectedToiletInfo } = useSelectedToiletInfo();
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

  useEffect(() => {
    if (zoomLevel >= CLUSTERER_ZOOM_LEVEL) setSelectedToiletInfo(null);
  });

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

  const onClusterclick = (
    _target: kakao.maps.MarkerClusterer,
    cluster: kakao.maps.Cluster,
  ) => {
    const map = mapRef.current;
    map!.setLevel(zoomLevel - 1, { anchor: cluster.getCenter() });
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
        minLevel={MIN_ZOOM_LEVEL}
        maxLevel={MAX_ZOOM_LEVEL}
      >
        <MyLocation />
        <MarkerClusterer
          averageCenter={true}
          minLevel={CLUSTERER_ZOOM_LEVEL}
          disableClickZoom={true}
          onClusterclick={onClusterclick}
        >
          {toiletInfoData.map((item) => (
            <ToiletMarker key={item.id} info={item} />
          ))}
        </MarkerClusterer>
      </Map>
      <CurrentLocationButton />
      <Search />
      <BottomSheet isOpen={!!selectedToiletInfo}>
        <ToiletInfo />
      </BottomSheet>
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
