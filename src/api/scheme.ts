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
