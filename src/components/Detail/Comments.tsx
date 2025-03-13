import { Theme } from '@/style/Theme';
import styled from 'styled-components';
import CommentItem from './CommentItem';
import { useEffect, useState } from 'react';
import { mockComments } from '@/mocks/mockData';

export interface ICommentItem {
  id: number;
  user_email: string;
  nickname: string;
  comment: string;
  updated_at: string;
}

const Comments = () => {
  const [comments, setComments] = useState<ICommentItem[]>([]);
  // TODO: api

  useEffect(() => {
    setTimeout(() => {
      setComments(mockComments);
    }, 500);
  }, []);

  return (
    <CommentsStyle>
      <div className="title">{`댓글 ${comments.length}`}</div>
      <div className="input">
        <input
          type="text"
          placeholder="화장실에 대한 정보와 후기를 자유롭게 남겨주세요!"
        />
        <button style={{ cursor: 'pointer' }}>등록</button>
      </div>
      <div className="comments">
        {comments.map((item) => (
          <CommentItem key={item.id} item={item} />
        ))}
      </div>
    </CommentsStyle>
  );
};

const CommentsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .title {
    font-size: ${Theme.fontSize.md};
    color: ${Theme.colors.mainText};
    font-weight: bold;
  }

  .input {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
  }

  .input button {
    font-size: ${Theme.fontSize.sm};
    padding: 10px;
    color: ${Theme.colors.mainText};
    background-color: ${Theme.colors.primary};
    border: none;
    border-radius: 8px;
    white-space: nowrap;
  }

  input {
    width: 90%;
    height: 30px;
    border: 1px solid #afb1b6;
    border-radius: 8px;
    padding: 0 10px;
    font-size: ${Theme.fontSize.sm};
  }

  .comments {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 10px;
  }
`;

export default Comments;
