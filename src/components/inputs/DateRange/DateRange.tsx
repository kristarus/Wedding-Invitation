import React from 'react';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

import DatePicker from '../DatePicker';

import { isBiggerDate, isLowerDate } from 'utils/date';

import { DateField, IDateRangeProps } from './DateRange.types';

import './DateRange.styles.scss';

const DateRange = ({ value, onChange, className = '' }: IDateRangeProps) => {
  const { t } = useTranslation();

  const disabledStartDate = (current: dayjs.Dayjs) => {
    const isBiggerEndDate = isBiggerDate(current, value.to);
    const isBiggerTodaysDate = isBiggerDate(current, dayjs());

    return isBiggerEndDate || isBiggerTodaysDate;
  };

  const disabledEndDate = (current: dayjs.Dayjs) => {
    const isLowerStartDate = isLowerDate(current, value.from);
    const isBiggerTodaysDate = isBiggerDate(current, dayjs());

    return isLowerStartDate || isBiggerTodaysDate;
  };

  const onChangeDate = (field: string) => (value: string, date: dayjs.Dayjs) => {
    onChange(field, value, date);
  };

  return (
    <div className={`np-date-range ${className}`}>
      <DatePicker
        hideFooter
        value={value?.from}
        placeholder={t('common.from')}
        disabledDate={disabledStartDate}
        onChange={onChangeDate(DateField.FROM)}
      />

      <DatePicker
        hideFooter
        value={value?.to}
        placeholder={t('common.to')}
        disabledDate={disabledEndDate}
        onChange={onChangeDate(DateField.TO)}
      />
    </div>
  );
};

export default DateRange;
