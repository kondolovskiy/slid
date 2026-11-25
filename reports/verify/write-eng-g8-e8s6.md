# Верифікація e8s6 «Schools in Ukraine and abroad» (eng, 8 кл.)

Верифікатор: verifier-e8s6, 2026-11-25. Файл: content/eng/g8-e8s6.js (7 уроків: 6 + boss). Скіл content-verify, розділ «Англійська».
Прогін: `validate --section e8s6` — 0 помилок, 0 попереджень (до й після правок); `euphony --section e8s6` — 0; `stats --subject eng` — прапорці лише в l6 (gradedShare z=2.4, readWordsPerScreen z=2.2, sentenceWords z=2): урок читання з текстом на 3 екрани, пояснення автора прийнято. Плейтест — у CI (Python-модуля playwright у контейнері немає).

**Вердикт по розділу: verified** (усі 7 уроків). Правок: 3 у змісті + статуси/meta. Людині: нічого блокувального; TQ-147 не створено (правило вже є, §6).

## 1. Факти

| Твердження (екран) | Джерела, відкриті в сесії | Вердикт |
|---|---|---|
| Україна: діти йдуть до школи в 6 («Children start school at six», l1 екр. 5; l6 ч. 1) | Закон «Про освіту» ст. 12 ч. 4 «Початкова освіта здобувається, як правило, з шести років» — https://osvita.ua/legislation/law/2231/; en.wikipedia «As a rule, schooling begins at the age of 6» — https://en.wikipedia.org/wiki/Education_in_Ukraine | ✅ (спрощення «як правило» прийнятне) |
| Початкова — 4 роки (Years 1–4), базова (гімназія) — 5 років (Years 5–9), профільна — ліцей | Закон «Про ПЗСО» ст. 4 ч. 2 «чотирьох / п'яти / трьох років», ст. 35 «початкова школа… гімназія… ліцей, що забезпечує здобуття профільної середньої освіти» — https://osvita.ua/legislation/law/2232/; uk.wikipedia «Гімназія» (5–9 класи) — https://uk.wikipedia.org/wiki/Гімназія; «Ліцей» (профільна, 10–12) — https://uk.wikipedia.org/wiki/Ліцей; en.wikipedia «Elementary schooling lasts for 4 years, middle school for 5 and high school for 3» | ✅ |
| «A gymnasium can have a primary school too» | ПЗСО ст. 35: «Початкова школа функціонує як окрема юридична особа або як структурний підрозділ гімназії» (osvita.ua/legislation/law/2232/); uk.wikipedia «Ліцей» (про структуру закладів) | ✅ |
| Ліцей = «the last years of school», без чисел | ПЗСО, прикінцеві положення: «з 1 вересня 2027 року строк здобуття профільної середньої освіти усіма здобувачами освіти становить три роки»; до того — 10–11 кл. Формулювання без чисел правильне і зараз, і після 2027 | ✅ |
| Учні ліцею обирають профіль | ПЗСО ст. 35 (ліцей → профільна освіта); uk.wikipedia «Ліцей» | ✅ |
| Навчальний рік — з 1 вересня (l1, l6 ч. 3, First Bell) | ПЗСО ст. 10: «навчального року, що розпочинається у День знань — 1 вересня»; en.wikipedia Education_in_Ukraine (Knowledge Day 1 September) | ✅ |
| Vyshyvanka Day (l6 ч. 2) — в школах носять вишиванки | https://en.wikipedia.org/wiki/Vyshyvanka_Day (третій четвер травня, від студентської ініціативи); https://uk.wikipedia.org/wiki/Всесвітній_день_вишиванки (до акції долучилися школи) | ✅ |
| Англія: primary 5–11 | CD primary school «a school for children between five and eleven years old» — https://dictionary.cambridge.org/dictionary/english/primary-school; en.wikipedia Key Stage 1–2, ages 5–11 — https://en.wikipedia.org/wiki/Education_in_England; OALD primary_1 «between the ages of about five and eleven» — https://www.oxfordlearnersdictionaries.com/definition/english/primary_1 | ✅ |
| secondary school — з 11 | CD «between the ages of 11 and 18, approximately» — https://dictionary.cambridge.org/dictionary/english/secondary-school; en.wikipedia Education_in_England | ✅ |
| GCSEs — близько 16 | CD «from the age of about 16» — https://dictionary.cambridge.org/dictionary/english/gcse; en.wikipedia Education_in_England «At the end of Year 11 (at age 15-16)»; https://en.wikipedia.org/wiki/GCSE | ✅ |
| sixth form — 16–18 | CD «the part of a school for students aged 16-18» — https://dictionary.cambridge.org/dictionary/english/sixth-form; OALD sixth form «between the ages of 16 and 18» — https://www.oxfordlearnersdictionaries.com/definition/english/sixth-form; https://en.wikipedia.org/wiki/Sixth_form | ✅ |
| boarding school — pupils live and study | CD «a school where students live and study» — https://dictionary.cambridge.org/dictionary/english/boarding-school; OALD «a school where children can live during the school year» — https://www.oxfordlearnersdictionaries.com/definition/english/boarding-school | ✅ |

