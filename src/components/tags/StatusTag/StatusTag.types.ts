import { BaseComponentProps } from 'types/components';

export interface IStatusTagProps extends BaseComponentProps {
  color?: string;
  backgroundColor?: string;
  icon?: JSX.Element;
  value: string;
  block?: boolean;
  size?: StatusTagSize;
  centralize?: boolean;
}

export enum StatusTagSize {
  SMALL = 'small',
  MEDIUM = 'medium',
}
