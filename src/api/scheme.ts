// 지도 - 마커
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

// 로그인 응답
export interface IAuthLoginResponse {
  isNewUser: boolean;
  user: IUserResponse;
}

export interface IUserResponse {
  email: string;
  nickname: string;
  profile_Image: string;
}

// 좋아요 조회 응답
export interface ILikeResponse {
  like: boolean;
}
