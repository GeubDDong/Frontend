import { IUserInfo, TLoginProvider } from '@/types';
import requestHandler from '@/api/requestHandler';
import { IAuthLoginResponse } from './scheme';

export const login = async (provider: TLoginProvider, code: string) => {
  return requestHandler<IAuthLoginResponse>('post', `/auth/login/${provider}`, {
    code,
  });
};

export const setNickname = async (data: Pick<IUserInfo, 'nickname'>) => {
  return requestHandler('post', '/auth/nickname', data);
};

export const logout = async () => {
  return requestHandler('post', 'auth/logout');
};

export const refreshToken = async () => {
  return requestHandler('post', '/auth/refresh');
};
