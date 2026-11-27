# Верифікація: тест рівня dge11 (content/eng/diag-g11.js)

Верифікатор: verifier-write-eng-diag-g11, 2026-11-27. Задача: tasks/review/write-eng-diag-g11.md. Скіли: content-verify («Англійська»), math-pool-diag §2в. Еталони: reports/verify/write-eng-diag-g9.md, write-eng-diag-g10.md.

**Вердикт: `status: "verified"`.** Правки внесено в 10 завданнях (№7 через тему phrv, №10, 12, 15, 16, 19, 21, 23, 24, 28), а також у статус, meta і шапку. Неправильних ключів не знайшов. Граматично правильних дистракторів і пропущених других відповідей немає. Основна знахідка — переодягнені копії рамок уроків із тим самим ключем: №10, 15, 21, 24, 28 (критично, за прецедентом dge6–dge10). Крім того:
- одне неявне фактичне твердження: «We flew home» — політ в Україну, а цивільні рейси туди неможливі;
- одна опора: find out — в e10s8l3, якого не було в `lessons` теми;
- імена, що збігалися з героями серії: style-sync перейменував їх у g11 (див. inbox).

id тесту, id тем, порядок і кількість завдань (28) не змінено, тож `rev` не потрібен: dge11 ще не на main. Файли g11-*.js не чіпав (їх паралельно правив style-sync; номери екранів нижче — за робочим деревом на 2026-11-27). Нових TQ немає. Build і commit не робив.

## 1. Дослівні збіги (власний скрипт n-грам)
Скрипт: `/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-dge11/ng.cjs` (завантажувач `lib.cjs`, дамп екранів `dump.cjs`, лексика `vocab.cjs`).
- **Що порівнює:** body, text з розкритим ключем, **кожен варіант кожного пропуску**, opts.
- **Проти чого:** усі рядки екранів g4-*…g11-* (зокрема розкриті gaps уроків) і всі завдання dge4–dge10.

Результати:
- **6-грами:** 0 до правок і 0 після.
- **5-грами:** до правок 5, після теж 5. Усі службові, рамок із ключем серед них немає:
  - «how many times a week» (e7s5l2);
  - «at the end of the» і «in the end of the» — самі одиниці теми e11s6l5;
  - «we have been living in» (дистрактор ↔ e8s1l2);
  - «and I had been knowing» (дистрактор ↔ e10s5l4 ек. 10, див. нижче).
- **4-грами після правок:** інструкції («fill in the gaps»), «at first I was» і подібні звороти теми. Ще одна — «Matvii writes about his first» ← dge10 №18; рамку body замінено.

**Переодягнені копії** (та сама рамка й ключ, ті самі дистрактори). Скрипт їх не ловить, тож кожне завдання я вручну звірив із повним дампом екранів уроку теми.

