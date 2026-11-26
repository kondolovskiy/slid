/* Слід · Англійська мова, 9 клас — «Science and inventions» (e9s6)
   Програма: МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021), 9 кл.: тема «Наука й технічний прогрес» — відомі вчені
   та винахідники; винаходи; сучасні пристрої в житті й побуті (PDF с. 33, розд. 5.2.3); письмо — «короткий, простий
   опис знайомого прилада чи продукту» (с. 31); граматика B1 (с. 34–35): Passives — Present simple, Past simple,
   Present continuous, Infinitive — повторення (e6s3l2, e6s7l3, e7s2l4, e7s7l2, e7s7l3, e8s3l3); Can: general truths
   (Phones can be used to…) — нове; повторення — could (ability, e6s4l3); розподіл — content/eng/plan.js,
   reports/verify/plan-eng-g7-8-9.md, reports/verify/curate-eng-plan-g7-9.md:
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Граматика — CD Grammar: «Can» (General truths), «Passive: forms», «Passives with and without an agent» (by — коли
   важливо, хто); use sth for doing sth / to do sth — OALD use_1. URL — tasks/…/write-eng-g9-e9s6.md, «Нотатки агента».
   Факти про вчених і винаходи — з ≥ 2 джерел (нотатки задачі); спірних «першостей» не стверджуємо: Bell — «got a patent
   for the telephone», Cooper — «a famous call», без «first ever». Бренди не названо.
   Діалоги — репліками в body (D-056), без звуку (D-055 п. 4).
   Герої — серія 4–8 кл., на п'ять років старші, ніж у 4 кл. (memory/short/inbox.md, NOTE (герої)); нових немає.
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e9s6, reports/verify/write-eng-g9-e9s6.md). 7 уроків (6 + фінал). Будова — за розділами 7–8 кл. (e7s7, e8s3).
   Перевірка: node tools/validate.mjs --section e9s6 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e9s6",
  grade: 9,
  weeks: [21, 24],
  title: "Science and inventions",
  why: "To talk about famous scientists, inventions and modern devices. And to say who invented things and how they are used.",
  requires: ["e6s3l2", "e6s4l3", "e6s7l3", "e7s2l4", "e7s7l2", "e7s7l3", "e8s3l3"],
  meta: { author: "writer-e9s6", created: "2026-11-25", factcheck: "verifier-e9s6, 2026-11-26 (reports/verify/write-eng-g9-e9s6.md)", teacher: null },
  badges: [
    { id: "e9s6boss", name: "Young inventor", icon: "trophy", desc: "Finish the final lesson “Science and inventions”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e9s6l1",
      title: "Famous scientists and inventors",
      short: "Scientists",
      icon: "bulb",
      status: "verified",
      why: "Some people changed the world with new ideas. Learn the words to talk about them.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Who will you choose?",
          body: `<p class="lead">It’s Science Week at Andrii’s school in Kyiv.</p><p><b>Ms Lysenko:</b> Make a poster about a famous scientist or inventor.<br><b>Andrii:</b> I’ll choose Igor Sikorsky. He was born in Kyiv, like me!<br><b>Zoriana:</b> I love computers, so I’ll choose Kateryna Yushchenko.<br><b>Daryna:</b> Marie Curie. She won two Nobel Prizes!</p><p>A scientist or an inventor: what’s the difference?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>An <b>inventor</b> is a person who …</p>`,
          opts: [
            "sells machines in a shop.",
            "makes a new machine or thing.",
            "repairs old computers."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "An <b>inventor</b> makes something new: a machine or a thing that didn’t exist before. The next screen has more words."
        },
        {
          type: "info",
          title: "Scientists and inventors",
          body: `<ul><li>a <b>scientist</b> → studies the world and does <b>experiments</b></li><li>an <b>inventor</b> → makes a new machine or thing</li><li><b>invent</b> → make something new; the new thing is an <b>invention</b></li><li><b>discover</b> → find something that was already there; it’s a <b>discovery</b></li></ul><p><u>sci</u>entist, in<u>ven</u>tor, in<u>ven</u>tion, dis<u>cov</u>ery, ex<u>per</u>iment</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["A scientist", "An inventor", "An invention", "A discovery"],
          right: ["studies the world and does experiments.", "makes new machines or things.", "is a new machine or thing.", "is something that people find for the first time."],
          hint: "Two are people, two are not. Look at the verbs: studies, makes, is.",
          fbOk: "Good eye!",
          fbBad: "Which words are people? Look at the list again.",
          fbText: "A <b>scientist</b> does experiments. An <b>inventor</b> makes new things. An <b>invention</b> is the new thing. A <b>discovery</b> is something people find."
        },
        {
          type: "info",
          title: "Three famous names",
          body: `<ul><li><b>Marie Curie</b> – a scientist. She worked in France. In 1903, she was the first woman to win a Nobel Prize.</li><li><b>Igor Sikorsky</b> – an inventor. He was born in Kyiv in 1889. Later, he moved to the USA and designed helicopters there.</li><li><b>Kateryna Yushchenko</b> – a Ukrainian computer scientist. In 1955, she created a programming language called Address.</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Which sentence is true?</p>`,
          opts: [
            "Marie Curie created a programming language.",
            "Igor Sikorsky was born in the USA.",
            "Igor Sikorsky was born in Kyiv."
          ],
          correct: 2,
          hint: "Look at the last screen. Check each name and each place.",
          fbOk: "Well done!",
          fbBad: "Check the names and the countries on the last screen.",
          fbText: "Sikorsky was born in <b>Kyiv</b>. Later, he moved to the <b>USA</b>. The programming language was created by <b>Kateryna Yushchenko</b>, not Marie Curie."
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Is it a person or not?</p>`,
          bins: ["a person", "not a person"],
          items: [
            ["scientist", 0],
            ["inventor", 0],
            ["engineer", 0],
            ["invention", 1],
            ["discovery", 1],
            ["experiment", 1]
          ],
          hint: "-ist and -or are often people.",
          fbOk: "Exactly.",
          fbBad: "Who does the work? That’s a person.",
          fbText: "People: <b>scientist</b>, <b>inventor</b>, <b>engineer</b>. Not people: <b>invention</b>, <b>discovery</b>, <b>experiment</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+sci|en|tist", "in|+ven|tor", "dis|+cov|er|y", "ex|+per|i|ment"],
          fbOk: "Right.",
          fbBad: "Look at the underlined parts on the rule screen.",
          fbText: "<u>sci</u>entist, in<u>ven</u>tor, dis<u>cov</u>ery, ex<u>per</u>iment."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>invent → invention</p><p>Now make a noun from <b>discover</b>. It’s a thing, not a person.</p>`,
          before: "discover →",
          after: "",
          answer: "discovery",
          hint: "Look at the rule screen: discover → a …",
          fbOk: "Yes!",
          fbBad: "Find discover on the rule screen.",
          fbText: "discover → a <b>discovery</b>. invent → an <b>invention</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes his poster.</p>`,
          text: "Igor Sikorsky was a famous {*inventor|invention|invent}. He was born in Kyiv in 1889. Later, he moved to the USA. There, he {*designed|discovered|was designed} helicopters. His helicopters were important {*inventions|inventors|invent}. Today, a university in Kyiv is named after him.",
          hint: "A person → ? A new thing → ? Did he find helicopters or make them?",
          fbOk: "Well done!",
          fbBad: "Person or thing? Make or find?",
          fbText: "Sikorsky was an <b>inventor</b>. He <b>designed</b> helicopters: he made something new, he didn’t find it. So they were <b>inventions</b>, not discoveries."
        }
      ],
      outro: {
        text: "Scientists study the world. Inventors make new things. Some people are both!",
        learned: [
          "Use the words scientist, inventor, invention and discovery.",
          "Say what invent and discover mean.",
          "Give facts about famous scientists from Ukraine and other countries."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e9s6l2",
      title: "Who invented it? It was invented by…",
      short: "Invented by",
      icon: "user",
      status: "verified",
      why: "Quizzes often ask who invented or discovered something. Learn to answer with the passive and by.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Quiz night",
          body: `<p class="lead">Emma’s school has a science quiz. She writes to Andrii.</p><p><b>Emma:</b> Help! Who invented the World Wide Web? And who discovered penicillin?<br><b>Andrii:</b> The Web was invented by Tim Berners-Lee. Penicillin, a medicine, was discovered by Alexander Fleming.<br><b>Emma:</b> Why invented for one and discovered for the other?</p><p>What do you think?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Why do we say penicillin was <b>discovered</b>?</p>`,
          opts: [
            "It was already in nature. Fleming found it.",
            "Fleming made it from nothing.",
            "Fleming found it in a shop."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good thinking!",
          fbText: "Penicillin was <b>already there</b> in nature. Fleming found it and saw that it was good for sick people. So we say he <b>discovered</b> it."
        },
        {
          type: "info",
          title: "Invented or discovered?",
          body: `<ul><li><b>invent</b> → make something new:<br>The Web <b>was invented by</b> Tim Berners-Lee, a British scientist, in 1989.</li><li><b>discover</b> → find something that was already there:<br>Penicillin <b>was discovered by</b> Alexander Fleming in London in 1928.</li></ul><p>Remember: <b>was / were</b> + third form + <b>by</b> + who did it.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Marie and Pierre Curie found radium. It was already in nature.</p><p>Which sentence is correct?</p>`,
          opts: [
            "Radium was invented by Marie and Pierre Curie.",
            "Radium discovered by Marie and Pierre Curie.",
            "Radium was discovered by Marie and Pierre Curie."
          ],
          correct: 2,
          hint: "Did they make radium or find it? And don’t forget was.",
          fbOk: "Right.",
          fbBad: "It was already in nature: invented or discovered?",
          fbText: "They found it, so it <b>was discovered</b>. We need <b>was</b> before <i>discovered</i>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "The World Wide Web {*was invented|was discovered|invented} by Tim Berners-Lee. Penicillin {*was discovered|was invented|discovered} by Alexander Fleming. Many helicopters {*were designed|was designed|designed} by Igor Sikorsky.",
          hint: "New thing → invented. Already there → discovered. Many → were.",
          fbOk: "Exactly.",
          fbBad: "Make or find? One or many?",
          fbText: "The Web was new, so it <b>was invented</b>. Penicillin was already there, so it <b>was discovered</b>. Many → <b>were</b>."
        },
        {
          type: "info",
          title: "By: only when it’s important",
          body: `<p>Use <b>by</b> when it’s important who did it:<br>The Web was invented <b>by Tim Berners-Lee</b>.</p><p>No <b>by</b> when we don’t know who did it, or it isn’t important:<br>My phone <b>was repaired</b> yesterday.<br>We don’t need “by someone” here. It tells us nothing.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Andrii writes in the school newspaper. Nobody knows who repaired the computers, and it isn’t important.</p>`,
          opts: [
            "Our school computers were repaired by Ms Lysenko last week.",
            "Our school computers were repaired last week.",
            "Our school computers repaired last week."
          ],
          correct: 1,
          hint: "Is it important who did it?",
          fbOk: "Well done!",
          fbBad: "We don’t know who did it. Do we need by?",
          fbText: "<b>Our school computers were repaired last week.</b> Nobody knows who did it, so we can’t say <i>by Ms Lysenko</i>. No <i>by</i> here. And the computers didn’t repair anything: we need <b>were</b>."
        },
        {
          type: "info",
          title: "Questions",
          body: `<ul><li><b>Who invented</b> the Web? = <b>Who was</b> the Web <b>invented by</b>?</li><li><b>When was</b> penicillin <b>discovered</b>? – In 1928.</li><li><b>Was</b> penicillin <b>invented</b>? – No, it <b>wasn’t</b>. It was discovered.</li></ul><p>Remember: no <i>did</i> with <b>was / were</b> + third form.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "gram",
          title: "Match the questions and the answers.",
          left: ["Who was the Web invented by?", "When was penicillin discovered?", "Was penicillin invented?", "Who was radium discovered by?"],
          right: ["Tim Berners-Lee.", "In 1928.", "No, it wasn’t.", "Marie and Pierre Curie."],
          hint: "Who → a person. When → a year. Was…? → yes or no.",
          fbOk: "Good eye!",
          fbBad: "Look at the question words: who, when, was.",
          fbText: "Who → <b>Tim Berners-Lee</b>, <b>Marie and Pierre Curie</b>. When → <b>in 1928</b>. Was penicillin invented? → <b>No, it wasn’t.</b> It was discovered."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Emma asks Andrii about the date.</p>`,
          tiles: ["When", "was", "penicillin", "discovered"],
          extra: ["did"],
          answer: "When was penicillin discovered?",
          keepCase: true,
          hint: "Start with When. Then was.",
          fbOk: "Yes!",
          fbBad: "When + was + penicillin + discovered. No did.",
          fbText: "<b>When was penicillin discovered?</b> – In 1928. No <i>did</i> with <i>was</i> + third form."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s quiz answers is wrong.</p>`,
          text: "The World Wide Web was [invent] by Tim Berners-Lee in 1989. Penicillin [!was] discovered by Alexander Fleming in 1928.",
          hint: "Check the word after was in each sentence.",
          fbOk: "Good eye!",
          fbBad: "was + third form: invent or invented?",
          fbText: "After <b>was</b>, use the third form: The Web was <b>invented</b>. <i>Penicillin was discovered</i> is correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes to Andrii after the quiz.</p>`,
          text: "We won! Thanks for your help. Our first question was “Who {*was|did|were} the World Wide Web invented by?” I knew it {*was invented|was discovered|invented} by Tim Berners-Lee. Then they asked when penicillin {*was discovered|was discover|discovered by} – in 1928, of course!",
          hint: "Who + was … by? Penicillin: invented or discovered?",
          fbOk: "Well done!",
          fbBad: "One thing → was. Was it new, or was it already there?",
          fbText: "<b>Who was</b> the Web invented by? It <b>was invented</b> by Tim Berners-Lee. Penicillin <b>was discovered</b> in 1928."
        }
      ],
      outro: {
        text: "The Web was invented by Tim Berners-Lee. Penicillin was discovered by Alexander Fleming.",
        learned: [
          "Say who invented or discovered something: It was invented by…",
          "Choose between invent and discover.",
          "Use by only when it’s important who did it.",
          "Ask questions: When was it discovered?"
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e9s6l3",
      title: "From the telephone to the smartphone",
      short: "Phones",
      icon: "voice",
      status: "verified",
      why: "Phones have changed a lot. Learn to say what old phones could do and what phones can do now.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Grandad’s first mobile",
          body: `<p class="lead">Oksana’s grandad Mykola finds an old mobile phone in a drawer.</p><p><b>Grandad:</b> This was my first mobile phone. It could make calls and send texts. That’s all!<br><b>Oksana:</b> It couldn’t take photos? My phone can do everything!<br><b>Dmytro:</b> When were the first phones invented?</p><p>How have phones changed?</p>`,
          cta: "Let’s see"
        },
        {
          type: "info",
          title: "Phones: part 1",
          body: `<ul><li><b>1876</b> – Alexander Graham Bell got a <b>patent</b> for the telephone. Other inventors worked on telephones too.</li><li><b>1973</b> – Martin Cooper made a famous call on a mobile phone in a street in New York. The phone weighed more than a kilogram.</li></ul><p>a <b><u>pa</u>tent</b> → an official paper: “This invention is yours.”</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Why do we say “Bell got a patent for the telephone”, not “Bell was the only inventor of the telephone”?</p>`,
          opts: [
            "Bell didn’t work on telephones.",
            "Other inventors worked on telephones too.",
            "The telephone was invented in 1973."
          ],
          correct: 1,
          hint: "Read the line about 1876 again.",
          fbOk: "Exactly.",
          fbBad: "Who else worked on telephones?",
          fbText: "<b>Other inventors worked on telephones too.</b> Bell got the patent in 1876. Scientists don’t always agree who was first, so we say only what we know."
        },
        {
          type: "info",
          title: "Phones: part 2",
          body: `<ul><li><b>1992</b> – the first text message was sent in the UK. It said “Merry Christmas”. It was sent from a computer to a phone. That phone couldn’t send texts, so there was no reply.</li><li><b>Today</b> – a <b>smartphone</b> is a phone and a small computer. It can take photos and use the internet.</li></ul><p><u>smart</u>phone</p>`,
          cta: "Next"
        },
        {
          type: "info",
          title: "Remember: can and could",
          body: `<ul><li>now → <b>can</b> + verb: My phone <b>can</b> take photos.</li><li>the past → <b>could</b> + verb: Grandad’s first phone <b>could</b> make calls.</li><li>not → <b>can’t</b> / <b>couldn’t</b>: It <b>couldn’t</b> take photos.</li></ul><p>No <i>to</i> and no <i>-s</i> after can and could.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "In 1973, Martin Cooper’s phone {*could|can} make calls, but it {*couldn’t|couldn’t to|not could} take photos. In 1992, the phone that got the first text {*couldn’t|can’t} send a reply. Today, my phone {*can take|cans take|can to take} great photos.",
          hint: "1973, 1992 → the past. Today → now.",
          fbOk: "Right.",
          fbBad: "Is it the past or now? And no -s, no to after can.",
          fbText: "The past: <b>could</b>, <b>couldn’t</b> + verb. Now: <b>can take</b> – no <i>-s</i> and no <i>to</i> after can and could."
        },
        {
          type: "info",
          title: "Can: things that are often true",
          body: `<p>We use <b>can</b> to say what is often true, but not always:</p><ul><li>Smartphones <b>can be</b> very useful.</li><li>Long calls <b>can be</b> expensive.</li></ul><p><b>can be</b> + third form:</p><ul><li>Phones <b>can be used</b> to pay in shops.</li><li>Phones <b>can be charged</b> at home or at school.</li></ul>`,
          cta: "Next"
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Which sentences are correct?</p>`,
          opts: [
            "Smartphones can used to pay in shops.",
            "Smartphones can be used to pay in shops.",
            "Smartphones can be use to pay in shops.",
            "A smartphone can be very useful."
          ],
          correct: [1, 3],
          hint: "can + be + third form.",
          fbOk: "Well done!",
          fbBad: "Check each sentence: can + be + used.",
          fbText: "<b>can be used</b> – can + be + third form. <i>can used</i> has no <i>be</i>. <i>can be use</i> has no third form. <b>can be very useful</b> is correct too."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Oksana writes about smartphones.</p>`,
          before: "Phones can",
          after: "used to watch films.",
          answer: "be",
          hint: "can + ? + third form",
          fbOk: "Yes!",
          fbBad: "Look at the rule: can + … + used.",
          fbText: "Phones can <b>be</b> used to watch films: can + <b>be</b> + third form."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Oksana tells Grandad about smartphones.</p>`,
          tiles: ["smartphones", "can", "be", "used", "to take", "photos"],
          extra: ["are"],
          answer: ["Smartphones can be used to take photos.", "Can smartphones be used to take photos?"],
          hint: "Smartphones + can + be + used…",
          fbOk: "Well done!",
          fbBad: "can + be + third form. Do you need are?",
          fbText: "<b>Smartphones can be used to take photos.</b> After <b>can</b>, use <b>be</b>, not <i>are</i>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes to Emma.</p>`,
          text: "Yesterday Grandad showed us his first mobile phone. Twenty years ago, it {*could|can|cans} only make calls and send texts. It {*couldn’t|couldn’t to|not could} take photos. Now Grandad has got a smartphone. It {*can be used|can used|can be use} to pay in shops, and he {*can|cans|can to} see all our photos!",
          hint: "Twenty years ago → the past. Now → can.",
          fbOk: "Well done!",
          fbBad: "Past or now? can + be + third form.",
          fbText: "The first phone <b>could</b> only make calls. It <b>couldn’t</b> take photos. The smartphone <b>can be used</b> to pay, and he <b>can</b> see our photos."
        }
      ],
      outro: {
        text: "Old phones could only make calls. Today, phones can be used to do almost everything.",
        learned: [
          "Tell the story of the phone with dates.",
          "Say what old devices could and couldn’t do.",
          "Say what is often true with can: Phones can be used to…"
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e9s6l4",
      title: "How is it made? How is it used?",
      short: "Made and used",
      icon: "flame",
      status: "verified",
      why: "Science articles explain how things are made and used. Learn to describe a process with the passive.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Glass from sand?",
          body: `<p class="lead">Taras visits a small glass workshop in Lviv. He takes photos for School 5 News.</p><p><b>Worker:</b> Look at this hot glass. It’s orange! Soon it will be a vase.<br><b>Taras:</b> What is glass made from?<br><b>Worker:</b> Mostly from sand!<br><b>Taras:</b> From sand? How?</p><p>How is sand made into glass?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>How does sand become glass?</p>`,
          opts: [
            "It is washed in cold water.",
            "It is mixed with paper.",
            "It is heated until it melts."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "The sand <b>is heated</b>. It gets very hot and <b>melts</b>: it becomes liquid. The next screen shows all the steps."
        },
        {
          type: "info",
          title: "How is glass made?",
          body: `<ul><li>First, sand and other materials <b>are mixed</b>.</li><li>Then the mix <b>is heated</b> until it melts.</li><li>After that, the hot glass <b>is shaped</b>.</li><li>Finally, it <b>is cooled</b> slowly.</li></ul><p>Remember: <b>is / are</b> + third form. We talk about the process, not the workers, so there’s no <i>by</i>.</p><p><b>melt</b> → become liquid when it’s very hot</p>`,
          cta: "Next"
        },
        {
          type: "order",
          sk: "read",
          title: "Put the sentences in order.",
          body: `<p>How is glass made?</p>`,
          items: [
            "Sand and other materials are mixed.",
            "The mix is heated until it melts.",
            "The hot glass is shaped.",
            "The glass is cooled slowly."
          ],
          shuffle: [2, 0, 3, 1],
          hint: "What happens first: heating or mixing?",
          fbOk: "Good eye!",
          fbBad: "Look at first, then, after that, finally on the last screen.",
          fbText: "Mixed → heated → shaped → cooled. The glass can’t be shaped before it melts."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with the Present Simple passive.",
          text: "Sand and other materials {*are mixed|is mixed|are mix}. The mix {*is heated|are heated|is heat} until it melts. Then the hot glass {*is shaped|are shaped|is shape} into a vase.",
          hint: "One thing → is. Two or more → are. Then the third form.",
          fbOk: "Exactly.",
          fbBad: "One or more? And is the verb in the third form?",
          fbText: "Sand and materials → <b>are mixed</b>. The mix → <b>is heated</b>. The glass → <b>is shaped</b>."
        },
        {
          type: "info",
          title: "How is it used?",
          body: `<ul><li>A <b>thermometer</b> is used <b>to measure</b> temperature.</li><li>A <b>microscope</b> is used <b>for looking</b> at very small things.</li><li>A <b>telescope</b> is used to look at stars and planets.</li></ul><p><b>is used to</b> + verb = <b>is used for</b> + -ing</p><p>ther<u>mom</u>eter, <u>mi</u>croscope, <u>tel</u>escope</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["A thermometer is used", "A microscope is used", "A telescope is used", "A calculator is used"],
          right: ["to measure temperature.", "to look at very small things.", "to look at stars and planets.", "to do maths quickly."],
          hint: "Which one is for the sky? Which one is for very small things?",
          fbOk: "Well done!",
          fbBad: "Look at the list “How is it used?” again.",
          fbText: "A <b>thermometer</b> measures temperature. A <b>microscope</b> is for very small things. A <b>telescope</b> is for stars. A <b>calculator</b> is for maths."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "A thermometer is used {*to measure|to measuring|for measure} temperature. A microscope is used {*for looking|for look|to looking} at very small things.",
          hint: "used to + verb, used for + -ing.",
          fbOk: "Right.",
          fbBad: "to + verb. for + -ing.",
          fbText: "Used <b>to measure</b> (to + verb). Used <b>for looking</b> (for + -ing)."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Taras’s notes is wrong.</p>`,
          text: "A telescope is [use] to look at stars. A microscope [!is] used for looking at small things.",
          hint: "is + third form.",
          fbOk: "Good eye!",
          fbBad: "Check the word after is in each sentence.",
          fbText: "A telescope is <b>used</b>: is + third form. <i>A microscope is used</i> is correct."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Taras asks the worker a question.</p>`,
          tiles: ["How", "is", "glass", "made"],
          extra: ["does"],
          answer: "How is glass made?",
          keepCase: true,
          hint: "Start with How. Then is.",
          fbOk: "Yes!",
          fbBad: "How + is + glass + made. No does.",
          fbText: "<b>How is glass made?</b> – It’s made from sand. No <i>does</i> with is + third form."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes an article for School 5 News.</p>`,
          text: "Glass {*is made|is making|made} mostly from sand. First, the sand and other materials {*are mixed|is mixed|are mix}. Then the mix {*is heated|are heated|is heat} until it melts. The hot glass is shaped and cooled. Glass {*is used|are used|is use} to make windows, bottles and phone screens.",
          hint: "is / are + third form. One thing or more?",
          fbOk: "Well done!",
          fbBad: "Check: is or are? Third form?",
          fbText: "Glass <b>is made</b> from sand. The materials <b>are mixed</b>. The mix <b>is heated</b>. Glass <b>is used</b> to make windows and screens."
        }
      ],
      outro: {
        text: "Glass is made from sand. A thermometer is used to measure temperature.",
        learned: [
          "Describe a process: First, … is mixed. Then it is heated.",
          "Say what things are used for: It’s used to… / It’s used for …-ing.",
          "Ask: How is it made?"
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e9s6l5",
      title: "Smart devices in our homes",
      short: "Smart devices",
      icon: "bolt",
      status: "verified",
      why: "Many homes have smart devices now. Learn to talk about what they can do.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Who’s talking?",
          body: `<p class="lead">Tom’s family has a new smart speaker.</p><p><b>Tom:</b> I just say “Play some music!”, and it plays music. It can tell me the weather too.<br><b>Emma:</b> Cool! Can it help with homework?<br><b>Grandad:</b> I don’t like it. It hears everything we say!</p><p>What can smart devices do?</p>`,
          cta: "Let’s see"
        },
        {
          type: "info",
          title: "Devices at home",
          body: `<ul><li>a <b>device</b> → a machine or tool for a special job: a phone, a tablet</li><li>a <b>smart</b> device → uses the internet; you can control it with an <b>app</b> or your voice</li><li>a <b>smart speaker</b> → plays music, answers questions</li><li>a <b>smartwatch</b> → shows the time, counts your steps</li><li>a <b>robot vacuum cleaner</b> → cleans the floor by itself</li></ul><p>de<u>vice</u>, <u>smart</u>watch</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["A smart speaker", "A smartwatch", "A robot vacuum cleaner", "An app"],
          right: ["plays music and answers questions.", "shows the time and counts your steps.", "cleans the floor by itself.", "is a program on a phone or a tablet."],
          hint: "Which one do you wear? Which one cleans?",
          fbOk: "Good eye!",
          fbBad: "Look at the list “Devices at home” again.",
          fbText: "A <b>smart speaker</b> plays music. A <b>smartwatch</b> counts steps. A <b>robot vacuum cleaner</b> cleans the floor. An <b>app</b> is a program."
        },
        {
          type: "info",
          title: "Using devices",
          body: `<ul><li><b>switch on</b> ↔ <b>switch off</b>: Switch it off at night.</li><li>a <b>battery</b> → keeps electricity inside a device</li><li><b>charge</b> → put electricity into the battery</li><li>a <b>charger</b> → you use it to charge a phone</li><li><b>plug in</b> → connect to electricity</li></ul><p><u>bat</u>tery, <u>char</u>ger</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Andrii writes to Daryna.</p>`,
          text: "My phone’s {*battery|charger|app} is almost empty. I can’t find my {*charger|battery|speaker}! Can I use yours? I need to {*charge|charger|battery} my phone before the chess lesson.",
          hint: "What is almost empty? What do you use to charge a phone?",
          fbOk: "Exactly.",
          fbBad: "Look at the list “Using devices” again.",
          fbText: "The <b>battery</b> is almost empty. He needs a <b>charger</b> to <b>charge</b> his phone. After <i>to</i>, we need a verb: charge."
        },
        {
          type: "info",
          title: "Smart devices can…",
          body: `<p>Use <b>can</b> for what is often true:</p><ul><li>A smart speaker <b>can answer</b> questions.</li><li>Smart lights <b>can be switched</b> on with an app.</li><li>Smart devices <b>can be</b> very useful.</li></ul><p>Remember the passive now:<br>The robot vacuum cleaner <b>is being charged</b> at the moment.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Smart homes, part 1 of 2",
          title: "Read and choose.",
          body: `<p>Zoriana writes for her school newspaper in Kyiv.</p><p><i>Smart devices can make life easier. In a smart home, lights can be switched on with a phone. A robot vacuum cleaner can clean the floor while you’re at school. A smart speaker can tell you the news.</i></p><p>How can lights be switched on in a smart home?</p>`,
          opts: [
            "with a phone",
            "with a robot vacuum cleaner",
            "with a smart speaker only"
          ],
          correct: 0,
          hint: "Find lights in the text.",
          fbOk: "Right.",
          fbBad: "Read the sentence about lights again.",
          fbText: "<i>Lights can be switched on <b>with a phone</b>.</i>"
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Smart homes, part 2 of 2",
          title: "Choose all the correct answers.",
          body: `<p><i>But smart devices can be a problem too. They need electricity and the internet. When there’s no electricity, a smart speaker can’t do anything. And some people don’t like devices that hear everything.</i></p><p>Which problems does Zoriana write about?</p>`,
          opts: [
            "They are always too big for a flat.",
            "They don’t work without electricity.",
            "They can’t play music.",
            "Some people don’t like devices that hear everything."
          ],
          correct: [1, 3],
          hint: "Find the problems after But.",
          fbOk: "Well done!",
          fbBad: "Read the text after But again. Is size there?",
          fbText: "Zoriana writes: they need <b>electricity</b>, and some people don’t like devices that <b>hear everything</b>. She doesn’t write about size, and smart speakers can play music."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["de|+vice", "+bat|ter|y", "+char|ger", "+smart|watch"],
          fbOk: "Right.",
          fbBad: "Look at the underlined parts on the rule screens.",
          fbText: "de<u>vice</u>, <u>bat</u>tery, <u>char</u>ger, <u>smart</u>watch."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>This device cleans the floor by itself.</p>`,
          before: "It’s a robot vacuum",
          after: ".",
          answer: "cleaner",
          hint: "Look at the list “Devices at home”.",
          fbOk: "Yes!",
          fbBad: "Find the device that cleans the floor.",
          fbText: "A robot vacuum <b>cleaner</b> cleans the floor by itself."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Tom writes to Andrii.</p>`,
          text: "Our new smart speaker {*can|cans|can to} answer questions. Our lights {*can be switched|can switched|can be switch} on with an app. And right now, our robot vacuum cleaner {*is being charged|are being charged|is charged being}. Grandad still doesn’t like the speaker!",
          hint: "can + verb. can + be + third form. Now → is being + third form.",
          fbOk: "Well done!",
          fbBad: "Check: can + be + third form; one thing → is being.",
          fbText: "It <b>can</b> answer. The lights <b>can be switched</b> on. Now the vacuum cleaner <b>is being charged</b>: one thing → is being."
        }
      ],
      outro: {
        text: "Smart devices can be very useful, but they need electricity and the internet.",
        learned: [
          "Name smart devices and say what they do.",
          "Talk about using devices: charge, switch on, plug in.",
          "Say what is often true: Smart devices can be…"
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e9s6l6",
      title: "My favourite device: a short description",
      short: "My device",
      icon: "star",
      status: "verified",
      why: "Can you describe a device without its name? Learn to plan a short description.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Guess the device",
          body: `<p class="lead">This month, the penfriend club writes about favourite devices.</p><p>The rule: describe it, but don’t write its brand name.</p><p>Mariia from Kharkiv writes first. She loves drawing comics.</p><p>What device do you think she chose?</p>`,
          cta: "Let’s read"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: My favourite device, part 1 of 2",
          title: "Read and choose.",
          body: `<p><i>My favourite device is my drawing tablet. It’s small and flat, and it’s made of plastic. It comes with a special pen. It was given to me by my uncle Oleh for my birthday. He knows I love drawing!</i></p><p>Who gave Mariia the tablet?</p>`,
          opts: [
            "her mum",
            "her penfriend",
            "her uncle"
          ],
          correct: 2,
          hint: "Find by in the text.",
          fbOk: "Yes!",
          fbBad: "Look at the sentence with by.",
          fbText: "<i>It was given to me <b>by my uncle Oleh</b>.</i> Here <b>by</b> is important: Mariia tells us who gave it."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: My favourite device, part 2 of 2",
          title: "Read and choose.",
          body: `<p><i>The tablet is connected to my laptop. It’s used for drawing comics. My pictures can be changed easily. The best thing is that I can draw anywhere, even on the bus. But the battery doesn’t last long, so I always take my charger.</i></p><p>What is the problem with the tablet?</p>`,
          opts: [
            "It can’t be used on the bus.",
            "The battery doesn’t last long.",
            "Mariia’s pictures can’t be changed."
          ],
          correct: 1,
          hint: "Find But in the text.",
          fbOk: "Right.",
          fbBad: "Read the sentence after But.",
          fbText: "<i>But the <b>battery</b> doesn’t last long.</i> She can draw on the bus, and her pictures can be changed easily."
        },
        {
          type: "info",
          title: "How to describe a device",
          body: `<ul><li><b>What is it?</b> My favourite device is…</li><li><b>What is it like?</b> It’s small and light. It’s made of plastic, metal or glass.</li><li><b>What is it used for?</b> It’s used for… / It’s used to…</li><li><b>What can it do?</b> It can…</li><li><b>Why do you like it?</b> The best thing is that… But…</li></ul>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "write",
          title: "Sort the sentences.",
          body: `<p>Which question does each sentence answer?</p>`,
          bins: ["What is it like?", "What is it used for?", "Why do you like it?"],
          items: [
            ["It’s black and quite heavy.", 0],
            ["It’s small and made of metal.", 0],
            ["It’s used for reading books.", 1],
            ["It’s used to take photos.", 1],
            ["The best thing is that it’s fast.", 2],
            ["I like it because it helps me with homework.", 2]
          ],
          hint: "Colour and size → what is it like? Used for → ?",
          fbOk: "Exactly.",
          fbBad: "Look at the plan on the last screen.",
          fbText: "Colour, size, material → <b>What is it like?</b> Used for / used to → <b>What is it used for?</b> The best thing, because → <b>Why do you like it?</b>"
        },
        {
          type: "order",
          sk: "write",
          title: "Put the sentences in order.",
          body: `<p>Taras describes his favourite device.</p>`,
          items: [
            "My favourite device is my camera.",
            "It’s black and quite heavy.",
            "It’s used for taking photos for our school newspaper.",
            "It can take good photos even at night.",
            "The best thing is that every photo tells a story."
          ],
          shuffle: [3, 0, 4, 1, 2],
          hint: "Follow the plan: what is it, what is it like, used for, can, why.",
          fbOk: "Well done!",
          fbBad: "Start with “My favourite device is…”. End with “The best thing…”.",
          fbText: "What is it → what is it like → what is it used for → what can it do → why he likes it."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Mariia writes about her tablet.</p>`,
          before: "It’s used",
          after: "drawing comics.",
          answer: ["for", "in", "when", "while"],
          hint: "used … + -ing",
          fbOk: "Right.",
          fbBad: "Before -ing: used to or used for?",
          fbText: "It’s used <b>for</b> drawing comics: used for + -ing. <i>Used in / when / while drawing</i> is also possible."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Taras writes the third sentence again.</p>`,
          tiles: ["my camera", "is", "used", "for", "taking", "photos"],
          extra: ["to"],
          answer: ["My camera is used for taking photos.", "Is my camera used for taking photos?"],
          hint: "My camera + is + used + for…",
          fbOk: "Yes!",
          fbBad: "used for + -ing. Do you need to?",
          fbText: "<b>My camera is used for taking photos.</b> After <i>for</i>, use <b>-ing</b>. No <i>to</i> here."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes about her favourite device.</p>`,
          text: "My favourite device is my {*smartwatch|smart speaker|charger}. It’s small and light, and it {*is made|made|is make} of plastic and glass. It {*was given|gave|was give} to me by my mum. It’s used {*for counting|for count|to counting} my steps, and it {*can|cans|can to} show the time in the swimming pool. The best thing is that it helps me train.",
          hint: "Which device counts your steps? is + third form, for + -ing, can + verb.",
          fbOk: "Well done!",
          fbBad: "Check: is made, was given, for + -ing, can + verb.",
          fbText: "A <b>smartwatch</b> counts steps. It <b>is made</b> of plastic and glass. It <b>was given</b> to her by her mum. It’s used <b>for counting</b> steps, and it <b>can</b> show the time."
        }
      ],
      outro: {
        text: "Say what it is, what it’s like, what it’s used for, what it can do and why you like it.",
        learned: [
          "Plan a short description of a device.",
          "Say what a device is made of and used for.",
          "Read a description and find its main points."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал розділу ───────────── */
    {
      id: "e9s6l7",
      title: "Science Week: the final quiz",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e9s6boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you win the quiz?",
          body: `<p class="lead">It’s the last day of Science Week. Ms Lysenko’s class has a big quiz.</p><p>Answer the questions. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Choose the correct answer.",
          body: `<p>Igor Sikorsky designed new helicopters. He was an …</p>`,
          opts: [
            "inventor.",
            "invention.",
            "experiment."
          ],
          correct: 0,
          pre: "e9s6l1",
          fbOk: "Yes!",
          fbBad: "Sikorsky is a person.",
          fbText: "A person who makes new machines is an <b>inventor</b>. The helicopter is an <i>invention</i>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          text: "Penicillin {*was discovered|was invented|discovered} by Alexander Fleming in 1928. The World Wide Web {*was invented|was discovered|invented} by Tim Berners-Lee in 1989.",
          pre: "e9s6l2",
          hint: "Already there → discovered. New → invented.",
          fbOk: "Right.",
          fbBad: "Make or find? And don’t forget was.",
          fbText: "Penicillin <b>was discovered</b>: it was already in nature. The Web <b>was invented</b>: it was new."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Choose the correct answer.",
          body: `<p>Which question is correct?</p>`,
          opts: [
            "When did the World Wide Web invented?",
            "When the World Wide Web was invented?",
            "When was the World Wide Web invented?"
          ],
          correct: 2,
          pre: "e9s6l2",
          fbOk: "Exactly.",
          fbBad: "Question: When + was + … + third form. No did.",
          fbText: "<b>When was the World Wide Web invented?</b> – In 1989. <b>Was</b> goes before the Web; no <i>did</i>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Fill in the gaps.",
          text: "In 1992, the phone that got the first text message {*couldn’t|can’t} send a reply. Today, most phones {*can send|cans send|can to send} texts and photos.",
          pre: "e9s6l3",
          hint: "1992 → the past. Today → now.",
          fbOk: "Well done!",
          fbBad: "The past → could. Now → can + verb.",
          fbText: "In 1992 the phone <b>couldn’t</b> reply. Today phones <b>can send</b> texts: no <i>-s</i>, no <i>to</i>."
        },
        {
          type: "multi",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Choose all the correct answers.",
          body: `<p>Which sentences are correct?</p>`,
          opts: [
            "Phones can be use to pay in shops.",
            "Phones can be used to pay in shops.",
            "Smart lights can switched on with an app.",
            "Smart lights can be switched on with an app."
          ],
          correct: [1, 3],
          pre: "e9s6l3",
          fbOk: "Right.",
          fbBad: "can + be + third form.",
          fbText: "<b>can be used</b>, <b>can be switched</b>: can + be + third form. <i>can be use</i> and <i>can switched</i> are wrong."
        },
        {
          type: "order",
          sk: "read",
          eyebrow: "Task 6",
          title: "Put the sentences in order.",
          body: `<p>How is glass made?</p>`,
          items: [
            "Sand and other materials are mixed.",
            "The mix is heated until it melts.",
            "The hot glass is shaped.",
            "The glass is cooled slowly."
          ],
          shuffle: [3, 1, 0, 2],
          pre: "e9s6l4",
          fbOk: "Good eye!",
          fbBad: "Mixed, heated, shaped, cooled.",
          fbText: "First the materials <b>are mixed</b>. Then the mix <b>is heated</b>. After that the glass <b>is shaped</b>. Finally it <b>is cooled</b>."
        },
        {
          type: "match",
          sk: "vocab",
          eyebrow: "Task 7",
          title: "Match the halves.",
          left: ["A thermometer is used", "A telescope is used", "A charger is used", "A smartwatch is used"],
          right: ["to measure temperature.", "to look at stars and planets.", "to charge a phone.", "to count your steps."],
          pre: "e9s6l5",
          fbOk: "Well done!",
          fbBad: "Which one is for the sky? Which one is for a battery?",
          fbText: "Thermometer → <b>temperature</b>. Telescope → <b>stars</b>. Charger → <b>charge a phone</b>. Smartwatch → <b>steps</b>."
        },
        {
          type: "pick",
          sk: "gram",
          eyebrow: "Task 8",
          title: "Find the mistake.",
          body: `<p>One word in Tom’s message is wrong.</p>`,
          text: "Our robot vacuum cleaner [are] being charged now. The new lights [!are] being put in.",
          pre: "e9s6l5",
          fbOk: "Good eye!",
          fbBad: "One vacuum cleaner: is or are?",
          fbText: "One robot vacuum cleaner → <b>is</b> being charged. <i>The new lights are being put in</i> is correct."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 9",
          title: "Read and choose.",
          body: `<p><i>My favourite device is my e-book reader. It’s thin and light. It was given to me by my grandma. It’s used for reading books, and it can hold hundreds of them. The best thing is that I can read in the dark. – Andrii</i></p><p>Which sentence is true?</p>`,
          opts: [
            "The device is used for taking photos.",
            "Andrii’s grandma gave him the device.",
            "Andrii can’t read in the dark with it."
          ],
          correct: 1,
          pre: "e9s6l6",
          fbOk: "Well done!",
          fbBad: "Find by in the text.",
          fbText: "<i>It was given to me <b>by my grandma</b>.</i> It’s used for reading, and he <b>can</b> read in the dark."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about scientists, inventions and the devices we use every day.",
        learned: [
          "Say who invented or discovered something.",
          "Say what devices could do then and can do now.",
          "Describe how things are made and used.",
          "Plan a short description of a device."
        ]
      }
    }
  ]
});
