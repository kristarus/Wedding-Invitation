import { IAutocompleteProps } from '../Autocomplete';

export interface IDebounecedAutocompleteProps extends IAutocompleteProps {
  delay?: number;
  minSearchLength?: number;
  onSearch: (search: string) => Promise<void>;
}
