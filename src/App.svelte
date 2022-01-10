<script>
	import Directory from './0_Directory.svelte';
	import AppBody from './0_AppBody.svelte';
	import Footer from './Footer.svelte';

	
	let directories = ['About', 'Resume', 'Projects', 'Contact'];
	let directoryCurrent = 'About';
	
</script>

<div>
	<Directory bind:DirectoryCurrent={directoryCurrent} DirectoryList={directories}/>
	<br>
	<AppBody currentDirectory={directoryCurrent}/>
	<Footer />
</div>

<style>
	:global(:root) {
    --background-color: #fff1d0;
    --primary-color: #000;
    --recruit-color: #FC6DAB; /* FC6DAB */
    --shelf-color: #3FDE9F; /* 99EDCC */
    --reference-color: #539BF3; /* 9AC4F8 */
	}

	:global(html) {
    height: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

	:global(body) {
    background-color: var(--background-color);
    overflow:auto;
    display: flex;
    flex-direction: column;
}
	
	:gloval(div){
    padding: 0;
    margin: 0;
	}
	:global(.About) {
    --primary-color: #FC6DAB;
}

	:global(.Projects) {
    --primary-color: #fff875;
}

	:global(.Contact) {
    --primary-color: #3FDE9F;
}

	:global(.Resume) {
    --primary-color: #539BF3;
}
	
	:global(.Other) {
    --primary-color: #ffb94a;
}

	:global(.Admin) {
    --primary-color: #A070FF;
}
</style>