// Original file: proto/game.proto

import type { ClientKey as _game_ClientKey, ClientKey__Output as _game_ClientKey__Output } from '../game/ClientKey';
import type { ClientMousePos as _game_ClientMousePos, ClientMousePos__Output as _game_ClientMousePos__Output } from '../game/ClientMousePos';
import type { ClientInit as _game_ClientInit, ClientInit__Output as _game_ClientInit__Output } from '../game/ClientInit';
import type { ClientAbility as _game_ClientAbility, ClientAbility__Output as _game_ClientAbility__Output } from '../game/ClientAbility';

export interface ClientMessage {
  'chatMessage'?: (string);
  'keyUp'?: (_game_ClientKey);
  'keyDown'?: (_game_ClientKey);
  'mouseEnable'?: (boolean);
  'mousePos'?: (_game_ClientMousePos | null);
  'init'?: (_game_ClientInit | null);
  'ability'?: (_game_ClientAbility);
  'pkg'?: "chatMessage"|"keyUp"|"keyDown"|"mouseEnable"|"mousePos"|"init"|"ability";
}

export interface ClientMessage__Output {
  'chatMessage'?: (string);
  'keyUp'?: (_game_ClientKey__Output);
  'keyDown'?: (_game_ClientKey__Output);
  'mouseEnable'?: (boolean);
  'mousePos'?: (_game_ClientMousePos__Output);
  'init'?: (_game_ClientInit__Output);
  'ability'?: (_game_ClientAbility__Output);
  'pkg'?: "chatMessage"|"keyUp"|"keyDown"|"mouseEnable"|"mousePos"|"init"|"ability";
}
