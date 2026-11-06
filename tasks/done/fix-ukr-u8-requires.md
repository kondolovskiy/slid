---
claimed_from: todo
claimed_at: 2026-11-06T11:59:30.208Z
id: fix-ukr-u8-requires
type: fix-section
subject: ukr
grade: 8
status: done
claimed_by: orchestrator
created: 2026-11-06
depends_on: [write-ukr-u8s4]
---
# 8 кл.: дописати `requires` на розділи 8 кл., написані пізніше

Розділи 8 кл. писалися паралельно, і частина авторів не могла послатися на ще не написані сусідні розділи. Коли відповідні розділи стануть `verified`, дописати в `requires` (лише поле `requires`, зміст уроків не змінювати; статус verified лишається, правка — службова):
- u8s7 ← `u8s4l1` (підмет; верифікатор u8s7, reports/verify/u8s7.md).
- Інші такі місця — з нотаток задач write-ukr-u8s* («опора на u8sN — коли з'явиться»): u8s5, u8s6, u8s9, u8s11 — перевір нотатки й inbox.
`node tools/validate.mjs` — 0 помилок. Робить оркестратор після пакета 8 кл.

## Нотатки виконавця

### orchestrator, 2026-11-06
Перевірено `requires` усіх u8s1–u8s14 проти нотаток задач і inbox. Бракувало лише u8s7 ← `u8s4l1` (верифікатор u8s7) — додано. Парні розділи вже мають попередника (u8s4←u8s3, u8s6←u8s5, u8s8←u8s7, u8s10←u8s9, u8s12←u8s11); u8s13 — переключає на u8s10/u8s12 його верифікатор. Зміст уроків не змінено. `validate --section u8s7` — 0 помилок.

