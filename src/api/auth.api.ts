import { IUserProfile, TLoginProvider } from '@/types';
import requestHandler from '@/api/requestHandler';

export const login = async (provider: TLoginProvider) => {
  return requestHandler('post', `/auth/${provider}`);
};

export const setNickname = async (data: Pick<IUserProfile, 'nickname'>) => {
  return requestHandler('post', '/auth/nickname', data);
};

export const logout = async () => {
  return requestHandler('post', 'auth/logout');
};

export const refreshToken = async () => {
  return requestHandler<{ accessToken: string }>('post', '/auth/refresh');
};
