// Original file: proto/http.proto

export const AccountRole = {
  USER: 'USER',
  MOD: 'MOD',
  DEV: 'DEV',
  ADMIN: 'ADMIN',
} as const;

export type AccountRole =
  | 'USER'
  | 0
  | 'MOD'
  | 1
  | 'DEV'
  | 2
  | 'ADMIN'
  | 3

export type AccountRole__Output = typeof AccountRole[keyof typeof AccountRole]
