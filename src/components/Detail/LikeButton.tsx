import { addLike, fetchLike, removeLike } from '@/api/detail.api';
import { useAuth } from '@/hooks/useAuth';
import { useCurrentToiletInfo } from '@/hooks/useCurrentToiletInfo';
import { Theme } from '@/style/Theme';
import { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import styled from 'styled-components';

const LikeButton = () => {
  const [isLike, setIsLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const { isLogin } = useAuth();
  const { toiletId } = useCurrentToiletInfo();

  const handleClickLike = () => {
    if (!isLogin) {
      window.alert('로그인이 필요한 기능입니다.');
      return;
    }

    if (isLike) {
      removeLike(toiletId, { user_email: 'userEmail' }).then();
      setLikeCount(likeCount - 1);
    } else {
      addLike(toiletId, { user_email: 'userEmail' }).then();
      setLikeCount(likeCount + 1);
    }

    setIsLike(!isLike);
  };

  useEffect(() => {
    fetchLike(toiletId).then((res) => {
      setIsLike(res.like);
      setLikeCount(res.count);
    });
  }, []);

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
