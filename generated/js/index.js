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

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Package kind.
         * @member {"newPlayer"|"closePlayer"|"players"|"newEntities"|"closeEntities"|"areaInit"|"myself"|"updateEntities"|"updatePlayers"|undefined} kind
         * @memberof game.Package
         * @instance
         */
        Object.defineProperty(Package.prototype, "kind", {
            get: $util.oneOfGetter($oneOfFields = ["newPlayer", "closePlayer", "players", "newEntities", "closeEntities", "areaInit", "myself", "updateEntities", "updatePlayers"]),
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

export { $root as default };
