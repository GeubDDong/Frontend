export const formatDateToString = (date: Date): string => {
  return date.toString().split('T')[0];
};
