import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace game. */
export namespace game {

    /** Properties of a Chat. */
    interface IChat {

        /** Chat id */
        id?: (number|null);

        /** Chat content */
        content?: (string|null);

        /** Chat author */
        author?: (string|null);

        /** Chat role */
        role?: (connection.Role|null);

        /** Chat world */
        world?: (string|null);
    }

    /** Represents a Chat. */
    class Chat implements IChat {

        /**
         * Constructs a new Chat.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IChat);

        /** Chat id. */
        public id: number;

        /** Chat content. */
        public content: string;

        /** Chat author. */
        public author: string;

        /** Chat role. */
        public role: connection.Role;

        /** Chat world. */
        public world: string;

        /**
         * Creates a new Chat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Chat instance
         */
        public static create(properties?: game.IChat): game.Chat;

        /**
         * Encodes the specified Chat message. Does not implicitly {@link game.Chat.verify|verify} messages.
         * @param message Chat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Chat message, length delimited. Does not implicitly {@link game.Chat.verify|verify} messages.
         * @param message Chat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Chat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.Chat;

        /**
         * Decodes a Chat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.Chat;

        /**
         * Verifies a Chat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Chat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Chat
         */
        public static fromObject(object: { [k: string]: any }): game.Chat;

        /**
         * Creates a plain object from a Chat message. Also converts values to other types if specified.
         * @param message Chat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Chat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Chat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Chat
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PackedEntity. */
    interface IPackedEntity {

        /** PackedEntity typeId */
        typeId?: (number|null);

        /** PackedEntity x */
        x?: (number|null);

        /** PackedEntity y */
        y?: (number|null);

        /** PackedEntity radius */
        radius?: (number|null);

        /** PackedEntity harmless */
        harmless?: (boolean|null);

        /** PackedEntity state */
        state?: (number|null);

        /** PackedEntity stateMetadata */
        stateMetadata?: (number|null);

        /** PackedEntity alpha */
        alpha?: (number|null);
    }

    /** Represents a PackedEntity. */
    class PackedEntity implements IPackedEntity {

        /**
         * Constructs a new PackedEntity.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IPackedEntity);

        /** PackedEntity typeId. */
        public typeId: number;

        /** PackedEntity x. */
        public x: number;

        /** PackedEntity y. */
        public y: number;

        /** PackedEntity radius. */
        public radius: number;

        /** PackedEntity harmless. */
        public harmless: boolean;

        /** PackedEntity state. */
        public state: number;

        /** PackedEntity stateMetadata. */
        public stateMetadata: number;

        /** PackedEntity alpha. */
        public alpha: number;

        /**
         * Creates a new PackedEntity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackedEntity instance
         */
        public static create(properties?: game.IPackedEntity): game.PackedEntity;

        /**
         * Encodes the specified PackedEntity message. Does not implicitly {@link game.PackedEntity.verify|verify} messages.
         * @param message PackedEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IPackedEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackedEntity message, length delimited. Does not implicitly {@link game.PackedEntity.verify|verify} messages.
         * @param message PackedEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IPackedEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackedEntity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackedEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.PackedEntity;

        /**
         * Decodes a PackedEntity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackedEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.PackedEntity;

        /**
         * Verifies a PackedEntity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PackedEntity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PackedEntity
         */
        public static fromObject(object: { [k: string]: any }): game.PackedEntity;

        /**
         * Creates a plain object from a PackedEntity message. Also converts values to other types if specified.
         * @param message PackedEntity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.PackedEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackedEntity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PackedEntity
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PackedPlayer. */
    interface IPackedPlayer {

        /** PackedPlayer name */
        name?: (string|null);

        /** PackedPlayer id */
        id?: (number|null);

        /** PackedPlayer x */
        x?: (number|null);

        /** PackedPlayer y */
        y?: (number|null);

        /** PackedPlayer radius */
        radius?: (number|null);

        /** PackedPlayer speed */
        speed?: (number|null);