| № | Тема | Копія чого | Правка |
|---|---|---|---|
| 10 | ppc | e10s5l4 ек. 7: «Halyna started painting at nine. Oksana came at twelve. When Oksana came, Halyna … has been / was / had been painting for three hours». У тесті: «The rain started at 4 pm and stopped at 6 pm… By the time the rain stopped… have been / had been sitting… for two hours». Скелет той самий: два моменти → тривалість → for N hours → дистрактор has been | «It rained all afternoon, so the children stayed in their tent and played cards. When the rain finally stopped, they ___ cards in the tent since lunch.» (have been playing / **had been playing** / had been play; since — e10s5l4 ек. 3) |
| 15 | cur-e11s2 | e11s2l3 ек. 1: «The new café on our street is nice, but **few** people go there – the food is bland and expensive. The bakery near the park… has **a few** tables». У тесті: «The new sports centre is great, but it’s expensive, so **few** people from our street go there. Luckily, the park nearby has **a few** free tennis courts.» Те саме речення за реченням, ті самі ключі в тому самому порядку | «Nastia writes about her new school.» «The school has {*a few\|few} clubs after lessons, so it was easy to find one for me. But there’s {*very little\|very few\|a few} time between lessons, so I’m always running. And {*few\|a few} pupils use the library because it’s so small and dark.» |
| 21 | cur-e11s5 | e11s5l3 ек. 1 (новини клубу): «Our new robot **has been built**!… Last Tuesday, it **was being tested** when the power suddenly went off, so we lost a whole day… **will be announced** on Friday». У тесті — новини клубу з тим самим скелетом: has been built! → Last Thursday, while… was being put on, it started to snow, so the workers stopped for an hour → Next week… will be planted | Новини конкурсу малюнків, порядок і дієслова інші: «So far, more than two hundred pictures {*have been painted\|has been painted\|have been paint} for the competition. Last Monday, while the pictures {*were being moved\|was being moved\|were being move} to the school hall, one of them fell… The best pictures {*will be shown\|will shown\|will be show} at the town library in May.» |
| 24 | rel | e8s4l4 ек. 10: «Kashtan, which… Their **drummer, {*who\|that} is only seventeen**, is brilliant. Their **first concert, {*which\|who}** was…». У тесті: «son plays in a rock band. The band’s **drummer, {*who\|that\|whose} is only sixteen**… Their **first album, {*which\|that\|who}** came out…». Автор прибрав «writes all their songs», а скелет «гурт → барабанщик, who is only N → their first X, which» лишився | «Our new neighbour is a woman {*whose\|who’s\|who} son repairs bikes for the whole street. Her husband, {*who\|that\|whose} works at the hospital, gets up at five every morning. Their old car, {*which\|that\|who} is bright yellow, is famous in our street.» |
| 28 | cur-e11s8 | e11s8l3 ек. 6: «Zoriana’s laptop is slow. If she {had}…, she’d… Kyrylo’s test is on Friday. If he {revises}…, he’ll… Daryna missed the bus… If she {hadn’t missed}…». У тесті: «Yevhen’s bike is broken. If it worked, he {would cycle}… Liliia’s interview… is next Tuesday. If she prepares…, she {will get}… Ostap missed the deadline… If he had sent…, he {would have had}…». Той самий скелет: «предмет у X зламаний → II; подія в день → I; X missed → III», порядок типів той самий (II, I, III) | Одна оповідачка, порядок III → II → I: «Last month, I sent my form for the climbing camp two days late. If I had sent it in time, I {*would have gone\|would go\|will go} to the camp last week. Now I’m helping at my aunt’s café instead. If I didn’t have this job, I {*would be\|will be\|am} bored at home. And my aunt says that if I work hard all month, she {*will pay\|would pay\|would have paid} for my climbing lessons in September.» |
| 19 | cur-e11s4 | Межовий випадок. e11s4l4 ек. 1, 4, 12: стара річ бабусі (Grandma Hanna’s rushnyk) → «priceless», дистрактор worthless → музей. У тесті — стара картина з бабусиного горища → priceless / worthless → музей | Сцену перенесено в гараж дядька (пропуск 1: «There was broken glass all around it, and broken glass is {*dangerous…}, so he wore gloves»). Ключі й дистрактори ті самі. Ім’я Hanna → Larysa (Grandma Hanna — героїня серії) |
| 23 | cur-e11s6 | Межовий випадок. e11s6l5 ек. 1: «We waited by the road **for two hours**, but **eventually** another bus came». У тесті: «We walked around **for two hours**, and **eventually** we found our hotel» | «We asked three people for directions, and {*eventually…} we found our hotel.» Ще одна правка — факт (§4) |

Ці завдання залишив як паралельні: зміст у них новий, а збігається лише мінімальна граматична пара чи правило теми (прецедент dge8–dge10):
- №1 — considerate = «thinks about other people’s feelings», значення слова.
- №2 — am reading → was reading.
- №11 — описи слів з e10s1l1 ек. 3.
- №12 — explain to / suggest -ing: ядро e11s1l4 ек. 7, сюжет новий.
- №13 — дистрактори «if was I / that» з e9s4l4 ек. 6: це сам набір правила.
- №14, 16, 17 — aren’t I, shall we: правило e11s3l4 ек. 6.
- №20 — must / must not / can + be + 3-тя форма, нові об’єкти.
- №22 — look for після «couldn’t find»: природне вживання, сюжет новий.
- №25 — «…, which / what / that»: це рівно набір правила e11s7l5 ек. 3, 5.
- №26 — Future Perfect за розкладом.

