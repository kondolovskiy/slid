---
id: engine-eng-match-p3
type: engine
subject: eng
depends_on: [engine-eng-match]
status: todo
claimed_by:
created: 2026-11-19
source: review engine-eng-match
priority: P3
---
# Дрібниці типу match (P3 з рев'ю engine-eng-match)

Скіл `engine-change`; звіт — reports/review/engine-eng-match.md.

1. P3-1 app/lang.js:383 — EMOJI не ловить ⌚ ⌛ ⏩–⏬ ⏰ ⏳ ◽ ◾ (Emoji_Presentation; ⏰ і ⌚ імовірні в темі про час), а ✓ ★ ♥ ♪ вважає emoji; тест на U+2B00–2BFF.
2. P3-2 tools/validate.mjs:337, 525, 544 — credits картинок у тесті рівня й пулі лише «хоч якийсь запис», без прив'язки до файлу; тест гілки пулу.
3. P3-3 тести: скидання `mSel=null` у langMarks (app/app.js:1491); match у `langText` (tools/lib.mjs:156).
4. Пропозиція для style/eng.md (через куратора): у match радити 4–6 пар (при 3 парах друга спроба після закріплення однієї гарантує 5 балів).

Межі match у тесті рівня — engine-eng-diag-pool. Рев'ю D-026 після реалізації.
