---
claimed_from: todo
claimed_at: 2026-11-01T18:53:11.876Z
id: engine-evidence-p3
type: engine
subject: all
status: done
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
engineer-evid-p3, 2026-11-01.
- **P3-4.** У `evidence_checks` маршрут dg6: завдання 0 і 3 підмінено фікстурою на `type: "answer"` (у справжніх тестах рівня answer ще немає); перша відповідь хибна («99» → `bad`, res 0), четверта — «3,5» при ключі 3,5 і `decimals: 2` → `form`, res 1 (form → OK). Остання спроба тренування перед тестом — `ok`, тож застарілий `lastAns` дав би `ok` замість `bad`. Перевірка `(verdict, res, raw)` перших чотирьох спроб. `half` — після злиття engine-diag-half-credit (див. нижче).
- **P3-5.** `tools/test-evidence.mjs`: `append` не завершується до `stash()` — у копії спершу пакет у дорозі, далі черга, без `seq`; після завершення все записано.
- **P3-6.** `app/evidence.js`: `LIMITS.stashBytes` = 64 К символів, `fitStash` (≤ 300 подій і ≤ stashBytes, найновіші); `writePending` за браку квоти пише новішу половину, чверть…, далі видаляє ключ (slid.v1 не чіпає); `env.forget` — записані цією сторінкою події одразу прибираються з ключа (незаписаний пакет лишається). `app/app.js` `save()`: якщо `setItem("slid.v1")` кидає — видаляє `slid.evidence.pending` і пише ще раз (працює без модуля). Тести: розділ 10 test-evidence (localStorage з квотою, кидає SecurityError, інша вкладка) і браузер — сховище заповнено до краю, «Пізніше» все одно зберігає `slid.v1`, ключ видалено, далі копія черги знову працює й прибирається після запису.
- **Рішення людини: `diag_later`** — кнопка «Пізніше»: `{ c, diag, answered, skipped }` (з `S.diagRun`), лог перед `save()`; app.js — лише обробник `[data-diag-skip]` і `save()`. Браузер: dg6, «Ще не знаю» + одна відповідь, ✕, «Пізніше» → `answered: 2, skipped: 1`.
- docs/EVIDENCE.md: квота й пріоритет slid.v1, `diag_later`, рішення про експорт/ліміт/raw.
- Мутанти (scratchpad/evp3-mut-*, скрипт scratchpad/evp3-mutants.py) — усі 11 ловляться: lastAns не скидається, diag без form (браузер); stash без inflight, без межі байтів, без половинення, без видалення ключа, без forget, forget після невдалого запису (вузлові); save без резерву, без diag_later, хибний answered (браузер).
- Куратору: `app/evidence.js` у таблицю AGENTS.md §1 — рядком в inbox (AGENTS.md не редагував).
