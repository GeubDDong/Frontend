import { create } from 'zustand';

interface IUseBottomSheetStore {
  isExpanded: boolean;
  setIsExpanded: (state: boolean) => void;
}

const useBottomSheetStore = create<IUseBottomSheetStore>((set) => ({
  isExpanded: false,
  setIsExpanded: (state) => set({ isExpanded: state }),
}));

export default useBottomSheetStore;
