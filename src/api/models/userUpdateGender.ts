/* eslint-disable */

export type UserUpdateGender = typeof UserUpdateGender[keyof typeof UserUpdateGender];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UserUpdateGender = {
  male: 'male',
  female: 'female',
  other: 'other',
} as const;
