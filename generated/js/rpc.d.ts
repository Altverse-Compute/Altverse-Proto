import * as $protobuf from "protobufjs";
import Long = require("long");
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

        /** JoinPlayerRequest playerToken */
        playerToken?: (string|null);
    }

    /** Represents a JoinPlayerRequest. */
    class JoinPlayerRequest implements IJoinPlayerRequest {

        /**
         * Constructs a new JoinPlayerRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: connection.IJoinPlayerRequest);

        /** JoinPlayerRequest playerToken. */
        public playerToken: string;

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
