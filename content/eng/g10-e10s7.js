/* Слід · Англійська мова, 10 клас — «Ukraine and English-speaking countries» (e10s7)
   Програма: П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; спеціалізовані школи, B1 → B2), 10 кл.: теми «Україна» і
   «Країни виучуваної мови» — адміністративний та політичний устрій; природні ресурси; державні свята (с. 22–23);
   функція — описувати ситуації та реалії життя, аналізувати їхні причини і наслідки (с. 22);
   граматика (с. 23): so … that for results and consequences (повт. e9s3l4, + such … that); declarative sentence +
   so / therefore + declarative sentence (therefore — нове); prepositions of reason and purpose: due to, owing to, so, because
   (due to, owing to, because of — нове; мета — so that + can / could, розширення e9s9l4). Розподіл — content/eng/plan.js,
   reports/verify/plan-eng-g10-11.md, reports/verify/curate-eng-plan-g10-11.md (П4 — purpose):
   https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf
   Не повторює e8s7–e8s8 (географія, клімат, населення) і e5s10, e6s7–e6s8 (мапи, столиці, склад UK): тут устрій, влада,
   ресурси, свята.
   Друга правильна відповідь (plan-eng-g10-11, inbox PITFALL): due to / owing to / because of + іменник — усі правильні
   (у multi — усі в ключі; у gaps — у парі лише одна з них проти because + речення); so / therefore на початку речення
   обидва можливі — не протиставляємо, therefore перевіряємо напрямком «причина → наслідок»; so … that / such … that — за
   словом після so / such; that після so можна опустити (CD Grammar «So») — не помилка.
   Факти — Конституція України (ст. 2, 5, 20, 75, 76, 102, 103, 113, 114, 133, 134; zakon.rada.gov.ua, укр. і англ. переклад),
   КЗпП ст. 73 (чинна редакція, zakon.rada.gov.ua), Закон № 1207-VII ст. 1 (Крим), UK — CD + Wikipedia; URL —
   tasks/…/write-eng-g10-e10s7.md, «Нотатки агента».
   Державні свята України — TQ-141, «як зараз»: перелік з КЗпП ст. 73, «public holidays», без тверджень, що в ці дні не працюють.
   Без оцінок політиків; імен посадовців України немає; UK — лише King Charles III як глава держави.
   Діалоги — репліками в body (D-056), без звуку (D-055 п. 4).
   Герої — серія 4–9 кл., на шість років старші, ніж у 4 кл. (memory/short/inbox.md, NOTE (герої)): Andrii (Kyiv, клас
   Ms Lysenko, Daryna, Bohdan), Emma і Tom (England), Isla (Edinburgh), Owen (Wales), Oksana (Zelena Dolyna біля Poltava),
   Mariia (Kharkiv), Taras (Lviv). Новий проєкт: сайт «Two countries» класу Andrii і класу Emma.
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e10s7). 7 уроків (6 + фінал). Будова — за розділами 9–10 кл. (e9s3, e10s1).
   Перевірка: node tools/validate.mjs --section e10s7 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e10s7",
  grade: 10,
  weeks: [27, 31],
  title: "Ukraine and English-speaking countries",
  why: "To talk about how Ukraine and the UK are governed, their natural resources and their public holidays. And to explain reasons and results.",
  requires: ["e5s10l1", "e5s10l3", "e6s7l1", "e6s8l1", "e8s7l1", "e8s8l1", "e9s3l4", "e9s9l4"],
  meta: { author: "writer-e10s7", created: "2026-11-26", factcheck: "verifier-e10s7, 2026-11-26 (reports/verify/write-eng-g10-e10s7.md)", teacher: null },
  badges: [
    { id: "e10s7boss", name: "Two-country expert", icon: "trophy", desc: "Finish the final lesson “Ukraine and the UK: two countries”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e10s7l1",
      title: "How Ukraine is organised: regions and the capital",
      short: "Regions",
      icon: "map",
      status: "verified",
      why: "People abroad often ask what an oblast is. Learn to explain how Ukraine is organised.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What is an oblast?",
          body: `<p class="lead">Andrii’s class in Kyiv and Emma’s class in England are making a website together: “Two countries”. Emma writes to the group.</p><p><i>Hi everyone! My part is “How is your country organised?” Oksana says she lives near Poltava, in Poltava Oblast. Mariia lives in Kharkiv Oblast. What is an oblast? Is it a city? – Emma</i></p><p>How is Ukraine divided?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Ukraine is divided into oblasts. What is an oblast?</p>`,
          opts: [
            "a small village",
            "a big region of the country",
            "the capital city"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "An <b>oblast</b> is one of the big regions of Ukraine. The next screen shows how the country is organised."
        },
        {
          type: "info",
          title: "How Ukraine is organised",
          body: `<p>Ukraine is a <b>re<u>pub</u>lic</b>: there is no king or queen, and the people elect the President. Its <b><u>cap</u>ital</b> is <b>Kyiv</b>.</p><p>The Consti<u>tu</u>tion of Ukraine (Article 133) says the country is made up of:</p><ul><li>24 <b><u>ob</u>lasts</b> (regions), for example Poltava Oblast and Kharkiv Oblast</li><li>the <b>Au<u>ton</u>omous Republic of Crimea</b></li><li>two cities with <b>special status</b>: Kyiv and Sevastopol</li></ul><p>Each oblast is divided into <b>raions</b> (districts).</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the descriptions.",
          left: ["an oblast", "a raion", "the capital", "a republic"],
          right: ["one of the 24 big regions of Ukraine", "a district inside an oblast", "the main city, where the government works", "a country with no king or queen"],
          hint: "Which is smaller: an oblast or a raion?",
          fbOk: "Right.",
          fbBad: "Look at the box “How Ukraine is organised” again.",
          fbText: "<b>oblast</b> → a big region; <b>raion</b> → a district inside an oblast; <b>the capital</b> → the main city; <b>republic</b> → no king or queen, the people elect the President."
        },
        {
          type: "sort",
          sk: "cult",
          title: "Sort the words.",
          body: `<p>What is each place in Ukraine’s Constitution?</p>`,
          bins: ["an oblast", "a city with special status", "an autonomous republic"],
          items: [
            ["Poltava Oblast", 0],
            ["Lviv Oblast", 0],
            ["Kharkiv Oblast", 0],
            ["the city of Kyiv", 1],
            ["Sevastopol", 1],
            ["Crimea", 2]
          ],
          hint: "Only two cities have special status. Which ones?",
          fbOk: "Well done!",
          fbBad: "Check the list: 24 oblasts, the Autonomous Republic of Crimea, two cities with special status.",
          fbText: "Poltava, Lviv and Kharkiv Oblasts are <b>oblasts</b>. Kyiv and Sevastopol are <b>cities with special status</b>. Crimea is the <b>Autonomous Republic</b> of Crimea."
        },
        {
          type: "info",
          title: "Crimea is part of Ukraine",
          body: `<p>The Constitution (Article 134) says that the Autonomous Republic of Crimea is an <b><u>in</u>tegral part</b> of Ukraine. <b>integral</b> = necessary to make something whole.</p><p>Russia has <b><u>oc</u>cupied</b> Crimea since 2014. <b>occupy</b> = take control of a place by force.</p><p>Ukraine’s laws call Crimea a <b>temporarily occupied</b> territory: it is still part of Ukraine. In March 2014, the UN General Assembly (Resolution 68/262) supported Ukraine’s territorial integrity. It called on all countries not to recognise any change in the status of Crimea and Sevastopol.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p><b>Emma:</b> So is Crimea one of the 24 oblasts?<br><b>Andrii:</b> …</p><p>What does Andrii say?</p>`,
          opts: [
            "Yes, it’s the 25th oblast of Ukraine.",
            "No, it’s a city with special status, like Kyiv.",
            "No, it’s the Autonomous Republic of Crimea – an integral part of Ukraine."
          ],
          correct: 2,
          hint: "Look at the list in the Constitution: oblasts, an autonomous republic, two cities.",
          fbOk: "Exactly.",
          fbBad: "Ukraine has 24 oblasts. Crimea isn’t one of them, and it isn’t a city.",
          fbText: "Crimea is the <b>Autonomous Republic of Crimea</b>, not an oblast. The Constitution calls it an <b>integral part</b> of Ukraine. The cities with special status are Kyiv and Sevastopol."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["re|+pub|lic", "au|+ton|o|mous", "+cap|i|tal", "con|sti|+tu|tion"],
          fbOk: "Good eye!",
          fbBad: "Look at the underlined parts in the box “How Ukraine is organised”.",
          fbText: "re<u>pub</u>lic, au<u>ton</u>omous, <u>cap</u>ital, consti<u>tu</u>tion."
        },
        {
          type: "pick",
          sk: "vocab",
          title: "Find the mistake.",
          body: `<p>One word in Bohdan’s sentence is wrong.</p>`,
          text: "Ukraine is a republic. It is divided into 24 [states], and each of them is divided into raions.",
          hint: "What are Ukraine’s 24 regions called?",
          fbOk: "Good eye!",
          fbBad: "Look at the word before the comma.",
          fbText: "Ukraine is divided into 24 <b>oblasts</b> (regions). The USA, for example, is divided into states, but Ukraine isn’t."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii answers Emma.</p>`,
          text: "Hi Emma! An oblast isn’t a city – it’s a big {*region|village|capital}. Ukraine has 24 oblasts, and each oblast is divided into {*raions|republics|capitals}. Kyiv is our capital, and it’s a city with special {*status|oblast|power}. Crimea is the Autonomous {*Republic|Oblast|City} of Crimea, an integral part of Ukraine. – Andrii",
          hint: "A big part of a country → a … ; a district → a … ; Kyiv and Sevastopol have special …",
          fbOk: "Well done!",
          fbBad: "Look at the box “How Ukraine is organised” again.",
          fbText: "An oblast is a big <b>region</b>, divided into <b>raions</b>. Kyiv is a city with special <b>status</b>. Crimea is the Autonomous <b>Republic</b> of Crimea."
        }
      ],
      outro: {
        text: "Oblasts, raions, the capital, the Autonomous Republic of Crimea: now you can explain how Ukraine is organised.",
        learned: [
          "Explain how Ukraine is organised: oblasts, raions and the capital.",
          "Say what a republic is.",
          "Explain that Crimea is an integral part of Ukraine."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e10s7l2",
      title: "Who makes the laws? Parliament, president, government",
      short: "Power in Ukraine",
      icon: "vote",
      status: "verified",
      why: "Laws, elections, the government: learn the words to explain who does what in Ukraine.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Who does what in Ukraine?",
          body: `<p class="lead">Ms Lysenko’s class is making a quiz for the website: “Who does what in Ukraine?” Daryna has three cards.</p><ul><li>Card 1: makes the laws</li><li>Card 2: the head of state</li><li>Card 3: runs the country every day</li></ul><p>Which name goes on each card?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Card 1: Who makes the laws in Ukraine?</p>`,
          opts: [
            "the President",
            "the Cabinet of Ministers",
            "the Verkhovna Rada"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "The <b>Verkhovna Rada</b>, Ukraine’s parliament, makes the laws. The next screen shows who does what."
        },
        {
          type: "info",
          title: "Who does what?",
          body: `<ul><li><b>the Verkhovna Rada</b> – the <b><u>par</u>liament</b>. It is the only body that makes laws. Under the Constitution, it has 450 <b>MPs</b> (Members of Parliament), elected for five years.</li><li><b>the <u>Pres</u>ident</b> – the <b>head of state</b>, elected for five years.</li><li><b>the Cabinet of Ministers</b> – the government. It runs the country every day. The <b>Prime Minister</b> leads it.</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          left: ["The Verkhovna Rada", "The President", "The Cabinet of Ministers", "The Prime Minister"],
          right: ["makes the laws.", "is the head of state.", "runs the country every day.", "leads the Cabinet of Ministers."],
          hint: "Which one is the parliament? Which one is the government?",
          fbOk: "Well done!",
          fbBad: "Look at the box “Who does what?” again.",
          fbText: "The <b>Verkhovna Rada</b> makes the laws. The <b>President</b> is the head of state. The <b>Cabinet of Ministers</b> runs the country, and the <b>Prime Minister</b> leads it."
        },
        {
          type: "choice",
          sk: "cult",
          title: "Choose the correct answer.",
          body: `<p>Bohdan writes a quiz question: “The President makes all the laws in Ukraine. True or false?”</p><p>What is the right answer?</p>`,
          opts: [
            "True: the President makes all the laws.",
            "False: the Verkhovna Rada is the only body that makes laws.",
            "False: the Cabinet of Ministers makes all the laws."
          ],
          correct: 1,
          hint: "Find the words “the only body” in the box.",
          fbOk: "Right.",
          fbBad: "The President is the head of state. The Cabinet of Ministers runs the country.",
          fbText: "<b>False:</b> the Verkhovna Rada is the only body that makes laws. The President is the head of state, and the Cabinet of Ministers runs the country every day."
        },
        {
          type: "info",
          title: "Elect, pass, appoint, adopt",
          body: `<ul><li>The people <b>elect</b> the President and the MPs: they vote for them in an <b>election</b>.</li><li>The Verkhovna Rada <b>passes</b> laws: the MPs vote for them, and they become laws.</li><li>The Verkhovna Rada <b>appoints</b> the Prime Minister: the President proposes a person, and the MPs vote.</li><li>The main law is the <b>Constitution</b>. The Verkhovna Rada <b>adopted</b> it on 28 June 1996.</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          text: "Ukrainians {*elect|appoint|pass} the President. The Verkhovna Rada {*passes|elects|appoints} laws. It also {*appoints|passes} the Prime Minister. The Constitution was {*adopted|elected} in 1996.",
          hint: "People vote for a president → … ; MPs vote for a law → … ; the Rada chooses the Prime Minister → …",
          fbOk: "Exactly.",
          fbBad: "Look at the box “Elect, pass, appoint, adopt”.",
          fbText: "The people <b>elect</b> the President. The Rada <b>passes</b> laws and <b>appoints</b> the Prime Minister. The Constitution was <b>adopted</b> in 1996."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Daryna writes the answer for card 2. Start with <i>The President</i>.</p>`,
          tiles: ["The President", "is", "the head of state", "and", "is elected", "for five years"],
          extra: ["elects"],
          answer: [
            "The President is the head of state and is elected for five years.",
            "The President is elected for five years and is the head of state."
          ],
          hint: "Two facts, joined with and. Is the President the person who votes or the person people vote for?",
          fbOk: "Yes!",
          fbBad: "The people vote for the President: he or she is elected.",
          fbText: "<b>The President is the head of state and is elected for five years.</b> The other order of the two facts is correct too."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in the quiz answer is wrong.</p>`,
          text: "Under the Constitution of Ukraine, the 450 MPs are [elect] for five years.",
          hint: "The people vote for the MPs. Which form comes after are?",
          fbOk: "Good eye!",
          fbBad: "Look at the verb after are.",
          fbText: "The people vote for them, so we use the passive: the MPs are <b>elected</b> for five years."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>On 28 June 1996, the MPs voted for the Constitution, and it became the main law of Ukraine.</p>`,
          before: "The Verkhovna Rada",
          after: "the Constitution on 28 June 1996.",
          answer: ["adopted", "passed", "approved"],
          hint: "Look at the last line of the box “Elect, pass, appoint, adopt”.",
          fbOk: "Well done!",
          fbBad: "The verb is in the past. It starts with a.",
          fbText: "The Verkhovna Rada <b>adopted</b> the Constitution on 28 June 1996. That’s why 28 June is Constitution Day."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Daryna checks the quiz cards.</p>`,
          text: "Card 1: the Verkhovna Rada. It’s the {*parliament|government}, and it passes {*laws|presidents}. Card 2: the President, the head of {*state|parliament}. Card 3: the Cabinet of Ministers. It {*runs|elects} the country every day, and the Prime Minister {*leads|passes} it.",
          hint: "Which body makes the laws? Which one runs the country?",
          fbOk: "Well done!",
          fbBad: "Look at the box “Who does what?” again.",
          fbText: "The Verkhovna Rada is the <b>parliament</b> and passes <b>laws</b>. The President is the head of <b>state</b>. The Cabinet of Ministers <b>runs</b> the country, and the Prime Minister <b>leads</b> it."
        }
      ],
      outro: {
        text: "The Verkhovna Rada passes laws, the President is the head of state, and the Cabinet of Ministers runs the country.",
        learned: [
          "Say who makes the laws in Ukraine and who runs the country.",
          "Use elect, pass, appoint and adopt.",
          "Use the passive: The President is elected for five years."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e10s7l3",
      title: "How the UK is governed",
      short: "Power in the UK",
      icon: "flag",
      status: "verified",
      why: "The UK has a king, but he doesn’t make the laws. Find out who does, and compare it with Ukraine and the USA.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "A king, but no power?",
          body: `<p class="lead">Emma writes the UK part of the quiz.</p><p><i>In the UK, we have a King. But he doesn’t make the laws, and he doesn’t run the country. So who does? – Emma</i></p><p>Who runs the UK?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Who leads the UK government?</p>`,
          opts: [
            "the Prime Minister",
            "the King",
            "the Mayor of London"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "The <b>Prime Minister</b> leads the UK government. The King is the head of state. More on the next screen."
        },
        {
          type: "info",
          title: "The UK: a constitutional monarchy",
          body: `<ul><li>The head of state is the <b><u>mon</u>arch</b> (a king or queen) – now King Charles III. The UK is a <b>consti<u>tu</u>tional <u>mon</u>archy</b>: the monarch has very little power and acts on the government’s advice.</li><li><b>Parliament</b> makes the laws. It has two <b>houses</b>: the <b>House of Commons</b> – 650 MPs, elected by the people; and the <b>House of Lords</b> – its members are not elected.</li><li>The <b>Prime Minister</b> leads the government. He or she is usually the leader of the party with the most MPs.</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the words and the descriptions.",
          left: ["the monarch", "the House of Commons", "the House of Lords", "the Prime Minister"],
          right: ["the head of state", "650 MPs elected by the people", "members who are not elected", "leads the government"],
          hint: "Which house has elected MPs?",
          fbOk: "Right.",
          fbBad: "Look at the box “The UK: a constitutional monarchy” again.",
          fbText: "<b>the monarch</b> → the head of state; <b>the House of Commons</b> → 650 elected MPs; <b>the House of Lords</b> → members who are not elected; <b>the Prime Minister</b> → leads the government."
        },
        {
          type: "multi",
          sk: "cult",
          title: "Choose all the correct answers.",
          body: `<p>What is true about both Ukraine and the UK?</p>`,
          opts: [
            "The people elect the head of state.",
            "The parliament makes the laws.",
            "The head of state is a king.",
            "There is a Prime Minister."
          ],
          correct: [1, 3],
          hint: "Who is the head of state in each country?",
          fbOk: "Well done!",
          fbBad: "Two answers are correct. Compare the heads of state.",
          fbText: "In both countries, the <b>parliament makes the laws</b> and there is a <b>Prime Minister</b>. But Ukraine’s head of state is an elected President, and the UK’s is a king."
        },
        {
          type: "info",
          title: "Parliaments in Scotland, Wales and Northern Ireland",
          body: `<p>The UK Parliament meets in London, in the Palace of Westminster. Scotland, Wales and Northern Ireland also have their own parliaments for some questions, like schools and hospitals:</p><ul><li>the <b>Scottish Parliament</b> – in Edinburgh</li><li>the <b>Senedd</b> (the Welsh Parliament) – in Cardiff</li><li>the <b>Northern Ireland Assembly</b> – in Belfast</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "cult",
          title: "Fill in the gaps.",
          body: `<p>Owen and Isla add their part to the quiz.</p>`,
          text: "Owen: I live in Wales. Our parliament in Cardiff is called the {*Senedd|House of Lords|House of Commons}. Isla: And in Edinburgh, we have the Scottish {*Parliament|Senedd}. But the UK Parliament meets in {*London|Cardiff|Edinburgh}.",
          hint: "Look at the list: which parliament is in Cardiff?",
          fbOk: "Yes!",
          fbBad: "Check the list of parliaments and their cities.",
          fbText: "The Welsh Parliament in Cardiff is the <b>Senedd</b>. Edinburgh has the Scottish <b>Parliament</b>. The UK Parliament meets in <b>London</b>."
        },
        {
          type: "info",
          title: "And the USA?",
          body: `<ul><li>The USA is a <b>republic</b>, like Ukraine.</li><li>The President is the head of state and also leads the government.</li><li><b><u>Con</u>gress</b> makes the laws. It has two houses: the <b><u>Sen</u>ate</b> and the <b>House of Representatives</b>.</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "cult",
          title: "Choose the correct answer.",
          body: `<p>Tom asks: “Who makes the laws in the USA?”</p>`,
          opts: [
            "Parliament: the House of Commons and the House of Lords",
            "Congress: the Senate and the House of Representatives",
            "the President and the Prime Minister"
          ],
          correct: 1,
          hint: "The House of Commons and the House of Lords are in the UK.",
          fbOk: "Exactly.",
          fbBad: "Look at the box “And the USA?”.",
          fbText: "In the USA, <b>Congress</b> makes the laws: the Senate and the House of Representatives. The House of Commons and the House of Lords are the UK Parliament."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>The UK has a King, but his power is very limited.</p>`,
          before: "The UK is a constitutional",
          answer: ["monarchy"],
          hint: "A country with a king or queen is a …",
          fbOk: "Well done!",
          fbBad: "The word is in the title of the box about the UK.",
          fbText: "The UK is a constitutional <b>monarchy</b>: the monarch is the head of state, but Parliament makes the laws."
        },
        {
          type: "pick",
          sk: "cult",
          title: "Find the mistake.",
          body: `<p>One word in Tom’s sentence is wrong.</p>`,
          text: "In the UK, the members of the House of [Commons] are not elected.",
          hint: "Which house has 650 MPs elected by the people?",
          fbOk: "Good eye!",
          fbBad: "Look at the name of the house.",
          fbText: "The members of the House of <b>Lords</b> are not elected. The 650 MPs in the House of Commons are elected by the people."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma compares the two countries for the website.</p>`,
          text: "In Ukraine, the head of state is the {*President|King}. In the UK, it’s the {*King|Prime Minister}. In both countries, the {*Prime Minister|monarch} leads the government, and the parliament makes the laws. Our Parliament has two houses: the House of Commons and the House of {*Lords|Representatives}.",
          hint: "Ukraine is a republic, and the UK is a monarchy. Who leads the government in both?",
          fbOk: "Well done!",
          fbBad: "Compare the boxes about Ukraine and the UK.",
          fbText: "Ukraine: the <b>President</b>. The UK: the <b>King</b>. In both, the <b>Prime Minister</b> leads the government. The UK Parliament: the House of Commons and the House of <b>Lords</b>. The House of Representatives is in the USA."
        }
      ],
      outro: {
        text: "The UK is a constitutional monarchy: the King is the head of state, Parliament makes the laws, and the Prime Minister leads the government.",
        learned: [
          "Describe how the UK is governed: the monarch, Parliament, the Prime Minister.",
          "Compare a republic and a constitutional monarchy.",
          "Name the parliaments of Scotland, Wales and Northern Ireland."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e10s7l4",
      title: "Natural resources: so rich that…",
      short: "Resources",
      icon: "leaf",
      status: "verified",
      why: "Black soil, iron ore, North Sea oil, wind: talk about what Ukraine and the UK are rich in and what it leads to.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "What is Ukraine rich in?",
          body: `<p class="lead">Mariia’s class in Kharkiv is making a poster for the website: “What is Ukraine rich in?”</p><ul><li>Photo 1: A field of sunflowers in summer. Look how black the soil is!</li><li>Photo 2: A big iron ore mine near Kryvyi Rih.</li><li>Photo 3: Forests in the Carpathians – Taras sent this one from Lviv.</li></ul><p>Why is the black soil so important?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Ukraine’s black soil is called chornozem. Why is it important?</p>`,
          opts: [
            "It is good for building houses.",
            "It gives the country a lot of oil.",
            "It is very good for growing crops."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Chornozem</b> is very good for growing crops: wheat, maize, sunflowers. The next screen shows more."
        },
        {
          type: "info",
          title: "Natural resources of Ukraine",
          body: `<p><b><u>nat</u>ural re<u>sour</u>ces</b> = things from nature that people use: soil, water, forests, coal, gas, metals.</p><ul><li><b>chornozem</b> (black soil) – very <b><u>fer</u>tile</b> (good for growing crops). Farmers grow wheat, maize and sunflowers. Ukraine is one of the world’s biggest <b>exporters</b> of sunflower oil (<b>export</b> = sell to other countries).</li><li><b>iron ore</b> – rock with iron in it. A lot of it is near <b>Kryvyi Rih</b>.</li><li><b>coal</b> – in the Donbas, in the east.</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the descriptions.",
          left: ["fertile", "iron ore", "to export", "crops"],
          right: ["good for growing plants", "rock with iron in it", "to sell to other countries", "plants that farmers grow, like wheat"],
          hint: "Which one is about selling? Which one is a kind of rock?",
          fbOk: "Right.",
          fbBad: "Look at the box “Natural resources of Ukraine” again.",
          fbText: "<b>fertile</b> → good for growing plants; <b>iron ore</b> → rock with iron in it; <b>export</b> → sell to other countries; <b>crops</b> → plants that farmers grow."
        },
        {
          type: "info",
          title: "So … that, such … that",
          body: `<p>Remember? We show a result with <b>so</b> and <b>such</b>:</p><ul><li><b>so</b> + adjective + <b>that</b>:<br>The soil is <b>so fertile that</b> farmers grow big harvests.</li><li><b>such</b> (a / an) + adjective + noun + <b>that</b>:<br>Ukraine has <b>such fertile soil that</b> it exports a lot of grain.<br>It’s <b>such a big country that</b> the weather in the west and the east is often different.</li></ul><p>You can leave out <i>that</i>: <i>The soil is so fertile farmers grow big harvests.</i></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Kryvyi Rih has {*such|so} rich iron ore that people have mined it there for more than a hundred years. The fields near Oksana’s village are {*so|such} big that you can’t see where they end. The black soil is {*so|such} fertile that the sunflowers grow very tall.",
          hint: "Is there a noun after the adjective? Then it’s such.",
          fbOk: "Exactly.",
          fbBad: "so + adjective; such + adjective + noun.",
          fbText: "<b>such</b> rich iron ore (adjective + noun); <b>so</b> big (adjective); <b>so</b> fertile (adjective)."
        },
        {
          type: "info",
          title: "Natural resources of the UK",
          body: `<ul><li><b>oil and gas</b> – under the North Sea. Oil started to come from there in the 1970s.</li><li><b>coal</b> – in the past, it gave power to British factories and trains. The last deep coal mine closed in 2015.</li><li><b>wind</b> – the UK has long coasts with strong winds, and wind farms make a lot of its electricity.</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "The UK coasts are such windy that wind farms make a lot of electricity there.",
            "The UK coasts are so windy that wind farms make a lot of electricity there.",
            "The UK coasts are so windy than wind farms make a lot of electricity there."
          ],
          correct: 1,
          hint: "windy is an adjective. And which word starts the result: that or than?",
          fbOk: "Right.",
          fbBad: "so + adjective + that.",
          fbText: "<b>so windy that</b>: so + adjective + that. <i>Such</i> needs a noun (such strong winds), and <i>than</i> is for comparisons."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Mariia writes about the sunflower field. Start with <i>The soil</i>.</p>`,
          tiles: ["The soil", "is", "so", "fertile", "that", "farmers", "grow", "a lot of wheat"],
          extra: ["such"],
          answer: "The soil is so fertile that farmers grow a lot of wheat.",
          hint: "There is no noun after fertile: so or such?",
          fbOk: "Yes!",
          fbBad: "so + adjective + that + result.",
          fbText: "<b>The soil is so fertile that farmers grow a lot of wheat.</b> First the reason, then <i>that</i> + the result."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Ukraine’s black soil is very fertile. Farmers grow a lot of sunflowers.</p>`,
          before: "Ukraine has",
          after: "fertile soil that farmers grow a lot of sunflowers.",
          answer: ["such"],
          hint: "After fertile comes a noun: soil.",
          fbOk: "Well done!",
          fbBad: "adjective + noun → …",
          fbText: "Ukraine has <b>such</b> fertile soil that farmers grow a lot of sunflowers: such + adjective + noun + that."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Mariia’s note is wrong.</p>`,
          text: "Taras took [so] beautiful photos of the Carpathian forests that we put all of them on the poster.",
          hint: "What comes after beautiful: a noun or nothing?",
          fbOk: "Good eye!",
          fbBad: "Look at the word before beautiful.",
          fbText: "There is a noun after the adjective (beautiful <b>photos</b>), so we use <b>such</b>: Taras took <b>such</b> beautiful photos that…"
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia writes the text for the poster.</p>`,
          text: "Ukraine is rich in natural {*resources|crops}. Our black soil, chornozem, is {*so|such} fertile that farmers grow wheat, maize and sunflowers. Ukraine is one of the world’s biggest {*exporters|importers} of sunflower oil. There is a lot of iron {*ore|coal} near Kryvyi Rih, and there is coal in the {*Donbas|North Sea}.",
          hint: "Things from nature that people use → natural … ; sell to other countries → …",
          fbOk: "Well done!",
          fbBad: "Look at the box “Natural resources of Ukraine” again.",
          fbText: "natural <b>resources</b>; <b>so</b> fertile (adjective); one of the biggest <b>exporters</b>; iron <b>ore</b> near Kryvyi Rih; coal in the <b>Donbas</b>. The North Sea is in the UK part."
        }
      ],
      outro: {
        text: "Ukraine has such fertile soil that it is one of the world’s biggest exporters of sunflower oil, and the UK coasts are so windy that wind farms make a lot of electricity.",
        learned: [
          "Name natural resources of Ukraine and the UK.",
          "Describe results with so + adjective + that.",
          "Use such + adjective + noun + that."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e10s7l5",
      title: "Due to, owing to, therefore: reasons and results",
      short: "Reasons and results",
      icon: "bulb",
      status: "verified",
      why: "News, reports and notices explain why things happen. Learn to give reasons, results and purposes.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Why was the trip cancelled?",
          body: `<p class="lead">Emma’s class planned a boat trip to see a wind farm at sea. Emma writes to the group.</p><p><i>Bad news! Our trip was cancelled due to the storm. The wind was so strong that the boats couldn’t go out. Therefore, we’re going next month. – Emma</i></p><p>Which words show the reason, and which show the result?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Which word can go in the gap?</p><p>The trip was cancelled … the storm.</p>`,
          opts: [
            "due to",
            "because",
            "so"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>due to</b> + a noun: due to the storm. <i>Because</i> needs a subject and a verb: because there was a storm. More on the next screen."
        },
        {
          type: "info",
          title: "Reasons: because or because of?",
          body: `<ul><li><b>because</b> + subject + verb:<br>The trip was cancelled <b>because</b> the wind <b>was</b> too strong.</li><li><b>because of</b> / <b>due to</b> / <b>owing to</b> + noun:<br>The trip was cancelled <b>because of</b> / <b>due to</b> / <b>owing to</b> the storm.</li></ul><p><i>Due to</i> and <i>owing to</i> mean the same as <i>because of</i>. You often see them in news, reports and notices.</p><p>Not: <s>due to the wind was strong</s>, <s>because the storm</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "The ferry didn’t sail {*due to|because} the bad weather. It didn’t sail {*because|owing to} the waves were too high. {*Owing to|Because} its strong winds, the UK makes a lot of electricity from wind farms.",
          hint: "Look after the gap: a noun, or a subject and a verb?",
          fbOk: "Exactly.",
          fbBad: "because + subject + verb; due to / owing to + noun.",
          fbText: "<b>due to</b> the bad weather (noun); <b>because</b> the waves were too high (subject + verb); <b>Owing to</b> its strong winds (noun)."
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>… its fertile soil, Ukraine grows a lot of wheat.</p><p>Which words can start the sentence?</p>`,
          opts: [
            "Because",
            "Due to",
            "Owing to",
            "Because of"
          ],
          correct: [1, 2, 3],
          hint: "After the gap there is a noun: its fertile soil.",
          fbOk: "Well done!",
          fbBad: "Three answers are correct. Which word needs a subject and a verb?",
          fbText: "<b>Due to</b>, <b>Owing to</b> and <b>Because of</b> + noun are all correct. <i>Because</i> needs a subject and a verb: Because its soil is fertile, …"
        },
        {
          type: "info",
          title: "Results: so or therefore?",
          body: `<ul><li><b>so</b> – joins two parts of one sentence, usually after a comma:<br>The storm was strong, <b>so</b> the trip was cancelled.</li><li><b><u>there</u>fore</b> – more formal, often in writing. It usually starts a new sentence, with a comma after it:<br>The storm was strong. <b>Therefore</b>, the trip was cancelled.</li><li>It can also come after <i>and</i>: The storm was strong <b>and therefore</b> dangerous.</li></ul><p>because → the reason; so / therefore → the result</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Reason: Ukraine has fertile soil. Result: it grows a lot of grain.</p><p>Which sentence is correct?</p>`,
          opts: [
            "Ukraine grows a lot of grain. Therefore, it has fertile soil.",
            "Ukraine has fertile soil because it grows a lot of grain.",
            "Ukraine has fertile soil. Therefore, it grows a lot of grain."
          ],
          correct: 2,
          hint: "Therefore comes before the result. Because comes before the reason.",
          fbOk: "Right.",
          fbBad: "Which comes first: the soil or the grain?",
          fbText: "The fertile soil is the reason, and the grain is the result: <b>Ukraine has fertile soil. Therefore, it grows a lot of grain.</b> The other sentences turn the reason and the result round."
        },
        {
          type: "info",
          title: "Purpose: so that + can / could",
          body: `<p><b>so that</b> can also show a <b>purpose</b> – why someone does something:</p><ul><li>Emma’s class is visiting a wind farm <b>so that</b> they <b>can</b> see how it works.</li><li>Last year, Andrii read the British news every day <b>so that</b> he <b>could</b> learn new words.</li></ul><p>In everyday English, people often leave out <i>that</i>: <i>…so they can see how it works.</i></p><p>a comma + <b>so</b> → a result; <b>so that</b> + can / could → a purpose</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the sentences.",
          body: `<p>Is it a reason, a result or a purpose?</p>`,
          bins: ["reason", "result", "purpose"],
          items: [
            ["…due to the storm.", 0],
            ["…because the waves were too high.", 0],
            ["…, so the trip was cancelled.", 1],
            ["Therefore, we stayed at school.", 1],
            ["…so that they can see the wind farm.", 2],
            ["…so that he could learn new words.", 2]
          ],
          hint: "Why did it happen? → reason. What happened next? → result. Why does someone do it? → purpose.",
          fbOk: "Well done!",
          fbBad: "so that + can / could → purpose; a comma + so, therefore → result.",
          fbText: "Reason: <b>due to</b>, <b>because</b>. Result: <b>, so</b>, <b>Therefore</b>. Purpose: <b>so that</b> + can / could."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Tom’s message is wrong.</p>`,
          text: "The boat didn’t go out [because] the storm, so we stayed at school.",
          hint: "What comes after the wrong word: a noun, or a subject and a verb?",
          fbOk: "Good eye!",
          fbBad: "Look at the word before the storm.",
          fbText: "<i>The storm</i> is a noun, so we need <b>because of</b>, <b>due to</b> or <b>owing to</b>: The boat didn’t go out because of the storm."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Emma’s teacher writes a notice. Start with <i>The trip</i>.</p>`,
          tiles: ["The trip", "was cancelled", "owing to", "the storm"],
          extra: ["because"],
          answer: "The trip was cancelled owing to the storm.",
          hint: "The storm is a noun. Which words go before a noun?",
          fbOk: "Yes!",
          fbBad: "because needs a subject and a verb.",
          fbText: "<b>The trip was cancelled owing to the storm.</b> owing to + noun."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes about the trip for the website.</p>`,
          text: "Our boat trip was cancelled {*due to|because} the storm. The wind was {*so|such} strong that the boats couldn’t go out. {*Therefore|Because}, we’re going next month. Our teacher has booked a bigger boat so {*that|than} we can go even on a windy day.",
          hint: "a noun → due to; an adjective → so; the result → Therefore; a purpose → so that.",
          fbOk: "Well done!",
          fbBad: "Look at the boxes about reasons, results and purposes.",
          fbText: "<b>due to</b> the storm (noun); <b>so</b> strong (adjective); <b>Therefore</b>, … (the result); so <b>that</b> we can go (a purpose)."
        }
      ],
      outro: {
        text: "Because + subject + verb, but due to, owing to, because of + noun. So and therefore show a result, and so that + can shows a purpose.",
        learned: [
          "Give reasons with because, because of, due to and owing to.",
          "Show results with so and therefore.",
          "Show a purpose with so that + can / could."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e10s7l6",
      title: "Public holidays in Ukraine and the UK",
      short: "Public holidays",
      icon: "star",
      status: "verified",
      why: "Independence Day, Boxing Day, St Andrew’s Day: learn what the public holidays in Ukraine and the UK are and why they are on these dates.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Happy St Andrew’s Day!",
          body: `<p class="lead">It’s 30 November. Isla sends a message from Edinburgh.</p><p><b>Isla:</b> Happy St Andrew’s Day! It’s a bank holiday in Scotland. Is there a public holiday in Ukraine soon?<br><b>Andrii:</b> Yes, our next one is Christmas, on 25 December.</p><p>What public holidays do Ukraine and the UK have?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>How many bank holidays are there in Scotland in a usual year?</p>`,
          opts: [
            "three",
            "nine",
            "twenty"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "In a usual year, Scotland has <b>nine</b> bank holidays. England and Wales have eight, and Northern Ireland has ten. More later in the lesson."
        },
        {
          type: "info",
          title: "Public holidays in Ukraine",
          body: `<p>The Labour Code of Ukraine (Article 73) lists the <b>public holidays</b>. Here are some of them:</p><ul><li>1 January – New Year’s Day</li><li>28 June – Constitution Day</li><li>15 July – Statehood Day</li><li>24 August – Independence Day</li><li>1 October – Day of Defenders of Ukraine</li><li>25 December – Christmas</li></ul><p>Until a new law in July 2023, 7 January was a public holiday too, and the Day of Defenders was on 14 October.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          left: ["28 June", "24 August", "1 October", "25 December"],
          right: ["Constitution Day", "Independence Day", "Day of Defenders of Ukraine", "Christmas"],
          hint: "Start with the date you know best.",
          fbOk: "Right.",
          fbBad: "Look at the list of public holidays again.",
          fbText: "28 June – <b>Constitution Day</b>; 24 August – <b>Independence Day</b>; 1 October – <b>Day of Defenders of Ukraine</b>; 25 December – <b>Christmas</b>."
        },
        {
          type: "info",
          title: "Why these dates?",
          body: `<ul><li><b>24 August</b>: on this day in 1991, Ukraine <b>declared</b> its independence (declare = say officially).</li><li><b>28 June</b>: on this day in 1996, the Verkhovna Rada adopted the Constitution.</li><li><b>1 October</b>: the day <b>honours</b> the people who defend Ukraine (honour = show great respect for).</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Independence Day is on 24 August {*because|due to} Ukraine declared independence on that day in 1991. Constitution Day is a public holiday {*because|owing to} the Constitution was adopted on 28 June 1996. Since 2023, Christmas has been a public holiday only on 25 {*December|January}.",
          hint: "After the first two gaps there is a subject and a verb.",
          fbOk: "Exactly.",
          fbBad: "because + subject + verb; due to / owing to + noun.",
          fbText: "<b>because</b> Ukraine declared… and <b>because</b> the Constitution was adopted… (subject + verb). Christmas – only on 25 <b>December</b> since 2023."
        },
        {
          type: "info",
          title: "Bank holidays in the UK",
          body: `<p>In the UK, public holidays are usually called <b>bank holidays</b>: banks and most businesses are closed.</p><ul><li>In a usual year, England and Wales have eight bank holidays, Scotland has nine, and Northern Ireland has ten.</li><li>Christmas Day and <b>Boxing Day</b> (26 December) are bank holidays everywhere in the UK.</li><li>Scotland also has <b>St Andrew’s Day</b> (30 November), and Northern Ireland has <b>St Patrick’s Day</b> (17 March).</li><li>If 30 November is at the weekend, the Scottish bank holiday is on the next Monday.</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "cult",
          title: "Choose the correct answer.",
          body: `<p>Isla lives in Edinburgh, and Emma lives in England. Which day is a bank holiday for Isla, but not for Emma?</p>`,
          opts: [
            "Boxing Day",
            "Christmas Day",
            "St Andrew’s Day"
          ],
          correct: 2,
          hint: "Which days are bank holidays everywhere in the UK?",
          fbOk: "Yes!",
          fbBad: "Christmas Day and Boxing Day are bank holidays everywhere in the UK.",
          fbText: "<b>St Andrew’s Day</b> (30 November) is a bank holiday in Scotland. Christmas Day and Boxing Day are bank holidays everywhere in the UK."
        },
        {
          type: "multi",
          sk: "cult",
          title: "Choose all the correct answers.",
          body: `<p>Which days are bank holidays everywhere in the UK?</p>`,
          opts: [
            "Christmas Day",
            "St Patrick’s Day",
            "Boxing Day",
            "St Andrew’s Day"
          ],
          correct: [0, 2],
          hint: "Two of these days are only in one part of the UK.",
          fbOk: "Well done!",
          fbBad: "Two answers are correct. St Patrick’s Day and St Andrew’s Day are only in one part of the UK each.",
          fbText: "<b>Christmas Day</b> and <b>Boxing Day</b> are bank holidays everywhere in the UK. St Patrick’s Day – in Northern Ireland; St Andrew’s Day – in Scotland."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>On these days in the UK, banks and most businesses are closed.</p>`,
          before: "In the UK, a public holiday is usually called a",
          after: "holiday.",
          answer: ["bank"],
          hint: "Who is closed on these days?",
          fbOk: "Well done!",
          fbBad: "Look at the first line of the box “Bank holidays in the UK”.",
          fbText: "In the UK, a public holiday is usually called a <b>bank</b> holiday: banks and most businesses are closed."
        },
        {
          type: "pick",
          sk: "cult",
          title: "Find the mistake.",
          body: `<p>One word in Tom’s sentence is wrong.</p>`,
          text: "In England, 26 December is a bank holiday called [Christmas] Day.",
          hint: "Christmas Day is on 25 December. What is the day after it called?",
          fbOk: "Good eye!",
          fbBad: "Look at the name of the holiday.",
          fbText: "26 December is <b>Boxing</b> Day. Christmas Day is on 25 December."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes back to Isla.</p>`,
          text: "Happy St Andrew’s Day, Isla! Our next public holiday is Christmas. In 2023, the Verkhovna Rada changed the law. {*Therefore|Because}, Christmas is now a public holiday only on 25 December. In summer, we have Independence Day on 24 August {*because|due to} Ukraine declared independence on that day in 1991. – Andrii",
          hint: "The first gap starts a new sentence with the result. After the second gap there is a subject and a verb.",
          fbOk: "Well done!",
          fbBad: "Therefore → a result; because + subject + verb.",
          fbText: "The law changed. <b>Therefore</b>, Christmas is a public holiday only on 25 December (the result). Independence Day is on 24 August <b>because</b> Ukraine declared independence on that day (subject + verb)."
        }
      ],
      outro: {
        text: "In Ukraine, public holidays are listed in the Labour Code; in the UK, they are usually called bank holidays, and Scotland and Northern Ireland have their own.",
        learned: [
          "Name public holidays in Ukraine and say why they are on these dates.",
          "Explain what a bank holiday is in the UK.",
          "Give reasons and results about holidays: because, due to, so."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e10s7l7",
      title: "Ukraine and the UK: two countries",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e10s7boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you finish the website?",
          body: `<p class="lead">Andrii and Emma are finishing the “Two countries” website.</p><p>Check the quiz answers and read the main article. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "cult",
          eyebrow: "Task 1",
          title: "Complete the sentences.",
          text: "Ukraine is divided into 24 {*oblasts|states}, and each of them is divided into raions. The Autonomous Republic of Crimea is an integral {*part|oblast} of Ukraine. Kyiv and Sevastopol are cities with special {*status|power}.",
          pre: "e10s7l1",
          hint: "What are the 24 regions called? What does the Constitution call Crimea?",
          fbOk: "Yes!",
          fbBad: "Remember Article 133 and Article 134 of the Constitution.",
          fbText: "24 <b>oblasts</b>; Crimea is an integral <b>part</b> of Ukraine; Kyiv and Sevastopol are cities with special <b>status</b>."
        },
        {
          type: "match",
          sk: "cult",
          eyebrow: "Task 2",
          title: "Match the halves.",
          left: ["The Verkhovna Rada", "The President of Ukraine", "The Cabinet of Ministers"],
          right: ["is the only body that makes laws.", "is the head of state.", "runs the country every day."],
          pre: "e10s7l2",
          hint: "Which one is the parliament?",
          fbOk: "Right.",
          fbBad: "Parliament → laws; head of state → the President.",
          fbText: "The <b>Verkhovna Rada</b> makes the laws. The <b>President</b> is the head of state. The <b>Cabinet of Ministers</b> runs the country every day."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 3",
          title: "Choose the correct answer.",
          body: `<p>Which sentence about the UK is true?</p>`,
          opts: [
            "The King leads the government.",
            "The members of the House of Lords are not elected.",
            "The House of Commons has 450 MPs."
          ],
          correct: 1,
          pre: "e10s7l3",
          hint: "Who leads the UK government? How many MPs has the House of Commons got?",
          fbOk: "Exactly.",
          fbBad: "The Prime Minister leads the government. The Commons has 650 MPs.",
          fbText: "The members of the <b>House of Lords</b> are not elected. The Prime Minister leads the government, and the House of Commons has 650 MPs (450 is the Verkhovna Rada)."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Write the missing word.",
          body: `<p>The winds near the UK coasts are very strong.</p>`,
          before: "The UK coasts are",
          after: "windy that wind farms make a lot of electricity there.",
          answer: ["so"],
          pre: "e10s7l4",
          hint: "windy is an adjective, and there is no noun after it.",
          fbOk: "Well done!",
          fbBad: "adjective + that → …",
          fbText: "The UK coasts are <b>so</b> windy that wind farms make a lot of electricity there: so + adjective + that."
        },
        {
          type: "multi",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Choose all the correct answers.",
          body: `<p>… the storm, the ferry didn’t sail.</p><p>Which words can start the sentence?</p>`,
          opts: [
            "Due to",
            "Therefore",
            "Owing to",
            "Because of"
          ],
          correct: [0, 2, 3],
          pre: "e10s7l5",
          hint: "The storm is a noun. Does therefore show a reason or a result?",
          fbOk: "Well done!",
          fbBad: "Three answers are correct. Therefore shows a result.",
          fbText: "<b>Due to</b>, <b>Owing to</b>, <b>Because of</b> + noun give the reason. <i>Therefore</i> shows a result, and it doesn’t go before a noun."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Fill in the gaps.",
          text: "Ukraine has fertile soil. {*Therefore|Because}, it grows a lot of grain. The ferry didn’t sail {*because|due to} the waves were too high. Emma is saving money so {*that|than} she can visit Kyiv one day.",
          pre: "e10s7l5",
          hint: "A result after a full stop; a subject and a verb after the gap; a purpose with can.",
          fbOk: "Exactly.",
          fbBad: "Therefore → result; because + subject + verb; so that → purpose.",
          fbText: "<b>Therefore</b>, it grows… (a result); <b>because</b> the waves were… (subject + verb); so <b>that</b> she can visit Kyiv (a purpose)."
        },
        {
          type: "gaps",
          sk: "cult",
          eyebrow: "Task 7",
          title: "Complete the sentences.",
          text: "Ukraine’s Independence Day is on {*24 August|28 June}. In Scotland, St Andrew’s Day is on {*30 November|17 March}. In the UK, public holidays are usually called {*bank|state} holidays.",
          pre: "e10s7l6",
          hint: "28 June is Constitution Day. 17 March is St Patrick’s Day.",
          fbOk: "Yes!",
          fbBad: "Remember the lists of holidays in Ukraine and the UK.",
          fbText: "Independence Day – <b>24 August</b>; St Andrew’s Day – <b>30 November</b>; in the UK – <b>bank</b> holidays."
        },
        {
          type: "info",
          eyebrow: "Reading",
          title: "The main article: “Two countries”",
          body: `<p>Andrii and Emma wrote the main article for the website together. It has three parts: power, natural resources and public holidays.</p><p>Read each part and answer the question under it.</p>`,
          cta: "Start reading"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 8 · Reading: Two countries, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i>Ukraine and the UK both have a parliament and a Prime Minister, but they are organised in different ways. Ukraine is a republic. Its head of state is the President, and the people elect him or her for five years. The laws are made by the Verkhovna Rada, the parliament. Under the Constitution, it has 450 MPs. The Cabinet of Ministers, led by the Prime Minister, runs the country every day. The country is divided into 24 oblasts, the Autonomous Republic of Crimea and two cities with special status, Kyiv and Sevastopol. Russia has occupied Crimea since 2014, but Crimea is still an integral part of Ukraine.</i></p><p>Who makes the laws in Ukraine?</p>`,
          opts: [
            "the Cabinet of Ministers",
            "the oblasts",
            "the Verkhovna Rada"
          ],
          correct: 2,
          pre: "e10s7l2",
          hint: "Find the word laws in the text.",
          fbOk: "Right.",
          fbBad: "Read the sentence with the word laws.",
          fbText: "“The laws are made by the <b>Verkhovna Rada</b>, the parliament.” The Cabinet of Ministers runs the country every day."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 9 · Reading: Two countries, part 2 of 3",
          title: "Read and choose.",
          body: `<p><i>The UK is a constitutional monarchy. Its head of state is King Charles III, but he has very little power. Parliament in London makes the laws. It has two houses: the House of Commons, with 650 elected MPs, and the House of Lords, whose members are not elected. Scotland, Wales and Northern Ireland also have their own parliaments for questions like schools and hospitals. Both countries are rich in natural resources. Ukraine has such fertile soil that it is one of the world’s biggest exporters of sunflower oil. In the past, coal from British mines gave power to factories and trains, but the last deep coal mine closed in 2015. Today, the UK coasts are so windy that wind farms make a lot of the country’s electricity.</i></p><p>Why do wind farms make a lot of the UK’s electricity?</p>`,
          opts: [
            "because of its oil under the North Sea",
            "because its coasts are very windy",
            "due to its fertile soil"
          ],
          correct: 1,
          pre: "e10s7l4",
          hint: "Find the sentence with so … that about the UK.",
          fbOk: "Exactly.",
          fbBad: "Read the last sentence of the text.",
          fbText: "“The UK coasts are <b>so windy that</b> wind farms make a lot of the country’s electricity.” The fertile soil is about Ukraine."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 10 · Reading: Two countries, part 3 of 3",
          title: "Read and choose.",
          body: `<p><i>Both countries have public holidays. In Ukraine, they are listed in the Labour Code. Independence Day is on 24 August because Ukraine declared independence on that day in 1991. Constitution Day, on 28 June, remembers the day in 1996 when the Verkhovna Rada adopted the Constitution. Since 2023, Christmas has been a public holiday only on 25 December. In the UK, public holidays are usually called bank holidays: banks and most businesses close on these days. Christmas Day and Boxing Day are bank holidays everywhere in the UK. But Scotland also has St Andrew’s Day, and Northern Ireland has St Patrick’s Day. Therefore, the number of bank holidays is different in different parts of the UK.</i></p><p>Why do different parts of the UK have different numbers of bank holidays?</p>`,
          opts: [
            "Banks in London close on different days.",
            "Due to the weather in Scotland.",
            "Scotland and Northern Ireland have their own extra bank holidays."
          ],
          correct: 2,
          pre: "e10s7l6",
          hint: "Look at the sentences before Therefore.",
          fbOk: "Well done!",
          fbBad: "Therefore shows the result. The reason comes just before it.",
          fbText: "Scotland has <b>St Andrew’s Day</b>, and Northern Ireland has <b>St Patrick’s Day</b>. <b>Therefore</b>, the number of bank holidays is different."
        }
      ],
      outro: {
        text: "You can now explain how Ukraine and the UK are governed, describe their natural resources and holidays, and give reasons and results.",
        learned: [
          "Explain how Ukraine and the UK are organised and governed.",
          "Describe natural resources with so … that and such … that.",
          "Give reasons, results and purposes: due to, owing to, therefore, so that.",
          "Talk about public holidays in Ukraine and the UK."
        ]
      }
    }
  ]
});
