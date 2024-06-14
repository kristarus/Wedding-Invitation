import React from 'react';
import { useTranslation } from 'react-i18next';
import { Radio, RadioChangeEvent } from 'antd';

import { IButtonTabsProps } from './ButtonTabs.types';

import './ButtonTabs.styles.scss';

const ButtonTabs = ({ items, className = '', onChange, ...props }: IButtonTabsProps) => {
  const { t } = useTranslation();

  const handleChange = (e: RadioChangeEvent) => {
    const value: string = e.target.value;

    onChange(value);
  };

  return (
    <Radio.Group size="small" onChange={handleChange} className={`np-button-tabs ${className}`} {...props}>
      {items.map(item => (
        <Radio.Button key={item.key} value={item.value}>
          {t(item.label)}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};

export default ButtonTabs;
