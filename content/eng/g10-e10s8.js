/* Слід · Англійська мова, 10 клас — «Education and careers» (e10s8)
   Програма: П1407 («Іноземні мови. 10–11 класи», наказ МОН № 1407 від 23.10.2017), спеціалізовані школи, B2:
   10 кл., теми «Шкільне життя» (заклади освіти; освіта в Україні та за кордоном) і «Робота і професії» (сучасні
   професії) — с. 22 (інтеграція тем — с. 22; лексика с. 23); функція «обговорювати перспективи» — l6; граматика (с. 23):
   phrasal and prepositional verbs: position of indirect object — наше трактування: місце додатка в дієслові з часткою
   (fill in the form / fill the form in / fill it in; TQ-140) — l3–l4, повторення e8s2l4; повний поділ separable /
   inseparable — e11s6; prepositions in time phrases (before, for, since, till, until, by) — l5, повторення e7s1l4
   (for / since), e10s1l3 і e10s4 (by / until); обсяги — с. 21 (читання 350–400 слів — l2, три уривки ≤ 180 слів):
   https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf
   Розподіл — content/eng/plan.js, reports/verify/plan-eng-g10-11.md. Не дублює e8s6 (типи шкіл, правила) і e9s7
   (професії, якості, CV): тут — навчання після школи й сучасні професії. fill out — теж BrE (OALD fill-in), тож у ключі
   поруч із fill in. graduate — лише про університет (OALD graduate_2: «graduate from high school» — NAmE).
   Факти про освіту (НМТ, ліцей з 2027, коледж після Year 9, бакалавр 4 / 3 / 4 роки, освіта до 18 в Англії, UCAS,
   A levels, apprenticeship) — по два джерела; URL — tasks/…/write-eng-g10-e10s8.md, «Нотатки агента».
   Діалоги — репліками в body (D-056), без звуку (D-055 п. 4).
   Герої — серія 4–9 кл., на шість років старші, ніж у 4 кл. (memory/short/inbox.md, NOTE (герої)): Oksana, Emma,
   Andrii, Taras, Zoriana — 16, Dmytro — 12; Denys (кузен Оксани, e8s6) — 18, університет у Kyiv; нові — Arsen (17, ще один
   кузен Ostap, коледж у Lviv; не Marko: тому в e9s5 12, тут 13 — verifier-e10s8), Leah (19, кузина Emma, apprentice), Iryna Kostenko, Viktor Hnatyshyn (гості ярмарку).
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e10s8, 2026-11-26). 7 уроків (6 + фінал). Будова — за розділами 10 кл. (e10s1, e10s3).
   Перевірка: node tools/validate.mjs --section e10s8 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e10s8",
  grade: 10,
  weeks: [32, 35],
  title: "Education and careers",
  why: "To talk about schools, colleges and universities in Ukraine and abroad. And to talk about modern jobs and how to get ready for them.",
  requires: ["e6s6l1", "e6s6l2", "e7s1l4", "e8s2l4", "e9s7l1", "e9s7l5"],
  meta: { author: "writer-e10s8", created: "2026-11-26", factcheck: "verifier-e10s8, 2026-11-26 (reports/verify/write-eng-g10-e10s8.md)", teacher: null },
  badges: [
    { id: "e10s8boss", name: "Careers guide editor", icon: "trophy", desc: "Finish the final lesson “Education and careers”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e10s8l1",
      title: "Lyceum, college, university: where to study",
      short: "Where to study",
      icon: "city",
      status: "verified",
      why: "After Year 9 and after school, you can choose where to study. Learn the words for places and ways of studying.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Where are you studying now?",
          body: `<p class="lead">This month, the penfriend club magazine asks: “Where are you studying now?”</p><p><b>Oksana:</b> This year, I started at a lyceum in Poltava. I take the bus there every morning.<br><b>Denys:</b> I’m Oksana’s cousin. I’m in my first year at university in Kyiv.<br><b>Arsen:</b> I’m Ostap’s cousin. After Year 9, I went to a college in Lviv.<br><b>Emma:</b> I’m taking my GCSEs this summer. Then I’m staying at my school for the sixth form.</p><p>Lyceum, college, university: what’s the difference?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>At the end of their studies, some students get a <b>degree</b>.</p><p>Who is studying for a degree now?</p>`,
          opts: [
            "Oksana",
            "Denys",
            "Arsen"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Denys</b>. Students at university study for a <b>degree</b>. Oksana is still at school, and Arsen is learning a profession at a college."
        },
        {
          type: "info",
          title: "Where to study in Ukraine",
          body: `<ul><li>a <b>ly<u>ce</u>um</b> → the last years of school. Students choose a <b>profile</b>: the subjects for their future.</li><li>a <b><u>col</u>lege</b> → you can go there after Year 9 or after Year 11 and learn a profession. After Year 9, you finish your school subjects there too.</li><li>a <b>uni<u>ver</u>sity</b> → you study for a <b>degree</b>. A <b><u>bach</u>elor’s degree</b> usually takes four years in Ukraine.</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["At a lyceum, students", "At a college, students", "At university, students", "In Ukraine, a bachelor’s degree"],
          right: ["finish school and choose a profile.", "learn a profession.", "study for a degree.", "usually takes four years."],
          hint: "Where do students study for a degree?",
          fbOk: "Well done!",
          fbBad: "Look at the box on places to study again.",
          fbText: "At a <b>lyceum</b>, students finish school and choose a profile. At a <b>college</b>, they learn a profession. At <b>university</b>, they study for a degree. A <b>bachelor’s degree</b> usually takes four years in Ukraine."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><i>“I finished Year 9 at my gymnasium and went to a college in Lviv. Now I’m in my second year. We still have school subjects, like maths and Ukrainian, but two days a week we have practice days at a garage. I’m learning to repair electric cars. When I finish college, I’ll get a diploma. Then I can find a job or study more.” – Arsen, 17</i></p><p>What is Arsen learning at college?</p>`,
          opts: [
            "to repair electric cars",
            "to drive a car",
            "computer science"
          ],
          correct: 0,
          hint: "What does he do on his practice days?",
          fbOk: "Right.",
          fbBad: "Read the sentences about the garage again.",
          fbText: "Arsen is learning <b>to repair electric cars</b>. He also has school subjects, because he went to college after Year 9."
        },
        {
          type: "info",
          title: "Talking about studying",
          body: `<ul><li><b>go to university</b>, be <b>at university</b> (no <i>the</i>)</li><li><b>study for a degree in</b> computer science</li><li><b>get into</b> university → be accepted there</li><li>a <b>qualifi<u>ca</u>tion</b> → you get it when you pass exams or finish a course: a diploma, a degree</li><li><b><u>grad</u>uate</b> (verb) → finish university with a degree; a <b><u>grad</u>uate</b> → a person with a degree</li></ul><p>In British English, you <b>leave school</b> or <b>finish school</b>, but you <b>graduate</b> from university.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          text: "Oksana goes to a {*lyceum|college|university} in Poltava: it’s for the last years of school. Her cousin Denys got {*into|on|at} a university in Kyiv. He’s studying {*for|at|on} a degree in computer science. In 2030, he’ll {*graduate|study|get into} from university.",
          hint: "The last years of school → ? Be accepted → get … university.",
          fbOk: "Yes!",
          fbBad: "Look at the two boxes again.",
          fbText: "Oksana goes to a <b>lyceum</b>. Denys got <b>into</b> a university. He’s studying <b>for</b> a degree. In 2030, he’ll <b>graduate</b> from university."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Emma’s aunt Kate finished university with a degree in history.</p>`,
          before: "Kate is a history",
          after: ".",
          answer: "graduate",
          hint: "Look at the box on talking about studying.",
          fbOk: "Well done!",
          fbBad: "The word is a verb and a noun.",
          fbText: "Kate is a history <b>graduate</b>: she has a degree in history. <i>Graduate</i> is a verb too: she <i>graduated</i> from university."
        },
        {
          type: "choice",
          sk: "cult",
          title: "Read and choose.",
          body: `<p>Oksana writes:</p><p><i>“There’s a big change in Ukrainian schools. From 1 September 2027, students who start Year 10 will study at a lyceum for three years. So school in Ukraine will take twelve years. My brother Dmytro is 12 now, so he’ll be one of those students.”</i></p><p>How many years will Dmytro study at a lyceum?</p>`,
          opts: [
            "one",
            "two",
            "three"
          ],
          correct: 2,
          hint: "When will Dmytro start Year 10: before or after 2027?",
          fbOk: "Exactly.",
          fbBad: "Read the second sentence again.",
          fbText: "Dmytro is 12, so he’ll start Year 10 after 2027. He’ll study at a lyceum for <b>three</b> years, and his school will take twelve years."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["u|ni|+ver|si|ty", "qual|i|fi|+ca|tion", "+grad|u|ate", "+col|lege"],
          fbOk: "Right.",
          fbBad: "Look at the underlined parts in the boxes.",
          fbText: "uni<u>ver</u>sity, qualifi<u>ca</u>tion, <u>grad</u>uate, <u>col</u>lege."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes to her penfriend Freya.</p>`,
          text: "Hi Freya! This year, I started at a {*lyceum|university|college} in Poltava. I’ve chosen the science profile. After school, I hope to get {*into|at|on} university in Kharkiv and study {*for|at|in} a degree in veterinary medicine. When I {*graduate|apply|prepare}, I’ll work with animals.",
          hint: "Oksana is still at school. Which word means ‘finish university with a degree’?",
          fbOk: "Well done!",
          fbBad: "Check: a school with a profile, get … university, study … a degree.",
          fbText: "A <b>lyceum</b> has profiles. Get <b>into</b> university. Study <b>for</b> a degree. When I <b>graduate</b>, I’ll work with animals."
        }
      ],
      outro: {
        text: "Lyceum, college or university: now you can say where people study and what they study for.",
        learned: [
          "Explain what a lyceum, a college and a university are in Ukraine.",
          "Use study for a degree, get into university and graduate.",
          "Read about a big change in Ukrainian schools."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e10s8l2",
      title: "After school: studying in Ukraine and abroad",
      short: "After school",
      icon: "globe",
      status: "verified",
      why: "After school, there is more than one good path. Read how three young people chose theirs in Ukraine and in the UK.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Three paths after school",
          body: `<p class="lead">Ms Kravets: “Our next magazine article is called ‘Three paths after school’. Denys, Emma and Emma’s cousin Leah have written about their plans.”</p><p>Denys lives in Kyiv. Emma and Leah live in England.</p><p>What paths can you take after school?</p>`,
          cta: "Let’s read"
        },
        {
          type: "info",
          title: "Words for the article",
          body: `<ul><li><b>the NMT</b> → the National Multi-subject Test. Students in Ukraine take it on a computer to apply to university.</li><li>a <b>test centre</b> → a place where people take a test</li><li><b>A levels</b> → exams that students in England usually take at about 18</li><li><b>UCAS</b> → the service that students use to apply to UK universities</li><li>an <b>ap<u>pren</u>ticeship</b> → you work for a company, get paid and learn a job at the same time</li><li><b><u>qual</u>ified</b> → has passed the exams for a job</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Three paths after school, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i><b>1. Denys, 18, Kyiv</b><br>Last summer, I took the NMT. I prepared for it for a whole year with online lessons. You do it on a computer at a test centre, and you need it to apply to university in Ukraine. In 2026, it had four subjects: Ukrainian, maths and the history of Ukraine for everyone, and one more subject that you chose. I chose English, of course! My friend Ruslan lives in Poland now, so he took the test at a centre there. With my results, I applied to several universities and got into one in Kyiv. Now I’m in my first year of computer science. A bachelor’s degree here usually takes four years, so I’ll graduate in 2030.</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Denys took the NMT on paper at his school.",
            "Everyone took the same four subjects in 2026.",
            "Denys’s friend took the NMT outside Ukraine."
          ],
          correct: 2,
          hint: "Where does Ruslan live? Where did he take the test?",
          fbOk: "Right.",
          fbBad: "Check each sentence against the text.",
          fbText: "Ruslan lives in Poland, so he took the NMT <b>outside Ukraine</b>. The test is on a computer at a test centre, and the fourth subject was different: everyone chose one."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Three paths after school, part 2 of 3",
          title: "Read and choose.",
          body: `<p><i><b>2. Emma, 16, England</b><br>This summer, I’m taking my GCSEs. In England, you can leave school at 16, but you have to stay in education or training until you’re 18. You can stay on at school for the sixth form, go to a college or start an apprenticeship. I’m staying at my school for the sixth form. Some of my friends are going to a college instead, because it has more practical courses. I’m going to study three A levels: biology, chemistry and maths. A levels usually take two years. Next year, I’ll apply to universities through UCAS. I’d love to study in Edinburgh, near my friend Isla. In Scotland, a bachelor’s degree usually takes four years. In England, it usually takes three.</i></p><p>How long does a bachelor’s degree usually take in England?</p>`,
          opts: [
            "four years",
            "three years",
            "two years"
          ],
          correct: 1,
          hint: "Find England in the last two sentences.",
          fbOk: "Exactly.",
          fbBad: "Four years is about Scotland. Two years is about A levels.",
          fbText: "In England, a bachelor’s degree usually takes <b>three years</b>. In Scotland, it’s usually four, and A levels take two."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Three paths after school, part 3 of 3",
          title: "Choose all the correct answers.",
          body: `<p><i><b>3. Leah, 19, the north of England</b><br>I’m Emma’s cousin. I didn’t want to go to university straight after the sixth form, so I applied for an apprenticeship with a wind energy company. Now I work four days a week, and on the fifth day I study at a college. As an apprentice, I get paid for my work, and I’m learning a job at the same time. Some days I climb a wind turbine that’s 80 metres high – it isn’t a job for people who are scared of heights! In two years, I’ll be a qualified wind turbine technician. Lots of my friends are at university, and that’s great too. We just chose different paths. My mum was worried at first, but now she’s proud of me.</i></p><p>Which sentences are true?</p>`,
          opts: [
            "Leah studies at a college one day a week.",
            "Leah doesn’t get paid because she’s still learning.",
            "Leah went to university after the sixth form.",
            "Leah thinks university is a good path too."
          ],
          correct: [0, 3],
          hint: "Check each sentence against the text. What does Leah do on the fifth day?",
          fbOk: "Well done!",
          fbBad: "Two sentences are true. Read about pay and about her friends again.",
          fbText: "Leah studies at a <b>college</b> on the fifth day, and she thinks university is <b>great too</b>. She gets paid as an apprentice, and she didn’t go to university after the sixth form."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Think about all three parts of the article.</p><p>What is the main idea?</p>`,
          opts: [
            "There is more than one good path after school.",
            "Everybody should go to university after school.",
            "It’s better to study abroad than at home."
          ],
          correct: 0,
          hint: "Read Leah’s last two sentences again.",
          fbOk: "Yes!",
          fbBad: "Denys, Emma and Leah all chose different things.",
          fbText: "Denys chose university, Emma chose the sixth form and Leah chose an apprenticeship. The main idea: <b>there is more than one good path</b>."
        },
        {
          type: "match",
          sk: "read",
          title: "Match the halves.",
          left: ["Denys took the NMT", "Emma will apply through", "Leah is an apprentice", "In Scotland, a degree usually takes"],
          right: ["at a test centre.", "UCAS.", "with a wind energy company.", "four years."],
          hint: "Start with the easy one: Leah.",
          fbOk: "Good eye!",
          fbBad: "Look at the three parts of the article again.",
          fbText: "Denys took the NMT <b>at a test centre</b>. Emma will apply through <b>UCAS</b>. Leah is an apprentice <b>with a wind energy company</b>. In Scotland, a degree usually takes <b>four years</b>."
        },
        {
          type: "gaps",
          sk: "cult",
          title: "Complete the sentences.",
          text: "In Ukraine, students take the {*NMT|A levels} on a computer. In England, many students study for A levels in the {*sixth form|test centre|lyceum}. A bachelor’s degree usually takes {*four|three} years in Ukraine and {*three|four} years in England.",
          hint: "Ukraine → Denys. England → Emma.",
          fbOk: "Exactly.",
          fbBad: "Compare part 1 and part 2 of the article.",
          fbText: "In Ukraine: the <b>NMT</b>, and a degree usually takes <b>four</b> years. In England: A levels in the <b>sixth form</b>, and a degree usually takes <b>three</b> years."
        },
        {
          type: "word",
          sk: "cult",
          title: "Write the missing word.",
          body: `<p>Emma: “In England, you can leave school at 16. But that isn’t the end of learning.”</p>`,
          before: "In England, you have to stay in education or training until you’re",
          after: ".",
          answer: ["18", "eighteen"],
          hint: "Look at the start of part 2.",
          fbOk: "Well done!",
          fbBad: "Read Emma’s second sentence again.",
          fbText: "In England, you can leave school at 16, but you have to stay in education or training until you’re <b>18</b>: in the sixth form, at a college or as an apprentice."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["ap|+pren|tice|ship", "+qual|i|fied", "+bach|el|or"],
          fbOk: "Right.",
          fbBad: "Look at the underlined parts in the boxes of Lessons 1 and 2.",
          fbText: "ap<u>pren</u>ticeship, <u>qual</u>ified, <u>bach</u>elor."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes a comment under the article.</p>`,
          text: "Great article! I’m in Year 10, so next year I’ll take the {*NMT|A levels|UCAS}. I’d love to study photography. A bachelor’s degree here usually takes {*four|three|two} years. Leah’s idea of an {*apprenticeship|A level|test centre} sounds great too: you get paid and learn a job. We can all choose different {*paths|tests|centres}!",
          hint: "Taras lives in Lviv, Ukraine. Which test do students take there?",
          fbOk: "Well done!",
          fbBad: "Check: a test in Ukraine, a degree in Ukraine, Leah’s path.",
          fbText: "Taras will take the <b>NMT</b>. A degree in Ukraine usually takes <b>four</b> years. Leah has an <b>apprenticeship</b>. We can choose different <b>paths</b>."
        }
      ],
      outro: {
        text: "The NMT, A levels, UCAS, an apprenticeship: now you can read and talk about studying after school in Ukraine and the UK.",
        learned: [
          "Read an article about three paths after school.",
          "Compare studying in Ukraine and in the UK.",
          "Explain what the NMT, A levels and an apprenticeship are."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e10s8l3",
      title: "Apply for, fill in, find out: phrasal and prepositional verbs",
      short: "Apply for, fill in",
      icon: "scroll",
      status: "verified",
      why: "Forms, courses and offers come with their own verbs. Learn the phrasal and prepositional verbs you need to apply.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "I’m going to apply!",
          body: `<p class="lead">Zoriana sends a message to Andrii.</p><p><i>“Guess what! There’s a summer IT school in Kyiv, and I’m going to <b>apply for</b> a place! First I have to <b>find out</b> when the course starts. Then I’ll <b>fill in</b> the form and <b>hand</b> it <b>in</b> at the school office. Mum says I shouldn’t <b>put</b> it <b>off</b>.”</i></p><p>What do the words in bold mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Zoriana’s mum: “Don’t put it off!”</p><p>What does <b>put off</b> mean?</p>`,
          opts: [
            "decide to do something later",
            "do something badly",
            "give something to a teacher"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "To <b>put off</b> something is to decide to do it later. Zoriana’s mum wants her to fill in the form now."
        },
        {
          type: "info",
          title: "Phrasal verbs for applying",
          body: `<p>A <b>phrasal verb</b> = a verb + a small word (in, out, up, down, off). Together they have a new meaning.</p><ul><li><b>fill in</b> a form → write information in it (<b>fill out</b> is correct too)</li><li><b>hand in</b> → give your work or a form to a teacher or an office</li><li><b>find out</b> → learn new information</li><li><b>put off</b> → decide to do something later</li><li><b>sign up for</b> → agree to join a course or a club</li><li><b>turn down</b> → say no to an offer</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the meanings.",
          left: ["fill in", "hand in", "find out", "sign up for", "turn down"],
          right: ["write information in a form", "give your work to a teacher", "learn new information", "agree to join a course", "say no to an offer"],
          hint: "Start with the easy ones: find out, turn down.",
          fbOk: "Well done!",
          fbBad: "Look at the box on phrasal verbs again.",
          fbText: "<b>Fill in</b> → write information in a form. <b>Hand in</b> → give your work to a teacher. <b>Find out</b> → learn new information. <b>Sign up for</b> → agree to join a course. <b>Turn down</b> → say no to an offer."
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>The school office asks you to complete a form.</p><p>Which sentences are correct?</p>`,
          opts: [
            "Please fill in this form.",
            "Please fill on this form.",
            "Please fill out this form.",
            "Please fill up this form."
          ],
          correct: [0, 2],
          hint: "Look at the line about forms in the box.",
          fbOk: "Right.",
          fbBad: "Two sentences are correct. Fill up means ‘make something full’.",
          fbText: "<b>Fill in</b> and <b>fill out</b> a form are both correct in British English. <i>Fill up</i> means ‘make full’: fill up a glass. <i>Fill on</i> isn’t English."
        },
        {
          type: "info",
          title: "Verbs with prepositions",
          body: `<p>Some verbs always go with a preposition:</p><ul><li><b>apply for</b> the thing you want: a job, a course, a place</li><li><b>apply to</b> the place: a university, a college, a company</li><li><b>prepare for</b> an exam · <b>look for</b> → try to find</li><li><b>depend on</b>: It depends on my results.</li></ul><p>Denys applied <b>to</b> several universities <b>for</b> a place on a computer science course.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          text: "Zoriana is applying {*for|to|on} a place on the coding course. Next year, she’s going to apply {*to|for|on} two universities in Kyiv. She’s already preparing {*for|to|on} the NMT. Her choice of university depends {*on|for|to} her results.",
          hint: "The thing you want → apply …; the place → apply …",
          fbOk: "Exactly.",
          fbBad: "Look at the box on verbs with prepositions.",
          fbText: "Apply <b>for</b> a place (the thing). Apply <b>to</b> universities (the place). Prepare <b>for</b> the NMT. Depends <b>on</b> her results."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Please hand {*in|up|off} your forms at the school office. Did you find {*out|up|off} when the course starts? Arsen signed {*up|out|off} for a weekend course. The garage offered him a job, but he turned it {*down|off|out}.",
          hint: "Give a form to an office; learn information; join a course; say no to an offer.",
          fbOk: "Yes!",
          fbBad: "Look at the box on phrasal verbs again.",
          fbText: "Hand <b>in</b> your forms. Find <b>out</b> when it starts. Signed <b>up</b> for a course. Turned it <b>down</b>: he said no to the job."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Arsen writes:</p><p><i>“The garage where I have my practice days offered me a full-time job. It was a great offer, but I turned it down. I want to finish college first. I’ve also signed up for an online course about electric car batteries.”</i></p><p>What did Arsen do?</p>`,
          opts: [
            "He took the full-time job.",
            "He finished college.",
            "He said no to the job offer."
          ],
          correct: 2,
          hint: "What does turn down mean?",
          fbOk: "Good eye!",
          fbBad: "Look at the second sentence again.",
          fbText: "He <b>turned</b> the offer <b>down</b>: he said no to it. He wants to finish college first, so he hasn’t finished it yet."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Two words are correct here. Write one of them.</p>`,
          before: "Before the course, Zoriana has to fill",
          after: "an application form.",
          answer: ["in", "out"],
          hint: "Which small words go with fill and a form?",
          fbOk: "Well done!",
          fbBad: "Look at the line about forms in the box on phrasal verbs.",
          fbText: "She has to fill <b>in</b> an application form. <b>Fill out</b> is correct too."
        },
        {
          type: "build",
          sk: "write",
          eyebrow: "Final",
          title: "Put the words in order.",
          body: `<p>Zoriana writes to the summer IT school.</p>`,
          tiles: ["I’d", "like", "to apply", "for", "a place", "on your course"],
          answer: "I’d like to apply for a place on your course.",
          extra: ["to"],
          hint: "Apply … the thing you want.",
          fbOk: "Right.",
          fbBad: "Is a place the thing you want or the place you apply to?",
          fbText: "<b>I’d like to apply for a place on your course.</b> A place is the thing you want, so <b>apply for</b>."
        }
      ],
      outro: {
        text: "Fill in, hand in, find out, apply for: now you have the verbs you need to apply for a course.",
        learned: [
          "Use phrasal verbs for applying: fill in, hand in, find out, sign up for.",
          "Choose between apply for and apply to.",
          "Use prepare for, look for and depend on."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e10s8l4",
      title: "Fill it in: where the object goes",
      short: "Fill it in",
      icon: "target",
      status: "verified",
      why: "Fill in the form or fill the form in? Learn where the object goes in phrasal verbs.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "In the form or the form in?",
          body: `<p class="lead">Ms Lysenko, Andrii’s English teacher in Kyiv, writes to the class.</p><p><i>“English summer camp! Please fill in the form and hand it in by Friday. If you can’t come, fill the form in anyway and write ‘No’.”</i></p><p><b>Andrii:</b> Fill in the form, fill the form in… Which one is right?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Which is correct: <i>fill in the form</i> or <i>fill the form in</i>?</p>`,
          opts: [
            "Only fill in the form.",
            "Only fill the form in.",
            "Both are correct."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Both are correct.</b> With a noun like <i>the form</i>, the small word can go before or after it. But with <i>it</i>, there’s only one way: <i>hand it in</i>."
        },
        {
          type: "info",
          title: "Where does the object go?",
          body: `<p>With a <b>noun</b>, the small word can go before or after it. Both are correct:</p><ul><li>fill <b>in</b> the form = fill the form <b>in</b></li><li>hand <b>in</b> your homework = hand your homework <b>in</b></li><li>turn <b>down</b> the offer = turn the offer <b>down</b></li></ul><p>With a <b>pronoun</b> (it, them, me, him, her), the pronoun goes in the <b>middle</b>:</p><ul><li>fill <b>it</b> in · hand <b>them</b> in · turn <b>it</b> down</li></ul><p>Not: <s>fill in it</s></p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the words.",
          bins: ["correct", "not correct"],
          items: [
            ["hand it in", 0],
            ["fill the form in", 0],
            ["turn down the offer", 0],
            ["hand in it", 1],
            ["turn down it", 1],
            ["fill in them", 1]
          ],
          hint: "Is the object a noun or a pronoun?",
          fbOk: "Well done!",
          fbBad: "A pronoun goes in the middle.",
          fbText: "Correct: <b>hand it in</b>, <b>fill the form in</b>, <b>turn down the offer</b>. A pronoun goes in the middle: <i>hand it in</i>, <i>turn it down</i>, <i>fill them in</i>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Andrii tells Ms Lysenko what he did. There are two correct orders.</p>`,
          tiles: ["I", "filled", "in", "the form"],
          answer: ["I filled in the form.", "I filled the form in."],
          extra: ["on"],
          hint: "With a noun, in can go before or after it.",
          fbOk: "Yes!",
          fbBad: "Use all the words except one. Fill in or fill on?",
          fbText: "<b>I filled in the form.</b> = <b>I filled the form in.</b> With a noun, both orders are correct."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Ms Lysenko: “Where’s your form, Andrii?”</p>`,
          tiles: ["I’ve", "handed", "it", "in"],
          answer: "I’ve handed it in.",
          extra: ["for"],
          hint: "Where does a pronoun go?",
          fbOk: "Right.",
          fbBad: "With it, there’s only one correct order.",
          fbText: "<b>I’ve handed it in.</b> The pronoun <i>it</i> goes in the middle. Not: <s>handed in it</s>."
        },
        {
          type: "info",
          title: "Verbs with prepositions: the object goes after",
          body: `<p>With verbs like <b>apply for</b>, <b>look for</b>, <b>prepare for</b> and <b>depend on</b>, the object always comes <b>after</b> the small word. A noun or a pronoun – it doesn’t matter:</p><ul><li>I’m looking <b>for my form</b>. I’m looking <b>for it</b>. Not: <s>looking it for</s></li><li>There’s one free place. I’ll apply <b>for it</b>.</li></ul><p>Compare: fill <b>it</b> in (a phrasal verb) – apply <b>for it</b> (a verb + preposition).</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "I can’t find my form. I’m looking {*for it|it for}. Here it is! Now I can fill {*it in|in it}. There’s one free place, so I’ll apply {*for it|it for} today. Arsen got a job offer, but he turned {*it down|down it}.",
          hint: "Phrasal verb → pronoun in the middle. Verb + preposition → pronoun after.",
          fbOk: "Exactly.",
          fbBad: "Look at the two boxes again: fill it in, but apply for it.",
          fbText: "Looking <b>for it</b>, apply <b>for it</b> (verb + preposition: the object goes after). Fill <b>it in</b>, turned <b>it down</b> (phrasal verb: the pronoun goes in the middle)."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of Andrii’s message is wrong.</p>`,
          text: "Mum read my form and [!checked it]. Then I [filled in it] and [!handed it in] at the office.",
          hint: "Look at where it goes in each part.",
          fbOk: "Good eye!",
          fbBad: "Find a pronoun in the wrong place.",
          fbText: "It should be <b>filled it in</b>: the pronoun goes in the middle. <i>Checked it</i> and <i>handed it in</i> are correct."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing words.",
          body: `<p>Ms Lysenko gives Daryna the camp form. Write two words.</p>`,
          before: "Ms Lysenko: “Here’s the camp form. Please fill",
          after: "today.”",
          answer: ["it in", "it out"],
          hint: "A pronoun and a small word. Which comes first?",
          fbOk: "Well done!",
          fbBad: "Not in it: where does the pronoun go?",
          fbText: "Please fill <b>it in</b> today (or <b>fill it out</b>). The pronoun goes in the middle."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes to Emma about the camp.</p>`,
          text: "Ms Lysenko gave us the camp form yesterday. I filled {*it in|in it} last night, and today I handed {*it in|in it}. Daryna lost her form, so now she’s looking {*for it|it for}. Bohdan can’t come, so he turned {*the invitation down|down it}.",
          hint: "Pronoun with a phrasal verb → in the middle. With look for → after.",
          fbOk: "Brilliant!",
          fbBad: "Check where it goes in each sentence.",
          fbText: "Filled <b>it in</b>, handed <b>it in</b>, looking <b>for it</b>, turned <b>the invitation down</b> (= turned down the invitation)."
        }
      ],
      outro: {
        text: "Fill in the form, fill the form in, fill it in: now you know where the object goes.",
        learned: [
          "Put a noun before or after the small word: fill in the form, fill the form in.",
          "Put a pronoun in the middle of a phrasal verb: hand it in.",
          "Put the object after a preposition: apply for it, look for it."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e10s8l5",
      title: "By Friday or until Friday? Time phrases",
      short: "Time phrases",
      icon: "line",
      status: "verified",
      why: "Deadlines matter when you apply. Use for, since, by, until, till and before correctly.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Read the poster",
          body: `<p class="lead">Zoriana sees a poster at school.</p><p><b>Summer IT School, Kyiv</b><br>We’ve run summer courses since 2022.<br>Each course lasts for three weeks, from 7 July.<br>Applications are open until 31 May.<br>Send your form by 31 May. We’ll answer by 15 June.</p><p>Zoriana wants to send her form on 2 June. Is that OK?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>The poster says: “Applications are open until 31 May.”</p><p>Can Zoriana send her form on 2 June?</p>`,
          opts: [
            "Yes, because the course starts in July.",
            "No, because applications are open only until 31 May.",
            "Yes, because the school has run courses since 2022."
          ],
          correct: 1,
          hint: "What happens to applications after 31 May?",
          fbOk: "Right.",
          fbBad: "Until 31 May: and after that?",
          fbText: "<b>No.</b> Applications are open <b>until</b> 31 May: after that, they close. She has to send it <b>by</b> 31 May."
        },
        {
          type: "info",
          title: "For and since",
          body: `<p>With the Present Perfect:</p><ul><li><b>for</b> + a period of time: for three weeks, for ten years, for a long time</li><li><b>since</b> + the starting point: since 2022, since September, since Year 7, since I was ten</li></ul><p>Zoriana has been in the coding club <b>since</b> Year 7. She’s been in it <b>for</b> almost four years.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Zoriana has been in the coding club {*since|for} Year 7. She has studied English {*for|since} ten years. The IT school has run summer courses {*since|for} 2022, and each course lasts {*for|since} three weeks.",
          hint: "A period of time → for. A starting point → since.",
          fbOk: "Yes!",
          fbBad: "Is it a period of time or a starting point?",
          fbText: "<b>Since</b> Year 7 and <b>since</b> 2022 (starting points). <b>For</b> ten years and <b>for</b> three weeks (periods of time)."
        },
        {
          type: "info",
          title: "By, until, till and before",
          body: `<ul><li><b>by</b> 31 May → not later than 31 May. Send your form <b>by</b> 31 May. (On 31 May is OK.)</li><li><b>until</b> 31 May → all the time up to 31 May, and then it stops. Applications are open <b>until</b> 31 May.</li><li><b>till</b> = until, but less formal.</li><li><b>before</b> 31 May → earlier than 31 May: 30 May is fine, 31 May is too late.</li></ul><p><b>by</b> → an action is done by then. <b>until</b> → a situation continues up to then.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          text: "The school office is open {*until|by} 5 pm. Please hand in your forms {*by|until} Friday. The course goes on {*until|by} 25 July. We’ll send you an answer {*by|until} 15 June.",
          hint: "Does something continue up to then, or is an action done by then?",
          fbOk: "Exactly.",
          fbBad: "until → a situation continues. by → an action is done not later than then.",
          fbText: "Open <b>until</b> 5 pm and goes on <b>until</b> 25 July (it continues). Hand in your forms <b>by</b> Friday and send an answer <b>by</b> 15 June (an action, not later than then)."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is wrong?</p>`,
          opts: [
            "Send your form until Friday.",
            "The office is open till 5 pm.",
            "Applications are open until 31 May."
          ],
          correct: 0,
          hint: "Look at each sentence: does something continue, or is an action done by then?",
          fbOk: "Good eye!",
          fbBad: "Till is correct: it’s the same as until.",
          fbText: "<s>Send your form until Friday</s> is wrong: sending is an action with a deadline, so <b>send it by Friday</b>. <i>Till</i> and <i>until</i> are both correct for the office."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Zoriana’s message is wrong.</p>`,
          text: "I’ve been in the coding club [for] 2023, and I’ll send my form by Friday.",
          hint: "Check both time phrases: a period, a starting point or a deadline?",
          fbOk: "Well done!",
          fbBad: "2023 is a starting point.",
          fbText: "I’ve been in the club <b>since</b> 2023: 2023 is a starting point. <i>By Friday</i> is correct: it’s a deadline."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Zoriana promises her mum. There are two correct orders.</p>`,
          tiles: ["I’ll", "send", "my form", "by", "Friday"],
          answer: ["I’ll send my form by Friday.", "By Friday I’ll send my form."],
          extra: ["until"],
          hint: "Sending is an action with a deadline.",
          fbOk: "Yes!",
          fbBad: "Until or by for a deadline?",
          fbText: "<b>I’ll send my form by Friday.</b> Sending is an action with a deadline, so <b>by</b>, not <i>until</i>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Zoriana fell in love with coding when she was ten. She still loves it.</p>`,
          before: "Zoriana has loved coding",
          after: "she was ten.",
          answer: ["since", "ever since"],
          hint: "When she was ten: a period or a starting point?",
          fbOk: "Well done!",
          fbBad: "Look at the box on for and since.",
          fbText: "She has loved coding <b>since</b> she was ten: that’s the starting point."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Zoriana writes to Andrii.</p>`,
          text: "I’ve wanted to go to the Summer IT School {*since|for} last summer! Each course lasts {*for|since} three weeks. Applications are open {*until|by} 31 May, but I’ll send my form {*by|until} Friday. They’ll answer by 15 June.",
          hint: "Starting point or period? Does it continue, or is it done by then?",
          fbOk: "Brilliant!",
          fbBad: "Check each time phrase again.",
          fbText: "<b>Since</b> last summer (a starting point). <b>For</b> three weeks (a period). Open <b>until</b> 31 May (it continues). Send my form <b>by</b> Friday (a deadline)."
        }
      ],
      outro: {
        text: "For, since, by, until, till and before: now you can read and write about deadlines.",
        learned: [
          "Use for and since with the Present Perfect.",
          "Choose by for a deadline and until or till for something that continues.",
          "Read a poster with dates and deadlines."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e10s8l6",
      title: "Modern jobs and the skills they need",
      short: "Modern jobs",
      icon: "bulb",
      status: "verified",
      why: "Many jobs today didn’t exist when your grandparents were young. Talk about modern jobs, skills and the future.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Careers fair",
          body: `<p class="lead">It’s careers fair day at Andrii’s school in Kyiv. Three guests talk about modern jobs.</p><p><b>Iryna Kostenko:</b> I’m a cybersecurity specialist. I protect a bank’s computers from hackers.<br><b>Viktor Hnatyshyn:</b> I’m a UX designer. I work on apps for a company in Lviv.<br><b>Leah</b> (on a video call from England): I’m training to be a wind turbine technician.</p><p>What skills do these jobs need?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Viktor is a UX designer.</p><p>What does he do, do you think?</p>`,
          opts: [
            "He makes apps and websites easy to use.",
            "He repairs computers.",
            "He designs clothes."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A <b>UX designer</b> makes apps and websites easy to use. UX means ‘user experience’: how people feel when they use an app."
        },
        {
          type: "info",
          title: "Modern jobs",
          body: `<ul><li>a <b>cybersecurity specialist</b> → protects computers and data from hackers</li><li>a <b>data <u>an</u>alyst</b> → studies large amounts of data and finds useful patterns</li><li>an <b>app de<u>vel</u>oper</b> → creates apps for phones and computers</li><li>a <b>UX de<u>sign</u>er</b> → makes apps and websites easy to use (UX = user experience)</li><li>a <b>wind <u>tur</u>bine tech<u>ni</u>cian</b> → looks after and repairs wind turbines</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["A cybersecurity specialist", "A data analyst", "An app developer", "A UX designer", "A wind turbine technician"],
          right: ["protects computers and data from hackers.", "finds useful patterns in data.", "creates apps for phones and computers.", "makes apps and websites easy to use.", "repairs wind turbines."],
          hint: "Start with the easy ones: hackers and wind turbines.",
          fbOk: "Well done!",
          fbBad: "Look at the box on modern jobs again.",
          fbText: "A <b>cybersecurity specialist</b> protects computers from hackers. A <b>data analyst</b> finds patterns in data. An <b>app developer</b> creates apps. A <b>UX designer</b> makes apps easy to use. A <b>wind turbine technician</b> repairs wind turbines."
        },
        {
          type: "info",
          title: "Skills for modern jobs",
          body: `<ul><li><b>digital skills</b> → using computers, apps and the internet well</li><li><b>problem-solving</b> → finding ways to deal with problems</li><li><b>teamwork</b> → working well with other people</li><li><b>communi<u>ca</u>tion skills</b> → explaining your ideas clearly</li><li><b>attention to detail</b> → noticing small things and small mistakes</li></ul><p>The job <b>requires</b> teamwork. = It needs teamwork.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><i>“In my job, I protect a bank’s computers and data from hackers. People think it’s all about coding, but you also need to be good at problem-solving: every attack is a new puzzle. Communication skills are important too, because I often explain problems to people who aren’t experts. And you need attention to detail, because one small mistake can let a hacker in. At school, I wasn’t the best at maths, but I was always curious. Later, I studied computer science at university in Kharkiv.” – Iryna Kostenko</i></p><p>Why does Iryna need attention to detail?</p>`,
          opts: [
            "Because she explains problems to people.",
            "Because every attack is a new puzzle.",
            "Because one small mistake can let a hacker in."
          ],
          correct: 2,
          hint: "Find attention to detail in the text. What comes after because?",
          fbOk: "Exactly.",
          fbBad: "Each skill in the text has its own reason.",
          fbText: "She needs attention to detail <b>because one small mistake can let a hacker in</b>. Explaining problems is about communication skills, and the puzzle is about problem-solving."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          text: "Leah works with other technicians, so {*teamwork|attention to detail|digital skills} is important. Viktor explains his ideas to his clients, so he needs good {*communication|digital|problem-solving} skills. Iryna notices small mistakes in code: she has great {*attention to detail|teamwork|communication}.",
          hint: "With other people → ? Explaining ideas → ? Noticing small things → ?",
          fbOk: "Yes!",
          fbBad: "Look at the box on skills again.",
          fbText: "Working with others → <b>teamwork</b>. Explaining ideas → <b>communication</b> skills. Noticing small mistakes → <b>attention to detail</b>."
        },
        {
          type: "info",
          title: "Talking about the future",
          body: `<ul><li>I’m <b>thinking of</b> becoming a data analyst. (thinking of + -ing)</li><li>It’s a job with <b>good prospects</b>. → you can find work and be successful in it</li><li>There’s a <b>growing demand for</b> people with digital skills. → more and more companies need them</li><li>I’m <b>not sure it’s for me</b>, because I don’t like sitting at a computer all day.</li><li><b>On the other hand</b>, … → to give a different side</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p><b>Bohdan:</b> I’m thinking of becoming a wind turbine technician.<br><b>Andrii:</b> …</p><p>Andrii talks about the future of the job. What does he say?</p>`,
          opts: [
            "That sounds great! I’m thinking to become one too.",
            "That sounds great! I think there’s a growing demand for people who can repair wind turbines.",
            "Really? I’m not sure it’s for me, because I don’t like heights."
          ],
          correct: 1,
          hint: "Which answer is about the job’s future, and is correct English?",
          fbOk: "Right.",
          fbBad: "One answer has a mistake, and one is about Andrii, not the job.",
          fbText: "<b>A growing demand for</b> talks about the job’s future. <s>Thinking to become</s> is wrong: <i>thinking of becoming</i>. <i>I’m not sure it’s for me</i> is correct, but it’s about Andrii, not the job."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Mariia tells the club about her plans.</p>`,
          tiles: ["I’m", "thinking", "of", "becoming", "a UX designer"],
          answer: "I’m thinking of becoming a UX designer.",
          extra: ["to"],
          hint: "thinking of + -ing.",
          fbOk: "Well done!",
          fbBad: "Thinking of or thinking to?",
          fbText: "<b>I’m thinking of becoming a UX designer.</b> After <i>thinking of</i>, use the <b>-ing</b> form."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["tech|+ni|cian", "de|+vel|op|er", "+an|a|lyst", "de|+sign|er"],
          fbOk: "Right.",
          fbBad: "Look at the underlined parts in the box on modern jobs.",
          fbText: "tech<u>ni</u>cian, de<u>vel</u>oper, <u>an</u>alyst, de<u>sign</u>er."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes about the careers fair for the school website.</p>`,
          text: "At our careers fair, we found {*out|up|off} a lot about modern jobs. Iryna told us that her job {*requires|depends} attention to detail. Viktor makes apps easy to use: he’s a {*UX designer|data analyst|wind turbine technician}. I’m thinking {*of|to} becoming a data analyst. I think it’s a job with good {*prospects|skills}.",
          hint: "found … = learnt new information. thinking … + -ing.",
          fbOk: "Well done!",
          fbBad: "Check the boxes on modern jobs, skills and the future.",
          fbText: "We found <b>out</b> a lot. Her job <b>requires</b> attention to detail. Viktor is a <b>UX designer</b>. I’m thinking <b>of</b> becoming a data analyst. A job with good <b>prospects</b>."
        }
      ],
      outro: {
        text: "Cybersecurity, data, apps and wind turbines: now you can talk about modern jobs, the skills they need and their future.",
        learned: [
          "Describe modern jobs and what people do in them.",
          "Name skills: problem-solving, teamwork, attention to detail.",
          "Talk about the future of a job: good prospects, a growing demand for."
        ]
      }
    },

    /* ───────────── Урок 7 (фінал) ───────────── */
    {
      id: "e10s8l7",
      title: "Our guide: after school",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e10s8boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you check the club’s careers guide?",
          body: `<p class="lead">The penfriend club is making a guide: “After school: paths and jobs”. Ms Kravets needs an editor.</p><p>Check the pages. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Choose the correct answer.",
          body: `<p>Arsen finished Year 9 at his gymnasium. Now he’s learning a profession and finishing his school subjects at the same time.</p><p>Where is he studying?</p>`,
          opts: [
            "at a lyceum",
            "at a college",
            "at university"
          ],
          correct: 1,
          pre: "e10s8l1",
          fbOk: "Yes!",
          fbBad: "Where can you learn a profession after Year 9?",
          fbText: "At a <b>college</b>: you can go there after Year 9 and learn a profession. A lyceum is the last years of school, and at university you study for a degree."
        },
        {
          type: "gaps",
          sk: "cult",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          text: "A bachelor’s degree in Ukraine usually takes {*four|three} years. In England, it usually takes {*three|four} years. In Ukraine, students take the {*NMT|A levels} to apply to university.",
          pre: "e10s8l2",
          fbOk: "Exactly.",
          fbBad: "Remember Denys’s and Emma’s parts of the article.",
          fbText: "Ukraine: usually <b>four</b> years, and the <b>NMT</b>. England: usually <b>three</b> years."
        },
        {
          type: "word",
          sk: "cult",
          eyebrow: "Task 3",
          title: "Write the missing word.",
          body: `<p>Emma: “Next year, I’ll apply to universities.”</p>`,
          before: "In the UK, students apply to university through",
          after: ".",
          answer: "UCAS",
          pre: "e10s8l2",
          fbOk: "Well done!",
          fbBad: "It’s a short name in capital letters.",
          fbText: "Students in the UK apply to university through <b>UCAS</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Fill in the gaps.",
          text: "Denys applied {*to|for} several universities. Leah applied {*for|to} an apprenticeship. Before the course, please find {*out|up} the dates and hand {*in|off} your form at the office.",
          pre: "e10s8l3",
          hint: "Is it a place or the thing you want? Then remember the phrasal verbs for information and forms.",
          fbOk: "Right.",
          fbBad: "The place → apply to. The thing you want → apply for.",
          fbText: "Applied <b>to</b> universities (the place). Applied <b>for</b> an apprenticeship (the thing). Find <b>out</b> the dates, hand <b>in</b> your form."
        },
        {
          type: "multi",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Choose all the correct answers.",
          body: `<p>Which sentences are correct?</p>`,
          opts: [
            "Please fill the form in.",
            "Please fill in it.",
            "Please fill it in.",
            "I’m looking it for.",
            "I’m looking for it."
          ],
          correct: [0, 2, 4],
          pre: "e10s8l4",
          hint: "Is it a phrasal verb or a verb with a preposition? Then check where the pronoun goes.",
          fbOk: "Well done!",
          fbBad: "Three sentences are correct. Where does a pronoun go?",
          fbText: "Correct: <b>fill the form in</b>, <b>fill it in</b>, <b>looking for it</b>. A pronoun goes in the middle of a phrasal verb, but after a preposition."
        },
        {
          type: "build",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Put the words in order.",
          body: `<p>The garage offered Arsen a job. What did he do? There are two correct orders.</p>`,
          tiles: ["He", "turned", "the offer", "down"],
          answer: ["He turned the offer down.", "He turned down the offer."],
          extra: ["off"],
          pre: "e10s8l4",
          fbOk: "Yes!",
          fbBad: "With a noun, down can go before or after it.",
          fbText: "<b>He turned the offer down.</b> = <b>He turned down the offer.</b> With a noun, both orders are correct."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 7",
          title: "Fill in the gaps.",
          text: "The office is open {*until|by} 6 pm. Send your form {*by|until} 31 May. Zoriana has been in the coding club {*since|for} Year 7.",
          pre: "e10s8l5",
          hint: "Does it continue, is it a deadline or is it a starting point?",
          fbOk: "Exactly.",
          fbBad: "until → it continues; by → a deadline; since → a starting point.",
          fbText: "Open <b>until</b> 6 pm (it continues). Send it <b>by</b> 31 May (a deadline). <b>Since</b> Year 7 (a starting point)."
        },
        {
          type: "match",
          sk: "vocab",
          eyebrow: "Task 8",
          title: "Match the halves.",
          left: ["A data analyst", "A UX designer", "A wind turbine technician", "A cybersecurity specialist"],
          right: ["finds useful patterns in data.", "makes apps easy to use.", "repairs wind turbines.", "protects data from hackers."],
          pre: "e10s8l6",
          fbOk: "Good eye!",
          fbBad: "Remember the guests at the careers fair.",
          fbText: "A <b>data analyst</b> finds patterns in data. A <b>UX designer</b> makes apps easy to use. A <b>wind turbine technician</b> repairs turbines. A <b>cybersecurity specialist</b> protects data from hackers."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 9",
          title: "Choose the correct answer.",
          body: `<p>Bohdan talks about his plans. Which sentence is correct?</p>`,
          opts: [
            "I’m thinking to become a wind turbine technician.",
            "I’m thinking of become a wind turbine technician.",
            "I’m thinking of becoming a wind turbine technician."
          ],
          correct: 2,
          pre: "e10s8l6",
          fbOk: "Well done!",
          fbBad: "thinking of + which form?",
          fbText: "<b>I’m thinking of becoming</b> a wind turbine technician: after <i>thinking of</i>, use the -ing form."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about studying after school, apply for a course and discuss modern jobs.",
        learned: [
          "Talk about places to study in Ukraine and the UK.",
          "Use phrasal and prepositional verbs and put the object in the right place.",
          "Use for, since, by, until and till.",
          "Talk about modern jobs, skills and prospects."
        ]
      }
    }
  ]
});
