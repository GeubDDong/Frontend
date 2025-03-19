import { IUserProfile } from '@/types';
import requestHandler from '@/api/requestHandler';

export const setNickname = async (data: Pick<IUserProfile, 'nickname'>) => {
  return requestHandler('post', '/auth/nickname', data);
};
