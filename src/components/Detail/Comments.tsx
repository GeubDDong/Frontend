import { Theme } from '@/style/Theme';
import styled from 'styled-components';
import CommentItem from './CommentItem';
import { useEffect, useRef, useState } from 'react';
import { ICommentItem } from '@/models/detail.model';
import { addComment, fetchComments } from '@/api/detail.api';
import { useAuth } from '@/hooks/useAuth';
import { useCurrentToiletInfo } from '@/hooks/useCurrentToiletInfo';

const Comments = () => {
  const [comments, setComments] = useState<ICommentItem[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { isLogin } = useAuth();
  const { toiletId } = useCurrentToiletInfo();

  const handleClick = async () => {
    if (!toiletId || !inputRef.current?.value.trim()) return;

    const newCommentText = inputRef.current.value.trim();

    try {
      await addComment(toiletId, { comment: newCommentText });

      const res = await fetchComments(toiletId);
      if ('comments' in res) {
        setComments(res.comments.reverse());
      }

      inputRef.current.value = '';
    } catch (error) {
      console.error('댓글 등록 실패:', error);
    }
  };

  useEffect(() => {
    if (!toiletId) return;

    fetchComments(toiletId).then((res) => {
      if ('comments' in res) {
        setComments(res.comments.reverse());
      } else {
        setComments([]);
      }
    });
  }, []);

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
        {comments.map((item) => (
          <CommentItem key={item.id} item={item} setComments={setComments} />
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
