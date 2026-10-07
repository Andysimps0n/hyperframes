---
version: alpha
name: Crayon study note — UI 용어집
description: >
  Episode 7 of @crayon.sure. Seeded from the daisy-days preset (the nearest
  cream / pink / rounded / hand-drawn frame), then rewritten to the series
  tokens. Daisy Days' charcoal outlines, hard offset shadows, and text-shadow
  do not belong here. Crayon texture sits on borders and doodles only.
unit: the frame — 1080×1920
principle: paper first · ink stays sharp · one pink pillar

colors:
  paper: "#FFF9F0"
  paper-warm: "#FBEFDD"
  paper-line: "#EFE2CC"
  ink: "#3D3654"
  ink-soft: "#7A7291"
  ink-faint: "#B9B1C9"
  ui-pink: "#F9B4C4"
  ui-deep: "#D9637F"
  sun: "#FFE08A"
  sun-deep: "#E0A722"
  white: "#FFFFFF"

borders:
  crayon: "5px solid ui-pink, wax-stroke filter, never on glyphs"
  dashed: "4px dashed ink-faint or ui-pink"

shadows:
  default: "none"
  fab: "0 6px 0 ink-faint"

typography:
  display: { fontFamily: "Jua", weight: 400, lineHeight: 1.15 }
  hand: { fontFamily: "Gaegu", weight: 700, lineHeight: 1.2 }
  body: { fontFamily: "Pretendard", weight: 600, lineHeight: 1.4 }
  body-strong: { fontFamily: "Pretendard", weight: 700, lineHeight: 1.35 }
  meta: { fontFamily: "JetBrains Mono", weight: 500, lineHeight: 1.2 }

spacing:
  pad-x: "100px"
  pad-top: "200px"
  pad-bot: "230px"
  radius: "28px"
  radius-pill: "999px"

components:
  paper:
    backgroundColor: "{colors.paper}"
    description: "Cream sheet plus a 48px dot grid in paper-line. This is the empty canvas every scene starts on."
  hl:
    backgroundColor: "{colors.sun}"
    description: "Highlighter bar behind the words, wax filter on the bar only. Text stays ink."
  card:
    backgroundColor: "{colors.white}"
    border: "{borders.crayon}"
    rounded: "{spacing.radius}"
    description: "White card. The wobble is a child stroke, not a filter on the element that holds type."
  chip:
    backgroundColor: "{colors.white}"
    border: "{borders.crayon}"
    rounded: "{spacing.radius-pill}"
    textColor: "{colors.ink}"
    description: "Pill. Ink on white or ink on ui-pink. Never white type on pastel."
---

## Overview

Study-note card news, in motion. Korean copy is the caption. Titles are Jua, labels and memos are Gaegu, sentences are Pretendard. The pink pillar is UI (`#F9B4C4` / `#D9637F`). Yellow is only the highlighter, the stars, the stamp, and the "저장 필수!" memo.

## Do

- Start each scene on empty cream paper. Bring objects in from top to bottom, in reading order. Hold, then move them out before the cut.
- Put `#wax` and `#wax-stroke` on shapes: blob, highlighter bar, card rim, phone rim, doodle strokes.
- Keep body type at 28px or larger. Mock chrome inside the phone may be 18–22px, because the mock spec says so.
- Keep key sentences inside the center 80% of the 1080×1920 frame.

## Don't

- Do not texture, displace, or shadow glyphs.
- Do not use charcoal 3px outlines or hard black offset shadows from Daisy Days.
- Do not write 퀘스트, 탐험, 모험, 클리어, QUEST, or NEXT QUEST.
- Do not put white type on `#F9B4C4`.
- Do not use photos.

## Fonts

Local faces, `font-display: block`:

- `assets/fonts/Jua-Regular.woff2` — display, weight 400
- `assets/fonts/Pretendard-Medium.woff2` — body 500
- `assets/fonts/Pretendard-SemiBold.woff2` — body 600
- `assets/fonts/Pretendard-Bold.woff2` — body 700
- `assets/fonts/Gaegu-Bold.woff2` — hand 700
- `assets/fonts/JetBrainsMono-Medium.woff2` — page numbers 500
