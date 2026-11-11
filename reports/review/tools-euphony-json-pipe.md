# Рев'ю D-026: tools-euphony-json-pipe

**Рецензент:** reviewer-tools-euphony-json-pipe (реалізацію не писав). **Дата:** 2026-11-11.
**Перевірено:** коміт `105f984` поверх `02c12de` (гілка `worktree-agent-a71899575b5945777`), увесь diff: `tools/euphony.mjs`, `tools/lib.mjs`, `tools/validate.mjs`, `tools/graph-report.mjs`, `tools/diff-answers.mjs`, `tools/make-tasks.mjs`, `tools/hyp-replay.mjs`, `tools/test-euphony.mjs`, AGENTS.md §3, inbox, задача.

## Вердикт: **прийнято** (P1 немає; P2-1 бажано виправити до злиття або окремою задачею)

## Знахідки

### P2-1. `euphony … | head` тепер падає з необробленим EPIPE і кодом 1 (регресія)
`tools/euphony.mjs:241` і `:249` (`process.stdout.write(...); return 0;`) — після прибирання `process.exit(0)` процес лишається живим, читач закриває pipe, і `process.stdout` віддає подію `error` (EPIPE), яку ніхто не обробляє.
Відтворення (worktree, Node 22):
```
node tools/euphony.mjs --subject math --json | head -c 10 >/dev/null; echo ${PIPESTATUS[0]}
# 105f984: стек «Error: write EPIPE … Unhandled 'error' event», код 1
# 02c12de: тихо, код 0
```
`validate`, `graph-report` і `exitFlushed` (через `console.log`) цього не мають — глобальний console ковтає помилки запису; перевірено: `validate | head -c1`, `graph-report --quiet | head -c1`, фікстура `exitFlushed(3)` з 2 МБ `| head -c5` → коди 0/0/3, без стеку. Проблема лише в прямих `process.stdout.write` у euphony.
Очікувано: `process.stdout.on("error", e => { if (e.code === "EPIPE") process.exit(process.exitCode ?? 0); else throw e; })` у CLI-гілці euphony (або `console.log` замість `stdout.write`) + тест `--json | закритий pipe` → код 0, порожній stderr. У CI зараз euphony в pipe не викликається, тож не блокує; але `--section X | head` — природна команда автора, а з `set -o pipefail` скрипт упаде.

### P3-1. Кінцеві `process.exitCode` у validate / graph-report / diff-answers без pipe-тесту
`tools/validate.mjs:491`, `tools/graph-report.mjs:167`, `tools/diff-answers.mjs:487` — поведінка правильна (коди перевірив вручну, див. нижче), але регресійний тест на великий вивід у pipe є лише для euphony й `exitFlushed`. Повернення `process.exit(...)` у цих трьох файлах жоден тест не зловить. Не блокує.

### P3-2. Ранні `process.exit(2)` після одного рядка stderr лишились (свідомо)
Автор пояснив у нотатках; погоджуюсь — рядок менший за буфер pipe. `tools/stats.mjs:42` уже чекає колбек запису. Без дій.

### Примітка (не до коду задачі)
У worktree є незакомічені зміни згенерованих файлів (`index.html`, `sw.js`, `content/manifest.json`, `reports/style-*.md`, `reports/validate.json`) — артефакти прогонів build/check, не частина `105f984`. Я їх не чіпав і не комічу; оркестратору — не злити їх випадково. Також коміт claim `02c12de` несе чужу правку `content/world/g11-w11s2.js` (poll), через яку `validate` у worktree дає 1 помилку — вже відомо автору й оркестратору.

## Що перевірено щодо запитаних пунктів
- **Коди виходу не змінились.** validate: з помилкою w11s2 → rc 1 (`node tools/validate.mjs --quiet | (sleep 1; tail -1)`), `--section fxx` → 0; ранні `ПОМИЛКА ЗАВАНТАЖЕННЯ` лишились `process.exit(1)`. graph-report `--quiet --strict` → 0 (дрейфу немає); `--strict` з помилками → 1 тим самим виразом. diff-answers: обидва кінці та гілка `exitCode = 2; return` у contentDiff → `exitFlushed(process.exitCode ?? 0)` дає ті самі коди, що й раніше `process.exit(process.exitCode ?? 0)`; test-diff-answers перевіряє rc 0/1 для `--content-old`. make-tasks `--write-pool`: `writePool()` ніде не ставить `exitCode`, тож код 0, як і раніше; `process.exit(2)` усередині лишився. Скрипти в `package.json` "check" і `pages.yml` отримують ті самі коди.
- **Немає продовження після «виходу».** euphony: кожна гілка `return` з `cli()`; модуль після виклику нічого не робить. Ранні виходи посеред скрипта (diff-answers `--content-old`, make-tasks `--write-pool`, hyp-replay `--events`/`--graph-diff`) — через `await exitFlushed`, який завершується `process.exit`, тож звичайний режим не стартує. hyp-replay перевірив вручну: `--events` і `--graph-diff` на трьох мінімальних експортах — rc 0, у `--out` не з'явилося жодного файлу (звіт не пишеться). Фікстура з `console.log("after")` після `exitFlushed` — «after» не друкується (і тест це перевіряє).
- **Зависань немає:** validate, graph-report, euphony, hyp-replay, тести diff-answers/make-tasks завершуються (vm-контексти без таймерів).
- **parseArgs euphony:** `--help`/`-h` → 0, довідка, звіт-сторож не змінено; `--bogus`, `--subject=math`, `--`, `--section` без значення, `--section --json` → 2 з повідомленням у stderr, без завантаження змісту; `--section nope` → 2. Обмеження (дубль прапорця бере останній; id не може починатися з «-») — прийнятні.
- **exitFlushed** (`tools/lib.mjs`): 2 МБ у повільний pipe — 2000001 байт, код 3; у файл — код 3; у закритий pipe — код 3 без стеку.
- **Pipe euphony:** `--subject math --json | (sleep 1; wc -c)` → 157754 (= розміру у файл); на `02c12de` → 65536 (баг відтворено).
- **Docs:** AGENTS.md §3 і шапка euphony.mjs відповідають коду; HELP описує коди 0/2. Назв моделей ШІ в diff немає (лише трейлери коміту).

## Мутанти (копія дерева в scratchpad рецензента, `test-euphony`)
| Мутант | Результат |
|---|---|
| M1: `--json` → знову `process.exit(0)` після write | 1 ✗ — вбито |
| M2: `parseArgs` не повертає помилку на невідомий аргумент | 8 ✗ — вбито |
| M3: `exitFlushed` не чекає скидання (`Promise.all` без await) | 1 ✗ — вбито |
| M4: `--help` без `return 0` (далі прогін) | 9 ✗ — вбито |

## Виконані команди
- `node tools/test-euphony.mjs` — 128/128; `test-validate` 1620; `test-graph-report` 67; `test-make-tasks` 69; `test-diff-answers` 52 ok / 0 ✗; `test-hyp` 625 — усі зелені (worktree).
- Ручні сценарії вище (old = `git archive 02c12de`, new = `git archive 105f984` у scratchpad).

## Не перевірено
- Повний `npm run check` у worktree (червоний на validate через чужу правку w11s2 — помилка відтворена й не з цієї задачі); validate на основному дереві не запускав.
- Браузерні тести (не зачеплені змінами).
- diff-answers без `--content-old` у реальному pipe з великим виводом — лише через test-diff-answers і читання коду.
