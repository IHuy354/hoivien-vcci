/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import type { PutApiV10TermIdBodyPositionsItem } from './putApiV10TermIdBodyPositionsItem';

export type PutApiV10TermIdBody = {
  name?: string;
  start_date?: string;
  end_date?: string;
  /** @minItems 1 */
  positions?: PutApiV10TermIdBodyPositionsItem[];
};
