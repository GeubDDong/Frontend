import requestHandler from '@/api/requestHandler';
import { useAuthStore } from '@/store/authStore';
import {
  ICommentRequest,
  ICommentsResponse,
  ILikeResponse,
  IToiletDetailResponse,
} from './scheme';

export const fetchDetailInfo = async (id: number) => {
  return requestHandler<IToiletDetailResponse>('get', `/detail/${id}`);
};

export interface NoCommentsResponse {
  message: string;
}

export const fetchComments = async (id: number) => {
  const url = useAuthStore.getState().user ? '' : '/public';

  return requestHandler<ICommentsResponse | NoCommentsResponse>(
    'get',
    `/comments/${id}${url}`,
  );
};

export const addComment = async (
  id: number,
  data: Pick<ICommentRequest, 'comment'>,
) => {
  return requestHandler('post', `/comments/${id}`, data);
};

export const updateComment = async (id: number, comment: ICommentRequest) => {
  return requestHandler('put', `/comments/${id}`, comment);
};

export const removeComment = async (toiletId: number, commentId: number) => {
  return requestHandler('delete', `/comments/${toiletId}/${commentId}`);
};

export const fetchLike = async (id: number) => {
  const url = useAuthStore.getState().user ? '' : '/public';

  return requestHandler<ILikeResponse>('get', `/favorites/${id}${url}`);
};

export const addLike = async (id: number) => {
  return requestHandler('post', `/favorites/${id}`);
};

export const removeLike = async (id: number) => {
  return requestHandler('delete', `/favorites/${id}`);
};
