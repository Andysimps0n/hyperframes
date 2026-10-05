---
format: 1080x1920
duration: 20s
message: "영상도, 이제 코드로. HyperFrames로."
arc: BAB
audience: "아직 타임라인으로 영상을 만드는 사람"
mode: collaborative
music: "cinematic house, driving kick, no vocals, night"
narration: no
vo_mode: verbatim
---

## Locked

Sketch sheet v1 is locked. Dress `storyboard.html#frame-01` through `#frame-06`. Do not redraw placement, hierarchy, or copy. Frame 4's three lines are drawn together only so size can be judged; on screen they replace each other, one at a time, and the last line is the largest.

## Video direction

- Palette, from `frame.md`: ground `{colors.ink-black}` `#000000`, type `{colors.cream}` `#F5F7F6`, accent `{colors.fire-orange}` `#3CDB78`, second stop `{colors.cream-muted}` `#24E0D0` only inside the icon gradient and nowhere else as a field. Dark register only. Display and body are Noto Sans KR. Labels are IBM Plex Mono.
- Motion: long-tail settle (`power3`). On-screen lines are the cues — there is no spoken voice. Reveal each line when its moment arrives, never dump the frame in the first quarter. Holds stay still. No breathing, no bounce, no overshoot.
- Rhythm: frames 1–3 reveal a set, then type. Frame 4 is the percussive relay. Frame 5 is the held message. Frame 6 is the shutter hit, then a still lockup.
- Keep type and the icon out of the bottom 17% caption band.
- Never: an orange or green full-bleed field, a second accent environment, voiceover, a desktop app squeezed into the phone, front-load-then-freeze, or elements drifting on their own.

## Frame 1 — Crowded timeline

- scene: A phone-shaped stack of too many timeline tracks, with the question over it
- voiceover: "영상 하나 만드는데, 아직도 이렇게 하세요?"
- duration: 4s
- transition_in: cut
- status: animated
- src: compositions/frames/01-timeline.html
- type: hook
- persuasion: Pain validation
- beat: overwhelm
- asset_candidates:
- blueprint: compose
- sfx: whoosh
- focal: drawn timeline
- roles:

narrativeRole: Names the old way, so the code answer has something to replace.
keyMessage: 영상 하나 만드는 일이 아직 타임라인에 갇혀 있다.
On screen, not spoken. The timeline is drawn in the frame for 9:16. No captured file. Dress `storyboard.html#frame-01`.

Scene 1 (0.0–1.6s): black ground. Timeline tracks stagger down the full frame via **waterfall-entry**, clip blocks only, three of them in the green accent. No question yet. Full-width strip, tracks are the mid layer, ground behind. Density is the pile.
Scene 2 (1.6–3.4s): the question reveals over the lower tracks by **per-word staggered reveal** (`dynamic-content-sequencing`), cream display type, three lines, sitting on a black plate so it stays readable. Baseline stays above the caption band.
Scene 3 (3.4–4.0s): hold. Tracks and question are still. No camera drift.

## Frame 2 — The question

- scene: The timeline is gone. A dark code editor is here, and the question sits on it
- voiceover: "코드로 영상을 작성하는건 어떤가요?"
- duration: 3s
- transition_in: cut
- status: animated
- src: compositions/frames/02-question.html
- type: product_intro
- persuasion: Future pacing
- beat: curiosity
- asset_candidates:
- blueprint: compose
- sfx: whoosh
- focal: drawn editor
- roles:
- handoff_out: editor x 65, y 173, scale 1, opacity 1, motion still

narrativeRole: Offers the new way in the viewer's own question.
keyMessage: 코드를 쓰는 쪽이 대안이다.
On screen, not spoken. Designed cut from the timeline. The editor is drawn, not a screenshot. Dress `storyboard.html#frame-02`.

Scene 1 (0.0–1.4s): the timeline is already gone. A square code panel (lifted black, 1px hairline, mono filename) enters by **waterfall-entry**, then its fake code bars stagger in. No question yet. Panel sits at x 65, y 173, width about 950, height about 1037 on the 1080×1920 frame. Asymmetric, panel mid, ground behind.
Scene 2 (1.4–3.0s): the question reveals underneath by **per-word staggered reveal** (`dynamic-content-sequencing`) and holds. The panel stays put. This end pose is the handoff.

## Frame 3 — Write, and it exists

- scene: A cursor types in the editor, then the result line lands
- voiceover: "코드를 작성하면 영상이 만들어집니다."
- duration: 3s
- transition_in: crossfade
- status: animated
- src: compositions/frames/03-write.html
- type: feature_showcase
- persuasion: Show-don't-tell proof
- beat: clarity
- asset_candidates:
- blueprint: compose
- sfx: keyboard typing
- focal: drawn editor
- roles:
- handoff_in: editor x 65, y 173, scale 1, opacity 1, motion still

