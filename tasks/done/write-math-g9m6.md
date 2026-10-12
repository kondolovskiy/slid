---
claimed_from: review
claimed_at: 2026-10-12T02:47:09.925Z
id: write-math-g9m6
type: write-section
subject: math
grade: 9
section: g9m6
weeks: [23, 35]
status: done
claimed_by: verifier-g9m6
created: 2026-09-27
---
# Написати розділ «Геометрія: правильні многокутники і перетворення» (Математика, 9 клас)

## Навіщо (з плану, можна уточнити)
Щоб бачити симетрію в орнаментах, архітектурі й природі.

## Теми уроків (з плану)
1. Правильні многокутники
2. Довжина кола і площа круга
3. Переміщення і симетрія
4. Подібність фігур
5. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/math.md, style/profiles.json
- memory/long/glossary/math.md і memory/long/facts/math.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/math/g5-ms1.js

## Результат
- Файл `content/math/g9-g9m6.js` з `SLID.section("math", { id: "g9m6", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/math/g9m6/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/math.md)

## Готово, коли
- [x] `node tools/validate.mjs --section g9m6` — 0 помилок (build — оркестратор)
- [x] Попередження або виправлено, або пояснено нижче
- [x] `node tools/stats.mjs --subject math` — прапорці пояснено нижче
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу в review (зараз claimed verifier-g9m6 у doing для verify)

## Нотатки агента (writer-g9m6)
### Уроки (5, усі draft)
1. `g9m6l1` Усі сторони рівні — правильні многокутники
2. `g9m6l2` Коло без нитки — $C=2πr$, $S=πr^2$, $π≈3,14$ + `tol`
3. `g9m6l3` Фігура їде й відбивається — перенесення, осьова симетрія (drag), поворот
4. `g9m6l4` Та сама форма, інший розмір — подібність, $k$, площі $k^2$
5. `g9m6l5` Орнамент собору — boss, badge `g9m6boss`

### Інтерактив
- plane: n-кутник (cosd/sind), коло drag, симетрія drag $A↔A'$
- ≥2 explore/lab на урок; є оцінювані `lab`

### Факти
1. Правильний n-кутник — рівні сторони/кути; внутрішній $((n-2)·180°)/n$; центральний $360°/n$; вписаний+описаний — Мерзляк 9 https://subjectum.eu/textbook/mathematics/9klas_9/10.html ; Вікіпедія https://uk.wikipedia.org/wiki/Правильний_многокутник
2. $π≈3,14$; $C=2πr$; $S=πr^2$ — facts/math №39 + `tol`
3. Переміщення зберігає відстані (перенесення, осьова симетрія, поворот) — Мерзляк 9 §5 https://vshkole.com/9-klass/uchebniki/geometriya/ag-merzlyak-vb-polonskij-ms-yakir-2017
4. Подібність: кути рівні, сторони ∝ $k$; площі · $k^2$ — facts/math №78

### D-019
- l1 фінал 120° ← info; l2 π ← info/lab; l3 відбиття ← explore; l4 $k^2$ ← info+lab; boss ← уроки 1–4

### Stats / попередження
- short fbOk тягнуть sentenceWords; l3 longWordShare (терміни) і typeVariety=2 — пояснюю (D-011)

### Пропозиції
- TERM: правильний многокутник; центральний кут; переміщення; осьова симетрія; паралельне перенесення; поворот
