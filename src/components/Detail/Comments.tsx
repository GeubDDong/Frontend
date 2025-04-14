import { Theme } from '@/style/Theme';
import styled from 'styled-components';
import CommentItem from './CommentItem';
import useSelectedToiletInfo from '@/hooks/useSelectedToiletInfo';
import useComments from '@/hooks/useComments';

const Comments = () => {
  const { selectedToiletInfo } = useSelectedToiletInfo();
  const { comments, updateComment, removeComment, isLoading } = useComments(
    selectedToiletInfo?.id,
  );

  return (
    <CommentsStyle>
      <div className="title">
        <span className="titleName">리뷰</span>
        <span className="count">{`(${comments.length})`}</span>
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

  .comments {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 10px;
  }
`;

export default Comments;
