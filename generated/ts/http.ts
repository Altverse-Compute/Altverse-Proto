import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { AdminModeServer as _http_AdminModeServer, AdminModeServer__Output as _http_AdminModeServer__Output } from './http/AdminModeServer';
import type { AdminModeServersResponse as _http_AdminModeServersResponse, AdminModeServersResponse__Output as _http_AdminModeServersResponse__Output } from './http/AdminModeServersResponse';
import type { AreaResponse as _http_AreaResponse, AreaResponse__Output as _http_AreaResponse__Output } from './http/AreaResponse';
import type { AuthResponse as _http_AuthResponse, AuthResponse__Output as _http_AuthResponse__Output } from './http/AuthResponse';
import type { LoginAndRegisterResponse as _http_LoginAndRegisterResponse, LoginAndRegisterResponse__Output as _http_LoginAndRegisterResponse__Output } from './http/LoginAndRegisterResponse';
import type { LoginRequest as _http_LoginRequest, LoginRequest__Output as _http_LoginRequest__Output } from './http/LoginRequest';
import type { LogoutResponse as _http_LogoutResponse, LogoutResponse__Output as _http_LogoutResponse__Output } from './http/LogoutResponse';
import type { Profile as _http_Profile, Profile__Output as _http_Profile__Output } from './http/Profile';
import type { ProfileResponse as _http_ProfileResponse, ProfileResponse__Output as _http_ProfileResponse__Output } from './http/ProfileResponse';
import type { RegisterRequest as _http_RegisterRequest, RegisterRequest__Output as _http_RegisterRequest__Output } from './http/RegisterRequest';
import type { ServerElement as _http_ServerElement, ServerElement__Output as _http_ServerElement__Output } from './http/ServerElement';
import type { ServersResponse as _http_ServersResponse, ServersResponse__Output as _http_ServersResponse__Output } from './http/ServersResponse';
import type { WorldProperties as _http_WorldProperties, WorldProperties__Output as _http_WorldProperties__Output } from './http/WorldProperties';
import type { WorldResponse as _http_WorldResponse, WorldResponse__Output as _http_WorldResponse__Output } from './http/WorldResponse';
import type { WorldsResponse as _http_WorldsResponse, WorldsResponse__Output as _http_WorldsResponse__Output } from './http/WorldsResponse';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  http: {
    AccountRole: EnumTypeDefinition
    AdminModeServer: MessageTypeDefinition<_http_AdminModeServer, _http_AdminModeServer__Output>
    AdminModeServersResponse: MessageTypeDefinition<_http_AdminModeServersResponse, _http_AdminModeServersResponse__Output>
    AreaResponse: MessageTypeDefinition<_http_AreaResponse, _http_AreaResponse__Output>
    AuthResponse: MessageTypeDefinition<_http_AuthResponse, _http_AuthResponse__Output>
    LoginAndRegisterResponse: MessageTypeDefinition<_http_LoginAndRegisterResponse, _http_LoginAndRegisterResponse__Output>
    LoginRequest: MessageTypeDefinition<_http_LoginRequest, _http_LoginRequest__Output>
    LogoutResponse: MessageTypeDefinition<_http_LogoutResponse, _http_LogoutResponse__Output>
    Profile: MessageTypeDefinition<_http_Profile, _http_Profile__Output>
    ProfileResponse: MessageTypeDefinition<_http_ProfileResponse, _http_ProfileResponse__Output>
    RegisterRequest: MessageTypeDefinition<_http_RegisterRequest, _http_RegisterRequest__Output>
    ResponseStatus: EnumTypeDefinition
    ServerElement: MessageTypeDefinition<_http_ServerElement, _http_ServerElement__Output>
    ServersResponse: MessageTypeDefinition<_http_ServersResponse, _http_ServersResponse__Output>
    WorldEffect: EnumTypeDefinition
    WorldProperties: MessageTypeDefinition<_http_WorldProperties, _http_WorldProperties__Output>
    WorldResponse: MessageTypeDefinition<_http_WorldResponse, _http_WorldResponse__Output>
    WorldsResponse: MessageTypeDefinition<_http_WorldsResponse, _http_WorldsResponse__Output>
  }
}

