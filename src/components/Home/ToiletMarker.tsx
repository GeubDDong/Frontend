import { MapMarker } from 'react-kakao-maps-sdk';
import locationPin_liked from '@/assets/locationPin_liked.svg';
import locationPin_normal from '@/assets/locationPin_normal.svg';
import locationPin_selected from '@/assets/locationPin_selected.svg';
import useSelectedInfo from '@/hooks/useSelectedInfo';
import { IMapMarkersModelItem } from '@/models/mapMarkerInfo.model';

interface IToiletMarkerProps {
  info: IMapMarkersModelItem;
}

const ToiletMarker = ({ info }: IToiletMarkerProps) => {
  const {
    selectedToilet,
    setSelectedToilet,
    setIsInfoOpened,
    setSelectedMarker,
  } = useSelectedInfo();

  let src = locationPin_normal;
  let size = 25;

  if (info.toilets.some((item) => item.isLiked)) {
    src = locationPin_liked;
  }

  if (
    selectedToilet &&
    info.toilets.some((item) => item.id === selectedToilet.id)
  ) {
    src = locationPin_selected;
    size = 40;
  }

  const handleClick = () => {
    setSelectedMarker(info);
    if (info.toilets.length === 1) {
      setSelectedToilet(info.toilets[0]);
      setIsInfoOpened(false);
    } else {
      setIsInfoOpened(true);
    }
  };

  return (
    <MapMarker
      image={{
        src: src,
        size: { height: size, width: size * 0.714 },
      }}
      position={{ lat: info.markerLatitude, lng: info.markerLongitude }}
      onClick={handleClick}
    />
  );
};

export default ToiletMarker;
