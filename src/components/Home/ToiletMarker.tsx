import { MapMarker } from 'react-kakao-maps-sdk';
import { IToiletBasicInfo } from '@/models/toiletBasicInfo.model';
import useSelectedToiletInfo from '@/hooks/useSelectedToiletInfo';

interface IToiletMarkerProps {
  info: IToiletBasicInfo;
}

const ToiletMarker = ({ info }: IToiletMarkerProps) => {
  // const selectedToiletDataInfo = useToiletInfoStore((state) => state.info);
  const { setSelectedToiletInfo } = useSelectedToiletInfo();
  return (
    <MapMarker
      // image={{
      //   src: info.liked.like ? locationPin_liked : locationPin_normal,
      //   size:
      //     selectedToiletDataInfo && selectedToiletDataInfo.id === info.id
      //       ? { width: 40, height: 40 }
      //       : { width: 25, height: 25 },
      // }}
      position={{ lat: info.latitude, lng: info.longitude }}
      onClick={() => setSelectedToiletInfo(info)}
    />
  );
};

export default ToiletMarker;
