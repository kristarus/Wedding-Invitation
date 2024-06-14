import React, { useMemo } from 'react';

import { Table as AntdTable, TablePaginationConfig } from 'antd';

import { DefaultPagination } from 'constants/pagination';

import { ITableProps } from './Table.types';

import './Table.styles.scss';

const Table = <T extends object>({
  className,
  bordered,
  rounded,
  baseline,
  error,
  pagination = {},
  dataSource = [],
  leftHeaderComponent,
  centerHeaderComponent,
  rightHeaderComponent,
  summary,
  onChange,
  ...props
}: ITableProps<T>) => {
  const DefaultScroll = { x: '100%' };
  const DefaultPageSizeOptions = [5, 10, 20];

  const showHeader = leftHeaderComponent || rightHeaderComponent || centerHeaderComponent;

  const classes = useMemo(() => {
    const classes = [];

    if (bordered) {
      classes.push('np-table__bordered');
    }

    if (baseline) {
      classes.push('np-table__baseline');
    }

    if (error) {
      classes.push('np-table__error');
    }

    return classes;
  }, [baseline, bordered, error]);

  const onTableChange = (paginationConfig: TablePaginationConfig, filters, sorter, extra) => {
    const isPageLimitChanged = pagination && pagination?.pageSize && paginationConfig.pageSize !== pagination?.pageSize;

    const current = isPageLimitChanged ? DefaultPagination.START_PAGE : paginationConfig.current;
    const pageSize = paginationConfig.pageSize;

    if (onChange) {
      onChange({ ...paginationConfig, current, pageSize }, filters, sorter, extra);
    }
  };

  return (
    <div className={`np-table__wrapper ${rounded ? 'np-table__wrapper--rounded' : ''}`}>
      {showHeader && (
        <div className="np-table__header">
          {leftHeaderComponent && <div className="np-table__header-item">{leftHeaderComponent}</div>}
          {centerHeaderComponent && <div className="np-table__header-item">{centerHeaderComponent}</div>}
          {rightHeaderComponent && <div className="np-table__header-item">{rightHeaderComponent}</div>}
        </div>
      )}

      <AntdTable
        bordered={bordered}
        dataSource={dataSource}
        summary={summary}
        sticky={summary ? { offsetHeader: 10 } : {}}
        pagination={{
          pageSizeOptions: DefaultPageSizeOptions,
          defaultPageSize: DefaultPagination.PAGE_LIMIT,
          position: ['bottomCenter'],
          showSizeChanger: false,
          ...pagination,
        }}
        scroll={dataSource.length ? { ...DefaultScroll, ...props.scroll } : {}}
        onChange={onTableChange}
        className={`np-table ${classes} ${className}`}
        {...props}
      />
    </div>
  );
};

Table.Summary = AntdTable.Summary;

export default Table;
