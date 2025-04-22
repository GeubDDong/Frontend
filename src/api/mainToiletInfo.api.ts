import { IBound, ICoordinate } from '@/types';
import requestHandler from './requestHandler';
import { IMapMarkers } from './scheme';

export const fetchToiletInfo = async (center: ICoordinate, bound: IBound) => {
  return requestHandler<IMapMarkers>(
    'get',
    `/toilet?cenLat=${center.latitude}&cenLng=${center.longitude}&top=${bound.top}&bottom=${bound.bottom}&left=${bound.left}&right=${bound.right}`,
  );
};
