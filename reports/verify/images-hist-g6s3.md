# Верифікація images-hist-g6s3 (D-027) — «Кіммерійці, скіфи, сармати», 6 кл.

Верифікатор: verifier-images-g6s3 (свіжий контекст; зображень не додавав), 2026-10-31.
Файл: `content/hist/g6-g6s3.js`, коміт автора 89025bc. Перевірено зміни D-027: 2 нові `img` (l1 #5, l2 #1), `cap`, `credits`. Тексти екранів і завдання не змінювалися (звірено з diff). Усі джерела відкрито в цій сесії; сторінка Met через WebFetch дала 429, тому дані Met взято з офіційного Met Collection API (curl).

## Файли (`img/hist/g6s3/`)
| Файл | Розмір | Байт | Межі |
|---|---|---|---|
| homer.jpg | 500×630 | 87 864 | ✅ |
| herodotus.jpg | 600×900 (`tall`) | 84 685 | ✅ |

## Ліцензії
| Екран | Сторінка | Ліцензія | Автор | Вердикт |
|---|---|---|---|---|
| l1 #5 | [Homer_British_Museum.jpg](https://commons.wikimedia.org/wiki/File:Homer_British_Museum.jpg) | PD-user: «released into the public domain by its author, JW1805, at the English Wikipedia»; скульптура — PD | JW1805; пізніші версії файлу вантажили ChrisO (en.wiki) і Yonidebest (Commons) | ✅ з приміткою: дозвіл JW1805 поширено на файл загалом; нових версій з іншою ліцензією немає |
| l2 #1 | [Herodotos_Met_91.8.jpg](https://commons.wikimedia.org/wiki/File:Herodotos_Met_91.8.jpg) | CC BY 2.5 (фото); скульптура — PD Mark | Marie-Lan Nguyen (Jastrow), 12.01.2011 | ✅ |

`credits`: 2 записи відповідають сторінкам ✅.

## Факти в `cap`
| Твердження | Джерела (відкрито) | Вердикт |
|---|---|---|
| Мармурове погруддя Гомера, римська копія з грецького оригіналу II ст. до н. е., Британський музей | Commons (Roman copy of a lost Hellenistic original of the 2nd c. BC, Baiae); https://www.worldhistory.org/image/3855/ (Antonine copy, 2nd c. CE, of 2nd c. BCE original, British Museum); https://maicar.com/GML/000Iconography/Homer/slides/8325.html | ✅ |
| Греки приписували «Одіссею» Гомерові | https://en.wikipedia.org/wiki/Homer («traditionally credited as the author of the Iliad and the Odyssey»); https://uk.wikipedia.org/wiki/Гомер | ✅ |
| Справжнього обличчя Гомера ніхто не знає: скульптор його уявив | https://collections.shca.ed.ac.uk/classics/browse.php?item=60 («typical Hellenistic practice to 'invent' portraits of long-dead poets»; Homer «as envisaged by Hellenistic sculptors»); https://uk.wikipedia.org/wiki/Гомер (погруддя — «в умовній ідеалізованій формі», певних свідчень про життя немає) | ✅ |
| Геродот: напис ΗΡΟΔΟΤΟϹ; римська копія II ст. н. е. з грецької бронзової статуї IV ст. до н. е.; знайдено в Єгипті (Бенха / Атрібіс); Метрополітен-музей | Commons; Met API https://collectionapi.metmuseum.org/public/collection/v1/objects/245829 («Marble bust of Herodotos», Roman, Imperial, 2nd century CE, 91.8, Gift of George F. Baker 1891); https://ancientrome.ru/art/artworken/img.htm?id=9783 (бронзовий оригінал I пол. IV ст. до н. е., Benha/Athribis, Met 91.8); https://www.worldhistory.org/image/6501/ | ✅ |
| «Мармурова голова» | Met називає предмет «bust» (погруддя), Commons — «head»; на фото — погруддя-герма з написом | ⚠️ → виправлено на «Мармурове погруддя» (і в `credits`: «Погруддя Геродота») |

## Опора (D-019) і педагогіка
| Екран | Вплив | Вердикт |
|---|---|---|
| l1 #5 «Край вічного туману» (choice) + Гомер | `cap` пояснює, що портрет уявний, — підтримує думку «поема — художній твір», але правильний варіант («образ далекого краю») прямо не називає; hint лишається потрібним. Ім'я Гомера вперше з'являється лише в `cap`, жодне завдання про нього не питає | ✅ |
| l2 #1 intro + Геродот | ілюструє проблему «чи можна вірити чужинцеві»; `cap` не дає відповідей на #2–#7. Дата статуї (IV ст. до н. е.) не суперечить body (Геродот писав у V ст.): портрет зроблено після його смерті | ✅ |

Відкриті питання автора закрито: дані Met підтверджено через Met API (сторінку 429); Гомер лише в підписі — прийнятно (не оцінюється).
Вік і етика ✅. Одна ілюстрація на екрані ✅.

## Правки (зроблені)
1. l2 #1 `cap`: «Мармурова голова Геродота» → «Мармурове погруддя Геродота»; `credits`: «Голова Геродота» → «Погруддя Геродота».
2. l1, l2 → `status: "verified"`; шапку оновлено.

## Перевірки
- `node tools/validate.mjs --section g6s3` — 0 помилок, 0 попереджень (D-027 чисто).
- `python3 tools/playtest.py --section g6s3` — пройдено 5 уроків.

## Вердикт
l1, l2 — **verified**; l3–l5 без змін (verified).
