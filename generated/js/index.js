/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const game = $root.game = (() => {

    /**
     * Namespace game.
     * @exports game
     * @namespace
     */
    const game = {};

    /**
     * Role enum.
     * @name game.Role
     * @enum {number}
     * @property {number} USER=0 USER value
     * @property {number} MOD=1 MOD value
     * @property {number} DEV=2 DEV value
     */
    game.Role = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "USER"] = 0;
        values[valuesById[1] = "MOD"] = 1;
        values[valuesById[2] = "DEV"] = 2;
        return values;
    })();

    game.Chat = (function() {

        /**
         * Properties of a Chat.
         * @memberof game
         * @interface IChat
         * @property {number|null} [id] Chat id
         * @property {string|null} [content] Chat content
         * @property {string|null} [author] Chat author
         * @property {game.Role|null} [role] Chat role
         * @property {string|null} [world] Chat world
         */

        /**
         * Constructs a new Chat.
         * @memberof game
         * @classdesc Represents a Chat.
         * @implements IChat
         * @constructor
         * @param {game.IChat=} [properties] Properties to set
         */
        function Chat(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Chat id.
         * @member {number} id
         * @memberof game.Chat
         * @instance
         */
        Chat.prototype.id = 0;

        /**
         * Chat content.
         * @member {string} content
         * @memberof game.Chat
         * @instance
         */
        Chat.prototype.content = "";

        /**
         * Chat author.
         * @member {string} author
         * @memberof game.Chat
         * @instance
         */
        Chat.prototype.author = "";

        /**
         * Chat role.
         * @member {game.Role} role
         * @memberof game.Chat
         * @instance
         */
        Chat.prototype.role = 0;

        /**
         * Chat world.
         * @member {string} world
         * @memberof game.Chat
         * @instance
         */
        Chat.prototype.world = "";

        /**
         * Creates a new Chat instance using the specified properties.
         * @function create
         * @memberof game.Chat
         * @static
         * @param {game.IChat=} [properties] Properties to set
         * @returns {game.Chat} Chat instance
         */
        Chat.create = function create(properties) {
            return new Chat(properties);
        };

        /**
         * Encodes the specified Chat message. Does not implicitly {@link game.Chat.verify|verify} messages.
         * @function encode
         * @memberof game.Chat
         * @static
         * @param {game.IChat} message Chat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            if (message.author != null && Object.hasOwnProperty.call(message, "author"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.author);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.role);
            if (message.world != null && Object.hasOwnProperty.call(message, "world"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.world);
            return writer;
        };

        /**
         * Encodes the specified Chat message, length delimited. Does not implicitly {@link game.Chat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Chat
         * @static
         * @param {game.IChat} message Chat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Chat message from the specified reader or buffer.
         * @function decode
         * @memberof game.Chat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Chat} Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chat.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Chat();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.content = reader.string();
                        break;
                    }
                case 3: {
                        message.author = reader.string();
                        break;
                    }
                case 4: {
                        message.role = reader.int32();
                        break;
                    }
                case 5: {
                        message.world = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Chat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Chat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Chat} Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Chat message.
         * @function verify
         * @memberof game.Chat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Chat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.author != null && message.hasOwnProperty("author"))
                if (!$util.isString(message.author))
                    return "author: string expected";
            if (message.role != null && message.hasOwnProperty("role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.world != null && message.hasOwnProperty("world"))
                if (!$util.isString(message.world))
                    return "world: string expected";
            return null;
        };

        /**
         * Creates a Chat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Chat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Chat} Chat
         */
        Chat.fromObject = function fromObject(object) {
            if (object instanceof $root.game.Chat)
                return object;
            let message = new $root.game.Chat();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.content != null)
                message.content = String(object.content);
            if (object.author != null)
                message.author = String(object.author);
            switch (object.role) {
            default:
                if (typeof object.role === "number") {
                    message.role = object.role;
                    break;
                }
                break;
            case "USER":
            case 0:
                message.role = 0;
                break;
            case "MOD":
            case 1:
                message.role = 1;
                break;
            case "DEV":
            case 2:
                message.role = 2;
                break;
            }
            if (object.world != null)
                message.world = String(object.world);
            return message;
        };

        /**
         * Creates a plain object from a Chat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Chat
         * @static
         * @param {game.Chat} message Chat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Chat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.content = "";
                object.author = "";
                object.role = options.enums === String ? "USER" : 0;
                object.world = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.author != null && message.hasOwnProperty("author"))
                object.author = message.author;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = options.enums === String ? $root.game.Role[message.role] === undefined ? message.role : $root.game.Role[message.role] : message.role;
            if (message.world != null && message.hasOwnProperty("world"))
                object.world = message.world;
            return object;
        };

        /**
         * Converts this Chat to JSON.
         * @function toJSON
         * @memberof game.Chat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Chat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Chat
         * @function getTypeUrl
         * @memberof game.Chat
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Chat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.Chat";
        };

        return Chat;
    })();

    game.PackedEntity = (function() {

        /**
         * Properties of a PackedEntity.
         * @memberof game
         * @interface IPackedEntity
         * @property {number|null} [typeId] PackedEntity typeId
         * @property {number|null} [x] PackedEntity x
         * @property {number|null} [y] PackedEntity y
         * @property {number|null} [radius] PackedEntity radius
         * @property {boolean|null} [harmless] PackedEntity harmless
         * @property {number|null} [state] PackedEntity state
         * @property {number|null} [stateMetadata] PackedEntity stateMetadata
         * @property {number|null} [alpha] PackedEntity alpha
         */

        /**
         * Constructs a new PackedEntity.
         * @memberof game
         * @classdesc Represents a PackedEntity.
         * @implements IPackedEntity
         * @constructor
         * @param {game.IPackedEntity=} [properties] Properties to set
         */
        function PackedEntity(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PackedEntity typeId.
         * @member {number} typeId
         * @memberof game.PackedEntity
         * @instance
         */
        PackedEntity.prototype.typeId = 0;

        /**
         * PackedEntity x.
         * @member {number} x
         * @memberof game.PackedEntity
         * @instance
         */
        PackedEntity.prototype.x = 0;

        /**
         * PackedEntity y.
         * @member {number} y
         * @memberof game.PackedEntity
         * @instance
         */
        PackedEntity.prototype.y = 0;

        /**
         * PackedEntity radius.
         * @member {number} radius
         * @memberof game.PackedEntity
         * @instance
         */
        PackedEntity.prototype.radius = 0;

        /**
         * PackedEntity harmless.
         * @member {boolean} harmless
         * @memberof game.PackedEntity
         * @instance
         */
        PackedEntity.prototype.harmless = false;

        /**
         * PackedEntity state.
         * @member {number} state
         * @memberof game.PackedEntity
         * @instance
         */
        PackedEntity.prototype.state = 0;

        /**
         * PackedEntity stateMetadata.
         * @member {number} stateMetadata
         * @memberof game.PackedEntity
         * @instance
         */
        PackedEntity.prototype.stateMetadata = 0;

        /**
         * PackedEntity alpha.
         * @member {number} alpha
         * @memberof game.PackedEntity
         * @instance
         */
        PackedEntity.prototype.alpha = 0;

        /**
         * Creates a new PackedEntity instance using the specified properties.
         * @function create
         * @memberof game.PackedEntity
         * @static
         * @param {game.IPackedEntity=} [properties] Properties to set
         * @returns {game.PackedEntity} PackedEntity instance
         */
        PackedEntity.create = function create(properties) {
            return new PackedEntity(properties);
        };

        /**
         * Encodes the specified PackedEntity message. Does not implicitly {@link game.PackedEntity.verify|verify} messages.
         * @function encode
         * @memberof game.PackedEntity
         * @static
         * @param {game.IPackedEntity} message PackedEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PackedEntity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.typeId != null && Object.hasOwnProperty.call(message, "typeId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.typeId);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.y);
            if (message.radius != null && Object.hasOwnProperty.call(message, "radius"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.radius);
            if (message.harmless != null && Object.hasOwnProperty.call(message, "harmless"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.harmless);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.state);
            if (message.stateMetadata != null && Object.hasOwnProperty.call(message, "stateMetadata"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.stateMetadata);
            if (message.alpha != null && Object.hasOwnProperty.call(message, "alpha"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.alpha);
            return writer;
        };

        /**
         * Encodes the specified PackedEntity message, length delimited. Does not implicitly {@link game.PackedEntity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PackedEntity
         * @static
         * @param {game.IPackedEntity} message PackedEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PackedEntity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PackedEntity message from the specified reader or buffer.
         * @function decode
         * @memberof game.PackedEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PackedEntity} PackedEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PackedEntity.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.PackedEntity();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 2: {
                        message.typeId = reader.uint32();
                        break;
                    }
                case 3: {
                        message.x = reader.sint32();
                        break;
                    }
                case 4: {
                        message.y = reader.sint32();
                        break;
                    }
                case 5: {
                        message.radius = reader.uint32();
                        break;
                    }
                case 6: {
                        message.harmless = reader.bool();
                        break;
                    }
                case 7: {
                        message.state = reader.uint32();
                        break;
                    }
                case 8: {
                        message.stateMetadata = reader.uint32();
                        break;
                    }
                case 9: {
                        message.alpha = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PackedEntity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PackedEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PackedEntity} PackedEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PackedEntity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PackedEntity message.
         * @function verify
         * @memberof game.PackedEntity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PackedEntity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.typeId != null && message.hasOwnProperty("typeId"))
                if (!$util.isInteger(message.typeId))
                    return "typeId: integer expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.radius != null && message.hasOwnProperty("radius"))
                if (!$util.isInteger(message.radius))
                    return "radius: integer expected";
            if (message.harmless != null && message.hasOwnProperty("harmless"))
                if (typeof message.harmless !== "boolean")
                    return "harmless: boolean expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.stateMetadata != null && message.hasOwnProperty("stateMetadata"))
                if (!$util.isInteger(message.stateMetadata))
                    return "stateMetadata: integer expected";
            if (message.alpha != null && message.hasOwnProperty("alpha"))
                if (!$util.isInteger(message.alpha))
                    return "alpha: integer expected";
            return null;
        };

        /**
         * Creates a PackedEntity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.PackedEntity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.PackedEntity} PackedEntity
         */
        PackedEntity.fromObject = function fromObject(object) {
            if (object instanceof $root.game.PackedEntity)
                return object;
            let message = new $root.game.PackedEntity();
            if (object.typeId != null)
                message.typeId = object.typeId >>> 0;
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.radius != null)
                message.radius = object.radius >>> 0;
            if (object.harmless != null)
                message.harmless = Boolean(object.harmless);
            if (object.state != null)
                message.state = object.state >>> 0;
            if (object.stateMetadata != null)
                message.stateMetadata = object.stateMetadata >>> 0;
            if (object.alpha != null)
                message.alpha = object.alpha >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a PackedEntity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.PackedEntity
         * @static
         * @param {game.PackedEntity} message PackedEntity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PackedEntity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.typeId = 0;
                object.x = 0;
                object.y = 0;
                object.radius = 0;
                object.harmless = false;
                object.state = 0;
                object.stateMetadata = 0;
                object.alpha = 0;
            }
            if (message.typeId != null && message.hasOwnProperty("typeId"))
                object.typeId = message.typeId;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.radius != null && message.hasOwnProperty("radius"))
                object.radius = message.radius;
            if (message.harmless != null && message.hasOwnProperty("harmless"))
                object.harmless = message.harmless;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.stateMetadata != null && message.hasOwnProperty("stateMetadata"))
                object.stateMetadata = message.stateMetadata;
            if (message.alpha != null && message.hasOwnProperty("alpha"))
                object.alpha = message.alpha;
            return object;
        };

        /**
         * Converts this PackedEntity to JSON.
         * @function toJSON
         * @memberof game.PackedEntity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PackedEntity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PackedEntity
         * @function getTypeUrl
         * @memberof game.PackedEntity
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PackedEntity.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.PackedEntity";
        };

        return PackedEntity;
    })();

    game.PackedPlayer = (function() {

        /**
         * Properties of a PackedPlayer.
         * @memberof game
         * @interface IPackedPlayer
         * @property {string|null} [name] PackedPlayer name
         * @property {number|null} [id] PackedPlayer id
         * @property {number|null} [x] PackedPlayer x
         * @property {number|null} [y] PackedPlayer y
         * @property {number|null} [radius] PackedPlayer radius
         * @property {number|null} [speed] PackedPlayer speed
         * @property {number|null} [energy] PackedPlayer energy
         * @property {number|null} [maxEnergy] PackedPlayer maxEnergy
         * @property {number|null} [deathTimer] PackedPlayer deathTimer
         * @property {number|null} [state] PackedPlayer state
         * @property {number|null} [stateMeta] PackedPlayer stateMeta
         * @property {number|null} [area] PackedPlayer area
         * @property {string|null} [world] PackedPlayer world
         * @property {boolean|null} [died] PackedPlayer died
         * @property {number|null} [hero] PackedPlayer hero
         */

        /**
         * Constructs a new PackedPlayer.
         * @memberof game
         * @classdesc Represents a PackedPlayer.
         * @implements IPackedPlayer
         * @constructor
         * @param {game.IPackedPlayer=} [properties] Properties to set
         */
        function PackedPlayer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PackedPlayer name.
         * @member {string} name
         * @memberof game.PackedPlayer
         * @instance
         */
        PackedPlayer.prototype.name = "";

        /**
         * PackedPlayer id.
         * @member {number} id
         * @memberof game.PackedPlayer
         * @instance
         */
        PackedPlayer.prototype.id = 0;

        /**
         * PackedPlayer x.
         * @member {number} x
         * @memberof game.PackedPlayer
         * @instance
         */
        PackedPlayer.prototype.x = 0;

        /**
         * PackedPlayer y.
         * @member {number} y
         * @memberof game.PackedPlayer
         * @instance
         */
        PackedPlayer.prototype.y = 0;

        /**
         * PackedPlayer radius.
         * @member {number} radius
         * @memberof game.PackedPlayer
         * @instance
         */
        PackedPlayer.prototype.radius = 0;

        /**
         * PackedPlayer speed.
         * @member {number} speed
         * @memberof game.PackedPlayer
         * @instance
         */
        PackedPlayer.prototype.speed = 0;

        /**
         * PackedPlayer energy.
         * @member {number} energy
         * @memberof game.PackedPlayer
         * @instance
         */
        PackedPlayer.prototype.energy = 0;

        /**
         * PackedPlayer maxEnergy.
         * @member {number} maxEnergy
         * @memberof game.PackedPlayer
         * @instance
         */
        PackedPlayer.prototype.maxEnergy = 0;

        /**
         * PackedPlayer deathTimer.
         * @member {number} deathTimer
         * @memberof game.PackedPlayer
         * @instance
         */
        PackedPlayer.prototype.deathTimer = 0;

        /**
         * PackedPlayer state.
         * @member {number} state
         * @memberof game.PackedPlayer
         * @instance
         */
        PackedPlayer.prototype.state = 0;

        /**
         * PackedPlayer stateMeta.
         * @member {number} stateMeta
         * @memberof game.PackedPlayer
         * @instance
         */
        PackedPlayer.prototype.stateMeta = 0;

        /**
         * PackedPlayer area.
         * @member {number} area
         * @memberof game.PackedPlayer
         * @instance
         */
        PackedPlayer.prototype.area = 0;

        /**
         * PackedPlayer world.
         * @member {string} world
         * @memberof game.PackedPlayer
         * @instance
         */
        PackedPlayer.prototype.world = "";

        /**
         * PackedPlayer died.
         * @member {boolean} died
         * @memberof game.PackedPlayer
         * @instance
         */
        PackedPlayer.prototype.died = false;

        /**
         * PackedPlayer hero.
         * @member {number} hero
         * @memberof game.PackedPlayer
         * @instance
         */
        PackedPlayer.prototype.hero = 0;

        /**
         * Creates a new PackedPlayer instance using the specified properties.
         * @function create
         * @memberof game.PackedPlayer
         * @static
         * @param {game.IPackedPlayer=} [properties] Properties to set
         * @returns {game.PackedPlayer} PackedPlayer instance
         */
        PackedPlayer.create = function create(properties) {
            return new PackedPlayer(properties);
        };

        /**
         * Encodes the specified PackedPlayer message. Does not implicitly {@link game.PackedPlayer.verify|verify} messages.
         * @function encode
         * @memberof game.PackedPlayer
         * @static
         * @param {game.IPackedPlayer} message PackedPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PackedPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.id);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.y);
            if (message.radius != null && Object.hasOwnProperty.call(message, "radius"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.radius);
            if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.speed);
            if (message.energy != null && Object.hasOwnProperty.call(message, "energy"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.energy);
            if (message.maxEnergy != null && Object.hasOwnProperty.call(message, "maxEnergy"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.maxEnergy);
            if (message.deathTimer != null && Object.hasOwnProperty.call(message, "deathTimer"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.deathTimer);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.state);
            if (message.stateMeta != null && Object.hasOwnProperty.call(message, "stateMeta"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.stateMeta);
            if (message.area != null && Object.hasOwnProperty.call(message, "area"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.area);
            if (message.world != null && Object.hasOwnProperty.call(message, "world"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.world);
            if (message.died != null && Object.hasOwnProperty.call(message, "died"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.died);
            if (message.hero != null && Object.hasOwnProperty.call(message, "hero"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.hero);
            return writer;
        };

        /**
         * Encodes the specified PackedPlayer message, length delimited. Does not implicitly {@link game.PackedPlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PackedPlayer
         * @static
         * @param {game.IPackedPlayer} message PackedPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PackedPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PackedPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof game.PackedPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PackedPlayer} PackedPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PackedPlayer.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.PackedPlayer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.id = reader.uint32();
                        break;
                    }
                case 3: {
                        message.x = reader.sint32();
                        break;
                    }
                case 4: {
                        message.y = reader.sint32();
                        break;
                    }
                case 5: {
                        message.radius = reader.uint32();
                        break;
                    }
                case 6: {
                        message.speed = reader.uint32();
                        break;
                    }
                case 7: {
                        message.energy = reader.uint32();
                        break;
                    }
                case 8: {
                        message.maxEnergy = reader.uint32();
                        break;
                    }
                case 9: {
                        message.deathTimer = reader.uint32();
                        break;
                    }
                case 10: {
                        message.state = reader.uint32();
                        break;
                    }
                case 11: {
                        message.stateMeta = reader.uint32();
                        break;
                    }
                case 12: {
                        message.area = reader.uint32();
                        break;
                    }
                case 13: {
                        message.world = reader.string();
                        break;
                    }
                case 14: {
                        message.died = reader.bool();
                        break;
                    }
                case 15: {
                        message.hero = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PackedPlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PackedPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PackedPlayer} PackedPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PackedPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PackedPlayer message.
         * @function verify
         * @memberof game.PackedPlayer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PackedPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.radius != null && message.hasOwnProperty("radius"))
                if (!$util.isInteger(message.radius))
                    return "radius: integer expected";
            if (message.speed != null && message.hasOwnProperty("speed"))
                if (!$util.isInteger(message.speed))
                    return "speed: integer expected";
            if (message.energy != null && message.hasOwnProperty("energy"))
                if (!$util.isInteger(message.energy))
                    return "energy: integer expected";
            if (message.maxEnergy != null && message.hasOwnProperty("maxEnergy"))
                if (!$util.isInteger(message.maxEnergy))
                    return "maxEnergy: integer expected";
            if (message.deathTimer != null && message.hasOwnProperty("deathTimer"))
                if (!$util.isInteger(message.deathTimer))
                    return "deathTimer: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.stateMeta != null && message.hasOwnProperty("stateMeta"))
                if (!$util.isInteger(message.stateMeta))
                    return "stateMeta: integer expected";
            if (message.area != null && message.hasOwnProperty("area"))
                if (!$util.isInteger(message.area))
                    return "area: integer expected";
            if (message.world != null && message.hasOwnProperty("world"))
                if (!$util.isString(message.world))
                    return "world: string expected";
            if (message.died != null && message.hasOwnProperty("died"))
                if (typeof message.died !== "boolean")
                    return "died: boolean expected";
            if (message.hero != null && message.hasOwnProperty("hero"))
                if (!$util.isInteger(message.hero))
                    return "hero: integer expected";
            return null;
        };

        /**
         * Creates a PackedPlayer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.PackedPlayer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.PackedPlayer} PackedPlayer
         */
        PackedPlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.game.PackedPlayer)
                return object;
            let message = new $root.game.PackedPlayer();
            if (object.name != null)
                message.name = String(object.name);
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.radius != null)
                message.radius = object.radius >>> 0;
            if (object.speed != null)
                message.speed = object.speed >>> 0;
            if (object.energy != null)
                message.energy = object.energy >>> 0;
            if (object.maxEnergy != null)
                message.maxEnergy = object.maxEnergy >>> 0;
            if (object.deathTimer != null)
                message.deathTimer = object.deathTimer >>> 0;
            if (object.state != null)
                message.state = object.state >>> 0;
            if (object.stateMeta != null)
                message.stateMeta = object.stateMeta >>> 0;
            if (object.area != null)
                message.area = object.area >>> 0;
            if (object.world != null)
                message.world = String(object.world);
            if (object.died != null)
                message.died = Boolean(object.died);
            if (object.hero != null)
                message.hero = object.hero >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a PackedPlayer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.PackedPlayer
         * @static
         * @param {game.PackedPlayer} message PackedPlayer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PackedPlayer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.id = 0;
                object.x = 0;
                object.y = 0;
                object.radius = 0;
                object.speed = 0;
                object.energy = 0;
                object.maxEnergy = 0;
                object.deathTimer = 0;
                object.state = 0;
                object.stateMeta = 0;
                object.area = 0;
                object.world = "";
                object.died = false;
                object.hero = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.radius != null && message.hasOwnProperty("radius"))
                object.radius = message.radius;
            if (message.speed != null && message.hasOwnProperty("speed"))
                object.speed = message.speed;
            if (message.energy != null && message.hasOwnProperty("energy"))
                object.energy = message.energy;
            if (message.maxEnergy != null && message.hasOwnProperty("maxEnergy"))
                object.maxEnergy = message.maxEnergy;
            if (message.deathTimer != null && message.hasOwnProperty("deathTimer"))
                object.deathTimer = message.deathTimer;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.stateMeta != null && message.hasOwnProperty("stateMeta"))
                object.stateMeta = message.stateMeta;
            if (message.area != null && message.hasOwnProperty("area"))
                object.area = message.area;
            if (message.world != null && message.hasOwnProperty("world"))
                object.world = message.world;
            if (message.died != null && message.hasOwnProperty("died"))
                object.died = message.died;
            if (message.hero != null && message.hasOwnProperty("hero"))
                object.hero = message.hero;
            return object;
        };

        /**
         * Converts this PackedPlayer to JSON.
         * @function toJSON
         * @memberof game.PackedPlayer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PackedPlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PackedPlayer
         * @function getTypeUrl
         * @memberof game.PackedPlayer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PackedPlayer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.PackedPlayer";
        };

        return PackedPlayer;
    })();

    game.PartialEntity = (function() {

        /**
         * Properties of a PartialEntity.
         * @memberof game
         * @interface IPartialEntity
         * @property {number|null} [x] PartialEntity x
         * @property {number|null} [y] PartialEntity y
         * @property {number|null} [radius] PartialEntity radius
         * @property {boolean|null} [harmless] PartialEntity harmless
         * @property {number|null} [state] PartialEntity state
         * @property {number|null} [stateMetadata] PartialEntity stateMetadata
         * @property {number|null} [alpha] PartialEntity alpha
         */

        /**
         * Constructs a new PartialEntity.
         * @memberof game
         * @classdesc Represents a PartialEntity.
         * @implements IPartialEntity
         * @constructor
         * @param {game.IPartialEntity=} [properties] Properties to set
         */
        function PartialEntity(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PartialEntity x.
         * @member {number|null|undefined} x
         * @memberof game.PartialEntity
         * @instance
         */
        PartialEntity.prototype.x = null;

        /**
         * PartialEntity y.
         * @member {number|null|undefined} y
         * @memberof game.PartialEntity
         * @instance
         */
        PartialEntity.prototype.y = null;

        /**
         * PartialEntity radius.
         * @member {number|null|undefined} radius
         * @memberof game.PartialEntity
         * @instance
         */
        PartialEntity.prototype.radius = null;

        /**
         * PartialEntity harmless.
         * @member {boolean|null|undefined} harmless
         * @memberof game.PartialEntity
         * @instance
         */
        PartialEntity.prototype.harmless = null;

        /**
         * PartialEntity state.
         * @member {number|null|undefined} state
         * @memberof game.PartialEntity
         * @instance
         */
        PartialEntity.prototype.state = null;

        /**
         * PartialEntity stateMetadata.
         * @member {number|null|undefined} stateMetadata
         * @memberof game.PartialEntity
         * @instance
         */
        PartialEntity.prototype.stateMetadata = null;

        /**
         * PartialEntity alpha.
         * @member {number|null|undefined} alpha
         * @memberof game.PartialEntity
         * @instance
         */
        PartialEntity.prototype.alpha = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PartialEntity.prototype, "_x", {
            get: $util.oneOfGetter($oneOfFields = ["x"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PartialEntity.prototype, "_y", {
            get: $util.oneOfGetter($oneOfFields = ["y"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PartialEntity.prototype, "_radius", {
            get: $util.oneOfGetter($oneOfFields = ["radius"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PartialEntity.prototype, "_harmless", {
            get: $util.oneOfGetter($oneOfFields = ["harmless"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PartialEntity.prototype, "_state", {
            get: $util.oneOfGetter($oneOfFields = ["state"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PartialEntity.prototype, "_stateMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["stateMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PartialEntity.prototype, "_alpha", {
            get: $util.oneOfGetter($oneOfFields = ["alpha"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PartialEntity instance using the specified properties.
         * @function create
         * @memberof game.PartialEntity
         * @static
         * @param {game.IPartialEntity=} [properties] Properties to set
         * @returns {game.PartialEntity} PartialEntity instance
         */
        PartialEntity.create = function create(properties) {
            return new PartialEntity(properties);
        };

        /**
         * Encodes the specified PartialEntity message. Does not implicitly {@link game.PartialEntity.verify|verify} messages.
         * @function encode
         * @memberof game.PartialEntity
         * @static
         * @param {game.IPartialEntity} message PartialEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PartialEntity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.y);
            if (message.radius != null && Object.hasOwnProperty.call(message, "radius"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.radius);
            if (message.harmless != null && Object.hasOwnProperty.call(message, "harmless"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.harmless);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.state);
            if (message.stateMetadata != null && Object.hasOwnProperty.call(message, "stateMetadata"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.stateMetadata);
            if (message.alpha != null && Object.hasOwnProperty.call(message, "alpha"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.alpha);
            return writer;
        };

        /**
         * Encodes the specified PartialEntity message, length delimited. Does not implicitly {@link game.PartialEntity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PartialEntity
         * @static
         * @param {game.IPartialEntity} message PartialEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PartialEntity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PartialEntity message from the specified reader or buffer.
         * @function decode
         * @memberof game.PartialEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PartialEntity} PartialEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PartialEntity.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.PartialEntity();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 2: {
                        message.x = reader.sint32();
                        break;
                    }
                case 3: {
                        message.y = reader.sint32();
                        break;
                    }
                case 4: {
                        message.radius = reader.uint32();
                        break;
                    }
                case 5: {
                        message.harmless = reader.bool();
                        break;
                    }
                case 7: {
                        message.state = reader.uint32();
                        break;
                    }
                case 8: {
                        message.stateMetadata = reader.uint32();
                        break;
                    }
                case 9: {
                        message.alpha = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PartialEntity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PartialEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PartialEntity} PartialEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PartialEntity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PartialEntity message.
         * @function verify
         * @memberof game.PartialEntity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PartialEntity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.x != null && message.hasOwnProperty("x")) {
                properties._x = 1;
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            }
            if (message.y != null && message.hasOwnProperty("y")) {
                properties._y = 1;
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            }
            if (message.radius != null && message.hasOwnProperty("radius")) {
                properties._radius = 1;
                if (!$util.isInteger(message.radius))
                    return "radius: integer expected";
            }
            if (message.harmless != null && message.hasOwnProperty("harmless")) {
                properties._harmless = 1;
                if (typeof message.harmless !== "boolean")
                    return "harmless: boolean expected";
            }
            if (message.state != null && message.hasOwnProperty("state")) {
                properties._state = 1;
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            }
            if (message.stateMetadata != null && message.hasOwnProperty("stateMetadata")) {
                properties._stateMetadata = 1;
                if (!$util.isInteger(message.stateMetadata))
                    return "stateMetadata: integer expected";
            }
            if (message.alpha != null && message.hasOwnProperty("alpha")) {
                properties._alpha = 1;
                if (!$util.isInteger(message.alpha))
                    return "alpha: integer expected";
            }
            return null;
        };

        /**
         * Creates a PartialEntity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.PartialEntity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.PartialEntity} PartialEntity
         */
        PartialEntity.fromObject = function fromObject(object) {
            if (object instanceof $root.game.PartialEntity)
                return object;
            let message = new $root.game.PartialEntity();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.radius != null)
                message.radius = object.radius >>> 0;
            if (object.harmless != null)
                message.harmless = Boolean(object.harmless);
            if (object.state != null)
                message.state = object.state >>> 0;
            if (object.stateMetadata != null)
                message.stateMetadata = object.stateMetadata >>> 0;
            if (object.alpha != null)
                message.alpha = object.alpha >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a PartialEntity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.PartialEntity
         * @static
         * @param {game.PartialEntity} message PartialEntity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PartialEntity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.x != null && message.hasOwnProperty("x")) {
                object.x = message.x;
                if (options.oneofs)
                    object._x = "x";
            }
            if (message.y != null && message.hasOwnProperty("y")) {
                object.y = message.y;
                if (options.oneofs)
                    object._y = "y";
            }
            if (message.radius != null && message.hasOwnProperty("radius")) {
                object.radius = message.radius;
                if (options.oneofs)
                    object._radius = "radius";
            }
            if (message.harmless != null && message.hasOwnProperty("harmless")) {
                object.harmless = message.harmless;
                if (options.oneofs)
                    object._harmless = "harmless";
            }
            if (message.state != null && message.hasOwnProperty("state")) {
                object.state = message.state;
                if (options.oneofs)
                    object._state = "state";
            }
            if (message.stateMetadata != null && message.hasOwnProperty("stateMetadata")) {
                object.stateMetadata = message.stateMetadata;
                if (options.oneofs)
                    object._stateMetadata = "stateMetadata";
            }
            if (message.alpha != null && message.hasOwnProperty("alpha")) {
                object.alpha = message.alpha;
                if (options.oneofs)
                    object._alpha = "alpha";
            }
            return object;
        };

        /**
         * Converts this PartialEntity to JSON.
         * @function toJSON
         * @memberof game.PartialEntity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PartialEntity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PartialEntity
         * @function getTypeUrl
         * @memberof game.PartialEntity
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PartialEntity.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.PartialEntity";
        };

        return PartialEntity;
    })();

    game.PartialPlayer = (function() {

        /**
         * Properties of a PartialPlayer.
         * @memberof game
         * @interface IPartialPlayer
         * @property {number|null} [x] PartialPlayer x
         * @property {number|null} [y] PartialPlayer y
         * @property {number|null} [radius] PartialPlayer radius
         * @property {number|null} [speed] PartialPlayer speed
         * @property {number|null} [energy] PartialPlayer energy
         * @property {number|null} [maxEnergy] PartialPlayer maxEnergy
         * @property {number|null} [deathTimer] PartialPlayer deathTimer
         * @property {number|null} [state] PartialPlayer state
         * @property {number|null} [stateMeta] PartialPlayer stateMeta
         * @property {number|null} [area] PartialPlayer area
         * @property {string|null} [world] PartialPlayer world
         * @property {boolean|null} [died] PartialPlayer died
         */

        /**
         * Constructs a new PartialPlayer.
         * @memberof game
         * @classdesc Represents a PartialPlayer.
         * @implements IPartialPlayer
         * @constructor
         * @param {game.IPartialPlayer=} [properties] Properties to set
         */
        function PartialPlayer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PartialPlayer x.
         * @member {number|null|undefined} x
         * @memberof game.PartialPlayer
         * @instance
         */
        PartialPlayer.prototype.x = null;

        /**
         * PartialPlayer y.
         * @member {number|null|undefined} y
         * @memberof game.PartialPlayer
         * @instance
         */
        PartialPlayer.prototype.y = null;

        /**
         * PartialPlayer radius.
         * @member {number|null|undefined} radius
         * @memberof game.PartialPlayer
         * @instance
         */
        PartialPlayer.prototype.radius = null;

        /**
         * PartialPlayer speed.
         * @member {number|null|undefined} speed
         * @memberof game.PartialPlayer
         * @instance
         */
        PartialPlayer.prototype.speed = null;

        /**
         * PartialPlayer energy.
         * @member {number|null|undefined} energy
         * @memberof game.PartialPlayer
         * @instance
         */
        PartialPlayer.prototype.energy = null;

        /**
         * PartialPlayer maxEnergy.
         * @member {number|null|undefined} maxEnergy
         * @memberof game.PartialPlayer
         * @instance
         */
        PartialPlayer.prototype.maxEnergy = null;

        /**
         * PartialPlayer deathTimer.
         * @member {number|null|undefined} deathTimer
         * @memberof game.PartialPlayer
         * @instance
         */
        PartialPlayer.prototype.deathTimer = null;

        /**
         * PartialPlayer state.
         * @member {number|null|undefined} state
         * @memberof game.PartialPlayer
         * @instance
         */
        PartialPlayer.prototype.state = null;

        /**
         * PartialPlayer stateMeta.
         * @member {number|null|undefined} stateMeta
         * @memberof game.PartialPlayer
         * @instance
         */
        PartialPlayer.prototype.stateMeta = null;

        /**
         * PartialPlayer area.
         * @member {number|null|undefined} area
         * @memberof game.PartialPlayer
         * @instance
         */
        PartialPlayer.prototype.area = null;

        /**
         * PartialPlayer world.
         * @member {string|null|undefined} world
         * @memberof game.PartialPlayer
         * @instance
         */
        PartialPlayer.prototype.world = null;

        /**
         * PartialPlayer died.
         * @member {boolean|null|undefined} died
         * @memberof game.PartialPlayer
         * @instance
         */
        PartialPlayer.prototype.died = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PartialPlayer.prototype, "_x", {
            get: $util.oneOfGetter($oneOfFields = ["x"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PartialPlayer.prototype, "_y", {
            get: $util.oneOfGetter($oneOfFields = ["y"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PartialPlayer.prototype, "_radius", {
            get: $util.oneOfGetter($oneOfFields = ["radius"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PartialPlayer.prototype, "_speed", {
            get: $util.oneOfGetter($oneOfFields = ["speed"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PartialPlayer.prototype, "_energy", {
            get: $util.oneOfGetter($oneOfFields = ["energy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PartialPlayer.prototype, "_maxEnergy", {
            get: $util.oneOfGetter($oneOfFields = ["maxEnergy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PartialPlayer.prototype, "_deathTimer", {
            get: $util.oneOfGetter($oneOfFields = ["deathTimer"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PartialPlayer.prototype, "_state", {
            get: $util.oneOfGetter($oneOfFields = ["state"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PartialPlayer.prototype, "_stateMeta", {
            get: $util.oneOfGetter($oneOfFields = ["stateMeta"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PartialPlayer.prototype, "_area", {
            get: $util.oneOfGetter($oneOfFields = ["area"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PartialPlayer.prototype, "_world", {
            get: $util.oneOfGetter($oneOfFields = ["world"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PartialPlayer.prototype, "_died", {
            get: $util.oneOfGetter($oneOfFields = ["died"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PartialPlayer instance using the specified properties.
         * @function create
         * @memberof game.PartialPlayer
         * @static
         * @param {game.IPartialPlayer=} [properties] Properties to set
         * @returns {game.PartialPlayer} PartialPlayer instance
         */
        PartialPlayer.create = function create(properties) {
            return new PartialPlayer(properties);
        };

        /**
         * Encodes the specified PartialPlayer message. Does not implicitly {@link game.PartialPlayer.verify|verify} messages.
         * @function encode
         * @memberof game.PartialPlayer
         * @static
         * @param {game.IPartialPlayer} message PartialPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PartialPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.y);
            if (message.radius != null && Object.hasOwnProperty.call(message, "radius"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.radius);
            if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.speed);
            if (message.energy != null && Object.hasOwnProperty.call(message, "energy"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.energy);
            if (message.maxEnergy != null && Object.hasOwnProperty.call(message, "maxEnergy"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.maxEnergy);
            if (message.deathTimer != null && Object.hasOwnProperty.call(message, "deathTimer"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.deathTimer);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.state);
            if (message.stateMeta != null && Object.hasOwnProperty.call(message, "stateMeta"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.stateMeta);
            if (message.area != null && Object.hasOwnProperty.call(message, "area"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.area);
            if (message.world != null && Object.hasOwnProperty.call(message, "world"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.world);
            if (message.died != null && Object.hasOwnProperty.call(message, "died"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.died);
            return writer;
        };

        /**
         * Encodes the specified PartialPlayer message, length delimited. Does not implicitly {@link game.PartialPlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PartialPlayer
         * @static
         * @param {game.IPartialPlayer} message PartialPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PartialPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PartialPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof game.PartialPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PartialPlayer} PartialPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PartialPlayer.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.PartialPlayer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 3: {
                        message.x = reader.sint32();
                        break;
                    }
                case 4: {
                        message.y = reader.sint32();
                        break;
                    }
                case 5: {
                        message.radius = reader.uint32();
                        break;
                    }
                case 6: {
                        message.speed = reader.uint32();
                        break;
                    }
                case 7: {
                        message.energy = reader.uint32();
                        break;
                    }
                case 8: {
                        message.maxEnergy = reader.uint32();
                        break;
                    }
                case 9: {
                        message.deathTimer = reader.uint32();
                        break;
                    }
                case 10: {
                        message.state = reader.uint32();
                        break;
                    }
                case 11: {
                        message.stateMeta = reader.uint32();
                        break;
                    }
                case 12: {
                        message.area = reader.uint32();
                        break;
                    }
                case 13: {
                        message.world = reader.string();
                        break;
                    }
                case 14: {
                        message.died = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PartialPlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PartialPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PartialPlayer} PartialPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PartialPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PartialPlayer message.
         * @function verify
         * @memberof game.PartialPlayer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PartialPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.x != null && message.hasOwnProperty("x")) {
                properties._x = 1;
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            }
            if (message.y != null && message.hasOwnProperty("y")) {
                properties._y = 1;
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            }
            if (message.radius != null && message.hasOwnProperty("radius")) {
                properties._radius = 1;
                if (!$util.isInteger(message.radius))
                    return "radius: integer expected";
            }
            if (message.speed != null && message.hasOwnProperty("speed")) {
                properties._speed = 1;
                if (!$util.isInteger(message.speed))
                    return "speed: integer expected";
            }
            if (message.energy != null && message.hasOwnProperty("energy")) {
                properties._energy = 1;
                if (!$util.isInteger(message.energy))
                    return "energy: integer expected";
            }
            if (message.maxEnergy != null && message.hasOwnProperty("maxEnergy")) {
                properties._maxEnergy = 1;
                if (!$util.isInteger(message.maxEnergy))
                    return "maxEnergy: integer expected";
            }
            if (message.deathTimer != null && message.hasOwnProperty("deathTimer")) {
                properties._deathTimer = 1;
                if (!$util.isInteger(message.deathTimer))
                    return "deathTimer: integer expected";
            }
            if (message.state != null && message.hasOwnProperty("state")) {
                properties._state = 1;
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            }
            if (message.stateMeta != null && message.hasOwnProperty("stateMeta")) {
                properties._stateMeta = 1;
                if (!$util.isInteger(message.stateMeta))
                    return "stateMeta: integer expected";
            }
            if (message.area != null && message.hasOwnProperty("area")) {
                properties._area = 1;
                if (!$util.isInteger(message.area))
                    return "area: integer expected";
            }
            if (message.world != null && message.hasOwnProperty("world")) {
                properties._world = 1;
                if (!$util.isString(message.world))
                    return "world: string expected";
            }
            if (message.died != null && message.hasOwnProperty("died")) {
                properties._died = 1;
                if (typeof message.died !== "boolean")
                    return "died: boolean expected";
            }
            return null;
        };

        /**
         * Creates a PartialPlayer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.PartialPlayer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.PartialPlayer} PartialPlayer
         */
        PartialPlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.game.PartialPlayer)
                return object;
            let message = new $root.game.PartialPlayer();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.radius != null)
                message.radius = object.radius >>> 0;
            if (object.speed != null)
                message.speed = object.speed >>> 0;
            if (object.energy != null)
                message.energy = object.energy >>> 0;
            if (object.maxEnergy != null)
                message.maxEnergy = object.maxEnergy >>> 0;
            if (object.deathTimer != null)
                message.deathTimer = object.deathTimer >>> 0;
            if (object.state != null)
                message.state = object.state >>> 0;
            if (object.stateMeta != null)
                message.stateMeta = object.stateMeta >>> 0;
            if (object.area != null)
                message.area = object.area >>> 0;
            if (object.world != null)
                message.world = String(object.world);
            if (object.died != null)
                message.died = Boolean(object.died);
            return message;
        };

        /**
         * Creates a plain object from a PartialPlayer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.PartialPlayer
         * @static
         * @param {game.PartialPlayer} message PartialPlayer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PartialPlayer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.x != null && message.hasOwnProperty("x")) {
                object.x = message.x;
                if (options.oneofs)
                    object._x = "x";
            }
            if (message.y != null && message.hasOwnProperty("y")) {
                object.y = message.y;
                if (options.oneofs)
                    object._y = "y";
            }
            if (message.radius != null && message.hasOwnProperty("radius")) {
                object.radius = message.radius;
                if (options.oneofs)
                    object._radius = "radius";
            }
            if (message.speed != null && message.hasOwnProperty("speed")) {
                object.speed = message.speed;
                if (options.oneofs)
                    object._speed = "speed";
            }
            if (message.energy != null && message.hasOwnProperty("energy")) {
                object.energy = message.energy;
                if (options.oneofs)
                    object._energy = "energy";
            }
            if (message.maxEnergy != null && message.hasOwnProperty("maxEnergy")) {
                object.maxEnergy = message.maxEnergy;
                if (options.oneofs)
                    object._maxEnergy = "maxEnergy";
            }
            if (message.deathTimer != null && message.hasOwnProperty("deathTimer")) {
                object.deathTimer = message.deathTimer;
                if (options.oneofs)
                    object._deathTimer = "deathTimer";
            }
            if (message.state != null && message.hasOwnProperty("state")) {
                object.state = message.state;
                if (options.oneofs)
                    object._state = "state";
            }
            if (message.stateMeta != null && message.hasOwnProperty("stateMeta")) {
                object.stateMeta = message.stateMeta;
                if (options.oneofs)
                    object._stateMeta = "stateMeta";
            }
            if (message.area != null && message.hasOwnProperty("area")) {
                object.area = message.area;
                if (options.oneofs)
                    object._area = "area";
            }
            if (message.world != null && message.hasOwnProperty("world")) {
                object.world = message.world;
                if (options.oneofs)
                    object._world = "world";
            }
            if (message.died != null && message.hasOwnProperty("died")) {
                object.died = message.died;
                if (options.oneofs)
                    object._died = "died";
            }
            return object;
        };

        /**
         * Converts this PartialPlayer to JSON.
         * @function toJSON
         * @memberof game.PartialPlayer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PartialPlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PartialPlayer
         * @function getTypeUrl
         * @memberof game.PartialPlayer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PartialPlayer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.PartialPlayer";
        };

        return PartialPlayer;
    })();

    game.PackedArea = (function() {

        /**
         * Properties of a PackedArea.
         * @memberof game
         * @interface IPackedArea
         * @property {number|null} [w] PackedArea w
         * @property {number|null} [h] PackedArea h
         * @property {number|Long|null} [area] PackedArea area
         * @property {string|null} [world] PackedArea world
         * @property {Object.<string,game.IPackedEntity>|null} [entities] PackedArea entities
         */

        /**
         * Constructs a new PackedArea.
         * @memberof game
         * @classdesc Represents a PackedArea.
         * @implements IPackedArea
         * @constructor
         * @param {game.IPackedArea=} [properties] Properties to set
         */
        function PackedArea(properties) {
            this.entities = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PackedArea w.
         * @member {number} w
         * @memberof game.PackedArea
         * @instance
         */
        PackedArea.prototype.w = 0;

        /**
         * PackedArea h.
         * @member {number} h
         * @memberof game.PackedArea
         * @instance
         */
        PackedArea.prototype.h = 0;

        /**
         * PackedArea area.
         * @member {number|Long} area
         * @memberof game.PackedArea
         * @instance
         */
        PackedArea.prototype.area = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * PackedArea world.
         * @member {string} world
         * @memberof game.PackedArea
         * @instance
         */
        PackedArea.prototype.world = "";

        /**
         * PackedArea entities.
         * @member {Object.<string,game.IPackedEntity>} entities
         * @memberof game.PackedArea
         * @instance
         */
        PackedArea.prototype.entities = $util.emptyObject;

        /**
         * Creates a new PackedArea instance using the specified properties.
         * @function create
         * @memberof game.PackedArea
         * @static
         * @param {game.IPackedArea=} [properties] Properties to set
         * @returns {game.PackedArea} PackedArea instance
         */
        PackedArea.create = function create(properties) {
            return new PackedArea(properties);
        };

        /**
         * Encodes the specified PackedArea message. Does not implicitly {@link game.PackedArea.verify|verify} messages.
         * @function encode
         * @memberof game.PackedArea
         * @static
         * @param {game.IPackedArea} message PackedArea message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PackedArea.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.w != null && Object.hasOwnProperty.call(message, "w"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.w);
            if (message.h != null && Object.hasOwnProperty.call(message, "h"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.h);
            if (message.area != null && Object.hasOwnProperty.call(message, "area"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.area);
            if (message.world != null && Object.hasOwnProperty.call(message, "world"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.world);
            if (message.entities != null && Object.hasOwnProperty.call(message, "entities"))
                for (let keys = Object.keys(message.entities), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 0 =*/8).uint64(keys[i]);
                    $root.game.PackedEntity.encode(message.entities[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified PackedArea message, length delimited. Does not implicitly {@link game.PackedArea.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PackedArea
         * @static
         * @param {game.IPackedArea} message PackedArea message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PackedArea.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PackedArea message from the specified reader or buffer.
         * @function decode
         * @memberof game.PackedArea
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PackedArea} PackedArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PackedArea.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.PackedArea(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.w = reader.float();
                        break;
                    }
                case 2: {
                        message.h = reader.float();
                        break;
                    }
                case 3: {
                        message.area = reader.uint64();
                        break;
                    }
                case 4: {
                        message.world = reader.string();
                        break;
                    }
                case 5: {
                        if (message.entities === $util.emptyObject)
                            message.entities = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.uint64();
                                break;
                            case 2:
                                value = $root.game.PackedEntity.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.entities[typeof key === "object" ? $util.longToHash(key) : key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PackedArea message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PackedArea
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PackedArea} PackedArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PackedArea.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PackedArea message.
         * @function verify
         * @memberof game.PackedArea
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PackedArea.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.w != null && message.hasOwnProperty("w"))
                if (typeof message.w !== "number")
                    return "w: number expected";
            if (message.h != null && message.hasOwnProperty("h"))
                if (typeof message.h !== "number")
                    return "h: number expected";
            if (message.area != null && message.hasOwnProperty("area"))
                if (!$util.isInteger(message.area) && !(message.area && $util.isInteger(message.area.low) && $util.isInteger(message.area.high)))
                    return "area: integer|Long expected";
            if (message.world != null && message.hasOwnProperty("world"))
                if (!$util.isString(message.world))
                    return "world: string expected";
            if (message.entities != null && message.hasOwnProperty("entities")) {
                if (!$util.isObject(message.entities))
                    return "entities: object expected";
                let key = Object.keys(message.entities);
                for (let i = 0; i < key.length; ++i) {
                    if (!$util.key64Re.test(key[i]))
                        return "entities: integer|Long key{k:uint64} expected";
                    {
                        let error = $root.game.PackedEntity.verify(message.entities[key[i]]);
                        if (error)
                            return "entities." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a PackedArea message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.PackedArea
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.PackedArea} PackedArea
         */
        PackedArea.fromObject = function fromObject(object) {
            if (object instanceof $root.game.PackedArea)
                return object;
            let message = new $root.game.PackedArea();
            if (object.w != null)
                message.w = Number(object.w);
            if (object.h != null)
                message.h = Number(object.h);
            if (object.area != null)
                if ($util.Long)
                    (message.area = $util.Long.fromValue(object.area)).unsigned = true;
                else if (typeof object.area === "string")
                    message.area = parseInt(object.area, 10);
                else if (typeof object.area === "number")
                    message.area = object.area;
                else if (typeof object.area === "object")
                    message.area = new $util.LongBits(object.area.low >>> 0, object.area.high >>> 0).toNumber(true);
            if (object.world != null)
                message.world = String(object.world);
            if (object.entities) {
                if (typeof object.entities !== "object")
                    throw TypeError(".game.PackedArea.entities: object expected");
                message.entities = {};
                for (let keys = Object.keys(object.entities), i = 0; i < keys.length; ++i) {
                    if (typeof object.entities[keys[i]] !== "object")
                        throw TypeError(".game.PackedArea.entities: object expected");
                    message.entities[keys[i]] = $root.game.PackedEntity.fromObject(object.entities[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PackedArea message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.PackedArea
         * @static
         * @param {game.PackedArea} message PackedArea
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PackedArea.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.entities = {};
            if (options.defaults) {
                object.w = 0;
                object.h = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.area = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.area = options.longs === String ? "0" : 0;
                object.world = "";
            }
            if (message.w != null && message.hasOwnProperty("w"))
                object.w = options.json && !isFinite(message.w) ? String(message.w) : message.w;
            if (message.h != null && message.hasOwnProperty("h"))
                object.h = options.json && !isFinite(message.h) ? String(message.h) : message.h;
            if (message.area != null && message.hasOwnProperty("area"))
                if (typeof message.area === "number")
                    object.area = options.longs === String ? String(message.area) : message.area;
                else
                    object.area = options.longs === String ? $util.Long.prototype.toString.call(message.area) : options.longs === Number ? new $util.LongBits(message.area.low >>> 0, message.area.high >>> 0).toNumber(true) : message.area;
            if (message.world != null && message.hasOwnProperty("world"))
                object.world = message.world;
            let keys2;
            if (message.entities && (keys2 = Object.keys(message.entities)).length) {
                object.entities = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.entities[keys2[j]] = $root.game.PackedEntity.toObject(message.entities[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this PackedArea to JSON.
         * @function toJSON
         * @memberof game.PackedArea
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PackedArea.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PackedArea
         * @function getTypeUrl
         * @memberof game.PackedArea
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PackedArea.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.PackedArea";
        };

        return PackedArea;
    })();

    game.Package = (function() {

        /**
         * Properties of a Package.
         * @memberof game
         * @interface IPackage
         * @property {game.IPackedPlayer|null} [newPlayer] Package newPlayer
         * @property {number|Long|null} [closePlayer] Package closePlayer
         * @property {game.IPlayers|null} [players] Package players
         * @property {game.IEntities|null} [newEntities] Package newEntities
         * @property {game.ICloseEntities|null} [closeEntities] Package closeEntities
         * @property {game.IPackedArea|null} [areaInit] Package areaInit
         * @property {game.IPackedPlayer|null} [myself] Package myself
         * @property {game.IUpdateEntitiesMap|null} [updateEntities] Package updateEntities
         * @property {game.IUpdatePlayersMap|null} [updatePlayers] Package updatePlayers
         * @property {game.IChat|null} [chatMessage] Package chatMessage
         */

        /**
         * Constructs a new Package.
         * @memberof game
         * @classdesc Represents a Package.
         * @implements IPackage
         * @constructor
         * @param {game.IPackage=} [properties] Properties to set
         */
        function Package(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Package newPlayer.
         * @member {game.IPackedPlayer|null|undefined} newPlayer
         * @memberof game.Package
         * @instance
         */
        Package.prototype.newPlayer = null;

        /**
         * Package closePlayer.
         * @member {number|Long|null|undefined} closePlayer
         * @memberof game.Package
         * @instance
         */
        Package.prototype.closePlayer = null;

        /**
         * Package players.
         * @member {game.IPlayers|null|undefined} players
         * @memberof game.Package
         * @instance
         */
        Package.prototype.players = null;

        /**
         * Package newEntities.
         * @member {game.IEntities|null|undefined} newEntities
         * @memberof game.Package
         * @instance
         */
        Package.prototype.newEntities = null;

        /**
         * Package closeEntities.
         * @member {game.ICloseEntities|null|undefined} closeEntities
         * @memberof game.Package
         * @instance
         */
        Package.prototype.closeEntities = null;

        /**
         * Package areaInit.
         * @member {game.IPackedArea|null|undefined} areaInit
         * @memberof game.Package
         * @instance
         */
        Package.prototype.areaInit = null;

        /**
         * Package myself.
         * @member {game.IPackedPlayer|null|undefined} myself
         * @memberof game.Package
         * @instance
         */
        Package.prototype.myself = null;

        /**
         * Package updateEntities.
         * @member {game.IUpdateEntitiesMap|null|undefined} updateEntities
         * @memberof game.Package
         * @instance
         */
        Package.prototype.updateEntities = null;

        /**
         * Package updatePlayers.
         * @member {game.IUpdatePlayersMap|null|undefined} updatePlayers
         * @memberof game.Package
         * @instance
         */
        Package.prototype.updatePlayers = null;

        /**
         * Package chatMessage.
         * @member {game.IChat|null|undefined} chatMessage
         * @memberof game.Package
         * @instance
         */
        Package.prototype.chatMessage = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Package kind.
         * @member {"newPlayer"|"closePlayer"|"players"|"newEntities"|"closeEntities"|"areaInit"|"myself"|"updateEntities"|"updatePlayers"|"chatMessage"|undefined} kind
         * @memberof game.Package
         * @instance
         */
        Object.defineProperty(Package.prototype, "kind", {
            get: $util.oneOfGetter($oneOfFields = ["newPlayer", "closePlayer", "players", "newEntities", "closeEntities", "areaInit", "myself", "updateEntities", "updatePlayers", "chatMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Package instance using the specified properties.
         * @function create
         * @memberof game.Package
         * @static
         * @param {game.IPackage=} [properties] Properties to set
         * @returns {game.Package} Package instance
         */
        Package.create = function create(properties) {
            return new Package(properties);
        };

        /**
         * Encodes the specified Package message. Does not implicitly {@link game.Package.verify|verify} messages.
         * @function encode
         * @memberof game.Package
         * @static
         * @param {game.IPackage} message Package message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Package.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.newPlayer != null && Object.hasOwnProperty.call(message, "newPlayer"))
                $root.game.PackedPlayer.encode(message.newPlayer, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.closePlayer != null && Object.hasOwnProperty.call(message, "closePlayer"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.closePlayer);
            if (message.players != null && Object.hasOwnProperty.call(message, "players"))
                $root.game.Players.encode(message.players, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.newEntities != null && Object.hasOwnProperty.call(message, "newEntities"))
                $root.game.Entities.encode(message.newEntities, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.closeEntities != null && Object.hasOwnProperty.call(message, "closeEntities"))
                $root.game.CloseEntities.encode(message.closeEntities, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.areaInit != null && Object.hasOwnProperty.call(message, "areaInit"))
                $root.game.PackedArea.encode(message.areaInit, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.myself != null && Object.hasOwnProperty.call(message, "myself"))
                $root.game.PackedPlayer.encode(message.myself, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.updateEntities != null && Object.hasOwnProperty.call(message, "updateEntities"))
                $root.game.UpdateEntitiesMap.encode(message.updateEntities, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.updatePlayers != null && Object.hasOwnProperty.call(message, "updatePlayers"))
                $root.game.UpdatePlayersMap.encode(message.updatePlayers, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.chatMessage != null && Object.hasOwnProperty.call(message, "chatMessage"))
                $root.game.Chat.encode(message.chatMessage, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Package message, length delimited. Does not implicitly {@link game.Package.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Package
         * @static
         * @param {game.IPackage} message Package message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Package.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Package message from the specified reader or buffer.
         * @function decode
         * @memberof game.Package
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Package} Package
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Package.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Package();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.newPlayer = $root.game.PackedPlayer.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.closePlayer = reader.int64();
                        break;
                    }
                case 3: {
                        message.players = $root.game.Players.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.newEntities = $root.game.Entities.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.closeEntities = $root.game.CloseEntities.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.areaInit = $root.game.PackedArea.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.myself = $root.game.PackedPlayer.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.updateEntities = $root.game.UpdateEntitiesMap.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.updatePlayers = $root.game.UpdatePlayersMap.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.chatMessage = $root.game.Chat.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Package message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Package
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Package} Package
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Package.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Package message.
         * @function verify
         * @memberof game.Package
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Package.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.newPlayer != null && message.hasOwnProperty("newPlayer")) {
                properties.kind = 1;
                {
                    let error = $root.game.PackedPlayer.verify(message.newPlayer);
                    if (error)
                        return "newPlayer." + error;
                }
            }
            if (message.closePlayer != null && message.hasOwnProperty("closePlayer")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                if (!$util.isInteger(message.closePlayer) && !(message.closePlayer && $util.isInteger(message.closePlayer.low) && $util.isInteger(message.closePlayer.high)))
                    return "closePlayer: integer|Long expected";
            }
            if (message.players != null && message.hasOwnProperty("players")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.game.Players.verify(message.players);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.newEntities != null && message.hasOwnProperty("newEntities")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.game.Entities.verify(message.newEntities);
                    if (error)
                        return "newEntities." + error;
                }
            }
            if (message.closeEntities != null && message.hasOwnProperty("closeEntities")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.game.CloseEntities.verify(message.closeEntities);
                    if (error)
                        return "closeEntities." + error;
                }
            }
            if (message.areaInit != null && message.hasOwnProperty("areaInit")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.game.PackedArea.verify(message.areaInit);
                    if (error)
                        return "areaInit." + error;
                }
            }
            if (message.myself != null && message.hasOwnProperty("myself")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.game.PackedPlayer.verify(message.myself);
                    if (error)
                        return "myself." + error;
                }
            }
            if (message.updateEntities != null && message.hasOwnProperty("updateEntities")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.game.UpdateEntitiesMap.verify(message.updateEntities);
                    if (error)
                        return "updateEntities." + error;
                }
            }
            if (message.updatePlayers != null && message.hasOwnProperty("updatePlayers")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.game.UpdatePlayersMap.verify(message.updatePlayers);
                    if (error)
                        return "updatePlayers." + error;
                }
            }
            if (message.chatMessage != null && message.hasOwnProperty("chatMessage")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.game.Chat.verify(message.chatMessage);
                    if (error)
                        return "chatMessage." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Package message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Package
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Package} Package
         */
        Package.fromObject = function fromObject(object) {
            if (object instanceof $root.game.Package)
                return object;
            let message = new $root.game.Package();
            if (object.newPlayer != null) {
                if (typeof object.newPlayer !== "object")
                    throw TypeError(".game.Package.newPlayer: object expected");
                message.newPlayer = $root.game.PackedPlayer.fromObject(object.newPlayer);
            }
            if (object.closePlayer != null)
                if ($util.Long)
                    (message.closePlayer = $util.Long.fromValue(object.closePlayer)).unsigned = false;
                else if (typeof object.closePlayer === "string")
                    message.closePlayer = parseInt(object.closePlayer, 10);
                else if (typeof object.closePlayer === "number")
                    message.closePlayer = object.closePlayer;
                else if (typeof object.closePlayer === "object")
                    message.closePlayer = new $util.LongBits(object.closePlayer.low >>> 0, object.closePlayer.high >>> 0).toNumber();
            if (object.players != null) {
                if (typeof object.players !== "object")
                    throw TypeError(".game.Package.players: object expected");
                message.players = $root.game.Players.fromObject(object.players);
            }
            if (object.newEntities != null) {
                if (typeof object.newEntities !== "object")
                    throw TypeError(".game.Package.newEntities: object expected");
                message.newEntities = $root.game.Entities.fromObject(object.newEntities);
            }
            if (object.closeEntities != null) {
                if (typeof object.closeEntities !== "object")
                    throw TypeError(".game.Package.closeEntities: object expected");
                message.closeEntities = $root.game.CloseEntities.fromObject(object.closeEntities);
            }
            if (object.areaInit != null) {
                if (typeof object.areaInit !== "object")
                    throw TypeError(".game.Package.areaInit: object expected");
                message.areaInit = $root.game.PackedArea.fromObject(object.areaInit);
            }
            if (object.myself != null) {
                if (typeof object.myself !== "object")
                    throw TypeError(".game.Package.myself: object expected");
                message.myself = $root.game.PackedPlayer.fromObject(object.myself);
            }
            if (object.updateEntities != null) {
                if (typeof object.updateEntities !== "object")
                    throw TypeError(".game.Package.updateEntities: object expected");
                message.updateEntities = $root.game.UpdateEntitiesMap.fromObject(object.updateEntities);
            }
            if (object.updatePlayers != null) {
                if (typeof object.updatePlayers !== "object")
                    throw TypeError(".game.Package.updatePlayers: object expected");
                message.updatePlayers = $root.game.UpdatePlayersMap.fromObject(object.updatePlayers);
            }
            if (object.chatMessage != null) {
                if (typeof object.chatMessage !== "object")
                    throw TypeError(".game.Package.chatMessage: object expected");
                message.chatMessage = $root.game.Chat.fromObject(object.chatMessage);
            }
            return message;
        };

        /**
         * Creates a plain object from a Package message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Package
         * @static
         * @param {game.Package} message Package
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Package.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.newPlayer != null && message.hasOwnProperty("newPlayer")) {
                object.newPlayer = $root.game.PackedPlayer.toObject(message.newPlayer, options);
                if (options.oneofs)
                    object.kind = "newPlayer";
            }
            if (message.closePlayer != null && message.hasOwnProperty("closePlayer")) {
                if (typeof message.closePlayer === "number")
                    object.closePlayer = options.longs === String ? String(message.closePlayer) : message.closePlayer;
                else
                    object.closePlayer = options.longs === String ? $util.Long.prototype.toString.call(message.closePlayer) : options.longs === Number ? new $util.LongBits(message.closePlayer.low >>> 0, message.closePlayer.high >>> 0).toNumber() : message.closePlayer;
                if (options.oneofs)
                    object.kind = "closePlayer";
            }
            if (message.players != null && message.hasOwnProperty("players")) {
                object.players = $root.game.Players.toObject(message.players, options);
                if (options.oneofs)
                    object.kind = "players";
            }
            if (message.newEntities != null && message.hasOwnProperty("newEntities")) {
                object.newEntities = $root.game.Entities.toObject(message.newEntities, options);
                if (options.oneofs)
                    object.kind = "newEntities";
            }
            if (message.closeEntities != null && message.hasOwnProperty("closeEntities")) {
                object.closeEntities = $root.game.CloseEntities.toObject(message.closeEntities, options);
                if (options.oneofs)
                    object.kind = "closeEntities";
            }
            if (message.areaInit != null && message.hasOwnProperty("areaInit")) {
                object.areaInit = $root.game.PackedArea.toObject(message.areaInit, options);
                if (options.oneofs)
                    object.kind = "areaInit";
            }
            if (message.myself != null && message.hasOwnProperty("myself")) {
                object.myself = $root.game.PackedPlayer.toObject(message.myself, options);
                if (options.oneofs)
                    object.kind = "myself";
            }
            if (message.updateEntities != null && message.hasOwnProperty("updateEntities")) {
                object.updateEntities = $root.game.UpdateEntitiesMap.toObject(message.updateEntities, options);
                if (options.oneofs)
                    object.kind = "updateEntities";
            }
            if (message.updatePlayers != null && message.hasOwnProperty("updatePlayers")) {
                object.updatePlayers = $root.game.UpdatePlayersMap.toObject(message.updatePlayers, options);
                if (options.oneofs)
                    object.kind = "updatePlayers";
            }
            if (message.chatMessage != null && message.hasOwnProperty("chatMessage")) {
                object.chatMessage = $root.game.Chat.toObject(message.chatMessage, options);
                if (options.oneofs)
                    object.kind = "chatMessage";
            }
            return object;
        };

        /**
         * Converts this Package to JSON.
         * @function toJSON
         * @memberof game.Package
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Package.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Package
         * @function getTypeUrl
         * @memberof game.Package
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Package.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.Package";
        };

        return Package;
    })();

    game.Packages = (function() {

        /**
         * Properties of a Packages.
         * @memberof game
         * @interface IPackages
         * @property {Array.<game.IPackage>|null} [items] Packages items
         */

        /**
         * Constructs a new Packages.
         * @memberof game
         * @classdesc Represents a Packages.
         * @implements IPackages
         * @constructor
         * @param {game.IPackages=} [properties] Properties to set
         */
        function Packages(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Packages items.
         * @member {Array.<game.IPackage>} items
         * @memberof game.Packages
         * @instance
         */
        Packages.prototype.items = $util.emptyArray;

        /**
         * Creates a new Packages instance using the specified properties.
         * @function create
         * @memberof game.Packages
         * @static
         * @param {game.IPackages=} [properties] Properties to set
         * @returns {game.Packages} Packages instance
         */
        Packages.create = function create(properties) {
            return new Packages(properties);
        };

        /**
         * Encodes the specified Packages message. Does not implicitly {@link game.Packages.verify|verify} messages.
         * @function encode
         * @memberof game.Packages
         * @static
         * @param {game.IPackages} message Packages message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Packages.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.game.Package.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Packages message, length delimited. Does not implicitly {@link game.Packages.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Packages
         * @static
         * @param {game.IPackages} message Packages message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Packages.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Packages message from the specified reader or buffer.
         * @function decode
         * @memberof game.Packages
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Packages} Packages
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Packages.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Packages();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.game.Package.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Packages message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Packages
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Packages} Packages
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Packages.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Packages message.
         * @function verify
         * @memberof game.Packages
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Packages.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (let i = 0; i < message.items.length; ++i) {
                    let error = $root.game.Package.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Packages message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Packages
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Packages} Packages
         */
        Packages.fromObject = function fromObject(object) {
            if (object instanceof $root.game.Packages)
                return object;
            let message = new $root.game.Packages();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".game.Packages.items: array expected");
                message.items = [];
                for (let i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".game.Packages.items: object expected");
                    message.items[i] = $root.game.Package.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Packages message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Packages
         * @static
         * @param {game.Packages} message Packages
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Packages.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (let j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.game.Package.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this Packages to JSON.
         * @function toJSON
         * @memberof game.Packages
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Packages.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Packages
         * @function getTypeUrl
         * @memberof game.Packages
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Packages.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.Packages";
        };

        return Packages;
    })();

    game.Players = (function() {

        /**
         * Properties of a Players.
         * @memberof game
         * @interface IPlayers
         * @property {Object.<string,game.IPackedPlayer>|null} [players] Players players
         */

        /**
         * Constructs a new Players.
         * @memberof game
         * @classdesc Represents a Players.
         * @implements IPlayers
         * @constructor
         * @param {game.IPlayers=} [properties] Properties to set
         */
        function Players(properties) {
            this.players = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Players players.
         * @member {Object.<string,game.IPackedPlayer>} players
         * @memberof game.Players
         * @instance
         */
        Players.prototype.players = $util.emptyObject;

        /**
         * Creates a new Players instance using the specified properties.
         * @function create
         * @memberof game.Players
         * @static
         * @param {game.IPlayers=} [properties] Properties to set
         * @returns {game.Players} Players instance
         */
        Players.create = function create(properties) {
            return new Players(properties);
        };

        /**
         * Encodes the specified Players message. Does not implicitly {@link game.Players.verify|verify} messages.
         * @function encode
         * @memberof game.Players
         * @static
         * @param {game.IPlayers} message Players message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Players.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.players != null && Object.hasOwnProperty.call(message, "players"))
                for (let keys = Object.keys(message.players), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.game.PackedPlayer.encode(message.players[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified Players message, length delimited. Does not implicitly {@link game.Players.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Players
         * @static
         * @param {game.IPlayers} message Players message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Players.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Players message from the specified reader or buffer.
         * @function decode
         * @memberof game.Players
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Players} Players
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Players.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Players(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (message.players === $util.emptyObject)
                            message.players = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.uint32();
                                break;
                            case 2:
                                value = $root.game.PackedPlayer.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.players[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Players message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Players
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Players} Players
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Players.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Players message.
         * @function verify
         * @memberof game.Players
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Players.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!$util.isObject(message.players))
                    return "players: object expected";
                let key = Object.keys(message.players);
                for (let i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "players: integer key{k:uint32} expected";
                    {
                        let error = $root.game.PackedPlayer.verify(message.players[key[i]]);
                        if (error)
                            return "players." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a Players message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Players
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Players} Players
         */
        Players.fromObject = function fromObject(object) {
            if (object instanceof $root.game.Players)
                return object;
            let message = new $root.game.Players();
            if (object.players) {
                if (typeof object.players !== "object")
                    throw TypeError(".game.Players.players: object expected");
                message.players = {};
                for (let keys = Object.keys(object.players), i = 0; i < keys.length; ++i) {
                    if (typeof object.players[keys[i]] !== "object")
                        throw TypeError(".game.Players.players: object expected");
                    message.players[keys[i]] = $root.game.PackedPlayer.fromObject(object.players[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Players message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Players
         * @static
         * @param {game.Players} message Players
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Players.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.players = {};
            let keys2;
            if (message.players && (keys2 = Object.keys(message.players)).length) {
                object.players = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.players[keys2[j]] = $root.game.PackedPlayer.toObject(message.players[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this Players to JSON.
         * @function toJSON
         * @memberof game.Players
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Players.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Players
         * @function getTypeUrl
         * @memberof game.Players
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Players.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.Players";
        };

        return Players;
    })();

    game.Entities = (function() {

        /**
         * Properties of an Entities.
         * @memberof game
         * @interface IEntities
         * @property {Object.<string,game.IPackedEntity>|null} [entities] Entities entities
         */

        /**
         * Constructs a new Entities.
         * @memberof game
         * @classdesc Represents an Entities.
         * @implements IEntities
         * @constructor
         * @param {game.IEntities=} [properties] Properties to set
         */
        function Entities(properties) {
            this.entities = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Entities entities.
         * @member {Object.<string,game.IPackedEntity>} entities
         * @memberof game.Entities
         * @instance
         */
        Entities.prototype.entities = $util.emptyObject;

        /**
         * Creates a new Entities instance using the specified properties.
         * @function create
         * @memberof game.Entities
         * @static
         * @param {game.IEntities=} [properties] Properties to set
         * @returns {game.Entities} Entities instance
         */
        Entities.create = function create(properties) {
            return new Entities(properties);
        };

        /**
         * Encodes the specified Entities message. Does not implicitly {@link game.Entities.verify|verify} messages.
         * @function encode
         * @memberof game.Entities
         * @static
         * @param {game.IEntities} message Entities message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Entities.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.entities != null && Object.hasOwnProperty.call(message, "entities"))
                for (let keys = Object.keys(message.entities), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.game.PackedEntity.encode(message.entities[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified Entities message, length delimited. Does not implicitly {@link game.Entities.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Entities
         * @static
         * @param {game.IEntities} message Entities message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Entities.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Entities message from the specified reader or buffer.
         * @function decode
         * @memberof game.Entities
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Entities} Entities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Entities.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Entities(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (message.entities === $util.emptyObject)
                            message.entities = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.uint32();
                                break;
                            case 2:
                                value = $root.game.PackedEntity.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.entities[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Entities message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Entities
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Entities} Entities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Entities.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Entities message.
         * @function verify
         * @memberof game.Entities
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Entities.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.entities != null && message.hasOwnProperty("entities")) {
                if (!$util.isObject(message.entities))
                    return "entities: object expected";
                let key = Object.keys(message.entities);
                for (let i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "entities: integer key{k:uint32} expected";
                    {
                        let error = $root.game.PackedEntity.verify(message.entities[key[i]]);
                        if (error)
                            return "entities." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates an Entities message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Entities
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Entities} Entities
         */
        Entities.fromObject = function fromObject(object) {
            if (object instanceof $root.game.Entities)
                return object;
            let message = new $root.game.Entities();
            if (object.entities) {
                if (typeof object.entities !== "object")
                    throw TypeError(".game.Entities.entities: object expected");
                message.entities = {};
                for (let keys = Object.keys(object.entities), i = 0; i < keys.length; ++i) {
                    if (typeof object.entities[keys[i]] !== "object")
                        throw TypeError(".game.Entities.entities: object expected");
                    message.entities[keys[i]] = $root.game.PackedEntity.fromObject(object.entities[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an Entities message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Entities
         * @static
         * @param {game.Entities} message Entities
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Entities.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.entities = {};
            let keys2;
            if (message.entities && (keys2 = Object.keys(message.entities)).length) {
                object.entities = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.entities[keys2[j]] = $root.game.PackedEntity.toObject(message.entities[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this Entities to JSON.
         * @function toJSON
         * @memberof game.Entities
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Entities.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Entities
         * @function getTypeUrl
         * @memberof game.Entities
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Entities.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.Entities";
        };

        return Entities;
    })();

    game.CloseEntities = (function() {

        /**
         * Properties of a CloseEntities.
         * @memberof game
         * @interface ICloseEntities
         * @property {Array.<number>|null} [ids] CloseEntities ids
         */

        /**
         * Constructs a new CloseEntities.
         * @memberof game
         * @classdesc Represents a CloseEntities.
         * @implements ICloseEntities
         * @constructor
         * @param {game.ICloseEntities=} [properties] Properties to set
         */
        function CloseEntities(properties) {
            this.ids = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CloseEntities ids.
         * @member {Array.<number>} ids
         * @memberof game.CloseEntities
         * @instance
         */
        CloseEntities.prototype.ids = $util.emptyArray;

        /**
         * Creates a new CloseEntities instance using the specified properties.
         * @function create
         * @memberof game.CloseEntities
         * @static
         * @param {game.ICloseEntities=} [properties] Properties to set
         * @returns {game.CloseEntities} CloseEntities instance
         */
        CloseEntities.create = function create(properties) {
            return new CloseEntities(properties);
        };

        /**
         * Encodes the specified CloseEntities message. Does not implicitly {@link game.CloseEntities.verify|verify} messages.
         * @function encode
         * @memberof game.CloseEntities
         * @static
         * @param {game.ICloseEntities} message CloseEntities message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CloseEntities.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ids != null && message.ids.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.ids.length; ++i)
                    writer.uint32(message.ids[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified CloseEntities message, length delimited. Does not implicitly {@link game.CloseEntities.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.CloseEntities
         * @static
         * @param {game.ICloseEntities} message CloseEntities message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CloseEntities.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CloseEntities message from the specified reader or buffer.
         * @function decode
         * @memberof game.CloseEntities
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.CloseEntities} CloseEntities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CloseEntities.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.CloseEntities();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.ids && message.ids.length))
                            message.ids = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.ids.push(reader.uint32());
                        } else
                            message.ids.push(reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CloseEntities message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.CloseEntities
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.CloseEntities} CloseEntities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CloseEntities.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CloseEntities message.
         * @function verify
         * @memberof game.CloseEntities
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CloseEntities.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ids != null && message.hasOwnProperty("ids")) {
                if (!Array.isArray(message.ids))
                    return "ids: array expected";
                for (let i = 0; i < message.ids.length; ++i)
                    if (!$util.isInteger(message.ids[i]))
                        return "ids: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a CloseEntities message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.CloseEntities
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.CloseEntities} CloseEntities
         */
        CloseEntities.fromObject = function fromObject(object) {
            if (object instanceof $root.game.CloseEntities)
                return object;
            let message = new $root.game.CloseEntities();
            if (object.ids) {
                if (!Array.isArray(object.ids))
                    throw TypeError(".game.CloseEntities.ids: array expected");
                message.ids = [];
                for (let i = 0; i < object.ids.length; ++i)
                    message.ids[i] = object.ids[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a CloseEntities message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.CloseEntities
         * @static
         * @param {game.CloseEntities} message CloseEntities
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CloseEntities.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.ids = [];
            if (message.ids && message.ids.length) {
                object.ids = [];
                for (let j = 0; j < message.ids.length; ++j)
                    object.ids[j] = message.ids[j];
            }
            return object;
        };

        /**
         * Converts this CloseEntities to JSON.
         * @function toJSON
         * @memberof game.CloseEntities
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CloseEntities.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CloseEntities
         * @function getTypeUrl
         * @memberof game.CloseEntities
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CloseEntities.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.CloseEntities";
        };

        return CloseEntities;
    })();

    game.UpdateEntitiesMap = (function() {

        /**
         * Properties of an UpdateEntitiesMap.
         * @memberof game
         * @interface IUpdateEntitiesMap
         * @property {Object.<string,game.IPartialEntity>|null} [items] UpdateEntitiesMap items
         */

        /**
         * Constructs a new UpdateEntitiesMap.
         * @memberof game
         * @classdesc Represents an UpdateEntitiesMap.
         * @implements IUpdateEntitiesMap
         * @constructor
         * @param {game.IUpdateEntitiesMap=} [properties] Properties to set
         */
        function UpdateEntitiesMap(properties) {
            this.items = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateEntitiesMap items.
         * @member {Object.<string,game.IPartialEntity>} items
         * @memberof game.UpdateEntitiesMap
         * @instance
         */
        UpdateEntitiesMap.prototype.items = $util.emptyObject;

        /**
         * Creates a new UpdateEntitiesMap instance using the specified properties.
         * @function create
         * @memberof game.UpdateEntitiesMap
         * @static
         * @param {game.IUpdateEntitiesMap=} [properties] Properties to set
         * @returns {game.UpdateEntitiesMap} UpdateEntitiesMap instance
         */
        UpdateEntitiesMap.create = function create(properties) {
            return new UpdateEntitiesMap(properties);
        };

        /**
         * Encodes the specified UpdateEntitiesMap message. Does not implicitly {@link game.UpdateEntitiesMap.verify|verify} messages.
         * @function encode
         * @memberof game.UpdateEntitiesMap
         * @static
         * @param {game.IUpdateEntitiesMap} message UpdateEntitiesMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateEntitiesMap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && Object.hasOwnProperty.call(message, "items"))
                for (let keys = Object.keys(message.items), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.game.PartialEntity.encode(message.items[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified UpdateEntitiesMap message, length delimited. Does not implicitly {@link game.UpdateEntitiesMap.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.UpdateEntitiesMap
         * @static
         * @param {game.IUpdateEntitiesMap} message UpdateEntitiesMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateEntitiesMap.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateEntitiesMap message from the specified reader or buffer.
         * @function decode
         * @memberof game.UpdateEntitiesMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.UpdateEntitiesMap} UpdateEntitiesMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateEntitiesMap.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.UpdateEntitiesMap(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (message.items === $util.emptyObject)
                            message.items = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.uint32();
                                break;
                            case 2:
                                value = $root.game.PartialEntity.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.items[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateEntitiesMap message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.UpdateEntitiesMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.UpdateEntitiesMap} UpdateEntitiesMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateEntitiesMap.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateEntitiesMap message.
         * @function verify
         * @memberof game.UpdateEntitiesMap
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateEntitiesMap.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!$util.isObject(message.items))
                    return "items: object expected";
                let key = Object.keys(message.items);
                for (let i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "items: integer key{k:uint32} expected";
                    {
                        let error = $root.game.PartialEntity.verify(message.items[key[i]]);
                        if (error)
                            return "items." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates an UpdateEntitiesMap message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.UpdateEntitiesMap
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.UpdateEntitiesMap} UpdateEntitiesMap
         */
        UpdateEntitiesMap.fromObject = function fromObject(object) {
            if (object instanceof $root.game.UpdateEntitiesMap)
                return object;
            let message = new $root.game.UpdateEntitiesMap();
            if (object.items) {
                if (typeof object.items !== "object")
                    throw TypeError(".game.UpdateEntitiesMap.items: object expected");
                message.items = {};
                for (let keys = Object.keys(object.items), i = 0; i < keys.length; ++i) {
                    if (typeof object.items[keys[i]] !== "object")
                        throw TypeError(".game.UpdateEntitiesMap.items: object expected");
                    message.items[keys[i]] = $root.game.PartialEntity.fromObject(object.items[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateEntitiesMap message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.UpdateEntitiesMap
         * @static
         * @param {game.UpdateEntitiesMap} message UpdateEntitiesMap
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateEntitiesMap.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.items = {};
            let keys2;
            if (message.items && (keys2 = Object.keys(message.items)).length) {
                object.items = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.items[keys2[j]] = $root.game.PartialEntity.toObject(message.items[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this UpdateEntitiesMap to JSON.
         * @function toJSON
         * @memberof game.UpdateEntitiesMap
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateEntitiesMap.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateEntitiesMap
         * @function getTypeUrl
         * @memberof game.UpdateEntitiesMap
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateEntitiesMap.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.UpdateEntitiesMap";
        };

        return UpdateEntitiesMap;
    })();

    game.UpdatePlayersMap = (function() {

        /**
         * Properties of an UpdatePlayersMap.
         * @memberof game
         * @interface IUpdatePlayersMap
         * @property {Object.<string,game.IPartialPlayer>|null} [items] UpdatePlayersMap items
         */

        /**
         * Constructs a new UpdatePlayersMap.
         * @memberof game
         * @classdesc Represents an UpdatePlayersMap.
         * @implements IUpdatePlayersMap
         * @constructor
         * @param {game.IUpdatePlayersMap=} [properties] Properties to set
         */
        function UpdatePlayersMap(properties) {
            this.items = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdatePlayersMap items.
         * @member {Object.<string,game.IPartialPlayer>} items
         * @memberof game.UpdatePlayersMap
         * @instance
         */
        UpdatePlayersMap.prototype.items = $util.emptyObject;

        /**
         * Creates a new UpdatePlayersMap instance using the specified properties.
         * @function create
         * @memberof game.UpdatePlayersMap
         * @static
         * @param {game.IUpdatePlayersMap=} [properties] Properties to set
         * @returns {game.UpdatePlayersMap} UpdatePlayersMap instance
         */
        UpdatePlayersMap.create = function create(properties) {
            return new UpdatePlayersMap(properties);
        };

        /**
         * Encodes the specified UpdatePlayersMap message. Does not implicitly {@link game.UpdatePlayersMap.verify|verify} messages.
         * @function encode
         * @memberof game.UpdatePlayersMap
         * @static
         * @param {game.IUpdatePlayersMap} message UpdatePlayersMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdatePlayersMap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && Object.hasOwnProperty.call(message, "items"))
                for (let keys = Object.keys(message.items), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.game.PartialPlayer.encode(message.items[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified UpdatePlayersMap message, length delimited. Does not implicitly {@link game.UpdatePlayersMap.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.UpdatePlayersMap
         * @static
         * @param {game.IUpdatePlayersMap} message UpdatePlayersMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdatePlayersMap.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdatePlayersMap message from the specified reader or buffer.
         * @function decode
         * @memberof game.UpdatePlayersMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.UpdatePlayersMap} UpdatePlayersMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdatePlayersMap.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.UpdatePlayersMap(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (message.items === $util.emptyObject)
                            message.items = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.uint32();
                                break;
                            case 2:
                                value = $root.game.PartialPlayer.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.items[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdatePlayersMap message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.UpdatePlayersMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.UpdatePlayersMap} UpdatePlayersMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdatePlayersMap.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdatePlayersMap message.
         * @function verify
         * @memberof game.UpdatePlayersMap
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdatePlayersMap.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!$util.isObject(message.items))
                    return "items: object expected";
                let key = Object.keys(message.items);
                for (let i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "items: integer key{k:uint32} expected";
                    {
                        let error = $root.game.PartialPlayer.verify(message.items[key[i]]);
                        if (error)
                            return "items." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates an UpdatePlayersMap message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.UpdatePlayersMap
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.UpdatePlayersMap} UpdatePlayersMap
         */
        UpdatePlayersMap.fromObject = function fromObject(object) {
            if (object instanceof $root.game.UpdatePlayersMap)
                return object;
            let message = new $root.game.UpdatePlayersMap();
            if (object.items) {
                if (typeof object.items !== "object")
                    throw TypeError(".game.UpdatePlayersMap.items: object expected");
                message.items = {};
                for (let keys = Object.keys(object.items), i = 0; i < keys.length; ++i) {
                    if (typeof object.items[keys[i]] !== "object")
                        throw TypeError(".game.UpdatePlayersMap.items: object expected");
                    message.items[keys[i]] = $root.game.PartialPlayer.fromObject(object.items[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdatePlayersMap message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.UpdatePlayersMap
         * @static
         * @param {game.UpdatePlayersMap} message UpdatePlayersMap
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdatePlayersMap.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.items = {};
            let keys2;
            if (message.items && (keys2 = Object.keys(message.items)).length) {
                object.items = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.items[keys2[j]] = $root.game.PartialPlayer.toObject(message.items[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this UpdatePlayersMap to JSON.
         * @function toJSON
         * @memberof game.UpdatePlayersMap
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdatePlayersMap.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdatePlayersMap
         * @function getTypeUrl
         * @memberof game.UpdatePlayersMap
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdatePlayersMap.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.UpdatePlayersMap";
        };

        return UpdatePlayersMap;
    })();

    return game;
})();

export const http = $root.http = (() => {

    /**
     * Namespace http.
     * @exports http
     * @namespace
     */
    const http = {};

    /**
     * AccountRole enum.
     * @name http.AccountRole
     * @enum {number}
     * @property {number} USER=0 USER value
     * @property {number} MOD=1 MOD value
     * @property {number} DEV=2 DEV value
     * @property {number} ADMIN=3 ADMIN value
     */
    http.AccountRole = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "USER"] = 0;
        values[valuesById[1] = "MOD"] = 1;
        values[valuesById[2] = "DEV"] = 2;
        values[valuesById[3] = "ADMIN"] = 3;
        return values;
    })();

    /**
     * ResponseStatus enum.
     * @name http.ResponseStatus
     * @enum {number}
     * @property {number} Ok=1 Ok value
     * @property {number} InternalError=2 InternalError value
     * @property {number} InvalidBody=3 InvalidBody value
     * @property {number} NotFound=4 NotFound value
     * @property {number} VerificationFailure=5 VerificationFailure value
     * @property {number} NotAuthenticated=6 NotAuthenticated value
     * @property {number} AccountExists=7 AccountExists value
     * @property {number} AccountNotExists=8 AccountNotExists value
     * @property {number} WrongPassword=9 WrongPassword value
     */
    http.ResponseStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "Ok"] = 1;
        values[valuesById[2] = "InternalError"] = 2;
        values[valuesById[3] = "InvalidBody"] = 3;
        values[valuesById[4] = "NotFound"] = 4;
        values[valuesById[5] = "VerificationFailure"] = 5;
        values[valuesById[6] = "NotAuthenticated"] = 6;
        values[valuesById[7] = "AccountExists"] = 7;
        values[valuesById[8] = "AccountNotExists"] = 8;
        values[valuesById[9] = "WrongPassword"] = 9;
        return values;
    })();

    http.Profile = (function() {

        /**
         * Properties of a Profile.
         * @memberof http
         * @interface IProfile
         * @property {number|null} [vp] Profile vp
         * @property {string|null} [username] Profile username
         * @property {Object.<string,string>|null} [highest] Profile highest
         * @property {Array.<string>|null} [accessories] Profile accessories
         * @property {http.AccountRole|null} [role] Profile role
         */

        /**
         * Constructs a new Profile.
         * @memberof http
         * @classdesc Represents a Profile.
         * @implements IProfile
         * @constructor
         * @param {http.IProfile=} [properties] Properties to set
         */
        function Profile(properties) {
            this.highest = {};
            this.accessories = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Profile vp.
         * @member {number} vp
         * @memberof http.Profile
         * @instance
         */
        Profile.prototype.vp = 0;

        /**
         * Profile username.
         * @member {string} username
         * @memberof http.Profile
         * @instance
         */
        Profile.prototype.username = "";

        /**
         * Profile highest.
         * @member {Object.<string,string>} highest
         * @memberof http.Profile
         * @instance
         */
        Profile.prototype.highest = $util.emptyObject;

        /**
         * Profile accessories.
         * @member {Array.<string>} accessories
         * @memberof http.Profile
         * @instance
         */
        Profile.prototype.accessories = $util.emptyArray;

        /**
         * Profile role.
         * @member {http.AccountRole} role
         * @memberof http.Profile
         * @instance
         */
        Profile.prototype.role = 0;

        /**
         * Creates a new Profile instance using the specified properties.
         * @function create
         * @memberof http.Profile
         * @static
         * @param {http.IProfile=} [properties] Properties to set
         * @returns {http.Profile} Profile instance
         */
        Profile.create = function create(properties) {
            return new Profile(properties);
        };

        /**
         * Encodes the specified Profile message. Does not implicitly {@link http.Profile.verify|verify} messages.
         * @function encode
         * @memberof http.Profile
         * @static
         * @param {http.IProfile} message Profile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Profile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vp != null && Object.hasOwnProperty.call(message, "vp"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.vp);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            if (message.highest != null && Object.hasOwnProperty.call(message, "highest"))
                for (let keys = Object.keys(message.highest), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.highest[keys[i]]).ldelim();
            if (message.accessories != null && message.accessories.length)
                for (let i = 0; i < message.accessories.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.accessories[i]);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.role);
            return writer;
        };

        /**
         * Encodes the specified Profile message, length delimited. Does not implicitly {@link http.Profile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.Profile
         * @static
         * @param {http.IProfile} message Profile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Profile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Profile message from the specified reader or buffer.
         * @function decode
         * @memberof http.Profile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.Profile} Profile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Profile.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.http.Profile(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.vp = reader.uint32();
                        break;
                    }
                case 2: {
                        message.username = reader.string();
                        break;
                    }
                case 3: {
                        if (message.highest === $util.emptyObject)
                            message.highest = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.highest[key] = value;
                        break;
                    }
                case 4: {
                        if (!(message.accessories && message.accessories.length))
                            message.accessories = [];
                        message.accessories.push(reader.string());
                        break;
                    }
                case 5: {
                        message.role = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Profile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.Profile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.Profile} Profile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Profile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Profile message.
         * @function verify
         * @memberof http.Profile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Profile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.vp != null && message.hasOwnProperty("vp"))
                if (!$util.isInteger(message.vp))
                    return "vp: integer expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.highest != null && message.hasOwnProperty("highest")) {
                if (!$util.isObject(message.highest))
                    return "highest: object expected";
                let key = Object.keys(message.highest);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.highest[key[i]]))
                        return "highest: string{k:string} expected";
            }
            if (message.accessories != null && message.hasOwnProperty("accessories")) {
                if (!Array.isArray(message.accessories))
                    return "accessories: array expected";
                for (let i = 0; i < message.accessories.length; ++i)
                    if (!$util.isString(message.accessories[i]))
                        return "accessories: string[] expected";
            }
            if (message.role != null && message.hasOwnProperty("role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a Profile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof http.Profile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {http.Profile} Profile
         */
        Profile.fromObject = function fromObject(object) {
            if (object instanceof $root.http.Profile)
                return object;
            let message = new $root.http.Profile();
            if (object.vp != null)
                message.vp = object.vp >>> 0;
            if (object.username != null)
                message.username = String(object.username);
            if (object.highest) {
                if (typeof object.highest !== "object")
                    throw TypeError(".http.Profile.highest: object expected");
                message.highest = {};
                for (let keys = Object.keys(object.highest), i = 0; i < keys.length; ++i)
                    message.highest[keys[i]] = String(object.highest[keys[i]]);
            }
            if (object.accessories) {
                if (!Array.isArray(object.accessories))
                    throw TypeError(".http.Profile.accessories: array expected");
                message.accessories = [];
                for (let i = 0; i < object.accessories.length; ++i)
                    message.accessories[i] = String(object.accessories[i]);
            }
            switch (object.role) {
            default:
                if (typeof object.role === "number") {
                    message.role = object.role;
                    break;
                }
                break;
            case "USER":
            case 0:
                message.role = 0;
                break;
            case "MOD":
            case 1:
                message.role = 1;
                break;
            case "DEV":
            case 2:
                message.role = 2;
                break;
            case "ADMIN":
            case 3:
                message.role = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Profile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof http.Profile
         * @static
         * @param {http.Profile} message Profile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Profile.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.accessories = [];
            if (options.objects || options.defaults)
                object.highest = {};
            if (options.defaults) {
                object.vp = 0;
                object.username = "";
                object.role = options.enums === String ? "USER" : 0;
            }
            if (message.vp != null && message.hasOwnProperty("vp"))
                object.vp = message.vp;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            let keys2;
            if (message.highest && (keys2 = Object.keys(message.highest)).length) {
                object.highest = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.highest[keys2[j]] = message.highest[keys2[j]];
            }
            if (message.accessories && message.accessories.length) {
                object.accessories = [];
                for (let j = 0; j < message.accessories.length; ++j)
                    object.accessories[j] = message.accessories[j];
            }
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = options.enums === String ? $root.http.AccountRole[message.role] === undefined ? message.role : $root.http.AccountRole[message.role] : message.role;
            return object;
        };

        /**
         * Converts this Profile to JSON.
         * @function toJSON
         * @memberof http.Profile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Profile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Profile
         * @function getTypeUrl
         * @memberof http.Profile
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Profile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/http.Profile";
        };

        return Profile;
    })();

    http.LoginAndRegisterResponse = (function() {

        /**
         * Properties of a LoginAndRegisterResponse.
         * @memberof http
         * @interface ILoginAndRegisterResponse
         * @property {http.ResponseStatus|null} [status] LoginAndRegisterResponse status
         * @property {string|null} [token] LoginAndRegisterResponse token
         * @property {http.IProfile|null} [profile] LoginAndRegisterResponse profile
         */

        /**
         * Constructs a new LoginAndRegisterResponse.
         * @memberof http
         * @classdesc Represents a LoginAndRegisterResponse.
         * @implements ILoginAndRegisterResponse
         * @constructor
         * @param {http.ILoginAndRegisterResponse=} [properties] Properties to set
         */
        function LoginAndRegisterResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginAndRegisterResponse status.
         * @member {http.ResponseStatus} status
         * @memberof http.LoginAndRegisterResponse
         * @instance
         */
        LoginAndRegisterResponse.prototype.status = 1;

        /**
         * LoginAndRegisterResponse token.
         * @member {string|null|undefined} token
         * @memberof http.LoginAndRegisterResponse
         * @instance
         */
        LoginAndRegisterResponse.prototype.token = null;

        /**
         * LoginAndRegisterResponse profile.
         * @member {http.IProfile|null|undefined} profile
         * @memberof http.LoginAndRegisterResponse
         * @instance
         */
        LoginAndRegisterResponse.prototype.profile = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LoginAndRegisterResponse.prototype, "_token", {
            get: $util.oneOfGetter($oneOfFields = ["token"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LoginAndRegisterResponse.prototype, "_profile", {
            get: $util.oneOfGetter($oneOfFields = ["profile"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new LoginAndRegisterResponse instance using the specified properties.
         * @function create
         * @memberof http.LoginAndRegisterResponse
         * @static
         * @param {http.ILoginAndRegisterResponse=} [properties] Properties to set
         * @returns {http.LoginAndRegisterResponse} LoginAndRegisterResponse instance
         */
        LoginAndRegisterResponse.create = function create(properties) {
            return new LoginAndRegisterResponse(properties);
        };

        /**
         * Encodes the specified LoginAndRegisterResponse message. Does not implicitly {@link http.LoginAndRegisterResponse.verify|verify} messages.
         * @function encode
         * @memberof http.LoginAndRegisterResponse
         * @static
         * @param {http.ILoginAndRegisterResponse} message LoginAndRegisterResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginAndRegisterResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            if (message.profile != null && Object.hasOwnProperty.call(message, "profile"))
                $root.http.Profile.encode(message.profile, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LoginAndRegisterResponse message, length delimited. Does not implicitly {@link http.LoginAndRegisterResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.LoginAndRegisterResponse
         * @static
         * @param {http.ILoginAndRegisterResponse} message LoginAndRegisterResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginAndRegisterResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginAndRegisterResponse message from the specified reader or buffer.
         * @function decode
         * @memberof http.LoginAndRegisterResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.LoginAndRegisterResponse} LoginAndRegisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginAndRegisterResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.http.LoginAndRegisterResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.int32();
                        break;
                    }
                case 2: {
                        message.token = reader.string();
                        break;
                    }
                case 3: {
                        message.profile = $root.http.Profile.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginAndRegisterResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.LoginAndRegisterResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.LoginAndRegisterResponse} LoginAndRegisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginAndRegisterResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginAndRegisterResponse message.
         * @function verify
         * @memberof http.LoginAndRegisterResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginAndRegisterResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            if (message.token != null && message.hasOwnProperty("token")) {
                properties._token = 1;
                if (!$util.isString(message.token))
                    return "token: string expected";
            }
            if (message.profile != null && message.hasOwnProperty("profile")) {
                properties._profile = 1;
                {
                    let error = $root.http.Profile.verify(message.profile);
                    if (error)
                        return "profile." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LoginAndRegisterResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof http.LoginAndRegisterResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {http.LoginAndRegisterResponse} LoginAndRegisterResponse
         */
        LoginAndRegisterResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.http.LoginAndRegisterResponse)
                return object;
            let message = new $root.http.LoginAndRegisterResponse();
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "Ok":
            case 1:
                message.status = 1;
                break;
            case "InternalError":
            case 2:
                message.status = 2;
                break;
            case "InvalidBody":
            case 3:
                message.status = 3;
                break;
            case "NotFound":
            case 4:
                message.status = 4;
                break;
            case "VerificationFailure":
            case 5:
                message.status = 5;
                break;
            case "NotAuthenticated":
            case 6:
                message.status = 6;
                break;
            case "AccountExists":
            case 7:
                message.status = 7;
                break;
            case "AccountNotExists":
            case 8:
                message.status = 8;
                break;
            case "WrongPassword":
            case 9:
                message.status = 9;
                break;
            }
            if (object.token != null)
                message.token = String(object.token);
            if (object.profile != null) {
                if (typeof object.profile !== "object")
                    throw TypeError(".http.LoginAndRegisterResponse.profile: object expected");
                message.profile = $root.http.Profile.fromObject(object.profile);
            }
            return message;
        };

        /**
         * Creates a plain object from a LoginAndRegisterResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof http.LoginAndRegisterResponse
         * @static
         * @param {http.LoginAndRegisterResponse} message LoginAndRegisterResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginAndRegisterResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.status = options.enums === String ? "Ok" : 1;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.http.ResponseStatus[message.status] === undefined ? message.status : $root.http.ResponseStatus[message.status] : message.status;
            if (message.token != null && message.hasOwnProperty("token")) {
                object.token = message.token;
                if (options.oneofs)
                    object._token = "token";
            }
            if (message.profile != null && message.hasOwnProperty("profile")) {
                object.profile = $root.http.Profile.toObject(message.profile, options);
                if (options.oneofs)
                    object._profile = "profile";
            }
            return object;
        };

        /**
         * Converts this LoginAndRegisterResponse to JSON.
         * @function toJSON
         * @memberof http.LoginAndRegisterResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginAndRegisterResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginAndRegisterResponse
         * @function getTypeUrl
         * @memberof http.LoginAndRegisterResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginAndRegisterResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/http.LoginAndRegisterResponse";
        };

        return LoginAndRegisterResponse;
    })();

    http.ProfileResponse = (function() {

        /**
         * Properties of a ProfileResponse.
         * @memberof http
         * @interface IProfileResponse
         * @property {http.ResponseStatus|null} [status] ProfileResponse status
         * @property {http.IProfile|null} [profile] ProfileResponse profile
         */

        /**
         * Constructs a new ProfileResponse.
         * @memberof http
         * @classdesc Represents a ProfileResponse.
         * @implements IProfileResponse
         * @constructor
         * @param {http.IProfileResponse=} [properties] Properties to set
         */
        function ProfileResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProfileResponse status.
         * @member {http.ResponseStatus} status
         * @memberof http.ProfileResponse
         * @instance
         */
        ProfileResponse.prototype.status = 1;

        /**
         * ProfileResponse profile.
         * @member {http.IProfile|null|undefined} profile
         * @memberof http.ProfileResponse
         * @instance
         */
        ProfileResponse.prototype.profile = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ProfileResponse.prototype, "_profile", {
            get: $util.oneOfGetter($oneOfFields = ["profile"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ProfileResponse instance using the specified properties.
         * @function create
         * @memberof http.ProfileResponse
         * @static
         * @param {http.IProfileResponse=} [properties] Properties to set
         * @returns {http.ProfileResponse} ProfileResponse instance
         */
        ProfileResponse.create = function create(properties) {
            return new ProfileResponse(properties);
        };

        /**
         * Encodes the specified ProfileResponse message. Does not implicitly {@link http.ProfileResponse.verify|verify} messages.
         * @function encode
         * @memberof http.ProfileResponse
         * @static
         * @param {http.IProfileResponse} message ProfileResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.profile != null && Object.hasOwnProperty.call(message, "profile"))
                $root.http.Profile.encode(message.profile, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ProfileResponse message, length delimited. Does not implicitly {@link http.ProfileResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.ProfileResponse
         * @static
         * @param {http.IProfileResponse} message ProfileResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProfileResponse message from the specified reader or buffer.
         * @function decode
         * @memberof http.ProfileResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.ProfileResponse} ProfileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.http.ProfileResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.int32();
                        break;
                    }
                case 2: {
                        message.profile = $root.http.Profile.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProfileResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.ProfileResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.ProfileResponse} ProfileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProfileResponse message.
         * @function verify
         * @memberof http.ProfileResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProfileResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            if (message.profile != null && message.hasOwnProperty("profile")) {
                properties._profile = 1;
                {
                    let error = $root.http.Profile.verify(message.profile);
                    if (error)
                        return "profile." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ProfileResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof http.ProfileResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {http.ProfileResponse} ProfileResponse
         */
        ProfileResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.http.ProfileResponse)
                return object;
            let message = new $root.http.ProfileResponse();
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "Ok":
            case 1:
                message.status = 1;
                break;
            case "InternalError":
            case 2:
                message.status = 2;
                break;
            case "InvalidBody":
            case 3:
                message.status = 3;
                break;
            case "NotFound":
            case 4:
                message.status = 4;
                break;
            case "VerificationFailure":
            case 5:
                message.status = 5;
                break;
            case "NotAuthenticated":
            case 6:
                message.status = 6;
                break;
            case "AccountExists":
            case 7:
                message.status = 7;
                break;
            case "AccountNotExists":
            case 8:
                message.status = 8;
                break;
            case "WrongPassword":
            case 9:
                message.status = 9;
                break;
            }
            if (object.profile != null) {
                if (typeof object.profile !== "object")
                    throw TypeError(".http.ProfileResponse.profile: object expected");
                message.profile = $root.http.Profile.fromObject(object.profile);
            }
            return message;
        };

        /**
         * Creates a plain object from a ProfileResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof http.ProfileResponse
         * @static
         * @param {http.ProfileResponse} message ProfileResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProfileResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.status = options.enums === String ? "Ok" : 1;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.http.ResponseStatus[message.status] === undefined ? message.status : $root.http.ResponseStatus[message.status] : message.status;
            if (message.profile != null && message.hasOwnProperty("profile")) {
                object.profile = $root.http.Profile.toObject(message.profile, options);
                if (options.oneofs)
                    object._profile = "profile";
            }
            return object;
        };

        /**
         * Converts this ProfileResponse to JSON.
         * @function toJSON
         * @memberof http.ProfileResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProfileResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProfileResponse
         * @function getTypeUrl
         * @memberof http.ProfileResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProfileResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/http.ProfileResponse";
        };

        return ProfileResponse;
    })();

    http.AuthResponse = (function() {

        /**
         * Properties of an AuthResponse.
         * @memberof http
         * @interface IAuthResponse
         * @property {http.ResponseStatus|null} [status] AuthResponse status
         * @property {http.IProfile|null} [profile] AuthResponse profile
         */

        /**
         * Constructs a new AuthResponse.
         * @memberof http
         * @classdesc Represents an AuthResponse.
         * @implements IAuthResponse
         * @constructor
         * @param {http.IAuthResponse=} [properties] Properties to set
         */
        function AuthResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthResponse status.
         * @member {http.ResponseStatus} status
         * @memberof http.AuthResponse
         * @instance
         */
        AuthResponse.prototype.status = 1;

        /**
         * AuthResponse profile.
         * @member {http.IProfile|null|undefined} profile
         * @memberof http.AuthResponse
         * @instance
         */
        AuthResponse.prototype.profile = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AuthResponse.prototype, "_profile", {
            get: $util.oneOfGetter($oneOfFields = ["profile"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AuthResponse instance using the specified properties.
         * @function create
         * @memberof http.AuthResponse
         * @static
         * @param {http.IAuthResponse=} [properties] Properties to set
         * @returns {http.AuthResponse} AuthResponse instance
         */
        AuthResponse.create = function create(properties) {
            return new AuthResponse(properties);
        };

        /**
         * Encodes the specified AuthResponse message. Does not implicitly {@link http.AuthResponse.verify|verify} messages.
         * @function encode
         * @memberof http.AuthResponse
         * @static
         * @param {http.IAuthResponse} message AuthResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.profile != null && Object.hasOwnProperty.call(message, "profile"))
                $root.http.Profile.encode(message.profile, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AuthResponse message, length delimited. Does not implicitly {@link http.AuthResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.AuthResponse
         * @static
         * @param {http.IAuthResponse} message AuthResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthResponse message from the specified reader or buffer.
         * @function decode
         * @memberof http.AuthResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.AuthResponse} AuthResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.http.AuthResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.int32();
                        break;
                    }
                case 2: {
                        message.profile = $root.http.Profile.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AuthResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.AuthResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.AuthResponse} AuthResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthResponse message.
         * @function verify
         * @memberof http.AuthResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            if (message.profile != null && message.hasOwnProperty("profile")) {
                properties._profile = 1;
                {
                    let error = $root.http.Profile.verify(message.profile);
                    if (error)
                        return "profile." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AuthResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof http.AuthResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {http.AuthResponse} AuthResponse
         */
        AuthResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.http.AuthResponse)
                return object;
            let message = new $root.http.AuthResponse();
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "Ok":
            case 1:
                message.status = 1;
                break;
            case "InternalError":
            case 2:
                message.status = 2;
                break;
            case "InvalidBody":
            case 3:
                message.status = 3;
                break;
            case "NotFound":
            case 4:
                message.status = 4;
                break;
            case "VerificationFailure":
            case 5:
                message.status = 5;
                break;
            case "NotAuthenticated":
            case 6:
                message.status = 6;
                break;
            case "AccountExists":
            case 7:
                message.status = 7;
                break;
            case "AccountNotExists":
            case 8:
                message.status = 8;
                break;
            case "WrongPassword":
            case 9:
                message.status = 9;
                break;
            }
            if (object.profile != null) {
                if (typeof object.profile !== "object")
                    throw TypeError(".http.AuthResponse.profile: object expected");
                message.profile = $root.http.Profile.fromObject(object.profile);
            }
            return message;
        };

        /**
         * Creates a plain object from an AuthResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof http.AuthResponse
         * @static
         * @param {http.AuthResponse} message AuthResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.status = options.enums === String ? "Ok" : 1;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.http.ResponseStatus[message.status] === undefined ? message.status : $root.http.ResponseStatus[message.status] : message.status;
            if (message.profile != null && message.hasOwnProperty("profile")) {
                object.profile = $root.http.Profile.toObject(message.profile, options);
                if (options.oneofs)
                    object._profile = "profile";
            }
            return object;
        };

        /**
         * Converts this AuthResponse to JSON.
         * @function toJSON
         * @memberof http.AuthResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AuthResponse
         * @function getTypeUrl
         * @memberof http.AuthResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AuthResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/http.AuthResponse";
        };

        return AuthResponse;
    })();

    http.LogoutResponse = (function() {

        /**
         * Properties of a LogoutResponse.
         * @memberof http
         * @interface ILogoutResponse
         * @property {http.ResponseStatus|null} [status] LogoutResponse status
         */

        /**
         * Constructs a new LogoutResponse.
         * @memberof http
         * @classdesc Represents a LogoutResponse.
         * @implements ILogoutResponse
         * @constructor
         * @param {http.ILogoutResponse=} [properties] Properties to set
         */
        function LogoutResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LogoutResponse status.
         * @member {http.ResponseStatus} status
         * @memberof http.LogoutResponse
         * @instance
         */
        LogoutResponse.prototype.status = 1;

        /**
         * Creates a new LogoutResponse instance using the specified properties.
         * @function create
         * @memberof http.LogoutResponse
         * @static
         * @param {http.ILogoutResponse=} [properties] Properties to set
         * @returns {http.LogoutResponse} LogoutResponse instance
         */
        LogoutResponse.create = function create(properties) {
            return new LogoutResponse(properties);
        };

        /**
         * Encodes the specified LogoutResponse message. Does not implicitly {@link http.LogoutResponse.verify|verify} messages.
         * @function encode
         * @memberof http.LogoutResponse
         * @static
         * @param {http.ILogoutResponse} message LogoutResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogoutResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified LogoutResponse message, length delimited. Does not implicitly {@link http.LogoutResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.LogoutResponse
         * @static
         * @param {http.ILogoutResponse} message LogoutResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogoutResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LogoutResponse message from the specified reader or buffer.
         * @function decode
         * @memberof http.LogoutResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.LogoutResponse} LogoutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogoutResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.http.LogoutResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LogoutResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.LogoutResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.LogoutResponse} LogoutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogoutResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LogoutResponse message.
         * @function verify
         * @memberof http.LogoutResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LogoutResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            return null;
        };

        /**
         * Creates a LogoutResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof http.LogoutResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {http.LogoutResponse} LogoutResponse
         */
        LogoutResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.http.LogoutResponse)
                return object;
            let message = new $root.http.LogoutResponse();
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "Ok":
            case 1:
                message.status = 1;
                break;
            case "InternalError":
            case 2:
                message.status = 2;
                break;
            case "InvalidBody":
            case 3:
                message.status = 3;
                break;
            case "NotFound":
            case 4:
                message.status = 4;
                break;
            case "VerificationFailure":
            case 5:
                message.status = 5;
                break;
            case "NotAuthenticated":
            case 6:
                message.status = 6;
                break;
            case "AccountExists":
            case 7:
                message.status = 7;
                break;
            case "AccountNotExists":
            case 8:
                message.status = 8;
                break;
            case "WrongPassword":
            case 9:
                message.status = 9;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a LogoutResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof http.LogoutResponse
         * @static
         * @param {http.LogoutResponse} message LogoutResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LogoutResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.status = options.enums === String ? "Ok" : 1;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.http.ResponseStatus[message.status] === undefined ? message.status : $root.http.ResponseStatus[message.status] : message.status;
            return object;
        };

        /**
         * Converts this LogoutResponse to JSON.
         * @function toJSON
         * @memberof http.LogoutResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LogoutResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LogoutResponse
         * @function getTypeUrl
         * @memberof http.LogoutResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LogoutResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/http.LogoutResponse";
        };

        return LogoutResponse;
    })();

    http.ServerElement = (function() {

        /**
         * Properties of a ServerElement.
         * @memberof http
         * @interface IServerElement
         * @property {string|null} [icon] ServerElement icon
         * @property {string|null} [name] ServerElement name
         * @property {string|null} [domain] ServerElement domain
         * @property {number|null} [online] ServerElement online
         */

        /**
         * Constructs a new ServerElement.
         * @memberof http
         * @classdesc Represents a ServerElement.
         * @implements IServerElement
         * @constructor
         * @param {http.IServerElement=} [properties] Properties to set
         */
        function ServerElement(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerElement icon.
         * @member {string} icon
         * @memberof http.ServerElement
         * @instance
         */
        ServerElement.prototype.icon = "";

        /**
         * ServerElement name.
         * @member {string} name
         * @memberof http.ServerElement
         * @instance
         */
        ServerElement.prototype.name = "";

        /**
         * ServerElement domain.
         * @member {string} domain
         * @memberof http.ServerElement
         * @instance
         */
        ServerElement.prototype.domain = "";

        /**
         * ServerElement online.
         * @member {number} online
         * @memberof http.ServerElement
         * @instance
         */
        ServerElement.prototype.online = 0;

        /**
         * Creates a new ServerElement instance using the specified properties.
         * @function create
         * @memberof http.ServerElement
         * @static
         * @param {http.IServerElement=} [properties] Properties to set
         * @returns {http.ServerElement} ServerElement instance
         */
        ServerElement.create = function create(properties) {
            return new ServerElement(properties);
        };

        /**
         * Encodes the specified ServerElement message. Does not implicitly {@link http.ServerElement.verify|verify} messages.
         * @function encode
         * @memberof http.ServerElement
         * @static
         * @param {http.IServerElement} message ServerElement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerElement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.icon);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.domain != null && Object.hasOwnProperty.call(message, "domain"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.domain);
            if (message.online != null && Object.hasOwnProperty.call(message, "online"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.online);
            return writer;
        };

        /**
         * Encodes the specified ServerElement message, length delimited. Does not implicitly {@link http.ServerElement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.ServerElement
         * @static
         * @param {http.IServerElement} message ServerElement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerElement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerElement message from the specified reader or buffer.
         * @function decode
         * @memberof http.ServerElement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.ServerElement} ServerElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerElement.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.http.ServerElement();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.icon = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.domain = reader.string();
                        break;
                    }
                case 4: {
                        message.online = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerElement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.ServerElement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.ServerElement} ServerElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerElement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerElement message.
         * @function verify
         * @memberof http.ServerElement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerElement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.domain != null && message.hasOwnProperty("domain"))
                if (!$util.isString(message.domain))
                    return "domain: string expected";
            if (message.online != null && message.hasOwnProperty("online"))
                if (!$util.isInteger(message.online))
                    return "online: integer expected";
            return null;
        };

        /**
         * Creates a ServerElement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof http.ServerElement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {http.ServerElement} ServerElement
         */
        ServerElement.fromObject = function fromObject(object) {
            if (object instanceof $root.http.ServerElement)
                return object;
            let message = new $root.http.ServerElement();
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.name != null)
                message.name = String(object.name);
            if (object.domain != null)
                message.domain = String(object.domain);
            if (object.online != null)
                message.online = object.online >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ServerElement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof http.ServerElement
         * @static
         * @param {http.ServerElement} message ServerElement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerElement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.icon = "";
                object.name = "";
                object.domain = "";
                object.online = 0;
            }
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.domain != null && message.hasOwnProperty("domain"))
                object.domain = message.domain;
            if (message.online != null && message.hasOwnProperty("online"))
                object.online = message.online;
            return object;
        };

        /**
         * Converts this ServerElement to JSON.
         * @function toJSON
         * @memberof http.ServerElement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerElement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServerElement
         * @function getTypeUrl
         * @memberof http.ServerElement
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServerElement.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/http.ServerElement";
        };

        return ServerElement;
    })();

    http.ServersResponse = (function() {

        /**
         * Properties of a ServersResponse.
         * @memberof http
         * @interface IServersResponse
         * @property {http.ResponseStatus|null} [status] ServersResponse status
         * @property {Array.<http.IServerElement>|null} [servers] ServersResponse servers
         */

        /**
         * Constructs a new ServersResponse.
         * @memberof http
         * @classdesc Represents a ServersResponse.
         * @implements IServersResponse
         * @constructor
         * @param {http.IServersResponse=} [properties] Properties to set
         */
        function ServersResponse(properties) {
            this.servers = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServersResponse status.
         * @member {http.ResponseStatus} status
         * @memberof http.ServersResponse
         * @instance
         */
        ServersResponse.prototype.status = 1;

        /**
         * ServersResponse servers.
         * @member {Array.<http.IServerElement>} servers
         * @memberof http.ServersResponse
         * @instance
         */
        ServersResponse.prototype.servers = $util.emptyArray;

        /**
         * Creates a new ServersResponse instance using the specified properties.
         * @function create
         * @memberof http.ServersResponse
         * @static
         * @param {http.IServersResponse=} [properties] Properties to set
         * @returns {http.ServersResponse} ServersResponse instance
         */
        ServersResponse.create = function create(properties) {
            return new ServersResponse(properties);
        };

        /**
         * Encodes the specified ServersResponse message. Does not implicitly {@link http.ServersResponse.verify|verify} messages.
         * @function encode
         * @memberof http.ServersResponse
         * @static
         * @param {http.IServersResponse} message ServersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServersResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.servers != null && message.servers.length)
                for (let i = 0; i < message.servers.length; ++i)
                    $root.http.ServerElement.encode(message.servers[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ServersResponse message, length delimited. Does not implicitly {@link http.ServersResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.ServersResponse
         * @static
         * @param {http.IServersResponse} message ServersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServersResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServersResponse message from the specified reader or buffer.
         * @function decode
         * @memberof http.ServersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.ServersResponse} ServersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServersResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.http.ServersResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.servers && message.servers.length))
                            message.servers = [];
                        message.servers.push($root.http.ServerElement.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServersResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.ServersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.ServersResponse} ServersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServersResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServersResponse message.
         * @function verify
         * @memberof http.ServersResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServersResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            if (message.servers != null && message.hasOwnProperty("servers")) {
                if (!Array.isArray(message.servers))
                    return "servers: array expected";
                for (let i = 0; i < message.servers.length; ++i) {
                    let error = $root.http.ServerElement.verify(message.servers[i]);
                    if (error)
                        return "servers." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ServersResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof http.ServersResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {http.ServersResponse} ServersResponse
         */
        ServersResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.http.ServersResponse)
                return object;
            let message = new $root.http.ServersResponse();
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "Ok":
            case 1:
                message.status = 1;
                break;
            case "InternalError":
            case 2:
                message.status = 2;
                break;
            case "InvalidBody":
            case 3:
                message.status = 3;
                break;
            case "NotFound":
            case 4:
                message.status = 4;
                break;
            case "VerificationFailure":
            case 5:
                message.status = 5;
                break;
            case "NotAuthenticated":
            case 6:
                message.status = 6;
                break;
            case "AccountExists":
            case 7:
                message.status = 7;
                break;
            case "AccountNotExists":
            case 8:
                message.status = 8;
                break;
            case "WrongPassword":
            case 9:
                message.status = 9;
                break;
            }
            if (object.servers) {
                if (!Array.isArray(object.servers))
                    throw TypeError(".http.ServersResponse.servers: array expected");
                message.servers = [];
                for (let i = 0; i < object.servers.length; ++i) {
                    if (typeof object.servers[i] !== "object")
                        throw TypeError(".http.ServersResponse.servers: object expected");
                    message.servers[i] = $root.http.ServerElement.fromObject(object.servers[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ServersResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof http.ServersResponse
         * @static
         * @param {http.ServersResponse} message ServersResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServersResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.servers = [];
            if (options.defaults)
                object.status = options.enums === String ? "Ok" : 1;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.http.ResponseStatus[message.status] === undefined ? message.status : $root.http.ResponseStatus[message.status] : message.status;
            if (message.servers && message.servers.length) {
                object.servers = [];
                for (let j = 0; j < message.servers.length; ++j)
                    object.servers[j] = $root.http.ServerElement.toObject(message.servers[j], options);
            }
            return object;
        };

        /**
         * Converts this ServersResponse to JSON.
         * @function toJSON
         * @memberof http.ServersResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServersResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServersResponse
         * @function getTypeUrl
         * @memberof http.ServersResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServersResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/http.ServersResponse";
        };

        return ServersResponse;
    })();

    http.AdminModeServer = (function() {

        /**
         * Properties of an AdminModeServer.
         * @memberof http
         * @interface IAdminModeServer
         * @property {string|null} [icon] AdminModeServer icon
         * @property {string|null} [name] AdminModeServer name
         * @property {string|null} [domain] AdminModeServer domain
         * @property {string|null} [lastSeen] AdminModeServer lastSeen
         */

        /**
         * Constructs a new AdminModeServer.
         * @memberof http
         * @classdesc Represents an AdminModeServer.
         * @implements IAdminModeServer
         * @constructor
         * @param {http.IAdminModeServer=} [properties] Properties to set
         */
        function AdminModeServer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AdminModeServer icon.
         * @member {string} icon
         * @memberof http.AdminModeServer
         * @instance
         */
        AdminModeServer.prototype.icon = "";

        /**
         * AdminModeServer name.
         * @member {string} name
         * @memberof http.AdminModeServer
         * @instance
         */
        AdminModeServer.prototype.name = "";

        /**
         * AdminModeServer domain.
         * @member {string} domain
         * @memberof http.AdminModeServer
         * @instance
         */
        AdminModeServer.prototype.domain = "";

        /**
         * AdminModeServer lastSeen.
         * @member {string} lastSeen
         * @memberof http.AdminModeServer
         * @instance
         */
        AdminModeServer.prototype.lastSeen = "";

        /**
         * Creates a new AdminModeServer instance using the specified properties.
         * @function create
         * @memberof http.AdminModeServer
         * @static
         * @param {http.IAdminModeServer=} [properties] Properties to set
         * @returns {http.AdminModeServer} AdminModeServer instance
         */
        AdminModeServer.create = function create(properties) {
            return new AdminModeServer(properties);
        };

        /**
         * Encodes the specified AdminModeServer message. Does not implicitly {@link http.AdminModeServer.verify|verify} messages.
         * @function encode
         * @memberof http.AdminModeServer
         * @static
         * @param {http.IAdminModeServer} message AdminModeServer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdminModeServer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.icon);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.domain != null && Object.hasOwnProperty.call(message, "domain"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.domain);
            if (message.lastSeen != null && Object.hasOwnProperty.call(message, "lastSeen"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.lastSeen);
            return writer;
        };

        /**
         * Encodes the specified AdminModeServer message, length delimited. Does not implicitly {@link http.AdminModeServer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.AdminModeServer
         * @static
         * @param {http.IAdminModeServer} message AdminModeServer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdminModeServer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AdminModeServer message from the specified reader or buffer.
         * @function decode
         * @memberof http.AdminModeServer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.AdminModeServer} AdminModeServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdminModeServer.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.http.AdminModeServer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.icon = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.domain = reader.string();
                        break;
                    }
                case 4: {
                        message.lastSeen = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AdminModeServer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.AdminModeServer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.AdminModeServer} AdminModeServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdminModeServer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AdminModeServer message.
         * @function verify
         * @memberof http.AdminModeServer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AdminModeServer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.domain != null && message.hasOwnProperty("domain"))
                if (!$util.isString(message.domain))
                    return "domain: string expected";
            if (message.lastSeen != null && message.hasOwnProperty("lastSeen"))
                if (!$util.isString(message.lastSeen))
                    return "lastSeen: string expected";
            return null;
        };

        /**
         * Creates an AdminModeServer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof http.AdminModeServer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {http.AdminModeServer} AdminModeServer
         */
        AdminModeServer.fromObject = function fromObject(object) {
            if (object instanceof $root.http.AdminModeServer)
                return object;
            let message = new $root.http.AdminModeServer();
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.name != null)
                message.name = String(object.name);
            if (object.domain != null)
                message.domain = String(object.domain);
            if (object.lastSeen != null)
                message.lastSeen = String(object.lastSeen);
            return message;
        };

        /**
         * Creates a plain object from an AdminModeServer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof http.AdminModeServer
         * @static
         * @param {http.AdminModeServer} message AdminModeServer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AdminModeServer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.icon = "";
                object.name = "";
                object.domain = "";
                object.lastSeen = "";
            }
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.domain != null && message.hasOwnProperty("domain"))
                object.domain = message.domain;
            if (message.lastSeen != null && message.hasOwnProperty("lastSeen"))
                object.lastSeen = message.lastSeen;
            return object;
        };

        /**
         * Converts this AdminModeServer to JSON.
         * @function toJSON
         * @memberof http.AdminModeServer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AdminModeServer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AdminModeServer
         * @function getTypeUrl
         * @memberof http.AdminModeServer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AdminModeServer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/http.AdminModeServer";
        };

        return AdminModeServer;
    })();

    http.AdminModeServersResponse = (function() {

        /**
         * Properties of an AdminModeServersResponse.
         * @memberof http
         * @interface IAdminModeServersResponse
         * @property {Array.<http.IAdminModeServer>|null} [servers] AdminModeServersResponse servers
         * @property {number|null} [online] AdminModeServersResponse online
         * @property {number|null} [count] AdminModeServersResponse count
         */

        /**
         * Constructs a new AdminModeServersResponse.
         * @memberof http
         * @classdesc Represents an AdminModeServersResponse.
         * @implements IAdminModeServersResponse
         * @constructor
         * @param {http.IAdminModeServersResponse=} [properties] Properties to set
         */
        function AdminModeServersResponse(properties) {
            this.servers = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AdminModeServersResponse servers.
         * @member {Array.<http.IAdminModeServer>} servers
         * @memberof http.AdminModeServersResponse
         * @instance
         */
        AdminModeServersResponse.prototype.servers = $util.emptyArray;

        /**
         * AdminModeServersResponse online.
         * @member {number} online
         * @memberof http.AdminModeServersResponse
         * @instance
         */
        AdminModeServersResponse.prototype.online = 0;

        /**
         * AdminModeServersResponse count.
         * @member {number} count
         * @memberof http.AdminModeServersResponse
         * @instance
         */
        AdminModeServersResponse.prototype.count = 0;

        /**
         * Creates a new AdminModeServersResponse instance using the specified properties.
         * @function create
         * @memberof http.AdminModeServersResponse
         * @static
         * @param {http.IAdminModeServersResponse=} [properties] Properties to set
         * @returns {http.AdminModeServersResponse} AdminModeServersResponse instance
         */
        AdminModeServersResponse.create = function create(properties) {
            return new AdminModeServersResponse(properties);
        };

        /**
         * Encodes the specified AdminModeServersResponse message. Does not implicitly {@link http.AdminModeServersResponse.verify|verify} messages.
         * @function encode
         * @memberof http.AdminModeServersResponse
         * @static
         * @param {http.IAdminModeServersResponse} message AdminModeServersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdminModeServersResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.servers != null && message.servers.length)
                for (let i = 0; i < message.servers.length; ++i)
                    $root.http.AdminModeServer.encode(message.servers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.online != null && Object.hasOwnProperty.call(message, "online"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.online);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.count);
            return writer;
        };

        /**
         * Encodes the specified AdminModeServersResponse message, length delimited. Does not implicitly {@link http.AdminModeServersResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.AdminModeServersResponse
         * @static
         * @param {http.IAdminModeServersResponse} message AdminModeServersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdminModeServersResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AdminModeServersResponse message from the specified reader or buffer.
         * @function decode
         * @memberof http.AdminModeServersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.AdminModeServersResponse} AdminModeServersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdminModeServersResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.http.AdminModeServersResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.servers && message.servers.length))
                            message.servers = [];
                        message.servers.push($root.http.AdminModeServer.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.online = reader.uint32();
                        break;
                    }
                case 3: {
                        message.count = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AdminModeServersResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.AdminModeServersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.AdminModeServersResponse} AdminModeServersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdminModeServersResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AdminModeServersResponse message.
         * @function verify
         * @memberof http.AdminModeServersResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AdminModeServersResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.servers != null && message.hasOwnProperty("servers")) {
                if (!Array.isArray(message.servers))
                    return "servers: array expected";
                for (let i = 0; i < message.servers.length; ++i) {
                    let error = $root.http.AdminModeServer.verify(message.servers[i]);
                    if (error)
                        return "servers." + error;
                }
            }
            if (message.online != null && message.hasOwnProperty("online"))
                if (!$util.isInteger(message.online))
                    return "online: integer expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            return null;
        };

        /**
         * Creates an AdminModeServersResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof http.AdminModeServersResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {http.AdminModeServersResponse} AdminModeServersResponse
         */
        AdminModeServersResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.http.AdminModeServersResponse)
                return object;
            let message = new $root.http.AdminModeServersResponse();
            if (object.servers) {
                if (!Array.isArray(object.servers))
                    throw TypeError(".http.AdminModeServersResponse.servers: array expected");
                message.servers = [];
                for (let i = 0; i < object.servers.length; ++i) {
                    if (typeof object.servers[i] !== "object")
                        throw TypeError(".http.AdminModeServersResponse.servers: object expected");
                    message.servers[i] = $root.http.AdminModeServer.fromObject(object.servers[i]);
                }
            }
            if (object.online != null)
                message.online = object.online >>> 0;
            if (object.count != null)
                message.count = object.count >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an AdminModeServersResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof http.AdminModeServersResponse
         * @static
         * @param {http.AdminModeServersResponse} message AdminModeServersResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AdminModeServersResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.servers = [];
            if (options.defaults) {
                object.online = 0;
                object.count = 0;
            }
            if (message.servers && message.servers.length) {
                object.servers = [];
                for (let j = 0; j < message.servers.length; ++j)
                    object.servers[j] = $root.http.AdminModeServer.toObject(message.servers[j], options);
            }
            if (message.online != null && message.hasOwnProperty("online"))
                object.online = message.online;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            return object;
        };

        /**
         * Converts this AdminModeServersResponse to JSON.
         * @function toJSON
         * @memberof http.AdminModeServersResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AdminModeServersResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AdminModeServersResponse
         * @function getTypeUrl
         * @memberof http.AdminModeServersResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AdminModeServersResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/http.AdminModeServersResponse";
        };

        return AdminModeServersResponse;
    })();

    /**
     * WorldEffect enum.
     * @name http.WorldEffect
     * @enum {number}
     * @property {number} RAIN=1 RAIN value
     * @property {number} RAINSTORM=2 RAINSTORM value
     * @property {number} SNOW=3 SNOW value
     * @property {number} SNOWSTORM=4 SNOWSTORM value
     * @property {number} AUTUMN=5 AUTUMN value
     */
    http.WorldEffect = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "RAIN"] = 1;
        values[valuesById[2] = "RAINSTORM"] = 2;
        values[valuesById[3] = "SNOW"] = 3;
        values[valuesById[4] = "SNOWSTORM"] = 4;
        values[valuesById[5] = "AUTUMN"] = 5;
        return values;
    })();

    http.WorldProperties = (function() {

        /**
         * Properties of a WorldProperties.
         * @memberof http
         * @interface IWorldProperties
         * @property {string|null} [fillStyle] WorldProperties fillStyle
         * @property {string|null} [strokeStyle] WorldProperties strokeStyle
         * @property {string|null} [areaFill] WorldProperties areaFill
         * @property {number|null} [areaAlpha] WorldProperties areaAlpha
         * @property {Array.<http.WorldProperties.IBackground>|null} [backgrounds] WorldProperties backgrounds
         * @property {http.WorldEffect|null} [effect] WorldProperties effect
         */

        /**
         * Constructs a new WorldProperties.
         * @memberof http
         * @classdesc Represents a WorldProperties.
         * @implements IWorldProperties
         * @constructor
         * @param {http.IWorldProperties=} [properties] Properties to set
         */
        function WorldProperties(properties) {
            this.backgrounds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WorldProperties fillStyle.
         * @member {string} fillStyle
         * @memberof http.WorldProperties
         * @instance
         */
        WorldProperties.prototype.fillStyle = "";

        /**
         * WorldProperties strokeStyle.
         * @member {string} strokeStyle
         * @memberof http.WorldProperties
         * @instance
         */
        WorldProperties.prototype.strokeStyle = "";

        /**
         * WorldProperties areaFill.
         * @member {string} areaFill
         * @memberof http.WorldProperties
         * @instance
         */
        WorldProperties.prototype.areaFill = "";

        /**
         * WorldProperties areaAlpha.
         * @member {number|null|undefined} areaAlpha
         * @memberof http.WorldProperties
         * @instance
         */
        WorldProperties.prototype.areaAlpha = null;

        /**
         * WorldProperties backgrounds.
         * @member {Array.<http.WorldProperties.IBackground>} backgrounds
         * @memberof http.WorldProperties
         * @instance
         */
        WorldProperties.prototype.backgrounds = $util.emptyArray;

        /**
         * WorldProperties effect.
         * @member {http.WorldEffect|null|undefined} effect
         * @memberof http.WorldProperties
         * @instance
         */
        WorldProperties.prototype.effect = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WorldProperties.prototype, "_areaAlpha", {
            get: $util.oneOfGetter($oneOfFields = ["areaAlpha"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WorldProperties.prototype, "_effect", {
            get: $util.oneOfGetter($oneOfFields = ["effect"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new WorldProperties instance using the specified properties.
         * @function create
         * @memberof http.WorldProperties
         * @static
         * @param {http.IWorldProperties=} [properties] Properties to set
         * @returns {http.WorldProperties} WorldProperties instance
         */
        WorldProperties.create = function create(properties) {
            return new WorldProperties(properties);
        };

        /**
         * Encodes the specified WorldProperties message. Does not implicitly {@link http.WorldProperties.verify|verify} messages.
         * @function encode
         * @memberof http.WorldProperties
         * @static
         * @param {http.IWorldProperties} message WorldProperties message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldProperties.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fillStyle != null && Object.hasOwnProperty.call(message, "fillStyle"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.fillStyle);
            if (message.strokeStyle != null && Object.hasOwnProperty.call(message, "strokeStyle"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.strokeStyle);
            if (message.areaFill != null && Object.hasOwnProperty.call(message, "areaFill"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.areaFill);
            if (message.areaAlpha != null && Object.hasOwnProperty.call(message, "areaAlpha"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.areaAlpha);
            if (message.backgrounds != null && message.backgrounds.length)
                for (let i = 0; i < message.backgrounds.length; ++i)
                    $root.http.WorldProperties.Background.encode(message.backgrounds[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.effect != null && Object.hasOwnProperty.call(message, "effect"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.effect);
            return writer;
        };

        /**
         * Encodes the specified WorldProperties message, length delimited. Does not implicitly {@link http.WorldProperties.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.WorldProperties
         * @static
         * @param {http.IWorldProperties} message WorldProperties message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldProperties.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WorldProperties message from the specified reader or buffer.
         * @function decode
         * @memberof http.WorldProperties
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.WorldProperties} WorldProperties
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldProperties.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.http.WorldProperties();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.fillStyle = reader.string();
                        break;
                    }
                case 2: {
                        message.strokeStyle = reader.string();
                        break;
                    }
                case 3: {
                        message.areaFill = reader.string();
                        break;
                    }
                case 4: {
                        message.areaAlpha = reader.uint32();
                        break;
                    }
                case 5: {
                        if (!(message.backgrounds && message.backgrounds.length))
                            message.backgrounds = [];
                        message.backgrounds.push($root.http.WorldProperties.Background.decode(reader, reader.uint32()));
                        break;
                    }
                case 6: {
                        message.effect = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WorldProperties message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.WorldProperties
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.WorldProperties} WorldProperties
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldProperties.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WorldProperties message.
         * @function verify
         * @memberof http.WorldProperties
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorldProperties.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.fillStyle != null && message.hasOwnProperty("fillStyle"))
                if (!$util.isString(message.fillStyle))
                    return "fillStyle: string expected";
            if (message.strokeStyle != null && message.hasOwnProperty("strokeStyle"))
                if (!$util.isString(message.strokeStyle))
                    return "strokeStyle: string expected";
            if (message.areaFill != null && message.hasOwnProperty("areaFill"))
                if (!$util.isString(message.areaFill))
                    return "areaFill: string expected";
            if (message.areaAlpha != null && message.hasOwnProperty("areaAlpha")) {
                properties._areaAlpha = 1;
                if (!$util.isInteger(message.areaAlpha))
                    return "areaAlpha: integer expected";
            }
            if (message.backgrounds != null && message.hasOwnProperty("backgrounds")) {
                if (!Array.isArray(message.backgrounds))
                    return "backgrounds: array expected";
                for (let i = 0; i < message.backgrounds.length; ++i) {
                    let error = $root.http.WorldProperties.Background.verify(message.backgrounds[i]);
                    if (error)
                        return "backgrounds." + error;
                }
            }
            if (message.effect != null && message.hasOwnProperty("effect")) {
                properties._effect = 1;
                switch (message.effect) {
                default:
                    return "effect: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            }
            return null;
        };

        /**
         * Creates a WorldProperties message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof http.WorldProperties
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {http.WorldProperties} WorldProperties
         */
        WorldProperties.fromObject = function fromObject(object) {
            if (object instanceof $root.http.WorldProperties)
                return object;
            let message = new $root.http.WorldProperties();
            if (object.fillStyle != null)
                message.fillStyle = String(object.fillStyle);
            if (object.strokeStyle != null)
                message.strokeStyle = String(object.strokeStyle);
            if (object.areaFill != null)
                message.areaFill = String(object.areaFill);
            if (object.areaAlpha != null)
                message.areaAlpha = object.areaAlpha >>> 0;
            if (object.backgrounds) {
                if (!Array.isArray(object.backgrounds))
                    throw TypeError(".http.WorldProperties.backgrounds: array expected");
                message.backgrounds = [];
                for (let i = 0; i < object.backgrounds.length; ++i) {
                    if (typeof object.backgrounds[i] !== "object")
                        throw TypeError(".http.WorldProperties.backgrounds: object expected");
                    message.backgrounds[i] = $root.http.WorldProperties.Background.fromObject(object.backgrounds[i]);
                }
            }
            switch (object.effect) {
            default:
                if (typeof object.effect === "number") {
                    message.effect = object.effect;
                    break;
                }
                break;
            case "RAIN":
            case 1:
                message.effect = 1;
                break;
            case "RAINSTORM":
            case 2:
                message.effect = 2;
                break;
            case "SNOW":
            case 3:
                message.effect = 3;
                break;
            case "SNOWSTORM":
            case 4:
                message.effect = 4;
                break;
            case "AUTUMN":
            case 5:
                message.effect = 5;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a WorldProperties message. Also converts values to other types if specified.
         * @function toObject
         * @memberof http.WorldProperties
         * @static
         * @param {http.WorldProperties} message WorldProperties
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorldProperties.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.backgrounds = [];
            if (options.defaults) {
                object.fillStyle = "";
                object.strokeStyle = "";
                object.areaFill = "";
            }
            if (message.fillStyle != null && message.hasOwnProperty("fillStyle"))
                object.fillStyle = message.fillStyle;
            if (message.strokeStyle != null && message.hasOwnProperty("strokeStyle"))
                object.strokeStyle = message.strokeStyle;
            if (message.areaFill != null && message.hasOwnProperty("areaFill"))
                object.areaFill = message.areaFill;
            if (message.areaAlpha != null && message.hasOwnProperty("areaAlpha")) {
                object.areaAlpha = message.areaAlpha;
                if (options.oneofs)
                    object._areaAlpha = "areaAlpha";
            }
            if (message.backgrounds && message.backgrounds.length) {
                object.backgrounds = [];
                for (let j = 0; j < message.backgrounds.length; ++j)
                    object.backgrounds[j] = $root.http.WorldProperties.Background.toObject(message.backgrounds[j], options);
            }
            if (message.effect != null && message.hasOwnProperty("effect")) {
                object.effect = options.enums === String ? $root.http.WorldEffect[message.effect] === undefined ? message.effect : $root.http.WorldEffect[message.effect] : message.effect;
                if (options.oneofs)
                    object._effect = "effect";
            }
            return object;
        };

        /**
         * Converts this WorldProperties to JSON.
         * @function toJSON
         * @memberof http.WorldProperties
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorldProperties.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WorldProperties
         * @function getTypeUrl
         * @memberof http.WorldProperties
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WorldProperties.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/http.WorldProperties";
        };

        WorldProperties.Background = (function() {

            /**
             * Properties of a Background.
             * @memberof http.WorldProperties
             * @interface IBackground
             * @property {string|null} [name] Background name
             * @property {number|null} [alpha] Background alpha
             */

            /**
             * Constructs a new Background.
             * @memberof http.WorldProperties
             * @classdesc Represents a Background.
             * @implements IBackground
             * @constructor
             * @param {http.WorldProperties.IBackground=} [properties] Properties to set
             */
            function Background(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Background name.
             * @member {string} name
             * @memberof http.WorldProperties.Background
             * @instance
             */
            Background.prototype.name = "";

            /**
             * Background alpha.
             * @member {number} alpha
             * @memberof http.WorldProperties.Background
             * @instance
             */
            Background.prototype.alpha = 0;

            /**
             * Creates a new Background instance using the specified properties.
             * @function create
             * @memberof http.WorldProperties.Background
             * @static
             * @param {http.WorldProperties.IBackground=} [properties] Properties to set
             * @returns {http.WorldProperties.Background} Background instance
             */
            Background.create = function create(properties) {
                return new Background(properties);
            };

            /**
             * Encodes the specified Background message. Does not implicitly {@link http.WorldProperties.Background.verify|verify} messages.
             * @function encode
             * @memberof http.WorldProperties.Background
             * @static
             * @param {http.WorldProperties.IBackground} message Background message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Background.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.alpha != null && Object.hasOwnProperty.call(message, "alpha"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.alpha);
                return writer;
            };

            /**
             * Encodes the specified Background message, length delimited. Does not implicitly {@link http.WorldProperties.Background.verify|verify} messages.
             * @function encodeDelimited
             * @memberof http.WorldProperties.Background
             * @static
             * @param {http.WorldProperties.IBackground} message Background message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Background.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Background message from the specified reader or buffer.
             * @function decode
             * @memberof http.WorldProperties.Background
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {http.WorldProperties.Background} Background
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Background.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.http.WorldProperties.Background();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.alpha = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Background message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof http.WorldProperties.Background
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {http.WorldProperties.Background} Background
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Background.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Background message.
             * @function verify
             * @memberof http.WorldProperties.Background
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Background.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.alpha != null && message.hasOwnProperty("alpha"))
                    if (!$util.isInteger(message.alpha))
                        return "alpha: integer expected";
                return null;
            };

            /**
             * Creates a Background message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof http.WorldProperties.Background
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {http.WorldProperties.Background} Background
             */
            Background.fromObject = function fromObject(object) {
                if (object instanceof $root.http.WorldProperties.Background)
                    return object;
                let message = new $root.http.WorldProperties.Background();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.alpha != null)
                    message.alpha = object.alpha >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a Background message. Also converts values to other types if specified.
             * @function toObject
             * @memberof http.WorldProperties.Background
             * @static
             * @param {http.WorldProperties.Background} message Background
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Background.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.alpha = 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.alpha != null && message.hasOwnProperty("alpha"))
                    object.alpha = message.alpha;
                return object;
            };

            /**
             * Converts this Background to JSON.
             * @function toJSON
             * @memberof http.WorldProperties.Background
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Background.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Background
             * @function getTypeUrl
             * @memberof http.WorldProperties.Background
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Background.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/http.WorldProperties.Background";
            };

            return Background;
        })();

        return WorldProperties;
    })();

    http.AreaResponse = (function() {

        /**
         * Properties of an AreaResponse.
         * @memberof http
         * @interface IAreaResponse
         * @property {boolean|null} [win] AreaResponse win
         * @property {number|null} [vp] AreaResponse vp
         * @property {string|null} [text] AreaResponse text
         */

        /**
         * Constructs a new AreaResponse.
         * @memberof http
         * @classdesc Represents an AreaResponse.
         * @implements IAreaResponse
         * @constructor
         * @param {http.IAreaResponse=} [properties] Properties to set
         */
        function AreaResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AreaResponse win.
         * @member {boolean|null|undefined} win
         * @memberof http.AreaResponse
         * @instance
         */
        AreaResponse.prototype.win = null;

        /**
         * AreaResponse vp.
         * @member {number|null|undefined} vp
         * @memberof http.AreaResponse
         * @instance
         */
        AreaResponse.prototype.vp = null;

        /**
         * AreaResponse text.
         * @member {string|null|undefined} text
         * @memberof http.AreaResponse
         * @instance
         */
        AreaResponse.prototype.text = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AreaResponse.prototype, "_win", {
            get: $util.oneOfGetter($oneOfFields = ["win"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AreaResponse.prototype, "_vp", {
            get: $util.oneOfGetter($oneOfFields = ["vp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AreaResponse.prototype, "_text", {
            get: $util.oneOfGetter($oneOfFields = ["text"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AreaResponse instance using the specified properties.
         * @function create
         * @memberof http.AreaResponse
         * @static
         * @param {http.IAreaResponse=} [properties] Properties to set
         * @returns {http.AreaResponse} AreaResponse instance
         */
        AreaResponse.create = function create(properties) {
            return new AreaResponse(properties);
        };

        /**
         * Encodes the specified AreaResponse message. Does not implicitly {@link http.AreaResponse.verify|verify} messages.
         * @function encode
         * @memberof http.AreaResponse
         * @static
         * @param {http.IAreaResponse} message AreaResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AreaResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.win != null && Object.hasOwnProperty.call(message, "win"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.win);
            if (message.vp != null && Object.hasOwnProperty.call(message, "vp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.vp);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.text);
            return writer;
        };

        /**
         * Encodes the specified AreaResponse message, length delimited. Does not implicitly {@link http.AreaResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.AreaResponse
         * @static
         * @param {http.IAreaResponse} message AreaResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AreaResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AreaResponse message from the specified reader or buffer.
         * @function decode
         * @memberof http.AreaResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.AreaResponse} AreaResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AreaResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.http.AreaResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.win = reader.bool();
                        break;
                    }
                case 2: {
                        message.vp = reader.uint32();
                        break;
                    }
                case 3: {
                        message.text = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AreaResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.AreaResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.AreaResponse} AreaResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AreaResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AreaResponse message.
         * @function verify
         * @memberof http.AreaResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AreaResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.win != null && message.hasOwnProperty("win")) {
                properties._win = 1;
                if (typeof message.win !== "boolean")
                    return "win: boolean expected";
            }
            if (message.vp != null && message.hasOwnProperty("vp")) {
                properties._vp = 1;
                if (!$util.isInteger(message.vp))
                    return "vp: integer expected";
            }
            if (message.text != null && message.hasOwnProperty("text")) {
                properties._text = 1;
                if (!$util.isString(message.text))
                    return "text: string expected";
            }
            return null;
        };

        /**
         * Creates an AreaResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof http.AreaResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {http.AreaResponse} AreaResponse
         */
        AreaResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.http.AreaResponse)
                return object;
            let message = new $root.http.AreaResponse();
            if (object.win != null)
                message.win = Boolean(object.win);
            if (object.vp != null)
                message.vp = object.vp >>> 0;
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };

        /**
         * Creates a plain object from an AreaResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof http.AreaResponse
         * @static
         * @param {http.AreaResponse} message AreaResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AreaResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.win != null && message.hasOwnProperty("win")) {
                object.win = message.win;
                if (options.oneofs)
                    object._win = "win";
            }
            if (message.vp != null && message.hasOwnProperty("vp")) {
                object.vp = message.vp;
                if (options.oneofs)
                    object._vp = "vp";
            }
            if (message.text != null && message.hasOwnProperty("text")) {
                object.text = message.text;
                if (options.oneofs)
                    object._text = "text";
            }
            return object;
        };

        /**
         * Converts this AreaResponse to JSON.
         * @function toJSON
         * @memberof http.AreaResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AreaResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AreaResponse
         * @function getTypeUrl
         * @memberof http.AreaResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AreaResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/http.AreaResponse";
        };

        return AreaResponse;
    })();

    http.WorldResponse = (function() {

        /**
         * Properties of a WorldResponse.
         * @memberof http
         * @interface IWorldResponse
         * @property {http.IWorldProperties|null} [properties] WorldResponse properties
         * @property {Object.<string,http.IAreaResponse>|null} [areas] WorldResponse areas
         */

        /**
         * Constructs a new WorldResponse.
         * @memberof http
         * @classdesc Represents a WorldResponse.
         * @implements IWorldResponse
         * @constructor
         * @param {http.IWorldResponse=} [properties] Properties to set
         */
        function WorldResponse(properties) {
            this.areas = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WorldResponse properties.
         * @member {http.IWorldProperties|null|undefined} properties
         * @memberof http.WorldResponse
         * @instance
         */
        WorldResponse.prototype.properties = null;

        /**
         * WorldResponse areas.
         * @member {Object.<string,http.IAreaResponse>} areas
         * @memberof http.WorldResponse
         * @instance
         */
        WorldResponse.prototype.areas = $util.emptyObject;

        /**
         * Creates a new WorldResponse instance using the specified properties.
         * @function create
         * @memberof http.WorldResponse
         * @static
         * @param {http.IWorldResponse=} [properties] Properties to set
         * @returns {http.WorldResponse} WorldResponse instance
         */
        WorldResponse.create = function create(properties) {
            return new WorldResponse(properties);
        };

        /**
         * Encodes the specified WorldResponse message. Does not implicitly {@link http.WorldResponse.verify|verify} messages.
         * @function encode
         * @memberof http.WorldResponse
         * @static
         * @param {http.IWorldResponse} message WorldResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.properties != null && Object.hasOwnProperty.call(message, "properties"))
                $root.http.WorldProperties.encode(message.properties, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.areas != null && Object.hasOwnProperty.call(message, "areas"))
                for (let keys = Object.keys(message.areas), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.http.AreaResponse.encode(message.areas[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified WorldResponse message, length delimited. Does not implicitly {@link http.WorldResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.WorldResponse
         * @static
         * @param {http.IWorldResponse} message WorldResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WorldResponse message from the specified reader or buffer.
         * @function decode
         * @memberof http.WorldResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.WorldResponse} WorldResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.http.WorldResponse(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.properties = $root.http.WorldProperties.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (message.areas === $util.emptyObject)
                            message.areas = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.http.AreaResponse.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.areas[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WorldResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.WorldResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.WorldResponse} WorldResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WorldResponse message.
         * @function verify
         * @memberof http.WorldResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorldResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.properties != null && message.hasOwnProperty("properties")) {
                let error = $root.http.WorldProperties.verify(message.properties);
                if (error)
                    return "properties." + error;
            }
            if (message.areas != null && message.hasOwnProperty("areas")) {
                if (!$util.isObject(message.areas))
                    return "areas: object expected";
                let key = Object.keys(message.areas);
                for (let i = 0; i < key.length; ++i) {
                    let error = $root.http.AreaResponse.verify(message.areas[key[i]]);
                    if (error)
                        return "areas." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WorldResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof http.WorldResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {http.WorldResponse} WorldResponse
         */
        WorldResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.http.WorldResponse)
                return object;
            let message = new $root.http.WorldResponse();
            if (object.properties != null) {
                if (typeof object.properties !== "object")
                    throw TypeError(".http.WorldResponse.properties: object expected");
                message.properties = $root.http.WorldProperties.fromObject(object.properties);
            }
            if (object.areas) {
                if (typeof object.areas !== "object")
                    throw TypeError(".http.WorldResponse.areas: object expected");
                message.areas = {};
                for (let keys = Object.keys(object.areas), i = 0; i < keys.length; ++i) {
                    if (typeof object.areas[keys[i]] !== "object")
                        throw TypeError(".http.WorldResponse.areas: object expected");
                    message.areas[keys[i]] = $root.http.AreaResponse.fromObject(object.areas[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a WorldResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof http.WorldResponse
         * @static
         * @param {http.WorldResponse} message WorldResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorldResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.areas = {};
            if (options.defaults)
                object.properties = null;
            if (message.properties != null && message.hasOwnProperty("properties"))
                object.properties = $root.http.WorldProperties.toObject(message.properties, options);
            let keys2;
            if (message.areas && (keys2 = Object.keys(message.areas)).length) {
                object.areas = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.areas[keys2[j]] = $root.http.AreaResponse.toObject(message.areas[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this WorldResponse to JSON.
         * @function toJSON
         * @memberof http.WorldResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorldResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WorldResponse
         * @function getTypeUrl
         * @memberof http.WorldResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WorldResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/http.WorldResponse";
        };

        return WorldResponse;
    })();

    http.WorldsResponse = (function() {

        /**
         * Properties of a WorldsResponse.
         * @memberof http
         * @interface IWorldsResponse
         * @property {Object.<string,http.IWorldResponse>|null} [worlds] WorldsResponse worlds
         */

        /**
         * Constructs a new WorldsResponse.
         * @memberof http
         * @classdesc Represents a WorldsResponse.
         * @implements IWorldsResponse
         * @constructor
         * @param {http.IWorldsResponse=} [properties] Properties to set
         */
        function WorldsResponse(properties) {
            this.worlds = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WorldsResponse worlds.
         * @member {Object.<string,http.IWorldResponse>} worlds
         * @memberof http.WorldsResponse
         * @instance
         */
        WorldsResponse.prototype.worlds = $util.emptyObject;

        /**
         * Creates a new WorldsResponse instance using the specified properties.
         * @function create
         * @memberof http.WorldsResponse
         * @static
         * @param {http.IWorldsResponse=} [properties] Properties to set
         * @returns {http.WorldsResponse} WorldsResponse instance
         */
        WorldsResponse.create = function create(properties) {
            return new WorldsResponse(properties);
        };

        /**
         * Encodes the specified WorldsResponse message. Does not implicitly {@link http.WorldsResponse.verify|verify} messages.
         * @function encode
         * @memberof http.WorldsResponse
         * @static
         * @param {http.IWorldsResponse} message WorldsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.worlds != null && Object.hasOwnProperty.call(message, "worlds"))
                for (let keys = Object.keys(message.worlds), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.http.WorldResponse.encode(message.worlds[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified WorldsResponse message, length delimited. Does not implicitly {@link http.WorldsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.WorldsResponse
         * @static
         * @param {http.IWorldsResponse} message WorldsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WorldsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof http.WorldsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.WorldsResponse} WorldsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldsResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.http.WorldsResponse(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (message.worlds === $util.emptyObject)
                            message.worlds = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.http.WorldResponse.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.worlds[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WorldsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.WorldsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.WorldsResponse} WorldsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WorldsResponse message.
         * @function verify
         * @memberof http.WorldsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorldsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.worlds != null && message.hasOwnProperty("worlds")) {
                if (!$util.isObject(message.worlds))
                    return "worlds: object expected";
                let key = Object.keys(message.worlds);
                for (let i = 0; i < key.length; ++i) {
                    let error = $root.http.WorldResponse.verify(message.worlds[key[i]]);
                    if (error)
                        return "worlds." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WorldsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof http.WorldsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {http.WorldsResponse} WorldsResponse
         */
        WorldsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.http.WorldsResponse)
                return object;
            let message = new $root.http.WorldsResponse();
            if (object.worlds) {
                if (typeof object.worlds !== "object")
                    throw TypeError(".http.WorldsResponse.worlds: object expected");
                message.worlds = {};
                for (let keys = Object.keys(object.worlds), i = 0; i < keys.length; ++i) {
                    if (typeof object.worlds[keys[i]] !== "object")
                        throw TypeError(".http.WorldsResponse.worlds: object expected");
                    message.worlds[keys[i]] = $root.http.WorldResponse.fromObject(object.worlds[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a WorldsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof http.WorldsResponse
         * @static
         * @param {http.WorldsResponse} message WorldsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorldsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.worlds = {};
            let keys2;
            if (message.worlds && (keys2 = Object.keys(message.worlds)).length) {
                object.worlds = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.worlds[keys2[j]] = $root.http.WorldResponse.toObject(message.worlds[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this WorldsResponse to JSON.
         * @function toJSON
         * @memberof http.WorldsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorldsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WorldsResponse
         * @function getTypeUrl
         * @memberof http.WorldsResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WorldsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/http.WorldsResponse";
        };

        return WorldsResponse;
    })();

    return http;
})();

export const connection = $root.connection = (() => {

    /**
     * Namespace connection.
     * @exports connection
     * @namespace
     */
    const connection = {};

    connection.Game = (function() {

        /**
         * Constructs a new Game service.
         * @memberof connection
         * @classdesc Represents a Game
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Game(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Game.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Game;

        /**
         * Creates new Game service using the specified rpc implementation.
         * @function create
         * @memberof connection.Game
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Game} RPC service. Useful where requests and/or responses are streamed.
         */
        Game.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link connection.Game#authentication}.
         * @memberof connection.Game
         * @typedef AuthenticationCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {connection.AuthenticationResponse} [response] AuthenticationResponse
         */

        /**
         * Calls Authentication.
         * @function authentication
         * @memberof connection.Game
         * @instance
         * @param {connection.IAuthenticationRequest} request AuthenticationRequest message or plain object
         * @param {connection.Game.AuthenticationCallback} callback Node-style callback called with the error, if any, and AuthenticationResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Game.prototype.authentication = function authentication(request, callback) {
            return this.rpcCall(authentication, $root.connection.AuthenticationRequest, $root.connection.AuthenticationResponse, request, callback);
        }, "name", { value: "Authentication" });

        /**
         * Calls Authentication.
         * @function authentication
         * @memberof connection.Game
         * @instance
         * @param {connection.IAuthenticationRequest} request AuthenticationRequest message or plain object
         * @returns {Promise<connection.AuthenticationResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link connection.Game#joinPlayer}.
         * @memberof connection.Game
         * @typedef JoinPlayerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {connection.JoinPlayerResponse} [response] JoinPlayerResponse
         */

        /**
         * Calls JoinPlayer.
         * @function joinPlayer
         * @memberof connection.Game
         * @instance
         * @param {connection.IJoinPlayerRequest} request JoinPlayerRequest message or plain object
         * @param {connection.Game.JoinPlayerCallback} callback Node-style callback called with the error, if any, and JoinPlayerResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Game.prototype.joinPlayer = function joinPlayer(request, callback) {
            return this.rpcCall(joinPlayer, $root.connection.JoinPlayerRequest, $root.connection.JoinPlayerResponse, request, callback);
        }, "name", { value: "JoinPlayer" });

        /**
         * Calls JoinPlayer.
         * @function joinPlayer
         * @memberof connection.Game
         * @instance
         * @param {connection.IJoinPlayerRequest} request JoinPlayerRequest message or plain object
         * @returns {Promise<connection.JoinPlayerResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link connection.Game#ping}.
         * @memberof connection.Game
         * @typedef PingCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {connection.PongResponse} [response] PongResponse
         */

        /**
         * Calls Ping.
         * @function ping
         * @memberof connection.Game
         * @instance
         * @param {connection.IPingRequest} request PingRequest message or plain object
         * @param {connection.Game.PingCallback} callback Node-style callback called with the error, if any, and PongResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Game.prototype.ping = function ping(request, callback) {
            return this.rpcCall(ping, $root.connection.PingRequest, $root.connection.PongResponse, request, callback);
        }, "name", { value: "Ping" });

        /**
         * Calls Ping.
         * @function ping
         * @memberof connection.Game
         * @instance
         * @param {connection.IPingRequest} request PingRequest message or plain object
         * @returns {Promise<connection.PongResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link connection.Game#awardPlayer}.
         * @memberof connection.Game
         * @typedef AwardPlayerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {connection.AwardResponse} [response] AwardResponse
         */

        /**
         * Calls AwardPlayer.
         * @function awardPlayer
         * @memberof connection.Game
         * @instance
         * @param {connection.IAwardRequest} request AwardRequest message or plain object
         * @param {connection.Game.AwardPlayerCallback} callback Node-style callback called with the error, if any, and AwardResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Game.prototype.awardPlayer = function awardPlayer(request, callback) {
            return this.rpcCall(awardPlayer, $root.connection.AwardRequest, $root.connection.AwardResponse, request, callback);
        }, "name", { value: "AwardPlayer" });

        /**
         * Calls AwardPlayer.
         * @function awardPlayer
         * @memberof connection.Game
         * @instance
         * @param {connection.IAwardRequest} request AwardRequest message or plain object
         * @returns {Promise<connection.AwardResponse>} Promise
         * @variation 2
         */

        return Game;
    })();

    connection.PingRequest = (function() {

        /**
         * Properties of a PingRequest.
         * @memberof connection
         * @interface IPingRequest
         * @property {number|null} [online] PingRequest online
         * @property {boolean|null} [alive] PingRequest alive
         */

        /**
         * Constructs a new PingRequest.
         * @memberof connection
         * @classdesc Represents a PingRequest.
         * @implements IPingRequest
         * @constructor
         * @param {connection.IPingRequest=} [properties] Properties to set
         */
        function PingRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PingRequest online.
         * @member {number} online
         * @memberof connection.PingRequest
         * @instance
         */
        PingRequest.prototype.online = 0;

        /**
         * PingRequest alive.
         * @member {boolean} alive
         * @memberof connection.PingRequest
         * @instance
         */
        PingRequest.prototype.alive = false;

        /**
         * Creates a new PingRequest instance using the specified properties.
         * @function create
         * @memberof connection.PingRequest
         * @static
         * @param {connection.IPingRequest=} [properties] Properties to set
         * @returns {connection.PingRequest} PingRequest instance
         */
        PingRequest.create = function create(properties) {
            return new PingRequest(properties);
        };

        /**
         * Encodes the specified PingRequest message. Does not implicitly {@link connection.PingRequest.verify|verify} messages.
         * @function encode
         * @memberof connection.PingRequest
         * @static
         * @param {connection.IPingRequest} message PingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.online != null && Object.hasOwnProperty.call(message, "online"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.online);
            if (message.alive != null && Object.hasOwnProperty.call(message, "alive"))
                writer.uint32(/* id 21, wireType 0 =*/168).bool(message.alive);
            return writer;
        };

        /**
         * Encodes the specified PingRequest message, length delimited. Does not implicitly {@link connection.PingRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof connection.PingRequest
         * @static
         * @param {connection.IPingRequest} message PingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PingRequest message from the specified reader or buffer.
         * @function decode
         * @memberof connection.PingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {connection.PingRequest} PingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.connection.PingRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.online = reader.uint32();
                        break;
                    }
                case 21: {
                        message.alive = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PingRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof connection.PingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {connection.PingRequest} PingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PingRequest message.
         * @function verify
         * @memberof connection.PingRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PingRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.online != null && message.hasOwnProperty("online"))
                if (!$util.isInteger(message.online))
                    return "online: integer expected";
            if (message.alive != null && message.hasOwnProperty("alive"))
                if (typeof message.alive !== "boolean")
                    return "alive: boolean expected";
            return null;
        };

        /**
         * Creates a PingRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof connection.PingRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {connection.PingRequest} PingRequest
         */
        PingRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.connection.PingRequest)
                return object;
            let message = new $root.connection.PingRequest();
            if (object.online != null)
                message.online = object.online >>> 0;
            if (object.alive != null)
                message.alive = Boolean(object.alive);
            return message;
        };

        /**
         * Creates a plain object from a PingRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof connection.PingRequest
         * @static
         * @param {connection.PingRequest} message PingRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PingRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.online = 0;
                object.alive = false;
            }
            if (message.online != null && message.hasOwnProperty("online"))
                object.online = message.online;
            if (message.alive != null && message.hasOwnProperty("alive"))
                object.alive = message.alive;
            return object;
        };

        /**
         * Converts this PingRequest to JSON.
         * @function toJSON
         * @memberof connection.PingRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PingRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PingRequest
         * @function getTypeUrl
         * @memberof connection.PingRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PingRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/connection.PingRequest";
        };

        return PingRequest;
    })();

    connection.PongResponse = (function() {

        /**
         * Properties of a PongResponse.
         * @memberof connection
         * @interface IPongResponse
         * @property {boolean|null} [success] PongResponse success
         */

        /**
         * Constructs a new PongResponse.
         * @memberof connection
         * @classdesc Represents a PongResponse.
         * @implements IPongResponse
         * @constructor
         * @param {connection.IPongResponse=} [properties] Properties to set
         */
        function PongResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PongResponse success.
         * @member {boolean} success
         * @memberof connection.PongResponse
         * @instance
         */
        PongResponse.prototype.success = false;

        /**
         * Creates a new PongResponse instance using the specified properties.
         * @function create
         * @memberof connection.PongResponse
         * @static
         * @param {connection.IPongResponse=} [properties] Properties to set
         * @returns {connection.PongResponse} PongResponse instance
         */
        PongResponse.create = function create(properties) {
            return new PongResponse(properties);
        };

        /**
         * Encodes the specified PongResponse message. Does not implicitly {@link connection.PongResponse.verify|verify} messages.
         * @function encode
         * @memberof connection.PongResponse
         * @static
         * @param {connection.IPongResponse} message PongResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PongResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            return writer;
        };

        /**
         * Encodes the specified PongResponse message, length delimited. Does not implicitly {@link connection.PongResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof connection.PongResponse
         * @static
         * @param {connection.IPongResponse} message PongResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PongResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PongResponse message from the specified reader or buffer.
         * @function decode
         * @memberof connection.PongResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {connection.PongResponse} PongResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PongResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.connection.PongResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PongResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof connection.PongResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {connection.PongResponse} PongResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PongResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PongResponse message.
         * @function verify
         * @memberof connection.PongResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PongResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            return null;
        };

        /**
         * Creates a PongResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof connection.PongResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {connection.PongResponse} PongResponse
         */
        PongResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.connection.PongResponse)
                return object;
            let message = new $root.connection.PongResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            return message;
        };

        /**
         * Creates a plain object from a PongResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof connection.PongResponse
         * @static
         * @param {connection.PongResponse} message PongResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PongResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.success = false;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            return object;
        };

        /**
         * Converts this PongResponse to JSON.
         * @function toJSON
         * @memberof connection.PongResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PongResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PongResponse
         * @function getTypeUrl
         * @memberof connection.PongResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PongResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/connection.PongResponse";
        };

        return PongResponse;
    })();

    connection.AuthenticationRequest = (function() {

        /**
         * Properties of an AuthenticationRequest.
         * @memberof connection
         * @interface IAuthenticationRequest
         * @property {string|null} [token] AuthenticationRequest token
         */

        /**
         * Constructs a new AuthenticationRequest.
         * @memberof connection
         * @classdesc Represents an AuthenticationRequest.
         * @implements IAuthenticationRequest
         * @constructor
         * @param {connection.IAuthenticationRequest=} [properties] Properties to set
         */
        function AuthenticationRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthenticationRequest token.
         * @member {string} token
         * @memberof connection.AuthenticationRequest
         * @instance
         */
        AuthenticationRequest.prototype.token = "";

        /**
         * Creates a new AuthenticationRequest instance using the specified properties.
         * @function create
         * @memberof connection.AuthenticationRequest
         * @static
         * @param {connection.IAuthenticationRequest=} [properties] Properties to set
         * @returns {connection.AuthenticationRequest} AuthenticationRequest instance
         */
        AuthenticationRequest.create = function create(properties) {
            return new AuthenticationRequest(properties);
        };

        /**
         * Encodes the specified AuthenticationRequest message. Does not implicitly {@link connection.AuthenticationRequest.verify|verify} messages.
         * @function encode
         * @memberof connection.AuthenticationRequest
         * @static
         * @param {connection.IAuthenticationRequest} message AuthenticationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticationRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified AuthenticationRequest message, length delimited. Does not implicitly {@link connection.AuthenticationRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof connection.AuthenticationRequest
         * @static
         * @param {connection.IAuthenticationRequest} message AuthenticationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticationRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthenticationRequest message from the specified reader or buffer.
         * @function decode
         * @memberof connection.AuthenticationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {connection.AuthenticationRequest} AuthenticationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticationRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.connection.AuthenticationRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AuthenticationRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof connection.AuthenticationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {connection.AuthenticationRequest} AuthenticationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticationRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthenticationRequest message.
         * @function verify
         * @memberof connection.AuthenticationRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthenticationRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates an AuthenticationRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof connection.AuthenticationRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {connection.AuthenticationRequest} AuthenticationRequest
         */
        AuthenticationRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.connection.AuthenticationRequest)
                return object;
            let message = new $root.connection.AuthenticationRequest();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from an AuthenticationRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof connection.AuthenticationRequest
         * @static
         * @param {connection.AuthenticationRequest} message AuthenticationRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthenticationRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this AuthenticationRequest to JSON.
         * @function toJSON
         * @memberof connection.AuthenticationRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthenticationRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AuthenticationRequest
         * @function getTypeUrl
         * @memberof connection.AuthenticationRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AuthenticationRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/connection.AuthenticationRequest";
        };

        return AuthenticationRequest;
    })();

    connection.AuthenticationResponse = (function() {

        /**
         * Properties of an AuthenticationResponse.
         * @memberof connection
         * @interface IAuthenticationResponse
         * @property {string|null} [session] AuthenticationResponse session
         */

        /**
         * Constructs a new AuthenticationResponse.
         * @memberof connection
         * @classdesc Represents an AuthenticationResponse.
         * @implements IAuthenticationResponse
         * @constructor
         * @param {connection.IAuthenticationResponse=} [properties] Properties to set
         */
        function AuthenticationResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthenticationResponse session.
         * @member {string} session
         * @memberof connection.AuthenticationResponse
         * @instance
         */
        AuthenticationResponse.prototype.session = "";

        /**
         * Creates a new AuthenticationResponse instance using the specified properties.
         * @function create
         * @memberof connection.AuthenticationResponse
         * @static
         * @param {connection.IAuthenticationResponse=} [properties] Properties to set
         * @returns {connection.AuthenticationResponse} AuthenticationResponse instance
         */
        AuthenticationResponse.create = function create(properties) {
            return new AuthenticationResponse(properties);
        };

        /**
         * Encodes the specified AuthenticationResponse message. Does not implicitly {@link connection.AuthenticationResponse.verify|verify} messages.
         * @function encode
         * @memberof connection.AuthenticationResponse
         * @static
         * @param {connection.IAuthenticationResponse} message AuthenticationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticationResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session != null && Object.hasOwnProperty.call(message, "session"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.session);
            return writer;
        };

        /**
         * Encodes the specified AuthenticationResponse message, length delimited. Does not implicitly {@link connection.AuthenticationResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof connection.AuthenticationResponse
         * @static
         * @param {connection.IAuthenticationResponse} message AuthenticationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticationResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthenticationResponse message from the specified reader or buffer.
         * @function decode
         * @memberof connection.AuthenticationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {connection.AuthenticationResponse} AuthenticationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticationResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.connection.AuthenticationResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.session = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AuthenticationResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof connection.AuthenticationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {connection.AuthenticationResponse} AuthenticationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticationResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthenticationResponse message.
         * @function verify
         * @memberof connection.AuthenticationResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthenticationResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session != null && message.hasOwnProperty("session"))
                if (!$util.isString(message.session))
                    return "session: string expected";
            return null;
        };

        /**
         * Creates an AuthenticationResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof connection.AuthenticationResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {connection.AuthenticationResponse} AuthenticationResponse
         */
        AuthenticationResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.connection.AuthenticationResponse)
                return object;
            let message = new $root.connection.AuthenticationResponse();
            if (object.session != null)
                message.session = String(object.session);
            return message;
        };

        /**
         * Creates a plain object from an AuthenticationResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof connection.AuthenticationResponse
         * @static
         * @param {connection.AuthenticationResponse} message AuthenticationResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthenticationResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.session = "";
            if (message.session != null && message.hasOwnProperty("session"))
                object.session = message.session;
            return object;
        };

        /**
         * Converts this AuthenticationResponse to JSON.
         * @function toJSON
         * @memberof connection.AuthenticationResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthenticationResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AuthenticationResponse
         * @function getTypeUrl
         * @memberof connection.AuthenticationResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AuthenticationResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/connection.AuthenticationResponse";
        };

        return AuthenticationResponse;
    })();

    connection.JoinPlayerRequest = (function() {

        /**
         * Properties of a JoinPlayerRequest.
         * @memberof connection
         * @interface IJoinPlayerRequest
         * @property {string|null} [token] JoinPlayerRequest token
         */

        /**
         * Constructs a new JoinPlayerRequest.
         * @memberof connection
         * @classdesc Represents a JoinPlayerRequest.
         * @implements IJoinPlayerRequest
         * @constructor
         * @param {connection.IJoinPlayerRequest=} [properties] Properties to set
         */
        function JoinPlayerRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinPlayerRequest token.
         * @member {string} token
         * @memberof connection.JoinPlayerRequest
         * @instance
         */
        JoinPlayerRequest.prototype.token = "";

        /**
         * Creates a new JoinPlayerRequest instance using the specified properties.
         * @function create
         * @memberof connection.JoinPlayerRequest
         * @static
         * @param {connection.IJoinPlayerRequest=} [properties] Properties to set
         * @returns {connection.JoinPlayerRequest} JoinPlayerRequest instance
         */
        JoinPlayerRequest.create = function create(properties) {
            return new JoinPlayerRequest(properties);
        };

        /**
         * Encodes the specified JoinPlayerRequest message. Does not implicitly {@link connection.JoinPlayerRequest.verify|verify} messages.
         * @function encode
         * @memberof connection.JoinPlayerRequest
         * @static
         * @param {connection.IJoinPlayerRequest} message JoinPlayerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinPlayerRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified JoinPlayerRequest message, length delimited. Does not implicitly {@link connection.JoinPlayerRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof connection.JoinPlayerRequest
         * @static
         * @param {connection.IJoinPlayerRequest} message JoinPlayerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinPlayerRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinPlayerRequest message from the specified reader or buffer.
         * @function decode
         * @memberof connection.JoinPlayerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {connection.JoinPlayerRequest} JoinPlayerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinPlayerRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.connection.JoinPlayerRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinPlayerRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof connection.JoinPlayerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {connection.JoinPlayerRequest} JoinPlayerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinPlayerRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinPlayerRequest message.
         * @function verify
         * @memberof connection.JoinPlayerRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinPlayerRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a JoinPlayerRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof connection.JoinPlayerRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {connection.JoinPlayerRequest} JoinPlayerRequest
         */
        JoinPlayerRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.connection.JoinPlayerRequest)
                return object;
            let message = new $root.connection.JoinPlayerRequest();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a JoinPlayerRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof connection.JoinPlayerRequest
         * @static
         * @param {connection.JoinPlayerRequest} message JoinPlayerRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinPlayerRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this JoinPlayerRequest to JSON.
         * @function toJSON
         * @memberof connection.JoinPlayerRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinPlayerRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for JoinPlayerRequest
         * @function getTypeUrl
         * @memberof connection.JoinPlayerRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        JoinPlayerRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/connection.JoinPlayerRequest";
        };

        return JoinPlayerRequest;
    })();

    connection.JoinPlayerResponse = (function() {

        /**
         * Properties of a JoinPlayerResponse.
         * @memberof connection
         * @interface IJoinPlayerResponse
         * @property {string|null} [name] JoinPlayerResponse name
         * @property {connection.Role|null} [role] JoinPlayerResponse role
         * @property {string|null} [id] JoinPlayerResponse id
         */

        /**
         * Constructs a new JoinPlayerResponse.
         * @memberof connection
         * @classdesc Represents a JoinPlayerResponse.
         * @implements IJoinPlayerResponse
         * @constructor
         * @param {connection.IJoinPlayerResponse=} [properties] Properties to set
         */
        function JoinPlayerResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinPlayerResponse name.
         * @member {string} name
         * @memberof connection.JoinPlayerResponse
         * @instance
         */
        JoinPlayerResponse.prototype.name = "";

        /**
         * JoinPlayerResponse role.
         * @member {connection.Role} role
         * @memberof connection.JoinPlayerResponse
         * @instance
         */
        JoinPlayerResponse.prototype.role = 0;

        /**
         * JoinPlayerResponse id.
         * @member {string} id
         * @memberof connection.JoinPlayerResponse
         * @instance
         */
        JoinPlayerResponse.prototype.id = "";

        /**
         * Creates a new JoinPlayerResponse instance using the specified properties.
         * @function create
         * @memberof connection.JoinPlayerResponse
         * @static
         * @param {connection.IJoinPlayerResponse=} [properties] Properties to set
         * @returns {connection.JoinPlayerResponse} JoinPlayerResponse instance
         */
        JoinPlayerResponse.create = function create(properties) {
            return new JoinPlayerResponse(properties);
        };

        /**
         * Encodes the specified JoinPlayerResponse message. Does not implicitly {@link connection.JoinPlayerResponse.verify|verify} messages.
         * @function encode
         * @memberof connection.JoinPlayerResponse
         * @static
         * @param {connection.IJoinPlayerResponse} message JoinPlayerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinPlayerResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.role);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified JoinPlayerResponse message, length delimited. Does not implicitly {@link connection.JoinPlayerResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof connection.JoinPlayerResponse
         * @static
         * @param {connection.IJoinPlayerResponse} message JoinPlayerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinPlayerResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinPlayerResponse message from the specified reader or buffer.
         * @function decode
         * @memberof connection.JoinPlayerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {connection.JoinPlayerResponse} JoinPlayerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinPlayerResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.connection.JoinPlayerResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.role = reader.int32();
                        break;
                    }
                case 3: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinPlayerResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof connection.JoinPlayerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {connection.JoinPlayerResponse} JoinPlayerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinPlayerResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinPlayerResponse message.
         * @function verify
         * @memberof connection.JoinPlayerResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinPlayerResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.role != null && message.hasOwnProperty("role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a JoinPlayerResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof connection.JoinPlayerResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {connection.JoinPlayerResponse} JoinPlayerResponse
         */
        JoinPlayerResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.connection.JoinPlayerResponse)
                return object;
            let message = new $root.connection.JoinPlayerResponse();
            if (object.name != null)
                message.name = String(object.name);
            switch (object.role) {
            default:
                if (typeof object.role === "number") {
                    message.role = object.role;
                    break;
                }
                break;
            case "USER":
            case 0:
                message.role = 0;
                break;
            case "MOD":
            case 1:
                message.role = 1;
                break;
            case "DEV":
            case 2:
                message.role = 2;
                break;
            }
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a JoinPlayerResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof connection.JoinPlayerResponse
         * @static
         * @param {connection.JoinPlayerResponse} message JoinPlayerResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinPlayerResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.role = options.enums === String ? "USER" : 0;
                object.id = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = options.enums === String ? $root.connection.Role[message.role] === undefined ? message.role : $root.connection.Role[message.role] : message.role;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this JoinPlayerResponse to JSON.
         * @function toJSON
         * @memberof connection.JoinPlayerResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinPlayerResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for JoinPlayerResponse
         * @function getTypeUrl
         * @memberof connection.JoinPlayerResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        JoinPlayerResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/connection.JoinPlayerResponse";
        };

        return JoinPlayerResponse;
    })();

    connection.AwardRequest = (function() {

        /**
         * Properties of an AwardRequest.
         * @memberof connection
         * @interface IAwardRequest
         * @property {string|null} [id] AwardRequest id
         * @property {number|null} [vp] AwardRequest vp
         * @property {string|null} [accessory] AwardRequest accessory
         */

        /**
         * Constructs a new AwardRequest.
         * @memberof connection
         * @classdesc Represents an AwardRequest.
         * @implements IAwardRequest
         * @constructor
         * @param {connection.IAwardRequest=} [properties] Properties to set
         */
        function AwardRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AwardRequest id.
         * @member {string} id
         * @memberof connection.AwardRequest
         * @instance
         */
        AwardRequest.prototype.id = "";

        /**
         * AwardRequest vp.
         * @member {number|null|undefined} vp
         * @memberof connection.AwardRequest
         * @instance
         */
        AwardRequest.prototype.vp = null;

        /**
         * AwardRequest accessory.
         * @member {string|null|undefined} accessory
         * @memberof connection.AwardRequest
         * @instance
         */
        AwardRequest.prototype.accessory = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AwardRequest.prototype, "_vp", {
            get: $util.oneOfGetter($oneOfFields = ["vp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AwardRequest.prototype, "_accessory", {
            get: $util.oneOfGetter($oneOfFields = ["accessory"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AwardRequest instance using the specified properties.
         * @function create
         * @memberof connection.AwardRequest
         * @static
         * @param {connection.IAwardRequest=} [properties] Properties to set
         * @returns {connection.AwardRequest} AwardRequest instance
         */
        AwardRequest.create = function create(properties) {
            return new AwardRequest(properties);
        };

        /**
         * Encodes the specified AwardRequest message. Does not implicitly {@link connection.AwardRequest.verify|verify} messages.
         * @function encode
         * @memberof connection.AwardRequest
         * @static
         * @param {connection.IAwardRequest} message AwardRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.vp != null && Object.hasOwnProperty.call(message, "vp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.vp);
            if (message.accessory != null && Object.hasOwnProperty.call(message, "accessory"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.accessory);
            return writer;
        };

        /**
         * Encodes the specified AwardRequest message, length delimited. Does not implicitly {@link connection.AwardRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof connection.AwardRequest
         * @static
         * @param {connection.IAwardRequest} message AwardRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AwardRequest message from the specified reader or buffer.
         * @function decode
         * @memberof connection.AwardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {connection.AwardRequest} AwardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.connection.AwardRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.vp = reader.uint32();
                        break;
                    }
                case 3: {
                        message.accessory = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AwardRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof connection.AwardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {connection.AwardRequest} AwardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AwardRequest message.
         * @function verify
         * @memberof connection.AwardRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AwardRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.vp != null && message.hasOwnProperty("vp")) {
                properties._vp = 1;
                if (!$util.isInteger(message.vp))
                    return "vp: integer expected";
            }
            if (message.accessory != null && message.hasOwnProperty("accessory")) {
                properties._accessory = 1;
                if (!$util.isString(message.accessory))
                    return "accessory: string expected";
            }
            return null;
        };

        /**
         * Creates an AwardRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof connection.AwardRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {connection.AwardRequest} AwardRequest
         */
        AwardRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.connection.AwardRequest)
                return object;
            let message = new $root.connection.AwardRequest();
            if (object.id != null)
                message.id = String(object.id);
            if (object.vp != null)
                message.vp = object.vp >>> 0;
            if (object.accessory != null)
                message.accessory = String(object.accessory);
            return message;
        };

        /**
         * Creates a plain object from an AwardRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof connection.AwardRequest
         * @static
         * @param {connection.AwardRequest} message AwardRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AwardRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.vp != null && message.hasOwnProperty("vp")) {
                object.vp = message.vp;
                if (options.oneofs)
                    object._vp = "vp";
            }
            if (message.accessory != null && message.hasOwnProperty("accessory")) {
                object.accessory = message.accessory;
                if (options.oneofs)
                    object._accessory = "accessory";
            }
            return object;
        };

        /**
         * Converts this AwardRequest to JSON.
         * @function toJSON
         * @memberof connection.AwardRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AwardRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AwardRequest
         * @function getTypeUrl
         * @memberof connection.AwardRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AwardRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/connection.AwardRequest";
        };

        return AwardRequest;
    })();

    connection.AwardResponse = (function() {

        /**
         * Properties of an AwardResponse.
         * @memberof connection
         * @interface IAwardResponse
         * @property {boolean|null} [success] AwardResponse success
         */

        /**
         * Constructs a new AwardResponse.
         * @memberof connection
         * @classdesc Represents an AwardResponse.
         * @implements IAwardResponse
         * @constructor
         * @param {connection.IAwardResponse=} [properties] Properties to set
         */
        function AwardResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AwardResponse success.
         * @member {boolean} success
         * @memberof connection.AwardResponse
         * @instance
         */
        AwardResponse.prototype.success = false;

        /**
         * Creates a new AwardResponse instance using the specified properties.
         * @function create
         * @memberof connection.AwardResponse
         * @static
         * @param {connection.IAwardResponse=} [properties] Properties to set
         * @returns {connection.AwardResponse} AwardResponse instance
         */
        AwardResponse.create = function create(properties) {
            return new AwardResponse(properties);
        };

        /**
         * Encodes the specified AwardResponse message. Does not implicitly {@link connection.AwardResponse.verify|verify} messages.
         * @function encode
         * @memberof connection.AwardResponse
         * @static
         * @param {connection.IAwardResponse} message AwardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            return writer;
        };

        /**
         * Encodes the specified AwardResponse message, length delimited. Does not implicitly {@link connection.AwardResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof connection.AwardResponse
         * @static
         * @param {connection.IAwardResponse} message AwardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AwardResponse message from the specified reader or buffer.
         * @function decode
         * @memberof connection.AwardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {connection.AwardResponse} AwardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.connection.AwardResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AwardResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof connection.AwardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {connection.AwardResponse} AwardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AwardResponse message.
         * @function verify
         * @memberof connection.AwardResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AwardResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            return null;
        };

        /**
         * Creates an AwardResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof connection.AwardResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {connection.AwardResponse} AwardResponse
         */
        AwardResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.connection.AwardResponse)
                return object;
            let message = new $root.connection.AwardResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            return message;
        };

        /**
         * Creates a plain object from an AwardResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof connection.AwardResponse
         * @static
         * @param {connection.AwardResponse} message AwardResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AwardResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.success = false;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            return object;
        };

        /**
         * Converts this AwardResponse to JSON.
         * @function toJSON
         * @memberof connection.AwardResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AwardResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AwardResponse
         * @function getTypeUrl
         * @memberof connection.AwardResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AwardResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/connection.AwardResponse";
        };

        return AwardResponse;
    })();

    /**
     * Role enum.
     * @name connection.Role
     * @enum {number}
     * @property {number} USER=0 USER value
     * @property {number} MOD=1 MOD value
     * @property {number} DEV=2 DEV value
     */
    connection.Role = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "USER"] = 0;
        values[valuesById[1] = "MOD"] = 1;
        values[valuesById[2] = "DEV"] = 2;
        return values;
    })();

    return connection;
})();

export { $root as default };
