<script>
	import { onMount } from 'svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';

	onMount(() => {
		new daum.roughmap.Lander({
			timestamp: '1754235915494',
			key: '6rbx9jebbo2',
			mapWidth: '100%',
			mapHeight: '100%'
		}).render();
	});
</script>

<section class="section road" id="road">
	<div class="container">
		<h2 class="section-title">오시는 길</h2>
		<div
			id="daumRoughmapContainer1754235915494"
			class="root_daum_roughmap root_daum_roughmap_landing"
		></div>
	</div>
	<ScrollToTop />
</section>

<style>
	.road {
		position: relative;
		background: white;
	}

	#daumRoughmapContainer1754235915494 {
		width: 100%;
		height: auto;
		min-height: 500px;
		position: relative;
	}
</style>
