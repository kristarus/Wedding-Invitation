import { TableProps } from 'antd';

export interface ITableProps<T> extends Omit<TableProps<T>, 'title'> {
  leftHeaderComponent?: JSX.Element;
  centerHeaderComponent?: JSX.Element;
  rightHeaderComponent?: JSX.Element;
  rounded?: boolean;
  baseline?: boolean;
  error?: boolean;
}
