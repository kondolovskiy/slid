---
claimed_from: todo
claimed_at: 2026-11-04T13:37:19.857Z
id: write-world-w9s4
type: write-section
subject: world
grade: 9
section: w9s4
weeks: [22, 28]
status: done
claimed_by: writer-write-world-w9s4
created: 2026-11-03
depends_on: [write-world-w7s1]
---
# Написати розділ «Америка й Азія в XIX ст.» (Всесвітня історія, 9 клас)

## Навіщо (з плану, можна уточнити)
Щоб розуміти, як Латинська Америка здобула незалежність, США пережили громадянську війну, а Японія — модернізацію.

## Теми уроків (з плану)
1. Незалежність Латинської Америки
2. Громадянська війна в США і скасування рабства
3. «Опіумні» війни і Китай
4. Доба Мейдзі в Японії
5. Колоніальний поділ Африки
6. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md і скіл автора `.claude/skills/content-author/SKILL.md`
- style/common.md, style/world.md, style/profiles.json
- memory/long/glossary/world.md і memory/long/facts/world.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: `content/world/g7-w7s1.js` (verified) і style/world.md «Еталони».

## Програма й вимоги (оркестратор, D-043/D-044)
- Програма: Гісем О. В. та ін., модельна «Всесвітня історія. 7–9 класи» (наказ МОН № 1449 від 27.11.2023) — https://znayshov.com/FR/46261/Vsesvitnya.istoriya.7-9%20kl.Hisem.ta.in.30.11.2023.pdf (PDF; текст — `pdftotext`, середня колонка «Зміст навчального предмета»).
- **Новий предмет** `world`: content/subjects/world.js (навички src, time, geo, crit, pol, soc, cult, link), план content/world/plan.js, **style/world.md** (+ style/hist.md — усе діє), glossary/world.md, facts/world.md (поки порожній — нові факти лише з ≥ 2 джерел, з URL у нотатках і FACT в inbox).
- Файл: `content/world/g<клас>-<id>.js`, зображення — `img/world/<id>/`; id уроків `<id>l1…`, значок boss — унікальний id. D-027: ≥ 1 справжнє `img` у кожному уроці (скіл `hist-images`; Commons — `thumb.wikimedia.org`, ≤ 2 фото-агенти одночасно).
- У розділі ≥ 1 завдання `sk: "link"` (подія світу ↔ подія на українських землях, уже відома з «Історії України» 7 кл. або подана на екрані).
- Тимчасові файли — `<scratchpad>/<task-id>/`. Build не запускай. Не чіпай чужі файли, `content/math`, `app/`.

## Результат
- Файл `content/world/g9-w9s4.js` з `SLID.section("world", { id: "w9s4", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/world/w9s4/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section w9s4` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

### Зроблено (writer-write-world-w9s4, 2026-11-04)
- `content/world/g9-w9s4.js` — 6 уроків (draft), значок `worldbeyond` «Мандрівник XIX століття»: l1 «Крик біля струмка» (Латинська Америка), l2 «Дім, поділений навпіл» (громадянська війна в США), l3 «Пароплав проти джонок» («опіумні» війни), l4 «Паротяг у Йокогамі» (Мейдзі), l5 «Велетень над континентом» (поділ Африки), l6 «Атлас далеких країн» (boss: 5 завдань — по одному на урок — + хронологія; шаблон w7s1l5).
- `link`: l2 #9 (number: Маніфест 19.02.1861 → 13-та поправка 1865 р., опора — «Пригадай» на тому ж екрані, hist g9s3) і l6 Q2 (choice: схожість і відмінність 1861 / 1863–1865). Обидва мають питання в тілі.
- validate --section w9s4: 0 помилок, 0 попереджень; stats --subject world: без прапорців «нетипово для сім'ї»; playtest --section w9s4 у копії дерева (build у копії) — 6/6.
- Build у спільному дереві не запускав: потрібні build (новий файл + 8 jpg у img/world/w9s4/) і playtest оркестратору.

