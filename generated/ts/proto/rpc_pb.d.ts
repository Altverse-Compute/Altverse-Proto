// package: connection
// file: proto/rpc.proto

import * as jspb from "google-protobuf";

export class PingRequest extends jspb.Message {
  getOnline(): number;
  setOnline(value: number): void;

  getAlive(): boolean;
  setAlive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PingRequest): PingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingRequest;
  static deserializeBinaryFromReader(message: PingRequest, reader: jspb.BinaryReader): PingRequest;
}

export namespace PingRequest {
  export type AsObject = {
    online: number,
    alive: boolean,
  }
}

export class PongResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PongResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PongResponse): PongResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PongResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PongResponse;
  static deserializeBinaryFromReader(message: PongResponse, reader: jspb.BinaryReader): PongResponse;
}

export namespace PongResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class AuthenticationRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationRequest): AuthenticationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthenticationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationRequest;
  static deserializeBinaryFromReader(message: AuthenticationRequest, reader: jspb.BinaryReader): AuthenticationRequest;
}

export namespace AuthenticationRequest {
  export type AsObject = {
    token: string,
  }
}

export class AuthenticationResponse extends jspb.Message {
  getSession(): string;
  setSession(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationResponse): AuthenticationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthenticationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationResponse;
  static deserializeBinaryFromReader(message: AuthenticationResponse, reader: jspb.BinaryReader): AuthenticationResponse;
}

export namespace AuthenticationResponse {
  export type AsObject = {
    session: string,
  }
}

export class JoinPlayerRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinPlayerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinPlayerRequest): JoinPlayerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinPlayerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinPlayerRequest;
  static deserializeBinaryFromReader(message: JoinPlayerRequest, reader: jspb.BinaryReader): JoinPlayerRequest;
}

export namespace JoinPlayerRequest {
  export type AsObject = {
    token: string,
  }
}

export class JoinPlayerResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getRole(): RoleMap[keyof RoleMap];
  setRole(value: RoleMap[keyof RoleMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinPlayerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JoinPlayerResponse): JoinPlayerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinPlayerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinPlayerResponse;
  static deserializeBinaryFromReader(message: JoinPlayerResponse, reader: jspb.BinaryReader): JoinPlayerResponse;
}

export namespace JoinPlayerResponse {
  export type AsObject = {
    name: string,
    role: RoleMap[keyof RoleMap],
  }
}

export class AwardRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasVp(): boolean;
  clearVp(): void;
  getVp(): number;
  setVp(value: number): void;

  hasAccessory(): boolean;
  clearAccessory(): void;
  getAccessory(): string;
  setAccessory(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AwardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AwardRequest): AwardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AwardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AwardRequest;
  static deserializeBinaryFromReader(message: AwardRequest, reader: jspb.BinaryReader): AwardRequest;
}

export namespace AwardRequest {
  export type AsObject = {
    id: string,
    vp: number,
    accessory: string,
  }
}

export class AwardResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AwardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AwardResponse): AwardResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AwardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AwardResponse;
  static deserializeBinaryFromReader(message: AwardResponse, reader: jspb.BinaryReader): AwardResponse;
}

export namespace AwardResponse {
  export type AsObject = {
    success: boolean,
  }
}

export interface RoleMap {
  USER: 0;
  MOD: 1;
  DEV: 2;
}

export const Role: RoleMap;

