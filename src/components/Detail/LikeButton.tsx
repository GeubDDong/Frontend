import useAuth from '@/hooks/useAuth';
import useLikeStatus from '@/hooks/useLikeStatus';
import { Theme } from '@/style/Theme';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import styled from 'styled-components';
import useSelectedInfo from '@/hooks/useSelectedInfo';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ConfirmModal from '../Common/ConfirmModal';

const LikeButton = () => {
  const { isLogin } = useAuth();
  const { selectedToilet } = useSelectedInfo();
  const { isLike, toggleLike } = useLikeStatus(selectedToilet || undefined);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = async () => {
    if (!isLogin) {
      setIsModalOpen(true);
      return;
    }
    toggleLike();
  };

  const confirm = () => {
    setIsModalOpen(false);
    navigate('/login');
  };

  const cancel = () => {
    setIsModalOpen(false);
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
      {isModalOpen && (
        <ConfirmModal
          message="즐겨찾기에 추가하려면 로그인이 필요해요.
          로그인하시겠어요?"
          onConfirm={confirm}
          onCancel={cancel}
        />
      )}
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
