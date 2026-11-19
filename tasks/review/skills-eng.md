---
claimed_from: todo
claimed_at: 2026-11-19T12:39:08.262Z
id: skills-eng
type: skills
subject: eng
depends_on: [curate-eng-style, curate-eng-glossary]
status: review
claimed_by: skills-eng
created: 2026-11-19
source: design-eng
---
# Скіли content-author, content-verify, math-pool-diag: розділ «Англійська»

Дописати в `.claude/skills/content-author/SKILL.md`, `content-verify/SKILL.md`, `math-pool-diag/SKILL.md` розділ eng за docs/design/english.md §2, §5.4, §6: усе англійською, британська норма; рівень пояснень = рівень класу (верифікатор читає теорію очима дитини цього рівня); форми — за словником, не з пам'яті моделі; друга правильна відповідь; варіанти A/B/C; американський правопис у відповіді — не помилка; без IPA; поле `uk` (переклад правила) — лише 4–5 кл. за потреби; без звуку й без імітації аудіювання; авторське право (пошук довгих фрагментів у мережі — блокувальна знахідка). Таблиця AGENTS.md §6 — рядок eng. Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; американський правопис у відповіді — не помилка; без IPA; поле `uk` (переклад правила) — лише 4–5 кл. за потреби; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.
Зміни `.claude/` — незалежне рев'ю D-026.

## Нотатки агента (skills-eng, 2026-11-19)
Коміт a59589d. Зміни лише в `.claude/skills/*/SKILL.md` і AGENTS.md — правила не дублюються, лише чеклісти з посиланнями на D-054, docs/design/english.md §2, §5, §6, §8, style/eng.md, glossary/facts/pitfalls eng, CONTENT_SCHEMA §1, §4, §4.1, §9, §10, TQ-119…123, reports/verify/plan-eng-g4.md, plan-eng-g5.md.
- **content-author:** §1 — пастки eng («Англійська» в pitfalls-content) і посилання на новий розділ; розділ «Англійська (`eng`)» перед «Здай»: що прочитати; чекліст — усе англійською/BrE, рівень пояснень = рівень класу, форми за словником (curl CD/OALD — команду перевірено: `learned or UK also learnt`, OALD flat_1 «British English»), BrE-пастки з верифікації планів (sport, holiday(s)/festivals, greetings card, will vs be going to), друга правильна відповідь, що робить рушій сам (AmE-правопис ok з приміткою, кирилиця-двійник, кінцеві .!?, «Almost»; AmE-лексика — автор, TQ-122), A/B/C без літер в `opts`, без IPA (`<u>`, `stress` `"+pho|to|graph"`), без звуку, `uk` лише 4–5 кл. за показаною потребою, авторське право, тексти для читання й тимчасові TQ, Україна, `requires` (plan-eng-g4/g5 §6), попередження validate для eng.
- **content-verify:** §1 — пастки eng; розділ «Англійська (`eng`)» перед «Стиль і прогін»: словник (curl, URL і дослівна позначка у звіт; MW лише для AmE), рівень пояснень очима дитини (і явний запис «потрібне `uk` на екрані N» для 4–5 кл.), друга правильна відповідь — ❌, рушійна поведінка, BrE, A/B/C, без звуку й IPA, авторське право (фрагменти ≥ 12 слів — WebSearch дослівно; збіг — ❌, блокувальне), `uk`, `requires`, факти про країни, TQ «як зараз».
- **math-pool-diag:** description і заголовок — eng; розділ §2в: id `dge<клас>`, `pe<розділ>`, `a01`…; **механіка ще не готова — engine-eng-diag-pool (todo):** `build`/`match` у DIAG_TYPES/POOL_TYPES, A/B/C у тесті рівня, перший клас предмета для eng. dge4: `pre` — Pre A1–A1 з `baseline: true`, `lessons: []`, `for`, `see` на e4s* (загальна механіка `baseline` уже є в CONTENT_SCHEMA §9 — math 4, ukr 5; погодження для eng — п. 2 тієї задачі); вправи власні (правило «з реальних джерел» для eng не діє), `sources` — програма й словники; однозначність ключа; типи; `uk` у тесті й пулі — помилка.
- **AGENTS.md §6:** рядок «англійська (`*-eng-*`)» → скіл ролі + його розділ «Англійська». Рядок пулів «для ukr і eng — ще й content-author» уже був, не змінював.
- Не зачеплено: файли engine-eng-validate (tools/, app/app.js, docs/CONTENT_SCHEMA.md) — лише читав. Build не запускав (зміни не в content/app/img).
- **Знахідка для куратора/engine-eng-diag-pool:** у задачі engine-eng-diag-pool п. 2 сказано «validate вимагає уроків попередніх класів для `pre`», але `baseline: true` з `lessons: []` уже підтримує `SLID_LEARN.validate` (app/learn.js:2150–2154; CONTENT_SCHEMA §9) — п. 2, можливо, зводиться до перевірки й `see`. Не перевіряв прогоном.
- Незалежне рев'ю D-026 — потрібне (`engineering-review`), до вердикту задача в review.
