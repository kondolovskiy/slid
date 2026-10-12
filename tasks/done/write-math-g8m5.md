---
claimed_from: review
claimed_at: 2026-10-11T20:29:13.831Z
id: write-math-g8m5
type: write-section
subject: math
grade: 8
section: g8m5
weeks: [23, 35]
status: done
claimed_by: verifier-g8m5
created: 2026-09-27
---
# Написати розділ «Алгебра: квадратні рівняння» (Математика, 8 клас)

## Навіщо (з плану, можна уточнити)
Щоб розв'язувати задачі, де невідоме множиться саме на себе: площі, рух, польоти.

## Теми уроків (з плану)
1. Неповні квадратні рівняння
2. Дискримінант і формула коренів
3. Теорема Вієта
4. Задачі на квадратні рівняння
5. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/math.md, style/profiles.json
- memory/long/glossary/math.md і memory/long/facts/math.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/math/g5-ms1.js

## Результат
- Файл `content/math/g8-g8m5.js` з `SLID.section("math", { id: "g8m5", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/math/g8m5/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/math.md)

## Готово, коли
- [x] `node tools/validate.mjs --section g8m5` — 0 помилок (build не запускав — за оркестратором)
- [x] Попередження: 0
- [x] `node tools/stats.mjs --subject math` — g8m5l1–l5 без прапорців «нетипово для сім'ї»
- [x] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [x] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
Файл: `content/math/g8-g8m5.js`. `signed: true`. Scratchpad: `scratchpad/g8m5/`.

### Уроки
1. **g8m5l1** «Коли немає члена» — неповні ($ax^2=0$, $ax^2+c=0$, $ax^2+bx=0$); plane $y=ax^2+c$; lab другий корінь $-b/a=-3$
2. **g8m5l2** «Скільки коренів?» — $D=b^2-4ac$; explore «крути D» + корені на $Ox$; lab×3: два / один / жодного; формула коренів
3. **g8m5l3** «Сума й добуток» — теорема Вієти для $x^2+px+q=0$; explore корені→рівняння; lab сума 5 і добуток 6
4. **g8m5l4** «Площа й політ» — грядка $x(x+3)=40$; політ $y=-x^2+6x$; послідовні числа
5. **g8m5l5** boss «Квадратна зміна» — значок `g8m5boss`

Інтерактив: explore 5 + lab 7 (=12). Урок 2: 1 explore + 3 lab (≥3).

### Факти (джерела)
1. Квадратне $ax^2+bx+c=0$ ($a≠0$); неповне, якщо $b=0$ або $c=0$; три види й розв'язання — https://www.miyklas.com.ua/p/algebra/8-klas/kvadratni-rivniannia-14001/kvadratni-rivniannia-nepovni-kvadratni-rivniannia-14002/re-a52278de-52d0-441e-8640-289b73e90ab0 ; https://primat.org/publ/shkola_reshebniki/matematika/tipovi_zavdannja_zno_kvadratni_rivnjannja/48-1-0-1525
2. $D=b^2-4ac$; $D>0$ два корені $x=(-b±√D)/(2a)$; $D=0$ один $x=-b/(2a)$; $D<0$ немає — https://www.miyklas.com.ua/p/algebra/8-klas/kvadratni-rivniannia-14001/formula-koreniv-kvadratnogo-rivniannia-14004/re-259a10de-71f9-495a-9aea-35d66bcf5b59 ; Мерзляк Алгебра 8 §19
3. Вієта для $x^2+px+q=0$: $x_1+x_2=-p$, $x_1·x_2=q$; обернена — https://www.miyklas.com.ua/p/algebra/8-klas/kvadratni-rivniannia-14001/teorema-viyeta-ta-obernena-do-neyi-teorema-14020/re-b41a4e10-f1c0-4cc6-aa39-00c1280b39b8 ; Мерзляк §20

### D-019 (опора неочевидна)
- l1 hyp «скільки коренів $x^2=36$» — міркування (квадрат ±); теорія далі
- l2 labs D — опора: explore + info з формулою $D$ на попередніх екранах
- l3 number добуток Вієти — info теорема (екран перед explore/lab)
- l4 ширина грядки — explore rect + Вієта з l3; flight lab — розклад $x(6-x)=0$ у hint/reveal після неповних l1
- boss — лише матеріал l1–l4

### Пропозиції
- TERM: квадратне рівняння; неповне; зведене; дискримінант $D$; теорема Вієти
- STYLE: слово «дискримінант» підвищує longWordShare — у текстах чергував із $D$
