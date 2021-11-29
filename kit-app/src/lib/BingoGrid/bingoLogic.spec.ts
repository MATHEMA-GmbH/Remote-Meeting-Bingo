import type {BingoButton} from "$lib/BingoGrid/bingoLogic";
import {isVictory} from "$lib/BingoGrid/bingoLogic";
import {Size} from "$lib/BingoGrid/bingoLines";

describe('BingoLogic should detect victory for a', () => {
    describe('small field', () => {
        const bingoButtons: Array<BingoButton> = [
            {selected: false, line: '0'},
            {selected: false, line: '1'},
            {selected: false, line: '2'},
            {selected: false, line: '3'},
            {selected: false, line: '4'},
            {selected: false, line: '5'},
            {selected: false, line: '6'},
            {selected: false, line: '7'},
            {selected: false, line: '8'},
        ]

        beforeEach(() => {
            bingoButtons.forEach(button => button.selected = false);
        });

        it('in vertical', () => {
            bingoButtons[0].selected = true;
            bingoButtons[1].selected = true;
            bingoButtons[2].selected = true;

            expect(isVictory(bingoButtons, Size.SMALL)).toBeTruthy();
        })
        it('in horizontal', () => {

            expect(isVictory(bingoButtons, Size.SMALL)).toBeTruthy();
        })
        it('in diagonal left to right', () => {
            bingoButtons[0].selected = true;
            bingoButtons[4].selected = true;
            bingoButtons[8].selected = true;
            expect(isVictory(bingoButtons, Size.SMALL)).toBeTruthy();

        })
        it('in diagonal right to left', () => {
            bingoButtons[2].selected = true;
            bingoButtons[4].selected = true;
            bingoButtons[6].selected = true;

            expect(isVictory(bingoButtons, Size.SMALL)).toBeTruthy();
        })
    })

    describe('medium', () => {
        const bingoButtons: Array<BingoButton> = [
            {selected: false, line: '0'},
            {selected: false, line: '1'},
            {selected: false, line: '2'},
            {selected: false, line: '3'},
            {selected: false, line: '4'},
            {selected: false, line: '5'},
            {selected: false, line: '6'},
            {selected: false, line: '7'},
            {selected: false, line: '8'},
            {selected: false, line: '9'},
            {selected: false, line: '10'},
            {selected: false, line: '11'},
            {selected: false, line: '12'},
            {selected: false, line: '13'},
            {selected: false, line: '14'},
            {selected: false, line: '15'}
        ]

        beforeEach(() => {
            bingoButtons.forEach(button => button.selected = false);
        });
        it('in vertical', () => {
            bingoButtons[0].selected = true;
            bingoButtons[1].selected = true;
            bingoButtons[2].selected = true;
            bingoButtons[3].selected = true;

            expect(isVictory(bingoButtons, Size.MEDIUM)).toBeTruthy();
        })
        it('in horizontal', () => {
            bingoButtons[0].selected = true;
            bingoButtons[4].selected = true;
            bingoButtons[8].selected = true;
            bingoButtons[12].selected = true;

            expect(isVictory(bingoButtons, Size.MEDIUM)).toBeTruthy();
        })
        it('in diagonal left to right', () => {
            bingoButtons[0].selected = true;
            bingoButtons[5].selected = true;
            bingoButtons[10].selected = true;
            bingoButtons[15].selected = true;

            expect(isVictory(bingoButtons, Size.MEDIUM)).toBeTruthy();
        })
        it('in diagonal right to left', () => {
            bingoButtons[4].selected = true;
            bingoButtons[7].selected = true;
            bingoButtons[10].selected = true;
            bingoButtons[12].selected = true;

            expect(isVictory(bingoButtons, Size.MEDIUM)).toBeTruthy();
        })
    })

    describe('large', () => {
        const bingoButtons: Array<BingoButton> = [
            {selected: false, line: '0'},
            {selected: false, line: '1'},
            {selected: false, line: '2'},
            {selected: false, line: '3'},
            {selected: false, line: '4'},
            {selected: false, line: '5'},
            {selected: false, line: '6'},
            {selected: false, line: '7'},
            {selected: false, line: '8'},
            {selected: false, line: '9'},
            {selected: false, line: '10'},
            {selected: false, line: '11'},
            {selected: false, line: '12'},
            {selected: false, line: '13'},
            {selected: false, line: '14'},
            {selected: false, line: '15'},
            {selected: false, line: '16'},
            {selected: false, line: '17'},
            {selected: false, line: '18'},
            {selected: false, line: '19'},
            {selected: false, line: '20'},
            {selected: false, line: '21'},
            {selected: false, line: '22'},
            {selected: false, line: '23'},
            {selected: false, line: '24'},
        ]

        beforeEach(() => {
            bingoButtons.forEach(button => button.selected = false);
        });
        it('in vertical', () => {
            bingoButtons[0].selected = true;
            bingoButtons[1].selected = true;
            bingoButtons[2].selected = true;
            bingoButtons[3].selected = true;
            bingoButtons[4].selected = true;

            expect(isVictory(bingoButtons, Size.LARGE)).toBeTruthy();
        })
        it('in horizontal', () => {
            bingoButtons[0].selected = true;
            bingoButtons[5].selected = true;
            bingoButtons[10].selected = true;
            bingoButtons[15].selected = true;
            bingoButtons[20].selected = true;

            expect(isVictory(bingoButtons, Size.LARGE)).toBeTruthy();
        })
        it('in diagonal left to right', () => {
            bingoButtons[0].selected = true;
            bingoButtons[6].selected = true;
            bingoButtons[12].selected = true;
            bingoButtons[18].selected = true;
            bingoButtons[24].selected = true;

            expect(isVictory(bingoButtons, Size.LARGE)).toBeTruthy();
        })
        it('in diagonal right to left', () => {
            bingoButtons[4].selected = true;
            bingoButtons[8].selected = true;
            bingoButtons[12].selected = true;
            bingoButtons[16].selected = true;
            bingoButtons[20].selected = true;

            expect(isVictory(bingoButtons, Size.LARGE)).toBeTruthy();
        })
    })
});