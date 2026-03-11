/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

export interface UserChangePassword {
  oldPassword: string;
  /** @minLength 6 */
  newPassword: string;
}
