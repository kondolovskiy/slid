---
claimed_from: todo
claimed_at: 2026-11-02T07:10:44.693Z
id: engine-skg-g3
type: engine
subject: math
status: done
claimed_by: engineer-skg-g3
created: 2026-11-02
depends_on: [graph-frac-g2]
---
# Skill Graph, етап G3: `nodeState`, `item.u` в Evidence, реплей гіпотез зі старими й новими передумовами

Дизайн: docs/design/skill-graph-math.md §4.1 (стан вузла), §4.2 (гіпотези: одиниця лишається пара (урок, sk); граф змінює лише кандидатів P, S12 і `preWeak`), §7.1 рядок G3, §7.3 «Ухвалені рішення». Граф: content/math/graph.js (лінія frac verified). **Для дитини нічого не змінюється** (G4 — окремо, за рішенням людини 3в «одразу скрізь»).

## Що зробити
- `SLID_LEARN.nodeState(S, graph, node)` — чиста функція з наявного прогресу (§4.1): `S.seen` (вправи), `S.diag.res` (завдання тесту), спільні для пари екрани уроку / SRS / errs — як описано; без даних — «невідомо». Стан не зберігається.
- P3 з рев'ю дизайну (раунд 4) і G1: вердикт HALF (0.5) не послаблює вузол-передумову; завдання тесту, замінене на місці з `rev`, — старий `S.diag.res[i]` не прив'язувати до `u` нового (як `resumeDiag`); об'єкт з `u` на gone-вузол з іншою sk не рахується в `nodeState`/`preWeak`, доки `u` не оновлено.
- Evidence: `item.u` (вузол об'єкта за правилом прив'язки) у події `answer` — сумісно, `v` схеми не змінюється, docs/EVIDENCE.md.
- hyp-replay: поруч старі й нові `pres`/`preWeak` (з графа в лініях `verified`), звіт різниці; правила тіні `hyp-1` у застосунку не змінюються (нова `rv` лише якщо змінюються події трекера на той самий вхід — §3.3 дизайну гіпотез).
- Тести: test-learn (стан з фіксованих профілів; вузли розщепленої пари різняться лише за `S.seen`/`res`; без даних — «невідомо»; HALF; rev; gone), test-evidence, test-hyp без змін поведінки; регресія в браузері (slid.v1 і тексти без змін).
- Незалежне рев'ю D-026.

## Нотатки виконавця

**Виконавець: engineer-skg-g3, 2026-11-02 (worktree wt-g3, база b6da99e).** Для дитини нічого не змінено: `slid.v1`, тексти, SRS, план, `detect`, тінь гіпотез `hyp-1` — ті самі; граф лише читається.

