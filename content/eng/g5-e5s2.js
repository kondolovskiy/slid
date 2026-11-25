/* Слід · Англійська мова, 5 клас — «School life» (e5s2)
   Програма: МП-ІМ «Іноземна мова. 5–9 класи» (Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021), 5 кл., тема «Шкільне життя»:
   розклад уроків, робочий день, урок іноземної мови, види діяльності на уроці; функція «розпитувати з метою роз'яснення
   та уточнення інформації» — с. 20 (розд. 4.2.1); граматика A2 — Present Simple (affirmative, negative, questions),
   adverbs of frequency (position mid), imperatives, can (permission), could (requests) — с. 21–22 (розд. 4.4):
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Концентрично з 4 кл.: how often (e4s3l2), on Mondays і he plays / goes / does (e4s3l3), imperatives (e4s5l1), at 3 pm (e4s8l2) —
   reports/verify/plan-eng-g5.md §6. Герої 4 кл. — без суперечностей (Andrii — Kyiv, автобус; Oksana — село біля Poltava, пішки; Emma — велосипед).
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Форми, сполуки й наголос — за Cambridge Dictionary і OALD (URL — tasks/…/write-eng-g5-e5s2.md, «Нотатки агента»).
   Статус: verified (reports/verify/e5s2.md). 7 уроків (6 + фінал). Будова — за еталоном e4s1.
   Перевірка: node tools/validate.mjs --section e5s2 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e5s2",
  grade: 5,
  weeks: [5, 8],
  title: "School life",
  why: "To talk about your school day and your timetable. And to understand your teacher in your English lessons.",
  requires: ["e4s3l2", "e4s3l3", "e4s5l1", "e4s8l2"],
  meta: { author: "writer-e5s2", created: "2026-11-19", factcheck: "verifier-e5s2 (reports/verify/e5s2.md)", teacher: null },
  badges: [
    { id: "e5s2boss", name: "Star of the class", icon: "trophy", desc: "Finish the final lesson “School life”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e5s2l1",
      title: "My timetable: subjects and days",
      short: "Timetable",
      icon: "book",
      status: "verified",
      why: "What lessons have you got on Monday? Tell a friend about your timetable.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What’s on Monday?",
          body: `<p class="lead">It’s September. Oksana has got a new timetable.</p><p><b>Monday:</b> Ukrainian, maths, English, history, PE<br><b>Tuesday:</b> maths, science, Ukrainian, art, music</p><p><b>Oksana:</b> <i>My favourite subject is art. We’ve got art on Tuesday!</i></p><p>Maths, history, PE: what are these words?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>In which lesson do children run and play games?</p>`,
          opts: [
            "PE",
            "history",
            "music"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Children run and play games in <b>PE</b>. The next screen shows all the subjects."
        },
        {
          type: "info",
          title: "School subjects",
          body: `<p>Maths, art, history – these are school <b><u>sub</u>jects</b>.</p><ul><li><b>maths</b> – numbers</li><li><b><u>his</u>tory</b> – people long ago</li><li><b><u>sci</u>ence</b> – plants, animals and water</li><li><b>art</b> – drawing and painting</li><li><b><u>mu</u>sic</b> – songs</li><li><b>PE</b> – sport and games</li><li><b><u>Eng</u>lish</b>, <b>U<u>krai</u>nian</b> – languages</li></ul><p>A <b><u>time</u>table</b> is a list of your lessons.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["In art, we", "In music, we", "In PE, we", "In maths, we", "In history, we"],
          right: ["draw and paint pictures.", "sing songs.", "run, jump and play games.", "count and add numbers.", "read about people long ago."],
          hint: "Look at the list of subjects again.",
          fbOk: "Yes!",
          fbBad: "Check the list: what do we do in each lesson?",
          fbText: "In <b>art</b>, we draw and paint. In <b>music</b>, we sing. In <b>PE</b>, we run and play games. In <b>maths</b>, we count. In <b>history</b>, we read about people long ago."
        },
        {
          type: "info",
          title: "We’ve got maths on Monday",
          body: `<p><b>What lessons have you got</b> on Monday?<br>– <b>We’ve got</b> maths and English.</p><p><b>What’s your favourite subject?</b><br>– My favourite subject is art.</p><ul><li>a day → <b>on</b> Monday</li><li><b>break</b> – a short time between lessons</li></ul><p>We play outside at break.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "read",
          title: "Fill in the gaps.",
          body: `<p>Andrii’s timetable for Wednesday: English, maths, music, history, PE.</p>`,
          text: "On Wednesday Andrii {*has|have} got five lessons. His first lesson is {*English|maths}. After maths, he has got {*music|art}. His last lesson is {*PE|history}.",
          hint: "Read the timetable from the start to the end.",
          fbOk: "Exactly.",
          fbBad: "Look at Andrii’s timetable again.",
          fbText: "Andrii is <b>he</b>: he <b>has</b> got. First: <b>English</b>. After maths: <b>music</b>. Last: <b>PE</b>."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><b>Emma:</b> <i>My favourite subject is science. We’ve got science on Monday and Thursday. I don’t like maths.</i></p><p>When has Emma got science?</p>`,
          opts: [
            "on Tuesday",
            "at the weekend",
            "on Monday and Thursday"
          ],
          correct: 2,
          fbOk: "Right.",
          fbBad: "Read Emma’s words again.",
          fbText: "Emma writes: “We’ve got science <b>on Monday and Thursday</b>.”"
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+time|ta|ble", "+his|to|ry", "+sci|ence", "+mu|sic"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>time</u>table, <u>his</u>tory, <u>sci</u>ence, <u>mu</u>sic: the strong part is at the start."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>We read about people long ago. What lesson is it?</p>`,
          before: "It’s",
          after: ".",
          answer: "history",
          hint: "Look at the list of subjects: people long ago.",
          fbOk: "Good eye!",
          fbBad: "Which subject is about people long ago?",
          fbText: "People long ago: it’s <b>history</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana’s Tuesday: maths, science, Ukrainian, art, music.</p><p>Oksana writes to Emma.</p>`,
          text: "Hi Emma! I’ve got a new {*timetable|break}. On Tuesday we’ve got art and {*music|PE}. In music, we {*sing|draw} songs. My favourite {*subject|timetable} is art. Bye!",
          hint: "Look at Oksana’s Tuesday. Is there PE?",
          fbOk: "Well done!",
          fbBad: "Read Oksana’s Tuesday again.",
          fbText: "A list of lessons is a <b>timetable</b>. On Tuesday there is <b>music</b>, not PE. In music, we <b>sing</b>. Art is her favourite <b>subject</b>."
        }
      ],
      outro: {
        text: "Maths, history, science, art, music and PE are school subjects. A timetable is a list of your lessons.",
        learned: [
          "Name school subjects.",
          "Read a timetable.",
          "Say: We’ve got maths on Monday."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e5s2l2",
      title: "My school day: I get up at seven",
      short: "School day",
      icon: "path",
      status: "verified",
      why: "Every day is a little story. Tell a friend about your school day.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "What time does Andrii get up?",
          body: `<p class="lead">Andrii writes about his school day.</p><p><i>I get up at seven o’clock. I have breakfast at half past seven. I go to school by bus. Lessons start at half past eight. In the afternoon, I do my homework. I go to bed at half past nine.</i></p><p>Half past seven: what time is it?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii has breakfast at half past seven. What time is it?</p>`,
          opts: [
            "7.30",
            "7.00",
            "6.30"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Interesting!",
          fbText: "Half past seven is <b>7.30</b>. The next screen shows how we say the time."
        },
        {
          type: "info",
          title: "What time is it?",
          body: `<ul><li>7.00 → seven <b>o’clock</b></li><li>7.30 → <b>half past</b> seven</li><li>8.30 → <b>half past</b> eight</li></ul><p><b>half</b> = 30 minutes</p><p><b>What time</b> do you get up?<br>– <b>At</b> seven o’clock.</p><p>The <u>underlined</u> part is strong: <u>break</u>fast, <u>home</u>work, after<u>noon</u>.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Lessons start at 8.30. What does Andrii write?</p>`,
          opts: [
            "Lessons start at eight o’clock.",
            "Lessons start at half past nine.",
            "Lessons start at half past eight."
          ],
          correct: 2,
          hint: "8.30: what is the first number?",
          fbOk: "Right.",
          fbBad: "Look at the times again: 8.30.",
          fbText: "8.30 is <b>half past eight</b>. Eight o’clock is 8.00. Half past nine is 9.30."
        },
        {
          type: "info",
          title: "I get up, he gets up",
          body: `<p>I <b>get up</b> at seven. Andrii <b>gets up</b> at seven.</p><ul><li>I, you, we, they → get up, go, have</li><li>he, she → get<b>s</b> up, go<b>es</b>, <b>has</b></li><li>watch → watch<b>es</b>, do → do<b>es</b></li></ul><p>We do it every day. This is the <b>Present Simple</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Mariia writes about her day.</p>`,
          text: "I {*get|gets} up at half past six. My mum {*has|have} breakfast with me. Then my friend Polina and I {*walk|walks} to school. In the evening, my dad {*watches|watch} TV.",
          hint: "Who is it: I, she, we or he?",
          fbOk: "Exactly.",
          fbBad: "Look at the list: I or he, she?",
          fbText: "<b>I get</b> up. My mum is <b>she</b>: she <b>has</b>. Polina and I are <b>we</b>: we <b>walk</b>. My dad is <b>he</b>: he <b>watches</b>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Oksana: “I do my homework after lunch.” Now write about Oksana.</p>`,
          tiles: ["Oksana", "does", "her homework", "after lunch"],
          extra: ["do", "my homework"],
          answer: ["Oksana does her homework after lunch.", "After lunch Oksana does her homework."],
          hint: "I do → she … . My homework → … homework.",
          fbOk: "Well done!",
          fbBad: "Oksana is she. Is it do or does?",
          fbText: "<b>Oksana does her homework after lunch.</b> With <b>she</b>: do → <b>does</b>. Oksana’s homework is <b>her</b> homework."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+break|fast", "+home|work", "af|ter|+noon"],
          fbOk: "Yes!",
          fbBad: "Is the strong part at the start or at the end?",
          fbText: "<u>break</u>fast, <u>home</u>work: stress at the start. after<u>noon</u>: stress at the end."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Dmytro: “I watch TV in the evening.” Now write about Dmytro.</p>`,
          before: "Dmytro",
          after: "TV in the evening.",
          answer: "watches",
          hint: "I watch → he …",
          fbOk: "Good eye!",
          fbBad: "With he, watch changes. Look at the list.",
          fbText: "I watch → he <b>watches</b>. After <i>ch</i>, we add <b>-es</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Hi Andrii! I get up at half past seven. I go to school by bike. Lessons start at nine o’clock. After school, I play tennis. I go to bed at nine o’clock. Emma</i></p><p>What time does Emma get up?</p>`,
          opts: [
            "at seven o’clock",
            "at half past seven",
            "at nine o’clock"
          ],
          correct: 1,
          hint: "Find the words get up.",
          fbOk: "Well done!",
          fbBad: "Read the first sentence again.",
          fbText: "Emma writes: “I get up <b>at half past seven</b>.” Lessons start at nine o’clock."
        }
      ],
      outro: {
        text: "We say seven o’clock and half past seven. With he and she: gets up, goes, has, watches.",
        learned: [
          "Say the time: seven o’clock, half past seven.",
          "Talk about your school day.",
          "Use gets up, has, goes and watches."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e5s2l3",
      title: "Does she walk to school? Questions and negatives",
      short: "Questions",
      icon: "users",
      status: "verified",
      why: "Ask a friend about their day. And say what you don’t do.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Does Dmytro walk to school?",
          body: `<p class="lead">Emma chats with Oksana.</p><p><b>Emma:</b> Do you go to school by bus?<br><b>Oksana:</b> No, I don’t. My school isn’t far. I walk.<br><b>Emma:</b> Does Dmytro walk to school too?<br><b>Oksana:</b> Yes, he does. We walk together.</p><p>Do, does, don’t: how do they work?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma asks about Andrii. Which question is correct?</p>`,
          opts: [
            "Do Andrii go to school by bus?",
            "Does Andrii go to school by bus?",
            "Does Andrii goes to school by bus?"
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "We say <b>Does Andrii go…?</b> Look at the next screen."
        },
        {
          type: "info",
          title: "Do you…? Does he…?",
          body: `<ul><li>I, you, we, they → <b>Do</b> you walk?<br>– Yes, I <b>do</b>. / No, I <b>don’t</b>.</li><li>he, she → <b>Does</b> he walk?<br>– Yes, he <b>does</b>. / No, he <b>doesn’t</b>.</li></ul><p>After <b>does</b>: no -s.<br><b>Does</b> he <b>walk</b>? Not: <s>Does he walks?</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "{*Do|Does} you like maths? – Yes, I {*do|does}. {*Does|Do} Andrii walk to school? – No, he {*doesn’t|don’t}. He goes by bus.",
          hint: "Who is it: you, I or he?",
          fbOk: "Exactly.",
          fbBad: "Look at the list: you or he?",
          fbText: "<b>Do</b> you…? – Yes, I <b>do</b>. Andrii is <b>he</b>: <b>Does</b> Andrii walk…? – No, he <b>doesn’t</b>."
        },
        {
          type: "info",
          title: "I don’t, she doesn’t",
          body: `<p>Oksana <b>doesn’t go</b> by bus. She walks.</p><ul><li>I, you, we, they → <b>don’t</b> + verb</li><li>he, she → <b>doesn’t</b> + verb</li></ul><p>don’t = do not<br>doesn’t = does not</p><p>After <b>doesn’t</b>: no -s. Not: <s>She doesn’t goes.</s></p>`,
          cta: "Next"
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s message is wrong.</p>`,
          text: "I live in a town in England. My brother Tom doesn’t [likes] maths. He likes PE.",
          hint: "Look at the word after doesn’t.",
          fbOk: "Good eye!",
          fbBad: "Check the verb after doesn’t.",
          fbText: "After <b>doesn’t</b>: no -s. Tom <b>doesn’t like</b> maths. But <b>He likes PE</b> is correct."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Ask about Oksana’s day.</p>`,
          tiles: ["What time", "does", "Oksana", "get up"],
          extra: ["gets up"],
          keepCase: true,
          answer: "What time does Oksana get up?",
          hint: "What time + does + Oksana + …",
          fbOk: "Well done!",
          fbBad: "After does: no -s.",
          fbText: "<b>What time does Oksana get up?</b> After <b>does</b>, it’s <b>get up</b>, not <i>gets up</i>."
        },
        {
          type: "match",
          sk: "func",
          title: "Match the questions and the answers.",
          left: ["Do you like maths?", "Does Emma go to school by bike?", "Does Andrii walk to school?", "Do your friends play football?"],
          right: ["Yes, I do.", "Yes, she does.", "No, he doesn’t.", "Yes, they do."],
          hint: "Who is it: you, Emma, Andrii or your friends?",
          fbOk: "Right.",
          fbBad: "Look at the person in each question.",
          fbText: "Do <b>you</b>…? – Yes, <b>I</b> do. Does <b>Emma</b>…? – Yes, <b>she</b> does. Does <b>Andrii</b>…? – No, <b>he</b> doesn’t. Do <b>your friends</b>…? – Yes, <b>they</b> do."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Taras likes PE. Emma asks: “Does Taras like PE?”</p>`,
          before: "Yes, he",
          after: ".",
          answer: "does",
          hint: "Does Taras…? – Yes, he …",
          fbOk: "Yes!",
          fbBad: "Look at the short answers again.",
          fbText: "<b>Does</b> he…? – Yes, he <b>does</b>."
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma chats with Andrii.</p>`,
          text: "Emma: {*Do|Does} you go to school on Saturdays? Andrii: No, I {*don’t|doesn’t}. Emma: {*Does|Do} your sister Sofiia go to your school? Andrii: Yes, she {*does|do}. But she {*doesn’t|don’t} go by bus. She walks with Mum.",
          hint: "Is it you, I or she?",
          fbOk: "Well done!",
          fbBad: "I or she? Check the lists.",
          fbText: "<b>Do</b> you…? – No, I <b>don’t</b>. Sofiia is <b>she</b>: <b>Does</b> Sofiia…? – Yes, she <b>does</b>. She <b>doesn’t</b> go by bus."
        }
      ],
      outro: {
        text: "Ask with do and does: Do you walk? Does she walk? Say no with don’t and doesn’t.",
        learned: [
          "Ask: Do you…? Does she…?",
          "Answer: Yes, she does. / No, he doesn’t.",
          "Say what people don’t do."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e5s2l4",
      title: "She’s always on time: always, usually, never",
      short: "How often?",
      icon: "chart",
      status: "verified",
      why: "Are you always on time? Say how often you do things.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Who is never late?",
          body: `<p class="lead">Andrii writes about his class.</p><p><i>Bohdan is always on time. He is never late. Daryna usually walks to school. She often reads at break. I sometimes get up late. Then I am late for school!</i></p><p>Always, usually, never: where do these words go?</p>`,
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
            "Bohdan always is on time.",
            "Bohdan is always on time.",
            "Always Bohdan is on time."
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "We say <b>Bohdan is always on time</b>. <i>Always</i> goes after <i>is</i>. Look at the next screens."
        },
        {
          type: "info",
          title: "How often?",
          body: `<ul><li><b>always</b> ●●●●●</li><li><b>usually</b> ●●●●○</li><li><b>often</b> ●●●○○</li><li><b>sometimes</b> ●●○○○</li><li><b>never</b> ○○○○○</li></ul><p><b>How often</b> are you late?<br>– I am <b>never</b> late.</p><p><b>on time</b> = not late</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Zoriana walks to school every day. How often does she walk to school?</p>`,
          opts: [
            "She sometimes walks to school.",
            "She never walks to school.",
            "She always walks to school."
          ],
          correct: 2,
          hint: "Every day: how many dots?",
          fbOk: "Right.",
          fbBad: "Every day is every time.",
          fbText: "Every day: ●●●●●. She <b>always</b> walks to school."
        },
        {
          type: "info",
          title: "Where does it go?",
          body: `<ul><li>before the verb:<br>I <b>always get</b> up at seven.<br>She <b>never watches</b> TV.</li><li>after am, is, are:<br>He <b>is never</b> late.<br>I <b>am always</b> on time.</li></ul><p>Not: <s>He never is late.</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Andrii writes about Bohdan.</p>`,
          text: "Bohdan {*is always|always is} on time. He {*never gets|gets never} up late. I {*am never|never am} late for PE.",
          hint: "Is there am or is? Or another verb?",
          fbOk: "Exactly.",
          fbBad: "Look at the screen “Where does it go?” again.",
          fbText: "After <b>is</b> and <b>am</b>: <b>is always</b>, <b>am never</b>. Before other verbs: he <b>never gets</b> up late."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Andrii does his homework every day.</p>`,
          tiles: ["Andrii", "always", "does", "his homework"],
          extra: ["do"],
          answer: "Andrii always does his homework.",
          hint: "Always goes before the verb.",
          fbOk: "Well done!",
          fbBad: "Where does always go?",
          fbText: "<b>Andrii always does his homework.</b> <i>Always</i> goes before the verb. Andrii is <b>he</b>, so it’s <b>does</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Daryna’s message is wrong.</p>`,
          text: "I usually walk to school. My brother always [get] up late. He is never on time.",
          hint: "My brother is he. Check each verb.",
          fbOk: "Good eye!",
          fbBad: "Who gets up late: I or he?",
          fbText: "My brother is <b>he</b>: he always <b>gets</b> up late. <b>I usually walk</b> is correct."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Taras plays chess after school. How often? ●●●○○</p>`,
          before: "Taras",
          after: "plays chess after school.",
          answer: "often",
          hint: "Three dots of five. Look at the list.",
          fbOk: "Yes!",
          fbBad: "Count the dots: ●●●○○.",
          fbText: "●●●○○ is <b>often</b>. Taras <b>often</b> plays chess after school."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Hi Emma! In my class, Bohdan is always on time. Daryna usually walks to school. She often reads at break. I am sometimes late. And you? Andrii</i></p><p>Who is sometimes late for school?</p>`,
          opts: [
            "Bohdan",
            "Andrii",
            "Daryna"
          ],
          correct: 1,
          hint: "Find the word sometimes. Who writes I?",
          fbOk: "Well done!",
          fbBad: "Who writes the message?",
          fbText: "Andrii writes: “<b>I am sometimes late</b>.” Bohdan is always on time."
        }
      ],
      outro: {
        text: "Always, usually, often, sometimes and never say how often. They go before the verb, but after am, is and are.",
        learned: [
          "Ask and say how often: How often…?",
          "Put always and never in the right place.",
          "Say: I am never late. She always walks."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e5s2l5",
      title: "Open your books! Classroom activities",
      short: "In class",
      icon: "target",
      status: "verified",
      why: "Your teacher says “Open your books!” Understand the teacher in English.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "What does Ms Lysenko say?",
          body: `<p class="lead">It’s an English lesson in Andrii’s class. The teacher is Ms Lysenko.</p><p><b>Ms Lysenko:</b> Good morning, everyone! Sit down, please. Open your books at page twelve. Read the text. Don’t write in the books. Then work in pairs.</p><p>What do the children do?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Ms Lysenko says: “Work in pairs.” What do the children do?</p>`,
          opts: [
            "Two children work together.",
            "All the children go out.",
            "The children work with the teacher."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Interesting!",
          fbText: "A pair is two. <b>Work in pairs</b>: two children work together."
        },
        {
          type: "info",
          title: "In the classroom",
          body: `<ul><li><b>Open</b> / <b>close</b> your books.</li><li><b>Sit down</b> / <b>stand up</b>.</li><li><b>Look at</b> the board.</li><li><b>Put</b> your hand <b>up</b>. <i>(You know the answer.)</i></li><li><b>Work in pairs</b>. <i>(Two children work together.)</i></li></ul><p>The verb comes first. No <i>you</i>, no <i>-s</i>.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Zoriana knows the answer. What does she do?</p>`,
          opts: [
            "She closes her book.",
            "She puts her hand up.",
            "She stands up and goes out."
          ],
          correct: 1,
          fbOk: "Right.",
          fbBad: "Look at the list: you know the answer.",
          fbText: "You know the answer? <b>Put your hand up</b>. Zoriana <b>puts her hand up</b>."
        },
        {
          type: "info",
          title: "Don’t talk, please",
          body: `<p>What not to do: <b>Don’t</b> + verb.</p><ul><li><b>Don’t talk</b>, please.</li><li><b>Don’t write</b> in the books.</li></ul><p>Add <b>please</b>. It’s polite:<br>Sit down, <b>please</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Ms Lysenko’s words in the lesson:</p>`,
          text: "{*Open|Opens} your books at page ten. {*Look|Looks} at the board. {*Don’t|Doesn’t} talk, please. Work in {*pairs|pair}.",
          hint: "Start with the verb. No -s. What not to do: Don’t.",
          fbOk: "Exactly.",
          fbBad: "Does the verb have -s here?",
          fbText: "Start with the verb: <b>Open</b>, <b>Look</b>. What not to do: <b>Don’t</b> talk. Two children: work in <b>pairs</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the words that are verbs.",
          text: "[Open] your books and [read] the text. Then [write] the new words.",
          hint: "A verb says what you do.",
          fbOk: "Good eye!",
          fbBad: "What do you do with books and words?",
          fbText: "<b>Open</b>, <b>read</b> and <b>write</b> are verbs. They say what to do."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Tell your friend: not in the book!</p>`,
          tiles: ["don’t", "write", "in", "the book"],
          extra: ["doesn’t"],
          answer: "Don’t write in the book!",
          hint: "What not to do: Don’t + verb.",
          fbOk: "Well done!",
          fbBad: "Is it don’t or doesn’t?",
          fbText: "<b>Don’t write in the book!</b> We start with <b>Don’t</b>. No <i>you</i>, no <i>doesn’t</i>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Bohdan knows the answer.</p>`,
          before: "Put your hand",
          after: "!",
          answer: "up",
          hint: "Look at the list: you know the answer.",
          fbOk: "Yes!",
          fbBad: "Put your hand … – look at the list.",
          fbText: "You know the answer? Put your hand <b>up</b>!"
        },
        {
          type: "gaps",
          sk: "read",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Here is Ms Lysenko’s poster.</p>`,
          text: "<b>Our class rules</b><br>{*Come|Comes} to lessons on time. {*Put|Puts} your hand up. {*Don’t|Not} talk in the lesson. Don’t use your phone in class. {*Work|Works} in pairs and help your friends.",
          hint: "Rules start with the verb. What not to do: Don’t.",
          fbOk: "Well done!",
          fbBad: "Look at the screen “Don’t talk, please” again.",
          fbText: "Start with the verb: <b>Come</b>, <b>Put</b>, <b>Work</b>. No -s. What not to do: <b>Don’t</b> talk."
        }
      ],
      outro: {
        text: "Start with the verb: Open your books! Say what not to do with Don’t: Don’t talk!",
        learned: [
          "Understand classroom instructions.",
          "Give instructions: Open your books.",
          "Say what not to do: Don’t talk, please."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e5s2l6",
      title: "Can I…? Could you repeat that, please?",
      short: "Asking",
      icon: "voice",
      status: "verified",
      why: "Sometimes you don’t understand. Ask the teacher in English.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "How does Andrii ask?",
          body: `<p class="lead">It’s the English lesson again. Andrii doesn’t understand the teacher.</p><p><b>Andrii:</b> Sorry, Ms Lysenko. Could you repeat that, please?<br><b>Ms Lysenko:</b> Of course. Page twelve, please.<br><b>Andrii:</b> Thank you. Can I sit next to Bohdan?<br><b>Ms Lysenko:</b> Yes, you can.</p><p>Can I…? Could you…? How are they different?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Zoriana doesn’t understand the teacher. What does she say?</p>`,
          opts: [
            "Repeat that!",
            "Could you repeat that, please?",
            "I repeat that."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "She says: <b>Could you repeat that, please?</b> It’s polite. Look at the next screen."
        },
        {
          type: "info",
          title: "Can I…? Could you…?",
          body: `<ul><li>You want to do it:<br><b>Can I</b> sit here?<br>– Yes, you <b>can</b>. / Sorry, you <b>can’t</b>.</li><li>You want the teacher to do it:<br><b>Could you</b> help me, please?<br>– Of course.</li></ul><p><b>Could you…, please?</b> is very polite.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Mariia wants to sit next to Polina. What does she ask?</p>`,
          opts: [
            "Can I sit next to Polina, please?",
            "Could you sit next to Polina, please?",
            "Can you sit next to Polina, please?"
          ],
          correct: 0,
          hint: "Who wants to sit there: Mariia or the teacher?",
          fbOk: "Right.",
          fbBad: "Mariia wants to do it. Look at the list.",
          fbText: "Mariia wants to sit there, so she asks: <b>Can I</b> sit…? <i>Could you</i> and <i>Can you</i> ask the teacher to sit there."
        },
        {
          type: "info",
          title: "In the English lesson",
          body: `<ul><li>Sorry, I don’t understand.</li><li>Could you repeat that, please?</li><li><b>How do you spell</b> “desk”?<br>– D-E-S-K.</li><li><b>What does</b> “board” <b>mean</b>?</li></ul><p>Use them in your English lessons!</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "func",
          title: "Match the questions and the answers.",
          left: ["Can I open the window?", "Could you repeat that, please?", "How do you spell “desk”?", "What does “timetable” mean?"],
          right: ["Yes, you can.", "Of course. Page twelve.", "D-E-S-K.", "A list of your lessons."],
          hint: "Can I…? – Yes, you can.",
          fbOk: "Well done!",
          fbBad: "Which answer gives letters? Which gives a meaning?",
          fbText: "<b>Can I</b>…? – Yes, you <b>can</b>. <b>Could you repeat</b>…? – Of course. <b>How do you spell</b>…? – letters. <b>What does</b>… <b>mean</b>? – what the word is."
        },
        {
          type: "gaps",
          sk: "func",
          title: "Fill in the gaps.",
          body: `<p>Andrii and Ms Lysenko in the lesson:</p>`,
          text: "Andrii: Sorry, I {*don’t|doesn’t} understand. {*Could you|Can I} repeat that, please? Ms Lysenko: Of course. Andrii: {*Can I|Could you} sit next to Bohdan? Ms Lysenko: Yes, you {*can|could}.",
          hint: "Who does it: Andrii or the teacher?",
          fbOk: "Exactly.",
          fbBad: "Look at the list: you do it, or the teacher does it?",
          fbText: "The teacher repeats: <b>Could you</b> repeat…? Andrii sits: <b>Can I</b> sit…? The answer is <b>Yes, you can</b>."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Ask about the word “pencil”.</p>`,
          tiles: ["How", "do", "you", "spell", "“pencil”"],
          extra: ["does"],
          keepCase: true,
          answer: "How do you spell “pencil”?",
          hint: "How + do + you + …",
          fbOk: "Good eye!",
          fbBad: "Start with How. Is it do or does with you?",
          fbText: "<b>How do you spell “pencil”?</b> With <b>you</b>, it’s <b>do</b>. – P-E-N-C-I-L."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>Zoriana doesn’t know the word “board”.</p>`,
          before: "What does “board”",
          after: "?",
          answer: "mean",
          hint: "Look at the list: What does … ?",
          fbOk: "Yes!",
          fbBad: "Look at the screen “In the English lesson”.",
          fbText: "What does “board” <b>mean</b>? After <b>does</b>: no -s."
        },
        {
          type: "order",
          sk: "func",
          eyebrow: "Final",
          title: "Put the sentences in order.",
          body: `<p>Andrii is in the English lesson.</p>`,
          items: [
            "Ms Lysenko: Open your books at page twelve, please.",
            "Andrii: Sorry, could you repeat that, please?",
            "Ms Lysenko: Of course. Page twelve.",
            "Andrii: Thank you. Can I sit next to Bohdan?",
            "Ms Lysenko: Yes, you can."
          ],
          shuffle: [2, 4, 0, 3, 1],
          hint: "The teacher starts. A question comes before its answer.",
          fbOk: "Well done!",
          fbBad: "Find the answer to each question.",
          fbText: "Ms Lysenko starts. Andrii asks: “Could you repeat that?” She repeats: “Page twelve.” Then Andrii asks: “Can I sit…?” – “Yes, you can.”"
        }
      ],
      outro: {
        text: "Ask for yourself: Can I…? Ask the teacher: Could you…, please?",
        learned: [
          "Ask: Can I sit here?",
          "Ask politely: Could you repeat that, please?",
          "Ask how to spell a word and what it means."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e5s2l7",
      title: "Letters from two schools",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e5s2boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help Andrii’s class?",
          body: `<p class="lead">Emma’s class in England writes to Andrii’s class in Kyiv.</p><p>Help Andrii’s class read and answer. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          body: `<p>Emma: <i>What lessons have you got on Friday?</i></p>`,
          text: "Andrii: On Friday we’ve {*got|get} history. We read about people long ago. Then we’ve got {*PE|music}. We run, jump and play games. My favourite {*subject|break} is PE.",
          pre: "e5s2l1",
          hint: "Run, jump and play games: which subject?",
          fbOk: "Yes!",
          fbBad: "Check the list of subjects.",
          fbText: "We’<b>ve got</b> history. Run, jump and play games: <b>PE</b>. PE is a school <b>subject</b>."
        },
        {
          type: "word",
          sk: "vocab",
          eyebrow: "Task 2",
          title: "Write the missing word.",
          body: `<p>Lessons start at 8.30.</p>`,
          before: "Lessons start at",
          after: "past eight.",
          answer: "half",
          pre: "e5s2l2",
          hint: "8.30: 30 minutes past eight.",
          fbOk: "Well done!",
          fbBad: "30 minutes is … past.",
          fbText: "8.30 is <b>half</b> past eight."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Fill in the gaps.",
          body: `<p>Emma and Andrii chat.</p>`,
          text: "Emma: {*Does|Do} Bohdan walk to school? Andrii: No, he {*doesn’t|don’t}. He goes by bus. {*Do|Does} you walk to school? Emma: No, I {*don’t|doesn’t}. I go by bike.",
          pre: "e5s2l3",
          hint: "Is it he, you or I?",
          fbOk: "Exactly.",
          fbBad: "Check: he or you?",
          fbText: "Bohdan is <b>he</b>: <b>Does</b>…? – No, he <b>doesn’t</b>. With <b>you</b> and <b>I</b>: <b>Do</b> you…? – No, I <b>don’t</b>."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Choose the correct answer.",
          body: `<p>Bohdan is on time every day. Which sentence is correct?</p>`,
          opts: [
            "Bohdan is always on time.",
            "Bohdan always is on time.",
            "Bohdan is never on time."
          ],
          correct: 0,
          pre: "e5s2l4",
          fbOk: "Right.",
          fbBad: "Every day: how often? And where does it go?",
          fbText: "Every day: <b>always</b>. After <b>is</b>: Bohdan <b>is always</b> on time."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Choose the correct answer.",
          body: `<p>Ms Lysenko wants the children to open their books. What does she say?</p>`,
          opts: [
            "Opens your books, please.",
            "Open your books, please.",
            "Don’t open your books, please."
          ],
          correct: 1,
          pre: "e5s2l5",
          fbOk: "Good eye!",
          fbBad: "Start with the verb. No -s.",
          fbText: "Start with the verb, no -s: <b>Open your books, please.</b> <i>Don’t open</i> says the opposite."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 6",
          title: "Choose the correct answer.",
          body: `<p>Andrii doesn’t understand Ms Lysenko. What does he say?</p>`,
          opts: [
            "Can I repeat that, please?",
            "Yes, you can.",
            "Could you repeat that, please?"
          ],
          correct: 2,
          pre: "e5s2l6",
          fbOk: "Well done!",
          fbBad: "Who repeats: Andrii or the teacher?",
          fbText: "The teacher repeats, so Andrii asks: <b>Could you repeat that, please?</b>"
        }
      ],
      outro: {
        text: "Well done! Now you can talk about your timetable, your school day and your English lessons.",
        learned: [
          "Name school subjects and read a timetable.",
          "Talk about your day: I get up at seven.",
          "Ask and answer with do, does, don’t and doesn’t.",
          "Ask the teacher: Can I…? Could you…, please?"
        ]
      }
    }
  ]
});
