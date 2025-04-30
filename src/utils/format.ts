export const formatRating = (rating: number): string => {
  return rating === 0 ? `${rating}` : rating.toFixed(1);
};
