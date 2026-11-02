# Рев'ю: engine-half-p3

- Рецензент: engineering-reviewer (свіжий контекст, реалізацію не писав; раніше рецензував engine-diag-half-credit), 2026-11-01.
- Гілка `wt-hp3`, diff `git diff 9c670dc 18694ab` (c223680, eb9206d, 18694ab).
- Зміни: app/learn.js (лише коментар), docs/EVIDENCE.md (P3-8), package.json (`check` + test-diff-answers), tools/diff-answers.mjs (T-1), новий tools/test-diff-answers.mjs, tools/test-answer-ui.py (compound у half_credit_checks, заголовок у decisions-1101, P3-7).

## Вердикт: **прийнято**

Блокувальних знахідок немає. T-1 виправлено, три P3 з engine-diag-half-credit закрито, P3-7 і P3-8 зроблено. Нижче три P3 про межі нового тесту. Вони не блокують.

## Перевірки (мої прогони)

| Що | Результат |
|---|---|
| `node tools/build.mjs` | змінює лише `sw.js` (VERSION 996795f372). Build-артефакти не закомічено, як і належить за AGENTS §3.7. Мій прогін відкочено |
| `npm run check` | rc 0: test-learn 2241, test-evidence 139, personalization-qa 105, test-validate 639, test-make-tasks 22, **test-diff-answers 10 ok, 0 ✗**; validate 0 помилок / 254 попередження |
| `diff-answers --old HEAD --grades 4-11` | rc 0; заголовок «diagVerdict → diagVerdict», 39769 записів, 0/0/0, основний блок НЕПОЯСНЕНІ 0 |
| `diff-answers --old b799dfa --grades 4-11` | rc 0; «diagAnswerOk → diagVerdict», 105 + 1623, непояснених 0 (як у рев'ю half-credit) |
| `test-answer-ui.py --suite regression` | rc 0, green (half-credit з compound, decisions-1101, evidence) |

## CI і неглибокий клон
- `.github/workflows/pages.yml` **не запускає `npm run check`**: тести перелічено поіменно, test-diff-answers серед них немає. CI на `actions/checkout@v4` (типово fetch-depth 1) через нього не почервоніє. Водночас CI цього тесту й не виконує, тож це лише локальна перевірка.
- Неглибокий клон без b799dfa: `ok(has, …)` дає ✗ і rc 1. Тобто тест явно падає, хибного зеленого немає. Частина `--old HEAD` працює й на глибині 1. Якщо колись додати тест у CI, потрібен `fetch-depth: 0` (P3-3).
- Цей worktree сам неглибокий (`is-shallow-repository` = true), але b799dfa досяжний, тож прогін повний.

## Пропуск при зміненому learn.js: хибного зеленого немає
- Якщо `app/learn.js` змінено відносно HEAD, частина `--old HEAD` перевіряє лише заголовок і `записів > 1000`, а повідомлення про пропуск друкується. Нульовий прогін не пройде: порожній блок дає NaN і ✗.
- Відтворення: у worktree-копії `hp3-rev-mut` (git worktree на 18694ab) змінено `diagVerdict` (`if (!DIAG_FORM(s)) return HALF`), файл не закомічено.
  - `diff-answers --old HEAD` дає rc 1 і **48 НЕПОЯСНЕНІ (тест рівня)**: режим diagVerdict → diagVerdict реальну зміну показує, не ховає.
  - `test-diff-answers` дає 2 ✗ (частина `--old b799dfa`, rc 1). Пропуск HEAD-частини зміну не маскує: її ловить частина b799dfa.

## Мутанти (`scratchpad/hp3-rev-mut`, git worktree, після прогону видалено)
| Мутант | test-diff-answers |
|---|---|
| D1 `OLD_VERDICT = false` (стара поведінка T-1) | вбито (3 ✗) |
| D2 `continue` для всіх різниць | вбито |
| D5 блок пропущено, коли в старому є diagVerdict | вбито (3 ✗) |
| D3 `if (o === n \|\| OLD_VERDICT) continue` (ховає різниці в режимі вердикт↔вердикт) | **вижив** |
| D4 категорії half дозволені в режимі вердикт↔вердикт (без `!OLD_VERDICT`) | **вижив** |
| D6 `process.exit` ігнорує `halfBad` | **вижив** |
| P3-7 `localStorage.clear()` у резерві save() (regression evidence_checks) | вбито («резерв save() видалив сторонній ключ») |
| learn.js DIAG_FORM без compound (half_credit_checks) | вбито (`'Метри й сантиметри', '245 см'`) |

## Знахідки

### P1, P2: немає

### P3
1. **tools/test-diff-answers.mjs:24–33**: частина `--old HEAD` на чистому дереві тавтологічна, бо старий і новий learn.js однакові. Тому мутанти, що ховають різниці саме в новому режимі (D3, D4) або ігнорують `halfBad` у коді виходу (D6), виживають. Сам diff-answers ці різниці показує (відтворення вище), бракує лише сторожа в тесті. Можна додати фікстуру з відомою різницею: тимчасовий learn.js зі зміненим diagVerdict як «старий» (через опцію шляху до файлу замість ревізії чи через тимчасовий коміт у копії).
2. **tools/test-diff-answers.mjs:36–44**: частина b799dfa перевіряє rc 0 для всього diff-answers від b799dfa. Будь-яка майбутня навмисна зміна вердиктів checkAns/diagVerdict без нової категорії в diff-answers зробить `npm run check` червоним. Для інструмента це, мабуть, бажано, але правило не записано в шапці тесту й у docs. Варто дописати: «нова зміна вердиктів → категорія в diff-answers, інакше check червоний».
3. **CI**: test-diff-answers є в `npm run check`, але відсутній у pages.yml, а `actions/checkout` там без `fetch-depth: 0`. Не дефект; якщо тест перенесуть у CI, потрібна повна історія.

## Решта
- learn.js:122 тепер містить «OK/HALF/BAD/SKIP», інших змін learn.js немає.
- half_credit_checks: compound «245 см» дає HALF з «м і см», `res['6']=0.5`, evidence `(6,'half',0.5)`, тема `q` → new. Індекс «Корінь» зсунуто на 7 узгоджено в res, topics і evidence. Docstring diag_answer_checks тепер правдивий.
- decisions-1101: заголовок «Корінь» відповідає умові.
- P3-8 (EVIDENCE.md): неатомарність `env.stash`/`env.forget` двома вкладками описано, ризик прийнято. Текст коректний щодо коду (app/evidence.js:255–270).
