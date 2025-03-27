import { IBound, ILocation } from '@/types';
import requestHandler from './requestHandler';
import { IToiletBasicInfo } from '@/models/toiletBasicInfo.model';

export const mainToiletInfo = async (center: ILocation, bound: IBound) => {
  return requestHandler<IToiletBasicInfo[]>(
    'get',
    `/toilet?cenLat=${center.latitude}&cenLng=${center.longitude}&top=${bound.top}&bottom=${bound.bottom}&left=${bound.left}&right=${bound.right}`,
  );
};
