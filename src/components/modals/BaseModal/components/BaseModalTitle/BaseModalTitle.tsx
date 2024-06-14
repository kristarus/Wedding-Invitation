import React from 'react';

import { IBaseModalTitleProps } from './BaseModalTitle.types';

import './BaseModalTitle.styles.scss';

const BaseModalTitle = ({ title, icon }: IBaseModalTitleProps) => {
  if (icon) {
    return (
      <div className="np-base-modal-title">
        {icon} {title}
      </div>
    );
  }

  return <>{title}</>;
};

export default BaseModalTitle;
