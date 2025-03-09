import { Theme } from '@/style/Theme';
import { FaArrowLeftLong } from 'react-icons/fa6';

const BackButton = () => {
  const handleClick = () => {
    window.history.back();
  };

  return (
    <FaArrowLeftLong
      size="1rem"
      color={`${Theme.colors.mainText}`}
      onClick={handleClick}
    />
  );
};

export default BackButton;
