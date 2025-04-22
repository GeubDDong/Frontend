import useAuth from '@/hooks/useAuth';
import useLikeStatus from '@/hooks/useLikeStatus';
import { Theme } from '@/style/Theme';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import styled from 'styled-components';
import useSelectedInfo from '@/hooks/useSelectedInfo';

const LikeButton = () => {
  const { isLogin } = useAuth();
  const { selectedToilet } = useSelectedInfo();
  const { isLike, toggleLike } = useLikeStatus(selectedToilet?.id);

  const handleClick = async () => {
    if (!isLogin) {
      window.alert('로그인이 필요한 기능입니다.');
      return;
    }
    toggleLike();
  };

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
            onMouseDown={(e) => {
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
