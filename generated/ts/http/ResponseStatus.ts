// Original file: proto/http.proto

export const ResponseStatus = {
  Ok: 'Ok',
  AccountExists: 'AccountExists',
  AccountNotExists: 'AccountNotExists',
  InternalError: 'InternalError',
  InvalidBody: 'InvalidBody',
  NotFound: 'NotFound',
  VerificationFailure: 'VerificationFailure',
  NotAuthenticated: 'NotAuthenticated',
  WrongPassword: 'WrongPassword',
} as const;

export type ResponseStatus =
  | 'Ok'
  | 1
  | 'AccountExists'
  | 2
  | 'AccountNotExists'
  | 3
  | 'InternalError'
  | 4
  | 'InvalidBody'
  | 5
  | 'NotFound'
  | 6
  | 'VerificationFailure'
  | 7
  | 'NotAuthenticated'
  | 8
  | 'WrongPassword'
  | 9

export type ResponseStatus__Output = typeof ResponseStatus[keyof typeof ResponseStatus]
