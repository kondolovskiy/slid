---
id: tools-diag-nonmath-p3
type: tools
status: todo
claimed_by:
created: 2026-11-10
---
# Інструменти: P3 тестів рівня ukr / hist / world і мовних вправ

З inbox 06.11 (engine-diag-lang-types — рев'ю P3, writer-write-ukr-diag-g7, qa-ukr-diag, verifier-u8s7). Скіл engine-change; незалежне рев'ю D-026.

1. `tools/personalization-qa.mjs --diag` не знає тестів ukr / hist / world («Невідома діагностика dgu7») — підтримати або явно пропускати з повідомленням.
2. `split` з пробілом на краю слова проходить `lang.issues` (уроки й тести) — помилка validate + тест.
3. euphony / validate не ловлять у/в на початку речення в елементах `sort` і в `<b>` fbText («Влітку…», «Встановлено…», u8s7) — розширити перевірку або задокументувати межу.
4. docs/EVIDENCE.md — описати `raw` мовних типів у тестах рівня; ширше покриття test-ui сценарію 10.

## Готово, коли
- [ ] `npm run check` — exit 0; нові тести з мутантами.
- [ ] reports/review/tools-diag-nonmath-p3.md — «прийнято».
