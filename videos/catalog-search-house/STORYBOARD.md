---
compositionId: bgm
duration_s: 49.0
canvas: {"w":1080,"h":1920,"fps":30}
mode: collaborative
message: "The catalog search is the picture: a hard house track and five effects, explained in Korean."
style:
  font: "Barlow / IBM Plex Mono"
  palette: ["#111111", "#1A1A18", "#E85D26", "#F0ECE5", "#888880", "#282826"]
assets: "assets/bgm.mp3 plus five HeyGen SFX in assets/sfx/"
build_notes:
  - "one paused timeline per frame"
  - "no remote assets"
  - "BGM is assets/bgm.mp3 for the full 49.0s"
  - "SFX are local files, placed on the track times in Audio cues; the assembler only mounts the bed"
avoid:
  - "narration"
  - "english concept sentences"
  - "running the 44s typing file under the whole track"
---

## Frame 1 — search

- src: compositions/frames/01-search.html
- duration: 8.777s
- span_sec: [0.0, 8.777]
- pacing: beat_cut
- mood: [hype]
- feel: opening hihat accel-roll into a surge, then a medium dense four-on-the-floor groove

### Groups

- **g1** — template: `typewriter-phrase-keyword-shuffle`
  - span_sec: [0.0, 4.992]
  - params: { bgColor: "#111111", textColor: "#F0ECE5", accentColor: "#E85D26", lead1: "검색", lead2: "하드", lead3: "하우스", keyword: "49초", periodChar: "_" }
  - role_bindings: { phrase: { times: [1.231, 2.111, 2.93] }, keyword: { in: 4.992 } }
  - copy: "검색 하드 하우스 49초"
  - sfx: assets/sfx/keyboard-typing.mp3 from track 0.0 for this group's length only (the file is 44.382s; do not let it continue)
- **g2** — template: `intro-kinetic-cascade`
  - span_sec: [4.992, 8.777]
  - params: { theme: "dark", icon: "cursor", phrases: "[{\"text\":\"클럽 하우스\"},{\"text\":\"모던 하우스\"}]", climax: "{\"text\":\"1위\"}" }
  - role_bindings: { phrase: { times: [4.992, 6.896] }, climax: { in: 8.59, iconAt: 8.777 } }
  - copy: "클럽 하우스 / 모던 하우스 / 1위"

## Frame 2 — select

- src: compositions/frames/02-select.html
- duration: 11.331s
- span_sec: [8.777, 20.108]
- pacing: beat_cut
- mood: [hype]
- feel: a four-bar groove with a short hihat roll, then a sustained fill through the next surge

### Groups

- **g1** — free_design
  - span_sec: [8.777, 12.562]
  - free_design: { dominant_system: "one result row and a cursor that lands on it", primitives: ["typewriter-reveal", "overlay-pop", "braam-punch"], density_topology: "accumulate" }
  - anchors: [8.777, 10.681, 12.562]
  - copy: "1위 선택"
  - sfx: whoosh at 8.777 (assets/sfx/whoosh.mp3, 1.58s); mouse click at 12.562 (assets/sfx/mouse-click.mp3, 0.288s)
- **g2** — free_design
  - span_sec: [12.562, 14.466]
  - free_design: { dominant_system: "the chosen row held still", primitives: ["braam-punch", "freeze-hold"], density_topology: "hold" }
  - anchors: [12.562, 14.466]
  - copy: "이 트랙"
- **g3** — template: `intro-kinetic-cascade`
  - span_sec: [14.466, 20.108]
  - params: { theme: "dark", icon: "cursor", phrases: "[{\"text\":\"음악이\"},{\"text\":\"컷을\"}]", climax: "{\"text\":\"정한다\"}" }
  - role_bindings: { phrase: { times: [14.466, 16.347] }, climax: { in: 18.228, iconAt: 20.108 } }
  - copy: "음악이 컷을 정한다"

## Frame 3 — concept

- src: compositions/frames/03-concept.html
- duration: 9.474s
- span_sec: [20.108, 29.582]
- pacing: beat_cut
- mood: [hype]
- feel: two clean downbeat phrases, the second climbing into a surge

### Groups

- **g1** — template: `intro-kinetic-cascade`
  - span_sec: [20.108, 23.893]
  - params: { theme: "bold", icon: "sparkle", phrases: "[{\"text\":\"검색은\"},{\"text\":\"화면에서\"}]", climax: "{\"text\":\"보인다\"}" }
  - role_bindings: { phrase: { times: [20.108, 22.013] }, climax: { in: 23.893 } }
  - copy: "검색은 화면에서 그대로 보인다"
  - sfx: whoosh at 20.108 (assets/sfx/whoosh.mp3, 1.58s)
