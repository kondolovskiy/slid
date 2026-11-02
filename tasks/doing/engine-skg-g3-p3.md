---
claimed_from: todo
claimed_at: 2026-11-02T08:17:42.452Z
id: engine-skg-g3-p3
type: engine
subject: math
status: todo
claimed_by: engineer-g3p3
created: 2026-11-02
depends_on: [engine-skg-g3]
---
# Skill Graph G3: залишки рев'ю (P3, reports/review/engine-skg-g3.md) — до G4
1. Розбір графа потрапляє в `dt` першої відповіді (evidence.js:206–211; ≈10 мс, 47 мс на повільному CPU) — прогріти кеш `graphBind` при відкритті предмета/в idle або брати час до обчислення даних події; тест.
2. Дублікати id: еквівалентність G1 і тест-еталон test-learn.mjs:1958 — виправити формулювання «дослівна копія», задокументувати (такий зміст червоний у validate).
3. Тести на 6 вцілілих мутантів (тіньовий трекер у реплеї без tick/onReset/onDiagEnd/flush; лінія завдання тесту за темою; nodes vs live; gone для u теми; вилучення уроків пари з нових pres; rev із diag_start).
4. graph-lib — брати `c.learn` з loadContent, а не другу копію learn.js у vm.
Для G4 — назвати нову семантику preWeak (baseline-вузол може дати preWeak) і рішення людини про `part` у P.
Незалежне рев'ю D-026.

## Нотатки виконавця
- 2026-11-02, engineer-g3p3 (worktree wt-g3p3, база 6e29051).
- **П. 1 (dt першої відповіді, P3-1).** app/evidence.js `log()`: `mono` і `now` беруться **до** `data()` (раніше — після), тож розбір графа в першій `item.u` (≈ 10–50 мс) не входить у `answer.dt`, `EV.dt` (вхід S11 трекера), `ms` і `t`. Контракт подій і трекера на той самий вхід не змінено (ті самі поля; трекер `dt` у подіях не має; `RULES_VERSION` не змінено). Прогрів кешу в idle не робив: вимір до даних гарантує незалежність від графа сам. Без журналу (EV вимкнено) `data()` не викликається, `evU` теж — розбору немає. Тест: test-evidence §5а — той самий маршрут «екран → відповідь» з важкою `data()` (як з graph.js, +47 мс) і з легкою — однакові `dt` / `J.dt` (1234); `ms` і `t` — момент виклику. Зміна evidence.js — під рев'ю D-026.
- **П. 2 (дублікати id, P3-2).** Формулювання «дослівна копія» виправлено (tools/test-learn.mjs — коментар розділу G3; docs/design/skill-graph-math.md §4.1 «Реалізація [G3]»): еквівалентність — **на валідному змісті**; межа задокументована. Новий тест test-learn: дубль id вправи пулу, вправа без id, дубль id теми тесту — помилка `validatePool` / `validate` тесту; `graphBind` для дубля — один ключ (бере останній). Дубль id уроку — помилка tools/validate.mjs «id уроку … уже є», дубль пулу — registry (кидає).
- **П. 3 (вцілілі мутанти, P3-3).** test-hyp §12 (кінець): (а) шпигун трекера — T2 = T0 виклик у виклик (synth і G3-журнал без ліній — дослівно, з лінією — крім `pres`/`preWeak` onAnswer), покрито tick, onReset, onDiagEnd, flush, setPersist; (б) тема dg6/frac-of поза лінією при уроках у лінії → 2 відповіді поза лінією; (в) e01 з `u` на gone-вузол іншої sk (x-mul-old → frac-mixed) — ціль не стає вузлом пари (нові pres g6m2l2, m1, без m4a); (г) журнал без `diag_end.rev`: rev з `diag_start` (2 → BAD frac-read рахується, 1 → ні). test-learn: graphPre з передумовою, чий урок — урок пари (lp не в pres); `u` теми на gone іншої sk → `live` [] / `stale`, nodeState не слабить ціль, gone тієї самої sk — рахується.
- **П. 4 (realm, P3-4).** tools/graph-lib.mjs без власної копії learn.js у vm: `analyzeGraph(c, { learn, … })`, `learn` — з `loadContent()` (validate.mjs, graph-report.mjs, test-graph-report); без `learn` — явна помилка. `--since`: стара ревізія прив'язується чинним `content.learn` (як і до зміни; learn.js до G3 graphBind не має). Експорт `graphBind` з graph-lib прибрано (ніхто не імпортував). Четвертий викликач — tools/test-answer-ui.py (`graph_g3_checks`, звірка `item.u` з graph-lib) — теж передає `learn: C.learn` (знайдено першим прогоном regression: без learn — явна помилка, як і задумано). Тест test-graph-report: graphBind береться з переданого learn (1 виклик), без learn — помилка.
- **Для G4** — docs/design/skill-graph-math.md: §4.2 «Для G4: нова семантика preWeak» (base-вузол / baseline-тема може дати preWeak «так»; trunc diag_end → notes), §7.1 рядок G4 [G3-p3], §7.3 **відкрите питання 10** (людині): `part` у P / S12 — (а) = pre w 2, (б) окремий кандидат, (в) не впливає.
- **Мутанти** (scratchpad/g3p3-mut-run/mut.py, теки scratchpad/g3p3-mut-<ім'я>, видалено після прогону; test-learn, test-hyp, test-graph-report, test-validate, test-evidence): 13 мутантів рецензента — вбито 12, `pw-st` вижив (еквівалентний, як і в рецензента: у Sd лише diag); 4 свої (`ev-mono-after-data`, `ev-now-after-data`, `glib-own-copy`, `glib-no-learn-ok`) — усі вбито. Колишні вцілілі proxy-t0only, diag-line-by-lesson, live-nodes, pres-incl-pair-lessons, diag-rev-from-start-ignored, ditem-topic-u-live — вбито.
- **Перевірки (мій прогін):** build; `npm run check` rc 0 (test-learn 2292, test-evidence 149, test-hyp 596, test-validate 1007, test-graph-report 66; validate 0 помилок / 254 попередження; граф 0/0/0); `diff-answers --old 6e29051 --grades 4-11` rc 0, 0 непояснених; `--content-old 6e29051` rc 0, 0 змін; `graph-report --line frac --strict` rc 0 (25 вузлів, 0/0/0); regression test-answer-ui — див. нижче.
- regression `test-answer-ui.py --browser /opt/pw-browsers/chromium --suite regression` (після правки test-answer-ui) — rc 0, «Обрані браузерні сценарії: green»; G3: item.u = graph-lib у 39 відповідях, slid.v1 / тексти / події трекера з graph.js і без нього однакові. Неперевірене: реальні журнали пристроїв; dt у браузері з графом і без нього не міряв (час не заморожено) — незалежність гарантує вимір до data(), тест вузловий.
