import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthenticationRequest as _connection_AuthenticationRequest, AuthenticationRequest__Output as _connection_AuthenticationRequest__Output } from './connection/AuthenticationRequest';
import type { AuthenticationResponse as _connection_AuthenticationResponse, AuthenticationResponse__Output as _connection_AuthenticationResponse__Output } from './connection/AuthenticationResponse';
import type { AwardRequest as _connection_AwardRequest, AwardRequest__Output as _connection_AwardRequest__Output } from './connection/AwardRequest';
import type { AwardResponse as _connection_AwardResponse, AwardResponse__Output as _connection_AwardResponse__Output } from './connection/AwardResponse';
import type { GameClient as _connection_GameClient, GameDefinition as _connection_GameDefinition } from './connection/Game';
import type { JoinPlayerRequest as _connection_JoinPlayerRequest, JoinPlayerRequest__Output as _connection_JoinPlayerRequest__Output } from './connection/JoinPlayerRequest';
import type { JoinPlayerResponse as _connection_JoinPlayerResponse, JoinPlayerResponse__Output as _connection_JoinPlayerResponse__Output } from './connection/JoinPlayerResponse';
import type { PingRequest as _connection_PingRequest, PingRequest__Output as _connection_PingRequest__Output } from './connection/PingRequest';
import type { PongResponse as _connection_PongResponse, PongResponse__Output as _connection_PongResponse__Output } from './connection/PongResponse';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  connection: {
    AuthenticationRequest: MessageTypeDefinition<_connection_AuthenticationRequest, _connection_AuthenticationRequest__Output>
    AuthenticationResponse: MessageTypeDefinition<_connection_AuthenticationResponse, _connection_AuthenticationResponse__Output>
    AwardRequest: MessageTypeDefinition<_connection_AwardRequest, _connection_AwardRequest__Output>
    AwardResponse: MessageTypeDefinition<_connection_AwardResponse, _connection_AwardResponse__Output>
    Game: SubtypeConstructor<typeof grpc.Client, _connection_GameClient> & { service: _connection_GameDefinition }
    JoinPlayerRequest: MessageTypeDefinition<_connection_JoinPlayerRequest, _connection_JoinPlayerRequest__Output>
    JoinPlayerResponse: MessageTypeDefinition<_connection_JoinPlayerResponse, _connection_JoinPlayerResponse__Output>
    PingRequest: MessageTypeDefinition<_connection_PingRequest, _connection_PingRequest__Output>
    PongResponse: MessageTypeDefinition<_connection_PongResponse, _connection_PongResponse__Output>
    Role: EnumTypeDefinition
  }
}

