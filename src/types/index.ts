export interface ILocation {
  latitude: number;
  longitude: number;
}

export type TAvailable = 'Y' | 'N';

export interface IToiletInfo {
  id: number;
  name: string;
  location: ILocation;
  street_address: string;
  lot_address: string;
  open_hours: string;
}

export interface IUserProfile {
  nickname: string;
}
