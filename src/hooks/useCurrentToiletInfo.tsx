import useToiletInfoStore from '@/store/toiletInfoStore';

export const useCurrentToiletInfo = () => {
  const info = useToiletInfoStore((state) => state.info);
  const setSelectedToiletInfo = useToiletInfoStore((state) => state.setInfo);

  return { toiletId: info?.id, setSelectedToiletInfo };
};
