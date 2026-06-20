/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $Number = $util.global.Number, $String = $util.global.String, $Boolean = $util.global.Boolean, $parseInt = $util.global.parseInt, $BigInt = $util.global.BigInt, $isFinite = $util.global.isFinite, $Array = $util.global.Array;

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
        const valuesById = {}, values = $Object.create(valuesById);
        values[valuesById[0] = "USER"] = 0;
        values[valuesById[1] = "MOD"] = 1;
        values[valuesById[2] = "DEV"] = 2;
        return values;
    })();

    game.Chat = (function() {

        /**
         * Properties of a Chat.
         * @typedef {Object} game.Chat.$Properties
         * @property {number|null} [id] Chat id
         * @property {string|null} [content] Chat content
         * @property {string|null} [author] Chat author
         * @property {game.Role|null} [role] Chat role
         * @property {string|null} [world] Chat world
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Chat.
         * @memberof game
         * @interface IChat
         * @augments game.Chat.$Properties
         * @deprecated Use game.Chat.$Properties instead.
         */

        /**
         * Shape of a Chat.
         * @typedef {game.Chat.$Properties} game.Chat.$Shape
         */

        /**
         * Constructs a new Chat.
         * @memberof game
         * @classdesc Represents a Chat.
         * @constructor
         * @param {game.Chat.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const Chat = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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
         * @param {game.Chat.$Properties=} [properties] Properties to set
         * @returns {game.Chat} Chat instance
         * @type {{
         *   (properties: game.Chat.$Shape): game.Chat & game.Chat.$Shape;
         *   (properties?: game.Chat.$Properties): game.Chat;
         * }}
         */
        Chat.create = function(properties) {
            return new Chat(properties);
        };

        /**
         * Encodes the specified Chat message. Does not implicitly {@link game.Chat.verify|verify} messages.
         * @function encode
         * @memberof game.Chat
         * @static
         * @param {game.Chat.$Properties} message Chat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chat.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.content != null && $Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            if (message.author != null && $Object.hasOwnProperty.call(message, "author"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.author);
            if (message.role != null && $Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.role);
            if (message.world != null && $Object.hasOwnProperty.call(message, "world"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.world);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Chat message, length delimited. Does not implicitly {@link game.Chat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Chat
         * @static
         * @param {game.Chat.$Properties} message Chat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chat.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a Chat message from the specified reader or buffer.
         * @function decode
         * @memberof game.Chat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Chat & game.Chat.$Shape} Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chat.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.game.Chat(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.id = value;
                        else
                            delete message.id;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.content = value;
                        else
                            delete message.content;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.author = value;
                        else
                            delete message.author;
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.role = value;
                        else
                            delete message.role;
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.world = value;
                        else
                            delete message.world;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a Chat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Chat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Chat & game.Chat.$Shape} Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chat.decodeDelimited = function(reader) {
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
        Chat.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.content != null && $Object.hasOwnProperty.call(message, "content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.author != null && $Object.hasOwnProperty.call(message, "author"))
                if (!$util.isString(message.author))
                    return "author: string expected";
            if (message.role != null && $Object.hasOwnProperty.call(message, "role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.world != null && $Object.hasOwnProperty.call(message, "world"))
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
        Chat.fromObject = function (object, _depth) {
            if (object instanceof $root.game.Chat)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".game.Chat: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.game.Chat();
            if (object.id != null)
                if ($Number(object.id) !== 0)
                    message.id = object.id >>> 0;
            if (object.content != null)
                if (typeof object.content !== "string" || object.content.length)
                    message.content = $String(object.content);
            if (object.author != null)
                if (typeof object.author !== "string" || object.author.length)
                    message.author = $String(object.author);
            if (object.role !== 0 && (typeof object.role !== "string" || $root.game.Role[object.role] !== 0))
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
                if (typeof object.world !== "string" || object.world.length)
                    message.world = $String(object.world);
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
        Chat.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.content = "";
                object.author = "";
                object.role = options.enums === $String ? "USER" : 0;
                object.world = "";
            }
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                object.id = message.id;
            if (message.content != null && $Object.hasOwnProperty.call(message, "content"))
                object.content = message.content;
            if (message.author != null && $Object.hasOwnProperty.call(message, "author"))
                object.author = message.author;
            if (message.role != null && $Object.hasOwnProperty.call(message, "role"))
                object.role = options.enums === $String ? $root.game.Role[message.role] === $undefined ? message.role : $root.game.Role[message.role] : message.role;
            if (message.world != null && $Object.hasOwnProperty.call(message, "world"))
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
        Chat.prototype.toJSON = function() {
            return Chat.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Chat
         * @function getTypeUrl
         * @memberof game.Chat
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Chat.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.Chat";
        };

        return Chat;
    })();

    game.PackedEntity = (function() {

        /**
         * Properties of a PackedEntity.
         * @typedef {Object} game.PackedEntity.$Properties
         * @property {number|null} [typeId] PackedEntity typeId
         * @property {number|null} [x] PackedEntity x
         * @property {number|null} [y] PackedEntity y
         * @property {number|null} [radius] PackedEntity radius
         * @property {boolean|null} [harmless] PackedEntity harmless
         * @property {number|null} [state] PackedEntity state
         * @property {number|null} [stateMetadata] PackedEntity stateMetadata
         * @property {number|null} [alpha] PackedEntity alpha
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a PackedEntity.
         * @memberof game
         * @interface IPackedEntity
         * @augments game.PackedEntity.$Properties
         * @deprecated Use game.PackedEntity.$Properties instead.
         */

        /**
         * Shape of a PackedEntity.
         * @typedef {game.PackedEntity.$Properties} game.PackedEntity.$Shape
         */

        /**
         * Constructs a new PackedEntity.
         * @memberof game
         * @classdesc Represents a PackedEntity.
         * @constructor
         * @param {game.PackedEntity.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const PackedEntity = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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
         * @param {game.PackedEntity.$Properties=} [properties] Properties to set
         * @returns {game.PackedEntity} PackedEntity instance
         * @type {{
         *   (properties: game.PackedEntity.$Shape): game.PackedEntity & game.PackedEntity.$Shape;
         *   (properties?: game.PackedEntity.$Properties): game.PackedEntity;
         * }}
         */
        PackedEntity.create = function(properties) {
            return new PackedEntity(properties);
        };

        /**
         * Encodes the specified PackedEntity message. Does not implicitly {@link game.PackedEntity.verify|verify} messages.
         * @function encode
         * @memberof game.PackedEntity
         * @static
         * @param {game.PackedEntity.$Properties} message PackedEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PackedEntity.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.typeId != null && $Object.hasOwnProperty.call(message, "typeId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.typeId);
            if (message.x != null && $Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.x);
            if (message.y != null && $Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.y);
            if (message.radius != null && $Object.hasOwnProperty.call(message, "radius"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.radius);
            if (message.harmless != null && $Object.hasOwnProperty.call(message, "harmless"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.harmless);
            if (message.state != null && $Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.state);
            if (message.stateMetadata != null && $Object.hasOwnProperty.call(message, "stateMetadata"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.stateMetadata);
            if (message.alpha != null && $Object.hasOwnProperty.call(message, "alpha"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.alpha);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified PackedEntity message, length delimited. Does not implicitly {@link game.PackedEntity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PackedEntity
         * @static
         * @param {game.PackedEntity.$Properties} message PackedEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PackedEntity.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a PackedEntity message from the specified reader or buffer.
         * @function decode
         * @memberof game.PackedEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PackedEntity & game.PackedEntity.$Shape} PackedEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PackedEntity.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.game.PackedEntity(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.typeId = value;
                        else
                            delete message.typeId;
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.sint32())
                            message.x = value;
                        else
                            delete message.x;
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.sint32())
                            message.y = value;
                        else
                            delete message.y;
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.radius = value;
                        else
                            delete message.radius;
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.harmless = value;
                        else
                            delete message.harmless;
                        continue;
                    }
                case 7: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.state = value;
                        else
                            delete message.state;
                        continue;
                    }
                case 8: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.stateMetadata = value;
                        else
                            delete message.stateMetadata;
                        continue;
                    }
                case 9: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.alpha = value;
                        else
                            delete message.alpha;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a PackedEntity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PackedEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PackedEntity & game.PackedEntity.$Shape} PackedEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PackedEntity.decodeDelimited = function(reader) {
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
        PackedEntity.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.typeId != null && $Object.hasOwnProperty.call(message, "typeId"))
                if (!$util.isInteger(message.typeId))
                    return "typeId: integer expected";
            if (message.x != null && $Object.hasOwnProperty.call(message, "x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && $Object.hasOwnProperty.call(message, "y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.radius != null && $Object.hasOwnProperty.call(message, "radius"))
                if (!$util.isInteger(message.radius))
                    return "radius: integer expected";
            if (message.harmless != null && $Object.hasOwnProperty.call(message, "harmless"))
                if (typeof message.harmless !== "boolean")
                    return "harmless: boolean expected";
            if (message.state != null && $Object.hasOwnProperty.call(message, "state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.stateMetadata != null && $Object.hasOwnProperty.call(message, "stateMetadata"))
                if (!$util.isInteger(message.stateMetadata))
                    return "stateMetadata: integer expected";
            if (message.alpha != null && $Object.hasOwnProperty.call(message, "alpha"))
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
        PackedEntity.fromObject = function (object, _depth) {
            if (object instanceof $root.game.PackedEntity)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".game.PackedEntity: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.game.PackedEntity();
            if (object.typeId != null)
                if ($Number(object.typeId) !== 0)
                    message.typeId = object.typeId >>> 0;
            if (object.x != null)
                if ($Number(object.x) !== 0)
                    message.x = object.x | 0;
            if (object.y != null)
                if ($Number(object.y) !== 0)
                    message.y = object.y | 0;
            if (object.radius != null)
                if ($Number(object.radius) !== 0)
                    message.radius = object.radius >>> 0;
            if (object.harmless != null)
                if (object.harmless)
                    message.harmless = $Boolean(object.harmless);
            if (object.state != null)
                if ($Number(object.state) !== 0)
                    message.state = object.state >>> 0;
            if (object.stateMetadata != null)
                if ($Number(object.stateMetadata) !== 0)
                    message.stateMetadata = object.stateMetadata >>> 0;
            if (object.alpha != null)
                if ($Number(object.alpha) !== 0)
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
        PackedEntity.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
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
            if (message.typeId != null && $Object.hasOwnProperty.call(message, "typeId"))
                object.typeId = message.typeId;
            if (message.x != null && $Object.hasOwnProperty.call(message, "x"))
                object.x = message.x;
            if (message.y != null && $Object.hasOwnProperty.call(message, "y"))
                object.y = message.y;
            if (message.radius != null && $Object.hasOwnProperty.call(message, "radius"))
                object.radius = message.radius;
            if (message.harmless != null && $Object.hasOwnProperty.call(message, "harmless"))
                object.harmless = message.harmless;
            if (message.state != null && $Object.hasOwnProperty.call(message, "state"))
                object.state = message.state;
            if (message.stateMetadata != null && $Object.hasOwnProperty.call(message, "stateMetadata"))
                object.stateMetadata = message.stateMetadata;
            if (message.alpha != null && $Object.hasOwnProperty.call(message, "alpha"))
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
        PackedEntity.prototype.toJSON = function() {
            return PackedEntity.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for PackedEntity
         * @function getTypeUrl
         * @memberof game.PackedEntity
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PackedEntity.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.PackedEntity";
        };

        return PackedEntity;
    })();

    game.PackedPlayer = (function() {

        /**
         * Properties of a PackedPlayer.
         * @typedef {Object} game.PackedPlayer.$Properties
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
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a PackedPlayer.
         * @memberof game
         * @interface IPackedPlayer
         * @augments game.PackedPlayer.$Properties
         * @deprecated Use game.PackedPlayer.$Properties instead.
         */

        /**
         * Shape of a PackedPlayer.
         * @typedef {game.PackedPlayer.$Properties} game.PackedPlayer.$Shape
         */

        /**
         * Constructs a new PackedPlayer.
         * @memberof game
         * @classdesc Represents a PackedPlayer.
         * @constructor
         * @param {game.PackedPlayer.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const PackedPlayer = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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
         * @param {game.PackedPlayer.$Properties=} [properties] Properties to set
         * @returns {game.PackedPlayer} PackedPlayer instance
         * @type {{
         *   (properties: game.PackedPlayer.$Shape): game.PackedPlayer & game.PackedPlayer.$Shape;
         *   (properties?: game.PackedPlayer.$Properties): game.PackedPlayer;
         * }}
         */
        PackedPlayer.create = function(properties) {
            return new PackedPlayer(properties);
        };

        /**
         * Encodes the specified PackedPlayer message. Does not implicitly {@link game.PackedPlayer.verify|verify} messages.
         * @function encode
         * @memberof game.PackedPlayer
         * @static
         * @param {game.PackedPlayer.$Properties} message PackedPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PackedPlayer.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.id);
            if (message.x != null && $Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.x);
            if (message.y != null && $Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.y);
            if (message.radius != null && $Object.hasOwnProperty.call(message, "radius"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.radius);
            if (message.speed != null && $Object.hasOwnProperty.call(message, "speed"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.speed);
            if (message.energy != null && $Object.hasOwnProperty.call(message, "energy"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.energy);
            if (message.maxEnergy != null && $Object.hasOwnProperty.call(message, "maxEnergy"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.maxEnergy);
            if (message.deathTimer != null && $Object.hasOwnProperty.call(message, "deathTimer"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.deathTimer);
            if (message.state != null && $Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.state);
            if (message.stateMeta != null && $Object.hasOwnProperty.call(message, "stateMeta"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.stateMeta);
            if (message.area != null && $Object.hasOwnProperty.call(message, "area"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.area);
            if (message.world != null && $Object.hasOwnProperty.call(message, "world"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.world);
            if (message.died != null && $Object.hasOwnProperty.call(message, "died"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.died);
            if (message.hero != null && $Object.hasOwnProperty.call(message, "hero"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.hero);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified PackedPlayer message, length delimited. Does not implicitly {@link game.PackedPlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PackedPlayer
         * @static
         * @param {game.PackedPlayer.$Properties} message PackedPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PackedPlayer.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a PackedPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof game.PackedPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PackedPlayer & game.PackedPlayer.$Shape} PackedPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PackedPlayer.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.game.PackedPlayer(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.name = value;
                        else
                            delete message.name;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.id = value;
                        else
                            delete message.id;
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.sint32())
                            message.x = value;
                        else
                            delete message.x;
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.sint32())
                            message.y = value;
                        else
                            delete message.y;
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.radius = value;
                        else
                            delete message.radius;
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.speed = value;
                        else
                            delete message.speed;
                        continue;
                    }
                case 7: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.energy = value;
                        else
                            delete message.energy;
                        continue;
                    }
                case 8: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.maxEnergy = value;
                        else
                            delete message.maxEnergy;
                        continue;
                    }
                case 9: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.deathTimer = value;
                        else
                            delete message.deathTimer;
                        continue;
                    }
                case 10: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.state = value;
                        else
                            delete message.state;
                        continue;
                    }
                case 11: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.stateMeta = value;
                        else
                            delete message.stateMeta;
                        continue;
                    }
                case 12: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.area = value;
                        else
                            delete message.area;
                        continue;
                    }
                case 13: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.world = value;
                        else
                            delete message.world;
                        continue;
                    }
                case 14: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.died = value;
                        else
                            delete message.died;
                        continue;
                    }
                case 15: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.hero = value;
                        else
                            delete message.hero;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a PackedPlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PackedPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PackedPlayer & game.PackedPlayer.$Shape} PackedPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PackedPlayer.decodeDelimited = function(reader) {
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
        PackedPlayer.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.x != null && $Object.hasOwnProperty.call(message, "x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && $Object.hasOwnProperty.call(message, "y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.radius != null && $Object.hasOwnProperty.call(message, "radius"))
                if (!$util.isInteger(message.radius))
                    return "radius: integer expected";
            if (message.speed != null && $Object.hasOwnProperty.call(message, "speed"))
                if (!$util.isInteger(message.speed))
                    return "speed: integer expected";
            if (message.energy != null && $Object.hasOwnProperty.call(message, "energy"))
                if (!$util.isInteger(message.energy))
                    return "energy: integer expected";
            if (message.maxEnergy != null && $Object.hasOwnProperty.call(message, "maxEnergy"))
                if (!$util.isInteger(message.maxEnergy))
                    return "maxEnergy: integer expected";
            if (message.deathTimer != null && $Object.hasOwnProperty.call(message, "deathTimer"))
                if (!$util.isInteger(message.deathTimer))
                    return "deathTimer: integer expected";
            if (message.state != null && $Object.hasOwnProperty.call(message, "state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.stateMeta != null && $Object.hasOwnProperty.call(message, "stateMeta"))
                if (!$util.isInteger(message.stateMeta))
                    return "stateMeta: integer expected";
            if (message.area != null && $Object.hasOwnProperty.call(message, "area"))
                if (!$util.isInteger(message.area))
                    return "area: integer expected";
            if (message.world != null && $Object.hasOwnProperty.call(message, "world"))
                if (!$util.isString(message.world))
                    return "world: string expected";
            if (message.died != null && $Object.hasOwnProperty.call(message, "died"))
                if (typeof message.died !== "boolean")
                    return "died: boolean expected";
            if (message.hero != null && $Object.hasOwnProperty.call(message, "hero"))
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
        PackedPlayer.fromObject = function (object, _depth) {
            if (object instanceof $root.game.PackedPlayer)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".game.PackedPlayer: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.game.PackedPlayer();
            if (object.name != null)
                if (typeof object.name !== "string" || object.name.length)
                    message.name = $String(object.name);
            if (object.id != null)
                if ($Number(object.id) !== 0)
                    message.id = object.id >>> 0;
            if (object.x != null)
                if ($Number(object.x) !== 0)
                    message.x = object.x | 0;
            if (object.y != null)
                if ($Number(object.y) !== 0)
                    message.y = object.y | 0;
            if (object.radius != null)
                if ($Number(object.radius) !== 0)
                    message.radius = object.radius >>> 0;
            if (object.speed != null)
                if ($Number(object.speed) !== 0)
                    message.speed = object.speed >>> 0;
            if (object.energy != null)
                if ($Number(object.energy) !== 0)
                    message.energy = object.energy >>> 0;
            if (object.maxEnergy != null)
                if ($Number(object.maxEnergy) !== 0)
                    message.maxEnergy = object.maxEnergy >>> 0;
            if (object.deathTimer != null)
                if ($Number(object.deathTimer) !== 0)
                    message.deathTimer = object.deathTimer >>> 0;
            if (object.state != null)
                if ($Number(object.state) !== 0)
                    message.state = object.state >>> 0;
            if (object.stateMeta != null)
                if ($Number(object.stateMeta) !== 0)
                    message.stateMeta = object.stateMeta >>> 0;
            if (object.area != null)
                if ($Number(object.area) !== 0)
                    message.area = object.area >>> 0;
            if (object.world != null)
                if (typeof object.world !== "string" || object.world.length)
                    message.world = $String(object.world);
            if (object.died != null)
                if (object.died)
                    message.died = $Boolean(object.died);
            if (object.hero != null)
                if ($Number(object.hero) !== 0)
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
        PackedPlayer.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
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
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                object.name = message.name;
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                object.id = message.id;
            if (message.x != null && $Object.hasOwnProperty.call(message, "x"))
                object.x = message.x;
            if (message.y != null && $Object.hasOwnProperty.call(message, "y"))
                object.y = message.y;
            if (message.radius != null && $Object.hasOwnProperty.call(message, "radius"))
                object.radius = message.radius;
            if (message.speed != null && $Object.hasOwnProperty.call(message, "speed"))
                object.speed = message.speed;
            if (message.energy != null && $Object.hasOwnProperty.call(message, "energy"))
                object.energy = message.energy;
            if (message.maxEnergy != null && $Object.hasOwnProperty.call(message, "maxEnergy"))
                object.maxEnergy = message.maxEnergy;
            if (message.deathTimer != null && $Object.hasOwnProperty.call(message, "deathTimer"))
                object.deathTimer = message.deathTimer;
            if (message.state != null && $Object.hasOwnProperty.call(message, "state"))
                object.state = message.state;
            if (message.stateMeta != null && $Object.hasOwnProperty.call(message, "stateMeta"))
                object.stateMeta = message.stateMeta;
            if (message.area != null && $Object.hasOwnProperty.call(message, "area"))
                object.area = message.area;
            if (message.world != null && $Object.hasOwnProperty.call(message, "world"))
                object.world = message.world;
            if (message.died != null && $Object.hasOwnProperty.call(message, "died"))
                object.died = message.died;
            if (message.hero != null && $Object.hasOwnProperty.call(message, "hero"))
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
        PackedPlayer.prototype.toJSON = function() {
            return PackedPlayer.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for PackedPlayer
         * @function getTypeUrl
         * @memberof game.PackedPlayer
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PackedPlayer.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.PackedPlayer";
        };

        return PackedPlayer;
    })();

    game.PartialEntity = (function() {

        /**
         * Properties of a PartialEntity.
         * @typedef {Object} game.PartialEntity.$Properties
         * @property {number|null} [x] PartialEntity x
         * @property {number|null} [y] PartialEntity y
         * @property {number|null} [radius] PartialEntity radius
         * @property {boolean|null} [harmless] PartialEntity harmless
         * @property {number|null} [state] PartialEntity state
         * @property {number|null} [stateMetadata] PartialEntity stateMetadata
         * @property {number|null} [alpha] PartialEntity alpha
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a PartialEntity.
         * @memberof game
         * @interface IPartialEntity
         * @augments game.PartialEntity.$Properties
         * @deprecated Use game.PartialEntity.$Properties instead.
         */

        /**
         * Shape of a PartialEntity.
         * @typedef {game.PartialEntity.$Properties} game.PartialEntity.$Shape
         */

        /**
         * Constructs a new PartialEntity.
         * @memberof game
         * @classdesc Represents a PartialEntity.
         * @constructor
         * @param {game.PartialEntity.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const PartialEntity = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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
        $Object.defineProperty(PartialEntity.prototype, "_x", {
            get: $util.oneOfGetter($oneOfFields = ["x"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PartialEntity.prototype, "_y", {
            get: $util.oneOfGetter($oneOfFields = ["y"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PartialEntity.prototype, "_radius", {
            get: $util.oneOfGetter($oneOfFields = ["radius"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PartialEntity.prototype, "_harmless", {
            get: $util.oneOfGetter($oneOfFields = ["harmless"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PartialEntity.prototype, "_state", {
            get: $util.oneOfGetter($oneOfFields = ["state"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PartialEntity.prototype, "_stateMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["stateMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PartialEntity.prototype, "_alpha", {
            get: $util.oneOfGetter($oneOfFields = ["alpha"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PartialEntity instance using the specified properties.
         * @function create
         * @memberof game.PartialEntity
         * @static
         * @param {game.PartialEntity.$Properties=} [properties] Properties to set
         * @returns {game.PartialEntity} PartialEntity instance
         * @type {{
         *   (properties: game.PartialEntity.$Shape): game.PartialEntity & game.PartialEntity.$Shape;
         *   (properties?: game.PartialEntity.$Properties): game.PartialEntity;
         * }}
         */
        PartialEntity.create = function(properties) {
            return new PartialEntity(properties);
        };

        /**
         * Encodes the specified PartialEntity message. Does not implicitly {@link game.PartialEntity.verify|verify} messages.
         * @function encode
         * @memberof game.PartialEntity
         * @static
         * @param {game.PartialEntity.$Properties} message PartialEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PartialEntity.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.x != null && $Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.x);
            if (message.y != null && $Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.y);
            if (message.radius != null && $Object.hasOwnProperty.call(message, "radius"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.radius);
            if (message.harmless != null && $Object.hasOwnProperty.call(message, "harmless"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.harmless);
            if (message.state != null && $Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.state);
            if (message.stateMetadata != null && $Object.hasOwnProperty.call(message, "stateMetadata"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.stateMetadata);
            if (message.alpha != null && $Object.hasOwnProperty.call(message, "alpha"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.alpha);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified PartialEntity message, length delimited. Does not implicitly {@link game.PartialEntity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PartialEntity
         * @static
         * @param {game.PartialEntity.$Properties} message PartialEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PartialEntity.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a PartialEntity message from the specified reader or buffer.
         * @function decode
         * @memberof game.PartialEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PartialEntity & game.PartialEntity.$Shape} PartialEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PartialEntity.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.game.PartialEntity();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.x = reader.sint32();
                        message._x = "x";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.y = reader.sint32();
                        message._y = "y";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.radius = reader.uint32();
                        message._radius = "radius";
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        message.harmless = reader.bool();
                        message._harmless = "harmless";
                        continue;
                    }
                case 7: {
                        if (wireType !== 0)
                            break;
                        message.state = reader.uint32();
                        message._state = "state";
                        continue;
                    }
                case 8: {
                        if (wireType !== 0)
                            break;
                        message.stateMetadata = reader.uint32();
                        message._stateMetadata = "stateMetadata";
                        continue;
                    }
                case 9: {
                        if (wireType !== 0)
                            break;
                        message.alpha = reader.uint32();
                        message._alpha = "alpha";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a PartialEntity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PartialEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PartialEntity & game.PartialEntity.$Shape} PartialEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PartialEntity.decodeDelimited = function(reader) {
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
        PartialEntity.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.x != null && $Object.hasOwnProperty.call(message, "x")) {
                properties._x = 1;
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            }
            if (message.y != null && $Object.hasOwnProperty.call(message, "y")) {
                properties._y = 1;
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            }
            if (message.radius != null && $Object.hasOwnProperty.call(message, "radius")) {
                properties._radius = 1;
                if (!$util.isInteger(message.radius))
                    return "radius: integer expected";
            }
            if (message.harmless != null && $Object.hasOwnProperty.call(message, "harmless")) {
                properties._harmless = 1;
                if (typeof message.harmless !== "boolean")
                    return "harmless: boolean expected";
            }
            if (message.state != null && $Object.hasOwnProperty.call(message, "state")) {
                properties._state = 1;
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            }
            if (message.stateMetadata != null && $Object.hasOwnProperty.call(message, "stateMetadata")) {
                properties._stateMetadata = 1;
                if (!$util.isInteger(message.stateMetadata))
                    return "stateMetadata: integer expected";
            }
            if (message.alpha != null && $Object.hasOwnProperty.call(message, "alpha")) {
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
        PartialEntity.fromObject = function (object, _depth) {
            if (object instanceof $root.game.PartialEntity)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".game.PartialEntity: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.game.PartialEntity();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.radius != null)
                message.radius = object.radius >>> 0;
            if (object.harmless != null)
                message.harmless = $Boolean(object.harmless);
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
        PartialEntity.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.x != null && $Object.hasOwnProperty.call(message, "x"))
                object.x = message.x;
            if (message.y != null && $Object.hasOwnProperty.call(message, "y"))
                object.y = message.y;
            if (message.radius != null && $Object.hasOwnProperty.call(message, "radius"))
                object.radius = message.radius;
            if (message.harmless != null && $Object.hasOwnProperty.call(message, "harmless"))
                object.harmless = message.harmless;
            if (message.state != null && $Object.hasOwnProperty.call(message, "state"))
                object.state = message.state;
            if (message.stateMetadata != null && $Object.hasOwnProperty.call(message, "stateMetadata"))
                object.stateMetadata = message.stateMetadata;
            if (message.alpha != null && $Object.hasOwnProperty.call(message, "alpha"))
                object.alpha = message.alpha;
            return object;
        };

        /**
         * Converts this PartialEntity to JSON.
         * @function toJSON
         * @memberof game.PartialEntity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PartialEntity.prototype.toJSON = function() {
            return PartialEntity.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for PartialEntity
         * @function getTypeUrl
         * @memberof game.PartialEntity
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PartialEntity.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.PartialEntity";
        };

        return PartialEntity;
    })();

    game.PartialPlayer = (function() {

        /**
         * Properties of a PartialPlayer.
         * @typedef {Object} game.PartialPlayer.$Properties
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
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a PartialPlayer.
         * @memberof game
         * @interface IPartialPlayer
         * @augments game.PartialPlayer.$Properties
         * @deprecated Use game.PartialPlayer.$Properties instead.
         */

        /**
         * Shape of a PartialPlayer.
         * @typedef {game.PartialPlayer.$Properties} game.PartialPlayer.$Shape
         */

        /**
         * Constructs a new PartialPlayer.
         * @memberof game
         * @classdesc Represents a PartialPlayer.
         * @constructor
         * @param {game.PartialPlayer.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const PartialPlayer = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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
        $Object.defineProperty(PartialPlayer.prototype, "_x", {
            get: $util.oneOfGetter($oneOfFields = ["x"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PartialPlayer.prototype, "_y", {
            get: $util.oneOfGetter($oneOfFields = ["y"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PartialPlayer.prototype, "_radius", {
            get: $util.oneOfGetter($oneOfFields = ["radius"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PartialPlayer.prototype, "_speed", {
            get: $util.oneOfGetter($oneOfFields = ["speed"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PartialPlayer.prototype, "_energy", {
            get: $util.oneOfGetter($oneOfFields = ["energy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PartialPlayer.prototype, "_maxEnergy", {
            get: $util.oneOfGetter($oneOfFields = ["maxEnergy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PartialPlayer.prototype, "_deathTimer", {
            get: $util.oneOfGetter($oneOfFields = ["deathTimer"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PartialPlayer.prototype, "_state", {
            get: $util.oneOfGetter($oneOfFields = ["state"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PartialPlayer.prototype, "_stateMeta", {
            get: $util.oneOfGetter($oneOfFields = ["stateMeta"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PartialPlayer.prototype, "_area", {
            get: $util.oneOfGetter($oneOfFields = ["area"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PartialPlayer.prototype, "_world", {
            get: $util.oneOfGetter($oneOfFields = ["world"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PartialPlayer.prototype, "_died", {
            get: $util.oneOfGetter($oneOfFields = ["died"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PartialPlayer instance using the specified properties.
         * @function create
         * @memberof game.PartialPlayer
         * @static
         * @param {game.PartialPlayer.$Properties=} [properties] Properties to set
         * @returns {game.PartialPlayer} PartialPlayer instance
         * @type {{
         *   (properties: game.PartialPlayer.$Shape): game.PartialPlayer & game.PartialPlayer.$Shape;
         *   (properties?: game.PartialPlayer.$Properties): game.PartialPlayer;
         * }}
         */
        PartialPlayer.create = function(properties) {
            return new PartialPlayer(properties);
        };

        /**
         * Encodes the specified PartialPlayer message. Does not implicitly {@link game.PartialPlayer.verify|verify} messages.
         * @function encode
         * @memberof game.PartialPlayer
         * @static
         * @param {game.PartialPlayer.$Properties} message PartialPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PartialPlayer.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.x != null && $Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.x);
            if (message.y != null && $Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.y);
            if (message.radius != null && $Object.hasOwnProperty.call(message, "radius"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.radius);
            if (message.speed != null && $Object.hasOwnProperty.call(message, "speed"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.speed);
            if (message.energy != null && $Object.hasOwnProperty.call(message, "energy"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.energy);
            if (message.maxEnergy != null && $Object.hasOwnProperty.call(message, "maxEnergy"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.maxEnergy);
            if (message.deathTimer != null && $Object.hasOwnProperty.call(message, "deathTimer"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.deathTimer);
            if (message.state != null && $Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.state);
            if (message.stateMeta != null && $Object.hasOwnProperty.call(message, "stateMeta"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.stateMeta);
            if (message.area != null && $Object.hasOwnProperty.call(message, "area"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.area);
            if (message.world != null && $Object.hasOwnProperty.call(message, "world"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.world);
            if (message.died != null && $Object.hasOwnProperty.call(message, "died"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.died);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified PartialPlayer message, length delimited. Does not implicitly {@link game.PartialPlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PartialPlayer
         * @static
         * @param {game.PartialPlayer.$Properties} message PartialPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PartialPlayer.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a PartialPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof game.PartialPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PartialPlayer & game.PartialPlayer.$Shape} PartialPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PartialPlayer.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.game.PartialPlayer();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.x = reader.sint32();
                        message._x = "x";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.y = reader.sint32();
                        message._y = "y";
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        message.radius = reader.uint32();
                        message._radius = "radius";
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        message.speed = reader.uint32();
                        message._speed = "speed";
                        continue;
                    }
                case 7: {
                        if (wireType !== 0)
                            break;
                        message.energy = reader.uint32();
                        message._energy = "energy";
                        continue;
                    }
                case 8: {
                        if (wireType !== 0)
                            break;
                        message.maxEnergy = reader.uint32();
                        message._maxEnergy = "maxEnergy";
                        continue;
                    }
                case 9: {
                        if (wireType !== 0)
                            break;
                        message.deathTimer = reader.uint32();
                        message._deathTimer = "deathTimer";
                        continue;
                    }
                case 10: {
                        if (wireType !== 0)
                            break;
                        message.state = reader.uint32();
                        message._state = "state";
                        continue;
                    }
                case 11: {
                        if (wireType !== 0)
                            break;
                        message.stateMeta = reader.uint32();
                        message._stateMeta = "stateMeta";
                        continue;
                    }
                case 12: {
                        if (wireType !== 0)
                            break;
                        message.area = reader.uint32();
                        message._area = "area";
                        continue;
                    }
                case 13: {
                        if (wireType !== 2)
                            break;
                        message.world = reader.stringVerify();
                        message._world = "world";
                        continue;
                    }
                case 14: {
                        if (wireType !== 0)
                            break;
                        message.died = reader.bool();
                        message._died = "died";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a PartialPlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PartialPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PartialPlayer & game.PartialPlayer.$Shape} PartialPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PartialPlayer.decodeDelimited = function(reader) {
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
        PartialPlayer.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.x != null && $Object.hasOwnProperty.call(message, "x")) {
                properties._x = 1;
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            }
            if (message.y != null && $Object.hasOwnProperty.call(message, "y")) {
                properties._y = 1;
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            }
            if (message.radius != null && $Object.hasOwnProperty.call(message, "radius")) {
                properties._radius = 1;
                if (!$util.isInteger(message.radius))
                    return "radius: integer expected";
            }
            if (message.speed != null && $Object.hasOwnProperty.call(message, "speed")) {
                properties._speed = 1;
                if (!$util.isInteger(message.speed))
                    return "speed: integer expected";
            }
            if (message.energy != null && $Object.hasOwnProperty.call(message, "energy")) {
                properties._energy = 1;
                if (!$util.isInteger(message.energy))
                    return "energy: integer expected";
            }
            if (message.maxEnergy != null && $Object.hasOwnProperty.call(message, "maxEnergy")) {
                properties._maxEnergy = 1;
                if (!$util.isInteger(message.maxEnergy))
                    return "maxEnergy: integer expected";
            }
            if (message.deathTimer != null && $Object.hasOwnProperty.call(message, "deathTimer")) {
                properties._deathTimer = 1;
                if (!$util.isInteger(message.deathTimer))
                    return "deathTimer: integer expected";
            }
            if (message.state != null && $Object.hasOwnProperty.call(message, "state")) {
                properties._state = 1;
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            }
            if (message.stateMeta != null && $Object.hasOwnProperty.call(message, "stateMeta")) {
                properties._stateMeta = 1;
                if (!$util.isInteger(message.stateMeta))
                    return "stateMeta: integer expected";
            }
            if (message.area != null && $Object.hasOwnProperty.call(message, "area")) {
                properties._area = 1;
                if (!$util.isInteger(message.area))
                    return "area: integer expected";
            }
            if (message.world != null && $Object.hasOwnProperty.call(message, "world")) {
                properties._world = 1;
                if (!$util.isString(message.world))
                    return "world: string expected";
            }
            if (message.died != null && $Object.hasOwnProperty.call(message, "died")) {
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
        PartialPlayer.fromObject = function (object, _depth) {
            if (object instanceof $root.game.PartialPlayer)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".game.PartialPlayer: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
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
                message.world = $String(object.world);
            if (object.died != null)
                message.died = $Boolean(object.died);
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
        PartialPlayer.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.x != null && $Object.hasOwnProperty.call(message, "x"))
                object.x = message.x;
            if (message.y != null && $Object.hasOwnProperty.call(message, "y"))
                object.y = message.y;
            if (message.radius != null && $Object.hasOwnProperty.call(message, "radius"))
                object.radius = message.radius;
            if (message.speed != null && $Object.hasOwnProperty.call(message, "speed"))
                object.speed = message.speed;
            if (message.energy != null && $Object.hasOwnProperty.call(message, "energy"))
                object.energy = message.energy;
            if (message.maxEnergy != null && $Object.hasOwnProperty.call(message, "maxEnergy"))
                object.maxEnergy = message.maxEnergy;
            if (message.deathTimer != null && $Object.hasOwnProperty.call(message, "deathTimer"))
                object.deathTimer = message.deathTimer;
            if (message.state != null && $Object.hasOwnProperty.call(message, "state"))
                object.state = message.state;
            if (message.stateMeta != null && $Object.hasOwnProperty.call(message, "stateMeta"))
                object.stateMeta = message.stateMeta;
            if (message.area != null && $Object.hasOwnProperty.call(message, "area"))
                object.area = message.area;
            if (message.world != null && $Object.hasOwnProperty.call(message, "world"))
                object.world = message.world;
            if (message.died != null && $Object.hasOwnProperty.call(message, "died"))
                object.died = message.died;
            return object;
        };

        /**
         * Converts this PartialPlayer to JSON.
         * @function toJSON
         * @memberof game.PartialPlayer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PartialPlayer.prototype.toJSON = function() {
            return PartialPlayer.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for PartialPlayer
         * @function getTypeUrl
         * @memberof game.PartialPlayer
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PartialPlayer.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.PartialPlayer";
        };

        return PartialPlayer;
    })();

    game.PackedArea = (function() {

        /**
         * Properties of a PackedArea.
         * @typedef {Object} game.PackedArea.$Properties
         * @property {number|null} [w] PackedArea w
         * @property {number|null} [h] PackedArea h
         * @property {number|Long|null} [area] PackedArea area
         * @property {string|null} [world] PackedArea world
         * @property {Object.<string,game.PackedEntity.$Properties>|null} [entities] PackedArea entities
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a PackedArea.
         * @memberof game
         * @interface IPackedArea
         * @augments game.PackedArea.$Properties
         * @deprecated Use game.PackedArea.$Properties instead.
         */

        /**
         * Shape of a PackedArea.
         * @typedef {game.PackedArea.$Properties} game.PackedArea.$Shape
         */

        /**
         * Constructs a new PackedArea.
         * @memberof game
         * @classdesc Represents a PackedArea.
         * @constructor
         * @param {game.PackedArea.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const PackedArea = function (properties) {
            this.entities = {};
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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
         * @member {Object.<string,game.PackedEntity.$Properties>} entities
         * @memberof game.PackedArea
         * @instance
         */
        PackedArea.prototype.entities = $util.emptyObject;

        /**
         * Creates a new PackedArea instance using the specified properties.
         * @function create
         * @memberof game.PackedArea
         * @static
         * @param {game.PackedArea.$Properties=} [properties] Properties to set
         * @returns {game.PackedArea} PackedArea instance
         * @type {{
         *   (properties: game.PackedArea.$Shape): game.PackedArea & game.PackedArea.$Shape;
         *   (properties?: game.PackedArea.$Properties): game.PackedArea;
         * }}
         */
        PackedArea.create = function(properties) {
            return new PackedArea(properties);
        };

        /**
         * Encodes the specified PackedArea message. Does not implicitly {@link game.PackedArea.verify|verify} messages.
         * @function encode
         * @memberof game.PackedArea
         * @static
         * @param {game.PackedArea.$Properties} message PackedArea message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PackedArea.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.w != null && $Object.hasOwnProperty.call(message, "w"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.w);
            if (message.h != null && $Object.hasOwnProperty.call(message, "h"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.h);
            if (message.area != null && $Object.hasOwnProperty.call(message, "area"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.area);
            if (message.world != null && $Object.hasOwnProperty.call(message, "world"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.world);
            if (message.entities != null && $Object.hasOwnProperty.call(message, "entities"))
                for (let keys = $Object.keys(message.entities), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 0 =*/8).uint64($util.longFromKey(keys[i], true));
                    $root.game.PackedEntity.encode(message.entities[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim().ldelim();
                }
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified PackedArea message, length delimited. Does not implicitly {@link game.PackedArea.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PackedArea
         * @static
         * @param {game.PackedArea.$Properties} message PackedArea message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PackedArea.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a PackedArea message from the specified reader or buffer.
         * @function decode
         * @memberof game.PackedArea
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PackedArea & game.PackedArea.$Shape} PackedArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PackedArea.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.game.PackedArea(), key, value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 5)
                            break;
                        if ((value = reader.float()) !== 0)
                            message.w = value;
                        else
                            delete message.w;
                        continue;
                    }
                case 2: {
                        if (wireType !== 5)
                            break;
                        if ((value = reader.float()) !== 0)
                            message.h = value;
                        else
                            delete message.h;
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.uint64()) === "object" ? value.low || value.high : value !== 0)
                            message.area = value;
                        else
                            delete message.area;
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.world = value;
                        else
                            delete message.world;
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        if (message.entities === $util.emptyObject)
                            message.entities = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.tag();
                            wireType = tag2 & 7;
                            switch (tag2 >>>= 3) {
                            case 1:
                                if (wireType !== 0)
                                    break;
                                key = reader.uint64();
                                continue;
                            case 2:
                                if (wireType !== 2)
                                    break;
                                value = $root.game.PackedEntity.decode(reader, reader.uint32(), $undefined, _depth + 1);
                                continue;
                            }
                            reader.skipType(wireType, _depth, tag2);
                        }
                        message.entities[typeof key === "object" ? $util.longToHash(key) : key] = value || new $root.game.PackedEntity();
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a PackedArea message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PackedArea
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PackedArea & game.PackedArea.$Shape} PackedArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PackedArea.decodeDelimited = function(reader) {
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
        PackedArea.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.w != null && $Object.hasOwnProperty.call(message, "w"))
                if (typeof message.w !== "number")
                    return "w: number expected";
            if (message.h != null && $Object.hasOwnProperty.call(message, "h"))
                if (typeof message.h !== "number")
                    return "h: number expected";
            if (message.area != null && $Object.hasOwnProperty.call(message, "area"))
                if (!$util.isInteger(message.area) && !(message.area && $util.isInteger(message.area.low) && $util.isInteger(message.area.high)))
                    return "area: integer|Long expected";
            if (message.world != null && $Object.hasOwnProperty.call(message, "world"))
                if (!$util.isString(message.world))
                    return "world: string expected";
            if (message.entities != null && $Object.hasOwnProperty.call(message, "entities")) {
                if (!$util.isObject(message.entities))
                    return "entities: object expected";
                let key = $Object.keys(message.entities);
                for (let i = 0; i < key.length; ++i) {
                    if (!$util.key64Re.test(key[i]))
                        return "entities: integer|Long key{k:uint64} expected";
                    {
                        let error = $root.game.PackedEntity.verify(message.entities[key[i]], _depth + 1);
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
        PackedArea.fromObject = function (object, _depth) {
            if (object instanceof $root.game.PackedArea)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".game.PackedArea: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.game.PackedArea();
            if (object.w != null)
                if ($Number(object.w) !== 0)
                    message.w = $Number(object.w);
            if (object.h != null)
                if ($Number(object.h) !== 0)
                    message.h = $Number(object.h);
            if (object.area != null)
                if (typeof object.area === "object" ? object.area.low || object.area.high : $Number(object.area) !== 0)
                    if ($util.Long)
                        message.area = $util.Long.fromValue(object.area, true);
                    else if (typeof object.area === "string")
                        message.area = $parseInt(object.area, 10);
                    else if (typeof object.area === "number")
                        message.area = object.area;
                    else if (typeof object.area === "object")
                        message.area = new $util.LongBits(object.area.low >>> 0, object.area.high >>> 0).toNumber(true);
            if (object.world != null)
                if (typeof object.world !== "string" || object.world.length)
                    message.world = $String(object.world);
            if (object.entities) {
                if (!$util.isObject(object.entities))
                    throw $TypeError(".game.PackedArea.entities: object expected");
                message.entities = {};
                for (let keys = $Object.keys(object.entities), i = 0; i < keys.length; ++i) {
                    if (keys[i] === "__proto__")
                        $util.makeProp(message.entities, keys[i]);
                    if (!$util.isObject(object.entities[keys[i]]))
                        throw $TypeError(".game.PackedArea.entities: object expected");
                    message.entities[keys[i]] = $root.game.PackedEntity.fromObject(object.entities[keys[i]], _depth + 1);
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
        PackedArea.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.objects || options.defaults)
                object.entities = {};
            if (options.defaults) {
                object.w = 0;
                object.h = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.area = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.area = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                object.world = "";
            }
            if (message.w != null && $Object.hasOwnProperty.call(message, "w"))
                object.w = options.json && !$isFinite(message.w) ? $String(message.w) : message.w;
            if (message.h != null && $Object.hasOwnProperty.call(message, "h"))
                object.h = options.json && !$isFinite(message.h) ? $String(message.h) : message.h;
            if (message.area != null && $Object.hasOwnProperty.call(message, "area"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.area = typeof message.area === "number" ? $BigInt(message.area) : $util.Long.fromBits(message.area.low >>> 0, message.area.high >>> 0, true).toBigInt();
                else if (typeof message.area === "number")
                    object.area = options.longs === $String ? $String(message.area) : message.area;
                else
                    object.area = options.longs === $String ? $util.Long.prototype.toString.call(message.area) : options.longs === $Number ? new $util.LongBits(message.area.low >>> 0, message.area.high >>> 0).toNumber(true) : message.area;
            if (message.world != null && $Object.hasOwnProperty.call(message, "world"))
                object.world = message.world;
            let keys2;
            if (message.entities && (keys2 = $Object.keys(message.entities)).length) {
                object.entities = {};
                for (let j = 0; j < keys2.length; ++j) {
                    let k2 = $util.longFromKey(keys2[j], true).toString();
                    if (keys2[j] === "__proto__")
                        $util.makeProp(object.entities, keys2[j]);
                    object.entities[k2] = $root.game.PackedEntity.toObject(message.entities[keys2[j]], options, _depth + 1);
                }
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
        PackedArea.prototype.toJSON = function() {
            return PackedArea.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for PackedArea
         * @function getTypeUrl
         * @memberof game.PackedArea
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PackedArea.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.PackedArea";
        };

        return PackedArea;
    })();

    game.Package = (function() {

        /**
         * Properties of a Package.
         * @typedef {Object} game.Package.$Properties
         * @property {game.PackedPlayer.$Properties|null} [newPlayer] Package newPlayer
         * @property {number|Long|null} [closePlayer] Package closePlayer
         * @property {game.Players.$Properties|null} [players] Package players
         * @property {game.Entities.$Properties|null} [newEntities] Package newEntities
         * @property {game.CloseEntities.$Properties|null} [closeEntities] Package closeEntities
         * @property {game.PackedArea.$Properties|null} [areaInit] Package areaInit
         * @property {game.PackedPlayer.$Properties|null} [myself] Package myself
         * @property {game.UpdateEntitiesMap.$Properties|null} [updateEntities] Package updateEntities
         * @property {game.UpdatePlayersMap.$Properties|null} [updatePlayers] Package updatePlayers
         * @property {game.Chat.$Properties|null} [chatMessage] Package chatMessage
         * @property {"newPlayer"|"closePlayer"|"players"|"newEntities"|"closeEntities"|"areaInit"|"myself"|"updateEntities"|"updatePlayers"|"chatMessage"} [kind] Package kind
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Package.
         * @memberof game
         * @interface IPackage
         * @augments game.Package.$Properties
         * @deprecated Use game.Package.$Properties instead.
         */

        /**
         * Narrowed shape of a Package.
         * @typedef {{
         *   newPlayer?: game.PackedPlayer.$Shape|null;
         *   closePlayer?: number|Long|null;
         *   players?: game.Players.$Shape|null;
         *   newEntities?: game.Entities.$Shape|null;
         *   closeEntities?: game.CloseEntities.$Shape|null;
         *   areaInit?: game.PackedArea.$Shape|null;
         *   myself?: game.PackedPlayer.$Shape|null;
         *   updateEntities?: game.UpdateEntitiesMap.$Shape|null;
         *   updatePlayers?: game.UpdatePlayersMap.$Shape|null;
         *   chatMessage?: game.Chat.$Shape|null;
         *   $unknowns?: Array.<Uint8Array>;
         * } & (
         *   ({ kind?: undefined; newPlayer?: null; closePlayer?: null; players?: null; newEntities?: null; closeEntities?: null; areaInit?: null; myself?: null; updateEntities?: null; updatePlayers?: null; chatMessage?: null }|{ kind?: "newPlayer"; newPlayer: game.PackedPlayer.$Shape; closePlayer?: null; players?: null; newEntities?: null; closeEntities?: null; areaInit?: null; myself?: null; updateEntities?: null; updatePlayers?: null; chatMessage?: null }|{ kind?: "closePlayer"; newPlayer?: null; closePlayer: number|Long; players?: null; newEntities?: null; closeEntities?: null; areaInit?: null; myself?: null; updateEntities?: null; updatePlayers?: null; chatMessage?: null }|{ kind?: "players"; newPlayer?: null; closePlayer?: null; players: game.Players.$Shape; newEntities?: null; closeEntities?: null; areaInit?: null; myself?: null; updateEntities?: null; updatePlayers?: null; chatMessage?: null }|{ kind?: "newEntities"; newPlayer?: null; closePlayer?: null; players?: null; newEntities: game.Entities.$Shape; closeEntities?: null; areaInit?: null; myself?: null; updateEntities?: null; updatePlayers?: null; chatMessage?: null }|{ kind?: "closeEntities"; newPlayer?: null; closePlayer?: null; players?: null; newEntities?: null; closeEntities: game.CloseEntities.$Shape; areaInit?: null; myself?: null; updateEntities?: null; updatePlayers?: null; chatMessage?: null }|{ kind?: "areaInit"; newPlayer?: null; closePlayer?: null; players?: null; newEntities?: null; closeEntities?: null; areaInit: game.PackedArea.$Shape; myself?: null; updateEntities?: null; updatePlayers?: null; chatMessage?: null }|{ kind?: "myself"; newPlayer?: null; closePlayer?: null; players?: null; newEntities?: null; closeEntities?: null; areaInit?: null; myself: game.PackedPlayer.$Shape; updateEntities?: null; updatePlayers?: null; chatMessage?: null }|{ kind?: "updateEntities"; newPlayer?: null; closePlayer?: null; players?: null; newEntities?: null; closeEntities?: null; areaInit?: null; myself?: null; updateEntities: game.UpdateEntitiesMap.$Shape; updatePlayers?: null; chatMessage?: null }|{ kind?: "updatePlayers"; newPlayer?: null; closePlayer?: null; players?: null; newEntities?: null; closeEntities?: null; areaInit?: null; myself?: null; updateEntities?: null; updatePlayers: game.UpdatePlayersMap.$Shape; chatMessage?: null }|{ kind?: "chatMessage"; newPlayer?: null; closePlayer?: null; players?: null; newEntities?: null; closeEntities?: null; areaInit?: null; myself?: null; updateEntities?: null; updatePlayers?: null; chatMessage: game.Chat.$Shape })
         * )} game.Package.$Shape
         */

        /**
         * Constructs a new Package.
         * @memberof game
         * @classdesc Represents a Package.
         * @constructor
         * @param {game.Package.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const Package = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Package newPlayer.
         * @member {game.PackedPlayer.$Properties|null|undefined} newPlayer
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
         * @member {game.Players.$Properties|null|undefined} players
         * @memberof game.Package
         * @instance
         */
        Package.prototype.players = null;

        /**
         * Package newEntities.
         * @member {game.Entities.$Properties|null|undefined} newEntities
         * @memberof game.Package
         * @instance
         */
        Package.prototype.newEntities = null;

        /**
         * Package closeEntities.
         * @member {game.CloseEntities.$Properties|null|undefined} closeEntities
         * @memberof game.Package
         * @instance
         */
        Package.prototype.closeEntities = null;

        /**
         * Package areaInit.
         * @member {game.PackedArea.$Properties|null|undefined} areaInit
         * @memberof game.Package
         * @instance
         */
        Package.prototype.areaInit = null;

        /**
         * Package myself.
         * @member {game.PackedPlayer.$Properties|null|undefined} myself
         * @memberof game.Package
         * @instance
         */
        Package.prototype.myself = null;

        /**
         * Package updateEntities.
         * @member {game.UpdateEntitiesMap.$Properties|null|undefined} updateEntities
         * @memberof game.Package
         * @instance
         */
        Package.prototype.updateEntities = null;

        /**
         * Package updatePlayers.
         * @member {game.UpdatePlayersMap.$Properties|null|undefined} updatePlayers
         * @memberof game.Package
         * @instance
         */
        Package.prototype.updatePlayers = null;

        /**
         * Package chatMessage.
         * @member {game.Chat.$Properties|null|undefined} chatMessage
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
        $Object.defineProperty(Package.prototype, "kind", {
            get: $util.oneOfGetter($oneOfFields = ["newPlayer", "closePlayer", "players", "newEntities", "closeEntities", "areaInit", "myself", "updateEntities", "updatePlayers", "chatMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Package instance using the specified properties.
         * @function create
         * @memberof game.Package
         * @static
         * @param {game.Package.$Properties=} [properties] Properties to set
         * @returns {game.Package} Package instance
         * @type {{
         *   (properties: game.Package.$Shape): game.Package & game.Package.$Shape;
         *   (properties?: game.Package.$Properties): game.Package;
         * }}
         */
        Package.create = function(properties) {
            return new Package(properties);
        };

        /**
         * Encodes the specified Package message. Does not implicitly {@link game.Package.verify|verify} messages.
         * @function encode
         * @memberof game.Package
         * @static
         * @param {game.Package.$Properties} message Package message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Package.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.newPlayer != null && $Object.hasOwnProperty.call(message, "newPlayer"))
                $root.game.PackedPlayer.encode(message.newPlayer, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.closePlayer != null && $Object.hasOwnProperty.call(message, "closePlayer"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.closePlayer);
            if (message.players != null && $Object.hasOwnProperty.call(message, "players"))
                $root.game.Players.encode(message.players, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
            if (message.newEntities != null && $Object.hasOwnProperty.call(message, "newEntities"))
                $root.game.Entities.encode(message.newEntities, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
            if (message.closeEntities != null && $Object.hasOwnProperty.call(message, "closeEntities"))
                $root.game.CloseEntities.encode(message.closeEntities, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            if (message.areaInit != null && $Object.hasOwnProperty.call(message, "areaInit"))
                $root.game.PackedArea.encode(message.areaInit, writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
            if (message.myself != null && $Object.hasOwnProperty.call(message, "myself"))
                $root.game.PackedPlayer.encode(message.myself, writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
            if (message.updateEntities != null && $Object.hasOwnProperty.call(message, "updateEntities"))
                $root.game.UpdateEntitiesMap.encode(message.updateEntities, writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
            if (message.updatePlayers != null && $Object.hasOwnProperty.call(message, "updatePlayers"))
                $root.game.UpdatePlayersMap.encode(message.updatePlayers, writer.uint32(/* id 9, wireType 2 =*/74).fork(), _depth + 1).ldelim();
            if (message.chatMessage != null && $Object.hasOwnProperty.call(message, "chatMessage"))
                $root.game.Chat.encode(message.chatMessage, writer.uint32(/* id 10, wireType 2 =*/82).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Package message, length delimited. Does not implicitly {@link game.Package.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Package
         * @static
         * @param {game.Package.$Properties} message Package message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Package.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a Package message from the specified reader or buffer.
         * @function decode
         * @memberof game.Package
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Package & game.Package.$Shape} Package
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Package.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.game.Package();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.newPlayer = $root.game.PackedPlayer.decode(reader, reader.uint32(), $undefined, _depth + 1, message.newPlayer);
                        message.kind = "newPlayer";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.closePlayer = reader.int64();
                        message.kind = "closePlayer";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.players = $root.game.Players.decode(reader, reader.uint32(), $undefined, _depth + 1, message.players);
                        message.kind = "players";
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        message.newEntities = $root.game.Entities.decode(reader, reader.uint32(), $undefined, _depth + 1, message.newEntities);
                        message.kind = "newEntities";
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        message.closeEntities = $root.game.CloseEntities.decode(reader, reader.uint32(), $undefined, _depth + 1, message.closeEntities);
                        message.kind = "closeEntities";
                        continue;
                    }
                case 6: {
                        if (wireType !== 2)
                            break;
                        message.areaInit = $root.game.PackedArea.decode(reader, reader.uint32(), $undefined, _depth + 1, message.areaInit);
                        message.kind = "areaInit";
                        continue;
                    }
                case 7: {
                        if (wireType !== 2)
                            break;
                        message.myself = $root.game.PackedPlayer.decode(reader, reader.uint32(), $undefined, _depth + 1, message.myself);
                        message.kind = "myself";
                        continue;
                    }
                case 8: {
                        if (wireType !== 2)
                            break;
                        message.updateEntities = $root.game.UpdateEntitiesMap.decode(reader, reader.uint32(), $undefined, _depth + 1, message.updateEntities);
                        message.kind = "updateEntities";
                        continue;
                    }
                case 9: {
                        if (wireType !== 2)
                            break;
                        message.updatePlayers = $root.game.UpdatePlayersMap.decode(reader, reader.uint32(), $undefined, _depth + 1, message.updatePlayers);
                        message.kind = "updatePlayers";
                        continue;
                    }
                case 10: {
                        if (wireType !== 2)
                            break;
                        message.chatMessage = $root.game.Chat.decode(reader, reader.uint32(), $undefined, _depth + 1, message.chatMessage);
                        message.kind = "chatMessage";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a Package message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Package
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Package & game.Package.$Shape} Package
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Package.decodeDelimited = function(reader) {
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
        Package.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.newPlayer != null && $Object.hasOwnProperty.call(message, "newPlayer")) {
                properties.kind = 1;
                {
                    let error = $root.game.PackedPlayer.verify(message.newPlayer, _depth + 1);
                    if (error)
                        return "newPlayer." + error;
                }
            }
            if (message.closePlayer != null && $Object.hasOwnProperty.call(message, "closePlayer")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                if (!$util.isInteger(message.closePlayer) && !(message.closePlayer && $util.isInteger(message.closePlayer.low) && $util.isInteger(message.closePlayer.high)))
                    return "closePlayer: integer|Long expected";
            }
            if (message.players != null && $Object.hasOwnProperty.call(message, "players")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.game.Players.verify(message.players, _depth + 1);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.newEntities != null && $Object.hasOwnProperty.call(message, "newEntities")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.game.Entities.verify(message.newEntities, _depth + 1);
                    if (error)
                        return "newEntities." + error;
                }
            }
            if (message.closeEntities != null && $Object.hasOwnProperty.call(message, "closeEntities")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.game.CloseEntities.verify(message.closeEntities, _depth + 1);
                    if (error)
                        return "closeEntities." + error;
                }
            }
            if (message.areaInit != null && $Object.hasOwnProperty.call(message, "areaInit")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.game.PackedArea.verify(message.areaInit, _depth + 1);
                    if (error)
                        return "areaInit." + error;
                }
            }
            if (message.myself != null && $Object.hasOwnProperty.call(message, "myself")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.game.PackedPlayer.verify(message.myself, _depth + 1);
                    if (error)
                        return "myself." + error;
                }
            }
            if (message.updateEntities != null && $Object.hasOwnProperty.call(message, "updateEntities")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.game.UpdateEntitiesMap.verify(message.updateEntities, _depth + 1);
                    if (error)
                        return "updateEntities." + error;
                }
            }
            if (message.updatePlayers != null && $Object.hasOwnProperty.call(message, "updatePlayers")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.game.UpdatePlayersMap.verify(message.updatePlayers, _depth + 1);
                    if (error)
                        return "updatePlayers." + error;
                }
            }
            if (message.chatMessage != null && $Object.hasOwnProperty.call(message, "chatMessage")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.game.Chat.verify(message.chatMessage, _depth + 1);
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
        Package.fromObject = function (object, _depth) {
            if (object instanceof $root.game.Package)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".game.Package: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.game.Package();
            if (object.newPlayer != null) {
                if (!$util.isObject(object.newPlayer))
                    throw $TypeError(".game.Package.newPlayer: object expected");
                message.newPlayer = $root.game.PackedPlayer.fromObject(object.newPlayer, _depth + 1);
            }
            if (object.closePlayer != null)
                if ($util.Long)
                    message.closePlayer = $util.Long.fromValue(object.closePlayer, false);
                else if (typeof object.closePlayer === "string")
                    message.closePlayer = $parseInt(object.closePlayer, 10);
                else if (typeof object.closePlayer === "number")
                    message.closePlayer = object.closePlayer;
                else if (typeof object.closePlayer === "object")
                    message.closePlayer = new $util.LongBits(object.closePlayer.low >>> 0, object.closePlayer.high >>> 0).toNumber();
            if (object.players != null) {
                if (!$util.isObject(object.players))
                    throw $TypeError(".game.Package.players: object expected");
                message.players = $root.game.Players.fromObject(object.players, _depth + 1);
            }
            if (object.newEntities != null) {
                if (!$util.isObject(object.newEntities))
                    throw $TypeError(".game.Package.newEntities: object expected");
                message.newEntities = $root.game.Entities.fromObject(object.newEntities, _depth + 1);
            }
            if (object.closeEntities != null) {
                if (!$util.isObject(object.closeEntities))
                    throw $TypeError(".game.Package.closeEntities: object expected");
                message.closeEntities = $root.game.CloseEntities.fromObject(object.closeEntities, _depth + 1);
            }
            if (object.areaInit != null) {
                if (!$util.isObject(object.areaInit))
                    throw $TypeError(".game.Package.areaInit: object expected");
                message.areaInit = $root.game.PackedArea.fromObject(object.areaInit, _depth + 1);
            }
            if (object.myself != null) {
                if (!$util.isObject(object.myself))
                    throw $TypeError(".game.Package.myself: object expected");
                message.myself = $root.game.PackedPlayer.fromObject(object.myself, _depth + 1);
            }
            if (object.updateEntities != null) {
                if (!$util.isObject(object.updateEntities))
                    throw $TypeError(".game.Package.updateEntities: object expected");
                message.updateEntities = $root.game.UpdateEntitiesMap.fromObject(object.updateEntities, _depth + 1);
            }
            if (object.updatePlayers != null) {
                if (!$util.isObject(object.updatePlayers))
                    throw $TypeError(".game.Package.updatePlayers: object expected");
                message.updatePlayers = $root.game.UpdatePlayersMap.fromObject(object.updatePlayers, _depth + 1);
            }
            if (object.chatMessage != null) {
                if (!$util.isObject(object.chatMessage))
                    throw $TypeError(".game.Package.chatMessage: object expected");
                message.chatMessage = $root.game.Chat.fromObject(object.chatMessage, _depth + 1);
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
        Package.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.newPlayer != null && $Object.hasOwnProperty.call(message, "newPlayer")) {
                object.newPlayer = $root.game.PackedPlayer.toObject(message.newPlayer, options, _depth + 1);
                if (options.oneofs)
                    object.kind = "newPlayer";
            }
            if (message.closePlayer != null && $Object.hasOwnProperty.call(message, "closePlayer")) {
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.closePlayer = typeof message.closePlayer === "number" ? $BigInt(message.closePlayer) : $util.Long.fromBits(message.closePlayer.low >>> 0, message.closePlayer.high >>> 0, false).toBigInt();
                else if (typeof message.closePlayer === "number")
                    object.closePlayer = options.longs === $String ? $String(message.closePlayer) : message.closePlayer;
                else
                    object.closePlayer = options.longs === $String ? $util.Long.prototype.toString.call(message.closePlayer) : options.longs === $Number ? new $util.LongBits(message.closePlayer.low >>> 0, message.closePlayer.high >>> 0).toNumber() : message.closePlayer;
                if (options.oneofs)
                    object.kind = "closePlayer";
            }
            if (message.players != null && $Object.hasOwnProperty.call(message, "players")) {
                object.players = $root.game.Players.toObject(message.players, options, _depth + 1);
                if (options.oneofs)
                    object.kind = "players";
            }
            if (message.newEntities != null && $Object.hasOwnProperty.call(message, "newEntities")) {
                object.newEntities = $root.game.Entities.toObject(message.newEntities, options, _depth + 1);
                if (options.oneofs)
                    object.kind = "newEntities";
            }
            if (message.closeEntities != null && $Object.hasOwnProperty.call(message, "closeEntities")) {
                object.closeEntities = $root.game.CloseEntities.toObject(message.closeEntities, options, _depth + 1);
                if (options.oneofs)
                    object.kind = "closeEntities";
            }
            if (message.areaInit != null && $Object.hasOwnProperty.call(message, "areaInit")) {
                object.areaInit = $root.game.PackedArea.toObject(message.areaInit, options, _depth + 1);
                if (options.oneofs)
                    object.kind = "areaInit";
            }
            if (message.myself != null && $Object.hasOwnProperty.call(message, "myself")) {
                object.myself = $root.game.PackedPlayer.toObject(message.myself, options, _depth + 1);
                if (options.oneofs)
                    object.kind = "myself";
            }
            if (message.updateEntities != null && $Object.hasOwnProperty.call(message, "updateEntities")) {
                object.updateEntities = $root.game.UpdateEntitiesMap.toObject(message.updateEntities, options, _depth + 1);
                if (options.oneofs)
                    object.kind = "updateEntities";
            }
            if (message.updatePlayers != null && $Object.hasOwnProperty.call(message, "updatePlayers")) {
                object.updatePlayers = $root.game.UpdatePlayersMap.toObject(message.updatePlayers, options, _depth + 1);
                if (options.oneofs)
                    object.kind = "updatePlayers";
            }
            if (message.chatMessage != null && $Object.hasOwnProperty.call(message, "chatMessage")) {
                object.chatMessage = $root.game.Chat.toObject(message.chatMessage, options, _depth + 1);
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
        Package.prototype.toJSON = function() {
            return Package.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Package
         * @function getTypeUrl
         * @memberof game.Package
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Package.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.Package";
        };

        return Package;
    })();

    game.Packages = (function() {

        /**
         * Properties of a Packages.
         * @typedef {Object} game.Packages.$Properties
         * @property {Array.<game.Package.$Properties>|null} [items] Packages items
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Packages.
         * @memberof game
         * @interface IPackages
         * @augments game.Packages.$Properties
         * @deprecated Use game.Packages.$Properties instead.
         */

        /**
         * Shape of a Packages.
         * @typedef {{
         *   items?: Array.<game.Package.$Shape>|null;
         *   $unknowns?: Array.<Uint8Array>;
         * }} game.Packages.$Shape
         */

        /**
         * Constructs a new Packages.
         * @memberof game
         * @classdesc Represents a Packages.
         * @constructor
         * @param {game.Packages.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const Packages = function (properties) {
            this.items = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Packages items.
         * @member {Array.<game.Package.$Properties>} items
         * @memberof game.Packages
         * @instance
         */
        Packages.prototype.items = $util.emptyArray;

        /**
         * Creates a new Packages instance using the specified properties.
         * @function create
         * @memberof game.Packages
         * @static
         * @param {game.Packages.$Properties=} [properties] Properties to set
         * @returns {game.Packages} Packages instance
         * @type {{
         *   (properties: game.Packages.$Shape): game.Packages & game.Packages.$Shape;
         *   (properties?: game.Packages.$Properties): game.Packages;
         * }}
         */
        Packages.create = function(properties) {
            return new Packages(properties);
        };

        /**
         * Encodes the specified Packages message. Does not implicitly {@link game.Packages.verify|verify} messages.
         * @function encode
         * @memberof game.Packages
         * @static
         * @param {game.Packages.$Properties} message Packages message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Packages.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.game.Package.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Packages message, length delimited. Does not implicitly {@link game.Packages.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Packages
         * @static
         * @param {game.Packages.$Properties} message Packages message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Packages.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a Packages message from the specified reader or buffer.
         * @function decode
         * @memberof game.Packages
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Packages & game.Packages.$Shape} Packages
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Packages.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.game.Packages();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.game.Package.decode(reader, reader.uint32(), $undefined, _depth + 1));
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a Packages message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Packages
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Packages & game.Packages.$Shape} Packages
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Packages.decodeDelimited = function(reader) {
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
        Packages.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.items != null && $Object.hasOwnProperty.call(message, "items")) {
                if (!$Array.isArray(message.items))
                    return "items: array expected";
                for (let i = 0; i < message.items.length; ++i) {
                    let error = $root.game.Package.verify(message.items[i], _depth + 1);
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
        Packages.fromObject = function (object, _depth) {
            if (object instanceof $root.game.Packages)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".game.Packages: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.game.Packages();
            if (object.items) {
                if (!$Array.isArray(object.items))
                    throw $TypeError(".game.Packages.items: array expected");
                message.items = $Array(object.items.length);
                for (let i = 0; i < object.items.length; ++i) {
                    if (!$util.isObject(object.items[i]))
                        throw $TypeError(".game.Packages.items: object expected");
                    message.items[i] = $root.game.Package.fromObject(object.items[i], _depth + 1);
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
        Packages.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = $Array(message.items.length);
                for (let j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.game.Package.toObject(message.items[j], options, _depth + 1);
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
        Packages.prototype.toJSON = function() {
            return Packages.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Packages
         * @function getTypeUrl
         * @memberof game.Packages
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Packages.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.Packages";
        };

        return Packages;
    })();

    game.Players = (function() {

        /**
         * Properties of a Players.
         * @typedef {Object} game.Players.$Properties
         * @property {Object.<string,game.PackedPlayer.$Properties>|null} [players] Players players
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Players.
         * @memberof game
         * @interface IPlayers
         * @augments game.Players.$Properties
         * @deprecated Use game.Players.$Properties instead.
         */

        /**
         * Shape of a Players.
         * @typedef {game.Players.$Properties} game.Players.$Shape
         */

        /**
         * Constructs a new Players.
         * @memberof game
         * @classdesc Represents a Players.
         * @constructor
         * @param {game.Players.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const Players = function (properties) {
            this.players = {};
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Players players.
         * @member {Object.<string,game.PackedPlayer.$Properties>} players
         * @memberof game.Players
         * @instance
         */
        Players.prototype.players = $util.emptyObject;

        /**
         * Creates a new Players instance using the specified properties.
         * @function create
         * @memberof game.Players
         * @static
         * @param {game.Players.$Properties=} [properties] Properties to set
         * @returns {game.Players} Players instance
         * @type {{
         *   (properties: game.Players.$Shape): game.Players & game.Players.$Shape;
         *   (properties?: game.Players.$Properties): game.Players;
         * }}
         */
        Players.create = function(properties) {
            return new Players(properties);
        };

        /**
         * Encodes the specified Players message. Does not implicitly {@link game.Players.verify|verify} messages.
         * @function encode
         * @memberof game.Players
         * @static
         * @param {game.Players.$Properties} message Players message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Players.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.players != null && $Object.hasOwnProperty.call(message, "players"))
                for (let keys = $Object.keys(message.players), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.game.PackedPlayer.encode(message.players[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim().ldelim();
                }
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Players message, length delimited. Does not implicitly {@link game.Players.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Players
         * @static
         * @param {game.Players.$Properties} message Players message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Players.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a Players message from the specified reader or buffer.
         * @function decode
         * @memberof game.Players
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Players & game.Players.$Shape} Players
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Players.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.game.Players(), key, value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if (message.players === $util.emptyObject)
                            message.players = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.tag();
                            wireType = tag2 & 7;
                            switch (tag2 >>>= 3) {
                            case 1:
                                if (wireType !== 0)
                                    break;
                                key = reader.uint32();
                                continue;
                            case 2:
                                if (wireType !== 2)
                                    break;
                                value = $root.game.PackedPlayer.decode(reader, reader.uint32(), $undefined, _depth + 1);
                                continue;
                            }
                            reader.skipType(wireType, _depth, tag2);
                        }
                        message.players[key] = value || new $root.game.PackedPlayer();
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a Players message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Players
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Players & game.Players.$Shape} Players
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Players.decodeDelimited = function(reader) {
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
        Players.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.players != null && $Object.hasOwnProperty.call(message, "players")) {
                if (!$util.isObject(message.players))
                    return "players: object expected";
                let key = $Object.keys(message.players);
                for (let i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "players: integer key{k:uint32} expected";
                    {
                        let error = $root.game.PackedPlayer.verify(message.players[key[i]], _depth + 1);
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
        Players.fromObject = function (object, _depth) {
            if (object instanceof $root.game.Players)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".game.Players: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.game.Players();
            if (object.players) {
                if (!$util.isObject(object.players))
                    throw $TypeError(".game.Players.players: object expected");
                message.players = {};
                for (let keys = $Object.keys(object.players), i = 0; i < keys.length; ++i) {
                    if (keys[i] === "__proto__")
                        $util.makeProp(message.players, keys[i]);
                    if (!$util.isObject(object.players[keys[i]]))
                        throw $TypeError(".game.Players.players: object expected");
                    message.players[keys[i]] = $root.game.PackedPlayer.fromObject(object.players[keys[i]], _depth + 1);
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
        Players.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.objects || options.defaults)
                object.players = {};
            let keys2;
            if (message.players && (keys2 = $Object.keys(message.players)).length) {
                object.players = {};
                for (let j = 0; j < keys2.length; ++j) {
                    if (keys2[j] === "__proto__")
                        $util.makeProp(object.players, keys2[j]);
                    object.players[keys2[j]] = $root.game.PackedPlayer.toObject(message.players[keys2[j]], options, _depth + 1);
                }
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
        Players.prototype.toJSON = function() {
            return Players.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Players
         * @function getTypeUrl
         * @memberof game.Players
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Players.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.Players";
        };

        return Players;
    })();

    game.Entities = (function() {

        /**
         * Properties of an Entities.
         * @typedef {Object} game.Entities.$Properties
         * @property {Object.<string,game.PackedEntity.$Properties>|null} [entities] Entities entities
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an Entities.
         * @memberof game
         * @interface IEntities
         * @augments game.Entities.$Properties
         * @deprecated Use game.Entities.$Properties instead.
         */

        /**
         * Shape of an Entities.
         * @typedef {game.Entities.$Properties} game.Entities.$Shape
         */

        /**
         * Constructs a new Entities.
         * @memberof game
         * @classdesc Represents an Entities.
         * @constructor
         * @param {game.Entities.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const Entities = function (properties) {
            this.entities = {};
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Entities entities.
         * @member {Object.<string,game.PackedEntity.$Properties>} entities
         * @memberof game.Entities
         * @instance
         */
        Entities.prototype.entities = $util.emptyObject;

        /**
         * Creates a new Entities instance using the specified properties.
         * @function create
         * @memberof game.Entities
         * @static
         * @param {game.Entities.$Properties=} [properties] Properties to set
         * @returns {game.Entities} Entities instance
         * @type {{
         *   (properties: game.Entities.$Shape): game.Entities & game.Entities.$Shape;
         *   (properties?: game.Entities.$Properties): game.Entities;
         * }}
         */
        Entities.create = function(properties) {
            return new Entities(properties);
        };

        /**
         * Encodes the specified Entities message. Does not implicitly {@link game.Entities.verify|verify} messages.
         * @function encode
         * @memberof game.Entities
         * @static
         * @param {game.Entities.$Properties} message Entities message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Entities.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.entities != null && $Object.hasOwnProperty.call(message, "entities"))
                for (let keys = $Object.keys(message.entities), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.game.PackedEntity.encode(message.entities[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim().ldelim();
                }
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Entities message, length delimited. Does not implicitly {@link game.Entities.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Entities
         * @static
         * @param {game.Entities.$Properties} message Entities message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Entities.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an Entities message from the specified reader or buffer.
         * @function decode
         * @memberof game.Entities
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Entities & game.Entities.$Shape} Entities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Entities.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.game.Entities(), key, value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if (message.entities === $util.emptyObject)
                            message.entities = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.tag();
                            wireType = tag2 & 7;
                            switch (tag2 >>>= 3) {
                            case 1:
                                if (wireType !== 0)
                                    break;
                                key = reader.uint32();
                                continue;
                            case 2:
                                if (wireType !== 2)
                                    break;
                                value = $root.game.PackedEntity.decode(reader, reader.uint32(), $undefined, _depth + 1);
                                continue;
                            }
                            reader.skipType(wireType, _depth, tag2);
                        }
                        message.entities[key] = value || new $root.game.PackedEntity();
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an Entities message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Entities
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Entities & game.Entities.$Shape} Entities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Entities.decodeDelimited = function(reader) {
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
        Entities.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.entities != null && $Object.hasOwnProperty.call(message, "entities")) {
                if (!$util.isObject(message.entities))
                    return "entities: object expected";
                let key = $Object.keys(message.entities);
                for (let i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "entities: integer key{k:uint32} expected";
                    {
                        let error = $root.game.PackedEntity.verify(message.entities[key[i]], _depth + 1);
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
        Entities.fromObject = function (object, _depth) {
            if (object instanceof $root.game.Entities)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".game.Entities: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.game.Entities();
            if (object.entities) {
                if (!$util.isObject(object.entities))
                    throw $TypeError(".game.Entities.entities: object expected");
                message.entities = {};
                for (let keys = $Object.keys(object.entities), i = 0; i < keys.length; ++i) {
                    if (keys[i] === "__proto__")
                        $util.makeProp(message.entities, keys[i]);
                    if (!$util.isObject(object.entities[keys[i]]))
                        throw $TypeError(".game.Entities.entities: object expected");
                    message.entities[keys[i]] = $root.game.PackedEntity.fromObject(object.entities[keys[i]], _depth + 1);
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
        Entities.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.objects || options.defaults)
                object.entities = {};
            let keys2;
            if (message.entities && (keys2 = $Object.keys(message.entities)).length) {
                object.entities = {};
                for (let j = 0; j < keys2.length; ++j) {
                    if (keys2[j] === "__proto__")
                        $util.makeProp(object.entities, keys2[j]);
                    object.entities[keys2[j]] = $root.game.PackedEntity.toObject(message.entities[keys2[j]], options, _depth + 1);
                }
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
        Entities.prototype.toJSON = function() {
            return Entities.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Entities
         * @function getTypeUrl
         * @memberof game.Entities
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Entities.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.Entities";
        };

        return Entities;
    })();

    game.CloseEntities = (function() {

        /**
         * Properties of a CloseEntities.
         * @typedef {Object} game.CloseEntities.$Properties
         * @property {Array.<number>|null} [ids] CloseEntities ids
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a CloseEntities.
         * @memberof game
         * @interface ICloseEntities
         * @augments game.CloseEntities.$Properties
         * @deprecated Use game.CloseEntities.$Properties instead.
         */

        /**
         * Shape of a CloseEntities.
         * @typedef {game.CloseEntities.$Properties} game.CloseEntities.$Shape
         */

        /**
         * Constructs a new CloseEntities.
         * @memberof game
         * @classdesc Represents a CloseEntities.
         * @constructor
         * @param {game.CloseEntities.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const CloseEntities = function (properties) {
            this.ids = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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
         * @param {game.CloseEntities.$Properties=} [properties] Properties to set
         * @returns {game.CloseEntities} CloseEntities instance
         * @type {{
         *   (properties: game.CloseEntities.$Shape): game.CloseEntities & game.CloseEntities.$Shape;
         *   (properties?: game.CloseEntities.$Properties): game.CloseEntities;
         * }}
         */
        CloseEntities.create = function(properties) {
            return new CloseEntities(properties);
        };

        /**
         * Encodes the specified CloseEntities message. Does not implicitly {@link game.CloseEntities.verify|verify} messages.
         * @function encode
         * @memberof game.CloseEntities
         * @static
         * @param {game.CloseEntities.$Properties} message CloseEntities message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CloseEntities.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.ids != null && message.ids.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.ids.length; ++i)
                    writer.uint32(message.ids[i]);
                writer.ldelim();
            }
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified CloseEntities message, length delimited. Does not implicitly {@link game.CloseEntities.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.CloseEntities
         * @static
         * @param {game.CloseEntities.$Properties} message CloseEntities message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CloseEntities.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a CloseEntities message from the specified reader or buffer.
         * @function decode
         * @memberof game.CloseEntities
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.CloseEntities & game.CloseEntities.$Shape} CloseEntities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CloseEntities.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.game.CloseEntities();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType === 2) {
                            if (!(message.ids && message.ids.length))
                                message.ids = [];
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.ids.push(reader.uint32());
                            continue;
                        }
                        if (wireType !== 0)
                            break;
                        if (!(message.ids && message.ids.length))
                            message.ids = [];
                        message.ids.push(reader.uint32());
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a CloseEntities message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.CloseEntities
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.CloseEntities & game.CloseEntities.$Shape} CloseEntities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CloseEntities.decodeDelimited = function(reader) {
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
        CloseEntities.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.ids != null && $Object.hasOwnProperty.call(message, "ids")) {
                if (!$Array.isArray(message.ids))
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
        CloseEntities.fromObject = function (object, _depth) {
            if (object instanceof $root.game.CloseEntities)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".game.CloseEntities: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.game.CloseEntities();
            if (object.ids) {
                if (!$Array.isArray(object.ids))
                    throw $TypeError(".game.CloseEntities.ids: array expected");
                message.ids = $Array(object.ids.length);
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
        CloseEntities.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.ids = [];
            if (message.ids && message.ids.length) {
                object.ids = $Array(message.ids.length);
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
        CloseEntities.prototype.toJSON = function() {
            return CloseEntities.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for CloseEntities
         * @function getTypeUrl
         * @memberof game.CloseEntities
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        CloseEntities.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.CloseEntities";
        };

        return CloseEntities;
    })();

    game.UpdateEntitiesMap = (function() {

        /**
         * Properties of an UpdateEntitiesMap.
         * @typedef {Object} game.UpdateEntitiesMap.$Properties
         * @property {Object.<string,game.PartialEntity.$Properties>|null} [items] UpdateEntitiesMap items
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an UpdateEntitiesMap.
         * @memberof game
         * @interface IUpdateEntitiesMap
         * @augments game.UpdateEntitiesMap.$Properties
         * @deprecated Use game.UpdateEntitiesMap.$Properties instead.
         */

        /**
         * Shape of an UpdateEntitiesMap.
         * @typedef {game.UpdateEntitiesMap.$Properties} game.UpdateEntitiesMap.$Shape
         */

        /**
         * Constructs a new UpdateEntitiesMap.
         * @memberof game
         * @classdesc Represents an UpdateEntitiesMap.
         * @constructor
         * @param {game.UpdateEntitiesMap.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const UpdateEntitiesMap = function (properties) {
            this.items = {};
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * UpdateEntitiesMap items.
         * @member {Object.<string,game.PartialEntity.$Properties>} items
         * @memberof game.UpdateEntitiesMap
         * @instance
         */
        UpdateEntitiesMap.prototype.items = $util.emptyObject;

        /**
         * Creates a new UpdateEntitiesMap instance using the specified properties.
         * @function create
         * @memberof game.UpdateEntitiesMap
         * @static
         * @param {game.UpdateEntitiesMap.$Properties=} [properties] Properties to set
         * @returns {game.UpdateEntitiesMap} UpdateEntitiesMap instance
         * @type {{
         *   (properties: game.UpdateEntitiesMap.$Shape): game.UpdateEntitiesMap & game.UpdateEntitiesMap.$Shape;
         *   (properties?: game.UpdateEntitiesMap.$Properties): game.UpdateEntitiesMap;
         * }}
         */
        UpdateEntitiesMap.create = function(properties) {
            return new UpdateEntitiesMap(properties);
        };

        /**
         * Encodes the specified UpdateEntitiesMap message. Does not implicitly {@link game.UpdateEntitiesMap.verify|verify} messages.
         * @function encode
         * @memberof game.UpdateEntitiesMap
         * @static
         * @param {game.UpdateEntitiesMap.$Properties} message UpdateEntitiesMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateEntitiesMap.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.items != null && $Object.hasOwnProperty.call(message, "items"))
                for (let keys = $Object.keys(message.items), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.game.PartialEntity.encode(message.items[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim().ldelim();
                }
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified UpdateEntitiesMap message, length delimited. Does not implicitly {@link game.UpdateEntitiesMap.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.UpdateEntitiesMap
         * @static
         * @param {game.UpdateEntitiesMap.$Properties} message UpdateEntitiesMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateEntitiesMap.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an UpdateEntitiesMap message from the specified reader or buffer.
         * @function decode
         * @memberof game.UpdateEntitiesMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.UpdateEntitiesMap & game.UpdateEntitiesMap.$Shape} UpdateEntitiesMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateEntitiesMap.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.game.UpdateEntitiesMap(), key, value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if (message.items === $util.emptyObject)
                            message.items = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.tag();
                            wireType = tag2 & 7;
                            switch (tag2 >>>= 3) {
                            case 1:
                                if (wireType !== 0)
                                    break;
                                key = reader.uint32();
                                continue;
                            case 2:
                                if (wireType !== 2)
                                    break;
                                value = $root.game.PartialEntity.decode(reader, reader.uint32(), $undefined, _depth + 1);
                                continue;
                            }
                            reader.skipType(wireType, _depth, tag2);
                        }
                        message.items[key] = value || new $root.game.PartialEntity();
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an UpdateEntitiesMap message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.UpdateEntitiesMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.UpdateEntitiesMap & game.UpdateEntitiesMap.$Shape} UpdateEntitiesMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateEntitiesMap.decodeDelimited = function(reader) {
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
        UpdateEntitiesMap.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.items != null && $Object.hasOwnProperty.call(message, "items")) {
                if (!$util.isObject(message.items))
                    return "items: object expected";
                let key = $Object.keys(message.items);
                for (let i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "items: integer key{k:uint32} expected";
                    {
                        let error = $root.game.PartialEntity.verify(message.items[key[i]], _depth + 1);
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
        UpdateEntitiesMap.fromObject = function (object, _depth) {
            if (object instanceof $root.game.UpdateEntitiesMap)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".game.UpdateEntitiesMap: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.game.UpdateEntitiesMap();
            if (object.items) {
                if (!$util.isObject(object.items))
                    throw $TypeError(".game.UpdateEntitiesMap.items: object expected");
                message.items = {};
                for (let keys = $Object.keys(object.items), i = 0; i < keys.length; ++i) {
                    if (keys[i] === "__proto__")
                        $util.makeProp(message.items, keys[i]);
                    if (!$util.isObject(object.items[keys[i]]))
                        throw $TypeError(".game.UpdateEntitiesMap.items: object expected");
                    message.items[keys[i]] = $root.game.PartialEntity.fromObject(object.items[keys[i]], _depth + 1);
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
        UpdateEntitiesMap.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.objects || options.defaults)
                object.items = {};
            let keys2;
            if (message.items && (keys2 = $Object.keys(message.items)).length) {
                object.items = {};
                for (let j = 0; j < keys2.length; ++j) {
                    if (keys2[j] === "__proto__")
                        $util.makeProp(object.items, keys2[j]);
                    object.items[keys2[j]] = $root.game.PartialEntity.toObject(message.items[keys2[j]], options, _depth + 1);
                }
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
        UpdateEntitiesMap.prototype.toJSON = function() {
            return UpdateEntitiesMap.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for UpdateEntitiesMap
         * @function getTypeUrl
         * @memberof game.UpdateEntitiesMap
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        UpdateEntitiesMap.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.UpdateEntitiesMap";
        };

        return UpdateEntitiesMap;
    })();

    game.UpdatePlayersMap = (function() {

        /**
         * Properties of an UpdatePlayersMap.
         * @typedef {Object} game.UpdatePlayersMap.$Properties
         * @property {Object.<string,game.PartialPlayer.$Properties>|null} [items] UpdatePlayersMap items
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an UpdatePlayersMap.
         * @memberof game
         * @interface IUpdatePlayersMap
         * @augments game.UpdatePlayersMap.$Properties
         * @deprecated Use game.UpdatePlayersMap.$Properties instead.
         */

        /**
         * Shape of an UpdatePlayersMap.
         * @typedef {game.UpdatePlayersMap.$Properties} game.UpdatePlayersMap.$Shape
         */

        /**
         * Constructs a new UpdatePlayersMap.
         * @memberof game
         * @classdesc Represents an UpdatePlayersMap.
         * @constructor
         * @param {game.UpdatePlayersMap.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const UpdatePlayersMap = function (properties) {
            this.items = {};
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * UpdatePlayersMap items.
         * @member {Object.<string,game.PartialPlayer.$Properties>} items
         * @memberof game.UpdatePlayersMap
         * @instance
         */
        UpdatePlayersMap.prototype.items = $util.emptyObject;

        /**
         * Creates a new UpdatePlayersMap instance using the specified properties.
         * @function create
         * @memberof game.UpdatePlayersMap
         * @static
         * @param {game.UpdatePlayersMap.$Properties=} [properties] Properties to set
         * @returns {game.UpdatePlayersMap} UpdatePlayersMap instance
         * @type {{
         *   (properties: game.UpdatePlayersMap.$Shape): game.UpdatePlayersMap & game.UpdatePlayersMap.$Shape;
         *   (properties?: game.UpdatePlayersMap.$Properties): game.UpdatePlayersMap;
         * }}
         */
        UpdatePlayersMap.create = function(properties) {
            return new UpdatePlayersMap(properties);
        };

        /**
         * Encodes the specified UpdatePlayersMap message. Does not implicitly {@link game.UpdatePlayersMap.verify|verify} messages.
         * @function encode
         * @memberof game.UpdatePlayersMap
         * @static
         * @param {game.UpdatePlayersMap.$Properties} message UpdatePlayersMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdatePlayersMap.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.items != null && $Object.hasOwnProperty.call(message, "items"))
                for (let keys = $Object.keys(message.items), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.game.PartialPlayer.encode(message.items[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim().ldelim();
                }
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified UpdatePlayersMap message, length delimited. Does not implicitly {@link game.UpdatePlayersMap.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.UpdatePlayersMap
         * @static
         * @param {game.UpdatePlayersMap.$Properties} message UpdatePlayersMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdatePlayersMap.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an UpdatePlayersMap message from the specified reader or buffer.
         * @function decode
         * @memberof game.UpdatePlayersMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.UpdatePlayersMap & game.UpdatePlayersMap.$Shape} UpdatePlayersMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdatePlayersMap.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.game.UpdatePlayersMap(), key, value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if (message.items === $util.emptyObject)
                            message.items = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.tag();
                            wireType = tag2 & 7;
                            switch (tag2 >>>= 3) {
                            case 1:
                                if (wireType !== 0)
                                    break;
                                key = reader.uint32();
                                continue;
                            case 2:
                                if (wireType !== 2)
                                    break;
                                value = $root.game.PartialPlayer.decode(reader, reader.uint32(), $undefined, _depth + 1);
                                continue;
                            }
                            reader.skipType(wireType, _depth, tag2);
                        }
                        message.items[key] = value || new $root.game.PartialPlayer();
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an UpdatePlayersMap message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.UpdatePlayersMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.UpdatePlayersMap & game.UpdatePlayersMap.$Shape} UpdatePlayersMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdatePlayersMap.decodeDelimited = function(reader) {
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
        UpdatePlayersMap.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.items != null && $Object.hasOwnProperty.call(message, "items")) {
                if (!$util.isObject(message.items))
                    return "items: object expected";
                let key = $Object.keys(message.items);
                for (let i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "items: integer key{k:uint32} expected";
                    {
                        let error = $root.game.PartialPlayer.verify(message.items[key[i]], _depth + 1);
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
        UpdatePlayersMap.fromObject = function (object, _depth) {
            if (object instanceof $root.game.UpdatePlayersMap)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".game.UpdatePlayersMap: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.game.UpdatePlayersMap();
            if (object.items) {
                if (!$util.isObject(object.items))
                    throw $TypeError(".game.UpdatePlayersMap.items: object expected");
                message.items = {};
                for (let keys = $Object.keys(object.items), i = 0; i < keys.length; ++i) {
                    if (keys[i] === "__proto__")
                        $util.makeProp(message.items, keys[i]);
                    if (!$util.isObject(object.items[keys[i]]))
                        throw $TypeError(".game.UpdatePlayersMap.items: object expected");
                    message.items[keys[i]] = $root.game.PartialPlayer.fromObject(object.items[keys[i]], _depth + 1);
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
        UpdatePlayersMap.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.objects || options.defaults)
                object.items = {};
            let keys2;
            if (message.items && (keys2 = $Object.keys(message.items)).length) {
                object.items = {};
                for (let j = 0; j < keys2.length; ++j) {
                    if (keys2[j] === "__proto__")
                        $util.makeProp(object.items, keys2[j]);
                    object.items[keys2[j]] = $root.game.PartialPlayer.toObject(message.items[keys2[j]], options, _depth + 1);
                }
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
        UpdatePlayersMap.prototype.toJSON = function() {
            return UpdatePlayersMap.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for UpdatePlayersMap
         * @function getTypeUrl
         * @memberof game.UpdatePlayersMap
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        UpdatePlayersMap.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.UpdatePlayersMap";
        };

        return UpdatePlayersMap;
    })();

    /**
     * ClientKey enum.
     * @name game.ClientKey
     * @enum {number}
     * @property {number} UP=1 UP value
     * @property {number} DOWN=2 DOWN value
     * @property {number} LEFT=3 LEFT value
     * @property {number} RIGHT=4 RIGHT value
     * @property {number} SHIFT=5 SHIFT value
     */
    game.ClientKey = (function() {
        const valuesById = {}, values = $Object.create(valuesById);
        values[valuesById[1] = "UP"] = 1;
        values[valuesById[2] = "DOWN"] = 2;
        values[valuesById[3] = "LEFT"] = 3;
        values[valuesById[4] = "RIGHT"] = 4;
        values[valuesById[5] = "SHIFT"] = 5;
        return values;
    })();

    /**
     * ClientAbility enum.
     * @name game.ClientAbility
     * @enum {number}
     * @property {number} FIRST=1 FIRST value
     * @property {number} SECOND=2 SECOND value
     */
    game.ClientAbility = (function() {
        const valuesById = {}, values = $Object.create(valuesById);
        values[valuesById[1] = "FIRST"] = 1;
        values[valuesById[2] = "SECOND"] = 2;
        return values;
    })();

    game.ClientInit = (function() {

        /**
         * Properties of a ClientInit.
         * @typedef {Object} game.ClientInit.$Properties
         * @property {string|null} [hero] ClientInit hero
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ClientInit.
         * @memberof game
         * @interface IClientInit
         * @augments game.ClientInit.$Properties
         * @deprecated Use game.ClientInit.$Properties instead.
         */

        /**
         * Shape of a ClientInit.
         * @typedef {game.ClientInit.$Properties} game.ClientInit.$Shape
         */

        /**
         * Constructs a new ClientInit.
         * @memberof game
         * @classdesc Represents a ClientInit.
         * @constructor
         * @param {game.ClientInit.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ClientInit = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ClientInit hero.
         * @member {string} hero
         * @memberof game.ClientInit
         * @instance
         */
        ClientInit.prototype.hero = "";

        /**
         * Creates a new ClientInit instance using the specified properties.
         * @function create
         * @memberof game.ClientInit
         * @static
         * @param {game.ClientInit.$Properties=} [properties] Properties to set
         * @returns {game.ClientInit} ClientInit instance
         * @type {{
         *   (properties: game.ClientInit.$Shape): game.ClientInit & game.ClientInit.$Shape;
         *   (properties?: game.ClientInit.$Properties): game.ClientInit;
         * }}
         */
        ClientInit.create = function(properties) {
            return new ClientInit(properties);
        };

        /**
         * Encodes the specified ClientInit message. Does not implicitly {@link game.ClientInit.verify|verify} messages.
         * @function encode
         * @memberof game.ClientInit
         * @static
         * @param {game.ClientInit.$Properties} message ClientInit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientInit.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.hero != null && $Object.hasOwnProperty.call(message, "hero"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.hero);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ClientInit message, length delimited. Does not implicitly {@link game.ClientInit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ClientInit
         * @static
         * @param {game.ClientInit.$Properties} message ClientInit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientInit.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a ClientInit message from the specified reader or buffer.
         * @function decode
         * @memberof game.ClientInit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ClientInit & game.ClientInit.$Shape} ClientInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientInit.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.game.ClientInit(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.hero = value;
                        else
                            delete message.hero;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a ClientInit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.ClientInit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ClientInit & game.ClientInit.$Shape} ClientInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientInit.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientInit message.
         * @function verify
         * @memberof game.ClientInit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientInit.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.hero != null && $Object.hasOwnProperty.call(message, "hero"))
                if (!$util.isString(message.hero))
                    return "hero: string expected";
            return null;
        };

        /**
         * Creates a ClientInit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.ClientInit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.ClientInit} ClientInit
         */
        ClientInit.fromObject = function (object, _depth) {
            if (object instanceof $root.game.ClientInit)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".game.ClientInit: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.game.ClientInit();
            if (object.hero != null)
                if (typeof object.hero !== "string" || object.hero.length)
                    message.hero = $String(object.hero);
            return message;
        };

        /**
         * Creates a plain object from a ClientInit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.ClientInit
         * @static
         * @param {game.ClientInit} message ClientInit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientInit.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                object.hero = "";
            if (message.hero != null && $Object.hasOwnProperty.call(message, "hero"))
                object.hero = message.hero;
            return object;
        };

        /**
         * Converts this ClientInit to JSON.
         * @function toJSON
         * @memberof game.ClientInit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientInit.prototype.toJSON = function() {
            return ClientInit.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ClientInit
         * @function getTypeUrl
         * @memberof game.ClientInit
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ClientInit.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.ClientInit";
        };

        return ClientInit;
    })();

    game.ClientMousePos = (function() {

        /**
         * Properties of a ClientMousePos.
         * @typedef {Object} game.ClientMousePos.$Properties
         * @property {number|null} [x] ClientMousePos x
         * @property {number|null} [y] ClientMousePos y
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ClientMousePos.
         * @memberof game
         * @interface IClientMousePos
         * @augments game.ClientMousePos.$Properties
         * @deprecated Use game.ClientMousePos.$Properties instead.
         */

        /**
         * Shape of a ClientMousePos.
         * @typedef {game.ClientMousePos.$Properties} game.ClientMousePos.$Shape
         */

        /**
         * Constructs a new ClientMousePos.
         * @memberof game
         * @classdesc Represents a ClientMousePos.
         * @constructor
         * @param {game.ClientMousePos.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ClientMousePos = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ClientMousePos x.
         * @member {number} x
         * @memberof game.ClientMousePos
         * @instance
         */
        ClientMousePos.prototype.x = 0;

        /**
         * ClientMousePos y.
         * @member {number} y
         * @memberof game.ClientMousePos
         * @instance
         */
        ClientMousePos.prototype.y = 0;

        /**
         * Creates a new ClientMousePos instance using the specified properties.
         * @function create
         * @memberof game.ClientMousePos
         * @static
         * @param {game.ClientMousePos.$Properties=} [properties] Properties to set
         * @returns {game.ClientMousePos} ClientMousePos instance
         * @type {{
         *   (properties: game.ClientMousePos.$Shape): game.ClientMousePos & game.ClientMousePos.$Shape;
         *   (properties?: game.ClientMousePos.$Properties): game.ClientMousePos;
         * }}
         */
        ClientMousePos.create = function(properties) {
            return new ClientMousePos(properties);
        };

        /**
         * Encodes the specified ClientMousePos message. Does not implicitly {@link game.ClientMousePos.verify|verify} messages.
         * @function encode
         * @memberof game.ClientMousePos
         * @static
         * @param {game.ClientMousePos.$Properties} message ClientMousePos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientMousePos.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.x != null && $Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && $Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ClientMousePos message, length delimited. Does not implicitly {@link game.ClientMousePos.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ClientMousePos
         * @static
         * @param {game.ClientMousePos.$Properties} message ClientMousePos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientMousePos.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a ClientMousePos message from the specified reader or buffer.
         * @function decode
         * @memberof game.ClientMousePos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ClientMousePos & game.ClientMousePos.$Shape} ClientMousePos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientMousePos.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.game.ClientMousePos(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 5)
                            break;
                        if ((value = reader.float()) !== 0)
                            message.x = value;
                        else
                            delete message.x;
                        continue;
                    }
                case 2: {
                        if (wireType !== 5)
                            break;
                        if ((value = reader.float()) !== 0)
                            message.y = value;
                        else
                            delete message.y;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a ClientMousePos message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.ClientMousePos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ClientMousePos & game.ClientMousePos.$Shape} ClientMousePos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientMousePos.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientMousePos message.
         * @function verify
         * @memberof game.ClientMousePos
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientMousePos.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.x != null && $Object.hasOwnProperty.call(message, "x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && $Object.hasOwnProperty.call(message, "y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            return null;
        };

        /**
         * Creates a ClientMousePos message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.ClientMousePos
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.ClientMousePos} ClientMousePos
         */
        ClientMousePos.fromObject = function (object, _depth) {
            if (object instanceof $root.game.ClientMousePos)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".game.ClientMousePos: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.game.ClientMousePos();
            if (object.x != null)
                if ($Number(object.x) !== 0)
                    message.x = $Number(object.x);
            if (object.y != null)
                if ($Number(object.y) !== 0)
                    message.y = $Number(object.y);
            return message;
        };

        /**
         * Creates a plain object from a ClientMousePos message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.ClientMousePos
         * @static
         * @param {game.ClientMousePos} message ClientMousePos
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientMousePos.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && $Object.hasOwnProperty.call(message, "x"))
                object.x = options.json && !$isFinite(message.x) ? $String(message.x) : message.x;
            if (message.y != null && $Object.hasOwnProperty.call(message, "y"))
                object.y = options.json && !$isFinite(message.y) ? $String(message.y) : message.y;
            return object;
        };

        /**
         * Converts this ClientMousePos to JSON.
         * @function toJSON
         * @memberof game.ClientMousePos
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientMousePos.prototype.toJSON = function() {
            return ClientMousePos.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ClientMousePos
         * @function getTypeUrl
         * @memberof game.ClientMousePos
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ClientMousePos.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.ClientMousePos";
        };

        return ClientMousePos;
    })();

    game.ClientMessage = (function() {

        /**
         * Properties of a ClientMessage.
         * @typedef {Object} game.ClientMessage.$Properties
         * @property {string|null} [chatMessage] ClientMessage chatMessage
         * @property {game.ClientKey|null} [keyUp] ClientMessage keyUp
         * @property {game.ClientKey|null} [keyDown] ClientMessage keyDown
         * @property {boolean|null} [mouseEnable] ClientMessage mouseEnable
         * @property {game.ClientMousePos.$Properties|null} [mousePos] ClientMessage mousePos
         * @property {game.ClientInit.$Properties|null} [init] ClientMessage init
         * @property {game.ClientAbility|null} [ability] ClientMessage ability
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ClientMessage.
         * @memberof game
         * @interface IClientMessage
         * @augments game.ClientMessage.$Properties
         * @deprecated Use game.ClientMessage.$Properties instead.
         */

        /**
         * Shape of a ClientMessage.
         * @typedef {game.ClientMessage.$Properties} game.ClientMessage.$Shape
         */

        /**
         * Constructs a new ClientMessage.
         * @memberof game
         * @classdesc Represents a ClientMessage.
         * @constructor
         * @param {game.ClientMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ClientMessage = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ClientMessage chatMessage.
         * @member {string|null|undefined} chatMessage
         * @memberof game.ClientMessage
         * @instance
         */
        ClientMessage.prototype.chatMessage = null;

        /**
         * ClientMessage keyUp.
         * @member {game.ClientKey|null|undefined} keyUp
         * @memberof game.ClientMessage
         * @instance
         */
        ClientMessage.prototype.keyUp = null;

        /**
         * ClientMessage keyDown.
         * @member {game.ClientKey|null|undefined} keyDown
         * @memberof game.ClientMessage
         * @instance
         */
        ClientMessage.prototype.keyDown = null;

        /**
         * ClientMessage mouseEnable.
         * @member {boolean|null|undefined} mouseEnable
         * @memberof game.ClientMessage
         * @instance
         */
        ClientMessage.prototype.mouseEnable = null;

        /**
         * ClientMessage mousePos.
         * @member {game.ClientMousePos.$Properties|null|undefined} mousePos
         * @memberof game.ClientMessage
         * @instance
         */
        ClientMessage.prototype.mousePos = null;

        /**
         * ClientMessage init.
         * @member {game.ClientInit.$Properties|null|undefined} init
         * @memberof game.ClientMessage
         * @instance
         */
        ClientMessage.prototype.init = null;

        /**
         * ClientMessage ability.
         * @member {game.ClientAbility|null|undefined} ability
         * @memberof game.ClientMessage
         * @instance
         */
        ClientMessage.prototype.ability = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientMessage.prototype, "_chatMessage", {
            get: $util.oneOfGetter($oneOfFields = ["chatMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientMessage.prototype, "_keyUp", {
            get: $util.oneOfGetter($oneOfFields = ["keyUp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientMessage.prototype, "_keyDown", {
            get: $util.oneOfGetter($oneOfFields = ["keyDown"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientMessage.prototype, "_mouseEnable", {
            get: $util.oneOfGetter($oneOfFields = ["mouseEnable"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientMessage.prototype, "_mousePos", {
            get: $util.oneOfGetter($oneOfFields = ["mousePos"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientMessage.prototype, "_init", {
            get: $util.oneOfGetter($oneOfFields = ["init"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientMessage.prototype, "_ability", {
            get: $util.oneOfGetter($oneOfFields = ["ability"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ClientMessage instance using the specified properties.
         * @function create
         * @memberof game.ClientMessage
         * @static
         * @param {game.ClientMessage.$Properties=} [properties] Properties to set
         * @returns {game.ClientMessage} ClientMessage instance
         * @type {{
         *   (properties: game.ClientMessage.$Shape): game.ClientMessage & game.ClientMessage.$Shape;
         *   (properties?: game.ClientMessage.$Properties): game.ClientMessage;
         * }}
         */
        ClientMessage.create = function(properties) {
            return new ClientMessage(properties);
        };

        /**
         * Encodes the specified ClientMessage message. Does not implicitly {@link game.ClientMessage.verify|verify} messages.
         * @function encode
         * @memberof game.ClientMessage
         * @static
         * @param {game.ClientMessage.$Properties} message ClientMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientMessage.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.chatMessage != null && $Object.hasOwnProperty.call(message, "chatMessage"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.chatMessage);
            if (message.keyUp != null && $Object.hasOwnProperty.call(message, "keyUp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.keyUp);
            if (message.keyDown != null && $Object.hasOwnProperty.call(message, "keyDown"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.keyDown);
            if (message.mouseEnable != null && $Object.hasOwnProperty.call(message, "mouseEnable"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.mouseEnable);
            if (message.mousePos != null && $Object.hasOwnProperty.call(message, "mousePos"))
                $root.game.ClientMousePos.encode(message.mousePos, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            if (message.init != null && $Object.hasOwnProperty.call(message, "init"))
                $root.game.ClientInit.encode(message.init, writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
            if (message.ability != null && $Object.hasOwnProperty.call(message, "ability"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.ability);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ClientMessage message, length delimited. Does not implicitly {@link game.ClientMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ClientMessage
         * @static
         * @param {game.ClientMessage.$Properties} message ClientMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientMessage.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a ClientMessage message from the specified reader or buffer.
         * @function decode
         * @memberof game.ClientMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ClientMessage & game.ClientMessage.$Shape} ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientMessage.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.game.ClientMessage();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.chatMessage = reader.stringVerify();
                        message._chatMessage = "chatMessage";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.keyUp = reader.int32();
                        message._keyUp = "keyUp";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.keyDown = reader.int32();
                        message._keyDown = "keyDown";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.mouseEnable = reader.bool();
                        message._mouseEnable = "mouseEnable";
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        message.mousePos = $root.game.ClientMousePos.decode(reader, reader.uint32(), $undefined, _depth + 1, message.mousePos);
                        message._mousePos = "mousePos";
                        continue;
                    }
                case 6: {
                        if (wireType !== 2)
                            break;
                        message.init = $root.game.ClientInit.decode(reader, reader.uint32(), $undefined, _depth + 1, message.init);
                        message._init = "init";
                        continue;
                    }
                case 7: {
                        if (wireType !== 0)
                            break;
                        message.ability = reader.int32();
                        message._ability = "ability";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a ClientMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.ClientMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ClientMessage & game.ClientMessage.$Shape} ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientMessage.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientMessage message.
         * @function verify
         * @memberof game.ClientMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientMessage.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.chatMessage != null && $Object.hasOwnProperty.call(message, "chatMessage")) {
                properties._chatMessage = 1;
                if (!$util.isString(message.chatMessage))
                    return "chatMessage: string expected";
            }
            if (message.keyUp != null && $Object.hasOwnProperty.call(message, "keyUp")) {
                properties._keyUp = 1;
                switch (message.keyUp) {
                default:
                    return "keyUp: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            }
            if (message.keyDown != null && $Object.hasOwnProperty.call(message, "keyDown")) {
                properties._keyDown = 1;
                switch (message.keyDown) {
                default:
                    return "keyDown: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            }
            if (message.mouseEnable != null && $Object.hasOwnProperty.call(message, "mouseEnable")) {
                properties._mouseEnable = 1;
                if (typeof message.mouseEnable !== "boolean")
                    return "mouseEnable: boolean expected";
            }
            if (message.mousePos != null && $Object.hasOwnProperty.call(message, "mousePos")) {
                properties._mousePos = 1;
                {
                    let error = $root.game.ClientMousePos.verify(message.mousePos, _depth + 1);
                    if (error)
                        return "mousePos." + error;
                }
            }
            if (message.init != null && $Object.hasOwnProperty.call(message, "init")) {
                properties._init = 1;
                {
                    let error = $root.game.ClientInit.verify(message.init, _depth + 1);
                    if (error)
                        return "init." + error;
                }
            }
            if (message.ability != null && $Object.hasOwnProperty.call(message, "ability")) {
                properties._ability = 1;
                switch (message.ability) {
                default:
                    return "ability: enum value expected";
                case 1:
                case 2:
                    break;
                }
            }
            return null;
        };

        /**
         * Creates a ClientMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.ClientMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.ClientMessage} ClientMessage
         */
        ClientMessage.fromObject = function (object, _depth) {
            if (object instanceof $root.game.ClientMessage)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".game.ClientMessage: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.game.ClientMessage();
            if (object.chatMessage != null)
                message.chatMessage = $String(object.chatMessage);
            switch (object.keyUp) {
            default:
                if (typeof object.keyUp === "number") {
                    message.keyUp = object.keyUp;
                    break;
                }
                break;
            case "UP":
            case 1:
                message.keyUp = 1;
                break;
            case "DOWN":
            case 2:
                message.keyUp = 2;
                break;
            case "LEFT":
            case 3:
                message.keyUp = 3;
                break;
            case "RIGHT":
            case 4:
                message.keyUp = 4;
                break;
            case "SHIFT":
            case 5:
                message.keyUp = 5;
                break;
            }
            switch (object.keyDown) {
            default:
                if (typeof object.keyDown === "number") {
                    message.keyDown = object.keyDown;
                    break;
                }
                break;
            case "UP":
            case 1:
                message.keyDown = 1;
                break;
            case "DOWN":
            case 2:
                message.keyDown = 2;
                break;
            case "LEFT":
            case 3:
                message.keyDown = 3;
                break;
            case "RIGHT":
            case 4:
                message.keyDown = 4;
                break;
            case "SHIFT":
            case 5:
                message.keyDown = 5;
                break;
            }
            if (object.mouseEnable != null)
                message.mouseEnable = $Boolean(object.mouseEnable);
            if (object.mousePos != null) {
                if (!$util.isObject(object.mousePos))
                    throw $TypeError(".game.ClientMessage.mousePos: object expected");
                message.mousePos = $root.game.ClientMousePos.fromObject(object.mousePos, _depth + 1);
            }
            if (object.init != null) {
                if (!$util.isObject(object.init))
                    throw $TypeError(".game.ClientMessage.init: object expected");
                message.init = $root.game.ClientInit.fromObject(object.init, _depth + 1);
            }
            switch (object.ability) {
            default:
                if (typeof object.ability === "number") {
                    message.ability = object.ability;
                    break;
                }
                break;
            case "FIRST":
            case 1:
                message.ability = 1;
                break;
            case "SECOND":
            case 2:
                message.ability = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ClientMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.ClientMessage
         * @static
         * @param {game.ClientMessage} message ClientMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientMessage.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.chatMessage != null && $Object.hasOwnProperty.call(message, "chatMessage"))
                object.chatMessage = message.chatMessage;
            if (message.keyUp != null && $Object.hasOwnProperty.call(message, "keyUp"))
                object.keyUp = options.enums === $String ? $root.game.ClientKey[message.keyUp] === $undefined ? message.keyUp : $root.game.ClientKey[message.keyUp] : message.keyUp;
            if (message.keyDown != null && $Object.hasOwnProperty.call(message, "keyDown"))
                object.keyDown = options.enums === $String ? $root.game.ClientKey[message.keyDown] === $undefined ? message.keyDown : $root.game.ClientKey[message.keyDown] : message.keyDown;
            if (message.mouseEnable != null && $Object.hasOwnProperty.call(message, "mouseEnable"))
                object.mouseEnable = message.mouseEnable;
            if (message.mousePos != null && $Object.hasOwnProperty.call(message, "mousePos"))
                object.mousePos = $root.game.ClientMousePos.toObject(message.mousePos, options, _depth + 1);
            if (message.init != null && $Object.hasOwnProperty.call(message, "init"))
                object.init = $root.game.ClientInit.toObject(message.init, options, _depth + 1);
            if (message.ability != null && $Object.hasOwnProperty.call(message, "ability"))
                object.ability = options.enums === $String ? $root.game.ClientAbility[message.ability] === $undefined ? message.ability : $root.game.ClientAbility[message.ability] : message.ability;
            return object;
        };

        /**
         * Converts this ClientMessage to JSON.
         * @function toJSON
         * @memberof game.ClientMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientMessage.prototype.toJSON = function() {
            return ClientMessage.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ClientMessage
         * @function getTypeUrl
         * @memberof game.ClientMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ClientMessage.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.ClientMessage";
        };

        return ClientMessage;
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
        const valuesById = {}, values = $Object.create(valuesById);
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
     * @property {number} Ok=200 Ok value
     * @property {number} InternalError=500 InternalError value
     * @property {number} InvalidBody=400 InvalidBody value
     * @property {number} NotAuthenticated=401 NotAuthenticated value
     * @property {number} VerificationFailure=402 VerificationFailure value
     * @property {number} NotFound=404 NotFound value
     * @property {number} AccountExists=450 AccountExists value
     * @property {number} AccountNotExists=451 AccountNotExists value
     * @property {number} WrongPassword=452 WrongPassword value
     */
    http.ResponseStatus = (function() {
        const valuesById = {}, values = $Object.create(valuesById);
        values[valuesById[200] = "Ok"] = 200;
        values[valuesById[500] = "InternalError"] = 500;
        values[valuesById[400] = "InvalidBody"] = 400;
        values[valuesById[401] = "NotAuthenticated"] = 401;
        values[valuesById[402] = "VerificationFailure"] = 402;
        values[valuesById[404] = "NotFound"] = 404;
        values[valuesById[450] = "AccountExists"] = 450;
        values[valuesById[451] = "AccountNotExists"] = 451;
        values[valuesById[452] = "WrongPassword"] = 452;
        return values;
    })();

    http.Profile = (function() {

        /**
         * Properties of a Profile.
         * @typedef {Object} http.Profile.$Properties
         * @property {number|null} [vp] Profile vp
         * @property {string|null} [username] Profile username
         * @property {Object.<string,string>|null} [highest] Profile highest
         * @property {Array.<string>|null} [accessories] Profile accessories
         * @property {http.AccountRole|null} [role] Profile role
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Profile.
         * @memberof http
         * @interface IProfile
         * @augments http.Profile.$Properties
         * @deprecated Use http.Profile.$Properties instead.
         */

        /**
         * Shape of a Profile.
         * @typedef {http.Profile.$Properties} http.Profile.$Shape
         */

        /**
         * Constructs a new Profile.
         * @memberof http
         * @classdesc Represents a Profile.
         * @constructor
         * @param {http.Profile.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const Profile = function (properties) {
            this.highest = {};
            this.accessories = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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
         * @param {http.Profile.$Properties=} [properties] Properties to set
         * @returns {http.Profile} Profile instance
         * @type {{
         *   (properties: http.Profile.$Shape): http.Profile & http.Profile.$Shape;
         *   (properties?: http.Profile.$Properties): http.Profile;
         * }}
         */
        Profile.create = function(properties) {
            return new Profile(properties);
        };

        /**
         * Encodes the specified Profile message. Does not implicitly {@link http.Profile.verify|verify} messages.
         * @function encode
         * @memberof http.Profile
         * @static
         * @param {http.Profile.$Properties} message Profile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Profile.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.vp != null && $Object.hasOwnProperty.call(message, "vp"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.vp);
            if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            if (message.highest != null && $Object.hasOwnProperty.call(message, "highest"))
                for (let keys = $Object.keys(message.highest), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.highest[keys[i]]).ldelim();
            if (message.accessories != null && message.accessories.length)
                for (let i = 0; i < message.accessories.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.accessories[i]);
            if (message.role != null && $Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.role);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Profile message, length delimited. Does not implicitly {@link http.Profile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.Profile
         * @static
         * @param {http.Profile.$Properties} message Profile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Profile.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a Profile message from the specified reader or buffer.
         * @function decode
         * @memberof http.Profile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.Profile & http.Profile.$Shape} Profile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Profile.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.http.Profile(), key, value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.vp = value;
                        else
                            delete message.vp;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.username = value;
                        else
                            delete message.username;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if (message.highest === $util.emptyObject)
                            message.highest = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.tag();
                            wireType = tag2 & 7;
                            switch (tag2 >>>= 3) {
                            case 1:
                                if (wireType !== 2)
                                    break;
                                key = reader.stringVerify();
                                continue;
                            case 2:
                                if (wireType !== 2)
                                    break;
                                value = reader.stringVerify();
                                continue;
                            }
                            reader.skipType(wireType, _depth, tag2);
                        }
                        if (key === "__proto__")
                            $util.makeProp(message.highest, key);
                        message.highest[key] = value;
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        if (!(message.accessories && message.accessories.length))
                            message.accessories = [];
                        message.accessories.push(reader.stringVerify());
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.role = value;
                        else
                            delete message.role;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a Profile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.Profile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.Profile & http.Profile.$Shape} Profile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Profile.decodeDelimited = function(reader) {
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
        Profile.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.vp != null && $Object.hasOwnProperty.call(message, "vp"))
                if (!$util.isInteger(message.vp))
                    return "vp: integer expected";
            if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.highest != null && $Object.hasOwnProperty.call(message, "highest")) {
                if (!$util.isObject(message.highest))
                    return "highest: object expected";
                let key = $Object.keys(message.highest);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.highest[key[i]]))
                        return "highest: string{k:string} expected";
            }
            if (message.accessories != null && $Object.hasOwnProperty.call(message, "accessories")) {
                if (!$Array.isArray(message.accessories))
                    return "accessories: array expected";
                for (let i = 0; i < message.accessories.length; ++i)
                    if (!$util.isString(message.accessories[i]))
                        return "accessories: string[] expected";
            }
            if (message.role != null && $Object.hasOwnProperty.call(message, "role"))
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
        Profile.fromObject = function (object, _depth) {
            if (object instanceof $root.http.Profile)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".http.Profile: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.http.Profile();
            if (object.vp != null)
                if ($Number(object.vp) !== 0)
                    message.vp = object.vp >>> 0;
            if (object.username != null)
                if (typeof object.username !== "string" || object.username.length)
                    message.username = $String(object.username);
            if (object.highest) {
                if (!$util.isObject(object.highest))
                    throw $TypeError(".http.Profile.highest: object expected");
                message.highest = {};
                for (let keys = $Object.keys(object.highest), i = 0; i < keys.length; ++i) {
                    if (keys[i] === "__proto__")
                        $util.makeProp(message.highest, keys[i]);
                    message.highest[keys[i]] = $String(object.highest[keys[i]]);
                }
            }
            if (object.accessories) {
                if (!$Array.isArray(object.accessories))
                    throw $TypeError(".http.Profile.accessories: array expected");
                message.accessories = $Array(object.accessories.length);
                for (let i = 0; i < object.accessories.length; ++i)
                    message.accessories[i] = $String(object.accessories[i]);
            }
            if (object.role !== 0 && (typeof object.role !== "string" || $root.http.AccountRole[object.role] !== 0))
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
        Profile.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.accessories = [];
            if (options.objects || options.defaults)
                object.highest = {};
            if (options.defaults) {
                object.vp = 0;
                object.username = "";
                object.role = options.enums === $String ? "USER" : 0;
            }
            if (message.vp != null && $Object.hasOwnProperty.call(message, "vp"))
                object.vp = message.vp;
            if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                object.username = message.username;
            let keys2;
            if (message.highest && (keys2 = $Object.keys(message.highest)).length) {
                object.highest = {};
                for (let j = 0; j < keys2.length; ++j) {
                    if (keys2[j] === "__proto__")
                        $util.makeProp(object.highest, keys2[j]);
                    object.highest[keys2[j]] = message.highest[keys2[j]];
                }
            }
            if (message.accessories && message.accessories.length) {
                object.accessories = $Array(message.accessories.length);
                for (let j = 0; j < message.accessories.length; ++j)
                    object.accessories[j] = message.accessories[j];
            }
            if (message.role != null && $Object.hasOwnProperty.call(message, "role"))
                object.role = options.enums === $String ? $root.http.AccountRole[message.role] === $undefined ? message.role : $root.http.AccountRole[message.role] : message.role;
            return object;
        };

        /**
         * Converts this Profile to JSON.
         * @function toJSON
         * @memberof http.Profile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Profile.prototype.toJSON = function() {
            return Profile.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Profile
         * @function getTypeUrl
         * @memberof http.Profile
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Profile.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/http.Profile";
        };

        return Profile;
    })();

    http.RegisterRequest = (function() {

        /**
         * Properties of a RegisterRequest.
         * @typedef {Object} http.RegisterRequest.$Properties
         * @property {string|null} [username] RegisterRequest username
         * @property {string|null} [password] RegisterRequest password
         * @property {string|null} [token] RegisterRequest token
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a RegisterRequest.
         * @memberof http
         * @interface IRegisterRequest
         * @augments http.RegisterRequest.$Properties
         * @deprecated Use http.RegisterRequest.$Properties instead.
         */

        /**
         * Shape of a RegisterRequest.
         * @typedef {http.RegisterRequest.$Properties} http.RegisterRequest.$Shape
         */

        /**
         * Constructs a new RegisterRequest.
         * @memberof http
         * @classdesc Represents a RegisterRequest.
         * @constructor
         * @param {http.RegisterRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const RegisterRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * RegisterRequest username.
         * @member {string} username
         * @memberof http.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.username = "";

        /**
         * RegisterRequest password.
         * @member {string} password
         * @memberof http.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.password = "";

        /**
         * RegisterRequest token.
         * @member {string} token
         * @memberof http.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.token = "";

        /**
         * Creates a new RegisterRequest instance using the specified properties.
         * @function create
         * @memberof http.RegisterRequest
         * @static
         * @param {http.RegisterRequest.$Properties=} [properties] Properties to set
         * @returns {http.RegisterRequest} RegisterRequest instance
         * @type {{
         *   (properties: http.RegisterRequest.$Shape): http.RegisterRequest & http.RegisterRequest.$Shape;
         *   (properties?: http.RegisterRequest.$Properties): http.RegisterRequest;
         * }}
         */
        RegisterRequest.create = function(properties) {
            return new RegisterRequest(properties);
        };

        /**
         * Encodes the specified RegisterRequest message. Does not implicitly {@link http.RegisterRequest.verify|verify} messages.
         * @function encode
         * @memberof http.RegisterRequest
         * @static
         * @param {http.RegisterRequest.$Properties} message RegisterRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.password != null && $Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified RegisterRequest message, length delimited. Does not implicitly {@link http.RegisterRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.RegisterRequest
         * @static
         * @param {http.RegisterRequest.$Properties} message RegisterRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a RegisterRequest message from the specified reader or buffer.
         * @function decode
         * @memberof http.RegisterRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.RegisterRequest & http.RegisterRequest.$Shape} RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.http.RegisterRequest(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.username = value;
                        else
                            delete message.username;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.password = value;
                        else
                            delete message.password;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.token = value;
                        else
                            delete message.token;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a RegisterRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.RegisterRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.RegisterRequest & http.RegisterRequest.$Shape} RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterRequest message.
         * @function verify
         * @memberof http.RegisterRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterRequest.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && $Object.hasOwnProperty.call(message, "password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a RegisterRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof http.RegisterRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {http.RegisterRequest} RegisterRequest
         */
        RegisterRequest.fromObject = function (object, _depth) {
            if (object instanceof $root.http.RegisterRequest)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".http.RegisterRequest: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.http.RegisterRequest();
            if (object.username != null)
                if (typeof object.username !== "string" || object.username.length)
                    message.username = $String(object.username);
            if (object.password != null)
                if (typeof object.password !== "string" || object.password.length)
                    message.password = $String(object.password);
            if (object.token != null)
                if (typeof object.token !== "string" || object.token.length)
                    message.token = $String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a RegisterRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof http.RegisterRequest
         * @static
         * @param {http.RegisterRequest} message RegisterRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterRequest.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.username = "";
                object.password = "";
                object.token = "";
            }
            if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                object.username = message.username;
            if (message.password != null && $Object.hasOwnProperty.call(message, "password"))
                object.password = message.password;
            if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this RegisterRequest to JSON.
         * @function toJSON
         * @memberof http.RegisterRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterRequest.prototype.toJSON = function() {
            return RegisterRequest.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RegisterRequest
         * @function getTypeUrl
         * @memberof http.RegisterRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RegisterRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/http.RegisterRequest";
        };

        return RegisterRequest;
    })();

    http.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @typedef {Object} http.LoginRequest.$Properties
         * @property {string|null} [username] LoginRequest username
         * @property {string|null} [password] LoginRequest password
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a LoginRequest.
         * @memberof http
         * @interface ILoginRequest
         * @augments http.LoginRequest.$Properties
         * @deprecated Use http.LoginRequest.$Properties instead.
         */

        /**
         * Shape of a LoginRequest.
         * @typedef {http.LoginRequest.$Properties} http.LoginRequest.$Shape
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof http
         * @classdesc Represents a LoginRequest.
         * @constructor
         * @param {http.LoginRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const LoginRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * LoginRequest username.
         * @member {string} username
         * @memberof http.LoginRequest
         * @instance
         */
        LoginRequest.prototype.username = "";

        /**
         * LoginRequest password.
         * @member {string} password
         * @memberof http.LoginRequest
         * @instance
         */
        LoginRequest.prototype.password = "";

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof http.LoginRequest
         * @static
         * @param {http.LoginRequest.$Properties=} [properties] Properties to set
         * @returns {http.LoginRequest} LoginRequest instance
         * @type {{
         *   (properties: http.LoginRequest.$Shape): http.LoginRequest & http.LoginRequest.$Shape;
         *   (properties?: http.LoginRequest.$Properties): http.LoginRequest;
         * }}
         */
        LoginRequest.create = function(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link http.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof http.LoginRequest
         * @static
         * @param {http.LoginRequest.$Properties} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.password != null && $Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link http.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.LoginRequest
         * @static
         * @param {http.LoginRequest.$Properties} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof http.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.LoginRequest & http.LoginRequest.$Shape} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.http.LoginRequest(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.username = value;
                        else
                            delete message.username;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.password = value;
                        else
                            delete message.password;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.LoginRequest & http.LoginRequest.$Shape} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof http.LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && $Object.hasOwnProperty.call(message, "password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof http.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {http.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function (object, _depth) {
            if (object instanceof $root.http.LoginRequest)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".http.LoginRequest: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.http.LoginRequest();
            if (object.username != null)
                if (typeof object.username !== "string" || object.username.length)
                    message.username = $String(object.username);
            if (object.password != null)
                if (typeof object.password !== "string" || object.password.length)
                    message.password = $String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof http.LoginRequest
         * @static
         * @param {http.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.username = "";
                object.password = "";
            }
            if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                object.username = message.username;
            if (message.password != null && $Object.hasOwnProperty.call(message, "password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof http.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function() {
            return LoginRequest.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for LoginRequest
         * @function getTypeUrl
         * @memberof http.LoginRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        LoginRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/http.LoginRequest";
        };

        return LoginRequest;
    })();

    http.LoginAndRegisterResponse = (function() {

        /**
         * Properties of a LoginAndRegisterResponse.
         * @typedef {Object} http.LoginAndRegisterResponse.$Properties
         * @property {string|null} [token] LoginAndRegisterResponse token
         * @property {http.Profile.$Properties|null} [profile] LoginAndRegisterResponse profile
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a LoginAndRegisterResponse.
         * @memberof http
         * @interface ILoginAndRegisterResponse
         * @augments http.LoginAndRegisterResponse.$Properties
         * @deprecated Use http.LoginAndRegisterResponse.$Properties instead.
         */

        /**
         * Shape of a LoginAndRegisterResponse.
         * @typedef {http.LoginAndRegisterResponse.$Properties} http.LoginAndRegisterResponse.$Shape
         */

        /**
         * Constructs a new LoginAndRegisterResponse.
         * @memberof http
         * @classdesc Represents a LoginAndRegisterResponse.
         * @constructor
         * @param {http.LoginAndRegisterResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const LoginAndRegisterResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * LoginAndRegisterResponse token.
         * @member {string|null|undefined} token
         * @memberof http.LoginAndRegisterResponse
         * @instance
         */
        LoginAndRegisterResponse.prototype.token = null;

        /**
         * LoginAndRegisterResponse profile.
         * @member {http.Profile.$Properties|null|undefined} profile
         * @memberof http.LoginAndRegisterResponse
         * @instance
         */
        LoginAndRegisterResponse.prototype.profile = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(LoginAndRegisterResponse.prototype, "_token", {
            get: $util.oneOfGetter($oneOfFields = ["token"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(LoginAndRegisterResponse.prototype, "_profile", {
            get: $util.oneOfGetter($oneOfFields = ["profile"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new LoginAndRegisterResponse instance using the specified properties.
         * @function create
         * @memberof http.LoginAndRegisterResponse
         * @static
         * @param {http.LoginAndRegisterResponse.$Properties=} [properties] Properties to set
         * @returns {http.LoginAndRegisterResponse} LoginAndRegisterResponse instance
         * @type {{
         *   (properties: http.LoginAndRegisterResponse.$Shape): http.LoginAndRegisterResponse & http.LoginAndRegisterResponse.$Shape;
         *   (properties?: http.LoginAndRegisterResponse.$Properties): http.LoginAndRegisterResponse;
         * }}
         */
        LoginAndRegisterResponse.create = function(properties) {
            return new LoginAndRegisterResponse(properties);
        };

        /**
         * Encodes the specified LoginAndRegisterResponse message. Does not implicitly {@link http.LoginAndRegisterResponse.verify|verify} messages.
         * @function encode
         * @memberof http.LoginAndRegisterResponse
         * @static
         * @param {http.LoginAndRegisterResponse.$Properties} message LoginAndRegisterResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginAndRegisterResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            if (message.profile != null && $Object.hasOwnProperty.call(message, "profile"))
                $root.http.Profile.encode(message.profile, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified LoginAndRegisterResponse message, length delimited. Does not implicitly {@link http.LoginAndRegisterResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.LoginAndRegisterResponse
         * @static
         * @param {http.LoginAndRegisterResponse.$Properties} message LoginAndRegisterResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginAndRegisterResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a LoginAndRegisterResponse message from the specified reader or buffer.
         * @function decode
         * @memberof http.LoginAndRegisterResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.LoginAndRegisterResponse & http.LoginAndRegisterResponse.$Shape} LoginAndRegisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginAndRegisterResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.http.LoginAndRegisterResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.token = reader.stringVerify();
                        message._token = "token";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.profile = $root.http.Profile.decode(reader, reader.uint32(), $undefined, _depth + 1, message.profile);
                        message._profile = "profile";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a LoginAndRegisterResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.LoginAndRegisterResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.LoginAndRegisterResponse & http.LoginAndRegisterResponse.$Shape} LoginAndRegisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginAndRegisterResponse.decodeDelimited = function(reader) {
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
        LoginAndRegisterResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.token != null && $Object.hasOwnProperty.call(message, "token")) {
                properties._token = 1;
                if (!$util.isString(message.token))
                    return "token: string expected";
            }
            if (message.profile != null && $Object.hasOwnProperty.call(message, "profile")) {
                properties._profile = 1;
                {
                    let error = $root.http.Profile.verify(message.profile, _depth + 1);
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
        LoginAndRegisterResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.http.LoginAndRegisterResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".http.LoginAndRegisterResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.http.LoginAndRegisterResponse();
            if (object.token != null)
                message.token = $String(object.token);
            if (object.profile != null) {
                if (!$util.isObject(object.profile))
                    throw $TypeError(".http.LoginAndRegisterResponse.profile: object expected");
                message.profile = $root.http.Profile.fromObject(object.profile, _depth + 1);
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
        LoginAndRegisterResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
                object.token = message.token;
            if (message.profile != null && $Object.hasOwnProperty.call(message, "profile"))
                object.profile = $root.http.Profile.toObject(message.profile, options, _depth + 1);
            return object;
        };

        /**
         * Converts this LoginAndRegisterResponse to JSON.
         * @function toJSON
         * @memberof http.LoginAndRegisterResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginAndRegisterResponse.prototype.toJSON = function() {
            return LoginAndRegisterResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for LoginAndRegisterResponse
         * @function getTypeUrl
         * @memberof http.LoginAndRegisterResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        LoginAndRegisterResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/http.LoginAndRegisterResponse";
        };

        return LoginAndRegisterResponse;
    })();

    http.ProfileResponse = (function() {

        /**
         * Properties of a ProfileResponse.
         * @typedef {Object} http.ProfileResponse.$Properties
         * @property {http.Profile.$Properties|null} [profile] ProfileResponse profile
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ProfileResponse.
         * @memberof http
         * @interface IProfileResponse
         * @augments http.ProfileResponse.$Properties
         * @deprecated Use http.ProfileResponse.$Properties instead.
         */

        /**
         * Shape of a ProfileResponse.
         * @typedef {http.ProfileResponse.$Properties} http.ProfileResponse.$Shape
         */

        /**
         * Constructs a new ProfileResponse.
         * @memberof http
         * @classdesc Represents a ProfileResponse.
         * @constructor
         * @param {http.ProfileResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ProfileResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ProfileResponse profile.
         * @member {http.Profile.$Properties|null|undefined} profile
         * @memberof http.ProfileResponse
         * @instance
         */
        ProfileResponse.prototype.profile = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ProfileResponse.prototype, "_profile", {
            get: $util.oneOfGetter($oneOfFields = ["profile"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ProfileResponse instance using the specified properties.
         * @function create
         * @memberof http.ProfileResponse
         * @static
         * @param {http.ProfileResponse.$Properties=} [properties] Properties to set
         * @returns {http.ProfileResponse} ProfileResponse instance
         * @type {{
         *   (properties: http.ProfileResponse.$Shape): http.ProfileResponse & http.ProfileResponse.$Shape;
         *   (properties?: http.ProfileResponse.$Properties): http.ProfileResponse;
         * }}
         */
        ProfileResponse.create = function(properties) {
            return new ProfileResponse(properties);
        };

        /**
         * Encodes the specified ProfileResponse message. Does not implicitly {@link http.ProfileResponse.verify|verify} messages.
         * @function encode
         * @memberof http.ProfileResponse
         * @static
         * @param {http.ProfileResponse.$Properties} message ProfileResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.profile != null && $Object.hasOwnProperty.call(message, "profile"))
                $root.http.Profile.encode(message.profile, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ProfileResponse message, length delimited. Does not implicitly {@link http.ProfileResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.ProfileResponse
         * @static
         * @param {http.ProfileResponse.$Properties} message ProfileResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a ProfileResponse message from the specified reader or buffer.
         * @function decode
         * @memberof http.ProfileResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.ProfileResponse & http.ProfileResponse.$Shape} ProfileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.http.ProfileResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.profile = $root.http.Profile.decode(reader, reader.uint32(), $undefined, _depth + 1, message.profile);
                        message._profile = "profile";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a ProfileResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.ProfileResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.ProfileResponse & http.ProfileResponse.$Shape} ProfileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileResponse.decodeDelimited = function(reader) {
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
        ProfileResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.profile != null && $Object.hasOwnProperty.call(message, "profile")) {
                properties._profile = 1;
                {
                    let error = $root.http.Profile.verify(message.profile, _depth + 1);
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
        ProfileResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.http.ProfileResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".http.ProfileResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.http.ProfileResponse();
            if (object.profile != null) {
                if (!$util.isObject(object.profile))
                    throw $TypeError(".http.ProfileResponse.profile: object expected");
                message.profile = $root.http.Profile.fromObject(object.profile, _depth + 1);
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
        ProfileResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.profile != null && $Object.hasOwnProperty.call(message, "profile"))
                object.profile = $root.http.Profile.toObject(message.profile, options, _depth + 1);
            return object;
        };

        /**
         * Converts this ProfileResponse to JSON.
         * @function toJSON
         * @memberof http.ProfileResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProfileResponse.prototype.toJSON = function() {
            return ProfileResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ProfileResponse
         * @function getTypeUrl
         * @memberof http.ProfileResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ProfileResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/http.ProfileResponse";
        };

        return ProfileResponse;
    })();

    http.AuthResponse = (function() {

        /**
         * Properties of an AuthResponse.
         * @typedef {Object} http.AuthResponse.$Properties
         * @property {http.Profile.$Properties|null} [profile] AuthResponse profile
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an AuthResponse.
         * @memberof http
         * @interface IAuthResponse
         * @augments http.AuthResponse.$Properties
         * @deprecated Use http.AuthResponse.$Properties instead.
         */

        /**
         * Shape of an AuthResponse.
         * @typedef {http.AuthResponse.$Properties} http.AuthResponse.$Shape
         */

        /**
         * Constructs a new AuthResponse.
         * @memberof http
         * @classdesc Represents an AuthResponse.
         * @constructor
         * @param {http.AuthResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const AuthResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * AuthResponse profile.
         * @member {http.Profile.$Properties|null|undefined} profile
         * @memberof http.AuthResponse
         * @instance
         */
        AuthResponse.prototype.profile = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(AuthResponse.prototype, "_profile", {
            get: $util.oneOfGetter($oneOfFields = ["profile"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AuthResponse instance using the specified properties.
         * @function create
         * @memberof http.AuthResponse
         * @static
         * @param {http.AuthResponse.$Properties=} [properties] Properties to set
         * @returns {http.AuthResponse} AuthResponse instance
         * @type {{
         *   (properties: http.AuthResponse.$Shape): http.AuthResponse & http.AuthResponse.$Shape;
         *   (properties?: http.AuthResponse.$Properties): http.AuthResponse;
         * }}
         */
        AuthResponse.create = function(properties) {
            return new AuthResponse(properties);
        };

        /**
         * Encodes the specified AuthResponse message. Does not implicitly {@link http.AuthResponse.verify|verify} messages.
         * @function encode
         * @memberof http.AuthResponse
         * @static
         * @param {http.AuthResponse.$Properties} message AuthResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.profile != null && $Object.hasOwnProperty.call(message, "profile"))
                $root.http.Profile.encode(message.profile, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified AuthResponse message, length delimited. Does not implicitly {@link http.AuthResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.AuthResponse
         * @static
         * @param {http.AuthResponse.$Properties} message AuthResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an AuthResponse message from the specified reader or buffer.
         * @function decode
         * @memberof http.AuthResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.AuthResponse & http.AuthResponse.$Shape} AuthResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.http.AuthResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.profile = $root.http.Profile.decode(reader, reader.uint32(), $undefined, _depth + 1, message.profile);
                        message._profile = "profile";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an AuthResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.AuthResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.AuthResponse & http.AuthResponse.$Shape} AuthResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthResponse.decodeDelimited = function(reader) {
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
        AuthResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.profile != null && $Object.hasOwnProperty.call(message, "profile")) {
                properties._profile = 1;
                {
                    let error = $root.http.Profile.verify(message.profile, _depth + 1);
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
        AuthResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.http.AuthResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".http.AuthResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.http.AuthResponse();
            if (object.profile != null) {
                if (!$util.isObject(object.profile))
                    throw $TypeError(".http.AuthResponse.profile: object expected");
                message.profile = $root.http.Profile.fromObject(object.profile, _depth + 1);
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
        AuthResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.profile != null && $Object.hasOwnProperty.call(message, "profile"))
                object.profile = $root.http.Profile.toObject(message.profile, options, _depth + 1);
            return object;
        };

        /**
         * Converts this AuthResponse to JSON.
         * @function toJSON
         * @memberof http.AuthResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthResponse.prototype.toJSON = function() {
            return AuthResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for AuthResponse
         * @function getTypeUrl
         * @memberof http.AuthResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        AuthResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/http.AuthResponse";
        };

        return AuthResponse;
    })();

    http.LogoutResponse = (function() {

        /**
         * Properties of a LogoutResponse.
         * @typedef {Object} http.LogoutResponse.$Properties
         * @property {http.ResponseStatus|null} [status] LogoutResponse status
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a LogoutResponse.
         * @memberof http
         * @interface ILogoutResponse
         * @augments http.LogoutResponse.$Properties
         * @deprecated Use http.LogoutResponse.$Properties instead.
         */

        /**
         * Shape of a LogoutResponse.
         * @typedef {http.LogoutResponse.$Properties} http.LogoutResponse.$Shape
         */

        /**
         * Constructs a new LogoutResponse.
         * @memberof http
         * @classdesc Represents a LogoutResponse.
         * @constructor
         * @param {http.LogoutResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const LogoutResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * LogoutResponse status.
         * @member {http.ResponseStatus} status
         * @memberof http.LogoutResponse
         * @instance
         */
        LogoutResponse.prototype.status = 200;

        /**
         * Creates a new LogoutResponse instance using the specified properties.
         * @function create
         * @memberof http.LogoutResponse
         * @static
         * @param {http.LogoutResponse.$Properties=} [properties] Properties to set
         * @returns {http.LogoutResponse} LogoutResponse instance
         * @type {{
         *   (properties: http.LogoutResponse.$Shape): http.LogoutResponse & http.LogoutResponse.$Shape;
         *   (properties?: http.LogoutResponse.$Properties): http.LogoutResponse;
         * }}
         */
        LogoutResponse.create = function(properties) {
            return new LogoutResponse(properties);
        };

        /**
         * Encodes the specified LogoutResponse message. Does not implicitly {@link http.LogoutResponse.verify|verify} messages.
         * @function encode
         * @memberof http.LogoutResponse
         * @static
         * @param {http.LogoutResponse.$Properties} message LogoutResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogoutResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified LogoutResponse message, length delimited. Does not implicitly {@link http.LogoutResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.LogoutResponse
         * @static
         * @param {http.LogoutResponse.$Properties} message LogoutResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogoutResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a LogoutResponse message from the specified reader or buffer.
         * @function decode
         * @memberof http.LogoutResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.LogoutResponse & http.LogoutResponse.$Shape} LogoutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogoutResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.http.LogoutResponse(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if ((value = reader.int32()) !== 200)
                            message.status = value;
                        else
                            delete message.status;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a LogoutResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.LogoutResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.LogoutResponse & http.LogoutResponse.$Shape} LogoutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogoutResponse.decodeDelimited = function(reader) {
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
        LogoutResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 200:
                case 500:
                case 400:
                case 401:
                case 402:
                case 404:
                case 450:
                case 451:
                case 452:
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
        LogoutResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.http.LogoutResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".http.LogoutResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.http.LogoutResponse();
            if (object.status !== 200 && (typeof object.status !== "string" || $root.http.ResponseStatus[object.status] !== 200))
                switch (object.status) {
                default:
                    if (typeof object.status === "number") {
                        message.status = object.status;
                        break;
                    }
                    break;
                case "Ok":
                case 200:
                    message.status = 200;
                    break;
                case "InternalError":
                case 500:
                    message.status = 500;
                    break;
                case "InvalidBody":
                case 400:
                    message.status = 400;
                    break;
                case "NotAuthenticated":
                case 401:
                    message.status = 401;
                    break;
                case "VerificationFailure":
                case 402:
                    message.status = 402;
                    break;
                case "NotFound":
                case 404:
                    message.status = 404;
                    break;
                case "AccountExists":
                case 450:
                    message.status = 450;
                    break;
                case "AccountNotExists":
                case 451:
                    message.status = 451;
                    break;
                case "WrongPassword":
                case 452:
                    message.status = 452;
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
        LogoutResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                object.status = options.enums === $String ? "Ok" : 200;
            if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                object.status = options.enums === $String ? $root.http.ResponseStatus[message.status] === $undefined ? message.status : $root.http.ResponseStatus[message.status] : message.status;
            return object;
        };

        /**
         * Converts this LogoutResponse to JSON.
         * @function toJSON
         * @memberof http.LogoutResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LogoutResponse.prototype.toJSON = function() {
            return LogoutResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for LogoutResponse
         * @function getTypeUrl
         * @memberof http.LogoutResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        LogoutResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/http.LogoutResponse";
        };

        return LogoutResponse;
    })();

    http.ServerElement = (function() {

        /**
         * Properties of a ServerElement.
         * @typedef {Object} http.ServerElement.$Properties
         * @property {string|null} [icon] ServerElement icon
         * @property {string|null} [name] ServerElement name
         * @property {string|null} [domain] ServerElement domain
         * @property {number|null} [online] ServerElement online
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ServerElement.
         * @memberof http
         * @interface IServerElement
         * @augments http.ServerElement.$Properties
         * @deprecated Use http.ServerElement.$Properties instead.
         */

        /**
         * Shape of a ServerElement.
         * @typedef {http.ServerElement.$Properties} http.ServerElement.$Shape
         */

        /**
         * Constructs a new ServerElement.
         * @memberof http
         * @classdesc Represents a ServerElement.
         * @constructor
         * @param {http.ServerElement.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ServerElement = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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
         * @param {http.ServerElement.$Properties=} [properties] Properties to set
         * @returns {http.ServerElement} ServerElement instance
         * @type {{
         *   (properties: http.ServerElement.$Shape): http.ServerElement & http.ServerElement.$Shape;
         *   (properties?: http.ServerElement.$Properties): http.ServerElement;
         * }}
         */
        ServerElement.create = function(properties) {
            return new ServerElement(properties);
        };

        /**
         * Encodes the specified ServerElement message. Does not implicitly {@link http.ServerElement.verify|verify} messages.
         * @function encode
         * @memberof http.ServerElement
         * @static
         * @param {http.ServerElement.$Properties} message ServerElement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerElement.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.icon != null && $Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.icon);
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.domain != null && $Object.hasOwnProperty.call(message, "domain"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.domain);
            if (message.online != null && $Object.hasOwnProperty.call(message, "online"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.online);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ServerElement message, length delimited. Does not implicitly {@link http.ServerElement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.ServerElement
         * @static
         * @param {http.ServerElement.$Properties} message ServerElement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerElement.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a ServerElement message from the specified reader or buffer.
         * @function decode
         * @memberof http.ServerElement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.ServerElement & http.ServerElement.$Shape} ServerElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerElement.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.http.ServerElement(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.icon = value;
                        else
                            delete message.icon;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.name = value;
                        else
                            delete message.name;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.domain = value;
                        else
                            delete message.domain;
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.online = value;
                        else
                            delete message.online;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a ServerElement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.ServerElement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.ServerElement & http.ServerElement.$Shape} ServerElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerElement.decodeDelimited = function(reader) {
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
        ServerElement.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.icon != null && $Object.hasOwnProperty.call(message, "icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.domain != null && $Object.hasOwnProperty.call(message, "domain"))
                if (!$util.isString(message.domain))
                    return "domain: string expected";
            if (message.online != null && $Object.hasOwnProperty.call(message, "online"))
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
        ServerElement.fromObject = function (object, _depth) {
            if (object instanceof $root.http.ServerElement)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".http.ServerElement: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.http.ServerElement();
            if (object.icon != null)
                if (typeof object.icon !== "string" || object.icon.length)
                    message.icon = $String(object.icon);
            if (object.name != null)
                if (typeof object.name !== "string" || object.name.length)
                    message.name = $String(object.name);
            if (object.domain != null)
                if (typeof object.domain !== "string" || object.domain.length)
                    message.domain = $String(object.domain);
            if (object.online != null)
                if ($Number(object.online) !== 0)
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
        ServerElement.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.icon = "";
                object.name = "";
                object.domain = "";
                object.online = 0;
            }
            if (message.icon != null && $Object.hasOwnProperty.call(message, "icon"))
                object.icon = message.icon;
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                object.name = message.name;
            if (message.domain != null && $Object.hasOwnProperty.call(message, "domain"))
                object.domain = message.domain;
            if (message.online != null && $Object.hasOwnProperty.call(message, "online"))
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
        ServerElement.prototype.toJSON = function() {
            return ServerElement.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ServerElement
         * @function getTypeUrl
         * @memberof http.ServerElement
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ServerElement.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/http.ServerElement";
        };

        return ServerElement;
    })();

    http.ServersResponse = (function() {

        /**
         * Properties of a ServersResponse.
         * @typedef {Object} http.ServersResponse.$Properties
         * @property {http.ResponseStatus|null} [status] ServersResponse status
         * @property {Array.<http.ServerElement.$Properties>|null} [servers] ServersResponse servers
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ServersResponse.
         * @memberof http
         * @interface IServersResponse
         * @augments http.ServersResponse.$Properties
         * @deprecated Use http.ServersResponse.$Properties instead.
         */

        /**
         * Shape of a ServersResponse.
         * @typedef {http.ServersResponse.$Properties} http.ServersResponse.$Shape
         */

        /**
         * Constructs a new ServersResponse.
         * @memberof http
         * @classdesc Represents a ServersResponse.
         * @constructor
         * @param {http.ServersResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ServersResponse = function (properties) {
            this.servers = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ServersResponse status.
         * @member {http.ResponseStatus} status
         * @memberof http.ServersResponse
         * @instance
         */
        ServersResponse.prototype.status = 200;

        /**
         * ServersResponse servers.
         * @member {Array.<http.ServerElement.$Properties>} servers
         * @memberof http.ServersResponse
         * @instance
         */
        ServersResponse.prototype.servers = $util.emptyArray;

        /**
         * Creates a new ServersResponse instance using the specified properties.
         * @function create
         * @memberof http.ServersResponse
         * @static
         * @param {http.ServersResponse.$Properties=} [properties] Properties to set
         * @returns {http.ServersResponse} ServersResponse instance
         * @type {{
         *   (properties: http.ServersResponse.$Shape): http.ServersResponse & http.ServersResponse.$Shape;
         *   (properties?: http.ServersResponse.$Properties): http.ServersResponse;
         * }}
         */
        ServersResponse.create = function(properties) {
            return new ServersResponse(properties);
        };

        /**
         * Encodes the specified ServersResponse message. Does not implicitly {@link http.ServersResponse.verify|verify} messages.
         * @function encode
         * @memberof http.ServersResponse
         * @static
         * @param {http.ServersResponse.$Properties} message ServersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServersResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.servers != null && message.servers.length)
                for (let i = 0; i < message.servers.length; ++i)
                    $root.http.ServerElement.encode(message.servers[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ServersResponse message, length delimited. Does not implicitly {@link http.ServersResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.ServersResponse
         * @static
         * @param {http.ServersResponse.$Properties} message ServersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServersResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a ServersResponse message from the specified reader or buffer.
         * @function decode
         * @memberof http.ServersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.ServersResponse & http.ServersResponse.$Shape} ServersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServersResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.http.ServersResponse(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if ((value = reader.int32()) !== 200)
                            message.status = value;
                        else
                            delete message.status;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if (!(message.servers && message.servers.length))
                            message.servers = [];
                        message.servers.push($root.http.ServerElement.decode(reader, reader.uint32(), $undefined, _depth + 1));
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a ServersResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.ServersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.ServersResponse & http.ServersResponse.$Shape} ServersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServersResponse.decodeDelimited = function(reader) {
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
        ServersResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 200:
                case 500:
                case 400:
                case 401:
                case 402:
                case 404:
                case 450:
                case 451:
                case 452:
                    break;
                }
            if (message.servers != null && $Object.hasOwnProperty.call(message, "servers")) {
                if (!$Array.isArray(message.servers))
                    return "servers: array expected";
                for (let i = 0; i < message.servers.length; ++i) {
                    let error = $root.http.ServerElement.verify(message.servers[i], _depth + 1);
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
        ServersResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.http.ServersResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".http.ServersResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.http.ServersResponse();
            if (object.status !== 200 && (typeof object.status !== "string" || $root.http.ResponseStatus[object.status] !== 200))
                switch (object.status) {
                default:
                    if (typeof object.status === "number") {
                        message.status = object.status;
                        break;
                    }
                    break;
                case "Ok":
                case 200:
                    message.status = 200;
                    break;
                case "InternalError":
                case 500:
                    message.status = 500;
                    break;
                case "InvalidBody":
                case 400:
                    message.status = 400;
                    break;
                case "NotAuthenticated":
                case 401:
                    message.status = 401;
                    break;
                case "VerificationFailure":
                case 402:
                    message.status = 402;
                    break;
                case "NotFound":
                case 404:
                    message.status = 404;
                    break;
                case "AccountExists":
                case 450:
                    message.status = 450;
                    break;
                case "AccountNotExists":
                case 451:
                    message.status = 451;
                    break;
                case "WrongPassword":
                case 452:
                    message.status = 452;
                    break;
                }
            if (object.servers) {
                if (!$Array.isArray(object.servers))
                    throw $TypeError(".http.ServersResponse.servers: array expected");
                message.servers = $Array(object.servers.length);
                for (let i = 0; i < object.servers.length; ++i) {
                    if (!$util.isObject(object.servers[i]))
                        throw $TypeError(".http.ServersResponse.servers: object expected");
                    message.servers[i] = $root.http.ServerElement.fromObject(object.servers[i], _depth + 1);
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
        ServersResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.servers = [];
            if (options.defaults)
                object.status = options.enums === $String ? "Ok" : 200;
            if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                object.status = options.enums === $String ? $root.http.ResponseStatus[message.status] === $undefined ? message.status : $root.http.ResponseStatus[message.status] : message.status;
            if (message.servers && message.servers.length) {
                object.servers = $Array(message.servers.length);
                for (let j = 0; j < message.servers.length; ++j)
                    object.servers[j] = $root.http.ServerElement.toObject(message.servers[j], options, _depth + 1);
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
        ServersResponse.prototype.toJSON = function() {
            return ServersResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ServersResponse
         * @function getTypeUrl
         * @memberof http.ServersResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ServersResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/http.ServersResponse";
        };

        return ServersResponse;
    })();

    http.AdminModeServer = (function() {

        /**
         * Properties of an AdminModeServer.
         * @typedef {Object} http.AdminModeServer.$Properties
         * @property {string|null} [icon] AdminModeServer icon
         * @property {string|null} [name] AdminModeServer name
         * @property {string|null} [domain] AdminModeServer domain
         * @property {string|null} [lastSeen] AdminModeServer lastSeen
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an AdminModeServer.
         * @memberof http
         * @interface IAdminModeServer
         * @augments http.AdminModeServer.$Properties
         * @deprecated Use http.AdminModeServer.$Properties instead.
         */

        /**
         * Shape of an AdminModeServer.
         * @typedef {http.AdminModeServer.$Properties} http.AdminModeServer.$Shape
         */

        /**
         * Constructs a new AdminModeServer.
         * @memberof http
         * @classdesc Represents an AdminModeServer.
         * @constructor
         * @param {http.AdminModeServer.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const AdminModeServer = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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
         * @param {http.AdminModeServer.$Properties=} [properties] Properties to set
         * @returns {http.AdminModeServer} AdminModeServer instance
         * @type {{
         *   (properties: http.AdminModeServer.$Shape): http.AdminModeServer & http.AdminModeServer.$Shape;
         *   (properties?: http.AdminModeServer.$Properties): http.AdminModeServer;
         * }}
         */
        AdminModeServer.create = function(properties) {
            return new AdminModeServer(properties);
        };

        /**
         * Encodes the specified AdminModeServer message. Does not implicitly {@link http.AdminModeServer.verify|verify} messages.
         * @function encode
         * @memberof http.AdminModeServer
         * @static
         * @param {http.AdminModeServer.$Properties} message AdminModeServer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdminModeServer.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.icon != null && $Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.icon);
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.domain != null && $Object.hasOwnProperty.call(message, "domain"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.domain);
            if (message.lastSeen != null && $Object.hasOwnProperty.call(message, "lastSeen"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.lastSeen);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified AdminModeServer message, length delimited. Does not implicitly {@link http.AdminModeServer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.AdminModeServer
         * @static
         * @param {http.AdminModeServer.$Properties} message AdminModeServer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdminModeServer.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an AdminModeServer message from the specified reader or buffer.
         * @function decode
         * @memberof http.AdminModeServer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.AdminModeServer & http.AdminModeServer.$Shape} AdminModeServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdminModeServer.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.http.AdminModeServer(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.icon = value;
                        else
                            delete message.icon;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.name = value;
                        else
                            delete message.name;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.domain = value;
                        else
                            delete message.domain;
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.lastSeen = value;
                        else
                            delete message.lastSeen;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an AdminModeServer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.AdminModeServer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.AdminModeServer & http.AdminModeServer.$Shape} AdminModeServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdminModeServer.decodeDelimited = function(reader) {
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
        AdminModeServer.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.icon != null && $Object.hasOwnProperty.call(message, "icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.domain != null && $Object.hasOwnProperty.call(message, "domain"))
                if (!$util.isString(message.domain))
                    return "domain: string expected";
            if (message.lastSeen != null && $Object.hasOwnProperty.call(message, "lastSeen"))
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
        AdminModeServer.fromObject = function (object, _depth) {
            if (object instanceof $root.http.AdminModeServer)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".http.AdminModeServer: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.http.AdminModeServer();
            if (object.icon != null)
                if (typeof object.icon !== "string" || object.icon.length)
                    message.icon = $String(object.icon);
            if (object.name != null)
                if (typeof object.name !== "string" || object.name.length)
                    message.name = $String(object.name);
            if (object.domain != null)
                if (typeof object.domain !== "string" || object.domain.length)
                    message.domain = $String(object.domain);
            if (object.lastSeen != null)
                if (typeof object.lastSeen !== "string" || object.lastSeen.length)
                    message.lastSeen = $String(object.lastSeen);
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
        AdminModeServer.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.icon = "";
                object.name = "";
                object.domain = "";
                object.lastSeen = "";
            }
            if (message.icon != null && $Object.hasOwnProperty.call(message, "icon"))
                object.icon = message.icon;
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                object.name = message.name;
            if (message.domain != null && $Object.hasOwnProperty.call(message, "domain"))
                object.domain = message.domain;
            if (message.lastSeen != null && $Object.hasOwnProperty.call(message, "lastSeen"))
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
        AdminModeServer.prototype.toJSON = function() {
            return AdminModeServer.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for AdminModeServer
         * @function getTypeUrl
         * @memberof http.AdminModeServer
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        AdminModeServer.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/http.AdminModeServer";
        };

        return AdminModeServer;
    })();

    http.AdminModeServersResponse = (function() {

        /**
         * Properties of an AdminModeServersResponse.
         * @typedef {Object} http.AdminModeServersResponse.$Properties
         * @property {Array.<http.AdminModeServer.$Properties>|null} [servers] AdminModeServersResponse servers
         * @property {number|null} [online] AdminModeServersResponse online
         * @property {number|null} [count] AdminModeServersResponse count
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an AdminModeServersResponse.
         * @memberof http
         * @interface IAdminModeServersResponse
         * @augments http.AdminModeServersResponse.$Properties
         * @deprecated Use http.AdminModeServersResponse.$Properties instead.
         */

        /**
         * Shape of an AdminModeServersResponse.
         * @typedef {http.AdminModeServersResponse.$Properties} http.AdminModeServersResponse.$Shape
         */

        /**
         * Constructs a new AdminModeServersResponse.
         * @memberof http
         * @classdesc Represents an AdminModeServersResponse.
         * @constructor
         * @param {http.AdminModeServersResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const AdminModeServersResponse = function (properties) {
            this.servers = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * AdminModeServersResponse servers.
         * @member {Array.<http.AdminModeServer.$Properties>} servers
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
         * @param {http.AdminModeServersResponse.$Properties=} [properties] Properties to set
         * @returns {http.AdminModeServersResponse} AdminModeServersResponse instance
         * @type {{
         *   (properties: http.AdminModeServersResponse.$Shape): http.AdminModeServersResponse & http.AdminModeServersResponse.$Shape;
         *   (properties?: http.AdminModeServersResponse.$Properties): http.AdminModeServersResponse;
         * }}
         */
        AdminModeServersResponse.create = function(properties) {
            return new AdminModeServersResponse(properties);
        };

        /**
         * Encodes the specified AdminModeServersResponse message. Does not implicitly {@link http.AdminModeServersResponse.verify|verify} messages.
         * @function encode
         * @memberof http.AdminModeServersResponse
         * @static
         * @param {http.AdminModeServersResponse.$Properties} message AdminModeServersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdminModeServersResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.servers != null && message.servers.length)
                for (let i = 0; i < message.servers.length; ++i)
                    $root.http.AdminModeServer.encode(message.servers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.online != null && $Object.hasOwnProperty.call(message, "online"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.online);
            if (message.count != null && $Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.count);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified AdminModeServersResponse message, length delimited. Does not implicitly {@link http.AdminModeServersResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.AdminModeServersResponse
         * @static
         * @param {http.AdminModeServersResponse.$Properties} message AdminModeServersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdminModeServersResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an AdminModeServersResponse message from the specified reader or buffer.
         * @function decode
         * @memberof http.AdminModeServersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.AdminModeServersResponse & http.AdminModeServersResponse.$Shape} AdminModeServersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdminModeServersResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.http.AdminModeServersResponse(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if (!(message.servers && message.servers.length))
                            message.servers = [];
                        message.servers.push($root.http.AdminModeServer.decode(reader, reader.uint32(), $undefined, _depth + 1));
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.online = value;
                        else
                            delete message.online;
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.count = value;
                        else
                            delete message.count;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an AdminModeServersResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.AdminModeServersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.AdminModeServersResponse & http.AdminModeServersResponse.$Shape} AdminModeServersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdminModeServersResponse.decodeDelimited = function(reader) {
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
        AdminModeServersResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.servers != null && $Object.hasOwnProperty.call(message, "servers")) {
                if (!$Array.isArray(message.servers))
                    return "servers: array expected";
                for (let i = 0; i < message.servers.length; ++i) {
                    let error = $root.http.AdminModeServer.verify(message.servers[i], _depth + 1);
                    if (error)
                        return "servers." + error;
                }
            }
            if (message.online != null && $Object.hasOwnProperty.call(message, "online"))
                if (!$util.isInteger(message.online))
                    return "online: integer expected";
            if (message.count != null && $Object.hasOwnProperty.call(message, "count"))
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
        AdminModeServersResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.http.AdminModeServersResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".http.AdminModeServersResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.http.AdminModeServersResponse();
            if (object.servers) {
                if (!$Array.isArray(object.servers))
                    throw $TypeError(".http.AdminModeServersResponse.servers: array expected");
                message.servers = $Array(object.servers.length);
                for (let i = 0; i < object.servers.length; ++i) {
                    if (!$util.isObject(object.servers[i]))
                        throw $TypeError(".http.AdminModeServersResponse.servers: object expected");
                    message.servers[i] = $root.http.AdminModeServer.fromObject(object.servers[i], _depth + 1);
                }
            }
            if (object.online != null)
                if ($Number(object.online) !== 0)
                    message.online = object.online >>> 0;
            if (object.count != null)
                if ($Number(object.count) !== 0)
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
        AdminModeServersResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.servers = [];
            if (options.defaults) {
                object.online = 0;
                object.count = 0;
            }
            if (message.servers && message.servers.length) {
                object.servers = $Array(message.servers.length);
                for (let j = 0; j < message.servers.length; ++j)
                    object.servers[j] = $root.http.AdminModeServer.toObject(message.servers[j], options, _depth + 1);
            }
            if (message.online != null && $Object.hasOwnProperty.call(message, "online"))
                object.online = message.online;
            if (message.count != null && $Object.hasOwnProperty.call(message, "count"))
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
        AdminModeServersResponse.prototype.toJSON = function() {
            return AdminModeServersResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for AdminModeServersResponse
         * @function getTypeUrl
         * @memberof http.AdminModeServersResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        AdminModeServersResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/http.AdminModeServersResponse";
        };

        return AdminModeServersResponse;
    })();

    http.AdminModeServerTokenResponse = (function() {

        /**
         * Properties of an AdminModeServerTokenResponse.
         * @typedef {Object} http.AdminModeServerTokenResponse.$Properties
         * @property {string|null} [token] AdminModeServerTokenResponse token
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an AdminModeServerTokenResponse.
         * @memberof http
         * @interface IAdminModeServerTokenResponse
         * @augments http.AdminModeServerTokenResponse.$Properties
         * @deprecated Use http.AdminModeServerTokenResponse.$Properties instead.
         */

        /**
         * Shape of an AdminModeServerTokenResponse.
         * @typedef {http.AdminModeServerTokenResponse.$Properties} http.AdminModeServerTokenResponse.$Shape
         */

        /**
         * Constructs a new AdminModeServerTokenResponse.
         * @memberof http
         * @classdesc Represents an AdminModeServerTokenResponse.
         * @constructor
         * @param {http.AdminModeServerTokenResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const AdminModeServerTokenResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * AdminModeServerTokenResponse token.
         * @member {string} token
         * @memberof http.AdminModeServerTokenResponse
         * @instance
         */
        AdminModeServerTokenResponse.prototype.token = "";

        /**
         * Creates a new AdminModeServerTokenResponse instance using the specified properties.
         * @function create
         * @memberof http.AdminModeServerTokenResponse
         * @static
         * @param {http.AdminModeServerTokenResponse.$Properties=} [properties] Properties to set
         * @returns {http.AdminModeServerTokenResponse} AdminModeServerTokenResponse instance
         * @type {{
         *   (properties: http.AdminModeServerTokenResponse.$Shape): http.AdminModeServerTokenResponse & http.AdminModeServerTokenResponse.$Shape;
         *   (properties?: http.AdminModeServerTokenResponse.$Properties): http.AdminModeServerTokenResponse;
         * }}
         */
        AdminModeServerTokenResponse.create = function(properties) {
            return new AdminModeServerTokenResponse(properties);
        };

        /**
         * Encodes the specified AdminModeServerTokenResponse message. Does not implicitly {@link http.AdminModeServerTokenResponse.verify|verify} messages.
         * @function encode
         * @memberof http.AdminModeServerTokenResponse
         * @static
         * @param {http.AdminModeServerTokenResponse.$Properties} message AdminModeServerTokenResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdminModeServerTokenResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified AdminModeServerTokenResponse message, length delimited. Does not implicitly {@link http.AdminModeServerTokenResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.AdminModeServerTokenResponse
         * @static
         * @param {http.AdminModeServerTokenResponse.$Properties} message AdminModeServerTokenResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdminModeServerTokenResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an AdminModeServerTokenResponse message from the specified reader or buffer.
         * @function decode
         * @memberof http.AdminModeServerTokenResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.AdminModeServerTokenResponse & http.AdminModeServerTokenResponse.$Shape} AdminModeServerTokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdminModeServerTokenResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.http.AdminModeServerTokenResponse(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.token = value;
                        else
                            delete message.token;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an AdminModeServerTokenResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.AdminModeServerTokenResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.AdminModeServerTokenResponse & http.AdminModeServerTokenResponse.$Shape} AdminModeServerTokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdminModeServerTokenResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AdminModeServerTokenResponse message.
         * @function verify
         * @memberof http.AdminModeServerTokenResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AdminModeServerTokenResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates an AdminModeServerTokenResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof http.AdminModeServerTokenResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {http.AdminModeServerTokenResponse} AdminModeServerTokenResponse
         */
        AdminModeServerTokenResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.http.AdminModeServerTokenResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".http.AdminModeServerTokenResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.http.AdminModeServerTokenResponse();
            if (object.token != null)
                if (typeof object.token !== "string" || object.token.length)
                    message.token = $String(object.token);
            return message;
        };

        /**
         * Creates a plain object from an AdminModeServerTokenResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof http.AdminModeServerTokenResponse
         * @static
         * @param {http.AdminModeServerTokenResponse} message AdminModeServerTokenResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AdminModeServerTokenResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this AdminModeServerTokenResponse to JSON.
         * @function toJSON
         * @memberof http.AdminModeServerTokenResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AdminModeServerTokenResponse.prototype.toJSON = function() {
            return AdminModeServerTokenResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for AdminModeServerTokenResponse
         * @function getTypeUrl
         * @memberof http.AdminModeServerTokenResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        AdminModeServerTokenResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/http.AdminModeServerTokenResponse";
        };

        return AdminModeServerTokenResponse;
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
        const valuesById = {}, values = $Object.create(valuesById);
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
         * @typedef {Object} http.WorldProperties.$Properties
         * @property {string|null} [fillStyle] WorldProperties fillStyle
         * @property {string|null} [strokeStyle] WorldProperties strokeStyle
         * @property {string|null} [areaFill] WorldProperties areaFill
         * @property {number|null} [areaAlpha] WorldProperties areaAlpha
         * @property {Array.<http.WorldProperties.Background.$Properties>|null} [backgrounds] WorldProperties backgrounds
         * @property {http.WorldEffect|null} [effect] WorldProperties effect
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a WorldProperties.
         * @memberof http
         * @interface IWorldProperties
         * @augments http.WorldProperties.$Properties
         * @deprecated Use http.WorldProperties.$Properties instead.
         */

        /**
         * Shape of a WorldProperties.
         * @typedef {http.WorldProperties.$Properties} http.WorldProperties.$Shape
         */

        /**
         * Constructs a new WorldProperties.
         * @memberof http
         * @classdesc Represents a WorldProperties.
         * @constructor
         * @param {http.WorldProperties.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const WorldProperties = function (properties) {
            this.backgrounds = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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
         * @member {Array.<http.WorldProperties.Background.$Properties>} backgrounds
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
        $Object.defineProperty(WorldProperties.prototype, "_areaAlpha", {
            get: $util.oneOfGetter($oneOfFields = ["areaAlpha"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(WorldProperties.prototype, "_effect", {
            get: $util.oneOfGetter($oneOfFields = ["effect"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new WorldProperties instance using the specified properties.
         * @function create
         * @memberof http.WorldProperties
         * @static
         * @param {http.WorldProperties.$Properties=} [properties] Properties to set
         * @returns {http.WorldProperties} WorldProperties instance
         * @type {{
         *   (properties: http.WorldProperties.$Shape): http.WorldProperties & http.WorldProperties.$Shape;
         *   (properties?: http.WorldProperties.$Properties): http.WorldProperties;
         * }}
         */
        WorldProperties.create = function(properties) {
            return new WorldProperties(properties);
        };

        /**
         * Encodes the specified WorldProperties message. Does not implicitly {@link http.WorldProperties.verify|verify} messages.
         * @function encode
         * @memberof http.WorldProperties
         * @static
         * @param {http.WorldProperties.$Properties} message WorldProperties message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldProperties.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.fillStyle != null && $Object.hasOwnProperty.call(message, "fillStyle"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.fillStyle);
            if (message.strokeStyle != null && $Object.hasOwnProperty.call(message, "strokeStyle"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.strokeStyle);
            if (message.areaFill != null && $Object.hasOwnProperty.call(message, "areaFill"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.areaFill);
            if (message.areaAlpha != null && $Object.hasOwnProperty.call(message, "areaAlpha"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.areaAlpha);
            if (message.backgrounds != null && message.backgrounds.length)
                for (let i = 0; i < message.backgrounds.length; ++i)
                    $root.http.WorldProperties.Background.encode(message.backgrounds[i], writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            if (message.effect != null && $Object.hasOwnProperty.call(message, "effect"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.effect);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified WorldProperties message, length delimited. Does not implicitly {@link http.WorldProperties.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.WorldProperties
         * @static
         * @param {http.WorldProperties.$Properties} message WorldProperties message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldProperties.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a WorldProperties message from the specified reader or buffer.
         * @function decode
         * @memberof http.WorldProperties
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.WorldProperties & http.WorldProperties.$Shape} WorldProperties
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldProperties.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.http.WorldProperties(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.fillStyle = value;
                        else
                            delete message.fillStyle;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.strokeStyle = value;
                        else
                            delete message.strokeStyle;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.areaFill = value;
                        else
                            delete message.areaFill;
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.areaAlpha = reader.uint32();
                        message._areaAlpha = "areaAlpha";
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        if (!(message.backgrounds && message.backgrounds.length))
                            message.backgrounds = [];
                        message.backgrounds.push($root.http.WorldProperties.Background.decode(reader, reader.uint32(), $undefined, _depth + 1));
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        message.effect = reader.int32();
                        message._effect = "effect";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a WorldProperties message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.WorldProperties
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.WorldProperties & http.WorldProperties.$Shape} WorldProperties
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldProperties.decodeDelimited = function(reader) {
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
        WorldProperties.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.fillStyle != null && $Object.hasOwnProperty.call(message, "fillStyle"))
                if (!$util.isString(message.fillStyle))
                    return "fillStyle: string expected";
            if (message.strokeStyle != null && $Object.hasOwnProperty.call(message, "strokeStyle"))
                if (!$util.isString(message.strokeStyle))
                    return "strokeStyle: string expected";
            if (message.areaFill != null && $Object.hasOwnProperty.call(message, "areaFill"))
                if (!$util.isString(message.areaFill))
                    return "areaFill: string expected";
            if (message.areaAlpha != null && $Object.hasOwnProperty.call(message, "areaAlpha")) {
                properties._areaAlpha = 1;
                if (!$util.isInteger(message.areaAlpha))
                    return "areaAlpha: integer expected";
            }
            if (message.backgrounds != null && $Object.hasOwnProperty.call(message, "backgrounds")) {
                if (!$Array.isArray(message.backgrounds))
                    return "backgrounds: array expected";
                for (let i = 0; i < message.backgrounds.length; ++i) {
                    let error = $root.http.WorldProperties.Background.verify(message.backgrounds[i], _depth + 1);
                    if (error)
                        return "backgrounds." + error;
                }
            }
            if (message.effect != null && $Object.hasOwnProperty.call(message, "effect")) {
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
        WorldProperties.fromObject = function (object, _depth) {
            if (object instanceof $root.http.WorldProperties)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".http.WorldProperties: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.http.WorldProperties();
            if (object.fillStyle != null)
                if (typeof object.fillStyle !== "string" || object.fillStyle.length)
                    message.fillStyle = $String(object.fillStyle);
            if (object.strokeStyle != null)
                if (typeof object.strokeStyle !== "string" || object.strokeStyle.length)
                    message.strokeStyle = $String(object.strokeStyle);
            if (object.areaFill != null)
                if (typeof object.areaFill !== "string" || object.areaFill.length)
                    message.areaFill = $String(object.areaFill);
            if (object.areaAlpha != null)
                message.areaAlpha = object.areaAlpha >>> 0;
            if (object.backgrounds) {
                if (!$Array.isArray(object.backgrounds))
                    throw $TypeError(".http.WorldProperties.backgrounds: array expected");
                message.backgrounds = $Array(object.backgrounds.length);
                for (let i = 0; i < object.backgrounds.length; ++i) {
                    if (!$util.isObject(object.backgrounds[i]))
                        throw $TypeError(".http.WorldProperties.backgrounds: object expected");
                    message.backgrounds[i] = $root.http.WorldProperties.Background.fromObject(object.backgrounds[i], _depth + 1);
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
        WorldProperties.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.backgrounds = [];
            if (options.defaults) {
                object.fillStyle = "";
                object.strokeStyle = "";
                object.areaFill = "";
            }
            if (message.fillStyle != null && $Object.hasOwnProperty.call(message, "fillStyle"))
                object.fillStyle = message.fillStyle;
            if (message.strokeStyle != null && $Object.hasOwnProperty.call(message, "strokeStyle"))
                object.strokeStyle = message.strokeStyle;
            if (message.areaFill != null && $Object.hasOwnProperty.call(message, "areaFill"))
                object.areaFill = message.areaFill;
            if (message.areaAlpha != null && $Object.hasOwnProperty.call(message, "areaAlpha"))
                object.areaAlpha = message.areaAlpha;
            if (message.backgrounds && message.backgrounds.length) {
                object.backgrounds = $Array(message.backgrounds.length);
                for (let j = 0; j < message.backgrounds.length; ++j)
                    object.backgrounds[j] = $root.http.WorldProperties.Background.toObject(message.backgrounds[j], options, _depth + 1);
            }
            if (message.effect != null && $Object.hasOwnProperty.call(message, "effect"))
                object.effect = options.enums === $String ? $root.http.WorldEffect[message.effect] === $undefined ? message.effect : $root.http.WorldEffect[message.effect] : message.effect;
            return object;
        };

        /**
         * Converts this WorldProperties to JSON.
         * @function toJSON
         * @memberof http.WorldProperties
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorldProperties.prototype.toJSON = function() {
            return WorldProperties.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for WorldProperties
         * @function getTypeUrl
         * @memberof http.WorldProperties
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        WorldProperties.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/http.WorldProperties";
        };

        WorldProperties.Background = (function() {

            /**
             * Properties of a Background.
             * @typedef {Object} http.WorldProperties.Background.$Properties
             * @property {string|null} [name] Background name
             * @property {number|null} [alpha] Background alpha
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Background.
             * @memberof http.WorldProperties
             * @interface IBackground
             * @augments http.WorldProperties.Background.$Properties
             * @deprecated Use http.WorldProperties.Background.$Properties instead.
             */

            /**
             * Shape of a Background.
             * @typedef {http.WorldProperties.Background.$Properties} http.WorldProperties.Background.$Shape
             */

            /**
             * Constructs a new Background.
             * @memberof http.WorldProperties
             * @classdesc Represents a Background.
             * @constructor
             * @param {http.WorldProperties.Background.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Background = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
             * @param {http.WorldProperties.Background.$Properties=} [properties] Properties to set
             * @returns {http.WorldProperties.Background} Background instance
             * @type {{
             *   (properties: http.WorldProperties.Background.$Shape): http.WorldProperties.Background & http.WorldProperties.Background.$Shape;
             *   (properties?: http.WorldProperties.Background.$Properties): http.WorldProperties.Background;
             * }}
             */
            Background.create = function(properties) {
                return new Background(properties);
            };

            /**
             * Encodes the specified Background message. Does not implicitly {@link http.WorldProperties.Background.verify|verify} messages.
             * @function encode
             * @memberof http.WorldProperties.Background
             * @static
             * @param {http.WorldProperties.Background.$Properties} message Background message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Background.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.alpha != null && $Object.hasOwnProperty.call(message, "alpha"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.alpha);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Background message, length delimited. Does not implicitly {@link http.WorldProperties.Background.verify|verify} messages.
             * @function encodeDelimited
             * @memberof http.WorldProperties.Background
             * @static
             * @param {http.WorldProperties.Background.$Properties} message Background message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Background.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Background message from the specified reader or buffer.
             * @function decode
             * @memberof http.WorldProperties.Background
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {http.WorldProperties.Background & http.WorldProperties.Background.$Shape} Background
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Background.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.http.WorldProperties.Background(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.name = value;
                            else
                                delete message.name;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.alpha = value;
                            else
                                delete message.alpha;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a Background message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof http.WorldProperties.Background
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {http.WorldProperties.Background & http.WorldProperties.Background.$Shape} Background
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Background.decodeDelimited = function(reader) {
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
            Background.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.alpha != null && $Object.hasOwnProperty.call(message, "alpha"))
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
            Background.fromObject = function (object, _depth) {
                if (object instanceof $root.http.WorldProperties.Background)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".http.WorldProperties.Background: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.http.WorldProperties.Background();
                if (object.name != null)
                    if (typeof object.name !== "string" || object.name.length)
                        message.name = $String(object.name);
                if (object.alpha != null)
                    if ($Number(object.alpha) !== 0)
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
            Background.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.alpha = 0;
                }
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    object.name = message.name;
                if (message.alpha != null && $Object.hasOwnProperty.call(message, "alpha"))
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
            Background.prototype.toJSON = function() {
                return Background.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Background
             * @function getTypeUrl
             * @memberof http.WorldProperties.Background
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Background.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/http.WorldProperties.Background";
            };

            return Background;
        })();

        return WorldProperties;
    })();

    http.AreaResponse = (function() {

        /**
         * Properties of an AreaResponse.
         * @typedef {Object} http.AreaResponse.$Properties
         * @property {boolean|null} [win] AreaResponse win
         * @property {number|null} [vp] AreaResponse vp
         * @property {string|null} [text] AreaResponse text
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an AreaResponse.
         * @memberof http
         * @interface IAreaResponse
         * @augments http.AreaResponse.$Properties
         * @deprecated Use http.AreaResponse.$Properties instead.
         */

        /**
         * Shape of an AreaResponse.
         * @typedef {http.AreaResponse.$Properties} http.AreaResponse.$Shape
         */

        /**
         * Constructs a new AreaResponse.
         * @memberof http
         * @classdesc Represents an AreaResponse.
         * @constructor
         * @param {http.AreaResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const AreaResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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
        $Object.defineProperty(AreaResponse.prototype, "_win", {
            get: $util.oneOfGetter($oneOfFields = ["win"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(AreaResponse.prototype, "_vp", {
            get: $util.oneOfGetter($oneOfFields = ["vp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(AreaResponse.prototype, "_text", {
            get: $util.oneOfGetter($oneOfFields = ["text"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AreaResponse instance using the specified properties.
         * @function create
         * @memberof http.AreaResponse
         * @static
         * @param {http.AreaResponse.$Properties=} [properties] Properties to set
         * @returns {http.AreaResponse} AreaResponse instance
         * @type {{
         *   (properties: http.AreaResponse.$Shape): http.AreaResponse & http.AreaResponse.$Shape;
         *   (properties?: http.AreaResponse.$Properties): http.AreaResponse;
         * }}
         */
        AreaResponse.create = function(properties) {
            return new AreaResponse(properties);
        };

        /**
         * Encodes the specified AreaResponse message. Does not implicitly {@link http.AreaResponse.verify|verify} messages.
         * @function encode
         * @memberof http.AreaResponse
         * @static
         * @param {http.AreaResponse.$Properties} message AreaResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AreaResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.win != null && $Object.hasOwnProperty.call(message, "win"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.win);
            if (message.vp != null && $Object.hasOwnProperty.call(message, "vp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.vp);
            if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.text);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified AreaResponse message, length delimited. Does not implicitly {@link http.AreaResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.AreaResponse
         * @static
         * @param {http.AreaResponse.$Properties} message AreaResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AreaResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an AreaResponse message from the specified reader or buffer.
         * @function decode
         * @memberof http.AreaResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.AreaResponse & http.AreaResponse.$Shape} AreaResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AreaResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.http.AreaResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.win = reader.bool();
                        message._win = "win";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.vp = reader.uint32();
                        message._vp = "vp";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.text = reader.stringVerify();
                        message._text = "text";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an AreaResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.AreaResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.AreaResponse & http.AreaResponse.$Shape} AreaResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AreaResponse.decodeDelimited = function(reader) {
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
        AreaResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.win != null && $Object.hasOwnProperty.call(message, "win")) {
                properties._win = 1;
                if (typeof message.win !== "boolean")
                    return "win: boolean expected";
            }
            if (message.vp != null && $Object.hasOwnProperty.call(message, "vp")) {
                properties._vp = 1;
                if (!$util.isInteger(message.vp))
                    return "vp: integer expected";
            }
            if (message.text != null && $Object.hasOwnProperty.call(message, "text")) {
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
        AreaResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.http.AreaResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".http.AreaResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.http.AreaResponse();
            if (object.win != null)
                message.win = $Boolean(object.win);
            if (object.vp != null)
                message.vp = object.vp >>> 0;
            if (object.text != null)
                message.text = $String(object.text);
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
        AreaResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.win != null && $Object.hasOwnProperty.call(message, "win"))
                object.win = message.win;
            if (message.vp != null && $Object.hasOwnProperty.call(message, "vp"))
                object.vp = message.vp;
            if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
                object.text = message.text;
            return object;
        };

        /**
         * Converts this AreaResponse to JSON.
         * @function toJSON
         * @memberof http.AreaResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AreaResponse.prototype.toJSON = function() {
            return AreaResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for AreaResponse
         * @function getTypeUrl
         * @memberof http.AreaResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        AreaResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/http.AreaResponse";
        };

        return AreaResponse;
    })();

    http.WorldResponse = (function() {

        /**
         * Properties of a WorldResponse.
         * @typedef {Object} http.WorldResponse.$Properties
         * @property {http.WorldProperties.$Properties|null} [properties] WorldResponse properties
         * @property {Object.<string,http.AreaResponse.$Properties>|null} [areas] WorldResponse areas
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a WorldResponse.
         * @memberof http
         * @interface IWorldResponse
         * @augments http.WorldResponse.$Properties
         * @deprecated Use http.WorldResponse.$Properties instead.
         */

        /**
         * Shape of a WorldResponse.
         * @typedef {http.WorldResponse.$Properties} http.WorldResponse.$Shape
         */

        /**
         * Constructs a new WorldResponse.
         * @memberof http
         * @classdesc Represents a WorldResponse.
         * @constructor
         * @param {http.WorldResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const WorldResponse = function (properties) {
            this.areas = {};
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * WorldResponse properties.
         * @member {http.WorldProperties.$Properties|null|undefined} properties
         * @memberof http.WorldResponse
         * @instance
         */
        WorldResponse.prototype.properties = null;

        /**
         * WorldResponse areas.
         * @member {Object.<string,http.AreaResponse.$Properties>} areas
         * @memberof http.WorldResponse
         * @instance
         */
        WorldResponse.prototype.areas = $util.emptyObject;

        /**
         * Creates a new WorldResponse instance using the specified properties.
         * @function create
         * @memberof http.WorldResponse
         * @static
         * @param {http.WorldResponse.$Properties=} [properties] Properties to set
         * @returns {http.WorldResponse} WorldResponse instance
         * @type {{
         *   (properties: http.WorldResponse.$Shape): http.WorldResponse & http.WorldResponse.$Shape;
         *   (properties?: http.WorldResponse.$Properties): http.WorldResponse;
         * }}
         */
        WorldResponse.create = function(properties) {
            return new WorldResponse(properties);
        };

        /**
         * Encodes the specified WorldResponse message. Does not implicitly {@link http.WorldResponse.verify|verify} messages.
         * @function encode
         * @memberof http.WorldResponse
         * @static
         * @param {http.WorldResponse.$Properties} message WorldResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.properties != null && $Object.hasOwnProperty.call(message, "properties"))
                $root.http.WorldProperties.encode(message.properties, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.areas != null && $Object.hasOwnProperty.call(message, "areas"))
                for (let keys = $Object.keys(message.areas), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.http.AreaResponse.encode(message.areas[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim().ldelim();
                }
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified WorldResponse message, length delimited. Does not implicitly {@link http.WorldResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.WorldResponse
         * @static
         * @param {http.WorldResponse.$Properties} message WorldResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a WorldResponse message from the specified reader or buffer.
         * @function decode
         * @memberof http.WorldResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.WorldResponse & http.WorldResponse.$Shape} WorldResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.http.WorldResponse(), key, value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.properties = $root.http.WorldProperties.decode(reader, reader.uint32(), $undefined, _depth + 1, message.properties);
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if (message.areas === $util.emptyObject)
                            message.areas = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.tag();
                            wireType = tag2 & 7;
                            switch (tag2 >>>= 3) {
                            case 1:
                                if (wireType !== 2)
                                    break;
                                key = reader.stringVerify();
                                continue;
                            case 2:
                                if (wireType !== 2)
                                    break;
                                value = $root.http.AreaResponse.decode(reader, reader.uint32(), $undefined, _depth + 1);
                                continue;
                            }
                            reader.skipType(wireType, _depth, tag2);
                        }
                        if (key === "__proto__")
                            $util.makeProp(message.areas, key);
                        message.areas[key] = value || new $root.http.AreaResponse();
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a WorldResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.WorldResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.WorldResponse & http.WorldResponse.$Shape} WorldResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldResponse.decodeDelimited = function(reader) {
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
        WorldResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.properties != null && $Object.hasOwnProperty.call(message, "properties")) {
                let error = $root.http.WorldProperties.verify(message.properties, _depth + 1);
                if (error)
                    return "properties." + error;
            }
            if (message.areas != null && $Object.hasOwnProperty.call(message, "areas")) {
                if (!$util.isObject(message.areas))
                    return "areas: object expected";
                let key = $Object.keys(message.areas);
                for (let i = 0; i < key.length; ++i) {
                    let error = $root.http.AreaResponse.verify(message.areas[key[i]], _depth + 1);
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
        WorldResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.http.WorldResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".http.WorldResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.http.WorldResponse();
            if (object.properties != null) {
                if (!$util.isObject(object.properties))
                    throw $TypeError(".http.WorldResponse.properties: object expected");
                message.properties = $root.http.WorldProperties.fromObject(object.properties, _depth + 1);
            }
            if (object.areas) {
                if (!$util.isObject(object.areas))
                    throw $TypeError(".http.WorldResponse.areas: object expected");
                message.areas = {};
                for (let keys = $Object.keys(object.areas), i = 0; i < keys.length; ++i) {
                    if (keys[i] === "__proto__")
                        $util.makeProp(message.areas, keys[i]);
                    if (!$util.isObject(object.areas[keys[i]]))
                        throw $TypeError(".http.WorldResponse.areas: object expected");
                    message.areas[keys[i]] = $root.http.AreaResponse.fromObject(object.areas[keys[i]], _depth + 1);
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
        WorldResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.objects || options.defaults)
                object.areas = {};
            if (options.defaults)
                object.properties = null;
            if (message.properties != null && $Object.hasOwnProperty.call(message, "properties"))
                object.properties = $root.http.WorldProperties.toObject(message.properties, options, _depth + 1);
            let keys2;
            if (message.areas && (keys2 = $Object.keys(message.areas)).length) {
                object.areas = {};
                for (let j = 0; j < keys2.length; ++j) {
                    if (keys2[j] === "__proto__")
                        $util.makeProp(object.areas, keys2[j]);
                    object.areas[keys2[j]] = $root.http.AreaResponse.toObject(message.areas[keys2[j]], options, _depth + 1);
                }
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
        WorldResponse.prototype.toJSON = function() {
            return WorldResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for WorldResponse
         * @function getTypeUrl
         * @memberof http.WorldResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        WorldResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/http.WorldResponse";
        };

        return WorldResponse;
    })();

    http.WorldsResponse = (function() {

        /**
         * Properties of a WorldsResponse.
         * @typedef {Object} http.WorldsResponse.$Properties
         * @property {Object.<string,http.WorldResponse.$Properties>|null} [worlds] WorldsResponse worlds
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a WorldsResponse.
         * @memberof http
         * @interface IWorldsResponse
         * @augments http.WorldsResponse.$Properties
         * @deprecated Use http.WorldsResponse.$Properties instead.
         */

        /**
         * Shape of a WorldsResponse.
         * @typedef {http.WorldsResponse.$Properties} http.WorldsResponse.$Shape
         */

        /**
         * Constructs a new WorldsResponse.
         * @memberof http
         * @classdesc Represents a WorldsResponse.
         * @constructor
         * @param {http.WorldsResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const WorldsResponse = function (properties) {
            this.worlds = {};
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * WorldsResponse worlds.
         * @member {Object.<string,http.WorldResponse.$Properties>} worlds
         * @memberof http.WorldsResponse
         * @instance
         */
        WorldsResponse.prototype.worlds = $util.emptyObject;

        /**
         * Creates a new WorldsResponse instance using the specified properties.
         * @function create
         * @memberof http.WorldsResponse
         * @static
         * @param {http.WorldsResponse.$Properties=} [properties] Properties to set
         * @returns {http.WorldsResponse} WorldsResponse instance
         * @type {{
         *   (properties: http.WorldsResponse.$Shape): http.WorldsResponse & http.WorldsResponse.$Shape;
         *   (properties?: http.WorldsResponse.$Properties): http.WorldsResponse;
         * }}
         */
        WorldsResponse.create = function(properties) {
            return new WorldsResponse(properties);
        };

        /**
         * Encodes the specified WorldsResponse message. Does not implicitly {@link http.WorldsResponse.verify|verify} messages.
         * @function encode
         * @memberof http.WorldsResponse
         * @static
         * @param {http.WorldsResponse.$Properties} message WorldsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldsResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.worlds != null && $Object.hasOwnProperty.call(message, "worlds"))
                for (let keys = $Object.keys(message.worlds), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.http.WorldResponse.encode(message.worlds[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim().ldelim();
                }
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified WorldsResponse message, length delimited. Does not implicitly {@link http.WorldsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof http.WorldsResponse
         * @static
         * @param {http.WorldsResponse.$Properties} message WorldsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldsResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a WorldsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof http.WorldsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {http.WorldsResponse & http.WorldsResponse.$Shape} WorldsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldsResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.http.WorldsResponse(), key, value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if (message.worlds === $util.emptyObject)
                            message.worlds = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.tag();
                            wireType = tag2 & 7;
                            switch (tag2 >>>= 3) {
                            case 1:
                                if (wireType !== 2)
                                    break;
                                key = reader.stringVerify();
                                continue;
                            case 2:
                                if (wireType !== 2)
                                    break;
                                value = $root.http.WorldResponse.decode(reader, reader.uint32(), $undefined, _depth + 1);
                                continue;
                            }
                            reader.skipType(wireType, _depth, tag2);
                        }
                        if (key === "__proto__")
                            $util.makeProp(message.worlds, key);
                        message.worlds[key] = value || new $root.http.WorldResponse();
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a WorldsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof http.WorldsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {http.WorldsResponse & http.WorldsResponse.$Shape} WorldsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldsResponse.decodeDelimited = function(reader) {
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
        WorldsResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.worlds != null && $Object.hasOwnProperty.call(message, "worlds")) {
                if (!$util.isObject(message.worlds))
                    return "worlds: object expected";
                let key = $Object.keys(message.worlds);
                for (let i = 0; i < key.length; ++i) {
                    let error = $root.http.WorldResponse.verify(message.worlds[key[i]], _depth + 1);
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
        WorldsResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.http.WorldsResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".http.WorldsResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.http.WorldsResponse();
            if (object.worlds) {
                if (!$util.isObject(object.worlds))
                    throw $TypeError(".http.WorldsResponse.worlds: object expected");
                message.worlds = {};
                for (let keys = $Object.keys(object.worlds), i = 0; i < keys.length; ++i) {
                    if (keys[i] === "__proto__")
                        $util.makeProp(message.worlds, keys[i]);
                    if (!$util.isObject(object.worlds[keys[i]]))
                        throw $TypeError(".http.WorldsResponse.worlds: object expected");
                    message.worlds[keys[i]] = $root.http.WorldResponse.fromObject(object.worlds[keys[i]], _depth + 1);
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
        WorldsResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.objects || options.defaults)
                object.worlds = {};
            let keys2;
            if (message.worlds && (keys2 = $Object.keys(message.worlds)).length) {
                object.worlds = {};
                for (let j = 0; j < keys2.length; ++j) {
                    if (keys2[j] === "__proto__")
                        $util.makeProp(object.worlds, keys2[j]);
                    object.worlds[keys2[j]] = $root.http.WorldResponse.toObject(message.worlds[keys2[j]], options, _depth + 1);
                }
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
        WorldsResponse.prototype.toJSON = function() {
            return WorldsResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for WorldsResponse
         * @function getTypeUrl
         * @memberof http.WorldsResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        WorldsResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/http.WorldsResponse";
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
        const Game = function(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        };

        (Game.prototype = $Object.create($protobuf.rpc.Service.prototype)).constructor = Game;

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
        Game.create = function(rpcImpl, requestDelimited, responseDelimited) {
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
         * @memberof connection.Game
         * @typedef Authentication
         * @type {{
         *   (request: connection.IAuthenticationRequest, callback: connection.Game.AuthenticationCallback): void;
         *   (request: connection.IAuthenticationRequest): Promise<connection.AuthenticationResponse>;
         *   readonly name: "Authentication";
         *   readonly path: "/connection.Game/Authentication";
         *   readonly requestType: "AuthenticationRequest";
         *   readonly responseType: "AuthenticationResponse";
         *   readonly requestStream: undefined;
         *   readonly responseStream: undefined;
         * }}
         */

        /**
         * Calls Authentication.
         * @name connection.Game#authentication
         * @type {connection.Game.Authentication}
         */
        $Object.defineProperties(Game.prototype.authentication = function(request, callback) {
            return $protobuf.rpc.Service.prototype.rpcCall.call(this, Game.prototype.authentication, $root.connection.AuthenticationRequest, $root.connection.AuthenticationResponse, request, callback);
        }, {
            name: { value: "Authentication" },
            path: { value: "/connection.Game/Authentication" },
            requestType: { value: "AuthenticationRequest" },
            responseType: { value: "AuthenticationResponse" },
            requestStream: { value: $undefined },
            responseStream: { value: $undefined }
        });

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
         * @memberof connection.Game
         * @typedef JoinPlayer
         * @type {{
         *   (request: connection.IJoinPlayerRequest, callback: connection.Game.JoinPlayerCallback): void;
         *   (request: connection.IJoinPlayerRequest): Promise<connection.JoinPlayerResponse>;
         *   readonly name: "JoinPlayer";
         *   readonly path: "/connection.Game/JoinPlayer";
         *   readonly requestType: "JoinPlayerRequest";
         *   readonly responseType: "JoinPlayerResponse";
         *   readonly requestStream: undefined;
         *   readonly responseStream: undefined;
         * }}
         */

        /**
         * Calls JoinPlayer.
         * @name connection.Game#joinPlayer
         * @type {connection.Game.JoinPlayer}
         */
        $Object.defineProperties(Game.prototype.joinPlayer = function(request, callback) {
            return $protobuf.rpc.Service.prototype.rpcCall.call(this, Game.prototype.joinPlayer, $root.connection.JoinPlayerRequest, $root.connection.JoinPlayerResponse, request, callback);
        }, {
            name: { value: "JoinPlayer" },
            path: { value: "/connection.Game/JoinPlayer" },
            requestType: { value: "JoinPlayerRequest" },
            responseType: { value: "JoinPlayerResponse" },
            requestStream: { value: $undefined },
            responseStream: { value: $undefined }
        });

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
         * @memberof connection.Game
         * @typedef Ping
         * @type {{
         *   (request: connection.IPingRequest, callback: connection.Game.PingCallback): void;
         *   (request: connection.IPingRequest): Promise<connection.PongResponse>;
         *   readonly name: "Ping";
         *   readonly path: "/connection.Game/Ping";
         *   readonly requestType: "PingRequest";
         *   readonly responseType: "PongResponse";
         *   readonly requestStream: undefined;
         *   readonly responseStream: undefined;
         * }}
         */

        /**
         * Calls Ping.
         * @name connection.Game#ping
         * @type {connection.Game.Ping}
         */
        $Object.defineProperties(Game.prototype.ping = function(request, callback) {
            return $protobuf.rpc.Service.prototype.rpcCall.call(this, Game.prototype.ping, $root.connection.PingRequest, $root.connection.PongResponse, request, callback);
        }, {
            name: { value: "Ping" },
            path: { value: "/connection.Game/Ping" },
            requestType: { value: "PingRequest" },
            responseType: { value: "PongResponse" },
            requestStream: { value: $undefined },
            responseStream: { value: $undefined }
        });

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
         * @memberof connection.Game
         * @typedef AwardPlayer
         * @type {{
         *   (request: connection.IAwardRequest, callback: connection.Game.AwardPlayerCallback): void;
         *   (request: connection.IAwardRequest): Promise<connection.AwardResponse>;
         *   readonly name: "AwardPlayer";
         *   readonly path: "/connection.Game/AwardPlayer";
         *   readonly requestType: "AwardRequest";
         *   readonly responseType: "AwardResponse";
         *   readonly requestStream: undefined;
         *   readonly responseStream: undefined;
         * }}
         */

        /**
         * Calls AwardPlayer.
         * @name connection.Game#awardPlayer
         * @type {connection.Game.AwardPlayer}
         */
        $Object.defineProperties(Game.prototype.awardPlayer = function(request, callback) {
            return $protobuf.rpc.Service.prototype.rpcCall.call(this, Game.prototype.awardPlayer, $root.connection.AwardRequest, $root.connection.AwardResponse, request, callback);
        }, {
            name: { value: "AwardPlayer" },
            path: { value: "/connection.Game/AwardPlayer" },
            requestType: { value: "AwardRequest" },
            responseType: { value: "AwardResponse" },
            requestStream: { value: $undefined },
            responseStream: { value: $undefined }
        });

        return Game;
    })();

    connection.PingRequest = (function() {

        /**
         * Properties of a PingRequest.
         * @typedef {Object} connection.PingRequest.$Properties
         * @property {number|null} [online] PingRequest online
         * @property {boolean|null} [alive] PingRequest alive
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a PingRequest.
         * @memberof connection
         * @interface IPingRequest
         * @augments connection.PingRequest.$Properties
         * @deprecated Use connection.PingRequest.$Properties instead.
         */

        /**
         * Shape of a PingRequest.
         * @typedef {connection.PingRequest.$Properties} connection.PingRequest.$Shape
         */

        /**
         * Constructs a new PingRequest.
         * @memberof connection
         * @classdesc Represents a PingRequest.
         * @constructor
         * @param {connection.PingRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const PingRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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
         * @param {connection.PingRequest.$Properties=} [properties] Properties to set
         * @returns {connection.PingRequest} PingRequest instance
         * @type {{
         *   (properties: connection.PingRequest.$Shape): connection.PingRequest & connection.PingRequest.$Shape;
         *   (properties?: connection.PingRequest.$Properties): connection.PingRequest;
         * }}
         */
        PingRequest.create = function(properties) {
            return new PingRequest(properties);
        };

        /**
         * Encodes the specified PingRequest message. Does not implicitly {@link connection.PingRequest.verify|verify} messages.
         * @function encode
         * @memberof connection.PingRequest
         * @static
         * @param {connection.PingRequest.$Properties} message PingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.online != null && $Object.hasOwnProperty.call(message, "online"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.online);
            if (message.alive != null && $Object.hasOwnProperty.call(message, "alive"))
                writer.uint32(/* id 21, wireType 0 =*/168).bool(message.alive);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified PingRequest message, length delimited. Does not implicitly {@link connection.PingRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof connection.PingRequest
         * @static
         * @param {connection.PingRequest.$Properties} message PingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a PingRequest message from the specified reader or buffer.
         * @function decode
         * @memberof connection.PingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {connection.PingRequest & connection.PingRequest.$Shape} PingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.connection.PingRequest(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.online = value;
                        else
                            delete message.online;
                        continue;
                    }
                case 21: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.alive = value;
                        else
                            delete message.alive;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a PingRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof connection.PingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {connection.PingRequest & connection.PingRequest.$Shape} PingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingRequest.decodeDelimited = function(reader) {
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
        PingRequest.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.online != null && $Object.hasOwnProperty.call(message, "online"))
                if (!$util.isInteger(message.online))
                    return "online: integer expected";
            if (message.alive != null && $Object.hasOwnProperty.call(message, "alive"))
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
        PingRequest.fromObject = function (object, _depth) {
            if (object instanceof $root.connection.PingRequest)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".connection.PingRequest: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.connection.PingRequest();
            if (object.online != null)
                if ($Number(object.online) !== 0)
                    message.online = object.online >>> 0;
            if (object.alive != null)
                if (object.alive)
                    message.alive = $Boolean(object.alive);
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
        PingRequest.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.online = 0;
                object.alive = false;
            }
            if (message.online != null && $Object.hasOwnProperty.call(message, "online"))
                object.online = message.online;
            if (message.alive != null && $Object.hasOwnProperty.call(message, "alive"))
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
        PingRequest.prototype.toJSON = function() {
            return PingRequest.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for PingRequest
         * @function getTypeUrl
         * @memberof connection.PingRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PingRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/connection.PingRequest";
        };

        return PingRequest;
    })();

    connection.PongResponse = (function() {

        /**
         * Properties of a PongResponse.
         * @typedef {Object} connection.PongResponse.$Properties
         * @property {boolean|null} [success] PongResponse success
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a PongResponse.
         * @memberof connection
         * @interface IPongResponse
         * @augments connection.PongResponse.$Properties
         * @deprecated Use connection.PongResponse.$Properties instead.
         */

        /**
         * Shape of a PongResponse.
         * @typedef {connection.PongResponse.$Properties} connection.PongResponse.$Shape
         */

        /**
         * Constructs a new PongResponse.
         * @memberof connection
         * @classdesc Represents a PongResponse.
         * @constructor
         * @param {connection.PongResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const PongResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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
         * @param {connection.PongResponse.$Properties=} [properties] Properties to set
         * @returns {connection.PongResponse} PongResponse instance
         * @type {{
         *   (properties: connection.PongResponse.$Shape): connection.PongResponse & connection.PongResponse.$Shape;
         *   (properties?: connection.PongResponse.$Properties): connection.PongResponse;
         * }}
         */
        PongResponse.create = function(properties) {
            return new PongResponse(properties);
        };

        /**
         * Encodes the specified PongResponse message. Does not implicitly {@link connection.PongResponse.verify|verify} messages.
         * @function encode
         * @memberof connection.PongResponse
         * @static
         * @param {connection.PongResponse.$Properties} message PongResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PongResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.success != null && $Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified PongResponse message, length delimited. Does not implicitly {@link connection.PongResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof connection.PongResponse
         * @static
         * @param {connection.PongResponse.$Properties} message PongResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PongResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a PongResponse message from the specified reader or buffer.
         * @function decode
         * @memberof connection.PongResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {connection.PongResponse & connection.PongResponse.$Shape} PongResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PongResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.connection.PongResponse(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.success = value;
                        else
                            delete message.success;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a PongResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof connection.PongResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {connection.PongResponse & connection.PongResponse.$Shape} PongResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PongResponse.decodeDelimited = function(reader) {
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
        PongResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.success != null && $Object.hasOwnProperty.call(message, "success"))
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
        PongResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.connection.PongResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".connection.PongResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.connection.PongResponse();
            if (object.success != null)
                if (object.success)
                    message.success = $Boolean(object.success);
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
        PongResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                object.success = false;
            if (message.success != null && $Object.hasOwnProperty.call(message, "success"))
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
        PongResponse.prototype.toJSON = function() {
            return PongResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for PongResponse
         * @function getTypeUrl
         * @memberof connection.PongResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PongResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/connection.PongResponse";
        };

        return PongResponse;
    })();

    connection.AuthenticationRequest = (function() {

        /**
         * Properties of an AuthenticationRequest.
         * @typedef {Object} connection.AuthenticationRequest.$Properties
         * @property {string|null} [token] AuthenticationRequest token
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an AuthenticationRequest.
         * @memberof connection
         * @interface IAuthenticationRequest
         * @augments connection.AuthenticationRequest.$Properties
         * @deprecated Use connection.AuthenticationRequest.$Properties instead.
         */

        /**
         * Shape of an AuthenticationRequest.
         * @typedef {connection.AuthenticationRequest.$Properties} connection.AuthenticationRequest.$Shape
         */

        /**
         * Constructs a new AuthenticationRequest.
         * @memberof connection
         * @classdesc Represents an AuthenticationRequest.
         * @constructor
         * @param {connection.AuthenticationRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const AuthenticationRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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
         * @param {connection.AuthenticationRequest.$Properties=} [properties] Properties to set
         * @returns {connection.AuthenticationRequest} AuthenticationRequest instance
         * @type {{
         *   (properties: connection.AuthenticationRequest.$Shape): connection.AuthenticationRequest & connection.AuthenticationRequest.$Shape;
         *   (properties?: connection.AuthenticationRequest.$Properties): connection.AuthenticationRequest;
         * }}
         */
        AuthenticationRequest.create = function(properties) {
            return new AuthenticationRequest(properties);
        };

        /**
         * Encodes the specified AuthenticationRequest message. Does not implicitly {@link connection.AuthenticationRequest.verify|verify} messages.
         * @function encode
         * @memberof connection.AuthenticationRequest
         * @static
         * @param {connection.AuthenticationRequest.$Properties} message AuthenticationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticationRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified AuthenticationRequest message, length delimited. Does not implicitly {@link connection.AuthenticationRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof connection.AuthenticationRequest
         * @static
         * @param {connection.AuthenticationRequest.$Properties} message AuthenticationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticationRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an AuthenticationRequest message from the specified reader or buffer.
         * @function decode
         * @memberof connection.AuthenticationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {connection.AuthenticationRequest & connection.AuthenticationRequest.$Shape} AuthenticationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticationRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.connection.AuthenticationRequest(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.token = value;
                        else
                            delete message.token;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an AuthenticationRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof connection.AuthenticationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {connection.AuthenticationRequest & connection.AuthenticationRequest.$Shape} AuthenticationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticationRequest.decodeDelimited = function(reader) {
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
        AuthenticationRequest.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
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
        AuthenticationRequest.fromObject = function (object, _depth) {
            if (object instanceof $root.connection.AuthenticationRequest)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".connection.AuthenticationRequest: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.connection.AuthenticationRequest();
            if (object.token != null)
                if (typeof object.token !== "string" || object.token.length)
                    message.token = $String(object.token);
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
        AuthenticationRequest.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
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
        AuthenticationRequest.prototype.toJSON = function() {
            return AuthenticationRequest.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for AuthenticationRequest
         * @function getTypeUrl
         * @memberof connection.AuthenticationRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        AuthenticationRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/connection.AuthenticationRequest";
        };

        return AuthenticationRequest;
    })();

    connection.AuthenticationResponse = (function() {

        /**
         * Properties of an AuthenticationResponse.
         * @typedef {Object} connection.AuthenticationResponse.$Properties
         * @property {string|null} [session] AuthenticationResponse session
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an AuthenticationResponse.
         * @memberof connection
         * @interface IAuthenticationResponse
         * @augments connection.AuthenticationResponse.$Properties
         * @deprecated Use connection.AuthenticationResponse.$Properties instead.
         */

        /**
         * Shape of an AuthenticationResponse.
         * @typedef {connection.AuthenticationResponse.$Properties} connection.AuthenticationResponse.$Shape
         */

        /**
         * Constructs a new AuthenticationResponse.
         * @memberof connection
         * @classdesc Represents an AuthenticationResponse.
         * @constructor
         * @param {connection.AuthenticationResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const AuthenticationResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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
         * @param {connection.AuthenticationResponse.$Properties=} [properties] Properties to set
         * @returns {connection.AuthenticationResponse} AuthenticationResponse instance
         * @type {{
         *   (properties: connection.AuthenticationResponse.$Shape): connection.AuthenticationResponse & connection.AuthenticationResponse.$Shape;
         *   (properties?: connection.AuthenticationResponse.$Properties): connection.AuthenticationResponse;
         * }}
         */
        AuthenticationResponse.create = function(properties) {
            return new AuthenticationResponse(properties);
        };

        /**
         * Encodes the specified AuthenticationResponse message. Does not implicitly {@link connection.AuthenticationResponse.verify|verify} messages.
         * @function encode
         * @memberof connection.AuthenticationResponse
         * @static
         * @param {connection.AuthenticationResponse.$Properties} message AuthenticationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticationResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.session != null && $Object.hasOwnProperty.call(message, "session"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.session);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified AuthenticationResponse message, length delimited. Does not implicitly {@link connection.AuthenticationResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof connection.AuthenticationResponse
         * @static
         * @param {connection.AuthenticationResponse.$Properties} message AuthenticationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticationResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an AuthenticationResponse message from the specified reader or buffer.
         * @function decode
         * @memberof connection.AuthenticationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {connection.AuthenticationResponse & connection.AuthenticationResponse.$Shape} AuthenticationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticationResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.connection.AuthenticationResponse(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.session = value;
                        else
                            delete message.session;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an AuthenticationResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof connection.AuthenticationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {connection.AuthenticationResponse & connection.AuthenticationResponse.$Shape} AuthenticationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticationResponse.decodeDelimited = function(reader) {
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
        AuthenticationResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.session != null && $Object.hasOwnProperty.call(message, "session"))
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
        AuthenticationResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.connection.AuthenticationResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".connection.AuthenticationResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.connection.AuthenticationResponse();
            if (object.session != null)
                if (typeof object.session !== "string" || object.session.length)
                    message.session = $String(object.session);
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
        AuthenticationResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                object.session = "";
            if (message.session != null && $Object.hasOwnProperty.call(message, "session"))
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
        AuthenticationResponse.prototype.toJSON = function() {
            return AuthenticationResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for AuthenticationResponse
         * @function getTypeUrl
         * @memberof connection.AuthenticationResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        AuthenticationResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/connection.AuthenticationResponse";
        };

        return AuthenticationResponse;
    })();

    connection.JoinPlayerRequest = (function() {

        /**
         * Properties of a JoinPlayerRequest.
         * @typedef {Object} connection.JoinPlayerRequest.$Properties
         * @property {string|null} [token] JoinPlayerRequest token
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a JoinPlayerRequest.
         * @memberof connection
         * @interface IJoinPlayerRequest
         * @augments connection.JoinPlayerRequest.$Properties
         * @deprecated Use connection.JoinPlayerRequest.$Properties instead.
         */

        /**
         * Shape of a JoinPlayerRequest.
         * @typedef {connection.JoinPlayerRequest.$Properties} connection.JoinPlayerRequest.$Shape
         */

        /**
         * Constructs a new JoinPlayerRequest.
         * @memberof connection
         * @classdesc Represents a JoinPlayerRequest.
         * @constructor
         * @param {connection.JoinPlayerRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const JoinPlayerRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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
         * @param {connection.JoinPlayerRequest.$Properties=} [properties] Properties to set
         * @returns {connection.JoinPlayerRequest} JoinPlayerRequest instance
         * @type {{
         *   (properties: connection.JoinPlayerRequest.$Shape): connection.JoinPlayerRequest & connection.JoinPlayerRequest.$Shape;
         *   (properties?: connection.JoinPlayerRequest.$Properties): connection.JoinPlayerRequest;
         * }}
         */
        JoinPlayerRequest.create = function(properties) {
            return new JoinPlayerRequest(properties);
        };

        /**
         * Encodes the specified JoinPlayerRequest message. Does not implicitly {@link connection.JoinPlayerRequest.verify|verify} messages.
         * @function encode
         * @memberof connection.JoinPlayerRequest
         * @static
         * @param {connection.JoinPlayerRequest.$Properties} message JoinPlayerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinPlayerRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified JoinPlayerRequest message, length delimited. Does not implicitly {@link connection.JoinPlayerRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof connection.JoinPlayerRequest
         * @static
         * @param {connection.JoinPlayerRequest.$Properties} message JoinPlayerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinPlayerRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a JoinPlayerRequest message from the specified reader or buffer.
         * @function decode
         * @memberof connection.JoinPlayerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {connection.JoinPlayerRequest & connection.JoinPlayerRequest.$Shape} JoinPlayerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinPlayerRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.connection.JoinPlayerRequest(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.token = value;
                        else
                            delete message.token;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a JoinPlayerRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof connection.JoinPlayerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {connection.JoinPlayerRequest & connection.JoinPlayerRequest.$Shape} JoinPlayerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinPlayerRequest.decodeDelimited = function(reader) {
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
        JoinPlayerRequest.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
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
        JoinPlayerRequest.fromObject = function (object, _depth) {
            if (object instanceof $root.connection.JoinPlayerRequest)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".connection.JoinPlayerRequest: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.connection.JoinPlayerRequest();
            if (object.token != null)
                if (typeof object.token !== "string" || object.token.length)
                    message.token = $String(object.token);
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
        JoinPlayerRequest.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
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
        JoinPlayerRequest.prototype.toJSON = function() {
            return JoinPlayerRequest.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for JoinPlayerRequest
         * @function getTypeUrl
         * @memberof connection.JoinPlayerRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        JoinPlayerRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/connection.JoinPlayerRequest";
        };

        return JoinPlayerRequest;
    })();

    connection.JoinPlayerResponse = (function() {

        /**
         * Properties of a JoinPlayerResponse.
         * @typedef {Object} connection.JoinPlayerResponse.$Properties
         * @property {string|null} [name] JoinPlayerResponse name
         * @property {connection.Role|null} [role] JoinPlayerResponse role
         * @property {string|null} [id] JoinPlayerResponse id
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a JoinPlayerResponse.
         * @memberof connection
         * @interface IJoinPlayerResponse
         * @augments connection.JoinPlayerResponse.$Properties
         * @deprecated Use connection.JoinPlayerResponse.$Properties instead.
         */

        /**
         * Shape of a JoinPlayerResponse.
         * @typedef {connection.JoinPlayerResponse.$Properties} connection.JoinPlayerResponse.$Shape
         */

        /**
         * Constructs a new JoinPlayerResponse.
         * @memberof connection
         * @classdesc Represents a JoinPlayerResponse.
         * @constructor
         * @param {connection.JoinPlayerResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const JoinPlayerResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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
         * @param {connection.JoinPlayerResponse.$Properties=} [properties] Properties to set
         * @returns {connection.JoinPlayerResponse} JoinPlayerResponse instance
         * @type {{
         *   (properties: connection.JoinPlayerResponse.$Shape): connection.JoinPlayerResponse & connection.JoinPlayerResponse.$Shape;
         *   (properties?: connection.JoinPlayerResponse.$Properties): connection.JoinPlayerResponse;
         * }}
         */
        JoinPlayerResponse.create = function(properties) {
            return new JoinPlayerResponse(properties);
        };

        /**
         * Encodes the specified JoinPlayerResponse message. Does not implicitly {@link connection.JoinPlayerResponse.verify|verify} messages.
         * @function encode
         * @memberof connection.JoinPlayerResponse
         * @static
         * @param {connection.JoinPlayerResponse.$Properties} message JoinPlayerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinPlayerResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.role != null && $Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.role);
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified JoinPlayerResponse message, length delimited. Does not implicitly {@link connection.JoinPlayerResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof connection.JoinPlayerResponse
         * @static
         * @param {connection.JoinPlayerResponse.$Properties} message JoinPlayerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinPlayerResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a JoinPlayerResponse message from the specified reader or buffer.
         * @function decode
         * @memberof connection.JoinPlayerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {connection.JoinPlayerResponse & connection.JoinPlayerResponse.$Shape} JoinPlayerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinPlayerResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.connection.JoinPlayerResponse(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.name = value;
                        else
                            delete message.name;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.role = value;
                        else
                            delete message.role;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.id = value;
                        else
                            delete message.id;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a JoinPlayerResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof connection.JoinPlayerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {connection.JoinPlayerResponse & connection.JoinPlayerResponse.$Shape} JoinPlayerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinPlayerResponse.decodeDelimited = function(reader) {
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
        JoinPlayerResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.role != null && $Object.hasOwnProperty.call(message, "role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
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
        JoinPlayerResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.connection.JoinPlayerResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".connection.JoinPlayerResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.connection.JoinPlayerResponse();
            if (object.name != null)
                if (typeof object.name !== "string" || object.name.length)
                    message.name = $String(object.name);
            if (object.role !== 0 && (typeof object.role !== "string" || $root.connection.Role[object.role] !== 0))
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
                if (typeof object.id !== "string" || object.id.length)
                    message.id = $String(object.id);
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
        JoinPlayerResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.role = options.enums === $String ? "USER" : 0;
                object.id = "";
            }
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                object.name = message.name;
            if (message.role != null && $Object.hasOwnProperty.call(message, "role"))
                object.role = options.enums === $String ? $root.connection.Role[message.role] === $undefined ? message.role : $root.connection.Role[message.role] : message.role;
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
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
        JoinPlayerResponse.prototype.toJSON = function() {
            return JoinPlayerResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for JoinPlayerResponse
         * @function getTypeUrl
         * @memberof connection.JoinPlayerResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        JoinPlayerResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/connection.JoinPlayerResponse";
        };

        return JoinPlayerResponse;
    })();

    connection.AwardRequest = (function() {

        /**
         * Properties of an AwardRequest.
         * @typedef {Object} connection.AwardRequest.$Properties
         * @property {string|null} [id] AwardRequest id
         * @property {number|null} [vp] AwardRequest vp
         * @property {string|null} [accessory] AwardRequest accessory
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an AwardRequest.
         * @memberof connection
         * @interface IAwardRequest
         * @augments connection.AwardRequest.$Properties
         * @deprecated Use connection.AwardRequest.$Properties instead.
         */

        /**
         * Shape of an AwardRequest.
         * @typedef {connection.AwardRequest.$Properties} connection.AwardRequest.$Shape
         */

        /**
         * Constructs a new AwardRequest.
         * @memberof connection
         * @classdesc Represents an AwardRequest.
         * @constructor
         * @param {connection.AwardRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const AwardRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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
        $Object.defineProperty(AwardRequest.prototype, "_vp", {
            get: $util.oneOfGetter($oneOfFields = ["vp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(AwardRequest.prototype, "_accessory", {
            get: $util.oneOfGetter($oneOfFields = ["accessory"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AwardRequest instance using the specified properties.
         * @function create
         * @memberof connection.AwardRequest
         * @static
         * @param {connection.AwardRequest.$Properties=} [properties] Properties to set
         * @returns {connection.AwardRequest} AwardRequest instance
         * @type {{
         *   (properties: connection.AwardRequest.$Shape): connection.AwardRequest & connection.AwardRequest.$Shape;
         *   (properties?: connection.AwardRequest.$Properties): connection.AwardRequest;
         * }}
         */
        AwardRequest.create = function(properties) {
            return new AwardRequest(properties);
        };

        /**
         * Encodes the specified AwardRequest message. Does not implicitly {@link connection.AwardRequest.verify|verify} messages.
         * @function encode
         * @memberof connection.AwardRequest
         * @static
         * @param {connection.AwardRequest.$Properties} message AwardRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.vp != null && $Object.hasOwnProperty.call(message, "vp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.vp);
            if (message.accessory != null && $Object.hasOwnProperty.call(message, "accessory"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.accessory);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified AwardRequest message, length delimited. Does not implicitly {@link connection.AwardRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof connection.AwardRequest
         * @static
         * @param {connection.AwardRequest.$Properties} message AwardRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an AwardRequest message from the specified reader or buffer.
         * @function decode
         * @memberof connection.AwardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {connection.AwardRequest & connection.AwardRequest.$Shape} AwardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.connection.AwardRequest(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.id = value;
                        else
                            delete message.id;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.vp = reader.uint32();
                        message._vp = "vp";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.accessory = reader.stringVerify();
                        message._accessory = "accessory";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an AwardRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof connection.AwardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {connection.AwardRequest & connection.AwardRequest.$Shape} AwardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardRequest.decodeDelimited = function(reader) {
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
        AwardRequest.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.vp != null && $Object.hasOwnProperty.call(message, "vp")) {
                properties._vp = 1;
                if (!$util.isInteger(message.vp))
                    return "vp: integer expected";
            }
            if (message.accessory != null && $Object.hasOwnProperty.call(message, "accessory")) {
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
        AwardRequest.fromObject = function (object, _depth) {
            if (object instanceof $root.connection.AwardRequest)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".connection.AwardRequest: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.connection.AwardRequest();
            if (object.id != null)
                if (typeof object.id !== "string" || object.id.length)
                    message.id = $String(object.id);
            if (object.vp != null)
                message.vp = object.vp >>> 0;
            if (object.accessory != null)
                message.accessory = $String(object.accessory);
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
        AwardRequest.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                object.id = message.id;
            if (message.vp != null && $Object.hasOwnProperty.call(message, "vp"))
                object.vp = message.vp;
            if (message.accessory != null && $Object.hasOwnProperty.call(message, "accessory"))
                object.accessory = message.accessory;
            return object;
        };

        /**
         * Converts this AwardRequest to JSON.
         * @function toJSON
         * @memberof connection.AwardRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AwardRequest.prototype.toJSON = function() {
            return AwardRequest.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for AwardRequest
         * @function getTypeUrl
         * @memberof connection.AwardRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        AwardRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/connection.AwardRequest";
        };

        return AwardRequest;
    })();

    connection.AwardResponse = (function() {

        /**
         * Properties of an AwardResponse.
         * @typedef {Object} connection.AwardResponse.$Properties
         * @property {boolean|null} [success] AwardResponse success
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an AwardResponse.
         * @memberof connection
         * @interface IAwardResponse
         * @augments connection.AwardResponse.$Properties
         * @deprecated Use connection.AwardResponse.$Properties instead.
         */

        /**
         * Shape of an AwardResponse.
         * @typedef {connection.AwardResponse.$Properties} connection.AwardResponse.$Shape
         */

        /**
         * Constructs a new AwardResponse.
         * @memberof connection
         * @classdesc Represents an AwardResponse.
         * @constructor
         * @param {connection.AwardResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const AwardResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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
         * @param {connection.AwardResponse.$Properties=} [properties] Properties to set
         * @returns {connection.AwardResponse} AwardResponse instance
         * @type {{
         *   (properties: connection.AwardResponse.$Shape): connection.AwardResponse & connection.AwardResponse.$Shape;
         *   (properties?: connection.AwardResponse.$Properties): connection.AwardResponse;
         * }}
         */
        AwardResponse.create = function(properties) {
            return new AwardResponse(properties);
        };

        /**
         * Encodes the specified AwardResponse message. Does not implicitly {@link connection.AwardResponse.verify|verify} messages.
         * @function encode
         * @memberof connection.AwardResponse
         * @static
         * @param {connection.AwardResponse.$Properties} message AwardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.success != null && $Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified AwardResponse message, length delimited. Does not implicitly {@link connection.AwardResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof connection.AwardResponse
         * @static
         * @param {connection.AwardResponse.$Properties} message AwardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an AwardResponse message from the specified reader or buffer.
         * @function decode
         * @memberof connection.AwardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {connection.AwardResponse & connection.AwardResponse.$Shape} AwardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.connection.AwardResponse(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.success = value;
                        else
                            delete message.success;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an AwardResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof connection.AwardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {connection.AwardResponse & connection.AwardResponse.$Shape} AwardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardResponse.decodeDelimited = function(reader) {
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
        AwardResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.success != null && $Object.hasOwnProperty.call(message, "success"))
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
        AwardResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.connection.AwardResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".connection.AwardResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.connection.AwardResponse();
            if (object.success != null)
                if (object.success)
                    message.success = $Boolean(object.success);
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
        AwardResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                object.success = false;
            if (message.success != null && $Object.hasOwnProperty.call(message, "success"))
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
        AwardResponse.prototype.toJSON = function() {
            return AwardResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for AwardResponse
         * @function getTypeUrl
         * @memberof connection.AwardResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        AwardResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/connection.AwardResponse";
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
        const valuesById = {}, values = $Object.create(valuesById);
        values[valuesById[0] = "USER"] = 0;
        values[valuesById[1] = "MOD"] = 1;
        values[valuesById[2] = "DEV"] = 2;
        return values;
    })();

    return connection;
})();

export {
  $root as default
};
