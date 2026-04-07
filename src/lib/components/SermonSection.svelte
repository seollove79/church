<script>
	import { onMount } from 'svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';

	let title = '';
	let meta = '';
	let videoUrl = '';
	let isLoading = true;

	let isModalOpen = false;
	let errorMsg = '';
	let draft = { title: '', meta: '', videoUrl: '' };

	onMount(async () => {
		try {
			const res = await fetch('/api/sermon');
			const data = await res.json();
			title = data.title;
			meta = data.meta;
			videoUrl = data.videoUrl;
		} catch {
			title = '데이터를 불러오지 못했습니다.';
		} finally {
			isLoading = false;
		}
	});

	function openModal() {
		draft = { title, meta, videoUrl };
		errorMsg = '';
		isModalOpen = true;
	}

	function closeModal() {
		isModalOpen = false;
	}

	async function save() {
		if (!draft.title || !draft.meta || !draft.videoUrl) {
			errorMsg = '모든 항목을 입력해주세요.';
			return;
		}

		// 화면 즉시 반영 후 모달 닫기
		title = draft.title;
		meta = draft.meta;
		videoUrl = draft.videoUrl;
		closeModal();

		// 백그라운드에서 파일에 저장
		fetch('/api/sermon', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(draft)
		}).catch(() => {
			console.error('설교 정보 저장에 실패했습니다.');
		});
	}

	function handleBackdropClick(e) {
		if (e.target === e.currentTarget) closeModal();
	}
</script>

<section class="section sermon" id="sermon">
	<div class="container">
		<h2 class="section-title">
			금주의 말<span class="admin-trigger" on:click={openModal} title="설교 정보 수정">씀</span>
		</h2>
		<p class="sermon-info">담임목사의 주일예배 영상을 보실 수 있습니다.</p>
		<div class="sermon-details">
			{#if isLoading}
				<p class="loading">불러오는 중...</p>
			{:else}
				<h3 class="sermon-title">{title}</h3>
				<p class="sermon-meta">{meta}</p>
				<div class="sermon-actions">
					<button
						class="action-btn primary"
						on:click={() => window.open(videoUrl, '_blank')}
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
			{/if}
		</div>
	</div>
	<ScrollToTop />
</section>

<!-- 관리 모달 -->
{#if isModalOpen}
	<div class="modal-backdrop" on:click={handleBackdropClick}>
		<div class="modal">
			<div class="modal-header">
				<h3>설교 정보 수정</h3>
				<button class="modal-close" on:click={closeModal}>✕</button>
			</div>
			<div class="modal-body">
				<label>
					<span>설교 제목</span>
					<input
						type="text"
						bind:value={draft.title}
						placeholder="제목 (성경 본문)"
					/>
				</label>
				<label>
					<span>설교 정보</span>
					<input
						type="text"
						bind:value={draft.meta}
						placeholder="설교자: 홍길동 목사 / 설교일: YYYY-MM-DD"
					/>
				</label>
				<label>
					<span>YouTube URL</span>
					<input
						type="url"
						bind:value={draft.videoUrl}
						placeholder="https://www.youtube.com/watch?v=..."
					/>
				</label>
				{#if errorMsg}
					<p class="error-msg">{errorMsg}</p>
				{/if}
			</div>
			<div class="modal-footer">
				<button class="btn-cancel" on:click={closeModal}>취소</button>
				<button class="btn-save" on:click={save}>저장</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.sermon {
		position: relative;
		background: #f8f9fa;
		padding: 80px 0;
		text-align: center;
	}

	.admin-trigger {
		cursor: pointer;
		border-bottom: 2px dotted transparent;
		transition: border-color 0.2s;
	}

	.admin-trigger:hover {
		border-bottom-color: #2c5282;
	}

	.loading {
		color: #999;
		font-size: 1rem;
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

	/* 모달 */
	.modal-backdrop {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 2000;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.modal {
		background: white;
		border-radius: 12px;
		width: 100%;
		max-width: 500px;
		margin: 20px;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
	}

	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 24px;
		border-bottom: 1px solid #eee;
	}

	.modal-header h3 {
		font-size: 1.2rem;
		color: #2c5282;
		font-weight: 700;
	}

	.modal-close {
		background: none;
		border: none;
		font-size: 1.2rem;
		cursor: pointer;
		color: #666;
		padding: 4px 8px;
		border-radius: 4px;
		transition: background 0.2s;
	}

	.modal-close:hover {
		background: #f0f0f0;
	}

	.modal-body {
		padding: 24px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.modal-body label {
		display: flex;
		flex-direction: column;
		gap: 6px;
		text-align: left;
	}

	.modal-body span {
		font-size: 0.85rem;
		font-weight: 600;
		color: #555;
	}

	.modal-body input {
		padding: 10px 12px;
		border: 1px solid #ddd;
		border-radius: 6px;
		font-size: 0.95rem;
		transition: border-color 0.2s;
		width: 100%;
	}

	.modal-body input:focus {
		outline: none;
		border-color: #2c5282;
	}

	.modal-body input:disabled {
		background: #f9f9f9;
		color: #999;
	}

	.error-msg {
		color: #e53e3e;
		font-size: 0.875rem;
		text-align: left;
	}

	.modal-footer {
		display: flex;
		justify-content: flex-end;
		gap: 10px;
		padding: 16px 24px;
		border-top: 1px solid #eee;
	}

	.btn-cancel {
		padding: 10px 20px;
		border-radius: 6px;
		border: 1px solid #ddd;
		background: white;
		color: #555;
		font-size: 0.95rem;
		cursor: pointer;
		transition: background 0.2s;
	}

	.btn-cancel:hover:not(:disabled) {
		background: #f5f5f5;
	}

	.btn-save {
		padding: 10px 20px;
		border-radius: 6px;
		border: none;
		background: #2c5282;
		color: white;
		font-size: 0.95rem;
		font-weight: 600;
		cursor: pointer;
		transition: background 0.2s;
	}

	.btn-save:hover:not(:disabled) {
		background: #1a365d;
	}

	.btn-save:disabled,
	.btn-cancel:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
</style>
