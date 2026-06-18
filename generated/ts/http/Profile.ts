// Original file: proto/http.proto

import type { AccountRole as _http_AccountRole, AccountRole__Output as _http_AccountRole__Output } from '../http/AccountRole';

export interface Profile {
  'vp'?: (number);
  'username'?: (string);
  'highest'?: ({[key: string]: string});
  'accessories'?: (string)[];
  'role'?: (_http_AccountRole);
}

export interface Profile__Output {
  'vp'?: (number);
  'username'?: (string);
  'highest'?: ({[key: string]: string});
  'accessories'?: (string)[];
  'role'?: (_http_AccountRole__Output);
}
