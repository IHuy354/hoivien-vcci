/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import type { TermPositionResponse } from './termPositionResponse';

export interface TermResponse {
  term_id: string;
  name: string;
  start_date: string;
  end_date: string;
  positions: TermPositionResponse[];
}
