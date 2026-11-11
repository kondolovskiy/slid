---
claimed_from: review
claimed_at: 2026-11-11T07:36:53.661Z
id: write-world-w10s3
type: write-section
subject: world
grade: 10
section: w10s3
weeks: [10, 13]
status: review
claimed_by: verifier-w10s3
created: 2026-11-10
---
# Написати розділ «Демократії між війнами» (Всесвітня історія, 10 клас)

## Навіщо (з плану, можна уточнити)
Щоб бачити, як США перейшли від «проспериті» до Великої депресії, як демократії Європи шукали відповідь на кризу та як кіно й радіо змінили повсякдення.

## Теми уроків (з плану)
1. США: доба «проспериті»
2. Велика депресія й «Новий курс» Рузвельта
3. Велика Британія й Франція: реформи й Народний фронт
4. Кіно, радіо, джаз: масова культура
5. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Специфіка 10–11 кл. (оркестратор, за верифікацією plan-world-g10-11)
- Програма — «Всесвітня історія. 10–11 класи» (рівень стандарту), наказ МОН № 698 від 03.08.2022, 1 год/тиждень; текст: https://edumedia-depot.gei.de/bitstreams/450c6016-4759-423a-b29e-2a263b384cac/download ; звірка розділів — reports/verify/plan-world-g10-11.md. Підручник 11 кл. — Щупак (2024) за КТП naurok (у звіті).
- Історія України 10–11 у «Сліді» — окремо (hist g10*/g11*): не дублюй, «Україна у світі» (`link`) — коротким екраном і посиланням на уроки hist. **hist g11s1 «Друга світова війна» переноситься в 10 кл. без зміни id** (curate-hist-coverage): для w10s7 можна спиратися на g11s1 (`requires` g11s1l1 — додай у файлі свого розділу).
- Чутливі теми (тоталітаризм, Голокост, Друга світова, Сребрениця, війна Росії проти України) — style/hist.md; дати й числа — facts/world.md, facts/hist*.md або джерело з URL. Термін «радянський» (як у hist; питання про «совєтський» — у глосарії, не змінюй).
- D-027: у кожному уроці ≥ 1 справжнє img (скіл hist-images; Commons — ≤ 2 фото-агенти одночасно).

## Прочитати перед роботою
- AGENTS.md і скіл автора `.claude/skills/content-author/SKILL.md`
- Скіл зображень `.claude/skills/hist-images/SKILL.md` і docs/IMAGES.md (D-027)
- style/common.md, style/world.md, style/profiles.json
- memory/long/glossary/world.md і memory/long/facts/world.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/world/g7-w7s1.js (еталон після верифікації; style/world.md → «Еталони»)

## Результат
- Файл `content/world/g10-w10s3.js` з `SLID.section("world", { id: "w10s3", ... })` — той самий id, що в плані
- У кожному уроці ≥ 1 справжнє `img` з відкритою ліцензією, з `cap` і `credits` (D-027; svg/fig не зараховуються; без img — помилка validate): файли в `img/world/w10s3/`, процедура — скіл hist-images
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [ ] `node tools/validate.mjs --section w10s3` — 0 помилок
- [ ] Кожен урок має ≥ 1 справжнє `img` з `cap` і `credits` (D-027) — validate не показує «урок без зображення img»
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

Build не запускай: під час паралельного запуску його запускає оркестратор, коли всі закінчили (AGENTS.md §4 п. 8); validate бачить новий файл і без нього. Лише якщо працюєш сам, не в паралельному запуску, — `node tools/build.mjs` наприкінці.

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

### Зроблено (w-write-world-w10s3, 2026-11-11)
Файл `content/world/g10-w10s3.js`, 5 уроків (усі `draft`): l1 «Автомобіль для кожного» (10 екр.), l2 «Від краху до „Нового курсу“» (10), l3 «Страйк, вибори, відпустка» (10), l4 «Кіно, радіо, джаз» (10), l5 boss «Подкаст „Між двома війнами“» (7, значок `interwar`).
`requires`: w9s2l3, w9s5l1 (з плану) + w10s2l2 (Ліга Націй; США поза нею — l1 екр. 5).
validate --section w10s3: 0 помилок, 0 попереджень; stats — уроки w10s3 без прапорців «нетипово для сім'ї»; euphony — лишились «і» перед паузою/зворотом («фото і що», «знову і знову») — свідомо.

