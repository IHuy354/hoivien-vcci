/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import type { UserAuthMutatePasswordHistory } from './userAuthMutatePasswordHistory';

export interface UserAuthMutate {
  user_id?: string;
  password_hash?: string;
  last_login_at?: string;
  password_changed_at?: string;
  login_attempts?: number;
  locked_until?: string;
  twofa_secret?: string;
  twofa_backup_codes?: string;
  twofa_enabled?: boolean;
  twofa_method?: string;
  password_history?: UserAuthMutatePasswordHistory;
  reset_password_otp_hash?: string;
  reset_password_otp_expires_at?: string;
  reset_password_otp_attempts?: number;
  reset_password_otp_sent_at?: string;
}
