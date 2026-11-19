# Рев'ю skills-eng (D-026, скіл engineering-review)

**Рецензент:** reviewer-skills-eng (не автор), 2026-11-19.
**Перевірено:** коміти a59589d (`.claude/skills/content-author/SKILL.md`, `content-verify/SKILL.md`, `math-pool-diag/SKILL.md`, AGENTS.md §6) і 1788199 (задача → review). Гілка claude/eng-tasks.
**Звірено з:** decisions.md D-054 з доповненням; docs/design/english.md §2, §5.3–5.6, §6, §7, §8, §11; style/eng.md, style/eng-banned.txt; glossary/facts eng; pitfalls-content.md «Англійська»; teacher-questions TQ-119…123; CONTENT_SCHEMA §1, §4, §4.1, §9, §10; app/lang.js (51e0092), app/app.js (`OPT_LETTERS_LANG`, `TL()`), app/learn.js `validatePool`, tools/validate.mjs, tools/content-checks.mjs (1015bd1); reports/verify/plan-eng-g4.md, plan-eng-g5.md; tasks/todo/write-eng-pool-g4-*.md, write-eng-diag-g4.md, engine-eng-diag-pool.md.

## Вердикт: **потрібні виправлення** (1 × P1, 3 × P2, 5 × P3)

Розділи загалом точні й добре прив'язані до джерел: BrE-пастки (sport, holiday(s)/festivals, greetings card, at the weekend, will / be going to) збігаються з reports/verify/plan-eng-g4/g5 і словниками; `uk` (4–5 кл., лише intro/info/explore, помилка в тесті й пулі, за показаною потребою) — з D-054 доп. п. 5, CONTENT_SCHEMA §4 і validate.mjs:346–349, 483–484; `requires` — з plan-eng-g4/g5 §6 і validate.mjs:466; без IPA і без звуку — з D-054; поріг авторського права ≥ 12 слів — з дизайну §8; id `dge<клас>`, `pe4s1` — з дизайну §7 і задач write-eng-pool-g4-*; TQ-119…123 — відповідають таблиці. Розділи ukr/math/hist не зламано (зміна в §1 лише дописує «eng — …»). Але одне твердження про рушій хибне так, що веде до неправильного оцінювання дитини, і його не зловить ні validate, ні верифікатор (той самий текст є в обох скілах).

## Знахідки

