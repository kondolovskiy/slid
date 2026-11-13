# Верифікація revise-world-w8s5 — w8s5 «Доба Просвітництва» (новий w8s5l7, змінені l2, l6, eyebrow l1, l3–l5)

Верифікатор: verifier-revise-world-w8s5, 2026-11-12. Скіл content-verify. Автора не бачив; зміни звірено з `git diff bbb420a HEAD -- content/world/g8-w8s5.js` (останній стан до задачі → поточний).

**Вердикт по розділу: придатний.** l2, l6, l7 → `verified`; l1, l3, l4, l5 лишаються `verified` (змінено лише eyebrow «Розділ 5» → «Розділ 6», перевірено diff-ом). Правок верифікатора — 5 (позиції правильних варіантів, D-016) + 3 статуси.

## Обсяг змін (перевірено diff-ом)
- Шапка: коментар, `weeks: [30, 35]`, +4 `credits`.
- l1, l3, l4, l5: **лише** `eyebrow` першого екрана (жодних інших рядків у цих уроках diff не зачіпає) — факти, на які спираються dgw8/dgw9, незмінні.
- l2: е3 — нове речення-«пригадай»; три правки милозвучності («вівтар із вогнем», «автономію та», «автономії та»). Відповіді ті самі.
- l7: новий урок, 10 екранів.
- l6: нове «Питання 6» (класицизм), `pre` у всіх 7 завданнях, правки милозвучності, +1 `learned`.

## 1. Факти

