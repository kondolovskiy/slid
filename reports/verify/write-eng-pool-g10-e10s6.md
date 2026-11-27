# Верифікація: пул pe10s6 (англійська, 10 кл., розділ e10s6 «Science and technology»)

Верифікатор: verifier-pe10s6, 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g10-e10s6.js` за скілами `content-verify` («Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g10-e10s6.md. Опора: уроки `content/eng/g10-e10s6.js` (verified) і розділи g4–e10s5.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів і граматично правильних дистракторів я не знайшов. Правок 7: 1 граматичний порядок плиток поза ключем (a51) і 6 копій рамок чи прикладів уроку з тим самим ключем (a18, a26, a32, a44, a46, a47). До них — статус і meta. Людині вирішувати нічого не треба.

## 1. Програма, `src`
Програму П1407 відкрив у цій сесії (https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf, pdftotext; колонтитули «22», «23»). На с. 22 є тема «Наука і технічний прогрес» (комп'ютерне обладнання; сучасні засоби комунікації та інформації; вплив науки на розвиток суспільства; технології) і функції «давати поради, реагувати на поради інших» та «аргументувати свою точку зору». На с. 23 (граматика, Clause) — «first and second conditionals».
l1, l2, l5 func, l6 → с. 22. l3, l4, l5 gram/write (If I were you — second conditional) → с. 23. Усі `src` відповідають темам вправ ✅. `sources`: `p1407`, `program: true` ✅.

## 2. Факти
| Твердження (вправа) | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| Diia запущено в лютому 2020 (a17) | https://en.wikipedia.org/wiki/Diia («On February 6, 2020, the mobile app Diia was officially launched») ; https://www.atlanticcouncil.org/blogs/ukrainealert/ukraines-digital-revolution-continues-with-enhanced-legal-status-for-e-passports/ (через WebSearch) | ✅ |
| Цифрові документи, державні послуги онлайн (a18) | Wikipedia Diia ; https://sud.ua/en/news/ukraine/362752-kakie-dokumenty-dostupny-v-diyi-i-kakuyu-yuridicheskuyu-silu-oni-imeyut-razyasnenie-migratsionnoy-sluzhby (WebSearch) | ✅ |
| З 2021 цифровий паспорт у застосунку рівний звичайному в Україні, але не для перетину кордону (a17 steps, a19) | Wikipedia Diia («Starting August 23, 2021 … for all purposes while in Ukraine») ; https://www.kmu.gov.ua/en/news/mihajlo-fedorov-ukrayina-persha-derzhava-svitu-v-yakij-cifrovi-pasporti-u-smartfoni-stali-povnimi-yuridichnimi-analogami-zvichajnih-dokumentiv і https://www.kyivpost.com/technology/ukraine-makes-digital-passports-legally-equivalent-to-ordinary-ones.html (WebSearch: «except in cases of crossing the state border») | ✅ |

Інших фактів немає. Бренди не названо. Концерт «Famous singer…» в a13 — анонімний пост, реальної особи немає ✅.
**Канон героїв** (glossary/eng-heroes.md): Grandad Vasyl — Chernihiv, дідусь Andrii; Sofiia — сестра Andrii ✅. Mariia, Polina, Roksolana — Kharkiv ✅. Bohdan — теніс ✅. Myroslava, Ostap — Lviv ✅. Daryna — тітка в Odesa ✅. Kyrylo — history ✅. Andrii — окуляри, шахи ✅. Мама Oksana — nurse (a58) ✅. Zoriana — robot club ✅. Вік 16 ніде не суперечить.

## 3. Вправи: моє розв'язання → опора (D-019) → вердикт
Спершу я розв'язав усі вправи за дампом без ключів, потім звірив із ключами. `SLID_LANG.check(solution)` зараховує всі вправи. У `build` скрипт перебрав усі перестановки з `extra` (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe10s5-pe10s6/bin/chk.mjs`).

