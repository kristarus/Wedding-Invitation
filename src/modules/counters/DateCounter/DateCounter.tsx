import React from 'react';
import Countdown from 'react-countdown';

import DateCounterItem from './components/DateCounterItem';

import getPercent from 'utils/common/getPercent';

import { DEFAULT_MAX_DAYS, DEFAULT_MAX_HOURS, DEFAULT_MAX_MINUTES, DEFAULT_MAX_SECONDS } from './constants/date';

import { IDateCouterProps } from './DateCounter.types';

import './DateCounter.styles.scss';

const renderer =
  ({
    title,
    size,
    maxDays = DEFAULT_MAX_DAYS,
    maxHours = DEFAULT_MAX_HOURS,
    maxMinutes = DEFAULT_MAX_MINUTES,
    maxSeconds = DEFAULT_MAX_SECONDS,
  }: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any) =>
  ({ days, hours, minutes, seconds }) => {
    return (
      <div className="np-date-counter">
        {title && <span className="np-date-counter__title">{title}</span>}

        <div className="np-date-counter__content">
          <DateCounterItem size={size} title={days} desc="дней" percent={getPercent(days, maxDays)} />
          <DateCounterItem size={size} title={hours} desc="часов" percent={getPercent(hours, maxHours)} />
          <DateCounterItem size={size} title={minutes} desc="минут" percent={getPercent(minutes, maxMinutes)} />
          <DateCounterItem size={size} title={seconds} desc="секунд" percent={getPercent(seconds, maxSeconds)} />
        </div>
      </div>
    );
  };

const DateCounter = ({ date, title, options }: IDateCouterProps) => {
  return <Countdown date={new Date(date)} renderer={renderer({ ...options, title })} />;
};

export default DateCounter;
