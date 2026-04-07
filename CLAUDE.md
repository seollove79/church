# CLAUDE.md — 여산중앙교회 웹사이트

Claude와 협업 시 이 파일이 자동으로 로드됩니다.
코드 작업 전 반드시 이 파일을 참조하세요.

---

## 프로젝트 개요

- **사이트명**: 여산중앙교회 공식 웹사이트
- **교단**: 대한예수교장로회 합동측 이리노회
- **설립일**: 1960년 5월 20일
- **담임목사**: 윤찬영 목사
- **YouTube 채널**: `https://www.youtube.com/@대한예수교장로회여산/featured`

---

## 기술 스택

| 항목 | 버전 |
|------|------|
| SvelteKit | 2.22.0 |
| Svelte | 5.0.0 |
| Vite | 7.0.4 |
| 어댑터 | adapter-auto |

**외부 API**
- Daum 카카오맵 (Roughmap) — 오시는길 섹션
- YouTube 임베드 — 설교 영상

---

## 파일 구조

```
src/
├── routes/
│   ├── +layout.svelte          # 헤더, 전역 네비게이션, 전역 스타일
│   ├── +page.svelte            # 메인 페이지 (컴포넌트 조립만, ~20줄)
│   └── api/
│       └── sermon/
│           └── +server.js      # 설교 데이터 GET/POST API
├── lib/
│   ├── components/             # 섹션 컴포넌트
│   │   ├── Hero.svelte         # 히어로 섹션 (배경 영상, 슬로건, CTA)
│   │   ├── ChurchIntro.svelte  # 교회소개 섹션
│   │   ├── WorshipSchedule.svelte  # 예배안내 섹션
│   │   ├── SermonSection.svelte    # 금주의 말씀 섹션 (관리 모달 포함)
│   │   ├── MapSection.svelte   # 오시는길 섹션 (카카오맵 초기화 포함)
│   │   └── ScrollToTop.svelte  # 맨 위로 이동 버튼 (공통)
│   ├── data/
│   │   └── sermons.json        # 설교 데이터 영구 저장 파일
│   ├── assets/
│   │   └── favicon.svg
│   └── index.js                # 공용 모듈 진입점 (현재 비어있음)
└── app.html                    # HTML 진입점 (카카오맵 스크립트 로드)

static/
├── background_02.mp4    # 히어로 배경 영상 (현재 사용 중)
├── background.mp4       # 예비 영상 1
├── background_01.mp4    # 예비 영상 2
├── bg_001.jpg           # 교회소개 섹션 배경 이미지
├── logo.png             # 헤더 로고
└── church_01.jpg        # 교회 사진
```

---

## 메인 페이지 섹션 구조

| 섹션 ID | 섹션명 | 설명 |
|---------|--------|------|
| `#hero` | 히어로 | 배경 영상 + 슬로건 + CTA 버튼 |
| `#new-section` | 교회소개 | 교회 역사 및 담임목사 소개 |
| `#worship` | 예배안내 | 장년(6개) + 다음세대(3개) 예배 시간표 |
| `#sermon` | 금주의 말씀 | 최근 설교 영상 링크 |
| `#road` | 오시는길 | 카카오맵 임베드 |

---

## 디자인 규칙

### 색상 팔레트

```
주색 (파랑):  #2c5282   — 제목, 버튼, 강조선, 카드 상단 보더
강조색 (금):  #ffd700   — 교회소개 섹션 부제목
텍스트 기본:  #333
텍스트 보조:  #666
배경 밝음:    #f8f9fa   — 설교영상 섹션 배경
배경 흰색:    white
```

### 폰트

