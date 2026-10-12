---
claimed_from: review
claimed_at: 2026-10-11T20:28:09.863Z
id: write-math-g8m6
type: write-section
subject: math
grade: 8
section: g8m6
weeks: [23, 35]
status: done
claimed_by: verifier-g8m6
created: 2026-09-27
---
# Написати розділ «Геометрія: многокутники і площі» (Математика, 8 клас)

## Навіщо (з плану, можна уточнити)
Щоб рахувати площі будь-яких фігур: ділянок, кімнат, карт.

## Теми уроків (з плану)
1. Многокутники
2. Площі паралелограма, трикутника, трапеції
3. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/math.md, style/profiles.json
- memory/long/glossary/math.md і memory/long/facts/math.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/math/g5-ms1.js

## Результат
- Файл `content/math/g8-g8m6.js` з `SLID.section("math", { id: "g8m6", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/math/g8m6/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/math.md)

## Готово, коли
- [x] `node tools/validate.mjs --section g8m6` — 0 помилок (build не запускав — за оркестратором)
- [x] Попередження: 0; stats — лише boss gradedShare z=2 (типово для фіналу, як g8m2l5)
- [x] Кожен урок: status: "draft", проблема → теорія, ≥ 1 hint, outro 2–4
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
Файл: `content/math/g8-g8m6.js` (draft). Уроки:
1. **g8m6l1** «Скільки кутів у ділянці» — многокутник, опуклий, $S=(n-2)·180°$
2. **g8m6l2** «Основа на висоту» — площі паралелограма / трикутника / трапеції
3. **g8m6l3** «План двору» (boss, badge g8m6boss)

explore+lab: l1=3 (2 explore + 1 lab), l2=5 (2 explore + 3 lab), l3=2 lab. Усього 10. rect у l2 (live S); plane — зсув паралелограма, основа/висота, n і сума кутів.

### Факти (джерела)
1. Сума кутів опуклого $n$-кутника $S=(n-2)·180°$ — Мерзляк Геометрія 8 §19; https://subjectum.eu/gdz/mathematics/8klas_9/22.html ; програма 8 кл. https://matematukrschko.3dn.ru/publ/programa_z_geometriji_8_klas/1-1-0-6
2. Площа паралелограма $S=a·h$ — miyklas НУШ 8 https://www.miyklas.com.ua/p/geometria/8-klas/ploshchi-figur-14511/ploshcha-paralelograma-trikutnika-i-trapetciyi-14514/re-e366753f-b031-448f-9aee-42f92d6e4f59 ; Мерзляк §21
3. Площа трикутника $S=(a·h)/2$ — ті самі; ua.onlinemschool.com/math/formula/area/
4. Площа трапеції $S=((a+b)/2)·h$ — miyklas + Мерзляк §23

### D-019 (опора)
- l1 number восьмикутник / фінал n — формула в info (екран 5) + explore n
- l1 lab 720° — explore з live сумою безпосередньо перед lab
- l2 labs 24 / 12 / 30 — формули в info; live S на екрані
- l2 choice помилка трапеції — формула в info
- boss — лише матеріал l1–l2 (сума кутів, три формули, вибір формули)

### Пропозиції
- TERM → glossary/math: многокутник; опуклий / неопуклий; сума кутів $(n-2)·180°$; основа й висота; формули площ паралелограма / трикутника / трапеції
- STYLE: boss gradedShare 0,86 — OK для фіналу (не змішувати з non-boss у z)

Сумнівів щодо фактів немає. Зображень не додавав.

### Верифікатор (verifier-g8m6, 2026-10-11)
- Звіт: `reports/verify/g8m6.md`. Усі 3 уроки → `verified`.
- Критичні правки: (1) explore зсуву — непрацюючий drag на `2+t`, замінено повзунком «зсув»; (2) висота трапеції на рисунку була бічною стороною → вертикаль $D→H$.
- Validate 0/0. Задачу переміщено в `tasks/done/`.
