// Original file: proto/rpc.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { JoinPlayerRequest as _connection_JoinPlayerRequest, JoinPlayerRequest__Output as _connection_JoinPlayerRequest__Output } from '../connection/JoinPlayerRequest';
import type { JoinPlayerResponse as _connection_JoinPlayerResponse, JoinPlayerResponse__Output as _connection_JoinPlayerResponse__Output } from '../connection/JoinPlayerResponse';
import type { RegisterRequest as _connection_RegisterRequest, RegisterRequest__Output as _connection_RegisterRequest__Output } from '../connection/RegisterRequest';
import type { RegisterResponse as _connection_RegisterResponse, RegisterResponse__Output as _connection_RegisterResponse__Output } from '../connection/RegisterResponse';

export interface GameServiceClient extends grpc.Client {
  JoinPlayer(argument: _connection_JoinPlayerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_JoinPlayerResponse__Output>): grpc.ClientUnaryCall;
  JoinPlayer(argument: _connection_JoinPlayerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_connection_JoinPlayerResponse__Output>): grpc.ClientUnaryCall;
  JoinPlayer(argument: _connection_JoinPlayerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_JoinPlayerResponse__Output>): grpc.ClientUnaryCall;
  JoinPlayer(argument: _connection_JoinPlayerRequest, callback: grpc.requestCallback<_connection_JoinPlayerResponse__Output>): grpc.ClientUnaryCall;
  joinPlayer(argument: _connection_JoinPlayerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_JoinPlayerResponse__Output>): grpc.ClientUnaryCall;
  joinPlayer(argument: _connection_JoinPlayerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_connection_JoinPlayerResponse__Output>): grpc.ClientUnaryCall;
  joinPlayer(argument: _connection_JoinPlayerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_JoinPlayerResponse__Output>): grpc.ClientUnaryCall;
  joinPlayer(argument: _connection_JoinPlayerRequest, callback: grpc.requestCallback<_connection_JoinPlayerResponse__Output>): grpc.ClientUnaryCall;
  
  Register(argument: _connection_RegisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _connection_RegisterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_connection_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _connection_RegisterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _connection_RegisterRequest, callback: grpc.requestCallback<_connection_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _connection_RegisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _connection_RegisterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_connection_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _connection_RegisterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_connection_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _connection_RegisterRequest, callback: grpc.requestCallback<_connection_RegisterResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface GameServiceHandlers extends grpc.UntypedServiceImplementation {
  JoinPlayer: grpc.handleUnaryCall<_connection_JoinPlayerRequest__Output, _connection_JoinPlayerResponse>;
  
  Register: grpc.handleUnaryCall<_connection_RegisterRequest__Output, _connection_RegisterResponse>;
  
}

export interface GameServiceDefinition extends grpc.ServiceDefinition {
  JoinPlayer: MethodDefinition<_connection_JoinPlayerRequest, _connection_JoinPlayerResponse, _connection_JoinPlayerRequest__Output, _connection_JoinPlayerResponse__Output>
  Register: MethodDefinition<_connection_RegisterRequest, _connection_RegisterResponse, _connection_RegisterRequest__Output, _connection_RegisterResponse__Output>
}
