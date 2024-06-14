import React from 'react';
import { Modal } from 'antd';

import { OverlayLoader } from 'components';
import BaseModalTitle from './components/BaseModalTitle';

import { IBaseModalProps } from './BaseModal.types';

import './BaseModal.styles.scss';

const BaseModal = ({
  children,
  maxWidth,
  icon,
  title,
  loading,
  footer = [],
  style = {},
  className = '',
  onClose,
  ...props
}: IBaseModalProps) => {
  return (
    <Modal
      centered
      destroyOnClose
      footer={footer}
      title={<BaseModalTitle title={title} icon={icon} />}
      className={`np-base-modal ${className}`}
      style={{ maxWidth, ...style }}
      onCancel={onClose}
      {...props}
    >
      {loading && <OverlayLoader borderRadius={16} size="large" />}

      {children}
    </Modal>
  );
};

export default BaseModal;
