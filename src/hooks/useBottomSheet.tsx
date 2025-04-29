import useBottomSheetStore from '@/store/bottomSheetStore';

const useBottomSheet = () => {
  const isExpanded = useBottomSheetStore((state) => state.isExpanded);
  const setIsExpanded = useBottomSheetStore((state) => state.setIsExpanded);

  return {
    isExpanded,
    setIsExpanded,
  };
};

export default useBottomSheet;
