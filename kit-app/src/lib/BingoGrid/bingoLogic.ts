import {Size} from "$lib/BingoGrid/bingoLines";

export interface BingoButton {
    selected: boolean;
    line: string;
}

export function isVictory(bingoButtons: Array<BingoButton>, size: Size): boolean {
    switch (size) {
        case Size.SMALL:
            return isPrivateVictory(bingoButtons, 3);
        case Size.MEDIUM:
            return isPrivateVictory(bingoButtons, 4);
        case Size.LARGE:
            return isPrivateVictory(bingoButtons, 5);
    }
}

function isPrivateVictory(bingoButtons: Array<BingoButton>, size: number): boolean {
    let row = false;
    let column = false;
    let diagonal1 = false;
    let diagonal2 = false;
    for (let i = 0; i < size; i++) {
        row = row && bingoButtons[i].selected;
        column = column && bingoButtons[size * i + (size - 1 - i)].selected;
        diagonal1 = diagonal1 && bingoButtons[size * i + i].selected;
        diagonal2 = diagonal1 && bingoButtons[size * i + (size - 1 - i)].selected;
    }
    return row || column || diagonal1 || diagonal2;
}