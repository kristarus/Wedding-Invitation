import React from 'react';
import { Dropdown, Space } from 'antd';

import { ArrowDownIcon } from 'assets';

import { IHeaderSelectProps } from './HeaderSelect.types';

import './HeaderSelect.styles.scss';

const HeaderSelect = ({ items, onSelect, selectedKey, selectable, menu, title = '', ...props }: IHeaderSelectProps) => {
  return (
    <div className="np-header-select">
      <Dropdown
        menu={{
          items,
          selectable,
          selectedKeys: [selectedKey],
          onClick: onSelect,
          ...menu,
        }}
        trigger={['click']}
        {...props}
      >
        <Space size={4}>
          <span className="np-header-select__title">
            {selectable ? items.find(e => e?.key === selectedKey)?.label : title}
          </span>
          <ArrowDownIcon className="np-header-select__icon" />
        </Space>
      </Dropdown>
    </div>
  );
};

export default HeaderSelect;
