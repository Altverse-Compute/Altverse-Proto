// package: game
// file: proto/game.proto

import * as jspb from "google-protobuf";

export class Chat extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getContent(): string;
  setContent(value: string): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  getRole(): RoleMap[keyof RoleMap];
  setRole(value: RoleMap[keyof RoleMap]): void;

  getWorld(): string;
  setWorld(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chat.AsObject;
  static toObject(includeInstance: boolean, msg: Chat): Chat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Chat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chat;
  static deserializeBinaryFromReader(message: Chat, reader: jspb.BinaryReader): Chat;
}

export namespace Chat {
  export type AsObject = {
    id: number,
    content: string,
    author: string,
    role: RoleMap[keyof RoleMap],
    world: string,
  }
}

export class PackedEntity extends jspb.Message {
  getTypeId(): number;
  setTypeId(value: number): void;

  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getRadius(): number;
  setRadius(value: number): void;

  getHarmless(): boolean;
  setHarmless(value: boolean): void;

  getState(): number;
  setState(value: number): void;

  getStateMetadata(): number;
  setStateMetadata(value: number): void;

  getAlpha(): number;
  setAlpha(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackedEntity.AsObject;
  static toObject(includeInstance: boolean, msg: PackedEntity): PackedEntity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PackedEntity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackedEntity;
  static deserializeBinaryFromReader(message: PackedEntity, reader: jspb.BinaryReader): PackedEntity;
}

export namespace PackedEntity {
  export type AsObject = {
    typeId: number,
    x: number,
    y: number,
    radius: number,
    harmless: boolean,
    state: number,
    stateMetadata: number,
    alpha: number,
  }
}

export class PackedPlayer extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getId(): number;
  setId(value: number): void;

  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getRadius(): number;
  setRadius(value: number): void;

  getSpeed(): number;
  setSpeed(value: number): void;

  getEnergy(): number;
  setEnergy(value: number): void;

  getMaxEnergy(): number;
  setMaxEnergy(value: number): void;

  getDeathTimer(): number;
  setDeathTimer(value: number): void;

  getState(): number;
  setState(value: number): void;

  getStateMeta(): number;
  setStateMeta(value: number): void;

  getArea(): number;
  setArea(value: number): void;

  getWorld(): string;
  setWorld(value: string): void;

  getDied(): boolean;
  setDied(value: boolean): void;

  getHero(): number;
  setHero(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackedPlayer.AsObject;
  static toObject(includeInstance: boolean, msg: PackedPlayer): PackedPlayer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PackedPlayer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackedPlayer;
  static deserializeBinaryFromReader(message: PackedPlayer, reader: jspb.BinaryReader): PackedPlayer;
}

export namespace PackedPlayer {
  export type AsObject = {
    name: string,
    id: number,
    x: number,
    y: number,
    radius: number,
    speed: number,
    energy: number,
    maxEnergy: number,
    deathTimer: number,
    state: number,
    stateMeta: number,
    area: number,
    world: string,
    died: boolean,
    hero: number,
  }
}

export class PartialEntity extends jspb.Message {
  hasX(): boolean;
  clearX(): void;
  getX(): number;
  setX(value: number): void;

  hasY(): boolean;
  clearY(): void;
  getY(): number;
  setY(value: number): void;

  hasRadius(): boolean;
  clearRadius(): void;
  getRadius(): number;
  setRadius(value: number): void;

  hasHarmless(): boolean;
  clearHarmless(): void;
  getHarmless(): boolean;
  setHarmless(value: boolean): void;

  hasState(): boolean;
  clearState(): void;
  getState(): number;
  setState(value: number): void;

  hasStateMetadata(): boolean;
  clearStateMetadata(): void;
  getStateMetadata(): number;
  setStateMetadata(value: number): void;

  hasAlpha(): boolean;
  clearAlpha(): void;
  getAlpha(): number;
  setAlpha(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartialEntity.AsObject;
  static toObject(includeInstance: boolean, msg: PartialEntity): PartialEntity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartialEntity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartialEntity;
  static deserializeBinaryFromReader(message: PartialEntity, reader: jspb.BinaryReader): PartialEntity;
}

export namespace PartialEntity {
  export type AsObject = {
    x: number,
    y: number,
    radius: number,
    harmless: boolean,
    state: number,
    stateMetadata: number,
    alpha: number,
  }
}

export class PartialPlayer extends jspb.Message {
  hasX(): boolean;
  clearX(): void;
  getX(): number;
  setX(value: number): void;

