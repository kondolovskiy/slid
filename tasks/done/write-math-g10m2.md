---
claimed_from: review
claimed_at: 2026-10-12T17:38:19.264Z
id: write-math-g10m2
type: write-section
subject: math
grade: 10
section: g10m2
weeks: [1, 12]
status: done
claimed_by: verifier-g10m2
created: 2026-09-27
---
# Написати розділ «Геометрія: вступ до стереометрії» (Математика, 10 клас)

## Навіщо (з плану, можна уточнити)
Щоб перейти від площини до простору, у якому ми живемо.

## Теми уроків (з плану)
1. Аксіоми стереометрії
2. Взаємне розміщення прямих і площин
3. Перерізи многогранників
4. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/math.md, style/profiles.json
- memory/long/glossary/math.md і memory/long/facts/math.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/math/g5-ms1.js

## Результат
- Файл `content/math/g10-g10m2.js` з `SLID.section("math", { id: "g10m2", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/math/g10m2/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/math.md)

## Готово, коли
- [x] `node tools/validate.mjs --section g10m2` — 0 помилок (build.mjs — оркестратор)
- [x] Попередження або виправлено, або пояснено нижче
- [x] `node tools/stats.mjs --subject math` — уроки розділу без прапорців «нетипово для сім'ї»
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
Файл: `content/math/g10-g10m2.js`. 4 уроки (draft), validate `--section g10m2` → 0 помилок / 0 попереджень; stats — без прапорців «нетипово для сім'ї».

### Уроки / екрани
1. `g10m2l1` «Три точки — одна стіна» (аксіоми) — 9 екранів; explore+lab solid; choice/lab
2. `g10m2l2` «Прямі, що не зустрінуться» — 10 екранів; solid + number + lab
3. `g10m2l3` «Розріз коробки» (перерізи) — 9 екранів; pyramid + box solid
4. `g10m2l4` boss «Креслення залу» — 8 екранів; badge `g10m2boss`

### Опора завдань (D-019)
- l1: А2/А3/А4 і наслідок «пряма+точка» — з info екрана 4; lab куба — міркування про рівні виміри (еталон ms4)
- l2: мимобіжні vs паралельні — info екрана 4 + explore з підписами; number «0 точок» — з означення в info
- l3: сторони = перетнуті грані — info; семикутник — з «6 граней куба» у тілі завдання; слід — з info
- boss: лише матеріал l1–l3

### Факти / конвенції (джерела)
1. Аксіоми стереометрії А1–А5 (рівень стандарту): Нелін, Математика 10, 2018 — https://subjectum.eu/textbook/mathematics/10klas_14/26.html ; miyklas (аксіоми) — https://www.miyklas.com.ua/p/geometria/10-klas/aksiomi-stereometriyi-15439/aksiomi-stereometriyi-ta-yikh-naiprostishi-naslidki-15440/re-f699a42d-ae52-4df8-ad9d-e7dcebc712c8
2. Наслідки: через пряму й точку поза нею — єдина площина; через дві прямі, що перетинаються — єдина площина (Нелін, теореми 1.1–1.2, той самий URL)
3. Дві прямі в просторі: перетинаються / паралельні / мимобіжні; мимобіжні — не в одній площині — https://www.fizmat.7mile.net/geometriya-10/01-7-dvi-pryami-u-prostori.htm ; miyklas — https://www.miyklas.com.ua/p/geometria/10-klas/paralelnist-priamikh-i-ploshchin-u-prostotri-14771/vzayemne-rozmishchennia-priamikh-u-prostori-kut-mizh-priamimi-14774/re-f95241a4-715d-4e51-8e01-0581f5a20dda
4. Дві площини: перетинаються по прямій або паралельні (Бурда 10) — https://subjectum.eu/textbook/mathematics/10klas_12/35.html
5. Переріз = спільні точки тіла і січної; сторін ≤ числа граней; метод слідів — https://dorobok.edu.vn.ua/article/view/449 ; https://naurok.com.ua/prezentaciya-pobudova-pereriziv-mnogogrannikiv-10-klas-207222.html

### Пропозиції glossary/facts
- TERM: стереометрія; площина; аксіоми А2–А4 (формулювання Неліна); мимобіжні прямі; січна площина; переріз; слід площини
- Уроки g10m4 підуть глибше в паралельність/перпендикулярність — тут лише класифікація розміщення

### Сумнівні місця
- Нумерація аксіом у Мерзляка (профіль) відрізняється від Неліна (стандарт); узято Нелін як рівень стандарту
- Підписи вершин solid (`marks.v`) привʼязані до індексів mesh box; перевірити візуально в плейтесті (оркестратор)

### Верифікація (verifier-g10m2, 2026-10-12)
- Усі 4 уроки → `verified`. Звіт: `reports/verify/g10m2.md`. validate 0/0.
- Правки: А4 «різні»; marks l1 уніфіковано з l2/boss; hint number без видачі «0».
- solid: індекси звірно з `solidMesh` — OK. Мерзляк А3/А4/А5 = Нелін А2/А3/А4 — відкрите питання програми.
