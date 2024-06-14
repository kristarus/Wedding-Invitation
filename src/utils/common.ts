import _omitBy from 'lodash/omitBy';
import _get from 'lodash/get';

export function isValueEmpty(value: unknown): boolean {
  if (value === undefined || value === null) {
    return true;
  }

  if (value instanceof Date) {
    return false;
  }

  if (typeof value === 'string') {
    return !value;
  }

  if (typeof value === 'object' && Array.isArray(value)) {
    return !value.length;
  }

  if (typeof value === 'object') {
    return !Object.keys(value).length;
  }

  return false;
}

export const objectHasKey = (obj: object, key: string) => {
  return key in obj;
};

export const filterEmptyParams = (params: Record<string, object | string | number | boolean>) => {
  return _omitBy(params, value => isValueEmpty(value));
};

export const pushArrayItem = <T>(array: T[], item: T) => {
  return [...array, item];
};

export const removeArrayItem = <T>(array: T[], item: T, key?: string) => {
  if (key) {
    return array.filter(arrayItem => _get(arrayItem, key) !== _get(item, key));
  }

  return array.filter(arrayItem => arrayItem !== item);
};
