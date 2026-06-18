// Original file: proto/http.proto

import type { ResponseStatus as _http_ResponseStatus, ResponseStatus__Output as _http_ResponseStatus__Output } from '../http/ResponseStatus';
import type { ServerElement as _http_ServerElement, ServerElement__Output as _http_ServerElement__Output } from '../http/ServerElement';

export interface ServersResponse {
  'status'?: (_http_ResponseStatus);
  'servers'?: (_http_ServerElement)[];
}

export interface ServersResponse__Output {
  'status'?: (_http_ResponseStatus__Output);
  'servers'?: (_http_ServerElement__Output)[];
}
