// Original file: proto/http.proto

import type { ResponseStatus as _http_ResponseStatus, ResponseStatus__Output as _http_ResponseStatus__Output } from '../http/ResponseStatus';
import type { Profile as _http_Profile, Profile__Output as _http_Profile__Output } from '../http/Profile';

export interface AuthResponse {
  'status'?: (_http_ResponseStatus);
  'profile'?: (_http_Profile | null);
  '_profile'?: "profile";
}

export interface AuthResponse__Output {
  'status'?: (_http_ResponseStatus__Output);
  'profile'?: (_http_Profile__Output);
  '_profile'?: "profile";
}
