import { RadioGroupProps } from 'antd';

export interface IButtonTabsItem {
  key: React.Key;
  value: string;
  label: string;
}

export interface IButtonTabsProps extends Omit<RadioGroupProps, 'onChange'> {
  items: IButtonTabsItem[];
  onChange: (value: string) => void;
}
