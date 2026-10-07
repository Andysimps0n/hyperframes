/**
 * Builds the nine scene files for episode 7.
 *
 * Why a script: every scene shares one design system (colors, type, crayon
 * rims). The copy and the mock live in the data below. Running this file
 * writes compositions/frames/*.html, which HyperFrames actually renders.
 *
 * Motion model, same in every scene:
 *   1. The cream paper is already there (the empty canvas).
 *   2. Each .enter node comes in at data-at seconds, top to bottom.
 *   3. Near the end they leave in reverse, so the next scene starts clean.
 *
 * Crayon filters are on shapes (the rim, the blob, the highlighter bar).
 * They are never on a node that contains letters.
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const framesDir = join(root, "compositions", "frames");

const CSS = `
@font-face { font-family: "Jua"; src: url("assets/fonts/Jua-Regular.woff2") format("woff2"); font-weight: 400; font-display: block; }
@font-face { font-family: "Gaegu"; src: url("assets/fonts/Gaegu-Bold.woff2") format("woff2"); font-weight: 700; font-display: block; }
@font-face { font-family: "Pretendard"; src: url("assets/fonts/Pretendard-Medium.woff2") format("woff2"); font-weight: 500; font-display: block; }
@font-face { font-family: "Pretendard"; src: url("assets/fonts/Pretendard-SemiBold.woff2") format("woff2"); font-weight: 600; font-display: block; }
@font-face { font-family: "Pretendard"; src: url("assets/fonts/Pretendard-Bold.woff2") format("woff2"); font-weight: 700; font-display: block; }
@font-face { font-family: "JetBrains Mono"; src: url("assets/fonts/JetBrainsMono-Medium.woff2") format("woff2"); font-weight: 500; font-display: block; }

#root {
  position: absolute;
  inset: 0;
  width: 1080px;
  height: 1920px;
  overflow: hidden;
  color: #3D3654;
  font-family: "Pretendard", sans-serif;
  word-break: keep-all;
  background: #FFF9F0;
}
.clip { position: absolute; inset: 0; }
.paper {
  background-color: #FFF9F0;
  background-image: radial-gradient(circle, #EFE2CC 2.2px, transparent 2.5px);
  background-size: 48px 48px;
}
.defs { position: absolute; width: 0; height: 0; overflow: hidden; }
.sheet {
  position: absolute;
  inset: 0;
  padding: 200px 100px 240px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.sheet.mid { justify-content: center; }
.footer {
  position: absolute;
  left: 100px;
  right: 100px;
  bottom: 196px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  z-index: 4;
}
.handle { font-family: "Gaegu", sans-serif; font-weight: 700; font-size: 34px; color: #7A7291; }
.page { font-family: "JetBrains Mono", monospace; font-weight: 500; font-size: 24px; letter-spacing: 0.06em; color: #7A7291; }

.kicker { font-family: "Gaegu", sans-serif; font-weight: 700; font-size: 36px; color: #D9637F; line-height: 1.1; }
#root b { color: #D9637F; font-weight: 700; }
.hl { position: relative; display: inline-block; }
.hl i {
  position: absolute;
  z-index: 0;
  left: -2%;
  right: -2%;
  top: 22%;
  bottom: 8%;
  background: #FFE08A;
  border-radius: 8px;
  transform: rotate(-1.4deg);
  filter: url(#wax);
}
.hl-t { position: relative; z-index: 1; color: #3D3654; }

.cover-line { font-family: "Jua", sans-serif; font-weight: 400; font-size: 84px; line-height: 1.16; color: #3D3654; }
.sheet.cover { padding-top: 430px; justify-content: flex-start; gap: 0; }
.cover-sub { margin-top: 28px; max-width: 700px; font-size: 32px; font-weight: 600; line-height: 1.45; color: #7A7291; }
.blob-wrap { position: absolute; top: 200px; right: -70px; width: 560px; height: 560px; }
.blob { width: 100%; height: 100%; border-radius: 50%; background: #F9B4C4; opacity: 0.55; filter: url(#wax); }
.star { position: absolute; }
.star.a { top: 360px; left: 620px; }
.star.b { top: 470px; left: 800px; }
.compass { position: absolute; top: 196px; right: 108px; width: 86px; height: 86px; }
.route { position: absolute; left: 0; right: 0; bottom: 330px; width: 1080px; height: 180px; }
.xmark { position: absolute; right: 120px; bottom: 390px; width: 108px; height: 108px; }

.chat-title { display: flex; align-items: center; gap: 12px; font-family: "Jua", sans-serif; font-size: 52px; line-height: 1.2; }
.row { display: flex; align-items: flex-end; gap: 10px; }
.row.me { justify-content: flex-end; }
.who {
  width: 52px; height: 52px; border-radius: 50%;
  display: grid; place-items: center; flex: none;
  font-family: "Jua", sans-serif; font-size: 22px;
  background: #F9B4C4; color: #3D3654;
}
.row.ai .who { background: #A9D3F5; }
.bubble { position: relative; max-width: 78%; border-radius: 26px; padding: 14px 18px; font-size: 30px; font-weight: 700; line-height: 1.35; }
.row.me .bubble { background: #F9B4C4; border-radius: 26px 26px 8px 26px; }
.row.ai .bubble { background: #fff; border-radius: 26px 26px 26px 8px; max-width: 88%; font-weight: 500; }
.bubble .rim {
  position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
  border: 4px solid #3F82C0; filter: url(#wax-stroke);
}
.cap { margin-top: 8px; font-size: 28px; font-weight: 600; line-height: 1.35; color: #7A7291; }
.concl { position: relative; background: #FBEFDD; border-radius: 28px; padding: 22px 26px; font-size: 40px; font-weight: 700; line-height: 1.3; }
.concl .rim { position: absolute; inset: 0; border-radius: inherit; border: 5px solid #E0A722; filter: url(#wax-stroke); pointer-events: none; }

.term-row { display: flex; align-items: baseline; gap: 12px; flex-wrap: wrap; }
.term-name { font-family: "Jua", sans-serif; font-size: 72px; line-height: 1.05; }
.term-name.long { font-size: 52px; }
.term-row.wrap .pron { flex-basis: 100%; }
.pron { font-family: "Pretendard", sans-serif; font-weight: 500; font-size: 28px; color: #7A7291; }
.mean { font-size: 32px; font-weight: 700; line-height: 1.35; }
.when { font-size: 28px; font-weight: 500; line-height: 1.4; color: #7A7291; }
.split { display: flex; gap: 18px; align-items: center; margin-top: 6px; }
.compare { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 8px; }
.box { position: relative; border-radius: 22px; padding: 14px 16px 16px; min-width: 0; }
.box.bad { background: #FBEFDD; }
.box.good { background: #fff; }
.box .rim { position: absolute; inset: 0; border-radius: inherit; pointer-events: none; filter: url(#wax-stroke); }
.box.bad .rim { border: 4px dashed #B9B1C9; }
.box.good .rim { border: 4px dashed #F9B4C4; }
.box-label { font-family: "Gaegu", sans-serif; font-weight: 700; font-size: 28px; color: #D9637F; display: flex; align-items: center; gap: 6px; }
.box p { margin: 6px 0 0; font-size: 28px; font-weight: 600; line-height: 1.35; }
.box.bad p { color: #7A7291; font-weight: 500; }
.arrow { align-self: center; height: 28px; }
.tip {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 8px;
  padding: 14px 18px;
  border-radius: 999px;
  background: #fff;
}
.tip .rim { position: absolute; inset: 0; border-radius: inherit; border: 4px solid #E0A722; filter: url(#wax-stroke); pointer-events: none; }
.tip-k { font-family: "Gaegu", sans-serif; font-weight: 700; font-size: 30px; color: #D9637F; flex: none; }
.tip-tx { font-size: 28px; font-weight: 600; line-height: 1.35; flex: 1; min-width: 0; }

.phone { position: relative; width: 248px; height: 460px; background: #fff; border-radius: 36px; flex: none; }
.phone .rim { position: absolute; inset: 0; border-radius: inherit; border: 7px solid #3D3654; filter: url(#wax-stroke); pointer-events: none; z-index: 3; }
.notch { position: absolute; top: 8px; left: 50%; width: 84px; height: 16px; transform: translateX(-50%); background: #3D3654; border-radius: 0 0 10px 10px; z-index: 2; }
.scr { position: absolute; inset: 0; border-radius: inherit; padding: 40px 14px 14px; display: flex; flex-direction: column; gap: 10px; overflow: hidden; }
.phone.mini { width: 168px; height: 228px; border-radius: 22px; }
.phone.mini .notch { width: 54px; height: 10px; }
.phone.mini .scr { padding: 26px 10px 10px; gap: 7px; }
.ln { height: 10px; border-radius: 6px; background: #EFE2CC; width: 100%; }
.ln.s { width: 62%; }
.ttl { height: 14px; width: 92px; border-radius: 7px; background: #7A7291; opacity: 0.45; }
.steps { position: relative; display: flex; justify-content: space-between; margin: 4px 4px 0; }
.step { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; gap: 6px; width: 64px; }
.sl { font-family: "Pretendard", sans-serif; font-weight: 700; font-size: 18px; color: #3D3654; }
.dot { position: relative; width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; font-family: "Pretendard", sans-serif; font-weight: 700; font-size: 16px; }
.dot.done { background: #D9637F; }
.dot.now { background: #F9B4C4; color: #3D3654; }
.dot.todo { background: #fff; color: #5E5874; box-shadow: inset 0 0 0 2px #B9B1C9; }
.step-line { position: absolute; left: 28px; right: 28px; top: 16px; height: 4px; background: #EFE2CC; z-index: 0; }
.ping { position: absolute; inset: -7px; border: 3px dashed #E0A722; border-radius: 50%; pointer-events: none; }
.ping.rect { border-radius: 14px; inset: -5px; }
.field { height: 40px; border-radius: 12px; background: #fff; box-shadow: inset 0 0 0 3px #EFE2CC; }
.nextbtn { margin-top: auto; height: 42px; border-radius: 999px; background: #F9B4C4; display: grid; place-items: center; font-weight: 700; font-size: 20px; color: #3D3654; }
.prow { display: flex; align-items: center; justify-content: space-between; }
.frac { font-weight: 700; font-size: 20px; }
.track { height: 14px; border-radius: 8px; background: #EFE2CC; overflow: hidden; }
.fill { width: 40%; height: 100%; background: #D9637F; border-radius: 8px; }
.qcard { flex: 1; background: #fff; border-radius: 14px; box-shadow: inset 0 0 0 3px #EFE2CC; padding: 12px; display: flex; flex-direction: column; gap: 8px; }
.choice { height: 16px; border-radius: 8px; background: #FBEFDD; }
.dots { display: flex; gap: 8px; justify-content: center; }
.dots i { width: 12px; height: 12px; border-radius: 50%; background: #EFE2CC; display: block; }
.dots i.on { background: #D9637F; }
.pages { margin-top: auto; display: flex; gap: 5px; justify-content: center; align-items: center; font-weight: 700; font-size: 15px; }
.pages .on { width: 20px; height: 20px; border-radius: 50%; background: #F9B4C4; display: grid; place-items: center; }
.scr.dim { background: rgba(61, 53, 83, 0.35); }
.drawer { position: absolute; left: 0; top: 0; bottom: 0; width: 60%; background: #fff; padding: 28px 8px 8px; display: flex; flex-direction: column; gap: 8px; }
.site { position: relative; width: 300px; height: 420px; background: #fff; border-radius: 18px; flex: none; overflow: hidden; }
.site > .rim { position: absolute; inset: 0; border-radius: inherit; border: 5px solid #3D3654; filter: url(#wax-stroke); pointer-events: none; z-index: 3; }
.dots3 { display: flex; gap: 6px; padding: 12px 14px 0; }
.dots3 i { width: 10px; height: 10px; border-radius: 50%; background: #EFE2CC; display: block; }
.site-row { position: absolute; left: 0; right: 0; top: 32px; bottom: 0; display: flex; }
.side { position: relative; width: 84px; background: color-mix(in srgb, #F9B4C4 45%, white); padding: 14px 8px; display: flex; flex-direction: column; gap: 12px; }
.side .item { display: flex; flex-direction: column; gap: 4px; align-items: flex-start; }
.side .bullet { width: 16px; height: 16px; border-radius: 50%; background: #fff; }
.side .item.on .bullet { background: #D9637F; }
.side .ln { height: 8px; }
.side .item.on .ln { background: #D9637F; opacity: 0.85; }
.main { flex: 1; padding: 14px 12px; display: flex; flex-direction: column; gap: 10px; min-width: 0; }
.cards2 { display: flex; gap: 8px; margin-top: 6px; }
.cards2 i { flex: 1; height: 70px; border-radius: 10px; background: #FBEFDD; display: block; }
.appbar { position: relative; height: 48px; display: flex; align-items: center; gap: 8px; }
.back { position: relative; width: 36px; height: 36px; border-radius: 50%; background: #F9B4C4; display: grid; place-items: center; flex: none; box-shadow: inset 0 0 0 2px #D9637F; }
.apptitle { font-weight: 700; font-size: 20px; }
.photo { height: 130px; border-radius: 12px; background: #FFC9A3; }
.cursor { position: absolute; left: 28px; top: 30px; }
.list { display: flex; flex-direction: column; gap: 8px; }
.list .item { height: 36px; display: flex; align-items: center; gap: 8px; }
.list .sq { width: 22px; height: 22px; border-radius: 6px; background: #EFE2CC; flex: none; }
.fab {
  position: absolute; right: 14px; bottom: 16px; width: 58px; height: 58px; border-radius: 50%;
  background: #D9637F; box-shadow: 0 6px 0 #B9B1C9; z-index: 2;
}
.plus, .plus:before, .plus:after { position: absolute; background: #fff; border-radius: 2px; }
.plus { left: 26px; top: 16px; width: 4px; height: 26px; }
.plus:before, .plus:after { content: ""; }
.plus:before { left: -11px; top: 11px; width: 26px; height: 4px; }

.sum-title { font-family: "Jua", sans-serif; font-size: 64px; line-height: 1.2; }
.memo-wrap { align-self: flex-end; margin-right: 8px; }
.memo { font-family: "Gaegu", sans-serif; font-weight: 700; font-size: 36px; color: #E0A722; transform: rotate(-7deg); }
.table { position: relative; background: #fff; border-radius: 28px; padding: 6px 8px 10px; }
.table-rim { position: absolute; inset: 0; border-radius: inherit; border: 5px solid #F9B4C4; filter: url(#wax-stroke); pointer-events: none; }
.tr { display: grid; grid-template-columns: 280px 1fr; gap: 8px; align-items: center; padding: 16px 16px; position: relative; }
.tr + .tr { box-shadow: inset 0 3px 0 #EFE2CC; }
.tr.head { font-family: "Gaegu", sans-serif; font-weight: 700; font-size: 32px; color: #D9637F; padding-bottom: 10px; }
.name { font-family: "Jua", sans-serif; font-size: 32px; line-height: 1.15; }
.ko { display: block; margin-top: 2px; font-family: "Pretendard", sans-serif; font-weight: 500; font-size: 22px; color: #7A7291; }
.job { font-size: 28px; font-weight: 600; line-height: 1.35; }

.end-head { display: flex; align-items: center; gap: 22px; }
.stamp { position: relative; width: 188px; height: 188px; flex: none; }
.stamp-face { position: absolute; inset: 0; border-radius: 50%; background: #FFE08A; filter: url(#wax); transform: rotate(-8deg); }
.stamp-rim { position: absolute; inset: 8px; border-radius: 50%; border: 4px dashed #E0A722; filter: url(#wax-stroke); transform: rotate(-8deg); }
.stamp-ink { position: absolute; inset: 0; display: grid; place-items: center; text-align: center; font-family: "Gaegu", sans-serif; font-weight: 700; font-size: 32px; line-height: 1.15; color: #3D3654; transform: rotate(-8deg); }
.end-title { font-family: "Jua", sans-serif; font-size: 68px; line-height: 1.1; }
.end-sub { margin-top: 8px; font-size: 32px; font-weight: 700; line-height: 1.35; }
.chip-k { font-family: "Gaegu", sans-serif; font-weight: 700; font-size: 32px; color: #D9637F; margin-top: 8px; }
.chip-row { display: flex; flex-wrap: wrap; gap: 10px; }
.chip { position: relative; background: #fff; border-radius: 999px; padding: 10px 16px; font-family: "Jua", sans-serif; font-size: 30px; line-height: 1.1; }
.chip .rim { position: absolute; inset: 0; border-radius: inherit; border: 4px solid #F9B4C4; filter: url(#wax-stroke); pointer-events: none; }
.next { position: relative; background: #FBEFDD; border-radius: 28px; padding: 18px 22px; margin-top: 6px; }
.next .rim { position: absolute; inset: 0; border-radius: inherit; border: 5px solid #F9B4C4; filter: url(#wax-stroke); pointer-events: none; }
.next-k { font-family: "JetBrains Mono", monospace; font-weight: 500; font-size: 26px; letter-spacing: 0.08em; color: #AD4F65; }
.next-t { font-family: "Jua", sans-serif; font-size: 44px; line-height: 1.2; margin-top: 4px; }
.next-d { margin-top: 6px; font-size: 28px; font-weight: 500; line-height: 1.4; color: #7A7291; }
.ctas { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 4px; }
.cta { position: relative; border-radius: 999px; padding: 12px 18px; font-family: "Jua", sans-serif; font-size: 30px; line-height: 1.1; }
.cta.pink { background: #F9B4C4; }
.cta.sun { background: #FFE08A; }
.cta .rim { position: absolute; inset: 0; border-radius: inherit; border: 4px solid #D9637F; filter: url(#wax-stroke); pointer-events: none; }
.cta.sun .rim { border-color: #E0A722; }
.bye { align-self: flex-end; }
.check { position: absolute; left: 78px; bottom: 250px; width: 84px; height: 84px; }
`;

function filters() {
  return `<svg class="defs" aria-hidden="true">
    <filter id="wax" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="3" seed="2" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="7" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <filter id="wax-stroke" x="-12%" y="-12%" width="124%" height="124%">
      <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="2" seed="3" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="2.4" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </svg>`;
}

function footer(page, at) {
  return `<div class="footer enter" data-at="${at}">
    <span class="handle">@crayon.sure</span>
    <span class="page">${page} / 09</span>
  </div>`;
}

function star(size) {
  return `<svg viewBox="0 0 40 40" width="${size}" height="${size}"><polygon points="20,2 25,14 38,15 28,23 31,36 20,29 9,36 12,23 2,15 15,14" fill="#FFE08A" filter="url(#wax)"/></svg>`;
}

function compass() {
  return `<svg viewBox="0 0 80 80" width="86" height="86">
    <circle cx="40" cy="40" r="30" fill="none" stroke="#7A7291" stroke-width="3" filter="url(#wax-stroke)"/>
    <circle cx="40" cy="40" r="3.5" fill="#7A7291"/>
    <path d="M40 14 L47 40 L40 66 L33 40 Z" fill="none" stroke="#7A7291" stroke-width="3" filter="url(#wax-stroke)"/>
  </svg>`;
}

function phoneChrome(inner, mini) {
  return `<div class="phone${mini ? " mini" : ""}">
    <div class="scr${mini ? "" : ""}">${inner}</div>
    <div class="notch"></div>
    <div class="rim"></div>
  </div>`;
}

function stepperMock() {
  return phoneChrome(`
    <div class="steps">
      <div class="step-line"></div>
      <div class="step"><div class="dot done"><svg viewBox="0 0 16 16" width="16" height="16"><path d="M3 8.2 6.2 11.5 13 4.5" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span class="sl">주소</span></div>
      <div class="step"><div class="dot now">2<span class="ping"></span></div><span class="sl">결제</span></div>
      <div class="step"><div class="dot todo">3</div><span class="sl">완료</span></div>
    </div>
    <div class="field"></div>
    <div class="field"></div>
    <div class="nextbtn">다음</div>`);
}

function progressMock() {
  return phoneChrome(`
    <div class="prow"><div class="ttl"></div><span class="frac">2 / 5</span></div>
    <div class="track"><div class="fill"></div></div>
    <div class="qcard"><div class="ln"></div><div class="ln"></div><div class="ln s"></div><div class="choice"></div><div class="choice"></div><div class="choice"></div></div>
    <div class="dots"><i class="on"></i><i class="on"></i><i></i><i></i><i></i></div>`);
}

function sidebarMock() {
  const item = (on) => `<div class="item${on ? " on" : ""}"><i class="bullet"></i><div class="ln"></div></div>`;
  return `<div class="site">
    <div class="dots3"><i></i><i></i><i></i></div>
    <div class="site-row">
      <div class="side"><span class="ping rect"></span>${item(false)}${item(true)}${item(false)}${item(false)}</div>
      <div class="main"><div class="ttl"></div><div class="ln"></div><div class="ln"></div><div class="ln s"></div><div class="cards2"><i></i><i></i></div></div>
    </div>
    <div class="rim"></div>
  </div>`;
}

function backMock() {
  return phoneChrome(`
    <div class="appbar">
      <div class="back">
        <svg viewBox="0 0 16 16" width="16" height="16"><path d="M10 3 L5 8 L10 13" fill="none" stroke="#D9637F" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="ping"></span>
      </div>
      <span class="apptitle">상품 상세</span>
      <svg class="cursor" viewBox="0 0 24 24" width="22" height="22"><path d="M5 3 L5 18 L9 14 L13 21 L16 19 L12 12 L18 12 Z" fill="#3D3654"/></svg>
    </div>
    <div class="photo"></div>
    <div class="ln"></div><div class="ln"></div><div class="ln s"></div>`);
}

function fabMock() {
  const row = `<div class="item"><i class="sq"></i><div class="ln"></div></div>`;
  return phoneChrome(`
    <div class="ttl"></div>
    <div class="list">${row}${row}${row}${row}${row}</div>
    <div class="fab"><span class="plus"></span><span class="ping"></span></div>`);
}

function pageNumMock() {
  return `<div class="phone mini"><div class="scr">
      <div class="ln"></div><div class="ln"></div><div class="ln s"></div><div class="ln"></div>
      <div class="pages"><span>1</span><span class="on">2</span><span>3</span><span>4</span><span>5</span><span>&gt;</span></div>
    </div><div class="notch"></div><div class="rim"></div></div>`;
}

function drawerMock() {
  return `<div class="phone mini"><div class="scr dim">
      <div class="drawer"><div class="ln"></div><div class="ln"></div><div class="ln s"></div><div class="ln"></div></div>
    </div><div class="notch"></div><div class="rim"></div></div>`;
}

const pencil = `<svg viewBox="0 0 28 28" width="28" height="28"><path d="M6 20 L8 14 L18 4 L22 8 L12 18 Z" fill="none" stroke="#E0A722" stroke-width="2" filter="url(#wax-stroke)"/><path d="M6 20 L8 22 L12 18" fill="none" stroke="#E0A722" stroke-width="2"/></svg>`;

function termFrame(spec) {
  const mocks = { stepper: stepperMock, progress: progressMock, sidebar: sidebarMock, back: backMock, fab: fabMock };
  const nameAt = spec.long ? "0.50" : "0.45";
  const meanAt = spec.long ? "1.25" : "1.15";
  const whenAt = spec.long ? "1.65" : "1.55";
  const mockAt = spec.long ? "2.15" : "2.05";
  const badAt = spec.long ? "2.75" : "2.60";
  const arrowAt = spec.long ? "3.15" : "3.05";
  const goodAt = spec.long ? "3.50" : "3.35";
  const tipAt = spec.long ? "4.05" : "3.90";
  const footAt = spec.long ? "4.45" : "4.25";
  const body = `
    <div class="sheet mid">
      <div class="kicker enter" data-at="0.15">${spec.stage}</div>
      <div class="term-row enter${spec.long ? " wrap" : ""}" data-at="${nameAt}">
        <span class="term-name${spec.long ? " long" : ""}">${spec.name}</span>
        <span class="pron">${spec.pron}</span>
      </div>
      <p class="mean enter" data-at="${meanAt}">${spec.mean}</p>
      <p class="when enter" data-at="${whenAt}">${spec.when}</p>
      <div class="split">
        <div class="enter" data-at="${mockAt}" data-move="scale">${mocks[spec.mock]()}</div>
        <div class="compare">
          <div class="box bad enter" data-at="${badAt}">
            <div class="rim"></div>
            <div class="box-label">× 잘못된 설명</div>
            <p>"${spec.before}"</p>
          </div>
          <div class="arrow enter" data-at="${arrowAt}" data-move="fade"><svg viewBox="0 0 24 28" width="24" height="28"><path d="M12 3 V20 M6 15 L12 22 L18 15" fill="none" stroke="#D9637F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div class="box good enter" data-at="${goodAt}">
            <div class="rim"></div>
            <div class="box-label">☆ 용어를 알고 난 후</div>
            <p>"${spec.after}"</p>
          </div>
        </div>
      </div>
      <div class="tip enter" data-at="${tipAt}">
        <div class="rim"></div>
        ${pencil}
        <span class="tip-k">팁</span>
        <span class="tip-tx">${spec.tip}</span>
      </div>
    </div>
    ${footer(spec.page, footAt)}`;
  return writeScene(spec.id, spec.dur, body);
}

const TERMS = [
  {
    id: "03-stepper", dur: 6.4, page: "03", stage: "UI 용어 ①", name: "Stepper", pron: "[스테퍼]",
    mean: "이름 붙은 단계를 순서대로 보여 주는 줄이에요.",
    when: "주문, 회원가입처럼 여러 단계를 거칠 때 써요.",
    before: "주소, 결제, 완료 순서로 단계 보이게 해줘",
    after: "주문 화면 위에 <b>Stepper</b>로 3단계를 보여줘",
    tip: "<b>Stepper</b>는 순서대로 거치는 단계, 4탄 <b>Pagination</b>은 아무 쪽이나 고르는 번호예요.",
    mock: "stepper",
  },
  {
    id: "04-progress", dur: 6.7, page: "04", stage: "UI 용어 ②", name: "Progress Indicator", pron: "[프로그레스 인디케이터]",
    long: true,
    mean: "전체 중 얼마나 왔는지 보여 주는 막대나 점이에요.",
    when: "설문, 온보딩처럼 끝까지 얼마나 남았는지 알려 줄 때 써요.",
    before: "5개 중에 몇 번째인지 막대로 보여줘",
    after: "설문 위에 <b>Progress Indicator</b>를 넣어줘",
    tip: "단계 이름까지 보여 주면 <b>Stepper</b>, 얼마나 왔는지만 보여 주면 <b>Progress Indicator</b>예요.",
    mock: "progress",
  },
  {
    id: "05-sidebar", dur: 6.4, page: "05", stage: "UI 용어 ③", name: "Sidebar", pron: "[사이드바]",
    mean: "화면 옆에 늘 떠 있는 세로 메뉴예요.",
    when: "대시보드처럼 메뉴가 많고 화면이 넓을 때 써요.",
    before: "왼쪽에 메뉴가 늘 떠 있게 해줘",
    after: "관리자 화면 왼쪽에 <b>Sidebar</b>를 넣어줘",
    tip: "<b>Sidebar</b>는 늘 떠 있고, 1탄 <b>Drawer</b>는 눌러야 밀려 나와요.",
    mock: "sidebar",
  },
  {
    id: "06-back", dur: 6.4, page: "06", stage: "UI 용어 ④", name: "Back Button", pron: "[백 버튼]",
    mean: "바로 전 화면으로 돌아가는 버튼이에요.",
    when: "상세 화면에서 목록으로 한 칸 돌아갈 때 써요.",
    before: "왼쪽 위에 화살표 누르면 전 화면으로 가게 해줘",
    after: "상세 화면 왼쪽 위에 <b>Back Button</b>을 넣어줘",
    tip: "<b>Back Button</b>은 한 칸 뒤로, 2탄 <b>Breadcrumb</b>은 지나온 길 전체를 보여 줘요.",
    mock: "back",
  },
  {
    id: "07-fab", dur: 6.4, page: "07", stage: "UI 용어 ⑤", name: "FAB", pron: "[팹]",
    mean: "<b>Floating Action Button</b>의 줄임말. 화면 위에 떠 있는 동그란 버튼이에요.",
    when: "글쓰기처럼 가장 자주 하는 일 하나를 늘 누르게 할 때 써요.",
    before: "오른쪽 아래에 동그란 + 버튼 떠 있게 해줘",
    after: "목록 화면에 글쓰기 <b>FAB</b>를 넣어줘",
    tip: "<b>FAB</b>에는 가장 중요한 일 <b>하나</b>만 넣어요.",
    mock: "fab",
  },
];

function cover() {
  const body = `
    <div class="blob-wrap enter" data-at="0.15" data-move="scale" data-layout-allow-overflow><div class="blob"></div></div>
    <div class="star a enter" data-at="0.45" data-move="scale">${star(34)}</div>
    <div class="star b enter" data-at="0.62" data-move="scale">${star(26)}</div>
    <div class="compass enter" data-at="0.78" data-move="scale">${compass()}</div>
    <div class="sheet cover">
      <div class="cover-line enter" data-at="1.15">AI가 알아먹는</div>
      <div class="cover-line enter" data-at="1.55"><span class="hl"><i></i><span class="hl-t">UI 용어집</span></span> 7탄</div>
      <p class="cover-sub enter" data-at="2.05">AI한테 설명하다 지친<br>나를 위한 단계와 길을 보여주는 UI 5개</p>
    </div>
    <svg class="route enter" data-at="2.55" data-move="fade" data-layout-allow-overflow viewBox="0 0 1080 180">
      <path d="M-10 130 C 180 130, 260 40, 480 70 S 820 150, 1000 48" fill="none" stroke="#D9637F" stroke-width="5" stroke-linecap="round" stroke-dasharray="2 12" filter="url(#wax-stroke)"/>
    </svg>
    <div class="xmark enter" data-at="3.05" data-move="scale">
      <svg viewBox="0 0 80 80" width="108" height="108"><path d="M18 18 L62 62 M62 18 L18 62" fill="none" stroke="#F9B4C4" stroke-width="10" stroke-linecap="round" filter="url(#wax-stroke)"/></svg>
    </div>
    ${footer("01", "3.40")}`;
  return writeScene("01-cover", 5.8, body);
}

function chat() {
  const body = `
    <div class="sheet mid">
      <div class="chat-title enter" data-at="0.20">
        <svg viewBox="0 0 36 36" width="40" height="40"><path d="M8 8 H28 V22 H16 L10 28 V22 H8 Z" fill="none" stroke="#D9637F" stroke-width="2.5" filter="url(#wax-stroke)"/></svg>
        <span>이런 상황이 답답하시죠,,</span>
      </div>
      <div class="row me enter" data-at="0.70"><div class="bubble">주소, 결제, 완료 순서로<br>단계 보이게 해줘</div><div class="who">나</div></div>
      <div class="row ai enter" data-at="1.45"><div class="who">AI</div><div class="bubble"><div class="rim"></div>${pageNumMock()}<div class="cap">(1 2 3 4 5 쪽 번호를<br>달아 옴)</div></div></div>
      <div class="row me enter" data-at="2.35"><div class="bubble">왼쪽에 메뉴가<br>늘 떠 있게 해줘</div><div class="who">나</div></div>
      <div class="row ai enter" data-at="3.15"><div class="who">AI</div><div class="bubble"><div class="rim"></div>${drawerMock()}<div class="cap">(눌러야 밀려 나오는<br>메뉴를 만들어 옴)</div></div></div>
      <div class="row me enter" data-at="4.05"><div class="bubble">아니 그게 아니라,,</div><div class="who">나</div></div>
      <div class="concl enter" data-at="4.70"><div class="rim"></div><span class="hl"><i></i><span class="hl-t">Stepper, Sidebar</span></span>라고<br>한 마디면 끝났을 일</div>
    </div>
    ${footer("02", "5.15")}`;
  return writeScene("02-chat", 7.6, body);
}

function summary() {
  const rows = [
    ["Stepper", "스테퍼", "이름 붙은 단계를 순서대로 보여 줘요."],
    ["Progress Indicator", "프로그레스 인디케이터", "얼마나 왔는지 막대나 점으로 보여 줘요."],
    ["Sidebar", "사이드바", "화면 옆에 늘 떠 있는 세로 메뉴예요."],
    ["Back Button", "백 버튼", "바로 전 화면으로 돌아가요."],
    ["FAB", "팹", "화면 위에 떠 있는 동그란 버튼이에요."],
  ];
  const trs = rows
    .map(
      (r, i) => `<div class="tr enter" data-at="${(1.7 + i * 0.32).toFixed(2)}">
        <div><span class="name">${r[0]}</span><span class="ko">${r[1]}</span></div>
        <div class="job">${r[2]}</div>
      </div>`,
    )
    .join("");
  const body = `
    <div class="sheet mid">
      <div class="kicker enter" data-at="0.15">한 눈에 정리</div>
      <div class="sum-title enter" data-at="0.50">헷갈릴 땐 <span class="hl"><i></i><span class="hl-t">이 표</span></span> 하나</div>
      <div class="memo-wrap enter" data-at="0.95" data-move="scale"><div class="memo">저장 필수!</div></div>
      <div class="table enter" data-at="1.25">
        <div class="table-rim"></div>
        <div class="tr head"><span>이름</span><span>기능</span></div>
        ${trs}
      </div>
    </div>
    ${footer("08", "3.55")}`;
  return writeScene("08-summary", 7, body);
}

function ending() {
  const chip = (label, at) =>
    `<span class="chip enter" data-at="${at}" data-move="scale"><span class="rim"></span>${label}</span>`;
  const body = `
    <div class="check enter" data-at="0.40" data-move="scale">
      <svg viewBox="0 0 80 80" width="84" height="84"><path d="M16 42 L32 58 L66 20" fill="none" stroke="#D9637F" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" filter="url(#wax-stroke)"/></svg>
    </div>
    <div class="sheet mid">
      <div class="end-head">
        <div class="enter" data-at="0.15" data-move="scale">
          <div class="stamp"><div class="stamp-face"></div><div class="stamp-rim"></div><div class="stamp-ink">오늘 배운<br>단어 5개</div></div>
        </div>
        <div>
          <div class="end-title enter" data-at="0.55">오늘의 정리</div>
          <div class="end-sub enter" data-at="0.95">저장해두고<br>AI한테 써먹어보세요</div>
        </div>
      </div>
      <div class="chip-k enter" data-at="1.30">✦ 이제 이렇게 말해요</div>
      <div class="chip-row">
        ${chip("Stepper", "1.60")}
        ${chip("Progress Indicator", "1.74")}
      </div>
      <div class="chip-row">
        ${chip("Sidebar", "1.90")}
        ${chip("Back Button", "2.04")}
        ${chip("FAB", "2.18")}
      </div>
      <div class="next enter" data-at="2.45">
        <div class="rim"></div>
        <div class="next-k">다음 편</div>
        <div class="next-t">목록과 정보를 담는 UI 편</div>
        <div class="next-d">표, 목록, 프로필 사진처럼<br>정보를 담는 UI</div>
      </div>
      <div class="ctas">
        <div class="cta pink enter" data-at="3.05"><span class="rim"></span>🔖 저장하고 써먹기</div>
        <div class="cta sun enter" data-at="3.22"><span class="rim"></span>👀 팔로우하고 다음 편 보기</div>
      </div>
      <div class="memo-wrap bye enter" data-at="3.50" data-move="scale"><div class="memo">다음 편에서 만나요!</div></div>
    </div>
    ${footer("09", "3.80")}`;
  return writeScene("09-ending", 6.4, body);
}

function script(id, dur) {
  return `
    (function () {
      var id = ${JSON.stringify(id)};
      var root = document.querySelector('[data-composition-id="' + id + '"]');
      var tl = gsap.timeline({ paused: true });
      var nodes = Array.prototype.slice.call(root.querySelectorAll(".enter"));
      nodes.forEach(function (el) {
        var move = el.getAttribute("data-move") || "rise";
        var from = { opacity: 0 };
        var to = { opacity: 1, duration: 0.42, ease: "power3.out", immediateRender: true };
        if (move === "scale") {
          from.scale = 0.7;
          to.scale = 1;
        } else if (move === "fade") {
          from.y = 8;
          to.y = 0;
        } else {
          from.y = 26;
          to.y = 0;
        }
        tl.fromTo(el, from, to, parseFloat(el.getAttribute("data-at") || "0"));
      });
      var exitAt = ${dur} - 0.62;
      nodes.slice().sort(function (a, b) {
        return parseFloat(b.getAttribute("data-at") || "0") - parseFloat(a.getAttribute("data-at") || "0");
      }).forEach(function (el, i) {
        tl.to(el, { opacity: 0, y: -16, duration: 0.26, ease: "power2.in" }, exitAt + i * 0.018);
      });
      window.__timelines = window.__timelines || {};
      window.__timelines[id] = tl;
    })();`;
}

function writeScene(id, dur, inner) {
  const html = `<!doctype html>
<html lang="ko">
<head><meta charset="UTF-8" /></head>
<body>
<template>
  <style>${CSS}</style>
  ${filters()}
  <div id="root" data-composition-id="${id}" data-width="1080" data-height="1920" data-duration="${dur}">
    <div id="paper-${id}" class="paper clip" data-start="0" data-duration="${dur}" data-track-index="0"></div>
    <div id="stage-${id}" class="clip" data-start="0" data-duration="${dur}" data-track-index="1">
      ${inner}
    </div>
  </div>
  <script>${script(id, dur)}</script>
</template>
</body>
</html>
`;
  const file = join(framesDir, `${id}.html`);
  writeFileSync(file, html);
  return file;
}

cover();
chat();
for (const term of TERMS) termFrame(term);
summary();
ending();
console.log("wrote 9 frames");
