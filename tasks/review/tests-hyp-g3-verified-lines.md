---
claimed_from: todo
claimed_at: 2026-11-05T11:50:36.892Z
id: tests-hyp-g3-verified-lines
type: tests
subject: math
status: review
claimed_by: eng-g3
created: 2026-11-05
depends_on: [verify-graph-prob-tri]
---
# test-hyp G3: не прив'язувати перевірку до складу verified-ліній графа; лінії prob і tri → verified

Скіл: `engine-change`; незалежне рев'ю D-026 (`engineering-review`).

Верифікатор прийняв лінії графа `prob` і `tri` (reports/verify/graph-prob-tri.md; вузли вже `verified`, graph.js v 2026-11-05.2). Але `lines.prob.st` і `lines.tri.st` лишено `draft`. Причина — tools/test-hyp.mjs:746:
`eq([G.answers, G.inLine, G.lines], [12, 9, ["frac"]], "G3: …")`. Якщо поставити лініям verified, `npm run check` падає: «отримано [12,9,["frac","prob","tri"]], очікувалось [12,9,["frac"]]». Інші перевірки (test-learn, test-evidence, test-validate, test-graph-report) у пробному прогоні верифікатора зелені.

Зробити одним пакетом:
1. tools/test-hyp.mjs:746 — перевіряти `G.lines.includes("frac")` (або точний список `["frac", "prob", "tri"]`), щоб кожна нова verified-лінія не ламала тест; `G.inLine` = 9 лишається (фікстури — об'єкти лінії frac).
2. content/math/graph.js: `lines.prob.st` і `lines.tri.st` → `"verified"`, прибрати коментар «вузли verified; st лінії → …» і оновити шапку.
3. `node tools/build.mjs`, `npm run check` EXIT 0, `graph-report --line prob --strict`, `--line tri --strict` rc 0.
4. Рев'ю D-026 — reports/review/tests-hyp-g3-verified-lines.md.

## Нотатки виконавця (eng-g3, 2026-11-05, worktree wt-g3)

**Зміни**
- `tools/test-hyp.mjs` §12 (було `eq([G.answers, G.inLine, G.lines], [12, 9, ["frac"]])`): тест не перелічує verified-лінії. Перевіряє: answers 12, inLine 9 (фікстури — об'єкти лінії frac), `G.lines.includes("frac")`, усі `G.lines` мають у graph.js st verified/approved, `G.lines` = живі verified/approved лінії в порядку graph.js.
  Плюс синтетична перевірка, незалежна від живого складу: живі лінії, крім frac, → draft, і додано лінію `zz` з уроком g6m3l1 (a01, поза frac) зі st draft / "x" / verified / approved. Для draft і "x" очікуємо `[["frac"], 9, a01 не в прикладах]`, для verified і approved — `[["frac","zz"], 12, a01 у прикладах]` (a01 відповідали три профілі). Перевірок 625.
- `content/math/graph.js`: `lines.prob.st` і `lines.tri.st` → `"verified"`, коментарі «вузли verified; st лінії → …» прибрано. Шапка: рядок верифікатора переписано в минулий час, додано рядок 2026-11-05 (tests-hyp-g3-verified-lines). `v` 2026-11-05.2 → **2026-11-05.3**. Вузли й ребра не змінено.
- `node tools/build.mjs`: змінився лише `sw.js` (VERSION). `reports/validate.json` змінив тільки дату — не комічу.

**Мутанти** (копія дерева без .git у scratchpad, `node tools/test-hyp.mjs`)
| Мутант | Результат |
|---|---|
| M1 learn.js graphBind: фільтр ліній → `ln` (draft теж) | ❌ 1 (синтетична draft-лінія: lines [frac,prob,tri,zz], inLine 12) — спіймано |
| M2 learn.js: лише `st === "verified"` (approved ігнор) | ❌ 1 (approved zz не в G3) — спіймано |
| M3 learn.js: `st !== "draft"` («x» береться) | ❌ 1 — спіймано |
| M4 graph.js: frac → draft | ❌ 9, зокрема «frac серед ліній verified» — спіймано |
| M5 graph.js: frac → "x" | ❌ 9 — спіймано |
| M6 hyp-replay: `GD.lines` = усі ключі `g.lines` | ❌ 1 — спіймано |
| M7 hyp-replay: inLine рахує все | ❌ 4 — спіймано |
| C1 (контроль) prob, tri → draft (стан до задачі) | ✅ 625 |
| C2 (контроль) нова verified-лінія zz2 (g9m7l1) поза фікстурами | ✅ 625 — тест не прив'язаний до складу |
| C3 (контроль) нова draft-лінія на g6m3l1 | ✅ 625 |

**Перевірки**
- `node tools/build.mjs`: OK.
- `npm run check`: EXIT 0.
- `node tools/graph-report.mjs --line prob --strict`, `--line tri --strict` і `--line frac --strict`: rc 0 (вузлів 40, помилок 0, дрейфу 0, V10б 0).

**Вплив на тінь G3 і на дитину**
- Застосунок (`app/app.js` `evU`) з графа бере лише `LEARN.nodesOf`, тобто поле `u` у журналі. Воно від `st` лінії не залежить. `app/hyp.js` графа не читає. `inLine`, `graphPre` і `nodeState` викликає тільки `tools/hyp-replay.mjs`, тобто офлайн-тінь. **Для дитини нічого не змінюється** — ні план, ні порада, ні журнал. До G4 так і лишиться.
- Що змінюється в тіні (`hyp-replay`, розділ «Граф умінь (G3, тінь)»): у шапці «лінії verified: frac, prob, tri». Відповіді в уроках g6m6l1–l4, g9m7l1–l2, ms0bl3, g7m2l2, g7m4l1–l9 і в темах dg9/cur-g9m7, dg11/count, dg11/prob, dg7/cur-g7m4, dg8/tri-equal, dg8/tri-angles тепер рахуються «у лінії». Тіньовий трекер отримує для них pres за ребрами `pre` w 2 / `part`. Порівняння старих і нових pres за sk уроку (graphPre без вузлів об'єкта):
  - prob: g6m6l1 і l3 мали `[g6m2l2, g6m2l3, ms3l1]`, тепер `[]`; g6m6l2 → `[g6m6l1]`; g6m6l4 → `[m1]`; g9m7l1 мав `[ms2l5, g6m3l7]`, тепер `[]`; g9m7l2 → `[m1]`.
  - tri: ms0bl3 мав 6 уроків 4 кл., тепер `[]`; g7m2l2, g7m4l1, l3, l6, l9 мали `ms0bl2`, тепер `[]`; g7m4l2, l7 → `[ms0bl3, g7m4l3]`; l5 → `[g7m2l2, ms0bl3, g7m4l3]`; l8 → `[g7m4l1, g7m4l7]`.
  Отже, у тіні менше кандидатів P/S12 для g6m6l1/l3, g9m7l1 і більшості уроків tri (у них немає вхідних pre w 2). Для G4 (D-038 3в: «граф змінює план одразу, де verified») це варто розглянути, коли дійде до diff-plan. Зараз лише звіт.

**Не змінював:** `.claude/skills/skill-graph/SKILL.md:8` досі каже «лінія «дроби» 4–6 verified». Пропозицію записано в inbox (`.claude/` — рев'ю D-026).
