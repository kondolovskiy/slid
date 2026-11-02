# Handoff — стан проєкту

_Оновлено: 2026-11-02, куратор пам'яті (журнал sessions/2026-11-02-1.md)._

## Стан
- **Математика, персоналізація 4–11 кл. — release прийнято** (reports/qa/math-personalization-release.md). Матриця 2026-11-01.v3. Жодного `approved`.
- **Пріоритети людини (D-033):** Evidence V2 (D-034, готово) → Skill Graph → Diagnostic Engine → Teacher Dashboard.
- **Skill Graph (D-038):** рішення §7.3 ухвалено (3в — граф змінює план одразу скрізь, де він `verified`; відступ від рекомендації). G1 (graph-lib, graph-report, V1–V10), **G2** — content/math/graph.js: лінія «дроби» 4–6, 25 вузлів, 47 ребер, `lines.frac` verified (reports/verify/graph-frac.md); **G3** — `SLID_LEARN.graphBind`, nodeState/graphPre, `item.u` в answer, тінь у hyp-replay. Дитині граф ще нічого не змінює.
- **Гіпотези (D-035):** E1/E2 + маршрути тіні E4 (без localStorage, бюджет 400 мс, `hyp_lost`/`hyp_off`, `hyp_lost.n`); rv `hyp-1` (D-039).
- **Одиниці (D-039):** «Перевір одиницю: переведи відповідь у «кг».» для тієї самої величини в іншій одиниці (вердикт bad); pg4m5/b08 → quantity; `diff-answers --grades N`.
- **ШІ-перевірка (D-036 + уточнення 02.11):** дизайн A0 docs/design/ai-solution-check.md прийнято; рішення §9 людини внесено; далі A1.
- **Бекенд (D-037):** server/ NestJS + Postgres, Railway, вхід Google Workspace + код прив'язки.
- Останній build: sw.js `e1ce08419e` (99c4935). `npm run check` зелений за останніми прогонами рецензентів; validate 0 помилок.
- Довга пам'ять: facts/hist №1–313, facts/math №1–219, decisions до **D-039**.
- Гілка `claude/intelligent-brahmagupta-zyjilv` — PR №6 злито в main, гілку перезапущено від main; не запушено.

## У роботі (`node tools/claim.mjs list doing`)
- **research-math-diag-duration** — протокол docs/testing/math-diag-duration.md; пілот, чекає учнів.

## Що далі (черга; todo: 7)
1. **G4 Skill Graph** (граф змінює план там, де `verified`; передумови в тренуванні — лише при слабкій передумові, 6в) — **після** перегляду лінії вчителем і відповідей на питання 1–2 нижче. Задачі ще немає.
2. **engine-ai-a1** (tasks/todo/) — **після** погодження `server/content/` (знімок вправ `pools/<ch>.json`, згенеровані build-ом, ніхто вручну) із сесією server/; тоді ж — рядок в AGENTS.md §2 і docs/BACKEND.md, правило «конфлікт у server/content/ — об'єднання, не вибір сторони», строк бекапів Postgres на Railway (пропозиція — лише щоденні, 6 днів; перевірити реальний розклад на A2).
3. **engine-sync-login, server-hardening** — сесія людини (синхронізувати лише `slid.v1`, не `slid.evidence.pending`/`slid.hyp`). Пропозиція дизайну ШІ: зливати `S.aiv` за sid (ap/sh = max, решта за t, ≤ 200) — у задачі sync ще не записано; нові поля S.aiv, k/err у S.errs, sol/dts в answer — погодити з інтегратором personalization-shared.
4. **Ендпоінт подій пілоту** POST /v1/events (ідемпотентність за `eid`) — задача людини на архітектуру даних (D-034).
5. **engine-diag-retest-from-pool** — чекає рішення людини (3 питання в задачі).
6. **design-teacher-dashboard** — після синхронізації.
7. Гіпотези E3g (`gen` у пілотних вправах, content-verifier на ≥ 20 наборах) → E5; `mis` у ≈ 25 задачах.
8. Давні: write-math-pool-g11m2/m6; dg4 №18 → answer time і dg10 №18 (А2) — разом з `rev`; `(-1)^k\,"arcsin"` у g10m5/pool-g10m5 (P3); `playtest.py --help`; style-sync hist 7, math 7–9/10–11.

## Відкриті питання (людині)
**Skill Graph — перед G4:**
1. Вибірковий перегляд лінії «дроби» (reports/verify/graph-frac.md: ланцюжок frac-div → … → parts-equal, назви вузлів) і 3 питання: (а) ребро `frac-add-unlike` ← `frac-reduce` w 2 (додав верифікатор); (б) `divis-mult` ← `div-rem` w 2 — так?; (в) тема dg6/frac-of: прибрати g6m2 з `for` (через `rev`) і `forEvidence` g6m2l4 у матриці — або зробити `frac-mul` ← `frac-of-num` w 2.
2. §7.3 п. 10: чи `part` іде в кандидати перевірки P і в `pres` для S12 (а — як `pre` w 2, як у тіні зараз; б — окремий кандидат; в — не впливає).

**ШІ-перевірка й дані:**
3. Погодити `server/content/` (володіння, генерація build-ом) із сесією server/ — передумова engine-ai-a1.
4. Що вчитель може бачити про дитину (ЗУ «Про захист персональних даних», GDPR) — docs/BACKEND.md; протокол школи для `concern`; угода школи про обробку даних (Anthropic у США).
5. engine-diag-retest-from-pool — пули в повторному тесті рівня (3 питання в задачі).

**Персоналізація:**
6. dg4 №18 — пояснити питання й вирішити заміну на answer time (`rev: 2`).
7. Гіпотези: обсяг подій hyp_*; кнопка «Пропустити» перевірки (зараз немає — рішення оркестратора); E6 (кроки плану для rule/pre).
8. Інші answerKind у тесті рівня; стала «c»; «лише змінна з умови» для `number`; «Точка $K$ на прямій» (N2); PgUp/PgDn = 1/5; pms2 d07 «23,5 грн»; пороги D-030 і скорочення тесту після пілоту; ручна a11y на Android/iOS.

**Матриця v3 і давні (math):** g9m3l4 звуження; g9m1l1 evidence; a8 п. 22–23; `requires` g9m5; g10m6l3 проміжки f′; автори a7; mer7g №358(2); прогалини без вправ; ISBN Логачевської ч. 2; медіана парного ряду; g11m2 l3; координати в просторі (10 vs 11); m4s1 без boss; алгебра/геометрія з 7 кл.; хто рецензент-учитель.

**Історія:** марка 1991 (Івахненко, №308); «Наші вимоги» 1990; Майдан 2004 (свобода панорами); Gnatoush; Геткант/Ґеткант; №117, Львів 1356, №247, №235, №229, №176, №173, №162, №128; g11s1 без hyp/poll; пропозиції до docs/IMAGES.md і style/common.md (див. sessions/2026-10-31-2.md).

## Обмеження середовища
- Commons — `thumb.wikimedia.org`, ≤ 2 агенти з фото. Playwright — `/opt/pw-browsers/chromium`; браузерні тести — по одному. Паралельні агенти: ніколи `git stash/checkout/reset`; scratchpad — власна підтека на задачу й роль; злиття worktree — inbox з обох боків, потім build окремим комітом. Після злиття PR — гілку від main; id моделей ШІ — не в репозиторій (pitfalls «02.11»).

## Як продовжити
«Прочитай AGENTS.md і handoff; збери в людини перегляд лінії „дроби“ й відповіді на питання 1–2 → задача G4; погодь server/content/ із сесією server/ → engine-ai-a1; решта — за чергою».
