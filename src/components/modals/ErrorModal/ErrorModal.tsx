import React from 'react';
import { Alert } from 'antd';
import { useTranslation } from 'react-i18next';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import { BaseModal } from 'components';

import { IErrorModalProps } from './ErrorModal.types';

import './ErrorModal.styles.scss';

const ErrorModal = ({ title = 'Error', message = '', children, className = '', ...props }: IErrorModalProps) => {
  const { t } = useTranslation();

  return (
    <BaseModal
      icon={<ExclamationCircleOutlined />}
      title={t(title)}
      width={450}
      className={`np-error-modal ${className}`}
      {...props}
    >
      <Alert type="error" message={message} />

      {children}
    </BaseModal>
  );
};

export default ErrorModal;
