import { Day } from 'types/calendar';

import _cloneDeep from 'lodash/cloneDeep';

interface IDateItem {
  date: number;
  day: Day;
}

const prepareDays = (items: IDateItem[] = [], date: number) => {
  if (!items || !items.length) {
    return [];
  }

  const firstItem = items[0];
  const endItem = items[items.length - 1];

  const startPushedNumber = firstItem.day - Day.MON;
  const endPushedNumber = Day.SUN - endItem.day;

  const result = _cloneDeep(items).map(item => ({ ...item, selected: item.date === date }));

  for (let i = 0; i < startPushedNumber; i++) {
    result.unshift(null);
  }

  for (let i = 0; i < endPushedNumber; i++) {
    result.push(null);
  }

  return result;
};

export default prepareDays;
