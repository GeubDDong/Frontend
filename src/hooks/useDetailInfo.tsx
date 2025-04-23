import { useState } from 'react';
import { fetchDetailInfo } from '@/api/detail.api';
import DetailModel, { IToiletDetailModel } from '@/models/detail.model';

const useDetailInfo = (toiletId: number | undefined) => {
  const [detailInfo, setDetailInfo] = useState<IToiletDetailModel | null>(null);
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
    loadDetailInfo,
    isLoading,
  };
};

export default useDetailInfo;
