// Original file: proto/http.proto

import type { Profile as _http_Profile, Profile__Output as _http_Profile__Output } from '../http/Profile';

export interface LoginAndRegisterResponse {
  'token'?: (string);
  'profile'?: (_http_Profile | null);
  '_token'?: "token";
  '_profile'?: "profile";
}

export interface LoginAndRegisterResponse__Output {
  'token'?: (string);
  'profile'?: (_http_Profile__Output);
  '_token'?: "token";
  '_profile'?: "profile";
}
