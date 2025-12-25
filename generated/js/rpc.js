/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const connection = $root.connection = (() => {

    /**
     * Namespace connection.
     * @exports connection
     * @namespace
     */
    const connection = {};

    connection.GameService = (function() {

        /**
         * Constructs a new GameService service.
         * @memberof connection
         * @classdesc Represents a GameService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function GameService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (GameService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = GameService;

        /**
         * Creates new GameService service using the specified rpc implementation.
         * @function create
         * @memberof connection.GameService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {GameService} RPC service. Useful where requests and/or responses are streamed.
         */
        GameService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link connection.GameService#register}.
         * @memberof connection.GameService
         * @typedef RegisterCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {connection.RegisterResponse} [response] RegisterResponse
         */

        /**
         * Calls Register.
         * @function register
         * @memberof connection.GameService
         * @instance
         * @param {connection.IRegisterRequest} request RegisterRequest message or plain object
         * @param {connection.GameService.RegisterCallback} callback Node-style callback called with the error, if any, and RegisterResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameService.prototype.register = function register(request, callback) {
            return this.rpcCall(register, $root.connection.RegisterRequest, $root.connection.RegisterResponse, request, callback);
        }, "name", { value: "Register" });

        /**
         * Calls Register.
         * @function register
         * @memberof connection.GameService
         * @instance
         * @param {connection.IRegisterRequest} request RegisterRequest message or plain object
         * @returns {Promise<connection.RegisterResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link connection.GameService#joinPlayer}.
         * @memberof connection.GameService
         * @typedef JoinPlayerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {connection.JoinPlayerResponse} [response] JoinPlayerResponse
         */

        /**
         * Calls JoinPlayer.
         * @function joinPlayer
         * @memberof connection.GameService
         * @instance
         * @param {connection.IJoinPlayerRequest} request JoinPlayerRequest message or plain object
         * @param {connection.GameService.JoinPlayerCallback} callback Node-style callback called with the error, if any, and JoinPlayerResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameService.prototype.joinPlayer = function joinPlayer(request, callback) {
            return this.rpcCall(joinPlayer, $root.connection.JoinPlayerRequest, $root.connection.JoinPlayerResponse, request, callback);
        }, "name", { value: "JoinPlayer" });

        /**
         * Calls JoinPlayer.
         * @function joinPlayer
         * @memberof connection.GameService
         * @instance
         * @param {connection.IJoinPlayerRequest} request JoinPlayerRequest message or plain object
         * @returns {Promise<connection.JoinPlayerResponse>} Promise
         * @variation 2
         */

        return GameService;
    })();

    connection.RegisterRequest = (function() {

        /**
         * Properties of a RegisterRequest.
         * @memberof connection
         * @interface IRegisterRequest
         * @property {string|null} [icon] RegisterRequest icon
         * @property {string|null} [name] RegisterRequest name
         * @property {string|null} [url] RegisterRequest url
         */

        /**
         * Constructs a new RegisterRequest.
         * @memberof connection
         * @classdesc Represents a RegisterRequest.
         * @implements IRegisterRequest
         * @constructor
         * @param {connection.IRegisterRequest=} [properties] Properties to set
         */
        function RegisterRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterRequest icon.
         * @member {string} icon
         * @memberof connection.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.icon = "";

        /**
         * RegisterRequest name.
         * @member {string} name
         * @memberof connection.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.name = "";

        /**
         * RegisterRequest url.
         * @member {string} url
         * @memberof connection.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.url = "";

        /**
         * Creates a new RegisterRequest instance using the specified properties.
         * @function create
         * @memberof connection.RegisterRequest
         * @static
         * @param {connection.IRegisterRequest=} [properties] Properties to set
         * @returns {connection.RegisterRequest} RegisterRequest instance
         */
        RegisterRequest.create = function create(properties) {
            return new RegisterRequest(properties);
        };

        /**
         * Encodes the specified RegisterRequest message. Does not implicitly {@link connection.RegisterRequest.verify|verify} messages.
         * @function encode
         * @memberof connection.RegisterRequest
         * @static
         * @param {connection.IRegisterRequest} message RegisterRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.icon);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.url);
            return writer;
        };

        /**
         * Encodes the specified RegisterRequest message, length delimited. Does not implicitly {@link connection.RegisterRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof connection.RegisterRequest
         * @static
         * @param {connection.IRegisterRequest} message RegisterRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterRequest message from the specified reader or buffer.
         * @function decode
         * @memberof connection.RegisterRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {connection.RegisterRequest} RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.connection.RegisterRequest();
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
                        message.url = reader.string();
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
         * Decodes a RegisterRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof connection.RegisterRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {connection.RegisterRequest} RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterRequest message.
         * @function verify
         * @memberof connection.RegisterRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };

        /**
         * Creates a RegisterRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof connection.RegisterRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {connection.RegisterRequest} RegisterRequest
         */
        RegisterRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.connection.RegisterRequest)
                return object;
            let message = new $root.connection.RegisterRequest();
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.name != null)
                message.name = String(object.name);
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };

        /**
         * Creates a plain object from a RegisterRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof connection.RegisterRequest
         * @static
         * @param {connection.RegisterRequest} message RegisterRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.icon = "";
                object.name = "";
                object.url = "";
            }
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };

        /**
         * Converts this RegisterRequest to JSON.
         * @function toJSON
         * @memberof connection.RegisterRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RegisterRequest
         * @function getTypeUrl
         * @memberof connection.RegisterRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RegisterRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/connection.RegisterRequest";
        };

        return RegisterRequest;
    })();

    connection.RegisterResponse = (function() {

        /**
         * Properties of a RegisterResponse.
         * @memberof connection
         * @interface IRegisterResponse
         * @property {boolean|null} [success] RegisterResponse success
         */

        /**
         * Constructs a new RegisterResponse.
         * @memberof connection
         * @classdesc Represents a RegisterResponse.
         * @implements IRegisterResponse
         * @constructor
         * @param {connection.IRegisterResponse=} [properties] Properties to set
         */
        function RegisterResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterResponse success.
         * @member {boolean} success
         * @memberof connection.RegisterResponse
         * @instance
         */
        RegisterResponse.prototype.success = false;

        /**
         * Creates a new RegisterResponse instance using the specified properties.
         * @function create
         * @memberof connection.RegisterResponse
         * @static
         * @param {connection.IRegisterResponse=} [properties] Properties to set
         * @returns {connection.RegisterResponse} RegisterResponse instance
         */
        RegisterResponse.create = function create(properties) {
            return new RegisterResponse(properties);
        };

        /**
         * Encodes the specified RegisterResponse message. Does not implicitly {@link connection.RegisterResponse.verify|verify} messages.
         * @function encode
         * @memberof connection.RegisterResponse
         * @static
         * @param {connection.IRegisterResponse} message RegisterResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            return writer;
        };

        /**
         * Encodes the specified RegisterResponse message, length delimited. Does not implicitly {@link connection.RegisterResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof connection.RegisterResponse
         * @static
         * @param {connection.IRegisterResponse} message RegisterResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterResponse message from the specified reader or buffer.
         * @function decode
         * @memberof connection.RegisterResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {connection.RegisterResponse} RegisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.connection.RegisterResponse();
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
         * Decodes a RegisterResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof connection.RegisterResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {connection.RegisterResponse} RegisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterResponse message.
         * @function verify
         * @memberof connection.RegisterResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            return null;
        };

        /**
         * Creates a RegisterResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof connection.RegisterResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {connection.RegisterResponse} RegisterResponse
         */
        RegisterResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.connection.RegisterResponse)
                return object;
            let message = new $root.connection.RegisterResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            return message;
        };

        /**
         * Creates a plain object from a RegisterResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof connection.RegisterResponse
         * @static
         * @param {connection.RegisterResponse} message RegisterResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterResponse.toObject = function toObject(message, options) {
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
         * Converts this RegisterResponse to JSON.
         * @function toJSON
         * @memberof connection.RegisterResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RegisterResponse
         * @function getTypeUrl
         * @memberof connection.RegisterResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RegisterResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/connection.RegisterResponse";
        };

        return RegisterResponse;
    })();

    connection.JoinPlayerRequest = (function() {

        /**
         * Properties of a JoinPlayerRequest.
         * @memberof connection
         * @interface IJoinPlayerRequest
         * @property {string|null} [playerToken] JoinPlayerRequest playerToken
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
         * JoinPlayerRequest playerToken.
         * @member {string} playerToken
         * @memberof connection.JoinPlayerRequest
         * @instance
         */
        JoinPlayerRequest.prototype.playerToken = "";

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
            if (message.playerToken != null && Object.hasOwnProperty.call(message, "playerToken"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerToken);
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
                        message.playerToken = reader.string();
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
            if (message.playerToken != null && message.hasOwnProperty("playerToken"))
                if (!$util.isString(message.playerToken))
                    return "playerToken: string expected";
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
            if (object.playerToken != null)
                message.playerToken = String(object.playerToken);
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
                object.playerToken = "";
            if (message.playerToken != null && message.hasOwnProperty("playerToken"))
                object.playerToken = message.playerToken;
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
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = options.enums === String ? $root.connection.Role[message.role] === undefined ? message.role : $root.connection.Role[message.role] : message.role;
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
