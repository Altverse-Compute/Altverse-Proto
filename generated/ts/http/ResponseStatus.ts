// Original file: proto/http.proto

export const ResponseStatus = {
  Ok: 'Ok',
  InternalError: 'InternalError',
  InvalidBody: 'InvalidBody',
  NotFound: 'NotFound',
  VerificationFailure: 'VerificationFailure',
  NotAuthenticated: 'NotAuthenticated',
  AccountExists: 'AccountExists',
  AccountNotExists: 'AccountNotExists',
  WrongPassword: 'WrongPassword',
} as const;

export type ResponseStatus =
  | 'Ok'
  | 1
  | 'InternalError'
  | 2
  | 'InvalidBody'
  | 3
  | 'NotFound'
  | 4
  | 'VerificationFailure'
  | 5
  | 'NotAuthenticated'
  | 6
  | 'AccountExists'
  | 7
  | 'AccountNotExists'
  | 8
  | 'WrongPassword'
  | 9

export type ResponseStatus__Output = typeof ResponseStatus[keyof typeof ResponseStatus]
