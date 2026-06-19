// Original file: proto/game.proto

export const ClientAbility = {
  FIRST: 'FIRST',
  SECOND: 'SECOND',
} as const;

export type ClientAbility =
  | 'FIRST'
  | 1
  | 'SECOND'
  | 2

export type ClientAbility__Output = typeof ClientAbility[keyof typeof ClientAbility]
