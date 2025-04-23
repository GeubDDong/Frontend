import { ILikeResponse } from '@/api/scheme';

class LikeModel {
  #isLiked: boolean;

  constructor(likeData: ILikeResponse) {
    this.#isLiked = likeData.like;
  }

  get isLiked() {
    return this.#isLiked;
  }
}

export default LikeModel;
