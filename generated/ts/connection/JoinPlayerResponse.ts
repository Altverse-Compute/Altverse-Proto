// Original file: proto/rpc.proto

import type { Role as _connection_Role, Role__Output as _connection_Role__Output } from '../connection/Role';

export interface JoinPlayerResponse {
  'name'?: (string);
  'role'?: (_connection_Role);
}

export interface JoinPlayerResponse__Output {
  'name'?: (string);
  'role'?: (_connection_Role__Output);
}
