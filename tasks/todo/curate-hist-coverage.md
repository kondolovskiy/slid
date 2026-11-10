---
id: curate-hist-coverage
type: curate
subject: hist
status: todo
claimed_by:
created: 2026-11-10
depends_on: [research-hist-coverage-g5-6, research-hist-coverage-g7-9, research-hist-coverage-g10-11]
---
# Повнота історії України 5–11: план і задачі за звітами покриття

## Навіщо
Запит людини (чат 2026-11-10): повне покриття уроків історії. Три звіти `reports/research/coverage-research-hist-coverage-*.md` (після верифікації) дають прогалини; ця задача перетворює їх на план і задачі.

## Що зробити (роль — куратор; скіл `content-author`, `skill-graph` не потрібен — графа hist немає)
1. Прийняти чи відхилити кожну пропозицію звітів (причина — у нотатки; обов'язкове за програмою — приймати, «бажане» — за обсягом тижнів).
2. **Нові розділи** — записи в `content/hist/plan.js` (нові id, `weeks` без перетину з наявними; за потреби — зсув `weeks` у плані й рядок до авторів розділів, id не змінюються) → `node tools/make-tasks.mjs --subject hist` створить write-hist-*.
3. **Нові уроки в наявних розділах** — задачі `revise-hist-<розділ>.md` у tasks/todo (формат — tasks/done/hist-world-7-9.md, «новий урок g8s1l6 перед фіналом»): тема, обсяг, нові id уроків, `learned`, D-027, верифікація.
4. **Доповнення уроків** — `refine-hist-<урок>.md`.
5. **Тести рівня:** якщо новий урок/розділ має бути темою `cur` або змінює опори `pre` — задача `refine-hist-diag-gN` (нова редакція `rev`, id тесту той самий; CONTENT_SCHEMA §9 `rev`).
6. Рядок DECISION в inbox (що прийнято, обсяг у уроках по класах).

## Обмеження
`content/hist/plan.js` — лише ця задача. Не запускати build. id наявних уроків — не перейменовувати (правило 11).

## Готово, коли
- [ ] plan.js оновлено, задачі створено (список у нотатках), `node tools/validate.mjs` — 0 помилок, `make-tasks --subject hist --dry-run` показує очікуване.
- [ ] Задача → `tasks/review/` (content-verifier: план ↔ звіти; нічого обов'язкового не загублено).

## Нотатки виконавця