- **g2** — template: `intro-kinetic-cascade`
  - span_sec: [23.893, 29.582]
  - params: { theme: "dark", icon: "bolt", phrases: "[{\"text\":\"효과음은\"},{\"text\":\"같은 카탈로그\"}]", climax: "{\"text\":\"온다\"}" }
  - role_bindings: { phrase: { times: [23.893, 25.797] }, climax: { in: 27.678, iconAt: 29.582 } }
  - copy: "효과음은 같은 카탈로그에서 온다"

## Frame 4 — riser

- src: compositions/frames/04-riser.html
- duration: 5.643s
- span_sec: [29.582, 35.225]
- pacing: beat_cut
- mood: [tense]
- feel: a sustained hihat fill runs through a one-second energy hole and slams into the surge

### Groups

- **g1** — free_design
  - span_sec: [29.582, 35.225]
  - free_design: { dominant_system: "a single bar that fills, empties in the hole, then slams", primitives: ["directional-fill", "negative-space-hold", "crash-zoom-in", "braam-punch"], density_topology: "build" }
  - anchors: [30.488, 32.0, 35.225]
  - copy: ["올라간다", "비운다", "터진다"]
  - sfx: riser at 30.488 (assets/sfx/riser.mp3, 4.97s). It rings about 0.23s into the next frame. No whoosh on this cut — the riser is the transition.

## Frame 5 — capabilities

- src: compositions/frames/05-capabilities.html
- duration: 10.775s
- span_sec: [35.225, 46.0]
- pacing: beat_cut
- mood: [aggressive, hype]
- feel: unbroken hihat fills from the surge through the last roll, then a hard drop

### Groups

- **g1** — template: `poster-tile-mosaic`
  - span_sec: [35.225, 46.0]
  - params: { bgColor: "#111111", tiles: 5, bands: 1, gap: 8, showText: true, labels: "[\"음악 검색\",\"효과음\",\"비트에 맞춘 컷\",\"키네틱 타이포\",\"가사 없는 프로모\"]", program: "one tile locks on each downbeat below, fire-orange on the active tile, cream type, then the mosaic holds through the end roll until the drop" }
  - role_bindings: { tile: { times: [35.225, 37.129, 39.01, 40.914, 42.794] }, drop: { in: 46.0 } }
  - copy: ["음악 검색", "효과음", "비트에 맞춘 컷", "키네틱 타이포", "가사 없는 프로모"]
  - sfx: burst shutter retriggered on each tile downbeat (assets/sfx/burst-shutter.mp3, 1.176s). The riser tail is still decaying at 35.225, so this cut does not also take a whoosh.

## Frame 6 — hold

- src: compositions/frames/06-hold.html
- duration: 3.000s
- span_sec: [46.0, 49.0]
- pacing: phrase_flow
- mood: [dark]
- feel: the drop opens a near-silent tail; a few quiet perc hits, then nothing

### Groups

- **g1** — free_design
  - span_sec: [46.0, 49.0]
  - free_design: { dominant_system: "one still mark in an empty field", primitives: ["negative-space-hold", "blur-resolve"], density_topology: "hold" }
  - anchors: [46.0, 46.74]
  - copy: "같은 카탈로그"
  - sfx: whoosh at 46.0 (assets/sfx/whoosh.mp3, 1.58s), then silence

## Audio cues

Track times. Same file may retrigger. Nothing here is a tween.

| t | file | why |
| --- | --- | --- |
| 0.000 | assets/sfx/keyboard-typing.mp3 | query types; stop at 4.992 |
| 8.777 | assets/sfx/whoosh.mp3 | cut into the select frame |
| 12.562 | assets/sfx/mouse-click.mp3 | cursor picks the top hit |
| 20.108 | assets/sfx/whoosh.mp3 | cut into the next concept line |
| 30.488 | assets/sfx/riser.mp3 | fill into the surge at 35.225 |
| 35.225 | assets/sfx/burst-shutter.mp3 | 음악 검색 |
| 37.129 | assets/sfx/burst-shutter.mp3 | 효과음 |
| 39.010 | assets/sfx/burst-shutter.mp3 | 비트에 맞춘 컷 |
| 40.914 | assets/sfx/burst-shutter.mp3 | 키네틱 타이포 |
| 42.794 | assets/sfx/burst-shutter.mp3 | 가사 없는 프로모 |
| 46.000 | assets/sfx/whoosh.mp3 | drop into the hold |

Bed: assets/bgm.mp3 from 0 to 49.0. HeyGen id `f9f288f07e214852a589c8803524ab2d`, query "nightclub house music", 129.2 BPM.
