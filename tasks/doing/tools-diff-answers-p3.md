---
claimed_from: todo
claimed_at: 2026-11-01T23:28:17.138Z
id: tools-diff-answers-p3
type: engine
subject: tools
status: todo
claimed_by: engineer-tools-p3
created: 2026-11-01
depends_on: [engine-half-p3]
---
# test-diff-answers: межі (P3, reports/review/engine-half-p3.md)
1. `tools/test-diff-answers.mjs:24–33`: на чистому дереві `--old HEAD` порівнює однакові learn.js — мутанти D3 (ховає різниці в режимі diagVerdict → diagVerdict), D4, D6 (код виходу ігнорує halfBad) виживають. Додати фікстуру «старого» learn.js з відомою різницею.
2. `:36–44`: частина b799dfa вимагає rc 0 від усього diff-answers — записати в шапці тесту й у docs, що навмисна зміна вердиктів потребує нової категорії в diff-answers.
3. pages.yml: test-diff-answers не входить у CI (і немає `fetch-depth: 0`) — вирішити: додати з повною історією або явно лишити лише в `npm run check`.
Незалежне рев'ю D-026.

## Нотатки виконавця

## Також: P3 з рев'ю engine-hyp-e2-p3 (reports/review/engine-hyp-e2-p3.md) — дрібне для тіні гіпотез
- `dskip` і кілька вкладок: у сховище потрапляє лічильник вкладки, що писала останньою — злиття за max або задокументувати.
- Реплей бере `persist: 0` з подій застосунку (частково тавтологія) — писати прапорець завантаження `slid.hyp` у `boot`.
- Тінь вимкнено бюджетом → застарілий `slid.hyp` (pend) лишається — видаляти ключ або подія `hyp_off`.
- Мутант N1 (`answer()` не скидає `held`) — тест, що лічильник записано наприкінці тесту рівня.
- tools/hyp-replay.mjs:332 — «N подій hyp_*» тепер включає diag_end.
