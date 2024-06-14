import React from 'react';
import { Typography } from 'antd';
import { CopyIcon } from 'assets';
import { CheckOutlined } from '@ant-design/icons';

import { ICopyableTextProps } from './CopyableText.types';

import './CopyableText.styles.scss';

const { Text } = Typography;

const CopyableText = ({ children, className, ...props }: ICopyableTextProps) => {
  return (
    <Text
      copyable={{
        icon: [
          <CopyIcon key="1" className="np-copyable-text__icon" />,
          <CheckOutlined key="2" className="np-copyable-text__icon" />,
        ],
      }}
      className={`np-copyable-text ${className}`}
      {...props}
    >
      {children}
    </Text>
  );
};

export default CopyableText;
