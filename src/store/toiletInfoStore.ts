import MapMarkersModel from '@/models/mapMarkerInfo.model';
import { create } from 'zustand';

interface IUseToiletInfoStore {
  info: MapMarkersModel | null;
  setInfo: (info: MapMarkersModel | null) => void;
}

const useToiletInfoStore = create<IUseToiletInfoStore>((set) => ({
  info: null,
  setInfo: (info) => {
    set({ info });
  },
}));

export default useToiletInfoStore;
