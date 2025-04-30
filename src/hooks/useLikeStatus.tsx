import { useEffect, useState } from 'react';
import { addLike, fetchLike, removeLike } from '@/api/detail.api';
import LikeModel from '@/models/like.model';
import { showToast } from '@/utils/toast';

const useLikeStatus = (toiletId: number | undefined) => {
  const [isLike, setIsLike] = useState(false);

  const loadLikeStatus = async () => {
    if (!toiletId) return;

    try {
      const res = await fetchLike(toiletId);
      setIsLike(new LikeModel(res).isLiked);
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
        await removeLike(toiletId);
        showToast('success', '즐겨찾기를 해제했어요.');
      } else {
        await addLike(toiletId);
        showToast('success', '즐겨찾기에 추가했어요.');
      }
    } catch (error) {
      setIsLike(prevLike);
      // TODO: 에러 처리
      console.log(error);
    }
  };

  const handleRemoveLike = async () => {
    if (!toiletId) return;

    try {
      await removeLike(toiletId);
      setIsLike(false);
      showToast('success', '즐겨찾기를 해제했어요.');
    } catch (error) {
      // TODO: 에러 처리
      console.log(error);
    }
  };

  useEffect(() => {
    loadLikeStatus();
  }, [toiletId]);

  return {
    isLike,
    setIsLike,
    loadLikeStatus,
    toggleLike,
    removeLike: handleRemoveLike,
  };
};

export default useLikeStatus;
