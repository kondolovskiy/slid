---
claimed_from: todo
claimed_at: 2026-11-04T20:48:45.746Z
id: tools-world-img-p3
type: tools
subject: world
status: done
claimed_by: eng-tools-lang
created: 2026-11-03
depends_on: [tools-world-img]
---
# P3 після рев'ю tools-world-img (reports/review/tools-world-img.md)

Незначні пункти рецензента; рев'ю tools-world-img прийнято, ці правки — необов'язкові, але бажані.

1. **P3-1.** Фікстури `world` у `tools/test-validate.mjs:56` мають `grade: 5`, хоча предмет — 7–9 кл. Замінити на 7 (на результат не впливає).
2. **P3-2.** Коментар `tools/validate.mjs:287` («Для історії») — дописати `world`.
3. **P3-2.** AGENTS.md §4 п. 9: «Історія: у кожному уроці ≥ 1 справжнє `img` (D-027…)» → «**Історія й всесвітня історія:** …» (D-044 п. 4).

Скіл `engine-change`; правки в tools/ і AGENTS.md — незалежне рев'ю D-026 (`engineering-review`). Готово: `npm run check` зелений, `reports/review/tools-world-img-p3.md` — «прийнято».

## Нотатки виконавця (eng-tools-lang, 2026-11-04)
1. **P3-1** `tools/test-validate.mjs`: фікстури D-027 для `world` — `grade: 7` і файл `g7-<id>.js` (hist/math лишились 5). test-validate зелений.
2. **P3-2** коментар `tools/validate.mjs` над перевіркою D-027: «Для історії й всесвітньої історії (hist, world; D-044 п. 4)».
3. **P3-2** AGENTS.md §4 п. 9: «**Історія й всесвітня історія:** у кожному уроці ≥ 1 справжнє `img` (D-027, D-044 п. 4; помилка validate).»
Рішень людини не потребувало.
