import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace game. */
export namespace game {

    /** Role enum. */
    enum Role {

        /** USER value */
        USER = 0,

        /** MOD value */
        MOD = 1,

        /** DEV value */
        DEV = 2
    }

    /**
     * Properties of a Chat.
     * @deprecated Use game.Chat.$Properties instead.
     */
    interface IChat extends game.Chat.$Properties {
    }

    /** Represents a Chat. */
    class Chat {

        /**
         * Constructs a new Chat.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Chat.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Chat id. */
        id: number;

        /** Chat content. */
        content: string;

        /** Chat author. */
        author: string;

        /** Chat role. */
        role: game.Role;

        /** Chat world. */
        world: string;

        /**
         * Creates a new Chat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Chat instance
         */
        static create(properties: game.Chat.$Shape): game.Chat & game.Chat.$Shape;
        static create(properties?: game.Chat.$Properties): game.Chat;

        /**
         * Encodes the specified Chat message. Does not implicitly {@link game.Chat.verify|verify} messages.
         * @param message Chat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.Chat.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Chat message, length delimited. Does not implicitly {@link game.Chat.verify|verify} messages.
         * @param message Chat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.Chat.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Chat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.Chat & game.Chat.$Shape} Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.Chat & game.Chat.$Shape;

        /**
         * Decodes a Chat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.Chat & game.Chat.$Shape} Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.Chat & game.Chat.$Shape;

        /**
         * Verifies a Chat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Chat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Chat
         */
        static fromObject(object: { [k: string]: any }): game.Chat;

        /**
         * Creates a plain object from a Chat message. Also converts values to other types if specified.
         * @param message Chat
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.Chat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Chat to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Chat
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Chat {

        /** Properties of a Chat. */
        interface $Properties {

            /** Chat id */
            id?: (number|null);

            /** Chat content */
            content?: (string|null);

            /** Chat author */
            author?: (string|null);

            /** Chat role */
            role?: (game.Role|null);

            /** Chat world */
            world?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Chat. */
        type $Shape = game.Chat.$Properties;
    }

    /**
     * Properties of a PackedEntity.
     * @deprecated Use game.PackedEntity.$Properties instead.
     */
    interface IPackedEntity extends game.PackedEntity.$Properties {
    }

    /** Represents a PackedEntity. */
    class PackedEntity {

        /**
         * Constructs a new PackedEntity.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.PackedEntity.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PackedEntity typeId. */
        typeId: number;

        /** PackedEntity x. */
        x: number;

        /** PackedEntity y. */
        y: number;

        /** PackedEntity radius. */
        radius: number;

        /** PackedEntity harmless. */
        harmless: boolean;

        /** PackedEntity state. */
        state: number;

        /** PackedEntity stateMetadata. */
        stateMetadata: number;

        /** PackedEntity alpha. */
        alpha: number;

        /**
         * Creates a new PackedEntity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackedEntity instance
         */
        static create(properties: game.PackedEntity.$Shape): game.PackedEntity & game.PackedEntity.$Shape;
        static create(properties?: game.PackedEntity.$Properties): game.PackedEntity;

        /**
         * Encodes the specified PackedEntity message. Does not implicitly {@link game.PackedEntity.verify|verify} messages.
         * @param message PackedEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.PackedEntity.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackedEntity message, length delimited. Does not implicitly {@link game.PackedEntity.verify|verify} messages.
         * @param message PackedEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.PackedEntity.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackedEntity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.PackedEntity & game.PackedEntity.$Shape} PackedEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.PackedEntity & game.PackedEntity.$Shape;

        /**
         * Decodes a PackedEntity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.PackedEntity & game.PackedEntity.$Shape} PackedEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.PackedEntity & game.PackedEntity.$Shape;

        /**
         * Verifies a PackedEntity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PackedEntity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PackedEntity
         */
        static fromObject(object: { [k: string]: any }): game.PackedEntity;

        /**
         * Creates a plain object from a PackedEntity message. Also converts values to other types if specified.
         * @param message PackedEntity
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.PackedEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackedEntity to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PackedEntity
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PackedEntity {

        /** Properties of a PackedEntity. */
        interface $Properties {

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

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PackedEntity. */
        type $Shape = game.PackedEntity.$Properties;
    }

    /**
     * Properties of a PackedPlayer.
     * @deprecated Use game.PackedPlayer.$Properties instead.
     */
    interface IPackedPlayer extends game.PackedPlayer.$Properties {
    }

    /** Represents a PackedPlayer. */
    class PackedPlayer {

        /**
         * Constructs a new PackedPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.PackedPlayer.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PackedPlayer name. */
        name: string;

        /** PackedPlayer id. */
        id: number;

        /** PackedPlayer x. */
        x: number;

        /** PackedPlayer y. */
        y: number;

        /** PackedPlayer radius. */
        radius: number;

        /** PackedPlayer speed. */
        speed: number;

        /** PackedPlayer energy. */
        energy: number;

        /** PackedPlayer maxEnergy. */
        maxEnergy: number;

        /** PackedPlayer deathTimer. */
        deathTimer: number;

        /** PackedPlayer state. */
        state: number;

        /** PackedPlayer stateMeta. */
        stateMeta: number;

        /** PackedPlayer area. */
        area: number;

        /** PackedPlayer world. */
        world: string;

        /** PackedPlayer died. */
        died: boolean;

        /** PackedPlayer hero. */
        hero: number;

        /**
         * Creates a new PackedPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackedPlayer instance
         */
        static create(properties: game.PackedPlayer.$Shape): game.PackedPlayer & game.PackedPlayer.$Shape;
        static create(properties?: game.PackedPlayer.$Properties): game.PackedPlayer;

        /**
         * Encodes the specified PackedPlayer message. Does not implicitly {@link game.PackedPlayer.verify|verify} messages.
         * @param message PackedPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.PackedPlayer.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackedPlayer message, length delimited. Does not implicitly {@link game.PackedPlayer.verify|verify} messages.
         * @param message PackedPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.PackedPlayer.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackedPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.PackedPlayer & game.PackedPlayer.$Shape} PackedPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.PackedPlayer & game.PackedPlayer.$Shape;

        /**
         * Decodes a PackedPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.PackedPlayer & game.PackedPlayer.$Shape} PackedPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.PackedPlayer & game.PackedPlayer.$Shape;

        /**
         * Verifies a PackedPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PackedPlayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PackedPlayer
         */
        static fromObject(object: { [k: string]: any }): game.PackedPlayer;

        /**
         * Creates a plain object from a PackedPlayer message. Also converts values to other types if specified.
         * @param message PackedPlayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.PackedPlayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackedPlayer to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PackedPlayer
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PackedPlayer {

        /** Properties of a PackedPlayer. */
        interface $Properties {

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

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PackedPlayer. */
        type $Shape = game.PackedPlayer.$Properties;
    }

    /**
     * Properties of a PartialEntity.
     * @deprecated Use game.PartialEntity.$Properties instead.
     */
    interface IPartialEntity extends game.PartialEntity.$Properties {
    }

    /** Represents a PartialEntity. */
    class PartialEntity {

        /**
         * Constructs a new PartialEntity.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.PartialEntity.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PartialEntity x. */
        x?: (number|null);

        /** PartialEntity y. */
        y?: (number|null);

        /** PartialEntity radius. */
        radius?: (number|null);

        /** PartialEntity harmless. */
        harmless?: (boolean|null);

        /** PartialEntity state. */
        state?: (number|null);

        /** PartialEntity stateMetadata. */
        stateMetadata?: (number|null);

        /** PartialEntity alpha. */
        alpha?: (number|null);

        /**
         * Creates a new PartialEntity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PartialEntity instance
         */
        static create(properties: game.PartialEntity.$Shape): game.PartialEntity & game.PartialEntity.$Shape;
        static create(properties?: game.PartialEntity.$Properties): game.PartialEntity;

        /**
         * Encodes the specified PartialEntity message. Does not implicitly {@link game.PartialEntity.verify|verify} messages.
         * @param message PartialEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.PartialEntity.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PartialEntity message, length delimited. Does not implicitly {@link game.PartialEntity.verify|verify} messages.
         * @param message PartialEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.PartialEntity.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PartialEntity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.PartialEntity & game.PartialEntity.$Shape} PartialEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.PartialEntity & game.PartialEntity.$Shape;

        /**
         * Decodes a PartialEntity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.PartialEntity & game.PartialEntity.$Shape} PartialEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.PartialEntity & game.PartialEntity.$Shape;

        /**
         * Verifies a PartialEntity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PartialEntity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PartialEntity
         */
        static fromObject(object: { [k: string]: any }): game.PartialEntity;

        /**
         * Creates a plain object from a PartialEntity message. Also converts values to other types if specified.
         * @param message PartialEntity
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.PartialEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PartialEntity to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PartialEntity
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PartialEntity {

        /** Properties of a PartialEntity. */
        interface $Properties {

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

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PartialEntity. */
        type $Shape = game.PartialEntity.$Properties;
    }

    /**
     * Properties of a PartialPlayer.
     * @deprecated Use game.PartialPlayer.$Properties instead.
     */
    interface IPartialPlayer extends game.PartialPlayer.$Properties {
    }

    /** Represents a PartialPlayer. */
    class PartialPlayer {

        /**
         * Constructs a new PartialPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.PartialPlayer.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PartialPlayer x. */
        x?: (number|null);

        /** PartialPlayer y. */
        y?: (number|null);

        /** PartialPlayer radius. */
        radius?: (number|null);

        /** PartialPlayer speed. */
        speed?: (number|null);

        /** PartialPlayer energy. */
        energy?: (number|null);

        /** PartialPlayer maxEnergy. */
        maxEnergy?: (number|null);

        /** PartialPlayer deathTimer. */
        deathTimer?: (number|null);

        /** PartialPlayer state. */
        state?: (number|null);

        /** PartialPlayer stateMeta. */
        stateMeta?: (number|null);

        /** PartialPlayer area. */
        area?: (number|null);

        /** PartialPlayer world. */
        world?: (string|null);

        /** PartialPlayer died. */
        died?: (boolean|null);

        /**
         * Creates a new PartialPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PartialPlayer instance
         */
        static create(properties: game.PartialPlayer.$Shape): game.PartialPlayer & game.PartialPlayer.$Shape;
        static create(properties?: game.PartialPlayer.$Properties): game.PartialPlayer;

        /**
         * Encodes the specified PartialPlayer message. Does not implicitly {@link game.PartialPlayer.verify|verify} messages.
         * @param message PartialPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.PartialPlayer.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PartialPlayer message, length delimited. Does not implicitly {@link game.PartialPlayer.verify|verify} messages.
         * @param message PartialPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.PartialPlayer.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PartialPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.PartialPlayer & game.PartialPlayer.$Shape} PartialPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.PartialPlayer & game.PartialPlayer.$Shape;

        /**
         * Decodes a PartialPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.PartialPlayer & game.PartialPlayer.$Shape} PartialPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.PartialPlayer & game.PartialPlayer.$Shape;

        /**
         * Verifies a PartialPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PartialPlayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PartialPlayer
         */
        static fromObject(object: { [k: string]: any }): game.PartialPlayer;

        /**
         * Creates a plain object from a PartialPlayer message. Also converts values to other types if specified.
         * @param message PartialPlayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.PartialPlayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PartialPlayer to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PartialPlayer
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PartialPlayer {

        /** Properties of a PartialPlayer. */
        interface $Properties {

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

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PartialPlayer. */
        type $Shape = game.PartialPlayer.$Properties;
    }

    /**
     * Properties of a PackedArea.
     * @deprecated Use game.PackedArea.$Properties instead.
     */
    interface IPackedArea extends game.PackedArea.$Properties {
    }

    /** Represents a PackedArea. */
    class PackedArea {

        /**
         * Constructs a new PackedArea.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.PackedArea.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PackedArea w. */
        w: number;

        /** PackedArea h. */
        h: number;

        /** PackedArea area. */
        area: (number|Long);

        /** PackedArea world. */
        world: string;

        /** PackedArea entities. */
        entities: { [k: string]: game.PackedEntity.$Properties };