| Твердження (екран) | Джерела, відкриті в цій сесії | Вердикт |
|---|---|---|
| l2 е3: Фрідріх II і Марія Терезія — суперники у війнах за спадщину (мн.) | https://en.wikipedia.org/wiki/War_of_the_Austrian_Succession (Пруссія Фрідріха II проти Марії Терезії, Сілезія, грудень 1740); https://en.wikipedia.org/wiki/War_of_the_Bavarian_Succession (1778–1779: Фрідріх II проти Габсбургів — Йосиф II, співправитель Марії Терезії) | ✅ |
| l7 е1: «Багата парижанка» пані Жоффрен, гості, читання п'єси Вольтера, погруддя Вольтера посередині | https://commons.wikimedia.org/wiki/File:Salon_de_Madame_Geoffrin.jpg (читання «L'Orphelin de la Chine», гості довкола погруддя Вольтера); https://en.wikipedia.org/wiki/In_the_Salon_of_Madame_Geoffrin_in_1755 ; https://en.wikipedia.org/wiki/Marie_Th%C3%A9r%C3%A8se_Geoffrin (Париж, статки чоловіка); погруддя видно на зображенні | ✅ |
| l7 е1 cap: Лемоньє, 1812 р., «сцену художник уявив майже через 60 років», Мальмезон | Commons (вище: «Lemonnier/f. 1812», Мальмезон MM 59.3.1; «Artistic license has been taken» щодо складу гостей; Lough 1991 — випадкова група діячів 1740–1780); en.wiki (1812, Мальмезон); WebSearch — Лемоньє (1743–1824) 1755 р. мав 12 років. Відповідь авторові: **так, сцена уявна** — формулювання cap коректне й обережне | ✅ |
| l7 е1: 1759 р. уряд заборонив «Енциклопедію» | опора — w8s5l1 е1 (verified, рядок 106 файлу); внутрішнє посилання | ✅ |
| l7 е3: салони — вечори в приватному домі; Жоффрен щотижня приймала письменників і вчених | https://en.wikipedia.org/wiki/Marie_Th%C3%A9r%C3%A8se_Geoffrin (понеділок — митці, середа — літератори); https://encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/geoffrin-marie-therese-marie-ther (Mondays and Wednesdays; men of letters, Diderot); Ладиченко 2025, с. 154 («салони – приватні будинки») https://www.geneza.ua/sites/default/files/ebooks/%D0%9B%D0%B0%D0%B4%D0%B8%D1%87%D0%B5%D0%BD%D0%BA%D0%BE_%D0%92%D1%81%D0%B5%D1%81%D0%B2%D1%96%D1%82_%D1%96%D1%81%D1%82%D0%BE%D1%80%D1%96%D1%8F_%D0%9F_8_%28073-24%29_S.pdf | ✅ |
| l7 е3: у кав'ярнях читали газети й сперечалися | Ладиченко, с. 154 (кав'ярні — осередки суспільного життя, новини) — URL вище; https://en.wikipedia.org/wiki/Age_of_Enlightenment (вступ: «literary salons, coffeehouses, Masonic lodges») | ✅ |
| l7 е3: назва й символ (циркуль і кутник) — від середньовічних цехів будівничих | Щупак 2025, с. 138 (назва від цехових майстрів, англ. mason — каменяр) https://znayshov.com/FR/47482/vsesv_istor_8_Shupak_2025.pdf ; Ладиченко, с. 145 (назву, ложі, статут і символи запозичили від цехових майстрів); https://museumfreemasonry.org.uk/node/976 (символ — square and compasses, інструменти каменярів); https://en.wikipedia.org/wiki/Square_and_Compasses | ✅ |
| l7 е3: «За традицією, 1717 р. чотири лондонські ложі утворили Велику ложу» | https://en.wikipedia.org/wiki/Premier_Grand_Lodge_of_England («Officially… 24 June 1717… four existing Lodges»); https://www.history.com/this-day-in-history/june-24/1st-masonic-grand-lodge-formed-in-london (four lodges, 24.06.1717); https://en.wikipedia.org/wiki/Anderson%27s_Constitutions ; Щупак, с. 138 («У 1717 р. лондонські ложі… утворили… Велику ложу Англії»). Відповідь авторові: **«за традицією» лишити** — дата офіційна й підручникова, але має лише пізнє джерело (див. наступний рядок) | ✅ |
| l7 е3 note: про 1717 розповідає лише книжка Андерсона 1738 р., через 21 рік; протоколів немає; частина істориків сумнівається | https://www.quatuorcoronati.com/wp-content/uploads/2018/01/1717-And-All-That-Prescott-Sommers.pdf (розповідь «appears for the first time» у Constitutions 1738, «nearly 21 years after»; «no contemporary references… between 1717 and 1721»; автори схиляються до 1721); en.wiki Premier GL («lack of minutes») | ✅ |
| l7 е3: «брати», розум і доброчинність, таємний обряд прийому | Щупак, с. 138 (ложі — таємні організації, моральне самовдосконалення, братерський союз); Ладиченко, с. 145 (наука й розум, братський союз) | ✅ |
| l7 е5: статут лож 1723 р. забороняв суперечки про віру й політику | https://www.freemasonryresearchforumqsa.com/andersons-constitutions.php («any Quarrels about Religion, or Nations, or State Policy»; «resolv'd against all Politics»); https://www.universalfreemasonry.org/en/encyclopedia/quarrels (Constitutions 1723, p. 54) | ✅ |
| l7 е5: в американських ложах — і прихильники, і противники незалежності | https://en.wikipedia.org/wiki/Freemasonry_in_the_United_States (патріоти Вашингтон, Франклін…; лоялист сер Джон Джонсон, провінційний великий майстер Нью-Йорка); https://encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/masonry-america (частина «stayed loyal to Britain»; York: масонство як інституція не відіграло явної ролі) | ✅ |
| l7 е6: класицизм — «від латинського «зразковий»» | ЕСУМ на goroh.pp.ua https://goroh.pp.ua/Етимологія/класицизм (класицизм «зводиться до латинської моделі classicus „…належний до першого класу, зразковий“»); Щупак, с. 138 («від лат. classicus — зразковий»). СУМ на slovnyk.ua (https://slovnyk.ua/index.php?swrd=класицизм) етимології не подає. Ладиченко «від італ.» — відкинуто: словник (D-041 — словник як арбітр) і Щупак дають латинське. Відповідь авторові: **латинське — правильно** | ✅ |
| l7 е6: взірець — античні Греція й Рим; розум і порядок; колони, симетрія, без завитків і позолоти | СУМ на slovnyk.ua (наслідування мистецтва Греції, Риму; суворі правила); Щупак, с. 138 (розум і правила, величне й суворе); https://en.wikipedia.org/wiki/Neoclassicism (simplicity and symmetry; reaction against Rococo ornamentation) | ✅ |
| l7 е6 note: класицизм — з XVII ст.; стиль 2-ї пол. XVIII ст. — неокласицизм | СУМ («XVII — початку XIX ст.»); Щупак (2-га пол. XVII–XIX ст.); en.wiki Neoclassicism (from c. 1760) | ✅ |
| l7 е6 cap: «Клятва Гораціїв», Давид, 1784–1785, Лувр; три брати присягають батькові битися за Рим | https://commons.wikimedia.org/wiki/File:Jacques-Louis_David,_Le_Serment_des_Horaces.jpg (1784/85, Лувр INV. 3692); https://en.wikipedia.org/wiki/Oath_of_the_Horatii (брати присягають батькові битися з Куріаціями за Рим; Тит Лівій) | ✅ |
| l7 е7: Тульчин, Потоцькі, 1780-ті, французький архітектор Жозеф Лакруа | Щупак, с. 140 (1781–1785, Лакруа); https://vin.gov.ua/news/ostanni-novyny/29412-tulchynskyi-palats-pototskykh-vkliuchat-v-perelik-obiektiv-velykoho-budivnytstva (1782–1785, французький архітектор Лакруа, класицизм); https://uk.wikipedia.org/wiki/Палац_Потоцьких_(Тульчин) (будували з 1782, Жозеф Лакруа, ранній класицизм) | ✅ |
| l7 е7: землі тоді належали Речі Посполитій | WebSearch → https://encyclopediaofukraine.com/pages%5CB%5CR%5CBratslavvoivodeship.htm (Брацлавське воєводство в Речі Посполитій 1569–1793); https://www.encyclopediaofukraine.com/pages%5CT%5CU%5CTulchyn.htm (Тульчин анексовано Росією 1793) — сторінки EoU показані пошуком; узгоджено з l5 (Поділля → Росія 1793) | ✅ |
| l7 е8: чай і кава звичні | Ладиченко, с. 154 («Звичними напоями стали чай і кава»); en.wiki Age of Enlightenment (coffeehouses) | ✅ |
| l7 е8: з 1710 р. порцеляну, яку раніше везли з Китаю, роблять у Мейсені | https://en.wikipedia.org/wiki/Meissen_porcelain (виробництво з 1710; до того — китайська й японська експортна порцеляна); https://www.dpma.de/english/our_office/about_us/history/30yearsofgermanunity/eastbrands/crossed_swords/index.html («In 1710, August the Strong founded the first European porcelain manufactory»); Ладиченко, с. 154 | ✅ |
| l7 е8: моду задавав французький двір; чоловіки — перуки, часто напудрені | https://blog.nationalmuseum.ch/en/2023/02/the-power-and-pomp-of-the-wig/ (перуки — спершу мода французького двору, далі по Європі; з бл. 1700 пудрили); https://en.wikipedia.org/wiki/1750%E2%80%931775_in_Western_fashion (wigs, hair powdered; French elaborate court dress); Ладиченко, с. 155 (Роза Бертен — «міністр моди» французької королеви) | ✅ |
| l7 е8: знатні жінки — шовкові сукні із широкою спідницею на каркасі | https://en.wikipedia.org/wiki/Pannier_(clothing) (каркас розширював спідницю; з Франції по Європі; придворна мода); Ладиченко, с. 155 (роброн — дуже широка спідниця); en.wiki 1750–1775 (silk) | ✅ |
| l7 е8: 1783 р. портрет королеви в білій муслиновій сукні обурив — схожа на нижню сорочку, портрет зняли з виставки | https://fashionhistory.fitnyc.edu/1783-vigee-le-brun-antoinette-chemise/ (removed from the Salon of 1783; resembled the chemise undergarment; imported cotton muslin); https://en.wikipedia.org/wiki/Marie_Antoinette_with_a_Rose (visitors shocked; removed) | ✅ |
| l7 е9: «з трояндою» написано швидко на заміну; шовк і мереживо; cap — 1783, Версаль | en.wiki Marie Antoinette with a Rose (швидко написала заміну; шовкова сукня, перли; Версаль); FIT (replaced by… silk robe trimmed with lace); Commons https://commons.wikimedia.org/wiki/File:Vig%C3%A9e-Lebrun_Marie_Antoinette_1783.jpg (1783, Версаль MV 3893) | ✅ |
| l6 Q6 fbText: Тульчин — у стилі класицизму | ті самі джерела, що е7 | ✅ |