        /** PackedPlayer energy */
        energy?: (number|null);

        /** PackedPlayer maxEnergy */
        maxEnergy?: (number|null);

        /** PackedPlayer deathTimer */
        deathTimer?: (number|null);

        /** PackedPlayer state */
        state?: (number|null);

        /** PackedPlayer stateMeta */
        stateMeta?: (number|null);

        /** PackedPlayer area */
        area?: (number|null);

        /** PackedPlayer world */
        world?: (string|null);

        /** PackedPlayer died */
        died?: (boolean|null);

        /** PackedPlayer hero */
        hero?: (number|null);
    }

    /** Represents a PackedPlayer. */
    class PackedPlayer implements IPackedPlayer {

        /**
         * Constructs a new PackedPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IPackedPlayer);

        /** PackedPlayer name. */
        public name: string;

        /** PackedPlayer id. */
        public id: number;

        /** PackedPlayer x. */
        public x: number;

        /** PackedPlayer y. */
        public y: number;

        /** PackedPlayer radius. */
        public radius: number;

        /** PackedPlayer speed. */
        public speed: number;

        /** PackedPlayer energy. */
        public energy: number;

        /** PackedPlayer maxEnergy. */
        public maxEnergy: number;

        /** PackedPlayer deathTimer. */
        public deathTimer: number;

        /** PackedPlayer state. */
        public state: number;

        /** PackedPlayer stateMeta. */
        public stateMeta: number;

        /** PackedPlayer area. */
        public area: number;

        /** PackedPlayer world. */
        public world: string;

        /** PackedPlayer died. */
        public died: boolean;

        /** PackedPlayer hero. */
        public hero: number;

        /**
         * Creates a new PackedPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackedPlayer instance
         */
        public static create(properties?: game.IPackedPlayer): game.PackedPlayer;

        /**
         * Encodes the specified PackedPlayer message. Does not implicitly {@link game.PackedPlayer.verify|verify} messages.
         * @param message PackedPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IPackedPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackedPlayer message, length delimited. Does not implicitly {@link game.PackedPlayer.verify|verify} messages.
         * @param message PackedPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IPackedPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackedPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackedPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.PackedPlayer;

        /**
         * Decodes a PackedPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackedPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.PackedPlayer;

        /**
         * Verifies a PackedPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PackedPlayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PackedPlayer
         */
        public static fromObject(object: { [k: string]: any }): game.PackedPlayer;

        /**
         * Creates a plain object from a PackedPlayer message. Also converts values to other types if specified.
         * @param message PackedPlayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.PackedPlayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackedPlayer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PackedPlayer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PartialEntity. */
    interface IPartialEntity {

        /** PartialEntity x */
        x?: (number|null);

        /** PartialEntity y */
        y?: (number|null);

        /** PartialEntity radius */
        radius?: (number|null);

        /** PartialEntity harmless */
        harmless?: (boolean|null);

        /** PartialEntity state */
        state?: (number|null);

        /** PartialEntity stateMetadata */
        stateMetadata?: (number|null);

        /** PartialEntity alpha */
        alpha?: (number|null);
    }

    /** Represents a PartialEntity. */
    class PartialEntity implements IPartialEntity {

        /**
         * Constructs a new PartialEntity.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IPartialEntity);

        /** PartialEntity x. */
        public x?: (number|null);

        /** PartialEntity y. */
        public y?: (number|null);

        /** PartialEntity radius. */
        public radius?: (number|null);

        /** PartialEntity harmless. */
        public harmless?: (boolean|null);

        /** PartialEntity state. */
        public state?: (number|null);

        /** PartialEntity stateMetadata. */
        public stateMetadata?: (number|null);

        /** PartialEntity alpha. */
        public alpha?: (number|null);

        /**
         * Creates a new PartialEntity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PartialEntity instance
         */
        public static create(properties?: game.IPartialEntity): game.PartialEntity;

