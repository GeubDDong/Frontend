import { IToiletInfo, TAvailable } from '@/types';

export interface IToiletDetailInfo extends IToiletInfo {
  disabled_male: TAvailable;
  kids_toilet_male: TAvailable;
  disabled_female: TAvailable;
  kids_toilet_female: TAvailable;
  management_agency: string;
  phone_number: string;
  emergency_bell: TAvailable;
  cctv: TAvailable;
  diaper_changing_station: TAvailable;
  data_reference_date: Date;
}

export interface ICommentItem {
  id: number;
  user_email: string;
  nickname: string;
  comment: string;
  updated_at: Date;
}
