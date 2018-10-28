const sumOfOther = (array) => {
  if (array.length < 2) return [...array];
  const sum = array.reduce((acc, item) => acc + item);
  return array.map(item => sum - item);
};
sumOfOther();