        /**
         * Encodes the specified PartialEntity message. Does not implicitly {@link game.PartialEntity.verify|verify} messages.
         * @param message PartialEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IPartialEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PartialEntity message, length delimited. Does not implicitly {@link game.PartialEntity.verify|verify} messages.
         * @param message PartialEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IPartialEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PartialEntity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PartialEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.PartialEntity;

        /**
         * Decodes a PartialEntity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PartialEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.PartialEntity;

        /**
         * Verifies a PartialEntity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PartialEntity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PartialEntity
         */
        public static fromObject(object: { [k: string]: any }): game.PartialEntity;

        /**
         * Creates a plain object from a PartialEntity message. Also converts values to other types if specified.
         * @param message PartialEntity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.PartialEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PartialEntity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PartialEntity
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PartialPlayer. */
    interface IPartialPlayer {

        /** PartialPlayer x */
        x?: (number|null);

        /** PartialPlayer y */
        y?: (number|null);

        /** PartialPlayer radius */
        radius?: (number|null);

        /** PartialPlayer speed */
        speed?: (number|null);

        /** PartialPlayer energy */
        energy?: (number|null);

        /** PartialPlayer maxEnergy */
        maxEnergy?: (number|null);

        /** PartialPlayer deathTimer */
        deathTimer?: (number|null);

        /** PartialPlayer state */
        state?: (number|null);

        /** PartialPlayer stateMeta */
        stateMeta?: (number|null);

        /** PartialPlayer area */
        area?: (number|null);

        /** PartialPlayer world */
        world?: (string|null);

        /** PartialPlayer died */
        died?: (boolean|null);
    }

    /** Represents a PartialPlayer. */
    class PartialPlayer implements IPartialPlayer {

        /**
         * Constructs a new PartialPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IPartialPlayer);

        /** PartialPlayer x. */
        public x?: (number|null);

        /** PartialPlayer y. */
        public y?: (number|null);

        /** PartialPlayer radius. */
        public radius?: (number|null);

        /** PartialPlayer speed. */
        public speed?: (number|null);

        /** PartialPlayer energy. */
        public energy?: (number|null);

        /** PartialPlayer maxEnergy. */
        public maxEnergy?: (number|null);

        /** PartialPlayer deathTimer. */
        public deathTimer?: (number|null);

        /** PartialPlayer state. */
        public state?: (number|null);

        /** PartialPlayer stateMeta. */
        public stateMeta?: (number|null);

        /** PartialPlayer area. */
        public area?: (number|null);

        /** PartialPlayer world. */
        public world?: (string|null);

        /** PartialPlayer died. */
        public died?: (boolean|null);

        /**
         * Creates a new PartialPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PartialPlayer instance
         */
        public static create(properties?: game.IPartialPlayer): game.PartialPlayer;

        /**
         * Encodes the specified PartialPlayer message. Does not implicitly {@link game.PartialPlayer.verify|verify} messages.
         * @param message PartialPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IPartialPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PartialPlayer message, length delimited. Does not implicitly {@link game.PartialPlayer.verify|verify} messages.
         * @param message PartialPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IPartialPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PartialPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PartialPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.PartialPlayer;

        /**
         * Decodes a PartialPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PartialPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.PartialPlayer;

        /**
         * Verifies a PartialPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PartialPlayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PartialPlayer
         */
        public static fromObject(object: { [k: string]: any }): game.PartialPlayer;

        /**
         * Creates a plain object from a PartialPlayer message. Also converts values to other types if specified.
         * @param message PartialPlayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.PartialPlayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PartialPlayer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PartialPlayer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PackedArea. */
    interface IPackedArea {

        /** PackedArea w */
        w?: (number|null);

        /** PackedArea h */
        h?: (number|null);

        /** PackedArea area */
        area?: (number|Long|null);

        /** PackedArea world */
        world?: (string|null);

        /** PackedArea entities */
        entities?: ({ [k: string]: game.IPackedEntity }|null);
    }

    /** Represents a PackedArea. */
    class PackedArea implements IPackedArea {

