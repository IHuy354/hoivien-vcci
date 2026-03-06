/* eslint-disable */

export type UserCreateType = typeof UserCreateType[keyof typeof UserCreateType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UserCreateType = {
  member: 'member',
  businessman: 'businessman',
} as const;
