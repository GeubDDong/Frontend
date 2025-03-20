import useToiletInfoStore from '@/store/toiletInfoStore';

export const useCurrentToiletInfo = () => {
  let toiletId = 0;

  const info = useToiletInfoStore((state) => state.info);

  if (info) {
    toiletId = info.id;
  }

  return { toiletId };
};
