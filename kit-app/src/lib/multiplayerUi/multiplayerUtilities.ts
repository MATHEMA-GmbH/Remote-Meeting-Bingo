import {Size} from "$lib/BingoGrid/bingoLines";

export interface PeerSelections {
    selected: boolean;
    index: number;
}

export function buildPeerSelections(size: Size): Array<PeerSelections> {
    let fieldCount;
    switch (size) {
        case Size.SMALL: fieldCount = 9; break;
        case Size.MEDIUM: fieldCount = 16; break;
        case Size.LARGE: fieldCount = 25; break;
    }
    let peerSelections = [];
    for (let i = 0; i < fieldCount; i++) {
        peerSelections.push({selected: false, index: i});
    }
    return peerSelections;
}