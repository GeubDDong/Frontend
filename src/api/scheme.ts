//#region 지도 - 마커
export interface IMapMarkerToiletItem {
  id: number;
  name: string;
  is_liked: boolean;
}

export interface IMapMarkerItem {
  marker_latitude: number;
  marker_longitude: number;
  toilets: IMapMarkerToiletItem[];
}

export interface IMapMarkers {
  groups: IMapMarkerItem[];
}
//#endregion

//#region 로그인
export interface IAuthLoginResponse {
  isNewUser: boolean;
  user: IUserResponse;
}

export interface IUserResponse {
  email: string;
  nickname: string;
  profile_image: string;
}
//#endregion

//#region 좋아요
export interface ILikeResponse {
  like: boolean;
}
//#endregion

//#region 댓글
export interface ICommentRequest {
  id: number;
  comment: string;
  rating: ICommentRatingRequest;
}

export interface ICommentRatingRequest {
  accessibility: number;
  amenities: number;
  cleanliness: number;
}

export interface ICommentsResponse {
  comments: ICommentItemResponse[];
}

export interface ICommentItemResponse {
  id: number;
  profile_image: string;
  avg_rating: number;
  cleanliness: number;
  amenities: number;
  accessibility: number;
  nickname: string;
  comment: string;
  updated_at: Date;
  created_at: Date;
  isMine: boolean;
}

// 댓글 등록, 수정, 삭제시 응답 스키마
export interface ICommentActionResponse {
  avg_cleanliness: number;
  avg_amenities: number;
  avg_accessibility: number;
  avg_rating: number;
}
//#endregion

//#region  화장실 정보
export interface IToiletDetailResponse {
  id: number;
  name: string;
  street_address: string;
  lot_address: string;
  latitude: number;
  longitude: number;
  avg_cleanliness: number;
  avg_amenities: number;
  avg_accessibility: number;
  open_hour: string;
  avg_rating: number;
  management: IToiletManagementResponse;
  facility: IToiletFacilityResponse;
}

export interface IToiletManagementResponse {
  name: string;
  phone_number: string;
}

export interface IToiletFacilityResponse {
  male_toilet: number;
  male_urinal: number;
  disabled_male_toilet: number;
  disabled_male_urinal: number;
  kids_toilet_male: number;
  female_toilet: number;
  disabled_female_toilet: number;
  kids_toilet_female: number;
  emergency_bell: string;
  cctv: string;
  diaper_changing_station: string;
  reference_date: Date;
}
//#endregion

//#region 마이페이지
export interface IFavoriteResponse {
  id: number;
  name: string;
  street_address: string;
  lot_address: string;
  latitude: number;
  longitude: number;
  avg_cleanliness: number;
  avg_amenities: number;
  avg_accessibility: number;
}

export interface IReviewResponse {
  id: number;
  comment: string;
  avg_cleanliness: number;
  avg_amenities: number;
  avg_accessibility: number;
  created_at: string;
  updated_at: string;
  toilet_id: number;
  toilet_name: string;
  latitude: number;
  longitude: number;
}

export interface IMyPageResponse {
  favorites: IFavoriteResponse[];
  reviews: IReviewResponse[];
}
//#endregion
