import { DATE_SLASH_FORMAT_2 } from 'constants/date';
import { addMinutes, parseISO, format as formatFn } from 'date-fns';
import dayjs from 'dayjs';

export type DateType = string | number | Date | dayjs.Dayjs;

export const isBiggerDate = (date1: DateType, date2: DateType) => {
  if (!date1 || !date2) {
    return false;
  }

  const dateJs1 = dayjs(date1).startOf('date');
  const dateJs2 = dayjs(date2).startOf('date');

  return dateJs1.isAfter(dateJs2);
};

export const isLowerDate = (date1: DateType, date2: DateType) => {
  if (!date1 || !date2) {
    return false;
  }

  const dateJs1 = dayjs(date1).startOf('date');
  const dateJs2 = dayjs(date2).startOf('date');

  return dateJs1.isBefore(dateJs2);
};

export const timestampToDateString = (timestamp: number) => {
  return new Date(timestamp * 1000).toISOString();
};

export const formatTimestamp = (timestamp: number, options?: { utc?: boolean; format?: string }) => {
  const { utc = true, format = DATE_SLASH_FORMAT_2 } = options || {};

  const dateString = timestampToDateString(timestamp);
  const parsedDate = parseISO(dateString);
  const utcDate = utc ? addMinutes(parsedDate, parsedDate.getTimezoneOffset()) : parsedDate;

  return formatFn(utcDate, format);
};
