/* eslint-disable */

export interface ForgotPasswordResetRequest {
  reset_token: string;
  /** @minLength 6 */
  new_password: string;
}
