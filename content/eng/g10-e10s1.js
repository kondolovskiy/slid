/* Слід · Англійська мова, 10 клас — «Relationships and conflicts» (e10s1)
   Програма: П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; спеціалізовані школи, B1 → B2), 10 кл.: тема «Я, моя родина,
   мої друзі» — особистість та її якості; види особистісних стосунків; стосунки з товаришами; взаємодопомога; вирішення
   конфліктів (с. 22); функції — вступати в дискусію, привертаючи увагу співрозмовника; аналізувати причини й наслідки (с. 22);
   граматика (с. 23): Past Perfect with adverbial clauses of time (by the time, as soon as, after, before, when, until) —
   розширення e8s5l4; prepositions in time phrases (by, until, before) — лише в цих зворотах (повністю — e10s8);
   лексика характеру — розширення e6s1l4 і e9s1l2; приєднання до дискусії — повторення e9s9l3. Розподіл — content/eng/plan.js,
   reports/verify/plan-eng-g10-11.md, reports/verify/curate-eng-plan-g10-11.md:
   https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf
   Друга правильна відповідь (plan-eng-g10-11): після after / before / as soon as / until правильні і Past Simple, і Past Perfect
   (CD Grammar «Past perfect simple or past simple?») — тут або multi з обома, або хибні варіанти — has + третя форма і
   неправильні форми; when + Past Simple / Past Perfect — різний зміст, контекст задає шкала часу.
   Діалоги — репліками в body (D-056), без звуку (D-055 п. 4).
   Герої — серія 4–9 кл., на шість років старші, ніж у 4 кл. (memory/short/inbox.md, NOTE (герої)): Oksana, Andrii, Mariia,
   Taras, Emma — 16, Tom — 14. Нові: Artem (однокласник Mariia, Kharkiv), Ivanna (продавчиня в магазині коміксів, Kharkiv),
   Mr Lukashuk (літній сусід Ostap, Lviv).
   Форми, наголос і значення — Cambridge Dictionary (CD) і CD Grammar; URL — tasks/…/write-eng-g10-e10s1.md, «Нотатки агента».
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e10s1). 7 уроків (6 + фінал). Будова — за розділами 9 кл. (e9s1, e9s9).
   Перевірка: node tools/validate.mjs --section e10s1 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e10s1",
  grade: 10,
  weeks: [1, 4],
  title: "Relationships and conflicts",
  why: "To describe people’s personalities and the relationships between them. And to talk about how friends help each other and solve conflicts.",
  requires: ["e6s1l4", "e6s4l5", "e8s5l4", "e9s1l2", "e9s9l3"],
  meta: { author: "writer-e10s1", created: "2026-11-26", factcheck: "verifier-e10s1, 2026-11-26 (reports/verify/write-eng-g10-e10s1.md)", teacher: null },
  badges: [
    { id: "e10s1boss", name: "Peacemaker", icon: "trophy", desc: "Finish the final lesson “Relationships and conflicts”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e10s1l1",
      title: "What kind of person are you? Personality",
      short: "Personality",
      icon: "user",
      status: "verified",
      why: "Kind and friendly are only the beginning. Learn words that describe what a person is really like.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What kind of friend are you?",
          body: `<p class="lead">Andrii’s school newspaper in Kyiv has a quiz: “What kind of friend are you?” Three students answer.</p><p><b>Daryna:</b> I always do what I promise. My friends say I’m reliable.<br><b>Zoriana:</b> I share everything – snacks, books, even my headphones. Mum says I’m too generous!<br><b>Kyrylo:</b> I never change my mind. My sister says I’m stubborn. Is that good or bad?</p><p>Which of them would you like as a friend?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Daryna: “I always do what I promise. My friends say I’m reliable.”</p><p>What does <i>reliable</i> mean?</p>`,
          opts: [
            "She is very good at sport.",
            "She often changes her plans.",
            "You can trust her to do what she says."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A <b>reliable</b> person does what he or she promises, so you can trust them. More personality words are on the next screen."
        },
        {
          type: "info",
          title: "Personality words",
          body: `<ul><li><b>re<u>li</u>able</b> → does what he or she promises</li><li><b><u>loy</u>al</b> → always supports friends, even in hard times</li><li><b><u>gen</u>erous</b> → happy to give and share</li><li><b><u>sel</u>fish</b> → thinks only about himself or herself</li><li><b><u>stub</u>born</b> → never changes his or her mind</li><li><b><u>moo</u>dy</b> → happy one minute, angry or sad the next</li><li><b><u>sen</u>sitive</b> → gets upset easily</li><li><b>con<u>sid</u>erate</b> → thinks about other people’s feelings</li><li><b><u>tol</u>erant</b> → accepts people and ideas that are different</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the descriptions.",
          left: ["loyal", "generous", "stubborn", "moody"],
          right: ["always supports her friends, even in hard times", "shares her things with everyone", "never changes his mind", "is happy one minute and angry the next"],
          hint: "Which word is about sharing? Which one is about changing your mind?",
          fbOk: "Right.",
          fbBad: "Look at the list of personality words again.",
          fbText: "<b>loyal</b> → supports friends in hard times; <b>generous</b> → shares; <b>stubborn</b> → never changes his mind; <b>moody</b> → happy one minute, angry the next."
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Is it good or bad for a friendship?</p>`,
          bins: ["Good for a friendship", "Bad for a friendship"],
          items: [
            ["reliable", 0],
            ["loyal", 0],
            ["considerate", 0],
            ["generous", 0],
            ["selfish", 1],
            ["moody", 1]
          ],
          hint: "Would you like a friend who thinks only about himself?",
          fbOk: "Exactly.",
          fbBad: "Read the descriptions in the list again.",
          fbText: "<b>Reliable</b>, <b>loyal</b>, <b>considerate</b> and <b>generous</b> people make good friends. <b>Selfish</b> and <b>moody</b> people can make a friendship hard."
        },
        {
          type: "info",
          title: "Opposites with un-, in-, dis-",
          body: `<ul><li>reliable → <b>un</b>reliable</li><li>selfish → <b>un</b>selfish</li><li>considerate → <b>in</b>considerate</li><li>tolerant → <b>in</b>tolerant</li><li>loyal → <b>dis</b>loyal</li></ul><p>There is no simple rule for the prefix, so learn each opposite with its word.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          text: "My cousin forgot our meeting again. He’s so {*unreliable|inreliable|disreliable}. Our neighbour played loud music at midnight. That was {*inconsiderate|unconsiderate|disconsiderate}. Someone in the chat told everyone my secret. That was {*disloyal|unloyal|inloyal}.",
          hint: "Each word has a different prefix. Look at the list of opposites.",
          fbOk: "Well done!",
          fbBad: "Check the prefixes: un-, in- or dis-?",
          fbText: "<b>unreliable</b> → doesn’t do what he promises; <b>inconsiderate</b> → doesn’t think about others; <b>disloyal</b> → doesn’t support a friend."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>Write the opposite of <b>tolerant</b>. Use a prefix.</p>`,
          before: "tolerant →",
          answer: "intolerant",
          hint: "Look at the list of opposites again.",
          fbOk: "Yes!",
          fbBad: "It’s the same prefix as in inconsiderate.",
          fbText: "tolerant → <b>intolerant</b>: doesn’t accept people and ideas that are different."
        },
        {
          type: "info",
          title: "Like, look like, be like",
          body: `<p>Remember these three questions?</p><ul><li>What <b>is</b> she <b>like</b>? → personality: She’s loyal and generous.</li><li>What does she <b>look like</b>? → appearance: She’s tall with dark hair.</li><li>What does she <b>like</b>? → things she enjoys: She likes comics.</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p><b>Emma:</b> Stepan from the penfriend club is so nice online. What’s he like?<br><b>Oksana:</b> …</p><p>What does Oksana say?</p>`,
          opts: [
            "He likes football and chess.",
            "He’s friendly and very reliable.",
            "He’s tall with short hair."
          ],
          correct: 1,
          hint: "What is he like? asks about personality.",
          fbOk: "Exactly.",
          fbBad: "Emma asks about Stepan’s personality, not his hobbies or his appearance.",
          fbText: "<b>What’s he like?</b> → personality: friendly, reliable. <i>He likes football</i> answers <i>What does he like?</i>. <i>He’s tall</i> answers <i>What does he look like?</i>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["re|+li|a|ble", "+gen|er|ous", "con|+sid|er|ate", "+tol|er|ant"],
          fbOk: "Good eye!",
          fbBad: "Look at the underlined parts in the list.",
          fbText: "re<u>li</u>able, <u>gen</u>erous, con<u>sid</u>erate, <u>tol</u>erant."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Your quiz result: You are a loyal and considerate friend. You think about other people’s feelings, and you never tell your friends’ secrets. But be careful: sometimes you are too sensitive. When a friend makes a joke about you, you get upset. You can also be a bit stubborn, so try to listen when your friends have other ideas.</i></p><p>What does the quiz result say?</p>`,
          opts: [
            "You often tell your friends’ secrets.",
            "You change your mind too often.",
            "Sometimes you get upset too easily."
          ],
          correct: 2,
          hint: "Find sensitive in the text.",
          fbOk: "Well done!",
          fbBad: "Read the sentences after “But be careful”.",
          fbText: "You are <b>sensitive</b>: you get upset when a friend makes a joke. You <b>never</b> tell secrets, and you are a bit <b>stubborn</b>: you don’t change your mind easily."
        }
      ],
      outro: {
        text: "Reliable, loyal, considerate: now you can describe what a person is really like.",
        learned: [
          "Describe personality: reliable, loyal, generous, stubborn, tolerant.",
          "Make opposites with un-, in- and dis-.",
          "Answer the question What is he like?"
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e10s1l2",
      title: "Friends, classmates, neighbours: kinds of relationships",
      short: "Relationships",
      icon: "users",
      status: "verified",
      why: "We have close friends, classmates, neighbours and people we hardly know. Talk about the people in your life and how you get on.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "People in my life",
          body: `<p class="lead">Mariia writes a blog post in Kharkiv.</p><p><i>Polina is my close friend. We have a lot in common: we both love comics and old films. I can always rely on her. I met Roksolana in the comic club, and we get on really well. Zofia lives in Poland, and we keep in touch online every week. Artem is my classmate. Last year we fell out, but now we’re friends again. And Ivanna works at the comic shop near my school. I know her name, but not much more.</i></p><p>Who does Mariia know least well?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Mariia: “Ivanna works at the comic shop. I know her name, but not much more.”</p><p>What is Ivanna to Mariia?</p>`,
          opts: [
            "a close friend",
            "an acquaintance",
            "a classmate"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "An <b>acquaintance</b> is a person you have met but don’t know well. Ivanna isn’t in Mariia’s class, and she isn’t a close friend."
        },
        {
          type: "info",
          title: "Kinds of relationships",
          body: `<ul><li><b>a close friend</b> → you know them very well and trust them</li><li><b>a <u>class</u>mate</b> → in the same class as you</li><li><b>a <u>team</u>mate</b> → in the same team as you</li><li><b>a <u>neigh</u>bour</b> → lives next door or near you</li><li><b>a <u>pen</u>friend</b> → writes to you, often from another country</li><li><b>an ac<u>quain</u>tance</b> → you have met them, but you don’t know them well</li></ul><p>Your <b>re<u>la</u>tionship</b> with someone is how you feel and behave towards each other.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the descriptions.",
          left: ["a classmate", "a teammate", "a neighbour", "an acquaintance"],
          right: ["is in the same class as you", "plays in the same team as you", "lives next door to you", "you have met, but you don’t know well"],
          hint: "Class, team, next door, or someone you hardly know?",
          fbOk: "Well done!",
          fbBad: "Look at the list “Kinds of relationships” again.",
          fbText: "<b>classmate</b> → same class; <b>teammate</b> → same team; <b>neighbour</b> → next door; <b>acquaintance</b> → you have met, but you don’t know them well."
        },
        {
          type: "info",
          title: "Talking about relationships",
          body: `<ul><li><b>get on (well) with</b> someone → have a good relationship</li><li><b>have a lot in common</b> (with someone) → like the same things</li><li><b>rely on</b> / <b>count on</b> someone → be sure that they will help you</li><li><b>keep in touch</b> (with someone) → keep writing or talking to them</li><li><b>fall out with</b> someone → argue and stop being friends</li></ul><p>fall – fell – fallen: Last year we <b>fell out</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          text: "Mariia gets on well {*with|to|for} Roksolana. Polina and Mariia have a lot {*in common|of common|on common}. Mariia can always rely {*on|in|to} Polina. Last year Mariia fell {*out|off|of} with Artem, but now they’re friends again.",
          hint: "Look at the phrases: get on with, in common, rely on, fall out with.",
          fbOk: "Exactly.",
          fbBad: "Each phrase has its own small word. Check the list.",
          fbText: "get on well <b>with</b>; have a lot <b>in common</b>; rely <b>on</b>; fall <b>out</b> with."
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Two girls in Mariia’s class had a big argument. Now they don’t talk to each other.</p><p>What has happened?</p>`,
          opts: [
            "They have kept in touch.",
            "They have fallen out.",
            "They have a lot in common."
          ],
          correct: 1,
          hint: "They argued and stopped being friends.",
          fbOk: "Right.",
          fbBad: "Which phrase means argue and stop being friends?",
          fbText: "They argued and stopped talking: they <b>have fallen out</b>. fall – fell – <b>fallen</b>."
        },
        {
          type: "pick",
          sk: "vocab",
          title: "Find the mistake.",
          body: `<p>One word in Polina’s sentence is wrong.</p>`,
          text: "Mariia and I [are] a lot in common: we both love comics.",
          hint: "Which verb goes with a lot in common?",
          fbOk: "Good eye!",
          fbBad: "Look at the phrase in the list: … a lot in common.",
          fbText: "We say <b>have</b> a lot in common: <b>Mariia and I have a lot in common.</b>"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          tiles: ["Polina", "has", "a lot", "in common", "with", "Mariia"],
          extra: ["is"],
          answer: [
            "Polina has a lot in common with Mariia.",
            "Mariia has a lot in common with Polina."
          ],
          hint: "Start with a name. Then has + a lot in common + with…",
          fbOk: "Yes!",
          fbBad: "We say have a lot in common, not be.",
          fbText: "<b>Polina has a lot in common with Mariia.</b> <i>Mariia has a lot in common with Polina</i> is correct too."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Zofia lives in Poland. Every week, she and Mariia write to each other.</p>`,
          before: "They keep in",
          answer: ["touch", "contact"],
          hint: "keep in … → keep writing or talking.",
          fbOk: "Well done!",
          fbBad: "Look at the list “Talking about relationships”.",
          fbText: "They <b>keep in touch</b>: they keep writing to each other. <i>Keep in contact</i> is also correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia finishes her blog post.</p>`,
          text: "I’m lucky. I get {*on|in|off} well with my classmates, and I can count {*on|in|for} my friends. Ivanna is just an {*acquaintance|close friend|teammate}, but maybe one day we’ll be friends. And I keep {*in touch|in common|on touch} with Zofia every week.",
          hint: "get on, count on, an + a word for someone you hardly know, keep in touch.",
          fbOk: "Brilliant!",
          fbBad: "Check the phrases in the list and the article: an + a vowel sound.",
          fbText: "I get <b>on</b> well; count <b>on</b> my friends; just an <b>acquaintance</b>; keep <b>in touch</b> with Zofia."
        }
      ],
      outro: {
        text: "Classmates, neighbours, acquaintances: now you can talk about the people in your life and how you get on.",
        learned: [
          "Name kinds of relationships: close friend, classmate, acquaintance.",
          "Use get on with, have a lot in common, fall out with.",
          "Say who you rely on and keep in touch with."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e10s1l3",
      title: "By the time I came, they had left: the Past Perfect again",
      short: "By the time",
      icon: "path",
      status: "verified",
      why: "You came late, and everything had already happened. Say what had happened by a moment in the past.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Too late for the cake",
          body: `<p class="lead">Taras writes to Emma.</p><p><i>In July, Ostap had a birthday party. That day, my athletics training finished at seven, and I got there at half past seven. By the time I arrived, everyone had eaten the cake! Ostap had already opened his presents too. But he wasn’t angry. He’d saved a piece of cake for me.</i></p><p>Did Taras eat the cake with everyone?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“By the time I arrived, everyone had eaten the cake.” What happened first?</p>`,
          opts: [
            "Taras arrived.",
            "Both happened at the same time.",
            "Everyone ate the cake."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "First, everyone ate the cake. Then Taras arrived. <b>had eaten</b> shows the earlier action."
        },
        {
          type: "info",
          title: "By the time + the Past Perfect",
          body: `<ul><li>7.15 pm – everyone ate the cake.</li><li>7.30 pm – Taras arrived.</li></ul><p><b>By the time</b> Taras <b>arrived</b>, everyone <b>had eaten</b> the cake.</p><p>By the time + Past Simple → the moment.<br>Past Perfect (had + the third form) → finished before that moment.</p><p>By the time at the start → use a comma. In the middle → no comma: <i>Everyone had eaten the cake by the time Taras arrived.</i></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<ul><li>6.30 pm – Ostap opened his presents.</li><li>7.30 pm – Taras arrived.</li><li>9.00 pm – the guests ate all the pizza.</li><li>10.00 pm – the party ended.</li></ul>`,
          text: "By the time Taras arrived, Ostap {*had opened|has opened|had open} his presents. By the time the party ended, the guests {*had eaten|have eaten|had ate} all the pizza.",
          hint: "The story is in the past. had + the third form.",
          fbOk: "Yes!",
          fbBad: "It’s about the past: had, not has. eat – ate – eaten.",
          fbText: "Ostap <b>had opened</b> his presents before Taras arrived. The guests <b>had eaten</b> the pizza before the party ended. eat – ate – <b>eaten</b>."
        },
        {
          type: "info",
          title: "When: two different stories",
          body: `<ul><li>When Taras arrived, Ostap <b>opened</b> his presents. → Taras arrived first, and then Ostap opened them. Taras saw it.</li><li>When Taras arrived, Ostap <b>had opened</b> his presents. → Ostap opened them first. Taras didn’t see it.</li></ul><p><b>Already</b> often goes with the Past Perfect: Ostap had <b>already</b> opened them.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<ul><li>6.00 pm – Myroslava arrived at the party.</li><li>6.05 pm – Ostap’s dad turned on the music.</li></ul><p>Which sentence matches the times?</p>`,
          opts: [
            "When Myroslava arrived, Ostap’s dad had already turned on the music.",
            "By the time Myroslava arrived, Ostap’s dad had turned on the music.",
            "When Myroslava arrived, Ostap’s dad turned on the music."
          ],
          correct: 2,
          hint: "What came first: Myroslava or the music?",
          fbOk: "Right.",
          fbBad: "Myroslava arrived first. Did she hear the music start?",
          fbText: "Myroslava arrived first, and then the music started: Past Simple + Past Simple. <i>Had turned on</i> means the music had started before she came."
        },
        {
          type: "info",
          title: "By, until, before + a time",
          body: `<ul><li><b>by</b> eight → not later than eight: Be ready <b>by</b> eight.</li><li><b>until</b> eight → all the time up to eight, then stop: The party went on <b>until</b> ten.</li><li><b>before</b> eight → earlier than eight.</li></ul><p><b>By the time</b> works like <b>by</b>: not later than that moment.<br>Not: <s>The party went on by ten.</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          text: "Ostap’s mum said, “Please be ready {*by|until} six. The guests are coming at six.” The party went on {*until|by} ten. Taras’s training lasts {*until|by} seven. By nine, the guests {*had eaten|have eaten} all the pizza.",
          hint: "Not later than → by. All the time up to → until.",
          fbOk: "Exactly.",
          fbBad: "Is it a time limit or something that goes on and stops?",
          fbText: "Be ready <b>by</b> six: not later than six. Went on <b>until</b> ten; lasts <b>until</b> seven: it goes on and then stops. By nine, they <b>had eaten</b> the pizza."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Taras got home at eleven. His sister Zlata had gone to bed at ten. Start with By the time.</p>`,
          tiles: ["By the time", "Taras", "got", "home,", "Zlata", "had gone", "to bed"],
          extra: ["has gone"],
          answer: "By the time Taras got home, Zlata had gone to bed.",
          hint: "By the time + the later action. Then had + the third form.",
          fbOk: "Well done!",
          fbBad: "The story is in the past: had gone, not has gone.",
          fbText: "<b>By the time Taras got home, Zlata had gone to bed.</b> Zlata went to bed first, so <b>had gone</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing words.",
          body: `<p>Use the Past Perfect of <i>eat</i>.</p>`,
          before: "By the time Taras got to the party, his friends",
          after: "the cake.",
          answer: ["had eaten", "had already eaten"],
          contractions: true,
          hint: "had + the third form: eat – ate – …",
          fbOk: "Yes!",
          fbBad: "Two words: had + the third form of eat.",
          fbText: "His friends <b>had eaten</b> the cake: they ate it before Taras came."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s answer is wrong.</p>`,
          text: "That happens to me too! Last week, by the time we got to the cinema, the film [has] started.",
          hint: "The story is in the past. Look at the verb after the film.",
          fbOk: "Good eye!",
          fbBad: "Past Perfect: had + the third form.",
          fbText: "<b>By the time we got to the cinema, the film had started.</b> It’s the past, so <b>had</b>, not <i>has</i>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes to Emma again a day later.</p>`,
          text: "Today I wasn’t late! I had to send my photos to Myroslava for School 5 News {*by|until} nine, and I sent them at eight. By the time the lesson started, she {*had chosen|has chosen|had chose} the best one. After school I stayed at the radio studio {*until|by} five. When I got home, Zlata {*had already eaten|has already eaten} my piece of cake – again!",
          hint: "A time limit → by. Something that goes on and stops → until. Earlier action → had + the third form.",
          fbOk: "Well done!",
          fbBad: "Check by and until. Then: had + the third form.",
          fbText: "Send them <b>by</b> nine; she <b>had chosen</b> the best one (choose – chose – chosen); stayed <b>until</b> five; Zlata <b>had already eaten</b> the cake before Taras came home."
        }
      ],
      outro: {
        text: "Now you can say what had happened by a moment in the past: By the time I arrived, they had eaten the cake.",
        learned: [
          "Use by the time with the Past Perfect.",
          "Show two different stories with when: opened or had opened.",
          "Use by and until with a time."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e10s1l4",
      title: "As soon as, after, before: time clauses",
      short: "Time clauses",
      icon: "path",
      status: "verified",
      why: "Tell a story in the right order. Use as soon as, after, before and until with past tenses.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "How I made a friend in England",
          body: `<p class="lead">Stepan from Dnipro writes for the penfriend club page.</p><p><i>Before I joined the penfriend club last year, I had never written to anyone in English. After I had sent my first message to Emma, I waited for three days. As soon as her answer came, I read it twice. I didn’t go to bed until I had written back! Now we chat every week.</i></p><p>What did Stepan do when Emma’s answer came?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Stepan: “As soon as her answer came, I read it twice.”</p><p>What did Stepan do?</p>`,
          opts: [
            "He waited for three days, and then he read it.",
            "He read the answer immediately.",
            "He went to bed, and he read it the next day."
          ],
          correct: 1,
          hint: "Read the sentence with as soon as.",
          fbOk: "Right.",
          fbBad: "Read Stepan’s sentence again.",
          fbText: "<b>As soon as</b> means immediately after. The answer came, and Stepan read it at once. He waited three days for the answer, not to read it."
        },
        {
          type: "info",
          title: "Time words",
          body: `<ul><li><b>as soon as</b> → immediately after: <i>As soon as her answer came, I read it.</i></li><li><b>after</b> → later than; <b>before</b> → earlier than</li><li><b>until</b> → up to that moment: <i>I didn’t go to bed until I had written back.</i></li><li><b>when</b> → at that time, or just after it</li></ul><p>A time clause at the start → a comma after it. A time clause at the end → no comma: <i>I read it as soon as it came.</i></p>`,
          cta: "Next"
        },
        {
          type: "info",
          title: "Past Simple or Past Perfect?",
          body: `<p><b>After</b>, <b>before</b>, <b>as soon as</b> and <b>until</b> already show the order. So both tenses are correct:</p><ul><li>After I <b>sent</b> my message, I waited.</li><li>After I <b>had sent</b> my message, I waited.</li></ul><p>The Past Perfect says clearly: the first action was finished.</p><p>With <b>when</b> it’s different: the tense changes the story (Lesson 3).</p>`,
          cta: "Next"
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>After Stepan … his first message, he waited for three days.</p>`,
          opts: [
            "sent",
            "had sent",
            "has sent",
            "sends"
          ],
          correct: [0, 1],
          hint: "After already shows the order. How many past forms are there?",
          fbOk: "Well done!",
          fbBad: "Two answers are correct. The story is in the past.",
          fbText: "After he <b>sent</b> and after he <b>had sent</b> are both correct: <i>after</i> shows the order. <i>Has sent</i> and <i>sends</i> aren’t past tenses."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<ul><li>Stepan joined the club. Before that, he had never written in English.</li><li>He waited for three days. Then Emma answered.</li><li>One minute after her answer came, he opened it.</li></ul>`,
          text: "{*Before|After|As soon as} he joined the club, Stepan had never written in English. He waited {*until|as soon as|after} Emma answered. {*As soon as|Until|Before} her answer came, he opened it.",
          hint: "Look at the order of the events. Which word means immediately after?",
          fbOk: "Exactly.",
          fbBad: "Read the list of events. What came first?",
          fbText: "<b>Before</b> he joined, he had never written in English. He waited <b>until</b> she answered: up to that moment. <b>As soon as</b> it came, he opened it: immediately."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>“When Stepan opened the chat, Emma had gone offline.”</p><p>Did they chat?</p>`,
          opts: [
            "Yes: Emma went offline after their chat.",
            "Yes: they chatted, and then Stepan opened the chat.",
            "No: Emma went offline before Stepan opened the chat."
          ],
          correct: 2,
          hint: "had gone → it happened first.",
          fbOk: "Yes!",
          fbBad: "Look at had gone. Which action came first?",
          fbText: "<b>Had gone</b> is the earlier action: Emma went offline first. So when Stepan opened the chat, she wasn’t there."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Stepan’s sentence is wrong.</p>`,
          text: "I didn’t stop until I had [wrote] a long answer to Emma.",
          hint: "After had: the third form of write.",
          fbOk: "Good eye!",
          fbBad: "write – wrote – …",
          fbText: "write – wrote – <b>written</b>: <b>I didn’t stop until I had written a long answer.</b>"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Emma got Stepan’s message. Start with As soon as.</p>`,
          tiles: ["As soon as", "Emma", "had read", "the message,", "she", "wrote back"],
          extra: ["has read"],
          answer: [
            "As soon as Emma had read the message, she wrote back.",
            "As soon as she had read the message, Emma wrote back."
          ],
          hint: "As soon as + the first action, a comma, then the second action.",
          fbOk: "Well done!",
          fbBad: "The story is in the past: had read, not has read.",
          fbText: "<b>As soon as Emma had read the message, she wrote back.</b> <i>As soon as she had read the message, Emma wrote back</i> is correct too."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<ul><li>8.00 pm – Polina finished her comic.</li><li>8.01 pm – she sent it to Mariia.</li></ul>`,
          before: "Polina sent the comic to Mariia as",
          after: "as she had finished it.",
          answer: "soon",
          hint: "Immediately after → as … as.",
          fbOk: "Exactly.",
          fbBad: "Look at the time words: as … as = immediately after.",
          fbText: "She sent it one minute later: <b>as soon as</b> she had finished it."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes on the club page too.</p>`,
          text: "Before Stepan wrote to me, I {*had never heard|have never heard|had never hear} of Dnipro. As soon as I {*got|get|will get} his first message, I found Dnipro on the map. I kept reading about the city {*until|as soon as} midnight! {*After|Until} we had chatted for a few months, we became real friends.",
          hint: "The story is in the past. Until + a time → up to that moment.",
          fbOk: "Well done!",
          fbBad: "Check the past forms, then the time words.",
          fbText: "I <b>had never heard</b> of Dnipro before; as soon as I <b>got</b> his message; kept reading <b>until</b> midnight; <b>after</b> we had chatted for months, we became friends."
        }
      ],
      outro: {
        text: "As soon as you know the time words, your stories are in the right order.",
        learned: [
          "Use as soon as, after, before and until in past stories.",
          "Use the Past Simple or the Past Perfect after after and as soon as.",
          "Put a comma after a time clause at the start."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e10s1l5",
      title: "A friend in need: helping each other",
      short: "Helping",
      icon: "shield",
      status: "verified",
      why: "Good friends help each other. Talk about help and support, and explain causes and results.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Thank you, everyone!",
          body: `<p class="lead">Daryna writes to her friends in Kyiv.</p><p><i>Thank you, everyone! I was really worried about the maths test because I had missed two weeks of school. I’d had flu. But Andrii gave me a hand: he lent me his notes. Zoriana explained the hard topics on a video call. As a result, I got a good mark! A friend in need is a friend indeed.</i></p><p>Why was Daryna worried?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Daryna: “A friend in need is a friend indeed.”</p><p>What does it mean?</p>`,
          opts: [
            "Your friends always need something from you.",
            "You need a lot of friends.",
            "A friend who helps you when you need help is a true friend."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "This old saying means: a friend who helps you in a hard time is a true friend. Andrii and Zoriana helped Daryna when she needed it."
        },
        {
          type: "info",
          title: "Helping each other",
          body: `<ul><li><b>give</b> someone <b>a hand</b> (with) → help: Can you give me a hand with these bags?</li><li><b>help out</b> → help, often with work: I help out at the library.</li><li><b>be there for</b> someone → be ready to help and support them</li><li><b>stand by</b> someone → keep supporting them in a hard time</li><li><b>let</b> someone <b>down</b> → not do what you promised</li><li><b>count on</b> = <b>rely on</b> (Lesson 2)</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the phrases and the meanings.",
          left: ["let someone down", "give someone a hand", "stand by someone", "count on someone"],
          right: ["not do what you promised", "help someone with a job", "keep supporting someone in a hard time", "be sure that someone will help you"],
          hint: "Which phrase is about a broken promise?",
          fbOk: "Right.",
          fbBad: "Look at the list “Helping each other” again.",
          fbText: "<b>let someone down</b> → not do what you promised; <b>give a hand</b> → help with a job; <b>stand by</b> → keep supporting in a hard time; <b>count on</b> → be sure of help."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          text: "Kyrylo promised to bring Daryna a history book, but he forgot. He let her {*down|out|off}. Andrii asked, “Can I give you a {*hand|arm|help}?” Daryna knows she can count {*on|in|for} her friends. Andrii’s mum often helps {*out|down|off} at the school fair.",
          hint: "let … down, give … a hand, count on, help out.",
          fbOk: "Well done!",
          fbBad: "Check the phrases in the list.",
          fbText: "He let her <b>down</b>; give you a <b>hand</b>; count <b>on</b> her friends; helps <b>out</b> at the fair."
        },
        {
          type: "info",
          title: "Causes and results",
          body: `<p>Cause → <b>because</b>:<br>Daryna was worried <b>because</b> she <b>had missed</b> two weeks of school.<br>The cause often happened earlier, so we often use the Past Perfect.</p><p>Result → <b>so</b>, <b>as a result</b>, <b>that’s why</b>:<br>Zoriana explained the topics. <b>As a result</b>, Daryna got a good mark.<br>Kyrylo forgot the book, <b>so</b> he said sorry.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          text: "Kyrylo felt bad {*because|so} he had let Daryna down. He had forgotten the book, {*so|because} he apologised. Andrii’s notes were very clear. {*As a result|Because}, Daryna understood the topic.",
          hint: "Is the next part a cause or a result?",
          fbOk: "Exactly.",
          fbBad: "Cause → because. Result → so, as a result.",
          fbText: "Felt bad <b>because</b> he had let her down (cause). Forgot the book, <b>so</b> he apologised (result). Clear notes. <b>As a result</b>, she understood (result)."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Explain the cause.</p>`,
          tiles: ["Daryna", "was", "worried", "because", "she", "had missed", "two weeks of school"],
          extra: ["has missed"],
          answer: [
            "Daryna was worried because she had missed two weeks of school.",
            "She was worried because Daryna had missed two weeks of school."
          ],
          hint: "Start with Daryna was worried. Then the cause.",
          fbOk: "Yes!",
          fbBad: "The cause happened earlier in the past: had missed.",
          fbText: "<b>Daryna was worried because she had missed two weeks of school.</b> The cause came first: <b>had missed</b>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Kyrylo promised to bring the book, but he forgot.</p>`,
          before: "He let Daryna",
          answer: "down",
          hint: "let someone … → not do what you promised.",
          fbOk: "Well done!",
          fbBad: "Look at the list “Helping each other”.",
          fbText: "He <b>let Daryna down</b>: he didn’t do what he had promised."
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p>Ostap sees his neighbour Mr Lukashuk in the street in Lviv. Mr Lukashuk has two heavy bags.</p><p><b>Mr Lukashuk:</b> Oh, these bags are so heavy!<br><b>Ostap:</b> …</p><p>What does Ostap say?</p>`,
          opts: [
            "Sorry, I’ll let you down.",
            "You can’t count on me.",
            "Let me give you a hand."
          ],
          correct: 2,
          hint: "Ostap wants to help. Which phrase means help?",
          fbOk: "Right.",
          fbBad: "Which answer offers help?",
          fbText: "<b>Let me give you a hand.</b> = Let me help you. The other answers don’t offer help."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>A friend in need – Ostap</i></p><p><i>Every Saturday, my Plast group helps out on our street in Lviv. We carry shopping for older neighbours and clean the yard. Last winter, our neighbour Mr Lukashuk felt lonely. He had broken his leg, so he couldn’t go out. We took turns to visit him. Taras brought his photos of old Lviv, and they talked for hours. As soon as Mr Lukashuk could walk again, he baked a cake for the whole group! Helping isn’t only about bags. Sometimes it’s about being there for someone.</i></p><p>Why did Mr Lukashuk feel lonely?</p>`,
          opts: [
            "His neighbours had let him down.",
            "He couldn’t go out because he had broken his leg.",
            "Taras had forgotten to visit him."
          ],
          correct: 1,
          hint: "Find the sentence with because or so.",
          fbOk: "Exactly.",
          fbBad: "Read the sentences about last winter again.",
          fbText: "He <b>had broken his leg</b>, <b>so</b> he couldn’t go out. The Plast group didn’t let him down: they visited him."
        }
      ],
      outro: {
        text: "Give someone a hand, be there for them, don’t let them down: a friend in need is a friend indeed.",
        learned: [
          "Talk about help: give someone a hand, help out, let someone down.",
          "Explain a cause with because and the Past Perfect.",
          "Show a result with so and as a result."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e10s1l6",
      title: "Can I say something? Solving a conflict",
      short: "Conflicts",
      icon: "scale",
      status: "verified",
      why: "Friends sometimes argue. Join a heated discussion politely, explain what caused the problem and find a way to make up.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "A problem at Bright Radio",
          body: `<p class="lead">Bright Radio, the school radio in Lviv. The team meets after lessons.</p><p><b>Myroslava:</b> Ostap, why did you change my playlist? I’d spent two evenings on it!<br><b>Ostap:</b> But you said it was OK!<br><b>Myroslava:</b> I didn’t! I said I’d think about it.<br><b>Ostap:</b> Well, I thought you’d agreed…<br><b>Taras:</b> Sorry to interrupt, but can I say something? I think it’s a misunderstanding.<br><b>Myroslava:</b> Hang on a minute. Let me finish. I’m not angry about the songs. I’m upset because you didn’t ask me.<br><b>Ostap:</b> You’re right. I’m sorry. Next time I’ll ask first.<br><b>Taras:</b> So why don’t we find a compromise? Half your songs and half Ostap’s?</p><p>What started the problem?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><b>Myroslava:</b> Ostap, why did you change my playlist? I’d spent two evenings on it! … I’m not angry about the songs. I’m upset because you didn’t ask me.</p><p>Why is Myroslava upset?</p>`,
          opts: [
            "Ostap had changed her playlist without asking her.",
            "She didn’t like Ostap’s songs.",
            "Ostap hadn’t done any work for the radio."
          ],
          correct: 0,
          hint: "Find because in Myroslava’s words.",
          fbOk: "Right.",
          fbBad: "Read Myroslava’s last sentence again.",
          fbText: "She is upset <b>because</b> Ostap changed her playlist and <b>didn’t ask</b> her. She says she isn’t angry about the songs."
        },
        {
          type: "info",
          title: "Conflict words",
          body: `<ul><li>a <b><u>con</u>flict</b> → a serious disagreement between people</li><li>an <b><u>ar</u>gument</b> → angry words: They <b>had an argument</b>. They <b>argued</b>.</li><li>a <b>misunder<u>stand</u>ing</b> → someone understood something wrongly</li><li><b>blame</b> someone <b>for</b> something → say it’s their fault</li><li><b>a<u>pol</u>ogise</b> (to someone) <b>for</b> something → say sorry</li><li><b>calm down</b> → stop being angry</li><li>a <b><u>com</u>promise</b> → everyone gets part of what they want</li><li><b>make up</b> → be friends again after an argument</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the meanings.",
          left: ["make up", "a compromise", "a misunderstanding", "calm down"],
          right: ["be friends again after an argument", "everyone gets part of what they want", "someone understood something wrongly", "stop being angry"],
          hint: "Which one is about being friends again?",
          fbOk: "Well done!",
          fbBad: "Look at the list “Conflict words” again.",
          fbText: "<b>make up</b> → friends again; <b>compromise</b> → everyone gets part; <b>misunderstanding</b> → understood wrongly; <b>calm down</b> → stop being angry."
        },
        {
          type: "info",
          title: "In a heated discussion",
          body: `<ul><li>you want to speak → <b>Can I say something?</b> / <b>Sorry to interrupt, but…</b> / <b>Could I just say something?</b></li><li>you haven’t finished → <b>Let me finish, please.</b> / <b>Hang on a minute.</b> (informal)</li><li>you want to calm things down → <b>I see your point, but…</b> / <b>Let’s find a compromise.</b> / <b>I’m sorry. Next time I’ll…</b></li></ul><p>A heated discussion → people are angry and talk loudly.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p>Myroslava and Ostap are both talking loudly. Taras hasn’t said anything yet. Now he wants to speak.</p><p>What does Taras say?</p>`,
          opts: [
            "Let me finish, please.",
            "Sorry to interrupt, but can I say something?",
            "Be quiet, both of you!"
          ],
          correct: 1,
          hint: "Taras hasn’t started. He wants to join in politely.",
          fbOk: "Exactly.",
          fbBad: "Taras hasn’t said anything, so he can’t finish. Which phrase is polite?",
          fbText: "<b>Sorry to interrupt, but can I say something?</b> is polite. <i>Let me finish</i> is for when you are already talking."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          text: "Myroslava was angry {*with|on|to} Ostap. At first, she blamed him {*for|of|on} the problem. Then Ostap apologised {*for|of|on} his mistake. They had an {*argument|arguing|argue}, but it was only a misunderstanding.",
          hint: "angry with someone, blame someone for, apologise for, an + noun.",
          fbOk: "Yes!",
          fbBad: "Check the small words in the list “Conflict words”.",
          fbText: "angry <b>with</b> Ostap; blamed him <b>for</b> the problem; apologised <b>for</b> his mistake; had an <b>argument</b> (a noun)."
        },
        {
          type: "info",
          title: "Explaining a conflict",
          body: `<ul><li>The problem started <b>when</b> Ostap <b>changed</b> the playlist.</li><li>He did it <b>because</b> he thought Myroslava <b>had agreed</b>.</li><li><b>As a result</b>, they had an argument.</li><li><b>In the end</b>, they made up.</li></ul><p>Cause → because. Result → as a result, so. The end of the story → in the end.</p>`,
          cta: "Next"
        },
        {
          type: "order",
          sk: "write",
          title: "Put the sentences in order.",
          body: `<p>Taras writes about the problem for the radio team chat.</p>`,
          items: [
            "The problem started when Ostap changed Myroslava’s playlist.",
            "He did it because he thought she had agreed.",
            "As a result, they had a big argument.",
            "Then Ostap apologised, and we found a compromise: half her songs and half his.",
            "In the end, they made up."
          ],
          shuffle: [2, 4, 0, 3, 1],
          hint: "The problem started… → because… → As a result… → Then… → In the end…",
          fbOk: "Well done!",
          fbBad: "Follow the words: started → because → as a result → then → in the end.",
          fbText: "Start → cause (<b>because</b>) → result (<b>As a result</b>) → <b>Then</b> the apology and the compromise → <b>In the end</b> they made up."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>After the argument, Ostap said sorry. Now he and Myroslava are friends again.</p>`,
          before: "They made",
          answer: ["up", "peace", "it up"],
          hint: "make … → be friends again after an argument.",
          fbOk: "Right.",
          fbBad: "Look at the list “Conflict words”.",
          fbText: "They <b>made up</b>: they are friends again. make – made – made."
        },
        {
          type: "pick",
          sk: "vocab",
          title: "Find the mistake.",
          body: `<p>One word in the sentence by Ms Kvitka, the head teacher, is wrong.</p>`,
          text: "When people argue, they first need to calm [up] and listen to each other.",
          hint: "Which phrase means stop being angry?",
          fbOk: "Good eye!",
          fbBad: "Look at the list: calm …",
          fbText: "We say <b>calm down</b>: stop being angry. <b>They first need to calm down and listen.</b>"
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Ms Kvitka, the head teacher, writes to the radio team.</p>`,
          text: "Thank you, Taras, for joining the discussion so politely. Conflicts often start {*when|until} people don’t ask each other. Ostap {*apologised|apologise|apologising} to Myroslava, and together you found a {*compromise|misunderstanding|argument}. I’m glad you {*made up|made out|made down}.",
          hint: "A problem starts when…; a past action; a solution where everyone gets part; friends again.",
          fbOk: "Well done!",
          fbBad: "Check the conflict words in the list.",
          fbText: "Conflicts start <b>when</b> people don’t ask; Ostap <b>apologised</b>; you found a <b>compromise</b>; you <b>made up</b>."
        }
      ],
      outro: {
        text: "Can I say something? Let’s find a compromise. Now you can join a discussion, explain a conflict and help friends make up.",
        learned: [
          "Join a heated discussion politely: Can I say something? Sorry to interrupt, but…",
          "Talk about conflicts: argue, blame, apologise, make up.",
          "Explain causes and results: because, as a result, in the end."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e10s1l7",
      title: "Friends again: relationships and conflicts",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e10s1boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help the school newspaper?",
          body: `<p class="lead">Andrii’s school newspaper in Kyiv is making a page about friendship.</p><p>Check the texts and read the main story. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Complete the sentences.",
          text: "Daryna always does what she promises. She’s {*reliable|moody|stubborn}. Mariia and Polina love the same comics and films. They have a lot {*in common|of common|on common}. Ivanna is just an {*acquaintance|close friend|teammate}: Mariia doesn’t know her well.",
          pre: "e10s1l2",
          hint: "Does what she promises → … The same things → a lot in … Someone you hardly know → …",
          fbOk: "Yes!",
          fbBad: "Look at the descriptions: promises, the same things, doesn’t know her well.",
          fbText: "<b>Reliable</b> → does what she promises. They have a lot <b>in common</b>. An <b>acquaintance</b> → you have met, but you don’t know them well."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          body: `<ul><li>6.00 pm – the film started.</li><li>6.20 pm – Mariia got to the cinema.</li><li>8.00 pm – the film ended.</li></ul>`,
          text: "By the time Mariia got to the cinema, the film {*had started|has started|had start}. The film went on {*until|by} eight.",
          pre: "e10s1l3",
          hint: "The film started first. Something that goes on and stops → …",
          fbOk: "Exactly.",
          fbBad: "had + the third form; went on until…",
          fbText: "The film <b>had started</b> before Mariia came. It went on <b>until</b> eight."
        },
        {
          type: "multi",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Choose all the correct answers.",
          body: `<p>After Emma … her homework, she called Stepan.</p>`,
          opts: [
            "finished",
            "had finished",
            "has finished",
            "finishing"
          ],
          correct: [0, 1],
          pre: "e10s1l4",
          fbOk: "Well done!",
          fbBad: "Two answers are correct. After already shows the order.",
          fbText: "After she <b>finished</b> and after she <b>had finished</b> are both correct. <i>Has finished</i> isn’t a past tense."
        },
        {
          type: "build",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Put the words in order.",
          body: `<p>Start with As soon as.</p>`,
          tiles: ["As soon as", "the bell", "rang,", "Taras", "ran", "to the radio studio"],
          extra: ["rings,"],
          answer: "As soon as the bell rang, Taras ran to the radio studio.",
          pre: "e10s1l4",
          fbOk: "Yes!",
          fbBad: "The story is in the past: rang, not rings.",
          fbText: "<b>As soon as the bell rang, Taras ran to the radio studio.</b> A time clause at the start → a comma."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 5",
          title: "Complete the sentences.",
          text: "Kyrylo forgot the book. He let Daryna {*down|out|off}. He felt bad {*because|so} he had forgotten it.",
          pre: "e10s1l5",
          hint: "let someone … ; cause or result?",
          fbOk: "Right.",
          fbBad: "let someone down; the cause → because.",
          fbText: "He let her <b>down</b>. He felt bad <b>because</b> he had forgotten it: that’s the cause."
        },
        {
          type: "pick",
          sk: "vocab",
          eyebrow: "Task 6",
          title: "Find the mistake.",
          body: `<p>One word in Ostap’s sentence is wrong.</p>`,
          text: "I apologised to Myroslava [of] changing her playlist.",
          pre: "e10s1l6",
          fbOk: "Good eye!",
          fbBad: "apologise … something",
          fbText: "We say <b>apologise for</b>: <b>I apologised to Myroslava for changing her playlist.</b>"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: The missing episode, part 1 of 2",
          title: "Read and choose.",
          body: `<p><i>Andrii and Bohdan have been friends since primary school. But last autumn, they fell out for the first time. It started with the school podcast. Andrii and Daryna had recorded a new episode about chess, and Bohdan had promised to edit it by Friday. On Friday morning, Andrii checked the podcast page. There was nothing there. He sent Bohdan a message, but Bohdan didn’t answer. By the time Andrii found him at lunch, he was really angry. “You let us down!” he said. “We’d worked on it for a week!” Bohdan didn’t say anything. He just turned round and walked away. Daryna had to tell the listeners that the new episode was late. For three days, the two boys didn’t talk to each other. Daryna tried to help. “Can I say something?” she asked Andrii. “Bohdan isn’t lazy. He’s one of the most reliable people I know. Something must be wrong.” Andrii wasn’t sure. He was still upset, but he also missed his friend. They had always sat together at lunch, and now he ate alone.</i></p><p>Why was Andrii angry?</p>`,
          opts: [
            "Bohdan hadn’t edited the episode by Friday.",
            "Daryna had recorded the episode without him.",
            "Bohdan had laughed at the episode."
          ],
          correct: 0,
          pre: "e10s1l3",
          hint: "What had Bohdan promised?",
          fbOk: "Right.",
          fbBad: "Read the sentences about Friday again.",
          fbText: "Bohdan had promised to edit the episode <b>by</b> Friday, but on Friday there was nothing on the page. Andrii felt that Bohdan had <b>let them down</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: The missing episode, part 2 of 2",
          title: "Read and choose.",
          body: `<p><i>That evening, Andrii called Bohdan. As soon as Bohdan answered, Andrii said, “Sorry. I didn’t let you explain.” Then Bohdan told him the whole story. Bohdan had planned to edit the episode after dinner on Thursday. But that evening, his grandad had felt ill, and Bohdan had gone with his mum to help him. By the time they got home, it was after midnight. He had forgotten about the podcast completely. “I was embarrassed,” Bohdan said. “That’s why I walked away.” “Why didn’t you tell me?” Andrii asked. “You blamed me before I could say anything,” Bohdan answered. Andrii felt bad: he had been unfair to his friend. It was a misunderstanding. They found a compromise. Bohdan edited the episode at the weekend, and Andrii wrote the text for the podcast page. The new episode came out on Monday, and it got more listeners than ever. In the end, the two friends made up, and Daryna was happy too: she had been right about Bohdan. Now they have a rule: if there’s a problem, talk first.</i></p><p>Why had Bohdan forgotten about the podcast?</p>`,
          opts: [
            "He was too lazy to edit it.",
            "He had fallen out with Daryna.",
            "He had helped his grandad until late at night."
          ],
          correct: 2,
          pre: "e10s1l5",
          hint: "Read about Thursday evening.",
          fbOk: "Well done!",
          fbBad: "Read the sentences about Thursday evening again.",
          fbText: "His grandad <b>had felt ill</b>, and Bohdan <b>had gone</b> to help him. By the time they got home, it was after midnight. He wasn’t lazy: Daryna was right."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: The missing episode",
          title: "Read and choose.",
          body: `<p>Think about the whole story “The missing episode”.</p><p>What is the main idea of the story?</p>`,
          opts: [
            "Never make a podcast with your friends.",
            "Talk to a friend before you get angry.",
            "A reliable friend never makes mistakes."
          ],
          correct: 1,
          pre: "e10s1l6",
          fbOk: "Exactly.",
          fbBad: "Think about the boys’ new rule at the end.",
          fbText: "Andrii got angry before he knew the whole story. In the end, the friends made up and made a rule: <b>if there’s a problem, talk first</b>."
        }
      ],
      outro: {
        text: "Well done! Now you can describe people and relationships, tell a story in the right order and help friends solve a conflict.",
        learned: [
          "Describe personality and kinds of relationships.",
          "Use the Past Perfect with by the time, when, after and as soon as.",
          "Talk about help, causes and results.",
          "Join a discussion and explain how a conflict was solved."
        ]
      }
    }
  ]
});
