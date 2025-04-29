import { IToiletDetailModel } from '@/models/detail.model';
import MapMarkersModel from '@/models/mapMarkerInfo.model';
import { create } from 'zustand';

interface IUseToiletInfoStore {
  info: MapMarkersModel | null;
  detailInfo: IToiletDetailModel | null;
  setInfo: (info: MapMarkersModel | null) => void;
  setDetailInfo: (detailInfo: IToiletDetailModel | null) => void;
}

const useToiletInfoStore = create<IUseToiletInfoStore>((set) => ({
  info: null,
  detailInfo: null,
  setInfo: (info) => {
    set({ info });
  },
  setDetailInfo: (detailInfo) => {
    set({ detailInfo });
  },
}));

export default useToiletInfoStore;
