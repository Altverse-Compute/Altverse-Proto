// Original file: proto/game.proto

import type { PackedPlayer as _game_PackedPlayer, PackedPlayer__Output as _game_PackedPlayer__Output } from '../game/PackedPlayer';

export interface Players {
  'players'?: ({[key: number]: _game_PackedPlayer});
}

export interface Players__Output {
  'players'?: ({[key: number]: _game_PackedPlayer__Output});
}
