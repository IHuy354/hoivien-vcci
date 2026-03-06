/* eslint-disable */
import type { FileMutateCompressInfo } from './fileMutateCompressInfo';

export interface FileMutate {
  path?: string;
  original?: string;
  mime?: string;
  compress_info?: FileMutateCompressInfo;
  compress_status?: string;
}
