import { Theme } from '@/style/Theme';
import { FaArrowLeftLong } from 'react-icons/fa6';
import styled from 'styled-components';

const BackButton = () => {
  const handleClick = () => {
    window.history.back();
  };

  return (
    <BackButtonStyle>
      <FaArrowLeftLong
        size="1rem"
        color={`${Theme.colors.mainText}`}
        onClick={handleClick}
      />
    </BackButtonStyle>
  );
};

const BackButtonStyle = styled.div`
  padding: 10px;
  cursor: pointer;
`;
export default BackButton;
