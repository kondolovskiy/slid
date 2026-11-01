---
id: engine-learn-list-prefixes-p3
type: engine
subject: math
status: todo
claimed_by:
created: 2026-11-01
depends_on: [engine-math-answer-g11-issues, engine-player-a11y-followup]
---
# app/learn.js: дрібні вади з a11y-followup і рев'ю g11

Перенесено з engine-player-a11y-followup (не зроблено через конфлікт з wt-ans11) і reports/review/engine-math-answer-g11-issues.md:
- answerSig для list: «1.2» і «1,2» — однаковий відбиток при прямому виклику LEARN.answerSig (рахувати через parseList).
- D-2: coordinates2 `AB = (p - m; k - n)` / `AB = (-3; 1)` → bad без пояснення — знімати префікс «AB =» (правило єдиної назви з умови) або пояснювати.
- D-3: intervalSet `-n ∈ [-4; 3)` → bad — знімати префікс «вираз ∈» за тим самим правилом.
- Поле list: «1.5, 2» → «1,5, 2» розбирається як три елементи — підказка під полем або рішення.
- Флейк test-learn під навантаженням: тести стіночного часу «< 1 с» (р. ~531, ~837) перевести з Date.now() на лічильник кроків.
- P3-2 (рев'ю g11): дослівна умова «√576» → «Значення правильне. Обчисли корінь…» — формулювання; P3-4: diff-answers п.3/п.5 мало записів.

Хибні ok гірші за хибні bad: негативні тести й скан реальних вправ (diff-answers). Незалежне рев'ю (D-026).

## Нотатки виконавця
- SK_RETAG: правило `["g8m6l1", "math.meas", "math.geom"]` (pg8m6 a06 sk meas → geom, write-math-pools-multiset-compound) — нова міграція з новим id.
