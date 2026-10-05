---
format: 1080x1920
duration: 44s
message: "HyperFrames를 쓰면 말 한 줄로, 원하는 그대로 나오는 영상을 만들 수 있어요."
arc: concept-explainer with process
audience: "개발에 관심 있는 사람, 웹 입문부터 주니어, AI로 만드는 사람"
mode: autonomous
music: none
narration: no
vo_mode: verbatim
captions: skipped (no narration; the card copy is the subtitle)
---

## Video direction

이 영상은 공부 노트 릴스다. 말하는 사람은 없고, 장면 글자가 자막이다.

- 팔레트는 `frame.md`만. paper `#FFF9F0`, ink `#3D3553`, sky `#A9D3F5`, pink `#F9B4C4`, mint `#B4E3BE`, sun `#FFE08A`.
- 배경은 미색 종이 + 48px 연한 점 모눈. 카탈로그에 이 종이 모눈은 없었다. `dynamic-grid`는 제품 UI 그리드라 쓰지 않는다.
- 밑줄·형광펜은 카탈로그 `marker-highlight`의 일(한 단어 위에 손그림 획). 글자가 흔들리면 안 되므로 블록을 통째로 끼우지 않고, 획만 `svg-path-draw`로 그린다. `hw-box-label`은 글자까지 손글씨가 되어 쓰지 않는다.
- 모션은 긴 감속. 통통 튀기, 호흡, 떠다니는 장식 금지. 드러남은 장면 시간에 맞추고, 앞 25%에 몰아넣지 않는다.
- 리듬: 1 표지, 2 이름, 3 단계가 쌓임, 4 타이핑, 5 표, 6 메시지 홀드, 7 짧은 증거, 8 엔딩.
- 안전: y 0–250과 y 1670–1920에는 글자 없음. 크롬은 top 270px / bottom 270px.
- 모든 장면 t=0부터 크롬 두 줄이 보인다. 오른쪽 위 `이것도 AI로 돼?`, 왼쪽 아래 `@crayon.sure`. Gaegu 700 34px, ink-soft.
- 금지: 사진, 로고 이미지, 퀘스트·탐험·클리어, 흰 글자, 글자 위 질감, 자막 알약, 음성.

## Frame 1 — Cover

- scene: Episode label, then the series title, then the outcome line with one underline
- voiceover: ""
- duration: 4.5s
- transition_in: cut
- status: animated
- src: compositions/frames/01-cover.html
- type: hook
- persuasion: Concept announcement
- beat: curiosity
- blueprint: compose
- sfx: pop
- focal: the series title
- roles: title = foreground subject · outcome line = supporting · paper dot grid = background

narrativeRole: Opens on the viewer's outcome, editing a video without an editor.
keyMessage: 편집 툴 없이 영상을 만들 수 있다는 질문으로 시작한다.
On screen, not spoken. Render only the quoted strings. Do not render this paragraph.

Adapt: keep the kinetic-type signature (words are the motion, plus one drawn accent underline). Change: beats stack and stay, they do not replace each other. No logo, no bounce.

Scene 1 (0.0–1.2s): paper and dot grid already full bleed. Chrome is on. A sky pill at the upper third of the safe area pops in by **spring-pop-entrance** (smooth settle, no overshoot) carrying the exact text `이것도 AI로 돼? 1탄`. Centered in the safe column. Nothing else yet.
Scene 2 (1.2–2.6s): the title `이것도 AI로 돼?` reveals by **per-word staggered reveal** → `dynamic-content-sequencing`, Jua display, ink, centered under the pill. It fills the column width.
Scene 3 (2.6–4.5s): the line `편집 툴 없이 영상 만들기` fades up in body type. A sun marker underline draws under the word `영상` only → `svg-path-draw`. Then hold still.

## Frame 2 — What it is

- scene: The name lands, then a one-line definition, then a tilted memo
- voiceover: ""
- duration: 5s
- transition_in: push-slide UP
- status: animated
- src: compositions/frames/02-what.html
- type: product_intro
- persuasion: Distillation
- beat: recognition
- blueprint: compose
- sfx: whoosh
- focal: the word HyperFrames
- roles: wordmark = foreground subject · definition = supporting · memo = supporting · paper = background

narrativeRole: Names the tool in one sentence and says who made it.
keyMessage: HyperFrames는 HTML로 영상이 나오는 도구이고, HeyGen의 무료 오픈소스다.
On screen, not spoken. Render only the quoted strings.

Adapt: product-intro namedrop. Signature is the wordmark arriving as the hero, with one sky underline. The definition and memo stack under it and stay.