### Зображення (img/world/w10s3/, усі з thumb.wikimedia.org, JPEG ≤ 960 px, ≤ 222 КБ)
- l1, l5: ford-assembly-line-1913.jpg — Commons File:Ford_assembly_line_-_1913.jpg, PD (NARA 1633486). На фото — магнето/маховики, не цілий авто (так і в завданні).
- l2: wall-street-crowd-1929.jpg — File:Crowds_gathering_outside_New_York_Stock_Exchange.jpg, AP 24.10.1929, PD-US-expired (до 1931). (Інший файл «Crowd outside nyse.jpg» — «PD US Gov» з плаката SSA, сумнівний — не брав.)
- l2: migrant-mother-1936.jpg — File:Lange-MigrantMother02.jpg, Д. Ланг для Resettlement Administration (з 1937 FSA), LOC fsa.8b29516, «no known restrictions» — https://guides.loc.gov/migrant-mother . Дата на Commons «6 March 1936», LOC — «1936 Feb. or Mar.» → у cap лише 1936.
- l4, l5: roosevelt-fireside-chat-1933.jpg — File:President_Franklin_D._Roosevelt_Broadcasting_his_First_Fireside_Chat…eaf235889….jpg, NARA 6728517, 12.03.1933, PD за NARA. **Не взято** File:Franklin_D._Roosevelt_having_a_fireside_chat…NARA_-_196760.jpg: підпис «28 April 1935», але на фото мікрофон ABC (мережа з 1945 р.) і рамка «The Roosevelt Story» (TOLA Productions, фільм 1947) — опис Commons хибний.
- l3: british-gazette-1926.jpg — File:The_British_Gazette_No_2.jpg, 6.05.1926, PD-UKGov (Warwick Digital Collections). Текст на сторінці (звернення Болдвіна) прочитано з самого скану.
- l3, l5: paris-strike-1936.jpg — File:Grévistes-métallurgie-usine-banlieue-Paris1936.jpg, Agence Meurisse, Gallica btv1b9028324s, PD-anon-70-EU.
- l4: jazz-singer-poster-1927.jpg — File:The_Jazz_Singer_1927_Poster.jpg, PD-US-expired (до 1931).
Пошук фото джазового оркестру 1920-х (King Oliver) — на Commons лише газетні вирізки; не брав.

