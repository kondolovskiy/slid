/* Слід · Англійська мова, 5 клас — тест рівня «What do you know?» (dge5)
   Статус: verified — verifier-dge5, 2026-11-20 (reports/verify/dge5.md); автор — writer-dge5 (write-eng-diag-g5).
   10 тем-передумов з 4 класу (по 2 завдання: базове → складніше) + 10 тем 5 класу (по 1 завданню на розділ e5s1–e5s10) = 30 завдань.
   Передумови — уроки e4s*, на які посилаються requires розділів 5 кл. (reports/verify/plan-eng-g5.md §6); уроки 4 кл. є, тому без baseline.
   Теми cur — один урок розділу (без boss); завдання охоплює ядро його learned; лексика й граматика — лише з цих уроків.
   Рівень — A1 → A2 (модельна програма «Іноземна мова. 5–9 класи», Редько В. Г. та ін., 2021; facts/eng.md «Джерела»).
   Увесь зміст — англійською, британська норма (D-054); варіанти A, B, C ставить рушій. Тексти й речення — власні.
   Порядок: спершу базові завдання всіх передумов (1–10), далі складніші впереміш із темами 5 класу (cur).
   id тесту dge5 і порядок завдань — ключі прогресу: заміна на місці — лише з rev (CONTENT_SCHEMA §9).
   Перевірка: node tools/validate.mjs --diag dge5
   Схема й правила: docs/CONTENT_SCHEMA.md §9, §4.1; docs/design/english.md §7; style/eng.md */