## 2. Форми, лексика, граматика (словники)

| Форма | Джерело | Вердикт |
|---|---|---|
| canteen — BrE | CD «B1 mainly UK» — https://dictionary.cambridge.org/dictionary/english/canteen; OALD «(British English) a place where food and drink are served in a factory, a school, etc.» — https://www.oxfordlearnersdictionaries.com/definition/english/canteen | ✅ |
| staffroom | CD «a room in a school that is for the use of the teachers…» — …/staffroom; OALD «a room in a school where teachers can go when they are not teaching» | ✅ |
| lyceum | CD «the name for a type of secondary school in several countries» — …/lyceum (в OALD статті немає) | ✅ |
| gymnasium (школа) | CD «a school in Germany, Austria, the Netherlands and some other countries…» — …/gymnasium; значення «gym» розведено в l1 | ✅ |
| pupil — BrE | OALD pupil_1 «(British English, becoming old-fashioned) a person who is being taught, especially a child in a school» | ✅ |
| Наголос `stress` / `<u>`: ly-<u>ce</u>-um, gym-<u>na</u>-si-um, <u>pu</u>-pil, <u>pri</u>-ma-ry, can-<u>teen</u>, e-<u>quip</u>-ment, <u>mi</u>-cro-scope, pro-<u>jec</u>-tor, al-<u>lowed</u> | CD UK: /laɪˈsiː.əm/, /dʒɪmˈneɪ.zi.əm/, /ˈpjuː.pəl/, /ˈpraɪ.mər.i/, /kænˈtiːn/, /ɪˈkwɪp.mənt/, /ˈmaɪ.krə.skəʊp/, /prəˈdʒek.tər/, /əˈlaʊ/; Wiktionary (raw) — ті самі наголоси (lyceum, gymnasium, canteen RP, equipment, microscope UK, projector RP, pupil, primary RP, allowed) | ✅ |
| can’t — заперечна дедукція, не mustn’t; had to — минуле must; don’t have to / needn’t / don’t need to | CD Grammar «Must»: «We use can’t/cannot as the negative of must to … make negative deductions»; «We use had to not must … in the past»; «Must not and don’t have to … have different meanings»; «You needn’t worry / You don’t need to worry» — https://dictionary.cambridge.org/grammar/british-grammar/must | ✅ |
| дозвіл: Can I → Could I (more polite) → May I (even more); дають can / may, «not could» | CD Grammar «Can, could or may?» — https://dictionary.cambridge.org/grammar/british-grammar/permission («We use can and may, but not could, to give permission»; «Could I use your phone? more formal/polite; May I…? even more formal/polite») | ✅ |
| might / could / may — можливість | CD Grammar «Might» (weak possibility) — https://dictionary.cambridge.org/grammar/british-grammar/might; «Can, could or may?» (possibility) | ✅ |

BrE у тексті: canteen, staffroom, head teacher, term time, holidays, at the weekend, maths/PE, colourful, favourite — AmE немає. Без IPA, без «Listen/You hear», без літер у `opts`, без `uk`. Діалоги репліками в `body`, без типу `dialog` (D-056). Kyiv, Poltava, Lviv — за glossary.

## 3. Відповіді й друга правильна відповідь (розв'язано самостійно)

Усі оцінювані завдання (l1: 6, l2: 6, l3: 7, l4: 7, l5: 7, l6: 8, l7: 7) розв'язано до перегляду `correct`; збіг з ключем — у всіх. Перевірено окремо:
- **Дедукція (l3):** у gaps мітки «Andrii is sure / isn’t sure» відсікають might ↔ could ↔ may; might і could ніде не стоять в одному пропуску; `word` «It ___ be Oksana» — ключ might, could, may ✅. Choice «It might Oksana’s bag» — граматично хибний ✅. Boss T3 — mustn’t / might / can’t, контекст «is sure she isn’t» ✅.
- **must / have to (l5):** не протиставлені; у gaps пари mustn’t ↔ don’t have to, have to ↔ don’t have to — однозначні за мітками «a rule / your choice / not necessary» ✅. needn’t ніде не дистрактор; `word` «doesn’t ___ to» — have, need ✅. Gaps «{Do|Are|Must} you have to» — «Must you have to» неграматичне ✅.
- **Дозвіл (l4):** choice «very polite» → May I…, please? ✅; `word` «Are we ___ to…» — заголовок «be allowed to» відсікає supposed/meant; ключ allowed, permitted ✅; final і boss T4: дистрактори Am / Does ✅.
- **`match`** l1, l2, l4, boss T2 — перебрано всі праві для кожного лівого: інших доречних пар немає ✅.
- **`build`** l3 «It can’t be my school.», l4 «Are we allowed to use the computers?», l6 «Emma has to wear a uniform, but Oksana doesn’t.», boss T5 «Are we allowed to leave early?» — інших граматичних порядків, що відповідають умові («asks», «Start with Emma»), немає; пастки mustn’t / allow / don’t не збігаються з ключем за регістром ✅.
- **Ключі `word`** без кінцевого `.!?` ✅.
- ❌→виправлено: **l1 `word` «She goes to a ___ school.»** — state, comprehensive, grammar (типи шкіл в Англії, BrE) граматично й фактично правильні, контекст їх не відсікає, у ключі їх не було. Додано в `answer`.

