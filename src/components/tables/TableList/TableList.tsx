/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Descriptions, Spin, Typography } from 'antd';

import { Link, Button } from 'components';

import type {
  ITableListProps,
  TableListButtonProps,
  TableListLinkProps,
  TableListStrongTextProps,
} from './TableList.types';

import './TableList.styles.scss';

const DEFAULT_COLUMNS_NUMBER = 1;

const TableList = <T extends Record<string, any>>({
  dataSource,
  columns = [],
  column = DEFAULT_COLUMNS_NUMBER,
  layout,
  loading,
  title,
  className,
  ...props
}: ITableListProps<T>) => {
  const layoutClass = layout === 'vertical' ? 'np-table-list--vertical' : '';

  const titleComponent = (
    <div className="np-table-list__title-wrapper">
      <span>{title}</span>
      {loading && <Spin />}
    </div>
  );

  return (
    <div className="np-table-list__wrapper">
      {loading && (
        <div className="np-table-list__backdrop">
          <Spin size="large" className="np-table-list__spin" />
        </div>
      )}

      <Descriptions
        bordered
        column={column}
        layout={layout}
        title={titleComponent}
        size="small"
        className={`np-table-list ${layoutClass} ${className}`}
        {...props}
      >
        {columns.map(column => (
          <Descriptions.Item
            key={column.dataIndex}
            label={column.title}
            className={column.align === 'top' ? 'np-table-list--align-top' : ''}
          >
            {column.render && dataSource ? column.render(dataSource) : dataSource?.[column.dataIndex]}
          </Descriptions.Item>
        ))}
      </Descriptions>
    </div>
  );
};

TableList.TextStrong = ({ children, className, ...props }: TableListStrongTextProps) => (
  <Typography.Text className={`np-table-list__text np-table-list__text--strong ${className}`} {...props}>
    {children}
  </Typography.Text>
);

TableList.Link = ({ children, className, ...props }: TableListLinkProps) => (
  <Link className={`np-table-list__link ${className}`} {...props}>
    {children}
  </Link>
);

TableList.Button = ({ children, className, type, ...props }: TableListButtonProps) => (
  <Button type={type || 'default'} className={`np-table-list__button ${className}`} {...props}>
    {children}
  </Button>
);

export default TableList;
