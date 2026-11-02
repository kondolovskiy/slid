# Рев'ю: tools-agent-skills (D-026)

- **Коміт:** `3915528` (база `3915528~1` = `c58de8c`), `git show 3915528`, 30 файлів.
- **Рецензент:** engineering-reviewer, свіжий контекст, реалізацію не писав.
- **Дата:** 2026-11-02.

## Вердикт: **прийнято**

Блокувальних знахідок (P1) немає: усі правила, заборони, кроки ролей і вимоги бекенду старих AGENTS.md / агентів / `/parallel` / CLAUDE.md знайшлися в новому AGENTS.md або в скілах. Команди й прапорці, згадані в документах, існують. `npm run check` зелений. Є 3 знахідки P2 (бажано виправити до злиття: суперечності й посилання, що ведуть не туди) і кілька P3. Якщо P2 виправлять, вистачить короткого повторного рев'ю diff.

## Знахідки

### P2: бажано до злиття

**P2-1. Правило про назви моделей ширше за джерело й суперечить тому самому коміту.**
`AGENTS.md:83`: «Ідентифікатори й назви моделей ШІ не кладемо в репозиторій (коміти, код, docs, звіти)». Джерело, `memory/long/pitfalls.md:246`, каже вужче: **нові** (неоголошені) назви й id, а в docs лише рівні Н/С/М. Той самий коміт пише `haiku` у `CLAUDE.md:14,16`, `qa-runner.md` має `model: haiku` у frontmatter (функціональне поле), а трейлер коміту містить назву моделі. Наслідок: агент, який виконує правило буквально, може прибрати `model: haiku` або відмовитися від атрибуції.
Очікувано: «Нові/неоголошені назви й id моделей ШІ…» із винятком для поля `model:` у frontmatter агентів і для обов'язкових трейлерів атрибуції. Або переформулювати за pitfalls 246.

**P2-2. Посилання «AGENTS.md §1» у живих задачах і handoff тепер ведуть на «Стек», а не на карту (тепер §2).**
- `tasks/todo/engine-ai-a1.md:12`: «пропозиція для AGENTS.md §1 і docs/BACKEND.md» (додати рядок `server/content/` у карту).
- `memory/short/handoff.md:22`: «рядок в AGENTS.md §1».
- `docs/design/ai-solution-check.md:222,590`: «карти AGENTS.md §1».
Це вказівки до дії: наступний агент допише рядок карти не в той розділ. Треба замінити на §2 (handoff може оновити куратор). Інші застарілі посилання — у P3-1.

**P2-3. Браузерні тести паралельно: нове правило суперечить живій документації.**
`AGENTS.md:59`, скіли `content-verify:36` і `engine-change:32`, а також `qa-runner` кажуть «по одному, не паралельно» (pitfalls 231). Але `docs/WORKFLOW.md:28` («плейтест бере вільний порт, можна паралельно») і шапка `tools/playtest.py:6,15` («можна запускати паралельно») кажуть протилежне. Раніше «можна паралельно» було і в старому CLAUDE.md, і в старому агенті-верифікаторі, тож зміна змісту свідома. Але старі формулювання лишилися в docs/WORKFLOW.md і tools/.
Очікувано: узгодити WORKFLOW.md §3 і коментар playtest.py («вільний порт дозволяє, але під навантаженням флейкає — запускай по одному»).

### P3: потім

