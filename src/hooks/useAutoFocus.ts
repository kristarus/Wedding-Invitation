import { useEffect } from 'react';

export const useAutoFocus = ref => {
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);
};
