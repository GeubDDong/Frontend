import { useEffect, useState } from 'react';
import {
  addComment,
  fetchComments,
  removeComment,
  updateComment,
} from '@/api/detail.api';
import CommentModel, { ICommentModel } from '@/models/comment.model';

const useComments = (toiletId: number | undefined) => {
  const [comments, setComments] = useState<ICommentModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadComments = async () => {
    if (!toiletId) return;

    setIsLoading(true);
    try {
      const res = await fetchComments(toiletId);
      if ('comments' in res) {
        setComments(new CommentModel(res).comments);
      }
    } catch (error) {
      // TODO: 에러처리
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddComment = async (comment: string) => {
    if (!toiletId) return;

    try {
      await addComment(toiletId, { comment });
      await loadComments();
    } catch (error) {
      // TODO: 에러 처리
      console.log(error);
    }
  };

  const handleUpdateComment = async (id: number, comment: string) => {
    if (!toiletId) return;

    try {
      await updateComment(toiletId, { id, comment });
      await loadComments();
    } catch (error) {
      // TODO: 에러 처리
      console.log(error);
    }
  };

  const handleRemoveComment = async (id: number) => {
    if (!toiletId) return;

    try {
      await removeComment(toiletId, id);
      setComments((prev) => prev.filter((comment) => comment.id !== id));
    } catch (error) {
      // TODO: 에러 처리
      console.log(error);
    }
  };

  useEffect(() => {
    loadComments();
  }, []);

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
