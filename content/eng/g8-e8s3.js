/* Слід · Англійська мова, 8 клас — «The media: the internet and the press» (e8s3)
   Програма: МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021), 8 кл.: тема «Засоби масової інформації» — Інтернет,
   преса, періодичні видання (PDF с. 32, розд. 5.2.2); функції — оцінювати стан речей і факти, визначати, чи стаття
   відповідає темі (с. 28); граматика B1 (с. 34–35): Passives — Present continuous; Reported statements (з узгодженням
   часів); повторення — Present / Past Simple passive (e6s3l2, e6s7l3), said / told (e6s8l5), Present Continuous (e4s6l2);
   розподіл — content/eng/plan.js, reports/verify/plan-eng-g7-8-9.md, reports/verify/curate-eng-plan-g7-9.md:
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Backshift необов'язковий, якщо сказане досі правда (CD Grammar «Reported speech: indirect speech» —
   https://dictionary.cambridge.org/grammar/british-grammar/reported-speech-indirect-speech): у пропусках варіант без
   backshift не дається, коли він теж правильний; там, де ситуація досі правда, — обидва в ключі (l4, екран 7).
   Новини, видання й сайти — вигадані (Lviv Today, School 5 News…); справжні ЗМІ не оцінюються. Діалоги — репліками в body
   (D-056), без звуку (D-055 п. 4). Написання «the internet» — як в OALD і CD (заголовне слово з малої), як у e6s7l3.
   Герої — серія 4–7 кл., на чотири роки старші, ніж у 4 кл. (memory/short/inbox.md, NOTE (герої)); нові: Ms Kvitka
   (директорка школи Тараса, Lviv), Mr Pavliuk (бібліотекар тієї ж школи).
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e8s3, reports/verify/write-eng-g8-e8s3.md). 7 уроків (6 + фінал). Будова — за розділами 6 кл. (verified) і 7 кл. (e7s5).
   Перевірка: node tools/validate.mjs --section e8s3 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e8s3",
  grade: 8,
  weeks: [9, 13],
  title: "The media: the internet and the press",
  why: "To talk about newspapers, magazines and news websites. And to report what other people said.",
  requires: ["e4s6l2", "e6s3l2", "e6s7l3", "e6s8l5"],
  meta: { author: "writer-e8s3", created: "2026-11-25", factcheck: "verifier-e8s3 (reports/verify/write-eng-g8-e8s3.md)", teacher: null },
  badges: [
    { id: "e8s3boss", name: "Young reporter", icon: "trophy", desc: "Finish the final lesson “The media: the internet and the press”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e8s3l1",
      title: "Newspapers, magazines and news websites",
      short: "The press",
      icon: "book",
      status: "verified",
      why: "Where do you get your news? Learn the words for newspapers, magazines and news websites.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Where do you get your news?",
          body: `<p class="lead">This month, the penfriend club asks: “Where do you get your news?”</p><p><b>Emma:</b> My grandad reads a paper with his tea each morning. I read a weekly magazine about animals.<br><b>Taras:</b> I read a news website about Lviv. And I take photos for our school newspaper!<br><b>Oksana:</b> There’s no newspaper in our village, so I read the news online.<br><b>Andrii:</b> I read a chess magazine. It comes out every month.</p><p>A newspaper, a magazine, a news website: what’s the difference?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma reads a <b>weekly</b> magazine.</p><p>How often does it come out?</p>`,
          opts: [
            "every day",
            "every week",
            "every month"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Weekly</b> means every week. A new magazine comes out every week. The next screen has more words."
        },
        {
          type: "info",
          title: "The press and the internet",
          body: `<ul><li>a <b>newspaper</b> → news on paper</li><li>a <b>magazine</b> → articles and photos, often about one topic: animals, sport, chess</li><li>a <b>news website</b> → news on the internet, new stories all day</li><li><b>daily</b> = every day, <b>weekly</b> = every week, <b>monthly</b> = every month</li></ul><p><b>the press</b> = newspapers and magazines</p><p><u>news</u>paper, maga<u>zine</u>, <u>web</u>site</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["A daily newspaper comes out", "A monthly magazine comes out", "A news website has", "A chess magazine has"],
          right: ["every day.", "every month.", "new stories all day.", "articles about one topic."],
          hint: "Daily, monthly: how often? Which one is about one topic?",
          fbOk: "Good eye!",
          fbBad: "Look at the first list of words again.",
          fbText: "A <b>daily</b> newspaper comes out every day. A <b>monthly</b> magazine comes out every month. A news <b>website</b> has new stories all day. A chess <b>magazine</b> is about one topic."
        },
        {
          type: "info",
          title: "Who makes the news?",
          body: `<ul><li>a <b>headline</b> → the title of a news story, in big letters</li><li>an <b>article</b> → a text in a newspaper, a magazine or on a website</li><li>a <b>journalist</b> → writes articles</li><li>a <b>reporter</b> → a journalist who finds the news and reports it</li><li>a <b>photographer</b> → takes photos</li></ul><p><u>head</u>line, <u>ar</u>ticle, <u>jour</u>nalist, re<u>por</u>ter</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Taras writes about his school newspaper in Lviv.</p>`,
          text: "Our school newspaper comes out every month: it’s a {*monthly|daily|weekly}. Myroslava writes {*articles|photographers|newspapers} about sport. I take the photos: I’m the {*photographer|headline|article}. Each story has a {*headline|journalist|website}: a short title in big letters.",
          hint: "Every month → ? A short title in big letters → ?",
          fbOk: "Exactly.",
          fbBad: "Look at the two lists of words again.",
          fbText: "Every month: a <b>monthly</b>. Myroslava writes <b>articles</b>. Taras takes photos: he’s the <b>photographer</b>. A short title in big letters is a <b>headline</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+news|pa|per", "ma|ga|+zine", "+jour|na|list", "re|+por|ter"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts in the rules.",
          fbText: "<u>news</u>paper, maga<u>zine</u>, <u>jour</u>nalist, re<u>por</u>ter."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>This person writes articles for a newspaper or a news website.</p>`,
          before: "He’s a",
          after: ".",
          answer: ["journalist", "reporter", "writer"],
          hint: "Look at the list “Who makes the news?”.",
          fbOk: "Yes!",
          fbBad: "Who writes articles? Find it in the list.",
          fbText: "A <b>journalist</b> writes articles. A <b>reporter</b> is a journalist too. <i>Writer</i> is also correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma answers Taras.</p>`,
          text: "Hi Taras! I read a {*weekly|daily|monthly} magazine about animals: a new one comes out every Friday. My favourite {*articles|journalists|photographers} are about sea animals. They’re written by a {*journalist|website|headline} who lives by the sea. The photos are great too. I’d like to be a {*photographer|newspaper|magazine} like you!",
          hint: "Every Friday → how often? Who writes? Who takes photos?",
          fbOk: "Well done!",
          fbBad: "Check: every Friday = every week; a person writes the articles.",
          fbText: "Every Friday: a <b>weekly</b> magazine. Emma likes the <b>articles</b>. They’re written by a <b>journalist</b>. Taras takes photos: he’s a <b>photographer</b>."
        }
      ],
      outro: {
        text: "Newspapers and magazines are the press. News websites bring us news on the internet all day.",
        learned: [
          "Name the media: a newspaper, a magazine, a news website.",
          "Say how often they come out: daily, weekly, monthly.",
          "Talk about the people and the parts: a journalist, an article, a headline."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e8s3l2",
      title: "Is it true? Reading the news online",
      short: "Is it true?",
      icon: "eye",
      status: "verified",
      why: "Not every post on the internet is true. Learn some easy ways to check the news.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "No school for a month?",
          body: `<p class="lead">Oksana’s brother Dmytro runs into the kitchen with his phone.</p><p><b>Dmytro:</b> Look! “ALL SCHOOLS CLOSED FOR A MONTH!” It’s on the internet!<br><b>Oksana:</b> Wait a minute. Who wrote it? When? There’s no name and no date.<br><b>Dmytro:</b> But it’s online, so it’s true!<br><b>Oksana:</b> Let’s check our school website first.</p><p>How can you check a story on the internet?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>What is the best thing to do with Dmytro’s post?</p>`,
          opts: [
            "Check who wrote it and when.",
            "Send it to all your friends.",
            "Believe it: it’s on the internet."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good thinking!",
          fbText: "First <b>check</b> who wrote it and when. Oksana checked the school website: school was open. The post wasn’t true."
        },
        {
          type: "info",
          title: "Check the news",
          body: `<p>Ask four questions:</p><ul><li><b>Who</b> wrote it? Is there a name?</li><li><b>When</b> was it written? Look for the date.</li><li>Is the story on <b>other</b> news websites too?</li><li>Does the article <b>match</b> the headline?</li></ul><p>Can’t check it? Then don’t <b>share</b> it. (share = send to other people)</p>`,
          cta: "Next"
        },
        {
          type: "multi",
          sk: "read",
          title: "Choose all the correct answers.",
          body: `<p>Which questions help you check a news story?</p>`,
          opts: [
            "Who wrote it?",
            "When was it written?",
            "How many likes has it got?",
            "Is it on other news websites too?"
          ],
          correct: [0, 1, 3],
          hint: "Look at the four questions on the last screen.",
          fbOk: "Well done!",
          fbBad: "Lots of likes don’t make a story true.",
          fbText: "Check the <b>writer</b>, the <b>date</b> and <b>other news websites</b>. A post with lots of likes can still be wrong."
        },
        {
          type: "info",
          title: "Fact or opinion?",
          body: `<ul><li>a <b>fact</b> → you can check it: <i>The museum opens at 10 am.</i></li><li>an <b>opinion</b> → what someone thinks or feels: <i>The museum is really boring.</i></li></ul><p>Opinions often have <i>I think</i>, <i>the best</i>, <i>beautiful</i>, <i>boring</i>.</p><p>A good article shows which is which. <i>She thinks</i> … – that’s an opinion.</p><p>o<u>pin</u>ion</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "read",
          title: "Sort the sentences.",
          body: `<p>Fact or opinion?</p>`,
          bins: ["fact", "opinion"],
          items: [
            ["The park is two kilometres from the station.", 0],
            ["The concert starts at 7 pm.", 0],
            ["The library is open on Sundays.", 0],
            ["It’s the most beautiful park in Lviv.", 1],
            ["I think the concert will be boring.", 1],
            ["This film is really funny.", 1]
          ],
          hint: "Can you check it? Then it’s a fact.",
          fbOk: "Good eye!",
          fbBad: "Can you check it with a map or a timetable? Or is it what someone thinks?",
          fbText: "Facts: two kilometres, 7 pm, open on Sundays – you can check them. Opinions: <i>the most beautiful</i>, <i>I think … boring</i>, <i>really funny</i> – that’s what someone thinks."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Mariia finds this on a news website about Kharkiv.</p><p><b>New ice rink opens in Kharkiv</b><br><i>A new café opened in the city centre on Saturday. It sells cakes, hot chocolate and ice cream. It’s open every day from 9 am to 9 pm. There’s a small ice rink next to the café.</i></p><p>Does the article match the headline?</p>`,
          opts: [
            "Yes. It’s all about the new ice rink.",
            "No. It’s mostly about a new café.",
            "No. It’s about a café in Lviv."
          ],
          correct: 1,
          hint: "What are most of the sentences about?",
          fbOk: "Right.",
          fbBad: "Count the sentences about the café and about the ice rink.",
          fbText: "The headline is about an <b>ice rink</b>, but most of the article is about a <b>café</b>. Only one sentence is about the rink. The article doesn’t match the headline."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>“The museum is closed on Mondays.” You can check this on the museum’s website.</p>`,
          before: "So it’s a",
          after: ".",
          answer: "fact",
          hint: "You can check it. Fact or opinion?",
          fbOk: "Exactly.",
          fbBad: "Can you check it? Look at the rule screen “Fact or opinion?”.",
          fbText: "You can check it, so it’s a <b>fact</b>. An opinion is what someone thinks."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes to Dmytro after she checks the post.</p>`,
          text: "Dmytro, I checked the post. There’s no {*date|headline|photographer}, so we don’t know when it was written. We don’t know who {*wrote|written|write} it. And it isn’t on {*other|another|an other} news websites. Our school website says school is open tomorrow. So the post isn’t {*true|an opinion|a headline}. Please don’t {*share|believe|tell} it with your friends!",
          hint: "When? → the date. Who? → wrote. Don’t send it to other people → ?",
          fbOk: "Well done!",
          fbBad: "Look at the four questions and the last line of the rule.",
          fbText: "No <b>date</b>: we don’t know when. We don’t know who <b>wrote</b> it. It isn’t on <b>other</b> websites. So it isn’t <b>true</b>. Don’t <b>share</b> it = don’t send it to other people."
        }
      ],
      outro: {
        text: "Before you believe a story or share it, check the writer, the date and other news websites.",
        learned: [
          "Check a news story: who wrote it, when, and is it on other websites.",
          "Tell a fact from an opinion.",
          "Say if an article matches its headline."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e8s3l3",
      title: "A new park is being built: news reports",
      short: "Is being built",
      icon: "city",
      status: "verified",
      why: "News reports often tell us about work that is happening now. Learn to say: A new park is being built.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "What’s happening in Lviv?",
          body: `<p class="lead">Taras reads <b>Lviv Today</b>, a news website for young people.</p><p><b>Big changes next to the station</b><br><i>A new park is being built next to the station. This week, two hundred trees are being planted. The old bridge is being repaired, so it’s closed until May.</i></p><p>Is the park ready, or is the work happening now?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“A new park <b>is being built</b>.” What does it mean?</p>`,
          opts: [
            "The park is ready.",
            "People are building the park now.",
            "People built the park last year."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Is being built</b> = people are building it now. The park isn’t ready yet."
        },
        {
          type: "info",
          title: "It is being built",
          body: `<p>Workers <b>are building</b> a park. →<br>A park <b>is being built</b>.</p><ul><li>one → <b>is being</b> + third form: The bridge <b>is being repaired</b>.</li><li>two or more → <b>are being</b> + third form: Trees <b>are being planted</b>.</li></ul><p>build – built – <b>built</b>, plant – planted – <b>planted</b></p><p>This is the <b>Present Continuous passive</b>. It’s happening now. The news is about the thing, not the workers.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>More news from Lviv Today.</p>`,
          text: "The old bridge {*is|are|am} being repaired. New benches {*are|is|am} being made for the park. The station {*is being|are being|being} painted this month. Two new playgrounds {*are being built|are building|is being built} next to the river.",
          hint: "One thing → is being. Two or more → are being.",
          fbOk: "Exactly.",
          fbBad: "Is it one thing or two or more? Then: is / are + being + third form.",
          fbText: "The bridge <b>is</b> being repaired. Benches <b>are</b> being made. The station <b>is being</b> painted. Playgrounds <b>are being built</b>: the workers build them, the playgrounds don’t build anything."
        },
        {
          type: "info",
          title: "Is built, was built, is being built",
          body: `<ul><li>Bread <b>is made</b> here every day. → always, often</li><li>The bridge <b>was built</b> in 1900. → in the past</li><li>The bridge <b>is being repaired</b>. → now</li></ul><p><b>not</b>: The park <b>isn’t being</b> built now.<br><b>?</b>: <b>Is</b> the bridge <b>being</b> repaired? <b>What is being</b> built?</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Workers are painting Andrii’s school right now. What does the school website say?</p>`,
          opts: [
            "Our school is painted every day.",
            "Our school was painted in 1990.",
            "Our school is being painted."
          ],
          correct: 2,
          hint: "Right now → is being + third form.",
          fbOk: "Right.",
          fbBad: "Is it happening every day, in the past or now?",
          fbText: "It’s happening now: our school <b>is being painted</b>. <i>Is painted every day</i> – always; <i>was painted</i> – in the past."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Taras’s message is wrong.</p>`,
          text: "A new sports hall [!is] being built at our school. The windows [is] being cleaned. The old doors [!are] being painted.",
          hint: "The windows: one or two or more?",
          fbOk: "Good eye!",
          fbBad: "Look at windows: is or are?",
          fbText: "<i>Windows</i> – two or more, so: The windows <b>are</b> being cleaned. <i>A new sports hall is</i> and <i>the old doors are</i> are correct."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>The workers are repairing the bridge now.</p>`,
          before: "The bridge is",
          after: "repaired, so it’s closed.",
          answer: "being",
          hint: "is + ? + third form",
          fbOk: "Well done!",
          fbBad: "Now: is + … + repaired.",
          fbText: "The bridge is <b>being</b> repaired: is + being + third form."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Emma asks Taras about the work next to the station.</p>`,
          tiles: ["What", "is", "being", "built", "next to", "the station"],
          extra: ["been"],
          answer: "What is being built next to the station?",
          keepCase: true,
          hint: "A question: What + is + being + third form…",
          fbOk: "Yes!",
          fbBad: "Start with What. Then is + being (not been) + built.",
          fbText: "<b>What is being built next to the station?</b> – A new park is being built."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes to Emma.</p>`,
          text: "Big news from Lviv! A new park {*is being built|is building|are being built} next to the station. This week, two hundred trees {*are being planted|are planting|is being planted}. The old bridge {*is being repaired|is repairing|repairs}, so we can’t use it now. It {*was built|is being built|builds} in 1900, so it’s very old!",
          hint: "Now → is / are being + third form. In 1900 → was + third form.",
          fbOk: "Well done!",
          fbBad: "Check: now or in 1900? One or two or more?",
          fbText: "Now: a park <b>is being built</b>, trees <b>are being planted</b>, the bridge <b>is being repaired</b>. In the past: it <b>was built</b> in 1900."
        }
      ],
      outro: {
        text: "Is being built, are being planted: we use this for work that is happening now.",
        learned: [
          "Say what is being done now: A new park is being built.",
          "Ask about it: What is being built?",
          "Choose between is built, was built and is being built."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e8s3l4",
      title: "She said she was tired: reported statements",
      short: "She said…",
      icon: "voice",
      status: "verified",
      why: "Reporters tell us what other people said. Learn how the verb changes: She said she was tired.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Andrii’s question",
          body: `<p class="lead">Andrii is writing an article for his school newspaper in Kyiv. On Monday, he asks his friends: “How do you get your news?”</p><p><b>Zoriana:</b> I look at news websites every day.<br><b>Bohdan:</b> I don’t read the news. I’m too tired after school!<br><b>Kyrylo:</b> I’m reading a history magazine.</p><p>On Friday, Andrii writes: <i>Zoriana said she <b>looked</b> at news websites every day. Bohdan said he <b>didn’t</b> read the news. He said he <b>was</b> too tired.</i></p><p>What happens to the verbs?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Kyrylo: “I’m reading a history magazine.”</p><p>Andrii writes: Kyrylo said he … a history magazine.</p>`,
          opts: [
            "am reading",
            "was reading",
            "were reading"
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "Kyrylo said he <b>was reading</b> a history magazine. <i>Am reading</i> goes back to <i>was reading</i>. The next screen shows the rule."
        },
        {
          type: "info",
          title: "Reported statements",
          body: `<p>He said (that) … – the verb often goes back:</p><ul><li>am / is → <b>was</b>; are → <b>were</b></li><li>look → <b>looked</b>; don’t → <b>didn’t</b></li><li>am reading → <b>was reading</b></li><li>can → <b>could</b></li></ul><p>Bohdan: “I<b>’m</b> tired.” → Bohdan said he <b>was</b> tired.</p><p>Remember: I → he / she, my → his / her.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "gram",
          title: "Match the halves.",
          body: `<p>Daryna talked to Andrii on Monday. What did she say?</p>`,
          left: ["“I’m tired.”", "“I can swim.”", "“I’m reading.”", "“I don’t know.”"],
          right: ["She said she was tired.", "She said she could swim.", "She said she was reading.", "She said she didn’t know."],
          hint: "Find the same words in the reported sentence: tired, swim, reading, know.",
          fbOk: "Good eye!",
          fbBad: "am → was, can → could, don’t → didn’t.",
          fbText: "“I’m tired.” → she <b>was</b> tired. “I can swim.” → she <b>could</b> swim. “I’m reading.” → she <b>was reading</b>. “I don’t know.” → she <b>didn’t</b> know."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Last Monday, Zoriana said: “I’m in the IT club. We’re making a robot. I can’t come to the park today.”</p>`,
          text: "Zoriana said she {*was|were|am} in the IT club. She said they {*were making|was making|are make} a robot. She said she {*couldn’t|can’t not|couldn’t to} come to the park that day.",
          hint: "am → was, are making → were making, can’t → couldn’t.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: the verb goes back.",
          fbText: "She said she <b>was</b> in the IT club. They <b>were making</b> a robot. She <b>couldn’t</b> come to the park that day."
        },
        {
          type: "info",
          title: "Is it still true?",
          body: `<p>Is it still true now? Then you can keep the present too:</p><ul><li>Kyrylo: “I love history.” (He still loves it.)</li><li>→ Kyrylo said he <b>loved</b> history. (correct)</li><li>→ Kyrylo said he <b>loves</b> history. (correct too)</li></ul><p>In a story about the past, use the past: <i>Last Monday, Bohdan said he <b>was</b> tired.</i></p>`,
          cta: "Next"
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Zoriana: “My favourite subject is IT.” It’s still true now.</p><p>What can Andrii write?</p>`,
          opts: [
            "Zoriana said her favourite subject was IT.",
            "Zoriana said her favourite subject is IT.",
            "Zoriana said my favourite subject was IT.",
            "Zoriana said her favourite subject were IT."
          ],
          correct: [0, 1],
          hint: "It’s still true. Look at the rule screen “Is it still true?”. And my → ?",
          fbOk: "Well done!",
          fbBad: "Still true: two sentences are correct. Check my → her and was / were.",
          fbText: "It’s still true, so <b>was</b> and <b>is</b> are both correct. <i>My</i> changes to <b>her</b>. <i>Subject were</i> is wrong: one subject → was."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Andrii’s notes is wrong.</p>`,
          text: "Kyrylo [!said] he [were] reading a history magazine. He told me it [!was] really interesting.",
          hint: "he → was or were?",
          fbOk: "Good eye!",
          fbBad: "Look at he: was or were?",
          fbText: "He <b>was</b> reading: <i>he</i> → was. <i>Said</i> and <i>it was</i> are correct."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>On Monday, Bohdan said: “I can’t find my phone.” Later, he found it in his bag.</p>`,
          before: "On Monday, Bohdan said he",
          after: "find his phone.",
          answer: ["couldn’t", "could not"],
          hint: "can’t → ?",
          fbOk: "Right.",
          fbBad: "Look at the rule: can → could.",
          fbText: "can’t → <b>couldn’t</b>. Bohdan found his phone later, so it isn’t true now: use the past."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii’s article for the school newspaper.</p>`,
          text: "How do you get your news? Last Monday, I asked my friends. Zoriana said she {*looked|look|looking} at news websites every day. Bohdan said he {*didn’t|don’t|not} read the news. He said he {*was|were|am} too tired after school! Kyrylo said he {*was reading|were reading|was read} a history magazine. And Daryna told me she {*could|could to|coulds} find any news on her phone in two minutes.",
          hint: "Look → looked, don’t → didn’t, am → was, can → could.",
          fbOk: "Well done!",
          fbBad: "Check: he and she → was; the verb goes back.",
          fbText: "Zoriana said she <b>looked</b>. Bohdan said he <b>didn’t</b> read and he <b>was</b> tired. Kyrylo said he <b>was reading</b>. Daryna told me she <b>could</b> find any news."
        }
      ],
      outro: {
        text: "When we report what people said, the verb often goes back: am → was, can → could.",
        learned: [
          "Report what people said: She said she was tired.",
          "Change the verb: is → was, don’t → didn’t, can → could.",
          "Keep the present when it’s still true: He said he loves history."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e8s3l5",
      title: "He told us that…: reporting the news",
      short: "Said or told",
      icon: "users",
      status: "verified",
      why: "Report school news to a friend. Use said and told in the right way.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "News from Ms Lysenko",
          body: `<p class="lead">In the English lesson, Ms Lysenko says: “Our school newspaper needs a new photographer. The first meeting is on Friday.”</p><p>After school, Andrii writes to Oksana:</p><p><i>Ms Lysenko <b>told us</b> that our newspaper needed a new photographer. She <b>said</b> that the first meeting was on Friday.</i></p><p>Told us, said: what comes after each word?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Remember?",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "Ms Lysenko told that the meeting was on Friday.",
            "Ms Lysenko told us that the meeting was on Friday.",
            "Ms Lysenko said us that the meeting was on Friday."
          ],
          correct: 1,
          hint: "After told: a person. After said: no person.",
          fbOk: "Yes!",
          fbBad: "Remember: told + a person.",
          fbText: "<b>told us</b> – told + a person. Not <s>told that</s>, not <s>said us</s>."
        },
        {
          type: "info",
          title: "Said and told",
          body: `<ul><li><b>told</b> + a person + (that) …: She <b>told us</b> (that) the meeting was on Friday.</li><li><b>said</b> + (that) …: She <b>said</b> (that) the meeting was on Friday.</li><li>You can also say <b>said to</b> + a person: She <b>said to us</b> that…</li></ul><p>Not: <s>said us</s>, <s>told that</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Andrii tells Oksana more about the meeting.</p>`,
          text: "Ms Lysenko {*told|said} us about the newspaper. She {*said|told} that it came out every month. Then she {*told|said} Daryna that she could take photos for it. Daryna {*said|told} that she was very happy.",
          hint: "Is there a person after the gap?",
          fbOk: "Exactly.",
          fbBad: "A person after the gap: told. No person: said.",
          fbText: "<b>Told us</b>, <b>told Daryna</b> – a person after <i>told</i>. She <b>said that</b>, Daryna <b>said that</b> – no person after <i>said</i>."
        },
        {
          type: "info",
          title: "We → they, our → their",
          body: `<p>Reporters often tell the words of two or more people:</p><ul><li>The players: “<b>We</b> are tired.”<br>→ The players said <b>they were</b> tired.</li><li>Two journalists: “<b>Our</b> article is about Kyiv.”<br>→ They told me <b>their</b> article <b>was</b> about Kyiv.</li></ul><p>we → <b>they</b>, our → <b>their</b>; the verb goes back.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Two reporters from Lviv Today: “We’re writing an article about the new park.”</p><p>What did they say?</p>`,
          opts: [
            "They said they were writing an article about the new park.",
            "They told that they were writing an article about the new park.",
            "They said we were writing an article about the new park."
          ],
          correct: 0,
          hint: "we → ? And said or told without a person?",
          fbOk: "Right.",
          fbBad: "Check two things: we → they, and told needs a person.",
          fbText: "They said <b>they were</b> writing an article. <i>Told that</i> has no person, and <i>we</i> must change to <b>they</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Write <b>said</b> or <b>told</b>.</p>`,
          before: "Mariia",
          after: "me that she was drawing a comic for a magazine.",
          answer: "told",
          hint: "Is there a person after the gap?",
          fbOk: "Well done!",
          fbBad: "Look: me comes after the gap.",
          fbText: "<b>Me</b> is a person, so: Mariia <b>told</b> me that she was drawing a comic."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Andrii’s message is wrong.</p>`,
          text: "Zoriana [told] that she wanted to write about IT. Ms Lysenko [!told her] that it was a great idea.",
          hint: "told + a person: is there a person?",
          fbOk: "Good eye!",
          fbBad: "Which told has no person after it?",
          fbText: "There’s no person after the first <i>told</i>. Say: Zoriana <b>said</b> that she wanted to write about IT. <i>Told her</i> is correct."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Ms Lysenko: “The meeting is in Room 12.” Andrii reports her words to Daryna.</p>`,
          tiles: ["Ms Lysenko", "told", "us", "that", "the meeting", "was", "in Room 12"],
          extra: ["said"],
          answer: "Ms Lysenko told us that the meeting was in Room 12.",
          hint: "told + a person + that…",
          fbOk: "Yes!",
          fbBad: "There’s a person (us), so: told us that…",
          fbText: "<b>Ms Lysenko told us that the meeting was in Room 12.</b> told + us; is → was."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Hi Oksana! Big news from our school newspaper. Ms Lysenko told us that the newspaper needed a new photographer. Daryna said she wanted to try. She told me she had a good camera. Zoriana said she was writing an article about robots. And Bohdan said he was too busy! – Andrii</i></p><p>Who wants to be the new photographer?</p>`,
          opts: [
            "Zoriana",
            "Bohdan",
            "Daryna"
          ],
          correct: 2,
          hint: "Find photographer and want in the message.",
          fbOk: "Good eye!",
          fbBad: "Who said she wanted to try?",
          fbText: "The newspaper needed a photographer. <b>Daryna</b> said she wanted to try: she has a good camera. Zoriana writes an article, and Bohdan is too busy."
        }
      ],
      outro: {
        text: "Told + a person, said without a person. And when you report, we → they and the verb goes back.",
        learned: [
          "Use told + a person and said: She told us that…, She said that…",
          "Report the words of two or more people: They said they were…",
          "Tell a friend about school news."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e8s3l6",
      title: "Our school newspaper: a short article",
      short: "An article",
      icon: "scroll",
      status: "verified",
      why: "Read an article from a school newspaper. See how a good article is built.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "This month’s article",
          body: `<p class="lead">Taras’s school in Lviv has a newspaper, <b>School 5 News</b>. It comes out every month.</p><p>This month, Myroslava writes the main article. Taras takes the photos.</p><p>What makes a good newspaper article?</p>`,
          cta: "Let’s read"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: A new life for our library, part 1 of 2",
          title: "Read and choose.",
          body: `<p><b>A new life for our library</b><br><i>by Myroslava, photos by Taras</i></p><p><i>Our school library is changing. This month, the walls are being painted and new shelves are being built. More than 2,000 books are being moved to a bigger room. The work started on 1 October. Our head teacher, Ms Kvitka, told us that the old library was too small and too dark. She said that students needed a bright, quiet place to read and study.</i></p><p>Why is the library being changed?</p>`,
          opts: [
            "It had no books.",
            "It was too small and too dark.",
            "It was too noisy."
          ],
          correct: 1,
          hint: "Find what Ms Kvitka told the students.",
          fbOk: "Yes!",
          fbBad: "Read what Ms Kvitka said again.",
          fbText: "Ms Kvitka told them that the old library was <b>too small and too dark</b>. Students need a bright, quiet place."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: A new life for our library, part 2 of 2",
          title: "Choose all the correct answers.",
          body: `<p><i>What will be new? Our librarian, Mr Pavliuk, said that the new library was going to have six computers and a corner for comics. He told us that students could borrow two books a week. Not everyone is happy. One boy from our class said he missed the old sofa! But most students told us that they couldn’t wait. The new library opens on 1 December. Come and see it!</i></p><p>What do we learn about the new library?</p>`,
          opts: [
            "It’s going to have six computers.",
            "It’s going to have a corner for comics.",
            "It opens on 1 October.",
            "Everyone is happy about it."
          ],
          correct: [0, 1],
          hint: "Read what Mr Pavliuk said. When does it open?",
          fbOk: "Well done!",
          fbBad: "Check the date and “Not everyone is happy”.",
          fbText: "Mr Pavliuk said it was going to have <b>six computers</b> and <b>a corner for comics</b>. It opens on 1 December. Not everyone is happy: one student misses the old sofa."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Think about the whole article “A new life for our library”.</p><p>Does the headline match the article?</p>`,
          opts: [
            "No. The article is about a new computer club.",
            "No. The article is about a book shop in Lviv.",
            "Yes. The article is about the changes in the school library."
          ],
          correct: 2,
          hint: "What is the whole article about?",
          fbOk: "Right.",
          fbBad: "Look at the headline and the start of the article.",
          fbText: "The headline says <i>a new life for our library</i>, and the article is about <b>the changes in the school library</b>. So it matches."
        },
        {
          type: "info",
          title: "A good news article",
          body: `<ul><li>a <b>headline</b>: short, says the topic</li><li>the <b>start</b>: what, where and when → <i>The library is being changed. The work started on 1 October.</i></li><li>people’s <b>words</b>: <i>Ms Kvitka told us that… Mr Pavliuk said that…</i></li><li>the <b>end</b>: what’s next → <i>The new library opens on 1 December.</i></li></ul>`,
          cta: "Next"
        },
        {
          type: "order",
          sk: "write",
          title: "Put the sentences in order.",
          body: `<p>Put the parts of Myroslava’s article in order.</p>`,
          items: [
            "A new life for our library",
            "Our school library is changing.",
            "The walls are being painted and new shelves are being built.",
            "Ms Kvitka told us that the old library was too small and too dark.",
            "The new library opens on 1 December. Come and see it!"
          ],
          shuffle: [3, 0, 4, 2, 1],
          hint: "The headline goes first. What’s next goes at the end.",
          fbOk: "Good eye!",
          fbBad: "Start with the headline, then what is happening.",
          fbText: "The <b>headline</b>, then what is happening, then the work and people’s words. The <b>end</b> tells us what’s next: the library opens on 1 December."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>The work in the library is happening now.</p>`,
          before: "New shelves",
          after: "being built.",
          answer: "are",
          hint: "Shelves: one or two or more?",
          fbOk: "Exactly.",
          fbBad: "Two or more → are / is being?",
          fbText: "Shelves – two or more, so: New shelves <b>are</b> being built."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes a short article for her school website in Zelena Dolyna.</p>`,
          text: "<b>A garden for our school</b><br>This week, a school garden {*is being made|is making|are being made} behind our school. Apple trees {*are being planted|are planting|is being planted} next to it. Our head teacher {*told|said} us that the apples were for the school canteen. Dmytro said he {*wanted|wanting|want} to plant a tree too! The garden opens in spring.",
          hint: "Now → is / are being + third form. A person after the gap → told.",
          fbOk: "Well done!",
          fbBad: "Check: one garden, two or more trees; told + a person.",
          fbText: "A garden <b>is being made</b>. Apple trees <b>are being planted</b>. The head teacher <b>told</b> us. Dmytro said he <b>wanted</b> to plant a tree."
        }
      ],
      outro: {
        text: "A good article has a short headline, says what is happening, gives people’s words and tells us what’s next.",
        learned: [
          "Read a school newspaper article and find the main facts.",
          "Say if the headline matches the article.",
          "Write a short news text with is being built and said / told."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e8s3l7",
      title: "The school newspaper team",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e8s3boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help the newspaper team?",
          body: `<p class="lead">Ms Lysenko’s school newspaper in Kyiv comes out next week. The team needs help.</p><p>Check the words, the news and the people’s words. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          text: "Our newspaper comes out every month: it’s a {*monthly|weekly|daily}. Zoriana writes the {*articles|photographers|websites}, and Daryna is our {*photographer|headline|magazine}.",
          pre: "e8s3l1",
          hint: "Every month → ? Who takes photos?",
          fbOk: "Yes!",
          fbBad: "Every month → monthly. Photos → a photographer.",
          fbText: "Every month: a <b>monthly</b>. Zoriana writes <b>articles</b>. Daryna takes photos: she’s the <b>photographer</b>."
        },
        {
          type: "sort",
          sk: "read",
          eyebrow: "Task 2",
          title: "Sort the sentences.",
          body: `<p>Fact or opinion?</p>`,
          bins: ["fact", "opinion"],
          items: [
            ["The school concert is on 20 November.", 0],
            ["Tickets cost 50 hryvnias.", 0],
            ["It’s the best concert of the year.", 1],
            ["I think the songs are boring.", 1]
          ],
          pre: "e8s3l2",
          fbOk: "Good eye!",
          fbBad: "Can you check it? Then it’s a fact.",
          fbText: "Facts: the date and the price – you can check them. Opinions: <i>the best</i>, <i>I think … boring</i>."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Choose the correct answer.",
          body: `<p>Workers are repairing the school gym right now.</p><p>What does the newspaper say?</p>`,
          opts: [
            "The gym is repairing.",
            "The gym was repaired in 2010.",
            "The gym is being repaired."
          ],
          correct: 2,
          pre: "e8s3l3",
          fbOk: "Right.",
          fbBad: "Now → is being + third form.",
          fbText: "It’s happening now: the gym <b>is being repaired</b>. The gym doesn’t repair anything, so <i>is repairing</i> is wrong."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Write the missing word.",
          body: `<p>Yesterday, Bohdan said: “I’m busy.” Today he’s free.</p>`,
          before: "Yesterday, Bohdan said he",
          after: "busy.",
          answer: "was",
          pre: "e8s3l4",
          fbOk: "Well done!",
          fbBad: "am → ?",
          fbText: "am → <b>was</b>: Bohdan said he was busy. Today he’s free, so it isn’t true now."
        },
        {
          type: "pick",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Find the mistake.",
          body: `<p>One part of Zoriana’s notes is wrong.</p>`,
          text: "Kyrylo [said me] that he wanted to write about history. Daryna [!told us] that she had a new camera.",
          pre: "e8s3l5",
          fbOk: "Good eye!",
          fbBad: "said + a person: is it correct?",
          fbText: "Not <i>said me</i>: Kyrylo <b>told me</b> that he wanted to write about history. <i>Daryna told us</i> is correct."
        },
        {
          type: "build",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Put the words in order.",
          body: `<p>The players: “We are tired.” Report their words.</p>`,
          tiles: ["The players", "said", "they", "were", "tired"],
          extra: ["we"],
          answer: "The players said they were tired.",
          pre: "e8s3l5",
          fbOk: "Yes!",
          fbBad: "we → they, are → were.",
          fbText: "<b>The players said they were tired.</b> we → they, are → were."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 7",
          title: "Read and choose.",
          body: `<p><b>Our new school canteen</b><br><i>The school canteen is being changed. New tables are being made. The head teacher told us that the canteen was going to open again on 1 March. She said there was going to be soup every day.</i></p><p>Does the headline match the article?</p>`,
          opts: [
            "No. The article is about a new sports hall.",
            "Yes. The article is about the changes in the canteen.",
            "No. The article is about a café in the city centre."
          ],
          correct: 1,
          pre: "e8s3l6",
          fbOk: "Exactly.",
          fbBad: "What is every sentence of the article about?",
          fbText: "The headline and every sentence are about <b>the school canteen</b>. So the headline matches."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about the media, check the news and report what people said.",
        learned: [
          "Talk about newspapers, magazines and news websites.",
          "Check a news story and tell a fact from an opinion.",
          "Use is being built for work that is happening now.",
          "Report what people said with said and told."
        ]
      }
    }
  ]
});
