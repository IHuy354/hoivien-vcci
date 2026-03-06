/* eslint-disable */
import type { TermMemberResponse } from './termMemberResponse';

export interface TermPositionResponse {
  position_id: string;
  name: string;
  members: TermMemberResponse[];
}
