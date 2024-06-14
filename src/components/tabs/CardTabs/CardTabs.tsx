import React from 'react';
import { Tabs } from 'antd';

import CardTabsBar from './components/CardTabsBar';

import { ICardTabsProps } from './CardTabs.types';

import './CardTabs.styles.scss';

const CardTabs = ({ items = [], className = '', ...props }: ICardTabsProps) => {
  const defaultActiveKey = items.length ? items[0].key : null;

  return (
    <Tabs
      defaultActiveKey={defaultActiveKey}
      type="card"
      items={items}
      renderTabBar={props => <CardTabsBar items={items} activeKey={props.activeKey} onTabClick={props.onTabClick} />}
      className={`np-card-tabs ${className}`}
      {...props}
    />
  );
};

export default CardTabs;
