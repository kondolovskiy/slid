# Верифікація fix-hist-world-small-1105 (коротка, 2026-11-05)

Верифікатор: verifier-fix-hist-world-small-1105 (свіжий контекст; правок автора не писав). Обсяг: diff `git show HEAD -- content/` — h64 е6 (g5s6) і credits фото Панкгерст (w9s5).

## 1. Факти / ліцензія (w9s5, credits фото Q 81486)

| Твердження | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| Автор — агентство Central Press Photos, фотограф невідомий | London Museum: Maker «Central Press Photos Ltd», 21.05.1914 — https://www.londonmuseum.org.uk/collections/v/object-294084/mrs-pankhurst-arrested-and-carried-bodily-by-superintendant-rolfe-21-may-1914/ ; Commons: Author «Unknown author» — https://commons.wikimedia.org/wiki/File:Mrs_Emmeline_Pankhurst,_Leader_of_the_Women%27s_Suffragette_movement,_is_arrested_outside_Buckingham_Palace_while_trying_to_present_a_petition_to_King_George_V_in_May_1914._Q81486.jpg | ✅ |
| PD-UKGov некоректний (приватне агентство, не уряд) | Commons досі ставить PD-UKGov (та сама сторінка файлу), але London Museum називає приватного автора → Crown copyright не застосовний; прибрати — правильно | ✅ |
| UK: анонімне фото 1914 р. — суспільне надбання | Commons Template:PD-UK-unknown (автор невідомий, оприлюднено > 70 років тому) — https://commons.wikimedia.org/wiki/Template:PD-UK-unknown | ✅ |
| US: опубліковане до 1931 р. | Commons Template:PD-US-expired («published … before January 1, 1931») — https://commons.wikimedia.org/wiki/Template:PD-US-expired ; публікація 1914 р.: пресфото агентства, відбиток 1914 р. у London Museum — https://londonmuseum.org.uk/collections/v/object-732005/arrest-of-emmeline-pankhurst ; NPG (через пошук): знімок «widely reproduced» | ✅ |
| Відповідність docs/IMAGES.md | Суспільне надбання — дозволена ліцензія; формат credits `[назва, автор, ліцензія, URL]` дотримано | ✅ |

Примітка (не блокує): на Commons сторінка файлу досі з PD-UKGov — можна людині виправити шаблон на Commons (PD-UK-unknown + PD-US-expired). У нашому файлі підстава вже коректна. Сайт IWM (iwm.org.uk) і NPG повертали 403 — не зараховані як відкриті.

## 2. Завдання h64 е6 (sort «Хто це робив?») — розв'язано самостійно

| Пункт | Мій розв'язок | Опора (D-019) | Вердикт |
|---|---|---|---|
| Витіснення української мови | Влада СРСР | екр. 3: «Влада СРСР витісняла українську мову російською» | ✅ |
| Ув'язнення за правду | Влада СРСР | екр. 5: «За це їх кидали до в'язниць»; підказка «Хто мав в'язниці…» знімає двозначність «хто ув'язнював / кого» | ✅ |
| Приховування правди про ЧАЕС | Влада СРСР | екр. 5: «Влада … приховувала правду» | ✅ |
| Таємне поширення заборонених текстів | Ті, хто не мовчав | екр. 5: «Вони таємно поширювали заборонені тексти» | ✅ |
| Створення правдивих віршів і картин (було «Правдиві вірші й картини») | Ті, хто не мовчав | екр. 5: «поети й художники писали й малювали правду» | ✅ |

Ключі збігаються з моїм розв'язком. Граматика більше не підказує: усі п'ять — віддієслівні іменники середнього роду однини, без різниці роду/числа між групами. `fbText` не суперечить. Мова природна для 5 кл.

## 3. Правки
- Зроблено (1): е6 пункт «Правдиві вірші й картини» → «Створення правдивих віршів і картин» — єдиний пункт не у формі дії (предмет, а не «що робили»), тепер усі в однаковій формі; ключ той самий.
- Статус h64: draft → verified.
- Рекомендовано людині: виправити шаблон ліцензії на сторінці Commons (необов'язково).

## 4. Прогін
`node tools/validate.mjs --section g5s6` — 0/0; `--section w9s5` — 0/0. Build/playtest не запускав (за дорученням оркестратора).

## Вердикт
h64 — verified. w9s5 — credits коректні, статус уроків не змінювався. Прийнято.
