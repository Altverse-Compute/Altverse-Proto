// Original file: proto/game.proto

import type { Role as _connection_Role, Role__Output as _connection_Role__Output } from '../connection/Role';

export interface Chat {
  'id'?: (number);
  'content'?: (string);
  'author'?: (string);
  'role'?: (_connection_Role);
  'world'?: (string);
}

export interface Chat__Output {
  'id'?: (number);
  'content'?: (string);
  'author'?: (string);
  'role'?: (_connection_Role__Output);
  'world'?: (string);
}
