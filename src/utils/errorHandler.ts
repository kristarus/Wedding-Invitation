import { ErrorMessages, RequestErrorMessages } from 'constants/errors';
import { ResponseError } from 'types/request';

export interface IErrorHandlerOptions<T> {
  defaultErrorReturn?: T;
  errorMessage?: string;
  errors?: Record<string, string>;
  allowErrorBodyMessage?: boolean;
}

export interface IErrorHandlerResponse<T> {
  data: T;
  success: boolean;
  errorMessage?: string;
  error?: ResponseError;
}

export const asyncErrorHandler = async <T>(
  callback: () => Promise<T>,
  options?: IErrorHandlerOptions<T>,
): Promise<IErrorHandlerResponse<T>> => {
  const {
    defaultErrorReturn = null,
    errorMessage = ErrorMessages.COMMON.UNKNOWN,
    errors = {},
    allowErrorBodyMessage,
  } = options || {};

  try {
    const data = await callback();
    return { data, success: true };
  } catch (error) {
    if (!error?.body?.key) {
      return { data: defaultErrorReturn, success: false, errorMessage, error };
    }

    const requestErrors = { ...RequestErrorMessages, ...errors };

    const errorBodyMessage = allowErrorBodyMessage ? error?.body?.message : null;
    const message = errorBodyMessage || requestErrors[error.body.key] || errorMessage;

    return { data: defaultErrorReturn, success: false, errorMessage: message, error };
  }
};
