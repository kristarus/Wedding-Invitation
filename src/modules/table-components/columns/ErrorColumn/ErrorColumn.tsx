import React from 'react';
import { Tooltip, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { ExclamationCircleFilled } from '@ant-design/icons';

import { IErrorColumnProps } from './ErrorColumn.types';

import './ErrorColumn.styles.scss';

const { Text } = Typography;

const ErrorsList = ({ errors }: { errors: string[] }) => {
  const { t } = useTranslation();

  return (
    <ul className="np-error-column__tooltip">
      {errors.map(error => (
        <li key={error}>
          <Text>{t(error)}</Text>
        </li>
      ))}
    </ul>
  );
};

const ErrorColumn = ({ value, type = 'error', errors = [], className = '', ...props }: IErrorColumnProps) => {
  const typeClass = type === 'error' ? 'np-error-column--error' : 'np-error-column--warning';

  return (
    <Text className={`np-error-column ${typeClass} ${className}`} {...props}>
      {value}

      <Tooltip title={<ErrorsList errors={errors} />}>
        <ExclamationCircleFilled className="np-error-column__icon" />
      </Tooltip>
    </Text>
  );
};

export default ErrorColumn;
