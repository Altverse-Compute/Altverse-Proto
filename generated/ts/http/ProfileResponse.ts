// Original file: proto/http.proto

import type { Profile as _http_Profile, Profile__Output as _http_Profile__Output } from '../http/Profile';

export interface ProfileResponse {
  'profile'?: (_http_Profile | null);
  '_profile'?: "profile";
}

export interface ProfileResponse__Output {
  'profile'?: (_http_Profile__Output);
  '_profile'?: "profile";
}
