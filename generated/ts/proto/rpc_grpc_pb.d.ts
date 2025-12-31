// GENERATED CODE -- DO NOT EDIT!

// package: connection
// file: proto/rpc.proto

import * as proto_rpc_pb from "../proto/rpc_pb";
import * as grpc from "@grpc/grpc-js";

interface IGameServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  authentication: grpc.MethodDefinition<proto_rpc_pb.AuthenticationRequest, proto_rpc_pb.AuthenticationResponse>;
  joinPlayer: grpc.MethodDefinition<proto_rpc_pb.JoinPlayerRequest, proto_rpc_pb.JoinPlayerResponse>;
  ping: grpc.MethodDefinition<proto_rpc_pb.PingRequest, proto_rpc_pb.PongResponse>;
  awardPlayer: grpc.MethodDefinition<proto_rpc_pb.AwardRequest, proto_rpc_pb.AwardResponse>;
}

export const GameServiceService: IGameServiceService;

export interface IGameServiceServer extends grpc.UntypedServiceImplementation {
  authentication: grpc.handleUnaryCall<proto_rpc_pb.AuthenticationRequest, proto_rpc_pb.AuthenticationResponse>;
  joinPlayer: grpc.handleUnaryCall<proto_rpc_pb.JoinPlayerRequest, proto_rpc_pb.JoinPlayerResponse>;
  ping: grpc.handleUnaryCall<proto_rpc_pb.PingRequest, proto_rpc_pb.PongResponse>;
  awardPlayer: grpc.handleUnaryCall<proto_rpc_pb.AwardRequest, proto_rpc_pb.AwardResponse>;
}

export class GameServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  authentication(argument: proto_rpc_pb.AuthenticationRequest, callback: grpc.requestCallback<proto_rpc_pb.AuthenticationResponse>): grpc.ClientUnaryCall;
  authentication(argument: proto_rpc_pb.AuthenticationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_rpc_pb.AuthenticationResponse>): grpc.ClientUnaryCall;
  authentication(argument: proto_rpc_pb.AuthenticationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_rpc_pb.AuthenticationResponse>): grpc.ClientUnaryCall;
  joinPlayer(argument: proto_rpc_pb.JoinPlayerRequest, callback: grpc.requestCallback<proto_rpc_pb.JoinPlayerResponse>): grpc.ClientUnaryCall;
  joinPlayer(argument: proto_rpc_pb.JoinPlayerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_rpc_pb.JoinPlayerResponse>): grpc.ClientUnaryCall;
  joinPlayer(argument: proto_rpc_pb.JoinPlayerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_rpc_pb.JoinPlayerResponse>): grpc.ClientUnaryCall;
  ping(argument: proto_rpc_pb.PingRequest, callback: grpc.requestCallback<proto_rpc_pb.PongResponse>): grpc.ClientUnaryCall;
  ping(argument: proto_rpc_pb.PingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_rpc_pb.PongResponse>): grpc.ClientUnaryCall;
  ping(argument: proto_rpc_pb.PingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_rpc_pb.PongResponse>): grpc.ClientUnaryCall;
  awardPlayer(argument: proto_rpc_pb.AwardRequest, callback: grpc.requestCallback<proto_rpc_pb.AwardResponse>): grpc.ClientUnaryCall;
  awardPlayer(argument: proto_rpc_pb.AwardRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_rpc_pb.AwardResponse>): grpc.ClientUnaryCall;
  awardPlayer(argument: proto_rpc_pb.AwardRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_rpc_pb.AwardResponse>): grpc.ClientUnaryCall;
}
