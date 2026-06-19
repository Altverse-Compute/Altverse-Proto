// Original file: proto/http.proto

import type { AdminModeServer as _http_AdminModeServer, AdminModeServer__Output as _http_AdminModeServer__Output } from '../http/AdminModeServer';

export interface AdminModeServersResponse {
  'servers'?: (_http_AdminModeServer)[];
  'online'?: (number);
  'count'?: (number);
}

export interface AdminModeServersResponse__Output {
  'servers'?: (_http_AdminModeServer__Output)[];
  'online'?: (number);
  'count'?: (number);
}
