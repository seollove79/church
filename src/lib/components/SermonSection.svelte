<script>
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
</script>

<section class="section sermon" id="sermon">
	<div class="container">
		<h2 class="section-title">금주의 말씀</h2>
		<p class="sermon-info">담임목사의 주일예배 영상을 보실 수 있습니다.</p>
		<div class="sermon-details">
			<h3 class="sermon-title">다니엘이 전한 하나님 아버지의 마음 (다니엘 2:20-23)</h3>
			<p class="sermon-meta">설교자: 윤찬영 목사 / 설교일: 2025-11-23</p>
			<div class="sermon-actions">
				<button
					class="action-btn primary"
					on:click={() => window.open('https://www.youtube.com/watch?v=wAQLPjgix_4', '_blank')}
				>설교말씀보기</button>
				<button
					class="action-btn secondary"
					on:click={() =>
						window.open(
							'https://www.youtube.com/@%EB%8C%80%ED%95%9C%EC%98%88%EC%88%98%EA%B5%90%EC%9E%A5%EB%A1%9C%ED%9A%8C%EC%97%AC%EC%82%B0/featured',
							'_blank'
						)}
				>영상더보기</button>
			</div>
		</div>
	</div>
	<ScrollToTop />
</section>

<style>
	.sermon {
		position: relative;
		background: #f8f9fa;
		padding: 80px 0;
		text-align: center;
	}

	.sermon-info {
		font-size: 1.2rem;
		color: #666;
		margin-bottom: 20px;
	}

	.sermon-title {
		font-size: 2rem;
		color: #2c5282;
		margin-bottom: 10px;
		font-weight: bold;
	}

	.sermon-meta {
		font-size: 1rem;
		color: #333;
		margin-bottom: 30px;
	}

	.sermon-actions {
		display: flex;
		gap: 15px;
		justify-content: center;
	}

	.action-btn {
		padding: 10px 20px;
		border-radius: 5px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		border: none;
		transition: all 0.3s ease;
	}

	.action-btn.primary {
		background: #2c5282;
		color: white;
	}

	.action-btn.primary:hover {
		background: #1a365d;
	}

	.action-btn.secondary {
		background: transparent;
		color: #2c5282;
		border: 2px solid #2c5282;
	}

	.action-btn.secondary:hover {
		background: #2c5282;
		color: white;
	}
</style>
