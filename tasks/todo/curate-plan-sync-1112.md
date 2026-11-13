---
id: curate-plan-sync-1112
type: curate
subject: ukr
status: todo
claimed_by:
created: 2026-11-12
---
# plan.js ukr / hist / world — синхронізація після пакета 10–12.11

Лише куратор плану; не під час паралельного пакета (plan.js — спільний файл). Id уроків і розділів не змінювати (AGENTS.md §4 п. 11). Після правок — `node tools/build.mjs`, `node tools/validate.mjs` (0 помилок), `npm run check`.

Зібрано з inbox 10–12.11 (перевір, що ще актуально — частину могли зробити оркестратор чи автори):

## ukr — `requires` у plan.js як у файлах розділів
- u9s4 ← u9s3l1, u9s3l2 (w-write-ukr-u9s4); u9s5 ← + u9s3l2, u9s3l3, u9s4l1, u9s4l2 (verifier-u9s5); u9s6 ← u9s3l1–l3, u9s4l1–l2 (verifier-u9s6); u9s7 ← уроки u9s2 (ССР, тире); u9s8 ← u9s2l1, u9s2l3, u9s3l1, u9s3l2 (+ u9s7l1 після верифікації).
- u9s10, u9s11 ← u8s12l1 (або прибрати u9s10/u9s11 з `for` теми isol у dgu9 — verifier-dgu9).
- u10s1 або u10s2 ← u9s10l2 (тема lex у dgu10, verifier-dgu10); u10s4 ← u9s10l1; u10s10 ← u9s12l1, u9s12l2; u10s1 ← u6s10l4.
- u11s3 ← u7s3l3; u11s4 ← u6s6l3; u11s5 ← u8s7l2, u8s8l1; u11s6 ← u7s5l2, u8s10l1, u8s12l2, u9s2l2, u9s4l1, u9s5l3, u9s5l4, u10s9l3; u11s8 ← u9s2l3, u9s2l4, u9s3l2, u9s5l1, u9s6l2, u9s7l2… (як у файлі); u11s1 ← u8s10l1; u11s7 ← u9s1, u11s8 ← u9s8, u10s4 ← u9s10 (verifier-plan-ukr-g10-11).
- u8s3 ← u7s10l2 (verifier-pu8s3); u8s5 ← u8s4l3 (verifier-pu8s5).
- `why` u10s8: «за професією й обирати» → «і» (УП § 24 п. 4; у файлі розділу вже виправлено).

## hist — порядок тем у `plan` як у файлах розділів (id не міняються)
- g8s2 (Косинський і Наливайко — після l2; l7 після l4), g8s3 (l7 після l3, l8 після l5), g8s5 (l9, l10 — після l3), g9s2 (l1, l2, l7, l8, l3, l9, l4, l5), g9s3 (l1, l2, l3, l6, l7, l4, l8, l5 — дописати теми l6–l8), g9s5 (l1, l2, l3, l6, l7, l8, l4, l5), g10s2 (l1, l2, l3, l10, l4, l5, l6, l7, l11, l12, l8, l9), g10s4 («П'ятирічки й показові суди» першою).
- Чи потрібен у g5s7 екран-повтор державних символів (verifier-refine-hist-diag-g5-g6-cov: звіт покриття спирав g5s7 на символи, а їх немає; символи — лише h41).

## world
- w10s7 `requires` = w9s3l5, w10s4l3, w10s5l2, g10s5l3, g11s1l1, g11s1l3 (як у файлі); після переносу g11s1 у 10 кл. `link` w10s7 → g11s1 можливий.
- w7s3 тема «Ченці, вчені й єретики» → «…та єретики» (§ 24, як у файлі).
- content/subjects/world.js: навичок для прав людини й економіки (`civ`, `eco`) немає — у w11s1 узято `soc`/`pol`; вирішити для 10–11 кл. (нові `sk` — лише нові id).
