<script lang="ts">
    import {getNewBingoLines, Size} from "$lib/BingoGrid/bingoLines";

    export let size: Size = null;

    $: bingoButtons = getNewBingoLines(size).map(line => {
        return {
            selected: false,
            line
        }
    });
</script>

<div class="bingo-grid {size}">
    {#each bingoButtons as bingoButton (bingoButton.line)}
        <button class="button" class:selected="{bingoButton.selected}" role="button"
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

    .small {
        grid-template-columns: repeat(3, 33%);
        grid-template-rows: repeat(3, 1fr);
    }

    .medium {
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: repeat(4, 1fr);
    }

    .large {
        grid-template-columns: repeat(5, 20%);
        grid-template-rows: repeat(5, 1fr);
    }

    .button {
        appearance: none;
        background-color: #FAFBFC;
        border: 1px solid rgba(27, 31, 35, 0.15);
        border-radius: 6px;
        box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
        box-sizing: border-box;
        color: #24292E;
        cursor: pointer;
        display: inline-block;
        font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        list-style: none;
        padding: 6px 16px;
        position: relative;
        transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: middle;
        white-space: normal;
        word-wrap: break-word;
        margin: 2px;
        width: 100%;
    }

    @media only screen and (max-width: 600px) {
        button {
            padding: 1px !important;
            font-size: 10px !important;
        }
    }

    .button:hover {
        background-color: #F3F4F6;
        text-decoration: none;
        transition-duration: 0.1s;
    }

    .button:disabled {
        background-color: #FAFBFC;
        border-color: rgba(27, 31, 35, 0.15);
        color: #959DA5;
        cursor: default;
    }

    .button:active {
        background-color: #EDEFF2;
        box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
        transition: none 0s;
    }

    .button:focus {
        outline: 1px transparent;
    }

    .button:before {
        display: none;
    }

    .button::-webkit-details-marker {
        display: none;
    }

    .selected {
        background-color: var(--accent-color);
        color: white;
    }

</style>
