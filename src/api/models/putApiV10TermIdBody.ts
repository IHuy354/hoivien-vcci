/* eslint-disable */
import type { PutApiV10TermIdBodyPositionsItem } from './putApiV10TermIdBodyPositionsItem';

export type PutApiV10TermIdBody = {
  name?: string;
  start_date?: string;
  end_date?: string;
  /** @minItems 1 */
  positions?: PutApiV10TermIdBodyPositionsItem[];
};
