export const formatRating = (rating: number | string): string => {
  if (typeof rating === 'string') {
    rating = parseFloat(rating);
  }
  return rating === 0 ? `${rating}` : rating.toFixed(1);
};
