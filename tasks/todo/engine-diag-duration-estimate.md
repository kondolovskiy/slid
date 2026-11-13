---
id: engine-diag-duration-estimate
type: engine
subject: all
status: todo
claimed_by:
created: 2026-11-12
depends_on: [research-math-diag-duration]
---
# Оцінка тривалості тесту рівня з вагою типу завдання

Скіл engine-change; рев'ю D-026. Починати після пілоту research-math-diag-duration (реальні часи учнів).

**Проблема (qa-diag-ukr-world-new, reports/qa/qa-diag-ukr-world-new.md):** `diagMins` = max(5, round(n · 0,35)) показує на картці й у вступі «≈ 9–10 хв» для dgu9–dgu11, dgw10–dgw11, а повний прохід — 12–15 хв (dgw10: ≈ 9 проти ≈ 15; 5 sort + 8 multi).
**Пропозиція:** оцінка з вагою типу (choice/gaps ≈ 20 с, multi ≈ 50 с, sort — за кількістю рядків тощо; коефіцієнти — з пілоту). Тести рівня ukr/hist/world 12–15 хв проти «≈ 11 хв» (D-051).
**Пов'язане (наступні редакції тестів, лише новими id, після пілоту):** dgw10 №13/18/27 — до 5 тверджень; dgh5 — cur g5s7; dgh6 — cur g6s9/g6s10; dgh7 — cur g7s1l6/l7; dgh8 — pre g7s6; dgh9 — cur g9s6, pre g8s6l3–l5; dgh10 (dgh10b) — cur g11s1 (пакт, депортація, радянізація l7, Волинь l9) і нові уроки 10 кл.; dgh11b → нова редакція — cur g11s4l5 (Будапештський меморандум) і нові уроки 11 кл.; dgw — cur-w7s6, w8s6, w9s6 тощо; dgu7 / dgh6 / dgu5–6 — з handoff 10.11.
