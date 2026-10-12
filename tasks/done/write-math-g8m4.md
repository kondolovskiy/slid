---
claimed_from: review
claimed_at: 2026-10-11T20:26:36.216Z
id: write-math-g8m4
type: write-section
subject: math
grade: 8
section: g8m4
weeks: [13, 22]
status: done
claimed_by: verifier-g8m4
created: 2026-09-27
---
# Написати розділ «Геометрія: подібність і теорема Піфагора» (Математика, 8 клас)

## Навіщо (з плану, можна уточнити)
Щоб вимірювати недосяжне: висоту дерева, ширину річки, діагональ телевізора.

## Теми уроків (з плану)
1. Подібні трикутники
2. Теорема Піфагора
3. Співвідношення в прямокутному трикутнику
4. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/math.md, style/profiles.json
- memory/long/glossary/math.md і memory/long/facts/math.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/math/g5-ms1.js

## Результат
- Файл `content/math/g8-g8m4.js` з `SLID.section("math", { id: "g8m4", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/math/g8m4/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/math.md)

## Готово, коли
- [x] `node tools/validate.mjs --section g8m4` — 0 помилок (build — оркестратор)
- [x] Попередження або виправлено, або пояснено нижче
- [x] `node tools/stats.mjs --subject math` — уроки розділу без прапорців «нетипово для сім'ї» (крім очікуваного boss gradedShare)
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
Файл: `content/math/g8-g8m4.js`. Scratchpad: `scratchpad/g8m4/`. Build не запускав.

### Уроки
1. **g8m4l1** «Одна форма, різний розмір» — подібні трикутники, k, ознаки; explore×2 + lab×2
2. **g8m4l2** «Квадрати на сторонах» — Піфагор і обернена; explore×1 + lab×2 (goal `a²+b²=c²`)
3. **g8m4l3** «Висота й проекції» — середні пропорційні $h^2=p·q$, $a^2=c·p$; explore×1 + lab×2
4. **g8m4l4** boss «Міряємо недосяжне» — значок `g8m4boss`; lab×2 + number/choice

### Факти (джерела)
1. Подібні трикутники: кути відповідно рівні, сторони пропорційні; k — відношення відповідних сторін — Істер Геометрія 8 §13 — https://subjectum.eu/textbook/mathematics/8klas/13.html ; Бурда/Тарасенкова розд. «Подібність» — http://www.matematuka.inf.ua/nuh_8_klas/tarasenk_pidr_8kl/burda_geom8.html
2. Ознаки подібності: за двома кутами; за двома сторонами й кутом між ними; за трьома сторонами — Істер §14 — https://subjectum.eu/textbook/mathematics/8klas/14.html
3. Теорема Піфагора: $a^2+b^2=c^2$; обернена — прямий кут — Істер §18 — https://subjectum.eu/textbook/mathematics/8klas/18.html ; Britannica/стандартна формулювання
4. Середні пропорційні: $h^2=p·q$; $a^2=c·p$ — Істер §15 — https://subjectum.eu/textbook/mathematics/8klas/15.html ; https://duflu.org.ua/metrychni-spivvidnoshennia-v-priamokutnomu-trykutnyku-povnyi-rozbir/

### D-019 (опора → завдання)
- l1 фінал висота дерева ← intro (1,8 / 1,5 / 6) + теорія k + пропорція
- l1 lab DE∥BC ← explore нахилів + ознака за двома кутами в info
- l2 lab a²+b²=c² ← explore + теорія оберненої
- l2 фінал драбина 3–5 ← intro + трійка 3-4-5 у lab
- l3 labs h²=p·q і a²=c·p ← explore 15-20-25 + info
- boss лише матеріал l1–l3

### Stats
- validate: 0 помилок, 0 попереджень
- g8m4l4 gradedShare 0,86 z=2 — типово для boss (як g8m2l5 / g7); не вирівнював

### Пропозиції
- TERM: подібні трикутники; коефіцієнт подібності k; катет / гіпотенуза; проекція катета; середні пропорційні відрізки
- STYLE: у текстах 8 кл. довгі терміни (гіпотенуза, пропорційні) роздувають longWordShare — варто дозволити в profiles math 7–9

### Верифікація (verifier-g8m4, 2026-10-11)
- Звіт: `reports/verify/g8m4.md`. Усі 4 уроки → `verified`.
- Критична правка: body/show boss (+l1) — явні $DE=8$, $DF=6$, $EF=10$ (було «6, 8 і 10» проти goal).
- Дрібні: l3 explore (проекції 9/16, не завжди 15–20–25); «Сторона AB».
- Validate 0/0; labs через SLID_LAB.validate OK. Людині: TERM у glossary.
