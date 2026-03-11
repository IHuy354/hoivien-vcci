/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import type { UserCreateType } from './userCreateType';
import type { UserCreateGender } from './userCreateGender';

export interface UserCreate {
  email: string;
  /** @minLength 6 */
  password: string;
  username: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  avatar_id?: string;
  type?: UserCreateType;
  birth_date?: string;
  /** @nullable */
  hometown?: string | null;
  gender?: UserCreateGender;
  /** @nullable */
  bio?: string | null;
}
