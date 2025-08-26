<script>
	import { onMount } from 'svelte';

	let scrollY = 0;
	let innerHeight = 0;

	// 스크롤 이벤트 핸들러
	function handleScroll() {
		const sections = document.querySelectorAll('.section');
		sections.forEach((section, index) => {
			const rect = section.getBoundingClientRect();
			if (rect.top < innerHeight * 0.8) {
				section.classList.add('visible');
			}
		});
	}

	onMount(() => {
		// 초기 로딩 시 첫 번째 섹션을 보이게 함
		const firstSection = document.querySelector('.section');
		if (firstSection) {
			firstSection.classList.add('visible');
		}

		new daum.roughmap.Lander({
			"timestamp" : "1754235915494",
			"key" : "6rbx9jebbo2",
			"mapWidth" : "100%", // 반응형으로 설정
			"mapHeight" : "100%"  // 반응형으로 설정
		}).render();





	});
</script>

<svelte:window bind:scrollY bind:innerHeight on:scroll={handleScroll} />

	<!-- 히어로 섹션 -->
<section class="hero section visible" id="hero">
	<div class="hero-overlay"></div>
	<video class="hero-video" autoplay muted loop>
		<source src="/background.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	<div class="hero-content">
		<div class="hero-text">
			<h1>"내가 이 반석 위에 내 교회를 세우리니"</h1>
			<p>(마16:18)</p>
			<h2>여산중앙교회</h2>
		</div>
		<div class="hero-actions">
			<button class="action-btn primary" on:click={() => document.getElementById('new-section').scrollIntoView({ behavior: 'smooth', block: 'start' })}>교회소개</button>
			<button class="action-btn secondary" on:click={() => document.getElementById('worship').scrollIntoView({ behavior: 'smooth', block: 'start' })}>예배안내</button>
			<button class="action-btn secondary" on:click={() => document.getElementById('sermon').scrollIntoView({ behavior: 'smooth', block: 'start' })}>예배영상</button>
			<button class="action-btn secondary" on:click={() => document.getElementById('road').scrollIntoView({ behavior: 'smooth', block: 'start' })}>오시는길</button>
		</div>
	</div>
</section>
<!-- 교회소개 섹션 -->
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
</section>

<!-- 예배안내 섹션 -->
<section class="section worship" id="worship">
	<div class="container">
		<h2 class="section-title">예배 안내</h2>
		<div class="worship-groups">
			<div class="worship-group">
				<h3>장년 예배</h3>
				<div class="worship-schedule">
					<div class="schedule-card">
						<h3>새벽기도회</h3>
						<p class="time">오전 05:00</p>
						<p class="location">본당</p>
					</div>
					<div class="schedule-card">
						<h3>주일 오전예배</h3>
						<p class="time">오전 10:30</p>
						<p class="location">본당</p>
					</div>
					<div class="schedule-card">
						<h3>주일 오후예배</h3>
						<p class="time">오후 3:00</p>
						<p class="location">본당</p>
					</div>
					<div class="schedule-card">
						<h3>수요예배</h3>
						<p class="time">오후 7:30</p>
						<p class="location">본당</p>
					</div>
					<div class="schedule-card">
						<h3>만나공동체</h3>
						<p class="time">오후 12:30</p>
						<p class="location">교육관(식당)</p>
					</div>
					<div class="schedule-card">
						<h3>구역공동체</h3>
						<p class="time">정해진 시간</p>
						<p class="location">정해진 장소</p>
					</div>
				</div>
			</div>
			<div class="worship-group">
				<h3>다음세대 예배</h3>
				<div class="worship-schedule">
					<div class="schedule-card">
						<h3>주일학교</h3>
						<p class="time">주일 오전 11:45</p>
						<p class="location">교육관</p>
					</div>
					<div class="schedule-card">
						<h3>청소년부</h3>
						<p class="time">주일 오전 11:45</p>
						<p class="location">본당</p>
					</div>
					<div class="schedule-card">
						<h3>청년부</h3>
						<p class="time">주일 오후 02:00</p>
						<p class="location">교육관</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- 예배영상 섹션 -->
<section class="section sermon" id="sermon">
	<div class="container">
		<h2 class="section-title">금주의 말씀</h2>
		<p class="sermon-info">담임목사의 주일예배 영상을 보실 수 있습니다.</p>
		<div class="sermon-details">
			<h3 class="sermon-title">기도로 지켜낸 한나 (사무엘상 1:1-20)</h3>
			<p class="sermon-meta">설교자: 윤찬영 목사 / 설교일: 2025-08-24</p>
			<div class="sermon-actions">
				<button class="action-btn primary" on:click={() => window.open('https://www.youtube.com/watch?v=3SZ36B6fJo4', '_blank')}>설교말씀보기</button>
				<button class="action-btn secondary" on:click={() => window.open('https://www.youtube.com/@%EB%8C%80%ED%95%9C%EC%98%88%EC%88%98%EA%B5%90%EC%9E%A5%EB%A1%9C%ED%9A%8C%EC%97%AC%EC%82%B0/featured', '_blank')}>영상더보기</button>
			</div>
		</div>
	</div>
