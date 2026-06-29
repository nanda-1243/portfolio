#!/usr/bin/env node
// Headless screenshot helper. Drives a real Chromium via puppeteer-core.
//
// Browser resolution order (first that works wins):
//   1. $CHROME_PATH                         — explicit override
//   2. /opt/pw-browsers/chromium-*/chrome   — pre-installed (this sandbox)
//   3. @sparticuz/chromium                  — npm-shipped binary (CDN-blocked envs)
//
// Usage:
//   node scripts/screenshot.mjs <url> <out.png> [full] [width] [height]
// Examples:
//   node scripts/screenshot.mjs http://localhost:4173/portfolio/ /tmp/home.png full
//   node scripts/screenshot.mjs https://nanda-1243.github.io/portfolio/ /tmp/live.png

import { existsSync, readdirSync } from 'node:fs'
import puppeteer from 'puppeteer-core'

const [, , url, out = '/tmp/screenshot.png', full, w = '1440', h = '900'] = process.argv

if (!url) {
  console.error('usage: node scripts/screenshot.mjs <url> <out.png> [full] [width] [height]')
  process.exit(1)
}

function findPreinstalledChromium() {
  if (process.env.CHROME_PATH && existsSync(process.env.CHROME_PATH)) {
    return process.env.CHROME_PATH
  }
  const base = '/opt/pw-browsers'
  if (!existsSync(base)) return null
  for (const dir of readdirSync(base)) {
    if (!dir.startsWith('chromium-')) continue
    const exe = `${base}/${dir}/chrome-linux/chrome`
    if (existsSync(exe)) return exe
  }
  return null
}

async function resolveBrowser() {
  const local = findPreinstalledChromium()
  if (local) {
    return { executablePath: local, args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'] }
  }
  // Fallback: npm-shipped chromium (works where Playwright/Puppeteer CDN is blocked)
  const chromium = (await import('@sparticuz/chromium')).default
  return { executablePath: await chromium.executablePath(), args: chromium.args }
}

const { executablePath, args } = await resolveBrowser()
const browser = await puppeteer.launch({ headless: true, executablePath, args })

try {
  const page = await browser.newPage()
  await page.setViewport({ width: Number(w), height: Number(h), deviceScaleFactor: 1 })
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
  await new Promise((r) => setTimeout(r, 1200)) // settle animations/layout
  await page.screenshot({ path: out, fullPage: full === 'full' })
  console.log(`saved ${out} (${url})`)
} finally {
  await browser.close()
}
