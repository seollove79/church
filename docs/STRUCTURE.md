# STRUCTURE.md — 코드 구조 가이드

프로젝트의 파일 구조와 각 코드의 역할을 설명합니다.
새 기능 추가나 리팩토링 시 참조하세요.

---

## 전체 디렉토리 구조

```
church/
├── src/
│   ├── routes/
│   │   ├── +layout.svelte       # 모든 페이지 공통 레이아웃
│   │   └── +page.svelte         # 메인 페이지 (/)
│   ├── lib/
│   │   ├── assets/
│   │   │   └── favicon.svg      # 브라우저 탭 아이콘
│   │   └── index.js             # 공용 모듈 진입점 (현재 비어있음)
│   └── app.html                 # HTML 루트 템플릿
├── static/                      # 빌드 시 그대로 복사되는 정적 파일
│   ├── background_02.mp4        # 히어로 배경 영상 (현재 사용)
│   ├── background_01.mp4        # 예비 영상
│   ├── background.mp4           # 예비 영상
│   ├── bg_001.jpg               # 교회소개 섹션 배경 이미지
│   ├── church_01.jpg            # 교회 사진 (현재 미사용)
│   ├── logo.png                 # 헤더 로고
│   └── robots.txt               # 검색엔진 크롤러 설정
├── docs/
│   ├── CONTENT.md               # 콘텐츠 수정 가이드
│   └── STRUCTURE.md             # 이 파일
├── CLAUDE.md                    # Claude 협업 설정 (자동 로드)
├── package.json                 # 프로젝트 의존성 및 스크립트
├── svelte.config.js             # SvelteKit 설정
├── vite.config.js               # Vite 빌드 설정
├── jsconfig.json                # JS 경로 별칭 설정 ($lib → src/lib)
├── eslint.config.js             # ESLint 린팅 규칙
└── .prettierrc                  # 코드 포맷팅 규칙
```

---

## SvelteKit 라우팅 구조

SvelteKit은 파일 기반 라우팅을 사용합니다.

```
src/routes/
├── +layout.svelte   →  모든 페이지에 공통 적용 (헤더 포함)
└── +page.svelte     →  "/" 경로 (메인 페이지)
```

### 향후 페이지 추가 시 구조

```
src/routes/
├── +layout.svelte
├── +page.svelte              # / (메인)
├── church/
│   └── +page.svelte          # /church (교회안내)
├── worship/
│   └── +page.svelte          # /worship (예배방송)
├── education/
│   └── +page.svelte          # /education (교회학교)
└── community/
│   └── +page.svelte          # /community (커뮤니티)
```

---

## +layout.svelte 구조

모든 페이지에 공통으로 적용되는 레이아웃 파일입니다.

```
+layout.svelte
├── <script>
│   ├── import favicon
│   ├── export let children      # 자식 페이지 슬롯
│   ├── isMenuOpen 상태변수
│   └── toggleMenu() 함수
├── <svelte:head>
│   ├── favicon 링크
│   ├── 페이지 타이틀
│   └── 메타 description
├── <header class="header">
│   ├── .logo                    # 로고 이미지 + 교회명 텍스트
│   ├── .hamburger-menu          # 모바일 햄버거 버튼
│   ├── <nav>
│   │   └── .nav-menu            # 7개 메뉴 (각각 .dropdown 포함)
│   └── .utility                 # 로그인/회원가입 링크
├── <main class="main-content">
│   └── {@render children?.()}   # 각 페이지 콘텐츠 삽입 위치
└── <style>
    ├── :global(*) 리셋
    ├── :global(body) 기본 폰트
    ├── 헤더 스타일
    ├── 네비게이션 스타일
    ├── 드롭다운 스타일
    └── 반응형 미디어쿼리
```

---

## +page.svelte 구조

메인 페이지(`/`)의 전체 구조입니다.

