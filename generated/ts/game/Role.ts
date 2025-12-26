// Original file: proto/game.proto

export const Role = {
  USER: 'USER',
  MOD: 'MOD',
  DEV: 'DEV',
} as const;

export type Role =
  | 'USER'
  | 0
  | 'MOD'
  | 1
  | 'DEV'
  | 2

export type Role__Output = typeof Role[keyof typeof Role]
