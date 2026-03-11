/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

export type PostApiV10FileUploadBody = {
  /** File to upload */
  file?: Blob;
  /** Custom path for file storage (optional) */
  path?: string;
  /** Original filename (optional) */
  original?: string;
  /** Whether to compress the file */
  compress?: boolean;
  /** Custom extension to append to filename (optional) */
  extendName?: string;
};
