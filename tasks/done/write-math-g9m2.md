---
claimed_from: review
claimed_at: 2026-10-11T20:38:18.375Z
id: write-math-g9m2
type: write-section
subject: math
grade: 9
section: g9m2
weeks: [1, 10]
status: done
claimed_by: verifier-g9m2
created: 2026-09-27
---
# Написати розділ «Геометрія: координати і вектори» (Математика, 9 клас)

## Навіщо (з плану, можна уточнити)
Щоб описувати фігури й рух числами — так працюють навігатори та ігри.

## Теми уроків (з плану)
1. Координати на площині
2. Рівняння кола і прямої
3. Вектори
4. Дії з векторами
5. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/math.md, style/profiles.json
- memory/long/glossary/math.md і memory/long/facts/math.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/math/g5-ms1.js

## Результат
- Файл `content/math/g9-g9m2.js` з `SLID.section("math", { id: "g9m2", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/math/g9m2/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/math.md)

## Готово, коли
- [x] `node tools/validate.mjs --section g9m2` (build — оркестратор) — 0 помилок
- [x] Попередження або виправлено, або пояснено нижче
- [x] `node tools/stats.mjs --subject math` — уроки розділу без прапорців «нетипово для сім'ї»
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
- Файл: `content/math/g9-g9m2.js`, status усіх уроків: `draft`.
- Уроки: g9m2l1 Відстань на карті; g9m2l2 Коло й пряма числами; g9m2l3 Стрілка з координатами; g9m2l4 Додати, розтягнути, помножити; g9m2l5 Квест на карті (boss, badge g9m2boss).
- explore+lab: l1 1+2; l2 2+2; l3 2+2; l4 2+2; l5 1+2. plane: drag points, segs/arrows, circles, fns.
- validate --section g9m2 → 0 помилок, 0 попереджень; stats — без прапорців «нетипово для сім'ї» для g9m2*.
- Scratchpad: `scratchpad/g9m2/`. Build не запускався.

### Факти (з джерелами)
1. Відстань і середина — Мерзляк Геометрія 9 §8 — http://matematuka.inf.ua/new_9_klas/merzlak_geom9_pidr-zag/merzlak_geom9.html ; https://www.matematika.com.ua/formuli-matematiki/vektori.html
2. Коло $(x-a)^2+(y-b)^2=r^2$, пряма $y=kx+b$ — Мерзляк §9–11 — той самий зміст + vshkole.com зміст підручника 2017
3. Вектор, координати, довжина, рівні — Мерзляк §12–13
4. Сума, $k\vec a$, скалярний добуток, ⊥ — Мерзляк §14–16; https://www.matematika.com.ua/formuli-matematiki/vektori.html
5. Координатна площина (опора) — facts/math №42

### Опора D-019 (де неочевидно)
- l1 «AB²»: explore з катетами → choice (екран explore).
- l2 Wi-Fi фінал: intro + теорія кола → choice.
- l3 рівні вектори фінал: теорія + lab рівності → choice (міркування з координат).
- l4 від’ємне k: explore множення → choice.
- l5 усі завдання — з уроків 1–4 розділу.

### Сумнівні / пропозиції
- Кутовий коефіцієнт і повне рівняння $ax+by+c=0$ лише стисло через $y=kx+b$ (plane fns).
- У lab show уникати `\vec{a}` / `\overrightarrow{AB}` (конфлікт із шаблонами).

### Верифікація (verifier-g9m2)
- Звіт: `reports/verify/g9m2.md`. Усі 5 уроків → `verified`.
- Критичне: l3 фінал `fbText` («перший варіант» при розрахунку для $D(5;3)$) — виправлено.
- Якість: «під прямим кутомсть» → «перпендикулярність».
- validate --section g9m2 → 0/0. Build не запускався.

