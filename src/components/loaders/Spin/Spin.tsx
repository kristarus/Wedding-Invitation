import React from 'react';
import { Spin as AntSpin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { ISpinProps } from './Spin.types';

const Spin = ({ size = 'large', ...props }: ISpinProps) => {
  return <AntSpin size={size} indicator={<LoadingOutlined />} {...props} />;
};

export default Spin;
