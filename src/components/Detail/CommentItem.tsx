import { Theme } from '@/style/Theme';
import styled from 'styled-components';
import { ICommentModel } from '@/models/comment.model';
import { overlay } from 'overlay-kit';
import CommentModal from './CommentModal';
import ProfileImage from '../Common/ProfileImage';
import StarRating from '../Common/StarRating';
import { IRatingItem } from '@/types';
import { useState } from 'react';
import ConfirmModal from '../Common/ConfirmModal';

interface CommentItemProps {
  item: ICommentModel;
  updateComment: (
    id: number,
    comment: string,
    ratings: IRatingItem,
  ) => Promise<void>;
  removeComment: (id: number) => Promise<void>;
}

const CommentItem = ({
  item,
  updateComment,
  removeComment,
}: CommentItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickEdit = () => {
    overlay.open(({ isOpen, unmount }) => {
      return (
        <CommentModal
          isOpen={isOpen}
          onExit={unmount}
          initialRatings={item.ratings}
          updateComment={updateComment}
          commentId={item.id}
          comment={item.content}
        />
      );
    });
  };

  const handleClickDelete = () => {
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    removeComment(item.id);
    setIsModalOpen(false);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CommentItemStyle>
        <ProfileImage src={item.profileImage} size={40} />
        <div className="content">
          <div className="info">
            <div className="nickname">{item.nickname}</div>
            <div className="date">{item.createdAt}</div>
            {item.isMine && (
              <div className="buttons">
                <button onClick={handleClickEdit}>수정</button>
                <button onClick={handleClickDelete}>삭제</button>
              </div>
            )}
          </div>
          <div className="star">
            <StarRating value={item.avgRating} size={15} />
          </div>
          <div className="comment">{item.content}</div>
        </div>
      </CommentItemStyle>
      {isModalOpen && (
        <ConfirmModal
          message="정말로 삭제하시겠습니까?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </>
  );
};

const CommentItemStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;

  .content {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
  }

  .info {
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