### Зображення (D-027) — урок → файл → ліцензія → сторінка файлу
- l1, ×2 — independence-or-death-1888.jpg — Педру Амеріку, «Незалежність або смерть!», 1888, Музей Пауліста 1-19158-0000-0000 — PD (автор † 1905) — https://commons.wikimedia.org/wiki/File:Pedro_Am%C3%A9rico_-_Independ%C3%AAncia_ou_Morte_-_Google_Art_Project.jpg
- l2 — slave-population-map-1861.jpg — Е. Гергесгаймер, видав Г. С. Грем, вересень 1861, LOC G3861.E9 1860 .H4 — PD-US — https://commons.wikimedia.org/wiki/File:Map_showing_the_distribution_of_the_slave_population_of_the_southern_states_of_the_United_States._Compiled_from_the_census_of_1860_LOC_99447026.jpg
- l2 — emancipation-proclamation-p2.jpg — Прокламація, арк. 2 з 5, NARA (NAID 299998, Flickr U.S. National Archives) — PD-USGov (FlickreviewR 12.01.2018) — https://commons.wikimedia.org/wiki/File:Emancipation_Proclamation,_01-01-1863_(Page_2_of_5)_(3695344148).jpg ; переклад рядків на екрані звірено з самим аркушем («Now, therefore I, Abraham Lincoln… as Commander-in-Chief… as a fit and necessary war measure for suppressing said rebellion»).
- l3 — nemesis-1841.jpg — Е. Дункан, акватинта 1843 (за власною картиною), NMM PAH8893 — PD — https://commons.wikimedia.org/wiki/File:Destroying_Chinese_war_junks,_by_E._Duncan_(1843).jpg (RMG: https://prints.rmg.co.uk/products/nemesis-destroying-chinese-junks-in-ansons-bay-1841-792)
- l3 — china-cake-1898.jpg — Анрі Меєр, «Пті журналь», 16.01.1898, BnF Gallica bpt6k716261c — PD — https://commons.wikimedia.org/wiki/File:China_imperialism_cartoon.jpg . Перевірено за зображенням: ножі тримають Вікторія, Вільгельм II, Микола II; самурай не тримає ножа (меч лежить на столі), Маріанна — без ножа. Опис Commons («carved by … and a samurai») для самурая неточний — завдання спирається на зображення.
- l4, l6 — yokohama-railway-hiroshige3.jpg — Утаґава Хіросіґе III, LOC cph.3b52234 — PD — https://commons.wikimedia.org/wiki/File:Yokohama_Railway_1874.jpg ; дата: Commons — 1874, Токійська міська бібліотека — «бл. 1874», дилерський опис LOC-копії — 1872 → у cap «1870-ті рр.».
- l4, l6 — constitution-1889-chikanobu.jpg — Тойохара Тіканобу, «憲法発布略図», 1889 — PD (автор † 1912); джерело на Commons — оригінальний відбиток завантажувача (без інвентаря музею) — https://commons.wikimedia.org/wiki/File:Kenpohapu-chikanobu.jpg
- l5 — rhodes-colossus-1892.jpg — Е. Л. Самборн, «Панч», 10.12.1892 — PD (автор † 1910) — https://commons.wikimedia.org/wiki/File:Punch_Rhodes_Colossus.png
- Не взято: свиток British Museum 2013,3002.1 «Місія Перрі» (на Commons суперечливі ліцензії: PD-тег і CC BY-NC-SA 4.0 від BM); «Signing of the Treaty of Nanking» (файлу немає); натуралістичних фото війни (Геттісберг, Таку) свідомо не брали.

