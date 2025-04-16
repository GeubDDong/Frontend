import { IToiletDetailInfo } from '@/models/detail.model';
import { IToiletBasicInfo } from '@/models/toiletBasicInfo.model';
import { http, HttpResponse } from 'msw';

const dummyToiletBasicInfos: IToiletBasicInfo[] = [
  {
    nearest: true,
    open_hours: '24시간 개방',
    id: 1,
    name: '부강꿈뜰근린공원',
    street_address: '세종특별자치시 부강면 태산길 33',
    lot_address: '세종특별자치시 부강면 부강리 101',
    latitude: 36.528533,
    longitude: 127.371124,
    liked: { like: false, count: 0 },
  },
  {
    nearest: false,
    open_hours: '24시간 개방',
    id: 2,
    name: '부강꿈뜰근린공원',
    street_address: '세종특별자치시 부강면 태산길 33',
    lot_address: '세종특별자치시 부강면 부강리 101',
    latitude: 36.528533,
    longitude: 127.371124,
    liked: { like: false, count: 0 },
  },
];

const dummyToiletInfos: IToiletDetailInfo = {
  id: 1,
  name: '부강꿈뜰근린공원',
  street_address: '세종특별자치시 부강면 태산길 33',
  lot_address: '세종특별자치시 부강면 부강리 101',
  latitude: 36.528533,
  longitude: 127.371124,
  open_hour: '09:00~18:00',
  avg_cleanliness: 3.5,
  avg_amenities: 3.5,
  avg_accessibility: 5.0,
  avg_rating: 4.0,
  management: {
    id: 1,
    name: '세종특별자치시 부강면',
    phone_number: '044-301-5431',
  },
  facility: {
    male_toilet: 1,
    male_urinal: 1,
    disabled_male_toilet: 1,
    disabled_male_urinal: 1,
    kids_toilet_male: 0,
    female_toilet: 1,
    disabled_female_toilet: 1,
    kids_toilet_female: 1,
    emergency_bell: 'Y',
    cctv: 'N',
    diaper_changing_station: 'N',
    reference_date: new Date(),
  },
};

export const handlers = [
  http.get(new RegExp('/detail/.*'), () => {
    return HttpResponse.json(dummyToiletInfos);
  }),
  http.get(new RegExp('/toilet.*'), () => {
    return HttpResponse.json(dummyToiletBasicInfos);
  }),
];
