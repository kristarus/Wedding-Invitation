import { BaseComponentProps } from 'types/components';

export interface ISectionLayoutProps extends BaseComponentProps {
  title?: string;
  children: React.ReactNode;
  headerCentered?: boolean;
  bodyCentered?: boolean;
  verticalCentered?: boolean;
  rightHeaderComponent?: JSX.Element;
  bottomComponent?: JSX.Element;
}
