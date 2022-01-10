<script>
	let projects = [
		{
			URL: 'google.com',
			Name: 'Google',
			Description: 'This is google',
			Thumbnail: 'https://img2.cgtrader.com/items/2590278/0572f24550/google-logo-v1-002-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg'
		},
		{
			URL: '#',
			Name: 'Simpleflix',
			Description: 'A netflix-like system for animals and small children so they can self select their own entertainment while keeping under moderated content. No weird youtube radicalization for the non-human primates! This also allows the admin to see the data of what videos and types of videos each user played often. Great for collecting data on attention or just giving your little ones something self-directed to do! Originally created with just vanilla JS, it now has been remade using Svelte and Strapi.',
			Thumbnail: 'https://img2.cgtrader.com/items/2590278/0572f24550/google-logo-v1-002-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg'
		},
		{
			URL: '#',
			Name: 'Research Participant Database System',
			Description: 'An incredibly detailed database system for keeping track of participants in experimental studies. Robust enough to include different users under different labs and each lab can have different pools of participants that have varied rules on how the system interacts with them. The frontend is simple enough that an undergraduate can easily use it without trouble. Created first in Filemaker, then remade using React before moving it to Svelte and Strapi.',
			Thumbnail: 'https://img2.cgtrader.com/items/2590278/0572f24550/google-logo-v1-002-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg'
		},
		{
			URL: '#',
			Name: 'Managed Entity Component System (MECS)',
			Description: 'A experiment engine framework that allowed labs for extreme customizable and low-level control in creating online experiments.',
			Thumbnail: 'https://img2.cgtrader.com/items/2590278/0572f24550/google-logo-v1-002-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg'
		},
		{
			URL: '#',
			Name: 'Simple Finance',
			Description: "A PWA that allows the user to easily get a grip on their financial situation. Focus on ease of use and privacy (all information lives on the user's device and we don't take specific information from them anyway)",
			Thumbnail: 'https://img2.cgtrader.com/items/2590278/0572f24550/google-logo-v1-002-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg'
		},
		{
			URL: '#',
			Name: 'Smart Timer',
			Description: "A PWA that allows the user to create intelligent timers ranging from a simple alarm (e.g. 'go off in 30 minutes'), a series of connected timers (e.g. those used in the pomodorro method), and randomized timers (e.g. 'the timer will go off between 20 and 40 minutes from now')",
			Thumbnail: 'https://img2.cgtrader.com/items/2590278/0572f24550/google-logo-v1-002-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg'
		},
		{
			URL: '#',
			Name: 'Progress Tracker',
			Description: "A PWA that allows the user to track how they're doing in their goals. The above 'Smart Timer' is incorporated into this project.",
			Thumbnail: 'https://img2.cgtrader.com/items/2590278/0572f24550/google-logo-v1-002-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg'
		}
	]
	
	projects.map((x, index) => x.id = index);
	
	console.log(projects);
</script>

<div id='ProjectsPage' class="Projects">
	{#each projects as box}
		<div class="projectBox" id={box.id}>
			<h3>
				<a href={box.URL}>{box.Name}</a>
			</h3>
			<img src={box.Thumbnail} alt="Thumbnail of {box.Name}">
			<p>
				{box.Description}
			</p>
		</div>
	{/each}
</div>


<style>
	#ProjectsPage {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: stretch;
		background: var(--primary-color);
		height: 100%;
	}
	
	.projectBox {
		border: 2px black solid;
		max-width: 30%;
	}
	
	img {
		width: 20vmin;
		height: 20vmin;
	}
</style>