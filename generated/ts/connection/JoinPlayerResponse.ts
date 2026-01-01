// Original file: proto/rpc.proto

import type { Role as _connection_Role, Role__Output as _connection_Role__Output } from '../connection/Role';

export interface JoinPlayerResponse {
  'name'?: (string);
  'role'?: (_connection_Role);
  'id'?: (string);
}

export interface JoinPlayerResponse__Output {
  'name'?: (string);
  'role'?: (_connection_Role__Output);
  'id'?: (string);
}
