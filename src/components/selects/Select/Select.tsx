import React from 'react';
import { Select as AntdSelect } from 'antd';

import { ArrowDownIcon } from 'assets';

import { ISelectProps } from './Select.types';

import './Select.styles.scss';

const Select = ({ className, ...props }: ISelectProps) => {
  return (
    <AntdSelect
      suffixIcon={<ArrowDownIcon />}
      className={`np-select ${className}`}
      popupClassName="np-select__dropdown"
      {...props}
    />
  );
};

export default Select;