        /**
         * Constructs a new PackedArea.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IPackedArea);

        /** PackedArea w. */
        public w: number;

        /** PackedArea h. */
        public h: number;

        /** PackedArea area. */
        public area: (number|Long);

        /** PackedArea world. */
        public world: string;

        /** PackedArea entities. */
        public entities: { [k: string]: game.IPackedEntity };

        /**
         * Creates a new PackedArea instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackedArea instance
         */
        public static create(properties?: game.IPackedArea): game.PackedArea;

        /**
         * Encodes the specified PackedArea message. Does not implicitly {@link game.PackedArea.verify|verify} messages.
         * @param message PackedArea message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IPackedArea, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackedArea message, length delimited. Does not implicitly {@link game.PackedArea.verify|verify} messages.
         * @param message PackedArea message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IPackedArea, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackedArea message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackedArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.PackedArea;

        /**
         * Decodes a PackedArea message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackedArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.PackedArea;

        /**
         * Verifies a PackedArea message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PackedArea message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PackedArea
         */
        public static fromObject(object: { [k: string]: any }): game.PackedArea;

        /**
         * Creates a plain object from a PackedArea message. Also converts values to other types if specified.
         * @param message PackedArea
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.PackedArea, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackedArea to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PackedArea
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Package. */
    interface IPackage {

        /** Package newPlayer */
        newPlayer?: (game.IPackedPlayer|null);

        /** Package closePlayer */
        closePlayer?: (number|Long|null);

        /** Package players */
        players?: (game.IPlayers|null);

        /** Package newEntities */
        newEntities?: (game.IEntities|null);

        /** Package closeEntities */
        closeEntities?: (game.ICloseEntities|null);

        /** Package areaInit */
        areaInit?: (game.IPackedArea|null);

        /** Package myself */
        myself?: (game.IPackedPlayer|null);

        /** Package updateEntities */
        updateEntities?: (game.IUpdateEntitiesMap|null);

        /** Package updatePlayers */
        updatePlayers?: (game.IUpdatePlayersMap|null);
    }

    /** Represents a Package. */
    class Package implements IPackage {

        /**
         * Constructs a new Package.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IPackage);

        /** Package newPlayer. */
        public newPlayer?: (game.IPackedPlayer|null);

        /** Package closePlayer. */
        public closePlayer?: (number|Long|null);

        /** Package players. */
        public players?: (game.IPlayers|null);

        /** Package newEntities. */
        public newEntities?: (game.IEntities|null);

        /** Package closeEntities. */
        public closeEntities?: (game.ICloseEntities|null);

        /** Package areaInit. */
        public areaInit?: (game.IPackedArea|null);

        /** Package myself. */
        public myself?: (game.IPackedPlayer|null);

        /** Package updateEntities. */
        public updateEntities?: (game.IUpdateEntitiesMap|null);

        /** Package updatePlayers. */
        public updatePlayers?: (game.IUpdatePlayersMap|null);

        /** Package kind. */
        public kind?: ("newPlayer"|"closePlayer"|"players"|"newEntities"|"closeEntities"|"areaInit"|"myself"|"updateEntities"|"updatePlayers");

        /**
         * Creates a new Package instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Package instance
         */
        public static create(properties?: game.IPackage): game.Package;

        /**
         * Encodes the specified Package message. Does not implicitly {@link game.Package.verify|verify} messages.
         * @param message Package message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IPackage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Package message, length delimited. Does not implicitly {@link game.Package.verify|verify} messages.
         * @param message Package message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IPackage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Package message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Package
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.Package;

        /**
         * Decodes a Package message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Package
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.Package;

        /**
         * Verifies a Package message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Package message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Package
         */
        public static fromObject(object: { [k: string]: any }): game.Package;

        /**
         * Creates a plain object from a Package message. Also converts values to other types if specified.
         * @param message Package
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Package, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Package to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Package
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Packages. */
    interface IPackages {

