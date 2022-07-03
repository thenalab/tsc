/* eslint-disable */
import { Params } from "../tsc/params";
import { NextNFT } from "../tsc/next_nft";
import { StoredNFT } from "../tsc/stored_nft";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thenalab.tsc.tsc";

/** GenesisState defines the tsc module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  nextNFT: NextNFT | undefined;
  /** this line is used by starport scaffolding # genesis/proto/state */
  storedNFTList: StoredNFT[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextNFT !== undefined) {
      NextNFT.encode(message.nextNFT, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.storedNFTList) {
      StoredNFT.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.storedNFTList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.nextNFT = NextNFT.decode(reader, reader.uint32());
          break;
        case 3:
          message.storedNFTList.push(StoredNFT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.storedNFTList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.nextNFT !== undefined && object.nextNFT !== null) {
      message.nextNFT = NextNFT.fromJSON(object.nextNFT);
    } else {
      message.nextNFT = undefined;
    }
    if (object.storedNFTList !== undefined && object.storedNFTList !== null) {
      for (const e of object.storedNFTList) {
        message.storedNFTList.push(StoredNFT.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.nextNFT !== undefined &&
      (obj.nextNFT = message.nextNFT
        ? NextNFT.toJSON(message.nextNFT)
        : undefined);
    if (message.storedNFTList) {
      obj.storedNFTList = message.storedNFTList.map((e) =>
        e ? StoredNFT.toJSON(e) : undefined
      );
    } else {
      obj.storedNFTList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.storedNFTList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.nextNFT !== undefined && object.nextNFT !== null) {
      message.nextNFT = NextNFT.fromPartial(object.nextNFT);
    } else {
      message.nextNFT = undefined;
    }
    if (object.storedNFTList !== undefined && object.storedNFTList !== null) {
      for (const e of object.storedNFTList) {
        message.storedNFTList.push(StoredNFT.fromPartial(e));
      }
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
