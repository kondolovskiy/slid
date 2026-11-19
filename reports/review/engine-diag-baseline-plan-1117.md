# Рев'ю D-026: engine-diag-baseline-plan-1117

Рецензент: reviewer-engine-1117 (свіжий контекст, реалізацію не писав). Дата: 2026-11-17.

## Що перевірено
- `git diff 916a9b5..40dc2eb -- app/app.js app/learn.js tools/test-learn.mjs tools/test-ui.mjs docs/CONTENT_SCHEMA.md docs/PERSONALIZATION.md` (коміти 7fb1c1c, частина 96bb001).
- `baseSee`/`seeRow`/`seeNames`/`baseBlock`/`planCard` (app/app.js:417–441), блок «З програми N класу» в `renderDiagEnd` (app/app.js:989–998), `level` (app/learn.js:91), валідатор `see` (app/learn.js:2164–2175), `baseTopics` (бере `see` з поточного опису тесту, тож діє і на збережені плани без міграції), `findLesson`/`startById` (шукають у всіх предметах — кнопка на урок іншого предмета працює), прив'язка `[data-lesson]` (app/app.js:1003, 1054).

## Перевірки (мої прогони)
- `node tools/test-learn.mjs` → 2943 ok (9 нових випадків `see` + `level`); `node tools/test-validate.mjs` → 1621 ok; `node tools/test-personalization-qa.mjs` → 154 ok.
- `node tools/personalization-qa.mjs` на HEAD і на 916a9b5 — вивід ідентичний, код 0 (регресій немає).
- `NODE_PATH=/opt/node22/lib/node_modules node tools/test-ui.mjs` на HEAD → 171 ok, 0 ✗.
- Тест ловить баг: test-ui.mjs з HEAD на коді 916a9b5 → сценарій 16 дає 6 ✗ (немає «тема є в уроці», немає кнопок see, «З програми 5 класу» відсутній без «уже вмієш»).
- Ключі прогресу не зачеплено: нових полів у `slid.v1` немає, `plan.base` той самий.

## Знахідки
Блокувальних немає.
- **P2-1.** Живий зміст не змінено: у dgu5 `apos` ще немає `see: ["u5s7l3"]`, тож симптом плейтесту g5 №3 («попроси дорослого», хоча урок є) лишається, доки агент ukr не додасть поле (рядок в inbox є, memory/short/inbox.md:94). Для dgw7 `era` (урок «Історії») валідатор дасть помилку «see — немає уроку», доки `tools/lib.mjs diagCtx` не передає `allLessons` (inbox:93). Обидва — окремі задачі; критерій «dgu5 → посилання на u5s7l3» виконано лише на фікстурі.
- **P3-1.** Картка «Твій план» на головній (`planCard`, app/app.js:437) для тем із `see` пише «Потренуй: «…» — є уроки, де це повторюється», але не називає уроків і не дає кнопки на них (кнопки є лише в підсумку тесту й у «Увесь план»). Можна додати `seeRow` або назву уроку.
- **P3-2.** `see` іншого предмета перевіряється лише «не старшого класу», без перевірки, що предмет інший (`allLessons` містить і свій предмет; свій урок відсікається гілкою `own`, тож зараз це не баг, але залежить від того, що `ctx.lessons` і `allLessons` узгоджені).

## Не перевірено
- `python3 tools/test-answer-ui.py --suite regression` (немає Python-модуля playwright) — CI job browser.
- Справжні dgh9/dgw9 у браузері (п. 3 перевірено на фікстурі сценарію 16 і читанням коду: умова — `d.topics.some(t=>t.kind==="cur")`).

## Вердикт
**прийнято**
