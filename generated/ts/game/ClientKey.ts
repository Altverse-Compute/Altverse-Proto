// Original file: proto/game.proto

export const ClientKey = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  SHIFT: 'SHIFT',
} as const;

export type ClientKey =
  | 'UP'
  | 1
  | 'DOWN'
  | 2
  | 'LEFT'
  | 3
  | 'RIGHT'
  | 4
  | 'SHIFT'
  | 5

export type ClientKey__Output = typeof ClientKey[keyof typeof ClientKey]
