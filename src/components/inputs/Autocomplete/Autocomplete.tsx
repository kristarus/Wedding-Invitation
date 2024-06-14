import React from 'react';
import { AutoComplete, Empty, Spin } from 'antd';
import { Input } from 'components';
import { IAutocompleteProps } from './Autocomplete.types';

import './Autocomplete.styles.scss';

const NotFoundContent = ({ loading }: { loading: boolean }) => {
  if (loading) {
    return (
      <div className="np-autocomplete__not-found">
        <Spin />
      </div>
    );
  }

  return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
};

const Autocomplete = ({ inputProps = {}, loading, className, ...props }: IAutocompleteProps) => {
  return (
    <AutoComplete
      className={`np-autocomplete ${className}`}
      notFoundContent={<NotFoundContent loading={loading} />}
      {...props}
    >
      <Input {...inputProps} />
    </AutoComplete>
  );
};

export default Autocomplete;
