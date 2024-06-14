import React, { useCallback, useEffect, useState } from 'react';

import { Autocomplete } from 'components';

import useDebounce from 'hooks/useDebounce';

import { MIN_PATTERN_LENGTH, SEARCH_DEBOUNCE_DELAY } from 'constants/search';

import { IDebounecedAutocompleteProps } from './DebounecedAutocomplete.types';

const DebounecedAutocomplete = ({
  value,
  delay = SEARCH_DEBOUNCE_DELAY,
  minSearchLength = MIN_PATTERN_LENGTH,
  onSearch,
  onChange,
  onSelect,
  ...props
}: IDebounecedAutocompleteProps) => {
  const [loading, setLoading] = useState(false);
  const [initialSearch, setInitialSearch] = useState('');

  const debouncedSearch = useDebounce(value, delay);

  const handleSearch = useCallback(
    async (search: string) => {
      setLoading(true);

      await onSearch(search);

      setInitialSearch(debouncedSearch);
      setLoading(false);
    },
    [debouncedSearch, onSearch],
  );

  const handleDebouncedSearch = useCallback(() => {
    const isInputEmpty = debouncedSearch.length === 0;
    const isInputNotTouched = isInputEmpty && initialSearch.length === 0;
    const isValidLength = debouncedSearch.length >= minSearchLength;

    if (isInputNotTouched || debouncedSearch === initialSearch) {
      return;
    }

    if (isValidLength || isInputEmpty) {
      handleSearch(debouncedSearch);
    }
  }, [debouncedSearch, initialSearch, minSearchLength, handleSearch]);

  useEffect(() => {
    handleDebouncedSearch();
  }, [handleDebouncedSearch]);

  return <Autocomplete value={value} loading={loading} onSelect={onSelect} onChange={onChange} {...props} />;
};

export default DebounecedAutocomplete;
