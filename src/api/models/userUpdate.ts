/* eslint-disable */
import type { UserUpdateType } from './userUpdateType';
import type { UserUpdateGender } from './userUpdateGender';

export interface UserUpdate {
  username?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  avatar_id?: string;
  type?: UserUpdateType;
  birth_date?: string;
  /** @nullable */
  hometown?: string | null;
  gender?: UserUpdateGender;
  /** @nullable */
  bio?: string | null;
}
