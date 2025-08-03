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
	});
</script>

<svelte:window bind:scrollY bind:innerHeight on:scroll={handleScroll} />

	<!-- 히어로 섹션 -->
<section class="hero section visible" id="hero">
	<div class="hero-overlay"></div>
	<div class="hero-content">
		<div class="hero-text">
			<h1>비전의 교회, 역동적인 사역</h1>
			<p>장성한 성장, 역동적 사역, 헌신된 증거</p>
			<h2>군산드림교회</h2>
		</div>
		<div class="hero-actions">
			<button class="action-btn primary">인사말</button>
			<button class="action-btn secondary">예배안내</button>
			<button class="action-btn secondary">주일설교</button>
			<button class="action-btn secondary">오시는길</button>
		</div>
	</div>
</section><!-- 교회안내 섹션 -->
<section class="section about" id="about">
	<div class="container">
		<h2 class="section-title">교회안내</h2>
		<div class="about-grid">
			<div class="about-card">
				<h3>비전</h3>
				<p>하나님의 영광을 위해 충만한 예배와 하나된 교제를 통해 장성한 성장을 이루어가는 교회</p>
			</div>
			<div class="about-card">
				<h3>사명</h3>
				<p>복음 전파와 제자 양성을 통해 하나님 나라를 확장해 나가는 교회</p>
			</div>
			<div class="about-card">
				<h3>핵심가치</h3>
				<p>예배 · 교제 · 성장 · 사역 · 증거</p>
			</div>
		</div>
	</div>
</section>

<!-- 예배안내 섹션 -->
<section class="section worship" id="worship">
	<div class="container">
		<h2 class="section-title">예배 안내</h2>
		<div class="worship-schedule">
			<div class="schedule-card">
				<h3>주일 대예배</h3>
				<p class="time">오전 11:00</p>
				<p class="location">본당</p>
			</div>
			<div class="schedule-card">
				<h3>주일 오후예배</h3>
				<p class="time">오후 2:00</p>
				<p class="location">본당</p>
			</div>
			<div class="schedule-card">
				<h3>수요예배</h3>
				<p class="time">오후 7:30</p>
				<p class="location">본당</p>
			</div>
			<div class="schedule-card">
				<h3>금요기도회</h3>
				<p class="time">오후 7:30</p>
				<p class="location">본당</p>
			</div>
		</div>
	</div>
</section>

<!-- 교회학교 섹션 -->
<section class="section education" id="education">
	<div class="container">
		<h2 class="section-title">교회학교</h2>
		<div class="education-departments">
			<div class="dept-card">
				<h3>유아부</h3>
				<p>만 3-5세</p>
				<p>주일 오전 11시</p>
			</div>
			<div class="dept-card">
				<h3>유치부</h3>
				<p>만 6-7세</p>
				<p>주일 오전 11시</p>
			</div>
			<div class="dept-card">
				<h3>초등부</h3>
				<p>초등학교 1-6학년</p>
				<p>주일 오전 11시</p>
			</div>
			<div class="dept-card">
				<h3>중고등부</h3>
				<p>중학교 1학년 - 고등학교 3학년</p>
				<p>주일 오전 11시</p>
			</div>
			<div class="dept-card">
				<h3>청년부</h3>
				<p>대학생 및 청년</p>
				<p>주일 오후 1시</p>
			</div>
		</div>
	</div>
</section>

<!-- 선교 섹션 -->
<section class="section mission" id="mission">
	<div class="container">
		<h2 class="section-title">선교</h2>
		<div class="mission-content">
			<div class="mission-type">
				<h3>국내선교</h3>
				<ul>
					<li>지역 복음화 사역</li>
					<li>농어촌 교회 지원</li>
					<li>도시 개척교회 후원</li>
				</ul>
			</div>
			<div class="mission-type">
				<h3>해외선교</h3>
				<ul>
					<li>아시아 선교</li>
					<li>아프리카 선교</li>
					<li>단기선교팀 파송</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- 양육/훈련 섹션 -->
<section class="section training" id="training">
	<div class="container">
		<h2 class="section-title">양육/훈련</h2>
		<div class="training-programs">
			<div class="program-card">
				<h3>새가족반</h3>
				<p>새로 등록하신 분들을 위한 기초 신앙교육</p>
			</div>
			<div class="program-card">
				<h3>성경공부</h3>
				<p>체계적인 성경 말씀 공부</p>
			</div>
			<div class="program-card">
				<h3>제자훈련</h3>
				<p>영적 성숙을 위한 집중 훈련</p>
			</div>
			<div class="program-card">
				<h3>리더훈련</h3>
				<p>교회 지도자 양성 과정</p>
			</div>
		</div>
	</div>
