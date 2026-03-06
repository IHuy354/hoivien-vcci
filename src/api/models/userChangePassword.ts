/* eslint-disable */

export interface UserChangePassword {
  oldPassword: string;
  /** @minLength 6 */
  newPassword: string;
}
