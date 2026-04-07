<script>
	import Hero from '$lib/components/Hero.svelte';
	import ChurchIntro from '$lib/components/ChurchIntro.svelte';
	import WorshipSchedule from '$lib/components/WorshipSchedule.svelte';
	import SermonSection from '$lib/components/SermonSection.svelte';
	import MapSection from '$lib/components/MapSection.svelte';

	let innerHeight = 0;

	function handleScroll() {
		const sections = document.querySelectorAll('.section');
		sections.forEach((section) => {
			const rect = section.getBoundingClientRect();
			if (rect.top < innerHeight * 0.8) {
				section.classList.add('visible');
			}
		});
	}
</script>

<svelte:window bind:innerHeight on:scroll={handleScroll} />

<Hero />
<ChurchIntro />
<WorshipSchedule />
<SermonSection />
<MapSection />
