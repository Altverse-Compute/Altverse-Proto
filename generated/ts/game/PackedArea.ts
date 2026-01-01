// Original file: proto/game.proto

import type { PackedEntity as _game_PackedEntity, PackedEntity__Output as _game_PackedEntity__Output } from '../game/PackedEntity';
import type { Long } from '@grpc/proto-loader';

export interface PackedArea {
  'w'?: (number | string);
  'h'?: (number | string);
  'area'?: (number | string | Long);
  'world'?: (string);
  'entities'?: ({[key: number]: _game_PackedEntity});
}

export interface PackedArea__Output {
  'w'?: (number);
  'h'?: (number);
  'area'?: (string);
  'world'?: (string);
  'entities'?: ({[key: number]: _game_PackedEntity__Output});
}
