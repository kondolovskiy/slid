---
id: style-hist-hints
type: style-fix
subject: hist
status: todo
claimed_by:
created: 2026-09-27
---
# Додати підказки (hint) в уроки історії 5 класу

Валідатор: у 10 звичайних уроках історії немає жодної підказки (l4, l5, h22, h23, h24, h31, h32, h33, h41, h42, h43, h44).
Правило style/common.md: у кожному звичайному уроці ≥ 1 hint на найскладнішому завданні.
Також h43 «Українці, яких знає світ» має лише один тип завдань (typeVariety = 1) — замінити один choice на sort або order.

Готово, коли `node tools/validate.mjs` не показує цих попереджень, а `python3 tools/playtest.py --section s4` проходить.