        /** Packages items */
        items?: (game.IPackage[]|null);
    }

    /** Represents a Packages. */
    class Packages implements IPackages {

        /**
         * Constructs a new Packages.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IPackages);

        /** Packages items. */
        public items: game.IPackage[];

        /**
         * Creates a new Packages instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Packages instance
         */
        public static create(properties?: game.IPackages): game.Packages;

        /**
         * Encodes the specified Packages message. Does not implicitly {@link game.Packages.verify|verify} messages.
         * @param message Packages message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IPackages, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Packages message, length delimited. Does not implicitly {@link game.Packages.verify|verify} messages.
         * @param message Packages message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IPackages, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Packages message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Packages
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.Packages;

        /**
         * Decodes a Packages message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Packages
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.Packages;

        /**
         * Verifies a Packages message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Packages message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Packages
         */
        public static fromObject(object: { [k: string]: any }): game.Packages;

        /**
         * Creates a plain object from a Packages message. Also converts values to other types if specified.
         * @param message Packages
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Packages, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Packages to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Packages
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Players. */
    interface IPlayers {

        /** Players players */
        players?: ({ [k: string]: game.IPackedPlayer }|null);
    }

    /** Represents a Players. */
    class Players implements IPlayers {

        /**
         * Constructs a new Players.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IPlayers);

        /** Players players. */
        public players: { [k: string]: game.IPackedPlayer };

        /**
         * Creates a new Players instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Players instance
         */
        public static create(properties?: game.IPlayers): game.Players;

        /**
         * Encodes the specified Players message. Does not implicitly {@link game.Players.verify|verify} messages.
         * @param message Players message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IPlayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Players message, length delimited. Does not implicitly {@link game.Players.verify|verify} messages.
         * @param message Players message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IPlayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Players message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Players
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.Players;

        /**
         * Decodes a Players message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Players
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.Players;

        /**
         * Verifies a Players message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Players message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Players
         */
        public static fromObject(object: { [k: string]: any }): game.Players;

        /**
         * Creates a plain object from a Players message. Also converts values to other types if specified.
         * @param message Players
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Players, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Players to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Players
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Entities. */
    interface IEntities {

        /** Entities entities */
        entities?: ({ [k: string]: game.IPackedEntity }|null);
    }

    /** Represents an Entities. */
    class Entities implements IEntities {

        /**
         * Constructs a new Entities.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IEntities);

        /** Entities entities. */
        public entities: { [k: string]: game.IPackedEntity };

        /**
         * Creates a new Entities instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Entities instance
         */
        public static create(properties?: game.IEntities): game.Entities;

        /**
         * Encodes the specified Entities message. Does not implicitly {@link game.Entities.verify|verify} messages.
         * @param message Entities message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IEntities, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Entities message, length delimited. Does not implicitly {@link game.Entities.verify|verify} messages.
         * @param message Entities message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IEntities, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Entities message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Entities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.Entities;

        /**
         * Decodes an Entities message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Entities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.Entities;

        /**
         * Verifies an Entities message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Entities message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Entities
         */
        public static fromObject(object: { [k: string]: any }): game.Entities;

        /**
         * Creates a plain object from an Entities message. Also converts values to other types if specified.
         * @param message Entities
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Entities, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Entities to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Entities
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CloseEntities. */
    interface ICloseEntities {

        /** CloseEntities ids */
        ids?: (number[]|null);
    }

    /** Represents a CloseEntities. */
    class CloseEntities implements ICloseEntities {

        /**
         * Constructs a new CloseEntities.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ICloseEntities);

        /** CloseEntities ids. */
        public ids: number[];

        /**
         * Creates a new CloseEntities instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CloseEntities instance
         */
        public static create(properties?: game.ICloseEntities): game.CloseEntities;

