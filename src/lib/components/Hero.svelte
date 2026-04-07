<section class="hero section visible" id="hero">
	<div class="hero-overlay"></div>
	<video class="hero-video" autoplay muted loop>
		<source src="/background_02.mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	<div class="hero-content">
		<div class="hero-text">
			<h1>"내가 이 반석 위에 내 교회를 세우리니"</h1>
			<p>(마16:18)</p>
			<h2>여산중앙교회</h2>
		</div>
		<div class="hero-actions">
			<button
				class="action-btn primary"
				on:click={() =>
					document.getElementById('new-section').scrollIntoView({ behavior: 'smooth', block: 'start' })}
			>교회소개</button>
			<button
				class="action-btn secondary"
				on:click={() =>
					document.getElementById('worship').scrollIntoView({ behavior: 'smooth', block: 'start' })}
			>예배안내</button>
			<button
				class="action-btn secondary"
				on:click={() =>
					document.getElementById('sermon').scrollIntoView({ behavior: 'smooth', block: 'start' })}
			>예배영상</button>
			<button
				class="action-btn secondary"
				on:click={() =>
					document.getElementById('road').scrollIntoView({ behavior: 'smooth', block: 'start' })}
			>오시는길</button>
		</div>
	</div>
</section>

<style>
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

	@media (max-width: 768px) {
		.hero {
			background-attachment: scroll;
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

		.action-btn {
			padding: 12px 20px;
			font-size: 14px;
		}
	}
</style>
