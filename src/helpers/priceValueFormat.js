export const priceValueFormat = number => {
  return number.toLocaleString();
};

export const addZeroesInDecimal = num => {
  return num.toLocaleString('en', { useGrouping: false, minimumFractionDigits: 2 });
};
