// Original file: proto/http.proto

export const WorldEffect = {
  RAIN: 'RAIN',
  RAINSTORM: 'RAINSTORM',
  SNOW: 'SNOW',
  SNOWSTORM: 'SNOWSTORM',
  AUTUMN: 'AUTUMN',
} as const;

export type WorldEffect =
  | 'RAIN'
  | 1
  | 'RAINSTORM'
  | 2
  | 'SNOW'
  | 3
  | 'SNOWSTORM'
  | 4
  | 'AUTUMN'
  | 5

export type WorldEffect__Output = typeof WorldEffect[keyof typeof WorldEffect]
