// @ts-nocheck
import type { RoleMutatePermissions } from './roleMutatePermissions';

export interface RoleMutate {
  name?: string;
  description?: string;
  permissions?: RoleMutatePermissions;
}
