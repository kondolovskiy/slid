/* Слід · Англійська мова, 7 клас — тест рівня «What do you know?» (dge7)
   Статус: verified — автор writer-write-eng-diag-g7, верифікатор verifier-write-eng-diag-g7 (reports/verify/write-eng-diag-g7.md), 2026-11-25.
   10 тем-передумов з 6 класу (по 2 завдання: базове → складніше) + 7 тем 7 класу (по 1 завданню на розділ e7s1–e7s7) = 27 завдань.
   Передумови — уроки e6s*, на які посилаються requires розділів 7 кл. (файли content/eng/g7-*.js; reports/verify/plan-eng-g7-8-9.md §6).
   Теми cur — один урок розділу (без boss); завдання охоплює ядро його learned; лексика й граматика — лише з цих уроків.
   Рівень — A2 → B1 (B1 — наприкінці 9 кл.; модельна програма «Іноземна мова. 5–9 класи», Редько В. Г. та ін., 2021, с. 3; facts/eng.md «Джерела»).
   Увесь зміст — англійською, британська норма (D-055); варіанти A, B, C ставить рушій. Тексти й речення — власні,
   звірені скриптом n-грам з уроками g5-*, g6-*, g7-* (дослівних збігів речень немає; нотатки задачі write-eng-diag-g7).
   Порядок: спершу базові завдання всіх передумов (1–10), далі складніші впереміш із темами 7 класу (cur).
   id тесту dge7 і порядок завдань — ключі прогресу: заміна на місці — лише з rev (CONTENT_SCHEMA §9).
   Перевірка: node tools/validate.mjs --diag dge7
   Схема й правила: docs/CONTENT_SCHEMA.md §9, §4.1; docs/design/english.md §7; style/eng.md */
