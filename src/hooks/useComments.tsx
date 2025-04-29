import { useEffect, useState } from 'react';
import {
  addComment,
  fetchComments,
  removeComment,
  updateComment,
} from '@/api/detail.api';
import {
  CommentActionModel,
  CommentModel,
  ICommentActionModel,
  ICommentModel,
} from '@/models/comment.model';
import { IRatingItem } from '@/types';

const useComments = (
  toiletId: number | undefined,
  updateRating: (rating: ICommentActionModel) => void,
) => {
  const [comments, setComments] = useState<ICommentModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadComments = async () => {
    if (!toiletId) return;

    setIsLoading(true);
    try {
      const res = await fetchComments(toiletId);
      if ('comments' in res) {
        setComments(new CommentModel(res).comments);
      } else {
        setComments([]);
      }
    } catch (error) {
      // TODO: 에러처리
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddComment = async (comment: string, ratings: IRatingItem) => {
    if (!toiletId) return;

    try {
      const res = await addComment(toiletId, comment, ratings);
      await loadComments();
      updateRating(new CommentActionModel(res).rating);
    } catch (error) {
      // TODO: 에러 처리
      console.log(error);
    }
  };

  const handleUpdateComment = async (
    id: number,
    comment: string,
    ratings: IRatingItem,
  ) => {
    if (!toiletId) return;

    try {
      const res = await updateComment(toiletId, id, comment, ratings);
      await loadComments();
      updateRating(new CommentActionModel(res).rating);
    } catch (error) {
      // TODO: 에러 처리
      console.log(error);
    }
  };

  const handleRemoveComment = async (id: number) => {
    if (!toiletId) return;

    try {
      const res = await removeComment(toiletId, id);
      setComments((prev) => prev.filter((comment) => comment.id !== id));
      updateRating(new CommentActionModel(res).rating);
    } catch (error) {
      // TODO: 에러 처리
      console.log(error);
    }
  };

  useEffect(() => {
    loadComments();
  }, [toiletId]);

  return {
    comments,
    setComments,
    loadComments,
    addComment: handleAddComment,
    updateComment: handleUpdateComment,
    removeComment: handleRemoveComment,
    isLoading,
  };
};

export default useComments;
