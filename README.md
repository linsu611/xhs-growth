# 小红书 GitHub 榜单生成器

这个仓库用于生成小红书图文海报，主题是 GitHub 热门 AI Skills / AI 项目榜单。

当前第一期是「GitHub 本周热门 AI Skills 排行榜」，图片尺寸为 1080x1440。

## 本地运行

```powershell
npm install
npm run dev -- --host 127.0.0.1 --port 5174
```

## 批量导出图片

先启动本地服务，再执行：

```powershell
node scripts/export-posters.mjs
```

图片会导出到 `exports/`。

## 当前栏目

- AI Skills 高星榜
- GitHub 本周热门项目榜
- 单个 Skill 介绍
- 单个项目介绍

## 内容风格

正文参考小红书排行榜写法：

```text
GitHub 本周热门项目排行榜（2026.06.26）

👉01 superpowers ⭐ 238.8k · Shell
让 AI 从临时聊天，变成可复用工作流。
🔗 github.com/obra/superpowers
```

标题要直给，少解释术语；项目介绍用一句人话讲清楚「它能帮谁解决什么问题」。
