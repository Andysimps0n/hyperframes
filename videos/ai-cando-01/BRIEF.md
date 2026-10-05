---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "HyperFrames를 쓰면 말 한 줄로, 원하는 그대로 나오는 영상을 만들 수 있어요."
destination: instagram-reels
aspect: 1080x1920
language: ko
length: 44s
angle: concept
---

## Intent

「이것도 AI로 돼?」 1탄 인스타 릴스. HyperFrames를 공부 노트 말투로 소개한다.
카드뉴스처럼 미색 종이에 점 모눈, 크레용은 선·테두리·체크·밑줄에만.
내레이션 없음. 화면 글자와 효과음만. 말투는 ~해요.

## Assets

- 없음. 이미지·사진·외부 로고 금지. 글자는 HTML/CSS/SVG만.
- 폰트는 `assets/fonts/` (Jua, Gaegu, Pretendard, JetBrains Mono).
- 효과음만. 배경음악 없음.

## Customizations

- 화면 문구와 장면 순서는 사용자가 준 순서를 그대로 쓴다. 연출·길·전환만 워크플로가 정한다.
- 위아래 250px은 글자·중요 UI 금지. 계정 표시는 그 안쪽 가장자리에 둔다.
- 모든 장면: 안전 영역 왼쪽 아래 `@crayon.sure`, 오른쪽 위 `이것도 AI로 돼?`.
- VO_MODE: verbatim. 말한 문장을 바꾸지 않는다. 음성은 만들지 않고 화면에만 적는다.

## Notes

- 쓰지 않는 말: 퀘스트, 탐험, 클리어, 모험, 보물, 지점.
- 글자색은 사용자가 준 `#3D3553`. 메인 `#A9D3F5`, 보조 `#F9B4C4` · `#B4E3BE`.
- 디자인 원본은 `docs/01-design-principles.md`. 캔버스만 릴스 1080×1920.
- 로그인: HeyGen oauth, plan free. 내레이션이 없어서 TTS는 쓰지 않는다.
- 기존 `videos/ai-can-this-01`은 더 짧은 다른 컷이라 덮어쓰지 않고 이 프로젝트를 새로 만들었다.
