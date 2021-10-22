<script lang="ts">
    import {Size} from "$lib/BingoGrid/bingoLines";

    export let size: Size = Size.MEDIUM;
</script>

<div class="size-selection">
    <button class="button" class:selected="{size === Size.SMALL}" role="button" on:click="{() => size = Size.SMALL}">
        Einfach
    </button>
    <button class="button" class:selected="{size === Size.MEDIUM}" role="button" on:click="{() => size = Size.MEDIUM}">
        Mittel
    </button>
    <button class="button" class:selected="{size === Size.LARGE}" role="button" on:click="{() => size = Size.LARGE}">
        Schwer
    </button>
</div>

<style>
    .size-selection {
        display: flex;
        flex-direction: row;
        justify-content: center;
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
        white-space: nowrap;
        word-wrap: break-word;
        margin: 2px;
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
