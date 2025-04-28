import useAuth from '@/hooks/useAuth';
import useLikeStatus from '@/hooks/useLikeStatus';
import { Theme } from '@/style/Theme';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import styled from 'styled-components';
import useSelectedInfo from '@/hooks/useSelectedInfo';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LikeButton = () => {
  const { isLogin } = useAuth();
  const { selectedToilet } = useSelectedInfo();
  const { isLike, toggleLike, loadLikeStatus } = useLikeStatus(
    selectedToilet || undefined,
  );
  const navigate = useNavigate();

  useEffect(() => {
    loadLikeStatus();
  }, [selectedToilet]);

  const handleClick = async () => {
    if (!isLogin) {
      navigate('/login');
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
