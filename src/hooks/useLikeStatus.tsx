import { useState } from 'react';
import { fetchLike } from '@/api/detail.api';

export const useLikeStatus = (toiletId: number | undefined) => {
  const [isLike, setIsLike] = useState(false);

  const loadLikeStatus = async () => {
    if (!toiletId) return;

    try {
      const res = await fetchLike(toiletId);
      setIsLike(res.like);
    } catch (error) {
      // TODO: 에러 처리
      console.log(error);
    }
  };

  return {
    isLike,
    setIsLike,
    loadLikeStatus,
  };
};
