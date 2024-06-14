import { IBaseModalProps } from 'components/modals/BaseModal';

export interface IConfirmModalProps extends IBaseModalProps {
  loading?: boolean;
  agreeButtonText?: string;
  cancelButtonText?: string;
  onAgree: () => void;
  onClose: () => void;
}
