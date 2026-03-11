/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import type { PostApiV10TermBodyPositionsItem } from './postApiV10TermBodyPositionsItem';

export type PostApiV10TermBody = {
  name: string;
  start_date: string;
  end_date: string;
  /** @minItems 1 */
  positions: PostApiV10TermBodyPositionsItem[];
};
