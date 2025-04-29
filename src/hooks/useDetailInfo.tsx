import { useState } from 'react';
import { fetchDetailInfo } from '@/api/detail.api';
import DetailModel from '@/models/detail.model';
import useToiletInfoStore from '@/store/toiletInfoStore';

const useDetailInfo = (toiletId: number | undefined) => {
  const { detailInfo, setDetailInfo } = useToiletInfoStore();
  const [isLoading, setIsLoading] = useState(false);

  const loadDetailInfo = async () => {
    if (!toiletId) return;

    setIsLoading(true);
    try {
      const res = await fetchDetailInfo(toiletId);
      setDetailInfo(new DetailModel(res).detailInfo);
    } catch (error) {
      // TODO: 에러 처리
      console.log(error);
      setDetailInfo(null);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    detailInfo,
    setDetailInfo,
    loadDetailInfo,
    isLoading,
  };
};

export default useDetailInfo;
