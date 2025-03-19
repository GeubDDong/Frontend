import { IUserProfile } from '@/types';
import requestHandler from '@/api/requestHandler';

export const setNickname = async (data: IUserProfile) => {
  const response = await requestHandler('post', '/auth/nickname', data);

  return response.data;
};
