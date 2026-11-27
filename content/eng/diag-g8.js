/* Слід · Англійська мова, 8 клас — тест рівня «What do you know?» (dge8)
   Статус: verified — автор writer-write-eng-diag-g8, верифікатор verifier-write-eng-diag-g8 (reports/verify/write-eng-diag-g8.md), 2026-11-26.
   10 тем-передумов (уроки 7 кл. і наскрізна граматика 6 кл., по 2 завдання: базове → складніше)
   + 8 тем 8 класу (по 1 завданню на розділ e8s1–e8s8) = 28 завдань.
   Передумови — уроки, на які посилаються requires розділів 8 кл. (файли content/eng/g8-*.js; reports/verify/plan-eng-g7-8-9.md §6);
   `for` кожної теми збігається з requires відповідних розділів.
   Теми cur — один урок розділу (без boss); граматика й лексика — лише з цих уроків і уроків 4–7 кл.
   Рівень — A2+ → B1 (B1 — наприкінці 9 кл.; модельна програма «Іноземна мова. 5–9 класи», Редько В. Г. та ін., 2021; facts/eng.md «Джерела»).
   Увесь зміст — англійською, британська норма (D-055); варіанти A, B, C ставить рушій. Тексти й речення — власні,
   звірені скриптом n-грам з уроками g7-*, g8-* (дослівних 5-грам немає; нотатки задачі write-eng-diag-g8).
   Порядок: спершу базові завдання всіх передумов (1–10), далі складніші впереміш із темами 8 класу (cur).
   id тесту dge8 і порядок завдань — ключі прогресу: заміна на місці — лише з rev (CONTENT_SCHEMA §9).
   Перевірка: node tools/validate.mjs --diag dge8
   Схема й правила: docs/CONTENT_SCHEMA.md §9, §4.1; docs/design/english.md §7; style/eng.md */
