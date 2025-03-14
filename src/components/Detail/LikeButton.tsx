import { Theme } from '@/style/Theme';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';

const LikeButton = () => {
  const [isLike, setIsLike] = useState(false);
  const handleClickLike = () => {
    setIsLike(!isLike);
  };
  return (
    <>
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
    </>
  );
};

export default LikeButton;
