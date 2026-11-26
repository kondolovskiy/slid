/* Слід · Англійська мова, 9 клас — «Cities of Ukraine and English-speaking countries» (e9s8)
   Програма: МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021), 9 кл.: теми «Україна» і «Країни виучуваної мови» —
   великі міста; визначні місця й історичні пам'ятки (PDF с. 33, розд. 5.2.3); функції — порівнювати, путівники й описи місць,
   пояснювати, як дістатися (с. 28–31); граматика B1 (с. 34–35): Third Conditional — if + Past Perfect, would have
   (B1: ‘would have’ + ‘if’ + past perfect, imagined past, regret) — нове; повторення — Second Conditional (e8s8l5–l6),
   First Conditional (e7s6l3), Past Perfect (e8s5l4), one of the + superlative (e7s7l4), Past Simple passive (e7s7l2).
   should have (regret) — на вибір автора, не взято (обсяг уроку 5). where (e9s5l3) — у визначенні port і в текстах; requires e9s5l3, e5s10l1 (on a river / a sea) — verifier-e9s8.
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Розподіл — content/eng/plan.js, reports/verify/plan-eng-g7-8-9.md.
   Не повторює e6s7, e6s8, e7s7 (Київ, Лондон): тут Lviv, Odesa, Kharkiv, Chernihiv; Edinburgh, Dublin, Sydney, Toronto, New York.
   Руйнування внаслідок війни не згадуються; Odesa — лише факт внесення до списку ЮНЕСКО у 2023 р.
   Герої — серія 4–8 кл., на п'ять років старші, ніж у 4 кл. (memory/short/inbox.md NOTE (герої)): Emma (England), Isla (Edinburgh),
   Liam (Dublin), Chloe (Canberra), Maksym (Ottawa), Taras (Lviv), Mariia (Kharkiv), Oksana (Zelena Dolyna; щолипня в Odesa в дядька Ivan),
   Andrii (Kyiv; бабуся й дідусь — Chernihiv), Halyna. Нове: Emma з мамою на Великдень у гостях в Isla (Edinburgh, l5);
   Taras пише путівник Lviv для Isla (l6); кузина Тараса Marta торік не купила квитків в оперу (l6).
   Факти — по два джерела (en.wikipedia + uk.wikipedia; URL — tasks/…/write-eng-g9-e9s8.md, «Нотатки агента»).
   Форми, наголос і рівні слів — CD, CD Grammar (Conditionals: if; Punctuation). Звуку немає (D-055 п. 4); діалоги — репліками в body (D-056).
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e9s8, 2026-11-26; reports/verify/write-eng-g9-e9s8.md). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e9s8 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e9s8",
  grade: 9,
  weeks: [29, 32],
  title: "Cities of Ukraine and English-speaking countries",
  why: "To talk about big cities, famous places and historic monuments. And to imagine how things could have been different.",
  requires: ["e5s7l6", "e6s7l2", "e6s7l3", "e6s8l2", "e6s8l4", "e7s6l3", "e7s7l2", "e7s7l4", "e8s5l4", "e8s8l5", "e8s8l6", "e5s10l1", "e9s5l3"],
  meta: { author: "writer-e9s8", created: "2026-11-26", factcheck: null, teacher: null },
  badges: [
    { id: "e9s8boss", name: "City explorer", icon: "trophy", desc: "Finish the final lesson “Cities of Ukraine and the world”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e9s8l1",
      title: "Big cities of Ukraine: Lviv, Odesa, Kharkiv",
      short: "Big cities",
      icon: "city",
      status: "verified",
      why: "Every big city has its own story. Learn to describe big cities of Ukraine.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Which city is number two?",
          body: `<p class="lead">Emma’s class in England is making a project about big cities of Ukraine. Emma asks her friends for help.</p><p><b>Mariia:</b> I live in Kharkiv. It’s the second-largest city in Ukraine. Only Kyiv is bigger.<br><b>Taras:</b> Lviv is in the west. Its historic centre is on the UNESCO World Heritage List.<br><b>Oksana:</b> I visit my uncle in Odesa every July. It’s a big port on the Black Sea.</p><p>The second-largest, a port, a historic centre: what do these words mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><b>Mariia:</b> Kharkiv is the second-largest city in Ukraine. Only Kyiv is bigger.</p><p>Which sentence is true?</p>`,
          opts: [
            "Kyiv is bigger than Kharkiv.",
            "Kharkiv is the largest city in Ukraine.",
            "Kharkiv is smaller than all the other cities."
          ],
          correct: 0,
          hint: "Read Mariia’s second sentence again.",
          fbOk: "Yes!",
          fbBad: "Mariia says: only Kyiv is bigger.",
          fbText: "<b>The second-largest</b> = number two. Only one city, Kyiv, is bigger than Kharkiv."
        },
        {
          type: "info",
          title: "City words",
          body: `<ul><li>a <b>port</b> → a town or city where ships come and go</li><li><b>popu<u>la</u>tion</b> → all the people who live in a place</li><li>the <b>his<u>tor</u>ic centre</b> → the old part of a city</li><li>the <b>UNESCO World Heritage List</b> → a list of very important places in the world</li><li><b>the second-largest</b> city → number two: only one city is bigger</li></ul>`,
          cta: "Next"
        },
        {
          type: "info",
          title: "Three big cities",
          body: `<ul><li><b>Kharkiv</b> → in the north-east; the second-largest city in Ukraine, after Kyiv.</li><li><b>Lviv</b> → in the west. Its historic centre has been on the UNESCO World Heritage List since 1998.</li><li><b>Odesa</b> → in the south-west; a big port on the Black Sea. Its historic centre was added to the UNESCO list in 2023.</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          left: ["Kharkiv is", "Lviv’s historic centre has been on the UNESCO list", "Odesa’s historic centre was added to the UNESCO list", "The population of a city is"],
          right: ["the second-largest city in Ukraine.", "since 1998.", "in 2023.", "all the people who live there."],
          hint: "Which city is number two? Which year is for Lviv?",
          fbOk: "Well done!",
          fbBad: "Look at the screen “Three big cities” again.",
          fbText: "<b>Kharkiv</b> is the second-largest city. Lviv – on the list <b>since 1998</b>. Odesa – added <b>in 2023</b>. <b>Population</b> – all the people in a place."
        },
        {
          type: "info",
          title: "The largest, the second-largest, one of the…",
          body: `<ul><li><b>the largest</b> city → number one: Kyiv is <b>the largest</b> city in Ukraine.</li><li><b>the second-largest</b> city → number two: Kharkiv.</li><li><b>one of the</b> + -est / most + <b>plural noun</b>:<br>Taras thinks Lviv is <b>one of the most beautiful cities</b> in Ukraine.</li></ul><p>Not: <s>one of the most beautiful city</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Kyiv is {*the largest|one of the largest} city in Ukraine. Kharkiv is {*the second-largest|the second-large} city. Taras thinks Lviv is one of the most beautiful {*cities|city} in Ukraine.",
          hint: "Look at the noun after the gap: one city or many cities?",
          fbOk: "Exactly.",
          fbBad: "After one of the… we need a plural noun. Number one → the largest.",
          fbText: "Kyiv is <b>the largest</b> city (one city, number one). Kharkiv is <b>the second-largest</b>. One of the most beautiful <b>cities</b> – a plural noun."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "Odesa is a port in the Black Sea.",
            "Odesa is a big port on the Black Sea.",
            "Odesa is one of the biggest port on the Black Sea."
          ],
          correct: 1,
          hint: "A city next to a sea: in or on? And after one of the…?",
          fbOk: "Right.",
          fbBad: "A city is on a sea. And one of the… needs a plural noun.",
          fbText: "<b>Odesa is a big port on the Black Sea.</b> A city next to a sea: <b>on</b>. Not <s>one of the biggest port</s>: we need <i>ports</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>Mariia writes for Emma’s project.</p>`,
          text: "My city, Kharkiv, is [!the second-largest] city in Ukraine. I think it’s one of the friendliest [city] in the country.",
          hint: "Look at the noun after one of the friendliest.",
          fbOk: "Good eye!",
          fbBad: "What comes after one of the…: one city or many cities?",
          fbText: "One of the friendliest <b>cities</b>: a plural noun. <i>The second-largest city</i> is correct."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Emma writes about Kharkiv. She means all the people who live there.</p>`,
          before: "The",
          after: "of Kharkiv is very big. Only Kyiv has more people.",
          answer: "population",
          hint: "Look at the screen “City words”.",
          fbOk: "Well done!",
          fbBad: "All the people who live in a place: popu…",
          fbText: "All the people who live in a place → the <b>population</b>. popu<u>la</u>tion."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes the first page of the class project.</p>`,
          text: "Kharkiv is in the north-east. It’s the {*second-largest|second-large} city in Ukraine. Lviv is in the west. Its historic centre has been on the UNESCO World Heritage List {*since|for} 1998. Odesa is a big {*port|square} on the Black Sea. Its historic centre {*was added|added} to the UNESCO list in 2023.",
          hint: "Look at the screen “Three big cities”. 1998 is a point in time.",
          fbOk: "Well done!",
          fbBad: "since + a point in time; a city where ships come and go; the passive: was + third form.",
          fbText: "The <b>second-largest</b> city. On the list <b>since</b> 1998. A big <b>port</b>. The historic centre <b>was added</b> to the list in 2023."
        }
      ],
      outro: {
        text: "Kharkiv, Lviv, Odesa: now you can describe big cities of Ukraine.",
        learned: [
          "Describe a city: a port, the population, the historic centre.",
          "Use the largest, the second-largest and one of the… + plural noun.",
          "Say where three big cities of Ukraine are."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e9s8l2",
      title: "Old towns and historic monuments",
      short: "Old towns",
      icon: "scroll",
      status: "verified",
      why: "Old buildings tell the history of a city. Learn to say what they are and when they were built.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "How old is it?",
          body: `<p class="lead">The friends share photos in their group chat.</p><p><b>Andrii:</b> I’m at my grandparents’ in Chernihiv. This is the Transfiguration Cathedral. People started building it in the 1030s!<br><b>Taras:</b> And this is the Town Hall in Rynok Square, in Lviv. I climbed the tower on Saturday.<br><b>Oksana:</b> Cool! In Odesa, I always walk up the Potemkin Stairs.</p><p>A cathedral, a square, stairs: let’s talk about old places.</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><b>Andrii:</b> People started building it in the 1030s!</p><p>How old is the cathedral in Chernihiv?</p>`,
          opts: [
            "almost a thousand years old",
            "about a hundred years old",
            "about ten years old"
          ],
          correct: 0,
          hint: "Count from the 1030s to today.",
          fbOk: "Yes!",
          fbBad: "The 1030s were almost a thousand years ago.",
          fbText: "From the 1030s to today is almost <b>a thousand years</b>. It’s one of the oldest churches in Ukraine."
        },
        {
          type: "info",
          title: "In the old town",
          body: `<ul><li>the <b>old town</b> → the oldest part of a city</li><li>a <b>square</b> → an open place in a town with buildings all around it</li><li>the <b>town hall</b> → the main building of a town’s government</li><li>a <b>ca<u>the</u>dral</b> → a big, important church</li><li><b>stairs</b> → a lot of steps that go up or down</li><li>an <b><u>ar</u>chitect</b> → a person who designs buildings</li><li>a <b><u>mon</u>ument</b> → an old building or a statue that is important for history</li><li><b>his<u>tor</u>ic</b> → old and important: a historic building</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the descriptions.",
          left: ["a square", "a cathedral", "stairs", "an architect", "the old town"],
          right: ["an open place with buildings all around it", "a big, important church", "a lot of steps that go up or down", "a person who designs buildings", "the oldest part of a city"],
          hint: "Which one is a person? Which one is a church?",
          fbOk: "Well done!",
          fbBad: "Look at the screen “In the old town” again.",
          fbText: "<b>a square</b> – an open place; <b>a cathedral</b> – a big church; <b>stairs</b> – steps; <b>an architect</b> – a person; <b>the old town</b> – the oldest part."
        },
        {
          type: "info",
          title: "Famous places: Lviv and Chernihiv",
          body: `<ul><li><b>Lviv:</b> Rynok Square is in the middle of the Old Town. The Town Hall is in the centre of the square. Visitors can climb its tower and see the city.</li><li><b>Chernihiv:</b> the Transfiguration Cathedral was started in the 1030s. It’s one of the oldest churches in Ukraine.</li></ul>`,
          cta: "Next"
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["ca|+the|dral", "+ar|chi|tect", "+mon|u|ment", "his|+tor|ic"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts on the screen “In the old town”.",
          fbText: "ca<u>the</u>dral, his<u>tor</u>ic: the second part is strong. <u>ar</u>chitect, <u>mon</u>ument: the first part."
        },
        {
          type: "info",
          title: "Famous places: Odesa and Kharkiv",
          body: `<ul><li><b>Odesa:</b> the Potemkin Stairs were built in 1837–1841. They have 192 steps. The Opera House was built in 1887. It was designed by two architects, Fellner and Helmer.</li><li><b>Kharkiv:</b> Derzhprom, a very big office building, was built in 1925–1928.</li></ul><p>Remember the passive: <b>was / were</b> + third form (+ <b>by</b> …).</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with the Past Simple passive.",
          text: "The Potemkin Stairs {*were built|was built} in 1837–1841. The Opera House in Odesa {*was designed|designed} by Fellner and Helmer. Derzhprom {*was built|built} in 1925–1928.",
          hint: "One building or many steps? was / were + third form.",
          fbOk: "Exactly.",
          fbBad: "The Stairs – plural: were. A building can’t build itself: was built.",
          fbText: "The Stairs <b>were built</b> (plural). The Opera House <b>was designed</b> by… Derzhprom <b>was built</b>. The passive: was / were + third form."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Oksana writes about the Opera House in Odesa. Write a sentence, not a question.</p>`,
          tiles: ["The Opera House", "was", "designed", "by", "Fellner and Helmer"],
          answer: "The Opera House was designed by Fellner and Helmer.",
          extra: ["designing"],
          keepCase: true,
          hint: "Start with The Opera House. Then was + third form + by…",
          fbOk: "Well done!",
          fbBad: "The passive: was + designed, then by + the architects.",
          fbText: "<b>The Opera House was designed by Fellner and Helmer.</b> was + <b>designed</b>, not <i>designing</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>Taras writes to Emma.</p>`,
          text: "The Town Hall [!is in the centre] of Rynok Square. In Odesa, the Potemkin Stairs [was built] in the 19th century.",
          hint: "Stairs: one thing or many steps?",
          fbOk: "Good eye!",
          fbBad: "The Stairs are plural. was or were?",
          fbText: "The Potemkin Stairs <b>were built</b>: <i>stairs</i> is plural. <i>The Town Hall is in the centre</i> is correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia writes about her favourite building in Kharkiv.</p>`,
          text: "My favourite building is Derzhprom. It {*was built|built} in 1925–1928. For me, it’s one of the most interesting {*buildings|building} in Kharkiv. My friend Taras lives in Lviv. He loves Rynok Square, in the middle of the Old {*Town|Square}. The Town Hall is in the centre of the square, and you can climb its {*tower|cathedral}.",
          hint: "Look at both screens “Famous places”.",
          fbOk: "Well done!",
          fbBad: "was + third form; one of the… + plural noun; the Old Town; climb the tower.",
          fbText: "Derzhprom <b>was built</b> in 1925–1928. One of the most interesting <b>buildings</b>. Rynok Square is in the middle of the Old <b>Town</b>. You can climb the Town Hall <b>tower</b>."
        }
      ],
      outro: {
        text: "A square, a cathedral, stairs, an architect: now you can talk about old towns and monuments in Ukraine.",
        learned: [
          "Name places in an old town: a square, the town hall, a cathedral.",
          "Say when a building was built and who designed it.",
          "Describe famous places in Lviv, Odesa, Kharkiv and Chernihiv."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e9s8l3",
      title: "Big cities in English-speaking countries",
      short: "Cities of the world",
      icon: "globe",
      status: "verified",
      why: "Edinburgh, Dublin, Sydney, Toronto: learn about famous places in English-speaking countries.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Is the largest city always the capital?",
          body: `<p class="lead">Oksana’s English club has a video call. Everyone talks about a famous city.</p><p><b>Isla:</b> I live in Edinburgh, the capital of Scotland. Edinburgh Castle stands on Castle Rock, high above the city.<br><b>Liam:</b> Dublin is on the River Liffey. Trinity College, a university, was founded in 1592.<br><b>Maksym:</b> I live in Ottawa, the capital of Canada. But the largest city in Canada is Toronto.</p><p>Is the largest city in a country always the capital?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><b>Maksym:</b> I live in Ottawa, the capital of Canada. But the largest city in Canada is Toronto.</p><p>Which sentence is true?</p>`,
          opts: [
            "Toronto is the capital of Canada.",
            "The largest city in Canada isn’t the capital.",
            "Ottawa is the largest city in Canada."
          ],
          correct: 1,
          hint: "Which city is the capital? Which one is the largest?",
          fbOk: "Right.",
          fbBad: "Read Maksym’s words again: the capital is…, the largest city is…",
          fbText: "The capital is <b>Ottawa</b>, but the largest city is <b>Toronto</b>. So the largest city isn’t always the capital."
        },
        {
          type: "info",
          title: "Edinburgh and Dublin",
          body: `<ul><li><b>Edinburgh</b> → the capital of Scotland. Its Old Town and New Town have been on the UNESCO World Heritage List since 1995. Edinburgh Castle stands on Castle Rock.</li><li><b>Dublin</b> → the capital of Ireland, on the River Liffey. Trinity College was founded in 1592.</li></ul><p><b>found</b> a college = start it: found – founded – <b>founded</b>.</p>`,
          cta: "Next"
        },
        {
          type: "multi",
          sk: "cult",
          title: "Choose all the correct answers.",
          body: `<p>Which sentences are true?</p>`,
          opts: [
            "Edinburgh Castle stands on Castle Rock.",
            "Dublin is on the River Liffey.",
            "Edinburgh’s Old Town has been on the UNESCO list since 1592.",
            "Trinity College was founded in 1592."
          ],
          correct: [0, 1, 3],
          hint: "Check the years on the screen “Edinburgh and Dublin”.",
          fbOk: "Well done!",
          fbBad: "Which year is for Edinburgh, and which one is for Trinity College?",
          fbText: "True: the castle is on <b>Castle Rock</b>, Dublin is on <b>the Liffey</b>, Trinity College – <b>1592</b>. Edinburgh has been on the UNESCO list since <b>1995</b>."
        },
        {
          type: "info",
          title: "Sydney, Toronto, New York",
          body: `<ul><li><b>Sydney</b> isn’t the capital of Australia: the capital is Canberra. The Sydney Opera House was opened in 1973. It was designed by Jørn Utzon, a Danish architect. It has been on the UNESCO list since 2007.</li><li><b>Toronto</b> → the largest city in Canada. The CN Tower was opened in 1976.</li><li><b>New York</b> → the Statue of Liberty was a gift from the people of France. It has stood there since 1886.</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          left: ["Edinburgh Castle", "Trinity College", "The Sydney Opera House", "The CN Tower", "The Statue of Liberty"],
          right: ["stands on Castle Rock.", "was founded in 1592.", "was designed by Jørn Utzon.", "was opened in 1976.", "was a gift from the people of France."],
          hint: "Which building was designed by a Danish architect? Which one was a gift?",
          fbOk: "Well done!",
          fbBad: "Look at both screens about the cities again.",
          fbText: "Edinburgh Castle – <b>Castle Rock</b>. Trinity College – <b>1592</b>. The Opera House – <b>Jørn Utzon</b>. The CN Tower – <b>1976</b>. The Statue of Liberty – a gift from <b>France</b>."
        },
        {
          type: "sort",
          sk: "cult",
          title: "Sort the words.",
          body: `<p>Is the city the capital of a country?</p>`,
          bins: ["The capital of a country", "Not the capital of a country"],
          items: [
            ["Edinburgh", 0],
            ["Dublin", 0],
            ["Ottawa", 0],
            ["Kyiv", 0],
            ["Sydney", 1],
            ["Toronto", 1],
            ["Kharkiv", 1]
          ],
          hint: "Look at the intro and the screen “Sydney, Toronto, New York”.",
          fbOk: "Right.",
          fbBad: "Sydney and Toronto are very big, but are they capitals?",
          fbText: "Capitals: <b>Edinburgh</b> (Scotland), <b>Dublin</b> (Ireland), <b>Ottawa</b> (Canada), <b>Kyiv</b> (Ukraine). Sydney, Toronto and Kharkiv are big cities, but not capitals of countries."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Write the third form of <i>found</i>.</p>`,
          before: "Trinity College was",
          after: "in 1592.",
          answer: "founded",
          hint: "found – founded – …",
          fbOk: "Exactly.",
          fbBad: "found is a regular verb: add -ed.",
          fbText: "found – founded – <b>founded</b>: Trinity College <b>was founded</b> in 1592. Be careful: <i>found</i> is also the past of <i>find</i>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Chloe writes to the club after the call.</p>`,
          text: "I live in Canberra, the {*capital|largest city} of Australia. But my favourite building is in Sydney: the Opera House. It {*was opened|opened by} in 1973. It {*was designed|is designed} by a Danish architect, Jørn Utzon. It has been on the UNESCO list {*since|for} 2007.",
          hint: "Is Canberra the capital? Each building fact is in the past passive.",
          fbOk: "Well done!",
          fbBad: "Canberra is the capital. The passive in the past: was + third form. since + a year.",
          fbText: "Canberra is the <b>capital</b>. The Opera House <b>was opened</b> in 1973 and <b>was designed</b> by Jørn Utzon. On the list <b>since</b> 2007."
        }
      ],
      outro: {
        text: "Edinburgh, Dublin, Sydney, Toronto, New York: now you can talk about famous places in English-speaking countries.",
        learned: [
          "Name famous places in English-speaking cities.",
          "Say that the largest city isn’t always the capital.",
          "Say when a place was founded, opened or designed."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e9s8l4",
      title: "Which city would you like to live in?",
      short: "Where would you live?",
      icon: "home",
      status: "verified",
      why: "Big or small, by the sea or in the mountains? Talk about real plans and imagined lives.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Real plan or imagined life?",
          body: `<p class="lead">The topic for Oksana’s English club this week: “Which city would you like to live in?”</p><p><b>Oksana:</b> I live in a village. If I lived in a city, I’d choose Odesa. I’d swim in the sea every day!<br><b>Isla:</b> If I go to Ukraine next summer, I’ll visit Lviv. I love old towns.<br><b>Liam:</b> I wouldn’t like to live in a very big city. It’s too noisy for me.</p><p>Who is talking about a real plan, and who is imagining?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Which sentence is about a real, possible plan?</p>`,
          opts: [
            "If I lived in a city, I’d choose Odesa.",
            "If I go to Ukraine next summer, I’ll visit Lviv.",
            "I’d swim in the sea every day."
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "Isla really can go to Ukraine: <b>if + Present Simple → will</b>. Oksana imagines: <b>if + Past Simple → would</b>."
        },
        {
          type: "info",
          title: "Real or imagined?",
          body: `<ul><li>a real, possible situation → <b>if</b> + Present Simple, <b>will</b> + verb:<br>If I <b>go</b> to Ukraine next summer, I<b>’ll visit</b> Lviv.</li><li>an imagined situation, not real now → <b>if</b> + Past Simple, <b>would</b> + verb:<br>If I <b>lived</b> in a city, I<b>’d choose</b> Odesa.</li></ul><p>No <i>will</i> or <i>would</i> after <i>if</i>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Oksana lives in a village. If she {*lived|lives} in Odesa, she would swim every day. Isla has got a plan: if she goes to Ukraine next summer, she {*will visit|would visit} Lviv. Liam lives in Dublin. If he {*were|is} in Kyiv now, he’d go to the Golden Gate.",
          hint: "Is it real or imagined? Look at the other part of each sentence.",
          fbOk: "Exactly.",
          fbBad: "Imagined → if + Past Simple. Real plan → if + Present Simple, will.",
          fbText: "If she <b>lived</b> in Odesa… (imagined). If she goes…, she <b>will visit</b>… (a real plan). If he <b>were</b> in Kyiv now… (imagined)."
        },
        {
          type: "info",
          title: "Giving reasons",
          body: `<ul><li>I’d like to live in Edinburgh <b>because</b> I love old towns.</li><li>I wouldn’t like to live in Toronto. It’s <b>too</b> big for me.</li><li>A village is <b>quieter than</b> a city.</li><li>If I lived in Sydney, I <b>could</b> go to the Opera House every week.</li></ul><p><b>could</b> = would be able to.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p><b>Isla:</b> Which city would you like to live in, Halyna?<br><b>Halyna:</b> ___</p>`,
          opts: [
            "I’d like to live in Lviv because I love old towns.",
            "Yes, I would.",
            "I lived in Lviv last year."
          ],
          correct: 0,
          hint: "Isla asks Which…? Halyna needs to name a city and give a reason.",
          fbOk: "Yes!",
          fbBad: "A Which question needs a name, not yes or no.",
          fbText: "<b>I’d like to live in Lviv because I love old towns.</b> A city + a reason with <i>because</i>. <i>Yes, I would</i> answers a yes/no question."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Taras imagines life in Scotland. Start with If.</p>`,
          tiles: ["If I", "lived", "in Edinburgh,", "I would", "visit", "the castle", "every week"],
          answer: ["If I lived in Edinburgh, I would visit the castle every week.", "If I lived in Edinburgh, every week I would visit the castle."],
          extra: ["I will"],
          keepCase: true,
          hint: "If + I + Past Simple…, I + would + verb…",
          fbOk: "Well done!",
          fbBad: "Imagined → would, not will.",
          fbText: "<b>If I lived in Edinburgh, I would visit the castle every week.</b> If + Past Simple → would + verb."
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Which sentences are correct?</p>`,
          opts: [
            "If I lived in Toronto, I’d go up the CN Tower.",
            "If I would live in Sydney, I would swim every day.",
            "I wouldn’t like to live there because it’s too noisy.",
            "If I go to Odesa in July, I’ll walk up the Potemkin Stairs.",
            "If I lived in Dublin, I will study at Trinity College."
          ],
          correct: [0, 2, 3],
          hint: "Look for would after if. Does the other part match the if part?",
          fbOk: "Well done!",
          fbBad: "Imagined: if + Past Simple, would. Real: if + Present Simple, will.",
          fbText: "Correct: <b>If I lived…, I’d go…</b>, <b>I wouldn’t like… because…</b>, <b>If I go…, I’ll walk…</b> Not <s>If I would live</s>. Not <s>If I lived…, I will</s>: lived → would."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p><b>Oksana:</b> Would you like to live in a big city, Liam?<br><b>Liam:</b> No, I ___. It’s too noisy for me.</p>`,
          before: "No, I",
          after: ". It’s too noisy for me.",
          answer: ["wouldn’t", "would not"],
          contractions: true,
          hint: "Would you…? – No, I …",
          fbOk: "Right.",
          fbBad: "The short answer uses the same verb as the question: would.",
          fbText: "Would you like…? – No, I <b>wouldn’t</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Halyna writes her answer for the club.</p>`,
          text: "I live in a village near Poltava. It’s {*quieter|more quieter} than a big city, and I like that. But if I lived in a city, I {*would choose|will choose} Lviv because I love old towns. I {*could|can} climb the Town Hall tower every Saturday! And if I go to Lviv next summer, I {*will visit|would visit} Taras.",
          hint: "Which part is imagined, and which part is a real plan?",
          fbOk: "Well done!",
          fbBad: "quiet → quieter (not more quieter). Imagined → would, could. Real plan → will.",
          fbText: "<b>Quieter</b> than a city. If I lived…, I <b>would choose</b>… I <b>could</b> climb… If I go next summer, I <b>will visit</b> Taras: a real plan."
        }
      ],
      outro: {
        text: "If I go…, I’ll…; If I lived…, I’d…: now you can talk about real plans and imagined lives in different cities.",
        learned: [
          "Tell real plans from imagined situations.",
          "Say which city you would like to live in and why.",
          "Use could for imagined possibilities."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e9s8l5",
      title: "If we had left earlier…: the Third Conditional",
      short: "Third Conditional",
      icon: "path",
      status: "verified",
      why: "Sometimes things go wrong. Learn to imagine a different past and talk about regrets.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "What went wrong in Edinburgh?",
          body: `<p class="lead">Emma and her mum stayed with Isla in Edinburgh at Easter. Emma writes to Oksana.</p><p><i>On Saturday, we wanted to see Edinburgh Castle. But we didn’t book tickets online. When we got there, there were no tickets left for that day! If we had booked tickets online, we would have seen the castle. So we walked around the Old Town instead. It was lovely, but I really wanted to see the castle!</i></p><p>Did Emma see the castle?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><i>If we had booked tickets online, we would have seen the castle.</i></p><p>What happened?</p>`,
          opts: [
            "They booked tickets and saw the castle.",
            "They didn’t book tickets, so they didn’t see the castle.",
            "They are going to book tickets tomorrow."
          ],
          correct: 1,
          hint: "Read the second and third sentences of Emma’s message.",
          fbOk: "Right.",
          fbBad: "Emma writes: “we didn’t book tickets online”.",
          fbText: "They <b>didn’t</b> book tickets and <b>didn’t</b> see the castle. Emma imagines a different past: <i>If we had booked…, we would have seen…</i>"
        },
        {
          type: "info",
          title: "The Third Conditional",
          body: `<p>We imagine a different past. It didn’t happen, and we often feel sorry about it.</p><ul><li><b>if</b> + Past Perfect → <b>would have</b> + third form</li><li>If we <b>had booked</b> tickets, we <b>would have seen</b> the castle.</li><li>If Isla <b>had known</b>, she <b>would have helped</b> us.</li></ul><p>Not: <s>If we would have booked</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "If we {*had got|would have got} up earlier, we {*would have caught|would catch} the first bus. If Mum {*had brought|brought} her umbrella, she wouldn’t have got wet.",
          hint: "After if: had + third form. In the other part: would have + third form.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: if + had + third form → would have + third form.",
          fbText: "If we <b>had got</b> up earlier, we <b>would have caught</b>… If Mum <b>had brought</b>… It’s all about the past, and it didn’t happen."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Oksana didn’t take her camera to the Potemkin Stairs. She feels sorry about it.</p>`,
          opts: [
            "If I would have taken my camera, I would have taken great photos.",
            "If I had taken my camera, I will have taken great photos.",
            "If I had taken my camera, I would have taken great photos."
          ],
          correct: 2,
          hint: "Find had + third form after if, and would have in the other part.",
          fbOk: "Well done!",
          fbBad: "No would after if. And it’s the past: would have, not will have.",
          fbText: "<b>If I had taken my camera, I would have taken great photos.</b> Not <s>If I would have taken</s>, not <s>will have taken</s>."
        },
        {
          type: "info",
          title: "’d = had or would?",
          body: `<p>In speaking, we often use short forms:</p><ul><li>If we<b>’d</b> booked tickets, we<b>’d</b> have seen the castle.</li><li>’d + third form (booked) → <b>had</b></li><li>’d + have → <b>would</b></li></ul><p>Negative: If I <b>hadn’t</b> missed the bus, I <b>wouldn’t have</b> been late.</p><p>Remember: a comma after the if part when it comes first.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p><b>Isla:</b> If you’d told me, I’d have booked the tickets for you!</p><p>What does the first <i>’d</i> mean: <i>If you’d told me</i>?</p>`,
          opts: [
            "had",
            "would",
            "did"
          ],
          correct: 0,
          hint: "What comes after the first ’d: have or a third form?",
          fbOk: "Good eye!",
          fbBad: "After the first ’d there is a third form: told.",
          fbText: "If you<b>’d told</b> = if you <b>had</b> told (’d + third form). I<b>’d have</b> booked = I <b>would</b> have booked (’d + have)."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Emma and her mum missed the train to Glasgow. Start with If.</p>`,
          tiles: ["If we", "had", "left", "earlier,", "we wouldn’t", "have", "missed", "the train"],
          answer: "If we had left earlier, we wouldn’t have missed the train.",
          extra: ["leave"],
          keepCase: true,
          hint: "If + we + had + third form…, we + wouldn’t have + third form…",
          fbOk: "Well done!",
          fbBad: "After had: the third form left, not leave.",
          fbText: "<b>If we had left earlier, we wouldn’t have missed the train.</b> leave – left – <b>left</b>. A comma after the if part."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>Emma writes again. One part is wrong.</p>`,
          text: "If I [would have known] about the tickets, I [!would have booked] them a week before.",
          hint: "Where do we never use would?",
          fbOk: "Good eye!",
          fbBad: "Look at the rule: no would after if.",
          fbText: "If I <b>had known</b> about the tickets, I would have booked them. No <i>would</i> after <i>if</i>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>In July, it rained all day in Odesa. Oksana and Uncle Ivan stayed at home. Use the verb <i>walk</i>.</p>`,
          before: "If it hadn’t rained, we would have",
          after: "down the Potemkin Stairs.",
          answer: "walked",
          hint: "would have + the third form of walk.",
          fbOk: "Right.",
          fbBad: "walk is a regular verb: the third form ends in -ed.",
          fbText: "would have + <b>walked</b>. It rained, so they didn’t walk down the Stairs."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana answers Emma.</p>`,
          text: "Poor you! If you {*had booked|would have booked} the tickets, you {*would have seen|would see} the castle. Something like that happened to me in Odesa last July. I didn’t check the weather. If I {*had checked|checked} it, I would have taken my umbrella. But never mind: if we hadn’t stayed at home, Uncle Ivan {*wouldn’t have shown|won’t show} me his old photos of Odesa!",
          hint: "Each sentence imagines a different past: had + third form, would have + third form.",
          fbOk: "Well done!",
          fbBad: "if + had + third form; the other part: would (not) have + third form.",
          fbText: "If you <b>had booked</b>…, you <b>would have seen</b>… If I <b>had checked</b>… Uncle Ivan <b>wouldn’t have shown</b> me his photos. All of these didn’t happen – we only imagine them."
        }
      ],
      outro: {
        text: "If we had booked…, we would have seen…: now you can imagine a different past and talk about regrets.",
        learned: [
          "Form the Third Conditional: if + had + third form, would have + third form.",
          "Tell ’d = had from ’d = would.",
          "Talk about things that went wrong in the past."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e9s8l6",
      title: "A city guide for a friend from abroad",
      short: "A city guide",
      icon: "map",
      status: "verified",
      why: "A friend from another country wants to see your city. Write a short guide and explain how to get around.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "What should Isla see in Lviv?",
          body: `<p class="lead">Isla writes to Taras.</p><p><i>Hi Taras! My family wants to visit Lviv one day. Could you write a short guide for us? What should we see first, and how do we get around? Thanks! – Isla</i></p><p>What do we put in a good city guide?</p>`,
          cta: "Let’s see"
        },
        {
          type: "info",
          title: "Phrases for a city guide",
          body: `<ul><li><b>The best way to</b> see the Old Town <b>is on foot</b>.</li><li><b>Start in</b> Rynok Square. <b>Then walk to</b> Svobody Avenue.</li><li><b>Don’t miss</b> the Town Hall tower.</li><li><b>It’s worth</b> going inside the Opera House.</li><li><b>If you have time</b>, visit a museum.</li></ul><p>worth + -ing: It’s worth visiting.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Welcome to Lviv!, part 1 of 2",
          title: "Read and choose.",
          body: `<p><b>Welcome to Lviv!</b> <i>by Taras</i></p><p><i>Lviv is in the west of Ukraine. Its historic centre has been on the UNESCO World Heritage List since 1998. The best way to see the Old Town is on foot. Start in Rynok Square, in the middle of the Old Town. The Town Hall is in the centre of the square. Don’t miss its tower: you can climb it and see the whole city!</i></p><p>What does Taras say about the Old Town?</p>`,
          opts: [
            "It’s best to see it on foot.",
            "It’s best to see it by car.",
            "It’s not worth visiting."
          ],
          correct: 0,
          hint: "Find the phrase “The best way to…”.",
          fbOk: "Yes!",
          fbBad: "Read the third sentence of the guide again.",
          fbText: "Taras writes: “The best way to see the Old Town is <b>on foot</b>.”"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Welcome to Lviv!, part 2 of 2",
          title: "Read and choose.",
          body: `<p><i>Then walk to Svobody Avenue, the main street. The Opera House is there. It opened in 1900, and it’s worth going inside. My tip: book tickets online. Last year my cousin Marta didn’t. When she got there, there were no tickets left. If she had booked them, she would have seen a ballet. If you have time, visit one of the museums in the Old Town too.</i></p><p>Why didn’t Marta see a ballet?</p>`,
          opts: [
            "The Opera House was closed.",
            "She didn’t book tickets, and there were none left.",
            "She didn’t like ballet."
          ],
          correct: 1,
          hint: "Read the sentences about Marta.",
          fbOk: "Right.",
          fbBad: "What didn’t Marta do before she went?",
          fbText: "Marta <b>didn’t book</b> tickets, and there were no tickets left. <i>If she had booked them, she would have seen a ballet.</i>"
        },
        {
          type: "order",
          sk: "read",
          title: "Put the sentences in order.",
          body: `<p>Isla plans her first day in Lviv with Taras’s guide.</p>`,
          items: [
            "First, we’ll go to Rynok Square.",
            "Then we’ll climb the Town Hall tower.",
            "After that, we’ll walk to Svobody Avenue.",
            "In the evening, we’ll go to the Opera House."
          ],
          shuffle: [2, 0, 3, 1],
          hint: "Taras says: start in Rynok Square. Where is the tower?",
          fbOk: "Well done!",
          fbBad: "Follow the guide: the square, the tower, the avenue, the Opera House.",
          fbText: "Rynok Square → the Town Hall tower (in the square) → Svobody Avenue → the Opera House, which is on the avenue."
        },
        {
          type: "gaps",
          sk: "func",
          title: "Complete the sentences.",
          text: "The best way to see the Old Town is {*on|by} foot. Don’t {*miss|lose} the Town Hall tower. It’s worth {*going|to go} inside the Opera House. If you {*have|will have} time, visit a museum.",
          hint: "Look at the screen “Phrases for a city guide”.",
          fbOk: "Exactly.",
          fbBad: "on foot; don’t miss; worth + -ing; no will after if.",
          fbText: "<b>On</b> foot. Don’t <b>miss</b>… It’s worth <b>going</b>… If you <b>have</b> time… (no <i>will</i> after <i>if</i>)."
        },
        {
          type: "word",
          sk: "write",
          title: "Write the missing word.",
          body: `<p>Taras adds a tip about the tower. Use worth + -ing. Use the verb <i>climb</i>.</p>`,
          before: "It’s worth",
          after: "the tower. The view is amazing!",
          answer: "climbing",
          hint: "worth + verb + -ing",
          fbOk: "Well done!",
          fbBad: "After worth, add -ing to the verb.",
          fbText: "It’s worth <b>climbing</b> the tower: worth + -ing."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>Isla writes back to Taras.</p>`,
          text: "Thanks for the guide! It’s really useful. If Marta [would have booked] tickets, she [!would have seen] the ballet. We’ll book ours online!",
          hint: "Look at the if part of the sentence about Marta.",
          fbOk: "Good eye!",
          fbBad: "Do we use would after if?",
          fbText: "If Marta <b>had booked</b> tickets, she would have seen the ballet. No <i>would</i> after <i>if</i>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes a short guide to Odesa for Emma.</p>`,
          text: "Odesa is a big port on the Black Sea. The best way to see the centre is {*on foot|by foot}. Start at the Potemkin Stairs. They {*were built|built} in 1837–1841 and have 192 steps! Then walk to the Opera House. It’s worth {*seeing|to see}. My tip: check the weather. Last July it rained, and I didn’t take an umbrella. If I {*had taken|took} one, I wouldn’t have got wet!",
          hint: "on foot; the passive; worth + -ing; the Third Conditional.",
          fbOk: "Well done!",
          fbBad: "Look at the phrases for a guide and the Third Conditional again.",
          fbText: "<b>On foot</b>. The Stairs <b>were built</b>. It’s worth <b>seeing</b>. If I <b>had taken</b> one, I wouldn’t have got wet."
        }
      ],
      outro: {
        text: "The best way to…, Don’t miss…, It’s worth…: now you can write a short city guide for a friend.",
        learned: [
          "Write a short city guide with useful phrases.",
          "Explain how to get around: on foot, start in…, then walk to…",
          "Give tips from experience with the Third Conditional."
        ]
      }
    },

    /* ───────────── Урок 7: фінал розділу ───────────── */
    {
      id: "e9s8l7",
      title: "Cities of Ukraine and the world",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e9s8boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help with the city quiz?",
          body: `<p class="lead">Oksana’s English club and Isla’s class in Edinburgh are making a quiz about cities.</p><p>Help them with the questions and the answers. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 1",
          title: "Choose the correct answer.",
          body: `<p>Which city is the second-largest in Ukraine?</p>`,
          opts: [
            "Lviv",
            "Kharkiv",
            "Odesa"
          ],
          correct: 1,
          pre: "e9s8l1",
          fbOk: "Right.",
          fbBad: "Which city did Mariia write about?",
          fbText: "<b>Kharkiv</b> is the second-largest city in Ukraine, after Kyiv."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          text: "Lviv’s historic centre has been on the UNESCO list {*since|for} 1998. Taras thinks Lviv is one of the most beautiful {*cities|city} in Ukraine. Odesa is a big port {*on|in} the Black Sea.",
          pre: "e9s8l1",
          fbOk: "Exactly.",
          fbBad: "since + a year; one of the… + plural noun; a city on a sea.",
          fbText: "<b>Since</b> 1998. One of the most beautiful <b>cities</b>. A port <b>on</b> the Black Sea."
        },
        {
          type: "match",
          sk: "cult",
          eyebrow: "Task 3",
          title: "Match the halves.",
          left: ["The Potemkin Stairs", "The Transfiguration Cathedral in Chernihiv", "The Opera House in Odesa", "Derzhprom"],
          right: ["have 192 steps.", "is one of the oldest churches in Ukraine.", "was designed by Fellner and Helmer.", "was built in 1925–1928."],
          pre: "e9s8l2",
          fbOk: "Well done!",
          fbBad: "Which place has steps? Which one is a church?",
          fbText: "The Stairs – <b>192 steps</b>. The cathedral – <b>one of the oldest churches</b>. The Opera House – <b>Fellner and Helmer</b>. Derzhprom – <b>1925–1928</b>."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 4",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is true?</p>`,
          opts: [
            "Sydney is the capital of Australia.",
            "Trinity College is in Edinburgh.",
            "Toronto is the largest city in Canada."
          ],
          correct: 2,
          pre: "e9s8l3",
          fbOk: "Right.",
          fbBad: "What is the capital of Australia? Where is Trinity College?",
          fbText: "<b>Toronto</b> is the largest city in Canada; the capital is Ottawa. The capital of Australia is Canberra. Trinity College is in Dublin."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Write the missing word.",
          body: `<p>Write the third form of <i>design</i>.</p>`,
          before: "The Sydney Opera House was",
          after: "by Jørn Utzon.",
          answer: "designed",
          pre: "e9s8l3",
          fbOk: "Yes!",
          fbBad: "design is a regular verb: add -ed.",
          fbText: "The Opera House <b>was designed</b> by Jørn Utzon, a Danish architect."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Fill in the gaps.",
          text: "Isla lives in Edinburgh. If she {*lived|lives} in Lviv, she would climb the Town Hall tower every week. But she has a real plan: if she goes to Ukraine next summer, she {*will visit|would visit} Taras.",
          pre: "e9s8l4",
          fbOk: "Well done!",
          fbBad: "Imagined → if + Past Simple. Real plan → will.",
          fbText: "If she <b>lived</b> in Lviv… (imagined). If she goes…, she <b>will visit</b>… (a real plan)."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 7",
          title: "Choose the correct answer.",
          body: `<p>Emma didn’t book tickets for Edinburgh Castle, so she didn’t see it.</p>`,
          opts: [
            "If Emma had booked tickets, she would have seen the castle.",
            "If Emma would have booked tickets, she would have seen the castle.",
            "If Emma had booked tickets, she will see the castle."
          ],
          correct: 0,
          pre: "e9s8l5",
          fbOk: "Right.",
          fbBad: "if + had + third form → would have + third form.",
          fbText: "<b>If Emma had booked tickets, she would have seen the castle.</b> No <i>would</i> after <i>if</i>."
        },
        {
          type: "build",
          sk: "write",
          eyebrow: "Task 8",
          title: "Put the words in order.",
          body: `<p>Oksana didn’t take her camera. Start with If.</p>`,
          tiles: ["If", "I’d", "taken", "my camera,", "I’d", "have", "taken", "great photos"],
          answer: "If I’d taken my camera, I’d have taken great photos.",
          extra: ["took"],
          keepCase: true,
          pre: "e9s8l5",
          fbOk: "Well done!",
          fbBad: "’d = had: then the third form taken. ’d = would: then have.",
          fbText: "<b>If I’d taken my camera, I’d have taken great photos.</b> The first ’d = had, the second ’d = would."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Task 9",
          title: "Complete the sentences.",
          body: `<p>Taras writes a tip for the quiz page.</p>`,
          text: "The best way to see Lviv’s Old Town is {*on foot|by foot}. Don’t miss the Town Hall tower: it’s worth {*climbing|to climb}. And book your opera tickets online! If my cousin Marta {*had booked|would have booked} hers, she would have seen a ballet.",
          pre: "e9s8l6",
          fbOk: "Well done!",
          fbBad: "on foot; worth + -ing; no would after if.",
          fbText: "<b>On foot</b>. It’s worth <b>climbing</b>. If Marta <b>had booked</b> hers…"
        }
      ],
      outro: {
        text: "You can describe big cities and famous places in Ukraine and English-speaking countries. And you can imagine how the past could have been different!",
        learned: [
          "Describe big cities and their famous places.",
          "Talk about real plans and imagined situations with if.",
          "Imagine a different past with the Third Conditional."
        ]
      }
    }
  ]
});
