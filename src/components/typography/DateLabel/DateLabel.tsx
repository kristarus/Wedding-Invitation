import React from 'react';
import { parseISO, addMinutes, format as formatFn } from 'date-fns';

import { DATE_HYPHEN_FORMAT } from 'constants/date';

import { IDateLabelProps } from './DateLabel.types';

const DateLabel = ({ date, options }: IDateLabelProps) => {
  const { format = DATE_HYPHEN_FORMAT, emptyValue = '', utc = true } = options || {};

  const parsedDate = parseISO(date);
  const utcDate = utc ? addMinutes(parsedDate, parsedDate.getTimezoneOffset()) : parsedDate;

  return <>{date ? formatFn(utcDate, format) : emptyValue}</>;
};

export default DateLabel;
