# 루쓰컴퍼니 주차차단기 블로그

주차차단기(LPR 차량번호인식기) 설치·공사 전문 업체 **루쓰컴퍼니**의 회사 블로그 제작 저장소입니다.

시안 사이트: <https://annajeong0429-ux.github.io/LUTH_COMPANY/>

## 결과물이 둘로 나뉜 이유

최종 목적지는 네이버 블로그입니다. 그런데 네이버 블로그는 조판 자유도가 거의 없어서 디자인을 그 안에서 먼저 보여드릴 수가 없습니다. 그래서 두 단계로 나눴습니다.

| | 시안 사이트 | 네이버 블로그 적용물 |
| --- | --- | --- |
| 위치 | `src/` | `naver-blog/` |
| 목적 | 클라이언트 디자인 확정 | 실제 운영 |
| 형태 | Next.js 정적 사이트 | 이미지 + HTML 위젯 |

시안 사이트에서 디자인을 확정한 뒤, 그 디자인을 네이버가 허용하는 형태로 옮긴 것이 `naver-blog/`입니다. 네이버는 이미지에 링크를 걸 수 없고 위젯은 폭 170px에 인라인 스타일만 되기 때문에, 보여줄 것은 이미지로 누를 것은 위젯으로 갈라 두었습니다. 적용 순서는 [naver-blog/README.md](naver-blog/README.md)에 있습니다.

## 폴더 구성

```
├── src/                  시안 사이트 (Next.js App Router)
│   ├── app/              페이지
│   ├── components/       레이아웃 · 섹션 · UI 컴포넌트
│   ├── data/             샘플 게시물 데이터
│   └── lib/              사이트 설정, 상수, 유틸
├── public/images/        로고 등 정적 자산
├── naver-blog/           네이버 블로그 적용물 (이미지 + 위젯 + 게시물 템플릿)
├── docs/                 사양서 v1.2 (PRD · TRD · 요구사항정의서)
├── scripts/              문서 · 이미지 생성 스크립트
└── .github/workflows/    GitHub Pages 배포
```

## 개발

```bash
npm install
npm run dev
```

`http://localhost:3000`에서 열립니다. `-H 0.0.0.0`으로 띄우므로 같은 네트워크의 다른 기기에서도 접속할 수 있습니다.

## 배포

`main`에 푸시하면 GitHub Actions가 정적 빌드해 GitHub Pages에 올립니다. 별도 조작은 필요 없습니다.

GitHub Pages는 저장소 하위 경로(`/LUTH_COMPANY`)로 서비스되므로 빌드 시 `GITHUB_PAGES=true`가 필요합니다. 이 값이 있어야 `next.config.ts`가 `basePath`와 정적 내보내기를 켭니다. 로컬에서 배포본을 확인하려면 아래를 실행하세요.

```bash
npm run build:pages
```

`public/` 자산은 `assetPrefix`가 적용되지 않아 경로가 깨집니다. 이미지를 새로 추가할 때는 `src/lib/asset-path.ts`의 `assetPath()`로 감싸야 배포본에서 404가 나지 않습니다.

## 스크립트

| 명령 | 하는 일 |
| --- | --- |
| `python scripts/build_naver_images.py` | 네이버 타이틀(966×600)·프로필(161×161) 이미지를 굽는다 |
| `python scripts/md_to_docx.py docs/PRD_v1.2.md` | 마크다운 사양서를 납품용 docx로 변환한다 |

두 스크립트 모두 파이썬 패키지가 필요합니다.

```bash
pip install pillow python-docx
```

## 문서

`docs/`에 현행 사양서 v1.2가 마크다운과 docx로 함께 있습니다. 마크다운이 원본이고 docx는 변환 결과이므로, 수정은 마크다운에서 하고 스크립트로 다시 변환하세요.

클라이언트가 처음 준 기획서와 v1.1 문서는 `docs/원본_v1.1/`에 남겨 두었습니다.

## 기술 스택

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4
