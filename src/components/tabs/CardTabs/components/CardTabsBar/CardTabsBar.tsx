import React from 'react';
import { Badge } from 'antd';

import { ICardTabsBarProps } from './CardTabsBar.types';

import './CardTabsBar.styles.scss';

const CardTabsBar = ({ items = [], onTabClick, activeKey }: ICardTabsBarProps) => {
  return (
    <div className="np-card-tabs__bar">
      {items.map(item => (
        <Badge count={item.badge} key={item.key}>
          <div
            key={item.key}
            onClick={e => onTabClick(item.key, e)}
            className={`np-card-tabs__bar-item ${activeKey === item.key ? 'np-card-tabs__bar-item--active' : ''}`}
          >
            {item.label}
          </div>
        </Badge>
      ))}
    </div>
  );
};

export default CardTabsBar;
