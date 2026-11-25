/* Слід · Англійська мова, 9 клас — «The media: the internet, TV and radio» (e9s4)
   Програма: МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021), 9 кл.: тема «Засоби масової інформації» — Інтернет,
   телебачення і радіо; спілкування в мережі; улюблена передача (PDF с. 33, розд. 5.2.3); граматика B1 (с. 34–35):
   Reported ‘yes/no’ and ‘wh-’ questions; reported requests and commands; reported thought with wonder; Present simple
   with reporting verbs; повторення — reported statements (e8s3l4, e8s3l5), said / told (e6s8l5), питання з do / does
   (e5s2l3), накази в класі (e5s2l5), допис про хобі (e4s3l6); розподіл — content/eng/plan.js,
   reports/verify/plan-eng-g7-8-9.md: https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Граматика — Cambridge Grammar (CD Grammar) «Reported speech: indirect speech» (питання: if / whether, порядок
   підмет + дієслово, без «?»; накази: told + object + to-infinitive, «warned us not to»; Present simple reporting verb;
   No backshift): https://dictionary.cambridge.org/grammar/british-grammar/reported-speech-indirect-speech ;
   ask + object + to-infinitive: https://dictionary.cambridge.org/grammar/british-grammar/ask ;
   tell + object + to-infinitive, «Not: They said us to come»: https://dictionary.cambridge.org/grammar/british-grammar/tell ;
   wonder + question word / if / whether: https://dictionary.cambridge.org/dictionary/english/wonder
   Пастки другої правильної відповіді: if / whether — ніколи не в одному пропуску, у `word` обидва в ключі; backshift
   необов'язковий, якщо досі правда (TQ-144) — теперішня форма ніде не дається хибним варіантом, у multi (l4) — у ключі;
   told / asked з to-infinitive обидва граматичні — у пропусках не протиставляються; хибні варіанти — неможливі форми
   (said us to, don’t, інверсія, did).
   Канали, передачі, студія й шкільне радіо — вигадані (Quiz Time, Music Chat, Lviv Today з e8s3); справжніх ЗМІ,
   соцмереж і блогерів немає. Безпека в мережі — порадами, без страшилок. Діалоги — репліками в body (D-056), без звуку
   (D-055 п. 4). Написання «the internet» — як в OALD і CD та в e8s3 (заголовне слово з малої).
   Герої — серія 4–8 кл., на п'ять років старші, ніж у 4 кл. (memory/short/inbox.md, NOTE (герої)); новий: Mr Moroz
   (менеджер телестудії в Kyiv, l5).
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e9s4; правки — reports/verify/write-eng-g9-e9s4.md). 7 уроків (6 + фінал). Будова — за e8s3 (verified).
   Перевірка: node tools/validate.mjs --section e9s4 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e9s4",
  grade: 9,
  weeks: [13, 16],
  title: "The media: the internet, TV and radio",
  why: "To talk about TV, radio and communicating online. And to report questions and requests.",
  requires: ["e4s3l6", "e5s2l3", "e5s2l5", "e6s8l5", "e8s3l4", "e8s3l5"],
  meta: { author: "writer-e9s4", created: "2026-11-25", factcheck: "verifier-e9s4 (reports/verify/write-eng-g9-e9s4.md)", teacher: null },
  badges: [
    { id: "e9s4boss", name: "Radio star", icon: "trophy", desc: "Finish the final lesson “The media: the internet, TV and radio”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e9s4l1",
      title: "TV, radio and podcasts: what do you like?",
      short: "TV and radio",
      icon: "play",
      status: "verified",
      why: "What do you watch or listen to? Learn the words for TV, radio and podcasts.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What do you watch or listen to?",
          body: `<p class="lead">This month, the penfriend club asks: “What do you watch or listen to?”</p><p><b>Emma:</b> Tom and I watch a nature documentary every Sunday evening.<br><b>Andrii:</b> I listen to a chess podcast on the bus to school.<br><b>Oksana:</b> Grandad has the radio on every morning for the news. Dmytro and I love a quiz show on TV.<br><b>Mariia:</b> I watch a detective series online, one episode a day.</p><p>A programme, a podcast, a series: what are they?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii listens to a <b>podcast</b> on the bus. What is a podcast?</p>`,
          opts: [
            "a programme on the internet: you can listen to it any time",
            "a TV channel for children",
            "a magazine about chess"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A <b>podcast</b> is a programme on the internet. You download it and listen to it any time: on the bus or at home. The next screen has more words."
        },
        {
          type: "info",
          title: "TV, radio and podcasts",
          body: `<ul><li>a <b>channel</b> → a TV station with lots of programmes</li><li>a <b>radio station</b> → a station with programmes on the radio</li><li>a <b>programme</b> → one show on TV or on the radio</li><li>a <b>podcast</b> → a programme on the internet; listen any time</li><li>a <b>presenter</b> → the person who leads a programme</li></ul><p><u>chan</u>nel, <u>pro</u>gramme, <u>pod</u>cast, pre<u>sen</u>ter</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["A presenter", "A podcast", "A radio station", "A channel"],
          right: ["leads a programme and talks to the guests.", "is a programme you download and listen to any time.", "has programmes you listen to on the radio.", "has programmes you watch on TV."],
          hint: "Which one is a person? Which ones are on TV, on the radio, on the internet?",
          fbOk: "Good eye!",
          fbBad: "Look at the list of words again.",
          fbText: "A <b>presenter</b> leads a programme. A <b>podcast</b> is on the internet. A <b>radio station</b> is on the radio, and a <b>channel</b> is on TV."
        },
        {
          type: "info",
          title: "What’s on TV?",
          body: `<ul><li><b>the news</b> → what’s happening in the world today</li><li>a <b>weather forecast</b> → tomorrow’s weather</li><li>a <b>quiz show</b> → people answer questions and win prizes</li><li>a <b>talk show</b> (also <b>chat show</b>) → a presenter talks to famous guests</li><li>a <b>documentary</b> → facts about real life: nature, history, science</li><li>a <b>series</b> → a story in many parts; one part is an <b>episode</b></li></ul><p>docu<u>men</u>tary, <u>ep</u>isode</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Oksana writes about her family’s favourite programmes.</p>`,
          text: "Every morning, Grandad listens to {*the news|a cartoon|an episode} on the radio: he wants to know what’s happening in Ukraine. Dad always checks the {*weather forecast|talk show|quiz show} before he works in the garden. Dmytro and I watch a {*quiz show|weather forecast|documentary}: people answer questions and win prizes. Mum likes a hospital {*series|presenter|channel}: there’s a new episode every Tuesday.",
          hint: "What’s happening today → ? Tomorrow’s weather → ? A new episode every week → ?",
          fbOk: "Exactly.",
          fbBad: "Look at the list “What’s on TV?” again.",
          fbText: "What’s happening today: <b>the news</b>. Tomorrow’s weather: the <b>weather forecast</b>. Questions and prizes: a <b>quiz show</b>. Many episodes: a <b>series</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+chan|nel", "pre|+sen|ter", "doc|u|+men|ta|ry", "+ep|i|sode"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts in the lists of words.",
          fbText: "<u>chan</u>nel, pre<u>sen</u>ter, docu<u>men</u>tary, <u>ep</u>isode."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>This person leads a quiz show. He asks the questions and gives the prizes.</p>`,
          before: "He’s the",
          after: ".",
          answer: ["presenter", "host", "quizmaster"],
          hint: "Look at the first list of words: the person who leads a programme.",
          fbOk: "Yes!",
          fbBad: "Who leads a programme? Find it in the first list.",
          fbText: "The person who leads a programme is the <b>presenter</b>. <i>Host</i> and <i>quizmaster</i> are correct too."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma answers Oksana.</p>`,
          text: "Hi Oksana! We don’t watch much TV, but every Sunday Tom and I watch a nature {*documentary|quiz show|weather forecast} about the sea. This week’s {*episode|channel|presenter} was about whales. The {*presenter|podcast|radio station} is a scientist, and she explains everything really well. On the bus, I listen to a {*podcast|channel|weather forecast} about animals: I download it to my phone.",
          hint: "Facts about real life → ? One part of a series → ? On the internet, any time → ?",
          fbOk: "Well done!",
          fbBad: "Check: a person explains; you download a programme from the internet.",
          fbText: "Real facts about the sea: a <b>documentary</b>. One part: this week’s <b>episode</b>. The person: the <b>presenter</b>. You download a <b>podcast</b>."
        }
      ],
      outro: {
        text: "Channels, radio stations and podcasts: now you can talk about what you watch and listen to.",
        learned: [
          "Name the media: a channel, a radio station, a podcast.",
          "Name the types of programmes: the news, a quiz show, a documentary.",
          "Say what you and your family like to watch."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e9s4l2",
      title: "My favourite programme: a quiz or a talk show?",
      short: "My favourite",
      icon: "star",
      status: "verified",
      why: "Talk about your favourite programme. And report what your friends say about theirs.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "What’s your favourite programme?",
          body: `<p class="lead">Ms Lysenko asks Andrii’s class in Kyiv: “What’s your favourite programme?”</p><p><b>Bohdan:</b> Quiz Time! It’s a quiz show for teenagers.<br><b>Daryna:</b> I love Music Chat. It’s a talk show about music.<br><b>Kyrylo:</b> I listen to a history podcast. There’s a new episode every week.</p><p>After school, Andrii writes to Taras: <i>Bohdan <b>says</b> his favourite programme <b>is</b> Quiz Time.</i></p><p>Why <i>says</i>, not <i>said</i>?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii writes: <i>Bohdan <b>says</b> his favourite programme <b>is</b> Quiz Time.</i></p><p>Why does he use the present?</p>`,
          opts: [
            "Bohdan said it a year ago.",
            "It’s still true: Quiz Time is still Bohdan’s favourite.",
            "Bohdan is the presenter of Quiz Time."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Quiz Time is still Bohdan’s favourite. When it’s still true, we can use <b>says</b> + the present. The next screen shows how."
        },
        {
          type: "info",
          title: "He says it’s his favourite",
          body: `<p>Still true now? Use <b>says</b> or <b>tells me</b> + the present:</p><ul><li>Bohdan: “My favourite programme is Quiz Time.”<br>→ Bohdan <b>says</b> his favourite programme <b>is</b> Quiz Time.</li><li>Kyrylo: “I listen to a history podcast.”<br>→ Kyrylo <b>tells me</b> he <b>listens</b> to a history podcast.</li></ul><p>In a story about the past: <i>Last Monday, Bohdan <b>said</b> he <b>was</b> tired.</i></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Andrii tells Taras about his classmates.</p>`,
          text: "Daryna says she {*watches|watch|watching} a talk show about music. She says the presenter {*is|are|be} really funny. Kyrylo tells me he {*listens|listen|listening} to a history podcast. He says there {*is|are|be} a new episode every week.",
          hint: "says + the present: she watches, he listens, the presenter is.",
          fbOk: "Exactly.",
          fbBad: "After says, use the present: he / she + -s, the presenter + is.",
          fbText: "Daryna says she <b>watches</b>. The presenter <b>is</b> funny. Kyrylo tells me he <b>listens</b>. There <b>is</b> a new episode: one episode → is."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Zoriana: “I’m making a robot for a TV science quiz.” She says this today, and she’s still making it.</p><p>What does Andrii tell Taras?</p>`,
          opts: [
            "Zoriana says me she’s making a robot for a TV science quiz.",
            "Zoriana says she making a robot for a TV science quiz.",
            "Zoriana says she’s making a robot for a TV science quiz."
          ],
          correct: 2,
          hint: "says + a person? And she + ’s + making.",
          fbOk: "Right.",
          fbBad: "Remember: not says me. And she’s making, not she making.",
          fbText: "<b>Zoriana says she’s making a robot.</b> Not <s>says me</s>: after <i>says</i> there’s no person. <i>She making</i> has no verb <i>is</i>."
        },
        {
          type: "info",
          title: "Talk about a programme",
          body: `<ul><li>What is it? → <i>It’s a quiz show for teenagers.</i></li><li>When is it on? → <i>It’s <b>on</b> every Friday at 7 pm.</i></li><li>What is it about? → <i>It’s about music.</i></li><li>Who is in it? → <i>The presenter is…</i></li><li>Why do you like it? → <i>I like it because…</i></li></ul><p><b>be on</b> = you can watch or listen to it at that time</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: My favourite programme, part 1 of 2",
          title: "Read and choose.",
          body: `<p><b>My favourite programme</b><br><i>by Daryna</i></p><p><i>My favourite programme is Music Chat. It’s a talk show for teenagers, and it’s on every Saturday at 6 pm. In each episode, the presenter talks to two young musicians from different cities in Ukraine. Last week, a girl from Odesa played the bandura and talked about her music school. Every episode ends with a song. I watch it with my sister.</i></p><p>When is Music Chat on?</p>`,
          opts: [
            "every Sunday at 6 pm",
            "every Saturday at 6 pm",
            "every Saturday at 7 pm"
          ],
          correct: 1,
          hint: "Find the word on in the text.",
          fbOk: "Yes!",
          fbBad: "Read the second sentence again.",
          fbText: "It’s on <b>every Saturday at 6 pm</b>."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: My favourite programme, part 2 of 2",
          title: "Choose all the correct answers.",
          body: `<p><i>Why do I like it? The guests are my age, so I understand their problems. The presenter asks good questions, and he’s really funny. Sometimes the guests play music together in the studio. My mum says the songs are too loud, but she always watches the end with us!</i></p><p>Why does Daryna like Music Chat?</p>`,
          opts: [
            "The songs are quiet.",
            "The guests are her age.",
            "The presenter asks good questions.",
            "Her mum is the presenter."
          ],
          correct: [1, 2],
          hint: "Find the sentences after “Why do I like it?”.",
          fbOk: "Well done!",
          fbBad: "Check what Daryna’s mum says about the songs.",
          fbText: "The guests are <b>her age</b>, and the presenter asks <b>good questions</b>. Her mum says the songs are too loud."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Daryna: “My favourite programme is Music Chat.” It’s still her favourite.</p><p>Report her words with <b>says</b>.</p>`,
          tiles: ["Daryna", "says", "her", "favourite programme", "is", "Music Chat"],
          extra: ["my"],
          answer: ["Daryna says her favourite programme is Music Chat.", "Daryna says Music Chat is her favourite programme."],
          hint: "Daryna says + her (not my) + …",
          fbOk: "Yes!",
          fbBad: "When you report Daryna’s words, my → her.",
          fbText: "<b>Daryna says her favourite programme is Music Chat.</b> <i>My</i> changes to <b>her</b>, and the present stays: it’s still true."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Andrii’s message is wrong.</p>`,
          text: "Kyrylo [!says] he [listen] to a history podcast. My sister Sofiia [!tells] me she [!likes] it too.",
          hint: "Check the verb after he and after she.",
          fbOk: "Good eye!",
          fbBad: "Look at the verb after he.",
          fbText: "He <b>listens</b>: he + -s. <i>Says</i>, <i>tells me</i> and <i>she likes</i> are correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes to Taras.</p>`,
          text: "Hi Taras! Ms Lysenko asked us about our favourite programmes. Bohdan says his favourite {*is|are|be} Quiz Time: it’s {*on|in|at} every Friday at 7 pm. Daryna {*says|tells|say} she loves Music Chat, a talk show about music. Last Monday, Kyrylo said he {*was|were|is being} too busy for TV, but he listens to a history podcast on the bus. What’s your favourite programme?",
          hint: "When is it? → it’s on. Tells needs a person. Last Monday → the past.",
          fbOk: "Well done!",
          fbBad: "Check: tells + a person; he → was.",
          fbText: "His favourite <b>is</b> Quiz Time; it’s <b>on</b> every Friday. Daryna <b>says</b>: no person after it. Last Monday, Kyrylo said he <b>was</b> busy."
        }
      ],
      outro: {
        text: "Says + the present: we use it when the words are still true. Now you can talk about your favourite programme too.",
        learned: [
          "Talk about a programme: what it is, when it’s on, why you like it.",
          "Report what people say now: She says her favourite programme is…",
          "Read a short post about a favourite programme."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e9s4l3",
      title: "Chatting online: safe and polite",
      short: "Online",
      icon: "shield",
      status: "verified",
      why: "Chat online and stay safe. Learn easy rules for safe and polite messages.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Free coins?",
          body: `<p class="lead">Dmytro is playing an online game. A player he doesn’t know writes to him in the game chat.</p><p><b>Player:</b> Hi! Send me your password, and I’ll give you 1,000 free coins!<br><b>Dmytro:</b> Oksana, look! Free coins!<br><b>Oksana:</b> Wait. Do you know this player?<br><b>Dmytro:</b> No…</p><p>What should Dmytro do?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>What is the best thing for Dmytro to do?</p>`,
          opts: [
            "Not answer, block the player and tell Mum or Dad.",
            "Send his password: the coins are free!",
            "Send his address and phone number instead."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good thinking!",
          fbText: "Never send your password. Oksana helped Dmytro <b>block</b> the player, and they told Mum. The next screen has more tips."
        },
        {
          type: "info",
          title: "Stay safe online",
          body: `<ul><li>Keep your <b>password</b> secret – even from friends.</li><li>Use a <b>username</b>, not your full name.</li><li>Don’t share your address, phone number or school with strangers.</li><li>Someone makes you feel bad? <b>Block</b> them, <b>report</b> them and tell an adult you trust.</li></ul><p>block = stop someone sending you messages<br>report = tell the website or app about a problem</p>`,
          cta: "Next"
        },
        {
          type: "multi",
          sk: "func",
          title: "Choose all the correct answers.",
          body: `<p>Mariia is making a profile (a page about you) for an online comics club.</p><p>What is safe to put on her profile?</p>`,
          opts: [
            "her home address",
            "her username: ComicsCat",
            "a drawing of her favourite comic character",
            "her password, so she doesn’t forget it"
          ],
          correct: [1, 2],
          hint: "Look at the tips on the last screen. What do strangers not need?",
          fbOk: "Well done!",
          fbBad: "Strangers don’t need your address, and nobody needs your password.",
          fbText: "A <b>username</b> and a <b>drawing</b> are safe. Keep your address away from strangers and your password secret."
        },
        {
          type: "info",
          title: "Be polite online",
          body: `<ul><li>Say hello, please and thank you – like face to face.</li><li>DON’T WRITE IN CAPITALS: it looks like shouting.</li><li>Ask friends before you <b>post</b> their photos. (post = put on the internet)</li><li>Read your message before you send it. Would you say it face to face?</li><li>Don’t like a comment? Don’t be rude. You don’t have to answer.</li></ul>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "func",
          title: "Sort the messages.",
          body: `<p>Polite or not polite?</p>`,
          bins: ["polite", "not polite"],
          items: [
            ["Thanks for the photos! They’re great.", 0],
            ["Could you send me the link, please?", 0],
            ["Sorry, I can’t come to the meeting today.", 0],
            ["WHERE ARE MY PHOTOS???", 1],
            ["Your drawing is terrible.", 1],
            ["Here’s a funny photo of Halyna. I didn’t ask her!", 1]
          ],
          hint: "Capitals? Rude words? A photo without asking?",
          fbOk: "Good eye!",
          fbBad: "Look at the rules on the last screen.",
          fbText: "Polite: <i>thanks</i>, <i>please</i>, <i>sorry</i>. Not polite: capitals look like shouting, <i>terrible</i> is rude, and you ask before you post a friend’s photo."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Oksana gives Dmytro some advice.</p>`,
          text: "Never tell anyone your {*password|username|profile}, even your best friend. In games, use a {*username|password|comment}, not your real name. If a stranger is rude to you, {*block|post|share} them and tell Mum or Dad. Before you {*post|block|report} a photo of a friend, ask them.",
          hint: "Secret → ? Not your real name → ? Stop someone writing to you → ?",
          fbOk: "Exactly.",
          fbBad: "Look at the two lists of tips again.",
          fbText: "Your <b>password</b> is secret. Use a <b>username</b>. <b>Block</b> a rude stranger. Ask before you <b>post</b> a photo."
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p>Taras posts a photo of the school newspaper team in a group chat.</p><p><b>Ostap:</b> Great photo! Can I put it on the school website?<br><b>Taras:</b> …</p>`,
          opts: [
            "NO. IT’S MY PHOTO.",
            "Whatever.",
            "Sure! But let me ask Myroslava first: she’s in it too."
          ],
          correct: 2,
          hint: "Which answer is polite? Who is in the photo?",
          fbOk: "Right.",
          fbBad: "Capitals look like shouting. Which answer is polite?",
          fbText: "Taras is polite, and he asks Myroslava first: she’s in the photo. Capitals look like shouting, and <i>Whatever</i> is rude."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>A stranger sends you rude messages. You can stop them: after this, they can’t write to you.</p>`,
          before: "You can",
          after: "them.",
          answer: ["block"],
          hint: "Look at the tips “Stay safe online”.",
          fbOk: "Yes!",
          fbBad: "Stop someone sending you messages → ?",
          fbText: "You can <b>block</b> them: they can’t send you messages. You can report them and tell an adult too."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana makes a poster for the English club at her school.</p>`,
          text: "<b>Stay safe and polite online!</b><br>{*Don’t share|Not share|Don’t sharing} your password. {*Ask|Asks|Asking} your friends before you post their photos. Don’t write in {*capitals|passwords|usernames}: it looks like shouting. If someone is rude, {*tell|tells|telling} an adult you trust.",
          hint: "Tips → Don’t + verb, or just the verb: Ask, Tell.",
          fbOk: "Well done!",
          fbBad: "In tips we use the verb without -s or -ing: Ask…, Don’t share…",
          fbText: "<b>Don’t share</b> your password. <b>Ask</b> your friends. Not in <b>capitals</b>. <b>Tell</b> an adult you trust."
        }
      ],
      outro: {
        text: "Keep your password secret, use a username and be polite – online and face to face.",
        learned: [
          "Name things online: a username, a password, a profile, a comment.",
          "Give tips for safe chatting: Don’t share your password.",
          "Write polite messages and answer politely in a group chat."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e9s4l4",
      title: "She asked if I liked…: reported questions",
      short: "She asked…",
      icon: "voice",
      status: "verified",
      why: "Tell a friend what people asked you. Learn the word order: She asked where I lived.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "An interview for Lviv Today",
          body: `<p class="lead">A journalist from Lviv Today came to Taras’s school. She asked Taras some questions about the school newspaper.</p><ul><li>“Do you like taking photos?”</li><li>“Where do you take your photos?”</li><li>“What camera do you use?”</li></ul><p>Later, Taras writes to Emma: <i>She asked me <b>if I liked</b> taking photos. She asked <b>where I took</b> my photos and <b>what camera I used</b>.</i></p><p>Where are <i>do</i> and the question marks?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>The journalist: “What camera do you use?”</p><p>Taras writes: She asked what camera I …</p>`,
          opts: [
            "did use",
            "used",
            "do use"
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "She asked what camera I <b>used</b>. There’s no <i>do</i> or <i>did</i>: the word order is like a statement. The next screen shows the rule."
        },
        {
          type: "info",
          title: "Reported wh- questions",
          body: `<p>“Where <b>do you</b> take your photos?”<br>→ She asked me where <b>I took</b> my photos.</p><ul><li>no <b>do / does / did</b></li><li>word order like a statement: where / what / how + <b>person + verb</b></li><li>the verb often goes back: take → took, is → was</li><li>no question mark</li></ul><p>Not: <s>She asked where did I take my photos?</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>The journalist’s questions: “Where is the newspaper office?” “How old are you?” “What are you working on?”</p>`,
          text: "She asked me where the newspaper office {*was|is it|was it}. She asked how old {*I was|was I|am I}. Then she asked what {*I was working|was I working|I working} on.",
          hint: "Person + verb, like a statement: the office was, I was.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: no question word order after asked.",
          fbText: "Where the office <b>was</b>, how old <b>I was</b>, what <b>I was working</b> on: person + verb. Not <s>was I</s>."
        },
        {
          type: "info",
          title: "Reported yes / no questions",
          body: `<p>“<b>Do you</b> like taking photos?”<br>→ She asked <b>if</b> I liked taking photos.<br>→ She asked <b>whether</b> I liked taking photos.</p><ul><li>a yes / no question → <b>if</b> or <b>whether</b> (both correct)</li><li>then person + verb, like a statement</li></ul><p>Still true now? You can keep the present: <i>She asked if I <b>like</b> taking photos.</i> (correct too)</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>The journalist: “Are you in the newspaper team?”</p><p>What did she ask Taras?</p>`,
          opts: [
            "She asked that I was in the newspaper team.",
            "She asked if was I in the newspaper team.",
            "She asked if I was in the newspaper team."
          ],
          correct: 2,
          hint: "A yes / no question → if + person + verb.",
          fbOk: "Right.",
          fbBad: "Yes / no question → if or whether. Then: I was.",
          fbText: "<b>She asked if I was in the newspaper team.</b> A yes / no question needs <i>if</i> or <i>whether</i>, not <i>that</i>. Then <i>I was</i>, not <s>was I</s>."
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Zlata asks Taras: “Do you like quiz shows?” Taras still likes them.</p><p>What can Taras write?</p>`,
          opts: [
            "Zlata asked if did I like quiz shows.",
            "Zlata asked if I liked quiz shows.",
            "Zlata asked whether I liked quiz shows.",
            "Zlata asked if I like quiz shows."
          ],
          correct: [1, 2, 3],
          hint: "If or whether? Still true? And is there did?",
          fbOk: "Well done!",
          fbBad: "Three sentences are correct. Which one has question word order?",
          fbText: "<b>If</b> and <b>whether</b> are both correct. It’s still true, so <b>liked</b> and <b>like</b> are both correct. <i>If did I like</i> is wrong: no <i>did</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Taras’s message is in the wrong place.</p>`,
          text: "The journalist asked me [!if] I [!liked] taking photos. Then she asked me where [was] the newspaper office.",
          hint: "Look at the word order after where.",
          fbOk: "Good eye!",
          fbBad: "Where + person or thing + verb.",
          fbText: "Say: she asked me where the newspaper office <b>was</b>. The verb goes after <i>the newspaper office</i>. <i>If I liked</i> is correct."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>The journalist: “Where do you go to school?”</p><p>Report her question.</p>`,
          tiles: ["She", "asked", "me", "where", "I", "went", "to school"],
          extra: ["did"],
          answer: "She asked me where I went to school.",
          hint: "She asked me where + person + verb…",
          fbOk: "Yes!",
          fbBad: "No did: where + I + went.",
          fbText: "<b>She asked me where I went to school.</b> No <i>did</i>; go → went."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>The journalist: “Are you happy with your new camera?”</p>`,
          before: "She asked me",
          after: "I was happy with my new camera.",
          answer: ["if", "whether"],
          hint: "A yes / no question → ?",
          fbOk: "Well done!",
          fbBad: "Look at the rule screen “Reported yes / no questions”.",
          fbText: "She asked me <b>if</b> I was happy. <b>Whether</b> is correct too."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes to Emma.</p>`,
          text: "Hi Emma! Guess what? A journalist from Lviv Today asked me about our school newspaper. She asked {*if|that|what} I liked taking photos. Then she asked me what camera {*I used|did I use|I did use}. She asked {*where I took|where did I take|where took I} my best photos. And she asked {*whether|what|who} I wanted to be a journalist one day. I said I wasn’t sure!",
          hint: "Yes / no question → if, whether. Wh- question → person + verb.",
          fbOk: "Well done!",
          fbBad: "Check: no did, and person + verb.",
          fbText: "She asked <b>if</b> I liked photos, what camera <b>I used</b>, <b>where I took</b> my photos and <b>whether</b> I wanted to be a journalist."
        }
      ],
      outro: {
        text: "In reported questions, there’s no do or did, and the word order is like a statement: She asked where I lived.",
        learned: [
          "Report yes / no questions with if and whether.",
          "Report wh- questions: She asked what camera I used.",
          "Tell a friend about an interview."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e9s4l5",
      title: "He told us to switch off our phones: reported requests",
      short: "He told us to…",
      icon: "users",
      status: "verified",
      why: "Tell a friend what people asked you to do. Learn: He told us to…, She asked us not to…",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "A day at a TV studio",
          body: `<p class="lead">Andrii’s class visits a TV studio in Kyiv. They’re going to watch Quiz Time.</p><p>Before the show, the studio manager, Mr Moroz, says:<br>“Switch off your phones. Don’t talk during the show. Could you clap at the end, please?”</p><p>That evening, Andrii writes to Liam: <i>He <b>told us to switch off</b> our phones. He <b>told us not to talk</b>. He <b>asked us to clap</b> at the end.</i></p><p>What comes after <i>told us</i>?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Mr Moroz: “Don’t talk during the show.”</p><p>Andrii writes: He told us … during the show.</p>`,
          opts: [
            "don’t talk",
            "not to talk",
            "to not talking"
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "He told us <b>not to talk</b>. <i>Don’t</i> + verb → <b>not to</b> + verb. The next screen shows the rule."
        },
        {
          type: "info",
          title: "He told us to…, he asked us to…",
          body: `<ul><li>an order → <b>told</b> + person + <b>to</b> + verb:<br>“Switch off your phones.” → He <b>told us to switch off</b> our phones.</li><li>“Don’t…” → <b>not to</b> + verb:<br>“Don’t talk.” → He <b>told us not to talk</b>.</li><li>a polite request (please, could you…?) → <b>asked</b> + person + <b>to</b> + verb:<br>“Could you clap, please?” → He <b>asked us to clap</b>.</li></ul><p>Not: <s>said us to</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>More from Mr Moroz: “Sit in the first three rows. Don’t take photos. Please wait here after the show.”</p>`,
          text: "He told us {*to sit|sit|sitting} in the first three rows. He told us {*not to take|don’t take|to don’t take} photos. He asked us {*to wait|waiting|wait} there after the show.",
          hint: "told / asked + person + to + verb. Don’t → not to.",
          fbOk: "Exactly.",
          fbBad: "After told us and asked us: to + verb.",
          fbText: "He told us <b>to sit</b>, told us <b>not to take</b> photos and asked us <b>to wait</b>. Here → there."
        },
        {
          type: "match",
          sk: "gram",
          title: "Match the halves.",
          body: `<p>What did the presenter of Quiz Time say? Match his words and the report.</p>`,
          left: ["“Switch off your phones.”", "“Don’t take photos.”", "“Could you clap, please?”", "“Wait for me, please.”"],
          right: ["He told us to switch off our phones.", "He told us not to take photos.", "He asked us to clap.", "He asked us to wait for him."],
          hint: "Find the same verb: switch off, take, clap, wait.",
          fbOk: "Good eye!",
          fbBad: "Don’t → not to. Please, could you → asked.",
          fbText: "Switch off → <b>told us to switch off</b>. Don’t take → <b>told us not to take</b>. Could you clap → <b>asked us to clap</b>. Wait for me → <b>asked us to wait for him</b>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Ms Lysenko: “Please don’t be late for the bus.”</p><p>What did she ask?</p>`,
          opts: [
            "She said us not to be late for the bus.",
            "She asked us not to be late for the bus.",
            "She asked us to don’t be late for the bus."
          ],
          correct: 1,
          hint: "asked + person + not to + verb.",
          fbOk: "Right.",
          fbBad: "Not said us. And don’t → not to.",
          fbText: "<b>She asked us not to be late.</b> Not <s>said us</s>, not <s>to don’t</s>."
        },
        {
          type: "info",
          title: "A question or a request?",
          body: `<ul><li>a question → asked + <b>if</b> / <b>wh- word</b>:<br>“Do you like quizzes?” → He asked <b>if</b> we liked quizzes.</li><li>a request → asked + person + <b>to</b> + verb:<br>“Please answer quickly.” → He asked us <b>to answer</b> quickly.</li></ul><p>Remember: your → our, me → him / her.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the sentences.",
          body: `<p>Is it a reported question or a reported request?</p>`,
          bins: ["a question", "a request"],
          items: [
            ["The presenter asked us if we liked quizzes.", 0],
            ["He asked what school we went to.", 0],
            ["She asked Bohdan what his name was.", 0],
            ["He asked us to clap at the end.", 1],
            ["She asked Daryna to stand up.", 1],
            ["He asked us not to talk.", 1]
          ],
          hint: "if or a wh- word → a question. to + verb → a request.",
          fbOk: "Good eye!",
          fbBad: "Look for if, what and to + verb.",
          fbText: "Questions: <i>if</i>, <i>what school</i>, <i>what his name was</i>. Requests: <i>to clap</i>, <i>to stand up</i>, <i>not to talk</i>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing words.",
          body: `<p>The presenter: “Don’t shout the answers.”</p>`,
          before: "The presenter told us",
          after: "shout the answers.",
          answer: ["not to"],
          hint: "Don’t → ? (two words)",
          fbOk: "Yes!",
          fbBad: "Don’t + verb → not to + verb.",
          fbText: "The presenter told us <b>not to</b> shout the answers."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>The presenter: “Put your hands up!”</p><p>Report the order.</p>`,
          tiles: ["The presenter", "told", "us", "to", "put", "our hands", "up"],
          extra: ["said"],
          answer: ["The presenter told us to put our hands up.", "The presenter told us to put up our hands."],
          hint: "told + person + to + verb…",
          fbOk: "Well done!",
          fbBad: "Not said us: told us to…",
          fbText: "<b>The presenter told us to put our hands up.</b> <i>Put up our hands</i> is correct too. Your → our."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes to Liam.</p>`,
          text: "Hi Liam! Yesterday our class went to a TV studio to watch a quiz show. Before the show, the manager {*told|said|says} us to switch off our phones. He told us {*not to|don’t|no to} talk. The presenter asked Bohdan {*to answer|answer|answering} a question about rap, and he won a T-shirt! At the end, the presenter asked us {*to clap|clap|clapping}, so we clapped really loudly.",
          hint: "A person after the gap → told. Then: to + verb, not to + verb.",
          fbOk: "Well done!",
          fbBad: "Check: told + us; asked + person + to + verb.",
          fbText: "The manager <b>told</b> us to switch off our phones and told us <b>not to</b> talk. The presenter asked Bohdan <b>to answer</b> and asked us <b>to clap</b>."
        }
      ],
      outro: {
        text: "Told us to…, asked us not to…: now you can report orders and requests.",
        learned: [
          "Report orders: He told us to switch off our phones.",
          "Report requests: She asked us not to be late.",
          "Tell a question from a request: asked if… or asked us to…"
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e9s4l6",
      title: "I wonder what…: comments and online posts",
      short: "I wonder…",
      icon: "bulb",
      status: "verified",
      why: "Write friendly comments online. Learn to say what you want to know: I wonder what happens next.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Page 5 of Mariia’s comic",
          body: `<p class="lead">Mariia posts a new page of her comic in an online comics club.</p><p><b>Mariia:</b> Here’s page 5! The detective finds a strange key. I wonder what you think.<br><b>Polina:</b> Love the colours! I wonder what the key opens.<br><b>Zofia:</b> Great drawing! I wonder if the detective will find the door.</p><p><i>I wonder what the key opens</i> – it’s like a question. But where’s <i>does</i>?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Polina wants to know where the story happens.</p><p>I wonder where …</p>`,
          opts: [
            "does the story happen?",
            "happens the story.",
            "the story happens."
          ],
          correct: 2,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "I wonder where <b>the story happens</b>. Like in reported questions: person or thing + verb, no <i>does</i>. The next screen shows the rule."
        },
        {
          type: "info",
          title: "I wonder…",
          body: `<p><b>I wonder</b> + wh- word / <b>if</b> / <b>whether</b> = I want to know; I’m thinking about it.</p><ul><li>I wonder <b>what the key opens</b>.</li><li>I wonder <b>if</b> / <b>whether</b> the detective will find the door.</li></ul><p>Person or thing + verb, like a statement. No <i>do / does</i>, no question mark.</p><p>Not: <s>I wonder what does the key open?</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>More comments on Mariia’s comic.</p>`,
          text: "<b>Roksolana:</b> I wonder why {*the girl in the red coat is|is the girl in the red coat|does the girl in the red coat} sad.<br><b>Polina:</b> I wonder {*if|what|who} the detective will open the door.<br><b>Zofia:</b> I wonder what {*happens|does it happen|happen} next!",
          hint: "Person or thing + verb. Yes / no idea → if.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: no do / does, and the verb goes after the person.",
          fbText: "Why <b>the girl in the red coat is</b> sad;<b>if</b> the detective will open the door; what <b>happens</b> next."
        },
        {
          type: "info",
          title: "I wondered…",
          body: `<p>In a story about the past, use <b>wondered</b>. The verb goes back, as after <i>said</i> and <i>asked</i>:</p><ul><li>“What does the key open?”<br>→ Polina <b>wondered</b> what the key <b>opened</b>.</li><li>“Will the detective find the door?”<br>→ Zofia <b>wondered if</b> the detective <b>would</b> find it.</li></ul><p>will → <b>would</b></p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Last Sunday, Andrii waited for the new episode of his chess podcast. It was late. He thought: “Why is it late?”</p><p>What did Andrii wonder?</p>`,
          opts: [
            "He wondered why was it late.",
            "He wondered why it was late.",
            "He wondered why did it late."
          ],
          correct: 1,
          hint: "wondered + why + person or thing + verb.",
          fbOk: "Right.",
          fbBad: "Look at the word order after why.",
          fbText: "<b>He wondered why it was late.</b> Thing + verb: <i>it was</i>. Not <s>was it</s>, not <s>did it</s>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: A name for our radio, part 1 of 2",
          title: "Read and choose.",
          body: `<p><b>Taras</b> · School 5 News group</p><p><i>Hi everyone! Our school is starting a radio, and it needs a name. Ms Kvitka told us to choose one by Friday. She asked us to post our ideas here. I wonder if we can use the name of our newspaper: School 5 Radio? Or maybe something more fun. I wonder what you think!</i></p><p>What did Ms Kvitka ask the students to do?</p>`,
          opts: [
            "to write a new newspaper",
            "to take photos of the radio",
            "to post their ideas for a name"
          ],
          correct: 2,
          hint: "Find asked us to in the post.",
          fbOk: "Yes!",
          fbBad: "Read the sentence with asked us again.",
          fbText: "Ms Kvitka asked them <b>to post their ideas</b> for a name. She told them to choose one by Friday."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: A name for our radio, part 2 of 2",
          title: "Choose all the correct answers.",
          body: `<p><b>Myroslava:</b> Good idea, Taras! But I wonder whether it’s a bit boring. What about Bright Radio?<br><b>Ostap:</b> I like Bright Radio! I wonder who the presenters will be.<br><b>Taras:</b> Thanks! Ms Kvitka said anyone could try. I wonder if Myroslava wants to be a presenter!</p><p>What do we learn from the comments?</p>`,
          opts: [
            "Ostap is the new presenter.",
            "Myroslava thinks School 5 Radio may be boring.",
            "Ostap likes the name Bright Radio.",
            "Ms Kvitka chose the name."
          ],
          correct: [1, 2],
          hint: "Read Myroslava’s and Ostap’s comments.",
          fbOk: "Well done!",
          fbBad: "Does anyone know who the presenters will be?",
          fbText: "Myroslava wonders whether School 5 Radio is <b>a bit boring</b>, and Ostap <b>likes Bright Radio</b>. Nobody knows the presenters yet."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Ostap wants to know when the first radio show starts.</p>`,
          tiles: ["I", "wonder", "what time", "the first show", "starts"],
          extra: ["does"],
          answer: "I wonder what time the first show starts.",
          hint: "I wonder + what time + thing + verb.",
          fbOk: "Yes!",
          fbBad: "No does: what time + the first show + starts.",
          fbText: "<b>I wonder what time the first show starts.</b> No <i>does</i>, and the verb goes after <i>the first show</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Polina’s comment is in the wrong place.</p>`,
          text: "I [!love] this page! I wonder where [is] the detective now. And I [!wonder] if he [!has] a cat.",
          hint: "Look at the word order after where.",
          fbOk: "Good eye!",
          fbBad: "Where + person + verb.",
          fbText: "Say: I wonder where the detective <b>is</b> now. The verb goes after <i>the detective</i>. <i>I wonder if he has a cat</i> is correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia answers the comments on her comic.</p>`,
          text: "Thanks for your comments! Polina, you wondered what the key {*opened|did open|opens it}. You’ll find out on page 6! Zofia asked {*whether|what|who} the detective would find the door. Wait and see! And Roksolana told me {*to draw|draw|drawing} more pages. I wonder {*what you will|what will you|will what you} think of the end!",
          hint: "Person or thing + verb. Told me + to + verb.",
          fbOk: "Well done!",
          fbBad: "Check the word order: no did, and the verb after the person.",
          fbText: "You wondered what the key <b>opened</b>. Zofia asked <b>whether</b> the detective would find it. Roksolana told me <b>to draw</b>. I wonder <b>what you will</b> think."
        }
      ],
      outro: {
        text: "I wonder what…, I wonder if…: a friendly way to ask in comments, with the word order of a statement.",
        learned: [
          "Say what you want to know: I wonder what happens next.",
          "Report thoughts: He wondered why it was late.",
          "Read and write friendly comments online."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e9s4l7",
      title: "Our school podcast",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e9s4boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help with the first episode?",
          body: `<p class="lead">Andrii and Daryna are making the first episode of a school podcast in Kyiv. They need help.</p><p>Check the words, the safety tips and the people’s questions and requests. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          text: "Daryna is the {*presenter|episode|channel}: she leads the programme. There’s a new {*episode|presenter|password} every Monday. Our first guest watches a lot of nature {*documentaries|quiz shows|weather forecasts}: she loves real facts about animals.",
          pre: "e9s4l1",
          hint: "Leads the programme → ? One part → ? Real facts → ?",
          fbOk: "Yes!",
          fbBad: "Who leads a programme? What gives real facts?",
          fbText: "Daryna is the <b>presenter</b>. A new <b>episode</b> every Monday. Real facts about animals: <b>documentaries</b>."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Choose the correct answer.",
          body: `<p>Kyrylo: “My favourite programme is a documentary series about space.” It’s still true.</p><p>What does Andrii say in the podcast?</p>`,
          opts: [
            "Kyrylo says me his favourite programme is a documentary series about space.",
            "Kyrylo says his favourite programme is a documentary series about space.",
            "Kyrylo says my favourite programme is a documentary series about space."
          ],
          correct: 1,
          pre: "e9s4l2",
          fbOk: "Right.",
          fbBad: "No person after says; my → his.",
          fbText: "<b>Kyrylo says his favourite programme is…</b> Not <s>says me</s>; <i>my</i> changes to <i>his</i>."
        },
        {
          type: "multi",
          sk: "func",
          eyebrow: "Task 3",
          title: "Choose all the correct answers.",
          body: `<p>The podcast has a group chat for listeners. Which tips are good for it?</p>`,
          opts: [
            "Be polite and say thank you.",
            "Post your phone number for everyone.",
            "Block and report people who are rude.",
            "Write in capitals so everyone sees you."
          ],
          correct: [0, 2],
          pre: "e9s4l3",
          fbOk: "Well done!",
          fbBad: "Strangers don’t need your number. Capitals look like shouting.",
          fbText: "Be <b>polite</b>, and <b>block and report</b> rude people. Keep your number away from strangers, and don’t write in capitals."
        },
        {
          type: "build",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Put the words in order.",
          body: `<p>A guest asked Andrii: “Where do you record the podcast?”</p><p>Report her question.</p>`,
          tiles: ["She", "asked", "me", "where", "we", "recorded", "the podcast"],
          extra: ["did"],
          answer: "She asked me where we recorded the podcast.",
          pre: "e9s4l4",
          fbOk: "Yes!",
          fbBad: "No did: where + we + recorded.",
          fbText: "<b>She asked me where we recorded the podcast.</b> No <i>did</i>; person + verb."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Write the missing word.",
          body: `<p>Bohdan: “Can I be a guest too?”</p>`,
          before: "Bohdan asked",
          after: "he could be a guest too.",
          answer: ["if", "whether"],
          pre: "e9s4l4",
          fbOk: "Well done!",
          fbBad: "A yes / no question → ?",
          fbText: "Bohdan asked <b>if</b> he could be a guest. <b>Whether</b> is correct too. Can → could."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Fill in the gaps.",
          body: `<p>Ms Lysenko: “Switch off your phones. Don’t open the door during the recording.”</p>`,
          text: "Ms Lysenko told us {*to switch|switch|switching} off our phones. She told us {*not to open|don’t open|to don’t open} the door during the recording.",
          pre: "e9s4l5",
          fbOk: "Exactly.",
          fbBad: "told + person + to + verb; don’t → not to.",
          fbText: "She told us <b>to switch</b> off our phones and <b>not to open</b> the door."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 7",
          title: "Choose the correct answer.",
          body: `<p>Daryna writes a comment under the first episode. Which comment is correct?</p>`,
          opts: [
            "I wonder what our listeners think.",
            "I wonder what do our listeners think.",
            "I wonder what think our listeners."
          ],
          correct: 0,
          pre: "e9s4l6",
          fbOk: "Good eye!",
          fbBad: "I wonder what + person + verb.",
          fbText: "<b>I wonder what our listeners think.</b> No <i>do</i>; the verb goes after <i>our listeners</i>."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about TV, radio and podcasts, chat safely online and report questions and requests.",
        learned: [
          "Talk about TV, radio, podcasts and your favourite programme.",
          "Chat online safely and politely.",
          "Report questions with if, whether and wh- words.",
          "Report requests and thoughts: told us to…, I wonder what…"
        ]
      }
    }
  ]
});
