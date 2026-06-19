// Original file: proto/http.proto

import type { WorldEffect as _http_WorldEffect, WorldEffect__Output as _http_WorldEffect__Output } from '../http/WorldEffect';

export interface _http_WorldProperties_Background {
  'name'?: (string);
  'alpha'?: (number);
}

export interface _http_WorldProperties_Background__Output {
  'name'?: (string);
  'alpha'?: (number);
}

export interface WorldProperties {
  'fillStyle'?: (string);
  'strokeStyle'?: (string);
  'areaFill'?: (string);
  'areaAlpha'?: (number);
  'backgrounds'?: (_http_WorldProperties_Background)[];
  'effect'?: (_http_WorldEffect);
  '_areaAlpha'?: "areaAlpha";
  '_effect'?: "effect";
}

export interface WorldProperties__Output {
  'fillStyle'?: (string);
  'strokeStyle'?: (string);
  'areaFill'?: (string);
  'areaAlpha'?: (number);
  'backgrounds'?: (_http_WorldProperties_Background__Output)[];
  'effect'?: (_http_WorldEffect__Output);
  '_areaAlpha'?: "areaAlpha";
  '_effect'?: "effect";
}
