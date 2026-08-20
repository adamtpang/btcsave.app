import path from 'node:path'
import fs from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Copies the git-tracked prerendered/ snapshots (produced locally by
// `npm run prerender`, see scripts/prerender.mjs) into dist/ after every
// build. Pure filesystem I/O, no headless browser -- Vercel's build
// container can't launch Puppeteer's bundled Chromium (missing
// libnspr4.so, confirmed via a real failed deploy 2026-08-20), so the
// actual browser crawl only ever runs locally; this plugin is what lets
// the resulting static HTML ride along into every production build.
function copyPrerendered() {
  return {
    name: 'copy-prerendered',
    closeBundle() {
      const src = path.resolve(__dirname, 'prerendered')
      const dest = path.resolve(__dirname, 'dist')
      if (!fs.existsSync(src)) return
      fs.cpSync(src, dest, { recursive: true })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), copyPrerendered()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