```css
font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### 반응형 중단점

```
1024px 이하: 태블릿 — 네비게이션 간격 축소
768px 이하:  모바일 — 햄버거 메뉴, 텍스트 크기 축소, 패럴랙스 비활성화
```

### 레이아웃

- 최대 너비: `1200px` (`.container`)
- 헤더 높이: 데스크톱 `80px`, 모바일 `60px`
- 섹션 패딩: 기본 `100px 0`, 모바일 `60px 0`

---

## 코드 컨벤션

### Prettier 설정 (`.prettierrc`)

```json
{
  "useTabs": true,
  "singleQuote": true,
  "trailingComma": "none",
  "printWidth": 100
}
```

- 들여쓰기: **탭** 사용 (스페이스 아님)
- 따옴표: **단일 따옴표**
- 후행 쉼표: **없음**
- 줄 최대 길이: **100자**

### Svelte 패턴

- 이벤트 바인딩: `on:click`, `on:scroll` 사용 (Svelte 5에서도 현재 유지)
- 슬롯: `{@render children?.()}` 사용 (Svelte 5 스니펫 방식)
- 라이프사이클: `onMount` from `svelte`
- 윈도우 바인딩: `<svelte:window bind:scrollY bind:innerHeight on:scroll={...} />`

### CSS 패턴

- Svelte scoped 스타일 사용 (`<style>` 블록)
- 전역 스타일은 `+layout.svelte`의 `:global()` 사용
  - `.container`, `.section`, `.section-title` 등 공통 클래스는 `+layout.svelte`에 정의
  - 각 컴포넌트는 자신의 고유 스타일만 scoped로 작성
- 애니메이션: `.section` 클래스에 `opacity: 0 → 1`, `translateY(50px → 0)` 스크롤 트리거
- 트랜지션: `transition: all 0.3s ease` 기본

---

## 콘텐츠 수정 위치

### 설교 영상 업데이트 → `src/lib/data/sermons.json` 또는 관리 모달

**방법 1 — 사이트에서 직접 수정 (권장)**
- 사이트의 "금주의 말**씀**" 에서 "씀" 클릭 → 관리 모달 오픈 → 저장
- 저장 시 `sermons.json`에 자동 반영, 새로고침 후에도 유지

**방법 2 — 파일 직접 수정**
```json
// src/lib/data/sermons.json
{
  "title": "설교 제목 (성경 본문)",
  "meta": "설교자: 윤찬영 목사 / 설교일: YYYY-MM-DD",
  "videoUrl": "https://www.youtube.com/watch?v=VIDEO_ID"
}
```

### 예배 시간표 수정 → `src/lib/components/WorshipSchedule.svelte`

`.schedule-card` 내부의 `<h3>`, `.time`, `.location` 수정

### 교회소개 텍스트 수정 → `src/lib/components/ChurchIntro.svelte`

`.new-section-content` 내부 `<p>` 태그들 수정

### 히어로 배경 영상·슬로건 수정 → `src/lib/components/Hero.svelte`

### 오시는길 지도 설정 → `src/lib/components/MapSection.svelte`

---

## 개발 명령어

```bash
npm run dev       # 개발 서버 (localhost:5173)
npm run build     # 프로덕션 빌드
npm run preview   # 빌드 결과 미리보기
npm run format    # Prettier 자동 포맷팅
npm run lint      # ESLint + Prettier 검사
```

---

## 주의사항 (하지 말아야 할 것)

- **카카오맵 key 변경 금지**: `MapSection.svelte`의 `daum.roughmap.Lander` 설정의 `key`와 timestamp, container ID는 건드리지 않는다
- **전역 CSS 남용 금지**: `:global()`은 `+layout.svelte`에서만 사용, 각 페이지는 scoped 스타일 사용
- **기존 섹션 ID 변경 주의**: 히어로 버튼의 `scrollIntoView`가 ID에 의존함 (`#new-section`, `#worship`, `#sermon`, `#road`)
- **배경 영상 파일 삭제 금지**: `static/` 폴더의 MP4 파일들은 참조 중이거나 예비용으로 보관 중
- **sermons.json 구조 변경 금지**: API(`+server.js`)와 컴포넌트가 `title`, `meta`, `videoUrl` 키에 의존함

---

## 향후 개발 계획

- [x] 컴포넌트 분리 (`src/lib/components/`) — 완료
- [x] 설교 데이터 분리 (`src/lib/data/sermons.json`) — 완료
- [x] 설교 관리 모달 + API (`/api/sermon`) — 완료
- [ ] 예배 시간표 데이터 분리 (`src/lib/data/schedule.json`)
- [ ] 페이지별 라우트 추가 (교회학교, 커뮤니티 등)
- [ ] `adapter-static` 전환 검토
- [ ] OG 태그 및 SEO 메타 정보 추가
