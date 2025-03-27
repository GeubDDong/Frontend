import useToiletInfoStore from '@/store/toiletInfoStore';

export const useCurrentToiletInfo = () => {
  const info = useToiletInfoStore((state) => state.info);

  return { toiletId: info?.id };
};
