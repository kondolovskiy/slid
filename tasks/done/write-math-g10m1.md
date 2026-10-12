---
claimed_from: review
claimed_at: 2026-10-12T17:38:18.794Z
id: write-math-g10m1
type: write-section
subject: math
grade: 10
section: g10m1
weeks: [1, 9]
status: done
claimed_by: verifier-g10m1
created: 2026-09-27
---
# Написати розділ «Алгебра: функції і їхні властивості» (Математика, 10 клас)

## Навіщо (з плану, можна уточнити)
Щоб читати будь-який графік: від курсу валют до температури.

## Теми уроків (з плану)
1. Область визначення і значень
2. Парність, монотонність
3. Обернена функція
4. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/math.md, style/profiles.json
- memory/long/glossary/math.md і memory/long/facts/math.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/math/g5-ms1.js

## Результат
- Файл `content/math/g10-g10m1.js` з `SLID.section("math", { id: "g10m1", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/math/g10m1/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/math.md)

## Готово, коли
- [x] `node tools/validate.mjs --section g10m1` — 0 помилок (build — оркестратор)
- [x] Попередження або виправлено, або пояснено нижче
- [x] `node tools/stats.mjs --subject math` — уроки розділу без прапорців «нетипово для сім'ї»
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
Файл: `content/math/g10-g10m1.js`. Уроки (усі `draft`):
1. **g10m1l1** «Де формула живе» — ОВ/ОЗ (10 екранів; explore×2 + lab; hyp про ділення на 0)
2. **g10m1l2** «Дзеркало й нахил» — парність + монотонність (11 екранів; explore + lab×2)
3. **g10m1l3** «Шлях назад» — обернена (10 екранів; explore×2 + lab)
4. **g10m1l4** boss «Зміна аналітика» — badge `g10m1boss` (8 екранів)

Validate: `node tools/validate.mjs --section g10m1` → **0 помилок, 0 попереджень**. Stats: без «нетипово для сім'ї» для g10m1*. Build не запускав.

### Факти з джерелами
1. $D(f)$ — допустимі $x$; $E(f)$ — значення $y$; без умов $D(f)$ = де формула має зміст — Мерзляк 10 проф. https://subjectum.eu/textbook/mathematics/10klas/4.html ; Істер https://subjectum.eu/textbook/mathematics/10klas_13/4.html
2. Парна: $f(-x)=f(x)$ + симетрична $D$, вісь $Oy$; непарна: $f(-x)=-f(x)$, центр $O$ — ті самі URL
3. Зростання / спадання / монотонність на проміжку — Істер https://subjectum.eu/textbook/mathematics/10klas_13/4.html
4. Оборотна; зростаюча/спадна ⇒ оборотна; взаємно обернені; симетрія графіків відносно $y=x$ — Мерзляк https://subjectum.eu/textbook/mathematics/10klas/6.html

### Опора завдань (D-019), де неочевидно
- l1 choice $D(1/(x-2))$: info + explore з «діркою» при $x=2$
- l1 choice $E(x^2-1)$: explore з вершиною $(0;-1)$
- l1 number $\sqrt{x-3}$: info про зміст формули + умова під коренем на екрані
- l2 choice $x^3$ непарна: info після парності
- l2 choice зростання при $k>0$: info про монотонність
- l2 фінал спадання $x^2$ на $(-∞;0]$: info + знання параболи з g9m3 (requires)
- l3 formula оберненої $2x-1$: info з прикладом методу + крок на екрані
- l3 $g(5)$: info + попередній choice з формулою
- boss: лише матеріал уроків 1–3

### Пропозиції
- TERM у glossary (10 кл.): $D(f)$, $E(f)$, парна/непарна, монотонна, оборотна, взаємно обернені
- requires: `g7m5l1`, `g9m3l1`
- Зображень немає (усі опори через plane lab)

signed: true. sk: `func`.

### Верифікація (verifier-g10m1, 2026-10-12)
- Факти/відповіді/D-019: без ❌. Критичних правок змісту немає.
- Усі 4 уроки → `verified`. Звіт: `reports/verify/g10m1.md`.
- Validate: 0/0. Stats: без прапорців на g10m1*.
