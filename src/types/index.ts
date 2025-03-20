export interface ILocation {
  latitude: number;
  longitude: number;
}

export type TAvailable = 'Y' | 'N';

export interface IToiletInfo {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  street_address: string;
  lot_address: string;
  open_hour: string;
}

export interface IUserProfile {
  user_email: string;
  nickname: string;
}

export interface ILike {
  like: boolean;
  count: number;
}
