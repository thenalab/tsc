/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thenalab.tsc.tsc";

export interface StoredNFT {
  index: string;
  nft: string;
}

const baseStoredNFT: object = { index: "", nft: "" };

export const StoredNFT = {
  encode(message: StoredNFT, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.nft !== "") {
      writer.uint32(18).string(message.nft);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StoredNFT {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStoredNFT } as StoredNFT;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.nft = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoredNFT {
    const message = { ...baseStoredNFT } as StoredNFT;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = String(object.nft);
    } else {
      message.nft = "";
    }
    return message;
  },

  toJSON(message: StoredNFT): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.nft !== undefined && (obj.nft = message.nft);
    return obj;
  },

  fromPartial(object: DeepPartial<StoredNFT>): StoredNFT {
    const message = { ...baseStoredNFT } as StoredNFT;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = object.nft;
    } else {
      message.nft = "";
    }
    return message;
  },
};

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
