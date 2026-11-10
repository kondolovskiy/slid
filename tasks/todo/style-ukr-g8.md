---
id: style-ukr-g8
type: style
subject: ukr
grade: 8
status: todo
claimed_by:
created: 2026-11-10
---
# style-sync ukr 8 кл. (u8s1–u8s14)

Після пакета 8 кл. (усе verified 06.11). Скіл style-sync; `node tools/stats.mjs --subject ukr`, `node tools/euphony.mjs --subject ukr`.

Зібрано з inbox 06.11:
- u8s1l1, l2, l4, l6 — бракує завдання «Знайди помилку» (verifier-u8s1).
- u8s8l2 е7, u8s8l3 З5 — складні речення з неповною частиною в кошику «Неповне» → кошик «Неповне (чи з неповною частиною)» або прості речення (verifier-u8s8).
- u8s14l9 — 7 завдань на 8 уроків (l7 + l8 в одному order) — звірити з D-048 п. 1 (writer-u8s14).
- u8s13 — `pre` l2 е2, е6 і фіналу з. 5 уже переведено на u8s10 (verifier-u8s13); перевірити решту фіналів на `pre`.
- u8s1l3 sentenceWords z = −2,2 — артефакт коротких items sort (не правити).
Id не змінювати; змістові правки — лише з повторною верифікацією.

## Готово, коли
- [ ] validate — 0 помилок; змінені уроки → draft → content-verifier.
