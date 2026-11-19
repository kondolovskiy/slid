/* Слід · Англійська мова, 4 клас — «Holidays and travel» (e4s7)
   Програма: ТОП 3–4 (Савченко, 2018), «Англійська мова», «4-ий клас»: тема «Подорож по Україні та до країн
   виучуваної мови — поїздка на канікулах, види транспорту, назви столиць, населених пунктів» (PDF с. 63);
   граматика — adverbials of movement, superlatives, «Future Simple for plans and intentions» (с. 63; у тексті уроку — will,
   glossary/eng.md), how-questions (How far…? How high…?, с. 63); Past Simple, was/were — повторення інвентаря 3 кл. (с. 62)
   за content/eng/plan.js; короткий опис маршруту (A1, с. 52), листівка (с. 54):
   https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf
   Увесь зміст — англійською, британська норма (D-054). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   will — рішення в мить мовлення, «I think I’ll…» (CD Grammar «Will»); be going to у вправах не дається як варіант,
   а в `word` прийнято як другу правильну відповідь. Форми, наголос і факти — URL у tasks/…/write-eng-g4-e4s7.md, «Нотатки агента».
   Статус: verified (verifier-e4s7, reports/verify/e4s7.md). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e4s7 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e4s7",
  grade: 4,
  weeks: [27, 31],
  title: "Holidays and travel",
  why: "To talk about trips and transport. And to tell people about your holiday plans.",
  requires: ["e4s1l4", "e4s1l6", "e4s6l5"],
  meta: { author: "writer-e4s7", created: "2026-11-19", factcheck: "verifier-e4s7 (reports/verify/e4s7.md)", teacher: null },
  badges: [
    { id: "e4s7boss", name: "Young traveller", icon: "trophy", desc: "Finish the final lesson “Holidays and travel”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e4s7l1",
      title: "By bus, by train, on foot",
      short: "Transport",
      icon: "path",
      status: "verified",
      why: "How do you get to school? Tell your friends about it.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "How do they get to school?",
          body: `<p class="lead">The pen friends write about their mornings.</p><p><b>Andrii:</b> I live in Kyiv. I go to school by bus.<br><b>Emma:</b> I go to school by bike.<br><b>Oksana:</b> My school isn’t far. I go on foot.</p><p>By bus, by bike, on foot: what do the words mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii’s dad goes to work in his car. What do we say?</p>`,
          opts: [
            "He goes to work by car.",
            "He goes to work on car.",
            "He goes to work with car."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "We say <b>by car</b>. The next screen shows more."
        },
        {
          type: "info",
          title: "Transport",
          body: `<ul><li>a <b>bus</b> → by bus</li><li>a <b>train</b> → by train</li><li>a <b>car</b> → by car</li><li>a <b>bike</b> (a <b><u>bi</u>cycle</b>) → by bike</li><li>a <b>tram</b> → by tram</li><li>a <b>plane</b> → by plane</li><li>a <b>boat</b> → by boat</li><li>you walk → <b>on foot</b></li></ul><p>Not: <s>by foot</s>, <s>by a bus</s>.</p><p><b>How do you get to</b> school? – I go <b>by bus</b>.</p><p>The <u>underlined</u> part is strong: <u>trans</u>port, <u>trav</u>el.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          text: "Andrii goes to school {*by|on} bus. Oksana walks to school. She goes {*on|by} foot. Emma’s mum goes to work {*by|on} train.",
          hint: "Do you walk? Then it’s on foot.",
          fbOk: "Yes!",
          fbBad: "Look at the list again.",
          fbText: "Bus, train, car: <b>by</b> bus, <b>by</b> train. When you walk: <b>on foot</b>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Tom doesn’t go by bus. He walks to school.</p>`,
          before: "He goes to school on",
          after: ".",
          answer: "foot",
          hint: "You walk. You go on …",
          fbOk: "Well done!",
          fbBad: "What do we say when we walk?",
          fbText: "When you walk, you go <b>on foot</b>."
        },
        {
          type: "info",
          title: "How far is it?",
          body: `<p><b>How far</b> is your school?</p><ul><li>– It’s <b>3 kilometres</b>. I go by bus.</li><li>– It <b>isn’t far</b>. I go on foot.</li></ul><p><b>How far</b> = how many kilometres.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Emma: “How far is your school, Andrii?”</p><p>What does Andrii say?</p>`,
          opts: [
            "I go by bus.",
            "It’s 3 kilometres.",
            "Yes, it is."
          ],
          correct: 1,
          hint: "How far = how many kilometres.",
          fbOk: "Right.",
          fbBad: "Emma asks: how far?",
          fbText: "<b>How far</b>? – <b>It’s 3 kilometres.</b> <i>I go by bus</i> answers <i>How do you get to school?</i>"
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+bi|cy|cle", "+trans|port", "+trav|el"],
          fbOk: "Exactly.",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>bi</u>cycle, <u>trans</u>port, <u>trav</u>el: the strong part is at the start."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Mariia lives in Kharkiv. Her school is 5 kilometres from home. She goes there by tram. Her grandma’s flat is near. She goes there on foot.</i></p><p>How does Mariia get to her grandma’s flat?</p>`,
          opts: [
            "by tram",
            "by bus",
            "on foot"
          ],
          correct: 2,
          hint: "Find “grandma’s flat” in the text.",
          fbOk: "Good eye!",
          fbBad: "Read about grandma’s flat again.",
          fbText: "The school is far, so Mariia goes <b>by tram</b>. Grandma’s flat is near: she goes <b>on foot</b>."
        }
      ],
      outro: {
        text: "We say by bus, by train, by car, but on foot. How far? asks about kilometres.",
        learned: [
          "Name transport: a bus, a train, a tram, a plane.",
          "Say how you travel: by bus, on foot.",
          "Ask and answer: How far is it?"
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e4s7l2",
      title: "Which way? Up, down, across, along",
      short: "Which way?",
      icon: "map",
      status: "verified",
      why: "Read a short route and find the way. Tell a friend which way to go.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "How does Taras get to the park?",
          body: `<p class="lead">Taras lives in Lviv. He writes about his way to the park.</p><p><i>I walk along our street. Then I go across the road. Then I go up the hill. The park is on the hill.</i></p><p>Which way does he go?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>The shop is on the other side of the road. What do you do?</p>`,
          opts: [
            "I go across the road.",
            "I go up the road.",
            "I go down the road."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Interesting!",
          fbText: "To the other side: <b>across</b> the road. The next screen shows more."
        },
        {
          type: "info",
          title: "Which way?",
          body: `<ul><li><b>up</b> ↑ the hill, up the stairs – to a high place</li><li><b>down</b> ↓ the hill – to a low place</li><li><b>across</b> ↔ the road, the river – to the other side</li><li><b>along</b> → the river, the street – it’s next to you all the time</li></ul><p>We walk <b>along</b> the river. We go <b>across</b> the bridge.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>A castle is on a high hill. Taras walks to the castle. Which way?</p>`,
          opts: [
            "He walks down the hill.",
            "He walks across the road.",
            "He walks up the hill."
          ],
          correct: 2,
          hint: "Is the castle in a high place or a low place?",
          fbOk: "Right.",
          fbBad: "The castle is on a high hill.",
          fbText: "The castle is high, so Taras walks <b>up</b> the hill. <i>Down</i> is to a low place."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Emma’s walk with her dog.</p>`,
          text: "I walk {*along|across} the river. It’s next to us all the time. Then we go {*across|along} the river to the other side. My house is on a hill. We go {*up|down} the hill.",
          hint: "Next to the river, or to the other side?",
          fbOk: "Exactly.",
          fbBad: "Look at the list again.",
          fbText: "Next to the river all the time: <b>along</b>. To the other side: <b>across</b> the river. The house is on a hill: <b>up</b> the hill."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Andrii’s message is wrong.</p>`,
          text: "The shop is on the other side of the road. I walk [along] the road to the other side.",
          hint: "To the other side: which word do we use?",
          fbOk: "Good eye!",
          fbBad: "The shop is on the other side.",
          fbText: "To the other side: <b>across</b> the road. So <i>along</i> is wrong: I walk <b>across</b> the road."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>The river is next to them all the time.</p>`,
          tiles: ["we", "walk", "along", "the river"],
          extra: ["walks"],
          answer: ["We walk along the river.", "Along the river we walk."],
          hint: "Start with we.",
          fbOk: "Well done!",
          fbBad: "Who walks? We walk.",
          fbText: "<b>We walk along the river.</b> With <i>we</i>, it’s <i>walk</i>, not <i>walks</i>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Oksana’s friend lives on the other side of the river.</p>`,
          before: "Oksana goes",
          after: "the river.",
          answer: ["across", "over"],
          hint: "To the other side: …",
          fbOk: "Yes!",
          fbBad: "Which word means “to the other side”?",
          fbText: "To the other side: Oksana goes <b>across</b> the river."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Walk along Sadova Street. Then go across the bridge. Then go up the hill. My grandma’s flat is there. – Mariia</i></p><p>What do you do after the bridge?</p>`,
          opts: [
            "You walk along Sadova Street.",
            "You go up the hill.",
            "You go down the hill."
          ],
          correct: 1,
          hint: "Find “the bridge”. What comes next?",
          fbOk: "Good eye!",
          fbBad: "Read the sentence after the bridge.",
          fbText: "First, <i>along Sadova Street</i>. Then <i>across the bridge</i>. After the bridge: <b>up the hill</b>."
        }
      ],
      outro: {
        text: "Up, down, across and along tell us which way to go.",
        learned: [
          "Say which way to go: up, down, across, along.",
          "Read a short route and find the way.",
          "Write a sentence about a walk."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e4s7l3",
      title: "Capital cities: Kyiv, London and more",
      short: "Capitals",
      icon: "globe",
      status: "verified",
      why: "Every country has got a capital city. Learn the capitals of Ukraine and English-speaking countries.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "What is a capital?",
          body: `<p class="lead">Andrii and Emma play a quiz in the chat.</p><p><b>Emma:</b> What’s the capital of Ukraine?<br><b>Andrii:</b> It’s Kyiv! I live there. What’s the capital of the UK?<br><b>Emma:</b> London!</p><p>What is a capital?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>What is the capital of Australia?</p>`,
          opts: [
            "Sydney",
            "Canberra",
            "Melbourne"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "It’s <b>Canberra</b>. Sydney and Melbourne are famous cities. But they aren’t the capital."
        },
        {
          type: "info",
          title: "Capital cities",
          body: `<p>A <b><u>cap</u>ital</b> is the main city of a country.</p><ul><li>Ukraine → <b>Kyiv</b></li><li><b>the</b> UK → <b><u>Lon</u>don</b></li><li><b>the</b> USA → <b>Washington, DC</b></li><li><u>Can</u>ada → <b><u>Ot</u>tawa</b></li><li>Aus<u>tra</u>lia → <b><u>Can</u>berra</b></li></ul><p>Kyiv <b>is the capital of</b> Ukraine.</p><p>People speak English in the UK, the USA, Canada and Australia.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "cult",
          title: "Fill in the gaps.",
          text: "{*Kyiv|Lviv} is the capital of Ukraine. London is the capital of {*the UK|UK}. Ottawa is the capital of {*Canada|the Canada}.",
          hint: "Look at the list: the UK, but Canada.",
          fbOk: "Yes!",
          fbBad: "Look at the list again.",
          fbText: "<b>Kyiv</b> is the capital of Ukraine. Lviv is a big city, but it isn’t the capital. We say <b>the UK</b>, but <b>Canada</b> without <i>the</i>."
        },
        {
          type: "choice",
          sk: "cult",
          title: "Choose the correct answer.",
          body: `<p>Canberra is the capital of …</p>`,
          opts: [
            "Australia",
            "Canada",
            "the USA"
          ],
          correct: 0,
          hint: "Look at the list: find Canberra.",
          fbOk: "Right.",
          fbBad: "Canada and Canberra start the same. Look again.",
          fbText: "Canberra is the capital of <b>Australia</b>. The capital of Canada is Ottawa."
        },
        {
          type: "word",
          sk: "write",
          title: "Write the word.",
          body: `<p>Emma: “What’s the capital of the UK?” Write the city with a capital letter.</p>`,
          before: "It’s",
          after: ".",
          answer: "London",
          keepCase: true,
          hint: "Emma and Andrii talk about it in the quiz.",
          fbOk: "Well done!",
          fbBad: "Check the capital letter and the spelling.",
          fbText: "The capital of the UK is <b>London</b>. Names of cities start with a capital letter."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+cap|i|tal", "+Can|a|da", "Aus|+tra|li|a", "+Ot|ta|wa"],
          fbOk: "Exactly.",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>cap</u>ital, <u>Can</u>ada, <u>Ot</u>tawa: the strong part is at the start. Aus<u>tra</u>lia: it’s the second part."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>I live in Kyiv. It’s the capital of Ukraine. My cousin Maksym lives in Ottawa. It’s the capital of Canada. Maksym speaks English at school. – Andrii</i></p><p>Where does Maksym live?</p>`,
          opts: [
            "in the capital of Ukraine",
            "in the capital of the USA",
            "in the capital of Canada"
          ],
          correct: 2,
          hint: "Find Maksym in the text.",
          fbOk: "Good eye!",
          fbBad: "Read about Maksym again.",
          fbText: "Maksym lives in <b>Ottawa</b>. It’s the capital of <b>Canada</b>. Andrii lives in Kyiv, the capital of Ukraine."
        }
      ],
      outro: {
        text: "Kyiv is the capital of Ukraine. London is the capital of the UK.",
        learned: [
          "Name the capitals of Ukraine, the UK, the USA, Canada and Australia.",
          "Ask and answer: What’s the capital of …?",
          "Say the UK and the USA with the."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e4s7l4",
      title: "The biggest and the longest",
      short: "The biggest",
      icon: "chart",
      status: "verified",
      why: "Ukraine has got big cities, long rivers and high mountains. Say which is the biggest.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Which is the highest?",
          body: `<p class="lead">Sofiia reads a book about Ukraine.</p><p><i>Hoverla is the highest mountain in Ukraine. The Dnipro is the longest river in Ukraine. Kyiv is the biggest city in Ukraine.</i></p><p>The highest, the longest, the biggest: what do these words mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Lviv is big. Kharkiv is bigger. Kyiv is …</p>`,
          opts: [
            "the biggest.",
            "the bigger.",
            "the most big."
          ],
          correct: 0,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "Kyiv is <b>the biggest</b> city in Ukraine. The next screen shows the rule."
        },
        {
          type: "info",
          title: "Big, bigger, the biggest",
          body: `<ul><li>long → longer → <b>the longest</b></li><li>high → higher → <b>the highest</b></li><li>tall → taller → <b>the tallest</b></li><li>old → older → <b>the oldest</b></li><li>big → bigger → <b>the biggest</b></li><li>hot → hotter → <b>the hottest</b></li></ul><p>Big, hot: we write the last letter two times.</p><p>Always say <b>the</b>: Kyiv is <b>the biggest</b> city.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "The Dnipro is {*the longest|longest|the longer} river in Ukraine. Hoverla is the {*highest|higher} mountain in Ukraine. Kyiv is the {*biggest|bigest} city in Ukraine.",
          hint: "Look at the list. Don’t forget the.",
          fbOk: "Exactly.",
          fbBad: "Check the list and the spelling.",
          fbText: "<b>The longest</b> – always with <i>the</i>. <b>The highest</b> mountain. Big → <b>the biggest</b>: two letters <i>g</i>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Andrii is 140 cm. Taras is 135 cm. Emma is 145 cm.</p><p>Who is the tallest?</p>`,
          opts: [
            "Andrii",
            "Taras",
            "Emma"
          ],
          correct: 2,
          hint: "Find the biggest number.",
          fbOk: "Right.",
          fbBad: "Look at the numbers again.",
          fbText: "145 cm is the biggest number. <b>Emma is the tallest.</b> Taras is not very tall: 135 cm."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Oksana is ten. Her brother Dmytro is six. Her cousin is three.</p>`,
          before: "Oksana is the",
          after: ".",
          answer: ["oldest", "eldest"],
          hint: "old → older → the …",
          fbOk: "Well done!",
          fbBad: "Look at the list: old.",
          fbText: "Ten is the biggest number. Oksana is <b>the oldest</b>."
        },
        {
          type: "info",
          title: "How high is it?",
          body: `<p><b>How high</b> is Hoverla?<br>– It’s <b>2,061 metres</b> high.</p><p><b>How long</b> is the train?<br>– It’s 200 metres long.</p><p><b>How old</b> is Dmytro?<br>– He’s six.</p>`,
          cta: "Next"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          tiles: ["Hoverla", "is", "the", "highest", "mountain", "in Ukraine"],
          extra: ["higher"],
          answer: ["Hoverla is the highest mountain in Ukraine.", "The highest mountain in Ukraine is Hoverla.", "In Ukraine Hoverla is the highest mountain.", "In Ukraine the highest mountain is Hoverla.", "Is Hoverla the highest mountain in Ukraine?", "Is the highest mountain in Ukraine Hoverla?"],
          hint: "Start with Hoverla.",
          fbOk: "Yes!",
          fbBad: "Remember: the + -est.",
          fbText: "<b>Hoverla is the highest mountain in Ukraine.</b> We say <i>the highest</i>, not <i>the higher</i>."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Sofiia writes to Emma.</p>`,
          text: "Hi Emma! Hoverla is the {*highest|longest} mountain in Ukraine. How {*high|old} is it? It’s 2,061 metres. The Dnipro is the {*longest|highest} river in Ukraine. And Kyiv is the {*biggest|longest} city.",
          hint: "A mountain is high. A river is long. A city is big.",
          fbOk: "Well done!",
          fbBad: "Mountain – high, river – long, city – big.",
          fbText: "Hoverla is <b>the highest</b> mountain. <b>How high</b> is it? – 2,061 metres. The Dnipro is <b>the longest</b> river. Kyiv is <b>the biggest</b> city."
        }
      ],
      outro: {
        text: "Add -est and say the: the longest, the highest, the biggest.",
        learned: [
          "Say the biggest, the longest, the highest.",
          "Ask: How high is it? How long is it?",
          "Name the highest mountain and the longest river in Ukraine."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e4s7l5",
      title: "A postcard from my holiday",
      short: "A postcard",
      icon: "book",
      status: "verified",
      why: "You are on holiday. Write a short postcard to a friend.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "What did Oksana do?",
          body: `<p class="lead">Emma gets a postcard from Oksana.</p><p><i>Dear Emma,<br>I’m on holiday in Odesa. Odesa is on the Black Sea. The weather is hot and sunny. Yesterday we went to the beach. I swam in the sea! Then we ate ice cream.<br>See you soon!<br>Love, Oksana</i></p><p>Went, swam, ate: what do these words mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“Yesterday we <b>went</b> to the beach.” When was it?</p>`,
          opts: [
            "before today",
            "now",
            "after today"
          ],
          correct: 0,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "<b>Yesterday</b> is the day before today. <i>Went</i> is the past of <i>go</i>."
        },
        {
          type: "info",
          title: "Yesterday we went …",
          body: `<p>Today we <b>go</b>. Yesterday we <b>went</b>.</p><ul><li>go → <b>went</b></li><li>swim → <b>swam</b></li><li>eat → <b>ate</b></li><li>see → <b>saw</b></li><li>visit → <b>visited</b>, play → <b>played</b></li></ul><ul><li>I, he, she, it → <b>was</b>: The sea <b>was</b> warm.</li><li>we, you, they → <b>were</b>: We <b>were</b> happy.</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Taras writes about his holiday.</p>`,
          text: "Yesterday we {*went|go} to a museum. The museum {*was|were} very big. We {*saw|see} old boats. My brothers {was|*were} happy.",
          hint: "Yesterday: use the past. One museum or two brothers?",
          fbOk: "Exactly.",
          fbBad: "Look at the list again.",
          fbText: "Yesterday: <b>went</b>, <b>saw</b>. One museum: <b>was</b>. My brothers are <i>they</i>: <b>were</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>swim → ?</p>`,
          before: "Yesterday I",
          after: "in the river. It was cold!",
          answer: "swam",
          hint: "Look at the list: swim → …",
          fbOk: "Well done!",
          fbBad: "Yesterday: what is the past of swim?",
          fbText: "Swim → <b>swam</b>: Yesterday I <b>swam</b> in the river."
        },
        {
          type: "info",
          title: "A postcard",
          body: `<ul><li><b>Dear</b> Emma, – say hello</li><li>Where are you? – I’m on holiday in Odesa.</li><li>The weather – It’s hot and sunny.</li><li>What did you do? – Yesterday we went to the beach.</li><li><b>See you soon!</b></li><li><b>Love</b>, Oksana – your name</li></ul>`,
          cta: "Next"
        },
        {
          type: "order",
          sk: "write",
          title: "Put the sentences in order.",
          body: `<p>Mariia writes a postcard to Tom.</p>`,
          items: [
            "Dear Tom,",
            "I’m on holiday in Lviv with my mum.",
            "Yesterday we visited an old castle.",
            "It was very big!",
            "Love, Mariia"
          ],
          shuffle: [2, 4, 0, 3, 1],
          hint: "Start with Dear. End with your name.",
          fbOk: "Good eye!",
          fbBad: "Look at the postcard plan again.",
          fbText: "First <b>Dear Tom</b>. Then where Mariia is. Then what she did: the castle. <i>It was very big</i> is about the castle. At the end: <b>Love, Mariia</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Andrii’s postcard is wrong.</p>`,
          text: "Yesterday we [go] to the zoo. The weather was sunny. We saw a big bear.",
          hint: "Yesterday: check each verb.",
          fbOk: "Yes!",
          fbBad: "Which verb is not in the past?",
          fbText: "Yesterday: go → <b>went</b>. Yesterday we <b>went</b> to the zoo. <i>Was</i> and <i>saw</i> are correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes a postcard from London.</p>`,
          text: "{*Dear|Love} Oksana, I’m on holiday in London. Yesterday we {*went|go} on a big red bus. We {*saw|see} the River Thames. The weather {*was|were} rainy. See you soon! {*Love|Dear}, Andrii",
          hint: "Which word starts a postcard? Which word is before your name?",
          fbOk: "Well done!",
          fbBad: "Look at the postcard plan and the list.",
          fbText: "A postcard starts with <b>Dear</b>. It ends with <b>Love</b> and your name. Yesterday: <b>went</b>, <b>saw</b>. The weather <b>was</b>."
        }
      ],
      outro: {
        text: "A postcard starts with Dear and ends with Love. About yesterday, we say went, swam, saw, was.",
        learned: [
          "Read a postcard from a holiday.",
          "Use went, swam, ate, saw, was and were.",
          "Put a postcard in the right order."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e4s7l6",
      title: "Plans for the summer: I think I’ll …",
      short: "I think I’ll",
      icon: "star",
      status: "verified",
      why: "The summer holidays are coming. Tell your friends what you think you’ll do.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "What will they do?",
          body: `<p class="lead">It’s the last day of school. The friends chat.</p><p><b>Emma:</b> What will you do in the summer holidays?<br><b>Andrii:</b> I don’t know. I think I’ll visit my grandad in Chernihiv.<br><b>Oksana:</b> It’s very hot today! I think I’ll go to the river.</p><p>What does <i>I’ll</i> mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>I’ll = …</p>`,
          opts: [
            "I will",
            "I am",
            "I was"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>I’ll</b> = <b>I will</b>. It’s about the future."
        },
        {
          type: "info",
          title: "I think I’ll …",
          body: `<p><b>I’ll</b> = I will. <b>She’ll</b> = she will. <b>We’ll</b> = we will.</p><ul><li>You decide now: It’s hot! <b>I’ll</b> open the window.</li><li>You aren’t sure: <b>I think I’ll</b> go to the sea.</li><li>will + verb: I’ll <b>go</b>, she’ll <b>swim</b>. Not: <s>she’ll swims</s>.</li><li>not → <b>won’t</b>: I <b>won’t</b> swim today.</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "It’s hot. I think I’ll {*go|goes|going} swimming. Sofiia thinks she’ll {*visit|visits} her aunt. It’s cold today. I {*won’t|willn’t} swim.",
          hint: "After will: go, not goes.",
          fbOk: "Yes!",
          fbBad: "Look at the list: will + verb.",
          fbText: "After <i>’ll</i>: <b>go</b>, <b>visit</b> – no <i>-s</i>, no <i>-ing</i>. Will not = <b>won’t</b>."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Tom’s bag is very heavy. His sister wants to help now. What does she say?</p>`,
          opts: [
            "I helped you yesterday.",
            "I help you every day.",
            "I’ll help you!"
          ],
          correct: 2,
          hint: "She decides now. Look at the rule.",
          fbOk: "Right.",
          fbBad: "Is it yesterday, every day or now?",
          fbText: "She decides now: <b>I’ll help you!</b> <i>Yesterday</i> is the past. <i>Every day</i> is not about now."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Emma: “What will you do in the summer?” Taras isn’t sure.</p>`,
          before: "I think",
          after: "go to the Carpathians.",
          answer: ["I’ll", "I am going to"],
          contractions: true,
          keys: ["’"],
          hint: "I + will = …",
          fbOk: "Well done!",
          fbBad: "Look at the rule: I think I’ll …",
          fbText: "Taras isn’t sure: <b>I think I’ll</b> go to the Carpathians. (I will = I’ll.)"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Andrii isn’t sure about his summer.</p>`,
          tiles: ["I", "think", "I’ll", "visit", "my grandad"],
          extra: ["visits"],
          answer: "I think I’ll visit my grandad.",
          hint: "Start with I think.",
          fbOk: "Exactly.",
          fbBad: "After I’ll: visit, not visits.",
          fbText: "<b>I think I’ll visit my grandad.</b> After <i>’ll</i>, there is no <i>-s</i>."
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana and Emma chat.</p>`,
          text: "Oksana: It’s very hot today! I think I’ll {*go|goes|went} to the river. Emma: Good idea! {*I’ll|I was} come too! Oksana: Great! {*We’ll|We were} have a picnic. But I {*won’t|willn’t} swim. The water is cold.",
          hint: "It’s about the future. Use ’ll and won’t.",
          fbOk: "Well done!",
          fbBad: "Look at the rule again.",
          fbText: "I think I’ll <b>go</b>. Emma decides now: I<b>’ll</b> come too! We<b>’ll</b> have a picnic. Will not = <b>won’t</b>."
        }
      ],
      outro: {
        text: "I’ll = I will. When you decide now or you aren’t sure, say: I think I’ll …",
        learned: [
          "Say what you think you’ll do: I think I’ll go to the sea.",
          "Use will and won’t with a verb.",
          "Offer help: I’ll help you!"
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e4s7l7",
      title: "Our summer trip",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e4s7boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help Taras with his trip?",
          body: `<p class="lead">Taras and his dad go on a summer trip from Lviv to Kyiv.</p><p>Read his messages and help him. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          body: `<p>Taras writes about the trip.</p>`,
          text: "We go to Kyiv {*by|on} train. In Kyiv, we go to the hotel {*on|by} foot. It isn’t far.",
          pre: "e4s7l1",
          hint: "A train, but walking: which one is on?",
          fbOk: "Yes!",
          fbBad: "Check the transport list.",
          fbText: "<b>By</b> train. When you walk: <b>on</b> foot."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 2",
          title: "Read and choose.",
          body: `<p><i>From the hotel, walk along the river. Then go across the bridge. The museum is next to the bridge.</i></p><p>What do they do first?</p>`,
          opts: [
            "They walk along the river.",
            "They go across the bridge.",
            "They go up the hill."
          ],
          correct: 0,
          pre: "e4s7l2",
          hint: "Read the first sentence.",
          fbOk: "Right.",
          fbBad: "What comes first in the text?",
          fbText: "First, they walk <b>along the river</b>. Then they go across the bridge."
        },
        {
          type: "word",
          sk: "cult",
          eyebrow: "Task 3",
          title: "Write the word.",
          body: `<p>Dad: “Kyiv is the capital of Ukraine. What’s the capital of Canada?”</p>`,
          before: "It’s",
          after: ".",
          answer: "Ottawa",
          pre: "e4s7l3",
          hint: "Not Canberra. That’s Australia.",
          fbOk: "Well done!",
          fbBad: "Look at the capitals list again.",
          fbText: "The capital of Canada is <b>Ottawa</b>. Canberra is the capital of Australia."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Fill in the gaps.",
          body: `<p>Taras writes about Kyiv.</p>`,
          text: "Kyiv is {*the biggest|biggest|the bigger} city in Ukraine. The Dnipro is the {*longest|longer} river.",
          pre: "e4s7l4",
          hint: "Remember: the + -est.",
          fbOk: "Exactly.",
          fbBad: "Check the and -est.",
          fbText: "<b>The biggest</b> city – always with <i>the</i>. <b>The longest</b> river."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Task 5",
          title: "Complete the sentences.",
          body: `<p>Taras writes a postcard to Emma.</p>`,
          text: "{*Dear|Love} Emma, I’m on holiday in Kyiv. Yesterday we {*went|go} to a museum. We {*saw|see} old planes. It {*was|were} great! {*Love|Dear}, Taras",
          pre: "e4s7l5",
          hint: "Yesterday: use the past. How does a postcard start?",
          fbOk: "Good eye!",
          fbBad: "Check the postcard plan and the past forms.",
          fbText: "<b>Dear</b> Emma … <b>Love</b>, Taras. Yesterday: <b>went</b>, <b>saw</b>. It <b>was</b> great."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 6",
          title: "Choose the correct answer.",
          body: `<p>Dad: “It’s very hot. Let’s get a drink. Juice or water?” Taras decides now. What does he say?</p>`,
          opts: [
            "I had juice yesterday.",
            "I think I’ll have juice.",
            "I think I’ll has juice."
          ],
          correct: 1,
          pre: "e4s7l6",
          hint: "will + verb: have, not has.",
          fbOk: "Well done!",
          fbBad: "Look at the will rule again.",
          fbText: "Taras decides now: <b>I think I’ll have juice.</b> After <i>’ll</i>: <i>have</i>, not <i>has</i>."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about transport, the way, capitals and your holidays.",
        learned: [
          "Say how you travel and which way to go.",
          "Name capital cities and say the biggest, the longest.",
          "Write a short postcard from a holiday.",
          "Say what you think you’ll do: I think I’ll …"
        ]
      }
    }
  ]
});
