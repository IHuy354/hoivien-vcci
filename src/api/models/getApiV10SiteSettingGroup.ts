/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

export type GetApiV10SiteSettingGroup = typeof GetApiV10SiteSettingGroup[keyof typeof GetApiV10SiteSettingGroup];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetApiV10SiteSettingGroup = {
  general: 'general',
  contact: 'contact',
  social: 'social',
  counter: 'counter',
  event: 'event',
  seo: 'seo',
} as const;
