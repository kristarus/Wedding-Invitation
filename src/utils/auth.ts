import { StorageKey } from 'constants/localStorage';

export const accessTokenChangedCallback = function () {
  const disableUserReload = localStorage.getItem(StorageKey.DISABLE_RELOAD_USER);

  if (!disableUserReload) {
    localStorage.removeItem(StorageKey.DISABLE_RELOAD_USER);

    window.location.reload();
  } else {
    localStorage.removeItem(StorageKey.DISABLE_RELOAD_USER);
  }
};
