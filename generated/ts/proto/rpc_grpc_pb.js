// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_rpc_pb = require('../proto/rpc_pb.js');

function serialize_connection_AuthenticationRequest(arg) {
  if (!(arg instanceof proto_rpc_pb.AuthenticationRequest)) {
    throw new Error('Expected argument of type connection.AuthenticationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_connection_AuthenticationRequest(buffer_arg) {
  return proto_rpc_pb.AuthenticationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_connection_AuthenticationResponse(arg) {
  if (!(arg instanceof proto_rpc_pb.AuthenticationResponse)) {
    throw new Error('Expected argument of type connection.AuthenticationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_connection_AuthenticationResponse(buffer_arg) {
  return proto_rpc_pb.AuthenticationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_connection_AwardRequest(arg) {
  if (!(arg instanceof proto_rpc_pb.AwardRequest)) {
    throw new Error('Expected argument of type connection.AwardRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_connection_AwardRequest(buffer_arg) {
  return proto_rpc_pb.AwardRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_connection_AwardResponse(arg) {
  if (!(arg instanceof proto_rpc_pb.AwardResponse)) {
    throw new Error('Expected argument of type connection.AwardResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_connection_AwardResponse(buffer_arg) {
  return proto_rpc_pb.AwardResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_connection_JoinPlayerRequest(arg) {
  if (!(arg instanceof proto_rpc_pb.JoinPlayerRequest)) {
    throw new Error('Expected argument of type connection.JoinPlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_connection_JoinPlayerRequest(buffer_arg) {
  return proto_rpc_pb.JoinPlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_connection_JoinPlayerResponse(arg) {
  if (!(arg instanceof proto_rpc_pb.JoinPlayerResponse)) {
    throw new Error('Expected argument of type connection.JoinPlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_connection_JoinPlayerResponse(buffer_arg) {
  return proto_rpc_pb.JoinPlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_connection_PingRequest(arg) {
  if (!(arg instanceof proto_rpc_pb.PingRequest)) {
    throw new Error('Expected argument of type connection.PingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_connection_PingRequest(buffer_arg) {
  return proto_rpc_pb.PingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_connection_PongResponse(arg) {
  if (!(arg instanceof proto_rpc_pb.PongResponse)) {
    throw new Error('Expected argument of type connection.PongResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_connection_PongResponse(buffer_arg) {
  return proto_rpc_pb.PongResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GameService = exports.GameService = {
  authentication: {
    path: '/connection.Game/Authentication',
    requestStream: false,
    responseStream: false,
    requestType: proto_rpc_pb.AuthenticationRequest,
    responseType: proto_rpc_pb.AuthenticationResponse,
    requestSerialize: serialize_connection_AuthenticationRequest,
    requestDeserialize: deserialize_connection_AuthenticationRequest,
    responseSerialize: serialize_connection_AuthenticationResponse,
    responseDeserialize: deserialize_connection_AuthenticationResponse,
  },
  joinPlayer: {
    path: '/connection.Game/JoinPlayer',
    requestStream: false,
    responseStream: false,
    requestType: proto_rpc_pb.JoinPlayerRequest,
    responseType: proto_rpc_pb.JoinPlayerResponse,
    requestSerialize: serialize_connection_JoinPlayerRequest,
    requestDeserialize: deserialize_connection_JoinPlayerRequest,
    responseSerialize: serialize_connection_JoinPlayerResponse,
    responseDeserialize: deserialize_connection_JoinPlayerResponse,
  },
  ping: {
    path: '/connection.Game/Ping',
    requestStream: false,
    responseStream: false,
    requestType: proto_rpc_pb.PingRequest,
    responseType: proto_rpc_pb.PongResponse,
    requestSerialize: serialize_connection_PingRequest,
    requestDeserialize: deserialize_connection_PingRequest,
    responseSerialize: serialize_connection_PongResponse,
    responseDeserialize: deserialize_connection_PongResponse,
  },
  awardPlayer: {
    path: '/connection.Game/AwardPlayer',
    requestStream: false,
    responseStream: false,
    requestType: proto_rpc_pb.AwardRequest,
    responseType: proto_rpc_pb.AwardResponse,
    requestSerialize: serialize_connection_AwardRequest,
    requestDeserialize: deserialize_connection_AwardRequest,
    responseSerialize: serialize_connection_AwardResponse,
    responseDeserialize: deserialize_connection_AwardResponse,
  },
};

exports.GameClient = grpc.makeGenericClientConstructor(GameService, 'Game');
