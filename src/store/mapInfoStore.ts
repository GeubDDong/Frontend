import { create } from 'zustand';
import {
  INITIAL_LATITUDE,
  INITIAL_LONGITUDE,
  INITIAL_ZOOM_LEVEL,
} from '@/constants/initialMapInfo';
import { ICoordinate } from '@/types';

interface IUseMapInfoStore {
  currentLocation: ICoordinate;
  center: ICoordinate;
  zoomLevel: number;
  errorCode: number | null;
  isFetchingCurrentLocation: boolean;
  setCurrentLocation: (coordinate: ICoordinate) => void;
  setCenter: (coordinate: ICoordinate) => void;
  setZoomLevel: (zoomLevel: number) => void;
  setErrorCode: (errorCode: number | null) => void;
  setIsFetchingCurrentLocation: (status: boolean) => void;
}

const useMapInfoStore = create<IUseMapInfoStore>((set) => ({
  currentLocation: {
    latitude: INITIAL_LATITUDE,
    longitude: INITIAL_LONGITUDE,
  },
  center: {
    latitude: INITIAL_LATITUDE,
    longitude: INITIAL_LONGITUDE,
  },
  zoomLevel: INITIAL_ZOOM_LEVEL,
  errorCode: null,
  isFetchingCurrentLocation: false,
  setCurrentLocation: (location: ICoordinate) => {
    set(() => ({ currentLocation: location }));
  },
  setCenter: (location: ICoordinate) => {
    set(() => ({ center: location }));
  },
  setZoomLevel: (zoomLevel: number) => {
    set(() => ({ zoomLevel: zoomLevel }));
  },
  setErrorCode: (errorCode: number | null) => {
    set(() => ({ errorCode: errorCode }));
  },
  setIsFetchingCurrentLocation: (status: boolean) => {
    set(() => ({ isFetchingCurrentLocation: status }));
  },
}));

export default useMapInfoStore;
