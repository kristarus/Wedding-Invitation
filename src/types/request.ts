/* eslint-disable @typescript-eslint/no-explicit-any */
export type ParamValueType = object | string | number | boolean;
export type RequestBodyType = object | string | null;

export type ResponseType = { response: Response; body: any };

export interface ILoginFunctionProps {
  email?: string | null;
  password?: string | null;
}

export interface ILogin2FaFunctionProps extends ILoginFunctionProps {
  totp: string;
}

export interface IRegisterFunctionProps extends ILoginFunctionProps {}

export interface RequestOptions extends Omit<RequestInit, 'body'> {
  isJson?: boolean;
  baseUrl?: string;
  params?: Record<string, ParamValueType | ParamValueType[]>;
  disableRedirectOnFail?: boolean;
  redirectOnFailUrl?: string;
  body?: RequestBodyType;
}

export class ResponseError extends Error {
  status: number;
  response: Response;
  body: any;

  constructor(status: number, response: Response, body) {
    super();
    this.name = 'ResponseError';
    this.status = status;
    this.response = response;
    this.body = body;
    Object.setPrototypeOf(this, ResponseError.prototype);
  }
}

export type FetchConfiguration = {
  refreshToken: () => Promise<void>;
  shouldRefreshToken: (error: ResponseError) => boolean;
  isForbidden: (error: ResponseError) => boolean;
  fetch: (url: string, options: RequestOptions) => Promise<any>;
};

export enum RequestError {
  REQUIRED_2FA = 'required2fa',
}
