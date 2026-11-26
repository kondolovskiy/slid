/* Слід · Англійська мова, 9 клас — «Jobs and careers» (e9s7)
   Програма: МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021), 9 кл.: тема «Робота і професія» — характеристика професій;
   нахили і здібності; вибір професії; професійні якості (PDF с. 33, розд. 5.2.3); функції — аргументувати вибір,
   реєструється на курс, подає заявку (с. 30), просить поради (с. 29); граматика B1 (с. 34–35): Should — ideal or desired
   situations (нове); Would — polite requests, indirectness (нове); will be able to (A2, відкладене з 6 кл.); gerund after
   prepositions (розширення e8s2l3); modals of advice and obligation — повторення з контрастом: should, ought to, must,
   have to, don’t have to (e6s5l5, e6s6l4, e6s6l5, e7s3l5, e8s6l5); розподіл — content/eng/plan.js,
   reports/verify/plan-eng-g7-8-9.md: https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Граматика — Cambridge Grammar (CD Grammar): «Should» (what is ideal or desired), «Would» (requests: more polite and
   indirect), «Would like» (+ to-infinitive), «Be expressions (be able to)» («Not: She won’t can concentrate»),
   «Prepositions and particles» (preposition + -ing form). URL — tasks/…/write-eng-g9-e9s7.md, «Нотатки агента».
   Пастки другої правильної відповіді: should / ought to — синоніми в пораді, в одному пропуску не протиставляються;
   must / have to — обидва для обов’язку, не протиставляються; хибні варіанти — неможливі форми (should to, ought без to,
   will can, interested in to work), а не інша граматична форма. interested to do — теж граматичне (OALD), тому хибним
   варіантом після in не даємо голу основу й не даємо «to» без in.
   Професії — без гендерних стереотипів: nurse — Olena (she) і Hlib (he), pilot — Daryna, programmer — Zoriana,
   firefighter — Emma. Курс Young Coders, заявка й лист — вигадані, лише за героєм (AGENTS.md §4 п. 12).
   Діалоги — репліками в body (D-056), без звуку (D-055 п. 4).
   Герої — серія 4–8 кл., на п'ять років старші, ніж у 4 кл. (memory/short/inbox.md, NOTE (герої)); нові: Hlib (медбрат,
   колега Olena в Poltava), Ms Datsenko (організаторка курсу Young Coders, Kyiv).
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: draft. 7 уроків (6 + фінал). Будова — за e8s6 (verified).
   Перевірка: node tools/validate.mjs --section e9s7 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e9s7",
  grade: 9,
  weeks: [25, 28],
  title: "Jobs and careers",
  why: "To talk about jobs, abilities and professional qualities. And to make polite requests and talk about your future job.",
  requires: ["e4s1l3", "e5s1l5", "e5s3l5", "e6s5l5", "e6s6l4", "e6s6l5", "e7s3l5", "e8s2l3", "e8s6l5", "e9s1l2"],
  meta: { author: "writer-e9s7", created: "2026-11-25", factcheck: null, teacher: null },
  badges: [
    { id: "e9s7boss", name: "Career guide", icon: "trophy", desc: "Finish the final lesson “Jobs and careers”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e9s7l1",
      title: "Jobs and what people do at work",
      short: "Jobs",
      icon: "users",
      status: "draft",
      why: "Every job is different. Learn new job names and say what people do at work.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Careers week",
          body: `<p class="lead">It’s careers week at the penfriend club. Ms Kravets asks: “What job would you like to do?”</p><p><b>Oksana:</b> I’d like to be a vet. I want to help animals.<br><b>Zoriana:</b> I want to be a programmer. I love computers and robots.<br><b>Daryna:</b> I’d love to be a pilot and fly all over the world.<br><b>Emma:</b> I want to be a firefighter. I’d like to help people in danger.</p><p>What do these people do at work?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Oksana: “My mum Olena is a nurse at a hospital in Poltava. Her friend Hlib is a nurse there too. They work shifts: this week Mum works in the day, and next week she works at night.”</p><p>What does <b>work shifts</b> mean?</p>`,
          opts: [
            "work only at the weekend",
            "work at different times: in the day or at night",
            "work at home"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "People who <b>work shifts</b> work at different times: sometimes in the day, sometimes at night. Hospitals are open all the time, so nurses work shifts."
        },
        {
          type: "info",
          title: "New jobs",
          body: `<ul><li>a <b>vet</b> → helps animals that are ill</li><li>an <b>architect</b> → designs buildings</li><li>a <b>programmer</b> → writes programs for computers</li><li>a <b>journalist</b> → writes news stories</li><li>a <b>firefighter</b> → puts out fires and helps people</li><li>a <b>pilot</b> → flies planes</li></ul><p><u>ar</u>chitect, <u>jour</u>nalist, <u>pro</u>grammer, <u>fire</u>fighter</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["A vet", "An architect", "A programmer", "A journalist", "A firefighter"],
          right: ["helps animals that are ill.", "designs buildings.", "writes programs for computers.", "writes news stories.", "puts out fires."],
          hint: "Who works with animals? Who works with computers?",
          fbOk: "Well done!",
          fbBad: "Look at the list of new jobs again.",
          fbText: "A <b>vet</b> helps animals. An <b>architect</b> designs buildings. A <b>programmer</b> writes programs. A <b>journalist</b> writes news stories. A <b>firefighter</b> puts out fires."
        },
        {
          type: "info",
          title: "What is the job like?",
          body: `<ul><li>work <b>indoors</b> (in a building) / <b>outdoors</b> (outside)</li><li>work <b>in a team</b> / work <b>alone</b></li><li>work <b>long hours</b>: ten or twelve hours a day</li><li>work <b>shifts</b>: sometimes in the day, sometimes at night</li><li><b>travel</b> a lot</li></ul><p>Nurses work shifts. Pilots travel a lot.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Hlib tells the penfriend club about his job.</p>`,
          text: "I’m a nurse, like Oksana’s mum. I work {*shifts|outdoors|alone}: this week I work at night. I never work {*alone|indoors|shifts}: I work in a team with doctors and other nurses. My job is in the hospital, so I work {*indoors|outdoors|long}. Sometimes I work {*long hours|a team|outdoors}: twelve hours a day!",
          hint: "At night → ? With doctors → not alone. In a building → ?",
          fbOk: "Exactly.",
          fbBad: "Look at the list “What is the job like?” again.",
          fbText: "Hlib works <b>shifts</b>. He never works <b>alone</b>: he works in a team. The hospital is a building, so he works <b>indoors</b>. Twelve hours a day is <b>long hours</b>."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Daryna: “I talked to a pilot at the airport in Kyiv. Her name is Ms Bilyk. She says pilots travel a lot and often sleep in hotels in different cities. They work in a team with other pilots. They sometimes work long hours.”</p><p>Which sentence is true?</p>`,
          opts: [
            "Pilots always work alone.",
            "Pilots often sleep in hotels in different cities.",
            "Pilots never travel."
          ],
          correct: 1,
          hint: "Find hotels in the text.",
          fbOk: "Right.",
          fbBad: "Read what Ms Bilyk says about hotels and teams.",
          fbText: "Pilots travel a lot and often <b>sleep in hotels</b> in different cities. They work in a team, not alone."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+ar|chi|tect", "+jour|na|list", "+pro|gram|mer", "en|gi|+neer"],
          fbOk: "Good eye!",
          fbBad: "Look at the underlined parts in the list of jobs.",
          fbText: "<u>ar</u>chitect, <u>jour</u>nalist, <u>pro</u>grammer, but engi<u>neer</u>: the stress is at the end."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Emma wants to put out fires and help people in danger.</p>`,
          before: "Emma wants to be a",
          after: ".",
          answer: ["firefighter", "fire fighter"],
          hint: "Who puts out fires?",
          fbOk: "Yes!",
          fbBad: "Look at the list of new jobs: fires.",
          fbText: "A <b>firefighter</b> puts out fires and helps people. Emma wants to be a firefighter."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes to the penfriend club.</p>`,
          text: "I take photos for our school newspaper, and I write short news stories too. So I’d like to be a {*journalist|programmer|vet}. Journalists don’t always work {*indoors|shifts|long hours}: they often go out and talk to people. They also {*travel|design|fly} a lot. My cousin Marta wants to be an {*architect|firefighter|pilot}: she loves drawing houses.",
          hint: "News stories → ? Houses → ?",
          fbOk: "Well done!",
          fbBad: "Check: news stories, going out, travelling, designing houses.",
          fbText: "News stories: a <b>journalist</b>. They go out, so they don’t always work <b>indoors</b>. They <b>travel</b> a lot. Houses: an <b>architect</b>."
        }
      ],
      outro: {
        text: "Vet, architect, programmer, journalist, firefighter: now you can name more jobs and say what the work is like.",
        learned: [
          "Name jobs: a vet, an architect, a programmer, a journalist, a firefighter.",
          "Say what people do at work.",
          "Describe a job: work indoors, in a team, shifts, long hours."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e9s7l2",
      title: "Good at maths, interested in people: abilities",
      short: "Good at doing",
      icon: "star",
      status: "draft",
      why: "Your abilities and interests can help you choose a job. Talk about them without mistakes.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "A careers quiz",
          body: `<p class="lead">Andrii does a careers quiz on the club website.</p><p><b>What are you good at?</b> I’m good at maths. I’m good at solving problems.<br><b>What are you bad at?</b> I’m bad at drawing.<br><b>What are you interested in?</b> I’m interested in building things.<br><b>What are you keen on?</b> I’m keen on playing chess.</p><p>Look at the words after <i>at</i>, <i>in</i> and <i>on</i>. What do you notice?</p>`,
          cta: "Let’s see"
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          text: "Zoriana is interested in {*making|make} robots.",
          fbTitle: "Let’s find out.",
          fbText: "After <b>in</b> we use the <b>-ing</b> form: interested in <b>making</b> robots. The next screen shows the rule."
        },
        {
          type: "info",
          title: "Preposition + -ing",
          body: `<ul><li>good <b>at</b> / bad <b>at</b>: I’m good at <b>drawing</b>.</li><li>interested <b>in</b>: She’s interested in <b>making</b> robots.</li><li>keen <b>on</b>: He’s keen on <b>playing</b> chess.</li></ul><p>After a preposition (at, in, on, of, about), a verb takes <b>-ing</b>.<br>Not: <s>good at draw</s>, <s>interested in to make</s>.</p><p>You can also use a noun: good at <b>maths</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>The penfriend club talks about abilities.</p>`,
          text: "Bohdan is good {*at|on|of} maths. Zoriana is interested {*in|at|of} robots. Daryna is keen {*on|at|in} reading maps. Mariia isn’t bad {*at|in|on} anything: she’s good at drawing and at sport!",
          hint: "good at, bad at, interested in, keen on.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule again: which preposition goes with each word?",
          fbText: "good <b>at</b>, interested <b>in</b>, keen <b>on</b>, bad <b>at</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with the -ing form.",
          text: "Oksana is good at {*looking|look|to look} after animals. Taras is interested in {*writing|to write|wrote} news stories. Kyrylo is keen on {*reading|read|to read} about history. Andrii is bad at {*drawing|draw|to draw}.",
          hint: "After at, in, on → verb + -ing.",
          fbOk: "Yes!",
          fbBad: "After a preposition, a verb takes -ing.",
          fbText: "good at <b>looking</b>, interested in <b>writing</b>, keen on <b>reading</b>, bad at <b>drawing</b>: preposition + -ing."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Mariia’s message is wrong.</p>`,
          text: "I’m very good at [draw], and I’m interested in [!designing] old buildings in Kharkiv.",
          hint: "Look at the verbs after at and in.",
          fbOk: "Good eye!",
          fbBad: "After at: verb + -ing.",
          fbText: "I’m good at <b>drawing</b>: after a preposition, a verb takes -ing. <i>Interested in designing</i> is correct."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Kyrylo: “I love history, and I’m good at telling stories. I’m interested in working with children.”</p><p>Which job is good for Kyrylo?</p>`,
          opts: [
            "a pilot",
            "a firefighter",
            "a history teacher"
          ],
          correct: 2,
          hint: "History, stories, children: where do you find them together?",
          fbOk: "Right.",
          fbBad: "Who tells stories about history to children?",
          fbText: "History, telling stories and working with children: a <b>history teacher</b> is a good job for Kyrylo."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Oksana talks about her future job.</p>`,
          tiles: ["I’m", "interested", "in", "working", "with animals"],
          answer: "I’m interested in working with animals.",
          extra: ["to work"],
          hint: "Start with I’m. After in: -ing.",
          fbOk: "Well done!",
          fbBad: "After in: working, not to work.",
          fbText: "<b>I’m interested in working with animals.</b> interested <b>in</b> + verb + <b>-ing</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Use the verb <i>solve</i>.</p>`,
          before: "Andrii is good at",
          after: "problems.",
          answer: "solving",
          hint: "good at + -ing.",
          fbOk: "Yes!",
          fbBad: "After at: verb + -ing. solve → ?",
          fbText: "After <b>at</b>: -ing. Andrii is good at <b>solving</b> problems. (solve → solving: no <i>e</i>.)"
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes his quiz answers in a message to Emma.</p>`,
          text: "I’m good {*at|in} maths, and I’m keen {*on|at} {*playing|play} chess. I’m bad at {*drawing|draw}, so I can’t be an architect! I’m interested in {*building|to build} things. The quiz says: engineer or programmer!",
          hint: "good at, keen on; after a preposition → -ing.",
          fbOk: "Well done!",
          fbBad: "Check the prepositions and the -ing forms.",
          fbText: "good <b>at</b> maths, keen <b>on playing</b>, bad at <b>drawing</b>, interested in <b>building</b>: preposition + -ing."
        }
      ],
      outro: {
        text: "Good at drawing, interested in working, keen on playing: after a preposition, a verb takes -ing.",
        learned: [
          "Talk about abilities: I’m good at…, I’m bad at…",
          "Talk about interests: I’m interested in…, I’m keen on…",
          "Use the -ing form after a preposition."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e9s7l3",
      title: "A good nurse should be patient: qualities",
      short: "Qualities",
      icon: "user",
      status: "draft",
      why: "Every job needs special qualities. Say what a good nurse, vet or teacher should be like.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "What should a nurse be like?",
          body: `<p class="lead">Oksana asks her mum and Hlib about their job.</p><p><b>Olena:</b> A good nurse should be patient and kind. People in hospital are often worried.<br><b>Hlib:</b> And a nurse should be calm. At night, there’s sometimes an emergency, and he or she has to work fast.<br><b>Olena:</b> There should be more nurses in our hospital!</p><p>What should a good nurse be like?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Olena: “A good nurse should be patient.”</p><p>What does she mean?</p>`,
          opts: [
            "Nurses are never patient.",
            "It’s the best way for a nurse to be.",
            "It’s a question about nurses."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Should</b> here says what is <b>ideal</b>: the best way for a nurse to be. The next screens show qualities for jobs."
        },
        {
          type: "info",
          title: "Qualities for jobs",
          body: `<ul><li><b>patient</b> → you don’t get angry when you wait</li><li><b>reliable</b> → people can trust you</li><li><b>creative</b> → you have new ideas</li><li><b>organised</b> → you plan your work well</li><li><b>calm</b> → you don’t get nervous</li><li><b>brave</b> → you aren’t afraid of danger</li></ul><p><u>pa</u>tient, re<u>li</u>able, cre<u>a</u>tive, <u>or</u>ganised</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["A patient person", "A reliable person", "A creative person", "An organised person", "A brave person"],
          right: ["doesn’t get angry when he or she waits.", "always does what he or she promises.", "has new ideas.", "plans his or her work well.", "isn’t afraid of danger."],
          hint: "Who has new ideas? Who isn’t afraid?",
          fbOk: "Right.",
          fbBad: "Look at the list of qualities again.",
          fbText: "<b>patient</b>: doesn’t get angry. <b>reliable</b>: does what he or she promises. <b>creative</b>: new ideas. <b>organised</b>: plans well. <b>brave</b>: not afraid."
        },
        {
          type: "info",
          title: "Should: the ideal",
          body: `<p>We use <b>should</b> to say what is ideal or best:</p><ul><li>A good nurse <b>should be</b> patient.</li><li>A pilot <b>should be</b> calm.</li><li>There <b>should be</b> more nurses in our hospital.</li></ul><p>should + verb: no <i>to</i>, no <i>-s</i>.<br>Not: <s>should to be</s>, <s>should is</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with should.",
          text: "A good vet {*should be|should to be|should is} patient. A firefighter should be {*brave|lazy|bad-tempered}: the job is dangerous. An architect should be {*creative|lazy|bad-tempered}: he or she needs new ideas. There {*should be|should|should to be} a vet in every village.",
          hint: "should + be, no to. Which quality is good for the job?",
          fbOk: "Exactly.",
          fbBad: "Check: should + be. Lazy and bad-tempered aren’t good qualities.",
          fbText: "A vet <b>should be</b> patient. A firefighter should be <b>brave</b>. An architect should be <b>creative</b>. There <b>should be</b> a vet in every village."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Hlib: “At our hospital, nurses have to wear a uniform. A good nurse should be kind.”</p><p>Which sentence is about a rule, not the ideal?</p>`,
          opts: [
            "At our hospital, nurses have to wear a uniform.",
            "A good nurse should be kind.",
            "There should be more nurses."
          ],
          correct: 0,
          pre: "e6s5l5",
          hint: "have to → a rule. should → the ideal.",
          fbOk: "Well done!",
          fbBad: "Which sentence has have to?",
          fbText: "<b>Have to</b> wear a uniform: it’s a rule at Hlib’s hospital. <b>Should be</b> kind: it’s the ideal."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+pa|tient", "re|+li|a|ble", "cre|+a|tive", "+or|gan|ised"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts in the list of qualities.",
          fbText: "<u>pa</u>tient, re<u>li</u>able, cre<u>a</u>tive, <u>or</u>ganised."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Kyrylo talks about his history teacher.</p>`,
          tiles: ["A good teacher", "should", "be", "patient"],
          answer: "A good teacher should be patient.",
          extra: ["to"],
          keepCase: true,
          hint: "Start with A good teacher. should + be.",
          fbOk: "Good eye!",
          fbBad: "should + verb: no to.",
          fbText: "<b>A good teacher should be patient.</b> should + be, no <i>to</i>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Mariia: “Architects design new buildings, so they need new ideas all the time.”</p>`,
          before: "A good architect should be",
          after: ".",
          answer: "creative",
          hint: "Which quality means you have new ideas?",
          fbOk: "Right.",
          fbBad: "Look at the list of qualities: new ideas.",
          fbText: "A person with new ideas is <b>creative</b>. A good architect should be creative."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes about vets for the penfriend club.</p>`,
          text: "A good vet {*should be|should is} patient: animals can’t say what’s wrong. A vet should also be {*calm|lazy}, because animals get nervous too. Vets should be {*reliable|bad-tempered}: people trust them with their pets. There are no vets in our village, but there {*should be|should to be} one!",
          hint: "should + be. Which qualities are good for a vet?",
          fbOk: "Well done!",
          fbBad: "Check: should + be, no to; good qualities.",
          fbText: "A vet <b>should be</b> patient, <b>calm</b> and <b>reliable</b>. There <b>should be</b> a vet in Oksana’s village."
        }
      ],
      outro: {
        text: "A good nurse should be patient. A pilot should be calm. Use should to say what is ideal.",
        learned: [
          "Name qualities: patient, reliable, creative, organised, calm, brave.",
          "Say what a person in a job should be like.",
          "Use should for the ideal and have to for rules."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e9s7l4",
      title: "Which job is right for me? Asking for advice",
      short: "Advice",
      icon: "bulb",
      status: "draft",
      why: "Choosing a job isn’t easy. Ask for advice and give it, and say what is necessary.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "What should I do?",
          body: `<p class="lead">Andrii writes to Ms Lysenko after the careers quiz.</p><p><b>Andrii:</b> The quiz says engineer or programmer. But I don’t know which job is right for me. What should I do?<br><b>Ms Lysenko:</b> You should talk to people about their jobs. You ought to ask Bohdan’s uncle: he’s an engineer. And don’t worry: you don’t have to decide this year!<br><b>Bohdan:</b> My uncle had to study maths and physics at university for five years.</p><p>Which sentences give advice?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Ms Lysenko: “You don’t have to decide this year.”</p><p>What does she mean?</p>`,
          opts: [
            "Andrii must decide this year.",
            "It isn’t necessary to decide this year.",
            "Andrii isn’t allowed to decide."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Don’t have to</b> = it isn’t necessary. Andrii can decide later. The next screen puts all these words together."
        },
        {
          type: "info",
          title: "Advice, necessary, not necessary",
          body: `<ul><li>Advice: <b>should</b> = <b>ought to</b><br>You <b>should</b> talk to people. = You <b>ought to</b> talk to people.</li><li>Necessary: <b>must</b> = <b>have to</b><br>Engineers <b>have to</b> be good at maths.</li><li>Not necessary: <b>don’t have to</b></li></ul><p>Ask for advice: <b>What should I do?</b> <b>Do you think I should…?</b></p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the sentences.",
          body: `<p>Is it advice, something necessary or something not necessary?</p>`,
          bins: ["Advice", "Necessary", "Not necessary"],
          items: [
            ["You should do a careers quiz.", 0],
            ["You ought to talk to an engineer.", 0],
            ["You have to finish school first.", 1],
            ["We must be at the careers fair at nine.", 1],
            ["You don’t have to decide this year.", 2],
            ["Programmers don’t have to be good at drawing.", 2]
          ],
          hint: "should, ought to → advice. must, have to → necessary. don’t have to → ?",
          fbOk: "Well done!",
          fbBad: "Look at the verb in each sentence.",
          fbText: "Advice: <b>should</b>, <b>ought to</b>. Necessary: <b>have to</b>, <b>must</b>. Not necessary: <b>don’t have to</b>."
        },
        {
          type: "gaps",
          sk: "func",
          title: "Fill in the gaps.",
          body: `<p>Andrii asks Ms Lysenko for advice after the lesson.</p>`,
          text: "Andrii: What {*should I|I should|should I to} do? Ms Lysenko: You {*ought to|ought|should to} talk to an engineer. Andrii: Do you think I {*should|should to|ought} study physics more? Ms Lysenko: Yes, but you {*don’t have to|doesn’t have to|mustn’t to} decide today.",
          hint: "Questions: What should I…? ought + to. should + verb, no to.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule screen again.",
          fbText: "<b>What should I</b> do? You <b>ought to</b> talk… Do you think I <b>should</b> study…? You <b>don’t have to</b> decide today."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Taras wants to be a journalist. He asks Ms Kvitka for advice.</p><p>Which advice is good?</p>`,
          opts: [
            "You should write for the school newspaper.",
            "You shouldn’t read the news.",
            "You ought to stop taking photos."
          ],
          correct: 0,
          hint: "What helps a future journalist?",
          fbOk: "Right.",
          fbBad: "Journalists write news stories. Which idea helps Taras?",
          fbText: "Good advice: <b>You should write for the school newspaper.</b> Taras can practise writing news stories there."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in the chat is wrong.</p>`,
          text: "Daryna: Do you think I [ought] become a pilot? Ms Lysenko: Yes, you should. But you [!have to] work hard at physics.",
          hint: "Look at the word before become.",
          fbOk: "Good eye!",
          fbBad: "ought + to + verb.",
          fbText: "Do you think I <b>ought to</b> become a pilot? Or: Do you think I <b>should</b> become a pilot? <i>You have to work hard</i> is correct."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Zoriana asks her dad for advice.</p>`,
          tiles: ["Should", "I", "become", "a programmer"],
          answer: "Should I become a programmer?",
          extra: ["to"],
          keepCase: true,
          hint: "Start with Should I. Then the verb, no to.",
          fbOk: "Well done!",
          fbBad: "should + verb: no to.",
          fbText: "<b>Should I become a programmer?</b> Should + I + verb."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word: don’t have to.",
          body: `<p>Ms Lysenko: “Take your time, Andrii. It isn’t necessary to choose a job now.”</p>`,
          before: "Andrii doesn’t",
          after: "to choose a job now.",
          answer: ["have", "need"],
          hint: "It isn’t necessary: doesn’t … to.",
          fbOk: "Yes!",
          fbBad: "Look at the rule: not necessary → don’t have to.",
          fbText: "It isn’t necessary: Andrii doesn’t <b>have</b> to choose now. (Doesn’t <b>need</b> to is correct too.)"
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes to Emma.</p>`,
          text: "I asked Ms Lysenko for advice. She said I {*should|should to} talk to people about their jobs. So I talked to Bohdan’s uncle. He’s an engineer. He says engineers {*have to|has to} be good at maths and physics. And you {*don’t have to|doesn’t have to} be good at drawing! What {*should I|I should} do next? Any ideas?",
          hint: "should + verb, no to. Engineers → have to. A question: What should I…?",
          fbOk: "Well done!",
          fbBad: "Check: should without to; engineers (they) → have to; the word order in the question.",
          fbText: "I <b>should</b> talk… Engineers <b>have to</b> be good at maths. You <b>don’t have to</b> be good at drawing. <b>What should I</b> do next?"
        }
      ],
      outro: {
        text: "Should and ought to give advice. Must and have to say what is necessary. Don’t have to: it isn’t necessary.",
        learned: [
          "Ask for advice: What should I do? Do you think I should…?",
          "Give advice with should and ought to.",
          "Say what is necessary and what isn’t: have to, don’t have to."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e9s7l5",
      title: "I would like to…: applying for a summer course",
      short: "Polite requests",
      icon: "voice",
      status: "draft",
      why: "When you apply for a course, you write to people you don’t know. Learn to make polite requests.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Two messages",
          body: `<p class="lead">Zoriana sees a poster: “Young Coders. A summer course in Kyiv for ages 14 to 16. Apply by 1 June.” She writes two messages.</p><p><b>To Daryna:</b> Look at this course! I want to go. Send me the link!</p><p><b>To the course:</b> <i>Dear Ms Datsenko, I would like to apply for the Young Coders course. Would it be possible to join for the first week only? Could you send me the timetable? I would be grateful for your help. Zoriana</i></p><p>Why are the two messages so different?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Zoriana writes to Ms Datsenko. She doesn’t know her.</p><p>Which sentence is the most polite?</p>`,
          opts: [
            "Give me a place on the course.",
            "I want a place on the course.",
            "I would like a place on the course."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>I would like</b> is more polite than <i>I want</i>. <i>Give me…</i> sounds rude to a person you don’t know."
        },
        {
          type: "info",
          title: "Would: polite and indirect",
          body: `<ul><li>I want to… → <b>I would like to</b> / <b>I’d like to</b>…</li><li>Can I…? → <b>Would it be possible to</b>…?</li><li>Will you…? → <b>Would you</b>…? / <b>Could you</b>…?</li><li>Thanks! → <b>I would be grateful</b> for your help.</li></ul><p>would like + <b>to</b> + verb: I’d like <b>to apply</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with would.",
          body: `<p>Zoriana’s friend Daryna writes to the course too.</p>`,
          text: "Dear Ms Datsenko, I {*would like|will like|would to like} to apply for the Young Coders course. {*Would|Does|Will be} it be possible to bring my own laptop? {*Would|Do|Are} you send me the list of lessons, please? I {*would be|would|will be be} grateful for your help.",
          hint: "would like to…; Would it be possible…? Would you…? I would be grateful…",
          fbOk: "Exactly.",
          fbBad: "Look at the rule screen again: would + verb.",
          fbText: "I <b>would like</b> to apply. <b>Would</b> it be possible…? <b>Would</b> you send me…? I <b>would be</b> grateful."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Daryna can’t pay for the course before June. She writes to Ms Datsenko.</p><p>Which request is polite?</p>`,
          opts: [
            "Would it be possible to pay in July?",
            "I pay in July, OK?",
            "You must wait for my money."
          ],
          correct: 0,
          hint: "Look for would.",
          fbOk: "Right.",
          fbBad: "Which request is indirect and polite?",
          fbText: "<b>Would it be possible to pay in July?</b> is polite and indirect. The other two sound rude in a letter."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Zoriana asks Ms Datsenko about the course.</p>`,
          tiles: ["Would", "it", "be", "possible", "to join", "for one week"],
          answer: "Would it be possible to join for one week?",
          extra: ["will"],
          keepCase: true,
          hint: "Start with Would it be possible…?",
          fbOk: "Good eye!",
          fbBad: "Would + it + be possible + to + verb?",
          fbText: "<b>Would it be possible to join for one week?</b> A polite, indirect question."
        },
        {
          type: "info",
          title: "Applying: a form, a letter, a CV",
          body: `<ul><li>For a course, you often fill in an <b>application form</b> or write a letter.</li><li>For a job, people often send a <b>CV</b>: a short text about their education, skills and work.</li></ul><p>In the US, people usually say <b>résumé</b>.</p><p>Never send your real personal data online without your parents.</p>`,
          cta: "Next"
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Daryna’s letter is wrong.</p>`,
          text: "I would like [apply] for the course, and I would be grateful for some information.",
          hint: "would like + ? + verb.",
          fbOk: "Well done!",
          fbBad: "would like + to + verb.",
          fbText: "I would like <b>to apply</b>: would like + <b>to</b> + verb. <i>I would be grateful</i> is correct."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Zoriana wants to ask about the price. She wants to be polite.</p>`,
          before: "I",
          after: "like to ask about the price of the course.",
          answer: ["would", "should"],
          hint: "I … like to: polite.",
          fbOk: "Yes!",
          fbBad: "Look at the rule: I want to → I … like to.",
          fbText: "<b>I would like to</b> ask (or <b>I’d like to</b>): it’s more polite than <i>I want to</i>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Zoriana fills in the application form. Question: “Why do you want to join the course?”</p>`,
          text: "I’m keen on {*making|make} robots, and I’d like {*to learn|learning} more about coding. In the future, I’d like to be a programmer. I’m good at {*solving|solve} problems. {*Would|Will be} it be possible to bring my own laptop? I {*would be|would} grateful for your answer.",
          hint: "keen on + -ing; would like + to; Would it be possible…? I would be grateful.",
          fbOk: "Well done!",
          fbBad: "Check: preposition + -ing; would like to; would be grateful.",
          fbText: "keen on <b>making</b>, I’d like <b>to learn</b>, good at <b>solving</b>. <b>Would</b> it be possible…? I <b>would be</b> grateful."
        }
      ],
      outro: {
        text: "I would like to…, Would it be possible to…?, Could you…?, I would be grateful…: now you can write polite requests.",
        learned: [
          "Make polite requests with would: I would like to…, Would it be possible to…?",
          "Write a short polite application for a course.",
          "Know what an application form and a CV are."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e9s7l6",
      title: "My future job: I’ll be able to…",
      short: "Will be able to",
      icon: "path",
      status: "draft",
      why: "Talk about your future job and what you will be able to do.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "In ten years",
          body: `<p class="lead">Ms Kravets asks the penfriend club: “What will you be able to do in ten years?”</p><p><b>Oksana:</b> I’ll be a vet. I’ll be able to help sick animals.<br><b>Zoriana:</b> I’ll be able to write programs for robots.<br><b>Tom:</b> I’ll be able to play the drums in a real band!<br><b>Daryna:</b> I won’t be able to sleep at home every night: I’ll be a pilot!</p><p>Why do they say <i>will be able to</i>, not <i>will can</i>?</p>`,
          cta: "Let’s see"
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          text: "After the course, Zoriana {*will be able to|will can} make a simple game.",
          fbTitle: "Let’s find out.",
          fbText: "<b>Will be able to</b> is correct. We can’t use <i>can</i> after <i>will</i>. The next screen shows the rule."
        },
        {
          type: "info",
          title: "will be able to",
          body: `<p><b>can</b> has no form after <b>will</b>. Use <b>will be able to</b>:</p><ul><li><b>I’ll be able to</b> help animals.</li><li>She <b>won’t be able to</b> sleep at home every night.</li><li><b>Will</b> you <b>be able to</b> come? – Yes, I <b>will</b>. / No, I <b>won’t</b>.</li></ul><p>Not: <s>I will can</s>, <s>I won’t can</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "When I finish university, {*I’ll be able to|I’ll can|I’ll able to} work as a vet. Tom {*won’t be able to|won’t can|doesn’t able to} come to the club next week: he’s in a concert. {*Will|Do|Are} you be able to help me with my application?",
          hint: "will + be able to. Questions: Will you be able to…?",
          fbOk: "Yes!",
          fbBad: "Look at the rule: will be able to, won’t be able to.",
          fbText: "<b>I’ll be able to</b> work. Tom <b>won’t be able to</b> come. <b>Will</b> you be able to help me?"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: My future job, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i>I have loved animals since I was little. When I was six, I was going to be a nurse, like my mum. Now I’m sure: I want to be a vet. I’m good at biology, and I’m interested in looking after animals. At the weekend, I help at a farm near our village. I feed the calves and clean the barn. It isn’t easy, but I love it! – Oksana</i></p><p>Why does Oksana want to be a vet?</p>`,
          opts: [
            "Her mum is a vet.",
            "She loves animals and is good at biology.",
            "She doesn’t like people."
          ],
          correct: 1,
          hint: "Find good at and interested in in the text.",
          fbOk: "Right.",
          fbBad: "Read the first and the fourth sentences again.",
          fbText: "Oksana has loved animals since she was little, and she’s <b>good at biology</b>. Her mum is a nurse, not a vet."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: My future job, part 2 of 3",
          title: "Choose all the correct answers.",
          body: `<p><i>A good vet should be patient and calm. Animals can’t tell you what’s wrong, and they are often scared. After Year 9, I’d like to go to a lyceum in Poltava, like my cousin Denys. I’ll choose a profile with a lot of biology. Then I’ll have to study at university for a long time. It won’t be easy, but I’m hard-working.</i></p><p>What are Oksana’s plans?</p>`,
          opts: [
            "to go to a lyceum in Poltava",
            "to choose a profile with a lot of biology",
            "to study at university",
            "to stop studying after Year 9"
          ],
          correct: [0, 1, 2],
          hint: "Find I’d like to, I’ll choose and I’ll have to.",
          fbOk: "Well done!",
          fbBad: "Read about the lyceum, the profile and university again.",
          fbText: "Oksana wants to go to a <b>lyceum in Poltava</b>, choose a <b>profile with biology</b> and then <b>study at university</b>. She won’t stop after Year 9."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: My future job, part 3 of 3",
          title: "Read and choose.",
          body: `<p><i>There isn’t a vet in Zelena Dolyna now. When people’s animals are ill, they have to drive to Poltava. In ten years, I’ll be able to help them here, in our village. I won’t be able to work only in the day: animals get ill at night too! But I hope I’ll be a good vet.</i></p><p>What will Oksana be able to do in ten years?</p>`,
          opts: [
            "help people’s animals in her village",
            "drive animals to Poltava every day",
            "work only in the day"
          ],
          correct: 0,
          hint: "Find I’ll be able to in the text.",
          fbOk: "Exactly.",
          fbBad: "Read the sentence with In ten years again.",
          fbText: "In ten years, Oksana <b>will be able to help</b> people’s animals in Zelena Dolyna. She <b>won’t be able to</b> work only in the day."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Think about the whole text “My future job”.</p><p>What is it about?</p>`,
          opts: [
            "how to look after calves on a farm",
            "why nurses work shifts",
            "why Oksana wants to be a vet and how she will become one"
          ],
          correct: 2,
          hint: "Look at the title of the text.",
          fbOk: "Right.",
          fbBad: "The title is “My future job”.",
          fbText: "The text is about Oksana’s <b>future job</b>: why she wants to be a vet, her plans and what she’ll be able to do."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word: will be able to.",
          body: `<p>Look at part 3 of Oksana’s text again.</p>`,
          before: "In ten years, Oksana will be",
          after: "to help animals in her village.",
          answer: "able",
          hint: "will be … to + verb.",
          fbOk: "Yes!",
          fbBad: "Look at the rule: will be able to.",
          fbText: "In ten years, Oksana will be <b>able</b> to help animals: will be <b>able to</b> + verb."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Zoriana writes about her future job.</p>`,
          tiles: ["I’ll", "be", "able", "to", "write", "programs for robots"],
          answer: "I’ll be able to write programs for robots.",
          extra: ["can"],
          hint: "I’ll + be able to + verb.",
          fbOk: "Well done!",
          fbBad: "After will: be able to, not can.",
          fbText: "<b>I’ll be able to write programs for robots.</b> will + <b>be able to</b> + verb."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes “My future job” for the club.</p>`,
          text: "I’m interested in {*taking|take} photos and writing news stories, so I’d like to be a journalist. A good journalist {*should be|should to be} brave and reliable. In five years, {*I’ll be able to|I’ll can} write for a real newspaper. I {*won’t be able to|won’t can} stay at home much, but I love travelling!",
          hint: "interested in + -ing; should + be; will be able to.",
          fbOk: "Well done!",
          fbBad: "Check: preposition + -ing; should without to; will be able to.",
          fbText: "interested in <b>taking</b>; a journalist <b>should be</b> brave; <b>I’ll be able to</b> write; I <b>won’t be able to</b> stay at home much."
        }
      ],
      outro: {
        text: "I’ll be able to…, I won’t be able to…: now you can talk about your future job and what you will be able to do.",
        learned: [
          "Use will be able to and won’t be able to for the future.",
          "Read a text about a future job.",
          "Say what job you would like and why."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e9s7l7",
      title: "Careers week: the club guide",
      short: "Section final",
      icon: "trophy",
      status: "draft",
      boss: true,
      badge: "e9s7boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you check the guide?",
          body: `<p class="lead">The penfriend club is writing a guide: “Jobs and careers”.</p><p>Ms Kravets needs your help. Check the sentences. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "match",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Match the halves.",
          left: ["A vet", "An architect", "A journalist", "A pilot"],
          right: ["helps animals that are ill.", "designs buildings.", "writes news stories.", "flies planes."],
          pre: "e9s7l1",
          fbOk: "Right.",
          fbBad: "Who works with animals? Who flies?",
          fbText: "A <b>vet</b> helps animals. An <b>architect</b> designs buildings. A <b>journalist</b> writes news stories. A <b>pilot</b> flies planes."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          text: "Mariia is good at {*drawing|draw|to draw}. Bohdan is interested in {*building|to build|built} bridges. Daryna is keen {*on|at|in} reading maps.",
          pre: "e9s7l2",
          fbOk: "Yes!",
          fbBad: "After a preposition → -ing. keen + ?",
          fbText: "good at <b>drawing</b>, interested in <b>building</b>, keen <b>on</b>: preposition + -ing."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Complete the sentences with should.",
          text: "A good nurse {*should be|should to be|should is} patient. A firefighter should be {*brave|lazy|bad-tempered}. An architect should be {*creative|lazy|bad-tempered}.",
          pre: "e9s7l3",
          fbOk: "Exactly.",
          fbBad: "should + be. Which qualities are good for the job?",
          fbText: "A nurse <b>should be</b> patient. A firefighter should be <b>brave</b>. An architect should be <b>creative</b>."
        },
        {
          type: "sort",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Sort the sentences.",
          bins: ["Advice", "Necessary", "Not necessary"],
          items: [
            ["You ought to try a careers quiz.", 0],
            ["You should talk to a nurse.", 0],
            ["Engineers have to be good at maths.", 1],
            ["You don’t have to choose a job this year.", 2]
          ],
          pre: "e9s7l4",
          fbOk: "Well done!",
          fbBad: "should, ought to → advice. have to → ? don’t have to → ?",
          fbText: "Advice: <b>ought to</b>, <b>should</b>. Necessary: <b>have to</b>. Not necessary: <b>don’t have to</b>."
        },
        {
          type: "build",
          sk: "func",
          eyebrow: "Task 5",
          title: "Put the words in order.",
          body: `<p>Write a polite question to a course organiser.</p>`,
          tiles: ["Would", "it", "be", "possible", "to pay", "in July"],
          answer: "Would it be possible to pay in July?",
          extra: ["will"],
          keepCase: true,
          pre: "e9s7l5",
          fbOk: "Good eye!",
          fbBad: "Would + it + be possible + to + verb?",
          fbText: "<b>Would it be possible to pay in July?</b> A polite, indirect question."
        },
        {
          type: "pick",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Find the mistake.",
          body: `<p>One phrase in the guide is wrong.</p>`,
          text: "After the course, Zoriana [will can] write simple programs, and she [!will be able to] build a robot.",
          pre: "e9s7l6",
          fbOk: "Right.",
          fbBad: "Can we use can after will?",
          fbText: "Zoriana <b>will be able to</b> write simple programs. <i>Will can</i> is wrong: after will, use <b>be able to</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 7",
          title: "Read and choose.",
          body: `<p><i>Hlib is a nurse at a hospital in Poltava. He works shifts, and he often works at night. He says a good nurse should be calm and patient.</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Hlib always works in the day.",
            "Hlib thinks a good nurse should be calm.",
            "Hlib is a vet."
          ],
          correct: 1,
          pre: "e9s7l3",
          fbOk: "Well done!",
          fbBad: "Read the last sentence again.",
          fbText: "Hlib says a good nurse <b>should be calm</b> and patient. He works shifts, often at night."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about jobs, abilities and qualities, ask for advice, write polite requests and talk about your future job.",
        learned: [
          "Name jobs and say what the work is like.",
          "Talk about abilities: good at doing, interested in doing.",
          "Say what a person in a job should be like, and ask for advice.",
          "Make polite requests with would and talk about the future with will be able to."
        ]
      }
    }
  ]
});
