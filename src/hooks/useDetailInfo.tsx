import { useState } from 'react';
import { fetchDetailInfo } from '@/api/detail.api';
import { IToiletDetailInfo } from '@/models/detail.model';

export const useDetailInfo = (toiletId: number | undefined) => {
  const [detailInfo, setDetailInfo] = useState<IToiletDetailInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadDetailInfo = async () => {
    if (!toiletId) return;

    setIsLoading(true);
    try {
      const res = await fetchDetailInfo(toiletId);
      setDetailInfo(res);
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
