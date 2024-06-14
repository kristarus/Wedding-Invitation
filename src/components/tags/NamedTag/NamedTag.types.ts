import { BaseComponentProps } from 'types/components';

export interface INamedTagProps extends BaseComponentProps {
  title: string;
  titleIcon?: JSX.Element;
  color?: string;
  icon?: JSX.Element;
  value: React.ReactNode | string;
  block?: boolean;
  loading?: boolean;
  minWidth?: number | string;
  noDataText?: string;
}
