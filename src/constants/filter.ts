export const FILTER_KEY = {
  ALL: { label: '전체', query: '' },
  MALE: { label: '남성용', query: 'has_male_toilet' },
  FEMALE: { label: '여성용', query: 'has_female_toilet' },
  DISABLED_MALE: { label: '장애인 남성용', query: 'has_disabled_male_toilet' },
  DISABLED_FEMALE: {
    label: '장애인 여성용',
    query: 'has_disabled_female_toilet',
  },
  KIDS: { label: '어린이용', query: 'has_kids_toilet' },
  CCTV: { label: 'CCTV', query: 'has_cctv' },
  EMERGENCY_BELL: { label: '비상벨', query: 'has_emergency_bell' },
  DIAPER_CHANGING_STATION: {
    label: '기저귀 교환대',
    query: 'has_diaper_changing_station',
  },
} as const;