- **P3-1. Застарілі номери розділів у дизайн-документі.** `docs/design/skill-graph-math.md:127` (§1 → §2), `:160` («§3 п. 6» → §4 п. 7), `:183` («§3 п. 5, 8, §5» → §4 п. 6, скіл content-author §6, §5), `:186` («AGENTS.md §4, автор, крок 6 / оркестратор, крок 4» → скіли `content-author` §5 і `parallel-run` §3 п. 3). Документ живий (прийнятий дизайн), тож посилання варто оновити.
- **P3-2. `tools/validate.mjs:357,363`.** Коментар каже «“0 помилок” розділу (AGENTS.md §7)». Але `AGENTS.md:113` вимагає 0 помилок **повного** validate. Правило «`validate --section` — 0 помилок» (старий §3 п. 8) тепер живе лише в скілах: `content-author` §6, `hist-images` §5, `math-pool-diag` §3. Точніше посилання: «скіл content-author §6».
- **P3-3. «Усі node-тести» — неправда.** `AGENTS.md:49`, `engine-change/SKILL.md:31` і `qa-runner.md:10` кажуть, що `npm run check` = «build + усі node-тести». Насправді `tools/test-metrics.mjs` (20 перевірок, зелений) не входить ні в `package.json` scripts.check, ні в `pages.yml`. Це було й до коміту, але нове формулювання це приховує. Або додати тест у check і CI (окрема інженерна задача), або написати «node-тести зі scripts.check».
- **P3-4. `memory/long/INDEX.md:5` (рядок decisions) — 475 символів.** Той самий коміт вводить правило «один рядок ≤ 300 символів на файл» (`memory-curate/SKILL.md:23`).
- **P3-5. Описи (frontmatter) агентів не оновлено.** `qa-runner.md:3` досі перелічує старий набір із 5 тестів (тіло вже запускає `npm run check`). `content-writer.md:3`: «Пише один розділ уроків… write-section», хоча CLAUDE.md:9 і тіло агента дають йому ще пули, тести рівня й зображення. Оркестратор вибирає агента саме за description.
- **P3-6. Активація скілів.** Описи загалом конкретні («Use when …»), а пари content-author / math-pool-diag / hist-images розведені явно (content-author виключає пули й тести рівня). Дрібні перекриття:
  - `engine-change` охоплює «.github/workflows» і «tests» загалом. Це перекривається з `backend-change` («.github/workflows/server.yml», `server/test`). Варто дописати в engine-change «(not server/ or server.yml — that is backend-change)».
  - Немає скіла на зміну `.claude/`, AGENTS.md і CLAUDE.md, хоча `AGENTS.md:72` і `engineering-review` вимагають рев'ю таких змін. Варто додати «.claude/, AGENTS.md» в опис engine-change.
  - У таблиці `AGENTS.md:89–101` немає префіксів реальних задач `design-*`, `research-*` (зараз у todo/doing) і `qa-*`.
  - Команди `/parallel`, `/verify-section` тощо видно в списку скілів поруч із `parallel-run` і `content-verify`. Це не шкодить, бо команди лише обгортають скіли.
- **P3-7. Дрібні втрати формулювань (зміст не змінюється):**
  - бекенд п. 6: «Обидва кроки — з тестами» (`backend-change/SKILL.md:19`);
  - п. 3: «(HTTP / gRPC / шина подій)»;
  - п. 2: «облікові записи веде школа»;
  - прапорець `playtest --shots` зник з AGENTS §3;
  - «однакові еталони в задачах» (старий §5) лише натяком у `parallel-run` §1 п. 2;
  - `math-pool-diag` не має «для поняттєвого уроку мінімум 5» (CONTENT_SCHEMA/make-tasks:129).
  - `backend-change/SKILL.md:30`: `npm run migrate` без `DATABASE_URL=…`, а `migrate.ts:22` вимагає його (див. server/README.md:9).
- **P3-8 (до коміту, поза diff).** Шаблон задачі в `tools/make-tasks.mjs` («Готово, коли: `node tools/build.mjs && …`») суперечить правилу «build під час паралельного запуску — лише оркестратор» (`AGENTS.md:70`, `content-author` §5). Для hist шаблон каже «Фото (якщо є)», хоча D-027 вимагає img у кожному уроці. Варто окремою задачею.

## Порівняння вимог (старе → нове)

| Старе | Нове | Вердикт |
|---|---|---|
| §0 порядок читання | AGENTS §0 (роль → скіл §6) | ✅ |
| §1 карта (усі рядки, graph.js, diag, learn/evidence/hyp, server.yml) | §1 стек + §2 карта (+ пули, `.claude/skills/`) + §6 покажчик docs | ✅ |
| §2 команди (graph-report `--since/--uses`, test-learn, test-validate, server) | §3 + `skill-graph` (`--since`, `--uses`) + `npm run check` | ✅ (`--shots` зник, P3-7) |
| §3 п. 1–7, 9, 10 | §4 п. 1–4, 6–10 (+ D-019 п. 5, id п. 11, ПД п. 12) | ✅ |
| §3 п. 8 validate --section | скіли content-author / hist-images / math-pool-diag | ✅ (P3-2) |
| §4 оркестратор 1–7, 5а | `parallel-run` §1–3, `engineering-review` §5 | ✅ |
| §4 автор 1–6, 3а | `content-author` §1–7 | ✅ |
| §4 верифікатор 1–6, 3а + старий агент (URL, ⚠️ → draft) | `content-verify` §1–7 | ✅ |
| §4 рецензент 1–5 | `engineering-review` §1–5 | ✅ |
| §4 style-sync 1–4 + агент 1–7 | `style-sync` 1–7 | ✅ |
| §4 куратор 1–4 + агент 1–6 | `memory-curate` 1–8 | ✅ |
| §5 паралельна робота | AGENTS §5 + `parallel-run` | ✅ |
| §6 «Готово» (stats-прапорці, бекенд) | AGENTS §7 + content-author §6 + backend-change «Перевір/Здай» | ✅ |
| §7 бекенд, п. 1–9 | `backend-change` п. 1–9, «Здай»; ПД — AGENTS §4 п. 12 | ✅ (P3-7) |
| CLAUDE.md: паралельні агенти, headless-цикл, вільний порт | `parallel-run` §2; вільний порт → «по одному» | ⚠️ свідома зміна, P2-3 |
| `/parallel`: моделі й причина (sonnet без URL), кроки 1–8 | `parallel-run` §1–3 | ✅ |
| INDEX.md: хронологія по файлах | покажчик; хронологія — у git і sessions/ | ✅ (P3-4) |

