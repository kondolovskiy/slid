# Верифікація: images-hist-g11s1boss-scheme (коміт 129d5c9)

Верифікатор: verifier-images-hist-g11s1boss-scheme, 2026-11-03. Обсяг — g11s1boss екран 3 (img, cap, credits); решта уроку без змін (раніше verified).

## Зображення й ліцензія
Файл `img/hist/g11s1/occupation-map-1943.jpg` — 1000×571 JPEG, 136 КБ (≤ 1000 px, ≤ 250 КБ), горизонтальний, `tall/fit` не потрібні. Відповідає оригіналу Commons (1876×1072, та сама пропорція).
Сторінка https://commons.wikimedia.org/wiki/File:Reichskommissariat-Ukraine.jpg : опис «administrative map of the Reichskommissariat Ukraine… as of September 1943», Distrikt Galizien, контур сучасної України; Own work, 2008; автори XrysD і Poeticbent; ліцензії GFDL 1.2+ і CC BY-SA 3.0 Unported. Запис `credits` (`[назва, «XrysD, Poeticbent (власна робота, Вікісховище)», «CC BY-SA 3.0 / GFDL 1.2+», URL]`) — ✅.

## Твердження з `cap`
| Твердження | Джерела (відкриті в сесії) | Вердикт |
|---|---|---|
| Стан на вересень 1943, сучасна реконструкція | Commons (вище) | ✅ |
| Центр РКУ — Рівне | https://www.encyclopediaofukraine.com/pages%5CR%5CE%5CReichskommissariatUkraine.htm ; https://en.wikipedia.org/wiki/Reichskommissariat_Ukraine (facts/hist №187) | ✅ |
| Галичина — дистрикт Генерального губернаторства (з 1.08.1941) | https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CG%5CE%5CGeneralgouvernement.htm ; en.wiki RKU | ✅ |
| Схід (Чернігівщина, Харківщина, Донбас) — німецька військова адміністрація | EoU RKU («remained under military rule») ; en.wiki RKU | ✅ |
| Трансністрія — під владою Румунії (між Дністром і Бугом, 1941–1944) | https://www.encyclopediaofukraine.com/pages%5CT%5CR%5CTransnistria.htm ; en.wiki RKU | ✅ |
| **Крим (питання автора):** Генеральна округа Krim-Taurien формально в РКУ; цивільній адміністрації (з 1.09.1942, центр — Мелітополь) передано лише північну Таврію (Teilbezirk Taurien); сам півострів до кінця окупації — під військовою адміністрацією | https://en.wikipedia.org/wiki/German_occupation_of_Crimea_during_World_War_II («Crimea proper never actually became part of the Generalbezirk… subordinate to a military administration»; Taurida — Melitopol) ; https://en.wikipedia.org/wiki/Reichskommissariat_Ukraine («Only the first of these [Taurien] saw transfer to civil administration in September 1942, with the peninsula remaining under military control») ; опис фонду Яд Вашем M.52 https://portal.ehri-project.eu/units/il-002798-10326959 (цивільна влада «nominally», військова «in actuality»; центр перенесено до Мелітополя — Generalbezirk Taurien) | ✅ (уточнено в `cap`) |

Що на карті: округа підписана «KRIM (Teilbezirk Taurien)» і зафарбовує лише материкові райони (Мелітополь, Генічеськ, Каховка, Олешки); сам півострів у кадр не потрапляє. Тобто карта не хибна, але без пояснення підпис «Krim» читається як «Крим був у райхскомісаріаті». Додав у `cap` речення про це.

Також уточнено напрямки: «Under Military Jurisdiction» на карті — північний схід (над Київською округою до Харкова), «Transinistrien» — південний захід; «пунктир» → «широкий пунктир» (червоні крапки — межі 1943 р.).

## Завдання (D-019)
| Завдання | Мій розв'язок | Ключ | Опора | Вердикт |
|---|---|---|---|---|
| g11s1boss е3 «Німці дали Україні самоврядування» | Спростовано: окупаційні адміністрації (РКУ, дистрикт, військова зона, румунська зона) — поділ для контролю | 1 | g11s1l2 (центр РКУ — Рівне, Галичина в ГГ, мета — експлуатація, примусова праця, терор; facts №187) + текст екрана; карта лише показує поділ, «незалежної держави» на ній немає | ✅ |
Карта не підказує сильніше за текст: `cap` не містить слів правильного варіанта («окупаційні адміністрації», «контролю», «експлуатації»); заголовок карти «Civil administration map» — нейтральний. Дистрактори відкидаються міркуванням (держава з німецьким райхскомісаром — не незалежна; на екрані документ поділу — отже «не залишив документів» хибне).

## Прогін
validate --section g11s1 — 0 помилок (2 давні попередження sentenceWords l1, l2); playtest --section g11s1 — 7 уроків, зелений (після правки `cap`).

## Правки
Зроблено: `cap` е3 — речення про Teilbezirk Taurien / військову адміністрацію Криму, напрямки «північний схід», «південний захід», «широкий пунктир»; g11s1boss → `status: "verified"`.
Рекомендовано: оркестраторові — build (новий файл у sw.js).

## Вердикт
g11s1boss — verified. Людині: лише approved; за бажання — оцінити довжину `cap` (≈ 6 речень).
