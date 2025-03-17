import { create } from 'zustand';
import { IToiletInfo } from '@/types';

interface IUseToiletInfoStore {
  info: IToiletInfo | null;
  setInfo: (info: IToiletInfo) => void;
}

const useToiletInfoStore = create<IUseToiletInfoStore>((set) => ({
  info: null,
  setInfo: (info) => {
    set({ info });
  },
}));

export default useToiletInfoStore;
