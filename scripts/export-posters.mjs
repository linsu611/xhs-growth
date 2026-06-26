import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "exports");
mkdirSync(outDir, { recursive: true });

const edgeCandidates = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
];

const browser = edgeCandidates.find((path) => existsSync(path));
if (!browser) {
  throw new Error("No Edge/Chrome executable found for poster export.");
}

const baseUrl = process.env.POSTER_BASE_URL || "http://127.0.0.1:5174";
const exports = [
  ["01-cover.png", `${baseUrl}/?poster=cover`],
  ...Array.from({ length: 10 }, (_, index) => {
    const rank = index + 1;
    return [
      `${String(rank + 1).padStart(2, "0")}-skill-${String(rank).padStart(2, "0")}.png`,
      `${baseUrl}/?poster=detail&rank=${rank}`,
    ];
  }),
];

for (const [filename, url] of exports) {
  const output = join(outDir, filename);
  execFileSync(browser, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--window-size=1080,1440",
    `--screenshot=${output}`,
    url,
  ], { stdio: "inherit" });
  console.log(`exported ${filename}`);
}