**Межовий випадок — №27.** Пропуск 3 «had known / had been knowing» повторює пастку e10s5l4 ек. 8, 10 (know без -ing). Сюжет новий (переїзд), тож завдання лишив. Якщо вчитель вважатиме це копією, перепишіть пропуск 3 на інше дієслово стану.

**Лексика** (`vocab.cjs`: слова, яких немає в g4-*…g11-*). Усі нові слова правок є в уроках. «frame» в уроках немає, тому його не брав.

## 2. Відповіді (розв'язано самостійно до звірки з ключем; після правок — ще раз)
Мої відповіді збіглися з ключем у всіх 28 завданнях. Нижче — друга правильна BrE-відповідь у кожному пропуску:

| № | Тема | Ключ ↔ дистрактори | Друга правильна? |
|---|---|---|---|
| 1 | pers | considerate ↔ stubborn, selfish | ні |
| 2 | repst | was learning ↔ were learning, is learn | ні («is learning» не варіант; відсічено «A month later, she stopped») |
| 3 | quant | much ↔ many, a lot of | ні |
| 4 | qtag | are you ↔ aren’t you, do you | ні |
| 5 | ingadj | tiring ↔ tired, bored | ні |
| 6 | pass | is being ↔ are being, is been («Closed today» → зараз) | ні («has been» не варіант) |
| 7 | phrv | find out ↔ hand in, turn down | ні |
| 8 | rel | «My grandma, who lives…» ↔ that / which | ні: that після коми неграматичне — CD Grammar, OALD (§5) |
| 9 | fut | «We’re going to wait…» (видима ознака: черга) ↔ дві думки з will | ні |
| 10 | ppc | **після правки:** had been playing ↔ have been playing, had been play (since lunch, минуле) | ні |
| 11 | pers | stubborn; sensitive; loyal | ні (generous, selfish, moody суперечать описам) |
| 12 | cur-e11s1 | admitted; explained to the class; suggested going | ні («explained the class», «suggested to go / us to go» — неграматичні, e11s1l4 ек. 7) |
| 13 | repst | if I played; I trained; I was | ні («I am late» — минуле питання; whether не варіант) |
| 14 | quant | many bags; much noise; enough tables | ні |
| 15 | cur-e11s2 | **після правки:** a few clubs (easy to find); very little time (uncountable); few pupils (small and dark) | ні (very few / a few + time — неграматичні; «a few» у пропусках 1 і 3 суперечить «so» / «because») |
| 16 | qtag | aren’t you; is it; doesn’t he | ні |
| 17 | cur-e11s3 | haven’t you; shall we; aren’t I | ні («am I not» не варіант; «am not I», «isn’t I» — неграматичні, CD Grammar §5) |
| 18 | ingadj | interested; excited; boring | ні |
| 19 | cur-e11s4 | dangerous; invisible; priceless | ні (dangerive, dangeric, disvisible, imvisible, priceful — не слова; worthless суперечить «amazed… should hang in a museum») |
| 20 | pass | must be returned; must not be used; can be taken | ні |
| 21 | cur-e11s5 | **після правки:** have been painted (so far, plural); were being moved (while, plural); will be shown (in May) | ні |
| 22 | phrv | it in; for them; for it | ні |
| 23 | cur-e11s6 | At first; eventually; at the end of the week | ні (Meanwhile / Eventually на початку — за змістом; «in the end of», «in the end the week» — неграматичні) |
| 24 | rel | **після правки:** whose son; her husband, who; their old car, which | ні (who’s / who + son; that після коми; whose + works — неграматичні) |
| 25 | cur-e11s7 | which; which means; which is why | ні (what / that / who для коментаря до речення неграматичні — CD Grammar «always use which», §5) |
| 26 | fut | will have started; won’t have finished; will have sung | ні (6.45 > 6.20, < 7.30) |
| 27 | ppc | had been living; had been saying; had known | ні |
| 28 | cur-e11s8 | **після правки:** would have gone (last week); would be (now); will pay (says — без зсуву) | ні: would go + last week, am, will be, would pay після «says that if I work» — неграматичні. Змішаний умовний відсічено часовими маркерами: last week, «at home» тепер |

