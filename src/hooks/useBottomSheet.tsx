import useBottomSheetStore from '@/store/bottomSheetStore';

export const useBottonomSheet = () => {
  const isExpanded = useBottomSheetStore((state) => state.isExpanded);
  const setIsExpanded = useBottomSheetStore((state) => state.setIsExpanded);

  return {
    isExpanded,
    setIsExpanded,
  };
};
