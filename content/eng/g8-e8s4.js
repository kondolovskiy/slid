/* Слід · Англійська мова, 8 клас — «Music» (e8s4)
   Програма: модельна програма «Іноземна мова. 5–9 класи» (Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021):
   тема «Музика» — улюблені музичні стилі; жанри, інструменти; музиканти, композитори, виконавці; відвідування концерту
   (с. 32, розд. 5.2.2); функція — висловлювати враження (с. 32); граматика B1 (с. 34–35): Relative — defining
   (розширення e6s6l3: без займенника — the song I like), Relative — non-defining (нове), Compound adjectives (нове):
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   План — content/eng/plan.js (reports/verify/plan-eng-g7-8-9.md, curate-eng-plan-g7-9.md: П2 — l4 «My favourite band, which…»).
   Герої — та сама серія, що в 4–7 кл., на чотири роки старші, ніж у 4 кл. (Oksana — 14, Tom — 12). Andrii — Kyiv,
   однокласники Bohdan, Daryna, Zoriana, Kyrylo, вчителька Ms Lysenko; Oksana і брат Dmytro — Zelena Dolyna (Oksana грає
   на піаніно — pe5s6); Mariia — Kharkiv, подруга Polina (грає на гітарі — pe5s6), мама — dentist, дядько Oleh;
   Taras — Lviv, сестра Zlata; Emma і брат Tom — England. Нове: Zlata вчиться грати на бандурі в музичній школі Lviv,
   Tom грає на барабанах. Вигадані: співачка Mila Lastivka (пісня «Blue Sky»), гурт Kashtan із Kyiv і його співачка Olha.
   Україна: бандура; Микола Лисенко, Микола Леонтович і «Щедрик»; Kalush Orchestra (Євробачення-2022) — джерела в нотатках задачі.
   Тексти пісень не цитуємо (pitfalls-content «Англійська» п. 8) — лише назви.
   Звуку немає (D-055 п. 4): музику не «слухаємо» текстом; діалоги — репліками в body + gaps / choice (D-056).
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Форми, рівні слів, наголос — Cambridge Dictionary (URL — tasks/…/write-eng-g8-e8s4.md, «Нотатки агента»).
   Статус: verified (verifier-e8s4, 2026-11-25). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e8s4 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e8s4",
  grade: 8,
  weeks: [14, 17],
  title: "Music",
  why: "To talk about music styles, instruments and musicians. And to describe a concert and say what you liked about it.",
  requires: ["e6s6l3", "e4s8l4", "e5s6l2", "e7s4l4", "e7s4l6"],
  meta: { author: "writer-e8s4", created: "2026-11-25", factcheck: "verifier-e8s4, 2026-11-25 (reports/verify/write-eng-g8-e8s4.md)", teacher: null },
  badges: [
    { id: "e8s4boss", name: "Music critic", icon: "trophy", desc: "Finish the final lesson “Music”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e8s4l1",
      title: "Pop, rock, folk or classical? Music styles",
      short: "Music styles",
      icon: "voice",
      status: "verified",
      why: "People love different kinds of music. Learn their names and say what you like.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "What music do you like?",
          body: `<p class="lead">Andrii’s class in Kyiv is making a music poster.</p><p><b>Andrii:</b> I love rock: loud guitars and drums!<br><b>Bohdan:</b> I like rap. The words are fast and clever.<br><b>Daryna:</b> I like folk music: old songs from Ukrainian villages.<br><b>Zoriana:</b> I play the violin, so I love classical music.<br><b>Ms Lysenko:</b> I like pop. Everybody knows the songs!</p><p>Rock, rap, folk, classical, pop: what kind of music do you like?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Kyrylo loves music with a piano and a trumpet. The musicians often make up new music while they play. What kind of music is it?</p>`,
          opts: [
            "rap",
            "folk music",
            "jazz"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "It’s <b>jazz</b>. In jazz, musicians often make up new music while they play. The next screen has more kinds of music."
        },
        {
          type: "info",
          title: "Kinds of music",
          body: `<ul><li><b>pop</b> → new popular songs, everybody knows them</li><li><b>rock</b> → loud guitars and drums</li><li><b>rap</b> → people say the words fast</li><li><b>jazz</b> → musicians make up music while they play</li><li><b>folk music</b> → old songs from villages</li><li><b><u>clas</u>sical music</b> → piano, violin, big concert halls</li></ul><p>Say <b>classical music</b>, not <s>classic music</s>.</p><p>What kind of <b><u>mu</u>sic</b> do you like? – I’m a big fan of rock. I can’t stand rap.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the descriptions.",
          left: ["pop", "rock", "rap", "folk music", "classical music"],
          right: ["new popular songs that everybody knows", "loud guitars and drums", "people say the words fast", "old songs from villages", "a piano or a violin in a big concert hall"],
          hint: "Which music is old? Which one is loud?",
          fbOk: "Well done!",
          fbBad: "Look at the list “Kinds of music” again.",
          fbText: "<b>Pop</b>: popular songs. <b>Rock</b>: loud guitars and drums. <b>Rap</b>: fast words. <b>Folk music</b>: old village songs. <b>Classical music</b>: a piano or a violin in a concert hall."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+mu|sic", "+clas|si|cal", "+con|cert", "+pop|u|lar"],
          fbOk: "Yes!",
          fbBad: "In all these words, the strong part is in the same place.",
          fbText: "<u>mu</u>sic, <u>clas</u>sical, <u>con</u>cert, <u>pop</u>ular: the first part is strong in all four words."
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Emma’s grandad goes to a big concert hall. He loves the piano and the violin. What kind of music does he like?</p>`,
          opts: [
            "rap",
            "classical music",
            "rock"
          ],
          correct: 1,
          hint: "A piano, a violin, a big concert hall: which kind of music?",
          fbOk: "Right.",
          fbBad: "Look at the list: piano, violin, big concert halls.",
          fbText: "A piano and a violin in a concert hall → <b>classical music</b>. Rock has loud guitars and drums. In rap, people say the words fast."
        },
        {
          type: "pick",
          sk: "vocab",
          title: "Find the mistake.",
          body: `<p>One word in Zoriana’s message is wrong.</p>`,
          text: "I play the violin, and I love [classic] music. On Sunday, I’m going to a concert with my mum.",
          hint: "Look at the kinds of music on the list.",
          fbOk: "Good eye!",
          fbBad: "Which word is a kind of music?",
          fbText: "Not <s>classic music</s>, but <b>classical music</b>. The other words are correct."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Daryna’s grandma sings old songs from her village. People sang them a hundred years ago.</p>`,
          before: "This kind of music is called",
          after: "music.",
          answer: ["folk", "traditional"],
          hint: "Old songs from villages: which kind of music?",
          fbOk: "Well done!",
          fbBad: "Look at the list: old songs from villages.",
          fbText: "Old songs from villages → <b>folk</b> songs, <b>folk</b> music."
        },
        {
          type: "gaps",
          sk: "read",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes to Andrii.</p>`,
          text: "My brother Tom is a big fan of {*rock|classical} music: he loves loud guitars and drums. Mum likes {*classical|rap} music, especially the piano. I like {*pop|folk} songs: new songs that everybody knows. What kind of music {*do|are} you like?",
          hint: "Loud drums, the piano, new songs: which kinds of music?",
          fbOk: "Exactly.",
          fbBad: "Look at the clues: loud guitars, the piano, new songs.",
          fbText: "Loud guitars and drums → <b>rock</b>. The piano → <b>classical</b> music. New songs that everybody knows → <b>pop</b>. The question: What kind of music <b>do</b> you like?"
        }
      ],
      outro: {
        text: "Pop, rock, rap, jazz, folk and classical music: now you can name kinds of music and say what you like.",
        learned: [
          "Name kinds of music: pop, rock, folk, classical music.",
          "Ask: What kind of music do you like?",
          "Say what you like: I’m a big fan of rock."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e8s4l2",
      title: "The bandura, the violin, the drums: instruments",
      short: "Instruments",
      icon: "star",
      status: "verified",
      why: "Learn the names of instruments and the people who play them.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "What does Zlata play?",
          body: `<p class="lead">Taras writes to Emma from Lviv.</p><p><i>My little sister Zlata goes to a music school now. She plays the bandura. It’s a Ukrainian instrument with lots of strings. She practises every evening, and our neighbour plays the violin. Our flat is very musical!</i></p><p class="lead">Emma answers.</p><p><i>Tom plays the drums now. It’s really loud! Mum says he’s a good drummer, but she always closes the kitchen door.</i></p><p>Bandura, violin, drums: what do people call the musicians?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Tom plays the guitar too. A person who plays the guitar is a…</p>`,
          opts: [
            "guitarer",
            "guitar man",
            "guitarist"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A person who plays the guitar is a <b>guitarist</b>. Look at the next screen."
        },
        {
          type: "info",
          title: "Instruments and musicians",
          body: `<ul><li>the gui<u>tar</u> → a gui<u>tar</u>ist</li><li>the pi<u>an</u>o → a <u>pi</u>anist</li><li>the vio<u>lin</u> → a vio<u>lin</u>ist</li><li>the drums → a <u>drum</u>mer</li><li>the ban<u>du</u>ra (a Ukrainian instrument with many strings) → a bandura player</li></ul><p>We <b>play the</b> guitar, <b>play the</b> drums. Not: <s>play on the guitar</s>.</p><p>A mu<u>si</u>cian plays music. An <u>or</u>chestra is a big group of musicians.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["Mariia plays the guitar. She’s a", "Oksana plays the piano. She’s a", "Zoriana plays the violin. She’s a", "Tom plays the drums. He’s a", "Zlata plays the bandura. She’s a"],
          right: ["guitarist.", "pianist.", "violinist.", "drummer.", "bandura player."],
          hint: "Look at the instrument in each sentence.",
          fbOk: "Yes!",
          fbBad: "Look at the list “Instruments and musicians” again.",
          fbText: "the guitar → a <b>guitarist</b>; the piano → a <b>pianist</b>; the violin → a <b>violinist</b>; the drums → a <b>drummer</b>; the bandura → a <b>bandura player</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["gui|+tar", "vi|o|+lin", "mu|+si|cian", "+or|ches|tra"],
          fbOk: "Right.",
          fbBad: "Look at the underlined parts on the screen “Instruments and musicians”.",
          fbText: "gui<u>tar</u>, vio<u>lin</u>: the last part is strong. mu<u>si</u>cian: the middle part. <u>or</u>chestra: the first part."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Zlata’s music school in Lviv has a concert.</p>`,
          text: "Zlata plays the {*bandura|drums}, a Ukrainian instrument with many strings. Her friend plays the {*violin|guitarist}. At the end, all the children play together in the school {*orchestra|drummer}.",
          hint: "Many strings, a big group of musicians: which words?",
          fbOk: "Exactly.",
          fbBad: "Is it an instrument or a person?",
          fbText: "The Ukrainian instrument with many strings is the <b>bandura</b>. Her friend plays the <b>violin</b> (an instrument, not a person). A big group of musicians → an <b>orchestra</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Taras’s message is wrong.</p>`,
          text: "Zlata plays [on] the bandura every evening. She wants to be a musician.",
          hint: "Look at the words after plays.",
          fbOk: "Good eye!",
          fbBad: "What comes after play: on the or just the?",
          fbText: "Not <s>plays on the bandura</s>, but <b>plays the bandura</b>. <b>She wants to be a musician</b> is correct."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Oksana plays the piano at home and at school concerts.</p>`,
          before: "Oksana is a",
          after: ".",
          answer: ["pianist", "musician", "piano player"],
          hint: "the guitar → a guitarist. the piano → ?",
          fbOk: "Well done!",
          fbBad: "Look at the list: the piano → a …",
          fbText: "A person who plays the piano is a <b>pianist</b>. <b>Musician</b> is correct too, but <i>pianist</i> tells us the instrument."
        },
        {
          type: "gaps",
          sk: "read",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes to Taras.</p>`,
          text: "I play the {*piano|guitar}. It’s big and heavy, and it’s in our living room. My brother Dmytro wants to be a {*drummer|violinist}: he hits the table with two pencils all day! Our school band has got five {*musicians|orchestras}: two guitarists, a pianist, a drummer and a singer.",
          hint: "Big and heavy, hits the table, people who play music: which words?",
          fbOk: "Brilliant!",
          fbBad: "Read the clues again: big and heavy, two pencils, five people.",
          fbText: "Big and heavy, in the living room → the <b>piano</b>. He hits the table like the drums → a <b>drummer</b>. Five people who play music → five <b>musicians</b>. An orchestra is a big group."
        }
      ],
      outro: {
        text: "Play the guitar, play the bandura: there is no on. A person who plays the guitar is a guitarist.",
        learned: [
          "Name instruments: the guitar, the violin, the drums, the bandura.",
          "Name musicians: a guitarist, a pianist, a drummer.",
          "Say what instrument you play: I play the piano."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e8s4l3",
      title: "A singer who writes her own songs: who, which, that",
      short: "Who, which, that",
      icon: "users",
      status: "verified",
      why: "Say which person or thing you mean. And learn when you can leave out who, which and that.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Who is Mila Lastivka?",
          body: `<p class="lead">Sofiia writes to Mariia.</p><p><i>Do you know Mila Lastivka? She’s a singer who writes her own songs. She plays a guitar which was her grandad’s. Blue Sky is the song I like best. And the musicians that play with her are great too!</i></p><p>Look at <i>the song I like best</i>. Where is who, which or that?</p>`,
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
            "Mila is a singer writes her own songs.",
            "Blue Sky is the song I like best.",
            "Blue Sky is the song who I like best."
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "<b>Blue Sky is the song I like best</b> is correct: here we can leave out <i>that</i>. But we can’t say <i>a singer writes</i>. Look at the next screen."
        },
        {
          type: "info",
          title: "When can we leave out who, which, that?",
          body: `<p>Remember: people → <b>who</b> / <b>that</b>; things → <b>which</b> / <b>that</b>.</p><p>Look at the next word:</p><ul><li>a new person or thing → you can leave it out: the song (that) <b>I</b> like, the guitar (which) <b>Mila</b> plays</li><li>a verb → you can’t leave it out: a singer <b>who writes</b> songs, a guitar <b>which was</b> old</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Sofiia tells Andrii about Mila Lastivka.</p>`,
          text: "Mila is the singer {*who|which} sings Blue Sky. She’s got a guitar {*which|who} is fifty years old. The man {*who|which} plays the drums with her is her brother.",
          hint: "Is it a person or a thing?",
          fbOk: "Exactly.",
          fbBad: "People → who. Things → which.",
          fbText: "Mila and the man are people: <b>who</b>. The guitar is a thing: <b>which</b>. <b>That</b> is also correct in all three sentences."
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>In which sentences can you leave out the word in bold?</p>`,
          opts: [
            "The guitar <b>that</b> Mila plays is very old.",
            "Mila is a singer <b>who</b> writes her own songs.",
            "This is the song <b>which</b> my sister likes.",
            "I know a boy <b>who</b> plays the drums."
          ],
          correct: [0, 2],
          hint: "Look at the next word. Is it a verb or a new person?",
          fbOk: "Well done!",
          fbBad: "After the word in bold: is there a new person or a verb?",
          fbText: "the guitar (that) <b>Mila</b> plays, the song (which) <b>my sister</b> likes: a new person comes next, so you can leave the word out. <i>who writes</i>, <i>who plays</i>: a verb comes next, so you need <b>who</b>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Sofiia shows Mariia her favourite song.</p>`,
          tiles: ["this", "is", "the song", "I", "like", "best"],
          extra: ["who"],
          answer: ["This is the song I like best.", "The song I like best is this."],
          hint: "Start with This is…",
          fbOk: "Good eye!",
          fbBad: "A song is a thing, so who is wrong here. Here you don’t need who, which or that.",
          fbText: "<b>This is the song I like best.</b> After <i>the song</i> comes a new person (<i>I</i>), so we can leave out <i>that</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Sofiia’s message is wrong.</p>`,
          text: "Blue Sky is the song that I like [it] best. I sing it every day.",
          hint: "Look at the words after the song that I like.",
          fbOk: "Right.",
          fbBad: "Which word is extra in the first sentence?",
          fbText: "<i>That</i> already means the song, so we don’t need <i>it</i>: <b>the song that I like best</b> or <b>the song I like best</b>. <b>I sing it every day</b> is correct."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Zlata tells her friend about the bandura.</p>`,
          before: "The bandura is an instrument",
          after: "has got many strings.",
          answer: ["which", "that"],
          hint: "The bandura is a thing. And a verb comes next.",
          fbOk: "Well done!",
          fbBad: "Is the bandura a person or a thing?",
          fbText: "The bandura is a thing: an instrument <b>which</b> (or <b>that</b>) has got many strings. A verb comes next, so we can’t leave the word out."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia answers Sofiia.</p>`,
          text: "Thanks! Now Mila is the singer {*who|which} I like best too. The song {*I like|which like} most is Blue Sky. My uncle Oleh gave me a guitar {*which|who} is twenty years old. I want to play the songs {*that|who} Mila writes!",
          hint: "Person or thing? And is there a verb after the gap?",
          fbOk: "Brilliant!",
          fbBad: "Person → who, thing → which. Which like: who likes?",
          fbText: "Mila is a person: <b>who</b>. <b>The song I like</b>: we left out <i>that</i>, but <i>which like</i> has no person. The guitar is a thing: <b>which</b>. The songs are things: <b>that</b>."
        }
      ],
      outro: {
        text: "The song (that) I like: you can leave the word out. A singer who writes songs: you can’t.",
        learned: [
          "Use who, which and that to say which person or thing.",
          "Leave out who, which or that: the song I like.",
          "Know when you can’t leave them out: a singer who writes songs."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e8s4l4",
      title: "My favourite band, which…: extra information",
      short: "Extra information",
      icon: "book",
      status: "verified",
      why: "Add extra information about people and things. Use who and which with commas.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "What does Andrii write about his band?",
          body: `<p class="lead">Andrii writes on the class blog.</p><p><i>My favourite band, which comes from Kyiv, is called Kashtan. Olha, who is their singer, writes all their songs. Their new song, which is about our city, is brilliant!</i></p><p>Look at the commas. What do the words between them tell us?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Taras writes about his sister. Which sentence is correct?</p>`,
          opts: [
            "Zlata, who is my little sister, plays the bandura.",
            "Zlata, that is my little sister, plays the bandura.",
            "Zlata who is my little sister plays the bandura."
          ],
          correct: 0,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "<b>Zlata, who is my little sister, plays the bandura.</b> We know who Zlata is. The words between the commas are extra information. Look at the next screen."
        },
        {
          type: "info",
          title: "Extra information: commas",
          body: `<p>We already know the person or thing: a name, <i>my mum</i>, <i>Lviv</i>. We add extra information between commas.</p><ul><li>Zlata<b>, who</b> is my little sister<b>,</b> plays the bandura.</li><li>Lviv<b>, which</b> is in the west of Ukraine<b>,</b> has a music school.</li></ul><p>People → <b>who</b>, things → <b>which</b>. Not <s>that</s>. And you can’t leave out who or which.</p><p>No commas: The girl <b>who plays the bandura</b> is Zlata. (Which girl? This one.)</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Polina writes about Mariia.</p>`,
          text: "Mariia, {*who|that} is my best friend, plays the guitar. Kharkiv, {*which|that} is a big city in the east of Ukraine, has lots of concerts. Her guitar, {*which|who} was a present from her uncle, is red.",
          hint: "There are commas. Can we use that?",
          fbOk: "Exactly.",
          fbBad: "With commas: who for people, which for things. Never that.",
          fbText: "Mariia is a person: <b>who</b>. Kharkiv and the guitar are things: <b>which</b>. With commas, we don’t use <i>that</i>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Mariia writes about her mum. Which sentence has the correct commas?</p>`,
          opts: [
            "My mum, who is a dentist, likes jazz.",
            "My mum who is a dentist, likes jazz.",
            "My mum, who is a dentist likes jazz."
          ],
          correct: 0,
          hint: "The extra information needs a comma at the start and at the end.",
          fbOk: "Right.",
          fbBad: "Look for two commas: one before who and one after dentist.",
          fbText: "Mariia has only one mum, so <i>who is a dentist</i> is extra information. It needs two commas: <b>My mum, who is a dentist, likes jazz.</b>"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the sentences.",
          body: `<p>The commas are missing. Does the sentence need commas?</p>`,
          bins: ["Commas: extra information", "No commas: which one?"],
          items: [
            ["Tom who is twelve plays the drums.", 0],
            ["Lviv which has a famous opera house is in the west of Ukraine.", 0],
            ["Oksana who plays the piano lives in Zelena Dolyna.", 0],
            ["The girl who plays the bandura is Zlata.", 1],
            ["An orchestra is a big group of musicians who play together.", 1],
            ["The song that I like best is Blue Sky.", 1]
          ],
          hint: "Do we already know the person or thing? Look for names.",
          fbOk: "Well done!",
          fbBad: "Names like Tom and Lviv: we know them, so the extra information needs commas.",
          fbText: "Commas: <b>Tom, who is twelve,</b>; <b>Lviv, which has…,</b>; <b>Oksana, who plays the piano,</b>. No commas: <i>the girl who…</i>, <i>musicians who…</i>, <i>the song that…</i> tell us which one."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Taras tells Emma about Zlata.</p>`,
          tiles: ["Zlata,", "who", "is", "my sister,", "plays", "the bandura"],
          extra: ["that"],
          answer: "Zlata, who is my sister, plays the bandura.",
          keepCase: true,
          hint: "Start with Zlata. The extra information is between the commas.",
          fbOk: "Exactly.",
          fbBad: "With commas, we don’t use that.",
          fbText: "<b>Zlata, who is my sister, plays the bandura.</b> Zlata is a person, so we use <b>who</b>, not <i>that</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Andrii’s blog post is wrong.</p>`,
          text: "Kyiv, [that] is my home city, has lots of concerts in summer.",
          hint: "There are commas. Which words can we use?",
          fbOk: "Good eye!",
          fbBad: "With commas: who or which, never that.",
          fbText: "Not <s>Kyiv, that is</s>, but <b>Kyiv, which is my home city,</b>. With commas, we don’t use <i>that</i>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Emma writes about her brother.</p>`,
          before: "Tom,",
          after: "is twelve, plays the drums in a school band.",
          answer: "who",
          hint: "Tom is a person. And there are commas.",
          fbOk: "Yes!",
          fbBad: "With commas, a person → who.",
          fbText: "Tom is a person, and there are commas: <b>Tom, who is twelve,</b> plays the drums. <i>That</i> is wrong with commas."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes more about Kashtan.</p>`,
          text: "Kashtan, {*which|that} started in 2020, has four musicians. Olha, {*who|which} is the singer, also plays the guitar. Their drummer, {*who|that} is only seventeen, is brilliant. Their first concert, {*which|who} was in a small café, had twenty people!",
          hint: "There are commas everywhere. Person or thing?",
          fbOk: "Well done!",
          fbBad: "With commas: who for people, which for things, never that.",
          fbText: "Kashtan and the concert are things: <b>which</b>. Olha and the drummer are people: <b>who</b>. With commas, we never use <i>that</i>."
        }
      ],
      outro: {
        text: "Zlata, who is my sister, plays the bandura. Extra information goes between commas, with who or which, not that.",
        learned: [
          "Add extra information with who and which.",
          "Put commas around the extra information.",
          "Know that we don’t use that with commas."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e8s4l5",
      title: "World-famous musicians and composers",
      short: "Famous musicians",
      icon: "globe",
      status: "verified",
      why: "Learn about famous musicians from Ukraine and the UK. And make adjectives from two words.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Where does this music come from?",
          body: `<p class="lead">Emma writes to Oksana.</p><p><i>I’m doing a school project about music. Our music teacher says that Carol of the Bells comes from Ukraine. Is that true?</i></p><p class="lead">Oksana answers.</p><p><i>Yes! It’s Shchedryk, an old Ukrainian folk song. Mykola Leontovych, a Ukrainian composer, made a famous version of it for a choir. In 1922, a Ukrainian choir sang it in New York. Now the music is world-famous!</i></p><p>World-famous: what does it mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Shchedryk is <b>world-famous</b>. What does it mean?</p>`,
          opts: [
            "People know it only in one village.",
            "People all over the world know it.",
            "It’s very old and nobody sings it now."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>World-famous</b> means known all over the world. It’s one adjective from two words. Look at the next screen."
        },
        {
          type: "info",
          title: "Two words, one adjective",
          body: `<p>Before a noun, two words with a hyphen (-) make one adjective:</p><ul><li><b>world-famous</b> → known all over the world</li><li><b>well-known</b> → many people know it</li><li><b>open-air</b> → outside, not in a building</li><li><b>old-fashioned</b> → not modern</li><li>a <b>two-hour</b> concert, a <b>14-year-old</b> pianist (no <i>-s</i>!)</li></ul><p>A com<u>pos</u>er writes music. A <b>choir</b> is a group of people who sing together.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the descriptions.",
          left: ["a world-famous song", "an open-air concert", "old-fashioned music", "a two-hour concert"],
          right: ["People all over the world know it.", "It’s outside, in a park.", "It isn’t modern.", "It’s 120 minutes long."],
          hint: "Outside? Not modern? How long?",
          fbOk: "Yes!",
          fbBad: "Look at the list “Two words, one adjective” again.",
          fbText: "<b>World-famous</b>: known all over the world. <b>Open-air</b>: outside. <b>Old-fashioned</b>: not modern. <b>Two-hour</b>: two hours long."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Emma’s project, part 1 of 2",
          title: "Read and choose.",
          body: `<p><i>Mykola Lysenko, who lived from 1842 to 1912, was a well-known Ukrainian composer. He wrote operas and music for many Ukrainian folk songs. In 1904, he opened a music school in Kyiv. Mykola Leontovych, who wrote the famous version of Shchedryk, liked Lysenko’s music.</i></p><p>What did Mykola Lysenko do in 1904?</p>`,
          opts: [
            "He wrote Shchedryk for a choir.",
            "He opened a music school in Kyiv.",
            "He sang in New York."
          ],
          correct: 1,
          hint: "Find 1904 in the text.",
          fbOk: "Right.",
          fbBad: "Read the sentence with 1904 again.",
          fbText: "<b>In 1904, he opened a music school in Kyiv.</b> The famous version of Shchedryk is by Mykola Leontovych."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>A poster in Kharkiv.</p>`,
          text: "On Saturday, there is a {*two-hour|two-hours} concert in the park. It’s an {*open-air|old-fashioned} concert, so take a warm jacket. A {*14-year-old|14-years-old} pianist from Kharkiv is going to play.",
          hint: "Numbers before a noun: is there -s? The concert is in the park.",
          fbOk: "Exactly.",
          fbBad: "Before a noun: two-hour, 14-year-old, no -s. In the park → outside.",
          fbText: "A <b>two-hour</b> concert and a <b>14-year-old</b> pianist: no -s before a noun. In the park, outside → an <b>open-air</b> concert."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Emma’s project, part 2 of 2",
          title: "Choose all the correct answers.",
          body: `<p><i>The Beatles, who came from Liverpool, were a world-famous rock band. They played together from 1960 to 1970. Kalush Orchestra, a band from Ukraine, mixes folk music and rap. In 2022, they won the Eurovision Song Contest with the song Stefania.</i></p><p>What is true?</p>`,
          opts: [
            "The Beatles came from Liverpool.",
            "Kalush Orchestra plays only classical music.",
            "Kalush Orchestra won Eurovision in 2022.",
            "The Beatles played together for twenty years."
          ],
          correct: [0, 2],
          hint: "Find Liverpool, the kinds of music, 2022 and the years 1960 to 1970.",
          fbOk: "Well done!",
          fbBad: "Read about the music and the years again.",
          fbText: "The Beatles came from <b>Liverpool</b> and played together for ten years (<b>1960–1970</b>). Kalush Orchestra mixes <b>folk music and rap</b> and won Eurovision in <b>2022</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Taras’s message is wrong.</p>`,
          text: "Yesterday, Zlata and I went to a [three-hours] concert in Lviv. The musicians were brilliant.",
          hint: "Look at the number before concert.",
          fbOk: "Good eye!",
          fbBad: "Before a noun: a two-hour concert, no -s.",
          fbText: "Not <s>a three-hours concert</s>, but <b>a three-hour concert</b>: before a noun, there is no -s."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Emma writes the first sentence of her project.</p>`,
          tiles: ["Mykola Lysenko", "was", "a", "well-known", "Ukrainian", "composer"],
          answer: "Mykola Lysenko was a well-known Ukrainian composer.",
          keepCase: true,
          hint: "a + well-known + Ukrainian + composer.",
          fbOk: "Well done!",
          fbBad: "Who? Was what kind of composer?",
          fbText: "<b>Mykola Lysenko was a well-known Ukrainian composer.</b> <i>Well-known</i> comes before <i>Ukrainian</i>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>The end of Emma’s project.</p>`,
          text: "Shchedryk is a {*world-famous|two-hour} song from Ukraine. Mykola Leontovych, {*who|which} was a Ukrainian composer, made a version of it for a {*choir|drummer}. People sing it in many countries, and in English it’s called Carol of the Bells.",
          hint: "Known all over the world? A group of people who sing together?",
          fbOk: "Brilliant!",
          fbBad: "Look at the list “Two words, one adjective” and the word for a group of singers.",
          fbText: "Known all over the world → <b>world-famous</b>. Leontovych is a person, and there are commas: <b>who</b>. A group of people who sing together → a <b>choir</b>."
        }
      ],
      outro: {
        text: "World-famous, well-known, open-air, a two-hour concert: two words with a hyphen make one adjective before a noun.",
        learned: [
          "Use adjectives from two words: world-famous, open-air.",
          "Say a two-hour concert, with no -s.",
          "Tell a friend about famous musicians from Ukraine and the UK."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e8s4l6",
      title: "At a concert: an online review",
      short: "Concert review",
      icon: "eye",
      status: "verified",
      why: "Say what you liked and didn’t like at a concert. And write a short review.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "How was the concert?",
          body: `<p class="lead">Mariia writes to Oksana.</p><p><i>Polina and I went to an open-air concert in Kharkiv on Saturday! It was Kashtan, a rock band from Kyiv. The singer was amazing, and the crowd sang every song. I’m writing a review for our school website.</i></p><p>How do you say what you think about a concert?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Which sentence tells us what Mariia thinks about the concert?</p>`,
          opts: [
            "The concert was on Saturday.",
            "The singer was amazing.",
            "The concert was in Kharkiv."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>The singer was amazing</b> is Mariia’s opinion. Saturday and Kharkiv are facts. Look at the next screen."
        },
        {
          type: "info",
          title: "Saying what you think",
          body: `<ul><li>Good: It was <b>amazing</b> / <b>brilliant</b>. <b>The best part was</b> the last song. The <b>crowd</b> (the people at a concert) was fantastic.</li><li>Not so good: The sound was <b>a bit too loud</b>. <b>The only problem was</b> the rain.</li><li>Advice: <b>I’d recommend it to</b> rock fans. <b>Don’t miss it!</b></li></ul><p>Remember: I was <b>excited</b> (a feeling). The show was <b>exciting</b>.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "func",
          title: "Sort the sentences.",
          body: `<p>Is it good or not so good?</p>`,
          bins: ["Good", "Not so good"],
          items: [
            ["The singer was brilliant.", 0],
            ["The best part was the last song.", 0],
            ["Don’t miss it!", 0],
            ["The sound was a bit too loud.", 1],
            ["The only problem was the rain.", 1],
            ["I was bored in the second half.", 1]
          ],
          hint: "Look for best, brilliant, too loud, problem.",
          fbOk: "Well done!",
          fbBad: "Too loud, a problem, bored: are they good?",
          fbText: "Good: <b>brilliant</b>, <b>the best part</b>, <b>Don’t miss it!</b> Not so good: <b>too loud</b>, <b>the only problem</b>, <b>bored</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Mariia’s review, part 1 of 2",
          title: "Read and choose.",
          body: `<p><i>Last Saturday, I went to an open-air concert in a big park in Kharkiv. The band was Kashtan, which comes from Kyiv. The concert started at seven and lasted two hours. Olha, the singer, was brilliant, and the guitarist was amazing too. The best part was the last song: everybody in the crowd sang together.</i></p><p>What was the best part for Mariia?</p>`,
          opts: [
            "the guitarist",
            "the start at seven",
            "the last song"
          ],
          correct: 2,
          hint: "Find the best part in the text.",
          fbOk: "Right.",
          fbBad: "Read the last sentence again.",
          fbText: "<b>The best part was the last song</b>: everybody sang together. The guitarist was amazing too, but the best part was the song."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Mariia’s review, part 2 of 2",
          title: "Choose all the correct answers.",
          body: `<p><i>The only problem was the sound: near the stage, it was a bit too loud. The tickets weren’t cheap either. But I wasn’t bored for a minute! I’d recommend Kashtan to anyone who likes rock. My mark: 4 out of 5.</i></p><p>What is true?</p>`,
          opts: [
            "The sound was too loud near the stage.",
            "The tickets were cheap.",
            "Mariia was bored.",
            "Mariia recommends Kashtan to rock fans."
          ],
          correct: [0, 3],
          hint: "Find problem, tickets, bored and recommend in the text.",
          fbOk: "Well done!",
          fbBad: "Read about the tickets and bored again.",
          fbText: "The sound was <b>a bit too loud</b> near the stage. The tickets <b>weren’t cheap</b>. Mariia <b>wasn’t bored</b>. She recommends Kashtan to <b>anyone who likes rock</b>."
        },
        {
          type: "order",
          sk: "write",
          title: "Put the sentences in order.",
          body: `<p>Polina’s short review of the same concert.</p>`,
          items: [
            "On Saturday, I saw Kashtan at an open-air concert in Kharkiv.",
            "They played for two hours.",
            "The best part was the new song about Kyiv.",
            "The only problem was the long queue for drinks.",
            "I’d recommend this band to my friends. My mark: 5 out of 5."
          ],
          shuffle: [3, 1, 4, 0, 2],
          hint: "Where and when → what happened → the best part → the problem → advice and mark.",
          fbOk: "Right.",
          fbBad: "Start with when and where. End with your advice and mark.",
          fbText: "When and where → how long → <b>the best part</b> → <b>the only problem</b> → <b>I’d recommend</b> and the mark."
        },
        {
          type: "gaps",
          sk: "func",
          title: "Fill in the gaps.",
          body: `<p>Polina writes to Mariia after the concert.</p>`,
          text: "I was so {*excited|exciting} before the concert! The show was {*amazing|amazed}. The {*only problem|best part} was the queue: we waited for forty minutes.",
          hint: "A feeling → -ed. The concert → -ing. The queue: good or not so good?",
          fbOk: "Exactly.",
          fbBad: "How did Polina feel? What was the show like? Is a long queue good?",
          fbText: "Polina’s feeling: <b>excited</b>. The show: <b>amazing</b>. A long queue isn’t good: <b>the only problem</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes a review of her school concert in Zelena Dolyna.</p>`,
          text: "Last Friday, our school had a {*two-hour|two-hours} concert. I played the piano. The {*best part|only problem} was the folk choir: twenty children sang old village songs. The only problem was the hall: it was too hot. I’d {*recommend|recommended} our next concert to everyone!",
          hint: "A number before a noun. Was the choir good or bad? I’d + which form?",
          fbOk: "Well done!",
          fbBad: "Check: no -s before a noun; good or bad; I’d + the base form.",
          fbText: "A <b>two-hour</b> concert: no -s. The choir was good: <b>the best part</b>. After <i>I’d</i>: <b>recommend</b>."
        }
      ],
      outro: {
        text: "The best part was…, The only problem was…, I’d recommend it to…: now you can say what you think about a concert.",
        learned: [
          "Say what you liked: The best part was…",
          "Say what you didn’t like: The only problem was…",
          "Recommend a concert to a friend.",
          "Write a short concert review."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e8s4l7",
      title: "A weekend of music",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e8s4boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help with a music weekend?",
          body: `<p class="lead">This weekend, there is a music festival in a park in Kyiv. Andrii, Sofiia and their friends want to go.</p><p>Help them choose concerts, talk about musicians and write a review. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Choose the correct answer.",
          body: `<p>Daryna wants to hear old songs from Ukrainian villages. Which concert is the best for her?</p>`,
          opts: [
            "the folk music concert",
            "the rap concert",
            "the rock concert"
          ],
          correct: 0,
          pre: "e8s4l1",
          fbOk: "Right.",
          fbBad: "Old songs from villages: which kind of music?",
          fbText: "Old songs from villages → <b>folk music</b>. In rap, people say the words fast. Rock has loud guitars and drums."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          body: `<p>Sofiia reads the festival programme.</p>`,
          text: "At two o’clock, a young {*drummer|pianist} plays the drums. At three, Zlata from Lviv plays the {*bandura|violinist}, a Ukrainian instrument with many strings. At four, the city {*orchestra|guitarist} plays: that’s fifty musicians!",
          pre: "e8s4l2",
          fbOk: "Exactly.",
          fbBad: "The drums → a …? Many strings? Fifty musicians together?",
          fbText: "The drums → a <b>drummer</b>. The Ukrainian instrument with many strings → the <b>bandura</b>. A big group of musicians → an <b>orchestra</b>."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Write the missing word.",
          body: `<p>Andrii tells Sofiia about Kashtan.</p>`,
          before: "Olha is the singer",
          after: "writes all their songs.",
          answer: ["who", "that"],
          pre: "e8s4l3",
          hint: "Is Olha a person or a thing? What comes after the gap?",
          fbOk: "Well done!",
          fbBad: "Olha is a person, and a verb comes next.",
          fbText: "Olha is a person: the singer <b>who</b> (or <b>that</b>) writes all their songs. A verb comes next, so we can’t leave the word out."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Choose the correct answer.",
          body: `<p>Sofiia writes about the festival. Which sentence is correct?</p>`,
          opts: [
            "Kyiv, that is our city, has a music festival every summer.",
            "Kyiv which is our city, has a music festival every summer.",
            "Kyiv, which is our city, has a music festival every summer."
          ],
          correct: 2,
          pre: "e8s4l4",
          hint: "Count the commas. Which words can we use with commas?",
          fbOk: "Yes!",
          fbBad: "With commas: who or which, never that. And two commas.",
          fbText: "<b>Kyiv, which is our city, has…</b> Extra information goes between two commas, with <i>which</i> for things, never <i>that</i>."
        },
        {
          type: "gaps",
          sk: "cult",
          eyebrow: "Task 5",
          title: "Fill in the gaps.",
          body: `<p>Bohdan reads a poster about famous music.</p>`,
          text: "The Beatles were a {*world-famous|open-air} rock band from {*Liverpool|Kyiv}. Mykola Lysenko, {*who|which} opened a music school in Kyiv in 1904, was a Ukrainian composer.",
          pre: "e8s4l5",
          fbOk: "Well done!",
          fbBad: "Remember Emma’s project. Lysenko is a person.",
          fbText: "The Beatles were a <b>world-famous</b> band from <b>Liverpool</b>. Lysenko is a person: <b>who</b>."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 6",
          title: "Choose the correct answer.",
          body: `<p>Sofiia loved the folk music concert. She wants her friends to go next year. What does she write?</p>`,
          opts: [
            "The only problem was the rain.",
            "I’d recommend it to everyone. Don’t miss it!",
            "The sound was a bit too loud."
          ],
          correct: 1,
          pre: "e8s4l6",
          fbOk: "Right.",
          fbBad: "Which sentence gives advice to friends?",
          fbText: "<b>I’d recommend it to everyone. Don’t miss it!</b> is advice. The other sentences talk about problems."
        },
        {
          type: "build",
          sk: "gram",
          eyebrow: "Task 7",
          title: "Put the words in order.",
          body: `<p>Sofiia writes about her friend.</p>`,
          tiles: ["Mariia,", "who", "plays", "the guitar,", "lives", "in Kharkiv"],
          extra: ["that"],
          answer: "Mariia, who plays the guitar, lives in Kharkiv.",
          keepCase: true,
          pre: "e8s4l4",
          hint: "Start with Mariia. The extra information goes between the commas.",
          fbOk: "Good eye!",
          fbBad: "With commas, a person → who, not that.",
          fbText: "<b>Mariia, who plays the guitar, lives in Kharkiv.</b> The extra information is between the commas."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about music styles and instruments, describe musicians and write a concert review.",
        learned: [
          "Name kinds of music, instruments and musicians.",
          "Use who, which and that, with and without commas.",
          "Use adjectives like world-famous and a two-hour concert.",
          "Say what you think about a concert."
        ]
      }
    }
  ]
});
