import { existsSync, mkdirSync, writeFileSync, appendFileSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const defaultVaultProject = "E:/clam/lifeos/GrowthOS/项目/小红书GitHub榜单运营";
const vaultProject = process.env.XHS_OBSIDIAN_PROJECT || defaultVaultProject;
const profileUrl =
  process.env.XHS_PROFILE_URL ||
  "https://www.xiaohongshu.com/user/profile/6a365916000000000f038c02?tab=note&subTab=note";
const loginMode = process.argv.includes("--login");

const userDataDir = process.env.XHS_BROWSER_PROFILE || join(root, ".xhs-browser-profile");
const monitorDir = join(vaultProject, "小红书监控");
const today = new Date().toISOString().slice(0, 10);
const dailyDir = join(vaultProject, "每日更新", today);
const dailyImageDir = join(dailyDir, "图片素材");
const dailyPublishDir = join(dailyDir, "发布记录");
const dailyMonitorDir = join(dailyDir, "小红书监控");
const dailyRetroDir = join(dailyDir, "复盘记录");
const legacyPublishDir = join(vaultProject, "发布记录");

function findBrowser() {
  const candidates = [
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  ];
  return candidates.find((path) => existsSync(path));
}

function ensureDir(path) {
  mkdirSync(path, { recursive: true });
}

function ensureDailyLayout() {
  ensureDir(dailyImageDir);
  ensureDir(dailyPublishDir);
  ensureDir(dailyMonitorDir);
  ensureDir(dailyRetroDir);

  const readmePath = join(dailyDir, "README.md");
  if (!existsSync(readmePath)) {
    writeFileSync(
      readmePath,
      [
        `# ${today} 每日更新`,
        "",
        "## 文件夹",
        "",
        "| 文件夹 | 内容 |",
        "|---|---|",
        "| `图片素材/` | 今天要发的小红书图片 |",
        "| `发布记录/` | 标题、正文、发布链接、发布前判断 |",
        "| `小红书监控/` | 自动抓取的小红书账号数据 |",
        "| `复盘记录/` | T+3 / T+7 复盘 |",
        "",
        "## 今日状态",
        "",
        "- [ ] 图片素材",
        "- [ ] 发布记录",
        "- [ ] 小红书监控",
        "- [ ] 复盘记录",
      ].join("\n"),
      "utf8",
    );
  }
}

function clean(text = "") {
  return text.replace(/\s+/g, " ").trim();
}

function extractNumber(text = "") {
  const match = text.match(/(\d+(?:\.\d+)?\s*[万kK]?)/);
  return match ? match[1].replace(/\s+/g, "") : "";
}

function toYamlString(value) {
  return String(value ?? "").replace(/"/g, '\\"');
}

function makeSnapshotMarkdown(data) {
  const lines = [];
  lines.push(`# 小红书账号监控 ${today}`);
  lines.push("");
  lines.push(`**抓取时间**：${data.crawledAt}`);
  lines.push(`**主页**：${profileUrl}`);
  lines.push(`**状态**：${data.status}`);
  lines.push("");

  if (data.status !== "ok") {
    lines.push("## 需要处理");
    lines.push("");
    lines.push(data.message || "当前页面没有读到笔记数据。");
    lines.push("");
    lines.push("如果提示需要登录，请在浏览器里扫码登录一次小红书，然后重新运行同步。");
    return lines.join("\n");
  }

  lines.push("## 账号概览");
  lines.push("");
  lines.push(`- 昵称：${data.profile.nickname || ""}`);
  lines.push(`- 小红书号：${data.profile.redId || ""}`);
  lines.push(`- 关注：${data.profile.following || ""}`);
  lines.push(`- 粉丝：${data.profile.followers || ""}`);
  lines.push(`- 获赞与收藏：${data.profile.likesAndCollects || ""}`);
  lines.push("");
  lines.push("## 笔记列表");
  lines.push("");
  lines.push("| 标题 | 链接 | 点赞/互动 |");
  lines.push("|---|---|---:|");
  for (const note of data.notes) {
    lines.push(`| ${note.title || "(未读到标题)"} | ${note.url || ""} | ${note.metric || ""} |`);
  }
  return lines.join("\n");
}

function appendIndex(data, snapshotPath) {
  const indexPath = join(monitorDir, "index.md");
  const header = [
    "# 小红书每日监控",
    "",
    "| 日期 | 状态 | 笔记数 | 粉丝 | 获赞与收藏 | 快照 |",
    "|---|---|---:|---:|---:|---|",
  ];
  if (!existsSync(indexPath)) {
    writeFileSync(indexPath, header.join("\n") + "\n", "utf8");
  }

  const relSnapshot = snapshotPath.replace(vaultProject + "\\", "").replaceAll("\\", "/");
  const row = `| ${today} | ${data.status} | ${data.notes?.length ?? 0} | ${data.profile?.followers ?? ""} | ${data.profile?.likesAndCollects ?? ""} | [[${relSnapshot.replace(/\.md$/, "")}]] |`;
  const existing = readFileSync(indexPath, "utf8").split(/\r?\n/);
  const rows = existing.filter((line) => line.startsWith("| ") && !line.startsWith("| 日期 ") && !line.startsWith("|---") && !line.startsWith(`| ${today} |`));
  writeFileSync(indexPath, [...header, ...rows, row, ""].join("\n"), "utf8");
}

function updatePublishRecords(data) {
  if (data.status !== "ok" || !data.notes?.length) return;

  const files = [];
  const stack = [dailyPublishDir, legacyPublishDir].filter((dir) => existsSync(dir));
  while (stack.length) {
    const dir = stack.pop();
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) stack.push(path);
      if (entry.isFile() && entry.name.endsWith(".md")) files.push(path);
    }
  }

  for (const file of files) {
    let content = readFileSync(file, "utf8");
    let changed = false;
    for (const note of data.notes) {
      if (!note.url) continue;
      const shortUrl = note.url.replace(/^https?:\/\//, "");
      if (content.includes(note.url) || content.includes(shortUrl) || (note.title && content.includes(note.title))) {
        const block = [
          "",
          `## 小红书自动同步 ${today}`,
          "",
          `- 笔记标题：${note.title || ""}`,
          `- 笔记链接：${note.url}`,
          `- 页面可见互动：${note.metric || ""}`,
          `- 抓取时间：${data.crawledAt}`,
          "",
        ].join("\n");
        if (!content.includes(`## 小红书自动同步 ${today}`)) {
          content += block;
          changed = true;
        }
      }
    }
    if (changed) writeFileSync(file, content, "utf8");
  }
}

async function main() {
  ensureDir(monitorDir);
  ensureDir(userDataDir);
  ensureDailyLayout();

  const executablePath = findBrowser();
  if (!executablePath) throw new Error("没有找到 Edge 或 Chrome。");

  const context = await chromium.launchPersistentContext(userDataDir, {
    executablePath,
    headless: false,
    viewport: { width: 1280, height: 900 },
  });
  const page = await context.newPage();
  await page.goto(profileUrl, { waitUntil: "domcontentloaded", timeout: 45000 });

  if (loginMode) {
    console.log("小红书登录模式已打开。请在浏览器中扫码登录；登录完成后回到 Codex 告诉我“好了”。");
    console.log("这个进程会保持浏览器打开，不会自动关闭。");
    await new Promise(() => {});
    return;
  }

  await page.waitForTimeout(5000);

  const data = await page.evaluate(() => {
    const text = document.body.innerText || "";
    const links = Array.from(document.querySelectorAll("a[href]"));
    const noteLinks = links
      .map((a) => ({
        url: a.href,
        text: (a.innerText || "").replace(/\s+/g, " ").trim(),
      }))
      .filter((item) => /xiaohongshu\.com\/(?:explore|discovery\/item)\//.test(item.url))
      .slice(0, 30);

    const noteCards = noteLinks.map((item) => {
      const parts = item.text.split(" ").filter(Boolean);
      const metric = parts.find((part) => /赞|收藏|评论|^\d/.test(part)) || "";
      const title = parts.filter((part) => part !== metric).join(" ").slice(0, 80);
      return { title, url: item.url, metric };
    });

    return {
      text,
      notes: noteCards,
      title: document.title,
    };
  });

  const bodyText = clean(data.text);
  const loginBlocked = bodyText.includes("登录即可查看") || bodyText.includes("手机号登录");
  const empty = bodyText.includes("TA 还没有发布任何内容") || bodyText.includes("笔记・0");

  const profile = {
    nickname: clean(data.title?.replace(" - 小红书", "")),
    redId: clean((bodyText.match(/小红书号[:：]\s*([A-Za-z0-9]+)/) || [])[1] || ""),
    following: extractNumber((bodyText.match(/(\d+(?:\.\d+)?[万kK]?)\s*关注/) || [])[0]),
    followers: extractNumber((bodyText.match(/(\d+(?:\.\d+)?[万kK]?)\s*粉丝/) || [])[0]),
    likesAndCollects: extractNumber((bodyText.match(/(\d+(?:\.\d+)?[万kK]?)\s*获赞与收藏/) || [])[0]),
  };

  const result = {
    crawledAt: new Date().toLocaleString("zh-CN", { hour12: false }),
    status: loginBlocked ? "needs_login" : empty ? "empty" : "ok",
    message: loginBlocked
      ? "小红书当前要求登录后才能查看笔记。"
      : empty
        ? "当前主页没有读到已发布笔记。"
        : "",
    profile,
    notes: data.notes,
  };

  const snapshotPath = join(dailyMonitorDir, `${today}.md`);
  writeFileSync(snapshotPath, makeSnapshotMarkdown(result), "utf8");
  writeFileSync(join(monitorDir, "latest.json"), JSON.stringify(result, null, 2), "utf8");
  appendIndex(result, snapshotPath);
  updatePublishRecords(result);

  await context.close();

  console.log(JSON.stringify({
    status: result.status,
    notes: result.notes.length,
    snapshotPath,
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
