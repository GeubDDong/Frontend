import { IBound, ILocation } from '@/types';
import requestHandler from './requestHandler';
import { mainToiletInfoModel } from '@/model/mainToiletInfo.model';

export const mainToiletInfo = async (center: ILocation, bound: IBound) => {
  return requestHandler<mainToiletInfoModel[]>(
    'get',
    `/toilet?cenLat=${center.latitude}&cenLng=${center.longitude}&top=${bound.top}&bottom=${bound.bottom}&left=${bound.left}&right=${bound.right}`,
  );
};
