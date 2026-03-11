/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import type { Business } from './business';

export type BusinessGetAllResponseResponseData = {
  rows: Business[];
  count: number;
  page: number;
  pageSize: number;
};
