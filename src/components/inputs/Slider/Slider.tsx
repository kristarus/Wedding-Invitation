import React from 'react';
import { Slider as AntdSlider } from 'antd';

import { ISliderProps } from './Slider.types';

import './Slider.styles.scss';

const Slider = ({ className = '', ...props }: ISliderProps) => {
  return <AntdSlider className={`np-slider ${className}`} {...props} />;
};

export default Slider;