### Факти (≥ 2 джерела; Britannica з проксі — 403, тому другим джерелом — енциклопедії, архіви, музеї)
1. Креоли / уродженці Іспанії на найвищих посадах; 1808 — Наполеон скинув іспанського короля, креоли створили хунти «від імені короля». https://en.wikipedia.org/wiki/Spanish_American_wars_of_independence ; https://historicaltextarchive.org/sections/article/240-causation-and-the-spanish-american-independence-movements
2. Гаїті — незалежність 1.01.1804; держава, заснована колишніми рабами, без рабства; 1802 Наполеон відновив рабство (w9s1). https://en.wikipedia.org/wiki/Haitian_Revolution ; facts/world w9s1 (рабство 1794/1802, verified) — **друге незалежне джерело на 1.01.1804 у цій сесії окремо не відкривав — звірити верифікатору**
3. Ідальго, Долорес 16.09.1810 (День незалежності Мексики), страчений 1811; незалежність Мексики 1821 (Кордова 24.08, декларація 27/28.09). https://en.wikipedia.org/wiki/Grito_de_Dolores ; https://www.britannica.com/story/viva-mxico ; https://www.history.com/topics/mexico/struggle-for-mexican-independence-1
4. Сан-Мартін: перехід Анд січень–лютий 1817 (≈ 21 день), Чакабуко 12.02.1817, Чилі. https://en.wikipedia.org/wiki/Crossing_of_the_Andes ; https://www.casarosada.gob.ar/international/latest-news/50840-208-years-after-the-crossing-of-the-andes-the-beginning-of-a-liberating-deed
5. Аякучо 9.12.1824, Сукре; остання велика іспанська армія в Південній Америці (Кальяо — до 1826). Болівія — на честь Болівара (1825), «Визволитель». https://en.wikipedia.org/wiki/Battle_of_Ayacucho ; https://www.encyclopedia.com/humanities/encyclopedias-almanacs-transcripts-and-maps/ayacucho-battle ; https://www.ebsco.com/research-starters/military-history-and-science/battle-ayacucho
6. За Іспанією в Америці — Куба й Пуерто-Рико до 1898. https://en.wikipedia.org/wiki/Spanish_American_wars_of_independence (Spain retained Cuba and Puerto Rico until the Spanish–American War) ; https://www.brown.edu/Facilities/John_Carter_Brown_Library/exhibitions/spanishage/pages/push.html — **другого прямого джерела для формулювання «лише Куба й Пуерто-Рико» не знайдено — звірити верифікатору.**
7. Португальський двір у Ріо 1808; 7.09.1822 Іпіранга; 12.10.1822 — Педру I, Бразильська імперія. https://en.wikipedia.org/wiki/Independence_of_Brazil ; https://sport-histoire.fr/en/History/Timeline/brazil.php
8. Картина Педру Амеріку 1888, Флоренція, контракт 14.07.1886 з комісією пам'ятника незалежності; 66 років після події. https://en.wikipedia.org/wiki/Independence_or_Death ; https://ego-ploneui.uni-trier.de/en/mediainfo/pedro-americo-184320131903-independencia-ou-morte-o-grito-do-ipiranga-1888
9. Рабство в більшості іспано-американських республік скасоване в 1850-х; Бразилія — Золотий закон 13.05.1888 (остання в Америці). https://en.wikipedia.org/wiki/Spanish_American_wars_of_independence ; https://en.wikipedia.org/wiki/Lei_%C3%81urea ; https://www.herodote.net/13_mai_1888-evenement-18880513.php
10. Перепис 1860: 3 953 760 рабів («майже 4 млн»). https://en.wikipedia.org/wiki/1860_United_States_census ; https://sites.rootsweb.com/~altttp/census/1860/index.htm
11. Вибори 6.11.1860 (Лінкольн — проти поширення рабства на території); Південна Кароліна 20.12.1860 — перша; 11 штатів — Конфедерація; Самтер 12.04.1861; Аппоматтокс 9.04.1865 (Лі); Лінкольна поранено 14.04.1865, помер 15.04; ≈ 620 тис. загиблих вояків («понад 600 тис.»). https://www.battlefields.org/learn/articles/gathering-storm-secession-crisis ; https://www.nps.gov/kemo/learn/historyculture/wardeclared.htm ; https://www.britannica.com/summary/American-Civil-War-Timeline ; https://en.wikipedia.org/wiki/American_Civil_War . Позицію Лінкольна щодо територій підтвердило лише слабке джерело в пошуку — це загальновідома платформа республіканців 1860 р., верифікатору звірити (напр. https://www.battlefields.org/node/5023).
12. Прокламація 1.01.1863: лише штати-заколотники, не прикордонні штати й не частини Конфедерації під контролем Півночі; воєнний захід головнокомандувача; прийом чорношкірих до армії і флоту, ≈ 200 тис. служили. https://www.archives.gov/exhibits/featured-documents/emancipation-proclamation ; текст аркуша 2 (фото NARA на Commons)
13. 13-та поправка: Сенат 8.04.1864, Палата представників 31.01.1865, ратифікація 6.12.1865 (27 з 36 штатів). https://en.wikipedia.org/wiki/Thirteenth_Amendment_to_the_United_States_Constitution ; https://constitutioncenter.org/the-constitution/drafting-table/item/amendment-xiii
14. Маніфест 19.02.1861 — з hist g9s3 (facts/hist; формулювання «звільнив від кріпацтва селян Наддніпрянщини», без «в усій імперії»).
15. Кантон з 1757 — w8s4 (verified). Опій з британської Індії (Бенгал), контрабанда, срібло. https://en.wikipedia.org/wiki/Letter_to_Queen_Victoria ; https://visualizingcultures.mit.edu/opium_wars_01/ow1_essay04.html
16. Лін Цзесюй: Гуанчжоу 10.03.1839; знищення > 20 000 скринь у Хумені з 3.06.1839; лист королеві Вікторії 1839 (переказ: «Ви не хочете, щоб опій шкодив вашій країні, але везете цю шкоду в інші країни, як-от Китай»; опій «у ваших володіннях в Індії»), до королеви не дійшов. https://en.wikipedia.org/wiki/Letter_to_Queen_Victoria ; https://en.wikipedia.org/wiki/Lin_Zexu ; https://alphahistory.com/chineserevolution/lin-zexu-opium-trade-1839/ (403 з середовища) ; https://www.history.org.uk/files/download/30383/1759240920/Lesson_5_LIN_ZEXU_LETTER_TO_QUEEN_VICTORIA_1839.pdf . У листі Лін пише, що в Британії опій суворо заборонено, — це не так (у Британії опій тоді продавали вільно); тому цю фразу не перекладено.
17. «Немезида» — залізний пароплав Ост-Індської компанії, бій у затоці Енсона 7.01.1841 (Чуенпі). RMG PAH8893, акватинта Е. Дункана 30.05.1843. https://prints.rmg.co.uk/products/nemesis-destroying-chinese-junks-in-ansons-bay-1841-792 ; Commons (див. вище)
18. Нанкінський договір 29.08.1842: Гонконг, 5 портів (Гуанчжоу, Сямень, Фучжоу, Нінбо, Шанхай), контрибуція (сума в джерелах 20/21 млн дол. — на екрані «величезні гроші», без числа); нерівноправний договір. https://en.wikipedia.org/wiki/Treaty_of_Nanking ; https://visualizingcultures.mit.edu/opium_wars_01/ow1_essay04.html ; https://www.polyu.edu.hk/cus/nationaleducation/en/resource-library/gallery/understanding-modern-chinese-history
19. Друга «опіумна» війна 1856–1860 (Британія і Франція); пограбування й спалення Юаньмінъюаня — жовтень 1860 (дні в джерелах 7–9 і 18.10 — на екрані лише «у жовтні»); Пекінська конвенція 24.10.1860. https://visualizingcultures.mit.edu/opium_wars_02/ow2_essay05.html ; https://www.napoleon.org/en/History/mini_dossiers/files/477441.asp
20. Тайпінське повстання 1850–1864; «самопосилення» з 1861 р. https://en.wikipedia.org/wiki/Taiping_Rebellion ; https://www.encyclopedia.com/history/asia-and-africa/chinese-and-taiwanese-history/taiping-rebellion ; https://en.wikipedia.org/wiki/Self-Strengthening_Movement ; https://you.stonybrook.edu/chineseforeignpolicy/?p=24
21. Шимоносекський договір 17.04.1895: Тайвань і Пескадори — Японії. https://en.wikipedia.org/wiki/Treaty_of_Shimonoseki ; https://www.encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/shimonoseki-treaty
22. Карикатура Меєра 16.01.1898, Gallica bpt6k716261c (Commons); підписи на пирозі Kiao-Tcheou, Port-Arthur — видно на зображенні.
23. Перрі: Урага 8.07.1853, чотири кораблі (з них два пароплави — Саскуеханна, Міссісіпі; в одному джерелі «4 steam-powered» → на екрані «серед них — пароплави»); 31.03.1854 Канаґавський договір, два порти; самоізоляція до 1854 — w8s4. https://www.ndl.go.jp/modern/e/cha1/description01.html ; https://en.wikipedia.org/wiki/Convention_of_Kanagawa ; https://www.nippon.com/en/japan-topics/b06911
24. Йосінобу подав у відставку 9.11.1867; реставрація 3.01.1868; Муцухіто нар. 3.11.1852 (у січні 1868 — 15 р.); Мейдзі — «освічене правління»; Клятва з п'яти пунктів 6.04.1868 (знання шукати по всьому світу, щоб зміцнити державу). https://en.wikipedia.org/wiki/Meiji_era ; https://en.wikipedia.org/wiki/Emperor_Meiji ; https://www.britannica.com/place/Empire-of-Japan/Forging-a-national-identity
25. Скасування ханів 1871 (префектури з призначеними губернаторами); місія Івакури 1871–1873; залізниця Сімбасі — Йокогама 14.10.1872, 29 км; військова повинність 1873; Конституція 11.02.1889 (чинна з 29.11.1890), парламент, головна влада — імператора. https://en.wikipedia.org/wiki/Abolition_of_the_han_system ; https://www.britannica.com/place/Empire-of-Japan/The-emergence-of-modern-Japan ; https://en.wikipedia.org/wiki/Iwakura_Mission ; https://www.nippon.com/en/articles/-/12679 ; https://en.wikipedia.org/wiki/Meiji_Constitution
26. Африка: 1870 — ≈ 10 % під європейцями, 1914 — ≈ 90 %; незалежні — Ефіопія й Ліберія. https://en.wikipedia.org/wiki/Scramble_for_Africa ; https://britannica.com/event/Scramble-for-Africa (сніпет пошуку)
27. Берлінська конференція 15.11.1884 — 26.02.1885, Бісмарк, 14 держав, африканців не було; правило ефективної окупації узбереж; Конго — Леопольдові II; більшість кордонів — пізніше. https://archiv.diplo.de/arc-en/the-political-archive/general-act-2684414 ; https://en.wikipedia.org/wiki/Berlin_Conference ; https://www.sparknotes.com/history/europe-1871-1914/section5/
28. «Колос Родс», «Панч» 10.12.1892 (датований номер; в одному джерелі — вийшов 5.12), план телеграфу й залізниці Кейптаун — Каїр. https://en.wikipedia.org/wiki/The_Rhodes_Colossus ; https://omeka.drew.edu/exhibits/show/britishimperialismpoliticalcar/rhodescolossus
29. Адуа 1.03.1896, Менелік II розгромив італійців. https://www.iriemag.com/magazine/roots/roots-battle-of-adwa/ ; https://artsandculture.google.com/entity/m01kzl ; Ліберія — незалежність 26.07.1847, засновники — звільнені раби й вільні чорношкірі зі США (Американське товариство колонізації). https://en.wikipedia.org/wiki/History_of_Liberia ; https://www.history.com/this-day-in-history/liberian-independence-proclaimed
30. Ліки (хінін), річкові пароплави, скорострільна зброя як чинники поділу Африки; примусова праця на каучуку в Конго — загальновідомі в історіографії (Headrick, «Tools of Empire»), **окремо в цій сесії не звірено — верифікатору**.

