import { Theme } from '@/style/Theme';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import styled from 'styled-components';

const LikeButton = () => {
  const [isLike, setIsLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleClickLike = () => {
    if (isLike) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLike(!isLike);
  };
  return (
    <>
      <LikeButtonStyle>
        {isLike ? (
          <FaHeart
            size="1.5rem"
            color="#eb3b41"
            onPointerDown={handleClickLike}
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{
              cursor: 'pointer',
            }}
          />
        ) : (
          <FaRegHeart
            size="1.5rem"
            color={`${Theme.colors.subText}`}
            onPointerDown={handleClickLike}
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{ cursor: 'pointer' }}
          />
        )}
        <span>{likeCount}</span>
      </LikeButtonStyle>
    </>
  );
};

const LikeButtonStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: ${Theme.fontSize.sm};
  color: ${Theme.colors.subText};
`;
export default LikeButton;
