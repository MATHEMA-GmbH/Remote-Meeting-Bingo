<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
import SizeSelection from "$lib/SizeSelection.svelte";
import BingoGrid from "$lib/BingoGrid/BingoGrid.svelte";
import MultiplayerUi from "$lib/multiplayerUi/MultiplayerUI.svelte";

let selectedSize;
let multiplayerActive;
let multiplayerSize;

$: actualSize = multiplayerActive ? multiplayerSize : selectedSize;

</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Remote-Meeting-Bingo</h1>
<section>
	<div class="menu">
		<SizeSelection bind:selectedSize/>
		<MultiplayerUi bind:multiplayerActive bind:multiplayerSize size="{selectedSize}"/>
	</div>
	<BingoGrid size="{selectedSize}"/>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.menu {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>
