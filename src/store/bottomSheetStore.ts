import { create } from 'zustand';

interface IUseBottonSheetStore {
  isExpanded: boolean;
  setIsExpanded: (state: boolean) => void;
}

const useBottomSheetStore = create<IUseBottonSheetStore>((set) => ({
  isExpanded: false,
  setIsExpanded: (state) => set({ isExpanded: state }),
}));

export default useBottomSheetStore;
