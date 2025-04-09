import { MapMarker } from 'react-kakao-maps-sdk';
import { IToiletBasicInfo } from '@/models/toiletBasicInfo.model';
import useSelectedToiletInfo from '@/hooks/useSelectedToiletInfo';
import locationPin_liked from '@/assets/locationPin_liked.svg';
import locationPin_normal from '@/assets/locationPin_normal.svg';
import locationPin_selected from '@/assets/locationPin_selected.svg';

interface IToiletMarkerProps {
  info: IToiletBasicInfo;
}

const ToiletMarker = ({ info }: IToiletMarkerProps) => {
  const { selectedToiletInfo, setSelectedToiletInfo } = useSelectedToiletInfo();

  const src =
    selectedToiletInfo && selectedToiletInfo.id === info.id
      ? locationPin_selected
      : info.liked.like
        ? locationPin_liked
        : locationPin_normal;
  const size =
    selectedToiletInfo && selectedToiletInfo.id === info.id ? 40 : 25;

  return (
    <MapMarker
      image={{
        src: src,
        size: { width: size, height: size },
      }}
      position={{ lat: info.latitude, lng: info.longitude }}
      onClick={() => setSelectedToiletInfo(info)}
    />
  );
};

export default ToiletMarker;
