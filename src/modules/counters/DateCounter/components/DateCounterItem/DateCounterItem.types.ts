import { ProgressProps } from 'antd';

export interface IDateCounterItem extends ProgressProps {
  title: string | number;
  desc: string | number;
  percent: number;
}
