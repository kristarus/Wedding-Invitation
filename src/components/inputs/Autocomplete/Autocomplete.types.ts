import { AutoCompleteProps } from 'antd';
import type { IInputProps } from 'components/inputs/Input';

export interface IAutocompleteProps extends AutoCompleteProps {
  inputProps?: IInputProps;
  loading?: boolean;
}
