import { BaseComponentProps } from 'types/components';

export interface IFilterDropdownProps extends BaseComponentProps {
  menu?: React.ReactNode;
  onApply: () => void;
}
