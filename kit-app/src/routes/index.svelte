<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
import SizeSelection from "$lib/SizeSelection.svelte";
import BingoGrid from "$lib/BingoGrid/BingoGrid.svelte";

let size;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Remote-Meeting-Bingo</h1>
<section>
	<SizeSelection bind:size/>
	<BingoGrid size="{size}"/>
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
</style>
