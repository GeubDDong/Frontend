import {
  IAuthLoginResponse,
  ICommentsResponse,
  ILikeResponse,
  IMapMarkers,
  IToiletDetailResponse,
} from '@/api/scheme';
import { http, HttpResponse } from 'msw';

const dummyToiletBasicInfos: IMapMarkers = {
  groups: [
    {
      marker_latitude: 36.5284,
      marker_longitude: 127.3711,
      toilets: [
        {
          id: 1,
          name: '화장실 1-1 인데 화장실 이름이 길면 어떻게 될 지 궁금하다',
          is_liked: true,
        },
        {
          id: 2,
          name: '화장실 1-2 인데 이건 적당히 두줄정도',
          is_liked: false,
        },
        {
          id: 3,
          name: '화장실 1-3',
          is_liked: false,
        },
      ],
    },
    {
      marker_latitude: 36.5285,
      marker_longitude: 127.3712,
      toilets: [
        {
          id: 4,
          name: '화장실 2-1',
          is_liked: false,
        },
        {
          id: 5,
          name: '화장실 2-2',
          is_liked: false,
        },
        {
          id: 6,
          name: '화장실 2-3',
          is_liked: false,
        },
      ],
    },
    {
      marker_latitude: 36.5288,
      marker_longitude: 127.3715,
      toilets: [
        {
          id: 7,
          name: '화장실 3-1',
          is_liked: false,
        },
      ],
    },
  ],
};

const dummyToiletInfos: IToiletDetailResponse = {
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
    name: '세종특별자치시 부강면',
    phone_number: '044-301-5431',
  },
  facility: {
    male_toilet: 1,
    male_urinal: 1,
    disabled_male_toilet: 0,
    disabled_male_urinal: 0,
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

const dummyToiletInfo2: IToiletDetailResponse = {
  id: 2,
  name: '부강꿈뜰근린공원2',
  street_address: '세종특별자치시 부강면 태산길 33',
  lot_address: '세종특별자치시 부강면 부강리 101',
  latitude: 36.528533,
  longitude: 127.371124,
  open_hour: '09:00~18:00',
  avg_cleanliness: 0,
  avg_amenities: 3.5,
  avg_accessibility: 5,
  avg_rating: 4.0,
  management: {
    name: '세종특별자치시 부강면',
    phone_number: '044-301-5431',
  },
  facility: {
    male_toilet: 1,
    male_urinal: 1,
    disabled_male_toilet: 0,
    disabled_male_urinal: 0,
    kids_toilet_male: 0,
    female_toilet: 1,
    disabled_female_toilet: 1,
    kids_toilet_female: 1,
    emergency_bell: 'Y',
    cctv: 'Y',
    diaper_changing_station: 'Y',
    reference_date: new Date(),
  },
};

const dummyAuthLoginData: IAuthLoginResponse = {
  isNewUser: true,
  user: {
    nickname: 'aa',
    profile_image: 'fff',
    email: 'as@aa',
  },
};

const dummyComments: ICommentsResponse = {
  comments: [
    {
      id: 34,
      profile_image:
        'http://k.kakaocdn.net/dn/isqYD/btsMIDcNbdn/MxiPPNlqtw8XUYYe21wec0/img_110x110.jpg',
      avg_rating: 4,
      cleanliness: 3,
      amenities: 4,
      accessibility: 5,
      nickname: 'SSS2517',
      comment: '그저그래그래ㅐ요 !',
      created_at: new Date(),
      updated_at: new Date(),
      isMine: true,
    },
    {
      id: 32,
      profile_image: '',
      avg_rating: 2,
      cleanliness: 2,
      amenities: 2,
      accessibility: 2,
      nickname: 'SSS2517',
      comment: '테스트 코멘트2 입니다.',
      created_at: new Date(),
      updated_at: new Date(),
      isMine: true,
    },
  ],
};
const dummyLike: ILikeResponse = {
  like: true,
};

export const handlers = [
  http.get(new RegExp('/detail/1'), () => {
    return HttpResponse.json(dummyToiletInfos);
  }),
  http.get(new RegExp('/detail/2'), () => {
    return HttpResponse.json(dummyToiletInfo2);
  }),
  http.get(new RegExp('/toilet.*'), () => {
    return HttpResponse.json(dummyToiletBasicInfos);
  }),
  http.post(new RegExp('/auth/login/.*'), () => {
    return HttpResponse.json(dummyAuthLoginData);
  }),
  http.get(new RegExp('/favorites/.*'), () => {
    return HttpResponse.json(dummyLike);
  }),
  http.get(new RegExp('/comments/.*'), () => {
    return HttpResponse.json(dummyComments);
  }),
  http.delete(new RegExp('/favorites/.*'), () => {
    return HttpResponse.json();
  }),
  http.post(new RegExp('/favorites/.*'), () => {
    return HttpResponse.json();
  }),
];
