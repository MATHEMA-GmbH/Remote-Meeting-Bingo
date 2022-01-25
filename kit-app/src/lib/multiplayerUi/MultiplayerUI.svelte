<script lang="ts">
    import Communication from "$lib/network/communication";
    import {Size} from "$lib/BingoGrid/bingoLines";
    import type {ConnectMessage, Message} from "$lib/network/messages";
    import {MessageTypes} from "$lib/network/messages";
    import {buildPeerSelections} from "$lib/multiplayerUi/multiplayerUtilities";

    export let multiplayerActive = false;
    export let size: Size;
    export let multiplayerSize;

    let communication: Communication;
    let peerId;
    let peerSelections;

    $: peerIdLabel = multiplayerActive ? 'Mit dieser ID zum Spiel einladen:' : 'Einladungs-ID eingeben:'


    const dataCallback = (message: Message) => {
        switch (message.type) {
            case MessageTypes.CLICK: return;
            case MessageTypes.CONNECT: {
                multiplayerSize = (message as ConnectMessage).size;
                peerSelections = buildPeerSelections(size);
                return;
            }
            default: console.log(message);
        }
    }

    const activateMultiplayer = () => {
        communication = new Communication({
            size,
            dataCallback
        });
        multiplayerActive = true;
        multiplayerSize = size;
        peerSelections = buildPeerSelections(size);
    }

    const joinMultiplayer = () => {
        communication = new Communication({
            size,
            dataCallback,
            peerId
        });
        multiplayerActive = true;
    }
</script>

<div>
    <div>
        <button class="button" on:click={activateMultiplayer} disabled="{multiplayerActive}">Mehrspielerspiel Beginnen</button>
        <p>Bitte wähle die gewünschte Schwierigkeit aus, bevor ein Mehrspielerspiel begonnen wird</p>
        <label for="peerId">{peerIdLabel}</label>
        <input name="peerId" id="peerId" disabled="{multiplayerActive}" bind:value={peerId}>
        <button class="button" on:click={joinMultiplayer} disabled="{multiplayerActive}">Mehrspielerspiel beitreten</button>
    </div>
    {#if multiplayerActive}
        <hr>
        <div class="peer-grid {size}">
            {#each peerSelections as peerSelected (peerSelected.index)}
                <div class:selected="{peerSelected.selected}" class="peerSelection"></div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .peer-grid {
        display: grid;
        column-gap: 5px;
        row-gap: 5px;
        width: 100%;
    }

    .peerSelection {
        height: 25px;
        width: 25px;
        border: 1px solid rgba(27, 31, 35, 0.15);
        border-radius: 6px;
        box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
        box-sizing: border-box;
    }

    .selected {
        background-color: var(--accent-color);
    }
</style>
