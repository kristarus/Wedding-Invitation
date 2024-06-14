import { isValueEmpty } from './common';

export const isEmptyField = (value: unknown) => {
  return !value || isValueEmpty(value);
};
