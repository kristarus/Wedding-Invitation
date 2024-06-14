import { IErrorHandlerResponse } from './errorHandler';

export const mockRequest = async <T>(data: T, ms = 1000): Promise<IErrorHandlerResponse<T>> => {
  return await new Promise(resolve => setTimeout(() => resolve({ data, success: true }), ms));
};
