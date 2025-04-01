import { Theme } from '@/style/Theme';
import styled from 'styled-components';
import { useState } from 'react';
import { IoPersonCircle } from 'react-icons/io5';
import { ICommentItem } from '@/models/comment.model';
import { formatDateToString } from '@/utils/dateUtil';
import { useCurrentToiletInfo } from '@/hooks/useCurrentToiletInfo';
import { useComments } from '@/hooks/useComments';

interface CommentItemProps {
  item: ICommentItem;
}

const CommentItem = ({ item }: CommentItemProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState('');
  const { toiletId } = useCurrentToiletInfo();
  const { updateComment, removeComment } = useComments(toiletId);

  const handleClickToggleEdit = () => {
    setIsEdit((prev) => !prev);
    setEditText(item.comment);
  };

  return (
    <CommentItemStyle>
      <div className="profile">
        <IoPersonCircle size="3rem" style={{ color: Theme.colors.secondary }} />
      </div>
      <div className="content">
        <div className="top">
          <div className="nickname">{item.nickname}</div>
          <div className="date">{formatDateToString(item.updated_at)}</div>
          {item.isMine && (
            <div className="buttons">
              {isEdit ? (
                <>
                  <button onClick={handleClickToggleEdit}>취소</button>
                  <button onClick={() => updateComment(item.id, editText)}>
                    확인
                  </button>
                </>
              ) : (
                <>
                  <button onClick={handleClickToggleEdit}>수정</button>
                  <button onClick={() => removeComment(item.id)}>삭제</button>
                </>
              )}
            </div>
          )}
        </div>
        {isEdit ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <div className="comment">{item.comment}</div>
        )}
      </div>
    </CommentItemStyle>
  );
};

const CommentItemStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  .content {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
  }

  .top {
    display: flex;
    gap: 5px;
    align-items: center;
    position: relative;
  }

  .buttons {
    display: flex;
    gap: 10px;
    position: absolute;
    right: 10px;
    top: -5px;
  }

  .buttons button {
    border: none;
    background-color: transparent;
    font-size: ${Theme.fontSize.xs};
    color: ${Theme.colors.subText};
    cursor: pointer;
  }

  .date {
    font-size: ${Theme.fontSize.xs};
    color: ${Theme.colors.subText};
  }

  .nickname {
    font-size: ${Theme.fontSize.md};
    color: ${Theme.colors.mainText};
    font-weight: bold;
  }

  .comment {
    font-size: ${Theme.fontSize.md};
    color: ${Theme.colors.mainText};
    overflow-wrap: break-word;
    word-break: break-word;
  }
`;
export default CommentItem;
