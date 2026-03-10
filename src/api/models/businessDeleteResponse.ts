// @ts-nocheck
import type { BusinessDeleteResponseResponseData } from './businessDeleteResponseResponseData';
import type { BusinessDeleteResponseViolations } from './businessDeleteResponseViolations';

export interface BusinessDeleteResponse {
  /** @nullable */
  message: string | null;
  /** @nullable */
  message_en: string | null;
  responseData: BusinessDeleteResponseResponseData;
  status: string;
  timeStamp: string;
  /** @nullable */
  violations: BusinessDeleteResponseViolations;
}
