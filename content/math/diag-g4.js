/* Слід · Математика, 4 клас — діагностика «Що ти вже вмієш?»
   Статус: verified (reports/verify/dg4.md). 8 базових тем 1–3 класів (baseline, по 2 завдання) + 6 тем 4 класу (по 1 завданню) = 22 завдання.
   Обсяг — docs/math-personalization-coverage.md (версія 2026-10-16.v2, розділ dg4).
   Порядок: спершу базові завдання всіх baseline-тем, далі складніші впереміш із темами 4 класу (з 12-го).
   Перевірка: node tools/validate.mjs --diag dg4; node tools/personalization-qa.mjs --diag dg4
   Схема й правила: docs/CONTENT_SCHEMA.md §9, style/math.md */
SLID.diag("math", {
  id: "dg4",
  grade: 4,
  title: "Що ти вже вмієш?",
  why: "Згадаємо, що ти вивчив у 1–3 класах, і знайдемо, з чого почати 4 клас.",
  status: "verified",
  signed: false,
  meta: { author: "claude-opus", created: "2026-10-30", factcheck: "self", teacher: null },
  topics: [
    // базові вміння 1–3 класів: уроків молодших класів у застосунку немає (CONTENT_SCHEMA §9, baseline)
    { id: "place", title: "Розряди до тисячі", kind: "pre", baseline: true, lessons: [], for: ["g4m1", "g4m2"] },
    { id: "add", title: "Додавання до тисячі", kind: "pre", baseline: true, lessons: [], for: ["g4m2"] },
    { id: "sub", title: "Віднімання до тисячі", kind: "pre", baseline: true, lessons: [], for: ["g4m2"] },
    { id: "mul", title: "Табличне множення", kind: "pre", baseline: true, lessons: [], for: ["g4m3", "m4s1"] },
    { id: "quot", title: "Табличне ділення", kind: "pre", baseline: true, lessons: [], for: ["g4m3", "m4s1"] },
    { id: "ord", title: "Порядок дій", kind: "pre", baseline: true, lessons: [], for: ["g4m2", "g4m3"] },
    { id: "units", title: "Довжина й час", kind: "pre", baseline: true, lessons: [], for: ["g4m4", "g4m5"] },
    { id: "parts", title: "Рівні частини", kind: "pre", baseline: true, lessons: [], for: ["g4m5"] },
    // теми 4 класу: по одному уроку, одна складена проба на все ядро уроку
    { id: "cur-g4m1", title: "Класи і розряди", kind: "cur", lessons: ["g4m1l1"] },
    { id: "cur-g4m2", title: "Письмове додавання", kind: "cur", lessons: ["g4m2l1"] },
    { id: "cur-m4s1", title: "Ділення з остачею", kind: "cur", lessons: ["m4a"] },
    { id: "cur-g4m3", title: "Множення на одноцифрове", kind: "cur", lessons: ["g4m3l1"] },
    { id: "cur-g4m4", title: "Час", kind: "cur", lessons: ["g4m4l1"] },
    { id: "cur-g4m5", title: "Половина, третина, чверть", kind: "cur", lessons: ["g4m5l1"] }
  ],
  items: [
    /* ── базові завдання baseline-тем ── */
    {
      topic: "place",
      type: "choice",
      sk: "num",
      title: "Що означає цифра 7 у числі 472?",
      opts: ["7 одиниць", "7 сотень", "7 десятків"],
      correct: 2
    },
    {
      topic: "add",
      type: "number",
      sk: "num",
      title: "$45 + 32 = ?$",
      body: "<p>Знайди суму.</p>",
      answer: 77
    },
    {
      topic: "parts",
      type: "shade",
      sk: "frac",
      title: "Зафарбуй половину смужки",
      body: "<p>Смужку поділено на 8 рівних частин. Торкайся частин, щоб зафарбувати їх.</p>",
      shape: "bar",
      n: 8,
      target: 4
    },
    {
      topic: "mul",
      type: "number",
      sk: "num",
      title: "$7 * 8 = ?$",
      body: "<p>Знайди добуток.</p>",
      answer: 56
    },
    {
      topic: "sub",
      type: "number",
      sk: "num",
      title: "$86 - 34 = ?$",
      body: "<p>Знайди різницю.</p>",
      answer: 52
    },
    {
      topic: "units",
      type: "number",
      sk: "meas",
      title: "3 м = ? см",
      body: "<p>Скільки сантиметрів у трьох метрах?</p>",
      answer: 300,
      unit: "см"
    },
    {
      topic: "quot",
      type: "number",
      sk: "num",
      title: "Скільки цукерок кожному?",
      body: "<p>24 цукерки розділили порівну між 4 дітьми. Скільки цукерок отримала кожна дитина?</p>",
      answer: 6
    },
    {
      topic: "ord",
      type: "number",
      sk: "num",
      title: "$20 + 4 * 5$",
      body: "<p>Знайди значення виразу.</p>",
      answer: 40
    },

    /* ── складніші завдання й теми 4 класу ── */
    {
      topic: "place",
      type: "number",
      sk: "num",
      title: "Запиши число цифрами",
      body: "<p>У числі 6 сотень і 4 одиниці.</p>",
      answer: 604
    },
    {
      topic: "add",
      type: "number",
      sk: "num",
      title: "$378 + 245 = ?$",
      body: "<p>Знайди суму.</p>",
      answer: 623
    },
    {
      topic: "mul",
      type: "number",
      sk: "num",
      title: "$6 * ? = 42$",
      body: "<p>Знайди невідомий множник.</p>",
      answer: 7
    },
    {
      topic: "cur-g4m1",
      type: "multi",
      sk: "num",
      title: "Що правда про число 40 315?",
      body: "<p>Обери всі правильні твердження.</p>",
      opts: [
        "Клас тисяч — 40, клас одиниць — 315",
        "Цифра 4 означає 4 тисячі",
        "Цифра 3 стоїть у розряді сотень",
        "40 315 = 40 000 + 300 + 10 + 5",
        "Нуль можна не писати: 4315 — те саме число"
      ],
      correct: [0, 2, 3]
    },
    {
      topic: "sub",
      type: "choice",
      sk: "num",
      title: "$452 - 178 = ?$",
      body: "<p>Знайди різницю.</p>",
      opts: ["326", "274", "284", "374"],
      correct: 1
    },
    {
      topic: "quot",
      type: "number",
      sk: "num",
      title: "Скільки пакетів?",
      body: "<p>48 яблук розклали в пакети, по 6 яблук у кожен. Скільки вийшло пакетів?</p>",
      answer: 8
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
      title: "Скільки наліпок подарувала Марта?",
      body: "<p>Марта мала 12 наліпок. Чверть усіх наліпок вона подарувала другові.</p>",
      answer: 3
    },
    {
      topic: "cur-m4s1",
      type: "multi",
      sk: "div",
      title: "Що правда про ділення $38 : 5$?",
      body: "<p>Обери всі правильні твердження.</p>",
      opts: [
        "38 : 5 = 6 (ост. 8)",
        "38 : 5 = 7 (ост. 3)",
        "Перевірка: $5 * 7 + 3 = 38$",
        "При діленні на 5 остача може бути 5"
      ],
      correct: [1, 2]
    },
    {
      topic: "units",
      type: "choice",
      sk: "meas",
      title: "О котрій закінчився урок?",
      body: "<p>Урок почався о 9:10 і тривав 45 хв.</p>",
      opts: ["9:45", "9:35", "10:55", "9:55"],
      correct: 3
    },
    {
      topic: "cur-g4m3",
      type: "multi",
      sk: "num",
      title: "Марко множить $34 * 6$ частинами",
      body: "<p>Обери всі правильні твердження.</p>",
      opts: [
        "34 розкладаємо на 30 і 4",
        "На 6 множимо лише 30, а 4 просто додаємо: $30 * 6 + 4$",
        "$30 * 6 = 180$ і $4 * 6 = 24$",
        "$34 * 6 = 204$"
      ],
      correct: [0, 2, 3]
    },
    {
      topic: "ord",
      type: "choice",
      sk: "num",
      title: "Де поставити дужки?",
      body: "<p>Треба, щоб значення виразу $18 - 6 : 2$ стало 6.</p>",
      opts: ["$(18 - 6) : 2$", "$18 - (6 : 2)$", "Дужки не потрібні: значення й так 6"],
      correct: 0
    },
    {
      topic: "cur-g4m4",
      type: "multi",
      sk: "meas",
      title: "Що правда про час?",
      body: "<p>Обери всі правильні твердження.</p>",
      opts: [
        "2 год = 120 хв",
        "1 год 30 хв = 130 хв",
        "Фільм почався о 18:40 і тривав 50 хв. Він закінчився о 19:30",
        "Потяг вирушив о 22:00 і прибув о 6:00 наступного ранку. Він їхав 8 год"
      ],
      correct: [0, 2, 3]
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
