/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

export type PostApiV10SiteSettingBodyDataType = typeof PostApiV10SiteSettingBodyDataType[keyof typeof PostApiV10SiteSettingBodyDataType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostApiV10SiteSettingBodyDataType = {
  text: 'text',
  number: 'number',
  boolean: 'boolean',
  url: 'url',
  date: 'date',
  uuid: 'uuid',
} as const;
