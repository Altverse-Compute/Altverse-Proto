import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { GameServiceClient as _connection_GameServiceClient, GameServiceDefinition as _connection_GameServiceDefinition } from './connection/GameService';
import type { JoinPlayerRequest as _connection_JoinPlayerRequest, JoinPlayerRequest__Output as _connection_JoinPlayerRequest__Output } from './connection/JoinPlayerRequest';
import type { JoinPlayerResponse as _connection_JoinPlayerResponse, JoinPlayerResponse__Output as _connection_JoinPlayerResponse__Output } from './connection/JoinPlayerResponse';
import type { RegisterRequest as _connection_RegisterRequest, RegisterRequest__Output as _connection_RegisterRequest__Output } from './connection/RegisterRequest';
import type { RegisterResponse as _connection_RegisterResponse, RegisterResponse__Output as _connection_RegisterResponse__Output } from './connection/RegisterResponse';
import type { Chat as _game_Chat, Chat__Output as _game_Chat__Output } from './game/Chat';
import type { CloseEntities as _game_CloseEntities, CloseEntities__Output as _game_CloseEntities__Output } from './game/CloseEntities';
import type { Entities as _game_Entities, Entities__Output as _game_Entities__Output } from './game/Entities';
import type { Package as _game_Package, Package__Output as _game_Package__Output } from './game/Package';
import type { Packages as _game_Packages, Packages__Output as _game_Packages__Output } from './game/Packages';
import type { PackedArea as _game_PackedArea, PackedArea__Output as _game_PackedArea__Output } from './game/PackedArea';
import type { PackedEntity as _game_PackedEntity, PackedEntity__Output as _game_PackedEntity__Output } from './game/PackedEntity';
import type { PackedPlayer as _game_PackedPlayer, PackedPlayer__Output as _game_PackedPlayer__Output } from './game/PackedPlayer';
import type { PartialEntity as _game_PartialEntity, PartialEntity__Output as _game_PartialEntity__Output } from './game/PartialEntity';
import type { PartialPlayer as _game_PartialPlayer, PartialPlayer__Output as _game_PartialPlayer__Output } from './game/PartialPlayer';
import type { Players as _game_Players, Players__Output as _game_Players__Output } from './game/Players';
import type { UpdateEntitiesMap as _game_UpdateEntitiesMap, UpdateEntitiesMap__Output as _game_UpdateEntitiesMap__Output } from './game/UpdateEntitiesMap';
import type { UpdatePlayersMap as _game_UpdatePlayersMap, UpdatePlayersMap__Output as _game_UpdatePlayersMap__Output } from './game/UpdatePlayersMap';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  connection: {
    GameService: SubtypeConstructor<typeof grpc.Client, _connection_GameServiceClient> & { service: _connection_GameServiceDefinition }
    JoinPlayerRequest: MessageTypeDefinition<_connection_JoinPlayerRequest, _connection_JoinPlayerRequest__Output>
    JoinPlayerResponse: MessageTypeDefinition<_connection_JoinPlayerResponse, _connection_JoinPlayerResponse__Output>
    RegisterRequest: MessageTypeDefinition<_connection_RegisterRequest, _connection_RegisterRequest__Output>
    RegisterResponse: MessageTypeDefinition<_connection_RegisterResponse, _connection_RegisterResponse__Output>
    Role: EnumTypeDefinition
  }
  game: {
    Chat: MessageTypeDefinition<_game_Chat, _game_Chat__Output>
    CloseEntities: MessageTypeDefinition<_game_CloseEntities, _game_CloseEntities__Output>
    Entities: MessageTypeDefinition<_game_Entities, _game_Entities__Output>
    Package: MessageTypeDefinition<_game_Package, _game_Package__Output>
    Packages: MessageTypeDefinition<_game_Packages, _game_Packages__Output>
    PackedArea: MessageTypeDefinition<_game_PackedArea, _game_PackedArea__Output>
    PackedEntity: MessageTypeDefinition<_game_PackedEntity, _game_PackedEntity__Output>
    PackedPlayer: MessageTypeDefinition<_game_PackedPlayer, _game_PackedPlayer__Output>
    PartialEntity: MessageTypeDefinition<_game_PartialEntity, _game_PartialEntity__Output>
    PartialPlayer: MessageTypeDefinition<_game_PartialPlayer, _game_PartialPlayer__Output>
    Players: MessageTypeDefinition<_game_Players, _game_Players__Output>
    UpdateEntitiesMap: MessageTypeDefinition<_game_UpdateEntitiesMap, _game_UpdateEntitiesMap__Output>
    UpdatePlayersMap: MessageTypeDefinition<_game_UpdatePlayersMap, _game_UpdatePlayersMap__Output>
  }
}

