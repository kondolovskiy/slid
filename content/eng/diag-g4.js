/* Слід · Англійська мова, 4 клас — тест рівня «What do you know?» (dge4)
   Статус: verified — verifier-dge4, 2026-11-20 (reports/verify/dge4.md); автор — writer-dge4 (write-eng-diag-g4).
   8 baseline-опор вхідного рівня Pre A1–A1 (інвентар 3 кл., по 2 завдання) + 8 тем 4 класу (по 1 завданню на розділ e4s1–e4s8) = 24 завдання.
   Опори — за Типовою освітньою програмою 3–4 кл. (під керівництвом О. Я. Савченко, 2018), «Англійська мова», «3-ий клас»:
   лексичний діапазон і функції — PDF с. 61–62, граматика 3 кл. — с. 62 (there is(n’t)/are(n’t), ’s for possession, irregular plural,
   prepositions of place, present simple for daily routines); рівень Pre A1 — на кінець 2 кл., A1 — на кінець 4 кл. (с. 40):
   https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf
   Уроків 3 класу англійської в застосунку немає (dge4 — перший клас предмета), тому опори — baseline: lessons порожні, for обов'язковий,
   see — урок 4 кл., де тему повторюють (CONTENT_SCHEMA §9; механіка engine-eng-diag-pool, reports/review/engine-eng-diag-pool.md).
   Теми cur — один урок розділу (без boss); завдання охоплює ядро його learned; лексика й граматика — лише з уроків e4s1–e4s8.
   Увесь зміст — англійською, британська норма (D-055); варіанти A, B, C ставить рушій. Тексти й речення — власні.
   Порядок: спершу базові завдання всіх опор (1–8), далі складніші впереміш із темами 4 класу (cur).
   Кожне build перебрано через SLID_LANG.check (усі перестановки з extra) — нотатки задачі write-eng-diag-g4.
   Перевірка: node tools/validate.mjs --diag dge4
   Схема й правила: docs/CONTENT_SCHEMA.md §9, §4.1; docs/design/english.md §7; style/eng.md */