«Одне завдання не підказує інше»:
- Ключ жодного завдання не видно в body чи text іншого. Варіанти №8 (who / that / which після коми) не видають ключ №24: усі три подано рівноправно.
- AmE-написань серед хибних варіантів немає.
- Літер A/B/C, позиційних посилань, «Listen», IPA, `uk`, `fbText`, `hint` немає.
- Скрізь ≤ 3 пропуски. Типи: 10 choice, 18 gaps (build/match немає, тож перевіряти порядки build не треба).

## 3. Опора (D-019): урок → екран
Усі `lessons` існують (validate — 0 помилок). `for` кожної теми збігається з `requires` розділів e11s1–e11s8 (рядок `requires:` у кожному g11-*.js):
- pers → e11s1, e11s4;
- repst → e11s1;
- quant → e11s2;
- qtag → e11s3;
- ingadj → e11s4;
- pass → e11s5;
- phrv → e11s6 (є і e10s8l3, і e10s8l4);
- rel → e11s7;
- fut, ppc → e11s8.

| Тема | Урок | Екрани з правилом |
|---|---|---|
| pers | e10s1l1 | ек. 3 (reliable, loyal, generous, selfish, stubborn, moody, sensitive, considerate, tolerant) |
| repst | e8s3l4; e9s4l4 | e8s3l4 ек. 3 (am reading → was reading), 6 (still true; в історії про минуле — минулий); e9s4l4 ек. 3 (wh-: person + verb, без do), 5 (if / whether) |
| quant | e5s3l4; e8s2l2 | e5s3l4 ек. 3 (much / many); e8s2l2 ек. 3 (too much / too many / not enough + noun) |
| qtag | e8s1l4 | ек. 3, 5 (позитивне → негативний tag; be; aren’t I) |
| ingadj | e7s4l4 | ек. 3 (-ed / -ing; interested in, excited about; tired – tiring) |
| pass | e8s3l3; e9s2l5 | e8s3l3 ек. 3 (is / are being + 3-тя форма); e9s2l5 ек. 3 (modal + be + 3-тя форма; put – put) |
| phrv | **e10s8l3 (додано)**; e10s8l4 | e10s8l3 ек. 3: find out → learn new information, hand in, turn down. **Правка:** №7 питає find out, а цього значення в e10s8l4 немає; без e10s8l3 учня скерували б на урок, що не вчить ключа. e10s8l4 ек. 3 (займенник усередині), 7 (look for / apply for + it) |
| rel | e8s4l4; e9s5l4 | e8s4l4 ек. 3 (коми: who / which, not that); e9s5l4 ек. 3 (whose + noun; who’s = who is) |
| fut | e10s4l2; e10s4l5 | e10s4l2 ек. 3 (going to — ознаки зараз; will — думка); e10s4l5 ек. 3 (will have + 3-тя форма; won’t have) |
| ppc | e10s5l4 | ек. 3 (had been -ing; for / since), 8 (had painted — результат; know без -ing) |
| cur-e11s1 | e11s1l4 | ек. 3 (admit, deny, promise), 6 (suggest + -ing), 7 (explain to; не suggested us to / to sell) |
| cur-e11s2 | e11s2l3 | ек. 3 (a few / few, a little / little), 5 (very little + uncountable) |
| cur-e11s3 | e11s3l4 | ек. 3 (tags у всіх часах: have), 6 (I’m → aren’t I; Let’s → shall we) |
| cur-e11s4 | e11s4l4 | ек. 3 (priceless, worthless; «There is no word priceful»), 6 (danger → dangerous), 8 (in-: invisible) |
| cur-e11s5 | e11s5l3 | ек. 3 (paint – painted; third form), 4 (has / have been; will be), 7 (was / were being) |
| cur-e11s6 | e11s6l5 | ек. 3 (at first, eventually, meanwhile), 6 (at the end of + noun; не in the end of) |
| cur-e11s7 | e11s7l5 | ек. 3 (кома + which; не that, не what), 7 (which means, which is why) |
| cur-e11s8 | e11s8l3 | ек. 3 (три типи поруч), 5 (як обрати: коли? реально?) |

