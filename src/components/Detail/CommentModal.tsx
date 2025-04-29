import { Theme } from '@/style/Theme';
import styled from 'styled-components';
import StarRating from '../Common/StarRating';
import { useEffect, useState } from 'react';
import { IRatingItem } from '@/types';

interface CommentModalProps {
  isOpen: boolean;
  onExit: () => void;
  addComment?: (comment: string, rating: IRatingItem) => Promise<void>;
  updateComment?: (
    id: number,
    comment: string,
    ratings: IRatingItem,
  ) => Promise<void>;
  commentId?: number;
  initialRatings?: IRatingItem;
  comment?: string;
}
const CommentModal = ({
  isOpen,
  onExit,
  initialRatings,
  comment,
  addComment,
  updateComment,
  commentId,
}: CommentModalProps) => {
  const [ratings, setRatings] = useState<IRatingItem>({
    cleanliness: 5,
    amenities: 5,
    accessibility: 5,
  });

  const [currentComment, setCurrentComment] = useState('');

  const handleClick = () => {
    if (addComment) {
      addComment(currentComment, ratings);
    } else if (updateComment && commentId) {
      updateComment(commentId, currentComment, ratings);
    }

    onExit();
  };

  useEffect(() => {
    if (isOpen && initialRatings) {
      setCurrentComment(comment ?? '');
      setRatings(initialRatings);
    }
  }, [isOpen]);

  return (
    <ModalWrapper onClick={onExit}>
      <CommentModalStyle onClick={(e) => e.stopPropagation()}>
        <div className="content">
          <span className="title">리뷰 작성</span>
          <div className="ratingContainer">
            <div className="rating">
              <span>청결도</span>
              <div className="star">
                <StarRating
                  value={ratings.cleanliness}
                  size={25}
                  onChange={(v) =>
                    setRatings((prev) => ({ ...prev, cleanliness: v }))
                  }
                />
              </div>
            </div>
            <div className="rating">
              <span>비품상태</span>
              <div className="star">
                <StarRating
                  value={ratings.amenities}
                  size={25}
                  onChange={(v) =>
                    setRatings((prev) => ({ ...prev, amenities: v }))
                  }
                />
              </div>
            </div>
            <div className="rating">
              <span>접근성</span>
              <div className="star">
                <StarRating
                  value={ratings.accessibility}
                  size={25}
                  onChange={(v) =>
                    setRatings((prev) => ({ ...prev, accessibility: v }))
                  }
                />
              </div>
            </div>
          </div>
          <textarea
            className="input"
            value={currentComment}
            onChange={(e) => setCurrentComment(e.target.value)}
            maxLength={100}
          />
          <div className="buttons">
            <button className="cancel" onClick={onExit}>
              취소
            </button>
            <button className="confirm" onClick={handleClick}>
              등록
            </button>
          </div>
        </div>
      </CommentModalStyle>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CommentModalStyle = styled.div`
  display: flex;
  width: 90vw;
  max-width: 400px;
  height: 350px;
  background-color: white;
  border-radius: 12px;
  z-index: ${Theme.zIndex.overlay};

  .content {
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    gap: 20px;
    width: 90%;
    height: 90%;
  }

  .title {
    font-size: ${Theme.fontSize.md};
    font-weight: 600;
  }

  .ratingContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .rating {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: ${Theme.fontSize.sm};
    }
  }

  .input {
    width: 100%;
    height: 40%;
    box-sizing: border-box;
    resize: none;
    border-radius: 8px;
    border: 1px solid #e3e3e3;
    outline-color: #e3e3e3;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 10px;

    button {
      border-radius: 8px;
      font-size: ${Theme.fontSize.sm};
      padding: 8px 16px;
      border: 1px solid #e3e3e3;
      cursor: pointer;
    }

    .cancel {
      background-color: white;
      color: ${Theme.colors.mainText};
    }

    .confirm {
      background-color: ${Theme.colors.primary};
      color: white;
    }
  }
`;
export default CommentModal;
