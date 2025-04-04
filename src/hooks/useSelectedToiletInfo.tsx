import useToiletInfoStore from '@/store/toiletInfoStore';

const useSelectedToiletInfo = () => {
  const selectedToiletInfo = useToiletInfoStore((state) => state.info);
  const setSelectedToiletInfo = useToiletInfoStore((state) => state.setInfo);

  return { selectedToiletInfo, setSelectedToiletInfo };
};

export default useSelectedToiletInfo;
