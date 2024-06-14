import React from 'react';
import { BaseComponentProps } from 'types/components';

export interface IBaseModalTitleProps extends BaseComponentProps {
  title: React.ReactNode;
  icon: JSX.Element;
}
