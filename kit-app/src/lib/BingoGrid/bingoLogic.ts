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
    let row = true;
    let column = true;
    let diagonal1 = true;
    let diagonal2 = true;
    for (let i = 0; i < size; i++) {
        row = row && bingoButtons[i].selected;
        column = column && bingoButtons[size * i].selected;
        diagonal1 = diagonal1 && bingoButtons[size * i + i].selected;
        diagonal2 = diagonal2 && bingoButtons[size * i + (size - 1 - i)].selected;
    }
    return (row || column || diagonal1 || diagonal2) ? true : isSecondaryPrivateVictory(bingoButtons, size);
}

function isSecondaryPrivateVictory(bingoButtons: Array<BingoButton>, size: number): boolean {
    for(let i = 1; i < size; i++) {
        let row = true;
        let column = true;
        for (let j = 0; j < size; j++) {
            row = row && bingoButtons[i * size + j].selected;
            column = column && bingoButtons[j * size + i].selected;
        }
        if (row || column) {
            return true;
        }
    }
    return false;
}