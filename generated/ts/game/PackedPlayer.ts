// Original file: proto/game.proto


export interface PackedPlayer {
  'name'?: (string);
  'id'?: (number);
  'x'?: (number);
  'y'?: (number);
  'radius'?: (number);
  'speed'?: (number);
  'energy'?: (number);
  'maxEnergy'?: (number);
  'deathTimer'?: (number);
  'state'?: (number);
  'stateMeta'?: (number);
  'area'?: (number);
  'world'?: (string);
  'died'?: (boolean);
  'hero'?: (number);
}

export interface PackedPlayer__Output {
  'name'?: (string);
  'id'?: (number);
  'x'?: (number);
  'y'?: (number);
  'radius'?: (number);
  'speed'?: (number);
  'energy'?: (number);
  'maxEnergy'?: (number);
  'deathTimer'?: (number);
  'state'?: (number);
  'stateMeta'?: (number);
  'area'?: (number);
  'world'?: (string);
  'died'?: (boolean);
  'hero'?: (number);
}
