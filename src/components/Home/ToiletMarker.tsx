import { MapMarker } from 'react-kakao-maps-sdk';
import locationPin_liked from '@/assets/locationPin_liked.svg';
import locationPin_normal from '@/assets/locationPin_normal.svg';

interface IToiletMarkerProps {
  id: number;
  latitude: number;
  longitude: number;
  isLiked: boolean;
  isSelected: boolean;
  onSelectedChange: React.Dispatch<React.SetStateAction<number | null>>;
}

const ToiletMarker = ({
  id,
  latitude,
  longitude,
  isLiked,
  isSelected,
  onSelectedChange,
}: IToiletMarkerProps) => {
  return (
    <MapMarker
      image={{
        src: isLiked ? locationPin_liked : locationPin_normal,
        size: isSelected
          ? { width: 40, height: 40 }
          : { width: 30, height: 30 },
      }}
      position={{ lat: latitude, lng: longitude }}
      onClick={() => onSelectedChange(id)}
    />
  );
};

export default ToiletMarker;
