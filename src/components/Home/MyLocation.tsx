import { MapMarker } from 'react-kakao-maps-sdk';
import dotDuotone from '@/assets/dotDuotone.svg';
import useMapInfo from '@/hooks/useMapInfo';

const MyLocation = () => {
  const { currentLocation } = useMapInfo();
  return (
    <MapMarker
      image={{
        src: dotDuotone,
        size: { width: 80, height: 80 },
      }}
      position={{
        lat: currentLocation.latitude,
        lng: currentLocation.longitude,
      }}
    />
  );
};

export default MyLocation;
