// Original file: proto/http.proto

import type { WorldProperties as _http_WorldProperties, WorldProperties__Output as _http_WorldProperties__Output } from '../http/WorldProperties';
import type { AreaResponse as _http_AreaResponse, AreaResponse__Output as _http_AreaResponse__Output } from '../http/AreaResponse';

export interface WorldResponse {
  'properties'?: (_http_WorldProperties | null);
  'areas'?: ({[key: string]: _http_AreaResponse});
}

export interface WorldResponse__Output {
  'properties'?: (_http_WorldProperties__Output);
  'areas'?: ({[key: string]: _http_AreaResponse__Output});
}
