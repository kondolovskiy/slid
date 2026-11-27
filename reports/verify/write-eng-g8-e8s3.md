# Верифікація e8s3 «The media: the internet and the press» (eng, 8 кл.)

verifier-e8s3, 2026-11-25. Файл: content/eng/g8-e8s3.js (7 уроків: 6 + фінал). Задача: write-eng-g8-e8s3.
Скіл content-verify, розділ «Англійська»; AGENTS.md; style/eng.md; pitfalls-content «Англійська».

**Вердикт: усі 7 уроків → `verified`.** 2 правки (друга правильна відповідь у gaps). TQ-144 внесено в docs/teacher-questions.md.

## 1. Програма й граматика
| Твердження | Джерело (відкрито в цій сесії) | Вердикт |
|---|---|---|
| ЗМІ 8 кл.: Інтернет, Преса, Періодичні видання | МП-ІМ с. 32 (pdftotext): https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf | ✅ |
| B1: «Passive forms: … Present continuous …», «Reported statements» | МП-ІМ с. 35 (той самий PDF) | ✅ |
| Present continuous passive: am / is / are + being + -ed («That computer isn’t being used any more») | CD Grammar «Passive: forms» — https://dictionary.cambridge.org/grammar/british-grammar/passive-forms | ✅ |
| Backshift: present simple → past simple, present continuous → past continuous | CD Grammar «Reported speech: indirect speech», «Backshift changes» — https://dictionary.cambridge.org/grammar/british-grammar/reported-speech-indirect-speech | ✅ |
| «We don’t need to change the tense … if what a person said is still true» (екран l4 «Is it still true?») | там само, «No backshift» | ✅ (друге джерело для навчальної норми не знайдено в мережі цієї сесії; правило — граматика, не факт; винесено вчителю як TQ-144) |

Справжніх фактів (дат, імен, ЗМІ) у розділі немає: Lviv Today, School 5 News, усі новини вигадані; дати (1 October, 1 December, 1900, 2010) — у вигаданих текстах. Справжні ЗМІ не оцінюються.

## 2. Форми й норма (BrE)
| Форма | CD | OALD | Вердикт |
|---|---|---|---|
| newspaper — наголос 1-й склад | UK ˈnjuːzˌpeɪ.pər — https://dictionary.cambridge.org/dictionary/english/newspaper | ˈnjuːzpeɪpə(r) — https://www.oxfordlearnersdictionaries.com/definition/english/newspaper | ✅ |
| magazine — 3-й склад (UK) | UK ˌmæɡ.əˈziːn — …/english/magazine | BrE ˌmæɡəˈziːn (NAmE ˈmæɡəziːn) — …/definition/english/magazine | ✅ |
| journalist — 1-й | ˈdʒɜː.nə.lɪst — …/english/journalist | ˈdʒɜːnəlɪst — …/english/journalist | ✅ |
| reporter — 2-й | rɪˈpɔː.tər — …/english/reporter | rɪˈpɔːtə(r) — …/english/reporter | ✅ |
| the internet з малої | «(also Internet)» — …/english/internet | «(also Internet) (usually the internet)» — …/english/internet | ✅ |
| penfriend | є, UK — …/english/penfriend | «(British English) (also pen pal North American English…)» — …/english/penfriend | ✅ |
| grandad | «informal (also granddad)» — …/english/grandad | «(also granddad especially in North American English)» — …/english/grandad | ✅ |
| head teacher | «(US principal); (UK also head)» — …/english/head-teacher | «(both British English) (North American English principal)» — …/english/head-teacher | ✅ |
| a monthly (іменник, l1 і фінал T1) | «a magazine that is published once a month» — …/english/monthly | monthly noun — …/english/monthly_2 | ✅ |

Також BrE: favourite, kilometres, sports hall, canteen, café, Room 12, 7 pm / 10 am (TQ-123 «як зараз»), 1 December. AmE не знайдено. IPA, «Listen», позиційних посилань, літер A/B/C в `opts` немає. Пояснення — речення ≤ 12 слів, терміни: Present Continuous passive, third form (TQ-128).

