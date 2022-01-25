<script lang="ts">
    import {Size} from "$lib/BingoGrid/bingoLines";

    export let selectedSize: Size = Size.MEDIUM;
</script>

<div class="size-selection">
    <button class="button" class:selected="{selectedSize === Size.SMALL}" role="button" on:click="{() => selectedSize = Size.SMALL}">
        Einfach
    </button>
    <button class="button" class:selected="{selectedSize === Size.MEDIUM}" role="button" on:click="{() => selectedSize = Size.MEDIUM}">
        Mittel
    </button>
    <button class="button" class:selected="{selectedSize === Size.LARGE}" role="button" on:click="{() => selectedSize = Size.LARGE}">
        Schwer
    </button>
</div>

<style>
    .size-selection {
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 50px;
    }
</style>
