# Верифікація e8s2 «Healthy living and free time» (eng, 8 кл.) — verifier-e8s2, 2026-11-25

Файл: `content/eng/g8-e8s2.js` (7 уроків, 6 + boss). Скіл `content-verify` з розділом «Англійська». Розділ не писав.
Прогін: `validate --section e8s2` — 0/0 до і після правок; `stats --subject eng` — e8s2l1 maxReadWords/maxText «нетипово для сім'ї» (z=2): intro з трьома репліками, у межах профілю 7–9, калібрувати в style-sync (не блокує). Плейтест локально неможливий (немає Python-модуля playwright) — CI job `browser` після build.

**Вердикт: усі 7 уроків → `verified`. Правок у файлі — 4 (одна блокувальна за §2, три дрібні). Людині — нічого обов'язкового.**

## 1. Факти
| Твердження (де) | Джерела, відкриті в сесії | Вердикт |
|---|---|---|
| Teenagers need 8–10 hours of sleep a night (l1 hyp, info, word, final; boss T1) | AASM Teen Sleep Duration Health Advisory, 13–18 років — 8–10 год на 24 год: https://aasm.org/advocacy/position-statements/teen-sleep-duration-health-advisory/ (WebSearch; aasm.org з контейнера — код 000); CDC, 13–18 — 8–10 год за AASM: https://www.cdc.gov/healthy-schools/sleep/index.html , https://archive.cdc.gov/www_cdc_gov/healthyschools/sleep.htm (WebSearch) | ✅ |
| Be active for at least 60 minutes a day (l1 info) | WHO 2020, 5–17 років — «at least an average of 60 min/day» MVPA: https://www.who.int/europe/news-room/fact-sheets/item/physical-activity ; WHO EMRO https://www.emro.who.int/health-education/physical-activity/recommended-levels-of-physical-activity-for-health.html (WebSearch). «at least 60 minutes a day» — спрощення «середнього за тиждень», прийнятне для 8 кл. | ✅ |
| Hoverla, the highest mountain in Ukraine (l5 intro) | ЕСУ «Говерла» — «найвища вершина Українських Карпат і всієї України» https://www.esu.com.ua/pdf/file/25087.pdf (WebSearch); https://en.wikipedia.org/wiki/Hoverla (curl: «Highest mountain in Ukraine»); https://uk.wikipedia.org/wiki/Говерла (curl) | ✅ |
| Yaremche — місце для хайкінгу (l5, лише назва) | https://uk.wikipedia.org/wiki/Яремче (curl: «у міжгірній улоговині Українських Карпат»); zaxid.net «Яремче: двері Карпат» https://zaxid.net/yaremche_dveri_karpat_z_vtrachenoyu_vizitivkoyu_n1584176 (WebSearch) | ✅ |
| Kamianets-Podilskyi — «old castles» (l3 pick, Kyrylo) | https://en.wikipedia.org/wiki/Kamianets-Podilskyi_Castle (curl); tsn.ua https://tsn.ua/osoblyva_ukraina/kam-yanec-podilska-fortecya-bastion-podillya-306686.html (WebSearch) | ✅ |
| «There’s a climbing wall at a sports centre in Poltava» (l3 intro) | WebSearch «скеледром Полтава», «скелелазіння Полтава скелодром» — конкретного закладу не знайдено (лише каталог list.in.ua без назви) | ⚠️ → **виправлено**: «at a new sports centre near us» (вигадане, без твердження про реальне місто) |
| Опитування класу Andrii (24 учні, l6, boss T6) | вигадані числа вигаданого класу, явно подано як опитування класу (не статистика) | ✅ |

