import UrlRestoringService from './urlRestoring.service';
import _isEmpty from 'lodash/isEmpty';
import request from './request.service';

import { apiUrls } from 'constants/urls';
import { StorageKey } from 'constants/localStorage';
import { ErrorMessages } from 'constants/errors';

import { ILogin2FaFunctionProps, ILoginFunctionProps, IRegisterFunctionProps, RequestError } from 'types/request';

const parse = JSON.parse;
const stringify = JSON.stringify;

const auth = {
  /**
   * Remove an item from the used storage
   * @param  {String} key [description]
   */
  clear(key: string) {
    if (localStorage && localStorage.getItem(key)) {
      return localStorage.removeItem(key);
    }

    if (sessionStorage && sessionStorage.getItem(key)) {
      return sessionStorage.removeItem(key);
    }

    return null;
  },

  /**
   * Clear all app storage
   */
  clearAppStorage() {
    if (localStorage) {
      localStorage.clear();
    }

    if (sessionStorage) {
      sessionStorage.clear();
    }
  },

  clearTokens() {
    auth.clear(StorageKey.ACCESS_TOKEN);
    auth.clear(StorageKey.REFRESH_TOKEN);
  },

  /**
   * Returns data from storage
   * @param  {String} key Item to get from the storage
   * @return {String|Object}     Data from the storage
   */
  get(key: string) {
    const localStorageItem = localStorage.getItem(key);
    const sessionStorageItem = sessionStorage.getItem(key);

    if (localStorage && localStorageItem !== null) {
      return parse(localStorageItem) || null;
    }

    if (sessionStorage && sessionStorageItem) {
      return parse(sessionStorageItem) || null;
    }

    return null;
  },
  /**
   * Set data in storage
   * @param {String|Object}  value    The data to store
   * @param {String}  key
   * @param {Boolean} isLocalStorage  Defines if we need to store in localStorage or sessionStorage
   */
  set(value: string | object, key: string, isLocalStorage: boolean) {
    if (_isEmpty(value)) {
      return null;
    }

    if (isLocalStorage && localStorage) {
      return localStorage.setItem(key, stringify(value));
    }

    if (sessionStorage) {
      return sessionStorage.setItem(key, stringify(value));
    }

    return null;
  },

  getAccessToken() {
    return auth.get(StorageKey.ACCESS_TOKEN);
  },

  getRefreshToken() {
    return auth.get(StorageKey.REFRESH_TOKEN);
  },

  setRefreshToken(value = '', options?: { isLocalStorage?: boolean }) {
    const { isLocalStorage = true } = options || {};

    return auth.set(value, StorageKey.REFRESH_TOKEN, isLocalStorage);
  },

  setAccessToken(value = '', options?: { isLocalStorage?: boolean; disableReload?: boolean }) {
    const { isLocalStorage = true, disableReload } = options || {};

    if (disableReload) {
      localStorage.setItem(StorageKey.DISABLE_RELOAD_USER, 'true');
    }

    auth.set(value, StorageKey.ACCESS_TOKEN, isLocalStorage);
  },

  async login({ email = null, password = null }: ILoginFunctionProps): Promise<unknown> {
    if (!email || !password) {
      throw new Error(ErrorMessages.AUTH.EMPTY_DATA);
    }

    auth.clearTokens();

    try {
      const result = await request(apiUrls.auth.login, {
        method: 'POST',
        body: {
          email,
          password,
        },
      });
      if (result.access_token) {
        auth.setAccessToken(result.access_token);
      }

      window.location.href = UrlRestoringService.getUrl();
    } catch (error) {
      const result = await error.response.json();

      if (result?.key === RequestError.REQUIRED_2FA) {
        return RequestError.REQUIRED_2FA;
      } else {
        throw error;
      }
    }
  },

  async login2FA({ email, password, totp }: ILogin2FaFunctionProps) {
    if (!email || !password || !totp) {
      throw new Error(ErrorMessages.AUTH.EMPTY_DATA);
    }

    auth.clearTokens();

    const result = await request(apiUrls.auth.login, {
      method: 'POST',
      body: {
        email,
        password,
        totp,
      },
    });

    if (result.access_token) {
      auth.setAccessToken(result.access_token);
    } else {
      throw new Error();
    }
    window.location.href = UrlRestoringService.getUrl();
  },

  async recoveryLogin({ email, password, otp }) {
    if (!email || !password || !otp) {
      throw new Error(ErrorMessages.AUTH.EMPTY_DATA);
    }

    auth.clearTokens();

    const result = await request(apiUrls.auth.login, {
      method: 'POST',
      body: {
        email,
        password,
        otp,
      },
    });

    if (result.access_token) {
      auth.setAccessToken(result.access_token);
    } else {
      throw new Error();
    }
    window.location.href = UrlRestoringService.getUrl();
  },

  async register({ email = null, password = null }: IRegisterFunctionProps) {
    if (!email || !password) {
      throw new Error(ErrorMessages.AUTH.EMPTY_DATA);
    }
    auth.clearTokens();

    const result = await request(apiUrls.auth.login, {
      method: 'POST',
      body: {
        email,
        password,
      },
    }).then(response => response.json());

    auth.setAccessToken(result.accessToken);
    auth.setRefreshToken(result.refreshToken);

    window.location.href = UrlRestoringService.getUrl();
  },

  async logout() {
    auth.clearTokens();

    // await request(apiUrls.auth.logout, {
    //   method: 'POST',
    // });

    // window.location.href = publicUrls.login;
  },
};

export default auth;
