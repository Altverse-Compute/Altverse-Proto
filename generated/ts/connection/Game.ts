// Original file: proto/rpc.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AuthenticationRequest as _connection_AuthenticationRequest, AuthenticationRequest__Output as _connection_AuthenticationRequest__Output } from '../connection/AuthenticationRequest';
import type { AuthenticationResponse as _connection_AuthenticationResponse, AuthenticationResponse__Output as _connection_AuthenticationResponse__Output } from '../connection/AuthenticationResponse';
import type { AwardRequest as _connection_AwardRequest, AwardRequest__Output as _connection_AwardRequest__Output } from '../connection/AwardRequest';
import type { AwardResponse as _connection_AwardResponse, AwardResponse__Output as _connection_AwardResponse__Output } from '../connection/AwardResponse';
import type { JoinPlayerRequest as _connection_JoinPlayerRequest, JoinPlayerRequest__Output as _connection_JoinPlayerRequest__Output } from '../connection/JoinPlayerRequest';
import type { JoinPlayerResponse as _connection_JoinPlayerResponse, JoinPlayerResponse__Output as _connection_JoinPlayerResponse__Output } from '../connection/JoinPlayerResponse';
import type { PingRequest as _connection_PingRequest, PingRequest__Output as _connection_PingRequest__Output } from '../connection/PingRequest';
import type { PongResponse as _connection_PongResponse, PongResponse__Output as _connection_PongResponse__Output } from '../connection/PongResponse';

export interface GameClient extends grpc.Client {
  Authentication(argument: _connection_AuthenticationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_AuthenticationResponse__Output>): grpc.ClientUnaryCall;
  Authentication(argument: _connection_AuthenticationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_connection_AuthenticationResponse__Output>): grpc.ClientUnaryCall;
  Authentication(argument: _connection_AuthenticationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_AuthenticationResponse__Output>): grpc.ClientUnaryCall;
  Authentication(argument: _connection_AuthenticationRequest, callback: grpc.requestCallback<_connection_AuthenticationResponse__Output>): grpc.ClientUnaryCall;
  authentication(argument: _connection_AuthenticationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_AuthenticationResponse__Output>): grpc.ClientUnaryCall;
  authentication(argument: _connection_AuthenticationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_connection_AuthenticationResponse__Output>): grpc.ClientUnaryCall;
  authentication(argument: _connection_AuthenticationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_AuthenticationResponse__Output>): grpc.ClientUnaryCall;
  authentication(argument: _connection_AuthenticationRequest, callback: grpc.requestCallback<_connection_AuthenticationResponse__Output>): grpc.ClientUnaryCall;
  
  AwardPlayer(argument: _connection_AwardRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_AwardResponse__Output>): grpc.ClientUnaryCall;
  AwardPlayer(argument: _connection_AwardRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_connection_AwardResponse__Output>): grpc.ClientUnaryCall;
  AwardPlayer(argument: _connection_AwardRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_AwardResponse__Output>): grpc.ClientUnaryCall;
  AwardPlayer(argument: _connection_AwardRequest, callback: grpc.requestCallback<_connection_AwardResponse__Output>): grpc.ClientUnaryCall;
  awardPlayer(argument: _connection_AwardRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_AwardResponse__Output>): grpc.ClientUnaryCall;
  awardPlayer(argument: _connection_AwardRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_connection_AwardResponse__Output>): grpc.ClientUnaryCall;
  awardPlayer(argument: _connection_AwardRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_AwardResponse__Output>): grpc.ClientUnaryCall;
  awardPlayer(argument: _connection_AwardRequest, callback: grpc.requestCallback<_connection_AwardResponse__Output>): grpc.ClientUnaryCall;
  
  JoinPlayer(argument: _connection_JoinPlayerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_JoinPlayerResponse__Output>): grpc.ClientUnaryCall;
  JoinPlayer(argument: _connection_JoinPlayerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_connection_JoinPlayerResponse__Output>): grpc.ClientUnaryCall;
  JoinPlayer(argument: _connection_JoinPlayerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_JoinPlayerResponse__Output>): grpc.ClientUnaryCall;
  JoinPlayer(argument: _connection_JoinPlayerRequest, callback: grpc.requestCallback<_connection_JoinPlayerResponse__Output>): grpc.ClientUnaryCall;
  joinPlayer(argument: _connection_JoinPlayerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_JoinPlayerResponse__Output>): grpc.ClientUnaryCall;
  joinPlayer(argument: _connection_JoinPlayerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_connection_JoinPlayerResponse__Output>): grpc.ClientUnaryCall;
  joinPlayer(argument: _connection_JoinPlayerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_JoinPlayerResponse__Output>): grpc.ClientUnaryCall;
  joinPlayer(argument: _connection_JoinPlayerRequest, callback: grpc.requestCallback<_connection_JoinPlayerResponse__Output>): grpc.ClientUnaryCall;
  
  Ping(argument: _connection_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_PongResponse__Output>): grpc.ClientUnaryCall;
  Ping(argument: _connection_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_connection_PongResponse__Output>): grpc.ClientUnaryCall;
  Ping(argument: _connection_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_PongResponse__Output>): grpc.ClientUnaryCall;
  Ping(argument: _connection_PingRequest, callback: grpc.requestCallback<_connection_PongResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _connection_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_PongResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _connection_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_connection_PongResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _connection_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_PongResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _connection_PingRequest, callback: grpc.requestCallback<_connection_PongResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface GameHandlers extends grpc.UntypedServiceImplementation {
  Authentication: grpc.handleUnaryCall<_connection_AuthenticationRequest__Output, _connection_AuthenticationResponse>;
  
  AwardPlayer: grpc.handleUnaryCall<_connection_AwardRequest__Output, _connection_AwardResponse>;
  
  JoinPlayer: grpc.handleUnaryCall<_connection_JoinPlayerRequest__Output, _connection_JoinPlayerResponse>;
  
  Ping: grpc.handleUnaryCall<_connection_PingRequest__Output, _connection_PongResponse>;
  
}

export interface GameDefinition extends grpc.ServiceDefinition {
  Authentication: MethodDefinition<_connection_AuthenticationRequest, _connection_AuthenticationResponse, _connection_AuthenticationRequest__Output, _connection_AuthenticationResponse__Output>
  AwardPlayer: MethodDefinition<_connection_AwardRequest, _connection_AwardResponse, _connection_AwardRequest__Output, _connection_AwardResponse__Output>
  JoinPlayer: MethodDefinition<_connection_JoinPlayerRequest, _connection_JoinPlayerResponse, _connection_JoinPlayerRequest__Output, _connection_JoinPlayerResponse__Output>
  Ping: MethodDefinition<_connection_PingRequest, _connection_PongResponse, _connection_PingRequest__Output, _connection_PongResponse__Output>
}