## 2. Форми й норма (словники, curl у цій сесії)
| Форма | CD | Друге джерело | Вердикт |
|---|---|---|---|
| take up | «B1 to start doing a particular job or activity» https://dictionary.cambridge.org/dictionary/english/take-up | OALD «to learn or start to do something, especially for pleasure» https://www.oxfordlearnersdictionaries.com/definition/english/take-up | ✅ |
| give up (+ -ing) | «B1 to stop doing a regular activity or job : [ + -ing verb ]» https://dictionary.cambridge.org/dictionary/english/give-up | OALD «to stop doing or having something» https://www.oxfordlearnersdictionaries.com/definition/english/give-up | ✅ |
| work out | «B1 to exercise in order to improve the strength or appearance of your body» https://dictionary.cambridge.org/dictionary/english/work-out | OALD «to train the body by physical exercise» https://www.oxfordlearnersdictionaries.com/definition/english/work-out | ✅ |
| get up | «A1 to wake up and get out of bed» https://dictionary.cambridge.org/dictionary/english/get-up | — (A1, однозначно) | ✅ |
| enjoy / avoid / finish + -ing; want / decide / hope + to; like / love / hate / start — обидва | CD Grammar «followed by the -ing form…: … finish … avoid … enjoy»; «hope … want decide»; «Hate, like, love and prefer can be followed either by -ing or a to-infinitive»; start, begin — у списку з to і -ing https://dictionary.cambridge.org/grammar/british-grammar/verb-patterns-verb-infinitive-or-verb-ing | приклад CD «She hopes to go to university next year» (та сама сторінка) | ✅ |
| too much + uncountable, too many + plural; enough before a noun | https://dictionary.cambridge.org/grammar/british-grammar/too («too much, too many… before a noun»); https://dictionary.cambridge.org/grammar/british-grammar/enough («We can use enough before a noun») | e7s4l6 (verified) — enough після прикметника | ✅ |
| go + -ing | «go + -ing form when we speak about general activities that involve movement» https://dictionary.cambridge.org/grammar/british-grammar/go | — | ✅ |
| stress: lifestyle, exercise, healthy, energy | CD UK /ˈlaɪf.staɪl/, /ˈek.sə.saɪz/, /ˈhel.θi/, /ˈen.ə.dʒi/ (сторінки CD відповідних слів) | — перший склад, однозначно | ✅ |
| flip-flops (BrE) | CD «( US and Australian English thong ) a type of open shoe…» https://dictionary.cambridge.org/dictionary/english/flip-flop | — | ✅ |
| practise (дієслово, BrE) | CD practise — «US practice» https://dictionary.cambridge.org/dictionary/english/practise | — | ✅ |
| crisps, rucksack (BrE) | CD crisp noun (POTATO); rucksack https://dictionary.cambridge.org/dictionary/english/rucksack | — | ✅ |

AmE-правопис і лексика (grep color/center/-ize/soda/chips/candy/movie/sports/practice…) — немає; «sports centre» — сполука BrE. IPA в тексті немає; «Listen / You hear» немає; літер A/B/C і позиційних посилань немає; `uk` немає (8 кл.); діалоги — репліками в body (D-056).

## 3. Авторське право (фрагменти ≥ 12 слів, WebSearch з лапками)
| Фрагмент | Результат |
|---|---|
| «Check the weather first. Take enough water and some food. Wear good boots» (l5 multi) | дослівних збігів немає |
| «I had three cans of cola and two bars of chocolate» (l2 intro) | немає |
| «I run in the park every morning, and I eat a lot of fruit» (l1 intro) | немає |
| «I gave up fizzy drinks a month ago, and I feel great» (l4 final) | немає |
| «I enjoy swimming in the sea, but I want to try something new» (l3 final) | немає |
| «We asked 24 pupils about their free time» (l6 final) | немає |

## 4. Завдання: розв'язок, опора (D-019), друга правильна відповідь
Розв'язував сам до перегляду `correct`; усі збіглися з ключем.