## 2. Зображення (ліцензії, звірено зі сторінками Commons)

| Файл | Commons | Вердикт |
|---|---|---|
| salon-geoffrin-lemonnier.jpg | Лемоньє († 1824), 1812, Мальмезон MM 59.3.1; PD-Art / PD-old-100 — збігається з `credits` | ✅ |
| oath-horatii-david.jpg | Давид († 1825), 1784/85, Лувр INV. 3692; PD-Art | ✅ |
| tulchyn-palace.jpg | Автор **Roman Brechko**, користувач **Rbrechko**; знято 23.06.2013; **CC BY-SA 4.0**; WLM 2016 (Україна); пам'ятка 05-243-0076. `credits`: «Роман Бречко (Rbrechko)», «CC BY-SA 4.0», URL сторінки файлу — атрибуція повна; вимога «indicate if changes were made» — зменшена мініатюра, зміни змісту немає. Будівля 1780-х — свобода панорами не потрібна | ✅ |
| marie-antoinette-rose-1783.jpg | Віже-Лебрен († 1842), 1783, Версаль MV 3893; PD-Art | ✅ |

Примітка: Commons описує сукню як robe à l'anglaise, FIT — robe à la française; в уроці фасон не названо («шовк і мереживо») — розбіжність не зачіпає.

