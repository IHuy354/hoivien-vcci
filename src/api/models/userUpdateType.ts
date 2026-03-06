/* eslint-disable */

export type UserUpdateType = typeof UserUpdateType[keyof typeof UserUpdateType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UserUpdateType = {
  member: 'member',
  businessman: 'businessman',
} as const;
