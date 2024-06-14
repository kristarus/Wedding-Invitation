import React from 'react';
import { useTranslation } from 'react-i18next';

import { BaseModal, Button } from 'components';

import { IConfirmModalProps } from './ConfirmModal.types';

import './ConfirmModal.styles.scss';

const ConfirmModal = ({
  open,
  loading,
  agreeButtonText = 'form.button.confirm',
  cancelButtonText = 'form.button.cancel',
  children,
  onClose,
  onAgree,
  ...props
}: IConfirmModalProps) => {
  const { t } = useTranslation();

  return (
    <BaseModal open={open} onClose={onClose} className="np-confirm-modal" {...props}>
      <>
        {children}

        <div className="np-confirm-modal__buttons">
          <Button block type="default" disabled={loading} onClick={onClose}>
            {t(cancelButtonText)}
          </Button>

          <Button block loading={loading} onClick={onAgree}>
            {t(agreeButtonText)}
          </Button>
        </div>
      </>
    </BaseModal>
  );
};

export default ConfirmModal;