SLID.diag("eng", {
  id: "dge7",
  grade: 7,
  title: "What do you know?",
  why: "Let’s see what you remember from your English lessons and what you already know. Then we can plan your lessons.",
  status: "verified",
  meta: { author: "writer-write-eng-diag-g7", created: "2026-11-25", factcheck: "verifier-write-eng-diag-g7 (reports/verify/write-eng-diag-g7.md)", teacher: null },
  topics: [
    // передумови з 6 класу (уроки, на які спираються розділи 7 кл.)
    { id: "ever", title: "Have you ever been…?", kind: "pre", lessons: ["e6s7l4"], for: ["e7s1"] },
    { id: "ppps", title: "I’ve seen it, I saw it last year", kind: "pre", lessons: ["e6s7l5"], for: ["e7s1", "e7s3"] },
    { id: "irr", title: "Bought, came, saw", kind: "pre", lessons: ["e6s3l4"], for: ["e7s1", "e7s5"] },
    { id: "made", title: "It’s made with…", kind: "pre", lessons: ["e6s3l2"], for: ["e7s2", "e7s7"] },
    { id: "built", title: "It was built in…", kind: "pre", lessons: ["e6s7l3"], for: ["e7s7"] },
    { id: "should", title: "You should, you shouldn’t", kind: "pre", lessons: ["e6s6l5"], for: ["e7s2", "e7s3"] },
    { id: "haveto", title: "You have to, you don’t have to", kind: "pre", lessons: ["e6s5l5"], for: ["e7s1", "e7s3"] },
    { id: "too", title: "Too big, too expensive", kind: "pre", lessons: ["e6s2l6"], for: ["e7s4"] },
    { id: "pastc", title: "I was reading when…", kind: "pre", lessons: ["e6s4l4", "e6s4l5"], for: ["e7s5"] },
    { id: "if", title: "If you go to Lviv, visit…", kind: "pre", lessons: ["e6s8l3"], for: ["e7s6"] },
    // теми 7 класу: по одному уроку на розділ (без boss)
    { id: "cur-e7s1", title: "Already and yet", kind: "cur", lessons: ["e7s1l3"] },
    { id: "cur-e7s2", title: "It should be roasted", kind: "cur", lessons: ["e7s2l4"] },
    { id: "cur-e7s3", title: "When did it start? How long?", kind: "cur", lessons: ["e7s3l4"] },
    { id: "cur-e7s4", title: "A bit longer, not as long as", kind: "cur", lessons: ["e7s4l5"] },
    { id: "cur-e7s5", title: "I used to…", kind: "cur", lessons: ["e7s5l3"] },
    { id: "cur-e7s6", title: "If it’s sunny, we’ll…", kind: "cur", lessons: ["e7s6l3"] },
    { id: "cur-e7s7", title: "Was it destroyed?", kind: "cur", lessons: ["e7s7l3"] }
  ],
  items: [
    /* ── базові завдання передумов (6 клас) ── */
    {
      topic: "ever",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Mariia ___ never been to the sea.</p>",
      opts: ["has", "have", "is"],
      correct: 0
    },
    {
      topic: "ppps",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Which sentence is correct?</p>",
      opts: ["Zlata has visited the zoo two days ago.", "Zlata visited the zoo two days ago.", "Zlata has visit the zoo."],
      correct: 1
    },
    {
      topic: "irr",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Oksana’s grandma ___ to the school concert yesterday.</p>",
      opts: ["comed", "came", "comes"],
      correct: 1
    },
    {
      topic: "made",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>These biscuits ___ made with honey and nuts.</p>",
      opts: ["is", "are", "be"],
      correct: 1
    },
    {
      topic: "built",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Mariia’s school in Kharkiv ___ built in 1965.</p>",
      opts: ["was", "were", "is"],
      correct: 0
    },
    {
      topic: "should",
      type: "choice",
      sk: "func",
      title: "Choose the correct answer.",
      body: "<p>Zlata has got a cold. What does Taras say?</p>",
      opts: ["You should drink hot tea and rest.", "You should go out without a coat.", "You should to drink hot tea and rest."],
      correct: 0
    },
    {
      topic: "haveto",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>At the swimming pool, everybody must have a shower first. It’s a rule.</p><p>Bohdan ___ have a shower first.</p>",
      opts: ["has to", "have to", "has"],
      correct: 0
    },
    {
      topic: "too",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Sofiia’s new boots are size 35. She needs size 37. What does she say?</p>",
      opts: ["They’re too big.", "They’re too small.", "They’re very big."],
      correct: 1
    },
    {
      topic: "pastc",
      lesson: "e6s4l4",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>At eight o’clock last night, Lesia and her sister ___ a film.</p>",
      opts: ["were watching", "was watching", "were watch"],
      correct: 0
    },
    {
      topic: "if",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Which sentence is correct?</p>",
      opts: ["If you will go to Lviv, visit the old town.", "If you go to Lviv, visit the old town.", "If you goes to Lviv, visit the old town."],
      correct: 1
    },

    /* ── складніші завдання передумов і теми 7 класу ── */
    {
      topic: "ever",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Emma asks Taras about his grandparents.</p>",
      text: "Emma: {*Have|Has} your grandparents ever been to England? Taras: No, they {*haven’t|hasn’t}. They have {*never|ever} been on a ferry."
    },
    {
      topic: "cur-e7s1",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>It’s Sunday morning. Mum asks Dmytro about his jobs.</p>",
      text: "Mum: {*Have|Has} you cleaned your shoes yet? Dmytro: No, {*not yet|already}. But I’ve {*already|yet} watered the plants."
    },
    {
      topic: "ppps",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Lesia chats with Zlata.</p>",
      text: "Lesia: Have you ever {*climbed|climb} a mountain? Zlata: Yes! I {*climbed|have climbed} Hoverla last summer. It {*was|has been} very windy at the top."
    },
    {
      topic: "cur-e7s2",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Mariia’s mum is reading a recipe for chicken and potatoes.</p>",
      text: "The chicken must {*be roasted|roasted|be roast} for an hour. The onions should {*be cut|be cutted|cut} first. The potatoes can {*be baked|baked|be bake} with the chicken."
    },
    {
      topic: "irr",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Tom tells Oksana about his weekend.</p>",
      text: "On Sunday, Dad and I {*went|goed} to a football match. We {*saw|seen} a great goal. After the match, I {*had|haved} a hot dog."
    },
    {
      topic: "cur-e7s3",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>It’s Wednesday. Taras tells Emma about Zlata.</p>",
      text: "Zlata {*has had|had} a sore throat since Sunday. On Monday, Dad {*took|has taken} her to the doctor. She hasn’t been to school {*for|since} three days."
    },
    {
      topic: "made",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Andrii writes about the food at the school picnic.</p>",
      text: "The sandwiches {*are|is} made with cheese and tomatoes. The fruit salad {*is|are} made with apples, pears and bananas. It {*is served|served|is serve} with ice cream."
    },
    {
      topic: "cur-e7s4",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Two films at a cinema in Lviv:<br>Ice Dragons – 100 minutes, ₴200<br>Space Pets – 105 minutes, ₴200</p>",
      text: "Ice Dragons is {*a bit|much} shorter than Space Pets. Ice Dragons isn’t as long {*as|than} Space Pets. Space Pets tickets cost the same {*as|like} Ice Dragons tickets."
    },
    {
      topic: "built",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Emma asks Taras about two old houses in his street.</p>",
      text: "Emma: When {*were|was} the two houses built? Taras: They {*were built|built|were build} {*in the|in} 19th century."
    },
    {
      topic: "cur-e7s5",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Vlad played tennis when he was little. Now he plays volleyball.</p>",
      text: "Vlad {*used to|use to} play tennis. Myroslava: {*Did|Were} you use to train every day? Vlad: No, I {*didn’t|wasn’t}. Only at weekends."
    },
    {
      topic: "should",
      type: "gaps",
      sk: "func",
      title: "Fill in the gaps.",
      body: "<p>Polina asks Mariia for advice.</p>",
      text: "Polina: I’ve got a maths test tomorrow. {*Should I read|Should I to read} my notes again? Mariia: Yes, you {*should|do}. And you {*shouldn’t|should} play computer games all evening."
    },
    {
      topic: "cur-e7s6",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Taras’s class wants to have a picnic on Saturday. They don’t know the weather for Saturday yet.</p>",
      text: "If it {*is|will be} sunny on Saturday, we {*will have|had} a picnic by the river. If it’s cold and wet, we {*won’t|didn’t} go."
    },
    {
      topic: "haveto",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>The rules of a summer sports camp:<br>1. A water bottle: it’s a rule.<br>2. A school uniform: it isn’t necessary.</p>",
      text: "Vlad: {*Do|Does} I have to bring a water bottle? The coach: Yes, you {*do|are}. Vlad: Does Lesia have to wear a school uniform? The coach: No, she {*doesn’t|don’t}."
    },
    {
      topic: "too",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Zoriana needs a school bag. She has got ₴900.<br>Black bag: ₴1,500.<br>Yellow bag: ₴800, but her books can’t go in it.<br>Grey bag: ₴850, and her books can go in it.</p>",
      text: "The black bag is {*too|to} expensive. The yellow bag is too {*small|big}. Zoriana: I’ll take {*the grey one|the black one}."
    },
    {
      topic: "cur-e7s7",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>The old school in Zelena Dolyna: built in 1890, destroyed by a fire in 1975, rebuilt in 2005. The church near it: no fire.</p>",
      text: "Emma: {*Was|Did} the old school destroyed? Oksana: Yes, by a fire. Emma: When {*was the school rebuilt|the school was rebuilt}? Oksana: In 2005. But the church near it {*wasn’t|didn’t} destroyed."
    },
    {
      topic: "pastc",
      lesson: "e6s4l5",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Saturday evening: Dmytro – reading from 7 to 8 pm (long). Dad – comes home at 7.30 (short).</p>",
      text: "Dmytro {*was reading|read} a book {*when|while} Dad {*came|was coming} home."
    },
    {
      topic: "if",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Emma is going to visit Oksana in Zelena Dolyna in January. Oksana gives her advice.</p>",
      text: "If you {*are|will be} hungry, {*try|tries} Grandma Hanna’s deruny. If it {*snows|will snow}, wear warm boots."
    }
  ]
});
