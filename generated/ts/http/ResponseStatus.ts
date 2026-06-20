// Original file: proto/http.proto

export const ResponseStatus = {
  Ok: 'Ok',
  InternalError: 'InternalError',
  InvalidBody: 'InvalidBody',
  NotAuthenticated: 'NotAuthenticated',
  VerificationFailure: 'VerificationFailure',
  NotFound: 'NotFound',
  AccountExists: 'AccountExists',
  AccountNotExists: 'AccountNotExists',
  WrongPassword: 'WrongPassword',
} as const;

export type ResponseStatus =
  | 'Ok'
  | 200
  | 'InternalError'
  | 500
  | 'InvalidBody'
  | 400
  | 'NotAuthenticated'
  | 401
  | 'VerificationFailure'
  | 402
  | 'NotFound'
  | 404
  | 'AccountExists'
  | 450
  | 'AccountNotExists'
  | 451
  | 'WrongPassword'
  | 452

export type ResponseStatus__Output = typeof ResponseStatus[keyof typeof ResponseStatus]
