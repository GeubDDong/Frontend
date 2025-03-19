import { IUserProfile } from '@/types';
import requestHandler from '@/api/requestHandler';

export const setNickname = async (data: IUserProfile) => {
  return requestHandler('post', '/auth/nickname', data);
};
