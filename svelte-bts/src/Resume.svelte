<script>
	let type = 'CV';
	let resumeFilters = {};
	let resumeDefault = {};
	
	function updatetype(choice){
		console.log(choice);
		if(choice !== type){
			type = choice
		};
	}
</script>

<div>
	{#if type == 'Resume'}
	<button id='type-Resume' class='selected' on:click={updatetype('Resume')}>
		Resume
	</button>
	<button id='type-CV' on:click={updatetype('CV')}>
		CV
	</button>
	<div id='ResumeFilters'>
		Build your own Resume!
	</div>
	{:else}
	<button id='type-Resume' on:click={updatetype('Resume')}>
		Resume
	</button>
	<button id='type-CV' class='selected' on:click={updatetype('CV')}>
		CV
	</button>
	{/if}
	<p>
		Resume/CV
	</p>
</div>


<style>
	.selected {
		background: green;
	}
</style>