</section>

<!-- 나눔·복지 섹션 -->
<section class="section welfare" id="welfare">
	<div class="container">
		<h2 class="section-title">나눔·복지</h2>
		<div class="welfare-activities">
			<div class="activity-card">
				<h3>지역사회 봉사</h3>
				<p>어려운 이웃을 위한 나눔 활동</p>
			</div>
			<div class="activity-card">
				<h3>노인 돌봄</h3>
				<p>어르신들을 위한 방문 돌봄 사역</p>
			</div>
			<div class="activity-card">
				<h3>장학 사업</h3>
				<p>어려운 학생들을 위한 장학금 지원</p>
			</div>
		</div>
	</div>
</section>

<!-- 커뮤니티 섹션 -->
<section class="section community" id="community">
	<div class="container">
		<h2 class="section-title">커뮤니티</h2>
		<div class="community-grid">
			<div class="community-card">
				<h3>공지사항</h3>
				<ul>
					<li>새해 특별새벽기도회 안내</li>
					<li>교회학교 교사 모집</li>
					<li>주차장 이용 안내</li>
				</ul>
			</div>
			<div class="community-card">
				<h3>교회소식</h3>
				<ul>
					<li>선교지 소식</li>
					<li>새가족 소개</li>
					<li>행사 후기</li>
				</ul>
			</div>
			<div class="community-card">
				<h3>갤러리</h3>
				<p>교회 행사 및 활동 사진</p>
			</div>
		</div>
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
		background-image: url('/church_01.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		color: white;
		position: relative;
		overflow: hidden;
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
		max-width: 800px;
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

	/* 교회안내 섹션 */
	.about {
		background: #f8f9fa;
	}

	.about-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 30px;
	}

	.about-card {
		background: white;
		padding: 40px 30px;
		border-radius: 12px;
		text-align: center;
		box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;
	}

	.about-card:hover {
		transform: translateY(-5px);
	}

	.about-card h3 {
		font-size: 1.5rem;
		color: #2c5282;
		margin-bottom: 20px;
	}

	/* 예배안내 섹션 */
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

	/* 교회학교 섹션 */
	.education {
		background: #f8f9fa;
	}

	.education-departments {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 25px;
	}

	.dept-card {
		background: white;
		padding: 30px 20px;
		border-radius: 12px;
		text-align: center;
		box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1);
	}

	.dept-card h3 {
		color: #2c5282;
		margin-bottom: 15px;
		font-size: 1.2rem;
	}

	/* 선교 섹션 */
	.mission-content {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 50px;
	}

	.mission-type h3 {
		color: #2c5282;
		font-size: 1.5rem;
		margin-bottom: 20px;
	}

	.mission-type ul {
		list-style: none;
	}

	.mission-type li {
		padding: 10px 0;
		border-bottom: 1px solid #eee;
		position: relative;
		padding-left: 20px;
	}

	.mission-type li::before {
		content: '→';
		position: absolute;
		left: 0;
		color: #2c5282;
		font-weight: bold;
	}

	/* 양육/훈련 섹션 */
	.training {
		background: #f8f9fa;
	}

	.training-programs {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 30px;
	}

	.program-card {
		background: white;
		padding: 35px 25px;
		border-radius: 12px;
		text-align: center;
		box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
	}

	.program-card h3 {
		color: #2c5282;
		margin-bottom: 15px;
		font-size: 1.3rem;
	}

	/* 나눔·복지 섹션 */
	.welfare-activities {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 30px;
	}

	.activity-card {
		background: white;
		padding: 40px 30px;
		border-radius: 12px;
		text-align: center;
		box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
	}

	.activity-card h3 {
		color: #2c5282;
		margin-bottom: 15px;
		font-size: 1.3rem;
	}

	/* 커뮤니티 섹션 */
	.community {
		background: #f8f9fa;
	}

	.community-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 30px;
	}

	.community-card {
		background: white;
		padding: 40px 30px;
		border-radius: 12px;
		box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
	}

	.community-card h3 {
		color: #2c5282;
		margin-bottom: 20px;
		font-size: 1.3rem;
	}

	.community-card ul {
		list-style: none;
	}

	.community-card li {
		padding: 8px 0;
		border-bottom: 1px solid #f0f0f0;
		color: #666;
	}

	.community-card li:hover {
		color: #2c5282;
		cursor: pointer;
	}

	/* 반응형 디자인 */
	@media (max-width: 768px) {
		.hero {
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
