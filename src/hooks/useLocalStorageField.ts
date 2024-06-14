import { useEffect, useCallback } from 'react';

type ListenerType = (newValue: unknown, oldValue: unknown) => void;

interface ILocalStorageFieldOptions {
  addOnMount?: boolean;
}

const useLocalStorageField = (field: string, listener: ListenerType, options?: ILocalStorageFieldOptions) => {
  const { addOnMount = true } = options || {};

  const handleListener = useCallback(
    ({ key, newValue, oldValue }) => {
      if (key !== field) {
        return;
      }

      listener(newValue, oldValue);
    },
    [field, listener],
  );

  const addListener = useCallback(() => {
    window.addEventListener('storage', handleListener);
  }, [handleListener]);

  const removeListener = useCallback(() => {
    window.removeEventListener('storage', handleListener);
  }, [handleListener]);

  useEffect(() => {
    if (addOnMount) {
      addListener();
    }

    return () => {
      removeListener();
    };
  }, [addOnMount, addListener, removeListener]);

  return { addListener, removeListener };
};

export default useLocalStorageField;
