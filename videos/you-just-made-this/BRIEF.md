---
workflow: motion-graphics
flow: automation
storyboard: no
message: "You just made this with HyperFrames"
aspect: 1920x1080
language: en
length: 8s
narration: no
---

## Intent

An 8-second, 1920×1080 motion graphic. Motion is the message: a dark macOS terminal types a command, shatters, then a bold white end card slams in on black. No narration.

## Assets

None. No external assets.

## Customizations

- Beat 1 (0–4s): a dark macOS terminal window types `npx skills add heygen-com/hyperframes` character by character, then a beat on the blinking cursor. Use the registry `code-typing` block.
- Beat 2 (4–5s): the terminal shatters into fragments. Use the registry shatter block (`vfx-shatter`).
- Beat 3 (5–8s): bold white kinetic text on black slams in, word by word: `YOU JUST MADE THIS / WITH HYPERFRAMES.`

## Notes

- No narration, no external assets.
- Route is motion-graphics: autonomous, no storyboard, no companion session.

### Stated by the user

- Length 8 seconds, canvas 1920×1080.
- The three beats, the exact command, and the exact end-card copy.
- Registry blocks for code typing and shatter.
- No narration and no external assets.

### Inferred

- Workflow `motion-graphics`, `flow: automation`, `storyboard: no` — this route is autonomous and does not ask run-shape questions.
- Language `en`, from the on-screen English copy.
- Destination left unset. The canvas was given directly, so it does not change the frame.
- End-card motion uses the registry kinetic slam (`caption-kinetic-slam`), customized so the words land as two lines and stay up.
- Palette: near-black terminal chrome, pure black end card, white type. Terminal face: JetBrains Mono. End card: Archivo Black.
