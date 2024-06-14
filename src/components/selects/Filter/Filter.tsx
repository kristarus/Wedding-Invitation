import React, { useState } from 'react';
import { Dropdown, MenuProps, Space } from 'antd';
import { DownOutlined, FilterFilled, FilterOutlined } from '@ant-design/icons';

import { Button } from 'components';
import FilterDropdown from './components/FilterDropdown';

import useFilterItems from './hooks/useFilterItems';
import { getAllItemsKeys } from './utils/filterItems';
import { pushArrayItem, removeArrayItem } from 'utils/common';

import { ALL_KEY } from './constants/filter';

import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { IFilterItemType, IFilterProps } from './Filter.types';

import './Filter.styles.scss';

const Filter = ({ title, items = [], checked = [], onApply, width, ...props }: IFilterProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<React.Key[]>(checked);

  const isActive = checked && checked.length;
  const activeClass = !isActive ? 'np-filter__button--no-active' : '';

  const onOpenChange = (open: boolean) => {
    setOpen(open);
    setCheckedItems(checked);
  };

  const onAllCheckboxChange = (checked: boolean) => {
    const newCheckedItems = checked ? getAllItemsKeys(items) : [];

    setCheckedItems(newCheckedItems);
  };

  const onCheckboxChange = (key: React.Key) => (e: CheckboxChangeEvent) => {
    const isChecked = e.target.checked;

    if (key === ALL_KEY) {
      return onAllCheckboxChange(isChecked);
    }

    const newCheckedItems = isChecked ? pushArrayItem(checkedItems, key) : removeArrayItem(checkedItems, key);

    setCheckedItems(newCheckedItems);
  };

  const menuItems = useFilterItems({ items, checked: checkedItems, onChange: onCheckboxChange });

  const handleApply = () => {
    onApply(checkedItems);
    setOpen(false);
  };

  const handleMenuClick = (item: IFilterItemType) => {
    onCheckboxChange(item.key);
  };

  const menuProps: MenuProps = {
    items: menuItems,
    onClick: handleMenuClick,
    triggerSubMenuAction: 'click',
    multiple: true,
  };

  return (
    <Dropdown
      menu={menuProps}
      trigger={['click']}
      open={open}
      onOpenChange={onOpenChange}
      dropdownRender={menu => <FilterDropdown menu={menu} onApply={handleApply} />}
      {...props}
    >
      <Button type="default" className={`np-filter__button ${activeClass}`} style={{ width }}>
        <Space>
          {isActive ? <FilterFilled /> : <FilterOutlined />}
          {title}
        </Space>

        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default Filter;