## 3. Авторське право (фрагменти ≥ 12 слів, WebSearch з лапками)
| Фрагмент | Результат |
|---|---|
| "Our school library is changing. This month, the walls are being painted" | збігів немає |
| "A new park is being built next to the station" | збігів немає (лише новини про різні парки, інший текст) |
| "told us that the newspaper needed a new photographer" | збігів немає |
| "A new café opened in the city centre on Saturday. It sells cakes, hot chocolate" | збігів немає |
| "My grandad reads a paper with his tea each morning" | збігів немає |
| "said that the new library was going to have six computers" | збігів немає |
| "The school canteen is being changed. New tables are being made" | збігів немає |
| "There's no newspaper in our village, so I read the news online" | збігів немає |

## 4. Завдання → звідки відповідь → вердикт
Кожне розв'язано самостійно до звірки з `correct`/`answer`; рушій: `build` вимагає всіх `tiles` (app/lang.js buildSplit), `pick` `[…]` — ціль, `[!…]` — хибна кнопка.

**l1**
| Екран | Відповідь | Опора | Вердикт |
|---|---|---|---|
| 2 choice (hyp) | every week | здогадка, пояснено в fbText і на екрані 3 | ✅ |
| 4 match | daily→every day, monthly→every month, website→new stories all day, chess magazine→one topic | екран 3; інших доречних пар немає | ✅ |
| 6 gaps | monthly, articles, photographer, headline | екрани 3, 5 | ✅ |
| 7 stress | NEWSpaper, magaZINE, JOURnalist, rePORter | `<u>` на екранах 3, 5; CD/OALD | ✅ |
| 8 word | journalist / reporter / writer | екран 5 | ✅ (editor не підходить до «He’s a») |
| 9 gaps | weekly, articles, journalist, photographer | екрани 3, 5; «every Friday» = every week | ✅ |

**l2**
| 2 choice (hyp) | Check who wrote it and when | здогадка; intro (Оксана питає «Who? When?») | ✅ |
| 4 multi | 0, 1, 3 | екран 3 (чотири питання; likes там немає) | ✅ |
| 6 sort | 3 факти / 3 думки | екран 5 | ✅ |
| 7 choice | No, mostly about a café | текст на екрані; «Lviv» відкидається текстом (Kharkiv) | ✅ |
| 8 word | fact | екран 5 | ✅ |
| 9 gaps | date, wrote, other, true, share | екран 3; «another websites», «believe it with» — неграматичні | ✅ |

**l3**
| 2 choice (hyp) | People are building the park now | здогадка; intro | ✅ |
| 4 gaps | is, are, is being, are being built | екран 3 | ✅ |
| 6 choice | is being painted | екран 5; «right now» відсікає інші | ✅ |
| 7 pick | [is] (the windows) | екран 3 | ✅ |
| 8 word | being | екран 3 | ✅ |
| 9 build | What is being built next to the station? | екран 5 (питання What is being…); інших порядків з усіма плитками немає | ✅ |
| 10 gaps | is being built, are being planted, is being repaired, was built | екрани 3, 5 | ❌→✅ **виправлено:** хибний варіант «was built» у 1-му пропуску («Big news from Lviv! A new park … next to the station. This week, two hundred trees are being planted.») граматично правильний, контекст його не відсікає (парк міг бути вже збудований) → замінено на «are being built» |

**l4**
| 2 choice (hyp) | was reading | здогадка; приклади в intro | ✅ («is reading» без backshift не серед варіантів) |
| 4 match | 4 пари | екран 3; ключові слова унікальні | ✅ |
| 5 gaps | was, were making, couldn’t | екран 3; «is» (досі правда) не серед варіантів | ✅ |
| 7 multi | 0, 1 | екран 6 (still true → обидві) | ✅ |
| 8 pick | [were] | екран 3 (he → was) | ✅ |
| 9 word | couldn’t / could not | екран 3; «Later, he found it» — уже неправда, «can’t» відсікнуто | ✅ |
| 10 gaps | looked, didn’t, was, was reading, could | екран 3; форми без backshift (looks, doesn’t, is, can) не серед варіантів, хибні — неграматичні | ✅ |

