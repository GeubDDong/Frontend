import { ICommentActionResponse, ICommentsResponse } from '@/api/scheme';
import { IRatingItem } from '@/types';
import { formatDateToString } from '@/utils/dateUtil';

export interface ICommentModel {
  id: number;
  profileImage: string;
  avgRating: number;
  ratings: IRatingItem;
  nickname: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  isMine: boolean;
}

export class CommentModel {
  #comments: ICommentModel[];

  constructor(commentsData: ICommentsResponse) {
    this.#comments = commentsData.comments.reverse().map((item) => ({
      id: item.id,
      profileImage: item.profile_image,
      avgRating: item.avg_rating,
      ratings: {
        cleanliness: item.cleanliness,
        amenities: item.amenities,
        accessibility: item.accessibility,
      },
      nickname: item.nickname,
      content: item.comment,
      createdAt: formatDateToString(item.created_at),
      updatedAt: formatDateToString(item.updated_at),
      isMine: item.isMine,
    }));
  }

  get comments() {
    return this.#comments;
  }
}

export interface ICommentActionModel {
  avgRating: number;
  ratingItems: IRatingItem;
}

export class CommentActionModel {
  #rating: ICommentActionModel;

  constructor(data: ICommentActionResponse) {
    this.#rating = {
      avgRating: data.avg_rating,
      ratingItems: {
        cleanliness: data.avg_cleanliness,
        amenities: data.avg_amenities,
        accessibility: data.avg_accessibility,
      },
    };
  }

  get rating() {
    return this.#rating;
  }
}
