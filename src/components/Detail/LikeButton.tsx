import { addLike, removeLike } from '@/api/detail.api';
import { useAuth } from '@/hooks/useAuth';
import { useCurrentToiletInfo } from '@/hooks/useCurrentToiletInfo';
import { useLikeStatus } from '@/hooks/useLikeStatus';
import { Theme } from '@/style/Theme';
import { useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import styled from 'styled-components';

const LikeButton = () => {
  const { isLogin } = useAuth();
  const { toiletId } = useCurrentToiletInfo();
  const { isLike, setIsLike, loadLikeStatus } = useLikeStatus(toiletId);

  const handleClick = async () => {
    if (!toiletId) return;

    if (!isLogin) {
      window.alert('로그인이 필요한 기능입니다.');
      return;
    }

    const prevLike = isLike;
    try {
      if (isLike) {
        setIsLike(false);
        await removeLike(toiletId, { user_email: 'user_email' });
      } else {
        setIsLike(true);
        await addLike(toiletId, { user_email: 'user_email' });
      }
    } catch (error) {
      // TODO: 에러 처리
      console.log(error);
      setIsLike(prevLike);
    }
  };

  useEffect(() => {
    loadLikeStatus();
  }, []);

  return (
    <>
      <LikeButtonStyle>
        {isLike ? (
          <FaHeart
            size="1.5rem"
            color="#eb3b41"
            onPointerDown={handleClick}
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
            onPointerDown={handleClick}
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{ cursor: 'pointer' }}
          />
        )}
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
