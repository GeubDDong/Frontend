import { TFilterKey } from '@/types';
import { create } from 'zustand';

interface IUseFilterStore {
  filterKeys: TFilterKey[];
  appendFilterKey: (key: TFilterKey) => void;
  removeFilterKey: (key: TFilterKey) => void;
  resetFilterKey: () => void;
}

const useFilterStore = create<IUseFilterStore>((set) => ({
  filterKeys: [],
  appendFilterKey: (key) =>
    set((state) => ({ filterKeys: [...state.filterKeys, key] })),
  removeFilterKey: (key) =>
    set((state) => ({
      filterKeys: state.filterKeys.filter((k) => k !== key),
    })),
  resetFilterKey: () => set({ filterKeys: [] }),
}));

export default useFilterStore;
