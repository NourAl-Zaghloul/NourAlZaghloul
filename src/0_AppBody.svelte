<script>
	export let currentDirectory;
	
	import About from './About.svelte';
	import Contact from './Contact.svelte';
	import Projects from './Projects.svelte';
	import Resume from './Resume.svelte';
</script>

<style>
		#AppBody {
			width: 85%;
			height: 85%;
			border: 2px solid black;
			background: white;
		}
	</style>

<div id='AppBody'>
	{#if currentDirectory === "About"}
		<About/>
	{:else if currentDirectory === "Contact"}
		<Contact />
	{:else if currentDirectory === "Projects"}
		<Projects />
	{:else if currentDirectory === "Resume/CV"}
		<Resume />
	{/if}
</div>