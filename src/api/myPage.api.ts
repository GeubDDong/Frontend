import requestHandler from './requestHandler';
import { IMyPageResponse } from './scheme';

export const fetchMypageInfo = async () => {
  return requestHandler<IMyPageResponse>('get', '/mypage');
};