### Спірне / для верифікатора
- l1: «Креоли … мали маєтки, але не мали влади» — узагальнення (частина креолів обіймала посади в кабільдо). Гаїті «держава колишніх рабів» — засновники також вільні кольорові.
- l2 #9 і l6 Q2: порівняння кріпацтва й рабства — свідомо «різні види неволі», без тверджень про продаж кріпаків.
- l3 «Хто ділить пиріг?»: у карикатурі стереотипне зображення китайця й японця — у fbText прямо сказано, що це зневажливий погляд європейської газети.
- l5: «Конго було під владою Бельгії» (1885–1908 — особисте володіння Леопольда II, з 1908 — колонія).
- Опори завдань: l1 #3 ← #2; l1 #5 ← #4; l1 #7 ← #4, #6, #8; l1 #9 ← #8 + cap/body; l2 #2 ← зображення; l2 #5 ← #3; l2 #7 ← #6 + переклад на екрані; l2 #9 ← той самий екран + #8; l3 #3 ← #2; l3 #5 ← лист на екрані; l3 #6 ← #4; l3 #8 ← ключ на екрані + зображення; l4 #5 ← #4; l4 #7 ← зображення; l4 #8 ← #6 + w9s2 (1830 повторено на екрані); l4 #9 ← зображення + текст екрана; l5 #4 ← #3; l5 #6 ← #5; l5 #7 ← #7 cap/body; l5 #9 ← #8; boss Q1–Q6 ← l1 #2, l2 #6/#8/#9, l3 #4, l4 #6, l5 #8, дати з уроків.

