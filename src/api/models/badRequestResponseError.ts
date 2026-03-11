/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import type { BadRequestResponseErrorMessage } from './badRequestResponseErrorMessage';

export type BadRequestResponseError = {
  code?: string;
  message?: BadRequestResponseErrorMessage;
};