SLID.diag("eng", {
  id: "dge4",
  grade: 4,
  title: "What do you know?",
  why: "Let’s see what you know. Then we can find the best place to start.",
  status: "verified",
  meta: { author: "writer-dge4", created: "2026-11-20", factcheck: "verifier-dge4 (reports/verify/dge4.md)", teacher: null },
  topics: [
    // опори вхідного рівня Pre A1–A1 (інвентар 3 кл.; baseline: уроків 3 класу в застосунку немає)
    { id: "be", title: "I am, she is, we are", kind: "pre", baseline: true, lessons: [], for: ["e4s1"], see: ["e4s1l1"] },
    { id: "family", title: "Family words", kind: "pre", baseline: true, lessons: [], for: ["e4s1"], see: ["e4s1l2"] },
    { id: "poss", title: "Oksana’s cat: ’s", kind: "pre", baseline: true, lessons: [], for: ["e4s1"], see: ["e4s1l2"] },
    { id: "there", title: "There is, there are", kind: "pre", baseline: true, lessons: [], for: ["e4s2"], see: ["e4s2l2"] },
    { id: "prep", title: "In, on, under, next to", kind: "pre", baseline: true, lessons: [], for: ["e4s2"], see: ["e4s2l4"] },
    { id: "plural", title: "One child, two children", kind: "pre", baseline: true, lessons: [], for: ["e4s5", "e4s2"], see: ["e4s5l2", "e4s5l1"] },
    { id: "pres", title: "I live, she lives", kind: "pre", baseline: true, lessons: [], for: ["e4s1", "e4s3"], see: ["e4s1l5", "e4s3l3"] },
    { id: "months", title: "Months and seasons", kind: "pre", baseline: true, lessons: [], for: ["e4s6", "e4s8"], see: ["e4s6l1"] },
    // теми 4 класу: по одному уроку на розділ (без boss), завдання охоплює ядро уроку
    { id: "cur-e4s1", title: "Jobs: a doctor, an engineer", kind: "cur", lessons: ["e4s1l3"] },
    { id: "cur-e4s2", title: "Are there any…?", kind: "cur", lessons: ["e4s2l5"] },
    { id: "cur-e4s3", title: "How often? Always, never", kind: "cur", lessons: ["e4s3l2"] },
    { id: "cur-e4s4", title: "How many? How much?", kind: "cur", lessons: ["e4s4l3"] },
    { id: "cur-e4s5", title: "Why? Because…", kind: "cur", lessons: ["e4s5l6"] },
    { id: "cur-e4s6", title: "Bigger, hotter: comparing", kind: "cur", lessons: ["e4s6l5"] },
    { id: "cur-e4s7", title: "I think I’ll …", kind: "cur", lessons: ["e4s7l6"] },
    { id: "cur-e4s8", title: "I play, I’m playing", kind: "cur", lessons: ["e4s8l5"] }
  ],
  items: [
    /* ── базові завдання опор (інвентар 3 кл.) ── */
    {
      topic: "be",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Hi! My name is Taras. I ___ from Lviv.</p>",
      opts: ["am", "is", "are"],
      correct: 0
    },
    {
      topic: "family",
      type: "choice",
      sk: "vocab",
      title: "Choose the correct answer.",
      body: "<p>Oksana: “Mum and Dad have got two children: Dmytro and me.”</p><p>Who is Dmytro?</p>",
      opts: ["He is her uncle.", "He is her cousin.", "He is her brother."],
      correct: 2
    },
    {
      topic: "poss",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Oksana has got a cat. It is ___ cat.</p>",
      opts: ["Oksanas", "Oksana’s", "Oksana"],
      correct: 1
    },
    {
      topic: "there",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>There ___ two cats in the garden.</p>",
      opts: ["is", "are", "am"],
      correct: 1
    },
    {
      topic: "prep",
      type: "pick",
      sk: "gram",
      title: "Find the words that say where things are.",
      body: "<p>Find two words.</p>",
      text: "My ball is [under] the bed. My books are [on] the desk."
    },
    {
      topic: "plural",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>one tooth, two ___</p>",
      opts: ["tooths", "toothes", "teeth"],
      correct: 2
    },
    {
      topic: "pres",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Where does Andrii live?</p>",
      opts: ["He live in Kyiv.", "He living in Kyiv.", "He lives in Kyiv."],
      correct: 2
    },
    {
      topic: "months",
      type: "word",
      sk: "vocab",
      title: "Write the missing word.",
      before: "January, February,",
      after: ", April",
      answer: "March"
    },

    /* ── складніші завдання опор і теми 4 класу ── */
    {
      topic: "be",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      text: "My sister {am|*is|are} seven. My mum and dad {am|is|*are} doctors. {Am|Is|*Are} you from Kyiv?"
    },
    {
      topic: "cur-e4s1",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Sofiia writes about her family.</p>",
      text: "My mum works in a hospital. She is {*a doctor|an doctor|a teacher}. My dad builds bridges. He is {*an engineer|a engineer|an artist}. My aunt paints pictures. She is {*an artist|a artist|a cook}."
    },
    {
      topic: "family",
      type: "match",
      sk: "vocab",
      title: "Match the halves.",
      left: ["My mum’s sister is my", "My dad’s brother is my", "My mum’s mum is my", "My aunt’s son is my"],
      right: ["aunt.", "uncle.", "grandma.", "cousin."]
    },
    {
      topic: "cur-e4s2",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Emma asks Taras about his room.</p>",
      text: "Emma: {*Are|Is} there any posters in your room, Taras? Taras: Yes, there {*are|is}. But there aren’t {*any|some} toys on the floor."
    },
    {
      topic: "poss",
      type: "pick",
      sk: "gram",
      title: "Find the mistake.",
      body: "<p>One word in Oksana’s message is wrong.</p>",
      text: "This is my [brothers] room. My mum’s bike is red."
    },
    {
      topic: "cur-e4s3",
      type: "build",
      sk: "gram",
      title: "Put the words in order.",
      body: "<p>Mariia doesn’t like basketball. She doesn’t play it.</p>",
      tiles: ["Mariia", "never", "plays", "basketball"],
      extra: ["always"],
      answer: "Mariia never plays basketball."
    },
    {
      topic: "there",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Andrii writes about his room.</p>",
      text: "There {*is|are} a desk in my room. There {is|*are} three shelves. But there {*isn’t|aren’t} a TV."
    },
    {
      topic: "cur-e4s4",
      type: "sort",
      sk: "gram",
      title: "Sort the words.",
      body: "<p>Is it “How many…?” or “How much…?”</p>",
      bins: ["How many…?", "How much…?"],
      items: [
        ["eggs", 0],
        ["milk", 1],
        ["apples", 0],
        ["water", 1],
        ["bananas", 0],
        ["rice", 1]
      ]
    },
    {
      topic: "prep",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Oksana writes about her room.</p>",
      text: "The carpet is {*on|under} the floor. The chair is {*next to|in} the desk. It’s very near. My bag is on the chair, and my shoes are {*under|on} the chair, on the floor."
    },
    {
      topic: "cur-e4s5",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Emma and Andrii chat.</p>",
      text: "Emma: {*Why|Where} are you at home today, Andrii? Andrii: {*Because|But} I’ve got a cold. I drink lots of water {*because|why} I’m thirsty."
    },
    {
      topic: "plural",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>It’s the evening.</p>",
      text: "The {*children|childs|childrens} wash their {*feet|foots|feets} and brush their {*teeth|tooths|teeths}."
    },
    {
      topic: "cur-e4s6",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Today it’s 28 °C in Odesa. In London, it’s 20 °C.</p>",
      opts: ["Odesa is hoter than London today.", "Odesa is hotter than London today.", "Odesa is hot than London today."],
      correct: 1
    },
    {
      topic: "pres",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Oksana writes about her friend.</p>",
      text: "My friend {*lives|live} in a town. She {*goes|go} to school by bus. Where {*does|do} your friend live?"
    },
    {
      topic: "cur-e4s7",
      type: "build",
      sk: "gram",
      title: "Put the words in order.",
      body: "<p>Emma isn’t sure about her Saturday.</p>",
      tiles: ["I", "think", "I’ll", "go", "to the park"],
      extra: ["goes"],
      answer: "I think I’ll go to the park."
    },
    {
      topic: "months",
      type: "sort",
      sk: "vocab",
      title: "Sort the words.",
      body: "<p>Which season is it in Ukraine?</p>",
      bins: ["spring", "summer", "autumn"],
      items: [
        ["April", 0],
        ["July", 1],
        ["October", 2],
        ["May", 0],
        ["August", 1],
        ["November", 2]
      ]
    },
    {
      topic: "cur-e4s8",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Bohdan writes to Andrii.</p>",
      text: "Every Saturday, I {*play|am playing} tennis with my dad. But today Dad is at work. Now I {read|*am reading} a book at home. Look! My cat {sleeps|*is sleeping} on my book!"
    }
  ]
});
