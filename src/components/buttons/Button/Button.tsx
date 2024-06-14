import React, { useMemo } from 'react';
import { Button as AntdButton } from 'antd';
import { IButtonProps } from './Button.types';

import './Button.styles.scss';

const Button = ({
  type = 'primary',
  shape = 'round',
  color = 'primary',
  children,
  className,
  ...props
}: IButtonProps) => {
  const colorClass = useMemo(() => {
    if (type === 'default') {
      if (color === 'primary') {
        return 'np-button__default--primary';
      }

      if (color === 'white') {
        return 'np-button__default--white';
      }

      if (color === 'red') {
        return 'np-button__default--red';
      }
    }

    if (type === 'primary') {
      if (color === 'primary') {
        return 'np-button__primary--primary';
      }

      if (color === 'red') {
        return 'np-button__primary--red';
      }
    }
  }, [color, type]);

  return (
    <AntdButton type={type} shape={shape} className={`np-button ${colorClass} ${className}`} {...props}>
      {children}
    </AntdButton>
  );
};

export default Button;