  hasY(): boolean;
  clearY(): void;
  getY(): number;
  setY(value: number): void;

  hasRadius(): boolean;
  clearRadius(): void;
  getRadius(): number;
  setRadius(value: number): void;

  hasSpeed(): boolean;
  clearSpeed(): void;
  getSpeed(): number;
  setSpeed(value: number): void;

  hasEnergy(): boolean;
  clearEnergy(): void;
  getEnergy(): number;
  setEnergy(value: number): void;

  hasMaxEnergy(): boolean;
  clearMaxEnergy(): void;
  getMaxEnergy(): number;
  setMaxEnergy(value: number): void;

  hasDeathTimer(): boolean;
  clearDeathTimer(): void;
  getDeathTimer(): number;
  setDeathTimer(value: number): void;

  hasState(): boolean;
  clearState(): void;
  getState(): number;
  setState(value: number): void;

  hasStateMeta(): boolean;
  clearStateMeta(): void;
  getStateMeta(): number;
  setStateMeta(value: number): void;

  hasArea(): boolean;
  clearArea(): void;
  getArea(): number;
  setArea(value: number): void;

  hasWorld(): boolean;
  clearWorld(): void;
  getWorld(): string;
  setWorld(value: string): void;

  hasDied(): boolean;
  clearDied(): void;
  getDied(): boolean;
  setDied(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartialPlayer.AsObject;
  static toObject(includeInstance: boolean, msg: PartialPlayer): PartialPlayer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartialPlayer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartialPlayer;
  static deserializeBinaryFromReader(message: PartialPlayer, reader: jspb.BinaryReader): PartialPlayer;
}

export namespace PartialPlayer {
  export type AsObject = {
    x: number,
    y: number,
    radius: number,
    speed: number,
    energy: number,
    maxEnergy: number,
    deathTimer: number,
    state: number,
    stateMeta: number,
    area: number,
    world: string,
    died: boolean,
  }
}

export class PackedArea extends jspb.Message {
  getW(): number;
  setW(value: number): void;

  getH(): number;
  setH(value: number): void;

  getArea(): number;
  setArea(value: number): void;

  getWorld(): string;
  setWorld(value: string): void;

  getEntitiesMap(): jspb.Map<number, PackedEntity>;
  clearEntitiesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackedArea.AsObject;
  static toObject(includeInstance: boolean, msg: PackedArea): PackedArea.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PackedArea, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackedArea;
  static deserializeBinaryFromReader(message: PackedArea, reader: jspb.BinaryReader): PackedArea;
}

export namespace PackedArea {
  export type AsObject = {
    w: number,
    h: number,
    area: number,
    world: string,
    entitiesMap: Array<[number, PackedEntity.AsObject]>,
  }
}

export class Package extends jspb.Message {
  hasNewPlayer(): boolean;
  clearNewPlayer(): void;
  getNewPlayer(): PackedPlayer | undefined;
  setNewPlayer(value?: PackedPlayer): void;

  hasClosePlayer(): boolean;
  clearClosePlayer(): void;
  getClosePlayer(): number;
  setClosePlayer(value: number): void;

  hasPlayers(): boolean;
  clearPlayers(): void;
  getPlayers(): Players | undefined;
  setPlayers(value?: Players): void;

  hasNewEntities(): boolean;
  clearNewEntities(): void;
  getNewEntities(): Entities | undefined;
  setNewEntities(value?: Entities): void;

  hasCloseEntities(): boolean;
  clearCloseEntities(): void;
  getCloseEntities(): CloseEntities | undefined;
  setCloseEntities(value?: CloseEntities): void;

  hasAreaInit(): boolean;
  clearAreaInit(): void;
  getAreaInit(): PackedArea | undefined;
  setAreaInit(value?: PackedArea): void;

  hasMyself(): boolean;
  clearMyself(): void;
  getMyself(): PackedPlayer | undefined;
  setMyself(value?: PackedPlayer): void;

  hasUpdateEntities(): boolean;
  clearUpdateEntities(): void;
  getUpdateEntities(): UpdateEntitiesMap | undefined;
  setUpdateEntities(value?: UpdateEntitiesMap): void;

  hasUpdatePlayers(): boolean;
  clearUpdatePlayers(): void;
  getUpdatePlayers(): UpdatePlayersMap | undefined;
  setUpdatePlayers(value?: UpdatePlayersMap): void;

