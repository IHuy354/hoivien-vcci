export interface ApiResponseWrapper<T> {
  httpStatus: number;
  isSuccess: boolean;
  data: T;
  errorCode: string | null;
  errorMessage: string | null;
}

export interface AccountData {
  id: string;
  email: string;
  role_id: string;
  role_code: string;
  is_first_login: boolean;
}

export interface ProfileData {
  account_id: string;
  full_name?: string | null;
  phone?: string | null;
  avatar_url?: string | null;
  department_id?: string | null;
  school_id?: string | null;
  mentor_id?: string | null;
  contract_url?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
}
