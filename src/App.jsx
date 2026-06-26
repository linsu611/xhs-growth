const skills = [
  {
    rank: 1,
    name: "superpowers",
    repo: "obra/superpowers",
    desc: "AI 从聊天框变成可复用工作流",
    tag: "工作流",
    stars: "238.8k",
    forks: "21.2k",
    language: "Shell",
    color: "amber",
    subtitle: "Agentic Skills Framework",
    greenline: "把 AI 工作方式做成可复用流程",
    summary:
      "一个把 AI 使用方式从“临时聊天”升级成“可复用流程”的开源框架。它会要求 AI 先理解目标、拆任务、验证结果，再进入下一步。",
    insight: "把 AI 从“会回答”变成“会按流程做事”",
    note: "superpowers 的价值不是多一个提示词，而是让 AI 先想清楚流程再行动。",
    flow: ["目标", "计划", "执行", "验证"],
    cards: [
      ["减少乱开工", "先确认目标和范围，再让 AI 写代码、调研或改稿。"],
      ["沉淀方法", "把调研、计划、验收、复盘变成可重复调用的 Skill。"],
      ["适合团队", "一个人提速，整个团队也能保持同一套流程。"],
    ],
    audience: "AI 重度用户、独立开发者、内容创作者、团队负责人",
  },
  {
    rank: 2,
    name: "caveman",
    repo: "JuliusBrussee/caveman",
    desc: "让 Claude Code 用更少 token 做事",
    tag: "省钱",
    stars: "77.0k",
    forks: "4.4k",
    language: "JavaScript",
    color: "violet",
    subtitle: "Claude Code Token Saver",
    greenline: "用更少 token 让 AI 做同样的事",
    summary:
      "一个很有记忆点的 Claude Code Skill，用极简表达压缩沟通成本。它适合拿来解释：为什么 AI 工作流不只是更聪明，也要更省上下文。",
    insight: "少说废话，让 AI 把 token 用在真正的任务上",
    note: "caveman 火的原因很直观：大家都在为上下文窗口和 token 成本头疼。",
    flow: ["压缩", "指令", "执行", "省 token"],
    cards: [
      ["反差感强", "“像洞穴人一样说话”这个概念天然适合做标题。"],
      ["成本意识", "让读者理解 token 不是玄学，而是 AI 使用成本。"],
      ["容易演示", "同一段任务，前后对比就能讲清楚价值。"],
    ],
    audience: "Claude Code 用户、AI 工具玩家、独立开发者、效率党",
  },
  {
    rank: 3,
    name: "graphify",
    repo: "safishamsi/graphify",
    desc: "把代码、文档变成 AI 可查知识图谱",
    tag: "知识图谱",
    stars: "72.1k",
    forks: "7.2k",
    language: "Python",
    color: "green",
    subtitle: "Code Knowledge Graph Skill",
    greenline: "把项目资料变成 AI 可查询知识图谱",
    summary:
      "一个面向 AI coding assistant 的 Skill，可以把代码、SQL schema、文档和脚本整理成可查询的知识图谱，让 AI 更快理解一个复杂项目。",
    insight: "让 AI 不只是读文件，而是理解项目关系",
    note: "graphify 适合讲“AI 接手大项目之前，先给它一张地图”。",
    flow: ["读取", "建图", "查询", "理解"],
    cards: [
      ["适合大项目", "代码、数据库、文档放在一起时，知识图谱更有价值。"],
      ["降低解释成本", "不用每次把项目背景从头讲给 AI。"],
      ["技术感强", "很适合做程序员向收藏内容。"],
    ],
    audience: "程序员、技术团队、AI coding 用户、项目维护者",
  },
  {
    rank: 4,
    name: "agent-skills",
    repo: "addyosmani/agent-skills",
    desc: "给 AI 编程助手装上工程能力",
    tag: "工程",
    stars: "66.8k",
    forks: "7.2k",
    language: "Shell",
    color: "gold",
    subtitle: "Production Engineering Skills",
    greenline: "给 AI 编程助手补上工程纪律",
    summary:
      "一个面向 AI coding agent 的工程技能集合，强调规范、验证、代码质量和可维护性。它适合讲：AI 写代码快，但工程化能力才决定能不能用。",
    insight: "让 AI 写出来的代码更像工程交付，而不是一次性草稿",
    note: "agent-skills 的吸引点在于“生产级”，适合做技术向可信推荐。",
    flow: ["规范", "实现", "测试", "交付"],
    cards: [
      ["工程背书", "围绕真实开发流程，而不是单纯炫技。"],
      ["适合团队", "让 AI 输出更稳定，更容易被 review。"],
      ["收藏价值高", "开发者会想把它放进自己的工作流。"],
    ],
    audience: "工程师、技术负责人、AI 编程重度用户、创业团队",
  },
  {
    rank: 5,
    name: "awesome-claude-skills",
    repo: "ComposioHQ/awesome-claude-skills",
    desc: "Claude Skills 入口目录，一次性收藏",
    tag: "合集",
    stars: "65.9k",
    forks: "7.3k",
    language: "Python",
    color: "pink",
    subtitle: "Claude Skills Directory",
    greenline: "Claude Skills 的高星入口目录",
    summary:
      "一个 Claude Skills 资源合集，集中收录可用于自动化、开发、工作流和工具集成的 Skill。它更像入口地图，适合新手从这里开始找方向。",
    insight: "不知道装什么 Skill，先从高星目录开始翻",
    note: "awesome-claude-skills 适合做“入口型内容”，给读者一张 Skill 导航图。",
    flow: ["发现", "分类", "挑选", "安装"],
    cards: [
      ["新手友好", "比单个项目更适合入门浏览。"],
      ["覆盖面广", "开发、自动化、工具流都能找到入口。"],
      ["适合收藏", "目录型内容在小红书很容易被保存。"],
    ],
    audience: "Claude 用户、AI 新手、自动化爱好者、工具收藏党",
  },
  {
    rank: 6,
    name: "taste-skill",
    repo: "Leonxlnx/taste-skill",
    desc: "让 AI 少产出模板味，多一点审美",
    tag: "审美",
    stars: "51.1k",
    forks: "3.5k",
    language: "JavaScript",
    color: "blue",
    subtitle: "Taste Skill For AI",
    greenline: "给 AI 加一点审美判断",
    summary:
      "一个主打“让 AI 少产出模板味”的 Skill，尤其适合前端、设计和内容创作场景。它的卖点不是功能多，而是让输出更有品味。",
    insight: "AI 不缺执行力，缺的是判断什么不该交付",
    note: "taste-skill 适合讲“为什么 AI 做出来的东西总像模板”。",
    flow: ["审美", "判断", "修改", "交付"],
    cards: [
      ["话题好讲", "“给 AI 审美”本身就很容易吸引人。"],
      ["设计相关", "适合前端、海报、页面和文案优化场景。"],
      ["反模板味", "切中很多 AI 作品最大的问题。"],
    ],
    audience: "设计师、前端开发者、内容创作者、产品经理",
  },
  {
    rank: 7,
    name: "obsidian-skills",
    repo: "kepano/obsidian-skills",
    desc: "让 AI 读写 Obsidian 笔记库",
    tag: "笔记",
    stars: "38.2k",
    forks: "2.7k",
    language: "Markdown",
    color: "cyan",
    subtitle: "Obsidian Agent Skills",
    greenline: "让 AI 真正使用你的笔记库",
    summary:
      "一个面向 Obsidian 的 agent skills 项目，让 AI 能读写 Markdown、Bases、JSON Canvas 等开放格式。它适合知识管理人群。",
    insight: "把个人知识库变成 AI 可以操作的工作台",
    note: "obsidian-skills 的优势是人群非常明确，知识管理用户会很容易理解。",
    flow: ["笔记", "连接", "检索", "输出"],
    cards: [
      ["人群精准", "Obsidian 用户本身就有强收藏和工具需求。"],
      ["场景具体", "笔记、知识库、卡片和画布都能讲。"],
      ["可延展", "后续可以做一整组知识管理工具内容。"],
    ],
    audience: "Obsidian 用户、知识管理爱好者、研究者、写作者",
  },
  {
    rank: 8,
    name: "claude-plugins-official",
    repo: "anthropics/claude-plugins-official",
    desc: "Anthropic 官方 Claude 插件目录",
    tag: "官方",
    stars: "31.1k",
    forks: "3.4k",
    language: "Python",
    color: "purple",
    subtitle: "Official Claude Plugin Directory",
    greenline: "Anthropic 官方 Claude Code 插件目录",
    summary:
      "这是 Anthropic 官方维护的 Claude Code Plugins 目录。严格说它不只是单个 Skill，但很适合作为官方生态入口来介绍。",
    insight: "想看 Claude Code 官方生态，可以先从这个目录开始",
    note: "这张适合解释 Skill、Plugin、MCP 的关系，建立读者认知。",
    flow: ["官方", "目录", "生态", "扩展"],
    cards: [
      ["信任感强", "官方维护让它更适合做生态入口。"],
      ["适合科普", "可以顺便解释插件和 Skill 的区别。"],
      ["后续可拆", "目录里的具体插件还能继续做单篇介绍。"],
    ],
    audience: "Claude Code 用户、AI 工具研究者、开发者、团队管理员",
  },
  {
    rank: 9,
    name: "awesome-agent-skills",
    repo: "VoltAgent/awesome-agent-skills",
    desc: "1000+ Agent Skills 导航仓库",
    tag: "导航",
    stars: "26.5k",
    forks: "2.8k",
    language: "Markdown",
    color: "orange",
    subtitle: "1000+ Agent Skills Directory",
    greenline: "跨工具的 Agent Skills 大导航",
    summary:
      "一个收录 1000+ agent skills 的合集，兼容 Claude Code、Codex、Gemini CLI、Cursor 等多个工具。适合做“去哪找 Skills”的导航内容。",
    insight: "真正的宝藏不是一个 Skill，而是一整张 Skill 地图",
    note: "awesome-agent-skills 适合在第一期后半段发，帮助读者继续挖。",
    flow: ["收录", "筛选", "分类", "导航"],
    cards: [
      ["数量大", "1000+ 的规模很适合做收藏型标题。"],
      ["平台广", "不局限于单一 coding agent。"],
      ["适合延展", "可以从里面继续筛后续选题。"],
    ],
    audience: "AI 工具玩家、Codex 用户、Claude 用户、效率工具收藏者",
  },
  {
    rank: 10,
    name: "guizang-ppt-skill",
    repo: "op7418/guizang-ppt-skill",
    desc: "用 AI 生成更像作品集的 PPT",
    tag: "PPT",
    stars: "19.0k",
    forks: "1.4k",
    language: "HTML",
    color: "teal",
    subtitle: "AI Presentation Skill",
    greenline: "让 AI 生成更像作品集的 PPT",
    summary:
      "一个面向 AI agent 的 PPT 生成 Skill，强调版式、封面、图片提示词和演示运行时。它的优势是非程序员也能理解。",
    insight: "AI 做 PPT 不该只是堆字，而应该像一个视觉作品",
    note: "guizang-ppt-skill 很适合小红书，因为 PPT、封面和排版都是强视觉场景。",
    flow: ["主题", "版式", "生成", "演示"],
    cards: [
      ["泛人群强", "PPT 是学生、职场人、创作者都懂的场景。"],
      ["视觉好讲", "可以直接展示前后对比和页面效果。"],
      ["适合教程", "后续能拆成安装、生成、优化三篇内容。"],
    ],
    audience: "职场人、学生、内容创作者、AI 办公用户",
  },
];

