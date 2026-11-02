---
id: engine-lang-types
type: engine
subject: ukr
status: done
claimed_by: orchestrator
created: 2026-11-02
---
# Рушій мовних вправ: gaps, pick, stress, word, split

## Навіщо
Запуск предмета «Українська мова» (5 кл.). Наявні типи (choice, multi, sort, order…) не дають головних мовних дій: вставити пропущену літеру в слово, знайти слова в реченні, позначити наголос, написати слово, поділити слово на склади чи частини.

## Що зроблено
- `app/lang.js` (новий, `window.SLID_LANG`) — чисті функції: розбір розмітки, перевірка, розв'язок, помилки розмітки.
- `app/app.js` — розмітка (`langHtml`), прив'язка (`bindLang`), позначки (`langMarks`), `gradeNow`, `lock`, `answerSig` (word), повідомлення першої помилки; `GRADED`.
- `index.html` — CSS (.ltext, .gap/.gopt, .pw, .stress/.sv, .split/.cut, .lword).
- `tools/build.mjs` — `app/lang.js` у маніфесті (після math.js, до hyp/app); `tools/lib.mjs` — GRADED, TYPES, `lang` у loadContent, `text` пропусків у метриках; `app/learn.js` — G_GRADED (= lib GRADED, тест test-learn).
- `tools/validate.mjs` — `lang.issues`, pick/split без HTML, `text` у перевірках тексту; `tools/stats.mjs` — предмет без уроків не падає.
- `tools/playtest.py` — відповіді для нових типів (через SLID_LANG.solution).
- `tools/test-lang.mjs` (65 перевірок, очікування вручну) — у `npm run check`.
- docs/CONTENT_SCHEMA.md §4.1, AGENTS.md (карта, команди).
- Предмет `content/subjects/ukr.js`, `ukr` прибрано з catalog.js «скоро».

## Перевірки автора
- `npm run check` — зелено (test-lang 65/65, validate 0 помилок).
- Ручний браузерний прогін на тимчасовому розділі (видалено): усі 5 типів, правильна відповідь, перша помилка (позначки + підказка), друга помилка (показ відповіді), без JS-помилок. Скрипт: scratchpad wrong.py (не в репозиторії).

## Незалежне рев'ю
Звіт: reports/review/engine-lang-types.md

## Нотатки агента

### orchestrator (2026-11-02)
Рев'ю раунд 1 — потрібні виправлення (P2-1 NFD/наголос, P2-2 латинські двійники); виправлено в 95a3577. Раунд 2 — **прийнято**. Залишки P3 → tasks/todo/engine-lang-p3.md; обмеження дописано в CONTENT_SCHEMA §4.1.