Рівень — B2 наприкінці 11 кл.: Future Perfect, Past Perfect Continuous, пасив у п’яти часах, коментар із which, три умовні поруч, словотвір. Речення ≤ ~20 слів, інструкції однакові, `why` без «Year N». Чутливого змісту немає.

## 4. Факти (відкрито в цій сесії)
| Твердження | Джерела | Вердикт |
|---|---|---|
| №23 (до правки): «We flew home [в Україну] at the end of the week» — неявне твердження, що з Дубліна можна прилетіти додому | WebSearch «EASA CZIB Ukraine airspace closed civil flights»: https://www.easa.europa.eu/en/domains/air-operations/czibs/czib-2022-01r14, https://www.easa.europa.eu/domains/air-operations/czibs/czib-2022-01 (NOTAM A0021/26: FIR Lviv, Kyiv, Dnipro, Simferopol, Odesa закриті для цивільної авіації, ревізія 24.07.2026); WebSearch «Ukraine airspace remains closed civilian flights airports 2026»: https://www.khaleejtimes.com/business/aviation/ukrainian-airspace-closed-to-civilian-flights?amp=1, https://kun.uz/en/85683130. Напряму easa.europa.eu, szru.gov.ua і kyivindependent.com з сесії не резолвляться (ENOTFOUND), тож це лише сніпети пошуку. Прецедент проєкту — reports/verify/write-eng-g11-e11s6.md (рейсів з України в розділі немає) | ⚠️ неможливо зараз → **виправлено:** «We went home at the end of the week.» Після правки твердження про рейси немає, тож перевірка джерелами не блокує |
| Решта — вигадані люди, школи, клуби й події. Міста (Uzhhorod, Chernihiv, Lutsk, Sumy, Dnipro, Rivne, Dublin, Ireland) лише задають місце дії. Тверджень про реальні заклади, маршрути й дати немає | — | ✅ (нема що перевіряти) |

**Імена.** Транслітерація — КМУ № 55: Bozhena, Larysa, Ustyna, Nastia, Sydorenko, Zhenia, Yuliia, Liliia (останню прибрано разом зі старим №28). Історичних осіб немає, тож D-057 не зачеплено. За нотаткою style-eng-g11 в inbox («NOTE (dge11, автору)») і звіркою з g10-/g11-*.js прибрав збіги з героями серії, щоб у тесті не було «других» людей з тими самими іменами:
- Ms Hrytsenko (пілотка, e4s1) → Ms Sydorenko (№12);
- Solomiia (e5s8) → Ustyna (№7);
- Zlata (сестра Taras, e10–e11) → Bozhena (№16);
- Hanna (Grandma Hanna) → Larysa (№19).

