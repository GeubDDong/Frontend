import requestHandler from '@/api/requestHandler';
import { useAuthStore } from '@/store/authStore';
import {
  ICommentRequest,
  ICommentsResponse,
  ILikeResponse,
  IToiletDetailResponse,
} from './scheme';
import { IRatingItem } from '@/types';

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
  toiletId: number,
  comment: string,
  ratings: IRatingItem,
) => {
  return requestHandler<unknown, Omit<ICommentRequest, 'id'>>(
    'post',
    `/comments/${toiletId}`,
    {
      comment,
      rating: {
        cleanliness: ratings.cleanliness,
        amenities: ratings.amenities,
        accessibility: ratings.accessibility,
      },
    },
  );
};

export const updateComment = async (
  toiletId: number,
  commentId: number,
  comment: string,
  ratings: IRatingItem,
) => {
  return requestHandler<unknown, ICommentRequest>(
    'put',
    `/comments/${toiletId}`,
    {
      id: commentId,
      comment,
      rating: {
        cleanliness: ratings.cleanliness,
        amenities: ratings.amenities,
        accessibility: ratings.accessibility,
      },
    },
  );
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
