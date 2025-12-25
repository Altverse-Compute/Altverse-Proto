// Original file: proto/game.proto

import type { PackedPlayer as _game_PackedPlayer, PackedPlayer__Output as _game_PackedPlayer__Output } from '../game/PackedPlayer';
import type { Players as _game_Players, Players__Output as _game_Players__Output } from '../game/Players';
import type { Entities as _game_Entities, Entities__Output as _game_Entities__Output } from '../game/Entities';
import type { CloseEntities as _game_CloseEntities, CloseEntities__Output as _game_CloseEntities__Output } from '../game/CloseEntities';
import type { PackedArea as _game_PackedArea, PackedArea__Output as _game_PackedArea__Output } from '../game/PackedArea';
import type { UpdateEntitiesMap as _game_UpdateEntitiesMap, UpdateEntitiesMap__Output as _game_UpdateEntitiesMap__Output } from '../game/UpdateEntitiesMap';
import type { UpdatePlayersMap as _game_UpdatePlayersMap, UpdatePlayersMap__Output as _game_UpdatePlayersMap__Output } from '../game/UpdatePlayersMap';
import type { Long } from '@grpc/proto-loader';

export interface Package {
  'newPlayer'?: (_game_PackedPlayer | null);
  'closePlayer'?: (number | string | Long);
  'players'?: (_game_Players | null);
  'newEntities'?: (_game_Entities | null);
  'closeEntities'?: (_game_CloseEntities | null);
  'areaInit'?: (_game_PackedArea | null);
  'myself'?: (_game_PackedPlayer | null);
  'updateEntities'?: (_game_UpdateEntitiesMap | null);
  'updatePlayers'?: (_game_UpdatePlayersMap | null);
  'kind'?: "newPlayer"|"closePlayer"|"players"|"newEntities"|"closeEntities"|"areaInit"|"myself"|"updateEntities"|"updatePlayers";
}

export interface Package__Output {
  'newPlayer'?: (_game_PackedPlayer__Output);
  'closePlayer'?: (string);
  'players'?: (_game_Players__Output);
  'newEntities'?: (_game_Entities__Output);
  'closeEntities'?: (_game_CloseEntities__Output);
  'areaInit'?: (_game_PackedArea__Output);
  'myself'?: (_game_PackedPlayer__Output);
  'updateEntities'?: (_game_UpdateEntitiesMap__Output);
  'updatePlayers'?: (_game_UpdatePlayersMap__Output);
  'kind'?: "newPlayer"|"closePlayer"|"players"|"newEntities"|"closeEntities"|"areaInit"|"myself"|"updateEntities"|"updatePlayers";
}
