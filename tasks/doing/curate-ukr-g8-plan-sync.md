---
claimed_from: todo
claimed_at: 2026-11-10T07:14:11.247Z
id: curate-ukr-g8-plan-sync
type: curate
subject: ukr
grade: 8
status: todo
claimed_by: curator-plan-ukr8
created: 2026-11-10
---
# ukr 8 кл.: plan.js — синхронізувати з verified-розділами

З inbox 06.11 (куратор пам'яті, сесія 2026-11-10). Службова правка `content/ukr/plan.js` (власник — куратор плану), зміст уроків не змінювати.

1. **`requires` у plan.js відстали від файлів розділів** (автори й fix-ukr-u8-requires дописували лише у `g8-u8s*.js`). Привести plan.js до файлів: u8s4 (+u8s3l1–l3), u8s6 (+u8s5l1–l3), u8s7 (+u8s4l1), u8s8 (+u8s7l1, l2, l4), u8s9 (+u8s5l1), u8s10 (+u8s2l1, u7s12l4, u8s9l1, u8s9l6), u8s11 (+u8s5l1, l2, u8s3l3), u8s12 (+u5s9l1, u8s11l1–l4), u8s13 (як у файлі). Звір `grep -o 'requires: *\[[^]]*\]'` у кожному файлі.
2. **u8s6, тема №1:** «Додаток прямий і непрямий» → «Додаток. Способи вираження додатка» — поділу прямий/непрямий немає ні в З8 §20, ні в МП7 (verifier-u8s6, writer-u8s6; урок написано без цих термінів, D-046). Тему плану не видаляти, лише назву.
3. **style/ukr.md «Нотація»:** приклад `**черго́вий**` суперечить facts/ukr №41 (v) і словникам — лише «чергови́й» (https://goroh.pp.ua/Словозміна/черговий; verifier-write-ukr-diag-g5). Правка прикладу, не правила; style/ змінюється після рішення — оркестратор підтверджує в нотатках задачі.

## Готово, коли
- [ ] `node tools/validate.mjs` — 0 помилок; `node tools/build.mjs` (оркестратор) — plan.js у manifest не змінює id.
- [ ] Нотатки виконавця заповнено, рядок в inbox.
