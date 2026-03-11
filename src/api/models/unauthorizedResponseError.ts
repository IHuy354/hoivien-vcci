/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import type { UnauthorizedResponseErrorMessage } from './unauthorizedResponseErrorMessage';

export type UnauthorizedResponseError = {
  code?: string;
  message?: UnauthorizedResponseErrorMessage;
};