Scene 1 (0.0–1.6s): chrome and paper. The word `HyperFrames` scales down smoothly into the upper safe center, Jua, very large, ink. A sky stroke underlines it → `svg-path-draw`.
Scene 2 (1.6–3.2s): the sentence `HTML을 쓰면 영상이 나오는 도구예요` reveals by **per-word staggered reveal** → `dynamic-content-sequencing` under the name. Pretendard, ink.
Scene 3 (3.2–5.0s): a warm paper memo, tilted about -4deg, pops in by **spring-pop-entrance** at the lower safe area. Hand type, sky-deep. Exact text `HeyGen이 만든 무료 오픈소스`. Hold.

## Frame 3 — How it works

- scene: A title, then three numbered step cards stack down the safe area
- voiceover: ""
- duration: 7.5s
- transition_in: push-slide UP
- status: animated
- src: compositions/frames/03-how.html
- type: feature_showcase
- persuasion: Signposting + numbered enumeration
- beat: comprehension
- blueprint: grid-card-assemble (Reproduce)
- sfx: pop, click-soft, click
- focal: the three step cards
- roles: step list = foreground subject · title = supporting · paper = background

narrativeRole: Shows the three moves from HTML to MP4.
keyMessage: 장면을 적고, 크롬이 프레임을 찍고, 이어 붙여 MP4가 된다.
On screen, not spoken. Render only the quoted strings. Keep `data-start` and `data-duration` in JetBrains Mono.

Reproduce the benefits vertical-list: title first, then one card per second-ish, each staying on screen. Signature is the staggered assemble. Marker numbers are sky circles with ink numerals. Card fill is white, 6px ink border with crayon on the border only. Checks are not needed here.

Scene 1 (0.0–1.2s): chrome and paper. Title `어떻게 작동해요?` lands word by word with a smooth settle. The word `작동` gets a sun marker bar behind it, not a filter on the glyphs.
Scene 2 (1.2–3.2s): card ① slides into its slot → `center-outward-expansion`. Exact text `HTML·CSS로 장면을 짜고, data-start / data-duration으로 시간을 적어요`.
Scene 3 (3.2–5.2s): card ② arrives the same way. Exact text `보이지 않는 크롬이 페이지를 한 프레임씩 찍어요`.
Scene 4 (5.2–7.5s): card ③ arrives. Exact text `이어 붙여 MP4가 돼요`. Hold. All three cards stay readable inside the safe area.

## Frame 4 — The prompt

- scene: A prompt card types one sentence, then two caption lines land under it
- voiceover: ""
- duration: 6.5s
- transition_in: crossfade
- status: animated
- src: compositions/frames/04-prompt.html
- type: feature_showcase
- persuasion: Demonstration
- beat: comprehension
- blueprint: typewriter-reveal (Adapt)
- sfx: typing
- focal: the prompt card
- roles: prompt card = foreground subject · two lines = supporting · paper = background

narrativeRole: Shows the one line you type, and why that is enough.
keyMessage: AI는 HTML을 잘 쓰고, 이 한 줄이면 된다.
On screen, not spoken. Render only the quoted strings. The prompt spelling is `Hyperframes`, not HyperFrames.

Adapt: sub-shape A, the typed ask is the show. No submit button, no generated video, no logo. Signature is character-by-character typing with a caret → `discrete-text-sequence`.

Scene 1 (0.0–1.2s): chrome and paper. A white card with a sky border (crayon on the border only) sits in the safe center. A small hand label `프롬프트` is already on the card's top edge. The field is empty except a blinking caret.
Scene 2 (1.2–4.2s): the sentence types. Exact text `Hyperframes를 소개하는 영상을 만들어줘.` Caret stays at the end.
Scene 3 (4.2–5.4s): under the card, `AI는 원래 HTML을 잘 써요` reveals word by word with a smooth settle.
Scene 4 (5.4–6.5s): `이 한 줄이면 돼요` reveals the same way, with a sky underline drawing on. Hold.

## Frame 5 — Why it is better

- scene: A two-column comparison table fills row by row
- voiceover: ""
- duration: 7s
- transition_in: push-slide UP
- status: animated
- src: compositions/frames/05-why.html
- type: social_proof
- persuasion: Comparison of two options
- beat: clarity
- blueprint: grid-card-assemble (Adapt)
- sfx: click, pop, ping
- focal: the comparison table
- roles: table = foreground subject · title = supporting · paper = background

narrativeRole: Contrasts generated AI video with HyperFrames on three rows.
keyMessage: 글자는 쓴 그대로, 다시 뽑아도 같고, 고칠 곳은 그 코드만이다.
On screen, not spoken. Render only the quoted strings. No pictures in the cells.

Adapt: the assemble signature stays (rows cascade into a list). Change: each item is a table row, not a benefit pill. Left column is a pink-tinted cell, right column is a mint-tinted cell. Header row is visible before the body rows.

