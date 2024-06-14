import React from 'react';
import { DropdownProps } from 'antd';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';

export interface IFilterProps extends DropdownProps {
  items?: IFilterItemType[];
  title: string;
  checked?: React.Key[];
  width?: string | number;
  onApply: (checked: React.Key[]) => void;
}

export interface IFilterItemChildType extends MenuItemType {
  label?: string;
}

export interface IFilterItemType extends MenuItemType {
  label?: string;
  children?: IFilterItemChildType[];
}
