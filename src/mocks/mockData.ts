import { ICommentItem } from '@/components/Detail/Comments';
import { IToiletDetailInfo } from '@/components/Detail/DetailView';
import { IToiletBasicInfo } from '@/components/Main/ToiletBasicInfo';
import { IToiletInfo } from '@/types';

export const mockToiletInfo: IToiletInfo = {
  id: 1,
  name: '만석공원',
  location: {
    latitude: 37.5665,
    longitude: 126.978,
  },
  street_address: '수원시 장안구 정조로1087(송죽동, 만석공원)',
  lot_address: '지번 주소',
  open_hours: '09:00 - 22:00',
};

export const mockToiletBasicInfo: IToiletBasicInfo = {
  id: 1,
  name: '만석공원',
  location: {
    latitude: 37.5665,
    longitude: 126.978,
  },
  street_address: '수원시 장안구 정조로1087(송죽동, 만석공원)',
  lot_address: '지번 주소',
  open_hours: '09:00 - 22:00',
  liked: true,
  nearest: true,
};

export const mockToiletDetail: IToiletDetailInfo = {
  id: 1,
  name: '만석공원',
  street_address: '수원시 장안구 정조로1087(송죽동, 만석공원)',
  lot_address: '',
  disabled_male: 'Y',
  kids_toilet_male: 'N',
  disabled_female: 'Y',
  kids_toilet_female: 'N',
  management_agency: '장안구 공원녹지과',
  phone_number: '010-1234-5678',
  open_hours: '09:00 - 22:00',
  location: {
    latitude: 37.5665,
    longitude: 126.978,
  },
  emergency_bell: 'N',
  cctv: 'Y',
  diaper_changing_station: 'N',
  data_reference_date: '2025-03-05',
};

export const mockComment: ICommentItem = {
  id: 1,
  user_email: 'user123@naver.com',
  nickname: '철수짱',
  comment: '깨끗한 화장실이에요!',
  updated_at: '2025-03-06T12:34:56Z',
};

export const mockComments: ICommentItem[] = [
  {
    id: 1,
    user_email: 'user123@naver.com',
    nickname: '철수짱',
    comment: '깨끗한 화장실이에요!',
    updated_at: '2025-03-06T12:34:56Z',
  },
  // {
  //   id: 2,
  //   user_email: 'user123@naver.com',
  //   nickname: '철수짱',
  //   comment: '깨끗한 화장실이에요!',
  //   updated_at: '2025-03-06T12:34:56Z',
  // },
  // {
  //   id: 3,
  //   user_email: 'user123@naver.com',
  //   nickname: '철수짱',
  //   comment: '깨끗한 화장실이에요!',
  //   updated_at: '2025-03-06T12:34:56Z',
  // },
  // {
  //   id: 4,
  //   user_email: 'user123@naver.com',
  //   nickname: '철수짱',
  //   comment: '깨끗한 화장실이에요!',
  //   updated_at: '2025-03-06T12:34:56Z',
  // },
];