Scene 1 (0.0–1.3s): chrome and paper. Title `왜 좋아요?` lands. Sun marker behind `좋아요` only. Header cells appear: `생성형 AI 영상` on pink, `HyperFrames` on mint. A narrow label column stays empty in the header.
Scene 2 (1.3–3.0s): row label `화면 속 글자`, then `뭉개질 때가 있어요`, then `쓴 그대로 나와요`. A mint check draws on the right cell → `svg-path-draw`.
Scene 3 (3.0–4.8s): row `다시 만들면` / `매번 달라져요` / `몇 번을 뽑아도 같아요`, check on the right.
Scene 4 (4.8–7.0s): row `한 군데만 고치기` / `처음부터 다시` / `그 부분 코드만`, check on the right. Hold. Entire table stays inside the safe area.

## Frame 6 — The message

- scene: Two lines of the main message, the second sliding up under the first
- voiceover: ""
- duration: 5s
- transition_in: crossfade
- status: animated
- src: compositions/frames/06-message.html
- type: benefit_highlight
- persuasion: Distillation
- beat: warmth
- blueprint: titlecard-reveal (Adapt)
- sfx: chime
- focal: the two-line message
- roles: message = foreground subject · paper = background

narrativeRole: Lands the line the viewer should remember.
keyMessage: 말 한 줄로, 원하는 그대로 나오는 영상을 만들 수 있다.
On screen, not spoken. Render only the quoted strings. Both lines stay on screen together.

Adapt: one restrained move, then a hold. Change: line 2 joins under line 1 instead of replacing it.

Scene 1 (0.0–1.6s): chrome and paper. `여러분, HyperFrames 좋아요!` eases up into the safe center, Jua title, ink. A sun marker sits behind `좋아요`.
Scene 2 (1.6–3.4s): `HyperFrames를 쓰면 말 한 줄로, 원하는 그대로 나오는 영상을 만들 수 있어요.` slides up from below and settles under the first line by one restrained move. Pretendard, two visual lines if it wraps, still one sentence.
Scene 3 (3.4–5.0s): both lines hold still. No camera drift.

## Frame 7 — Proof

- scene: One proof sentence on a tilted memo card
- voiceover: ""
- duration: 3.5s
- transition_in: cut
- status: animated
- src: compositions/frames/07-proof.html
- type: branding
- persuasion: Callback
- beat: recognition
- blueprint: titlecard-reveal (Reproduce)
- sfx: sparkle
- focal: the proof memo
- roles: memo = foreground subject · paper = background

narrativeRole: Points at this video as the example.
keyMessage: 사실 이 영상도 이렇게 만들었다.
On screen, not spoken. Render only the quoted string.

Reproduce the single-card reveal: one move, then stillness.

Scene 1 (0.0–0.6s): chrome and paper. The safe center is empty except chrome.
Scene 2 (0.6–1.8s): a warm memo card eases up into center, tilted about -3deg, sky crayon border. Exact text `사실 이 영상도 이렇게 만들었어요` in Jua, wrapping to two lines if needed.
Scene 3 (1.8–3.5s): hold still.

## Frame 8 — Ending

- scene: A comment ask, two chips, and a small next-episode memo
- voiceover: ""
- duration: 5s
- transition_in: crossfade
- status: animated
- src: compositions/frames/08-ending.html
- type: cta
- persuasion: Direct address
- beat: invitation
- blueprint: compose
- sfx: notification
- focal: the two chips
- roles: comment line = foreground subject · chips = foreground subject · memo = supporting · paper = background

narrativeRole: Asks for a comment and a follow, and names the next episode.
keyMessage: 댓글에 프롬프트를 남기면 프롬프트를 보내 주고, 다음 편에서 만난다.
On screen, not spoken. Render only the quoted strings. Keep the quotation marks around 프롬프트. Keep the two emoji that are part of the chip copy.

Adapt: CTA beat chain that stacks instead of clearing. Signature is each beat arriving on its own. Smooth settle, no bounce.

Scene 1 (0.0–1.6s): chrome and paper. The sentence `댓글에 "프롬프트" 남기면 제가 쓴 프롬프트 보내드려요` reveals by **per-word staggered reveal** → `dynamic-content-sequencing`, centered in the upper safe area. The word `프롬프트` inside the quotes gets a sun marker.
Scene 2 (1.6–3.2s): two pills stack in a column. First chip sky fill, exact text `🔖 저장하고 써먹기`. Second chip sun fill, exact text `👀 팔로우하고 다음 편 보기`. Each settles with a smooth scale, no bounce.
Scene 3 (3.2–5.0s): a small hand memo `다음 편에서 만나요!` settles under the chips, ink, Gaegu. Hold to the end. This is the last frame, so the hold is the ending. No fade to black.
