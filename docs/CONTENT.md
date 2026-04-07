# CONTENT.md — 콘텐츠 수정 가이드

코드를 몰라도 이 문서만 보면 주요 콘텐츠를 수정할 수 있습니다.
각 섹션은 독립된 컴포넌트 파일로 분리되어 있습니다.

---

## 1. 설교 영상 업데이트

### 방법 1 — 사이트에서 직접 수정 (권장)

1. 사이트에서 "금주의 말**씀**"의 "씀" 글자 클릭
2. 관리 모달에서 제목 / 설교 정보 / YouTube URL 입력
3. 저장 클릭 → 화면 즉시 반영, `sermons.json`에 자동 저장

### 방법 2 — 파일 직접 수정

**위치**: `src/lib/data/sermons.json`

```json
{
  "title": "설교 제목 (성경 본문)",
  "meta": "설교자 : 윤찬영 목사 / 설교일: YYYY-MM-DD",
  "videoUrl": "https://www.youtube.com/watch?v=VIDEO_ID"
}
```

> ⚠️ `title`, `meta`, `videoUrl` 키 이름은 변경하지 마세요.

### YouTube URL 찾는 방법

1. YouTube에서 설교 영상 페이지 접속
2. 주소창의 URL 복사: `https://www.youtube.com/watch?v=XXXXXXXXXXX`
3. URL 전체를 `videoUrl` 값에 붙여넣기

---

## 2. 예배 시간표 수정

**위치**: `src/lib/components/WorshipSchedule.svelte`

### 장년 예배 (6개)

각 카드 구조:
```svelte
<div class="schedule-card">
    <h3>새벽기도회</h3>          <!-- 예배명 -->
    <p class="time">오전 05:00</p>   <!-- 시간 -->
    <p class="location">본당</p>     <!-- 장소 -->
</div>
```

현재 장년 예배 목록:

| 예배명 | 시간 | 장소 |
|--------|------|------|
| 새벽기도회 | 오전 05:00 | 본당 |
| 주일 오전예배 | 오전 10:30 | 본당 |
| 주일 오후예배 | 오후 3:00 | 본당 |
| 수요예배 | 오후 7:30 | 본당 |
| 만나공동체 | 오후 12:30 | 교육관(식당) |
| 구역공동체 | 정해진 시간 | 정해진 장소 |

### 다음세대 예배 (3개)

현재 다음세대 예배 목록:

| 예배명 | 시간 | 장소 |
|--------|------|------|
| 주일학교 | 주일 오전 11:45 | 교육관 |
| 청소년부 | 주일 오전 11:45 | 본당 |
| 청년부 | 주일 오후 02:00 | 교육관 |

---

## 3. 교회소개 텍스트 수정

**위치**: `src/lib/components/ChurchIntro.svelte`

```svelte
<div class="new-section-content">
    <p>여산중앙교회는 대한예수교장로회 합동측 이리노회에 속한 교회(교회설립일 1960.5.20.)로,</p>
    <p>예수 그리스도의 복음을 바르게 알고, 바르게 믿고, 더 나아가 바르게 살기를 힘쓰는 신앙 공동체입니다.</p>
    <p>현재 윤찬영 목사가 시무하고 있으며,</p>
    <p>말씀 중심의 예배와 다음 세대, 지역 사회, 선교 활동에 힘쓰며,</p>
    <p>말씀대로 삶 속에서 살아내기 위해 힘쓰는 교회입니다.</p>
    <p style="...">담임목사 윤찬영</p>  <!-- 담임목사 이름 -->
</div>
```

---

## 4. 히어로 섹션 수정

**위치**: `src/lib/components/Hero.svelte`

### 슬로건 텍스트

```svelte
<h1>"내가 이 반석 위에 내 교회를 세우리니"</h1>
<p>(마16:18)</p>
<h2>여산중앙교회</h2>
```

### 배경 영상 변경

```svelte
<video class="hero-video" autoplay muted loop>
    <source src="/background_02.mp4" type="video/mp4">
</video>
```

사용 가능한 영상 파일 (`static/` 폴더):
- `background_02.mp4` — 현재 사용 중
- `background_01.mp4` — 예비 영상
- `background.mp4` — 예비 영상

파일명만 교체하면 영상을 바꿀 수 있습니다.

---

## 5. 헤더 수정

**위치**: `src/routes/+layout.svelte`

### 로고 및 교회명

```svelte
<img src="/logo.png" alt="여산중앙교회" class="logo-img" />
<span class="logo-text">여산중앙교회</span>
```

로고 이미지 교체 시 → `static/logo.png` 파일 교체

### 네비게이션 메뉴 항목

현재 7개 메뉴 (각 메뉴마다 드롭다운 3개):

| 메뉴 | 드롭다운 항목 |
|------|--------------|
| 교회안내 | 비전, 연혁, 담임목사, 찾아오시는 길 |
| 예배 방송 | 실시간 방송, 설교 영상, 예배 시간 |
| 교회학교 | 어린이부, 청소년부, 청년부 |
| 선교 | 국내선교, 해외선교, 선교후원 |
| 양육/훈련 | 성경공부, 제자훈련, 리더훈련 |
| 나눔·복지 | 지역봉사, 돌봄사역, 지원프로그램 |
| 커뮤니티 | 공지사항, 교회소식, 갤러리 |

> 현재 메뉴 링크는 `#anchor` 방식으로 연결되어 있으며, 실제 페이지는 추후 추가 예정

---

## 6. 오시는길 (카카오맵)

**위치**: `src/lib/components/MapSection.svelte`

> ⚠️ 카카오맵 설정은 임의로 수정하지 마세요.
> 지도 위치나 API key 변경이 필요한 경우 Claude에게 요청하세요.

현재 설정:
- **key**: `6rbx9jebbo2`
- **timestamp**: `1754235915494`

---

## 콘텐츠 수정 요청 방법 (Claude에게)

```
# 예시 요청

"설교 영상을 업데이트해줘.
 제목: 하나님의 은혜 (로마서 8:1-5)
 날짜: 2026-04-06
 YouTube URL: https://www.youtube.com/watch?v=XXXXXXXXXXX"

"수요예배 시간을 오후 7:30에서 오후 7:00로 변경해줘"

"청년부 예배 장소를 본당으로 변경해줘"
```

---

## 설교 데이터 저장 구조

설교 정보는 `src/lib/data/sermons.json`에 저장되며,
`/api/sermon` API를 통해 읽기(GET)·쓰기(POST)가 이루어집니다.

```
사이트 로드  →  GET /api/sermon  →  sermons.json 읽기  →  화면 표시
모달 저장    →  POST /api/sermon  →  sermons.json 덮어쓰기  →  영구 저장
```
