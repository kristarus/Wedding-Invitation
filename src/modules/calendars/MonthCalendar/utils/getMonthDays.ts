import { Day } from 'types/calendar';

const getMonthDays = (year: number, month: number) => {
  const monthIndex = month - 1;
  const date = new Date(year, monthIndex, 1);
  const result = [];

  while (date.getMonth() === monthIndex) {
    const day = date.getDay();
    const obj = { date: date.getDate(), day: day === 0 ? Day.SUN : day };

    result.push(obj);

    date.setDate(date.getDate() + 1);
  }

  return result;
};

export default getMonthDays;
