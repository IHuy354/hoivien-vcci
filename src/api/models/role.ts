/* eslint-disable */
import type { RolePermissions } from './rolePermissions';

export interface Role {
  id?: string;
  name?: string;
  description?: string;
  permissions?: RolePermissions;
  created_at?: string;
  updated_at?: string;
  created_by?: string;
  updated_by?: string;
}