        /**
         * Encodes the specified CloseEntities message. Does not implicitly {@link game.CloseEntities.verify|verify} messages.
         * @param message CloseEntities message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ICloseEntities, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CloseEntities message, length delimited. Does not implicitly {@link game.CloseEntities.verify|verify} messages.
         * @param message CloseEntities message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ICloseEntities, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CloseEntities message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CloseEntities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.CloseEntities;

        /**
         * Decodes a CloseEntities message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CloseEntities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.CloseEntities;

        /**
         * Verifies a CloseEntities message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CloseEntities message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CloseEntities
         */
        public static fromObject(object: { [k: string]: any }): game.CloseEntities;

        /**
         * Creates a plain object from a CloseEntities message. Also converts values to other types if specified.
         * @param message CloseEntities
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.CloseEntities, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CloseEntities to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CloseEntities
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateEntitiesMap. */
    interface IUpdateEntitiesMap {

        /** UpdateEntitiesMap items */
        items?: ({ [k: string]: game.IPartialEntity }|null);
    }

    /** Represents an UpdateEntitiesMap. */
    class UpdateEntitiesMap implements IUpdateEntitiesMap {

        /**
         * Constructs a new UpdateEntitiesMap.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IUpdateEntitiesMap);

        /** UpdateEntitiesMap items. */
        public items: { [k: string]: game.IPartialEntity };

        /**
         * Creates a new UpdateEntitiesMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateEntitiesMap instance
         */
        public static create(properties?: game.IUpdateEntitiesMap): game.UpdateEntitiesMap;

        /**
         * Encodes the specified UpdateEntitiesMap message. Does not implicitly {@link game.UpdateEntitiesMap.verify|verify} messages.
         * @param message UpdateEntitiesMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IUpdateEntitiesMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateEntitiesMap message, length delimited. Does not implicitly {@link game.UpdateEntitiesMap.verify|verify} messages.
         * @param message UpdateEntitiesMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IUpdateEntitiesMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateEntitiesMap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateEntitiesMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.UpdateEntitiesMap;

        /**
         * Decodes an UpdateEntitiesMap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateEntitiesMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.UpdateEntitiesMap;

        /**
         * Verifies an UpdateEntitiesMap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateEntitiesMap message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateEntitiesMap
         */
        public static fromObject(object: { [k: string]: any }): game.UpdateEntitiesMap;

        /**
         * Creates a plain object from an UpdateEntitiesMap message. Also converts values to other types if specified.
         * @param message UpdateEntitiesMap
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.UpdateEntitiesMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateEntitiesMap to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateEntitiesMap
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdatePlayersMap. */
    interface IUpdatePlayersMap {

        /** UpdatePlayersMap items */
        items?: ({ [k: string]: game.IPartialPlayer }|null);
    }

    /** Represents an UpdatePlayersMap. */
    class UpdatePlayersMap implements IUpdatePlayersMap {

        /**
         * Constructs a new UpdatePlayersMap.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IUpdatePlayersMap);

        /** UpdatePlayersMap items. */
        public items: { [k: string]: game.IPartialPlayer };

        /**
         * Creates a new UpdatePlayersMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdatePlayersMap instance
         */
        public static create(properties?: game.IUpdatePlayersMap): game.UpdatePlayersMap;

        /**
         * Encodes the specified UpdatePlayersMap message. Does not implicitly {@link game.UpdatePlayersMap.verify|verify} messages.
         * @param message UpdatePlayersMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IUpdatePlayersMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdatePlayersMap message, length delimited. Does not implicitly {@link game.UpdatePlayersMap.verify|verify} messages.
         * @param message UpdatePlayersMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IUpdatePlayersMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdatePlayersMap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdatePlayersMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.UpdatePlayersMap;

        /**
         * Decodes an UpdatePlayersMap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdatePlayersMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.UpdatePlayersMap;

        /**
         * Verifies an UpdatePlayersMap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdatePlayersMap message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdatePlayersMap
         */
        public static fromObject(object: { [k: string]: any }): game.UpdatePlayersMap;

