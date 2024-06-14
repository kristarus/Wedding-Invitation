import { DescriptionsProps } from 'antd';
import { TextProps } from 'antd/es/typography/Text';

import { IButtonProps } from 'components/buttons/Button/Button.types';
import { ILinkProps } from 'components/typography/Link';

export interface TableListColumnType<T> {
  title: string;
  dataIndex: string;
  align?: 'top' | 'center';
  render?: (record: T) => void;
}

export interface ITableListProps<T> extends DescriptionsProps {
  dataSource?: T;
  columns?: TableListColumnType<T>[];
  loading?: boolean;
}

export interface TableListStrongTextProps extends TextProps {}

export interface TableListLinkProps extends ILinkProps {}

export interface TableListButtonProps extends IButtonProps {}
