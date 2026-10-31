---
write_group: personalization-shared
id: engine-player-a11y-followup
type: engine
subject: math
status: todo
claimed_by:
created: 2026-10-31
depends_on: [engine-player-focus-followup]
---
# Доробки плеєра після рев'ю engine-player-focus-followup (P3)

Джерело: reports/review/engine-player-focus-followup.md, inbox.
- answerSig для `answerKind: "list"`: «1.2» і «1,2» дають однаковий відбиток (`.replace(/\./g, ",")`), хоча parseList розрізняє їх — рахувати відбиток через parseList або не замінювати «.».
- Enter («Готово/Go») з екранної клавіатури вважається клавіатурою → refocus+select може закривати підказку. Перевірити на реальних iOS/Android, вирішити.
- Автофокус поля на числових екранах при відкритті — на Android відкриває клавіатуру до відповіді.
- Лаби, що змінюються лише дотиком до SVG, недоступні з клавіатури.
Регресії — у чинні тести. Незалежне рев'ю (D-026).

- З QA 9 класу (reports/qa/math-personalization-g9.md): D-4 у dg9 №20 крива параболи малюється поверх підписів «−1» і «3» на осі Ox (рушій малює підписи під кривою) — підписи осей поверх кривої або з підкладкою; шкала діаграми №22 9,4 px (8,3 px на 320) — збільшити.
- D-2 (P3): у coordinates2 запис `AB = (p - m; k - n)` / `AB = (-3; 1)` → bad без пояснення — знімати префікс «AB =» або пояснювати; D-3 (P3): `-n ∈ [-4; 3)` у intervalSet → bad — знімати будь-який префікс «вираз ∈».

## Нотатки виконавця