| Вправа | Моя відповідь | Ключ | Опора | Вердикт |
|---|---|---|---|---|
| a01 match | keyboard–type, microphone–speak, printer–print, desktop–desk | = | l1 info; перебрав усі праві | ✅ |
| a02 gaps | crashed; backed up; install | = | l1 «Hardware and software» | ✅ |
| a03 sort | 3 hardware / 3 software | = | l1 | ✅ |
| a04 word | back | = | l1 | ✅ |
| a05–a07 stress | lap, stall / key, pu, prin / hard, stall, web, mi, desk | = | l1 `<u>` і fbText stress; CD, OALD (§4) | ✅ |
| a08 choice | a keyboard | = | текст | ✅ |
| a09 multi | extra copies; once stopped suddenly | = | l1 back up, crash | ✅ |
| a10 choice | take the file to Polina’s printer | = | l1 USB stick | ✅ |
| a11 choice | club group chat | = | l2 | ✅ |
| a12 choice | an email | = | l2 «more formal» | ✅ |
| a13 multi | singer’s website; reliable news websites | = | l2 multi | ✅ |
| a14 match | 4 пари | = | l2 | ✅ |
| a15 gaps | posted; viral; notification | = | l2 | ✅ |
| a16 word | went | went / has gone (contractions) | l2 | ✅ (has gone без часового маркера в реченні — у ключі) |
| a17 choice | in 2020 | = | l2 info | ✅ |
| a18 multi | documents; services | = | l2 info | ⚠️ питання дослівно з choice l2 («What can people do with Diia?») → нова рамка (постер Kyrylo), ключ той самий |
| a19 choice | Inside Ukraine, yes… | = | l2 info | ✅ |
| a20 gaps | on; online | = | l2 info | ✅ |
| a21 pick | [in] | = | l2 | ✅ |
| a22 gaps | online; on; on | = | l2 | ✅ |
| a23 gaps | voice message; group chat | = | l2 | ✅ |
| a24 build | Always check the source before you share a story. (+ Before…) | = | l2 | ✅ |
| a25 gaps | online; viral; fake news; facts | = | l2 | ✅ |
| a26 gaps | snows; finish | = | l3 | ⚠️ «If you finish early, you can call me.» — приклад l3 info дослівно → «…you can come to the park with us» |
| a27 build | If the bus is late, I’ll walk to school. | = | l3 | ✅ (кома в плитці, «Start with if») |
| a28 choice | maybe, not sure | = | l3 «will, might, could, can» | ✅ |
| a29 gaps | rains; leave | = | l3 «unless again» | ✅ |
| a30 pick | [doesn’t come] | = | l3 | ✅ |
| a31 word | crashes | = | l3 | ✅ |
| a32 gaps | rains; might | = | l3 | ⚠️ «If it rains, we’ll stay in the hut» — приклад l3 info з тим самим ключем → «we’ll play cards in the hut» |
| a33 build | Unless the train is late, we’ll be home by eight. | = | l3 | ✅ |
| a34 gaps | are; can; rains; wait | = | l3 | ✅ |
| a35 gaps | had; lived | = | l4 | ✅ |
| a36 choice | If I had a horse… | = | l4 | ✅ |
| a37 gaps | works; had | = | l4 | ✅ |
| a38 choice | would be able to | = | l4 «would, could, might» | ✅ |
| a39 pick | [wouldn’t wear] | = | l4 «Imagined: if … not» | ✅ |
| a40 word | were / was | = | l4 word | ✅ |
| a41 build | If I lived in London, I’d visit the National Gallery every week. (+ every week I’d…) | = | l4 | ✅ |
| a42 gaps | could; had | = | l4 | ✅ |
| a43 gaps | were; would visit; finish | = | l4 | ✅ (was не варіант) |
| a44 gaps | were; wouldn’t | = | l5 | ⚠️ друге речення повторювало a52 (play games till midnight) → «lend your laptop to anyone» |
| a45 word | wouldn’t / would not / shouldn’t / should not | = | l5 word (BrE shouldn’t) | ✅ (рамка нова) |
| a46 pick | [will] | = | l5 | ⚠️ «back up the photos first. Then I’d delete the old videos» — рамка фіналу l5 з тим самим ключем (would) → «save your photos on a USB stick. Then I’d delete them from your phone» |
| a47 match | 4 пари | = | l5 | ⚠️ пара «…wants my password → I wouldn’t answer if I were you» дослівно з match l5 → «I wouldn’t send it to them if I were you», steps підправлено; другої пари немає |
| a48 choice | I hadn’t thought of that! | = | l5 | ✅ |
| a49 gaps | makes; try; thought | = | l5 | ✅ |
| a50 gaps | were; wouldn’t | = | l5 | ✅ |
| a51 build | If I were you, I’d switch off the notifications at night. | = | l5 | ❌ «If I were you, at night I’d switch off the notifications» складається з плиток, граматичний (паралель до a41, де такий порядок у ключі), а в ключі його не було → додано |
| a52 gaps | wouldn’t; were; would read | = | l5 | ✅ |
| a53 gaps | advantage; disadvantage | = | l6 | ✅ |
| a54 match | 4 пари | = | l6 | ✅ |
| a55 gaps | argue; view; depends; on | = | l6 | ✅ |
| a56 choice | find information quickly | = | текст | ✅ |
| a57 multi | copy homework; fake news | = | текст | ✅ |
| a58 choice | robots help but can’t do the jobs | = | текст | ✅ |
| a59 gaps | that; benefit | = | l6 | ✅ |
| a60 order | argue → main advantage → another benefit → on the other hand → to sum up | = | l6 order | ✅ |
| a61 build | One disadvantage is that fake news can go viral. | = | l6 | ✅ (1 порядок) |

