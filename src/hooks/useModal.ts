import { useCallback, useState } from 'react';

interface IModalHook {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useModal = (): IModalHook => {
  const [open, setOpen] = useState(false);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  return { open, onOpen, onClose };
};
