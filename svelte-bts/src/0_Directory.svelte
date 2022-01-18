<script>
	export let DirectoryList;
	export let DirectoryCurrent = DirectoryList[0];
	
	function changeDirectory(e){
		DirectoryCurrent = e.target.id;
		console.log(DirectoryCurrent);
	}
</script>

<div id="header">
	<div id="Directory">
		{#each DirectoryList as direct}
			{#if direct == DirectoryCurrent}
				<button on:click={changeDirectory} id={direct} class="Directory {direct} Selected">
					{direct}	
				</button>
			{:else}
				<button on:click={changeDirectory} id={direct} class="Directory {direct}">
					{direct}	
				</button>
			{/if}
		{/each}
	</div>
</div>


<style>
	button {
		min-width: 12%;
    font-size: 1rem;
    border: solid black 3px;
    padding: 12px;
    margin: 9px;
    box-shadow: 6px 6px 0px 0px rgba(0, 0, 0, .67);
    background-color: var(--primary-color);
	}
	button:hover {
    flex-grow: 2.4;
    font-size: 1.5rem;
	}

	.Selected {
    flex-grow: 2.4;
    box-shadow: 6px 6px 0px 3px rgba(0, 0, 0, 1);
    font-size: 1.5rem;
    transform: translateY(-12px);
    filter: brightness(100%)
	} 
	
	#Directory {
    border-bottom: black solid 3px;
    width: 100%;
	}
</style>