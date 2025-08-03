<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>여산중앙교회 - 충만한 예배, 하나된 교제</title>
	<meta name="description" content="충만한 예배, 하나된 교제, 장성한 성장, 역동적 사역, 헌신된 증거" />
</svelte:head>

<!-- 고정 상단 헤더 -->
<header class="header">
	<div class="header-container">
		<!-- 로고 영역 -->
		<div class="logo">
			<img src="/logo.png" alt="여산중앙교회" class="logo-img" />
			<span class="logo-text">여산중앙교회</span>
		</div>

		<!-- 메인 네비게이션 -->
		<nav class="nav">
			<ul class="nav-menu">
				<li class="nav-item">
					<a href="#about" class="nav-link">교회안내</a>
					<div class="dropdown">
						<a href="#vision">비전</a>
						<a href="#history">연혁</a>
						<a href="#pastor">담임목사</a>
						<a href="#location">찾아오시는 길</a>
					</div>
				</li>
				<li class="nav-item">
					<a href="#worship" class="nav-link">예배 방송</a>
					<div class="dropdown">
						<a href="#live">실시간 방송</a>
						<a href="#archive">설교 영상</a>
						<a href="#schedule">예배 시간</a>
					</div>
				</li>
				<li class="nav-item">
					<a href="#education" class="nav-link">교회학교</a>
					<div class="dropdown">
						<a href="#children">어린이부</a>
						<a href="#youth">청소년부</a>
						<a href="#young-adult">청년부</a>
					</div>
				</li>
				<li class="nav-item">
					<a href="#mission" class="nav-link">선교</a>
					<div class="dropdown">
						<a href="#domestic">국내선교</a>
						<a href="#overseas">해외선교</a>
						<a href="#support">선교후원</a>
					</div>
				</li>
				<li class="nav-item">
					<a href="#training" class="nav-link">양육/훈련</a>
					<div class="dropdown">
						<a href="#bible-study">성경공부</a>
						<a href="#discipleship">제자훈련</a>
						<a href="#leadership">리더훈련</a>
					</div>
				</li>
				<li class="nav-item">
					<a href="#welfare" class="nav-link">나눔·복지</a>
					<div class="dropdown">
						<a href="#community-service">지역봉사</a>
						<a href="#care">돌봄사역</a>
						<a href="#support-program">지원프로그램</a>
					</div>
				</li>
				<li class="nav-item">
					<a href="#community" class="nav-link">커뮤니티</a>
					<div class="dropdown">
						<a href="#notice">공지사항</a>
						<a href="#news">교회소식</a>
						<a href="#gallery">갤러리</a>
					</div>
				</li>
			</ul>
		</nav>

		<!-- 우측 유틸리티 메뉴 -->
		<div class="utility">
			<button class="search-btn">🔍</button>
			<a href="#login" class="login-link">로그인</a>
			<a href="#member" class="member-link">회원가입</a>
			<select class="language-select">
				<option value="ko">한국어</option>
				<option value="en">English</option>
			</select>
		</div>
	</div>
</header>

<!-- 메인 콘텐츠 -->
<main class="main-content">
	{@render children?.()}
</main>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.6;
		color: #333;
	}

	/* 헤더 스타일 */
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
		box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
		z-index: 1000;
		transition: all 0.3s ease;
	}

	.header-container {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20px;
		height: 80px;
	}

	/* 로고 스타일 */
	.logo {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.logo-img {
		width: 50px;
		height: 50px;
		object-fit: contain;
	}

	.logo-text {
		font-size: 24px;
		font-weight: 700;
		color: #2c5282;
	}

	/* 네비게이션 스타일 */
	.nav {
		flex: 1;
		display: flex;
		justify-content: center;
	}

	.nav-menu {
		display: flex;
		list-style: none;
		gap: 40px;
	}

	.nav-item {
		position: relative;
	}

	.nav-link {
		text-decoration: none;
		color: #333;
		font-size: 16px;
		font-weight: 500;
		padding: 10px 0;
		transition: color 0.3s ease;
		position: relative;
	}

	.nav-link:hover {
		color: #2c5282;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: -5px;
		left: 0;
		width: 0;
		height: 2px;
		background: #2c5282;
		transition: width 0.3s ease;
	}

	.nav-link:hover::after {
		width: 100%;
	}

	/* 드롭다운 메뉴 */
	.dropdown {
		position: absolute;
		top: 100%;
		left: 0;
		background: white;
		box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
		border-radius: 8px;
		padding: 15px;
		min-width: 200px;
		opacity: 0;
		visibility: hidden;
		transform: translateY(-10px);
		transition: all 0.3s ease;
	}

	.nav-item:hover .dropdown {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}

	.dropdown a {
		display: block;
		color: #666;
		text-decoration: none;
		padding: 8px 0;
		font-size: 14px;
		transition: color 0.3s ease;
	}

	.dropdown a:hover {
		color: #2c5282;
	}

	/* 유틸리티 메뉴 */
	.utility {
		display: flex;
		align-items: center;
		gap: 15px;
	}

	.search-btn {
		background: none;
		border: none;
		font-size: 18px;
		cursor: pointer;
		padding: 8px;
		border-radius: 50%;
		transition: background 0.3s ease;
	}

	.search-btn:hover {
		background: #f0f0f0;
	}

	.login-link,
	.member-link {
		text-decoration: none;
		color: #666;
		font-size: 14px;
		transition: color 0.3s ease;
	}

	.login-link:hover,
	.member-link:hover {
		color: #2c5282;
	}

	.language-select {
		border: 1px solid #ddd;
		border-radius: 4px;
		padding: 5px 10px;
		font-size: 12px;
		background: white;
		cursor: pointer;
	}

	/* 메인 콘텐츠 */
	.main-content {
		margin-top: 80px; /* 헤더 높이만큼 여백 */
		min-height: calc(100vh - 80px);
	}

	/* 반응형 디자인 */
	@media (max-width: 1024px) {
		.header-container {
			padding: 0 15px;
		}

		.nav-menu {
			gap: 25px;
		}

		.nav-link {
			font-size: 14px;
		}
	}

	@media (max-width: 768px) {
		.header-container {
			height: 60px;
		}

		.main-content {
			margin-top: 60px;
		}

		.logo-text {
			font-size: 20px;
		}

		.nav {
			display: none; /* 모바일에서는 햄버거 메뉴로 대체 필요 */
		}

		.utility {
			gap: 10px;
		}

		.login-link,
		.member-link {
			display: none; /* 모바일에서는 숨김 */
		}
	}
</style>
