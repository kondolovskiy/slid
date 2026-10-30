/* Слід · Математика, 4 клас — діагностика «Що ти вже вмієш?»
   Статус: verified. Злиття двох verified-версій (compare_dg4.md): основа — PR #5 (reports/verify/write-math-diag-g4.md);
   з PR #6 (reports/verify/dg4.md) дослівно перенесено signed: false, cur-g4m2 (№ 20) і cur-g4m5 (№ 22).
   8 baseline-опор 1–3 кл. (по 2 завдання) + 6 тем 4 класу (по 1 завданню) = 22 завдання.
   Обсяг і прив'язки — docs/math-personalization-coverage.md, розділ «dg4 · 4 клас» (матриця 2026-10-16.v2).
   Опори 1–3 кл. — baseline: уроків молодших класів у застосунку немає, тому lessons порожні, а for обов'язковий.
   Порядок: спершу базові завдання всіх опор (1–8), далі складніші впереміш із темами 4 класу (cur — 12, 14, 16, 18, 20, 22).
   Перевірка: node tools/validate.mjs --diag dg4; node tools/personalization-qa.mjs --diag dg4
   Схема й правила: docs/CONTENT_SCHEMA.md §9, docs/PERSONALIZATION.md «Baseline», style/math.md */
SLID.diag("math", {
  id: "dg4",
  grade: 4,
  title: "Що ти вже вмієш?",
  why: "Згадаємо, що ти вчив у 1–3 класах, і знайдемо, з чого почати 4 клас.",
  status: "verified",
  signed: false,
  meta: { author: "claude-opus", created: "2026-10-21", factcheck: "self", teacher: null },
  topics: [
    // опори 1–3 класів (baseline: уроків молодших класів у застосунку немає)
    { id: "place", title: "Розряди до тисячі", kind: "pre", baseline: true, lessons: [], for: ["g4m1", "g4m2"] },
    { id: "add", title: "Додавання до тисячі", kind: "pre", baseline: true, lessons: [], for: ["g4m2"] },
    { id: "sub", title: "Віднімання до тисячі", kind: "pre", baseline: true, lessons: [], for: ["g4m2"] },
    { id: "mul", title: "Табличне множення", kind: "pre", baseline: true, lessons: [], for: ["g4m3", "m4s1"] },
    { id: "quot", title: "Табличне ділення", kind: "pre", baseline: true, lessons: [], for: ["g4m3", "m4s1"] },
    { id: "ord", title: "Порядок дій", kind: "pre", baseline: true, lessons: [], for: ["g4m2", "g4m3"] },
    { id: "units", title: "Довжина й час", kind: "pre", baseline: true, lessons: [], for: ["g4m4", "g4m5"] },
    { id: "parts", title: "Рівні частини", kind: "pre", baseline: true, lessons: [], for: ["g4m5"] },
    // теми 4 класу: по одному required-уроку, усі компоненти ядра — на одному екрані
    { id: "cur-g4m1", title: "Класи і розряди", kind: "cur", lessons: ["g4m1l1"] },
    { id: "cur-g4m2", title: "Письмове додавання", kind: "cur", lessons: ["g4m2l1"] },
    { id: "cur-m4s1", title: "Ділення з остачею", kind: "cur", lessons: ["m4a"] },
    { id: "cur-g4m3", title: "Множення на одноцифрове", kind: "cur", lessons: ["g4m3l1"] },
    { id: "cur-g4m4", title: "Час", kind: "cur", lessons: ["g4m4l1"] },
    { id: "cur-g4m5", title: "Половина, третина, чверть", kind: "cur", lessons: ["g4m5l1"] }
  ],
  items: [
    /* ── базові завдання опор 1–3 класів ── */
    {
      topic: "place",
      type: "choice",
      sk: "num",
      title: "Що означає цифра 7 у числі 374?",
      opts: ["7 одиниць", "7 сотень", "7 десятків"],
      correct: 2
    },
    {
      topic: "add",
      type: "number",
      sk: "num",
      title: "$46 + 32$",
      body: "<p>Знайди суму.</p>",
      answer: 78
    },
    {
      topic: "mul",
      type: "number",
      sk: "num",
      title: "$7 * 8$",
      body: "<p>Знайди добуток.</p>",
      answer: 56
    },
    {
      topic: "units",
      type: "number",
      sk: "meas",
      title: "Скільки сантиметрів у 3 м?",
      answer: 300,
      unit: "см"
    },
    {
      topic: "sub",
      type: "number",
      sk: "num",
      title: "$87 - 45$",
      body: "<p>Знайди різницю.</p>",
      answer: 42
    },
    {
      topic: "parts",
      type: "choice",
      sk: "frac",
      title: "Яку частину круга зафарбовано?",
      body: "<p>Круг поділено на рівні частини.</p>",
      fig: { kind: "circle", n: 2, k: 1 },
      opts: ["Половину", "Третину", "Чверть"],
      correct: 0
    },
    {
      topic: "quot",
      type: "number",
      sk: "num",
      title: "Скільки яблук у кожному кошику?",
      body: "<p>24 яблука розклали порівну в 6 кошиків.</p>",
      answer: 4
    },
    {
      topic: "ord",
      type: "number",
      sk: "num",
      title: "$6 + 4 * 5$",
      body: "<p>Знайди значення виразу.</p>",
      answer: 26
    },

    /* ── складніші завдання опор і теми 4 класу ── */
    {
      topic: "place",
      type: "number",
      sk: "num",
      title: "Запиши число цифрами",
      body: "<p>5 сотень і 8 одиниць.</p>",
      answer: 508
    },
    {
      topic: "add",
      type: "number",
      sk: "num",
      title: "$368 + 257$",
      body: "<p>Знайди суму.</p>",
      answer: 625
    },
    {
      topic: "mul",
      type: "number",
      sk: "num",
      title: "Знайди невідомий множник",
      body: "<p>Яке число треба помножити на 6, щоб отримати 42?</p>",
      answer: 7
    },
    {
      topic: "cur-g4m1",
      type: "multi",
      sk: "num",
      title: "Число 40 305. Що правда?",
      body: "<p>Обери всі правильні твердження.</p>",
      opts: [
        "Цифра 4 стоїть у розряді десятків тисяч",
        "Клас тисяч у цьому числі — 403",
        "40 305 = 40 000 + 300 + 5",
        "40 305 = 4000 + 300 + 5",
        "Число з 6 десятків тисяч, 8 сотень і 2 одиниць записують так: 60 802"
      ],
      correct: [0, 2, 4]
    },
    {
      topic: "sub",
      type: "choice",
      sk: "num",
      title: "$524 - 186$",
      body: "<p>Знайди різницю.</p>",
      opts: ["462", "338", "438", "348"],
      correct: 1
    },
    {
      topic: "cur-m4s1",
      type: "sort",
      sk: "div",
      title: "Ділення з остачею: де помилка?",
      body: "<p>Поклади кожен запис у свій кошик.</p>",
      bins: ["Правильно", "Є помилка"],
      items: [
        ["29 : 4 = 7 (ост. 1)", 0],
        ["29 : 4 = 6 (ост. 5)", 1],
        ["38 : 6 = 6 (ост. 1)", 1],
        ["23 : 5 = 4 (ост. 3)", 0],
        ["При діленні на 4 остача може дорівнювати 4", 1]
      ]
    },
    {
      topic: "units",
      type: "choice",
      sk: "meas",
      title: "О котрій закінчився урок?",
      body: "<p>Урок почався о 9:15 і тривав 45 хв.</p>",
      opts: ["9:60", "10:15", "9:45", "10:00"],
      correct: 3
    },
    {
      topic: "cur-g4m3",
      type: "multi",
      sk: "num",
      title: "Які записи правильні?",
      body: "<p>Обери всі правильні записи.</p>",
      opts: [
        "$34 * 6 = 30 * 6 + 4$",
        "$34 * 6 = 30 * 6 + 4 * 6$",
        "$34 * 6 = 204$",
        "$34 * 6 = 3 * 6 + 4 * 6$",
        "$125 * 4 = 100 * 4 + 20 * 4 + 5 * 4$"
      ],
      correct: [1, 2, 4]
    },
    {
      topic: "quot",
      type: "choice",
      sk: "num",
      title: "Скільки коробок знадобилося?",
      body: "<p>35 олівців розклали по 5 у коробку.</p>",
      opts: ["30", "40", "7", "175"],
      correct: 2
    },
    {
      topic: "cur-g4m4",
      type: "multi",
      sk: "meas",
      title: "Що правда?",
      body: "<p>Обери всі правильні твердження.</p>",
      opts: [
        "2 год 15 хв = 135 хв",
        "1 год 30 хв = 130 хв",
        "Потяг вирушив о 22:00 і прибув о 6:00 наступного ранку. Він їхав 16 год",
        "Фільм почався о 18:50 і тривав 40 хв. Він закінчився о 19:30",
        "Автобус вирушив о 23:00 і прибув о 5:00 наступного ранку. Він їхав 6 год"
      ],
      correct: [0, 3, 4]
    },
    {
      topic: "ord",
      type: "choice",
      sk: "num",
      title: "У якому виразі значення 50?",
      opts: ["$6 + 4 * 5$", "$(6 + 4) * 5$", "$6 + (4 * 5)$", "$6 * 4 + 5$"],
      correct: 1
    },
    {
      topic: "cur-g4m2",
      type: "multi",
      sk: "num",
      title: "Петро додав стовпчиком",
      body: "<p>Петро обчислив $2657 + 1486$ і отримав 3033. Обери всі правильні твердження.</p>",
      opts: [
        "Числа пишемо розряд під розрядом",
        "Додавати починаємо з тисяч, зліва направо",
        "У розряді одиниць пишемо 13",
        "Петро загубив те, що було в розумі",
        "Правильна сума — 4143"
      ],
      correct: [0, 3, 4]
    },
    {
      topic: "parts",
      type: "number",
      sk: "frac",
      title: "Скільки червоних олівців?",
      body: "<p>У коробці 12 олівців. Чверть з них — червоні.</p>",
      answer: 3
    },
    {
      topic: "cur-g4m5",
      type: "sort",
      sk: "frac",
      title: "Яка це частина?",
      body: "<p>Поклади кожну картку в кошик з її назвою.</p>",
      bins: ["Половина", "Третина", "Чверть", "Жодна з них"],
      items: [
        ["$1/4$", 2],
        ["Одна з 2 нерівних частин", 3],
        ["$1/2$", 0],
        ["Одна з 3 рівних частин", 1],
        ["$1/3$", 1],
        ["Одна з 4 рівних частин", 2]
      ]
    }
  ]
});
