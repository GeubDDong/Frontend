import { MapMarker } from 'react-kakao-maps-sdk';
import dotDuotone from '@/assets/dotDuotone.svg';
import useLocationStore from '@/store/locationStore';

const MyLocation = () => {
  const location = useLocationStore.getState().location;
  return (
    <MapMarker
      image={{
        src: dotDuotone,
        size: { width: 80, height: 80 },
      }}
      position={{ lat: location.latitude, lng: location.longitude }}
    />
  );
};

export default MyLocation;
