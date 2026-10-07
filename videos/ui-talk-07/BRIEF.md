---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "Name the UI — Stepper, Progress Indicator, Sidebar, Back Button, FAB — and the AI builds the right step and path."
destination: instagram-reels
aspect: 1080x1920
language: ko
length: 59s
angle: listicle
narration: no
style_preset: daisy-days
---

## Intent

Episode 7 of the Korean Instagram series 「AI가 알아먹는 UI 용어집」 (@crayon.sure). Vertical Reels, about 45–60 seconds. The same nine-card study note as the card-news brief — cover, a chat of two me→AI misses plus 「아니 그게 아니라,,」, five term cards, a summary table, and an ending that teases 「목록과 정보를 담는 UI 편」 — told as motion. No voice, no photos, no music bed. On-canvas Korean copy is the caption. Soft UI sound effects only.

The request already fixed the message, the listicle shape, the 9:16 Reels destination, the length, and the Korean copy, and it said the video is done when it renders. That is an autonomous build: decisions below are stated, not asked.

## Assets

- capture/extracted/visible-text.txt — full episode brief. Section 5 copy is used verbatim. Section 4 mock descriptions are the phone and window drawings.
- The three episode-6 stills (cover, Search Bar term card, summary table) are the look to match: cream dot paper, pink pillar, indigo ink, Jua titles, Gaegu labels, crayon borders.

## Customizations

- Each scene opens on an empty cream paper canvas. Objects enter one by one in reading order, hold long enough to read, then leave before the next scene.
- Crayon texture on borders, blobs, highlighter bars, and doodles only. Never on glyphs.
- Study-note tone. Do not use 퀘스트, 탐험, 모험, 클리어, or NEXT QUEST.
- Ignore the brief's React/Vite paths and `wy-` / `wm-` class prefixes. Those were for a static card build.

## Notes

- Daisy Days is the nearest shipped preset (cream, pink, round, hand-drawn). The series token file overrides it: paper `#FFF9F0`, ink `#3D3654`, UI pink `#F9B4C4` / `#D9637F`, sun `#FFE08A`, Jua + Pretendard + Gaegu. No charcoal offset shadow, no text texture.
- Highlight only three phrases: cover 「UI 용어집」, chat 「Stepper, Sidebar」, summary 「이 표」.
- Account line on every scene is `@crayon.sure`, because this film has no `Post.jsx` injector and the episode-6 cards show the handle.
- Safe type sits inside the center band (about 200px from the top and bottom) so Reels chrome does not cover it.
