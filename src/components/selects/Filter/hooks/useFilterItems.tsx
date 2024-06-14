import React, { useMemo } from 'react';
import { Checkbox } from 'antd';
import { useTranslation } from 'react-i18next';

import { ALL_KEY } from '../constants/filter';

import { IFilterItemType } from '../Filter.types';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

interface IFilterItemsHookProps {
  items: IFilterItemType[];
  checked: React.Key[];
  onChange: (key: React.Key) => (e: CheckboxChangeEvent) => void;
}

const useFilterItems = ({ items, checked, onChange }: IFilterItemsHookProps) => {
  const { t } = useTranslation();

  const itemsCount = useMemo(() => {
    let count = 0;

    items.forEach(item => {
      if (item?.children) {
        count += item.children.length;
      } else {
        count++;
      }
    });

    return count;
  }, [items]);

  const checkedAll = itemsCount === checked.length;
  const indeterminate = checked.length > 0 && checked.length < itemsCount;

  const checkboxAllItem = {
    key: '',
    label: (
      <Checkbox checked={checkedAll} indeterminate={indeterminate} onChange={onChange(ALL_KEY)}>
        {t('common.all')}
      </Checkbox>
    ),
  };

  const checkboxItems = items.map(item => ({
    ...item,

    label: !item?.children ? (
      <Checkbox key={item.key} checked={checked.includes(item.key)} onChange={onChange(item.key)}>
        {t(item.label)}
      </Checkbox>
    ) : (
      t(item.label)
    ),
    popupClassName: 'np-filter-submenu',
    children: item?.children
      ? item.children.map(child => ({
          ...child,
          label: (
            <Checkbox key={child.key} checked={checked.includes(child.key)} onChange={onChange(child.key)}>
              {t(child.label)}
            </Checkbox>
          ),
        }))
      : null,
  }));

  return [checkboxAllItem, ...checkboxItems];
};

export default useFilterItems;
