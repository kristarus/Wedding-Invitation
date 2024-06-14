interface IOptions {
  franc?: boolean;
}

const convertFrancToPercent = (value: number): number => {
  return value * 100;
};

const getPercent = (value: number, max: number, options?: IOptions): number => {
  const { franc } = options || {};

  if (!value) {
    return 0;
  }

  if (value > max) {
    return franc ? convertFrancToPercent(1) : 100;
  }

  const francResult = value / max;

  return franc ? francResult : convertFrancToPercent(francResult);
};

export default getPercent;
