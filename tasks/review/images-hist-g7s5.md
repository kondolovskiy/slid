---
claimed_from: todo
claimed_at: 2026-10-31T17:55:18.404Z
id: images-hist-g7s5
type: images
subject: hist
grade: 7
section: g7s5
status: review
claimed_by: photo-g7s5
created: 2026-10-30
depends_on: []
---
# g7s5: справжнє зображення в кожному уроці (D-027)

Файл: `content/hist/g7-g7s5.js` («Українські землі в XIV–XV ст.»), 7 клас. Уроків без `img`: **4 з 5** — `g7s5l1` «Король багатьох русинів», `g7s5l2` «Битва, якої могло не бути», `g7s5l4` «Нова держава на півострові», `g7s5l5` «Канцелярія великого князя».

## Що зробити
- У кожен названий урок додати щонайменше одне справжнє зображення `img` (фото пам'ятки/предмета, репродукція, документ, історична карта, портрет) з відкритою ліцензією — за docs/IMAGES.md: файл у `img/hist/g7s5/`, JPEG ≤ 1000 px, ≤ 250 КБ, `cap` (що, де, коли; автор і дата репродукції), запис у `credits` розділу з URL сторінки файлу.
- Зображення працює на зміст: краще як джерело, з яким працює завдання, або як проблема `intro`; не декор. Схеми svg/fig можна лишити, але вимогу вони не закривають. На екрані — лише одна ілюстрація (img | svg | fig | lab).
- Якщо додаєш або змінюєш завдання на основі фото — воно має бути чесним (style/common.md, «Чесне завдання»), а факти в `cap` — перевіреними за ≥ 2 джерелами (реєстр memory/long/facts/hist.md спершу).
- Якщо в уроках є війни, насильство чи смерть — лише документи, місця пам'яті, портрети, твори мистецтва, карти; без натуралістичних фото жертв.
- Змінені уроки повернути в `status: "draft"` — після тебе їх повторно перевіряє незалежний верифікатор (підписи, ліцензії, чесність).
- Commons віддає 429 при паралельних запитах: роби паузи між завантаженнями, не більше 3 таких задач одночасно (pitfalls). Якщо для уроку не знайшлося відповідного вільного зображення — не бери випадкове, а запиши це в нотатки з переліком перевіреного.

## Готово, коли
- [ ] `node tools/validate.mjs --section g7s5` — 0 помилок і жодного попередження D-027.
- [ ] Кожне нове зображення: файл, `cap`, `credits` з ліцензією й URL; розмір у межах.
- [ ] Нотатки: перелік зображень (урок → файл → ліцензія → URL), змінені завдання, сумнівні місця; рядок в inbox; move у review.

## Нотатки агента
Агент photo-g7s5, 2026-10-31. Змінено лише `content/hist/g7-g7s5.js` (img+cap у 4 уроках, 4 записи credits, l1/l2/l4/l5 → `draft`, рядок у шапці) і `img/hist/g7s5/`. Завдання й тексти екранів не змінювались. `node tools/validate.mjs --section g7s5` — 0 помилок, D-027 чисто; 2 давні попередження sentenceWords (l3 5.8, l5 5 — є і в reports/style-hist.md до правки; підписи їх не змінили). Build не запускав.

### Зображення (урок → екран → файл → ліцензія → URL)
| Урок | Екран | Файл | Розмір | Ліцензія | Сторінка файлу |
|---|---|---|---|---|---|
| g7s5l1 | #1 intro | gedimin-letter.jpg | 960×495, 197 КБ | PD (PD-old-70-expired, PD Mark) | https://commons.wikimedia.org/wiki/File:Transcript_of_Gediminas%27_letter,_which_is_the_oldest_known_mentioning_of_Vilnius_in_written_sources_(25_January_1323).jpg |
| g7s5l2 | #3 info «Що кажуть джерела» | synyukha.jpg | 960×540, 116 КБ | CC BY-SA 3.0 (Mr.Rosewater, 2012) | https://commons.wikimedia.org/wiki/File:Синюха_між_Торговицею_і_Новоархангельськом.jpg |
| g7s5l4 | #6 info «Від Литви до Москви» | kafa-tower.jpg | 960×720, 165 КБ | CC BY-SA 4.0 (ЯдвигаВереск, WLM 2015) | https://commons.wikimedia.org/wiki/File:Башта_Костянтина,_Феодосія.jpg |
| g7s5l5 (boss) | #1 intro, `tall` | vilnius-tower.jpg | 500×651, 103 КБ | CC BY-SA 3.0 / 2.5 / GFDL (Wojsyl 2005, обрізав M.K.) | https://commons.wikimedia.org/wiki/File:Gediminas_Tower_in_Vilnius_(cropped).jpg |

Усі зображення стоять на неоцінюваних екранах (intro / info). Наступні оцінювані завдання підписи не підказують: l2 #4 sort (підпис лише називає річку й місце, не каже, що це Сині Води); l4 #7 order (підпис про башту Кафи, без 1475 р. й порядку подій); l5 — підпис про замок, жодна справа боса не про Вільно.

### Факти в `cap` і джерела
- Лист 25.01.1323 до Любека, Штральзунда, Бремена, Магдебурга, Кельна та ін.; збережений як тогочасна копія на пергаменті без печатки; Державний історичний архів Латвії, Рига (f. 673); перша писемна згадка Вільна — https://old.lituanus.org/1969/69_4_02.htm (лист 3, Napiersky №54) ; https://en.wikipedia.org/wiki/Letters_of_Gediminas ; https://alkas.lt/2022/02/04/1323-m-karaliaus-gedimino-laisku-sviesa-ir-perspektyva/ («tuometinis nuorašas», Рига) ; https://www.lndm.lt/wp-content/uploads/2018/01/Gedimino-laiskas_info-spaudai.pdf (пергамент 29×15 см, LVVA).
- Синюха; Торговиця — Новоархангельська громада, Голованівський р-н, Кіровоградська обл.; традиційне місце битви — https://uk.wikipedia.org/wiki/Синюха ; https://uk.wikipedia.org/wiki/Торговиця_(Голованівський_район) ; опис файлу Commons (фото 29.04.2012).
- Башта Костянтина — 1382–1448 рр., частина укріплень генуезької Кафи — https://uk.wikipedia.org/wiki/Генуезька_фортеця_(Феодосія) ; https://culture.voicecrimea.com.ua/en/genoese-monuments-of-crimea-in-the-world-context/ ; https://wiki.crimea-is-ukraine.org/en/wiki/concepts/genuezki-pamyatky-krymu/ . Фото 27.08.2012 (EXIF, Commons).
- Вільнюс: перший цегляний замок завершив Вітовт 1409 р.; вежу відбудовано 1933 р. (Я. Боровський; деякі джерела — 1930) → у `cap` «на початку XV ст.», «у XX ст.» — https://en.wikipedia.org/wiki/Gediminas%27_Tower ; https://www.govilnius.lt/the-gediminas-tower ; https://lnm.lt/?p=19877 ; https://www.historyhit.com/locations/gediminas-tower/ .

### Сумнівні місця
- **l1 intro (текст не мій, verified 13.10):** «1323 р. Гедимін розіслав листи… підписався: „король литовців і багатьох русинів“». У самому листі 25.01.1323 (на фото) титул — «Dei gratia Letwinorum et Ruthenorum rex» («король литовців і русинів», Lituanus 1969, alkas.lt); «multorum Ruthenorum» — в інших листах (до папи, травневих 1323 р.). Тому `cap` титул не цитує. Верифікатору: звірити, чи варто уточнити body («в одному з листів») — я не змінював.
- Ліцензія gedimin-letter: на Commons і PD-old-70-expired, і PD Mark, але SDC «copyright status not set»; автор скану — alkas.lt. Оригінал XIV ст. — PD безсумнівно.
- Перевірено й відкинуто: марка «Битва на Синіх Водах. 1362–2012» (Commons Stamp_2012_Bytva_Syni_Vody_(1).jpg, PD-UA-exempt) — не знайшов незалежного підтвердження, що Укрпошта таку марку випускала (gazeta.ua 2012 згадує лише литовську марку); литовська марка 2012-25 — теж не підтверджена каталогом; «Грамота Немире.jpg» (1474) — це підтвердження 1591 р.; категорія Lithuanian Metrica — лише файли XX ст.; дюрбе Хаджі Гірея — датування спірне, не взяв.
- Commons: 4 мініатюри з thumb.wikimedia.org, усі 200 з першої спроби (паузи 20 с); api.php не використовував, метадані — WebFetch сторінок файлів.
