// @ts-nocheck
import type { FileCompressInfo } from './fileCompressInfo';

export interface File {
  id?: string;
  path?: string;
  original?: string;
  mime?: string;
  compress_info?: FileCompressInfo;
  compress_status?: string;
  created_by?: string;
  created_at?: string;
}