| Урок / екран | Опора | Друга правильна? | Вердикт |
|---|---|---|---|
| l1 hyp choice (сон) | `hyp: true` | — | ✅ |
| l1 sort healthy / not | info екр. 3 (sleep, exercise, food) | ні | ✅ |
| l1 gaps should / shouldn’t | info «Advice» + intro (хто що робить) | «should» для Emma суперечить «every day» і правилу | ✅ |
| l1 word sleep | info екр. 3 | «rest» — не той зміст («hours of sleep»), не додаю | ✅ |
| l1 stress ×4 | `<u>` в info екр. 3 | — | ✅ |
| l1 final gaps | info екр. 3, 5 | exercise/energy, lazy/slow, should — відсічено контекстом | ✅ |
| l2 hyp | `hyp: true` | — | ✅ |
| l2 gaps / choice / pick / word / final | info екр. 3 (too much/many, enough + noun) | «sleep enough» після «get» — хибно; «too many water/sleep» — хибно | ✅ |
| l2 match (4 пари) | міркування причина → наслідок | перебрав усі 16 пар: друга доречна пара відсутня | ✅ |
| l3 hyp gaps hope | `hyp: true` | — | ✅ |
| l3 sort / gaps / pick / word / final | info екр. 3 | у пропусках лише дієслова з однією формою (enjoy, finish, avoid, want, decide, hope); love — окремим варіантом «both»; start/hate лише в sort «both» | ✅ |
| l3 choice love → both | info екр. 3, CD Grammar | — | ✅ |
| l4 hyp give up | `hyp: true` | — | ✅ |
| l4 match | info екр. 3 | ні | ✅ |
| l4 gaps / final | info + контекст («last one out of bed», «Oliver says he can teach me», «with a video in the evenings») | work out / get up, take up / give up відсічено контекстом | ✅ |
| l4 choice gave / took | info «Past» | — | ✅ |
| l4 pick give [out] | info + умова «wants to stop drinking» (give out — інше значення, хибне в контексті) | — | ✅ |
| l4 word took; boss T4 took | info «Past» | «picked up» — не «start a sport» у B1-значенні; не додаю | ✅ |
| l5 hyp tent | `hyp: true` | — | ✅ |
| l5 match equipment | info екр. 3 | skis / bike / tent однозначні → біекція єдина | ✅ |
| l5 gaps / word / final | info екр. 3 (go + -ing, речі) | did hiking, to camping, camp — хибні | ✅ |
| l5 multi (поради) | текст на екрані | flip-flops ≠ good boots — читається з тексту; [0, 2] | ✅ |
| l6 hyp most | `hyp: true` | — | ✅ |
| l6 gaps 18/12/6/3 | info екр. 3 + числа в body | єдиний розподіл | ✅ |
| l6 multi chart | діаграма (значення підписані, `horizontal`) | [1, 3] | ✅ |
| l6 choice 10/20 half | міркування за info | — | ✅ |
| l6 word popular | info «The most popular» | **«common» — граматично й за змістом правильне** («the most common activity») → ❌ → **виправлено**: `answer: ["popular", "common"]` | ✅ після правки |
| l6 final gaps | info + l2 | more popular / popularer / the most popular; enough / too — однозначно | ✅ |
| boss T1–T6 | `pre` l1–l6, кожне спирається на свій урок | ні | ✅ |

## 5. Педагогіка, рівень, BrE
- Кожен урок: проблема (intro) → `hyp` → info → завдання → фінал; `hint` не видають відповіді. Рівень пояснень — у межах «6–9 кл.» style/eng.md (речення ≤ 12 слів, info ≤ 60 слів без прикладів); нові терміни: phrasal verb (l4), -ing / to (l3) — ≤ 2 на урок. B2-слова (lifestyle, junk food, stay up, survey, helmet) введені з поясненням в info.
- Здоров'я — нейтрально, без лякання; «doctors say» з перевіреними числами.
- Герої звірені з каноном inbox: Dmytro — брат Oksana (10 р.), Tom — swimming club (e7s5), Taras — athletics, Mr Hnatiuk, Thursday (e7s5), Roksolana skating → gymnastics, Oliver — теніс, Mariia — бігає щоранку. **Bohdan** (канон: теніс, велосипед) в l2 «He never goes outside» суперечив l3/l4 (теніс) → речення прибрано.
- `requires`: e7s4l6 (verified, «Old enough to watch it?», adjective + enough) — l2 info зіставляє «enough + noun» з «old enough» → **додано**.

## 6. Правки (зроблено)
1. l6 word (екр. 7): `answer: "popular"` → `["popular", "common"]` — друга правильна відповідь (критично, §3).
2. l3 intro: «at a sports centre in Poltava» → «at a new sports centre near us» — непідтверджений факт про реальне місто (§2).
3. l2 word (екр. 8): прибрано «He never goes outside.» — суперечність канону Bohdan.
4. `requires` + "e7s4l6"; `status` усіх 7 уроків → "verified"; `meta.factcheck`, рядок «Статус» у шапці.

## 7. Рекомендації (не блокують)
- stats e8s2l1 intro 93 слова (z=2) — калібрувати профіль у style-sync 8 кл.
- Плейтест `--section e8s2` — у CI після build (локально немає playwright).

## Вердикт по уроках
e8s2l1–e8s2l7 — **verified** (жодного відкритого ❌ чи ⚠️). `approved` — лише вчитель.
