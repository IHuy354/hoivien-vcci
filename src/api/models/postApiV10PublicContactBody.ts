// @ts-nocheck

export type PostApiV10PublicContactBody = {
  /** @maxLength 255 */
  fullname: string;
  email: string;
  phone: string;
  /** @maxLength 255 */
  title: string;
  /** @maxLength 5000 */
  content: string;
};
