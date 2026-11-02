---
id: engine-hyp-e4-shadow-routes
type: engine
subject: math
status: todo
claimed_by:
created: 2026-11-02
depends_on: [tools-diff-answers-p3]
---
# Тінь гіпотез: маршрути без localStorage і з перевищенням бюджету (до E4)

З рев'ю reports/review/tools-diff-answers-p3.md (P3-2, P3-3). Не блокує; зробити до пілоту E4 (docs/design/diag-hypothesis-math.md §6.1, §9 п. 33–34). Незалежне рев'ю D-026.

1. **Маршрут без localStorage** у `hyp_checks` (tools/test-answer-ui.py): `Storage.prototype.getItem`/`setItem` кидають виняток з самого старту. Очікування: `boot.hyp` = `{ store: 0, open: null }`, усі `hyp_open` з `persist: 0`, pend відкривається лише на `pagehide` з `persisted: false` (§9 п. 27), `slid.v1`-незалежні тексти доку однакові з варіантом без hyp.js; «застосунок = реплей». Мутант рецензента H1 (`boot.hyp.store` завжди 1) має загинути.
2. **Перевищення бюджету 400 мс**: ін'єкція повільного `onScreen` (чи `onAnswer`) трекера. Очікування: рівно один `hyp_off { why: "budget" }`, ключ `slid.hyp` видалено, після нього подій трекера немає, наступний `boot.hyp.open: null`. Мутант H2 (бюджет без `hyp_off`) має загинути. Окремо — бюджет у `write()`.
3. **Місце `hyp_lost` без евристики** (P3-3): реплей визначає подію, з якої `persist: 0`, за «останньою не-hyp подією перед hyp_lost (+0,5, якщо вже був hyp_open)» — залежить від порядку викликів у app.js (`save()` між `EV.log(answer)` і трекером). Простіше передавати в `hyp_lost` номер `n` події, яку застосунок саме обробляв, і брати його в реплеї; тести B3/H4 зберегти.

## Нотатки виконавця
