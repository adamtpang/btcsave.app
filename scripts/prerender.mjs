// Post-build prerender: visits every real route in the built SPA with a
// headless browser, waits for React to render, and writes the fully
// rendered HTML back into dist/<route>/index.html. Root "/" overwrites
// dist/index.html directly. This is what makes AI crawlers (GPTBot,
// ClaudeBot, PerplexityBot) see real content: they never execute
// JavaScript, so without this the raw HTML they fetch is an empty shell.
import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";
import handler from "serve-handler";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, "..", "dist");
const PORT = 4173;

const ROUTES = [
  "/",
  "/investors",
  "/rfs",
  "/credit",
  "/design",
  "/pricing",
  "/how",
  "/score",
  "/card",
  "/demo",
  "/legends",
];

async function main() {
  // SPA fallback: any route path (no file extension, not /assets/*) gets the
  // built index.html shell served directly (bypassing serve-handler's own
  // cleanUrls/redirect logic, which fights a mutated req.url), so the client
  // router can take over -- matching the real vercel.json rewrite. Real
  // static assets still resolve through serve-handler normally.
  const shellHtml = await readFile(path.join(DIST, "index.html"), "utf8");
  const server = createServer((req, res) => {
    const url = req.url.split("?")[0];
    const looksLikeRoute = !url.startsWith("/assets/") && !path.extname(url);
    if (looksLikeRoute) {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(shellHtml);
      return;
    }
    return handler(req, res, { public: DIST });
  });
  await new Promise((resolve) => server.listen(PORT, resolve));

  const browser = await puppeteer.launch({ headless: true });

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      const url = `http://localhost:${PORT}${route}`;
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
      // Give the router/animations a moment to settle past first paint.
      await new Promise((r) => setTimeout(r, 400));

      const html = await page.content();
      const outDir = route === "/" ? DIST : path.join(DIST, route.slice(1));
      if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });
      const outFile = path.join(outDir, "index.html");
      await writeFile(outFile, html, "utf8");

      const hasH1 = /<h1[\s>]/.test(html);
      console.log(`${hasH1 ? "OK " : "!! "}${route.padEnd(12)} -> ${path.relative(DIST, outFile)} (${(html.length / 1024).toFixed(1)} KB, h1: ${hasH1})`);

      await page.close();
    }
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
