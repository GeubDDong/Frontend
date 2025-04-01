import { Theme } from '@/style/Theme';
import styled from 'styled-components';
import CommentItem from './CommentItem';
import { useRef } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useCurrentToiletInfo } from '@/hooks/useCurrentToiletInfo';
import { useComments } from '@/hooks/useComments';

const Comments = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { isLogin } = useAuth();
  const { toiletId } = useCurrentToiletInfo();
  const { comments, addComment, isLoading } = useComments(toiletId);

  const handleClick = async () => {
    if (!inputRef.current) return;

    const inputText = inputRef.current.value.trim();
    if (!inputText) return;

    await addComment(inputText);
    inputRef.current.value = '';
  };

  return (
    <CommentsStyle>
      <div className="title">{`댓글 ${comments.length}`}</div>
      <div className="input">
        <input
          ref={inputRef}
          type="text"
          disabled={!isLogin}
          placeholder={
            isLogin
              ? '화장실에 대한 정보와 후기를 자유롭게 남겨주세요!'
              : '댓글 등록은 로그인이 필요한 기능입니다.'
          }
        />
        <button onClick={handleClick} disabled={!isLogin}>
          등록
        </button>
      </div>
      <div className="comments">
        {isLoading ? (
          // TODO: 댓글 로딩중 처리
          <p>댓글 불러오는 중...</p>
        ) : (
          comments.map((item) => <CommentItem key={item.id} item={item} />)
        )}
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
    color: ${Theme.colors.buttonText};
    background-color: ${Theme.colors.primary};
    border: none;
    border-radius: 8px;
    white-space: nowrap;
    cursor: pointer;

    &:disabled {
      background-color: #ccc;
      cursor: default;
      opacity: 0.6;
    }
  }

  input {
    width: 90%;
    height: 30px;
    border: 1px solid #afb1b6;
    border-radius: 8px;
    padding: 0 10px;
    font-size: ${Theme.fontSize.sm};

    &:disabled {
      background-color: #f0f0f0;
      opacity: 0.6;
    }
  }

  .comments {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 10px;
  }
`;

export default Comments;
