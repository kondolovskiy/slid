/* Слід · Англійська мова, 6 клас — «London, the capital of the UK» (e6s8)
   Програма: МП-ІМ (наказ МОН № 795 від 12.07.2021), 5–6 кл., с. 20 (розд. 4.2.2): «Країни виучуваної мови — столиця; визначні місця»;
   функції — порівнювати, висловлювати враження; граматика A2 (с. 21–22): Conditional — if + Present Simple, real conditions
   (головне речення — імператив чи Present Simple, без will: first conditional — 7 кл.); Reported statements with say and tell
   (без вимоги backshift); повторення — Present Perfect і Past Simple passive (e6s7), comparatives / superlatives (e5s10l4, e5s10l5):
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Увесь зміст — англійською, британська норма (D-054). Тексти, діалоги, герої й мапа — власні (docs/design/english.md §8).
   Герої: Emma й Tom — місто в Англії (не назване), Emma була в Лондоні з класом; Andrii — Kyiv, був у Лондоні в 4 кл. (e4s7);
   нові — George (живе в Лондоні) і Liliia (однокласниця Emma). Зовнішність героїв не описано (канон задає e6s1).
   Факти про Лондон і Київ — два джерела на кожен, URL — tasks/…/write-eng-g6-e6s8.md, «Нотатки агента».
   Статус: draft. 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e6s8 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e6s8",
  grade: 6,
  weeks: [32, 35],
  title: "London, the capital of the UK",
  why: "To tell people about London and its famous places. And to tell a friend what other people said.",
  requires: ["e4s7l3", "e5s10l3", "e5s10l4"],
  meta: { author: "writer-e6s8", created: "2026-11-20", factcheck: null, teacher: null },
  credits: [
    ["A simple map of central London (img/eng/e6s8/london-map.svg), own drawing for this section", "Slid authors (writer-e6s8)", "CC0 1.0", "https://github.com/kondolovskiy/slid/blob/main/img/eng/e6s8/london-map.svg"]
  ],
  badges: [
    { id: "e6s8boss", name: "London guide", icon: "trophy", desc: "Finish the final lesson “London, the capital of the UK”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e6s8l1",
      title: "London: a city on the Thames",
      short: "London",
      icon: "river",
      status: "draft",
      why: "London is a big and famous city. Learn the main facts about it and ask: Have you ever been there?",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Have you ever been to London?",
          body: `<p class="lead">Emma writes to Andrii.</p><p><b>Emma:</b> Our class went to London on Friday! Have you ever been there?<br><b>Andrii:</b> Yes, I have! I went there two years ago. We saw the River Thames.<br><b>Emma:</b> Cool! I’ve been there three times now.</p><p>What do you know about London?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>How many people live in London?</p>`,
          opts: [
            "about 3 million",
            "about 9 million",
            "about 900,000"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "About <b>9 million</b> people live in London. The next screen shows more."
        },
        {
          type: "info",
          title: "London: the capital",
          body: `<ul><li>London is <b>the capital of</b> the UK. It’s the capital of England too.</li><li>It’s <b>the biggest city</b> in the UK: about 9 million people live there (2024).</li><li>It’s <b>on</b> the River Thames.</li><li>Lots of tourists come to see its famous places.</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "London is the capital {*of|in} the UK. It’s {*on|in} the River Thames. It’s the {*biggest|bigger} city in the UK.",
          hint: "A city and a river: in or on? One city out of all the cities: -er or -est?",
          fbOk: "Exactly.",
          fbBad: "Look at the facts about London again.",
          fbText: "The capital <b>of</b> the UK. A city is <b>on</b> a river. One city out of all the cities: <b>the biggest</b>."
        },
        {
          type: "info",
          title: "Have you ever been…?",
          body: `<p><b>Have</b> you ever <b>been</b> to London?<br>– Yes, I <b>have</b>. / No, I <b>haven’t</b>.</p><ul><li><b>I’ve been</b> to London. → at some time in my life (Present Perfect)</li><li>I <b>went</b> there two years ago. → when? (Past Simple)</li></ul><p>With <i>ago</i>, <i>last year</i>, <i>on Friday</i>, use the Past Simple.</p>`,
          cta: "Next"
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of Andrii’s message is wrong.</p>`,
          text: "I [have been] to London two years ago. [!We saw] the River Thames. It was great!",
          hint: "Find the time words. Do they say when?",
          fbOk: "Good eye!",
          fbBad: "Two years ago: which tense do we use?",
          fbText: "<b>Two years ago</b> says when, so we use the Past Simple: I <b>went</b> to London two years ago. <i>We saw</i> is correct."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          body: `<p>Emma and Andrii talk about London.</p>`,
          text: "Emma: {*Have|Has} you ever been to London? Andrii: Yes, I {*have|did}. I {*went|have been} there two years ago.",
          hint: "Have you ever been…? – Yes, I … . Then look at the time words: two years ago.",
          fbOk: "Well done!",
          fbBad: "Look at the rule: Have you…? – Yes, I have.",
          fbText: "<b>Have</b> you ever been…? – Yes, I <b>have</b>. Two years ago says when: I <b>went</b> there."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>There is no bigger city in the UK than London.</p>`,
          before: "London is the",
          after: "city in the UK.",
          answer: ["biggest", "largest"],
          hint: "big → bigger → the …",
          fbOk: "Yes!",
          fbBad: "big → bigger → the … . Check the spelling.",
          fbText: "big → bigger → <b>the biggest</b>. London is the biggest city in the UK."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Hi Andrii! On Friday our class went to London by train. We walked along the Thames and saw lots of famous places. I’ve been to London three times now. My brother Tom is ten, and he has never been there! He wants to go next time. – Emma</i></p><p>Who has never been to London?</p>`,
          opts: [
            "Tom",
            "Emma",
            "Andrii"
          ],
          correct: 0,
          hint: "Find the word “never” in the message.",
          fbOk: "Good eye!",
          fbBad: "Read the message again. Who has never been there?",
          fbText: "Emma writes: “Tom … <b>has never been</b> there!” Emma has been to London three times. Andrii went there two years ago."
        }
      ],
      outro: {
        text: "London is the capital of the UK and the biggest city in the UK. It’s on the River Thames.",
        learned: [
          "Say the main facts about London.",
          "Ask and answer: Have you ever been to London?",
          "Use the Past Simple with ago: I went there two years ago."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e6s8l2",
      title: "Famous places in London: a map",
      short: "Famous places",
      icon: "map",
      status: "draft",
      why: "Big Ben, the London Eye, the Tower of London: find them on a map and say what they are.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "What did Emma see?",
          img: "img/eng/e6s8/london-map.svg",
          fit: true,
          cap: "A simple map of central London",
          body: `<p class="lead">Emma sends Andrii a map of London.</p><p><i>We saw Big Ben and the London Eye. Then we went to the Tower of London. Next time I want to see Buckingham Palace!</i></p><p>What are these places?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>What is Big Ben?</p>`,
          opts: [
            "a palace",
            "a bridge",
            "a bell"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Big Ben</b> is the name of a big bell in a clock tower. The next screen shows more."
        },
        {
          type: "info",
          title: "Famous places in London",
          body: `<ul><li><b>Big Ben</b> – a big bell in a clock tower. People often call the tower Big Ben too. Its real name is the Elizabeth Tower.</li><li><b>the London Eye</b> – a very big wheel, 135 metres high</li><li><b>the Tower of London</b> – a very old castle</li><li><b>Buckingham Palace</b> – the King’s palace in London</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          left: ["Big Ben is", "The London Eye is", "The Tower of London is", "Buckingham Palace is"],
          right: ["a big bell in a clock tower.", "a very big wheel.", "a very old castle.", "the King’s palace."],
          hint: "Look at the list of famous places again.",
          fbOk: "Well done!",
          fbBad: "Check the list: a bell, a wheel, a castle or a palace?",
          fbText: "<b>Big Ben</b> – a bell. <b>The London Eye</b> – a wheel. <b>The Tower of London</b> – a castle. <b>Buckingham Palace</b> – the King’s palace."
        },
        {
          type: "choice",
          sk: "cult",
          title: "Choose the correct answer.",
          img: "img/eng/e6s8/london-map.svg",
          fit: true,
          cap: "A simple map of central London",
          body: `<p>Big Ben is <b>next to</b> the Thames. <b>Opposite</b> means on the other side.</p><p>Look at the map. Which place is opposite Big Ben, on the other side of the river?</p>`,
          opts: [
            "Buckingham Palace",
            "the British Museum",
            "the London Eye"
          ],
          correct: 2,
          hint: "Find Big Ben. Then look across the river.",
          fbOk: "Right.",
          fbBad: "Find Big Ben on the map. What is on the other side of the river?",
          fbText: "Big Ben is next to the Thames. <b>The London Eye</b> is on the other side of the river, opposite Big Ben."
        },
        {
          type: "info",
          title: "When was it built?",
          body: `<ul><li>The Tower of London <b>was built</b> more than 900 years ago.</li><li>Big Ben’s tower <b>was finished</b> in 1859.</li><li>The London Eye is new: people first went on it in 2000.</li></ul><p><b>was / were + built</b> – the Past Simple passive.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "The Tower of London {*was built|built} more than 900 years ago. It’s {*older|newer} than Big Ben. The London Eye is {*newer|older} than Big Ben.",
          hint: "Look at the dates. Which place is the oldest? Which is the newest?",
          fbOk: "Exactly.",
          fbBad: "Look at the dates again: more than 900 years ago, 1859, 2000.",
          fbText: "The Tower <b>was built</b> more than 900 years ago, so it’s <b>older</b> than Big Ben (1859). The London Eye (2000) is <b>newer</b>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>It’s 135 metres high. People go round in it and see all of London.</p>`,
          before: "The London Eye is a very big",
          after: ".",
          answer: "wheel",
          hint: "Look at the list of famous places.",
          fbOk: "Well done!",
          fbBad: "What goes round? Look at the list again.",
          fbText: "The London Eye is a very big <b>wheel</b>. It’s 135 metres high."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>We started at Big Ben. Then we walked across the bridge to the London Eye. After lunch we went to the Tower of London. It’s very old – it was built more than 900 years ago! – Emma</i></p><p>Where did Emma’s class go after lunch?</p>`,
          opts: [
            "to the London Eye",
            "to the Tower of London",
            "to Buckingham Palace"
          ],
          correct: 1,
          hint: "Find “after lunch” in the text.",
          fbOk: "Good eye!",
          fbBad: "Read the sentence with “after lunch” again.",
          fbText: "Emma writes: “<b>After lunch</b> we went to <b>the Tower of London</b>.” They saw Big Ben and the London Eye before lunch."
        }
      ],
      outro: {
        text: "Big Ben is a bell, the London Eye is a wheel, and the Tower of London is a very old castle.",
        learned: [
          "Name famous places in London and say what they are.",
          "Find places on a map: next to, near, opposite.",
          "Say when a place was built: It was built more than 900 years ago."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e6s8l3",
      title: "If it rains, go to a museum!",
      short: "If it rains",
      icon: "bulb",
      status: "draft",
      why: "Help visitors to London. Say what to do if it rains or if they like dinosaurs.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "What can you do on a rainy day?",
          body: `<p class="lead">George lives in London. He writes a page for visitors to his city.</p><p><i>If it rains, go to a museum! Lots of big museums in London are free. If you like dinosaurs, visit the Natural History Museum. If you want to see all of London, go on the London Eye.</i></p><p>How do we say what to do <b>if</b> something happens?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "If it will rain, go to a museum.",
            "If it rain, go to a museum.",
            "If it rains, go to a museum."
          ],
          correct: 2,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "We say <b>If it rains</b>. The next screen shows the rule."
        },
        {
          type: "info",
          title: "If + Present Simple",
          body: `<p><b>If</b> + Present Simple, + do it!</p><ul><li><b>If</b> it <b>rains</b>, <b>go</b> to a museum.</li><li><b>If</b> you <b>like</b> dinosaurs, <b>visit</b> the Natural History Museum.</li></ul><p>After <i>if</i>, don’t use <i>will</i>. Not: <s>If it will rain</s>.</p><p>When <i>if</i> comes first, put a comma.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "func",
          title: "Match the halves.",
          left: ["If it rains,", "If you like dinosaurs,", "If you want to see all of London,", "If you are hungry,"],
          right: ["take an umbrella.", "visit the Natural History Museum.", "go on the London Eye.", "have a sandwich."],
          hint: "Read each half. Which end goes with it?",
          fbOk: "Right.",
          fbBad: "Read George’s page again. Where are the dinosaurs?",
          fbText: "If it rains, <b>take an umbrella</b>. Dinosaurs – <b>the Natural History Museum</b>. All of London – <b>the London Eye</b>. Hungry – <b>have a sandwich</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "If it {*rains|will rain}, go to the British Museum. It’s free! If you {*like|will like} animals, {*visit|visits} the Natural History Museum.",
          hint: "After if: the Present Simple, no will. Then: do it!",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: if + Present Simple.",
          fbText: "If it <b>rains</b>, if you <b>like</b> – the Present Simple after <i>if</i>. Then the order: <b>visit</b> the museum."
        },
        {
          type: "info",
          title: "If…, we usually…",
          body: `<p>For things that usually happen, both parts are in the Present Simple:</p><ul><li>If it <b>rains</b>, George <b>plays</b> computer games at home.</li><li>If it’s sunny, we <b>go</b> to the park.</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>George: “If it’s sunny, I usually … football in the park.”</p>`,
          opts: [
            "play",
            "plays",
            "playing"
          ],
          correct: 0,
          hint: "Who plays? I or he?",
          fbOk: "Well done!",
          fbBad: "Look at the person: I.",
          fbText: "Both parts are in the Present Simple. With <i>I</i>: I usually <b>play</b> football."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Write George’s advice for visitors.</p>`,
          tiles: ["if you like", "dinosaurs,", "visit", "the Natural History Museum"],
          extra: ["will like"],
          answer: "If you like dinosaurs, visit the Natural History Museum.",
          hint: "Start with if. Where is the comma?",
          fbOk: "Yes!",
          fbBad: "After if: the Present Simple, no will.",
          fbText: "<b>If you like dinosaurs, visit the Natural History Museum.</b> After <i>if</i> we say <i>like</i>, not <i>will like</i>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>George writes a page for visitors to London.</p>`,
          text: "Lots of big museums in London are {*free|expensive}. If it {*rains|will rain}, {*go|goes} to the British Museum. If you {*like|will like} dinosaurs, visit the Natural History Museum. If you want to see all of London, go on the {*London Eye|Tower of London}.",
          hint: "Use everything from this lesson: free museums, if + Present Simple.",
          fbOk: "Well done!",
          fbBad: "Check the rule: if + Present Simple. Then: do it!",
          fbText: "The museums are <b>free</b>. If it <b>rains</b>, <b>go</b>… If you <b>like</b>… To see all of London, go on the <b>London Eye</b>."
        }
      ],
      outro: {
        text: "After if, use the Present Simple, not will: If it rains, go to a museum!",
        learned: [
          "Give advice with if: If it rains, go to a museum.",
          "Use the Present Simple after if.",
          "Name free museums in London."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e6s8l4",
      title: "Kyiv and London: two capitals",
      short: "Two capitals",
      icon: "scale",
      status: "draft",
      why: "Compare Kyiv and London: their rivers, people and underground trains.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Which city is bigger?",
          body: `<p class="lead">Andrii writes to George in London.</p><p><b>Andrii:</b> Kyiv is on the Dnipro. Is London bigger than Kyiv?<br><b>George:</b> Yes, it is. But is the Thames longer than the Dnipro?<br><b>Andrii:</b> No, it isn’t! The Dnipro is longer.</p><p>How can we compare two capitals?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Which is older: the London Underground or the Kyiv Metro?</p>`,
          opts: [
            "the Kyiv Metro",
            "the London Underground",
            "They are the same age."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "The London Underground opened in <b>1863</b>. The Kyiv Metro opened in <b>1960</b>. The next screen shows more."
        },
        {
          type: "info",
          title: "Two capitals",
          body: `<p><b>Kyiv</b></p><ul><li>on the Dnipro (about 2,200 km long)</li><li>about 3 million people (2022)</li><li>the Kyiv Metro – opened in 1960</li></ul><p><b>London</b></p><ul><li>on the Thames (346 km long)</li><li>about 9 million people (2024)</li><li>the London Underground – opened in 1863</li></ul><p>The London Underground is <b>the oldest</b> underground in the world.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "The Dnipro is {*longer|shorter} than the Thames. London is {*bigger|smaller} than Kyiv. The London Underground is {*older|newer} than the Kyiv Metro.",
          hint: "Look at the numbers on the last screen.",
          fbOk: "Exactly.",
          fbBad: "Compare the numbers again.",
          fbText: "2,200 km is more than 346 km: the Dnipro is <b>longer</b>. 9 million is more than 3 million: London is <b>bigger</b>. 1863 is before 1960: the Underground is <b>older</b>."
        },
        {
          type: "choice",
          sk: "cult",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is true?</p>`,
          opts: [
            "The Kyiv Metro is older than the London Underground.",
            "The Thames is longer than the Dnipro.",
            "The London Underground is the oldest underground in the world."
          ],
          correct: 2,
          hint: "Check each sentence with the facts.",
          fbOk: "Right.",
          fbBad: "Look at the dates and the rivers again.",
          fbText: "The London Underground (1863) is <b>the oldest underground in the world</b>. The Kyiv Metro opened in 1960. The Dnipro is longer than the Thames."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>The Dnipro is about 2,200 km long. The Thames is 346 km long.</p>`,
          before: "The Thames is",
          after: "than the Dnipro.",
          answer: ["shorter", "smaller"],
          hint: "The Thames isn’t longer. short → …",
          fbOk: "Yes!",
          fbBad: "Which river is longer? So the Thames is …",
          fbText: "346 km is less than 2,200 km. The Thames is <b>shorter</b> than the Dnipro."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>George tells Andrii a true fact.</p>`,
          tiles: ["the London Underground", "is", "older", "than", "the Kyiv Metro"],
          extra: ["more"],
          answer: "The London Underground is older than the Kyiv Metro.",
          hint: "1863 or 1960: which is older?",
          fbOk: "Well done!",
          fbBad: "Old is a short word: -er. Do we need more?",
          fbText: "<b>The London Underground is older than the Kyiv Metro.</b> Old is a short word: <i>older</i>, not <i>more old</i>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          body: `<p>George and Andrii talk about their cities.</p>`,
          text: "George {*has never been|have never been} to Kyiv. Andrii {*has been|have been} to London. He {*went|has been} there two years ago.",
          hint: "He has… . Then look at the time words: two years ago.",
          fbOk: "Good eye!",
          fbBad: "He, she: has. A time in the past: the Past Simple.",
          fbText: "He <b>has never been</b>, he <b>has been</b>. Two years ago says when: he <b>went</b> there."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes about two capitals.</p>`,
          text: "Kyiv and London are capitals. London is {*bigger|smaller} than Kyiv: about 9 million people live there. But the Dnipro is {*longer|shorter} than the Thames! The London Underground is the {*oldest|older} underground in the world. George, {*have|has} you ever been to Kyiv?",
          hint: "Use the facts from this lesson: -er than, the -est, Have you ever…?",
          fbOk: "Well done!",
          fbBad: "Check the facts and the rule: Have you ever been…?",
          fbText: "London is <b>bigger</b>. The Dnipro is <b>longer</b>. The Underground is <b>the oldest</b> in the world. <b>Have</b> you ever been to Kyiv?"
        }
      ],
      outro: {
        text: "London is bigger than Kyiv, but the Dnipro is longer than the Thames.",
        learned: [
          "Compare two capitals: bigger than, longer than.",
          "Say the oldest underground in the world.",
          "Tell people about Kyiv and the Dnipro."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e6s8l5",
      title: "Emma told me about London: said and told",
      short: "Said and told",
      icon: "voice",
      status: "draft",
      why: "Tell a friend what another person said. Use said and told.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "What did Emma say?",
          body: `<p class="lead">Andrii talks to Oksana.</p><p><b>Andrii:</b> Emma told me about her trip to London. She said that the London Eye was great!<br><b>Oksana:</b> What else did she say?<br><b>Andrii:</b> She told me that Big Ben was a bell!</p><p>When do we say <b>said</b>, and when do we say <b>told</b>?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "Emma said me about London.",
            "Emma told about London me.",
            "Emma told me about London."
          ],
          correct: 2,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "We say <b>Emma told me</b>. The next screen shows the rule."
        },
        {
          type: "info",
          title: "Said and told",
          body: `<p>Emma: “<b>I</b> love the London Eye.”</p><ul><li>Emma <b>said</b> (that) <b>she</b> loved the London Eye.</li><li>Emma <b>told me</b> (that) <b>she</b> loved the London Eye.</li></ul><p><b>told</b> + a person: told me, told Andrii, told us.<br><b>said</b> – no person after it.</p><p>Not: <s>said me</s>, <s>told that</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Emma {*told|said} me about the Tower of London. She {*said|told} that it was very old. Tom {*told|said} us that he wanted to see it.",
          hint: "Is there a person after the gap?",
          fbOk: "Exactly.",
          fbBad: "A person after it: told. No person: said.",
          fbText: "<b>Told me</b>, <b>told us</b> – a person after <i>told</i>. She <b>said that</b> – no person after <i>said</i>."
        },
        {
          type: "info",
          title: "I → she, my → her",
          body: `<p>When you tell other people’s words, change the words for people:</p><ul><li>I → he / she</li><li>my → his / her</li><li>we → they</li></ul><p>Emma: “<b>My</b> favourite place is the London Eye.”<br>→ Emma said that <b>her</b> favourite place was the London Eye.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>George: “I love the British Museum.” What did George say?</p>`,
          opts: [
            "George said I loved the British Museum.",
            "George said he loved the British Museum.",
            "George said she loved the British Museum."
          ],
          correct: 1,
          hint: "George is a boy. I → he or she?",
          fbOk: "Right.",
          fbBad: "Look at the rule: I → he / she.",
          fbText: "George says <i>I</i>. We tell his words with <b>he</b>: George said <b>he</b> loved the British Museum."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Write <b>said</b> or <b>told</b>.</p>`,
          before: "Emma",
          after: "me that Big Ben was a bell.",
          answer: "told",
          hint: "Is there a person after the gap?",
          fbOk: "Well done!",
          fbBad: "Look: me comes after the gap.",
          fbText: "<b>Me</b> is a person, so we say <b>told</b>: Emma told me that Big Ben was a bell."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of Oksana’s message is wrong.</p>`,
          text: "Andrii [said me] that Emma was in London. [!She told] him about the Thames.",
          hint: "said + a person: is it correct?",
          fbOk: "Good eye!",
          fbBad: "Look at said and told again.",
          fbText: "We can’t say <i>said me</i>. Say <b>told me</b>: Andrii <b>told me</b> that Emma was in London. <i>She told him</i> is correct."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Emma: “I liked the London Eye.” Tell Emma’s words.</p>`,
          tiles: ["Emma", "said", "that she", "liked", "the London Eye"],
          extra: ["told"],
          answer: "Emma said that she liked the London Eye.",
          hint: "There is no person after the verb. said or told?",
          fbOk: "Yes!",
          fbBad: "No person after the verb: said or told?",
          fbText: "<b>Emma said that she liked the London Eye.</b> No person after the verb, so we use <i>said</i>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Hi Oksana! Emma told me about her class trip to London. She said that the London Eye was 135 metres high. She told me that the Tower of London was more than 900 years old. And she said that Big Ben was a bell, not a tower! – Andrii</i></p><p>What did Emma tell Andrii about the Tower of London?</p>`,
          opts: [
            "that it was more than 900 years old",
            "that it was 135 metres high",
            "that it was a bell"
          ],
          correct: 0,
          hint: "Find “the Tower of London” in the message.",
          fbOk: "Good eye!",
          fbBad: "Read the sentence about the Tower again.",
          fbText: "Andrii writes: “She told me that the Tower of London was <b>more than 900 years old</b>.” The London Eye is 135 metres high. Big Ben is a bell."
        }
      ],
      outro: {
        text: "Say told + a person: Emma told me. Say said without a person: Emma said that…",
        learned: [
          "Tell a friend what another person said.",
          "Use told + a person and said without a person.",
          "Change I to he or she: George said he loved the museum."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e6s8l6",
      title: "A post from London: what I liked most",
      short: "A post",
      icon: "book",
      status: "draft",
      why: "Read a post about a trip to London. Then say what you liked most.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "What did Emma like most?",
          body: `<p class="lead">Emma writes a post for the penfriend club.</p><p>It’s about her class trip to London. Read it in three parts.</p><p>What did Emma like most?</p>`,
          cta: "Let’s read"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: My trip to London, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i>Last Friday our class went to London by train. It was my third visit, but London is always exciting! First we saw Big Ben. Our teacher told us that Big Ben was really a bell. The tower’s name is the Elizabeth Tower. Then we walked across the bridge to the London Eye.</i></p><p>What did the teacher tell the class?</p>`,
          opts: [
            "that Big Ben was a bridge",
            "that the London Eye was a tower",
            "that Big Ben was a bell"
          ],
          correct: 2,
          hint: "Find “told us” in the text.",
          fbOk: "Yes!",
          fbBad: "Read the sentence with “told us” again.",
          fbText: "Emma writes: “Our teacher told us that Big Ben was really <b>a bell</b>.”"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: My trip to London, part 2 of 3",
          title: "Read and choose.",
          body: `<p><i>The London Eye is a very big wheel, 135 metres high. We went up in it, and the view was amazing! We saw the Thames and lots of bridges. My friend Liliia said that she was a bit afraid. But she liked it in the end. I wasn’t afraid at all!</i></p><p>What did Liliia say?</p>`,
          opts: [
            "that the view was boring",
            "that she was a bit afraid",
            "that she saw Big Ben"
          ],
          correct: 1,
          hint: "Find Liliia’s name in the text.",
          fbOk: "Right.",
          fbBad: "Read the sentence about Liliia again.",
          fbText: "Emma writes: “My friend Liliia said that she was <b>a bit afraid</b>.” But she liked it in the end."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: My trip to London, part 3 of 3",
          title: "Read and choose.",
          body: `<p><i>After lunch we went to the Tower of London. It was built more than 900 years ago! So what did I like most? The London Eye! If you go to London, go on it. And if it rains, go to a museum – lots of them are free.</i></p><p>What did Emma like most?</p>`,
          opts: [
            "the London Eye",
            "the Tower of London",
            "the museums"
          ],
          correct: 0,
          hint: "Find “like most” in the text.",
          fbOk: "Well done!",
          fbBad: "Read the question in the text: what did I like most?",
          fbText: "Emma asks: “What did I like most?” and answers: “<b>The London Eye!</b>”"
        },
        {
          type: "info",
          title: "What did you like most?",
          body: `<ul><li>What did you like <b>most</b>?</li><li>I liked the London Eye <b>most</b>.</li><li><b>My favourite place was</b> the London Eye.</li><li>The view was <b>amazing</b>!</li><li>I was <b>a bit</b> afraid, but I liked it.</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "write",
          title: "Complete the sentences.",
          body: `<p>Andrii writes a comment on Emma’s post.</p>`,
          text: "Great post, Emma! My favourite place {*was|were} the London Eye too. I {*went|have been} on it two years ago. If you {*come|will come} to Kyiv, {*go|goes} on the Kyiv Metro!",
          hint: "One place: was or were? Two years ago: which tense? After if: the Present Simple.",
          fbOk: "Exactly.",
          fbBad: "Check: one place, two years ago, if + Present Simple.",
          fbText: "My favourite place <b>was</b>. Two years ago: I <b>went</b>. If you <b>come</b> to Kyiv, <b>go</b> on the Kyiv Metro!"
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>George tells Andrii about his favourite place in London.</p>`,
          tiles: ["my favourite place", "was", "the Natural History Museum"],
          extra: ["were"],
          answer: ["My favourite place was the Natural History Museum.", "The Natural History Museum was my favourite place."],
          hint: "One place: was or were?",
          fbOk: "Yes!",
          fbBad: "One place – was or were?",
          fbText: "<b>My favourite place was the Natural History Museum.</b> Or: <b>The Natural History Museum was my favourite place.</b> One place: <i>was</i>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Emma liked the London Eye more than all the other places.</p>`,
          before: "What did Emma like",
          after: "? – The London Eye.",
          answer: ["most", "best"],
          hint: "Look at the questions on the last screen.",
          fbOk: "Well done!",
          fbBad: "What did you like …? Look at the list again.",
          fbText: "What did Emma like <b>most</b>? – The London Eye. <i>best</i> is correct too."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana tells her class about Emma’s post.</p>`,
          text: "Emma {*told|said} us about her trip to London. She {*said|told} that the view from the London Eye was amazing. Her friend Liliia was a bit {*afraid|amazing}. Emma says: if it {*rains|will rain}, go to a museum!",
          hint: "Use everything from this section: told + a person, said, if + Present Simple.",
          fbOk: "Well done!",
          fbBad: "Check: told + a person, said – no person, if + Present Simple.",
          fbText: "Emma <b>told</b> us. She <b>said</b> that… Liliia was a bit <b>afraid</b>. If it <b>rains</b>, go to a museum!"
        }
      ],
      outro: {
        text: "Now you can read a post about London and say what you liked most.",
        learned: [
          "Read a post about a trip to London.",
          "Say what you liked most: My favourite place was…",
          "Write a comment with said, told and if."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e6s8l7",
      title: "London quiz",
      short: "Section final",
      icon: "trophy",
      status: "draft",
      boss: true,
      badge: "e6s8boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you win George’s London quiz?",
          body: `<p class="lead">George makes a London quiz for Andrii’s class in Kyiv.</p><p>Help them answer. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "cult",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          text: "London is the capital {*of|in} the UK. It’s {*on|in} the River Thames. {*Have|Has} you ever been there?",
          pre: "e6s8l1",
          hint: "A city and a river: in or on? Have you ever…?",
          fbOk: "Yes!",
          fbBad: "Check the facts and the question again.",
          fbText: "The capital <b>of</b> the UK, <b>on</b> the Thames. <b>Have</b> you ever been there?"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 2",
          title: "Choose the correct answer.",
          img: "img/eng/e6s8/london-map.svg",
          fit: true,
          cap: "A simple map of central London",
          body: `<p>Look at the map. Which place is north of the Thames, far from the river?</p>`,
          opts: [
            "the London Eye",
            "Big Ben",
            "the British Museum"
          ],
          correct: 2,
          pre: "e6s8l2",
          hint: "Find N on the map. Which place is at the top?",
          fbOk: "Right.",
          fbBad: "North is at the top of the map.",
          fbText: "North is at the top. <b>The British Museum</b> is north of the river. Big Ben and the London Eye are next to the Thames."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Write the missing word.",
          body: `<p>Write the verb <b>rain</b> in the correct form.</p>`,
          before: "If it",
          after: "tomorrow, go to a museum.",
          answer: "rains",
          pre: "e6s8l3",
          hint: "After if: the Present Simple. it → …",
          fbOk: "Well done!",
          fbBad: "After if, don’t use will. it rain…?",
          fbText: "After <i>if</i>, use the Present Simple: If it <b>rains</b> tomorrow, go to a museum."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Choose the correct answer.",
          body: `<p>The Dnipro: about 2,200 km. The Thames: 346 km.</p><p>Which sentence is correct?</p>`,
          opts: [
            "The Thames is shorter than the Dnipro.",
            "The Thames is longer than the Dnipro.",
            "The Dnipro is shorter than the Thames."
          ],
          correct: 0,
          pre: "e6s8l4",
          hint: "Which number is bigger?",
          fbOk: "Exactly.",
          fbBad: "Compare the numbers again.",
          fbText: "346 km is less than 2,200 km. <b>The Thames is shorter than the Dnipro.</b>"
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Fill in the gaps.",
          text: "George {*told|said} me about the British Museum. He {*said|told} that it was free.",
          pre: "e6s8l5",
          hint: "A person after the gap: told. No person: said.",
          fbOk: "Good eye!",
          fbBad: "Is there a person after the gap?",
          fbText: "George <b>told me</b> – a person after <i>told</i>. He <b>said that</b> – no person after <i>said</i>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 6",
          title: "Read and choose.",
          body: `<p><i>We went on the London Eye. I was a bit afraid, but the view was amazing! My favourite place was the Tower of London because it’s very old. – Liliia</i></p><p>What did Liliia like most?</p>`,
          opts: [
            "the London Eye",
            "the Tower of London",
            "the view from Big Ben"
          ],
          correct: 1,
          pre: "e6s8l6",
          hint: "Find “my favourite place” in the text.",
          fbOk: "Well done!",
          fbBad: "Read the sentence with “favourite place” again.",
          fbText: "Liliia writes: “My favourite place was <b>the Tower of London</b> because it’s very old.” Liliia was a bit afraid on the London Eye."
        }
      ],
      outro: {
        text: "Well done! Now you can tell people about London and say what other people said.",
        learned: [
          "Name famous places in London.",
          "Give advice with if: If it rains, go to a museum.",
          "Compare Kyiv and London.",
          "Use said and told."
        ]
      }
    }
  ]
});
