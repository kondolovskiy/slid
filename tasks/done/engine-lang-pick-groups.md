---
id: engine-lang-pick-groups
type: engine
subject: ukr
status: done
claimed_by: orchestrator
created: 2026-11-02
---
# pick: хибні групи [!…], щоб багатослівні кнопки не видавали відповідь

Верифікатор u6s4 (reports/verify/u6s4.md): у `pick` група в [дужках] — одна кнопка, а інші слова — окремі кнопки, тож будь-яка кнопка з кількох слів завжди правильна і видає відповідь. Пошук по змісту: 12 таких екранів у 5–6 кл.

Зроблено: `parsePick` — `[!група]` = хибна група-кнопка (ok: false, group: true); `SLID_LANG.warnings(s)` — попередження, якщо всі багатослівні кнопки правильні; validate виводить його як «увага»; readText прибирає «!»; CONTENT_SCHEMA §4.1; test-lang +10 (96). Зміст виправляє задача fix-ukr-pick-groups.

Незалежне рев'ю: reports/review/engine-lang-pick-groups.md

## Нотатки агента
### orchestrator (2026-11-02)
Рев'ю — **прийнято** (reports/review/engine-lang-pick-groups.md). P3-1…P3-4 → engine-lang-p3 п. 16.
