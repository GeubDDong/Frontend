import { IToiletInfo, TAvailable } from '@/types';

export interface IToiletDetailInfo extends IToiletInfo {
  avg_cleanliness: number;
  avg_amenities: number;
  avg_accessibility: number;
  avg_rating: number;
  management: IToiletManagement;
  facility: IToiletFacility;
}

export interface IToiletManagement {
  id: number;
  name: string;
  phone_number: string;
}

export interface IToiletFacility {
  male_toilet: number;
  male_urinal: number;
  disabled_male_toilet: number;
  disabled_male_urinal: number;
  kids_toilet_male: number;
  female_toilet: number;
  disabled_female_toilet: number;
  kids_toilet_female: number;
  emergency_bell: TAvailable;
  cctv: TAvailable;
  diaper_changing_station: TAvailable;
  reference_date: Date;
}
