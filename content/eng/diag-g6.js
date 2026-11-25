/* Слід · Англійська мова, 6 клас — тест рівня «What do you know?» (dge6)
   Статус: verified — автор writer-write-eng-diag-g6, верифікатор verifier-write-eng-diag-g6 (reports/verify/write-eng-diag-g6.md), 2026-11-25.
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
  why: "Let’s see what you remember from your English lessons and what you already know. Then we can plan your lessons.",
  status: "verified",
  meta: { author: "writer-write-eng-diag-g6", created: "2026-11-25", factcheck: "verifier-write-eng-diag-g6 (reports/verify/write-eng-diag-g6.md)", teacher: null },
  topics: [
    // передумови з 5 класу (уроки, на які спираються розділи 6 кл.)
    { id: "like", title: "What is she like?", kind: "pre", lessons: ["e5s1l6"], for: ["e6s1"] },
    { id: "much", title: "A lot of, much, many", kind: "pre", lessons: ["e5s3l4"], for: ["e6s2"] },
    { id: "cani", title: "Can I…? Could you…?", kind: "pre", lessons: ["e5s2l6"], for: ["e6s2", "e6s6"] },
    { id: "was", title: "Was and were", kind: "pre", lessons: ["e5s8l5"], for: ["e6s3", "e6s4"] },
    { id: "ed", title: "Visited, stopped, studied", kind: "pre", lessons: ["e5s9l5"], for: ["e6s3"] },
    { id: "can", title: "I can swim, I can’t skate", kind: "pre", lessons: ["e5s6l4"], for: ["e6s4"] },
    { id: "going", title: "I’m going to …", kind: "pre", lessons: ["e5s9l3", "e5s9l4"], for: ["e6s5"] },
    { id: "will", title: "It will be sunny", kind: "pre", lessons: ["e5s5l5"], for: ["e6s5"] },
    { id: "imp", title: "Open your books! Don’t talk!", kind: "pre", lessons: ["e5s2l5"], for: ["e6s6"] },
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
      body: "<p>Bohdan can’t find the page. He wants the teacher to help him. What does he say?</p>",
      opts: ["Could you help me, please?", "Can I help you, please?", "You help me!"],
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
      body: "<p>Sofiia has got the tickets. In June she ___ visit Odesa.</p>",
      opts: ["is going to", "going to", "are going to"],
      correct: 0
    },
    {
      topic: "will",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>The forecast for Kharkiv: “Tomorrow: windy and cold.”</p><p>It ___ windy tomorrow.</p>",
      opts: ["will is", "will be", "is be"],
      correct: 1
    },
    {
      topic: "imp",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>Ms Lysenko doesn’t want the children to run in the classroom. What does she say?</p>",
      opts: ["Doesn’t run, please.", "Not run, please.", "Don’t run, please."],
      correct: 2
    },
    {
      topic: "comp",
      lesson: "e5s10l4",
      type: "choice",
      sk: "gram",
      title: "Choose the correct answer.",
      body: "<p>The red house: six rooms. The blue house: three rooms.</p><p>The red house is ___ the blue house.</p>",
      opts: ["more big than", "bigger than", "big than"],
      correct: 1
    },

    /* ── складніші завдання передумов і теми 6 класу ── */
    {
      topic: "like",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Andrii writes about his friend Ostap. Then Emma asks a question.</p>",
      text: "Ostap {*likes|like} basketball. He {*doesn’t|don’t} like swimming. Emma: What {*is|does} he like? Andrii: He’s quiet and kind."
    },
    {
      topic: "cur-e6s1",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Taras writes about his cousin Marta.</p>",
      text: "Marta {*looks like|looks} her dad: they’ve both got fair hair and blue eyes. But she {*is like|looks like} her mum: they’re both kind and quiet. Today Marta {*looks|looks like} tired."
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
      body: "<p>Mariia writes to Taras.</p>",
      text: "I’ve got {*no|any} homework today! And I’ve got {*a few|much} new books from the library. My friends Polina and Roksolana love books too. {*Both|All} of them are in the library now."
    },
    {
      topic: "was",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Oksana writes to Emma about her birthday.</p>",
      text: "My birthday party {*was|were} fun. Grandma and Grandad {*were|was} there too. {*Were|Was} you at a party last weekend?"
    },
    {
      topic: "cur-e6s3",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Oksana writes about Friday evening.</p>",
      text: "On Friday evening, Mum and I {*made|maked} varenyky. My brother Dmytro {*ate|eated} ten! Then we {*drank|drinked} some tea."
    },
    {
      topic: "ed",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Taras writes about his trip.</p>",
      text: "Last month we {*travelled|travel} to Kharkiv by car. We {*stopped|stoped} at a café on the way. Then we {*studied|studyed} a map of the city."
    },
    {
      topic: "can",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Polina: swimming – yes, the guitar – no.</p>",
      text: "Polina can {*swim|swims} very well. She {can|*can’t} play the guitar. Emma: Can you play the guitar, Polina? Polina: No, I {*can’t|don’t}."
    },
    {
      topic: "cur-e6s4",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Emma asks Taras about Saturday.</p>",
      text: "Emma: What {*were|was} you doing at three o’clock on Saturday, Taras? Taras: I {*was playing|was play|were playing} football in the park. Ostap and Bohdan {*weren’t|wasn’t} playing. They were at home."
    },
    {
      topic: "going",
      lesson: "e5s9l4",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Emma asks Taras about his summer plan.</p>",
      text: "Emma: {*Are|Do|Is} you going to visit your grandma this summer? Taras: Yes, I {*am|do}. Emma: What {*are|do} you going to do there? Taras: I’m going to help her in the garden."
    },
    {
      topic: "will",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>The forecast for Saturday: Kharkiv — snow, −3 °C. Poltava — sunny, no snow.</p>",
      text: "Will it snow in Poltava on Saturday? – No, it {*won’t|isn’t|doesn’t}. In Kharkiv it {*will snow|will snows|snows will}. It {*will be|will|be} very cold."
    },
    {
      topic: "cur-e6s5",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Andrii and his dad are taking the train to Lviv. Sofiia can stay at home with Mum.</p>",
      text: "Dad: We {*have to|has to} be at the station at seven. Sofiia {*doesn’t have to|don’t have to} come with us. Andrii: {*Do|Does} I have to wear a coat? Dad: Yes, you do. It’s cold."
    },
    {
      topic: "imp",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Here are the rules in the school library.</p>",
      text: "{*Close|Closes} the door. {*Don’t|Not} eat in the library. {*Put|Puts} the books on the shelf."
    },
    {
      topic: "cur-e6s6",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Bohdan’s class trip to the museum:<br>1. A school T-shirt: it’s a rule.<br>2. Eating in the museum: no!<br>3. A camera: it’s your choice.</p>",
      text: "You {*must|must to|mustn’t} wear a school T-shirt. You {*mustn’t|don’t have to} eat in the museum. You {*don’t have to|mustn’t} take a camera."
    },
    {
      topic: "comp",
      lesson: "e5s10l5",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Taras writes about his town.</p>",
      text: "This is {*the oldest|oldest|the most old} church {*in|of} our town. The park near it is the {*biggest|most big} park in our town."
    },
    {
      topic: "cur-e6s7",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>Emma asks Taras about the Carpathians.</p>",
      text: "Emma: {*Have|Has} you ever been to the Carpathians? Taras: Yes, I {*have|did}. But my cousin Marta has {*never|ever} been there."
    },
    {
      topic: "cani",
      type: "gaps",
      sk: "func",
      title: "Fill in the gaps.",
      body: "<p>Mariia hasn’t got a pencil. She wants to use Polina’s pencil.</p>",
      text: "Mariia: {*Can I|Could you} use your pencil, Polina? Polina: Yes, you {*can|could}. Mariia: Thanks! Ms Lysenko, I don’t know this word. {*Could you|Can I} help me, please?"
    },
    {
      topic: "cur-e6s8",
      type: "gaps",
      sk: "gram",
      title: "Fill in the gaps.",
      body: "<p>George: “I like the Natural History Museum.”</p><p>Andrii tells Oksana about it.</p>",
      text: "George {*told|said} us about London. He {*said|told} that {*he|I} liked the Natural History Museum."
    }
  ]
});
