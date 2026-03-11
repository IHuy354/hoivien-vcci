/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import type { PostApiV10SiteSettingBodyGroupName } from './postApiV10SiteSettingBodyGroupName';
import type { PostApiV10SiteSettingBodyDataType } from './postApiV10SiteSettingBodyDataType';

export type PostApiV10SiteSettingBody = {
  /** @pattern ^[a-z0-9_]+$ */
  key: string;
  /** @nullable */
  value?: string | null;
  group_name?: PostApiV10SiteSettingBodyGroupName;
  data_type?: PostApiV10SiteSettingBodyDataType;
  /** @nullable */
  description?: string | null;
};
