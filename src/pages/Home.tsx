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
import Search from '@/components/Home/Search';
import {
  CLUSTERER_ZOOM_LEVEL,
  MAX_ZOOM_LEVEL,
  MIN_ZOOM_LEVEL,
} from '@/constants/initialMapInfo';
import useSelectedInfo from '@/hooks/useSelectedInfo';
import InfoWindow from '@/components/Home/InfoWindow';

const Home = () => {
  const mapRef = useRef<kakao.maps.Map | null>(null);
  const {
    toiletInfoData,
    center,
    zoomLevel,
    setCenter,
    setZoomLevel,
    getToiletInfoData,
  } = useMapInfo();
  const {
    isInfoOpened,
    selectedToilet,
    setSelectedToilet,
    setSelectedMarker,
    setIsInfoOpened,
  } = useSelectedInfo();
  const [bound, setBound] = useState<IBound | null>(null);

  const getBound = (map: kakao.maps.Map) => {
    const top = map.getBounds().getNorthEast().getLat();
    const right = map.getBounds().getNorthEast().getLng();
    const bottom = map.getBounds().getSouthWest().getLat();
    const left = map.getBounds().getSouthWest().getLng();
    setBound({ top, left, bottom, right });
  };

  useEffect(() => {
    if (!mapRef.current) return;
    getBound(mapRef.current);
  }, [center.latitude, center.longitude, zoomLevel]);

  useEffect(() => {
    if (bound === null) return;
    getToiletInfoData(bound);
  }, [bound?.bottom, bound?.left, bound?.right, bound?.top]);

  useEffect(() => {
    if (zoomLevel >= CLUSTERER_ZOOM_LEVEL) {
      setSelectedMarker(null);
      setSelectedToilet(null);
    }
    setIsInfoOpened(false);
  }, [zoomLevel]);

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
    if (!map) return;
    map.setLevel(zoomLevel - 1, { anchor: cluster.getCenter() });
  };

  return (
    <HomeStyle>
      <Map
        id="map"
        onCreate={(map) => {
          if (mapRef.current !== map) {
            mapRef.current = map;
            getBound(map);
          }
        }}
        center={{
          lat: center.latitude as number,
          lng: center.longitude as number,
        }}
        style={{
          width: '100%',
          height: '100%',
        }}
        level={zoomLevel}
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
          {toiletInfoData?.mapMarkers.length &&
            toiletInfoData.mapMarkers.map((item) => (
              <ToiletMarker
                key={`${item.markerLatitude},${item.markerLongitude}`}
                info={item}
              />
            ))}
        </MarkerClusterer>
        {isInfoOpened && <InfoWindow />}
      </Map>
      <Search />
      <CurrentLocationButton />
      <BottomSheet isOpen={!!selectedToilet}>
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
