import { Theme } from '@/style/Theme';
import styled from 'styled-components';
import CommentItem from './CommentItem';

const Comments = () => {
  return (
    <CommentsStyle>
      <div className="title">{`댓글 ${4}`}</div>
      <div className="input">
        <input
          type="text"
          placeholder="화장실에 대한 정보와 후기를 자유롭게 남겨주세요!"
        />
        <button style={{ cursor: 'pointer' }}>등록</button>
      </div>
      <div className="comments">
        <CommentItem />
        <CommentItem />
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
    font-size: ${Theme.fontSize.xs};
  }

  .comments {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 10px;
  }
`;

export default Comments;
