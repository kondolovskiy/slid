---
claimed_from: review
claimed_at: 2026-11-03T10:11:28.610Z
claimed_by: verifier-images-hist-g11s1boss-scheme
id: images-hist-g11s1boss-scheme
type: images
subject: hist
status: done
created: 2026-11-03
depends_on: []
files: content/hist/g11-g11s1.js, img/hist/g11s1/
---
# Схема окупаційного поділу для g11s1boss, екран 3

Рішення людини (2026-11-03): «додай схему для історії». Екран 3 (choice, «Картка 2 · Окупація») каже: «На схемі видно райхскомісаріат, дистрикт Галичина та військову зону…», але ілюстрації немає (validate раніше не ловив, fig-audit/рев'ю tools-math-fig-audit).

Додай `img` — карту/схему адміністративно-територіального поділу України під нацистською окупацією (Райхскомісаріат Україна, дистрикт Галичина Генерал-губернаторства, зона військової адміністрації; за потреби — Трансністрія) з відкритою ліцензією (Вікісховище), з `cap` і записом у `credits`. Схема має показувати саме те, що названо в тексті; не підказувати відповідь сильніше, ніж текст. Якщо підписи на карті не українською — `cap` пояснює позначення. Процедура — скіл hist-images; факти (центр — Рівне тощо) — facts/hist.

Зачеплений урок → draft; validate --section g11s1 0 помилок; playtest --section g11s1 зелений.

## Нотатки виконавця
- Урок g11s1boss, екран 3 («Картка 2 · Окупація»): додано `img` `img/hist/g11s1/occupation-map-1943.jpg` (1000×571, 136 КБ, з мініатюри 1280 px через thumb.wikimedia.org) + `cap` + запис у `credits`. Статус уроку → `draft`.
- Файл: «Reichskommissariat-Ukraine.jpg», автори XrysD, Poeticbent («Own work», 2008, ред. 2016); ліцензія CC BY-SA 3.0 Unported / GFDL 1.2+ (з сторінки файлу). URL: https://commons.wikimedia.org/wiki/File:Reichskommissariat-Ukraine.jpg
- Карта показує все, що названо в тексті: генеральні округи Reichskommissariat Ukraine (центр Rowno позначено як Capital), Distrikt Galizien, «Under Military Jurisdiction» (схід), Transinistrien, Hungary (Закарпаття), пунктир — сучасний кордон. Підписи німецькою/англійською — `cap` їх пояснює.
- Факти `cap`: центр РКУ — Рівне, Галичина в Генеральному губернаторстві — facts/hist №187; Трансністрія під румунською владою (1941–1944, між Дністром і Бугом) — EoU https://www.encyclopediaofukraine.com/pages%5CT%5CR%5CTransnistria.htm ; «стан на вересень 1943» — з опису файлу.
- Чесність: `cap` не містить слів правильного варіанта («окупаційні адміністрації для контролю й експлуатації»); карта лише показує поділ, як і текст. Сумнівне для верифікатора: на карті Крим позначено як Teilbezirk Taurien РКУ (номінально), фактично там діяла військова адміністрація — у `cap` не згадано.
- validate --section g11s1: 0 помилок (2 старі попередження sentenceWords у l1, l2); playtest --section g11s1 зелений (7 уроків). Build не запускав — новий файл потрапить у sw.js після build оркестратора.
