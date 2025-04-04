import { MapMarker } from 'react-kakao-maps-sdk';
import dotDuotone from '@/assets/dotDuotone.svg';
import useMapInfo from '@/hooks/useMapInfo';

const MyLocation = () => {
  const { currentLocation, errorCode } = useMapInfo();
  if (errorCode) return <></>;
  if (currentLocation.latitude === null || currentLocation.longitude === null)
    return <></>;
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