## 5. Форми й норма (словники, відкриті в цій сесії)
| Форма | Джерело (curl, дослівно) | Вердикт |
|---|---|---|
| that після коми в non-defining — неграматичне (№8, 24) | CD Grammar «Relative clauses: defining and non-defining», https://dictionary.cambridge.org/grammar/british-grammar/relative-clauses-defining-and-non-defining: «Warning: We don’t use that to introduce a non-defining relative clause: Allen, who scored three goals… Not: Allen, that scored…». CD Grammar «Relative pronouns», https://dictionary.cambridge.org/grammar/british-grammar/relative-pronouns: «that — people, animals and things; informal — defining only»; «We can’t use that instead of who, whom or which in non-defining relative clauses». OALD which, https://www.oxfordlearnersdictionaries.com/definition/english/which: «used to give more information about something: His best movie, which won several awards… **That cannot be used instead of which in this meaning.**» | ✅ дистрактор that однозначно хибний |
| коментар до всього речення — лише which (№25) | CD Grammar «Relative clauses referring to a whole sentence», https://dictionary.cambridge.org/grammar/british-grammar/relative-clauses-referring-to-a-whole-sentence: «We always use which to introduce these clauses.» OALD which (вище): that у цьому значенні не вживається | ✅ |
| aren’t I; Let’s…, shall we (№17) | CD Grammar «Question tags», https://dictionary.cambridge.org/grammar/british-grammar/question-tags: «If the main clause verb is I am, then the negative tag form is aren’t I»; «After the imperative with let’s, we can use shall in the tag: Let’s have some lunch now, shall we?» | ✅ |
| few / a few; little / very little (№15) | CD Grammar «Little, a little, few, a few», https://dictionary.cambridge.org/grammar/british-grammar/few-little-a-few-a-little: «A little and a few are quantifiers meaning ‘some’. Little and few have negative meanings… ‘not as much as may be expected or wished for’»; «No, very little. — not much/almost nothing» | ✅ |
| in the end = finally; at the end of + noun (№23) | CD Grammar «Finally, at last, lastly or in the end?», https://dictionary.cambridge.org/grammar/british-grammar/finally-at-last-lastly-or-in-the-end: «We use in the end to refer to a conclusion after a long process…»; «at the end of a long list». Правило «Not: in the end of the trip» — e11s6l5 ек. 6, звірене верифікатором розділу (reports/verify/write-eng-g11-e11s6.md) | ✅ |

**BrE:** queue, flat, advert, sports centre, training session, at the weekend не вжито, «6.30 pm» (TQ-123 «Як зараз»), лапки “ ” (TQ-122). AmE-лексики й AmE-правопису немає (grep: color, favorite, center, -ize, apartment, vacation, movie, mom — 0).

## 6. Авторське право (WebSearch з лапками)
| Фрагмент | Результат |
|---|---|
| «Last season we lost almost every match, but she came to every training session» | збігу немає |
| «Vitalii never changes his mind, even when he’s clearly wrong» | немає |
| «Under the dust, the artist’s name was almost invisible» | немає |
| «Two members haven’t got passports yet, which is why they are applying for them» | немає |
Тексти правок власні. 6-грам зі збігами 0, тож дослівних збігів ≥ 12 слів з уроками й тестами проєкту немає.

## 7. Прогін
- `node tools/validate.mjs --diag dge11` — 0 помилок, 0 попереджень (до правок і після).
- `node tools/euphony.mjs --diag dge11` — 28 завдань, 0 відхилень.
- test-answer-ui і playtest не запускав: Python-модуля playwright у контейнері немає, їх прожене CI (job browser).

## 8. Правки
Зроблено (усе — у content/eng/diag-g11.js):
- №10, 15, 21, 24, 28 — копії рамок уроків з тим самим ключем (❌ → переписано).
- №19, 23 — межові копії сцени (переписано один пропуск чи деталь).
- №23 — «flew home» (⚠️ факт).
- Тема phrv — `lessons` + e10s8l3 (опора find out для №7).
- №7, 12, 16, 19 — імена, що збігалися з героями серії.
- status → verified, meta.factcheck, шапка.

Рекомендовано (не блокує):
- №27, пропуск 3 — межовий паралелізм з e10s5l4 ек. 10 (§1).
- Номери екранів g11 у таблиці §3 — за робочим деревом під час style-sync. Якщо style-sync переставить екрани, звірте їх повторно.
- easa.europa.eu недоступний із сесії (ENOTFOUND). Щоб відкрити CZIB напряму, хост треба дозволити в мережевих налаштуваннях.
