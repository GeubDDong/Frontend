import { IUserProfile } from '@/types';
import requestHandler from '@/api/requestHandler';

export const fetchSetNickname = async (data: IUserProfile) => {
  const response = await requestHandler('post', '/auth/nickname', data);

  return response.data;
};
