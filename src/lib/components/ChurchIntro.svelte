<script>
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
</script>

<section class="section new-section" id="new-section">
	<div class="container">
		<h2 class="section-title">교회소개</h2>
		<p class="subtitle">내가 이 반석 위에 내 교회를 세우리니 (마16:18)</p>
		<div class="new-section-content">
			<p>여산중앙교회는 대한예수교장로회 합동측 이리노회에 속한 교회(교회설립일 1960.5.20.)로,</p>
			<p>예수 그리스도의 복음을 바르게 알고, 바르게 믿고, 더 나아가 바르게 살기를 힘쓰는 신앙 공동체입니다.</p>
			<p>현재 윤찬영 목사가 시무하고 있으며,</p>
			<p>말씀 중심의 예배와 다음 세대, 지역 사회, 선교 활동에 힘쓰며,</p>
			<p>말씀대로 삶 속에서 살아내기 위해 힘쓰는 교회입니다.</p>
			<p style="margin-top: 10px;font-size: 1.4rem;font-weight: bold;color: orange;">담임목사 윤찬영</p>
		</div>
	</div>
	<ScrollToTop />
</section>

<style>
	.new-section {
		position: relative;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/bg_001.jpg');
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		padding: 80px 0;
		color: white;
		position: relative;
	}

	:global(.new-section .section-title) {
		color: white;
	}

	:global(.new-section .section-title::after) {
		background: white;
	}

	.subtitle {
		font-size: 1.7rem;
		color: #ffd700;
		text-align: center;
		margin-bottom: 20px;
	}

	.new-section-content {
		max-width: 800px;
		margin: 0 auto;
		line-height: 1.8;
		font-size: 1.2rem;
		color: white;
		text-align: center;
	}

	.new-section-content p {
		margin-bottom: 20px;
	}

	@media (max-width: 768px) {
		.new-section {
			background-attachment: scroll;
		}
	}
</style>
