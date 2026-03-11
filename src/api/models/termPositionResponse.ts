/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import type { TermMemberResponse } from './termMemberResponse';

export interface TermPositionResponse {
  position_id: string;
  name: string;
  members: TermMemberResponse[];
}
