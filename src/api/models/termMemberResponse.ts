// @ts-nocheck
import type { TermMemberAvatarResponse } from './termMemberAvatarResponse';

export interface TermMemberResponse {
  user_id: string;
  /** @nullable */
  last_name: string | null;
  /** @nullable */
  first_name: string | null;
  /** @nullable */
  avatar: TermMemberAvatarResponse;
}
