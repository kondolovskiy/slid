---
claimed_from: todo
claimed_at: 2026-11-01T19:34:54.388Z
id: engine-half-p3
type: engine
subject: math
status: done
claimed_by: engineer-half-p3
created: 2026-11-01
depends_on: [engine-diag-half-credit]
---
# Півбала: дрібні знахідки рев'ю (P3, reports/review/engine-diag-half-credit.md)
- app/learn.js:122 — коментар «вердиктами (OK/BAD/SKIP)»: додати HALF.
- tools/test-answer-ui.py:1339 — docstring half_credit_checks обіцяє compound «245 см» → півбала, а у фікстурі compound немає: додати завдання compound у фікстуру або виправити docstring.
- tools/test-answer-ui.py:1681 — заголовок «Сторона квадрата» при умові «Обчисли √576»: узгодити.
- **T-1 (P2, reports/review/engine-evidence-p3.md):** tools/diff-answers.mjs:326, :341 порівнюють `OLD.diagAnswerOk` з `NEW.diagVerdict`; після half-credit будь-яке `--old` з diagVerdict дає хибні «105 непояснених» і rc 1. Якщо в старому learn.js є `diagVerdict` — порівнювати diagVerdict з diagVerdict. Тест: `--old HEAD` → 0 змін, rc 0.
- P3-7 (там же): тест, що резерв `save()` не чіпає сторонніх ключів localStorage (мутант `localStorage.clear()` зараз виживає).
- P3-8: у docs/EVIDENCE.md згадати неатомарний перезапис `slid.evidence.pending` двома вкладками.
Незалежне рев'ю D-026 (можна разом з іншою дрібною задачею).

## Нотатки виконавця
- **learn.js:122** — коментар: «вердиктами (OK/HALF/BAD/SKIP)». Більше learn.js не змінено (паралельно wt-hyp1 додає numVal/formCode).
- **half_credit_checks (test-answer-ui.py)** — у фікстуру додано завдання compound (quantity 245, units см/м, `form:'compound'`, тема `q`, cur, індекс 6; «Корінь» тепер 7): «245 см» → HALF з екраном-поясненням (formHint містить «м і см»), `res['6'] = 0.5`, подія evidence `(6, 'half', 0.5)`, тема `q` → `new`. Docstring diag_answer_checks (compound → half_credit_checks) тепер правдивий; у docstring half_credit_checks додано «245 см».
- **decisions_1101_checks** — заголовок завдання «Сторона квадрата» при умові «Обчисли √576» → «Корінь». У half_credit_checks «Сторона квадрата» лишився: там умова справді про площу квадрата.
- **T-1 (tools/diff-answers.mjs)** — якщо в старому learn.js є `diagVerdict`, блок тесту рівня порівнює `OLD.diagVerdict` з `NEW.diagVerdict` (мітки через OLD.OK/HALF/BAD), заголовок «diagVerdict → diagVerdict»; у цьому режимі категорій half немає — будь-яка різниця НЕПОЯСНЕНА (rc 1). Для ревізій без diagVerdict — як раніше (diagAnswerOk). Результат: `--old HEAD --grades 4-11` — 0/0/0, rc 0; `--old b799dfa` — 105 вимаганий вигляд + 1623 корінь, 0 непояснених, rc 0 (39769 записів).
- **Новий тест tools/test-diff-answers.mjs** (у `npm run check`, ≈ 13 с): `--old HEAD` — заголовок diagVerdict → diagVerdict і блок непорожній; якщо app/learn.js не змінено відносно HEAD — 0 змін у блоці, 0 непояснених в основному блоці, rc 0 (якщо змінено — ця частина явно пропускається з повідомленням, бо HEAD тоді інший learn.js); `--old b799dfa` — заголовок diagAnswerOk → diagVerdict, обидві категорії > 0, 0 непояснених, rc 0. Точні 105/1623 не закріплені: зміняться з новим змістом. Потрібна історія git із b799dfa (неглибокий клон — ✗).
- **P3-7** — у evidence_checks перед заповненням сховища кладеться `qa.foreign = keep`, після «Пізніше» (резерв save()) перевіряється, що ключ вцілів.
- **P3-8** — docs/EVIDENCE.md: неатомарний перезапис `slid.evidence.pending` (`env.stash`, `env.forget`) двома вкладками може загубити частину копії черги іншої вкладки; ризик прийнято (основний запис — IndexedDB).
- Мутанти: `scratchpad/hp3-mut-t1` (worktree HEAD, старий diff-answers + новий тест) — test-diff-answers ловить (3 ✗: заголовок, 0/1623/105, rc 1); з новим diff-answers — 10 ok. `scratchpad/hp3-mut-p3-7` (`localStorage.clear()` замість `removeItem` у save()) — regression-сюїта rc 1, «резерв save() видалив сторонній ключ localStorage». Теки мутантів після прогону прибрано (git worktree remove).
- Перевірки: build (sw 996795f372, 332 файли), `npm run check` rc 0 (test-evidence 139, personalization-qa 105, test-validate 639, test-make-tasks 22, test-diff-answers 7 ok до коміту, після коміту 10 ok (з перевіркою --old HEAD = 0 змін, rc 0); validate 0 помилок, 254 попередження), regression-сюїта rc 0 (half-credit, decisions-1101, diag answer, evidence — green). build-артефакти не закомічено.
- Незалежне рев'ю D-026 — потрібне (зміни інструмента й тестів).
