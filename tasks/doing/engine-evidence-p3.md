---
claimed_from: todo
claimed_at: 2026-11-01T18:53:11.876Z
id: engine-evidence-p3
type: engine
subject: all
status: todo
claimed_by: engineer-evid-p3
created: 2026-11-01
depends_on: [engine-evidence-v2]
---
# Evidence V2: дрібні знахідки повторного рев'ю (P3, reports/review/engine-evidence-v2.md)
- P3-4: тест на застарілий `lastAns` у тесті рівня (мутант «не скидати в renderScreen»); перевірити вердикт `form` у події answer тесту рівня (після engine-diag-half-credit — і `half`).
- P3-5: тест, що пакет «в дорозі» (`inflight`) потрапляє в копію черги `slid.evidence.pending`.
- P3-6: pending ділить квоту localStorage зі `slid.v1` — обмежити розмір (напр. ≤ 100 КБ) і пріоритет `slid.v1`; тест на переповнення.
- Рішення людини 2026-11-01: кнопки експорту не робимо — дані пілоту йтимуть через бекенд (людина напише задачу на архітектуру). Рішення людини 2026-11-01 (2): ліміт 15 000 — досить на старті; `raw` лишаємо (у майбутньому доступ через реєстрацію); **записувати подію «Пізніше» тесту рівня** (`diag_skip` або `diag_later` з id тесту й кількістю відповідей) — зробити в цій задачі, з тестом і рядком у docs/EVIDENCE.md.
- Куратору: `app/evidence.js` у таблицю AGENTS.md §1.
Незалежне рев'ю D-026.

## Нотатки виконавця
