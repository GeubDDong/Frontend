import useSelectedInfo from '@/hooks/useSelectedInfo';
import { IMapMarkersModelItem } from '@/models/mapMarkerInfo.model';
import { CustomMapMarker, MarkerType } from '../Common/CustomMapMarker';

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

  const markerType: MarkerType = (() => {
    if (
      selectedToilet &&
      info.toilets.some((item) => item.id === selectedToilet.id)
    ) {
      return 'selected';
    }
    if (info.toilets.some((item) => item.isLiked)) {
      return 'liked';
    }
    return 'default';
  })();

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
    <CustomMapMarker
      type={markerType}
      position={{ lat: info.markerLatitude, lng: info.markerLongitude }}
      onClick={handleClick}
    />
  );
};

export default ToiletMarker;
