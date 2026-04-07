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

<style>
	.worship-groups {
		display: flex;
		flex-direction: column;
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
</style>
