import type {Size} from "$lib/BingoGrid/bingoLines";

export enum MessageTypes {
    CONNECT,
    CLICK
}

export type Message = {
    type: MessageTypes;
}

export type ConnectMessage = {
    type: MessageTypes.CONNECT;
    size: Size;
} & Message;

export type ClickMessage = {
    type: MessageTypes.CLICK;
    index: number;
} & Message;
