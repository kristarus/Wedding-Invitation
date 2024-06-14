import { ButtonProps } from 'antd';

export interface IIconButtonProps extends ButtonProps {
  tooltip?: string;
  color?: 'primary' | 'default' | 'red';
}
