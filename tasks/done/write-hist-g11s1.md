---
claimed_from: todo
claimed_at: 2026-10-14T17:50:23.492Z
id: write-hist-g11s1
type: write-section
subject: hist
grade: 11
section: g11s1
weeks: [1, 8]
status: done
claimed_by: writer-g11s1
created: 2026-09-27
---
# Написати розділ «Друга світова війна» (Історія України, 11 клас)

## Навіщо (з плану, можна уточнити)
Щоб знати ціну війни для України і розрізняти правду й радянські міфи.

## Теми уроків (з плану)
1. Пакт Молотова–Ріббентропа і 1939 рік
2. Нацистська окупація
3. Голокост і Бабин Яр
4. Рух опору: УПА і радянські партизани
5. Депортація кримських татар 1944 р.
6. Внесок українців у перемогу над нацизмом
7. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/hist.md, style/profiles.json
- memory/long/glossary/hist.md і memory/long/facts/hist.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/hist/g5-s2.js

## Результат
- Файл `content/hist/g11-g11s1.js` з `SLID.section("hist", { id: "g11s1", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/hist/g11s1/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/hist.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section g11s1` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject hist` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

Виконавець: `writer-g11s1`, 2026-10-14.

Зроблено: 7 уроків (6 тем плану + boss), по 7 екранів; у тематичних уроках 4/7 оцінюваних екранів, у boss 6/7. У кожному уроці є `src` або `crit`, підказка, щонайменше три типи завдань. Boss має окрему рамку «архівна справа: відновити хронологію та спростувати міфи». Зображень немає: уроки побудовано на коротких переказах документів, а не на зовнішніх фото.

Нові факти для реєстру (потребують незалежної перевірки верифікатором):

- Пакт Молотова–Ріббентропа підписано 23.08.1939; 1.09 Німеччина напала на Польщу, 17.09 Червона армія перетнула польський кордон, 28.09 Німеччина й СРСР уклали договір про дружбу і кордон. Джерела: https://uinp.gov.ua/istorychnyy-kalendar/serpen/23/1939-pidpysao-pakt-molotova-ribbentropa ; https://ww2.uinp.gov.ua/ru/1939r/ ; https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CE%5CSecondWorldWar.htm
- Райхскомісаріат «Україна» створено 20.08.1941; центр — Рівне; Галичина була дистриктом Генерального губернаторства. Джерела: https://uinp.gov.ua/elektronni-vydannya/rokada-chotyry-narysy-z-istoriyi-drugoyi-svitovoyi/zavantazhyty/rokada-chotyry-narysy-z-istoriyi-drugoyi-cvitovoyi-pdf-format ; https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CG%5CE%5CGermany.htm
- Окупаційна влада вивозила людей на примусову працю; саме оголошення про роботу не доводить добровільності, якщо накази передбачали покарання за неявку. Джерела: https://ww2.uinp.gov.ua/ostarbajtery-ukrayintsi-na-roboti-v-nimechchyni-1941-1945/ ; https://uinp.gov.ua/elektronni-vydannya/zbirka-metodychnyh-rekomendaciy-do-vidznachennya-pamyatnyh-dat-u-zagalnoosvitnih-navchalnyh-zakladah2/zavantazhyty/zbirka-metodychnyh-rekomendaciy-do-vidznachennya-pamyatnyh-dat-u-zagalnoosvitnih-navchalnyh-zakladahpdf
- 29–30.09.1941 у Бабиному Яру вбито 33 771 єврея; згодом там убивали й інші групи жертв. Джерела: https://wwv.yadvashem.org/yv/he/exhibitions/communities/kiev/babi-yar.asp ; https://encyclopedia.ushmm.org/content/en/map/einsatzgruppen-activity-in-ukraine-and-surrounding-areas ; https://ww2.uinp.gov.ua/1941r/
- УПА постала у 1942–1943 рр., прагнула незалежної України й воювала проти німецького та радянського режимів; радянські партизани діяли в інтересах СРСР. Відносини ОУН(б) із Німеччиною змінювалися: Акт 30.06.1941 нацисти не визнали, уряд розігнали, провідників репресували. Джерела: https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CU%5CK%5CUkrainianInsurgentArmy.htm ; https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CO%5CR%5COrganizationofUkrainianNationalists.htm ; https://ww2.uinp.gov.ua/1941r/ ; https://uinp.gov.ua/informaciyni-materialy/viyskovym/ukrayinska-povstanska-armiya
- Депортація кримських татар почалася 18.05.1944 і головно тривала до 20.05; вивезено понад 190 тис. осіб. Указ 1967 р. зняв звинувачення, але не забезпечив повернення; масове повернення почалося наприкінці 1980-х; Верховна Рада України визнала депортацію геноцидом 2015 р. Джерела: https://uinp.gov.ua/informaciyni-materialy/zhurnalistam/do-rokovyn-deportaciyi-krymskyh-tatar-18-travnya-1944-roku ; https://old.uinp.gov.ua/publication/dokumenti-shchodo-deportatsii-z-krimu-predstavnikiv-krimskotatarskogo-ta-inshikh-narodiv ; https://digitallibrary.un.org/record/793393/files/S_2015_347-EN.pdf ; https://uinp.gov.ua/pres-centr/novyny/18-travnya-den-pamyati-zhertv-deportaciyi-krymskotatarskogo-narodu
- Понад 7 млн вихідців з України воювали в Червоній армії; українці служили також у військах інших держав антигітлерівської коаліції. Капітуляція Німеччини набула чинності 8.05.1945. Джерела: https://uinp.gov.ua/informaciyni-materialy/vchytelyam/metodychni-rekomendaciyi/materialy-do-vidznachennya-dnya-pamyati-ta-prymyrennya-8-travnya-ta-dnya-peremogy-nad-nacyzmom-u-drugiy-svitoviy-viyny-9-travnya ; https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CE%5CSecondWorldWar.htm

Сумнівні місця для верифікатора: формулювання про УПА навмисно не подає рух як однорідний або бездоганний; окремо нагадано про потребу перевіряти насильство проти цивільних. Число депортованих різниться залежно від того, чи рахувати головну хвилю (180 014), додатково мобілізованих/засланих (191 044) або ширші підрахунки ООН; у контенті безпечне «понад 190 тисяч». Формула «понад 7 мільйонів вихідців з України» взята з УІНП; її слід незалежно звірити перед `verified`.

Опора оцінюваних завдань: усі фактичні відповіді подані на попередньому `info`; завдання з оголошеннями й архівними картками містять опору на самому екрані; boss повторює лише факти уроків l1–l6.

Перевірки: `node tools/validate.mjs --section g11s1` — 0 помилок, 0 попереджень; `node tools/stats.mjs --subject hist` — усі 7 уроків g11s1 без прапорців «нетипово для сімʼї».

## Нотатки незалежного верифікатора

Верифікатор: `verifier-g11s1`, 2026-10-14. Повний звіт із відкритими URL, аудитом усіх відповідей і D-019: `reports/verify/g11s1.md`.

Критично виправлено: евфемістичне подання масового насильства проти польських та українських цивільних у темі УПА; надмірно точне «понад 7 млн» → «близько 7 млн»; узагальнення про одномоментний перехід ОУН до боротьби; родове рольове звертання у boss за D-020a. Чутливе подання Голокосту, окупації та депортації після перевірки коректне. Усі 30 оцінюваних завдань розвʼязано незалежно; `correct`, дистрактори й опора збігаються. Статус усіх уроків змінено на `verified`.

Повторні перевірки: `node tools/validate.mjs --section g11s1` — 0 помилок, 0 попереджень; `node tools/stats.mjs --subject hist` — g11s1 без прапорців.