```
+page.svelte
├── <script>
│   ├── import { onMount }
│   ├── scrollY, innerHeight 변수
│   ├── handleScroll()           # 섹션 fade-in 트리거
│   └── onMount()
│       ├── 첫 섹션 visible 처리
│       └── daum.roughmap.Lander # 카카오맵 초기화
├── <svelte:window>              # scrollY, innerHeight 바인딩
├── 섹션 1: #hero
│   ├── .hero-overlay            # 어두운 오버레이
│   ├── <video>                  # 배경 영상
│   ├── .hero-text               # 슬로건, 교회명
│   └── .hero-actions            # CTA 버튼 4개
├── 섹션 2: #new-section (교회소개)
│   ├── .section-title
│   ├── .subtitle
│   └── .new-section-content    # 교회 소개 텍스트
├── 섹션 3: #worship (예배안내)
│   ├── .worship-group           # 장년 예배
│   │   └── .worship-schedule   # 6개 .schedule-card
│   └── .worship-group           # 다음세대 예배
│       └── .worship-schedule   # 3개 .schedule-card
├── 섹션 4: #sermon (금주의 말씀)
│   ├── .sermon-title
│   ├── .sermon-meta
│   └── .sermon-actions         # 설교말씀보기, 영상더보기 버튼
├── 섹션 5: #road (오시는길)
│   └── #daumRoughmapContainer  # 카카오맵 마운트 포인트
└── <style>
    ├── .container 레이아웃
    ├── .section 공통 (fade-in 애니메이션)
    ├── 히어로 스타일
    ├── 예배안내 스타일
    ├── 설교영상 스타일
    ├── 오시는길 스타일
    └── 반응형 미디어쿼리
```

---

## 스크롤 애니메이션 동작 원리

```
1. 모든 .section은 초기에 opacity:0, translateY(50px) 상태
2. svelte:window가 scroll 이벤트를 감지 → handleScroll() 호출
3. 각 섹션의 getBoundingClientRect().top이 화면 높이의 80% 미만이면
   .visible 클래스 추가
4. .visible → opacity:1, translateY(0) (CSS transition 0.8s)
5. 히어로 섹션(.hero)은 페이지 로드 시 즉시 .visible 처리
```

---

## 경로 별칭

`jsconfig.json`에 정의된 경로 별칭:

```js
$lib  →  src/lib/          // 공용 컴포넌트, 유틸리티
$app  →  SvelteKit 내장    // page store 등
```

사용 예:
```js
import MyComponent from '$lib/components/MyComponent.svelte';
import { page } from '$app/stores';
```

---

## 컴포넌트 분리 계획

현재 모든 코드가 `+page.svelte` 한 파일에 있습니다.
향후 아래와 같이 분리하면 유지보수가 쉬워집니다.

```
src/lib/components/
├── Hero.svelte              # 히어로 섹션
├── ChurchIntro.svelte       # 교회소개 섹션
├── WorshipSchedule.svelte   # 예배안내 섹션
├── SermonSection.svelte     # 금주의 말씀 섹션
└── MapSection.svelte        # 오시는길 섹션
```

분리 후 `+page.svelte`:
```svelte
<script>
  import Hero from '$lib/components/Hero.svelte';
  import ChurchIntro from '$lib/components/ChurchIntro.svelte';
  // ...
</script>

<Hero />
<ChurchIntro />
<WorshipSchedule />
<SermonSection />
<MapSection />
```

---

## 데이터 분리 계획

콘텐츠를 코드와 분리하면 비개발자도 수정하기 쉬워집니다.

```
src/lib/data/
├── sermons.js        # 설교 영상 목록
└── schedule.js       # 예배 시간표
```

```js
// src/lib/data/sermons.js 예시
export const latestSermon = {
  title: '다니엘이 전한 하나님 아버지의 마음 (다니엘 2:20-23)',
  preacher: '윤찬영 목사',
  date: '2025-11-23',
  youtubeId: 'wAQLPjgix_4'
};
```

```js
// src/lib/data/schedule.js 예시
export const seniorWorship = [
  { name: '새벽기도회', time: '오전 05:00', location: '본당' },
  { name: '주일 오전예배', time: '오전 10:30', location: '본당' },
  // ...
];
```

---

## 외부 의존성

| 의존성 | 로드 방식 | 용도 |
|--------|-----------|------|
| Noto Sans KR | Google Fonts (app.html) | 기본 폰트 |
| Daum Roughmap | 외부 스크립트 (app.html) | 카카오맵 |
| YouTube | `window.open()` | 설교 영상 링크 |

> Daum Roughmap 스크립트는 `src/app.html`에 `<script>` 태그로 삽입되어 있어야
> `onMount`에서 `daum.roughmap.Lander`를 사용할 수 있습니다.
