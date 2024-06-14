import React from 'react';
import { Progress } from 'antd';

import { StrokeColors } from '../../constants/colors';

import { IDateCounterItem } from './DateCounterItem.types';

import './DateCounterItem.styles.scss';

const DateCounterItem = ({ title, desc, size = 70, percent = 0, ...props }: IDateCounterItem) => {
  return (
    <Progress
      type="circle"
      size={size}
      percent={percent}
      strokeColor={StrokeColors}
      format={() => (
        <div className="np-date-counter-item">
          <span className="np-date-counter-item__title">{title}</span>
          <span className="np-date-counter-item__desc">{desc}</span>
        </div>
      )}
      {...props}
    />
  );
};

export default DateCounterItem;