        /**
         * Creates a new PackedArea instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackedArea instance
         */
        static create(properties: game.PackedArea.$Shape): game.PackedArea & game.PackedArea.$Shape;
        static create(properties?: game.PackedArea.$Properties): game.PackedArea;

        /**
         * Encodes the specified PackedArea message. Does not implicitly {@link game.PackedArea.verify|verify} messages.
         * @param message PackedArea message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.PackedArea.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackedArea message, length delimited. Does not implicitly {@link game.PackedArea.verify|verify} messages.
         * @param message PackedArea message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.PackedArea.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackedArea message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.PackedArea & game.PackedArea.$Shape} PackedArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.PackedArea & game.PackedArea.$Shape;

        /**
         * Decodes a PackedArea message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.PackedArea & game.PackedArea.$Shape} PackedArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.PackedArea & game.PackedArea.$Shape;

        /**
         * Verifies a PackedArea message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PackedArea message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PackedArea
         */
        static fromObject(object: { [k: string]: any }): game.PackedArea;

        /**
         * Creates a plain object from a PackedArea message. Also converts values to other types if specified.
         * @param message PackedArea
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.PackedArea, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackedArea to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PackedArea
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PackedArea {

        /** Properties of a PackedArea. */
        interface $Properties {

            /** PackedArea w */
            w?: (number|null);

            /** PackedArea h */
            h?: (number|null);

            /** PackedArea area */
            area?: (number|Long|null);

            /** PackedArea world */
            world?: (string|null);

            /** PackedArea entities */
            entities?: ({ [k: string]: game.PackedEntity.$Properties }|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PackedArea. */
        type $Shape = game.PackedArea.$Properties;
    }

    /**
     * Properties of a Package.
     * @deprecated Use game.Package.$Properties instead.
     */
    interface IPackage extends game.Package.$Properties {
    }

    /** Represents a Package. */
    class Package {

        /**
         * Constructs a new Package.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Package.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Package newPlayer. */
        newPlayer?: (game.PackedPlayer.$Properties|null);

        /** Package closePlayer. */
        closePlayer?: (number|Long|null);

        /** Package players. */
        players?: (game.Players.$Properties|null);

        /** Package newEntities. */
        newEntities?: (game.Entities.$Properties|null);

        /** Package closeEntities. */
        closeEntities?: (game.CloseEntities.$Properties|null);

        /** Package areaInit. */
        areaInit?: (game.PackedArea.$Properties|null);

        /** Package myself. */
        myself?: (game.PackedPlayer.$Properties|null);

        /** Package updateEntities. */
        updateEntities?: (game.UpdateEntitiesMap.$Properties|null);

        /** Package updatePlayers. */
        updatePlayers?: (game.UpdatePlayersMap.$Properties|null);

        /** Package chatMessage. */
        chatMessage?: (game.Chat.$Properties|null);

        /** Package kind. */
        kind?: ("newPlayer"|"closePlayer"|"players"|"newEntities"|"closeEntities"|"areaInit"|"myself"|"updateEntities"|"updatePlayers"|"chatMessage");

        /**
         * Creates a new Package instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Package instance
         */
        static create(properties: game.Package.$Shape): game.Package & game.Package.$Shape;
        static create(properties?: game.Package.$Properties): game.Package;

        /**
         * Encodes the specified Package message. Does not implicitly {@link game.Package.verify|verify} messages.
         * @param message Package message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.Package.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Package message, length delimited. Does not implicitly {@link game.Package.verify|verify} messages.
         * @param message Package message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.Package.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Package message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.Package & game.Package.$Shape} Package
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.Package & game.Package.$Shape;

        /**
         * Decodes a Package message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.Package & game.Package.$Shape} Package
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.Package & game.Package.$Shape;

        /**
         * Verifies a Package message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Package message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Package
         */
        static fromObject(object: { [k: string]: any }): game.Package;

        /**
         * Creates a plain object from a Package message. Also converts values to other types if specified.
         * @param message Package
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.Package, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Package to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Package
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Package {

        /** Properties of a Package. */
        interface $Properties {

            /** Package newPlayer */
            newPlayer?: (game.PackedPlayer.$Properties|null);

            /** Package closePlayer */
            closePlayer?: (number|Long|null);

            /** Package players */
            players?: (game.Players.$Properties|null);

            /** Package newEntities */
            newEntities?: (game.Entities.$Properties|null);

            /** Package closeEntities */
            closeEntities?: (game.CloseEntities.$Properties|null);

            /** Package areaInit */
            areaInit?: (game.PackedArea.$Properties|null);

            /** Package myself */
            myself?: (game.PackedPlayer.$Properties|null);

            /** Package updateEntities */
            updateEntities?: (game.UpdateEntitiesMap.$Properties|null);

            /** Package updatePlayers */
            updatePlayers?: (game.UpdatePlayersMap.$Properties|null);

            /** Package chatMessage */
            chatMessage?: (game.Chat.$Properties|null);

            /** Package kind */
            kind?: ("newPlayer"|"closePlayer"|"players"|"newEntities"|"closeEntities"|"areaInit"|"myself"|"updateEntities"|"updatePlayers"|"chatMessage");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a Package. */
        type $Shape = {
          newPlayer?: game.PackedPlayer.$Shape|null;
          closePlayer?: number|Long|null;
          players?: game.Players.$Shape|null;
          newEntities?: game.Entities.$Shape|null;
          closeEntities?: game.CloseEntities.$Shape|null;
          areaInit?: game.PackedArea.$Shape|null;
          myself?: game.PackedPlayer.$Shape|null;
          updateEntities?: game.UpdateEntitiesMap.$Shape|null;
          updatePlayers?: game.UpdatePlayersMap.$Shape|null;
          chatMessage?: game.Chat.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ kind?: undefined; newPlayer?: null; closePlayer?: null; players?: null; newEntities?: null; closeEntities?: null; areaInit?: null; myself?: null; updateEntities?: null; updatePlayers?: null; chatMessage?: null }|{ kind?: "newPlayer"; newPlayer: game.PackedPlayer.$Shape; closePlayer?: null; players?: null; newEntities?: null; closeEntities?: null; areaInit?: null; myself?: null; updateEntities?: null; updatePlayers?: null; chatMessage?: null }|{ kind?: "closePlayer"; newPlayer?: null; closePlayer: number|Long; players?: null; newEntities?: null; closeEntities?: null; areaInit?: null; myself?: null; updateEntities?: null; updatePlayers?: null; chatMessage?: null }|{ kind?: "players"; newPlayer?: null; closePlayer?: null; players: game.Players.$Shape; newEntities?: null; closeEntities?: null; areaInit?: null; myself?: null; updateEntities?: null; updatePlayers?: null; chatMessage?: null }|{ kind?: "newEntities"; newPlayer?: null; closePlayer?: null; players?: null; newEntities: game.Entities.$Shape; closeEntities?: null; areaInit?: null; myself?: null; updateEntities?: null; updatePlayers?: null; chatMessage?: null }|{ kind?: "closeEntities"; newPlayer?: null; closePlayer?: null; players?: null; newEntities?: null; closeEntities: game.CloseEntities.$Shape; areaInit?: null; myself?: null; updateEntities?: null; updatePlayers?: null; chatMessage?: null }|{ kind?: "areaInit"; newPlayer?: null; closePlayer?: null; players?: null; newEntities?: null; closeEntities?: null; areaInit: game.PackedArea.$Shape; myself?: null; updateEntities?: null; updatePlayers?: null; chatMessage?: null }|{ kind?: "myself"; newPlayer?: null; closePlayer?: null; players?: null; newEntities?: null; closeEntities?: null; areaInit?: null; myself: game.PackedPlayer.$Shape; updateEntities?: null; updatePlayers?: null; chatMessage?: null }|{ kind?: "updateEntities"; newPlayer?: null; closePlayer?: null; players?: null; newEntities?: null; closeEntities?: null; areaInit?: null; myself?: null; updateEntities: game.UpdateEntitiesMap.$Shape; updatePlayers?: null; chatMessage?: null }|{ kind?: "updatePlayers"; newPlayer?: null; closePlayer?: null; players?: null; newEntities?: null; closeEntities?: null; areaInit?: null; myself?: null; updateEntities?: null; updatePlayers: game.UpdatePlayersMap.$Shape; chatMessage?: null }|{ kind?: "chatMessage"; newPlayer?: null; closePlayer?: null; players?: null; newEntities?: null; closeEntities?: null; areaInit?: null; myself?: null; updateEntities?: null; updatePlayers?: null; chatMessage: game.Chat.$Shape })
        );
    }

    /**
     * Properties of a Packages.
     * @deprecated Use game.Packages.$Properties instead.
     */
    interface IPackages extends game.Packages.$Properties {
    }

    /** Represents a Packages. */
    class Packages {

        /**
         * Constructs a new Packages.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Packages.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Packages items. */
        items: game.Package.$Properties[];

        /**
         * Creates a new Packages instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Packages instance
         */
        static create(properties: game.Packages.$Shape): game.Packages & game.Packages.$Shape;
        static create(properties?: game.Packages.$Properties): game.Packages;

        /**
         * Encodes the specified Packages message. Does not implicitly {@link game.Packages.verify|verify} messages.
         * @param message Packages message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.Packages.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Packages message, length delimited. Does not implicitly {@link game.Packages.verify|verify} messages.
         * @param message Packages message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.Packages.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Packages message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.Packages & game.Packages.$Shape} Packages
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.Packages & game.Packages.$Shape;

        /**
         * Decodes a Packages message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.Packages & game.Packages.$Shape} Packages
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.Packages & game.Packages.$Shape;

        /**
         * Verifies a Packages message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Packages message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Packages
         */
        static fromObject(object: { [k: string]: any }): game.Packages;

        /**
         * Creates a plain object from a Packages message. Also converts values to other types if specified.
         * @param message Packages
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.Packages, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Packages to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Packages
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Packages {

        /** Properties of a Packages. */
        interface $Properties {

