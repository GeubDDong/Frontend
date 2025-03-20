import requestHandler from '@/api/requestHandler';
import { ICommentItem, IToiletDetailInfo } from '@/models/detail.model';
import { IUserProfile } from '@/types';

export const fetchDeatilInfo = async (id: number) => {
  return requestHandler<IToiletDetailInfo>('get', `/detail/${id}`);
};

export interface CommentsResponse {
  comments: ICommentItem[];
}

export interface NoCommentsResponse {
  message: string;
}

export const fetchComments = async (id: number) => {
  return requestHandler<CommentsResponse | NoCommentsResponse>(
    'get',
    `/comments/${id}`,
  );
  // requestHandler('get', `/comments/${id}/public`);
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

export const removeComment = async (
  id: number,
  data: Pick<ICommentItem, 'id'>,
) => {
  return requestHandler('delete', `/comments/${id}`, data);
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
