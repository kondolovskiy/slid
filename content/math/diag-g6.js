/* Слід · Математика, 6 клас — діагностика «Що ти вже вмієш?»
   Статус: verified (ШІ). 12 тем-передумов (4–5 кл., по 2 завдання) + 6 тем 6 класу (по 1 завданню) = 30 завдань.
   Порядок: спершу базові завдання всіх тем-передумов, далі складніші впереміш із темами 6 класу.
   Перевірка: node tools/validate.mjs --diag dg6
   Схема й правила: docs/CONTENT_SCHEMA.md §9, style/math.md */
SLID.diag("math", {
  id: "dg6",
  grade: 6,
  title: "Що ти вже вмієш?",
  why: "Знайдемо теми, які варто згадати, щоб нові уроки давалися легше.",
  status: "verified",
  meta: { author: "claude-opus", created: "2026-10-13", factcheck: "self", teacher: null },
  topics: [
    // передумови з 4–5 класів
    { id: "ord", title: "Порядок дій", kind: "pre", lessons: ["ms0l3"], for: ["g6m5"] },
    { id: "eq", title: "Прості рівняння", kind: "pre", lessons: ["ms0l4"], for: ["g6m3", "g6m5"] },
    { id: "rem", title: "Ділення з остачею", kind: "pre", lessons: ["m4a"], for: ["g6m1"] },
    { id: "frac", title: "Що таке дріб", kind: "pre", lessons: ["m1"], for: ["g6m2"] },
    { id: "frac-cmp", title: "Порівняння дробів", kind: "pre", lessons: ["m2"], for: ["g6m2"] },
    { id: "frac-of", title: "Дріб від числа", kind: "pre", lessons: ["m3"], for: ["g6m2", "g6m3"] },
    { id: "frac-add", title: "Додавання і віднімання дробів", kind: "pre", lessons: ["m4"], for: ["g6m2"] },
    { id: "mixed", title: "Мішані числа", kind: "pre", lessons: ["m5"], for: ["g6m2"] },
    { id: "dec", title: "Десяткові дроби: запис і порівняння", kind: "pre", lessons: ["ms2l1", "ms2l2"], for: ["g6m4"] },
    { id: "dec-ops", title: "Дії з десятковими дробами", kind: "pre", lessons: ["ms2l3", "ms2l4"], for: ["g6m3", "g6m4"] },
    { id: "pct", title: "Відсотки", kind: "pre", lessons: ["ms3l1", "ms3l2"], for: ["g6m3"] },
    { id: "geom", title: "Периметр і площа", kind: "pre", lessons: ["ms0bl4", "ms4l1"], for: ["g6m3", "g6m5"] },
    // теми 6 класу
    { id: "g6-div", title: "Ознаки подільності", kind: "cur", lessons: ["g6m1l2"] },
    { id: "g6-lcm", title: "НСД і НСК", kind: "cur", lessons: ["g6m1l4"] },
    { id: "g6-fadd", title: "Дроби з різними знаменниками", kind: "cur", lessons: ["g6m2l4"] },
    { id: "g6-prop", title: "Пропорція", kind: "cur", lessons: ["g6m3l2"] },
    { id: "g6-neg", title: "Від'ємні числа", kind: "cur", lessons: ["g6m4l3"] },
    { id: "g6-eq", title: "Рівняння зі змінною в обох частинах", kind: "cur", lessons: ["g6m5l3"] }
  ],
  items: [
    /* ── базові завдання тем-передумов ── */
    {
      topic: "ord",
      type: "number",
      sk: "num",
      title: "$20 - 4 * 3$",
      body: "<p>Знайди значення виразу.</p>",
      answer: 8
    },
    {
      topic: "frac",
      type: "choice",
      sk: "frac",
      title: "Яку частину круга зафарбовано?",
      fig: { kind: "circle", n: 8, k: 5 },
      opts: ["$5/3$", "$8/5$", "$5/8$", "$3/8$"],
      correct: 2
    },
    {
      topic: "frac-cmp",
      type: "choice",
      sk: "cmp",
      title: "$6/7$ … $4/7$",
      body: "<p>Який знак поставити?</p>",
      opts: ["&lt;", "&gt;", "="],
      correct: 1
    },
    {
      topic: "rem",
      type: "number",
      sk: "div",
      title: "$29 : 6$ — яка остача?",
      body: "<p>Поділи з остачею і впиши лише остачу.</p>",
      answer: 5
    },
    {
      topic: "frac-add",
      type: "choice",
      sk: "ops",
      title: "$3/8 + 2/8 = ?$",
      opts: ["$5/16$", "$6/8$", "$1/8$", "$5/8$"],
      correct: 3
    },
    {
      topic: "eq",
      type: "number",
      sk: "eq",
      title: "$x + 9 = 25$",
      body: "<p>Знайди корінь рівняння.</p>",
      answer: 16
    },
    {
      topic: "pct",
      lesson: "ms3l1",
      type: "shade",
      sk: "pct",
      title: "Зафарбуй 30 % смужки",
      body: "<p>Смужку поділено на 10 рівних частин. Торкайся частин, щоб зафарбувати їх.</p>",
      shape: "bar",
      n: 10,
      target: 3
    },
    {
      topic: "dec",
      lesson: "ms2l1",
      type: "number",
      sk: "dec",
      title: "Запиши число цифрами",
      body: "<p>«Три цілих п'ять сотих».</p>",
      answer: 3.05
    },
    {
      topic: "mixed",
      type: "fracin",
      sk: "frac",
      title: "Запиши неправильним дробом",
      body: "<p>Впиши чисельник.</p>",
      expr: "2~1/4",
      den: 4,
      answer: 9
    },
    {
      topic: "geom",
      lesson: "ms0bl4",
      type: "number",
      sk: "meas",
      title: "Знайди периметр прямокутника",
      body: "<p>Довжина прямокутника — 7 см, ширина — 3 см.</p>",
      answer: 20,
      unit: "см"
    },
    {
      topic: "frac-of",
      type: "number",
      sk: "part",
      title: "Знайди $3/4$ від 20",
      answer: 15
    },
    {
      topic: "dec-ops",
      lesson: "ms2l3",
      type: "number",
      sk: "dec",
      title: "$0,6 + 0,7$",
      body: "<p>Знайди суму.</p>",
      answer: 1.3
    },

    /* ── складніші завдання й теми 6 класу ── */
    {
      topic: "ord",
      type: "choice",
      sk: "num",
      title: "$30 - 12 : 2 * 3$",
      body: "<p>Знайди значення виразу.</p>",
      opts: ["12", "27", "28", "3"],
      correct: 0
    },
    {
      topic: "frac",
      type: "choice",
      sk: "frac",
      title: "Яку частину кульок становлять червоні?",
      body: "<p>У коробці 3 червоні кульки й 5 синіх.</p>",
      opts: ["$3/5$", "$3/8$", "$5/8$", "$8/3$"],
      correct: 1
    },
    {
      topic: "rem",
      type: "number",
      sk: "div",
      title: "Скільки кабінок потрібно?",
      body: "<p>26 учнів піднімаються на гору канатною дорогою. В одну кабінку сідає 4 учні. Скільки кабінок потрібно, щоб піднялися всі?</p>",
      answer: 7,
      unit: "кабінок"
    },
    {
      topic: "frac-cmp",
      type: "order",
      sk: "cmp",
      title: "Від найменшого до найбільшого",
      body: "<p>Торкайся дробів по черзі.</p>",
      items: ["$2/9$", "$2/7$", "$2/5$", "$2/3$"],
      shuffle: [2, 0, 3, 1]
    },
    {
      topic: "g6-div",
      type: "multi",
      sk: "div",
      title: "Які числа діляться націло на 3?",
      body: "<p>Обери всі такі числа. Ділити в стовпчик не треба.</p>",
      opts: ["143", "252", "411", "730"],
      correct: [1, 2]
    },
    {
      topic: "eq",
      type: "choice",
      sk: "eq",
      title: "$x - 12 = 30$",
      body: "<p>Знайди корінь рівняння.</p>",
      opts: ["18", "360", "30", "42"],
      correct: 3
    },
    {
      topic: "dec",
      lesson: "ms2l2",
      type: "choice",
      sk: "dec",
      title: "Яке число найбільше?",
      opts: ["0,45", "0,099", "0,5", "0,405"],
      correct: 2
    },
    {
      topic: "frac-add",
      type: "fracin",
      sk: "ops",
      title: "Відніми дріб від одиниці",
      body: "<p>Впиши чисельник.</p>",
      expr: "1 - 5/12",
      den: 12,
      answer: 7
    },
    {
      topic: "g6-lcm",
      type: "number",
      sk: "div",
      title: "Знайди НСК (6; 8)",
      body: "<p>Впиши найменше спільне кратне чисел 6 і 8.</p>",
      answer: 24
    },
    {
      topic: "frac-of",
      type: "choice",
      sk: "part",
      title: "Скільки сторінок у книжці?",
      body: "<p>Ти прочитав $3/5$ книжки — це 30 сторінок.</p>",
      opts: ["50", "18", "90", "10"],
      correct: 0
    },
    {
      topic: "geom",
      lesson: "ms4l1",
      type: "number",
      sk: "meas",
      title: "Скільки лінолеуму потрібно?",
      body: "<p>Підлога кімнати — прямокутник 5 м на 4 м. Скільки квадратних метрів лінолеуму потрібно, щоб застелити її всю?</p>",
      answer: 20,
      unit: "м²"
    },
    {
      topic: "mixed",
      type: "lab",
      sk: "frac",
      title: "Постав точку на $7/4$",
      body: "<p>Кожну одиницю поділено на 4 рівні частини. Перетягни точку.</p>",
      lab: {
        kind: "numline",
        view: [0, 3],
        tick: 0.25,
        labels: 1,
        params: { p: { min: 0, max: 3, step: 0.25, start: 0, label: "Точка", out: false } },
        points: { P: { x: "p", y: "0", drag: true, label: "?" } },
        alt: "Координатний промінь від 0 до 3, кожна одиниця поділена на 4 частини, з точкою, яку можна тягнути"
      },
      goal: "p==1.75",
      solution: { p: 1.75 }
    },
    {
      topic: "g6-fadd",
      type: "fracin",
      sk: "ops",
      title: "Додай дроби",
      body: "<p>Впиши чисельник.</p>",
      expr: "1/4 + 1/6",
      den: 12,
      answer: 5
    },
    {
      topic: "dec-ops",
      lesson: "ms2l4",
      type: "sort",
      sk: "dec",
      title: "Куди переїхала кома?",
      body: "<p>Поклади кожен вираз у кошик з його значенням.</p>",
      bins: ["0,45", "4,5", "45"],
      items: [
        ["$4,5 * 10$", 2],
        ["$45 : 100$", 0],
        ["$0,45 * 10$", 1],
        ["$450 : 100$", 1],
        ["$4,5 : 10$", 0]
      ]
    },
    {
      topic: "pct",
      lesson: "ms3l2",
      type: "number",
      sk: "pct",
      title: "Скільки учнів ходить на плавання?",
      body: "<p>У школі 400 учнів. 15 % з них ходять на плавання.</p>",
      answer: 60,
      unit: "учнів"
    },
    {
      topic: "g6-prop",
      type: "number",
      sk: "pct",
      title: "Знайди $x$",
      body: "$$x : 8 = 3 : 4$$",
      answer: 6
    },
    {
      topic: "g6-neg",
      type: "lab",
      sk: "num",
      title: "Постав точку на значення $-8 + 5$",
      body: "<p>Обчисли суму й перетягни точку на це число.</p>",
      lab: {
        kind: "numline",
        view: [-10, 10],
        tick: 1,
        labels: 2,
        params: { p: { min: -10, max: 10, step: 1, start: 0, label: "Точка", out: false } },
        points: { P: { x: "p", y: "0", drag: true, label: "?" } },
        alt: "Числова пряма від −10 до 10 з точкою, яку можна тягнути"
      },
      goal: "p==-3",
      solution: { p: -3 }
    },
    {
      topic: "g6-eq",
      type: "number",
      sk: "eq",
      title: "$6x - 5 = 2x + 15$",
      body: "<p>Знайди корінь рівняння.</p>",
      answer: 5
    }
  ]
});
