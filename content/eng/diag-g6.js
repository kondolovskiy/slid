/* Слід · Англійська мова, 6 клас — тест рівня «What do you know?» (dge6)
   Статус: draft — автор writer-write-eng-diag-g6 (задача write-eng-diag-g6), 2026-11-25.
   10 тем-передумов з 5 класу (по 2 завдання: базове → складніше) + 8 тем 6 класу (по 1 завданню на розділ e6s1–e6s8) = 28 завдань.
   Передумови — уроки e5s*, на які посилаються requires розділів 6 кл. (файли content/eng/g6-*.js; reports/verify/plan-eng-g6.md §6).
   Теми cur — один урок розділу (без boss); завдання охоплює ядро його learned; лексика й граматика — лише з цих уроків.
   Рівень — A2 наприкінці 6 кл. (модельна програма «Іноземна мова. 5–9 класи», Редько В. Г. та ін., 2021, с. 3; facts/eng.md «Джерела»).
   Увесь зміст — англійською, британська норма (D-055); варіанти A, B, C ставить рушій. Тексти й речення — власні.
   Порядок: спершу базові завдання всіх передумов (1–10), далі складніші впереміш із темами 6 класу (cur).
   id тесту dge6 і порядок завдань — ключі прогресу: заміна на місці — лише з rev (CONTENT_SCHEMA §9).
   Перевірка: node tools/validate.mjs --diag dge6
   Схема й правила: docs/CONTENT_SCHEMA.md §9, §4.1; docs/design/english.md §7; style/eng.md */
