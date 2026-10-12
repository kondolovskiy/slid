---
claimed_from: review
claimed_at: 2026-10-11T20:05:22.991Z
id: write-math-g8m2
type: write-section
subject: math
grade: 8
section: g8m2
weeks: [1, 12]
status: done
claimed_by: verifier-g8m2
created: 2026-09-27
---
# Написати розділ «Геометрія: чотирикутники» (Математика, 8 клас)

## Навіщо (з плану, можна уточнити)
Щоб знати властивості фігур, з яких складається наш світ: від кімнат до екранів.

## Теми уроків (з плану)
1. Паралелограм
2. Прямокутник, ромб, квадрат
3. Трапеція
4. Теорема Фалеса
5. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/math.md, style/profiles.json
- memory/long/glossary/math.md і memory/long/facts/math.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/math/g5-ms1.js

## Результат
- Файл `content/math/g8-g8m2.js` з `SLID.section("math", { id: "g8m2", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/math/g8m2/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/math.md)

## Готово, коли
- [x] `node tools/validate.mjs --section g8m2` — 0 помилок (build.mjs за інструкцією оркестратора не запускав)
- [x] Попередження або виправлено, або пояснено нижче
- [x] `node tools/stats.mjs --subject math` — уроки розділу без прапорців «нетипово для сім'ї» (окрім boss, див. нижче)
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
Файл: `content/math/g8-g8m2.js`. Scratchpad: `scratchpad/g8m2/`. Еталони: g7m4, g7m6. `requires: ["g7m6l1"]`.

### Уроки (5, усі draft)
1. g8m2l1 «Коли сторони біжать поруч» — паралелограм (означення, властивості, ознаки)
2. g8m2l2 «Прямі кути й рівні сторони» — прямокутник, ромб, квадрат
3. g8m2l3 «Дві основи — один пояс» — трапеція, середня лінія
4. g8m2l4 «Рівні відрізки на променях» — теорема Фалеса + середня лінія трикутника
5. g8m2l5 «План ділянки» — boss, badge g8m2boss

Інтерактив: explore 6 + lab 11 = 17; на кожен урок ≥ 2 (boss: 3 lab). plane axes:false, drag, polys, angles, dist.

### Факти (джерела)
1. Паралелограм: протилежні сторони попарно паралельні; властивості (сторони/кути рівні; сусідні 180°; діагоналі навпіл); ознаки (попарно рівні сторони; діагоналі навпіл) — Мерзляк Геометрія 8 §2–3 (2025) https://vshkole.com/8-klass/uchebniki/geometriya/ag-merzlyak-vb-polonskij-ms-yakir-2025 ; Бурда 2021 https://files.pidruchnyk.com.ua/uploads/book/8-klas-geometriya-burda-2021.pdf ; e-school PDF https://lms.e-school.net.ua/assets/courseware/v1/2fc1f6ec2ad2848a582ffe874a333f03/asset-v1:UIED+8thGeom06+2024+type@asset+block/8_kl_Geometry-23-32.pdf
2. Прямокутник / ромб / квадрат: означення як види паралелограма; діагоналі рівні (прямокутник), ⊥ (ромб); квадрат — обидва — Мерзляк §4–6; Істер §3–5 http://www.matematuka.inf.ua/nuh_8_klas/ister_pidr_8kl/ister_geom8.html
3. Трапеція: одна пара паралельних (основи); середня лінія = півсума основ — Мерзляк §8; slideshare/конспекти 8 кл.
4. Теорема Фалеса: паралельні, що відтинають рівні відрізки на одній стороні кута, відтинають рівні й на іншій — naurok https://naurok.com.ua/konspekt-uroku-z-geometri-teorema-falesa-8-kl-271494.html ; Мерзляк §11; середня лінія трикутника — половина третьої сторони (Мерзляк §7 / Бурда §6)

### Опора D-019 (де неочевидно)
- l1 lab «парні сторони рівні» ← info ознаки; lab «AC/BD навпіл» ← info
- l1 number сусідній кут ← info «сума сусідніх 180°»
- l2 final «AC=BD і 90°» ← info прямокутник+ромб+квадрат
- l3 lab MN=6 ← explore+info формула півсуми; number (10+6)/2 ← info
- l4 lab OA=AB ← explore+info Фалес; lab середини ← info середня лінія; number MN=BC/2 ← info
- boss: лише матеріал l1–l4

### Stats
- g8m2l5 gradedShare z=2.1 — типово для boss (як g7m4l4); пояснення: 6/7 екранів оцінювані.
- longWordShare знято скороченнями («парні» замість довгих термінів поза info).

### Пропозиції
- TERM → glossary/math: паралелограм; прямокутник/ромб/квадрат; трапеція; основи/бічні; середня лінія трапеції й трикутника; теорема Фалеса
- STYLE: термін «паралелограм» (5 складів) б’є longWordShare у 8 кл.; у тексті дублюємо «вид з уроку 1» / «парні сторони»
