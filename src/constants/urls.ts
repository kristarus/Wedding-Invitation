export const BASE_URL = window._BASE_URL || process.env.REACT_APP_BASE_URL;
export const CLIENT_APP_URL = window._CLIENT_BASE_URL || process.env.REACT_APP_CLIENT_BASE_URL;

export const publicUrls = {
  main: '/',
};

const API_PREFIX = '/ps/api/v1';

export const apiUrls = {
  auth: {
    login: `${API_PREFIX}/login`,
    logout: `${API_PREFIX}/logout`,
    refresh: `${API_PREFIX}/refresh`,
    currentUser: `${API_PREFIX}/admin/profile`,
  },
};
