import requestHandler from '@/api/requestHandler';
import { ICommentItem } from '@/models/comment.model';
import { IToiletDetailInfo } from '@/models/detail.model';
import { useAuthStore } from '@/store/authStore';
import { ILike, IUserProfile } from '@/types';

export const fetchDetailInfo = async (id: number) => {
  return requestHandler<IToiletDetailInfo>('get', `/detail/${id}`);
};

export interface CommentsResponse {
  comments: ICommentItem[];
}

export interface NoCommentsResponse {
  message: string;
}

export const fetchComments = async (id: number) => {
  const url = useAuthStore.getState().user ? '' : '/public';

  return requestHandler<CommentsResponse | NoCommentsResponse>(
    'get',
    `/comments/${id}${url}`,
  );
};

export const addComment = async (
  id: number,
  data: Pick<ICommentItem, 'comment'>,
) => {
  return requestHandler('post', `/comments/${id}`, data);
};

export const updateComment = async (
  id: number,
  comment: Pick<ICommentItem, 'id' | 'comment'>,
) => {
  return requestHandler('put', `/comments/${id}`, comment);
};

export const removeComment = async (toiletId: number, commentId: number) => {
  return requestHandler('delete', `/comments/${toiletId}/${commentId}`);
};

export const fetchLike = async (id: number) => {
  const url = useAuthStore.getState().user ? '' : '/public';

  return requestHandler<ILike>('get', `/likes/${id}${url}`);
};

export const addLike = async (
  id: number,
  userEmail: Pick<IUserProfile, 'user_email'>,
) => {
  return requestHandler('post', `/likes/${id}`, userEmail);
};

export const removeLike = async (
  id: number,
  userEmail: Pick<IUserProfile, 'user_email'>,
) => {
  return requestHandler('delete', `/likes/${id}`, userEmail);
};
