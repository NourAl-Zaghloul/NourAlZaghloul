<script>
	let text = [
		"Hi, I'm Nour al-Zaghloul -- Nice to meet you! :wave:",
		"Welcome to my portfolio page.",
		"I've focused largely on making technology, research, and data interactive, accessible, and convienent!",
		"This is for many demographics: Technical Experts, Actual Workers in the Field, Lay people, and children.",
		"I'd love to do more data-based projects, but am also looking forward to expanding my abilities in other areas of specialization", 
		"such as... "
	]
	
	let textUpdate = 2000;
	let time = {
		last: 0,
		current: 0,
		delta: 0,
		cumulative: 0,
		steps: 0,
	}
	
	function resetTexts(){
		// TODO: Fix!
		time = {
			last: 0,
			current: 0,
			delta: 0,
			cumulative: 0,
			steps: 0,
		};
		
		text=[...text];
		
		window.requestAnimationFrame(updateText);
	}
	
	function createText(step){
		document.getElementById(`txt-${step}`).classList.remove('hideme');
	}
	
	function completeTexts(){
		for(let i=time.steps; i<text.length; i++){
			createText(i);
		}
		
		time.steps = text.length + 100;
	}
	
	function updateText(step){
		time.last = time.current;
		time.current = step;
		if(time.last == 0){time.last = time.current};
		time.delta = time.current - time.last;
		time.cumulative += time.delta;
		
		if(time.cumulative > textUpdate){
			time.cumulative = 0;
			
			createText(time.steps)
			
			time.steps++;
			time.updateAnimation = true;
		}
		
		if(time.steps < text.length){
			window.requestAnimationFrame(updateText);
		} else {
			console.log('finished texts!')
		}
	}
	
	window.requestAnimationFrame(updateText);
</script>

<div id='AboutPage' class="About">
	<!--  TODO: Make Look Nicer
	<button on:click={completeTexts}>
		Skip to End
	</button>
  -->
	<!-- TODO: IMPLEMENT!
	<button on:click={resetTexts}>
		Reset
	</button>
	-->
	<!--
	<label>
		Text Update Speed
		<input type='range' min="100" max="10000" bind:value={textUpdate}>
		{textUpdate}ms
	</label>
	-->
	<div id='txts'>
		{#each text as txt, i}
			<p class='msg hideme' id={`txt-${i}`}>
				{txt}	
			</p>
		{/each}
	</div>
</div>


<style>
	.msg {
		border-radius: 1.25rem;
		padding: 12px;
		margin: 12px;
		width: 60%;
		background: #fff1d0;
		transition: all 250ms ease-in;
	}

	.hideme {
		display: none;
	}

	#AboutPage {
		background: var(--primary-color);
		height: 100%;
    padding: 0px;
    transform: translateY(-12px) translateX(0px);
	}
</style>