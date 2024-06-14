import fixStrNumber from './fixStrNumber';

interface IOptions {
  withComma?: boolean;
}

const isNumber = (value: unknown, options?: IOptions) => {
  const { withComma } = options || {};

  const num = typeof value === 'string' && withComma ? +fixStrNumber(value) : +value;

  return !isNaN(num);
};

export default isNumber;
