import React, { useMemo } from 'react';
import { Button, Tooltip } from 'antd';

import { IIconButtonProps } from './IconButton.types';

import './IconButton.styles.scss';

const IconButton = ({
  className = '',
  type = 'text',
  size = 'small',
  tooltip,
  color = 'default',
  ...props
}: IIconButtonProps) => {
  const colorClass = useMemo(() => {
    if (type === 'text') {
      if (color === 'primary') {
        return 'np-icon-button__text--primary';
      }

      if (color === 'default') {
        return 'np-icon-button__text--default';
      }

      if (color === 'red') {
        return 'np-icon-button__text--red';
      }
    }
  }, [color, type]);

  return (
    <Tooltip title={tooltip}>
      <Button
        size={size}
        type={type}
        shape="circle"
        className={`np-icon-button ${colorClass} ${className}`}
        {...props}
      />
    </Tooltip>
  );
};

export default IconButton;
