import 'whatwg-fetch';
import { configureRefreshFetch, fetchJSON } from './refresh-fetch';
import merge from 'lodash/merge';
import auth from './auth.service';
import { BASE_URL, apiUrls } from 'constants/urls';
import { ParamValueType, RequestOptions, ResponseError } from 'types/request';

const encodeValue = (value: ParamValueType) => {
  if (typeof value === 'object') {
    return encodeURIComponent(JSON.stringify(value));
  }

  return encodeURIComponent(value);
};

const convertParamArray = (key: string, paramArray: Array<ParamValueType>) => {
  let paramStr = '';
  paramArray.forEach((param, index) => {
    const endSymbol = paramArray?.length - 1 === index ? '' : '&';

    paramStr = paramStr + key + '=' + encodeValue(param) + endSymbol;
  });
  return paramStr;
};

const formatQueryParams = (params: Record<string, ParamValueType | ParamValueType[]>) =>
  Object.keys(params)
    .map(k => {
      const paramValue = params[k];
      return Array.isArray(paramValue)
        ? convertParamArray(encodeURIComponent(k), paramValue)
        : `${encodeURIComponent(k)}=${encodeValue(paramValue)}`;
    })
    .join('&');

const fetchJSONWithToken = (url: string, options: RequestOptions = {}) => {
  const token = auth.getAccessToken();

  const base = options.baseUrl || BASE_URL;

  const isJson = options.isJson ?? true;
  let optionsWithToken = { ...options };

  if (token != null) {
    optionsWithToken = merge({}, options, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  if (optionsWithToken && optionsWithToken.body && isJson) {
    optionsWithToken.body = JSON.stringify(optionsWithToken.body);
  }

  if (optionsWithToken && optionsWithToken.params) {
    const params = formatQueryParams(optionsWithToken.params);
    url = `${url}?${params}`;
  }

  return fetchJSON(base + url, optionsWithToken);
};

const shouldRefreshToken = (error: ResponseError) => {
  return error.response.status === 401;
};

const isForbidden = (error: ResponseError) => {
  return error.response.status === 403;
};

const refreshToken = async () => {
  return fetchJSONWithToken(apiUrls.auth.refresh)
    .then(response => {
      auth.setAccessToken(response.access_token, { disableReload: true });
    })
    .catch(error => {
      // Clear token and continue with the Promise catch chain
      auth.clearTokens();
      throw error;
    });
};

const request = configureRefreshFetch({
  fetch: fetchJSONWithToken,
  shouldRefreshToken,
  refreshToken,
  isForbidden,
});

export default request;
