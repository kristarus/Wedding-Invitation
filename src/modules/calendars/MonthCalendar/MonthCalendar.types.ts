import { BaseComponentProps } from 'types/components';

export interface IMonthCalendarProps extends BaseComponentProps {
  date: number;
  month: number;
  year: number;
}
