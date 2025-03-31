export interface ICommentItem {
  id: number;
  user_email: string;
  nickname: string;
  comment: string;
  updated_at: Date;
  isMine: boolean;
}
