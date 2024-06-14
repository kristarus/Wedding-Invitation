interface IOptions {
  fixed?: number;
}

const DEFAULT_FIXED = 2;

const francToString = (num: number, options?: IOptions): string => {
  const { fixed = DEFAULT_FIXED } = options || {};

  return Number(num)
    .toFixed(fixed)
    .replace(/\.?0+$/, '');
};

export default francToString;
