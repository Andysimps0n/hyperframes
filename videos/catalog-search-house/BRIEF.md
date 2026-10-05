---
workflow: music-to-video
flow: automation
storyboard: yes
message: "The catalog search is the picture: a hard house track and five effects, explained in Korean."
destination: shorts
aspect: 1080x1920
language: ko
length: 49s
audience: "Someone watching how a catalog search becomes a beat-synced video"
narration: no
angle: kinetic
---

## Intent

A fresh beat-synced video. No narration. The music is a hard-hitting house track from the HeyGen audio catalog, about 50 seconds. On screen we watch that search happen, then Korean kinetic type explains the idea and lists what the catalog can do.

## Assets

- assets/bgm.mp3 — HeyGen music `f9f288f07e214852a589c8803524ab2d`, query "nightclub house music", 49s, "upbeat energetic nightlife vibe, modern electronic house, club atmosphere". The bed.
- assets/sfx/whoosh.mp3 — "Fast synthetic whoosh", 1.58s. One whoosh on each hard cut between treatments.
- assets/sfx/riser.mp3 — "Synthetic Sweeping Riser", 4.97s. Rides the build into the drop.
- assets/sfx/keyboard-typing.mp3 — "Keyboard Typing", 44.382s file. Play only while the query is typed; do not run it under the whole track.
- assets/sfx/mouse-click.mp3 — "Mouse Click", 0.288s. The cursor picking the top hit.
- assets/sfx/burst-shutter.mp3 — "Camera Burst", 1.176s. Punches the Korean capability hits on the drop.

## Customizations

- Show the search on screen: a field types a house query, results land, a cursor picks the top hit.
- Explain the concept in Korean, and list what it can do: 음악 검색, 효과음, 비트에 맞춘 컷, 키네틱 타이포, 가사 없는 프로모.
- Concept lines: 음악이 컷을 정한다, 검색은 화면에서 그대로 보인다, 효과음은 같은 카탈로그에서 온다.
- This pass stops at the written storyboard. No frame HTML, no assemble, no render until asked.

## Notes

- Shorts 1080×1920 at 30fps, from docs/rules.md.
- Brand (font + palette) is chosen at planning from a frame preset that fits hard house: dark field, one hot accent.
- Auth at retrieval: oauth, valid through 2026-10-15, plan free.