## 3–4. Завдання: власне розв'язання й опора (D-019)

Розв'язував, не дивлячись на `correct`, потім звірив — збіг у всіх.

| Завдання | Моя відповідь | Звідки відповідь | Вердикт |
|---|---|---|---|
| l2 (зміни лише в е3, текстовий екран; відповіді l2 не змінено) | — | — | ✅ |
| l7 е2 choice `hyp` | — | здогадка перед теорією, не оцінюється | ✅ |
| l7 е4 sort (5 карток) | салон: господиня; вечір у приватному домі · кав'ярня: кава й газета · ложа: циркуль і кутник; таємний обряд | е3 (усі ознаки названо) | ✅ |
| l7 е5 choice crit | «клуби для бесід, а не таємний уряд» | дані на самому екрані (статут 1723, люди з протилежними поглядами); «без обрядів» суперечить е3 і першому реченню екрана | ✅ |
| l7 е7 multi link | колони; симетрія | е6 (колони, симетрія, без завитків і позолоти) + фото (веж зі шпилями немає) | ✅ |
| l7 е9 choice src | шовк і мереживо | е8 (муслиновий портрет обурив, його зняли) + фото (блискучий шовк, мереживо, перли, пір'я) | ✅ |
| l7 е10 multi | салони/кав'ярні; ложі й «брати»; класицизм — античність | е3, е5, е6, е8 («керували королями» — е5; «мода пишнішою» — суперечить е8) | ✅ |
| l6 Q1–Q5, Q7 (зміст не змінено; додано `pre`) | як раніше | l1, l2, l3, l4, l5; хронологія — l1/l4/l5, `pre: w8s5l4` | ✅ |
| l6 Q6 choice «Що таке класицизм?» `pre: w8s5l7` | античні Греція й Рим | l7 е6 (і е7); дистрактори (пагоди, гострі вежі) відкидаються з е6–е7 | ✅ |

`pre` у фіналі: у кожному з 7 оцінюваних завдань, id уроку теми (style/common.md); Q7 (хронологія, події l1, l4, l5) → `w8s5l4` — прийнятно. Фінал: 6 тем + хронологія = 7 завдань при 7 уроках розділу — у межах D-047/D-048 («до 7, якщо уроків ≥ 7»).

## 5. Педагогіка й вік
- Проблема на е1 (вітальня, заборона «Енциклопедії»), здогадка, теорія після неї; пояснення «чому» у `fbText`.
- Масони — без конспірології: окреме завдання «факт чи чутка», висновок джерелами. Добре.
- Підказки не видають відповіді: е5 hint — навідне питання; е7 — «пригадай, що любили / що відкидали»; е9 — «яка тканина блищить»; е10 — «згадай статут і портрет». Заголовки не підказують.
- Вікових ризиків немає; портрет Марії-Антуанетти без натяків.
- l2 «пригадай» самодостатній (без `requires` на ненаписаний w8s6) — коректно.

## 6. Стиль і прогін
- `node tools/validate.mjs --section w8s5` — 0 помилок, 0 попереджень (до й після правок); `--diag dgw8` — 0/0; `--diag dgw9` — 0/0.
- `node tools/euphony.mjs --subject world --section w8s5` — 28 підказок, **жодної в l2, l6, l7**; усі в незмінених verified l1, l3–l5 (старі; напр. l5 е10 «Галичина зі Львовом» → краще «із Львовом» / «і Львів») — поза задачею, рекомендація на майбутній style-прохід.
- `node tools/stats.mjs --subject world` — l7: 10 екранів, частка завдань 0.5, maxRead 74, без прапорців; l6: 8 екранів, 0.88.
- `python3 tools/playtest.py --section w8s5` — **не запущено**: у контейнері немає Python-модуля playwright (ставити заборонено) → прогін у CI (job `browser`) після build оркестратора.

## 7. Правки верифікатора (зроблено)
D-016 (рушій не перемішує варіанти): у l7 обидва `choice` мали `correct: 0`, обидва `multi` — правильні першими підряд; у l6 нове Q6 — 0 (разом із Q1, Q4 — 3 з 5 на позиції 0).
1. l7 е5 choice: правильний варіант → позиція 2 (`correct: 2`).
2. l7 е7 multi: порядок варіантів перемішано → `correct: [1, 3]`.
3. l7 е9 choice: правильний → позиція 1 (`correct: 1`).
4. l7 е10 multi: → `correct: [0, 2, 4]`.
5. l6 Q6 choice: правильний → позиція 1 (`correct: 1`); позиції choice у фіналі тепер 0, 1, 0, 2, 1.
Тексти варіантів, `fbText`, `hint` не змінено (на позиції не посилаються).
Статуси: w8s5l2, w8s5l7, w8s5l6 → `verified`.

## Рекомендовано (не блокує)
- euphony у незмінених l1, l3–l5 (див. §6) — style-sync world 8.
- Щупак, с. 138 пише, що до Великої ложі Франції «увійшли Вольтер, Д. Дідро, Ж. д'Аламбер, Ж.-Ж. Руссо» — у цій сесії не перевірено й виглядає сумнівно (автор задачі теж відзначив розбіжність щодо Вольтера). У w8s5l7 цього немає — не додавати з підручника без двох незалежних джерел.

## Вердикт по уроках
| Урок | Статус |
|---|---|
| w8s5l1 | verified (лише eyebrow) |
| w8s5l2 | **verified** |
| w8s5l3 | verified (лише eyebrow) |
| w8s5l4 | verified (лише eyebrow) |
| w8s5l5 | verified (лише eyebrow) |
| w8s5l7 | **verified** |
| w8s5l6 | **verified** |

Людині: нічого блокувального. `approved` не ставив; build не запускав (index.html/sw.js/manifest — оркестратору); playtest — у CI.
