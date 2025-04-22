import useSelectedInfoStore from '@/store/selectedInfoStore';

const useSelectedInfo = () => {
  const selectedMarker = useSelectedInfoStore((state) => state.selectedMarker);
  const isInfoOpened = useSelectedInfoStore((state) => state.isInfoOpened);
  const selectedToilet = useSelectedInfoStore((state) => state.selectedToilet);
  const setSelectedMarker = useSelectedInfoStore(
    (state) => state.setSelectedMarker,
  );
  const setIsInfoOpened = useSelectedInfoStore(
    (state) => state.setIsInfoOpened,
  );
  const setSelectedToilet = useSelectedInfoStore(
    (state) => state.setSelectedToilet,
  );

  return {
    selectedMarker,
    isInfoOpened,
    selectedToilet,
    setSelectedMarker,
    setIsInfoOpened,
    setSelectedToilet,
  };
};

export default useSelectedInfo;