</section>

<!-- 오시는길 섹션 -->
<section class="section road" id="road">
	<div class="container">
		<h2 class="section-title">오시는 길</h2>
		<div id="daumRoughmapContainer1754235915494" class="root_daum_roughmap root_daum_roughmap_landing"></div>
	</div>
</section>

<style>
	/* 전역 스타일 */
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	.section {
		padding: 100px 0;
		opacity: 0;
		transform: translateY(50px);
		transition: all 0.8s ease;
	}

	.section.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.section-title {
		text-align: center;
		font-size: 2.5rem;
		color: #2c5282;
		margin-bottom: 60px;
		position: relative;
	}

	.section-title::after {
		content: '';
		position: absolute;
		bottom: -15px;
		left: 50%;
		transform: translateX(-50%);
		width: 60px;
		height: 3px;
		background: #2c5282;
	}

	/* 히어로 섹션 */
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		color: white;
		overflow: hidden;
	}

	.hero-video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 0;
	}

	.hero-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.4);
		z-index: 1;
	}

	.hero-content {
		position: relative;
		z-index: 2;
		text-align: center;
		max-width: 1000px;
		padding: 0 20px;
	}

	.hero-text h1 {
		font-size: 3.5rem;
		margin-bottom: 20px;
		font-weight: 700;
	}

	.hero-text p {
		font-size: 1.5rem;
		margin-bottom: 10px;
		opacity: 0.9;
	}

	.hero-text h2 {
		font-size: 4rem;
		margin-bottom: 40px;
		font-weight: 800;
	}

	.hero-actions {
		display: flex;
		gap: 15px;
		flex-wrap: wrap;
		justify-content: center;
	}

	.action-btn {
		padding: 15px 30px;
		border: none;
		border-radius: 8px;
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.action-btn.primary {
		background: white;
		color: #2c5282;
	}

	.action-btn.secondary {
		background: transparent;
		color: white;
		border: 2px solid white;
	}

	.action-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
	}

	/* 예배안내 섹션 */
	.worship-groups {
		display: flex;
		flex-direction: column; /* 상하로 구분 */
		gap: 50px;
		justify-content: center;
	}

	.worship-group {
		flex: 1;
		min-width: 300px;
	}

	.worship-group h3 {
		text-align: center;
		font-size: 1.8rem;
		color: #2c5282;
		margin-bottom: 20px;
	}

	.worship-schedule {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 30px;
	}

	.schedule-card {
		background: white;
		padding: 40px 30px;
		border-radius: 12px;
		text-align: center;
		box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
		border-top: 4px solid #2c5282;
	}

	.schedule-card h3 {
		color: #2c5282;
		font-size: 1.3rem;
		margin-bottom: 15px;
	}

	.time {
		font-size: 1.5rem;
		font-weight: 600;
		color: #333;
		margin-bottom: 10px;
	}

	.location {
		color: #666;
	}

	/* 예배영상 섹션 스타일 */
	.sermon {
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

	.action-btn.primary {
		background: #2c5282;
		color: white;
		padding: 10px 20px;
		border-radius: 5px;
		font-size: 1rem;
		cursor: pointer;
		transition: background 0.3s ease;
	}

	.action-btn.primary:hover {
		background: #1a365d;
	}

	.action-btn.secondary {
		background: transparent;
		color: #2c5282;
		border: 2px solid #2c5282;
		padding: 10px 20px;
		border-radius: 5px;
		font-size: 1rem;
		cursor: pointer;
		transition: background 0.3s ease, color 0.3s ease;
	}

	.action-btn.secondary:hover {
		background: #2c5282;
		color: white;
	}

	/* 오시는길 섹션 */
	.road {
		background: white;
	}

	/* 새로운 섹션 스타일 */
	.new-section {
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

	.new-section .section-title {
		color: white;
	}

	.new-section .section-title::after {
		background: white;
	}

	.new-section .subtitle {
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

	/* 오시는 길 섹션 반응형 스타일 */
	#daumRoughmapContainer1754235915494 {
		width: 100%;
		height: auto; /* 높이를 자동으로 조정 */
		min-height: 500px; /* 최소 높이 설정 */
		position: relative;
	}

	/* 반응형 디자인 */
	@media (max-width: 768px) {
		.hero {
			background-attachment: scroll; /* 모바일에서는 fixed 배경 제거 */
		}

		.new-section {
			background-attachment: scroll; /* 모바일에서는 fixed 배경 제거 */
		}

		.hero-text h1 {
			font-size: 2.5rem;
		}

		.hero-text h2 {
			font-size: 3rem;
		}

		.hero-text p {
			font-size: 1.2rem;
		}

		.section-title {
			font-size: 2rem;
		}

		.action-btn {
			padding: 12px 20px;
			font-size: 14px;
		}

		.section {
			padding: 60px 0;
		}
	}
</style>