### Факти з джерелами
1. Рухома лінія в Гайленд-Парку — жовтень 1913; ціна «Моделі Т» 850 → 260 дол.; «5 дол. на день» 1914 — https://www.fromtheroad.ford.com/us/en/articles/2021/highland-park--birthplace-of-moving-assembly-line ; 12,5 год → 93 хв (≈ 1,5 год), 260 дол. у 1925 — https://www.historyhit.com/ford-model-t-the-invention-of-the-worlds-first-affordable-car/ ; https://automotivehistory.org/ford-moving-assembly-line/ . Ціна 1908 р. у джерелах 825/850 — у тексті «спершу 850» (за Ford).
2. Кулідж, 17.01.1925, «The Press Under a Free Government», ASNE: «After all, the chief business of the American people is business» + «accumulation of wealth cannot be justified as the chief end of existence»; «business of America is business» — переказ — https://coolidgefoundation.org/resources/the-press-under-a-free-government/ ; https://blogs.loc.gov/inside_adams/2019/01/when-a-quote-is-not-exactly-a-quote-the-business-of-america-is-business-edition/ ; https://www.presidency.ucsb.edu/documents/address-the-american-society-newspaper-editors-washington-dc
3. «Сухий закон»: 18-та поправка чинна з 17.01.1920 (деякі джерела — 16.01 опівночі), 21-ша — 5.12.1933 — https://ebsco.com/research-starters/history/prohibition ; https://encyclopedia.com/education/news-and-education-magazines/prohibition-repealed-1920-1933
4. 24.10.1929 — 12 894 650 акцій; 29.10.1929 — 16 410 030 — https://www.history.com/topics/1929-stock-market-crash ; https://www.federalreservehistory.org/essays/stock-market-crash-of-1929 . Безробіття 1933 ≈ 25 % (BLS-реконструкція 24,9 %; оцінки 20–30 %) → «приблизно кожен четвертий працівник».
5. Гувер — проти прямої федеральної допомоги («dole»), покладався на благодійність і штати — https://courses.lumenlearning.com/wm-ushistory2/chapter/president-hoovers-response/ ; https://digfir-published.macmillanusa.com/hewittlawson2e/hewittlawson2e_ch22_5.html
6. Рузвельт: інавгурація 4.03.1933 («only thing we have to fear is fear itself»), банківські канікули з 6.03, перша радіобесіда 12.03.1933 — https://millercenter.org/node/38795 ; https://www.federalreservehistory.org/essays/great-depression . CCC 1933–1942, «майже 3 млн» — https://www.nps.gov/parkhistory/online_books/ccc/salmond/chap1.htm ; https://www.history.com/topics/new-deal/civilian-conservation-corps . Закон про соцзабезпечення 14.08.1935 — https://www.history.com/articles/social-security-history-fdr-new-deal (ssa.gov не відкрився — звірити).
7. США визнали СРСР 16.11.1933; мотиви — торгівля в депресію, стримування Японії — https://history.state.gov/milestones/1921-1936/ussr ; угода Рузвельта — Литвинова (en.wiki «Roosevelt–Litvinov Agreement»). Голодомор, «п'ять колосків», заборона виїзду, Джонс 29.03.1933 — з facts/hist №178 і уроку hist g10s4l2.
8. Загальний страйк 4–12.05.1926 (9 днів), 1,5–1,75 млн (оцінки до ~3 млн «за весь час»), гасло шахтарів, шахтарі ще ~6 міс. — https://phm.org.uk/blogposts/1926-general-strike/ ; https://www.kent.ac.uk/library/special-collections/our-exhibitions/mining-in-kent/history-of-mining-strikes ; https://www.unseenhistories.com/the-general-strike-of-1926-with-jonathan-schneer/
9. Британія 1928 — рівне виборче право з 21 р. — facts/world №35. Уряд національної єдності 24.08.1931 (розкол лейбористів через скорочення допомоги безробітним) — https://en.wikipedia.org/wiki/National_Government_(United_Kingdom) ; https://rgshistory.com/2019/03/28/political-crises-we-have-known-1-1931-and-all-that-part-one/
10. Франція: 6.02.1934 — заворушення ліг біля Палати депутатів → союз лівих (пакт SFIO–PCF 07.1934, Народний фронт 14.07.1935) — https://www.assemblee-nationale.fr/dyn/histoire/il-y-a-90-ans-le-front-populaire-et-les-lois-sociales-de-la-republique/une-france-en-crise ; https://www.herodote.net/6_fevrier_1934-evenement-19340206.php . Вибори 26.04 і 3.05.1936; Блюм — 4.06.1936; комуністи підтримали без міністрів; три жінки (Брюншвіг, Жоліо-Кюрі, Лакор) — https://www2.assemblee-nationale.fr/14/evenements/2016/80eme-anniversaire-de-la-victoire-du-front-populaire-3-mai-2016/le-nouveau-gouvernement/composition-du-gouvernement ; https://www.herodote.net/3_mai_1936-evenement-19360503.php . Матіньйон у ніч 7–8.06.1936, +7–15 %, профспілки, колективні договори; закони червня 1936 — 2 тижні відпустки, 40 год (дати законів у джерелах 11–12.06 голосування / 20–21.06 промульгація → у тексті «у червні») — https://www.jean-jaures.org/nos-productions/le-front-populaire-et-le-droit-du-travail ; herodote. Право голосу жінок — ордонанс 21.04.1944 — https://www.slate.fr/grand-format/droit-vote-femmes-france-21-avril-1944-histoire-feminisme-egalite-hommes-suffrage-universel ; https://www.herodote.net/29_avril_1945-evenement-19450429.php
11. KDKA 2.11.1920 (вибори Гардінг — Кокс) — https://www.fcc.gov/news-events/blog/2020/11/02/celebrating-100-years-commercial-radio ; https://www.cbsnews.com/pittsburgh/news/kdkas-historic-broadcast . «Першість» KDKA спірна (8MK Детройт) → у тексті «її вважають першою комерційною». Бі-Бі-Сі: компанія 18.10.1922, мовлення 14.11.1922 — https://londonmuseum.org.uk/collections/london-stories/history-of-the-bbc ; https://historyofinformation.com/detail.php?entryid=76
12. «Співак джазу» — прем'єра 6.10.1927, перший повнометражний із синхронними піснями й репліками (не перший зі звуком загалом) — https://www.britannica.com/topic/The-Jazz-Singer-film-1927 ; https://catalog.afi.com/Film/1535-THE-JAZZ-SINGER . «Нові часи» — 5.02.1936, конвеєр, останній фільм із Волоцюгою — https://en.wikipedia.org/wiki/Modern_Times_(film) ; https://mentalfloss.com/article/91930/day-1936-charlie-chaplins-modern-times-debuted
13. «Земля» Довженка, 1930; Брюссель 1958 — список 12 найкращих фільмів (117 істориків кіно; місце 10 — не подаю) — https://zn.ua/ART/zemlya-dovzhenko-v-es-_.html ; https://24tv.ua/ukrayinets_yakiy_zminiv_uyavlennya_svitu_pro_kino_n741836/amp ; https://wikipedia.com/wiki/Earth_(1930_film)
14. «Доба джазу» — Ф. С. Фіцджеральд («Tales of the Jazz Age», 1922); джаз — Новий Орлеан, Велика міграція, Армстронг — загальновідоме, **self** (окремо не звіряв — верифікаторові).

### Опори D-019 (неочевидні)
- l1 екр. 2 (multi) — з фото; екр. 6 (Кулідж) — обидві цитати в body; екр. 9 (sort) — екр. 3, 5.
- l2 екр. 4 (order) — причиновий ланцюг з екр. 3; екр. 7 (Ланг) — мета агенції в body; екр. 9 (link) — екр. 6, 8.
- l3 екр. 3 (газета) — cap дає напис видавця й звернення Болдвіна з самого скану (правильний варіант дослівно в cap не стоїть); екр. 8 — «Що об'єднало» — екр. 7; екр. 10 — екр. 9.
- l4 екр. 4 (радіо) — міркування; екр. 9 (Земля) — факти в body; l5 — лише з уроків розділу (pre на кожному).

### Сумнівні місця / пропозиції
- l2 link (Новий курс ↔ Голодомор): порівняння дій влад — чутливо; формулювання за hist g10s4l2, без оцінок числа жертв. Варто, щоб верифікатор глянув тон.
- l3: «Ліві партії злякалися, що Франція повторить шлях Італії й Німеччини» — тлумачення (джерела: «danger fasciste»).
- Модель Т «12 годин → півтори» — джерела вторинні (Ford-сайт дає лише «сотні → тисячі на день»).

