import { FILTER_KEY } from '@/constants/filter';

export interface ICoordinate {
  latitude: number | null;
  longitude: number | null;
}

export interface IUserInfo {
  email: string;
  nickname: string;
  profileImage: string;
}

export interface IBound {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

export type TLoginProvider = 'kakao' | 'google' | 'naver';

export type TFilterKey = keyof typeof FILTER_KEY;

export interface IFilterItem {
  label: string;
  query: string;
}
