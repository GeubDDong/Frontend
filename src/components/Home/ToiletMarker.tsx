import { MapMarker } from 'react-kakao-maps-sdk';
import locationPin_liked from '@/assets/locationPin_liked.svg';
import locationPin_normal from '@/assets/locationPin_normal.svg';
import useToiletInfoStore from '@/store/toiletInfoStore';
import { IToiletBasicInfo } from '@/models/toiletBasicInfo.model';

interface IToiletMarkerProps {
  info: IToiletBasicInfo;
}

const ToiletMarker = ({ info }: IToiletMarkerProps) => {
  const selectedToiletDataInfo = useToiletInfoStore((state) => state.info);
  const setSelectedToiletDataInfo = useToiletInfoStore(
    (state) => state.setInfo,
  );
  return (
    <MapMarker
      image={{
        src: info.liked.like ? locationPin_liked : locationPin_normal,
        size:
          selectedToiletDataInfo && selectedToiletDataInfo.id === info.id
            ? { width: 40, height: 40 }
            : { width: 30, height: 30 },
      }}
      position={{ lat: info.latitude, lng: info.longitude }}
      onClick={() => setSelectedToiletDataInfo(info)}
    />
  );
};

export default ToiletMarker;
