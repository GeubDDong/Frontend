import { IBound, ICoordinate, TFilterKey } from '@/types';
import requestHandler from './requestHandler';
import { IMapMarkers } from './scheme';
import { FILTER_KEY } from '@/constants/filter';

export const fetchToiletInfo = async (
  center: ICoordinate,
  bound: IBound,
  filterKeys: TFilterKey[],
) => {
  let requestUri = `/toilet?cenLat=${center.latitude}&cenLng=${center.longitude}&top=${bound.top}&bottom=${bound.bottom}&left=${bound.left}&right=${bound.right}`;
  filterKeys.forEach((key) => {
    requestUri += `&${FILTER_KEY[key].query}=true`;
  });

  return requestHandler<IMapMarkers>('get', requestUri);
};
