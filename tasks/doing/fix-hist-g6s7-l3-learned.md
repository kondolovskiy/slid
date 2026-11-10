---
claimed_from: todo
claimed_at: 2026-11-10T09:59:27.685Z
id: fix-hist-g6s7-l3-learned
type: fix-section
subject: hist
grade: 6
status: todo
claimed_by: writer-g6s7-l3
created: 2026-11-10
---
# g6s7-l3: `learned` без екрана

З inbox 06.11 (verifier-dgh6, reports/verify/dgh6.md). У `content/hist/g6-g6s7.js` урок g6s7-l3 має в `learned` «Порівнювати афінську демократію із сучасною», але жоден екран цього не вчить і не перевіряє.

Варіанти (обери один, скіл content-author): (а) додати екран — напр. `sort` «Афіни / Україна сьогодні: хто голосує» (D-019: відповідь виводиться з уроку); (б) прибрати пункт з `learned`. Id уроку й вправ не змінювати; ≥ 1 справжнє `img` лишається (D-027).

## Готово, коли
- [ ] `node tools/validate.mjs --section g6s7` — 0 помилок; урок → draft → content-verifier (свіжий контекст).
- [ ] Тест dgh6 не спирається на цей пункт (перевір тему `demo`).
