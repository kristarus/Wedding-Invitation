import { BaseComponentProps } from 'types/components';

interface IOptions {
  maxDays?: number;
  maxHours?: number;
  maxMinutes?: number;
  maxSeconds?: number;
  size?: number;
}

export interface IDateCouterProps extends BaseComponentProps {
  date: string | Date;
  title?: string;
  options?: IOptions;
}
