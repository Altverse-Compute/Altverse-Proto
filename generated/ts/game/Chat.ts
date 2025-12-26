// Original file: proto/game.proto

import type { Role as _game_Role, Role__Output as _game_Role__Output } from '../game/Role';

export interface Chat {
  'id'?: (number);
  'content'?: (string);
  'author'?: (string);
  'role'?: (_game_Role);
  'world'?: (string);
}

export interface Chat__Output {
  'id'?: (number);
  'content'?: (string);
  'author'?: (string);
  'role'?: (_game_Role__Output);
  'world'?: (string);
}