### Пропозиції (inbox)
- TERM: glossary/world — Педру I, Педру Амеріку, Мігель Ідальго, «Крик з Долорес», Симон Болівар (Визволитель), Хосе де Сан-Мартін, Антоніо Хосе де Сукре, Аякучо, Нова Іспанія, Сан-Домінго, креоли, метиси, хунти, метрополія; Авраам Лінкольн, Конфедеративні Штати Америки (Конфедерація), форт Самтер, Прокламація про звільнення, 13-та поправка; Лін Цзесюй, джонка, «Немезида», Нанкінський договір, нерівноправні договори, Тайпінське повстання, «самопосилення», Старий літній палац; Метью Перрі, «чорні кораблі», Мейдзі («освічене правління»), модернізація, префектура, Утаґава Хіросіґе III, Тойохара Тіканобу; Сесіль Родс, Берлінська конференція, Леопольд II, Менелік II, Адуа, Ліберія, Едвард Лінлі Самборн, Анрі Меєр.

### Верифікація (verifier-write-world-w9s4, 2026-11-04)
- Вердикт: усі 6 уроків — verified; звіт reports/verify/w9s4.md (39 тверджень з URL, 33 завдання розв'язано, опору перевірено).
- Правки: l1 Аякучо («останню велику… на континенті» → «головну… в Південній Америці»); l3 hint «Кого» → «Кому опій шкодить»; l4 «з цього розділу» → «з розділу про промисловий переворот»; status/meta.factcheck.
- Оркестратору: build + playtest --section w9s4; stats --subject world.