### P1-1. «Кінцеві `.!?` ігноруються» — хибно в загальному вигляді; ключ із крапкою робить правильну відповідь неправильною
- `.claude/skills/content-author/SKILL.md:57`, `.claude/skills/content-verify/SKILL.md:39`.
- Рушій ігнорує кінцевий знак **лише якщо ключ його не має** (app/lang.js:243, 273 `p = !endsPunct(a)`; CONTENT_SCHEMA §4.1: «якщо має — потрібен»; дизайн §5.4 п. 3).
- Відтворення (node + vm, app/lang.js): `wordVerdict({type:"word",answer:"Yes."}, "yes", "en")` → `{ok:false, hint:"Almost: check the spelling."}`.
- Наслідок: автор, повіривши скілу, кладе в `answer` речення з крапкою («I've got a cat.»); дитина без крапки отримує «неправильно». Верифікатор за своїм скілом теж вважає це безпечним; validate не попереджає.
- Очікувано: «кінцевий `.!?` у відповіді ігнорується, **якщо ключ без нього** — тож у `answer` не став кінцевого знака»; у content-verify — пункт перевірки «ключ `word` без кінцевого `.!?`».

### P2-1. Список «що робить рушій сам» не каже, що це лише `word` (введення), і не забороняє AmE-написання як хибний варіант
- `content-author/SKILL.md:57`, `content-verify/SKILL.md:39`.
- Уся нормалізація — у `wordVerdict` (app/lang.js:266–284); у `gaps`/`choice`/`pick` вибраний варіант порівнюється точно. Отже `{*colour|color}` у `gaps` чи `color` як хибна опція `choice` оцінить AmE-правопис як помилку — це суперечить D-054 доп. п. 1. style/eng.md:15 це прямо забороняє («не будуй `choice`, де AmE-написання — «неправильний» варіант»), а скіли згадують лише `fbBad`.
- Очікувано: «(лише `word`)» у заголовку пункту і рядок «AmE-написання не буває хибним варіантом `gaps`/`choice`/`multi`» — в автора й у чеклісті верифікатора (❌, бо правильний дистрактор).
- Дрібне в тому ж рядку: «Almost» — це **неправильно** з підказкою після першої спроби (CONTENT_SCHEMA §4.1), а не прийнята відповідь; варто дописати «(відповідь неправильна)», щоб «не дублюй у ключі» не прочитали як «одруківки зараховуються».

### P2-2. math-pool-diag §2в: «літери A, B, C у тесті рівня — теж там (engine-eng-diag-pool)» — уже не так
- `.claude/skills/math-pool-diag/SKILL.md:52`.
- app/app.js:996–997 (`OPT_LETTERS_LANG`, `optLetter` через `TL()` — мова поточного предмета в уроці, тесті й тренуванні) і CONTENT_SCHEMA §1:28 (1015bd1, engine-eng-validate) — A, B, C уже ставляться в тесті рівня. Той самий розділ далі (рядок 56) каже «варіанти A, B, C ставить рушій» — внутрішня суперечність. (engine-eng-diag-pool п. 3 застарів так само — це вже для куратора задач.)
- Очікувано: прибрати A/B/C зі списку «ще не готове» (або «реалізовано в engine-eng-validate, на рев'ю»).

### P2-3. Пул eng: «вправи власні», але не сказано, що писати в обов'язковому `src` кожної вправи
- `math-pool-diag/SKILL.md:53`.
- `validatePool` (app/learn.js:2071–2072) вимагає в кожної вправи `src: "<id джерела> <номер вправи чи сторінка>"` (помилка). §2 і §2б скілу описують `src` як номер вправи підручника; для eng скіл це скасовує, але заміни не дає. Ризик — вигадані «номери вправ» або посилання, що виглядає як запозичення.
- Очікувано: явний формат, напр. `sources` — програма (`top34`, `mpim`, `p1407` з facts/eng.md) і словники; `src` вправи — «<сигла програми> с. N» (сторінка теми/граматики, яку вправа тренує); `srcPage`/`adapted` для eng не ставимо. (Якщо такий формат не влаштовує — рядок ENGINE/STYLE в inbox.)

### P3
1. `math-pool-diag/SKILL.md:51` — «пул `pe<розділ>` (`pe4s1`)», а в шляху того самого розділу `<розділ>` = `e4s1`. Буквально `pe` + `e4s1` = `pee4s1`. Краще як у CONTENT_SCHEMA §10: «`p<розділ>` (`pe4s1`)».
2. `math-pool-diag/SKILL.md:52` — «`for` і `see` на уроки e4s*»: `for` — id **розділів** (CONTENT_SCHEMA §9: «Кожен розділ у `for`»), `see` — 1–3 id уроків. Розвести.
3. `content-author/SKILL.md:52` — «Кирилиці немає ніде, крім `uk`»: validate не перевіряє й `credits` (content-checks.mjs:255 «українською лише uk … і credits»; дизайн §2: credits — як у джерелі ліцензії). Дописати «і `credits`».
4. `content-author/SKILL.md:55` — «will — … прогноз; be going to — уже складений план»: be going to теж правильне для прогнозу за наявними ознаками («It’s going to rain», CD Grammar; plan-eng-g5.md:89 — пастка для e5s5). Варто згадати, бо саме тут друга правильна відповідь.
5. curl-команда працює (перевірено: CD learn → «learned or UK also learnt», OALD flat_1 → «(British English)»), але `sed 's/<[^>]*>//g' | grep` на сторінках OALD повертає кілобайтні рядки (уся стаття в одному рядку). Зручніше `grep -o '.\{0,80\}<що шукаєш>.\{0,80\}'`. Також `<word>_1` існує не для всіх слів (learn_1 переадресовує на learn — ок, але номер омоніма треба знати; facts/eng.md це пояснює).

## Виконані перевірки
- `git show a59589d`, `git show --stat 1788199` — весь diff прочитано; навколишні розділи скілів (content-author §1–7, content-verify §1–6, math-pool-diag §1–4) — на суперечності з eng.
- Поведінка `word` англійською (власний скрипт у scratchpad, `node` + `vm` на app/lang.js, функція `wordVerdict`):
  `colour/color` → ok + «In British English: colour.»; `realise/realize` → ok + «In British English we usually write realise.»; `travelled/traveled` → ok + примітка; `cat/сat` (кирилична с) → ok; `cat/Cat.` → ok; **`Yes./yes` → bad + Almost**; `colour/colur` → bad + Almost; `flat/apartment` → bad; `don't/do not` з `contractions` → ok; `15.30/3.30 pm` → bad (як у CONTENT_SCHEMA).
- validate.mjs: `uk` (346–349, 483–484, пул і тест через `diag=true` у 512, 531), `requires` (466), A/B/C (50–57), кирилиця й eng-banned — попередження (content-checks.mjs:240–255, validate.mjs:25); app/learn.js 2057–2072 (`sources`, `src`).
- curl: `curl -sL -A "Mozilla/5.0" https://dictionary.cambridge.org/dictionary/english/learn | sed … | grep -i learnt` → «learned or UK also learnt»; OALD `flat_1` → «(British English)»; OALD `learn_1` → 200 (переадресація на `learn`).
- Ідентифікатори: tasks/todo/write-eng-pool-g4-e4s1…8 (`pe4s1`…`pe4s8`), write-eng-diag-g4 (`dge4`, depends_on engine-eng-diag-pool) — збігаються зі скілом.

## Не перевірено
- `npm run check` і браузерні прогони не запускав: зміни лише в markdown скілів/AGENTS.md, коду не зачеплено; у дереві паралельно змінюються tools/ (engine-eng-tools).
- Чи справді `baseline` для dge4 проходить validate без змін рушія (примітка автора в engine-eng-diag-pool) — не відтворював на фікстурі.
- WebSearch-процедуру авторського права не пробував (зміст eng ще не написано).