        /**
         * Creates a plain object from an UpdatePlayersMap message. Also converts values to other types if specified.
         * @param message UpdatePlayersMap
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.UpdatePlayersMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdatePlayersMap to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdatePlayersMap
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace connection. */
export namespace connection {

    /** Represents a GameService */
    class GameService extends $protobuf.rpc.Service {

        /**
         * Constructs a new GameService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new GameService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): GameService;

        /**
         * Calls Register.
         * @param request RegisterRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and RegisterResponse
         */
        public register(request: connection.IRegisterRequest, callback: connection.GameService.RegisterCallback): void;

        /**
         * Calls Register.
         * @param request RegisterRequest message or plain object
         * @returns Promise
         */
        public register(request: connection.IRegisterRequest): Promise<connection.RegisterResponse>;

        /**
         * Calls JoinPlayer.
         * @param request JoinPlayerRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and JoinPlayerResponse
         */
        public joinPlayer(request: connection.IJoinPlayerRequest, callback: connection.GameService.JoinPlayerCallback): void;

        /**
         * Calls JoinPlayer.
         * @param request JoinPlayerRequest message or plain object
         * @returns Promise
         */
        public joinPlayer(request: connection.IJoinPlayerRequest): Promise<connection.JoinPlayerResponse>;
    }

    namespace GameService {

        /**
         * Callback as used by {@link connection.GameService#register}.
         * @param error Error, if any
         * @param [response] RegisterResponse
         */
        type RegisterCallback = (error: (Error|null), response?: connection.RegisterResponse) => void;

        /**
         * Callback as used by {@link connection.GameService#joinPlayer}.
         * @param error Error, if any
         * @param [response] JoinPlayerResponse
         */
        type JoinPlayerCallback = (error: (Error|null), response?: connection.JoinPlayerResponse) => void;
    }

    /** Properties of a RegisterRequest. */
    interface IRegisterRequest {

        /** RegisterRequest icon */
        icon?: (string|null);

        /** RegisterRequest name */
        name?: (string|null);

        /** RegisterRequest url */
        url?: (string|null);
    }

    /** Represents a RegisterRequest. */
    class RegisterRequest implements IRegisterRequest {

        /**
         * Constructs a new RegisterRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: connection.IRegisterRequest);

        /** RegisterRequest icon. */
        public icon: string;

        /** RegisterRequest name. */
        public name: string;

        /** RegisterRequest url. */
        public url: string;

        /**
         * Creates a new RegisterRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterRequest instance
         */
        public static create(properties?: connection.IRegisterRequest): connection.RegisterRequest;

        /**
         * Encodes the specified RegisterRequest message. Does not implicitly {@link connection.RegisterRequest.verify|verify} messages.
         * @param message RegisterRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: connection.IRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterRequest message, length delimited. Does not implicitly {@link connection.RegisterRequest.verify|verify} messages.
         * @param message RegisterRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: connection.IRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): connection.RegisterRequest;

        /**
         * Decodes a RegisterRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): connection.RegisterRequest;

        /**
         * Verifies a RegisterRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterRequest
         */
        public static fromObject(object: { [k: string]: any }): connection.RegisterRequest;

        /**
         * Creates a plain object from a RegisterRequest message. Also converts values to other types if specified.
         * @param message RegisterRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: connection.RegisterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RegisterRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RegisterResponse. */
    interface IRegisterResponse {

        /** RegisterResponse success */
        success?: (boolean|null);
    }

    /** Represents a RegisterResponse. */
    class RegisterResponse implements IRegisterResponse {

        /**
         * Constructs a new RegisterResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: connection.IRegisterResponse);

        /** RegisterResponse success. */
        public success: boolean;

        /**
         * Creates a new RegisterResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterResponse instance
         */
        public static create(properties?: connection.IRegisterResponse): connection.RegisterResponse;

