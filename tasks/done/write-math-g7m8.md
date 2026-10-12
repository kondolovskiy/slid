---
claimed_from: review
claimed_at: 2026-10-11T19:52:08.927Z
id: write-math-g7m8
type: write-section
subject: math
grade: 7
section: g7m8
weeks: [31, 35]
status: done
claimed_by: verifier-g7m8
created: 2026-09-27
---
# Написати розділ «Геометрія: коло» (Математика, 7 клас)

## Навіщо (з плану, можна уточнити)
Щоб будувати фігури циркулем і лінійкою, як давні геометри.

## Теми уроків (з плану)
1. Коло і круг
2. Дотична до кола
3. Задачі на побудову
4. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/math.md, style/profiles.json
- memory/long/glossary/math.md і memory/long/facts/math.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/math/g5-ms1.js

## Результат
- Файл `content/math/g7-g7m8.js` з `SLID.section("math", { id: "g7m8", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/math/g7m8/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/math.md)

## Готово, коли
- [x] `node tools/validate.mjs --section g7m8` — 0 помилок (build не запускав — оркестратор)
- [x] Попередження: 0
- [x] `node tools/stats.mjs --subject math` — уроки розділу без прапорців «нетипово для сім'ї»
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
Файл: `content/math/g7-g7m8.js`. Статус усіх уроків: `draft`. Validate `--section g7m8`: 0 помилок, 0 попереджень. Stats: без прапорців «нетипово для сім'ї».

### Уроки
1. **g7m8l1** «Коло чи круг?» — коло/круг, радіус, хорда, діаметр; explore×2 + lab×2
2. **g7m8l2** «Дотик однієї точки» — дотична ⊥ радіусу; дві дотичні рівні; explore×2 + lab×2
3. **g7m8l3** «Циркуль замість лінійки» — ГМТ, рівносторонній (циркулем), серединний перпендикуляр, середина; explore×1 + lab×3
4. **g7m8l4** boss «Креслення клумби» — badge `g7m8boss`; lab×3 + choice/number

### Факти (джерела)
- Коло = точки на відстані r від центра; круг = коло + внутрішність; хорда; діаметр d=2r — найдовша хорда — miyklas НУШ 7 кл. https://www.miyklas.com.ua/p/geometria/7-klas/kolo-i-krug-geometrichni-pobudovi-24777/zavdannia-na-pobudovu-13634/re-232272f4-ce9b-4640-823e-bd8259ff8f48 ; Мерзляк Геометрія 7 §4 https://vshkole.com/7-klass/uchebniki/geometriya/ag-merzlyak-vb-polonskij-ms-yakir-2024/4-kolo-ta-krug — узгоджено з facts/math №39
- Дотична = одна спільна точка; ⊥ радіусу в точці дотику; ознака навпаки; дві дотичні з точки — рівні відрізки — https://naurok.com.ua/urok-z-geometri-dotichna-do-kola-vlastivosti-453529.html ; https://naurok.com.ua/kolo-i-krug-dotichna-do-kola-ta-vlastivosti-154959.html
- ГМТ; побудова рівностороннього двома колами; серединний перпендикуляр як ГМТ MA=MB — Мерзляк §23–24 (задачі на побудову) + miyklas вище

### D-019 (опора неочевидна)
- l1 «OP=? на колі» ← explore «тягни P» + info означення
- l2 «PA=PB» ← info + explore двох дотичних
- l2 number 9 см ← властивість з info/choice щойно
- l3 ГМТ фінал ← info ГМТ цього уроку
- boss завдання 2/4/6 ← уроки l1–l3 розділу

### Сумнівні / технічні
- Рівносторонній на цілочисельній сітці: goal з допуском `abs(dist−4)<0.2`, step 0.5 (√3)
- Літера довжини кола C/l у цьому розділі не використовувалась (handoff №6)

### Пропозиції
- TERM: дотична; точка дотику; січна; хорда; діаметр; ГМТ; серединний перпендикуляр — у glossary/math (коло/круг уже є)
- ENGINE: точка на колі з drag по дузі (кутовий параметр з drag) — зараз лише повзунок кута або вільний drag + dist
