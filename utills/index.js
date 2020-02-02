export const getDateDiffinDays = dateString => {
  let date1 = new Date(dateString.split(" ")[0]);
  let date2 = Date.now();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};
