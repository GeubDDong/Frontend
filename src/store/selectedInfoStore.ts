import { IMapMarkersModelItem } from '@/models/mapMarkerInfo.model';
import { create } from 'zustand';

interface IUseToiletInfoStore {
  selectedMarker: IMapMarkersModelItem | null;
  isInfoOpened: boolean;
  selectedToilet: number | null;
  setSelectedMarker: (marker: IMapMarkersModelItem | null) => void;
  setIsInfoOpened: (state: boolean) => void;
  setSelectedToilet: (toilet: number | null) => void;
}

const useSelectedInfoStore = create<IUseToiletInfoStore>((set) => ({
  selectedMarker: null,
  isInfoOpened: false,
  selectedToilet: null,
  setSelectedMarker: (marker) => set({ selectedMarker: marker }),
  setIsInfoOpened: (state) => set({ isInfoOpened: state }),
  setSelectedToilet: (toilet) => set({ selectedToilet: toilet }),
}));

export default useSelectedInfoStore;
