import { Theme } from '@/style/Theme';
import styled from 'styled-components';
import { useState } from 'react';
import { IoPersonCircle } from 'react-icons/io5';
import { ICommentItem } from '@/models/detail.model';
import { formatDateToString } from '@/utils/dateUtil';
import { fetchComments, removeComment, updateComment } from '@/api/detail.api';
import { useCurrentToiletInfo } from '@/hooks/useCurrentToiletInfo';

interface CommentItemProps {
  item: ICommentItem;
  setComments: React.Dispatch<React.SetStateAction<ICommentItem[]>>;
}

const CommentItem = ({ item, setComments }: CommentItemProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState('');
  const { toiletId } = useCurrentToiletInfo();

  const handleClickEdit = async () => {
    setEdit(!edit);
    setEditText(item.comment);
  };

  const handleClickDelete = async () => {
    if (!toiletId) return;

    if (edit) {
      try {
        await updateComment(toiletId, { id: item.id, comment: editText });

        const res = await fetchComments(toiletId);
        if ('comments' in res) {
          setComments(res.comments.reverse());
        }

        setEdit(false);
      } catch (error) {
        console.error('댓글 수정 실패:', error);
      }
    } else {
      if (!toiletId) return;

      try {
        await removeComment(toiletId, item.id);

        setComments((prevComments) =>
          prevComments.filter((comment) => comment.id !== item.id),
        );
      } catch (error) {
        console.error('댓글 삭제 실패:', error);
      }
    }
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
              <button style={{ cursor: 'pointer' }} onClick={handleClickEdit}>
                {edit ? '취소' : '수정'}
              </button>
              <button style={{ cursor: 'pointer' }} onClick={handleClickDelete}>
                {edit ? '확인' : '삭제'}
              </button>
            </div>
          )}
        </div>
        {edit ? (
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