## Точність до коду (перевірено)

| Що | Де перевірено | Вердикт |
|---|---|---|
| `validate --section/--diag/--pool/--quiet` | `tools/validate.mjs` | ✅ |
| `graph-report --line/--strict/--since/--uses/--quiet` | `tools/graph-report.mjs:15` (KNOWN) | ✅ |
| `claim list todo --subject --grade --ids`, `depends_on` не перевіряє | `tools/claim.mjs:6,25,27` (`depends` немає) | ✅ |
| `test-answer-ui --suite content/regression --pool --diag --browser` | `tools/test-answer-ui.py:1209–1216` | ✅ |
| `diff-answers --grades N` | `tools/diff-answers.mjs:23,39–46` | ✅ |
| `personalization-qa.mjs` | існує | ✅ |
| `playtest --section/--port` | `tools/playtest.py:13,15` | ✅ |
| `make-tasks --subject`, `--tasks` | `tools/make-tasks.mjs:14,16` | ✅ |
| server `check`, `test:e2e`, `build`, `migrate` | `server/package.json`, `server.yml:35–40` | ✅ (DATABASE_URL — P3-7) |
| test-answer-ui не в check і не в CI | `package.json`, `pages.yml` | ✅ |
| CI запускає не весь check | `pages.yml` (без graph-report, stats) | ✅ |
| пул `pg*`, тест `dg*` (qa-runner) | `content/math/pool-g10-g10m1.js` → `pg10m1` | ✅ |
| `SK_RETAG`, SW вимикається з `file://`, синхронізується лише `slid.v1` | `app/learn.js:270`, `app/pwa.js:2`, `docs/BACKEND.md:73` | ✅ |
| D-038 2б, лінія «дроби», G4 | `decisions.md:205–207`, `content/math/graph.js:3` | ✅ |
| 6–8 задач (3/2–3/1–2) | `docs/CONTENT_SCHEMA.md:298` | ✅ |
| Розділи pitfalls, названі в скілах (15 назв) | `grep -F` по `pitfalls.md` | ✅ усі існують |
| Шляхи docs/, style/, server/, memory/ (25 шт.) | `test -e` | ✅ усі існують |
| `name` = тека для 11 скілів | frontmatter | ✅ |

## make-tasks.mjs

- `node --check tools/make-tasks.mjs`: синтаксис гаразд. Бектики в рядку 54 екрановано (`\``), так само як у рядку 68.
- `node tools/test-make-tasks.mjs` (у check): 22/22. Але тест покриває лише режим `--write-pool`, а змінений рядок належить звичайному режиму, тож він тестом не покритий.
- `node tools/make-tasks.mjs --tasks <scratchpad>/tasks` → «Створено задач: 0»: розділів лише з планом зараз немає.
- Відтворення: копія інструмента в scratchpad із заглушкою `loadContent` (фіктивний розділ hist `g99s1`). Згенерована задача містить `- AGENTS.md і скіл автора \`.claude/skills/content-author/SKILL.md\``: бектики відрендерено правильно, шлях існує.

## Виконані перевірки

```
npm run check                      → rc 0: формули 75/75, лабораторія 150/150, learn 2338, evidence 155, hyp 616,
                                     validate-тести 1007, graph-report 67, make-tasks 22, diff-answers ok;
                                     validate 0 помилок / 254 попереджень; граф math 25 вузлів, 0 помилок, 0 дрейфу; stats
node tools/test-metrics.mjs        → 20 перевірок пройдено (поза check — P3-3)
git restore reports/style-hist.md reports/style-math.md reports/validate.json → дерево чисте
```
Також: `grep -rn "AGENTS.md §"` по живих файлах (без tasks/done, reports, sessions, decisions), порівняння старих і нових файлів через `git show 3915528~1:…`.

**Не перевірено:** чи справді Claude Code вибирає потрібний скіл за description (поведінковий прогін активації не робився); `test-answer-ui.py` і `playtest.py` не запускались (зміна не зачіпає app/ і content/); бекенд `npm run check` / `test:e2e` не запускались (server/ не змінено).
