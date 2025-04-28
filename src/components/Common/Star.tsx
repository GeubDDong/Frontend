import { Theme } from '@/style/Theme';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

export type starStatus = 'fill' | 'half' | 'empty';

interface StarProps {
  status?: starStatus;
  size: number;
  onClick?: () => void;
}

const Star = ({ status = 'fill', size, onClick }: StarProps) => {
  const commonProps = {
    size,
    onClick,
    color: Theme.colors.star,
    style: {
      cursor: onClick ? 'pointer' : 'auto',
    },
  };
  switch (status) {
    case 'fill':
      return <FaStar {...commonProps} />;
    case 'half':
      return <FaStarHalfAlt {...commonProps} />;
    case 'empty':
    default:
      return <FaRegStar {...commonProps} />;
  }
};

export default Star;
