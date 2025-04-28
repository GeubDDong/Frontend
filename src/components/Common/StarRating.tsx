import Star, { starStatus } from './Star';

interface StarRatingProps {
  value: number;
  onChange?: (value: number) => void;
  size: number;
}

const StarRating = ({ value, onChange, size }: StarRatingProps) => {
  const isInteractive = typeof onChange === 'function';
  const handleClick = (index: number) => {
    if (!isInteractive) return;
    onChange?.(index + 1);
  };

  return Array.from({ length: 5 }, (_, i) => {
    const status = getStarStatus(value, i);
    return (
      <Star
        key={i}
        status={status}
        size={size}
        onClick={isInteractive ? () => handleClick(i) : undefined}
      />
    );
  });
};

const getStarStatus = (ratingValue: number, index: number): starStatus => {
  const diff = ratingValue - index;
  if (diff >= 1) return 'fill';
  if (diff >= 0.5) return 'half';
  return 'empty';
};

export default StarRating;