## 4. Опора (D-019)

| Завдання | Звідки відповідь | Вердикт |
|---|---|---|
| l1 екр. 2 boarding school | `hyp: true` + умова «lives at her school» | ✅ |
| l1 match, choice (GCSE 14+2), word | info екр. 3 + умова | ✅ |
| l1 gaps, final; stress | info екр. 5 (Years 1–4, 5–9, lyceum, profile, at six); `<u>` в екр. 3, 5 | ✅ |
| l2 екр. 2 | `hyp: true` | ✅ |
| l2 match, sort, gaps, stress, word, final | info екр. 3 (rooms), екр. 5 (equipment, lockers in the corridor, no -s) | ✅ |
| l3 екр. 2 | `hyp: true`; intro | ✅ |
| l3 choice, gaps, pick, choice, word, build, final | info екр. 3, 7 (must / might / could / can’t; can’t not mustn’t) | ✅ |
| l4 екр. 2 | `hyp: true` | ✅ |
| l4 choice, match, gaps, word, build, pick, final | info екр. 3 (Can/Could/May), екр. 6 (be allowed to); match — за змістом відповідей | ✅ |
| l5 екр. 2 | `hyp: true` | ✅ |
| l5 gaps, choice, sort, gaps (Do…?/had to), word, pick, final | info екр. 3, 7 | ✅ |
| l6 ч. 1–3, «whole project» | текст на екрані; назва проєкту в intro | ✅ |
| l6 gaps, build | info екр. 6 (both / but / the same as) | ✅ |
| l6 word «at about ___» | ч. 1 (екр. 2) + body «Look at part 1» | ✅ |
| l6 final | l4 pick і l5 sort (телефони в школі Andrii заборонені), l5 intro (без форми), l2 gaps (canteen) | ✅ |
| boss T1–T7 | l1–l6 (`pre`) | ✅ |

## 5. Педагогіка, рівень, канон

- Структура: проблема (intro) → `hyp` → info → вправи → final; підказки не видають відповідь. Речення пояснень ≤ 12 слів, нових граматичних термінів ≤ 2 на урок (style/eng.md, 6–9 кл.) ✅.
- **Канон героїв (⚠️ → виправлено):** e7s6 (verified) пише про школу Оксани «school leavers in Year 11», а e8s6 робить її гімназією (Years 1–9). Мінімальна правка: l1 intro «My school in Zelena Dolyna is a gymnasium **now**.» — відповідає реальній реформі мережі (ПЗСО: з 1.09.2024 ліцеї — лише профільна освіта). Куратору — NOTE (герої) в inbox.
- Ровесники: Oksana 14, Year 8 (e7s1: 13) ✅; Denys 16 у ліцеї ✅; Nadiia — сестра Petro, тож схожість з бабусею Hanna правдоподібна ✅.
- Авторське право (WebSearch з лапками, усі — без збігів):

| Фрагмент | Результат |
|---|---|
| "I live there in term time and go home for the holidays" | збігів немає |
| "Teachers have their break in the staffroom. Pupils can't go in there" | збігів немає |
| "In the morning, I don't have to choose my clothes" | збігів немає |
| "Pupils are allowed to use them until five" | збігів немає |
| "The girl at the front has got long dark hair" | збігів немає |
| "Oksana's school hasn't got a canteen, so pupils have lunch in the school hall" | збігів немає |
| "At my boarding school, we have to wear a uniform. We mustn't leave the school without a teacher" | збігів немає |
| "In both countries, children go to primary school first" | збігів немає |

## 6. TQ-147 (Year 8 чи Grade 8) — не створено

У glossary/eng.md правила немає, але в готовому verified розділі 7 кл. e7s6 класи українських шкіл уже названо **Year 1 / Year 11** (content/eng/g7-e7s6.js, екр. «First Bell / Last Bell»; reports/verify/write-eng-g7-e7s6.md: «BrE: … Year 1/Year 11»). e8s6 («Year 8», «Years 5 to 9») цьому відповідає — правок не треба. Обмеження з inbox (verifier-dge5): «Year N» про клас дитини не писати лише у `why` тестів рівня — e8s6 це не зачіпає. Друга частина пропозиції (ліцей без чисел до 2027) — фактичне питання, закрите §1: формулювання правильне в обох станах закону. Рекомендація куратору: внести правило «Year N для українських класів у змісті уроків» у glossary/eng.md.

## 7. Правки

Зроблено (content/eng/g8-e8s6.js):
1. l1 `word` (екр. 9): `answer` + "state", "comprehensive", "grammar" (друга правильна відповідь).
2. l1 intro: «is a gymnasium now» (узгодження з e7s6).
3. `status: "verified"` у 7 уроках, `meta.factcheck`, рядок «Статус» у шапці.

Рекомендовано (не блокує): куратору — правило Year N у glossary/eng.md; NOTE (герої) про реорганізацію школи Оксани.

## 8. Вердикт по уроках
e8s6l1–l7 — verified.