**l5**
| 2 choice | told us that… | e6s8l5 (повторення, eyebrow «Remember?»), підказка | ✅ |
| 4 gaps | told, said, told, said | екран 3 | ✅ |
| 6 choice | They said they were writing… | екрани 3, 5 | ✅ |
| 7 word | told | екран 3 (me — людина) | ✅ |
| 8 pick | [told] (перше) | екран 3 | ✅ |
| 9 build | Ms Lysenko told us that the meeting was in Room 12. | екран 3; «said» з усіма плитками речення не дає | ✅ |
| 10 choice | Daryna | текст на екрані | ✅ |

**l6**
| 2 choice | too small and too dark | текст на екрані | ✅ |
| 3 multi | 0, 1 | текст на екрані (1 December; «Not everyone is happy») | ✅ |
| 4 choice | Yes, changes in the library | текст статті, l2 «match the headline» | ✅ |
| 6 order | headline → changing → walls → Ms Kvitka → end | текст статті, екран 5 | ✅ |
| 7 word | are | l3 екран 3 | ✅ |
| 8 gaps | is being made, are being planted, told, wanted | l3, l5, l4 | ❌→✅ **виправлено:** хибний варіант «was made» у 1-му пропуску («This week, a school garden … behind our school») правильний (This week + Past Simple passive), контекст не відсікає → замінено на «are being made» |

**l7 (фінал; кожне `pre` — урок розділу)**
| T1 gaps | monthly, articles, photographer | l1 | ✅ |
| T2 sort | 2 / 2 | l2 | ✅ |
| T3 choice | is being repaired | l3 | ✅ |
| T4 word | was | l4; «Today he’s free» — уже неправда | ✅ |
| T5 pick | [said me] | l5 | ✅ |
| T6 build | The players said they were tired. | l5 екран 5; пастка «we» не може замінити «they», бо всі tiles обов'язкові (сумнів автора знято) | ✅ |
| T7 choice | Yes, changes in the canteen | l2, l6 | ✅ |

## 5. Педагогіка
Кожен урок: проблема (intro) → здогадка `hyp` → правило → завдання з поясненням «чому». Підказки не видають відповідь. Тема «чи правдива новина» без страшилок (вигаданий пост про закриті школи, перевірка шкільного сайту) — прийнятно для 8 кл. Функція МП-ІМ с. 28 (чи стаття відповідає темі) — l2 екран 7, l6 екран 4, фінал T7. Діалоги — репліками в `body` (D-056, пропозиція в inbox), без звуку.

Рекомендації (не блокують, не змінено):
- l4 екран 5: «that day» (today → that day) з'являється без пояснення; не оцінюється. За бажання — рядок у правилі екрана 3.
- stats: l1 longWordShare z = 3,5 («нетипово для сім'ї») — тематичні слова (newspaper, magazine, journalist, photographer), межу профілю 7-9 (≤ 0,18) не порушено; прийнятно до калібрування.

## 6. requires
`requires: ["e4s6l2", "e6s3l2", "e6s7l3", "e6s8l5"]` — усі існують (validate 0/0). **content/eng/g7-e7s7.js не існує** → урок Past Simple passive з e7s7 не додано; після появи e7s7 оркестратор додає його id (inbox writer-e8s3 NOTE (requires), plan-eng-g7-8-9 §6).

## 7. Людині
- **TQ-144** (новий, docs/teacher-questions.md): backshift необов'язковий, коли сказане досі правда — зараховувати в 8 кл. обидві форми (як зараз) чи лише backshift.

## 8. Прогін
- `node tools/validate.mjs --section e8s3` — 0 помилок, 0 попереджень (після правок).
- `node tools/stats.mjs --subject eng` — e8s3l1 longWordShare z = 3,5 (див. §5).
- playtest — не запускався (Python-модуля playwright у контейнері немає; CI job browser).
