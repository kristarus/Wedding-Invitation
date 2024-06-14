const getNumberOfDecimalPlaces = (num: number) => {
  const numStr = num.toString();
  const isFranc = numStr.includes('.');

  return isFranc ? numStr.split('.').pop().length : 0;
};

export default getNumberOfDecimalPlaces;