        /**
         * Encodes the specified RegisterResponse message. Does not implicitly {@link connection.RegisterResponse.verify|verify} messages.
         * @param message RegisterResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: connection.IRegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterResponse message, length delimited. Does not implicitly {@link connection.RegisterResponse.verify|verify} messages.
         * @param message RegisterResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: connection.IRegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): connection.RegisterResponse;

        /**
         * Decodes a RegisterResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): connection.RegisterResponse;

        /**
         * Verifies a RegisterResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterResponse
         */
        public static fromObject(object: { [k: string]: any }): connection.RegisterResponse;

        /**
         * Creates a plain object from a RegisterResponse message. Also converts values to other types if specified.
         * @param message RegisterResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: connection.RegisterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RegisterResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a JoinPlayerRequest. */
    interface IJoinPlayerRequest {

        /** JoinPlayerRequest token */
        token?: (string|null);
    }

    /** Represents a JoinPlayerRequest. */
    class JoinPlayerRequest implements IJoinPlayerRequest {

        /**
         * Constructs a new JoinPlayerRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: connection.IJoinPlayerRequest);

        /** JoinPlayerRequest token. */
        public token: string;

        /**
         * Creates a new JoinPlayerRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinPlayerRequest instance
         */
        public static create(properties?: connection.IJoinPlayerRequest): connection.JoinPlayerRequest;

        /**
         * Encodes the specified JoinPlayerRequest message. Does not implicitly {@link connection.JoinPlayerRequest.verify|verify} messages.
         * @param message JoinPlayerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: connection.IJoinPlayerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinPlayerRequest message, length delimited. Does not implicitly {@link connection.JoinPlayerRequest.verify|verify} messages.
         * @param message JoinPlayerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: connection.IJoinPlayerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinPlayerRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinPlayerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): connection.JoinPlayerRequest;

        /**
         * Decodes a JoinPlayerRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinPlayerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): connection.JoinPlayerRequest;

        /**
         * Verifies a JoinPlayerRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinPlayerRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinPlayerRequest
         */
        public static fromObject(object: { [k: string]: any }): connection.JoinPlayerRequest;

        /**
         * Creates a plain object from a JoinPlayerRequest message. Also converts values to other types if specified.
         * @param message JoinPlayerRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: connection.JoinPlayerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinPlayerRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for JoinPlayerRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a JoinPlayerResponse. */
    interface IJoinPlayerResponse {

        /** JoinPlayerResponse name */
        name?: (string|null);

        /** JoinPlayerResponse role */
        role?: (connection.Role|null);
    }

    /** Represents a JoinPlayerResponse. */
    class JoinPlayerResponse implements IJoinPlayerResponse {

        /**
         * Constructs a new JoinPlayerResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: connection.IJoinPlayerResponse);

        /** JoinPlayerResponse name. */
        public name: string;

        /** JoinPlayerResponse role. */
        public role: connection.Role;

        /**
         * Creates a new JoinPlayerResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinPlayerResponse instance
         */
        public static create(properties?: connection.IJoinPlayerResponse): connection.JoinPlayerResponse;

        /**
         * Encodes the specified JoinPlayerResponse message. Does not implicitly {@link connection.JoinPlayerResponse.verify|verify} messages.
         * @param message JoinPlayerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: connection.IJoinPlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinPlayerResponse message, length delimited. Does not implicitly {@link connection.JoinPlayerResponse.verify|verify} messages.
         * @param message JoinPlayerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: connection.IJoinPlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinPlayerResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinPlayerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): connection.JoinPlayerResponse;

        /**
         * Decodes a JoinPlayerResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinPlayerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): connection.JoinPlayerResponse;

        /**
         * Verifies a JoinPlayerResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinPlayerResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinPlayerResponse
         */
        public static fromObject(object: { [k: string]: any }): connection.JoinPlayerResponse;

        /**
         * Creates a plain object from a JoinPlayerResponse message. Also converts values to other types if specified.
         * @param message JoinPlayerResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: connection.JoinPlayerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinPlayerResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for JoinPlayerResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Role enum. */
    enum Role {
        USER = 0,
        MOD = 1,
        DEV = 2
    }
}
