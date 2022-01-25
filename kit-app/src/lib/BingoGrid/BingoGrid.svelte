<script lang="ts">
    import { fade } from 'svelte/transition';
    import {getNewBingoLines, Size} from "$lib/BingoGrid/bingoLines";
    import {isVictory} from "$lib/BingoGrid/bingoLogic";

    export let size: Size = null;

    function buildPlayboard(size: Size) {
        return getNewBingoLines(size).map(line => {
            return {
                selected: false,
                line
            };
        });
    }

    $: bingoButtons = buildPlayboard(size);
    $: victory = isVictory(bingoButtons, size);
</script>

{#if victory}
    <div transition:fade >
        <h3 class="victory">
            Gewonnen!
        </h3>
        <button class="button" on:click="{() => bingoButtons = buildPlayboard(size)}">Erneut spielen?</button>
    </div>
{/if}
<div class="bingo-grid {size}">
    {#each bingoButtons as bingoButton (bingoButton.line)}
        <button class="button bingobutton" class:selected="{bingoButton.selected}" role="button" disabled="{victory}"
                on:click="{() => bingoButton.selected = !bingoButton.selected}">
            {bingoButton.line}
        </button>
    {/each}
</div>

<style>
    .bingo-grid {
        display: grid;
        column-gap: 10px;
        row-gap: 10px;
        margin-top: 10em;
        width: 100%;
    }

    .bingobutton {
        white-space: normal;
        width: 100%;
    }

    .victory {
        text-align: center;
    }

</style>