  hasChatMessage(): boolean;
  clearChatMessage(): void;
  getChatMessage(): Chat | undefined;
  setChatMessage(value?: Chat): void;

  getKindCase(): Package.KindCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Package.AsObject;
  static toObject(includeInstance: boolean, msg: Package): Package.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Package, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Package;
  static deserializeBinaryFromReader(message: Package, reader: jspb.BinaryReader): Package;
}

export namespace Package {
  export type AsObject = {
    newPlayer?: PackedPlayer.AsObject,
    closePlayer: number,
    players?: Players.AsObject,
    newEntities?: Entities.AsObject,
    closeEntities?: CloseEntities.AsObject,
    areaInit?: PackedArea.AsObject,
    myself?: PackedPlayer.AsObject,
    updateEntities?: UpdateEntitiesMap.AsObject,
    updatePlayers?: UpdatePlayersMap.AsObject,
    chatMessage?: Chat.AsObject,
  }

  export enum KindCase {
    KIND_NOT_SET = 0,
    NEW_PLAYER = 1,
    CLOSE_PLAYER = 2,
    PLAYERS = 3,
    NEW_ENTITIES = 4,
    CLOSE_ENTITIES = 5,
    AREA_INIT = 6,
    MYSELF = 7,
    UPDATE_ENTITIES = 8,
    UPDATE_PLAYERS = 9,
    CHAT_MESSAGE = 10,
  }
}

export class Packages extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<Package>;
  setItemsList(value: Array<Package>): void;
  addItems(value?: Package, index?: number): Package;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Packages.AsObject;
  static toObject(includeInstance: boolean, msg: Packages): Packages.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Packages, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Packages;
  static deserializeBinaryFromReader(message: Packages, reader: jspb.BinaryReader): Packages;
}

export namespace Packages {
  export type AsObject = {
    itemsList: Array<Package.AsObject>,
  }
}

export class Players extends jspb.Message {
  getPlayersMap(): jspb.Map<number, PackedPlayer>;
  clearPlayersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Players.AsObject;
  static toObject(includeInstance: boolean, msg: Players): Players.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Players, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Players;
  static deserializeBinaryFromReader(message: Players, reader: jspb.BinaryReader): Players;
}

export namespace Players {
  export type AsObject = {
    playersMap: Array<[number, PackedPlayer.AsObject]>,
  }
}

export class Entities extends jspb.Message {
  getEntitiesMap(): jspb.Map<number, PackedEntity>;
  clearEntitiesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entities.AsObject;
  static toObject(includeInstance: boolean, msg: Entities): Entities.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Entities, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entities;
  static deserializeBinaryFromReader(message: Entities, reader: jspb.BinaryReader): Entities;
}

export namespace Entities {
  export type AsObject = {
    entitiesMap: Array<[number, PackedEntity.AsObject]>,
  }
}

export class CloseEntities extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<number>;
  setIdsList(value: Array<number>): void;
  addIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseEntities.AsObject;
  static toObject(includeInstance: boolean, msg: CloseEntities): CloseEntities.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloseEntities, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseEntities;
  static deserializeBinaryFromReader(message: CloseEntities, reader: jspb.BinaryReader): CloseEntities;
}

export namespace CloseEntities {
  export type AsObject = {
    idsList: Array<number>,
  }
}

export class UpdateEntitiesMap extends jspb.Message {
  getItemsMap(): jspb.Map<number, PartialEntity>;
  clearItemsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEntitiesMap.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEntitiesMap): UpdateEntitiesMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEntitiesMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEntitiesMap;
  static deserializeBinaryFromReader(message: UpdateEntitiesMap, reader: jspb.BinaryReader): UpdateEntitiesMap;
}

export namespace UpdateEntitiesMap {
  export type AsObject = {
    itemsMap: Array<[number, PartialEntity.AsObject]>,
  }
}

export class UpdatePlayersMap extends jspb.Message {
  getItemsMap(): jspb.Map<number, PartialPlayer>;
  clearItemsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePlayersMap.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePlayersMap): UpdatePlayersMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePlayersMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePlayersMap;
  static deserializeBinaryFromReader(message: UpdatePlayersMap, reader: jspb.BinaryReader): UpdatePlayersMap;
}

export namespace UpdatePlayersMap {
  export type AsObject = {
    itemsMap: Array<[number, PartialPlayer.AsObject]>,
  }
}

export interface RoleMap {
  USER: 0;
  MOD: 1;
  DEV: 2;
}

export const Role: RoleMap;

