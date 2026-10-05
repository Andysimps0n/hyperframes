---
version: 1
name: Crayon study note — reel
description: >
  Study-note card for a 1080×1920 reel. Cream paper, faint dot grid, sky as the
  main pastel, pink and mint as support. Crayon texture only on strokes.
unit: the frame — 1080×1920
principle: type stays sharp · crayon lives on the stroke · one idea per frame

colors:
  paper: "#FFF9F0"
  paper-warm: "#FBEFDD"
  paper-line: "#EFE2CC"
  ink: "#3D3553"
  ink-soft: "#7A7291"
  ink-faint: "#B9B1C9"
  sky: "#A9D3F5"
  sky-deep: "#3F82C0"
  pink: "#F9B4C4"
  pink-deep: "#D9637F"
  mint: "#B4E3BE"
  mint-deep: "#3E9960"
  sun: "#FFE08A"
  sun-deep: "#E0A722"
  white: "#FFFFFF"

borders:
  card: "6px solid {colors.ink}"
  hairline: "4px dashed {colors.paper-line}"

typography:
  display: { fontFamily: "Jua", size: "88px", weight: 400, lineHeight: 1.2, tracking: "-0.01em" }
  title: { fontFamily: "Jua", size: "64px", weight: 400, lineHeight: 1.22, tracking: "-0.01em" }
  subtitle: { fontFamily: "Pretendard", size: "36px", weight: 600, lineHeight: 1.45 }
  body: { fontFamily: "Pretendard", size: "32px", weight: 600, lineHeight: 1.45 }
  small: { fontFamily: "Pretendard", size: "28px", weight: 500, lineHeight: 1.4 }
  hand: { fontFamily: "Gaegu", size: "40px", weight: 700, lineHeight: 1.3 }
  chrome: { fontFamily: "Gaegu", size: "34px", weight: 700, lineHeight: 1.2 }
  mono: { fontFamily: "JetBrains Mono", size: "26px", weight: 500, lineHeight: 1.35 }
  step: { fontFamily: "Jua", size: "36px", weight: 400, lineHeight: 1.35 }

spacing:
  safe-top: "250px"
  safe-bottom: "250px"
  chrome-inset: "270px"
  pad-x: "72px"
  radius: "36px"
  radius-note: "28px"

components:
  paper:
    backgroundColor: "{colors.paper}"
    description: "Full-bleed cream. Dot grid is a separate layer, 48px, 2.2px dots in paper-line."
  card:
    backgroundColor: "{colors.white}"
    border: "6px solid {colors.ink}"
    rounded: "{spacing.radius}"
    description: "Flat fill. Crayon filter on the border layer only, never on the text."
  note:
    backgroundColor: "{colors.paper-warm}"
    border: "5px dashed {colors.ink-faint}"
    rounded: "{spacing.radius-note}"
    typography: "{typography.hand}"
    description: "Short handwritten memo. Rotate about -4deg. Text stays unfiltered."
  chip:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
    rounded: "999px"
    typography: "{typography.step}"
    description: "Pill. Second chip uses sun. Text is ink, never white on pastel."
  hl:
    backgroundColor: "{colors.sun}"
    description: "One word per title. A marker bar behind the word, not a filter on the glyphs."
---

## Overview

공부 노트 한 장. 종이 70%, 하늘색 면 20%, 잉크 글자, 노란 형광펜은 한 제목에 한 단어.
사진은 없다. 로고 그림도 없다. HeyGen은 글자로만 적는다.

## The Frame

1080×1920, 30fps. 읽는 영역은 y 250–1670.
오른쪽 위 크롬 `이것도 AI로 돼?`는 top 270px, right 72px, `{typography.chrome}`, `{colors.ink-soft}`.
왼쪽 아래 크롬 `@crayon.sure`는 bottom 270px, left 72px, 같은 스타일.
본문은 그 사이에 둔다. top 360px ~ bottom 360px, 좌우 72px.
`word-break: keep-all`. 본문 글자에 질감 필터를 걸지 않는다.

## Composition Rules

- 배경 클립: paper 색 + 48px 점 모눈. `#root`에 background를 주지 말고 `class="clip"` 레이어에 칠한다.
- 크레용은 테두리, 밑줄, 체크 획에만. 구현은 SVG `feDisplacementMap`을 그 획 레이어에만.
- 면(카드 안, 칩, 하늘색 덩어리)은 단색.
- 파스텔 위 글자는 항상 ink. 흰 글자 금지.
- 형광펜은 제목당 한 단어. 커버는 `영상`, 작동은 `작동`, 왜 좋아요는 `좋아요`.
- 장식은 한 장에 덩어리 하나 + 밑줄 또는 체크. 별과 나침반을 잔뜩 넣지 않는다.

## Do

- 폰트는 `../../assets/fonts/`의 @font-face만. CDN 폰트 금지.
- Jua는 제목, Pretendard는 본문, Gaegu는 짧은 메모와 크롬, JetBrains Mono는 `data-start` 같은 영문 토큰.
- 등장 곡선은 긴 감속. 통통 튀지 않는다.

## Don't

- 이미지, 사진, 외부 로고, 이모지를 장식용으로 더 넣기. 엔딩 칩에 적힌 🔖 👀만 예외.
- 퀘스트, 탐험, 클리어, 모험, 보물.
- 위 250px, 아래 250px 안의 글자.
- 글자 위에 wax 필터.
- 장면 밖 문구를 지어 넣기.
