import { useEffect, useState } from 'react';
import { addLike, fetchLike, removeLike } from '@/api/detail.api';

const useLikeStatus = (toiletId: number | undefined) => {
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

  const toggleLike = async () => {
    if (!toiletId) return;

    const prevLike = isLike;
    try {
      setIsLike(!isLike);
      if (isLike) {
        await removeLike(toiletId, { user_email: 'user_email' });
      } else {
        await addLike(toiletId, { user_email: 'user_email' });
      }
    } catch (error) {
      setIsLike(prevLike);
      // TODO: 에러 처리
      console.log(error);
    }
  };

  useEffect(() => {
    loadLikeStatus();
  }, []);

  return {
    isLike,
    setIsLike,
    loadLikeStatus,
    toggleLike,
  };
};

export default useLikeStatus;