SLID.diag("eng", {
  id: "dge6",
  grade: 6,
  title: "What do you know?",
  why: "Let’s see what you remember from Year 5 and what you already know. Then we can plan your lessons.",
  status: "draft",
  meta: { author: "writer-write-eng-diag-g6", created: "2026-11-25", factcheck: "self", teacher: null },
  topics: [
    // передумови з 5 класу (уроки, на які спираються розділи 6 кл.)
    { id: "like", title: "What is she like?", kind: "pre", lessons: ["e5s1l6"], for: ["e6s1"] },
    { id: "much", title: "A lot of, much, many", kind: "pre", lessons: ["e5s3l4"], for: ["e6s2"] },
    { id: "cani", title: "Can I…? Could you…?", kind: "pre", lessons: ["e5s2l6"], for: ["e6s2", "e6s6"] },
    { id: "was", title: "Was and were", kind: "pre", lessons: ["e5s8l5"], for: ["e6s3", "e6s4"] },
    { id: "ed", title: "Visited, stopped, studied", kind: "pre", lessons: ["e5s9l5"], for: ["e6s3", "e6s7"] },
    { id: "can", title: "I can swim, I can’t skate", kind: "pre", lessons: ["e5s6l4"], for: ["e6s4"] },
    { id: "going", title: "I’m going to …", kind: "pre", lessons: ["e5s9l3", "e5s9l4"], for: ["e6s5"] },
    { id: "will", title: "It will be sunny", kind: "pre", lessons: ["e5s5l5"], for: ["e6s5"] },
    { id: "imp", title: "Open your books! Don’t talk!", kind: "pre", lessons: ["e5s2l5"], for: ["e6s6", "e6s3"] },
    { id: "comp", title: "Bigger, the biggest", kind: "pre", lessons: ["e5s10l4", "e5s10l5"], for: ["e6s8", "e6s7"] },
    // теми 6 класу: по одному уроку на розділ (без boss)
    { id: "cur-e6s1", title: "She looks like her mum", kind: "cur", lessons: ["e6s1l6"] },
    { id: "cur-e6s2", title: "No, a few, both, all", kind: "cur", lessons: ["e6s2l3"] },
    { id: "cur-e6s3", title: "Ate, made, drank", kind: "cur", lessons: ["e6s3l4"] },
    { id: "cur-e6s4", title: "I was playing at six", kind: "cur", lessons: ["e6s4l4"] },
    { id: "cur-e6s5", title: "You have to show your ticket", kind: "cur", lessons: ["e6s5l5"] },
    { id: "cur-e6s6", title: "Must, mustn’t, don’t have to", kind: "cur", lessons: ["e6s6l4"] },
    { id: "cur-e6s7", title: "Have you ever been to Kyiv?", kind: "cur", lessons: ["e6s7l4"] },
    { id: "cur-e6s8", title: "Said and told", kind: "cur", lessons: ["e6s8l5"] }
  ],
  items: [
    /* ── базові завдання передумов (5 клас) ── */
    {
      topic: "like",
      type: "choice",
      sk: "func",
      title: "Choose the correct answer.",
      body: "<p>Oksana asks Taras: “What is your cousin Marta like?”</p><p>What does Taras say?</p>",
      opts: ["She’s kind and quiet.", "She likes reading.", "Yes, she is."],
      correct: 0
    },
    {
      topic: "much",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>There isn’t ___ milk in the fridge.</p>",
      opts: ["many", "much", "a lot"],
      correct: 1
    },
    {
      topic: "cani",
      type: "choice",
      sk: "func",
      title: "Choose the correct answer.",
      body: "<p>Bohdan doesn’t understand the teacher. What does he say?</p>",
      opts: ["Could you repeat that, please?", "Can I repeat that, please?", "You repeat that!"],
      correct: 0
    },
    {
      topic: "was",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Yesterday Taras and his sister ___ at the cinema.</p>",
      opts: ["was", "were", "are"],
      correct: 1
    },
    {
      topic: "ed",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Last summer Mariia ___ her grandma in Poltava.</p>",
      opts: ["visited", "visits", "visiting"],
      correct: 0
    },
    {
      topic: "can",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Which sentence is correct?</p>",
      opts: ["Sofiia can rides a bike.", "Sofiia can to ride a bike.", "Sofiia can ride a bike."],
      correct: 2
    },
    {
      topic: "going",
      lesson: "e5s9l3",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Sofiia has got the tickets. Next week she ___ visit Lviv.</p>",
      opts: ["is going to", "going to", "are going to"],
      correct: 0
    },
    {
      topic: "will",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>The forecast for Kharkiv: “Tomorrow: sunny and warm.”</p><p>Tomorrow it ___ sunny.</p>",
      opts: ["will is", "will be", "is be"],
      correct: 1
    },
    {
      topic: "imp",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Ms Lysenko wants the children to be quiet. What does she say?</p>",
      opts: ["Doesn’t talk, please.", "Not talk, please.", "Don’t talk, please."],
      correct: 2
    },
    {
      topic: "comp",
      lesson: "e5s10l4",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Ukraine: about 600,000 km². The UK: about 240,000 km².</p><p>Ukraine is ___ the UK.</p>",
      opts: ["more big than", "bigger than", "big than"],
      correct: 1
    },

    /* ── складніші завдання передумов і теми 6 класу ── */
    {
      topic: "like",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Andrii writes about his friend Yaroslav. Then Emma asks a question.</p>",
      text: "Yaroslav {*likes|like} chess. He {*doesn’t|don’t} like football. Emma: What {*is|does} he like? Andrii: He’s friendly and funny."
    },
    {
      topic: "cur-e6s1",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Taras writes about his sister Zlata.</p>",
      text: "Zlata {*looks like|looks} our mum: they’ve both got curly dark hair. But she {*is like|looks like} our dad: they’re both quiet and honest. Today Zlata {*looks|looks like} very happy."
    },
    {
      topic: "much",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Sofiia looks in the kitchen. There are twelve eggs, two oranges and a little cheese.</p>",
      text: "We’ve got {*a lot of|much} eggs. We haven’t got {*many|much} oranges. There isn’t {*much|many} cheese."
    },
    {
      topic: "cur-e6s2",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Sofiia writes to Mum. The baker’s and the greengrocer’s are near their flat.</p>",
      text: "There’s {*no|any} bread at home, and we’ve only got {*a few|much} apples. I’m going to the baker’s and the greengrocer’s. {*Both|All} of them close at nine."
    },
    {
      topic: "was",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Oksana writes to Emma about her birthday.</p>",
      text: "My party {*was|were} great. My cousins {*were|was} there too. {*Were|Was} you at a party last weekend?"
    },
    {
      topic: "cur-e6s3",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Oksana writes about last Sunday.</p>",
      text: "Last Sunday, Mum and I {*made|maked} varenyky. Dmytro {*ate|eated} ten! Then we {*drank|drinked} some tea."
    },
    {
      topic: "ed",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Taras writes about his trip.</p>",
      text: "Last week we {*travelled|travel} to Odesa. We {*stopped|stoped} near the sea. Then we {*studied|studyed} a map of the old town."
    },
    {
      topic: "can",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Andrii: chess – yes, skating – no.</p>",
      text: "Andrii can {*play|plays} chess very well. He {can|*can’t} skate. Emma: Can you skate, Andrii? Andrii: No, I {*can’t|don’t}."
    },
    {
      topic: "cur-e6s4",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Ms Kravets asks about yesterday evening.</p>",
      text: "Ms Kravets: What {*were|was} you doing at six o’clock, Taras? Taras: I {*was playing|was play|were playing} football. Ostap and Bohdan {*weren’t|wasn’t} playing. They were at home."
    },
    {
      topic: "going",
      lesson: "e5s9l4",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Emma asks Taras about his summer plan.</p>",
      text: "Emma: {*Are|Do|Is} you going to travel this summer? Taras: Yes, I {*am|do}. Emma: Where {*are|do} you going to stay? Taras: At my aunt’s flat in Odesa."
    },
    {
      topic: "will",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>The forecast for Saturday: Lviv — rain, 8 °C. Odesa — sunny, no rain.</p>",
      text: "Will it rain in Odesa on Saturday? – No, it {*won’t|isn’t|doesn’t}. In Lviv it {*will rain|will rains|rains will}. It {*will be|will|be} cold."
    },
    {
      topic: "cur-e6s5",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Andrii and his dad are taking the train to Lviv. The tickets are on Dad’s phone.</p>",
      text: "Dad: We {*have to|has to} be at the station at seven. We {*don’t have to|doesn’t have to} print the tickets. Andrii: {*Do|Does} I have to show my ticket? Dad: Yes, you do."
    },
    {
      topic: "imp",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Here are the rules on Ms Lysenko’s poster.</p>",
      text: "{*Come|Comes} to lessons on time. {*Don’t|Not} eat in class. {*Put|Puts} your hand up."
    },
    {
      topic: "cur-e6s6",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Bohdan’s school:<br>1. A uniform: it’s a rule.<br>2. Phones in lessons: no!<br>3. The chess club: it’s your choice.</p>",
      text: "You {*must|must to|mustn’t} wear a uniform. You {*mustn’t|don’t have to} use your phone in lessons. You {*don’t have to|mustn’t} go to the chess club."
    },
    {
      topic: "comp",
      lesson: "e5s10l5",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Sofiia writes about Ukraine.</p>",
      text: "The Dnipro is {*the longest|the longer|longest} river {*in|of} Ukraine. Hoverla is the {*highest|most high} mountain in Ukraine."
    },
    {
      topic: "cur-e6s7",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Emma asks Taras about Kyiv.</p>",
      text: "Emma: {*Have|Has} you ever been to Kyiv? Taras: Yes, I {*have|did}. But my cousin Marta has {*never|ever} been there."
    },
    {
      topic: "cani",
      type: "gaps",
      sk: "func",
      title: "Fill in the gaps.",
      body: "<p>Mariia is hot. She wants to open the window herself.</p>",
      text: "Mariia: {*Can I|Could you} open the window, please? Ms Lysenko: Yes, you {*can|could}. Mariia: Thank you. Sorry, I don’t understand the task. {*Could you|Can I} repeat it, please?"
    },
    {
      topic: "cur-e6s8",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Amelia: “I love the Tower of London.”</p><p>Andrii tells Oksana about it.</p>",
      text: "Amelia {*told|said} me about the Tower of London. She {*said|told} that {*she|I} loved it."
    }
  ]
});
