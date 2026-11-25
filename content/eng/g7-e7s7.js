/* Слід · Англійська мова, 7 клас — «Kyiv and London: history and culture» (e7s7)
   Програма: модельна програма «Іноземна мова. 5–9 класи» (Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021):
   7 кл., теми «Україна» — основні пам'ятки історії та культури Києва і «Країни виучуваної мови» — пам'ятки столиці
   (с. 32, розд. 5.2.1; одна секція на дві теми — с. 32, розд. 5.2, TQ-130); граматика B1 (с. 34–35, розд. 5.4.1):
   Past Simple passive — negative, questions, by + agent (розширення e6s7l3); one of the + superlative + plural noun;
   similar to, the same as. Повторення: Present Simple passive (e6s3l2), the main / the only / the oldest (e6s7l2).
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Розподіл граматики — reports/verify/plan-eng-g7-8-9.md, reports/verify/curate-eng-plan-g7-9.md; рядки plan — content/eng/plan.js (e7s7).
   Не повторює e6s7 (Софія — лише як «wasn’t destroyed», Золоті ворота, фунікулер, метро) і e6s8 (Tower of London, Big Ben, London Eye).
   Герої — канон серії (memory/short/inbox.md NOTE (герої)), на три роки старші, ніж у 4 кл.: Andrii — Kyiv, клас Ms Lysenko;
   George — London (e6s8: любить British Museum, у Києві ще не був). Нових героїв немає.
   Факти — по два відкриті джерела кожен (URL — tasks/…/write-eng-g7-e7s7.md, «Нотатки агента»); спірні роки — лише століття чи десятиліття.
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8). Без зображень.
   Статус: verified (verifier-e7s7). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e7s7 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e7s7",
  grade: 7,
  weeks: [31, 35],
  title: "Kyiv and London: history and culture",
  why: "To talk about museums, monuments and old buildings in Kyiv and London. And to say who built them and when.",
  requires: ["e6s7l2", "e6s7l3", "e6s8l2", "e6s3l2", "e5s10l5", "e5s7l6"],
  meta: { author: "writer-e7s7", created: "2026-11-25", factcheck: "verifier-e7s7 (reports/verify/write-eng-g7-e7s7.md)", teacher: null },
  badges: [
    { id: "e7s7boss", name: "Culture guide", icon: "trophy", desc: "Finish the final lesson “Kyiv and London: history and culture”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e7s7l1",
      title: "Museums and monuments in Kyiv",
      short: "Museums",
      icon: "city",
      status: "verified",
      why: "Kyiv has got lots of museums and monuments. Learn to name them and say what is kept there.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What is a monument?",
          body: `<p class="lead">Andrii’s class in Kyiv and George’s class in London start a project: “Kyiv and London: history and culture”.</p><p><i>Hi George! I want to show you museums and monuments in Kyiv. A monument helps people remember a famous person or a day in history. The Monument to Prince Volodymyr is on a hill over the Dnipro. It was built in 1853. – Andrii</i></p><p>What is a monument for?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Andrii: “A monument helps people remember a famous person or a day in history. The Monument to Prince Volodymyr is on a hill over the Dnipro.”</p><p>What is the Monument to Prince Volodymyr?</p>`,
          opts: [
            "a monument on a hill over the river",
            "a museum next to the river",
            "a bridge over the river"
          ],
          correct: 0,
          fbOk: "Yes!",
          fbBad: "Read Andrii’s message again.",
          fbText: "It’s a <b>monument</b>, and it’s <b>on a hill over the Dnipro</b>. A monument helps people remember a famous person."
        },
        {
          type: "info",
          title: "Museum words",
          body: `<ul><li>a <b><u>mon</u>ument</b> – it helps people remember a famous person or a day in history</li><li>a <b><u>stat</u>ue</b> – a person or an animal made of stone or metal</li><li>a <b><u>paint</u>ing</b> – a picture made with paint</li><li>an <b><u>ar</u>tist</b> – a person who paints or draws pictures</li><li>a <b>col<u>lec</u>tion</b> – lots of things of one kind: a collection of paintings</li></ul><p>The <u>underlined</u> part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["A monument helps people", "A statue is a person", "A painting is a picture", "A museum has got"],
          right: ["remember a famous person.", "made of stone or metal.", "made with paint.", "a collection of old things."],
          hint: "Which one is made of stone? Which one is made with paint?",
          fbOk: "Good eye!",
          fbBad: "Look at the museum words again.",
          fbText: "A monument helps people <b>remember</b>. A statue is <b>made of stone or metal</b>. A painting is <b>made with paint</b>. A museum has got a <b>collection</b>."
        },
        {
          type: "info",
          title: "It’s kept in a museum",
          body: `<p>The museum keeps Shevchenko’s paintings. →<br>Shevchenko’s paintings <b>are kept</b> in the museum.</p><ul><li>one → <b>is</b> + kept, visited, made</li><li>two or more → <b>are</b> + kept, visited, made</li></ul><p>Taras Shevchenko was a famous poet and artist. His paintings and drawings <b>are kept</b> in the National Museum of Taras Shevchenko in Kyiv.</p><p>This is the <b>Present Simple passive</b>, like “Borscht <b>is made</b> with beetroot”.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with the Present Simple passive.",
          text: "Shevchenko’s paintings {*are kept|is kept} in a museum in Kyiv. His drawings {*are kept|keep} there too. The museum {*is visited|visits} by lots of people.",
          hint: "One thing or two or more? is or are?",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: is or are + kept.",
          fbText: "Paintings, drawings – two or more: <b>are kept</b>. The museum – one: <b>is visited</b>. The museum doesn’t visit people, people visit it."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "The painting keeps in the museum.",
            "The painting are kept in the museum.",
            "The painting is kept in the museum."
          ],
          correct: 2,
          hint: "One painting: is or are?",
          fbOk: "Right.",
          fbBad: "One painting → is + kept.",
          fbText: "<b>The painting is kept in the museum.</b> One painting → <b>is</b>. The painting doesn’t keep anything, so not <i>keeps</i>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+mon|u|ment", "+stat|ue", "col|+lec|tion", "+ar|tist"],
          fbOk: "Yes!",
          fbBad: "Look at the museum words again.",
          fbText: "<u>mon</u>ument, <u>stat</u>ue, <u>ar</u>tist: the first part is strong. col<u>lec</u>tion: the second part."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Taras Shevchenko wrote poems. He also painted pictures.</p>`,
          before: "He was a poet and an",
          after: "",
          answer: "artist",
          hint: "A person who paints or draws pictures is an …",
          fbOk: "Well done!",
          fbBad: "Look at the museum words: a person who paints pictures.",
          fbText: "Shevchenko was a poet and an <b>artist</b>. An artist paints or draws pictures."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes more to George.</p>`,
          text: "Kyiv has got lots of museums and {*monuments|monument}. The Monument to Prince Volodymyr {*is|are} on a hill over the Dnipro. My favourite museum is the National Museum of Taras Shevchenko. His paintings {*are kept|are keep} there. Has your city got a famous {*statue|painting} made of metal?",
          hint: "Lots of… → plural. Made of metal: a statue or a painting?",
          fbOk: "Good eye!",
          fbBad: "Check: lots of monuments, are kept, made of metal.",
          fbText: "Lots of <b>monuments</b>. One monument <b>is</b> on a hill. His paintings <b>are kept</b> there. A <b>statue</b> is made of stone or metal."
        }
      ],
      outro: {
        text: "A monument helps people remember. Shevchenko’s paintings are kept in a museum in Kyiv.",
        learned: [
          "Use the words monument, statue, painting, artist and collection.",
          "Say what is kept in a museum: is kept, are kept.",
          "Name a museum and a monument in Kyiv."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e7s7l2",
      title: "It was built by…: who made it?",
      short: "Built by",
      icon: "user",
      status: "verified",
      why: "Visitors often ask who made a famous building or picture. Learn to answer with by.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Who made it?",
          body: `<p class="lead">George writes back.</p><p><b>George:</b> Thanks for the photos! Who made that old church on the hill? It’s beautiful!<br><b>Andrii:</b> That’s St Andrew’s Church. It was designed by Bartolomeo Rastrelli. He was a famous architect.</p><p>What does “designed by Rastrelli” tell us?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“The church was designed <b>by</b> Rastrelli.”</p><p>What does <b>by</b> tell us here?</p>`,
          opts: [
            "who did it",
            "when it happened",
            "where the church is"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>By</b> + a person tells us <b>who did it</b>: Rastrelli designed the church. The next screen shows the rule."
        },
        {
          type: "info",
          title: "It was designed by…",
          body: `<p>Rastrelli designed the church. →<br>The church <b>was designed by</b> Rastrelli.</p><p>Shevchenko wrote the Kobzar. →<br>The Kobzar <b>was written by</b> Shevchenko.</p><ul><li><b>was / were</b> + built, designed, written, painted + <b>by</b> + who did it</li><li>an <b><u>ar</u>chitect</b> – a person who designs buildings</li><li><b>de<u>sign</u></b> – draw a plan of a new building</li></ul>`,
          cta: "Next"
        },
        {
          type: "info",
          title: "Who made them?",
          body: `<ul><li>the Kobzar – a book of poems, written by Taras Shevchenko</li><li>Kateryna – a painting by Taras Shevchenko. It’s kept in the National Museum of Taras Shevchenko.</li><li>St Andrew’s Church – designed by Bartolomeo Rastrelli</li><li>Kyiv – founded by Kyi, his brothers Shchek and Khoryv and their sister Lybid. That’s a legend, a very old story.</li></ul><p><b>found</b> a city = start a new city: found → <b>founded</b>.<br>Don’t mix it up with <i>find → found</i>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with the Past Simple passive.",
          text: "The Kobzar {*was written|wrote} {*by|from} Taras Shevchenko. The painting Kateryna {*was painted|painted} by Shevchenko too. St Andrew’s Church {*was designed|designed} by Rastrelli.",
          hint: "was + written, painted, designed. Who did it? by…",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: was + designed + by.",
          fbText: "The Kobzar <b>was written by</b> Shevchenko. Kateryna <b>was painted</b> by Shevchenko. The church <b>was designed</b> by Rastrelli. The book and the church didn’t do it, so not <i>wrote</i> or <i>designed</i>."
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          left: ["The Kobzar was written by", "St Andrew’s Church was designed by", "Kyiv was founded by", "The painting Kateryna is kept in"],
          right: ["Taras Shevchenko.", "Bartolomeo Rastrelli.", "Kyi, his brothers and his sister.", "the National Museum of Taras Shevchenko."],
          hint: "Who was an architect? Who wrote poems?",
          fbOk: "Well done!",
          fbBad: "Look at the list “Who made them?” again.",
          fbText: "The Kobzar – <b>Taras Shevchenko</b>. The church – <b>Rastrelli</b>, an architect. Kyiv – <b>Kyi</b>, his brothers and his sister (a legend). Kateryna – <b>the museum</b>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "The Kobzar was wrote by Taras Shevchenko.",
            "The Kobzar was written by Taras Shevchenko.",
            "The Kobzar written by Taras Shevchenko."
          ],
          correct: 1,
          hint: "was + wrote or written?",
          fbOk: "Right.",
          fbBad: "Look at the rule: was + written.",
          fbText: "<b>The Kobzar was written by Taras Shevchenko.</b> After <b>was</b>, say <b>written</b>, not <i>wrote</i>. And don’t forget <b>was</b>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Andrii tells George about St Andrew’s Church.</p>`,
          tiles: ["St Andrew’s Church", "was", "designed", "by", "Rastrelli"],
          answer: ["St Andrew’s Church was designed by Rastrelli.", "Was St Andrew’s Church designed by Rastrelli?"],
          extra: ["were"],
          hint: "Start with St Andrew’s Church. Who did it goes after by.",
          fbOk: "Well done!",
          fbBad: "One church → was + designed + by.",
          fbText: "<b>St Andrew’s Church was designed by Rastrelli.</b> One church → <b>was</b>, not <i>were</i>. The person goes after <b>by</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Andrii’s message is wrong.</p>`,
          text: "The Kobzar [!was written] by Taras Shevchenko. St Andrew’s Church was [design] by Rastrelli.",
          hint: "Check the word after was in each sentence.",
          fbOk: "Good eye!",
          fbBad: "Look at the words after was.",
          fbText: "After <b>was</b>, say <b>designed</b>, not <i>design</i>: The church was <b>designed</b> by Rastrelli. <i>was written</i> is correct."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>A legend tells us who started Kyiv. Use the verb <b>found</b>.</p>`,
          before: "Kyiv was",
          after: "by Kyi, his brothers and his sister.",
          answer: "founded",
          hint: "Start a city: found → …",
          fbOk: "Yes!",
          fbBad: "Start a city: found. In the passive: was …",
          fbText: "Start a new city: <b>found</b>. Kyiv <b>was founded</b> by Kyi, Shchek, Khoryv and Lybid. That’s a legend."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes three facts for the project.</p>`,
          text: "Hi George! St Andrew’s Church {*was designed|designed} by Bartolomeo Rastrelli. The Kobzar was written {*by|of} Taras Shevchenko. His paintings {*are kept|are keeping} in a museum in Kyiv. And Kyiv {*was founded|was find} by Kyi, Shchek, Khoryv and Lybid – that’s a legend!",
          hint: "Who did it? by… Start a city: found → founded.",
          fbOk: "Well done!",
          fbBad: "Check: was designed by, are kept, was founded.",
          fbText: "The church <b>was designed</b> by Rastrelli. The Kobzar was written <b>by</b> Shevchenko. His paintings <b>are kept</b> in a museum. Kyiv <b>was founded</b> by Kyi and his family."
        }
      ],
      outro: {
        text: "Say who did it with by: St Andrew’s Church was designed by Rastrelli.",
        learned: [
          "Say who made a building, a book or a painting: It was designed by…",
          "Use the words architect, design and found.",
          "Tell the legend about Kyiv in one sentence."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e7s7l3",
      title: "Was it destroyed? When was it rebuilt?",
      short: "Destroyed",
      icon: "flame",
      status: "verified",
      why: "Some old buildings were destroyed and then built again. Learn to ask and answer about them.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Old or new?",
          body: `<p class="lead">George has got a question about St Michael’s Golden-Domed Monastery.</p><p><b>George:</b> Is St Michael’s Cathedral very old?<br><b>Andrii:</b> Yes and no! The first cathedral was built in the 12th century. But it was destroyed in the 1930s.<br><b>George:</b> Was it rebuilt?<br><b>Andrii:</b> Yes, it was. It was rebuilt in the 1990s.</p><p>Why does Andrii say “yes and no”?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Andrii: “The first cathedral was built in the 12th century. But it was destroyed in the 1930s. It was rebuilt in the 1990s.”</p><p>Why does Andrii say “yes and no”?</p>`,
          opts: [
            "The first cathedral was old, but it was destroyed and built again.",
            "The cathedral was built for the first time in the 1990s.",
            "The cathedral was never destroyed."
          ],
          correct: 0,
          fbOk: "Yes!",
          fbBad: "Read Andrii’s words again: when was it destroyed?",
          fbText: "The first cathedral is from the <b>12th century</b>. It <b>was destroyed</b> in the 1930s and <b>rebuilt</b> in the 1990s. So the building we see today is new."
        },
        {
          type: "info",
          title: "Destroy and rebuild",
          body: `<ul><li><b>de<u>stroy</u></b> – break something so badly that it is gone: destroy → <b>destroyed</b></li><li><b>re<u>build</u></b> – build again: rebuild → <b>rebuilt</b></li><li><b>re-</b> = again: rebuild, repaint</li><li>the <b>1930s</b> = 1930–1939; the <b>1990s</b> = 1990–1999</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“It was rebuilt in the 1990s.”</p><p>George wants to ask about the date. Which question is correct?</p>`,
          opts: [
            "When it was rebuilt?",
            "When was it rebuilt?",
            "When did it rebuilt?"
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "<b>When was it rebuilt?</b> In a question, <b>was</b> goes before <i>it</i>. The next screen shows the rule."
        },
        {
          type: "info",
          title: "Was it…? It wasn’t…",
          body: `<ul><li>It <b>was</b> destroyed. → <b>Was</b> it destroyed? – Yes, it <b>was</b>.</li><li>No → It <b>wasn’t</b> destroyed. (wasn’t = was not)</li><li>When <b>was</b> it rebuilt? – It was rebuilt in the 1990s.</li><li>two or more → <b>Were</b> they destroyed? – No, they <b>weren’t</b>.</li></ul><p>Don’t use <i>did</i> here: <b>was</b> or <b>were</b> + destroyed, built, rebuilt.</p>`,
          cta: "Next"
        },
        {
          type: "info",
          title: "Two old cathedrals in Kyiv",
          body: `<ul><li><b>St Michael’s Cathedral</b> – built in the 12th century, destroyed in the 1930s, rebuilt in the 1990s</li><li><b>St Sophia’s Cathedral</b> – built in the 11th century. It <b>wasn’t</b> destroyed in the 1930s: historians saved it.</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "St Michael’s Cathedral {*was|were} destroyed in the 1930s. It {*was rebuilt|rebuilt} in the 1990s. St Sophia’s Cathedral {*wasn’t|weren’t} destroyed.",
          hint: "One cathedral: was or were? Did the cathedral rebuild something?",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: one → was, wasn’t.",
          fbText: "One cathedral → <b>was</b> destroyed, <b>was rebuilt</b>, <b>wasn’t</b> destroyed. People rebuilt it, so we say <b>was rebuilt</b>."
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the questions and the answers.",
          left: ["When was St Michael’s Cathedral first built?", "Was St Michael’s Cathedral destroyed?", "When was St Michael’s Cathedral rebuilt?", "Was St Sophia’s Cathedral destroyed in the 1930s?"],
          right: ["In the 12th century.", "Yes, in the 1930s.", "In the 1990s.", "No, it wasn’t."],
          hint: "Look at the two cathedrals again. Which one wasn’t destroyed?",
          fbOk: "Well done!",
          fbBad: "Built – the 12th century. Destroyed – the 1930s. Rebuilt – the 1990s.",
          fbText: "St Michael’s: built in the <b>12th century</b>, destroyed in the <b>1930s</b>, rebuilt in the <b>1990s</b>. St Sophia’s <b>wasn’t</b> destroyed."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>George asks about St Michael’s Cathedral.</p>`,
          tiles: ["When", "was", "the cathedral", "rebuilt"],
          answer: "When was the cathedral rebuilt?",
          extra: ["did"],
          keepCase: true,
          hint: "Start with When. Then was, then the cathedral.",
          fbOk: "Yes!",
          fbBad: "Question: When + was + the cathedral + rebuilt?",
          fbText: "<b>When was the cathedral rebuilt?</b> <b>Was</b> goes before <i>the cathedral</i>. No <i>did</i> here."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in George’s message is wrong.</p>`,
          text: "St Sophia’s Cathedral is very old. It [weren’t] destroyed in the 1930s. St Michael’s Cathedral [!was] rebuilt in the 1990s.",
          hint: "One cathedral: was or were?",
          fbOk: "Good eye!",
          fbBad: "Is it one cathedral or two?",
          fbText: "One cathedral → <b>wasn’t</b>: It <b>wasn’t</b> destroyed in the 1930s. <i>was rebuilt</i> is correct."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Final",
          title: "Write the missing word.",
          body: `<p>George: “Was St Sophia’s Cathedral destroyed in the 1930s?”</p>`,
          before: "Andrii: “No, it",
          after: ". Historians saved it.”",
          answer: ["wasn’t", "was not"],
          contractions: true,
          hint: "A short answer with no: No, it …",
          fbOk: "Right.",
          fbBad: "Look at the rule: Yes, it was. / No, it …",
          fbText: "<b>No, it wasn’t.</b> (was not) St Sophia’s Cathedral wasn’t destroyed: historians saved it."
        }
      ],
      outro: {
        text: "Was it destroyed? – Yes, it was. / No, it wasn’t. When was it rebuilt? – In the 1990s.",
        learned: [
          "Ask about old buildings: Was it destroyed? When was it rebuilt?",
          "Say what didn’t happen: It wasn’t destroyed.",
          "Use the words destroy and rebuild."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e7s7l4",
      title: "One of the oldest: history and culture in London",
      short: "One of the oldest",
      icon: "globe",
      status: "verified",
      why: "London has got very old museums, theatres and trains. Learn to say: It’s one of the oldest…",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "The oldest or one of the oldest?",
          body: `<p class="lead">Now it’s George’s turn. He sends his London facts.</p><p><i>Hi Andrii! The London Underground is the oldest underground railway in the world. It was opened in 1863. The British Museum is one of the oldest museums in the world. It was opened in 1759. – George</i></p><p>What is different: “the oldest” or “one of the oldest”?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>George: “The London Underground is the oldest underground railway in the world. It was opened in 1863.”</p><p>Which is the oldest underground railway in the world?</p>`,
          opts: [
            "the Kyiv Metro",
            "the London Underground",
            "the British Museum"
          ],
          correct: 1,
          fbOk: "Yes!",
          fbBad: "Read George’s message again.",
          fbText: "<b>The London Underground</b> is the oldest underground railway in the world. It was opened in <b>1863</b>. The Kyiv Metro was opened in 1960."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“The British Museum is <b>one of the oldest</b> museums in the world.”</p><p>What does it mean?</p>`,
          opts: [
            "It’s in a group of very old museums.",
            "It’s older than all other museums.",
            "It’s a new museum."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>One of the oldest</b> = one in a group of very old museums. Maybe there are older ones. The next screen shows the rule."
        },
        {
          type: "info",
          title: "One of the oldest museums",
          body: `<ul><li><b>the oldest</b> railway → number one, there is no older one</li><li><b>one of the oldest</b> museum<b>s</b> → one in a group of very old museums</li></ul><p><b>one of the</b> + -est / most + <b>plural noun</b>:<br>one of the oldest museum<b>s</b>, one of the most famous building<b>s</b></p><p>Not: <s>one of the oldest museum</s>.</p>`,
          cta: "Next"
        },
        {
          type: "info",
          title: "History and culture in London",
          body: `<ul><li><b>the London Underground</b> – opened in 1863; the oldest underground railway in the world</li><li><b>the British Museum</b> – opened in 1759; one of the oldest museums in the world. It’s free!</li><li><b>Shakespeare’s Globe</b> – a theatre. The first Globe was built in 1599. It was destroyed by fire in 1613. The new Globe was opened in 1997, near the old place.</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "The British Museum is one of the oldest {*museums|museum} in the world. The London Underground is {*the oldest|one of the oldest} underground railway in the world. The Globe is one of the most famous {*theatres|theatre} in London.",
          hint: "After one of the… say a plural noun. Number one, no older one: the oldest.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: one of the oldest + museums.",
          fbText: "One of the oldest <b>museums</b>, one of the most famous <b>theatres</b>: a plural noun. The Underground is number one: <b>the oldest</b> underground railway."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>The Monument to Prince Volodymyr was built in 1853. The Monument to Bohdan Khmelnytskyi on Sofiiska Square was built in 1888. There aren’t many older monuments in Kyiv.</p><p>Andrii writes about the Monument to Bohdan Khmelnytskyi.</p>`,
          tiles: ["it’s", "one of", "the oldest", "monuments", "in Kyiv"],
          answer: ["It’s one of the oldest monuments in Kyiv.", "In Kyiv it’s one of the oldest monuments."],
          extra: ["monument"],
          hint: "one of the oldest + a plural noun.",
          fbOk: "Right.",
          fbBad: "After one of the oldest, say monuments.",
          fbText: "<b>It’s one of the oldest monuments in Kyiv.</b> After <b>one of the oldest</b> we need a plural noun: <b>monuments</b>."
        },
        {
          type: "info",
          title: "Similar to, the same as",
          body: `<ul><li><b><u>sim</u>ilar to</b> = almost the same: The new Globe looks <b>similar to</b> the first Globe.</li><li><b>the same as</b> = not different: The British Museum is free, <b>the same as</b> the Natural History Museum.</li></ul><p>Say <b>similar to</b> and <b>the same as</b>.<br>Not: <s>similar with</s>, <s>the same to</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with similar to and the same as.",
          text: "The new Globe looks {*similar to|similar with} the first Globe. Tickets to the British Museum are free, {*the same as|the same to} tickets to the Natural History Museum.",
          hint: "similar + to; the same + as.",
          fbOk: "Well done!",
          fbBad: "Look at the rule: similar to, the same as.",
          fbText: "Say <b>similar to</b> and <b>the same as</b>. Not <i>similar with</i>, not <i>the same to</i>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+ar|chi|tect", "de|+sign", "de|+stroy", "+sim|i|lar"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts in this section.",
          fbText: "<u>ar</u>chitect, <u>sim</u>ilar: the first part is strong. de<u>sign</u>, de<u>stroy</u>: the second part."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>George writes more facts for the project.</p>`,
          text: "Hi Andrii! The British Museum is one of the most famous {*museums|museum} in the world. It was opened in 1759. The first Globe {*was destroyed|destroyed} by fire in 1613. The new Globe looks {*similar to|similar} the old one. The London Underground is {*the oldest|one of the oldest} underground railway in the world.",
          hint: "One of the most famous + plural. The fire destroyed it: it was… Number one: the oldest.",
          fbOk: "Good eye!",
          fbBad: "Check: museums, was destroyed, similar to.",
          fbText: "One of the most famous <b>museums</b>. The Globe <b>was destroyed</b> by fire. It looks <b>similar to</b> the old one. The Underground is number one: <b>the oldest</b> underground railway."
        }
      ],
      outro: {
        text: "The London Underground is the oldest underground railway in the world. The British Museum is one of the oldest museums.",
        learned: [
          "Say one of the oldest museums, one of the most famous buildings.",
          "Compare with similar to and the same as.",
          "Name old places in London: the Underground, the British Museum, the Globe."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e7s7l5",
      title: "St Paul’s Cathedral: who was it designed by?",
      short: "St Paul’s",
      icon: "star",
      status: "verified",
      why: "St Paul’s is one of the most famous buildings in London. Learn to ask who designed it and what happened to it.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "A cathedral with a dome",
          body: `<p class="lead">George’s class makes a quiz about St Paul’s Cathedral for Andrii’s class.</p><p><i>St Paul’s Cathedral is on a hill in London. It has got a big dome – a round roof. The old cathedral was destroyed in the Great Fire of London in 1666. Then a new cathedral was built. Who was it designed by? – George</i></p><p>How do we ask about the architect?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>George: “The old cathedral was destroyed in the Great Fire of London in 1666. Then a new cathedral was built.”</p><p>What happened to the old St Paul’s Cathedral?</p>`,
          opts: [
            "It was rebuilt in the 1990s.",
            "It was destroyed in a fire in 1666.",
            "It wasn’t destroyed."
          ],
          correct: 1,
          fbOk: "Yes!",
          fbBad: "Read George’s quiz again: what happened in 1666?",
          fbText: "The old St Paul’s <b>was destroyed</b> in the Great Fire of London in <b>1666</b>. Then a new cathedral was built."
        },
        {
          type: "info",
          title: "St Paul’s Cathedral",
          body: `<ul><li><b>the old cathedral</b> – destroyed in the Great Fire of London in 1666</li><li><b>the new cathedral</b> – designed by Sir Christopher Wren and built after the fire</li><li><b>the Second World War</b> – it was hit by bombs, but it <b>wasn’t</b> destroyed</li><li>a <b>dome</b> – a big round roof</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“The new cathedral was designed by Wren.”</p><p>Andrii’s class asks a question about the architect. Which question is correct?</p>`,
          opts: [
            "Who designed by it?",
            "Who was designed it by?",
            "Who was it designed by?"
          ],
          correct: 2,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "<b>Who was it designed by?</b> The question starts with <b>Who</b>, and <b>by</b> goes at the end. The next screen shows the rule."
        },
        {
          type: "info",
          title: "Who was it designed by?",
          body: `<p>Wren designed it. →<br>It <b>was designed by</b> Wren.</p><ul><li>Question: <b>Who was</b> it designed <b>by</b>? – Sir Christopher Wren.</li><li><b>by</b> goes at the end of the question.</li><li>You can also ask: Who designed it?</li></ul><p>Remember: <b>Was</b> it destroyed? – No, it <b>wasn’t</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "{*Who|What} was the new St Paul’s designed by? It was designed {*by|from} Sir Christopher Wren. {*Was|Did} the cathedral destroyed in the Second World War? No, it {*wasn’t|didn’t}.",
          hint: "A person: Who? Passive questions: was, not did.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: Who was it designed by? Was it destroyed?",
          fbText: "<b>Who</b> was it designed <b>by</b>? – Wren. <b>Was</b> it destroyed? – No, it <b>wasn’t</b>. In these questions we say <b>was</b>, not <i>did</i>."
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the questions and the answers.",
          left: ["Who was the new St Paul’s designed by?", "When was the old cathedral destroyed?", "Was the new cathedral destroyed in the Second World War?", "What is a dome?"],
          right: ["Sir Christopher Wren.", "In 1666, in the Great Fire.", "No, it wasn’t.", "A big round roof."],
          hint: "Who? – a person. When? – a year.",
          fbOk: "Well done!",
          fbBad: "Look at the facts about St Paul’s again.",
          fbText: "Who – <b>Wren</b>. When – <b>1666</b>. Was it destroyed in the war? – <b>No, it wasn’t.</b> A dome – <b>a big round roof</b>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>A question for George’s quiz.</p>`,
          tiles: ["Who", "was", "St Paul’s", "designed", "by"],
          answer: "Who was St Paul’s designed by?",
          extra: ["did"],
          keepCase: true,
          hint: "Start with Who. by goes at the end.",
          fbOk: "Yes!",
          fbBad: "Who + was + St Paul’s + designed + by?",
          fbText: "<b>Who was St Paul’s designed by?</b> <b>By</b> goes at the end. No <i>did</i> here."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Sir Christopher Wren designed St Paul’s Cathedral and lots of other buildings.</p>`,
          before: "He was a famous",
          after: "",
          answer: "architect",
          hint: "A person who designs buildings is an …",
          fbOk: "Well done!",
          fbBad: "Remember Rastrelli: he was a famous …",
          fbText: "An <b>architect</b> designs buildings. Wren was an architect, the same as Rastrelli."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Final",
          title: "Choose all the correct answers.",
          body: `<p><i>Hi Andrii! Here are the answers to our quiz. The old St Paul’s was destroyed in the Great Fire of London in 1666. The new cathedral was designed by Sir Christopher Wren. In the Second World War, it was hit by bombs, but it wasn’t destroyed. Today it’s one of the most famous buildings in London. – George</i></p><p>Which sentences are true?</p>`,
          opts: [
            "The old cathedral was destroyed in a fire.",
            "The new cathedral was designed by George.",
            "The new cathedral wasn’t destroyed in the Second World War.",
            "The new cathedral was destroyed in 1666."
          ],
          correct: [0, 2],
          hint: "Find destroyed and designed by in the text.",
          fbOk: "Yes!",
          fbBad: "Which cathedral was destroyed in 1666: the old one or the new one?",
          fbText: "The <b>old</b> cathedral was destroyed in 1666. The new one <b>was designed by Wren</b>. It was hit by bombs, but it <b>wasn’t destroyed</b>."
        }
      ],
      outro: {
        text: "Who was it designed by? – Sir Christopher Wren. St Paul’s wasn’t destroyed in the Second World War.",
        learned: [
          "Ask who did it: Who was it designed by?",
          "Tell the story of St Paul’s Cathedral in three sentences.",
          "Use the words dome and architect."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e7s7l6",
      title: "A culture trip: Kyiv or London?",
      short: "Culture trip",
      icon: "map",
      status: "verified",
      why: "Read a plan for a culture trip in two cities. Then choose places for your own trip.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Which trip is for you?",
          body: `<p class="lead">The project is nearly finished. Andrii and George write a page together: “A culture trip in Kyiv and in London”.</p><p>A <b>culture trip</b> is a trip to see museums, theatres, monuments and old buildings.</p><p>Which trip is for you?</p>`,
          cta: "Let’s read"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: a culture trip, part 1 of 2",
          title: "Read and choose.",
          body: `<p><i><b>Kyiv, by Andrii.</b> If you like history, start at St Sophia’s Cathedral. It was built in the 11th century, and it wasn’t destroyed in the 1930s. Then walk to St Michael’s Golden-Domed Monastery. Its cathedral was destroyed in the 1930s, but it was rebuilt in the 1990s. Between them, on Sofiiska Square, there’s the Monument to Bohdan Khmelnytskyi. It’s one of the oldest monuments in Kyiv. If you like art, visit the National Museum of Taras Shevchenko.</i></p><p>In Andrii’s part, which cathedral was destroyed and then rebuilt?</p>`,
          opts: [
            "St Sophia’s Cathedral",
            "St Michael’s Cathedral",
            "both cathedrals"
          ],
          correct: 1,
          hint: "Find rebuilt in the text.",
          fbOk: "Right.",
          fbBad: "Find destroyed and rebuilt in Andrii’s part.",
          fbText: "Andrii writes: St Michael’s cathedral <b>was destroyed</b> in the 1930s, but it <b>was rebuilt</b> in the 1990s. St Sophia’s <b>wasn’t</b> destroyed."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: a culture trip, part 2 of 2",
          title: "Read and choose.",
          body: `<p><i><b>London, by George.</b> Start at St Paul’s Cathedral. It was designed by Sir Christopher Wren after the Great Fire of 1666. Then cross the river to Shakespeare’s Globe. It looks similar to the first Globe from 1599. After that, take the Underground – the oldest underground railway in the world – to the British Museum. It’s one of the oldest museums in the world, and it’s free, the same as lots of big museums in London.</i></p><p>Where can you see a theatre?</p>`,
          opts: [
            "at the British Museum",
            "at St Paul’s Cathedral",
            "at Shakespeare’s Globe"
          ],
          correct: 2,
          hint: "Which place in George’s part is a theatre?",
          fbOk: "Yes!",
          fbBad: "Remember: the Globe is a theatre.",
          fbText: "<b>Shakespeare’s Globe</b> is a theatre. It looks <b>similar to</b> the first Globe from 1599."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>You have read both parts of the page.</p><p>What is the page about?</p>`,
          opts: [
            "places for a culture trip in two cities",
            "how to cook a dinner",
            "sport in Kyiv and London"
          ],
          correct: 0,
          fbOk: "Exactly.",
          fbBad: "Think about the title of the page.",
          fbText: "The page is about a <b>culture trip</b>: museums, a theatre, monuments and old buildings in Kyiv and London."
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p><b>George:</b> I love art and old paintings. What can I visit in Kyiv?<br><b>Andrii:</b> …</p>`,
          opts: [
            "Visit the National Museum of Taras Shevchenko. His paintings are kept there.",
            "Take the Kyiv Metro. It was opened in 1960.",
            "Go to Sofiiska Square. There’s a monument there."
          ],
          correct: 0,
          hint: "George loves paintings. Where are paintings kept?",
          fbOk: "Good advice!",
          fbBad: "George asks about art and paintings.",
          fbText: "George loves <b>paintings</b>, so the best place is <b>the National Museum of Taras Shevchenko</b>: Shevchenko’s paintings are kept there."
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          left: ["St Michael’s Cathedral", "Shakespeare’s Globe", "The British Museum", "St Paul’s Cathedral"],
          right: ["was rebuilt in the 1990s.", "looks similar to the first Globe.", "is one of the oldest museums in the world.", "was designed by Sir Christopher Wren."],
          hint: "Which one is a theatre? Which one is in Kyiv?",
          fbOk: "Well done!",
          fbBad: "Remember the culture trip page: Kyiv first, then London.",
          fbText: "St Michael’s – <b>rebuilt in the 1990s</b>. The Globe – <b>similar to the first Globe</b>. The British Museum – <b>one of the oldest museums</b>. St Paul’s – <b>designed by Wren</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>George asks Andrii about a famous Ukrainian book.</p>`,
          before: "Who was the Kobzar written",
          after: "?",
          answer: "by",
          hint: "Who did it? The question ends with …",
          fbOk: "Yes!",
          fbBad: "Remember: Who was it designed by?",
          fbText: "<b>Who was the Kobzar written by?</b> – Taras Shevchenko. <b>By</b> goes at the end of the question."
        },
        {
          type: "info",
          title: "Plan your culture trip",
          body: `<ul><li><b>First,</b> I want to see… / Start at…</li><li><b>Then</b> walk to… / cross the river to…</li><li><b>After that,</b> take the Underground to…</li><li><b>If you like</b> art, visit…</li><li><b>I’d like to</b> go to London. (I’d like = I want, but more polite)</li></ul><p>Use facts from this section: It was designed by… It’s one of the oldest…</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Daryna, Andrii’s classmate, writes her plan for a culture trip.</p>`,
          text: "I’d like to go to London. First, I want to see St Paul’s Cathedral. It {*was designed|designed} by Sir Christopher Wren. {*Was|Did} it destroyed in the Second World War? No, it {*wasn’t|didn’t}. Then I want to visit the British Museum. It’s one of the oldest {*museums|museum} in the world.",
          hint: "Use everything from this section: was designed by, Was it…?, one of the oldest.",
          fbOk: "Well done!",
          fbBad: "Check: was designed, Was it destroyed? – No, it wasn’t.",
          fbText: "St Paul’s <b>was designed</b> by Wren. <b>Was</b> it destroyed? – No, it <b>wasn’t</b>. The British Museum is one of the oldest <b>museums</b>."
        }
      ],
      outro: {
        text: "Kyiv and London are full of history and culture. Now you can plan a culture trip in both cities.",
        learned: [
          "Read a page about places to visit and find facts in it.",
          "Plan a culture trip in Kyiv or London.",
          "Use the passive and one of the oldest in your own text."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e7s7l7",
      title: "Two capitals: a culture quiz",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e7s7boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you win the culture quiz?",
          body: `<p class="lead">Andrii’s class and George’s class finish their project with a big quiz about Kyiv and London.</p><p>Answer the questions. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          text: "A {*monument|painting} helps people remember a famous person. Shevchenko’s paintings {*are kept|is kept} in a museum in Kyiv.",
          pre: "e7s7l1",
          hint: "What helps people remember? Paintings – two or more: is or are?",
          fbOk: "Yes!",
          fbBad: "Check: a monument, are kept.",
          fbText: "A <b>monument</b> helps people remember. Paintings – two or more: <b>are kept</b>."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Choose the correct answer.",
          body: `<p>Quiz question: “Who designed St Andrew’s Church?”</p><p>Which answer is correct?</p>`,
          opts: [
            "It designed by Rastrelli.",
            "It was designed from Rastrelli.",
            "It was designed by Rastrelli."
          ],
          correct: 2,
          pre: "e7s7l2",
          hint: "was + designed + by.",
          fbOk: "Right.",
          fbBad: "Who did it → by. Don’t forget was.",
          fbText: "<b>It was designed by Rastrelli.</b> We need <b>was</b>, and the person goes after <b>by</b>."
        },
        {
          type: "word",
          sk: "vocab",
          eyebrow: "Task 3",
          title: "Write the missing word.",
          body: `<p>Quiz question: “Who started Kyiv? Tell the legend.” Use the verb <b>found</b>.</p>`,
          before: "Kyiv was",
          after: "by Kyi, Shchek, Khoryv and Lybid.",
          answer: "founded",
          pre: "e7s7l2",
          hint: "Start a city: found → …",
          fbOk: "Well done!",
          fbBad: "Not find – found. Start a city: found – …",
          fbText: "Kyiv <b>was founded</b> by Kyi, his brothers and his sister. That’s a legend."
        },
        {
          type: "match",
          sk: "cult",
          eyebrow: "Task 4",
          title: "Match the questions and the answers.",
          left: ["When was St Michael’s Cathedral destroyed?", "When was it rebuilt?", "Was St Sophia’s Cathedral destroyed?", "Who was St Paul’s designed by?"],
          right: ["In the 1930s.", "In the 1990s.", "No, it wasn’t.", "Sir Christopher Wren."],
          pre: "e7s7l3",
          hint: "Destroyed first, rebuilt later. Who? – a person.",
          fbOk: "Good eye!",
          fbBad: "St Michael’s: destroyed in the 1930s, rebuilt in the 1990s.",
          fbText: "St Michael’s: destroyed in the <b>1930s</b>, rebuilt in the <b>1990s</b>. St Sophia’s <b>wasn’t</b> destroyed. St Paul’s – <b>Wren</b>."
        },
        {
          type: "build",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Put the words in order.",
          body: `<p>Andrii asks George about the Globe.</p>`,
          tiles: ["When", "was", "the first Globe", "destroyed"],
          answer: "When was the first Globe destroyed?",
          extra: ["did"],
          keepCase: true,
          pre: "e7s7l3",
          hint: "Start with When. Then was.",
          fbOk: "Yes!",
          fbBad: "When + was + the first Globe + destroyed?",
          fbText: "<b>When was the first Globe destroyed?</b> – In 1613, by fire. No <i>did</i> in this question."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Fill in the gaps.",
          text: "The British Museum is one of the oldest {*museums|museum} in the world. The London Underground is {*the oldest|one of the oldest} underground railway in the world. The new Globe looks {*similar to|similar with} the first Globe.",
          pre: "e7s7l4",
          hint: "one of the + plural. Number one: the oldest. similar + to.",
          fbOk: "Exactly.",
          fbBad: "Check: one of the oldest museums, similar to.",
          fbText: "One of the oldest <b>museums</b>. The Underground is <b>the oldest</b>: number one. The new Globe looks <b>similar to</b> the first one."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 7",
          title: "Choose the correct answer.",
          body: `<p>A question about St Paul’s Cathedral. Which question is correct?</p>`,
          opts: [
            "Did it destroyed in the Second World War?",
            "Was it destroyed in the Second World War?",
            "Was it destroy in the Second World War?"
          ],
          correct: 1,
          pre: "e7s7l5",
          hint: "was + destroyed. No did.",
          fbOk: "Right.",
          fbBad: "Passive question: Was it + destroyed?",
          fbText: "<b>Was it destroyed in the Second World War?</b> – No, it wasn’t. Passive questions start with <b>was</b>, and then <b>destroyed</b>."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Task 8",
          title: "Choose all the correct answers.",
          body: `<p><i>Hi George! Thank you for the project! My favourite place in London is St Paul’s. It was designed by Wren. In Kyiv, I love the National Museum of Taras Shevchenko. His paintings are kept there. Come to Kyiv one day! – Andrii</i></p><p>Which sentences are true?</p>`,
          opts: [
            "Andrii’s favourite place in London is St Paul’s Cathedral.",
            "Shevchenko’s paintings are kept in a museum in London.",
            "St Paul’s was designed by Wren.",
            "George has visited Kyiv."
          ],
          correct: [0, 2],
          pre: "e7s7l6",
          hint: "Read carefully: where are Shevchenko’s paintings kept?",
          fbOk: "Yes!",
          fbBad: "Where is the National Museum of Taras Shevchenko: in Kyiv or in London?",
          fbText: "Andrii’s favourite place in London is <b>St Paul’s</b>, and it <b>was designed by Wren</b>. Shevchenko’s paintings are kept in <b>Kyiv</b>. George hasn’t visited Kyiv yet: Andrii invites him."
        }
      ],
      outro: {
        text: "Well done! Now you can tell people about museums, monuments and old buildings in Kyiv and London, and say who made them and when.",
        learned: [
          "Say who made something: It was designed by…",
          "Ask and answer: Was it destroyed? When was it rebuilt?",
          "Use one of the oldest + a plural noun.",
          "Compare places with similar to and the same as."
        ]
      }
    }
  ]
});
