/* eslint-disable */
import type { BusinessGetAllResponseResponseData } from './businessGetAllResponseResponseData';
import type { BusinessGetAllResponseViolations } from './businessGetAllResponseViolations';

export interface BusinessGetAllResponse {
  /** @nullable */
  message: string | null;
  /** @nullable */
  message_en: string | null;
  responseData: BusinessGetAllResponseResponseData;
  status: string;
  timeStamp: string;
  /** @nullable */
  violations: BusinessGetAllResponseViolations;
}
