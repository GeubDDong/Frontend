import { Theme } from '@/style/Theme';
import styled from 'styled-components';
import CommentItem from './CommentItem';
import useComments from '@/hooks/useComments';
import useSelectedInfo from '@/hooks/useSelectedInfo';
import { FaPencilAlt } from 'react-icons/fa';
import CommentModal from './CommentModal';
import { overlay } from 'overlay-kit';
import useAuth from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Comments = () => {
  const { selectedToilet } = useSelectedInfo();
  const { comments, addComment, updateComment, removeComment, isLoading } =
    useComments(selectedToilet?.id);
  const { isLogin } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isLogin) {
      navigate('/login');
      return;
    }

    overlay.open(({ isOpen, unmount }) => {
      return (
        <CommentModal
          isOpen={isOpen}
          onExit={unmount}
          addComment={addComment}
        />
      );
    });
  };

  return (
    <CommentsStyle>
      <div className="top">
        <div className="title">
          <span className="titleName">리뷰</span>
          <span className="count">{`(${comments.length})`}</span>
        </div>
        <div className="write" onClick={handleClick}>
          <FaPencilAlt size={'0.9rem'} />
          리뷰 작성하기
        </div>
      </div>
      <div className="comments">
        {isLoading ? (
          // TODO: 댓글 로딩중 처리
          <p>댓글 불러오는 중...</p>
        ) : (
          comments.map((item) => (
            <CommentItem
              key={item.id}
              item={item}
              updateComment={updateComment}
              removeComment={removeComment}
            />
          ))
        )}
      </div>
    </CommentsStyle>
  );
};

const CommentsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: ${Theme.fontSize.sm};
    color: ${Theme.colors.mainText};
  }

  .title {
    display: flex;
    gap: 3px;
    flex-direction: row;
    align-items: center;

    .titleName {
      font-size: ${Theme.fontSize.md};
      color: ${Theme.colors.mainText};
      font-weight: bold;
    }

    .count {
      font-size: ${Theme.fontSize.sm};
      color: ${Theme.colors.subText};
    }
  }

  .write {
    display: flex;
    flex-direction: row;
    gap: 2px;
    cursor: pointer;
    color: ${Theme.colors.mainText};
  }

  .comments {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 10px;
  }
`;

export default Comments;