**Умовні речення:** will / might / could / can ніде не протиставлені в одному пропуску; значення перевіряють choice a28 і a38 ✅. would у first conditional хибним варіантом не стоїть ✅. Пастки: will після if / unless (a26, a29, a31–a34), not після unless (a29, a30), will у second conditional (a43, a46, a52), would в if-частині (a39, a43) ✅. were / was — обидва в ключі `word` a40; у `gaps` was поруч із were не стоїть ✅. unless — лише в реальних умовах ✅. **Друга правильна відповідь:** знайдено лише a51 (виправлено). a16 has gone уже в ключі. **`word`** без кінцевого `.!?` ✅. **hint** ключа не видає ✅. Правдивих тверджень у ролі «помилки» немає ✅.

## 4. Форми, наголос, лексика, BrE, авторське право
- **Наголос (curl у цій сесії).** CD https://dictionary.cambridge.org/dictionary/english/<word>: laptop «ˈlæp.tɒp», install «ɪnˈstɔːl», keyboard «ˈkiː.bɔːd», computer «kəmˈpjuː.tə», printer «ˈprɪn.tə», hardware «ˈhɑːd.weə», webcam «ˈweb.kæm», microphone «ˈmaɪ.krə.fəʊn», desktop «ˈdesk.tɒp». OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word>: /ˈlæptɒp/, /ɪnˈstɔːl/, /ˈkiːbɔːd/, /kəmˈpjuːtə(r)/, /ˈprɪntə(r)/, /ˈhɑːdweə(r)/, /ˈwebkæm/, /ˈmaɪkrəfəʊn/, /ˈdesktɒp/. UK і US наголос однаковий. У кожному наборі є слово з наголосом на 2-му складі ✅.
- **Вирази:** go viral — CD https://dictionary.cambridge.org/dictionary/english/viral «go viral … Within days the film clip went viral». shouldn’t … if I were you — CD https://dictionary.cambridge.org/dictionary/english/should «UK (also would) used after "I" when giving advice: I shouldn't worry about it if I were you» (a45) ✅.
- **Лексика** (`bin/lex.mjs` проти g4–e10s5 і e10s6 до уроку вправи): скрипт позначив лише launch, depend і horse. Це форми слів, які є в уроках (launched, depends, horses у e4s2/e5s1). Після правок нових слів немає (cards, lend, park є в раніших уроках). Слів із пізніших уроків розділу немає ✅.
- **BrE, без звуку:** flat, mum, program у значенні комп’ютерної програми — CD https://dictionary.cambridge.org/dictionary/english/program «A2 a series of instructions that can be put into a computer… computer program» ✅. AmE, IPA, A/B/C немає ✅. `keepCase` не вжито ✅.
- **Копії рамок** (6-грами, `bin/ngram.mjs`): крім виправлених a18, a26, a32, a46, a47 збігаються лише шаблонні інструкції, сам предмет уроку (If I were you, I’d…, Some people argue that…, The main advantage is that…) і факт Diia ✅.
- **Авторське право** (WebSearch у лапках):

| Фрагмент | Запит | Результат |
|---|---|---|
| a57 «On the other hand, there is a lot of fake news online, so you must check sources» | "there is a lot of fake news online, so you must check sources" | збігу немає |
| a58 «a robot can’t be kind to a patient like a nurse can» | у лапках | збігу немає |

## 5. Правки (зроблені)
1. a51: до `answer` додано «If I were you, at night I’d switch off the notifications.».
2. a18: body → «Kyrylo is making a poster about Diia for the club magazine. Which things can people do with it?».
3. a26: «you can call me» → «you can come to the park with us».
4. a32: «we’ll stay in the hut» → «we’ll play cards in the hut».
5. a44: друге речення → «I {*wouldn’t|won’t} lend your laptop to anyone if I were you.».
6. a46: «I [will] back up the photos first. Then I’d [!delete] the old videos.» → «I [will] save your photos on a USB stick. Then I’d [!delete] them from your phone.».
7. a47: «I wouldn’t answer if I were you.» → «I wouldn’t send it to them if I were you.» (і steps).
8. `status: "verified"`, `meta.factcheck`, рядок статусу в шапці.

`node tools/validate.mjs --pool pe10s6` — 0 помилок, 0 попереджень; `personalization-qa --pool pe10s6` — 61 вправа, 6 уроків, без помилок; `euphony --pool pe10s6` — без зауважень. test-answer-ui не запускав: Python-модуля playwright у контейнері немає, тож прогін буде в CI.