function getFeaturedSkill() {
  const rank = Number(new URLSearchParams(window.location.search).get("rank") || "1");
  return skills.find((skill) => skill.rank === rank) || skills[0];
}

function PosterShell({ children, variant = "cover" }) {
  return (
    <section className={`poster ${variant}`} data-poster={variant}>
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="dot-grid" />
      <div className="corner-arc" />
      {children}
    </section>
  );
}

function RankBadge({ rank, color }) {
  return <div className={`rank-badge ${color}`}>#{rank}</div>;
}

function CoverPoster() {
  return (
    <PosterShell variant="cover">
      <header className="cover-head">
        <p className="kicker">GitHub 本周热门 AI Skills 排行榜</p>
        <div className="tiny-rule">
          <span />
          <span />
        </div>
        <h1>
          AI Skills
          <br />
          TOP 10
        </h1>
        <p className="subtitle">
          <strong>2026.06.26</strong>
          <span>·</span>
          高星项目 · 工具流 · 工作流
        </p>
      </header>

      <div className="skill-list">
        {skills.map((skill) => (
          <article className="skill-row" key={skill.repo}>
            <RankBadge rank={skill.rank} color={skill.color} />
            <div className="skill-copy">
              <h2>{skill.name}</h2>
              <p>⭐ {skill.stars} · {skill.language} · {skill.desc}</p>
            </div>
            <div className={`tag-line ${skill.color}`}>
              <span>{skill.tag}</span>
              <i />
            </div>
          </article>
        ))}
      </div>

      <footer className="cover-foot">
        <span className="spark">✦</span>
        <p>收藏这张图，先从最火的 AI Skills 开始试。</p>
      </footer>
    </PosterShell>
  );
}

