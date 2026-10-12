---
claimed_from: review
claimed_at: 2026-10-12T17:52:51.204Z
id: write-math-g10m5
type: write-section
subject: math
grade: 10
section: g10m5
weeks: [19, 28]
status: done
claimed_by: verifier-g10m5
created: 2026-09-27
---
# Написати розділ «Алгебра: тригонометрія» (Математика, 10 клас)

## Навіщо (з плану, можна уточнити)
Щоб описувати коливання, хвилі, обертання — від звуку до маятника.

## Теми уроків (з плану)
1. Радіанна міра кута
2. Тригонометричні функції
3. Тригонометричні формули
4. Тригонометричні рівняння
5. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/math.md, style/profiles.json
- memory/long/glossary/math.md і memory/long/facts/math.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/math/g5-ms1.js

## Результат
- Файл `content/math/g10-g10m5.js` з `SLID.section("math", { id: "g10m5", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/math/g10m5/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/math.md)

## Готово, коли
- [x] `node tools/validate.mjs --section g10m5` — 0 помилок (build — оркестратор)
- [x] Попередження або виправлено, або пояснено нижче
- [x] `node tools/stats.mjs --subject math` — пояснено нижче
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
Автор: writer-g10m5, 2026-10-12.

### Уроки (файл content/math/g10-g10m5.js)
1. g10m5l1 «Кут у радіанах» — 10 екранів (радіан, π=180°, перехід)
2. g10m5l2 «Синус і косинус числа» — 10 екранів (одиничне коло, період 2π, парність)
3. g10m5l3 «Формули, що рятують» — 9 екранів (sin²+cos²=1, додавання, 2α)
4. g10m5l4 «Коли хвиля дає число» — 9 екранів (sin x=a, cos x=a)
5. g10m5l5 boss «Зміна звукорежисера» — 8 екранів, badge g10m5boss

requires: g9m4l1. signed: true. Без зображень.

### Факти (з джерелами)
1. 1 рад = центральний кут з дугою = R; π рад = 180°; α_рад = α°·π/180 — Істер 10 https://subjectum.eu/textbook/mathematics/10klas_13/10.html ; Мерзляк https://subjectum.eu/textbook/mathematics/10klas/21.html — g10m5l1
2. sin t, cos t — координати точки на одиничному колі після повороту на t рад; період 2π; sin непарна, cos парна; E = [-1;1] — Істер §8–12 (стандарт) — g10m5l2
3. sin²α+cos²α=1; sin(α+β)=sinα cosβ+cosα sinβ; cos(α+β)=cosα cosβ−sinα sinβ; sin 2α=2 sinα cosα; cos 2α=cos²α−sin²α — Істер https://subjectum.eu/textbook/mathematics/10klas_13/16.html ; Мерзляк https://subjectum.eu/textbook/mathematics/10klas/31.html — g10m5l3
4. |a|>1 ⇒ sin x=a / cos x=a ∅; sin x=a ⇒ x=(-1)^k arcsin a + πk; cos x=a ⇒ x=±arccos a + 2πk; особливі: sin=0 → πk, cos=0 → π/2+πk — Мерзляк https://subjectum.eu/textbook/mathematics/10klas/35.html ; Бурда https://subjectum.eu/textbook/mathematics/10klas_12/20.html — g10m5l4

### Опора оцінюваних завдань (D-019)
- l1 lab π / choice 90°=π/2 / помилка 60° / number ≈57° ← info + explore
- l2 lab sin=1 / sin 0 / парність cos / період / cos π ← info + explore/коло
- l3 lab sin 2α / number cos з sin=3/5 / формули / помилка знака / cos 2α=0 ← info + explore тотожності
- l4 lab π/6 / формула sin=1/2 / cos=0 / |a|>1 / cos=1/2 ← info + explore графіка
- boss: лише матеріал l1–l4

### Stats / попередження
- validate: 0 помилок; sentenceWords≈6.5–6.9 поза профілем [7;15] для 10–11 (як g10m4) — короткі fbOk/підписи lab; не роздував канцеляритом.
- g10m5l5 longWordShare z≈2 (слова «радіанн*», «тотожність») — у межах теми.
- Прапорців «нетипово» на non-boss l1–l4 за readWords/gradedShare немає.

### Пропозиції
- TERM: радіан; одиничне коло (повне); період 2π; arcsin/arccos; основна тотожність; формули додавання / подвійного кута — glossary/math.md (10 кл.)
- STYLE: у double-quoted рядках не писати `$π\\,"рад"$` — ламає JS; «рад» текстом або в template literal.
