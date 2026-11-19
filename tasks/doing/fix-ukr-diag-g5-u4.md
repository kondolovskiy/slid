---
id: fix-ukr-diag-g5-u4
type: fix-diag
subject: ukr
grade: 5
section: dgu5
status: doing
claimed_by: writer-fix-dgu5-u4
created: 2026-11-19
---
# dgu5: опори 1–4 кл. → уроки 4 класу (u4)

## Навіщо
Після появи уроків ukr 4 кл. (D-054) `node tools/validate.mjs` дає 8 помилок у `content/ukr/diag-g5.js`: «тема …: baseline заборонено — у предмета є уроки молодших класів …; посилайся на них у lessons» (CONTENT_SCHEMA §9, `baseline`). Опори dgu5 мають вести на уроки u4.

## Що зробити
- Для кожної з 8 тем `pre` (abc, stress, root, e-y, apos, syn, main, text): прибрати `baseline: true` і `see`, у `lessons` — 1–2 id уроків u4 (не boss), де цю тему вчать (content/ukr/g4-u4s*.js, усі verified); `for` лишити. Еталон — `content/math/diag-g5.js` (теми `pre` з `lessons: ["g4m…"]`); перевір, чи завданням таких тем потрібне поле `lesson` (§9).
- Якщо теми в u4 немає (напр., наголос чи апостроф подано інакше) — бери найближчий урок u4 і поясни в нотатках; якщо зовсім немає — запиши варіант у нотатки й inbox, не вигадуй id.
- Завдання (тип, ключ, варіанти, порядок) **не змінювати** — тоді `rev` не потрібен (§9 `rev`). id тестів і тем не перейменовувати.
- Шапку файлу доповнити рядком про цю правку; статус тесту → "draft" до верифікації.

## Готово, коли
- [ ] `node tools/validate.mjs --diag dgu5` і повний `node tools/validate.mjs` — 0 помилок у diag-g5.js.
- [ ] Нотатки: таблиця «тема → lessons u4 → чому»; рядок в inbox; задача → tasks/review/ (verifier зі свіжим контекстом).

## Нотатки виконавця
