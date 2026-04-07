<button
	class="scroll-to-top"
	on:click={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth', block: 'start' })}
	aria-label="맨 위로 이동"
>
	↑
</button>

<style>
	.scroll-to-top {
		position: absolute;
		bottom: 30px;
		right: 30px;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: #2c5282;
		color: white;
		border: none;
		font-size: 1.4rem;
		cursor: pointer;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		transition: all 0.3s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.scroll-to-top:hover {
		background: #1a365d;
		transform: translateY(-3px);
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
	}
</style>
