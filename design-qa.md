source visual truth path:
- C:/Users/12590/AppData/Local/Temp/codex-clipboard-a949bf1d-412f-4962-8565-4e8f67c47cb6.png
- C:/Users/12590/AppData/Local/Temp/codex-clipboard-0b986af5-fc60-4c24-bd16-515e4dcf80c7.png

implementation screenshot path:
- E:/clam/xhs/github-skills-posters/exports/01-cover.png
- E:/clam/xhs/github-skills-posters/exports/02-superpowers.png

viewport:
- 01 cover: 1080 x 1440
- 02 detail: 1080 x 1440

state:
- Static Xiaohongshu carousel poster export.

full-view comparison evidence:
- Reference 1 uses a warm off-white 3:4 poster, large black title, teal accent line, soft green top-right decorative forms, rounded white ranking cards, colored rank badges, and short category labels.
- Implementation cover matches the same poster proportion, overall hierarchy, background treatment, ranking-card rhythm, colored badges, and right-aligned category label system while replacing placeholder content with real AI Skills ranking content.
- Reference 2 uses a single-item project detail layout with top issue label, rank badge, large repository name, concise description, metric pills, dark "one sentence" panel, bullet points, audience card, and bottom URL/page marker.
- Implementation detail keeps the same reading structure, but intentionally changes the content model from project growth to Skill explanation: Star/Fork/type metrics, one-line Skill value, usage bullets, audience fit, and repo URL.

focused region comparison evidence:
- Header/title region: typography scale and dense title hierarchy match the reference style; implementation uses accurate editable HTML text instead of generated raster text.
- Ranking rows: card height, rounded corners, badge placement, and right-side label bars match the reference rhythm. Long repository names remain readable without overflow.
- Detail body: metric pills, dark callout, bullets, and audience card preserve the reference composition while removing the inappropriate "weekly growth" field.

findings:
- No actionable P0/P1/P2 findings remain.

patches made since previous QA pass:
- Changed detail export from 1080 x 1260 to 1080 x 1440 for carousel consistency.
- Added separate export query modes for cover and detail posters.
- Verified both exported PNG files are 1080 x 1440.
- Verified production build passes.
- Iterated detail poster after user feedback: replaced loose vertical layout with a compact hero card, dark one-line card, workflow strip, three insight cards, and audience CTA.
- Enhanced detail poster background with layered soft mesh, subtle diagonal texture, and bottom glow while preserving readability.
- Re-exported E:/clam/xhs/github-skills-posters/exports/02-superpowers.png at 1080 x 1440.
- Iterated the one-line insight module after user feedback: replaced the flat dark strip with a structured "核心 01" insight card, added subtle grid texture, a green accent glow, and a supporting explanation line.
- Extended the detail template to support rank-based data rendering and batch exported all 10 skill detail posters.
- Added scripts/export-posters.mjs for repeatable cover + detail PNG export.
- Spot-checked long-title detail posters: caveman, awesome-claude-skills, and guizang-ppt-skill.

final result: passed
