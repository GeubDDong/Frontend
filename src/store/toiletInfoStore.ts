import { IToiletBasicInfo } from '@/models/toiletBasicInfo.model';
import { create } from 'zustand';

interface IUseToiletInfoStore {
  info: IToiletBasicInfo | null;
  setInfo: (info: IToiletBasicInfo) => void;
}

const useToiletInfoStore = create<IUseToiletInfoStore>((set) => ({
  info: null,
  setInfo: (info) => {
    set({ info });
  },
}));

export default useToiletInfoStore;
