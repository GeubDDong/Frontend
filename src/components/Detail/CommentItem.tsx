import { Theme } from '@/style/Theme';
import styled from 'styled-components';
import { ICommentItem } from './Comments';

interface CommentItemProps {
  item: ICommentItem;
}

const CommentItem = ({ item }: CommentItemProps) => {
  return (
    <CommentItemStyle>
      <div className="profile"></div>
      <div className="content">
        <div className="top">
          <div className="nickname">{item.nickname}</div>
          <div className="date">{item.updated_at}</div>
          <div className="buttons">
            <div>수정</div>
            <div>삭제</div>
          </div>
        </div>
        <div className="comment">{item.comment}</div>
      </div>
    </CommentItemStyle>
  );
};

const CommentItemStyle = styled.div`
  display: flex;
  gap: 10px;

  .profile {
    min-width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #d8dfe0;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
  }

  .top {
    display: flex;
    gap: 10px;
    align-items: center;
    position: relative;
  }

  .buttons {
    display: flex;
    gap: 10px;
    font-size: ${Theme.fontSize.xs};
    color: ${Theme.colors.subText};
    position: absolute;
    right: 10px;
    top: -5px;
  }

  .date {
    font-size: ${Theme.fontSize.sm};
    color: ${Theme.colors.mainText};
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