SLID.diag("eng", {
  id: "dge8",
  grade: 8,
  title: "What do you know?",
  why: "Let’s see what you remember from your English lessons and what you already know. Then we can plan your lessons.",
  status: "verified",
  meta: { author: "writer-write-eng-diag-g8", created: "2026-11-26", factcheck: "verifier-write-eng-diag-g8 (reports/verify/write-eng-diag-g8.md)", teacher: null },
  topics: [
    // передумови: уроки 7 кл. і наскрізна граматика 6 кл. (requires розділів 8 кл.)
    { id: "ppadv", title: "Just, already, yet", kind: "pre", lessons: ["e7s1l2", "e7s1l3"], for: ["e8s1"] },
    { id: "forsince", title: "For ten years, since 2020", kind: "pre", lessons: ["e7s1l4"], for: ["e8s1"] },
    { id: "ingadj", title: "Bored or boring?", kind: "pre", lessons: ["e7s4l4"], for: ["e8s4"] },
    { id: "compmod", title: "Much better, a bit longer", kind: "pre", lessons: ["e7s4l5"], for: ["e8s8"] },
    { id: "enough", title: "Old enough, too high", kind: "pre", lessons: ["e7s4l6"], for: ["e8s2", "e8s4"] },
    { id: "pastc", title: "I was reading when…", kind: "pre", lessons: ["e6s4l4", "e6s4l5"], for: ["e8s5"] },
    { id: "said", title: "She said, she told me", kind: "pre", lessons: ["e6s8l5"], for: ["e8s3"] },
    { id: "pass", title: "It’s made with…, it was built in…", kind: "pre", lessons: ["e6s3l2", "e6s7l3"], for: ["e8s3"] },
    { id: "must", title: "Must, mustn’t, don’t have to", kind: "pre", lessons: ["e6s6l4", "e6s5l5"], for: ["e8s6"] },
    { id: "if", title: "If it rains, go to a museum", kind: "pre", lessons: ["e6s8l3"], for: ["e8s8"] },
    // теми 8 класу: по одному уроку на розділ (без boss)
    { id: "cur-e8s1", title: "I’ve been learning English for five years", kind: "cur", lessons: ["e8s1l2"] },
    { id: "cur-e8s2", title: "I enjoy cycling, I want to try", kind: "cur", lessons: ["e8s2l3"] },
    { id: "cur-e8s3", title: "She said she was tired", kind: "cur", lessons: ["e8s3l4"] },
    { id: "cur-e8s4", title: "A singer who…, a guitar which…", kind: "cur", lessons: ["e8s4l3"] },
    { id: "cur-e8s5", title: "When we got there, it had closed", kind: "cur", lessons: ["e8s5l4"] },
    { id: "cur-e8s6", title: "May I…? Are we allowed to…?", kind: "cur", lessons: ["e8s6l4"] },
    { id: "cur-e8s7", title: "The Dnipro, Kyiv, Hoverla", kind: "cur", lessons: ["e8s7l2"] },
    { id: "cur-e8s8", title: "If I lived…, I would…", kind: "cur", lessons: ["e8s8l5"] }
  ],
  items: [
    /* ── базові завдання передумов ── */
    {
      topic: "ppadv",
      lesson: "e7s1l2",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>It’s 7 pm. Dad wants Sofiia to water the flowers on the balcony.</p><p>Sofiia: “I’ve ___ watered them, Dad. I did it this morning.”</p>",
      opts: ["already", "yet", "since"],
      correct: 0
    },
    {
      topic: "forsince",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Bohdan has played the guitar ___ 2022.</p>",
      opts: ["for", "since", "from"],
      correct: 1
    },
    {
      topic: "ingadj",
      type: "choice",
      sk: "vocab",
      title: "Choose the correct answer.",
      body: "<p>The talk at the museum was three hours long. Ostap wanted to go home. He was very ___.</p>",
      opts: ["boring", "bored", "bore"],
      correct: 1
    },
    {
      topic: "compmod",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>The red T-shirt costs ₴300. The blue T-shirt costs ₴310.</p><p>The blue T-shirt is ___ more expensive than the red one.</p>",
      opts: ["much", "very", "a bit"],
      correct: 2
    },
    {
      topic: "enough",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>The climbing camp is for teenagers aged 14 and over. Taras is 14.</p><p>Taras is ___ to go to the camp.</p>",
      opts: ["enough old", "old enough", "too old"],
      correct: 1
    },
    {
      topic: "pastc",
      lesson: "e6s4l4",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>What was Andrii doing at five o’clock yesterday? He ___ his bike by the river.</p>",
      opts: ["were riding", "was ride", "was riding"],
      correct: 2
    },
    {
      topic: "said",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Zlata ___ me about her new school in Lviv.</p>",
      opts: ["told", "said", "say"],
      correct: 0
    },
    {
      topic: "pass",
      lesson: "e6s3l2",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>In Halyna’s family, pancakes ___ often served with honey or jam.</p>",
      opts: ["is", "are", "be"],
      correct: 1
    },
    {
      topic: "must",
      lesson: "e6s6l4",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>A sign at the swimming pool: “No running! It’s dangerous.”</p><p>You ___ run near the pool.</p>",
      opts: ["mustn’t", "don’t have to", "must"],
      correct: 0
    },
    {
      topic: "if",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Mum gives Dmytro advice before his football match.</p><p>“If you ___ tired, have a rest on the bench.”</p>",
      opts: ["will be", "are", "were"],
      correct: 1
    },

    /* ── складніші завдання передумов і теми 8 класу ── */
    {
      topic: "ppadv",
      lesson: "e7s1l3",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Andrii and Sofiia are packing for a weekend in Chernihiv. Mum asks about their bags.</p>",
      text: "Andrii: I haven’t packed my toothbrush {*yet|already}. But I’ve {*just|yet} put my chess book in – look, it’s on top! Sofiia has {*already|yet} finished. Her bag has been by the door since lunch."
    },
    {
      topic: "cur-e8s1",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>It’s 4 pm. Mariia started a big picture at 1 pm, and she is still painting it.</p>",
      text: "Mariia {*has been painting|is painting} for three hours. Dad: {*Has|Is} she been painting all afternoon? Mum: Yes, {*since|for} one o’clock."
    },
    {
      topic: "forsince",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>In an email, Emma describes her family.</p>",
      text: "My grandad lives by the sea. He {*has had|has} his little boat {*for|since} forty years. My mum {*has been|is} a doctor since 2015."
    },
    {
      topic: "cur-e8s2",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Taras’s message to the penfriend club:</p>",
      text: "I {*enjoy|want} cycling in the park after school. Last week, I decided {*to join|joining} a cycling club. I hope {*to ride|riding} to the lake with them in May."
    },
    {
      topic: "ingadj",
      type: "gaps",
      sk: "vocab",
      title: "Fill in the gaps.",
      body: "<p>Sofiia writes about her class trip.</p>",
      text: "The trip to the space museum was really {*exciting|excited}. Now I’m very {*interested|interesting} in planets. But the bus ride home was long and {*tiring|tired}."
    },
    {
      topic: "cur-e8s3",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Last Friday, Daryna said: “I’m ill. I can’t sing at the concert tonight.” Now it’s Monday. Daryna is well again, and the concert was on Friday.</p>",
      text: "Daryna said {*she|I} {*was|is} ill. She said she {*couldn’t|can’t} sing at the concert."
    },
    {
      topic: "compmod",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Two cafés near Oksana’s school in Poltava:<br>Café Lypa – hot chocolate ₴60, a 10-minute walk.<br>Café Sonia – hot chocolate ₴120, a 12-minute walk.</p>",
      text: "Hot chocolate at Café Sonia is {*much|a bit} more expensive. The walk to Café Sonia is {*a bit|much} longer. Café Lypa isn’t as expensive {*as|than} Café Sonia."
    },
    {
      topic: "cur-e8s4",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Oksana tells Emma about Halyna’s band.</p>",
      text: "Halyna’s band practises in a room {*which|who} is next to our gym. The boy {*who|which} plays the violin is in our class. Our music teacher has given them an old piano {*which|who} still sounds great."
    },
    {
      topic: "enough",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>A sign at the climbing wall: “Ages 12+”. Dmytro is ten. Oksana is fourteen.</p>",
      text: "Dmytro can’t climb the wall: he’s {*too|enough} young. He isn’t {*old enough|enough old} yet. Oksana can climb it, but the wall is very high. She says it’s too high {*to climb|climbing} on her first day."
    },
    {
      topic: "cur-e8s5",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Saturday at the cinema in Lviv:<br>5.45 pm – Zlata left her phone at home.<br>6.00 pm – the film started.<br>6.20 pm – Taras and Zlata got to the cinema.</p>",
      text: "When Taras and Zlata got to the cinema, the film {*had started|has started|started}. Zlata couldn’t call Mum because she {*had|has} {*left|leaved} her phone at home."
    },
    {
      topic: "pastc",
      lesson: "e6s4l5",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Sunday afternoon by the Dnipro:<br>Andrii and Sofiia – walking from 2 to 4 pm (long).<br>Sofiia – taking photos of the river (long).<br>Dad – calls them at 3 pm (short).</p>",
      text: "While Andrii and Sofiia {*were walking|was walking} by the river, Sofiia took lots of photos. She {*was taking|took} a photo of a boat when Dad {*called|was calling} them."
    },
    {
      topic: "cur-e8s6",
      type: "gaps",
      sk: "func",
      title: "Fill in the gaps.",
      body: "<p>Taras talks to his English teacher, Mr Bondar, before a test.</p>",
      text: "Taras: Excuse me, Mr Bondar. {*May|Am} I sit near the window? Mr Bondar: Yes, of course. Taras: Are we allowed {*to write|write} in pencil in the test? Mr Bondar: No, you {*aren’t|don’t}."
    },
    {
      topic: "said",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Liam writes to Andrii: “My sister has got a new bike. It’s red.” Later, Andrii talks to Sofiia.</p>",
      text: "Liam {*told|said} me that {*his|my} sister had a new bike. He {*said|told} it was red."
    },
    {
      topic: "cur-e8s7",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Andrii writes to Liam about his class trip next summer.</p>",
      text: "First, we want to walk around {*Lake Synevyr|the Lake Synevyr} in the Carpathians. Then we’ll take a train to Odesa. Some of my classmates have never seen {*the Black Sea|Black Sea}! After that, we’ll take a train to {*Dnipro|the Dnipro} and stay in my cousin’s flat for two days."
    },
    {
      topic: "pass",
      lesson: "e6s7l3",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Oksana’s post about Zelena Dolyna:</p>",
      text: "At our village festival, varenyky {*are made|made|is made} by the grandmas. They {*are served|serve|is served} with sour cream. The old bridge near the festival {*was built|built|were built} in 1912."
    },
    {
      topic: "cur-e8s8",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Taras dreams about a different life.</p>",
      text: "If Taras’s family {*had|would have} a boat, they {*would travel|will travel} along the coast. If Taras {*lived|would live} by the sea, he would surf every day."
    },
    {
      topic: "must",
      lesson: "e6s5l5",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Rules of the school chess club:<br>1. Turn off your phone – a rule.<br>2. Your own chess board – not necessary.<br>3. Talking when you play – no!</p>",
      text: "You {*have to|don’t have to} turn off your phone. You {*don’t have to|mustn’t} bring your own chess board. You {*mustn’t|don’t have to} talk when you play."
    },
    {
      topic: "if",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Sofiia writes tips for tourists in Kyiv.</p>",
      text: "If you {*are|will be} interested in old buildings, {*go|goes} to St Sophia’s Cathedral. If it {*is|will be} hot, buy an ice cream and walk by the Dnipro."
    }
  ]
});