            /** Packages items */
            items?: (game.Package.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Packages. */
        type $Shape = {
          items?: game.Package.$Shape[]|null;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of a Players.
     * @deprecated Use game.Players.$Properties instead.
     */
    interface IPlayers extends game.Players.$Properties {
    }

    /** Represents a Players. */
    class Players {

        /**
         * Constructs a new Players.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Players.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Players players. */
        players: { [k: string]: game.PackedPlayer.$Properties };

        /**
         * Creates a new Players instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Players instance
         */
        static create(properties: game.Players.$Shape): game.Players & game.Players.$Shape;
        static create(properties?: game.Players.$Properties): game.Players;

        /**
         * Encodes the specified Players message. Does not implicitly {@link game.Players.verify|verify} messages.
         * @param message Players message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.Players.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Players message, length delimited. Does not implicitly {@link game.Players.verify|verify} messages.
         * @param message Players message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.Players.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Players message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.Players & game.Players.$Shape} Players
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.Players & game.Players.$Shape;

        /**
         * Decodes a Players message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.Players & game.Players.$Shape} Players
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.Players & game.Players.$Shape;

        /**
         * Verifies a Players message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Players message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Players
         */
        static fromObject(object: { [k: string]: any }): game.Players;

        /**
         * Creates a plain object from a Players message. Also converts values to other types if specified.
         * @param message Players
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.Players, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Players to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Players
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Players {

        /** Properties of a Players. */
        interface $Properties {

            /** Players players */
            players?: ({ [k: string]: game.PackedPlayer.$Properties }|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Players. */
        type $Shape = game.Players.$Properties;
    }

    /**
     * Properties of an Entities.
     * @deprecated Use game.Entities.$Properties instead.
     */
    interface IEntities extends game.Entities.$Properties {
    }

    /** Represents an Entities. */
    class Entities {

        /**
         * Constructs a new Entities.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Entities.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Entities entities. */
        entities: { [k: string]: game.PackedEntity.$Properties };

        /**
         * Creates a new Entities instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Entities instance
         */
        static create(properties: game.Entities.$Shape): game.Entities & game.Entities.$Shape;
        static create(properties?: game.Entities.$Properties): game.Entities;

        /**
         * Encodes the specified Entities message. Does not implicitly {@link game.Entities.verify|verify} messages.
         * @param message Entities message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.Entities.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Entities message, length delimited. Does not implicitly {@link game.Entities.verify|verify} messages.
         * @param message Entities message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.Entities.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Entities message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.Entities & game.Entities.$Shape} Entities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.Entities & game.Entities.$Shape;

        /**
         * Decodes an Entities message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.Entities & game.Entities.$Shape} Entities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.Entities & game.Entities.$Shape;

        /**
         * Verifies an Entities message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Entities message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Entities
         */
        static fromObject(object: { [k: string]: any }): game.Entities;

        /**
         * Creates a plain object from an Entities message. Also converts values to other types if specified.
         * @param message Entities
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.Entities, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Entities to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Entities
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Entities {

        /** Properties of an Entities. */
        interface $Properties {

            /** Entities entities */
            entities?: ({ [k: string]: game.PackedEntity.$Properties }|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an Entities. */
        type $Shape = game.Entities.$Properties;
    }

    /**
     * Properties of a CloseEntities.
     * @deprecated Use game.CloseEntities.$Properties instead.
     */
    interface ICloseEntities extends game.CloseEntities.$Properties {
    }

    /** Represents a CloseEntities. */
    class CloseEntities {

        /**
         * Constructs a new CloseEntities.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.CloseEntities.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CloseEntities ids. */
        ids: number[];

        /**
         * Creates a new CloseEntities instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CloseEntities instance
         */
        static create(properties: game.CloseEntities.$Shape): game.CloseEntities & game.CloseEntities.$Shape;
        static create(properties?: game.CloseEntities.$Properties): game.CloseEntities;

        /**
         * Encodes the specified CloseEntities message. Does not implicitly {@link game.CloseEntities.verify|verify} messages.
         * @param message CloseEntities message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.CloseEntities.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CloseEntities message, length delimited. Does not implicitly {@link game.CloseEntities.verify|verify} messages.
         * @param message CloseEntities message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.CloseEntities.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CloseEntities message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.CloseEntities & game.CloseEntities.$Shape} CloseEntities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.CloseEntities & game.CloseEntities.$Shape;

        /**
         * Decodes a CloseEntities message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.CloseEntities & game.CloseEntities.$Shape} CloseEntities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.CloseEntities & game.CloseEntities.$Shape;

        /**
         * Verifies a CloseEntities message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CloseEntities message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CloseEntities
         */
        static fromObject(object: { [k: string]: any }): game.CloseEntities;

        /**
         * Creates a plain object from a CloseEntities message. Also converts values to other types if specified.
         * @param message CloseEntities
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.CloseEntities, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CloseEntities to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CloseEntities
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CloseEntities {

        /** Properties of a CloseEntities. */
        interface $Properties {

            /** CloseEntities ids */
            ids?: (number[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CloseEntities. */
        type $Shape = game.CloseEntities.$Properties;
    }

    /**
     * Properties of an UpdateEntitiesMap.
     * @deprecated Use game.UpdateEntitiesMap.$Properties instead.
     */
    interface IUpdateEntitiesMap extends game.UpdateEntitiesMap.$Properties {
    }

    /** Represents an UpdateEntitiesMap. */
    class UpdateEntitiesMap {

        /**
         * Constructs a new UpdateEntitiesMap.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.UpdateEntitiesMap.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** UpdateEntitiesMap items. */
        items: { [k: string]: game.PartialEntity.$Properties };

        /**
         * Creates a new UpdateEntitiesMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateEntitiesMap instance
         */
        static create(properties: game.UpdateEntitiesMap.$Shape): game.UpdateEntitiesMap & game.UpdateEntitiesMap.$Shape;
        static create(properties?: game.UpdateEntitiesMap.$Properties): game.UpdateEntitiesMap;

        /**
         * Encodes the specified UpdateEntitiesMap message. Does not implicitly {@link game.UpdateEntitiesMap.verify|verify} messages.
         * @param message UpdateEntitiesMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.UpdateEntitiesMap.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateEntitiesMap message, length delimited. Does not implicitly {@link game.UpdateEntitiesMap.verify|verify} messages.
         * @param message UpdateEntitiesMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.UpdateEntitiesMap.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateEntitiesMap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.UpdateEntitiesMap & game.UpdateEntitiesMap.$Shape} UpdateEntitiesMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.UpdateEntitiesMap & game.UpdateEntitiesMap.$Shape;

        /**
         * Decodes an UpdateEntitiesMap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.UpdateEntitiesMap & game.UpdateEntitiesMap.$Shape} UpdateEntitiesMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.UpdateEntitiesMap & game.UpdateEntitiesMap.$Shape;

        /**
         * Verifies an UpdateEntitiesMap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateEntitiesMap message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateEntitiesMap
         */
        static fromObject(object: { [k: string]: any }): game.UpdateEntitiesMap;

        /**
         * Creates a plain object from an UpdateEntitiesMap message. Also converts values to other types if specified.
         * @param message UpdateEntitiesMap
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.UpdateEntitiesMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateEntitiesMap to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for UpdateEntitiesMap
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace UpdateEntitiesMap {

        /** Properties of an UpdateEntitiesMap. */
        interface $Properties {

            /** UpdateEntitiesMap items */
            items?: ({ [k: string]: game.PartialEntity.$Properties }|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an UpdateEntitiesMap. */
        type $Shape = game.UpdateEntitiesMap.$Properties;
    }

    /**
     * Properties of an UpdatePlayersMap.
     * @deprecated Use game.UpdatePlayersMap.$Properties instead.
     */
    interface IUpdatePlayersMap extends game.UpdatePlayersMap.$Properties {
    }

    /** Represents an UpdatePlayersMap. */
    class UpdatePlayersMap {

        /**
         * Constructs a new UpdatePlayersMap.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.UpdatePlayersMap.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** UpdatePlayersMap items. */
        items: { [k: string]: game.PartialPlayer.$Properties };

        /**
         * Creates a new UpdatePlayersMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdatePlayersMap instance
         */
        static create(properties: game.UpdatePlayersMap.$Shape): game.UpdatePlayersMap & game.UpdatePlayersMap.$Shape;
        static create(properties?: game.UpdatePlayersMap.$Properties): game.UpdatePlayersMap;

        /**
         * Encodes the specified UpdatePlayersMap message. Does not implicitly {@link game.UpdatePlayersMap.verify|verify} messages.
         * @param message UpdatePlayersMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.UpdatePlayersMap.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdatePlayersMap message, length delimited. Does not implicitly {@link game.UpdatePlayersMap.verify|verify} messages.
         * @param message UpdatePlayersMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.UpdatePlayersMap.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdatePlayersMap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.UpdatePlayersMap & game.UpdatePlayersMap.$Shape} UpdatePlayersMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.UpdatePlayersMap & game.UpdatePlayersMap.$Shape;

        /**
         * Decodes an UpdatePlayersMap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.UpdatePlayersMap & game.UpdatePlayersMap.$Shape} UpdatePlayersMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.UpdatePlayersMap & game.UpdatePlayersMap.$Shape;

        /**
         * Verifies an UpdatePlayersMap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdatePlayersMap message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdatePlayersMap
         */
        static fromObject(object: { [k: string]: any }): game.UpdatePlayersMap;

        /**
         * Creates a plain object from an UpdatePlayersMap message. Also converts values to other types if specified.
         * @param message UpdatePlayersMap
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.UpdatePlayersMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdatePlayersMap to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for UpdatePlayersMap
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace UpdatePlayersMap {

        /** Properties of an UpdatePlayersMap. */
        interface $Properties {

            /** UpdatePlayersMap items */
            items?: ({ [k: string]: game.PartialPlayer.$Properties }|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an UpdatePlayersMap. */
        type $Shape = game.UpdatePlayersMap.$Properties;
    }

    /** ClientKey enum. */
    enum ClientKey {

        /** UP value */
        UP = 1,

        /** DOWN value */
        DOWN = 2,

        /** LEFT value */
        LEFT = 3,

        /** RIGHT value */
        RIGHT = 4,

        /** SHIFT value */
        SHIFT = 5
    }

    /** ClientAbility enum. */
    enum ClientAbility {

        /** FIRST value */
        FIRST = 1,

        /** SECOND value */
        SECOND = 2
    }

    /**
     * Properties of a ClientInit.
     * @deprecated Use game.ClientInit.$Properties instead.
     */
    interface IClientInit extends game.ClientInit.$Properties {
    }

    /** Represents a ClientInit. */
    class ClientInit {

        /**
         * Constructs a new ClientInit.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ClientInit.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ClientInit hero. */
        hero: string;

        /**
         * Creates a new ClientInit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientInit instance
         */
        static create(properties: game.ClientInit.$Shape): game.ClientInit & game.ClientInit.$Shape;
        static create(properties?: game.ClientInit.$Properties): game.ClientInit;

        /**
         * Encodes the specified ClientInit message. Does not implicitly {@link game.ClientInit.verify|verify} messages.
         * @param message ClientInit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.ClientInit.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientInit message, length delimited. Does not implicitly {@link game.ClientInit.verify|verify} messages.
         * @param message ClientInit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.ClientInit.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientInit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.ClientInit & game.ClientInit.$Shape} ClientInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.ClientInit & game.ClientInit.$Shape;

        /**
         * Decodes a ClientInit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.ClientInit & game.ClientInit.$Shape} ClientInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.ClientInit & game.ClientInit.$Shape;

        /**
         * Verifies a ClientInit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientInit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientInit
         */
        static fromObject(object: { [k: string]: any }): game.ClientInit;

        /**
         * Creates a plain object from a ClientInit message. Also converts values to other types if specified.
         * @param message ClientInit
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.ClientInit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientInit to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ClientInit
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ClientInit {

        /** Properties of a ClientInit. */
        interface $Properties {

            /** ClientInit hero */
            hero?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ClientInit. */
        type $Shape = game.ClientInit.$Properties;
    }

    /**
     * Properties of a ClientMousePos.
     * @deprecated Use game.ClientMousePos.$Properties instead.
     */
    interface IClientMousePos extends game.ClientMousePos.$Properties {
    }

    /** Represents a ClientMousePos. */
    class ClientMousePos {

        /**
         * Constructs a new ClientMousePos.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ClientMousePos.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ClientMousePos x. */
        x: number;

        /** ClientMousePos y. */
        y: number;

        /**
         * Creates a new ClientMousePos instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientMousePos instance
         */
        static create(properties: game.ClientMousePos.$Shape): game.ClientMousePos & game.ClientMousePos.$Shape;
        static create(properties?: game.ClientMousePos.$Properties): game.ClientMousePos;

        /**
         * Encodes the specified ClientMousePos message. Does not implicitly {@link game.ClientMousePos.verify|verify} messages.
         * @param message ClientMousePos message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.ClientMousePos.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientMousePos message, length delimited. Does not implicitly {@link game.ClientMousePos.verify|verify} messages.
         * @param message ClientMousePos message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.ClientMousePos.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientMousePos message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.ClientMousePos & game.ClientMousePos.$Shape} ClientMousePos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.ClientMousePos & game.ClientMousePos.$Shape;

        /**
         * Decodes a ClientMousePos message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.ClientMousePos & game.ClientMousePos.$Shape} ClientMousePos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.ClientMousePos & game.ClientMousePos.$Shape;

        /**
         * Verifies a ClientMousePos message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientMousePos message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientMousePos
         */
        static fromObject(object: { [k: string]: any }): game.ClientMousePos;

        /**
         * Creates a plain object from a ClientMousePos message. Also converts values to other types if specified.
         * @param message ClientMousePos
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.ClientMousePos, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientMousePos to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ClientMousePos
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ClientMousePos {

        /** Properties of a ClientMousePos. */
        interface $Properties {

            /** ClientMousePos x */
            x?: (number|null);

            /** ClientMousePos y */
            y?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ClientMousePos. */
        type $Shape = game.ClientMousePos.$Properties;
    }

    /**
     * Properties of a ClientMessage.
     * @deprecated Use game.ClientMessage.$Properties instead.
     */
    interface IClientMessage extends game.ClientMessage.$Properties {
    }

    /** Represents a ClientMessage. */
    class ClientMessage {

        /**
         * Constructs a new ClientMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ClientMessage.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ClientMessage chatMessage. */
        chatMessage?: (string|null);

        /** ClientMessage keyUp. */
        keyUp?: (game.ClientKey|null);

        /** ClientMessage keyDown. */
        keyDown?: (game.ClientKey|null);

        /** ClientMessage mouseEnable. */
        mouseEnable?: (boolean|null);

        /** ClientMessage mousePos. */
        mousePos?: (game.ClientMousePos.$Properties|null);

        /** ClientMessage init. */
        init?: (game.ClientInit.$Properties|null);

        /** ClientMessage ability. */
        ability?: (game.ClientAbility|null);

        /**
         * Creates a new ClientMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientMessage instance
         */
        static create(properties: game.ClientMessage.$Shape): game.ClientMessage & game.ClientMessage.$Shape;
        static create(properties?: game.ClientMessage.$Properties): game.ClientMessage;

        /**
         * Encodes the specified ClientMessage message. Does not implicitly {@link game.ClientMessage.verify|verify} messages.
         * @param message ClientMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.ClientMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientMessage message, length delimited. Does not implicitly {@link game.ClientMessage.verify|verify} messages.
         * @param message ClientMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.ClientMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.ClientMessage & game.ClientMessage.$Shape} ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.ClientMessage & game.ClientMessage.$Shape;

        /**
         * Decodes a ClientMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.ClientMessage & game.ClientMessage.$Shape} ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.ClientMessage & game.ClientMessage.$Shape;

        /**
         * Verifies a ClientMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientMessage
         */
        static fromObject(object: { [k: string]: any }): game.ClientMessage;

        /**
         * Creates a plain object from a ClientMessage message. Also converts values to other types if specified.
         * @param message ClientMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.ClientMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ClientMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ClientMessage {

        /** Properties of a ClientMessage. */
        interface $Properties {

            /** ClientMessage chatMessage */
            chatMessage?: (string|null);

            /** ClientMessage keyUp */
            keyUp?: (game.ClientKey|null);

            /** ClientMessage keyDown */
            keyDown?: (game.ClientKey|null);

            /** ClientMessage mouseEnable */
            mouseEnable?: (boolean|null);

            /** ClientMessage mousePos */
            mousePos?: (game.ClientMousePos.$Properties|null);

            /** ClientMessage init */
            init?: (game.ClientInit.$Properties|null);

            /** ClientMessage ability */
            ability?: (game.ClientAbility|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ClientMessage. */
        type $Shape = game.ClientMessage.$Properties;
    }
}

/** Namespace http. */
export namespace http {

    /** AccountRole enum. */
    enum AccountRole {

        /** USER value */
        USER = 0,

        /** MOD value */
        MOD = 1,

        /** DEV value */
        DEV = 2,

        /** ADMIN value */
        ADMIN = 3
    }

    /** ResponseStatus enum. */
    enum ResponseStatus {

        /** Ok value */
        Ok = 200,

        /** InternalError value */
        InternalError = 500,

        /** InvalidBody value */
        InvalidBody = 400,

        /** NotAuthenticated value */
        NotAuthenticated = 401,

        /** VerificationFailure value */
        VerificationFailure = 402,

        /** NotFound value */
        NotFound = 404,

        /** AccountExists value */
        AccountExists = 450,

        /** AccountNotExists value */
        AccountNotExists = 451,

        /** WrongPassword value */
        WrongPassword = 452
    }

    /**
     * Properties of a Profile.
     * @deprecated Use http.Profile.$Properties instead.
     */
    interface IProfile extends http.Profile.$Properties {
    }

    /** Represents a Profile. */
    class Profile {

        /**
         * Constructs a new Profile.
         * @param [properties] Properties to set
         */
        constructor(properties?: http.Profile.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Profile vp. */
        vp: number;

        /** Profile username. */
        username: string;

        /** Profile highest. */
        highest: { [k: string]: string };

        /** Profile accessories. */
        accessories: string[];

        /** Profile role. */
        role: http.AccountRole;

        /**
         * Creates a new Profile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Profile instance
         */
        static create(properties: http.Profile.$Shape): http.Profile & http.Profile.$Shape;
        static create(properties?: http.Profile.$Properties): http.Profile;

        /**
         * Encodes the specified Profile message. Does not implicitly {@link http.Profile.verify|verify} messages.
         * @param message Profile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: http.Profile.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Profile message, length delimited. Does not implicitly {@link http.Profile.verify|verify} messages.
         * @param message Profile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: http.Profile.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Profile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {http.Profile & http.Profile.$Shape} Profile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.Profile & http.Profile.$Shape;

        /**
         * Decodes a Profile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {http.Profile & http.Profile.$Shape} Profile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.Profile & http.Profile.$Shape;

        /**
         * Verifies a Profile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Profile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Profile
         */
        static fromObject(object: { [k: string]: any }): http.Profile;

        /**
         * Creates a plain object from a Profile message. Also converts values to other types if specified.
         * @param message Profile
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: http.Profile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Profile to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Profile
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Profile {

        /** Properties of a Profile. */
        interface $Properties {

            /** Profile vp */
            vp?: (number|null);

            /** Profile username */
            username?: (string|null);

            /** Profile highest */
            highest?: ({ [k: string]: string }|null);

            /** Profile accessories */
            accessories?: (string[]|null);

            /** Profile role */
            role?: (http.AccountRole|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Profile. */
        type $Shape = http.Profile.$Properties;
    }

    /**
     * Properties of a RegisterRequest.
     * @deprecated Use http.RegisterRequest.$Properties instead.
     */
    interface IRegisterRequest extends http.RegisterRequest.$Properties {
    }

    /** Represents a RegisterRequest. */
    class RegisterRequest {

        /**
         * Constructs a new RegisterRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: http.RegisterRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RegisterRequest username. */
        username: string;

        /** RegisterRequest password. */
        password: string;

        /** RegisterRequest token. */
        token: string;

        /**
         * Creates a new RegisterRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterRequest instance
         */
        static create(properties: http.RegisterRequest.$Shape): http.RegisterRequest & http.RegisterRequest.$Shape;
        static create(properties?: http.RegisterRequest.$Properties): http.RegisterRequest;

        /**
         * Encodes the specified RegisterRequest message. Does not implicitly {@link http.RegisterRequest.verify|verify} messages.
         * @param message RegisterRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: http.RegisterRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterRequest message, length delimited. Does not implicitly {@link http.RegisterRequest.verify|verify} messages.
         * @param message RegisterRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: http.RegisterRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {http.RegisterRequest & http.RegisterRequest.$Shape} RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.RegisterRequest & http.RegisterRequest.$Shape;

        /**
         * Decodes a RegisterRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {http.RegisterRequest & http.RegisterRequest.$Shape} RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.RegisterRequest & http.RegisterRequest.$Shape;

        /**
         * Verifies a RegisterRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterRequest
         */
        static fromObject(object: { [k: string]: any }): http.RegisterRequest;

        /**
         * Creates a plain object from a RegisterRequest message. Also converts values to other types if specified.
         * @param message RegisterRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: http.RegisterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RegisterRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RegisterRequest {

        /** Properties of a RegisterRequest. */
        interface $Properties {

            /** RegisterRequest username */
            username?: (string|null);

            /** RegisterRequest password */
            password?: (string|null);

            /** RegisterRequest token */
            token?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RegisterRequest. */
        type $Shape = http.RegisterRequest.$Properties;
    }

    /**
     * Properties of a LoginRequest.
     * @deprecated Use http.LoginRequest.$Properties instead.
     */
    interface ILoginRequest extends http.LoginRequest.$Properties {
    }

    /** Represents a LoginRequest. */
    class LoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: http.LoginRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** LoginRequest username. */
        username: string;

        /** LoginRequest password. */
        password: string;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        static create(properties: http.LoginRequest.$Shape): http.LoginRequest & http.LoginRequest.$Shape;
        static create(properties?: http.LoginRequest.$Properties): http.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link http.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: http.LoginRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link http.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: http.LoginRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {http.LoginRequest & http.LoginRequest.$Shape} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.LoginRequest & http.LoginRequest.$Shape;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {http.LoginRequest & http.LoginRequest.$Shape} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.LoginRequest & http.LoginRequest.$Shape;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        static fromObject(object: { [k: string]: any }): http.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: http.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for LoginRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace LoginRequest {

        /** Properties of a LoginRequest. */
        interface $Properties {

            /** LoginRequest username */
            username?: (string|null);

            /** LoginRequest password */
            password?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a LoginRequest. */
        type $Shape = http.LoginRequest.$Properties;
    }

    /**
     * Properties of a LoginAndRegisterResponse.
     * @deprecated Use http.LoginAndRegisterResponse.$Properties instead.
     */
    interface ILoginAndRegisterResponse extends http.LoginAndRegisterResponse.$Properties {
    }

    /** Represents a LoginAndRegisterResponse. */
    class LoginAndRegisterResponse {

        /**
         * Constructs a new LoginAndRegisterResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: http.LoginAndRegisterResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** LoginAndRegisterResponse token. */
        token?: (string|null);

        /** LoginAndRegisterResponse profile. */
        profile?: (http.Profile.$Properties|null);

        /**
         * Creates a new LoginAndRegisterResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginAndRegisterResponse instance
         */
        static create(properties: http.LoginAndRegisterResponse.$Shape): http.LoginAndRegisterResponse & http.LoginAndRegisterResponse.$Shape;
        static create(properties?: http.LoginAndRegisterResponse.$Properties): http.LoginAndRegisterResponse;

        /**
         * Encodes the specified LoginAndRegisterResponse message. Does not implicitly {@link http.LoginAndRegisterResponse.verify|verify} messages.
         * @param message LoginAndRegisterResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: http.LoginAndRegisterResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginAndRegisterResponse message, length delimited. Does not implicitly {@link http.LoginAndRegisterResponse.verify|verify} messages.
         * @param message LoginAndRegisterResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: http.LoginAndRegisterResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginAndRegisterResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {http.LoginAndRegisterResponse & http.LoginAndRegisterResponse.$Shape} LoginAndRegisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.LoginAndRegisterResponse & http.LoginAndRegisterResponse.$Shape;

        /**
         * Decodes a LoginAndRegisterResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {http.LoginAndRegisterResponse & http.LoginAndRegisterResponse.$Shape} LoginAndRegisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.LoginAndRegisterResponse & http.LoginAndRegisterResponse.$Shape;

        /**
         * Verifies a LoginAndRegisterResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginAndRegisterResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginAndRegisterResponse
         */
        static fromObject(object: { [k: string]: any }): http.LoginAndRegisterResponse;

        /**
         * Creates a plain object from a LoginAndRegisterResponse message. Also converts values to other types if specified.
         * @param message LoginAndRegisterResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: http.LoginAndRegisterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginAndRegisterResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for LoginAndRegisterResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace LoginAndRegisterResponse {

        /** Properties of a LoginAndRegisterResponse. */
        interface $Properties {

            /** LoginAndRegisterResponse token */
            token?: (string|null);

            /** LoginAndRegisterResponse profile */
            profile?: (http.Profile.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a LoginAndRegisterResponse. */
        type $Shape = http.LoginAndRegisterResponse.$Properties;
    }

    /**
     * Properties of a ProfileResponse.
     * @deprecated Use http.ProfileResponse.$Properties instead.
     */
    interface IProfileResponse extends http.ProfileResponse.$Properties {
    }

    /** Represents a ProfileResponse. */
    class ProfileResponse {

        /**
         * Constructs a new ProfileResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: http.ProfileResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ProfileResponse profile. */
        profile?: (http.Profile.$Properties|null);

        /**
         * Creates a new ProfileResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProfileResponse instance
         */
        static create(properties: http.ProfileResponse.$Shape): http.ProfileResponse & http.ProfileResponse.$Shape;
        static create(properties?: http.ProfileResponse.$Properties): http.ProfileResponse;

        /**
         * Encodes the specified ProfileResponse message. Does not implicitly {@link http.ProfileResponse.verify|verify} messages.
         * @param message ProfileResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: http.ProfileResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProfileResponse message, length delimited. Does not implicitly {@link http.ProfileResponse.verify|verify} messages.
         * @param message ProfileResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: http.ProfileResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProfileResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {http.ProfileResponse & http.ProfileResponse.$Shape} ProfileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.ProfileResponse & http.ProfileResponse.$Shape;

        /**
         * Decodes a ProfileResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {http.ProfileResponse & http.ProfileResponse.$Shape} ProfileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.ProfileResponse & http.ProfileResponse.$Shape;

        /**
         * Verifies a ProfileResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProfileResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProfileResponse
         */
        static fromObject(object: { [k: string]: any }): http.ProfileResponse;

        /**
         * Creates a plain object from a ProfileResponse message. Also converts values to other types if specified.
         * @param message ProfileResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: http.ProfileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProfileResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ProfileResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ProfileResponse {

        /** Properties of a ProfileResponse. */
        interface $Properties {

            /** ProfileResponse profile */
            profile?: (http.Profile.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ProfileResponse. */
        type $Shape = http.ProfileResponse.$Properties;
    }

    /**
     * Properties of an AuthResponse.
     * @deprecated Use http.AuthResponse.$Properties instead.
     */
    interface IAuthResponse extends http.AuthResponse.$Properties {
    }

    /** Represents an AuthResponse. */
    class AuthResponse {

        /**
         * Constructs a new AuthResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: http.AuthResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AuthResponse profile. */
        profile?: (http.Profile.$Properties|null);

        /**
         * Creates a new AuthResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthResponse instance
         */
        static create(properties: http.AuthResponse.$Shape): http.AuthResponse & http.AuthResponse.$Shape;
        static create(properties?: http.AuthResponse.$Properties): http.AuthResponse;

        /**
         * Encodes the specified AuthResponse message. Does not implicitly {@link http.AuthResponse.verify|verify} messages.
         * @param message AuthResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: http.AuthResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AuthResponse message, length delimited. Does not implicitly {@link http.AuthResponse.verify|verify} messages.
         * @param message AuthResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: http.AuthResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {http.AuthResponse & http.AuthResponse.$Shape} AuthResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.AuthResponse & http.AuthResponse.$Shape;

        /**
         * Decodes an AuthResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {http.AuthResponse & http.AuthResponse.$Shape} AuthResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.AuthResponse & http.AuthResponse.$Shape;

        /**
         * Verifies an AuthResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AuthResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuthResponse
         */
        static fromObject(object: { [k: string]: any }): http.AuthResponse;

        /**
         * Creates a plain object from an AuthResponse message. Also converts values to other types if specified.
         * @param message AuthResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: http.AuthResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AuthResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AuthResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AuthResponse {

        /** Properties of an AuthResponse. */
        interface $Properties {

            /** AuthResponse profile */
            profile?: (http.Profile.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AuthResponse. */
        type $Shape = http.AuthResponse.$Properties;
    }

    /**
     * Properties of a LogoutResponse.
     * @deprecated Use http.LogoutResponse.$Properties instead.
     */
    interface ILogoutResponse extends http.LogoutResponse.$Properties {
    }

    /** Represents a LogoutResponse. */
    class LogoutResponse {

        /**
         * Constructs a new LogoutResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: http.LogoutResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** LogoutResponse status. */
        status: http.ResponseStatus;

        /**
         * Creates a new LogoutResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LogoutResponse instance
         */
        static create(properties: http.LogoutResponse.$Shape): http.LogoutResponse & http.LogoutResponse.$Shape;
        static create(properties?: http.LogoutResponse.$Properties): http.LogoutResponse;

        /**
         * Encodes the specified LogoutResponse message. Does not implicitly {@link http.LogoutResponse.verify|verify} messages.
         * @param message LogoutResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: http.LogoutResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LogoutResponse message, length delimited. Does not implicitly {@link http.LogoutResponse.verify|verify} messages.
         * @param message LogoutResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: http.LogoutResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LogoutResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {http.LogoutResponse & http.LogoutResponse.$Shape} LogoutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.LogoutResponse & http.LogoutResponse.$Shape;

        /**
         * Decodes a LogoutResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {http.LogoutResponse & http.LogoutResponse.$Shape} LogoutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.LogoutResponse & http.LogoutResponse.$Shape;

        /**
         * Verifies a LogoutResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LogoutResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LogoutResponse
         */
        static fromObject(object: { [k: string]: any }): http.LogoutResponse;

        /**
         * Creates a plain object from a LogoutResponse message. Also converts values to other types if specified.
         * @param message LogoutResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: http.LogoutResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LogoutResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for LogoutResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace LogoutResponse {

        /** Properties of a LogoutResponse. */
        interface $Properties {

            /** LogoutResponse status */
            status?: (http.ResponseStatus|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a LogoutResponse. */
        type $Shape = http.LogoutResponse.$Properties;
    }

    /**
     * Properties of a ServerElement.
     * @deprecated Use http.ServerElement.$Properties instead.
     */
    interface IServerElement extends http.ServerElement.$Properties {
    }

    /** Represents a ServerElement. */
    class ServerElement {

        /**
         * Constructs a new ServerElement.
         * @param [properties] Properties to set
         */
        constructor(properties?: http.ServerElement.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ServerElement icon. */
        icon: string;

        /** ServerElement name. */
        name: string;

        /** ServerElement domain. */
        domain: string;

        /** ServerElement online. */
        online: number;

        /**
         * Creates a new ServerElement instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerElement instance
         */
        static create(properties: http.ServerElement.$Shape): http.ServerElement & http.ServerElement.$Shape;
        static create(properties?: http.ServerElement.$Properties): http.ServerElement;

        /**
         * Encodes the specified ServerElement message. Does not implicitly {@link http.ServerElement.verify|verify} messages.
         * @param message ServerElement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: http.ServerElement.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerElement message, length delimited. Does not implicitly {@link http.ServerElement.verify|verify} messages.
         * @param message ServerElement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: http.ServerElement.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerElement message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {http.ServerElement & http.ServerElement.$Shape} ServerElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.ServerElement & http.ServerElement.$Shape;

        /**
         * Decodes a ServerElement message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {http.ServerElement & http.ServerElement.$Shape} ServerElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.ServerElement & http.ServerElement.$Shape;

        /**
         * Verifies a ServerElement message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerElement message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerElement
         */
        static fromObject(object: { [k: string]: any }): http.ServerElement;

        /**
         * Creates a plain object from a ServerElement message. Also converts values to other types if specified.
         * @param message ServerElement
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: http.ServerElement, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerElement to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ServerElement
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ServerElement {

        /** Properties of a ServerElement. */
        interface $Properties {

            /** ServerElement icon */
            icon?: (string|null);

            /** ServerElement name */
            name?: (string|null);

            /** ServerElement domain */
            domain?: (string|null);

            /** ServerElement online */
            online?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ServerElement. */
        type $Shape = http.ServerElement.$Properties;
    }

    /**
     * Properties of a ServersResponse.
     * @deprecated Use http.ServersResponse.$Properties instead.
     */
    interface IServersResponse extends http.ServersResponse.$Properties {
    }

    /** Represents a ServersResponse. */
    class ServersResponse {

        /**
         * Constructs a new ServersResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: http.ServersResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ServersResponse status. */
        status: http.ResponseStatus;

        /** ServersResponse servers. */
        servers: http.ServerElement.$Properties[];

        /**
         * Creates a new ServersResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServersResponse instance
         */
        static create(properties: http.ServersResponse.$Shape): http.ServersResponse & http.ServersResponse.$Shape;
        static create(properties?: http.ServersResponse.$Properties): http.ServersResponse;

        /**
         * Encodes the specified ServersResponse message. Does not implicitly {@link http.ServersResponse.verify|verify} messages.
         * @param message ServersResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: http.ServersResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServersResponse message, length delimited. Does not implicitly {@link http.ServersResponse.verify|verify} messages.
         * @param message ServersResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: http.ServersResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServersResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {http.ServersResponse & http.ServersResponse.$Shape} ServersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.ServersResponse & http.ServersResponse.$Shape;

        /**
         * Decodes a ServersResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {http.ServersResponse & http.ServersResponse.$Shape} ServersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.ServersResponse & http.ServersResponse.$Shape;

        /**
         * Verifies a ServersResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServersResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServersResponse
         */
        static fromObject(object: { [k: string]: any }): http.ServersResponse;

        /**
         * Creates a plain object from a ServersResponse message. Also converts values to other types if specified.
         * @param message ServersResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: http.ServersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServersResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ServersResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ServersResponse {

        /** Properties of a ServersResponse. */
        interface $Properties {

            /** ServersResponse status */
            status?: (http.ResponseStatus|null);

            /** ServersResponse servers */
            servers?: (http.ServerElement.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ServersResponse. */
        type $Shape = http.ServersResponse.$Properties;
    }

    /**
     * Properties of an AdminModeServer.
     * @deprecated Use http.AdminModeServer.$Properties instead.
     */
    interface IAdminModeServer extends http.AdminModeServer.$Properties {
    }

    /** Represents an AdminModeServer. */
    class AdminModeServer {

        /**
         * Constructs a new AdminModeServer.
         * @param [properties] Properties to set
         */
        constructor(properties?: http.AdminModeServer.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AdminModeServer id. */
        id: string;

        /** AdminModeServer icon. */
        icon: string;

        /** AdminModeServer name. */
        name: string;

        /** AdminModeServer domain. */
        domain: string;

        /** AdminModeServer lastSeen. */
        lastSeen: string;

        /**
         * Creates a new AdminModeServer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdminModeServer instance
         */
        static create(properties: http.AdminModeServer.$Shape): http.AdminModeServer & http.AdminModeServer.$Shape;
        static create(properties?: http.AdminModeServer.$Properties): http.AdminModeServer;

        /**
         * Encodes the specified AdminModeServer message. Does not implicitly {@link http.AdminModeServer.verify|verify} messages.
         * @param message AdminModeServer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: http.AdminModeServer.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdminModeServer message, length delimited. Does not implicitly {@link http.AdminModeServer.verify|verify} messages.
         * @param message AdminModeServer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: http.AdminModeServer.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdminModeServer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {http.AdminModeServer & http.AdminModeServer.$Shape} AdminModeServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.AdminModeServer & http.AdminModeServer.$Shape;

        /**
         * Decodes an AdminModeServer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {http.AdminModeServer & http.AdminModeServer.$Shape} AdminModeServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.AdminModeServer & http.AdminModeServer.$Shape;

        /**
         * Verifies an AdminModeServer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AdminModeServer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminModeServer
         */
        static fromObject(object: { [k: string]: any }): http.AdminModeServer;

        /**
         * Creates a plain object from an AdminModeServer message. Also converts values to other types if specified.
         * @param message AdminModeServer
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: http.AdminModeServer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminModeServer to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AdminModeServer
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AdminModeServer {

        /** Properties of an AdminModeServer. */
        interface $Properties {

            /** AdminModeServer id */
            id?: (string|null);

            /** AdminModeServer icon */
            icon?: (string|null);

            /** AdminModeServer name */
            name?: (string|null);

            /** AdminModeServer domain */
            domain?: (string|null);

            /** AdminModeServer lastSeen */
            lastSeen?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AdminModeServer. */
        type $Shape = http.AdminModeServer.$Properties;
    }

    /**
     * Properties of an AdminModeServersResponse.
     * @deprecated Use http.AdminModeServersResponse.$Properties instead.
     */
    interface IAdminModeServersResponse extends http.AdminModeServersResponse.$Properties {
    }

    /** Represents an AdminModeServersResponse. */
    class AdminModeServersResponse {

        /**
         * Constructs a new AdminModeServersResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: http.AdminModeServersResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AdminModeServersResponse servers. */
        servers: http.AdminModeServer.$Properties[];

        /** AdminModeServersResponse online. */
        online: number;

        /** AdminModeServersResponse count. */
        count: number;

        /**
         * Creates a new AdminModeServersResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdminModeServersResponse instance
         */
        static create(properties: http.AdminModeServersResponse.$Shape): http.AdminModeServersResponse & http.AdminModeServersResponse.$Shape;
        static create(properties?: http.AdminModeServersResponse.$Properties): http.AdminModeServersResponse;

        /**
         * Encodes the specified AdminModeServersResponse message. Does not implicitly {@link http.AdminModeServersResponse.verify|verify} messages.
         * @param message AdminModeServersResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: http.AdminModeServersResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdminModeServersResponse message, length delimited. Does not implicitly {@link http.AdminModeServersResponse.verify|verify} messages.
         * @param message AdminModeServersResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: http.AdminModeServersResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdminModeServersResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {http.AdminModeServersResponse & http.AdminModeServersResponse.$Shape} AdminModeServersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.AdminModeServersResponse & http.AdminModeServersResponse.$Shape;

        /**
         * Decodes an AdminModeServersResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {http.AdminModeServersResponse & http.AdminModeServersResponse.$Shape} AdminModeServersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.AdminModeServersResponse & http.AdminModeServersResponse.$Shape;

        /**
         * Verifies an AdminModeServersResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AdminModeServersResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminModeServersResponse
         */
        static fromObject(object: { [k: string]: any }): http.AdminModeServersResponse;

        /**
         * Creates a plain object from an AdminModeServersResponse message. Also converts values to other types if specified.
         * @param message AdminModeServersResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: http.AdminModeServersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminModeServersResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AdminModeServersResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AdminModeServersResponse {

        /** Properties of an AdminModeServersResponse. */
        interface $Properties {

            /** AdminModeServersResponse servers */
            servers?: (http.AdminModeServer.$Properties[]|null);

            /** AdminModeServersResponse online */
            online?: (number|null);

            /** AdminModeServersResponse count */
            count?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AdminModeServersResponse. */
        type $Shape = http.AdminModeServersResponse.$Properties;
    }

    /**
     * Properties of an AdminModeServerTokenResponse.
     * @deprecated Use http.AdminModeServerTokenResponse.$Properties instead.
     */
    interface IAdminModeServerTokenResponse extends http.AdminModeServerTokenResponse.$Properties {
    }

    /** Represents an AdminModeServerTokenResponse. */
    class AdminModeServerTokenResponse {

        /**
         * Constructs a new AdminModeServerTokenResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: http.AdminModeServerTokenResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AdminModeServerTokenResponse token. */
        token: string;

        /**
         * Creates a new AdminModeServerTokenResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdminModeServerTokenResponse instance
         */
        static create(properties: http.AdminModeServerTokenResponse.$Shape): http.AdminModeServerTokenResponse & http.AdminModeServerTokenResponse.$Shape;
        static create(properties?: http.AdminModeServerTokenResponse.$Properties): http.AdminModeServerTokenResponse;

        /**
         * Encodes the specified AdminModeServerTokenResponse message. Does not implicitly {@link http.AdminModeServerTokenResponse.verify|verify} messages.
         * @param message AdminModeServerTokenResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: http.AdminModeServerTokenResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdminModeServerTokenResponse message, length delimited. Does not implicitly {@link http.AdminModeServerTokenResponse.verify|verify} messages.
         * @param message AdminModeServerTokenResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: http.AdminModeServerTokenResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdminModeServerTokenResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {http.AdminModeServerTokenResponse & http.AdminModeServerTokenResponse.$Shape} AdminModeServerTokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.AdminModeServerTokenResponse & http.AdminModeServerTokenResponse.$Shape;

        /**
         * Decodes an AdminModeServerTokenResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {http.AdminModeServerTokenResponse & http.AdminModeServerTokenResponse.$Shape} AdminModeServerTokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.AdminModeServerTokenResponse & http.AdminModeServerTokenResponse.$Shape;

        /**
         * Verifies an AdminModeServerTokenResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AdminModeServerTokenResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminModeServerTokenResponse
         */
        static fromObject(object: { [k: string]: any }): http.AdminModeServerTokenResponse;

        /**
         * Creates a plain object from an AdminModeServerTokenResponse message. Also converts values to other types if specified.
         * @param message AdminModeServerTokenResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: http.AdminModeServerTokenResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminModeServerTokenResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AdminModeServerTokenResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AdminModeServerTokenResponse {

        /** Properties of an AdminModeServerTokenResponse. */
        interface $Properties {

            /** AdminModeServerTokenResponse token */
            token?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AdminModeServerTokenResponse. */
        type $Shape = http.AdminModeServerTokenResponse.$Properties;
    }

    /** WorldEffect enum. */
    enum WorldEffect {

        /** RAIN value */
        RAIN = 1,

        /** RAINSTORM value */
        RAINSTORM = 2,

        /** SNOW value */
        SNOW = 3,

        /** SNOWSTORM value */
        SNOWSTORM = 4,

        /** AUTUMN value */
        AUTUMN = 5
    }

    /**
     * Properties of a WorldProperties.
     * @deprecated Use http.WorldProperties.$Properties instead.
     */
    interface IWorldProperties extends http.WorldProperties.$Properties {
    }

    /** Represents a WorldProperties. */
    class WorldProperties {

        /**
         * Constructs a new WorldProperties.
         * @param [properties] Properties to set
         */
        constructor(properties?: http.WorldProperties.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** WorldProperties fillStyle. */
        fillStyle: string;

        /** WorldProperties strokeStyle. */
        strokeStyle: string;

        /** WorldProperties areaFill. */
        areaFill: string;

        /** WorldProperties areaAlpha. */
        areaAlpha?: (number|null);

        /** WorldProperties backgrounds. */
        backgrounds: http.WorldProperties.Background.$Properties[];

        /** WorldProperties effect. */
        effect?: (http.WorldEffect|null);

        /**
         * Creates a new WorldProperties instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WorldProperties instance
         */
        static create(properties: http.WorldProperties.$Shape): http.WorldProperties & http.WorldProperties.$Shape;
        static create(properties?: http.WorldProperties.$Properties): http.WorldProperties;

        /**
         * Encodes the specified WorldProperties message. Does not implicitly {@link http.WorldProperties.verify|verify} messages.
         * @param message WorldProperties message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: http.WorldProperties.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WorldProperties message, length delimited. Does not implicitly {@link http.WorldProperties.verify|verify} messages.
         * @param message WorldProperties message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: http.WorldProperties.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WorldProperties message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {http.WorldProperties & http.WorldProperties.$Shape} WorldProperties
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.WorldProperties & http.WorldProperties.$Shape;

        /**
         * Decodes a WorldProperties message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {http.WorldProperties & http.WorldProperties.$Shape} WorldProperties
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.WorldProperties & http.WorldProperties.$Shape;

        /**
         * Verifies a WorldProperties message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WorldProperties message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WorldProperties
         */
        static fromObject(object: { [k: string]: any }): http.WorldProperties;

        /**
         * Creates a plain object from a WorldProperties message. Also converts values to other types if specified.
         * @param message WorldProperties
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: http.WorldProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WorldProperties to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for WorldProperties
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace WorldProperties {

        /** Properties of a WorldProperties. */
        interface $Properties {

            /** WorldProperties fillStyle */
            fillStyle?: (string|null);

            /** WorldProperties strokeStyle */
            strokeStyle?: (string|null);

            /** WorldProperties areaFill */
            areaFill?: (string|null);

            /** WorldProperties areaAlpha */
            areaAlpha?: (number|null);

            /** WorldProperties backgrounds */
            backgrounds?: (http.WorldProperties.Background.$Properties[]|null);

            /** WorldProperties effect */
            effect?: (http.WorldEffect|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a WorldProperties. */
        type $Shape = http.WorldProperties.$Properties;

        /**
         * Properties of a Background.
         * @deprecated Use http.WorldProperties.Background.$Properties instead.
         */
        interface IBackground extends http.WorldProperties.Background.$Properties {
        }

        /** Represents a Background. */
        class Background {

            /**
             * Constructs a new Background.
             * @param [properties] Properties to set
             */
            constructor(properties?: http.WorldProperties.Background.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Background name. */
            name: string;

            /** Background alpha. */
            alpha: number;

            /**
             * Creates a new Background instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Background instance
             */
            static create(properties: http.WorldProperties.Background.$Shape): http.WorldProperties.Background & http.WorldProperties.Background.$Shape;
            static create(properties?: http.WorldProperties.Background.$Properties): http.WorldProperties.Background;

            /**
             * Encodes the specified Background message. Does not implicitly {@link http.WorldProperties.Background.verify|verify} messages.
             * @param message Background message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: http.WorldProperties.Background.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Background message, length delimited. Does not implicitly {@link http.WorldProperties.Background.verify|verify} messages.
             * @param message Background message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: http.WorldProperties.Background.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Background message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {http.WorldProperties.Background & http.WorldProperties.Background.$Shape} Background
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.WorldProperties.Background & http.WorldProperties.Background.$Shape;

            /**
             * Decodes a Background message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {http.WorldProperties.Background & http.WorldProperties.Background.$Shape} Background
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.WorldProperties.Background & http.WorldProperties.Background.$Shape;

            /**
             * Verifies a Background message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Background message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Background
             */
            static fromObject(object: { [k: string]: any }): http.WorldProperties.Background;

            /**
             * Creates a plain object from a Background message. Also converts values to other types if specified.
             * @param message Background
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: http.WorldProperties.Background, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Background to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Background
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Background {

            /** Properties of a Background. */
            interface $Properties {

                /** Background name */
                name?: (string|null);

                /** Background alpha */
                alpha?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Background. */
            type $Shape = http.WorldProperties.Background.$Properties;
        }
    }

    /**
     * Properties of an AreaResponse.
     * @deprecated Use http.AreaResponse.$Properties instead.
     */
    interface IAreaResponse extends http.AreaResponse.$Properties {
    }

    /** Represents an AreaResponse. */
    class AreaResponse {

        /**
         * Constructs a new AreaResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: http.AreaResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AreaResponse win. */
        win?: (boolean|null);

        /** AreaResponse vp. */
        vp?: (number|null);

        /** AreaResponse text. */
        text?: (string|null);

        /**
         * Creates a new AreaResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AreaResponse instance
         */
        static create(properties: http.AreaResponse.$Shape): http.AreaResponse & http.AreaResponse.$Shape;
        static create(properties?: http.AreaResponse.$Properties): http.AreaResponse;

        /**
         * Encodes the specified AreaResponse message. Does not implicitly {@link http.AreaResponse.verify|verify} messages.
         * @param message AreaResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: http.AreaResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AreaResponse message, length delimited. Does not implicitly {@link http.AreaResponse.verify|verify} messages.
         * @param message AreaResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: http.AreaResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AreaResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {http.AreaResponse & http.AreaResponse.$Shape} AreaResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.AreaResponse & http.AreaResponse.$Shape;

        /**
         * Decodes an AreaResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {http.AreaResponse & http.AreaResponse.$Shape} AreaResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.AreaResponse & http.AreaResponse.$Shape;

        /**
         * Verifies an AreaResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AreaResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AreaResponse
         */
        static fromObject(object: { [k: string]: any }): http.AreaResponse;

        /**
         * Creates a plain object from an AreaResponse message. Also converts values to other types if specified.
         * @param message AreaResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: http.AreaResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AreaResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AreaResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AreaResponse {

        /** Properties of an AreaResponse. */
        interface $Properties {

            /** AreaResponse win */
            win?: (boolean|null);

            /** AreaResponse vp */
            vp?: (number|null);

            /** AreaResponse text */
            text?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AreaResponse. */
        type $Shape = http.AreaResponse.$Properties;
    }

    /**
     * Properties of a WorldResponse.
     * @deprecated Use http.WorldResponse.$Properties instead.
     */
    interface IWorldResponse extends http.WorldResponse.$Properties {
    }

    /** Represents a WorldResponse. */
    class WorldResponse {

        /**
         * Constructs a new WorldResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: http.WorldResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** WorldResponse properties. */
        properties?: (http.WorldProperties.$Properties|null);

        /** WorldResponse areas. */
        areas: { [k: string]: http.AreaResponse.$Properties };

        /**
         * Creates a new WorldResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WorldResponse instance
         */
        static create(properties: http.WorldResponse.$Shape): http.WorldResponse & http.WorldResponse.$Shape;
        static create(properties?: http.WorldResponse.$Properties): http.WorldResponse;

        /**
         * Encodes the specified WorldResponse message. Does not implicitly {@link http.WorldResponse.verify|verify} messages.
         * @param message WorldResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: http.WorldResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WorldResponse message, length delimited. Does not implicitly {@link http.WorldResponse.verify|verify} messages.
         * @param message WorldResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: http.WorldResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WorldResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {http.WorldResponse & http.WorldResponse.$Shape} WorldResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.WorldResponse & http.WorldResponse.$Shape;

        /**
         * Decodes a WorldResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {http.WorldResponse & http.WorldResponse.$Shape} WorldResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.WorldResponse & http.WorldResponse.$Shape;

        /**
         * Verifies a WorldResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WorldResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WorldResponse
         */
        static fromObject(object: { [k: string]: any }): http.WorldResponse;

        /**
         * Creates a plain object from a WorldResponse message. Also converts values to other types if specified.
         * @param message WorldResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: http.WorldResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WorldResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for WorldResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace WorldResponse {

        /** Properties of a WorldResponse. */
        interface $Properties {

            /** WorldResponse properties */
            properties?: (http.WorldProperties.$Properties|null);

            /** WorldResponse areas */
            areas?: ({ [k: string]: http.AreaResponse.$Properties }|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a WorldResponse. */
        type $Shape = http.WorldResponse.$Properties;
    }

    /**
     * Properties of a WorldsResponse.
     * @deprecated Use http.WorldsResponse.$Properties instead.
     */
    interface IWorldsResponse extends http.WorldsResponse.$Properties {
    }

    /** Represents a WorldsResponse. */
    class WorldsResponse {

        /**
         * Constructs a new WorldsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: http.WorldsResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** WorldsResponse worlds. */
        worlds: { [k: string]: http.WorldResponse.$Properties };

        /**
         * Creates a new WorldsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WorldsResponse instance
         */
        static create(properties: http.WorldsResponse.$Shape): http.WorldsResponse & http.WorldsResponse.$Shape;
        static create(properties?: http.WorldsResponse.$Properties): http.WorldsResponse;

        /**
         * Encodes the specified WorldsResponse message. Does not implicitly {@link http.WorldsResponse.verify|verify} messages.
         * @param message WorldsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: http.WorldsResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WorldsResponse message, length delimited. Does not implicitly {@link http.WorldsResponse.verify|verify} messages.
         * @param message WorldsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: http.WorldsResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WorldsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {http.WorldsResponse & http.WorldsResponse.$Shape} WorldsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.WorldsResponse & http.WorldsResponse.$Shape;

        /**
         * Decodes a WorldsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {http.WorldsResponse & http.WorldsResponse.$Shape} WorldsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.WorldsResponse & http.WorldsResponse.$Shape;

        /**
         * Verifies a WorldsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WorldsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WorldsResponse
         */
        static fromObject(object: { [k: string]: any }): http.WorldsResponse;

        /**
         * Creates a plain object from a WorldsResponse message. Also converts values to other types if specified.
         * @param message WorldsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: http.WorldsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WorldsResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for WorldsResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace WorldsResponse {

        /** Properties of a WorldsResponse. */
        interface $Properties {

            /** WorldsResponse worlds */
            worlds?: ({ [k: string]: http.WorldResponse.$Properties }|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a WorldsResponse. */
        type $Shape = http.WorldsResponse.$Properties;
    }
}

/** Namespace connection. */
export namespace connection {

    /** Represents a Game */
    class Game extends $protobuf.rpc.Service {

        /**
         * Constructs a new Game service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Game service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Game;

        /** Calls Authentication. */
        authentication: connection.Game.Authentication;

        /** Calls JoinPlayer. */
        joinPlayer: connection.Game.JoinPlayer;

        /** Calls Ping. */
        ping: connection.Game.Ping;

        /** Calls AwardPlayer. */
        awardPlayer: connection.Game.AwardPlayer;
    }

    namespace Game {

        /**
         * Callback as used by {@link connection.Game#authentication}.
         * @param error Error, if any
         * @param [response] AuthenticationResponse
         */
        type AuthenticationCallback = (error: (Error|null), response?: connection.AuthenticationResponse) => void;

        /** Calls Authentication. */
        type Authentication = {
          (request: connection.IAuthenticationRequest, callback: connection.Game.AuthenticationCallback): void;
          (request: connection.IAuthenticationRequest): Promise<connection.AuthenticationResponse>;
          readonly name: "Authentication";
          readonly path: "/connection.Game/Authentication";
          readonly requestType: "AuthenticationRequest";
          readonly responseType: "AuthenticationResponse";
          readonly requestStream: undefined;
          readonly responseStream: undefined;
        };

        /**
         * Callback as used by {@link connection.Game#joinPlayer}.
         * @param error Error, if any
         * @param [response] JoinPlayerResponse
         */
        type JoinPlayerCallback = (error: (Error|null), response?: connection.JoinPlayerResponse) => void;

        /** Calls JoinPlayer. */
        type JoinPlayer = {
          (request: connection.IJoinPlayerRequest, callback: connection.Game.JoinPlayerCallback): void;
          (request: connection.IJoinPlayerRequest): Promise<connection.JoinPlayerResponse>;
          readonly name: "JoinPlayer";
          readonly path: "/connection.Game/JoinPlayer";
          readonly requestType: "JoinPlayerRequest";
          readonly responseType: "JoinPlayerResponse";
          readonly requestStream: undefined;
          readonly responseStream: undefined;
        };

        /**
         * Callback as used by {@link connection.Game#ping}.
         * @param error Error, if any
         * @param [response] PongResponse
         */
        type PingCallback = (error: (Error|null), response?: connection.PongResponse) => void;

        /** Calls Ping. */
        type Ping = {
          (request: connection.IPingRequest, callback: connection.Game.PingCallback): void;
          (request: connection.IPingRequest): Promise<connection.PongResponse>;
          readonly name: "Ping";
          readonly path: "/connection.Game/Ping";
          readonly requestType: "PingRequest";
          readonly responseType: "PongResponse";
          readonly requestStream: undefined;
          readonly responseStream: undefined;
        };

        /**
         * Callback as used by {@link connection.Game#awardPlayer}.
         * @param error Error, if any
         * @param [response] AwardResponse
         */
        type AwardPlayerCallback = (error: (Error|null), response?: connection.AwardResponse) => void;

        /** Calls AwardPlayer. */
        type AwardPlayer = {
          (request: connection.IAwardRequest, callback: connection.Game.AwardPlayerCallback): void;
          (request: connection.IAwardRequest): Promise<connection.AwardResponse>;
          readonly name: "AwardPlayer";
          readonly path: "/connection.Game/AwardPlayer";
          readonly requestType: "AwardRequest";
          readonly responseType: "AwardResponse";
          readonly requestStream: undefined;
          readonly responseStream: undefined;
        };
    }

    /**
     * Properties of a PingRequest.
     * @deprecated Use connection.PingRequest.$Properties instead.
     */
    interface IPingRequest extends connection.PingRequest.$Properties {
    }

    /** Represents a PingRequest. */
    class PingRequest {

        /**
         * Constructs a new PingRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: connection.PingRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PingRequest online. */
        online: number;

        /** PingRequest alive. */
        alive: boolean;

        /**
         * Creates a new PingRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PingRequest instance
         */
        static create(properties: connection.PingRequest.$Shape): connection.PingRequest & connection.PingRequest.$Shape;
        static create(properties?: connection.PingRequest.$Properties): connection.PingRequest;

        /**
         * Encodes the specified PingRequest message. Does not implicitly {@link connection.PingRequest.verify|verify} messages.
         * @param message PingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: connection.PingRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PingRequest message, length delimited. Does not implicitly {@link connection.PingRequest.verify|verify} messages.
         * @param message PingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: connection.PingRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PingRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {connection.PingRequest & connection.PingRequest.$Shape} PingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): connection.PingRequest & connection.PingRequest.$Shape;

        /**
         * Decodes a PingRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {connection.PingRequest & connection.PingRequest.$Shape} PingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): connection.PingRequest & connection.PingRequest.$Shape;

        /**
         * Verifies a PingRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PingRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PingRequest
         */
        static fromObject(object: { [k: string]: any }): connection.PingRequest;

        /**
         * Creates a plain object from a PingRequest message. Also converts values to other types if specified.
         * @param message PingRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: connection.PingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PingRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PingRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PingRequest {

        /** Properties of a PingRequest. */
        interface $Properties {

            /** PingRequest online */
            online?: (number|null);

            /** PingRequest alive */
            alive?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PingRequest. */
        type $Shape = connection.PingRequest.$Properties;
    }

    /**
     * Properties of a PongResponse.
     * @deprecated Use connection.PongResponse.$Properties instead.
     */
    interface IPongResponse extends connection.PongResponse.$Properties {
    }

    /** Represents a PongResponse. */
    class PongResponse {

        /**
         * Constructs a new PongResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: connection.PongResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PongResponse success. */
        success: boolean;

        /**
         * Creates a new PongResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PongResponse instance
         */
        static create(properties: connection.PongResponse.$Shape): connection.PongResponse & connection.PongResponse.$Shape;
        static create(properties?: connection.PongResponse.$Properties): connection.PongResponse;

        /**
         * Encodes the specified PongResponse message. Does not implicitly {@link connection.PongResponse.verify|verify} messages.
         * @param message PongResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: connection.PongResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PongResponse message, length delimited. Does not implicitly {@link connection.PongResponse.verify|verify} messages.
         * @param message PongResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: connection.PongResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PongResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {connection.PongResponse & connection.PongResponse.$Shape} PongResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): connection.PongResponse & connection.PongResponse.$Shape;

        /**
         * Decodes a PongResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {connection.PongResponse & connection.PongResponse.$Shape} PongResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): connection.PongResponse & connection.PongResponse.$Shape;

        /**
         * Verifies a PongResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PongResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PongResponse
         */
        static fromObject(object: { [k: string]: any }): connection.PongResponse;

        /**
         * Creates a plain object from a PongResponse message. Also converts values to other types if specified.
         * @param message PongResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: connection.PongResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PongResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PongResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PongResponse {

        /** Properties of a PongResponse. */
        interface $Properties {

            /** PongResponse success */
            success?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PongResponse. */
        type $Shape = connection.PongResponse.$Properties;
    }

    /**
     * Properties of an AuthenticationRequest.
     * @deprecated Use connection.AuthenticationRequest.$Properties instead.
     */
    interface IAuthenticationRequest extends connection.AuthenticationRequest.$Properties {
    }

    /** Represents an AuthenticationRequest. */
    class AuthenticationRequest {

        /**
         * Constructs a new AuthenticationRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: connection.AuthenticationRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AuthenticationRequest token. */
        token: string;

        /**
         * Creates a new AuthenticationRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthenticationRequest instance
         */
        static create(properties: connection.AuthenticationRequest.$Shape): connection.AuthenticationRequest & connection.AuthenticationRequest.$Shape;
        static create(properties?: connection.AuthenticationRequest.$Properties): connection.AuthenticationRequest;

        /**
         * Encodes the specified AuthenticationRequest message. Does not implicitly {@link connection.AuthenticationRequest.verify|verify} messages.
         * @param message AuthenticationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: connection.AuthenticationRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AuthenticationRequest message, length delimited. Does not implicitly {@link connection.AuthenticationRequest.verify|verify} messages.
         * @param message AuthenticationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: connection.AuthenticationRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthenticationRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {connection.AuthenticationRequest & connection.AuthenticationRequest.$Shape} AuthenticationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): connection.AuthenticationRequest & connection.AuthenticationRequest.$Shape;

        /**
         * Decodes an AuthenticationRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {connection.AuthenticationRequest & connection.AuthenticationRequest.$Shape} AuthenticationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): connection.AuthenticationRequest & connection.AuthenticationRequest.$Shape;

        /**
         * Verifies an AuthenticationRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AuthenticationRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuthenticationRequest
         */
        static fromObject(object: { [k: string]: any }): connection.AuthenticationRequest;

        /**
         * Creates a plain object from an AuthenticationRequest message. Also converts values to other types if specified.
         * @param message AuthenticationRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: connection.AuthenticationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AuthenticationRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AuthenticationRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AuthenticationRequest {

        /** Properties of an AuthenticationRequest. */
        interface $Properties {

            /** AuthenticationRequest token */
            token?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AuthenticationRequest. */
        type $Shape = connection.AuthenticationRequest.$Properties;
    }

    /**
     * Properties of an AuthenticationResponse.
     * @deprecated Use connection.AuthenticationResponse.$Properties instead.
     */
    interface IAuthenticationResponse extends connection.AuthenticationResponse.$Properties {
    }

    /** Represents an AuthenticationResponse. */
    class AuthenticationResponse {

        /**
         * Constructs a new AuthenticationResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: connection.AuthenticationResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AuthenticationResponse session. */
        session: string;

        /**
         * Creates a new AuthenticationResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthenticationResponse instance
         */
        static create(properties: connection.AuthenticationResponse.$Shape): connection.AuthenticationResponse & connection.AuthenticationResponse.$Shape;
        static create(properties?: connection.AuthenticationResponse.$Properties): connection.AuthenticationResponse;

        /**
         * Encodes the specified AuthenticationResponse message. Does not implicitly {@link connection.AuthenticationResponse.verify|verify} messages.
         * @param message AuthenticationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: connection.AuthenticationResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AuthenticationResponse message, length delimited. Does not implicitly {@link connection.AuthenticationResponse.verify|verify} messages.
         * @param message AuthenticationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: connection.AuthenticationResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthenticationResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {connection.AuthenticationResponse & connection.AuthenticationResponse.$Shape} AuthenticationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): connection.AuthenticationResponse & connection.AuthenticationResponse.$Shape;

        /**
         * Decodes an AuthenticationResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {connection.AuthenticationResponse & connection.AuthenticationResponse.$Shape} AuthenticationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): connection.AuthenticationResponse & connection.AuthenticationResponse.$Shape;

        /**
         * Verifies an AuthenticationResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AuthenticationResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuthenticationResponse
         */
        static fromObject(object: { [k: string]: any }): connection.AuthenticationResponse;

        /**
         * Creates a plain object from an AuthenticationResponse message. Also converts values to other types if specified.
         * @param message AuthenticationResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: connection.AuthenticationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AuthenticationResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AuthenticationResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AuthenticationResponse {

        /** Properties of an AuthenticationResponse. */
        interface $Properties {

            /** AuthenticationResponse session */
            session?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AuthenticationResponse. */
        type $Shape = connection.AuthenticationResponse.$Properties;
    }

    /**
     * Properties of a JoinPlayerRequest.
     * @deprecated Use connection.JoinPlayerRequest.$Properties instead.
     */
    interface IJoinPlayerRequest extends connection.JoinPlayerRequest.$Properties {
    }

    /** Represents a JoinPlayerRequest. */
    class JoinPlayerRequest {

        /**
         * Constructs a new JoinPlayerRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: connection.JoinPlayerRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** JoinPlayerRequest token. */
        token: string;

        /**
         * Creates a new JoinPlayerRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinPlayerRequest instance
         */
        static create(properties: connection.JoinPlayerRequest.$Shape): connection.JoinPlayerRequest & connection.JoinPlayerRequest.$Shape;
        static create(properties?: connection.JoinPlayerRequest.$Properties): connection.JoinPlayerRequest;

        /**
         * Encodes the specified JoinPlayerRequest message. Does not implicitly {@link connection.JoinPlayerRequest.verify|verify} messages.
         * @param message JoinPlayerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: connection.JoinPlayerRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinPlayerRequest message, length delimited. Does not implicitly {@link connection.JoinPlayerRequest.verify|verify} messages.
         * @param message JoinPlayerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: connection.JoinPlayerRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinPlayerRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {connection.JoinPlayerRequest & connection.JoinPlayerRequest.$Shape} JoinPlayerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): connection.JoinPlayerRequest & connection.JoinPlayerRequest.$Shape;

        /**
         * Decodes a JoinPlayerRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {connection.JoinPlayerRequest & connection.JoinPlayerRequest.$Shape} JoinPlayerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): connection.JoinPlayerRequest & connection.JoinPlayerRequest.$Shape;

        /**
         * Verifies a JoinPlayerRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinPlayerRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinPlayerRequest
         */
        static fromObject(object: { [k: string]: any }): connection.JoinPlayerRequest;

        /**
         * Creates a plain object from a JoinPlayerRequest message. Also converts values to other types if specified.
         * @param message JoinPlayerRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: connection.JoinPlayerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinPlayerRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for JoinPlayerRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace JoinPlayerRequest {

        /** Properties of a JoinPlayerRequest. */
        interface $Properties {

            /** JoinPlayerRequest token */
            token?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a JoinPlayerRequest. */
        type $Shape = connection.JoinPlayerRequest.$Properties;
    }

    /**
     * Properties of a JoinPlayerResponse.
     * @deprecated Use connection.JoinPlayerResponse.$Properties instead.
     */
    interface IJoinPlayerResponse extends connection.JoinPlayerResponse.$Properties {
    }

    /** Represents a JoinPlayerResponse. */
    class JoinPlayerResponse {

        /**
         * Constructs a new JoinPlayerResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: connection.JoinPlayerResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** JoinPlayerResponse name. */
        name: string;

        /** JoinPlayerResponse role. */
        role: connection.Role;

        /** JoinPlayerResponse id. */
        id: string;

        /**
         * Creates a new JoinPlayerResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinPlayerResponse instance
         */
        static create(properties: connection.JoinPlayerResponse.$Shape): connection.JoinPlayerResponse & connection.JoinPlayerResponse.$Shape;
        static create(properties?: connection.JoinPlayerResponse.$Properties): connection.JoinPlayerResponse;

        /**
         * Encodes the specified JoinPlayerResponse message. Does not implicitly {@link connection.JoinPlayerResponse.verify|verify} messages.
         * @param message JoinPlayerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: connection.JoinPlayerResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinPlayerResponse message, length delimited. Does not implicitly {@link connection.JoinPlayerResponse.verify|verify} messages.
         * @param message JoinPlayerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: connection.JoinPlayerResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinPlayerResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {connection.JoinPlayerResponse & connection.JoinPlayerResponse.$Shape} JoinPlayerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): connection.JoinPlayerResponse & connection.JoinPlayerResponse.$Shape;

        /**
         * Decodes a JoinPlayerResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {connection.JoinPlayerResponse & connection.JoinPlayerResponse.$Shape} JoinPlayerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): connection.JoinPlayerResponse & connection.JoinPlayerResponse.$Shape;

        /**
         * Verifies a JoinPlayerResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinPlayerResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinPlayerResponse
         */
        static fromObject(object: { [k: string]: any }): connection.JoinPlayerResponse;

        /**
         * Creates a plain object from a JoinPlayerResponse message. Also converts values to other types if specified.
         * @param message JoinPlayerResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: connection.JoinPlayerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinPlayerResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for JoinPlayerResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace JoinPlayerResponse {

        /** Properties of a JoinPlayerResponse. */
        interface $Properties {

            /** JoinPlayerResponse name */
            name?: (string|null);

            /** JoinPlayerResponse role */
            role?: (connection.Role|null);

            /** JoinPlayerResponse id */
            id?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a JoinPlayerResponse. */
        type $Shape = connection.JoinPlayerResponse.$Properties;
    }

    /**
     * Properties of an AwardRequest.
     * @deprecated Use connection.AwardRequest.$Properties instead.
     */
    interface IAwardRequest extends connection.AwardRequest.$Properties {
    }

    /** Represents an AwardRequest. */
    class AwardRequest {

        /**
         * Constructs a new AwardRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: connection.AwardRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AwardRequest id. */
        id: string;

        /** AwardRequest vp. */
        vp?: (number|null);

        /** AwardRequest accessory. */
        accessory?: (string|null);

        /**
         * Creates a new AwardRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AwardRequest instance
         */
        static create(properties: connection.AwardRequest.$Shape): connection.AwardRequest & connection.AwardRequest.$Shape;
        static create(properties?: connection.AwardRequest.$Properties): connection.AwardRequest;

        /**
         * Encodes the specified AwardRequest message. Does not implicitly {@link connection.AwardRequest.verify|verify} messages.
         * @param message AwardRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: connection.AwardRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AwardRequest message, length delimited. Does not implicitly {@link connection.AwardRequest.verify|verify} messages.
         * @param message AwardRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: connection.AwardRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AwardRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {connection.AwardRequest & connection.AwardRequest.$Shape} AwardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): connection.AwardRequest & connection.AwardRequest.$Shape;

        /**
         * Decodes an AwardRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {connection.AwardRequest & connection.AwardRequest.$Shape} AwardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): connection.AwardRequest & connection.AwardRequest.$Shape;

        /**
         * Verifies an AwardRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AwardRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AwardRequest
         */
        static fromObject(object: { [k: string]: any }): connection.AwardRequest;

        /**
         * Creates a plain object from an AwardRequest message. Also converts values to other types if specified.
         * @param message AwardRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: connection.AwardRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AwardRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AwardRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AwardRequest {

        /** Properties of an AwardRequest. */
        interface $Properties {

            /** AwardRequest id */
            id?: (string|null);

            /** AwardRequest vp */
            vp?: (number|null);

            /** AwardRequest accessory */
            accessory?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AwardRequest. */
        type $Shape = connection.AwardRequest.$Properties;
    }

    /**
     * Properties of an AwardResponse.
     * @deprecated Use connection.AwardResponse.$Properties instead.
     */
    interface IAwardResponse extends connection.AwardResponse.$Properties {
    }

    /** Represents an AwardResponse. */
    class AwardResponse {

        /**
         * Constructs a new AwardResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: connection.AwardResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AwardResponse success. */
        success: boolean;

        /**
         * Creates a new AwardResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AwardResponse instance
         */
        static create(properties: connection.AwardResponse.$Shape): connection.AwardResponse & connection.AwardResponse.$Shape;
        static create(properties?: connection.AwardResponse.$Properties): connection.AwardResponse;

        /**
         * Encodes the specified AwardResponse message. Does not implicitly {@link connection.AwardResponse.verify|verify} messages.
         * @param message AwardResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: connection.AwardResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AwardResponse message, length delimited. Does not implicitly {@link connection.AwardResponse.verify|verify} messages.
         * @param message AwardResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: connection.AwardResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AwardResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {connection.AwardResponse & connection.AwardResponse.$Shape} AwardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): connection.AwardResponse & connection.AwardResponse.$Shape;

        /**
         * Decodes an AwardResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {connection.AwardResponse & connection.AwardResponse.$Shape} AwardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): connection.AwardResponse & connection.AwardResponse.$Shape;

        /**
         * Verifies an AwardResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AwardResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AwardResponse
         */
        static fromObject(object: { [k: string]: any }): connection.AwardResponse;

        /**
         * Creates a plain object from an AwardResponse message. Also converts values to other types if specified.
         * @param message AwardResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: connection.AwardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AwardResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AwardResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AwardResponse {

        /** Properties of an AwardResponse. */
        interface $Properties {

            /** AwardResponse success */
            success?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AwardResponse. */
        type $Shape = connection.AwardResponse.$Properties;
    }

    /** Role enum. */
    enum Role {

        /** USER value */
        USER = 0,

        /** MOD value */
        MOD = 1,

        /** DEV value */
        DEV = 2
    }
}
