// @ts-nocheck
import type { Business } from './business';
import type { BusinessGetOneResponseViolations } from './businessGetOneResponseViolations';

export interface BusinessGetOneResponse {
  /** @nullable */
  message: string | null;
  /** @nullable */
  message_en: string | null;
  responseData: Business;
  status: string;
  timeStamp: string;
  /** @nullable */
  violations: BusinessGetOneResponseViolations;
}
