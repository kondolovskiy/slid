---
claimed_from: review
claimed_at: 2026-10-12T02:47:07.900Z
id: write-math-g9m4
type: write-section
subject: math
grade: 9
section: g9m4
weeks: [11, 22]
status: done
claimed_by: verifier-g9m4
created: 2026-09-27
---
# Написати розділ «Геометрія: розв'язування трикутників» (Математика, 9 клас)

## Навіщо (з плану, можна уточнити)
Щоб знаходити невідомі сторони й кути в будь-якому трикутнику.

## Теми уроків (з плану)
1. Синус, косинус, тангенс кутів до 180°
2. Теорема косинусів
3. Теорема синусів
4. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/math.md, style/profiles.json
- memory/long/glossary/math.md і memory/long/facts/math.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/math/g5-ms1.js

## Результат
- Файл `content/math/g9-g9m4.js` з `SLID.section("math", { id: "g9m4", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/math/g9m4/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/math.md)

## Готово, коли
- [x] `node tools/validate.mjs --section g9m4` — 0 помилок (build — оркестратор)
- [x] Попередження або виправлено, або пояснено нижче
- [x] `node tools/stats.mjs --subject math` — уроки розділу без прапорців «нетипово для сім'ї» (див. нотатки)
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
Файл: `content/math/g9-g9m4.js`. 4 уроки, усі `draft`. Scratchpad: `scratchpad/g9m4/`.

### Уроки
1. **g9m4l1** «Одиничне півколо» — sin/cos/tg до 180° (одиничне півколо + графік sin з `xpi`)
2. **g9m4l2** «Міст між сторонами» — теорема косинусів (трикутник drag, live a² vs RHS)
3. **g9m4l3** «Сторона й протилежний кут» — теорема синусів (+ описане коло 2R)
4. **g9m4l4** boss «Помічник геодезиста» — значок `g9m4boss`

### explore + lab
- l1: 4 (2 explore + 2 lab)
- l2: 3 (1 explore + 2 lab)
- l3: 3 (2 explore + 1 lab)
- l4: 2 (2 lab)
Усі ≥ 2 на урок (геометрія/тригонометрія).

### Факти (джерела)
1. cos a / sin a = абсциса / ордината точки одиничного півкола (0°≤a≤180°); sin(180°−a)=sin a; cos(180°−a)=−cos a; tg a = sin a / cos a (a≠90°) — Мерзляк Геометрія 9 §1 https://subjectum.eu/textbook/mathematics/9klas_9/2.html ; https://subjectum.eu/textbook/mathematics/9klas_9/9.html
2. Теорема косинусів: a² = b² + c² − 2bc cos A (узагальнення Піфагора) — Мерзляк §2 https://subjectum.eu/textbook/mathematics/9klas_9/3.html ; miyklas https://www.miyklas.com.ua/p/geometria/9-klas/rozv-iazannia-trikutnikiv-15512/teorema-sinusiv-i-teorema-kosinusiv-15515/re-84b1d852-f455-439b-b4be-f044c16290b0
3. Теорема синусів: a/sin A = b/sin B = c/sin C = 2R — Мерзляк §3 https://subjectum.eu/textbook/mathematics/9klas_9/4.html ; learning.ua https://learning.ua/blog/teorema-synusiv-pryklady-dlia-batkiv/
4. Чисті приклади: cos 120°=−1/2; sin 150°=1/2; SAS 5,5,60°→a=5; SAS 8,5,60°→a=7; SSS 3,5,7→∠=120°; A=30°,a=5,B=90°→b=10, R=5 — з формул вище + табличні значення.

### D-019 (опора неочевидна)
- l1 choice cos 120° — опора: info (формула зведення) + відомий cos 60°=1/2 у body
- l2 number a=7 — опора: info (теорема) + body з cos 60°=1/2
- l2 finale 120° — опора: body дає cos A=−1/2 (обчислення з теорії уроку)
- l3 number b=10 / R=5 — опора: info (теорема синусів / a=2R sin A) + значення sin у body
- boss завдання — лише матеріал уроків 1–3 розділу

### Stats
- validate: **0 помилок, 0 попереджень**
- Прапорець: лише **g9m4l4 gradedShare z=2.2** (boss gradedShare≈0.86) — очікувано для фіналу; style-sync/handoff: boss не змішувати з non-boss (D-011). Non-boss без прапорців.

### Пропозиції
- TERM → glossary/math: одиничне півколо; теорема косинусів; теорема синусів; радіус описаного кола R; tg (шкільне, не tan)
- STYLE: у формулах upright `"sin"`/`"cos"`/`"tg"` через лапки mathHTML — працює; пропоную згадати в math.md
