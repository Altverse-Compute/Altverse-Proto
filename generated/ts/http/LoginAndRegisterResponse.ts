// Original file: proto/http.proto

import type { ResponseStatus as _http_ResponseStatus, ResponseStatus__Output as _http_ResponseStatus__Output } from '../http/ResponseStatus';
import type { Profile as _http_Profile, Profile__Output as _http_Profile__Output } from '../http/Profile';

export interface LoginAndRegisterResponse {
  'status'?: (_http_ResponseStatus);
  'token'?: (string);
  'profile'?: (_http_Profile | null);
  '_token'?: "token";
  '_profile'?: "profile";
}

export interface LoginAndRegisterResponse__Output {
  'status'?: (_http_ResponseStatus__Output);
  'token'?: (string);
  'profile'?: (_http_Profile__Output);
  '_token'?: "token";
  '_profile'?: "profile";
}