function StatPill({ children }) {
  return <span className="stat-pill">{children}</span>;
}

function DetailPoster({ skill = skills[0] }) {
  return (
    <PosterShell variant="detail">
      <header className="detail-top">
        <p>GitHub AI Skill 榜</p>
        <strong>2026.06.26 · {String(skill.rank).padStart(2, "0")}</strong>
      </header>

      <section className="detail-hero-card">
        <div className="hero-meta">
          <div className="rank-title">
            <RankBadge rank={skill.rank} color={skill.color} />
            <div>
              <p>{skill.subtitle}</p>
              <span>{skill.greenline}</span>
            </div>
          </div>
          <div className="issue-mark">Skill Pick</div>
        </div>

        <h1>{skill.name}</h1>
        <p className="summary">{skill.summary}</p>

        <div className="stats">
          <StatPill>{skill.language}</StatPill>
          <StatPill>{skill.stars} Star</StatPill>
          <StatPill>{skill.forks} Fork</StatPill>
          <StatPill>Skills</StatPill>
        </div>
      </section>

      <section className="one-line">
        <div className="one-line-mark">
          <span>核心</span>
          <strong>01</strong>
        </div>
        <div className="one-line-copy">
          <p>一句话看懂</p>
          <h2>{skill.insight}</h2>
          <small>{skill.note}</small>
        </div>
      </section>

      <section className="flow-card">
        <p className="section-label">它解决什么问题？</p>
        <div className="flow-line">
          <span>{skill.flow[0]}</span>
          <i />
          <span>{skill.flow[1]}</span>
          <i />
          <span>{skill.flow[2]}</span>
          <i />
          <span>{skill.flow[3]}</span>
        </div>
      </section>

      <section className="insight-grid">
        {skill.cards.map(([title, body], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <section className="fit-card">
        <div>
          <p>适合谁？</p>
          <h3>{skill.audience}</h3>
        </div>
        <strong>先收藏，再试用</strong>
      </section>

      <footer className="detail-foot">
        <span>https://github.com/{skill.repo}</span>
        <strong>{String(skill.rank + 1).padStart(2, "0")} / 11</strong>
      </footer>
    </PosterShell>
  );
}

export function App() {
  const poster = new URLSearchParams(window.location.search).get("poster");

  if (poster === "cover") {
    return (
      <main className="canvas single">
        <CoverPoster />
      </main>
    );
  }

  if (poster === "detail") {
    const skill = getFeaturedSkill();
    return (
      <main className="canvas single">
        <DetailPoster skill={skill} />
      </main>
    );
  }

  return (
    <main className="canvas">
      <CoverPoster />
      <DetailPoster skill={skills[0]} />
    </main>
  );
}
