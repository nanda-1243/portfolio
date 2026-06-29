---
name: screenshot
description: Capture a headless screenshot of a running web page (local dev/preview server or deployed URL) to visually verify UI changes. Use whenever you need to SEE the app — after a UI/layout/motion change, to compare before/after, or to understand current visual state.
---

# Screenshot a web page

Captures a PNG of any URL with headless Chromium so UI work is grounded in what
the page actually looks like instead of guessing.

## Browser resolution (this environment)
This sandbox ships a working headless Chromium at `/opt/pw-browsers/chromium-*`,
so `scripts/screenshot.mjs` uses it directly via `puppeteer-core` — no CDN
download needed. The script falls back to `@sparticuz/chromium` automatically if
no pre-installed browser is found (e.g. a CDN-blocked sandbox). Override with
`CHROME_PATH=/path/to/chrome` if you need a specific binary.

## Steps
1. Install the driver **without saving** (keeps it out of package.json / the build):
   ```bash
   npm install --no-save puppeteer-core
   # only needed where no pre-installed Chromium exists:
   # npm install --no-save @sparticuz/chromium
   ```
2. Make sure the target is reachable. For local UI, build + start the preview
   server first (this is a Vite project served under base `/portfolio/`):
   ```bash
   npm run build && (npm run preview -- --port 4173 >/tmp/preview.log 2>&1 &) ; sleep 3
   ```
   For dev mode instead: `(npm run dev >/tmp/vite.log 2>&1 &) ; sleep 4` (served at `/portfolio/`).
3. Capture:
   ```bash
   node scripts/screenshot.mjs <url> <out.png> [full] [width] [height]
   # examples
   node scripts/screenshot.mjs http://localhost:4173/portfolio/ /tmp/home.png full
   node scripts/screenshot.mjs http://localhost:4173/portfolio/#/project/ai-document-analysis-rag /tmp/detail.png
   node scripts/screenshot.mjs https://nanda-1243.github.io/portfolio/ /tmp/live.png
   ```
4. Read the PNG back (Read tool) to verify it isn't blank/corrupted, then judge the UI.

## Defaults & tips
- Viewport 1440×900, `deviceScaleFactor: 1`; pass width/height to override (e.g. `390 844` for mobile).
- `full` = full-page scroll capture; omit for above-the-fold only.
- Waits for `networkidle0` + 1.2s settle so animations/layout don't smear.
- Routes use `HashRouter`, so deep links include `#/...` (e.g. `/portfolio/#/project/<slug>`).
- `framer-motion` `whileInView` elements only animate in once scrolled into view — a
  single full-page capture can leave below-the-fold blocks at opacity 0. To verify
  those, capture at a scrolled offset (or scroll the page) rather than one full-page shot.
- The script lives at `scripts/screenshot.mjs` (committed). The driver is `--no-save` on purpose — reinstall it in a fresh sandbox.
