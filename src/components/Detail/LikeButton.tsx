import { Theme } from '@/style/Theme';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import styled from 'styled-components';

const LikeButton = () => {
  const [isLike, setIsLike] = useState(false);
  const handleClickLike = () => {
    setIsLike(!isLike);
  };
  return (
    <>
      <LikeButtonStyle>
        {isLike ? (
          <FaHeart
            size="1.5rem"
            color="#eb3b41" // FF4033
            onClick={handleClickLike}
            style={{ cursor: 'pointer' }}
          />
        ) : (
          <FaRegHeart
            size="1.5rem"
            color={`${Theme.colors.subText}`}
            onClick={handleClickLike}
            style={{ cursor: 'pointer' }}
          />
        )}
        <span>0</span>
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
