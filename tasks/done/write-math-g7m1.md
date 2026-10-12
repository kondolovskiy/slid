---
claimed_from: review
claimed_at: 2026-10-11T19:31:02.939Z
id: write-math-g7m1
type: write-section
subject: math
grade: 7
section: g7m1
weeks: [1, 8]
status: done
claimed_by: verifier-g7m1
created: 2026-09-27
---
# Написати розділ «Алгебра: лінійні рівняння» (Математика, 7 клас)

## Навіщо (з плану, можна уточнити)
Щоб будь-яку текстову задачу перетворити на рівняння і розв'язати його.

## Теми уроків (з плану)
1. Рівняння з однією змінною
2. Лінійне рівняння
3. Задачі на складання рівнянь
4. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/math.md, style/profiles.json
- memory/long/glossary/math.md і memory/long/facts/math.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/math/g5-ms1.js

## Результат
- Файл `content/math/g7-g7m1.js` з `SLID.section("math", { id: "g7m1", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/math/g7m1/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/math.md)

## Готово, коли
- [x] `node tools/validate.mjs --section g7m1` — 0 помилок (build — оркестратор)
- [x] Попередження або виправлено, або пояснено нижче
- [x] `node tools/stats.mjs --subject math` — див. прапорець нижче
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки верифікатора
verifier-g7m1 (2026-10-11): усі 4 уроки `verified`; критичних ❌ 0; правки лише status/factcheck. Звіт: `reports/verify/g7m1.md`. Stats z=2.1 на l3 — не критично.

## Нотатки агента
Автор: writer-g7m1 (2026-10-11).

### Уроки (файл `content/math/g7-g7m1.js`)
1. **g7m1l1** «Терези й невідоме» — рівняння, корінь, властивості (зняти з обох / перенести / поділити); explore balance + 2 lab (balance знімання, numline корінь).
2. **g7m1l2** «Лінія одного кореня» — означення лінійного $ax=b$, кількість коренів, $ax+b=c$; 2 explore (numline з a,b,x і a,b,c,x) + lab balance.
3. **g7m1l3** «Задача стає рівнянням» — 4 кроки складання; explore chart + lab balance + lab numline (температура).
4. **g7m1l4** boss «Крамниця рівнянь» — 6 завдань по темах розділу; 2 lab (balance, numline); badge `g7m1boss`.

Усього explore+lab: l1=3, l2=3, l3=3, l4=2. `signed: true`. requires: `g6m5l3`.

### Факти з джерелами
1. Лінійне рівняння з однією змінною — рівняння виду $ax = b$, де $x$ — змінна, $a$ і $b$ — числа (коефіцієнти). — Мерзляк та ін., Алгебра 7 кл. НУШ 2024, § «Лінійне рівняння…» — https://files.pidruchnyk.com.ua/uploads/book/7-klas-algebra-merzliak-2024.pdf ; також https://novatika.org/uk/7-klas-algebra-uroky/liniyni-rivnyannya/prezentacziya-linijne-rivnyannya-z-odniyeyu-zminnoyu-7-klas-nush/
2. Якщо $a ≠ 0$ — один корінь $x = b : a$; якщо $a = 0$, $b = 0$ — безліч коренів; якщо $a = 0$, $b ≠ 0$ — коренів немає. — ті самі джерела.
3. Властивості рівнянь (перенесення зі зміною знака; множення/ділення обох частин на число ≠ 0; корені не змінюються) — узгоджено з реєстром facts/math.md №45 і g6m5.

### Опора оцінюваних завдань (D-019)
- l1 choice «рівновага при x=12» ← explore balance на попередньому екрані.
- l1 lab зняти гирі / numline $2x=-8$ ← правила в info того ж уроку.
- l1 помилка Остапа / фінал $3x+4=-5$ ← правила перенесення в info.
- l2 choice «коренів немає» ← explore з a=0,b=5 + текст екрана.
- l2 sort кількості коренів ← info «Скільки коренів?» одразу перед.
- l2 помилка «$x^2=9$ лінійне» ← означення в info.
- l3 choice рівняння ← explore chart (разом = 2x+18).
- l3 labs / фінал / помилка Дениса ← план «4 кроки» + попередні екрани розділу.
- boss: лише матеріал l1–l3.

### Stats
- validate: 0 помилок, 0 попереджень.
- stats: `g7m1l3` — `readWordsPerScreen` z=2.1 «нетипово для сім'ї» (текст довший за короткі сусідні g7-уроки; потрібно було підняти sentenceWords до профілю [6;13]). Не скорочував.

### Пропозиції
- STYLE: короткі `fbOk` (1–4 слова зі style/common) тягнуть `sentenceWords` нижче профілю 7–9; варто калібрувати профіль або виключити fbOk з метрики (як у writer-g7m3).
- TERM → glossary/math: «лінійне рівняння з однією змінною», «коефіцієнти рівняння $a$, $b$», таблиця кількості коренів для $ax=b$.
