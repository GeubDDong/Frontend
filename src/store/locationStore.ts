import { create } from 'zustand';
import { INITIAL_LATITUDE, INITIAL_LONGITUDE } from '@/constants/initialCoord';
import { ILocation } from '@/types';

interface IUseLocationStore {
  location: ILocation;
  center: ILocation;
  errorCode: number | null;
  setLocation: (location: ILocation) => void;
  setCenter: (location: ILocation) => void;
  setErrorCode: (errorCode: number | null) => void;
}

const useLocationStore = create<IUseLocationStore>((set) => ({
  location: {
    latitude: INITIAL_LATITUDE,
    longitude: INITIAL_LONGITUDE,
  },
  center: {
    latitude: INITIAL_LATITUDE,
    longitude: INITIAL_LONGITUDE,
  },
  errorCode: null,
  setLocation: (location: ILocation) => {
    set(() => ({ location: location }));
  },
  setCenter: (location: ILocation) => {
    console.log(location);
    set(() => ({ center: location }));
  },
  setErrorCode: (errorCode: number | null) => {
    set(() => ({ errorCode: errorCode }));
  },
}));

export default useLocationStore;