narrativeRole: Shows the mechanism the message depends on. Write code, a video appears.
keyMessage: 코드를 작성하면 영상이 만들어진다.
On screen, not spoken. Two verbatim lines, in order: "코드를 작성하면" then "영상이 만들어집니다." Dress `storyboard.html#frame-03` as the resolved pose.

Scene 1 (0.0–1.1s): start on the frame-2 editor pose. The panel shortens to the sketch (top near y 86, shorter body) by **anchored-layout-expand**, anchored at the top. A caret **types on** `render("film")` (`discrete-text-sequence` + `context-sensitive-cursor`). The old question is already gone.
Scene 2 (1.1–2.0s): "코드를 작성하면" reveals under the panel by **per-word staggered reveal** (`dynamic-content-sequencing`), smaller, hint color.
Scene 3 (2.0–3.0s): "영상이 만들어집니다." lands larger, and "만들어집니다." takes the green accent. Hold still.

## Frame 4 — The loop

- scene: Three short lines hit one after another on the black field
- voiceover: "수정하고 바로 확인하고 다시 만들고."
- duration: 5s
- transition_in: cut
- status: animated
- src: compositions/frames/04-loop.html
- type: benefit_highlight
- persuasion: Rule of three
- beat: control
- blueprint: kinetic-type-beats (Adapt)
- sfx: impact
- focal: type
- roles:
- asset_candidates:

Adapt: keep the signature — each full line replaces the last at center, nothing lingers. Three lines, not a long montage. Last line is larger, and "만들고." is the green accent. Smooth `power3`, no bounce.
narrativeRole: The loop is the product. Edit, look, make it again.
keyMessage: 고치고, 보고, 다시 만드는 일이 코드 안에서 이어진다.
On screen, not spoken. Three verbatim lines, in order. Dress the center anchor of `storyboard.html#frame-04`; do not show all three at once.

Scene 1 (0.0–1.6s): black field. "수정하고" lands dead center by **kinetic beat-slam** (`kinetic-beat-slam`) and holds.
Scene 2 (1.6–3.2s): **hard-cut / flash word-swap** (`discrete-text-sequence`) to "바로 확인하고", same center, same size.
Scene 3 (3.2–5.0s): hard-cut to "다시 만들고." larger, "만들고." in the green accent. Hold still to the end.

## Frame 5 — The line

- scene: One sentence fills the black field
- voiceover: "영상도, 이제 코드로."
- duration: 3s
- transition_in: crossfade
- status: animated
- src: compositions/frames/05-line.html
- type: benefit_highlight
- persuasion: Future pacing
- beat: inevitability
- blueprint: kinetic-type-beats (Adapt)
- sfx: none
- focal: type
- roles:
- asset_candidates:

Adapt: keep the center-channel build. One sentence, two cues. "코드로." is the only green. Then hold. No second beat-swap gag.
narrativeRole: Lands the one message before the brand name.
keyMessage: 영상도, 이제 코드로.
On screen, not spoken. Verbatim. Dress `storyboard.html#frame-05`.

Scene 1 (0.0–1.2s): "영상도," arrives dead center by **per-word staggered reveal** (`dynamic-content-sequencing`).
Scene 2 (1.2–3.0s): "이제 코드로." completes the sentence, "코드로." in the green accent. Hold still. The read is the back half.

## Frame 6 — HyperFrames

- scene: HYPERFRAMES로. hits with a shutter, and the icon locks beside it
- voiceover: "HYPERFRAMES로."
- duration: 2s
- transition_in: cut
- status: animated
- src: compositions/frames/06-hyperframes.html
- type: cta
- persuasion: Status seeking
- beat: triumph
- blueprint: compose
- registry: shutter-slam
- focal: assets/hyperframes-mark.png
- roles: hyperframes-mark = cutout
- sfx: camera burst
- asset_candidates: assets/hyperframes-mark.png — HyperFrames icon, green-to-cyan mark on black

narrativeRole: Names the product as the way to do the thing the film just showed.
keyMessage: HYPERFRAMES로.
On screen, not spoken. Dress `storyboard.html#frame-06`: icon above the word, both centered, above the caption band. The word is the registry component `shutter-slam`. Do not redraw the mark.

Scene 1 (0.0–0.7s): the icon settles in from a slight scale, smooth `power3`, centered in the upper half. No word yet.
Scene 2 (0.7–2.0s): "HYPERFRAMES로." hits through **shutter-slam** and holds with the icon. "로." is the green accent. Still after the slam. No extra particles.
