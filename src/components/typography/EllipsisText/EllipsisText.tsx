import React from 'react';
import { Tooltip, Typography } from 'antd';
import { IEllipsisTextProps } from './EllipsisText.types';

import './EllipsisText.styles.scss';

const { Paragraph } = Typography;

const EllipsisText = ({ style, children, fontSize = '12px', width, className = '', ...props }: IEllipsisTextProps) => {
  return (
    <Tooltip title={children}>
      <Paragraph
        ellipsis
        style={{ fontSize, maxWidth: width, ...style }}
        className={`np-ellipsis-text ${className}`}
        {...props}
      >
        {children}
      </Paragraph>
    </Tooltip>
  );
};

export default EllipsisText;
