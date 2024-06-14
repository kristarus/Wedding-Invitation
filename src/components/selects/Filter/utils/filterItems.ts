import _flatten from 'lodash/flatten';
import { IFilterItemType } from '../Filter.types';

export const getAllItemsKeys = (items: IFilterItemType[]) => {
  const keys = items.map(item => {
    if (item?.children) {
      return item.children.map(child => child.key);
    } else {
      return item.key;
    }
  });

  return _flatten(keys);
};
