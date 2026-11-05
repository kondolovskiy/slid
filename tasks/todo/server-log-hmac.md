---
id: server-log-hmac
type: engine
subject: server
status: todo
claimed_by:
created: 2026-11-05
depends_on: [server-hardening-2]
---
# Логи: `lh` = HMAC-SHA-256(id учня, серверний секрет) замість SHA-256 (D-050 п. 5)

Джерело: reports/review/server-hardening-2.md P3-1. Скіл `backend-change`; незалежне рев'ю D-026.
- Новий секрет (напр. `LOG_HASH_KEY`, ≥ 32 байти) у конфігу; без нього в production — відмова старту або явна поведінка (описати); у тестах/dev — згенерований.
- Документація docs/BACKEND.md («Спостереження», змінні середовища), server/README; тести unit + e2e (у лозі немає id, однаковий id → однаковий lh при тому самому ключі, інший ключ → інший lh).
- Деплою немає (D-050 п. 4) — лише код і документація.

## Нотатки виконавця
