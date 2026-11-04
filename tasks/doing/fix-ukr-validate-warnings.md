---
claimed_from: todo
claimed_at: 2026-11-04T20:48:45.357Z
id: fix-ukr-validate-warnings
type: fix
subject: ukr
status: todo
claimed_by: writer-fix-ukr-validate-warnings
created: 2026-11-04
---
# ukr: попередження нових перевірок validate (engine-lang-p3) у verified уроках 5–6 кл.

Нові перевірки engine-lang-p3 знайшли в уже verified уроках (reports/validate.json, 04.11). Скіл `content-author`; змінені уроки → `draft` і коротка верифікація (`content-verify`).

## Що виправити
1. **pick: кнопки з кількох слів видають відповідь** (правильних груп 3–4, хибних 1 — потрібно ≥ 2 хибні групи `[!…]` з кількох слів; pitfalls «02.11, сесія 3»):
   - content/ukr/g6-u6s1.js — u6s1l6 екран 12 («Добрий день», «будь ласка», «Щиро дякую»);
   - content/ukr/g6-u6s14.js — u6s14l2 екран 10 («У суботу», «о 12 годині», «біля школи»); u6s14l5 екран 6 («Посеред кімнати», «Над ним», «Біля вікна», «На стіні»); u6s14l7 екран 7 («Уздовж стін», «Біля вікна», «Посередині зали»).
2. **fbText із номером варіанта:** content/ukr/g5-u5s2.js — u5s2l7 екран 11 (choice, «…третьому варіантах») — рушій перемішує варіанти; назвати сам варіант.

Не змінювати id, відповіді й кількість екранів. Готово: `node tools/validate.mjs --section u5s2|u6s1|u6s14` — цих попереджень немає; уроки в `review`; рядок в inbox.

## Нотатки агента
