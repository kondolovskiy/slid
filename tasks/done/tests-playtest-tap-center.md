---
id: tests-playtest-tap-center
type: tests
subject: engine
status: done
claimed_by: orchestrator
created: 2026-11-13
---
# playtest.py: клік по варіанту, прокрученому в центр

## Навіщо
CI job `browser` (PR #22, run 43301380973) упав: «не зараховано: hist урок g8s6l5, екран 7 з 10 (multi); відповідь [1, 2, 3]».
Відтворено локально (Node Playwright, вікно 400×860, як у playtest.py): варіант «Б» (2 рядки, висота 77 px) стоїть унизу, його низ —
під фіксованою панеллю `#dock`. Playwright вважає елемент видимим і не прокручує; клік влучає в панель — варіант не позначено.
З `scrollIntoView({block:'center'})` перед кліком усі три варіанти позначаються, відповідь зараховано (3/3 прогони). Зміст уроку правильний.

## Що зроблено
- `tools/playtest.py`: допоміжна `tap(pg, sel)` — `scrollIntoView({block:'center'})`, потім `pg.click(sel)`; нею замінено 15 кліків
  по елементах вправ (`#stage …`, `#ord …`, `#shade …`) у `answer()` і `lang_wrong()`. Кнопки навігації (`#action`, `data-subject`…) не змінено.

## Перевірка
- Python-модуля playwright у контейнері немає — playtest.py локально не запускається; синтаксис перевірено `ast.parse`.
- Відтворення й перевірка підходу — Node-скрипт у scratchpad (rep4.mjs: без центрування — 3/3 «bad», з центруванням — «ok»).
- Остаточно — CI job `browser`.

## Рев'ю
reports/review/tests-playtest-tap-center.md — «прийнято». P3-1 (undo через tap) застосовано окремим однорядковим комітом; P3-2/P3-3 — рекомендації на майбутнє.
