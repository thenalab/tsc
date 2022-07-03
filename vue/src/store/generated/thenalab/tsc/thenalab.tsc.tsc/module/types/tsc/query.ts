/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../tsc/params";
import { NextNFT } from "../tsc/next_nft";
import { StoredNFT } from "../tsc/stored_nft";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "thenalab.tsc.tsc";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetNextNFTRequest {}

export interface QueryGetNextNFTResponse {
  NextNFT: NextNFT | undefined;
}

export interface QueryGetStoredNFTRequest {
  index: string;
}

export interface QueryGetStoredNFTResponse {
  storedNFT: StoredNFT | undefined;
}

export interface QueryAllStoredNFTRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllStoredNFTResponse {
  storedNFT: StoredNFT[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetNextNFTRequest: object = {};

export const QueryGetNextNFTRequest = {
  encode(_: QueryGetNextNFTRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetNextNFTRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetNextNFTRequest } as QueryGetNextNFTRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetNextNFTRequest {
    const message = { ...baseQueryGetNextNFTRequest } as QueryGetNextNFTRequest;
    return message;
  },

  toJSON(_: QueryGetNextNFTRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryGetNextNFTRequest>): QueryGetNextNFTRequest {
    const message = { ...baseQueryGetNextNFTRequest } as QueryGetNextNFTRequest;
    return message;
  },
};

const baseQueryGetNextNFTResponse: object = {};

export const QueryGetNextNFTResponse = {
  encode(
    message: QueryGetNextNFTResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.NextNFT !== undefined) {
      NextNFT.encode(message.NextNFT, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetNextNFTResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetNextNFTResponse,
    } as QueryGetNextNFTResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.NextNFT = NextNFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNextNFTResponse {
    const message = {
      ...baseQueryGetNextNFTResponse,
    } as QueryGetNextNFTResponse;
    if (object.NextNFT !== undefined && object.NextNFT !== null) {
      message.NextNFT = NextNFT.fromJSON(object.NextNFT);
    } else {
      message.NextNFT = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetNextNFTResponse): unknown {
    const obj: any = {};
    message.NextNFT !== undefined &&
      (obj.NextNFT = message.NextNFT
        ? NextNFT.toJSON(message.NextNFT)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetNextNFTResponse>
  ): QueryGetNextNFTResponse {
    const message = {
      ...baseQueryGetNextNFTResponse,
    } as QueryGetNextNFTResponse;
    if (object.NextNFT !== undefined && object.NextNFT !== null) {
      message.NextNFT = NextNFT.fromPartial(object.NextNFT);
    } else {
      message.NextNFT = undefined;
    }
    return message;
  },
};

const baseQueryGetStoredNFTRequest: object = { index: "" };

export const QueryGetStoredNFTRequest = {
  encode(
    message: QueryGetStoredNFTRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetStoredNFTRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetStoredNFTRequest,
    } as QueryGetStoredNFTRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredNFTRequest {
    const message = {
      ...baseQueryGetStoredNFTRequest,
    } as QueryGetStoredNFTRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetStoredNFTRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetStoredNFTRequest>
  ): QueryGetStoredNFTRequest {
    const message = {
      ...baseQueryGetStoredNFTRequest,
    } as QueryGetStoredNFTRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetStoredNFTResponse: object = {};

export const QueryGetStoredNFTResponse = {
  encode(
    message: QueryGetStoredNFTResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.storedNFT !== undefined) {
      StoredNFT.encode(message.storedNFT, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetStoredNFTResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetStoredNFTResponse,
    } as QueryGetStoredNFTResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedNFT = StoredNFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredNFTResponse {
    const message = {
      ...baseQueryGetStoredNFTResponse,
    } as QueryGetStoredNFTResponse;
    if (object.storedNFT !== undefined && object.storedNFT !== null) {
      message.storedNFT = StoredNFT.fromJSON(object.storedNFT);
    } else {
      message.storedNFT = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetStoredNFTResponse): unknown {
    const obj: any = {};
    message.storedNFT !== undefined &&
      (obj.storedNFT = message.storedNFT
        ? StoredNFT.toJSON(message.storedNFT)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetStoredNFTResponse>
  ): QueryGetStoredNFTResponse {
    const message = {
      ...baseQueryGetStoredNFTResponse,
    } as QueryGetStoredNFTResponse;
    if (object.storedNFT !== undefined && object.storedNFT !== null) {
      message.storedNFT = StoredNFT.fromPartial(object.storedNFT);
    } else {
      message.storedNFT = undefined;
    }
    return message;
  },
};

const baseQueryAllStoredNFTRequest: object = {};

export const QueryAllStoredNFTRequest = {
  encode(
    message: QueryAllStoredNFTRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllStoredNFTRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllStoredNFTRequest,
    } as QueryAllStoredNFTRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStoredNFTRequest {
    const message = {
      ...baseQueryAllStoredNFTRequest,
    } as QueryAllStoredNFTRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllStoredNFTRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllStoredNFTRequest>
  ): QueryAllStoredNFTRequest {
    const message = {
      ...baseQueryAllStoredNFTRequest,
    } as QueryAllStoredNFTRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllStoredNFTResponse: object = {};

export const QueryAllStoredNFTResponse = {
  encode(
    message: QueryAllStoredNFTResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.storedNFT) {
      StoredNFT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllStoredNFTResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllStoredNFTResponse,
    } as QueryAllStoredNFTResponse;
    message.storedNFT = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedNFT.push(StoredNFT.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStoredNFTResponse {
    const message = {
      ...baseQueryAllStoredNFTResponse,
    } as QueryAllStoredNFTResponse;
    message.storedNFT = [];
    if (object.storedNFT !== undefined && object.storedNFT !== null) {
      for (const e of object.storedNFT) {
        message.storedNFT.push(StoredNFT.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllStoredNFTResponse): unknown {
    const obj: any = {};
    if (message.storedNFT) {
      obj.storedNFT = message.storedNFT.map((e) =>
        e ? StoredNFT.toJSON(e) : undefined
      );
    } else {
      obj.storedNFT = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllStoredNFTResponse>
  ): QueryAllStoredNFTResponse {
    const message = {
      ...baseQueryAllStoredNFTResponse,
    } as QueryAllStoredNFTResponse;
    message.storedNFT = [];
    if (object.storedNFT !== undefined && object.storedNFT !== null) {
      for (const e of object.storedNFT) {
        message.storedNFT.push(StoredNFT.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a NextNFT by index. */
  NextNFT(request: QueryGetNextNFTRequest): Promise<QueryGetNextNFTResponse>;
  /** Queries a StoredNFT by index. */
  StoredNFT(
    request: QueryGetStoredNFTRequest
  ): Promise<QueryGetStoredNFTResponse>;
  /** Queries a list of StoredNFT items. */
  StoredNFTAll(
    request: QueryAllStoredNFTRequest
  ): Promise<QueryAllStoredNFTResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("thenalab.tsc.tsc.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  NextNFT(request: QueryGetNextNFTRequest): Promise<QueryGetNextNFTResponse> {
    const data = QueryGetNextNFTRequest.encode(request).finish();
    const promise = this.rpc.request("thenalab.tsc.tsc.Query", "NextNFT", data);
    return promise.then((data) =>
      QueryGetNextNFTResponse.decode(new Reader(data))
    );
  }

  StoredNFT(
    request: QueryGetStoredNFTRequest
  ): Promise<QueryGetStoredNFTResponse> {
    const data = QueryGetStoredNFTRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thenalab.tsc.tsc.Query",
      "StoredNFT",
      data
    );
    return promise.then((data) =>
      QueryGetStoredNFTResponse.decode(new Reader(data))
    );
  }

  StoredNFTAll(
    request: QueryAllStoredNFTRequest
  ): Promise<QueryAllStoredNFTResponse> {
    const data = QueryAllStoredNFTRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thenalab.tsc.tsc.Query",
      "StoredNFTAll",
      data
    );
    return promise.then((data) =>
      QueryAllStoredNFTResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
