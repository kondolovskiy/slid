---
write_group: personalization-shared
id: tools-pqa-exactroot-in-list
type: engine
subject: math
status: review
claimed_by: engineer-pqa
created: 2026-10-31
depends_on: [verify-math-personalization-g8]
---
# personalization-qa: список із точними коренями закриває вимогу exactRoot

Рішення людини (2026-10-31, варіант 2 з reports/verify/math-personalization-g8.md): в `tools/personalization-qa.mjs` вимогу формату `exactRoot` уроку має закривати й вправа `answerKind: "list"`, у ключі якої хоч один елемент — точний корінь (√, напр. «-√5; √5»), якщо `checkAns` для цього списку справді розбирає елементи як exactRoot (тобто учень вводить корінь і перевірка канонічна). Мета — зняти «БРАКУЄ: pg8m5/g8m5l1, g8m5l4: немає формату exactRoot» без зміни матриці.

- Не послаблювати інші перевірки; list без кореня не рахується; число-наближення не рахується.
- Регресії — у tools/test-personalization-qa.mjs (позитив, негатив, список з десятковим наближенням).
- Оновити опис правила в docs (PERSONALIZATION_QA.md або де описано формати).
- Незалежне рев'ю (D-026).
- Не покриває pg8m3/g8m3l3 (немає формату list) — це окреме питання матриці/уроку.

## Нотатки виконавця

Виконавець: engineer-pqa, 2026-10-31.

- `app/learn.js`: новий чистий експорт `listKey(s)` — ключ `answerKind: "list"`, розібраний тим самим `exactKey` + `parseList`, що й `checkAns` (з тим самим бюджетом/дедлайном): для кожного елемента `{ exact, root (радикал ⁿ√, n ≥ 2; π не рахується), tidy, approx }`. Поведінку `checkAns` не змінено.
- `tools/personalization-qa.mjs`: `rootList(it, learn)` — формат `exactRoot` уроку присутній також, якщо є вправа `type: "answer"`, `answerKind: "list"`, де: ключ розібрано точно, хоч один елемент — корінь, усі елементи канонічні, `checkAns(ключ як записано) === "ok"` і `checkAns(той самий список із десятковими наближеннями коренів, 6 знаків) === "bad"`. Інші формати й перевірки не змінено.
- `tools/test-personalization-qa.mjs`: +13 перевірок (25 → 38): позитив на реальному pg8m5 (a04 «±√5» закриває g8m5l1), «-√5; √5», «0; √5»; негативи — list без кореня `[-3, 3]`, десяткові наближення `"2,236; -2,236"` і `[2.236, -2.236]`, «π; 2π»; `rootList` для a04/b05 = true, a05 («±3/8») / a01 = false; заглушка `checkAns → "ok"` (наближення приймалося б) і відсутній `listKey` → не рахується. На старій версії `personalization-qa.mjs` тест падає на першій новій перевірці (позитив l1); негативи на старій версії проходять за побудовою.
- Документація: docs/PERSONALIZATION_QA.md — абзац про формати.
- **Важливо:** g8m5l4 правило не закриває — у l4 немає жодного ключа з коренем (d01–d08 — цілі числа). Порівняння повного `--strict` старої й нової версії: зникає рівно один рядок `pg8m5/g8m5l1: немає формату exactRoot`. Для `--grade 8 --strict` лишаються `pg8m3/g8m3l3: немає формату list` і `pg8m5/g8m5l4: немає формату exactRoot` — друге питання матриці/пулу для куратора (варіант (а) з reports/verify/pg8m5.md лише для l4 або нова вправа автора).
- Перевірки: test-personalization-qa rc 0 (38); personalization-qa --strict для 4, 5, 7 — rc 0; для 8 — rc 1 (2 рядки вище); test-learn rc 0 (839); validate rc 0 (0 помилок); build виконано (app/learn.js змінився → sw.js).
- Потрібне незалежне рев'ю (D-026).
