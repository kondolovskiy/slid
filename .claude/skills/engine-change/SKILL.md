---
name: engine-change
description: Use when changing anything in app/ (engine, learn.js, evidence.js, hyp.js, math.js, lab.js, pwa.js), tools/ (validate, stats, build, QA tools), their tests or .github/workflows/pages.yml — including new screen types, answer kinds or validator rules. Not for server/ or server.yml (backend-change).
---

# Зміна рушія, інструментів, тестів чи CI

Задача — `tasks/doing/engine-*.md` / `tools-*.md` / `tests-*.md`. Після реалізації вона йде в `review` до **незалежного** рецензента (D-026, скіл `engineering-review`).

## 1. Прочитай
- Задачу й дизайн, на який вона посилається (`docs/design/*.md`).
- docs/ARCHITECTURE.md; за темою — docs/CONTENT_SCHEMA.md, docs/PERSONALIZATION.md, docs/EVIDENCE.md.
- decisions.md (рішення, які зачіпаєш) і pitfalls.md: «Тестування», «Інструменти й перевірки», «Рушій і журнал», «Паралельна робота й злиття».

## 2. Інваріанти
- **Офлайн:** застосунок працює без мережі, без бекенду, з `file://` (service worker там вимикається).
- **Прогрес дітей:** `slid.v1` не змінює формат без міграції; id уроків/навичок/вправ — ключі прогресу. `slid.evidence.pending` і `slid.hyp` ділять квоту localStorage зі `slid.v1`; синхронізується лише `slid.v1`.
- **Новий модуль `app/*.js`** — із заглушкою й викликами в `try`, з бюджетом часу; зламаний модуль не зупиняє застосунок.
- Рушій не знає предметів: жодних `if (subject === "hist")`.
- Переліки, продубльовані між `tools/validate.mjs` і рушієм (команди TeX, answerKind), — з одного джерела або з тестом на збіг.
- Зміна `sk` вправи → рядок у `SK_RETAG` (app/learn.js).
- Тести не прив'язуй до живого складу змісту (кількість вправ, конкретний пул) — лише до фікстур у `tools/fixtures/`.

## 3. TDD
1. Спершу тест, що падає: node-тест у відповідному `tools/test-*.mjs` або сценарій `tools/test-answer-ui.py`.
2. Мінімальна реалізація → зелено → рефакторинг при зелених тестах.
3. Для QA-інструментів — тест на хибний успіх і на нульовий прогін (0 вправ ≠ «0 змін»).

## 4. Перевір
```bash
npm run check                                     # build + усі node-тести + validate + graph-report + stats
python3 tools/test-answer-ui.py --suite regression   # обов'язково для змін app/; окремо від інших браузерних прогонів
python3 tools/playtest.py --section <id>          # для зачеплених розділів
node tools/diff-answers.mjs ...                   # за зміни перевірки відповідей: що змінилося на реальному змісті
```
Playwright — `/opt/pw-browsers/chromium` (`--browser /opt/pw-browsers/chromium`). Мутанти, що виживають, — прогалина покриття.
CI (`pages.yml`) запускає не весь check — новий node-тест додай і в `package.json`, і в `pages.yml`.

## 5. Збірка й документація
- `node tools/build.mjs` → закоміть `index.html`, `sw.js`, `content/manifest.json` (будь-яка зміна `app/*.js` змінює `VERSION` у sw.js).
- Онови документацію, яку зачепив (CONTENT_SCHEMA, PERSONALIZATION, EVIDENCE, AGENTS.md §3 для нових команд).
- Під час паралельної роботи — без `git stash/checkout/reset`; мутанти й копії дерева — у власній підтеці scratchpad.

## 6. Здай
Нотатки задачі: що змінено, тести, результати прогонів (точні команди), відомі обмеження. Рядок в inbox. `node tools/claim.mjs move <task-id> review`.
Передай рецензенту задачу, коміт/diff і результати перевірок. Виправлення після рев'ю — новим комітом, назад тому самому рецензенту. До вердикту «прийнято» задача не йде в `done`.
