import { create } from 'zustand';
import { IToiletBasicInfo } from '@/components/Home/ToiletBasicInfo';

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
