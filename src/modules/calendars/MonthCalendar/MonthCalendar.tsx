import React from 'react';

import heart from 'assets/images/heart.gif';

import getMonthDays from './utils/getMonthDays';
import prepareDays from './utils/prepareDays';

import { DayTitles, MonthTitles } from './constants/days';

import { IMonthCalendarProps } from './MonthCalendar.types';

import './MonthCalendar.styles.scss';

const MonthCalendar = ({ date, month, year, className = '', ...props }: IMonthCalendarProps) => {
  const days = getMonthDays(year, month);
  const preparedDays = prepareDays(days, date);

  const monthTitle = MonthTitles[month];

  const generateKey = (item: { date?: number; day?: number }) => {
    return `${item?.date}-${item?.day}${Math.random()}`;
  };

  return (
    <div className={`np-month-calendar ${className}`} {...props}>
      <div className="np-month-calendar__header">{monthTitle}</div>

      <div className="np-month-calendar__body">
        {DayTitles.map(title => (
          <div key={title} className="np-month-calendar__body-day-title">
            {title}
          </div>
        ))}

        {preparedDays.map(item =>
          !item?.selected ? (
            <div key={generateKey(item)} className="np-month-calendar__body-day">
              {item?.date}
            </div>
          ) : (
            <div key={generateKey(item)} className="np-month-calendar__body-day">
              <img src={heart} alt="loading..." />
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default MonthCalendar;
