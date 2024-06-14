import { BaseComponentProps } from 'types/components';

export interface IErrorColumnProps extends BaseComponentProps {
  value: string;
  errors: string[];
  type?: 'error' | 'warning';
}
