import React from 'react';
import { Tooltip, Typography } from 'antd';

import { ILinkProps } from './Link.types';

import './Link.styles.scss';

const { Link: AntdLink } = Typography;

const Link = ({ style, children, fontSize = '12px', ellipsis, className = '', ...props }: ILinkProps) => {
  const LinkComponent = (
    <AntdLink ellipsis={ellipsis} style={{ fontSize, ...style }} className={`np-link ${className}`} {...props}>
      {children}
    </AntdLink>
  );

  return ellipsis ? <Tooltip title={children}>{LinkComponent}</Tooltip> : LinkComponent;
};

export default Link;
