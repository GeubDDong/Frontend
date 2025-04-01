import { useState } from 'react';
import { fetchComments } from '@/api/detail.api';
import { ICommentItem } from '@/models/comment.model';

export const useComments = (toiletId: number | undefined) => {
  const [comments, setComments] = useState<ICommentItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadComments = async () => {
    if (!toiletId) return;

    setIsLoading(true);
    try {
      const res = await fetchComments(toiletId);
      if ('comments' in res) {
        setComments(res.comments.reverse());
      }
    } catch (error) {
      // TODO: 에러처리
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    comments,
    setComments,
    loadComments,
    isLoading,
  };
};
