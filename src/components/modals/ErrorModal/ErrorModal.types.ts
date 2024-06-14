import { IBaseModalProps } from 'components/modals/BaseModal';
import React from 'react';

export interface IErrorModalProps extends IBaseModalProps {
  title?: string;
  message?: React.ReactNode;
}
