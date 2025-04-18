import { IMapMarkers } from '@/api/scheme';

export interface IMapMarkersModelToiletItem {
  id: number;
  name: string;
  isLiked: boolean;
}

export interface IMapMarkersModelItem {
  markerLatitude: number;
  markerLongitude: number;
  toilets: IMapMarkersModelToiletItem[];
}

class MapMarkersModel {
  #mapMarkers: IMapMarkersModelItem[];

  constructor(mapMarkersData: IMapMarkers) {
    const mapMarkers = mapMarkersData.groups;

    this.#mapMarkers = mapMarkers.map((markerData) => ({
      markerLatitude: markerData.marker_latitude,
      markerLongitude: markerData.marker_longitude,
      toilets: markerData.toilets.map((toiletData) => ({
        id: toiletData.id,
        name: toiletData.name,
        isLiked: toiletData.is_liked,
      })),
    }));
  }

  get mapMarkers() {
    return this.#mapMarkers;
  }
}

export default MapMarkersModel;