Що зроблено:
- **Одне правило прив'язки** — `SLID_LEARN.graphBind(subject)` в app/learn.js (чиста функція §2.4 для всього змісту: «урок#i», «пул:вправа», «тест#i», «тест/тема» → `{ nodes, how, cand, live, stale }`). `tools/graph-lib.mjs` вантажить app/learn.js (vm) і бере вузли об'єктів саме з неї; сам лише перевіряє V1–V10 (вузли, `typical`, `active`, `isGone` — з graphBind). Дублювання логіки немає; еквівалентність з правилом G1 доведено тестом (еталон — дослівна копія прив'язки graph-lib до виносу) на справжньому змісті й 7 мутаціях змісту. graph-report (звичайний і `--since HEAD~5`) і вивід validate до й після — байт у байт однакові.
- `SLID_LEARN.nodeState(S, subject|graphBind, id)` (§4.1), `graphPre` (кандидати P/S12 за графом, §4.2), `inLine` (лінії verified/approved), `nodesOf` (вузли об'єкта для журналу). P3/G1: HALF не послаблює; `S.diag.res[i]` завдання з `rev` новішим за `S.diag[id].rev` — не рахується; `u` на gone-вузол іншої sk — не в `live` (nodeState, graphPre), але в `nodes` (як validate/graph-report і `item.u`).
- **Evidence:** `item.u` у події `answer` (app.js `evU`): масив id або `null`; предмет без графа — поля немає; screen — без `u`; трекер `u` не отримує. `v` схеми — 1. docs/EVIDENCE.md.
- **hyp-replay:** другий (тіньовий) трекер з `pres`/`preWeak` за графом лише в лініях verified (поза — старі); `--events` і метрики — за старими; розділ звіту «Граф умінь (G3, тінь)» і `--graph-diff`. app/hyp.js і `RULES_VERSION` не змінено.
- Документи: docs/EVIDENCE.md, CONTENT_SCHEMA §11 (G3), skill-graph-math §4.1/§4.2 «Реалізація [G3]» і §7.1, diag-hypothesis-math §9 п. 35 [G3]; коментар registry.js.

Тести: test-learn (+46: еквівалентність, nodeState на фіксованих профілях — синтетичних і справжніх g6m2l5 / dg6 g6-lcm; без даних — unknown; розщеплена пара різниться лише за `S.seen`/`res`; HALF; rev; gone; S не змінюється; кеш), test-hyp §12 (+15: події реплею з графом і без однакові; e01/frac-mul: shaky лише через num-by-frac → preWeak ні; HALF ні; BAD так; поза лінією — як зараз; S12 −2 у тіні), test-answer-ui `graph_g3_checks` (браузер: маршрут урок g6m2l5 + тренування + dg6 з graph.js і без — slid.v1, тексти доку, події трекера однакові; `item.u` кожної з 39 відповідей = graph-lib).

Перевірки (мій прогін): `node tools/build.mjs`; `npm run check` — зелений (test-learn 2287, test-evidence 147, test-hyp 591, test-validate 1007, test-graph-report 64, test-diff-answers 23; validate 0 помилок, 254 попередження — як до змін); diff-answers `--old b6da99e --grades 4-11` — 0 у всіх категоріях, rc 0; `--content-old b6da99e --grades 4-11` — 0 змінених/нових/вилучених, rc 0; personalization-qa `--strict --grade 4…11` — rc 0 для всіх; regression-сюїта браузера (`--suite regression`, /opt/pw-browsers/chromium, окремо від інших браузерів) — «Обрані браузерні сценарії: green», rc 0, зокрема новий graph_g3_checks; hyp-replay на синтетичному журналі (scratchpad/g3-work/synth-g3.mjs, 53 події, 3 профілі): 38 відповідей, 35 у лінії, інші pres 35, інший preWeak 12, S12 6 → 3, відкриття ті самі (11).
Мутанти (scratchpad/g3-mut-*, по одному, тека видаляється після прогону): 16 вузлових (graphBind: типовий, boss з by: u, lesson завдання, перенаправлення, live без stale; nodeState: HALF, rev, errs за l, skw → known; graphPre: w 1, без part, пара без by: u; реплей: нові pres у головному трекері, без перевірки лінії, preWeak за темою; graph-lib без graphBind) — усі вбито (2 спершу вижили — ditem-nolesson, unknown-skw — додано тести). Браузерні (graph_g3_checks, по одному): `u` з хибним mode, запис у S з evU, `u` на screen, зміна rec з evU (трекер) — усі 4 вбито.

Відхилення від тексту задачі / дизайну (на рев'ю):
1. Сигнатура `nodeState(S, gx, id)`: другий аргумент — предмет (з `graph`) або результат `graphBind`, а не сам граф: прив'язці потрібен зміст (уроки, пули, тести).
2. `graphPre` бере прямі `pre` w 2 **і `part`** (вага 2 як у graph-lib; §2.2 «гіпотези: кандидат „складова“»), лише прямі ребра (не транзитивно), а вузли пари — `live` вузли об'єкта + усі вузли з teach ∋ урок пари й тією самою sk (зокрема `by: "u"`), бо одиниця гіпотези — пара.
3. Нові `preWeak` у реплеї — за `diag_end.res` (останній результат кожного тесту, `rev` з `diag_end`/`diag_start`), зокрема й baseline-тем (вузли base), якщо вони — w 2-передумови; у застосунку `preWeak` як і раніше за статусом тем.
4. `st` у nodeState — лише описовий (unknown / weak / ok) для тіні; правило в коді й дизайні §4.1 [G3].

Відкриті питання: (а) чи має G4 брати транзитивні передумови в P; (б) чи потрібен `item.u` і на `screen` (зараз ні — за задачею); (в) кеш graphBind у застосунку — WeakMap за предметом (граф перевіряється за посиланням), повний розбір math ≈ одноразово на першу відповідь.