SLID.diag("eng", {
  id: "dge5",
  grade: 5,
  title: "What do you know?",
  why: "Let’s see what you know from Year 4 and Year 5. Then we can find the best place to start.",
  status: "verified",
  meta: { author: "writer-dge5", created: "2026-11-20", factcheck: "verifier-dge5 (reports/verify/dge5.md)", teacher: null },
  topics: [
    // передумови з 4 класу (уроки, на які спираються розділи 5 кл.)
    { id: "have", title: "Have got, has got", kind: "pre", lessons: ["e4s1l2"], for: ["e5s1"] },
    { id: "freq", title: "Always, usually, never", kind: "pre", lessons: ["e4s3l2"], for: ["e5s2"] },
    { id: "sport", title: "Play, go, do", kind: "pre", lessons: ["e4s3l1"], for: ["e5s6"] },
    { id: "much", title: "How many? How much?", kind: "pre", lessons: ["e4s4l3"], for: ["e5s3"] },
    { id: "someany", title: "Some and any", kind: "pre", lessons: ["e4s2l5"], for: ["e5s3", "e5s7"] },
    { id: "cont", title: "I play, I’m playing", kind: "pre", lessons: ["e4s6l2", "e4s8l5"], for: ["e5s4"] },
    { id: "comp", title: "Bigger, hotter, sunnier", kind: "pre", lessons: ["e4s6l5"], for: ["e5s5", "e5s10"] },
    { id: "when", title: "On Saturday, at 3 pm, in May", kind: "pre", lessons: ["e4s8l2"], for: ["e5s8", "e5s2"] },
    { id: "past", title: "Went, swam, was, were", kind: "pre", lessons: ["e4s7l5"], for: ["e5s8", "e5s9"] },
    { id: "will", title: "I think I’ll …", kind: "pre", lessons: ["e4s7l6"], for: ["e5s9"] },
    // теми 5 класу: по одному уроку на розділ (без boss)
    { id: "cur-e5s1", title: "My, his, their, its", kind: "cur", lessons: ["e5s1l3"] },
    { id: "cur-e5s2", title: "Does he…? He doesn’t…", kind: "cur", lessons: ["e5s2l3"] },
    { id: "cur-e5s3", title: "A lot of, not much, not many", kind: "cur", lessons: ["e5s3l4"] },
    { id: "cur-e5s4", title: "Trousers are, a pair of…", kind: "cur", lessons: ["e5s4l2"] },
    { id: "cur-e5s5", title: "More beautiful, better, worse", kind: "cur", lessons: ["e5s5l4"] },
    { id: "cur-e5s6", title: "I love drawing", kind: "cur", lessons: ["e5s6l2"] },
    { id: "cur-e5s7", title: "Next to, opposite, between", kind: "cur", lessons: ["e5s7l3"] },
    { id: "cur-e5s8", title: "On the fifth of May", kind: "cur", lessons: ["e5s8l2"] },
    { id: "cur-e5s9", title: "I’m going to …", kind: "cur", lessons: ["e5s9l3"] },
    { id: "cur-e5s10", title: "The biggest, the most beautiful", kind: "cur", lessons: ["e5s10l5"] }
  ],
  items: [
    /* ── базові завдання передумов (4 клас) ── */
    {
      topic: "have",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Oksana ___ got a little brother, Dmytro.</p>",
      opts: ["have", "has", "is"],
      correct: 1
    },
    {
      topic: "freq",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Bohdan plays tennis every Saturday.</p><p>He ___ plays tennis on Saturdays.</p>",
      opts: ["always", "sometimes", "never"],
      correct: 0
    },
    {
      topic: "sport",
      type: "choice",
      sk: "vocab",
      title: "Choose the correct answer.",
      body: "<p>Sofiia: “I ___ gymnastics on Saturdays.”</p>",
      opts: ["play", "go", "do"],
      correct: 2
    },
    {
      topic: "much",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Emma: “How ___ bananas do we need?”</p>",
      opts: ["much", "many", "a lot"],
      correct: 1
    },
    {
      topic: "someany",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>There aren’t ___ chairs in the kitchen.</p>",
      opts: ["some", "a", "any"],
      correct: 2
    },
    {
      topic: "cont",
      lesson: "e4s6l2",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Look! Dmytro and his friends ___ football in the garden.</p>",
      opts: ["is playing", "playing", "are playing"],
      correct: 2
    },
    {
      topic: "comp",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>A plane is ___ than a train.</p>",
      opts: ["faster", "fast", "more fast"],
      correct: 0
    },
    {
      topic: "when",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Mariia’s party is ___ Saturday.</p>",
      opts: ["in", "at", "on"],
      correct: 2
    },
    {
      topic: "past",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Yesterday Oksana ___ to the beach.</p>",
      opts: ["went", "go", "goes"],
      correct: 0
    },
    {
      topic: "will",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Taras isn’t sure about Saturday.</p><p>“I think I’ll ___ my cousin Marta.”</p>",
      opts: ["visiting", "visit", "visits"],
      correct: 1
    },

    /* ── складніші завдання передумов і теми 5 класу ── */
    {
      topic: "freq",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Emma writes about her week.</p>",
      text: "I {*always go|go always} swimming on Saturdays. I {*am always|always am} happy in the pool. I {*never play|play never} basketball."
    },
    {
      topic: "cur-e5s1",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Read about Oksana’s family.</p>",
      text: "Petro has got a red phone. It’s {*his|her|their} phone. Oksana and Dmytro have got a cat. It’s {*their|his|her} cat. {*Its|It’s} name is Murka."
    },
    {
      topic: "have",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Oksana has got a cousin, Denys. She hasn’t got a sister. Emma asks her.</p>",
      text: "Emma: {*Have|Has} you got a cousin? Oksana: Yes, I {*have|has}. Emma: And have you got a sister? Oksana: No, I {*haven’t|haven’t got}."
    },
    {
      topic: "cur-e5s2",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Emma asks Andrii about his friend.</p>",
      text: "Emma: {*Does|Do} Bohdan walk to school? Andrii: No, he {*doesn’t|don’t}. He {*doesn’t live|doesn’t lives|don’t live} near our school. He goes by bus."
    },
    {
      topic: "sport",
      type: "gaps",
      sk: "vocab",
      title: "Fill in the gaps.",
      body: "<p>Taras writes about his friends.</p>",
      text: "Ostap {*plays|goes|does} football on Mondays. He sometimes {plays|*goes|does} cycling with me. Oksana {plays|goes|*does} karate."
    },
    {
      topic: "cur-e5s3",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Taras looks in the kitchen.</p>",
      text: "We’ve got {*a lot of|much} eggs. But there isn’t {*much|many} milk, and there aren’t {*many|much} apples."
    },
    {
      topic: "much",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Andrii and his mum make a shopping list.</p>",
      text: "How {many|*much} milk have we got? How {*many|much} oranges do we need? How {many|*much} bread do we need?"
    },
    {
      topic: "cur-e5s4",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Mariia writes about her clothes.</p>",
      text: "My new shorts {*are|is} green. I’ve got two {*pairs|pair} of trainers: white and blue. And I need {*a pair of|a} gloves for winter."
    },
    {
      topic: "someany",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Taras asks Mariia about her room.</p>",
      text: "Taras: Is there a lamp on your desk? Mariia: Yes, there {*is|are}. Taras: Are there any books on your shelf? Mariia: Yes, there {*are|is}. There are {*some|any} English books too."
    },
    {
      topic: "cur-e5s5",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Oksana writes about the weather.</p>",
      text: "For me, spring is {*more beautiful|beautifuller|beautiful} than autumn. A storm is {*worse|badder|more bad} than a little rain. A sunny day is {*better|gooder|more good} for a picnic than a rainy day."
    },
    {
      topic: "cont",
      lesson: "e4s8l5",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Mariia writes to Emma.</p>",
      text: "I usually {*walk|am walking} to school with Polina. But today it’s snowing. Now I {go|*am going} to school by bus with my mum. Look! The children {play|*are playing} in the snow!"
    },
    {
      topic: "cur-e5s6",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Mariia’s chart: drawing ●●●, running ●○○, getting up early ○○○.</p>",
      text: "Mariia {*loves|hates} drawing. She {*doesn’t like|loves} running, and she hates getting up early. Her friend Emma loves {*swimming|swiming|swim}."
    },
    {
      topic: "comp",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Today: Odesa — 30 °C, sunny, no wind. Lviv — 25 °C, very windy.</p>",
      text: "Kyiv is {*bigger|biger} than Lviv. Today Odesa is {*hotter|hoter} than Lviv. Lviv is {*windier|windyer} than Odesa today."
    },
    {
      topic: "cur-e5s7",
      type: "gaps",
      sk: "vocab",
      title: "Fill in the gaps.",
      img: "img/eng/e5s7/town-map.svg",
      fit: true,
      cap: "A map of the centre of Emma’s town",
      body: "<p>Look at the map.</p>",
      text: "The post office is {*between|opposite} the library and the cinema. The school is {*opposite|next to} the cinema. The library is {*next to|opposite} the bank."
    },
    {
      topic: "when",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Emma writes to Andrii.</p>",
      text: "Our school fair is {*on|in|at} Friday. It starts {*at|on|in} 2 pm. My birthday is {*in|on|at} May."
    },
    {
      topic: "cur-e5s8",
      type: "gaps",
      sk: "func",
      title: "Fill in the gaps.",
      body: "<p>Taras writes about birthdays.</p>",
      text: "My birthday is {*on|in} 5 May. That’s the {*fifth|five} of May. Emma’s birthday is {*in|on} May too!"
    },
    {
      topic: "past",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Taras writes a postcard from the Carpathians.</p>",
      text: "Yesterday we {*went|go} to a river. The water {*was|were} cold, but I {*swam|swim} in it!"
    },
    {
      topic: "cur-e5s9",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Taras has got the train tickets. Here is his plan.</p>",
      text: "Next week I {*am|is|are} going to visit Kyiv. My sister Zlata {*is|am|are} going to come too. We {*aren’t|isn’t} going to take the bus."
    },
    {
      topic: "will",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Andrii and Sofiia are at home with their mum.</p>",
      text: "Andrii: It’s cold and rainy. I think I {*won’t|willn’t} go to the park today. Mum: Oh, my bag is very heavy! Sofiia: {*I’ll|I’m} help you, Mum! Andrii: I’ll {*help|helps} you too!"
    },
    {
      topic: "cur-e5s10",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Sofiia writes about Ukraine.</p>",
      text: "Kyiv is {*the biggest|biggest} city in Ukraine. For me, Lviv is one of the {*most beautiful|beautifulest} cities in Ukraine. Summer is {*the best|the goodest} season for a trip there."
    }
  ]
});
