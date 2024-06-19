import { IErrorHandlerResponse, asyncErrorHandler } from 'utils/errorHandler';
import request from './request.service';
import { filterEmptyParams } from 'utils/common';

export interface SendQuestionnaireParams {
  name: string;
  presence: string;
  alcohol?: string;
  note?: string;
}

type CreateAdminResponse = IErrorHandlerResponse<null>;

export const sendQuestionnaire = async (body: SendQuestionnaireParams): Promise<CreateAdminResponse> => {
  const data = {
    Гость: body.name,
    Присутствие: body.presence,
    'Предпочтение по алкоголю': body?.alcohol,
    Примечание: body?.note,
  };

  const callback = async () => {
    return await request('/form/kGCncmxoyX6V3PZUQWzLjt', {
      method: 'POST',
      body: filterEmptyParams(data),
      baseUrl: 'https://api.sheetmonkey.io',
    });
  };

  return await asyncErrorHandler(callback);
};
