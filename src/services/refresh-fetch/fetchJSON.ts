import merge from 'lodash/merge';
import { RequestOptions, ResponseError, RequestBodyType } from 'types/request';

const checkStatus = ({ response, body }) => {
  if (response.ok) {
    return body;
  } else {
    throw new ResponseError(response.status, response, body);
  }
};

const tryParseJSON = json => {
  if (!json) {
    return null;
  }

  try {
    return JSON.parse(json);
  } catch (e) {
    throw new Error(`Failed to parse unexpected JSON response: ${json}`);
  }
};

const getResponseBody = response => {
  const contentType = response.headers.get('content-type');
  return contentType && contentType.indexOf('json') >= 0
    ? response.clone().text().then(tryParseJSON)
    : response.clone().text();
};

const fetchJSON = async (url: string, options: RequestOptions = {}) => {
  const isJson = options.isJson ?? true;

  const jsonOptions: RequestInit = merge(
    {
      headers: isJson ? { 'Content-Type': 'application/json' } : {},
    },
    options as RequestInit,
  );

  return fetch(url, jsonOptions)
    .then(response => {
      return getResponseBody(response).then((body: RequestBodyType) => ({
        response,
        body,
      }));
    })
    .then(checkStatus);
};

// const fetchJSON = async (url: string, options: RequestOptions = {}): Promise<Response> => {
//   return fetch(url, options as RequestInit).then(checkStatus);
// };

export default fetchJSON;
