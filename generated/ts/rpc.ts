import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { GameServiceClient as _connection_GameServiceClient, GameServiceDefinition as _connection_GameServiceDefinition } from './connection/GameService';
import type { JoinPlayerRequest as _connection_JoinPlayerRequest, JoinPlayerRequest__Output as _connection_JoinPlayerRequest__Output } from './connection/JoinPlayerRequest';
import type { JoinPlayerResponse as _connection_JoinPlayerResponse, JoinPlayerResponse__Output as _connection_JoinPlayerResponse__Output } from './connection/JoinPlayerResponse';
import type { RegisterRequest as _connection_RegisterRequest, RegisterRequest__Output as _connection_RegisterRequest__Output } from './connection/RegisterRequest';
import type { RegisterResponse as _connection_RegisterResponse, RegisterResponse__Output as _connection_RegisterResponse__Output } from './connection/RegisterResponse';

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
}

