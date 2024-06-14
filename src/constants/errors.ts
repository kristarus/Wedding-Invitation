const COMMON = {
  SERVER_IS_NOT_RESPONDING: 'error.common.serverIsNotResponding',
  NOT_FOUND: 'error.common.pageNotFound',
  BAD_REQUEST: 'error.common.badRequest',
  UNKNOWN: 'error.common.unknown',
};
const AUTH = {
  INVALID_DATA: 'error.auth.invalidData',
  EMPTY_DATA: 'error.auth.emptyData',
  UNAUTHORIZED: 'error.auth.unauthorized',
  FORBIDDEN: 'error.auth.forbidden',
};

export const STATUS_CODE: Record<string, number> = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER: 500,
};

export const ErrorMessages: Record<string, Record<string, string>> = {
  COMMON,
  AUTH,
};

export const MAPPING_ERROR_STATUS_CODE_AND_ERROR_DATA: Record<number, Record<string, string>> = {
  [STATUS_CODE.UNAUTHORIZED]: {
    message: AUTH.UNAUTHORIZED,
  },
  [STATUS_CODE.FORBIDDEN]: {
    message: AUTH.FORBIDDEN,
  },

  [STATUS_CODE.NOT_FOUND]: {
    message: COMMON.NOT_FOUND,
  },
  [STATUS_CODE.BAD_REQUEST]: {
    message: COMMON.BAD_REQUEST,
  },

  [STATUS_CODE.SERVER]: {
    message: COMMON.SERVER_IS_NOT_RESPONDING,
  },
};

export const RequestErrorMessages = {};
