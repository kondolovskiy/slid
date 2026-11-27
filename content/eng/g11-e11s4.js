/* Слід · Англійська мова, 11 клас — «Art and festivals» (e11s4)
   Програма: П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; спеціалізовані школи, B2), 11 кл.: тема «Мистецтво» —
   види та жанри мистецтва (l1); відвідування мистецьких закладів для самоосвіти (l2); емоції (l3, l6) — с. 23–24;
   фестивалі — з теми «Дозвілля» (с. 24), інтегровано з мистецтвом (с. 22). Функція (с. 23): висловлювати емоційне
   ставлення до ситуації або предмета обговорення (l3, l6). Граматика (с. 25): present/past participles as adjectives
   (повт. e7s4l4: bored / boring; нове для B2 — moving, touching, inspiring, disappointing, overwhelmed, impressed / impressive);
   adjectives formed with suffixes / prefixes (overview) — нове як огляд (-ful, -less, -ous, -ive, -able / -ible, -al, -ic;
   un-, in-, im-, ir-, il-, dis-; повт. e10s1l1: unreliable, inconsiderate, disloyal). Passive «is held / was founded» —
   повт. e7s7l2. Розподіл — content/eng/plan.js, reports/verify/plan-eng-g10-11.md:
   https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf
   Пастки (plan-eng-g10-11, inbox PITFALL): priceless ≠ worthless (CD priceless B2, worthless C2); -ful / -less не завжди пара
   (helpless ≠ протилежність helpful); заперечний префікс — за словником: у gaps лише слова з одною можливою формою
   (illegal, irregular, impossible, unusual, dishonest), у word — однозначна основа; moving / touching, moved / touched — не
   протиставляємо (обидва правильні); impressed by / with / at — прийменник не питаємо (OALD impressed).
   Факти (Fringe 1947, Glastonbury 1970, Book Arsenal 2011, Atlas Weekend 2015–2021 і 2024, Mystetskyi Arsenal, Tate Modern 2000) —
   по два джерела, URL — tasks/…/write-eng-g11-e11s4.md, «Нотатки агента». Цитат не наводимо.
   Герої — серія 4–10 кл., 17 років: Andrii, Daryna (школа в Kyiv, Arts Week), Mariia й Artem (Kharkiv), Oksana, Dmytro,
   Grandma Hanna (Zelena Dolyna), Halyna, Emma (Англія), Isla (Edinburgh). Новий: Mr Levchenko — вигаданий скульптор
   (майстерня в школі Andrii). Вистави й виставки героїв — вигадані; у реальних закладах вигаданих правил і подій не приписуємо.
   Діалогів немає (D-056); без звуку (D-055 п. 4). Зображень немає (пропозиція images-* — в inbox).
   Увесь зміст — англійською, британська норма (D-055). Тексти й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e11s4, 2026-11-26). 7 уроків (6 + фінал). Будова — за розділами 10 кл. (e10s5).
   Перевірка: node tools/validate.mjs --section e11s4 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e11s4",
  grade: 11,
  weeks: [14, 17],
  title: "Art and festivals",
  why: "To talk about kinds and genres of art, galleries, concert halls and festivals. And to describe the emotions that art makes you feel.",
  requires: ["e7s4l2", "e7s4l4", "e7s7l2", "e8s4l6", "e10s1l1", "e10s5l1", "e10s5l5"],
  meta: { author: "writer-e11s4", created: "2026-11-26", factcheck: "verifier-e11s4, 2026-11-26 (reports/verify/write-eng-g11-e11s4.md)", teacher: null },
  badges: [
    { id: "e11s4boss", name: "Festival reviewer", icon: "trophy", desc: "Finish the final lesson “Art and festivals”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e11s4l1",
      title: "Kinds and genres of art",
      short: "Kinds of art",
      icon: "eye",
      status: "verified",
      why: "Some art you look at, some art people perform, and some art is made of words. Learn to name the arts, the artists and their works.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Which two would you choose?",
          body: `<p class="lead">Andrii writes to the English club.</p><p><i>Our school in Kyiv is having an Arts Week in March. There are six workshops: painting, sculpture, photography, street dance, drama and poetry. We can only choose two! I’m thinking about sculpture and photography. Daryna has already chosen drama and dance.</i></p><p>Andrii and Daryna chose very different arts. What is the difference?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>What do drama and dance have in common?</p>`,
          opts: [
            "People perform them in front of an audience.",
            "Artists make them with paint and brushes.",
            "Writers publish them in books."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Drama and dance are <b>performing arts</b>: people perform them for an <b>audience</b>. Sculpture and photography are <b>visual arts</b>. More on the next screen."
        },
        {
          type: "info",
          title: "Kinds of art",
          body: `<ul><li><b>the <u>vi</u>sual arts</b> → art that you look at: painting, drawing, <b><u>sculp</u>ture</b>, photography, <b><u>ar</u>chitecture</b>, street art</li><li><b>the per<u>form</u>ing arts</b> → art that people perform: theatre (drama), dance, ballet, opera, music, circus</li><li><b><u>lit</u>erature</b> → art made of words: novels, poems, plays</li><li>an <b><u>au</u>dience</b> → the people who watch a performance</li></ul><p>A play is literature when you read it, and a performing art when actors perform it on stage.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Which arts are visual, and which are performing arts?</p>`,
          bins: ["The visual arts", "The performing arts"],
          items: [
            ["sculpture", 0],
            ["photography", 0],
            ["architecture", 0],
            ["ballet", 1],
            ["opera", 1],
            ["street dance", 1]
          ],
          hint: "Do you look at it in a gallery or a street, or do people perform it for an audience?",
          fbOk: "Exactly.",
          fbBad: "Look at the screen “Kinds of art” again.",
          fbText: "You look at <b>sculpture</b>, <b>photography</b> and <b>architecture</b>: they are visual arts. Dancers and singers perform <b>ballet</b>, <b>opera</b> and <b>street dance</b> for an audience."
        },
        {
          type: "info",
          title: "Artists and their works",
          body: `<ul><li>a <b><u>sculp</u>tor</b> → makes a <b><u>sculp</u>ture</b> out of stone, wood, metal or clay</li><li>a pho<u>tog</u>rapher → takes a photograph</li><li>an <b><u>ar</u>chitect</b> → designs buildings</li><li>a <b>poet</b> → writes poems; a <b><u>nov</u>elist</b> → writes novels</li><li>a <b>street artist</b> → paints a <b><u>mu</u>ral</b>: a large picture on a wall</li><li>actors, dancers and singers → give a <b>performance</b></li></ul><p>Careful: a sculpt<b>or</b> is a person, a sculpt<b>ure</b> is a work of art.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["A sculptor", "An architect", "A poet", "A street artist", "A photographer"],
          right: ["makes figures out of stone or metal.", "designs buildings.", "writes poems.", "paints murals on walls.", "takes photographs."],
          hint: "Who works with buildings? Who works with walls in the street?",
          fbOk: "Well done!",
          fbBad: "Look at the screen “Artists and their works” again.",
          fbText: "A <b>sculptor</b> makes figures. An <b>architect</b> designs buildings. A <b>poet</b> writes poems. A <b>street artist</b> paints murals. A <b>photographer</b> takes photographs."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+sculp|ture", "per|+for|mance", "+au|di|ence", "+ar|chi|tec|ture"],
          hint: "Look at the underlined parts on the screen “Kinds of art”.",
          fbOk: "Yes!",
          fbBad: "In one word, the strong part isn’t at the start.",
          fbText: "<u>sculp</u>ture, <u>au</u>dience, <u>ar</u>chitecture: the first part is strong. per<u>for</u>mance: the second part is strong, as in per<u>form</u>ing."
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Halyna paints a huge picture of sunflowers on the wall of the village school in Zelena Dolyna. What is she painting?</p>`,
          opts: [
            "a sculpture",
            "a novel",
            "a mural"
          ],
          correct: 2,
          hint: "A large picture on a wall: which word?",
          fbOk: "Right.",
          fbBad: "Look at what a street artist paints.",
          fbText: "A large picture on a wall is a <b>mural</b>. A sculpture is a figure, and a novel is a long book."
        },
        {
          type: "pick",
          sk: "vocab",
          title: "Find the mistake.",
          body: `<p>One word in Andrii’s message is wrong.</p>`,
          text: "On Tuesday, a [sculpture] from Kyiv, Mr Levchenko, ran our workshop. He showed us how to make small figures of birds out of clay.",
          hint: "Look at the last line on the screen “Artists and their works”.",
          fbOk: "Good eye!",
          fbBad: "Is Mr Levchenko a person or a work of art?",
          fbText: "Mr Levchenko is a person, so he is a <b>sculptor</b>, not a <s>sculpture</s>. His birds are sculptures."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>Use <b>novel</b> + a suffix: a person who writes novels.</p>`,
          before: "a",
          answer: "novelist",
          hint: "poem → poet. novel → …",
          fbOk: "Well done!",
          fbBad: "Look at the screen “Artists and their works”: novel + -ist.",
          fbText: "A person who writes novels is a <b>novelist</b>. A person who writes poems is a poet."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p>Andrii writes after Arts Week.</p><p><i>Arts Week was brilliant! I chose sculpture and photography, so I stayed with the visual arts. In the sculpture workshop, we made small birds out of clay. Then our photographer took pictures of them for the school website. Daryna did drama and dance. On Friday, she performed in front of an audience of two hundred people: parents, teachers and pupils. Next year I want to try a performing art too.</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Andrii performed on stage on Friday.",
            "Andrii chose two visual arts.",
            "Daryna made birds out of clay."
          ],
          correct: 1,
          hint: "What does Andrii say about the visual arts?",
          fbOk: "Exactly.",
          fbBad: "Read the second sentence again.",
          fbText: "Andrii chose sculpture and photography: <b>two visual arts</b>. Daryna performed on Friday, and the birds were made in Andrii’s sculpture workshop."
        }
      ],
      outro: {
        text: "The visual arts, the performing arts and literature: now you can name them and the people who make them.",
        learned: [
          "Name kinds of art: the visual arts, the performing arts, literature.",
          "Say who makes what: a sculptor, an architect, a novelist.",
          "Tell the difference between a sculptor and a sculpture."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e11s4l2",
      title: "Learning from art: museums, galleries and theatres",
      short: "Learning from art",
      icon: "book",
      status: "verified",
      why: "You don’t need a teacher to learn about art. Find out what galleries, theatres and concert halls offer, and how to use it.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Can you learn art on your own?",
          body: `<p class="lead">Oksana writes to Emma.</p><p><i>I’m thinking of studying art history at university, so this year I’m trying to learn more about art on my own. Next month I’m going to Kyiv with Mum. Should I visit Mystetskyi Arsenal? And what can you really learn in a gallery without a teacher?</i></p><p>What is Mystetskyi Arsenal, and how can a gallery help you learn?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Mystetskyi Arsenal is one of the largest art centres in Ukraine. What do you think its building was in the past?</p>`,
          opts: [
            "a palace for a king",
            "a railway station",
            "a workshop where cannons were made and repaired"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "It was an <b>arsenal</b>: soldiers made, repaired and kept cannons there. Read more on the next screen."
        },
        {
          type: "info",
          title: "Two old buildings, two art centres",
          body: `<p><b>Mystetskyi Arsenal</b> is in Kyiv, in a building that is more than two hundred years old. It was an arsenal: a workshop where cannons were made, repaired and kept. Its walls are almost two metres thick. Today it hosts big exhibitions, festivals, theatre performances and educational projects.</p><p><b>Tate Modern</b> is a gallery of modern art in London. It opened in 2000 in an old power station on the River Thames. Visiting its collection is free.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>What do Mystetskyi Arsenal and Tate Modern have in common?</p>`,
          opts: [
            "Both are in London.",
            "Both are in old buildings that were used for something else in the past.",
            "Both are on the River Thames."
          ],
          correct: 1,
          hint: "What were the two buildings before they became art centres?",
          fbOk: "Right.",
          fbBad: "Read the last screen again: an arsenal and a power station.",
          fbText: "One was an <b>arsenal</b>, the other was a <b>power station</b>: both buildings had a different use in the past. Only Tate Modern is in London, and it opened in 2000."
        },
        {
          type: "info",
          title: "How a gallery helps you learn",
          body: `<ul><li>the <b><u>per</u>manent collection</b> → the works a museum always has</li><li>a <b><u>tem</u>porary exhi<u>bi</u>tion</b> → a show that is open for a few weeks or months</li><li><b>free ad<u>mis</u>sion</b> → you don’t pay to go in</li><li>a <b><u>work</u>shop</b> → a class where you make or try something yourself</li><li>a <b>talk</b> → an expert speaks about one subject</li><li>an <b>online collection</b> → photos of the works on the museum’s website</li><li><b>broaden your ho<u>ri</u>zons</b> → learn about new things and ideas</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          body: `<p>Emma answers Oksana.</p>`,
          text: "Tate Modern is my favourite place to learn about art. {*Admission|A workshop} to the collection is free, so I go there almost every month. There’s usually a {*temporary|permanent} exhibition too, but it’s only open for a few months, and you have to buy a ticket. Last year I went to a {*workshop|talk} and made my own poster.",
          hint: "You don’t pay to go in. Open only for a few months. You made something yourself.",
          fbOk: "Exactly.",
          fbBad: "Look at the screen “How a gallery helps you learn” again.",
          fbText: "Free <b>admission</b>: you don’t pay. Open for a few months → a <b>temporary</b> exhibition. You make something yourself at a <b>workshop</b>; at a talk, you listen to an expert."
        },
        {
          type: "info",
          title: "Theatres and concert halls",
          body: `<ul><li>a <b><u>con</u>cert hall</b> → a large building for concerts</li><li>a <b>re<u>hear</u>sal</b> → a practice before the real performance</li><li>an <b>open re<u>hear</u>sal</b> → a rehearsal that visitors can watch</li><li>a <b>backstage tour</b> → a visit to the parts of a theatre that the audience can’t usually see</li><li>a <b><u>pro</u>gramme</b> → a small book with information about a play or a concert</li></ul><p>Remember the stage, the seats and the box office? They’re theatre words too.</p>`,
          cta: "Next"
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>The actors practise the whole play the day before the first performance.</p>`,
          before: "It’s a",
          after: ".",
          answer: "rehearsal",
          hint: "A practice before the real performance: re…",
          fbOk: "Well done!",
          fbBad: "Look at the screen “Theatres and concert halls”.",
          fbText: "A practice before the real performance is a <b>rehearsal</b>."
        },
        {
          type: "pick",
          sk: "vocab",
          title: "Find the mistake.",
          body: `<p>One word in the gallery’s message is wrong.</p>`,
          text: "Young Ukrainian photographers: our [permanent] exhibition is open from 1 April to 30 May. Free admission on Mondays.",
          hint: "Is the exhibition always there, or only for a short time?",
          fbOk: "Good eye!",
          fbBad: "Look at the dates in the message.",
          fbText: "The exhibition is open for only two months, so it is a <b>temporary</b> exhibition, not a <s>permanent</s> one."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Oksana writes a sentence for her university application.</p>`,
          tiles: ["visiting", "galleries", "broadens", "my", "horizons"],
          extra: ["broaden"],
          answer: "Visiting galleries broadens my horizons.",
          hint: "Start with what Oksana does: Visiting galleries…",
          fbOk: "Yes!",
          fbBad: "Visiting galleries is one activity: broaden or broadens?",
          fbText: "<b>Visiting galleries broadens my horizons.</b> <i>Visiting galleries</i> is one activity, so the verb takes <b>-s</b>."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Final",
          title: "Choose all the correct answers.",
          body: `<p>Oksana writes her plan for Kyiv.</p><p><i>On Saturday morning, I’ll check which exhibitions are on at Mystetskyi Arsenal. I don’t want to rush, so I’ll spend the whole morning there. In the afternoon, we’ll go on a backstage tour of a theatre: I’ve always wanted to see where the actors get ready. In the evening, Mum has tickets for a concert in a concert hall. Before it starts, I’ll read the programme to learn about the composers.</i></p><p>Which sentences are true?</p>`,
          opts: [
            "Oksana will see parts of a theatre that the audience can’t usually see.",
            "Oksana will read about the composers before the concert.",
            "Oksana will visit Mystetskyi Arsenal in the evening.",
            "Oksana will take part in a rehearsal."
          ],
          correct: [0, 1],
          hint: "Two sentences are true. What will Oksana do in the morning, in the afternoon and in the evening?",
          fbOk: "Well done!",
          fbBad: "Read the plan again: morning, afternoon, evening.",
          fbText: "A <b>backstage tour</b> shows the parts of a theatre that the audience can’t see. She’ll read the <b>programme</b> before the concert. She’ll visit the Arsenal in the morning, and she won’t take part in a rehearsal."
        }
      ],
      outro: {
        text: "Collections, workshops, backstage tours and programmes: galleries and theatres are great places to learn on your own.",
        learned: [
          "Talk about what galleries and theatres offer visitors.",
          "Say how art helps you learn: It broadens my horizons.",
          "Read about two art centres in old buildings in Kyiv and London."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e11s4l3",
      title: "Amazing or amazed? Art and emotions",
      short: "Art and emotions",
      icon: "star",
      status: "verified",
      why: "Art makes us feel things. Learn the adjectives for strong feelings and how to say what a work of art did to you.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Who was moved?",
          body: `<p class="lead">Mariia writes from Kharkiv.</p><p><i>Yesterday Artem and I went to a photo exhibition about people who are rebuilding their homes. Some photos were so moving that I couldn’t say a word. Artem was bored at first, but by the end he was amazed.</i></p><p>Moving or moved, amazing or amazed: which words are about the photos, and which are about people?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Which sentence tells us how Mariia felt?</p>`,
          opts: [
            "The photos were moving.",
            "Mariia was moved by the photos.",
            "The photos were moved."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Mariia was moved</b>: that’s her feeling. <b>The photos were moving</b>: they caused the feeling. You know this pattern from <i>bored</i> and <i>boring</i>."
        },
        {
          type: "info",
          title: "-ing or -ed? Strong feelings",
          body: `<ul><li><b>-ing</b> → the thing or person that <b>causes</b> the feeling:<br>The photos were <b>moving</b>. Our guide was <b>inspiring</b>.</li><li><b>-ed</b> → the person who <b>has</b> the feeling:<br>I was <b>moved</b>. We were <b>inspired</b>.</li></ul><ul><li>amazing – amazed · inspiring – inspired</li><li>moving – moved · touching – touched</li><li>disappointing – disappointed</li><li>overwhelming – overwhelmed · fascinating – fascinated</li></ul><p><i>moving, touching</i> → makes you feel sad or kind, in a good way</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          body: `<p>Mariia writes more about the exhibition.</p>`,
          text: "The last room was {*overwhelming|overwhelmed}: hundreds of faces looked at us from the walls. I felt {*moved|moving} by a photo of an old man who was planting a tree in front of his new house. Artem was {*fascinated|fascinating} by the short stories under each photo.",
          hint: "Who has the feeling, and what causes it?",
          fbOk: "Exactly.",
          fbBad: "-ing for the thing that causes the feeling, -ed for the person who has it.",
          fbText: "The room caused the feeling → <b>overwhelming</b>. Mariia had the feeling → <b>moved</b>. Artem had the feeling → <b>fascinated</b> by the stories."
        },
        {
          type: "info",
          title: "Impressed or impressive?",
          body: `<p>Not every pair ends in <i>-ing</i>:</p><ul><li>The exhibition was <b>impressive</b>. → It caused the feeling.</li><li>I was <b>impressed</b> by the photos. → I had the feeling.</li></ul><p>Ways to talk about your feelings:</p><ul><li><b>I found it</b> moving.</li><li><b>It made me feel</b> inspired.</li><li><b>What impressed me most was</b> the last room.</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Mariia’s mum saw the exhibition too. “It was really ___. I’ll tell all my friends about it.”</p>`,
          opts: [
            "impressed",
            "impressive",
            "impressing"
          ],
          correct: 1,
          hint: "Is she talking about the exhibition or about herself?",
          fbOk: "Right.",
          fbBad: "Look at the screen “Impressed or impressive?”.",
          fbText: "The exhibition caused the feeling, so it was <b>impressive</b>. She herself was <i>impressed</i>."
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Which sentences are correct?</p>`,
          opts: [
            "I found the last room overwhelming.",
            "The film was very disappointed.",
            "We were inspired by the artist’s story.",
            "Our art teacher is really inspiring.",
            "I was so touching that I cried."
          ],
          correct: [0, 2, 3],
          hint: "In each sentence: does the person have the feeling, or does the thing cause it?",
          fbOk: "Well done!",
          fbBad: "-ed for the person who has the feeling, -ing for what causes it.",
          fbText: "Correct: the room was <b>overwhelming</b>, we were <b>inspired</b>, the teacher is <b>inspiring</b> (she makes us feel inspired). Not <s>the film was disappointed</s>: the film was <b>disappointing</b>. Not <s>I was so touching</s>: I was so <b>touched</b> that I cried."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Use the verb <b>disappoint</b>. The concert wasn’t as good as Halyna had expected.</p>`,
          before: "Halyna was really",
          after: "with the concert.",
          answer: "disappointed",
          hint: "Halyna has the feeling: -ing or -ed?",
          fbOk: "Good eye!",
          fbBad: "A person who has the feeling → -ed.",
          fbText: "Halyna had the feeling, so she was <b>disappointed</b>. The concert was <i>disappointing</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Artem’s post is wrong.</p>`,
          text: "The photos were amazing, and I was really [moving] by the stories of the people in them.",
          hint: "In each part of the sentence: who has the feeling, and what causes it?",
          fbOk: "Brilliant!",
          fbBad: "Artem had the feeling. Which word should end in -ed?",
          fbText: "Artem had the feeling, so: I was really <b>moved</b> by the stories, not <s>moving</s>. The photos caused the feeling, so <b>amazing</b> is correct."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Mariia answers the question “What did you like most?”.</p>`,
          tiles: ["what", "impressed", "me", "most", "was", "the last room"],
          extra: ["impressive"],
          answer: [
            "What impressed me most was the last room.",
            "What most impressed me was the last room.",
            "The last room was what impressed me most.",
            "The last room was what most impressed me."
          ],
          hint: "Start with What… Which word is a verb here?",
          fbOk: "Yes!",
          fbBad: "Here you need the verb: impressed.",
          fbText: "<b>What impressed me most was the last room.</b> Or: The last room was what impressed me most. <i>impressed</i> is a verb here: the room impressed me."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia writes about the exhibition for the English club.</p>`,
          text: "The exhibition was {*fascinating|fascinated}. I {*found|looked} it moving because the people in the photos never gave up. {*What|Which} impressed me most was a photo of a girl painting a mural on a broken wall. When I left, I felt {*inspired|inspiring} too: now I want to take photos of my city.",
          hint: "What caused the feeling? I … it moving. … impressed me most was… Mariia has the feeling at the end.",
          fbOk: "Well done!",
          fbBad: "Look at the screens “-ing or -ed?” and “Impressed or impressive?” again.",
          fbText: "The exhibition was <b>fascinating</b> (it caused the feeling). I <b>found</b> it moving. <b>What</b> impressed me most was… Mariia had the feeling, so she felt <b>inspired</b>."
        }
      ],
      outro: {
        text: "-ing for what causes a feeling, -ed for the person who has it, and impressive / impressed is a pair too.",
        learned: [
          "Describe art with moving, inspiring, disappointing, overwhelming.",
          "Say how you felt: I was moved. I was impressed by…",
          "Give your feelings about art: I found it…, What impressed me most was…"
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e11s4l4",
      title: "Unusual, colourful, priceless: building adjectives",
      short: "Building adjectives",
      icon: "bulb",
      status: "verified",
      why: "One word can grow into many. Learn the suffixes and prefixes that make adjectives, and the traps to watch out for.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Is Dmytro right?",
          body: `<p class="lead">Oksana writes to the English club.</p><p><i>Grandma Hanna showed us an old rushnyk, an embroidered towel. Her grandmother made it more than a hundred years ago. Grandma said, “It’s priceless.” My brother Dmytro laughed: “Priceless means it has no price. So it’s worth nothing!”</i></p><p>What does priceless really mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>What does Grandma mean when she says the rushnyk is <b>priceless</b>?</p>`,
          opts: [
            "It’s worth nothing.",
            "It’s so valuable that you can’t put a price on it.",
            "It’s very cheap."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Priceless</b> means extremely valuable: no price is high enough. So Dmytro is wrong. The next screen explains why."
        },
        {
          type: "info",
          title: "-ful and -less",
          body: `<ul><li><b>-ful</b> → with: colour<b>ful</b>, use<b>ful</b>, care<b>ful</b>, harm<b>ful</b></li><li><b>-less</b> → without: colour<b>less</b>, use<b>less</b>, care<b>less</b>, harm<b>less</b></li></ul><p>But -ful and -less aren’t always a pair:</p><ul><li><b>priceless</b> → so valuable that you can’t put a price on it. There is no word “priceful”.</li><li><b>worthless</b> → worth nothing</li><li><b>helpless</b> → unable to help yourself; the opposite of helpful is <b>unhelpful</b></li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          body: `<p>Oksana answers Dmytro.</p>`,
          text: "Grandma’s rushnyk isn’t {*worthless|priceless}. It’s {*priceless|worthless}: nobody can make another one like it. A cheap plastic copy from a shop would be almost {*worthless|priceless}.",
          hint: "Worth nothing or so valuable that you can’t put a price on it?",
          fbOk: "Exactly.",
          fbBad: "priceless → extremely valuable; worthless → worth nothing.",
          fbText: "The rushnyk isn’t <b>worthless</b>: it’s <b>priceless</b>, extremely valuable. A cheap copy would be almost <b>worthless</b>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>Use <b>care</b> + a suffix. Dmytro dropped his phone into the river again.</p>`,
          before: "He’s so",
          after: "!",
          answer: "careless",
          hint: "Did Dmytro do it with care or without care?",
          fbOk: "Well done!",
          fbBad: "Without care → -less.",
          fbText: "Without care → <b>careless</b>. With care → careful."
        },
        {
          type: "info",
          title: "More suffixes",
          body: `<ul><li><b>-ous</b>: fame → fam<b>ous</b>, danger → danger<b>ous</b></li><li><b>-ive</b>: create → creat<b>ive</b>, impress → impress<b>ive</b></li><li><b>-able / -ible</b>: enjoy → enjoy<b>able</b>, comfort → comfort<b>able</b>, sense → sens<b>ible</b></li><li><b>-al</b>: tradition → tradition<b>al</b>, culture → cultur<b>al</b></li><li><b>-ic</b>: art → art<b>istic</b>, history → histor<b>ic</b></li></ul><p>The stress can move: <u>art</u> → ar<u>tis</u>tic, cre<u>ate</u> → cre<u>a</u>tive, tra<u>di</u>tion → tra<u>di</u>tional.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the adjectives.",
          left: ["danger", "create", "enjoy", "tradition", "art"],
          right: ["dangerous", "creative", "enjoyable", "traditional", "artistic"],
          hint: "Look at the beginning of each adjective. Which word does it come from?",
          fbOk: "Right.",
          fbBad: "Look at the screen “More suffixes” again.",
          fbText: "danger → <b>dangerous</b>, create → <b>creative</b>, enjoy → <b>enjoyable</b>, tradition → <b>traditional</b>, art → <b>artistic</b>."
        },
        {
          type: "info",
          title: "Opposites with prefixes",
          body: `<ul><li><b>un-</b>: unusual, unknown, unforgettable</li><li><b>in-</b>: informal, invisible</li><li><b>im-</b>, often before p or m: impossible, impatient</li><li><b>ir-</b> before r: irregular, irresponsible</li><li><b>il-</b> before l: illegal, illogical</li><li><b>dis-</b>: dishonest</li></ul><p>These are only patterns: we say <i>unpopular</i>, not “impopular”. Remember unreliable and disloyal? When you aren’t sure, check a dictionary.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          body: `<p>Isla writes about street art in Edinburgh.</p>`,
          text: "Painting on a wall without permission is {*illegal|unlegal|inlegal}. Street artists need a wall where it’s allowed. Our school art club’s street art day takes place at {*irregular|unregular|inregular} times: one year in May, the next year in September. And there are so many murals that it’s {*impossible|unpossible|inpossible} to see them all in one day.",
          hint: "Look at the first letter of legal, regular and possible.",
          fbOk: "Yes!",
          fbBad: "il- before l, ir- before r, im- before p.",
          fbText: "legal → <b>illegal</b>, regular → <b>irregular</b>, possible → <b>impossible</b>."
        },
        {
          type: "pick",
          sk: "vocab",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s message is wrong.</p>`,
          text: "The queue outside the gallery was very long, and an [unpatient] man in front of us kept looking at his watch.",
          hint: "Look at the screen “Opposites with prefixes” again.",
          fbOk: "Good eye!",
          fbBad: "Which word has the wrong prefix?",
          fbText: "patient → <b>impatient</b>, not <s>unpatient</s>: im- often comes before p."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>Write the opposite of <b>responsible</b>. Use a prefix.</p>`,
          before: "responsible →",
          answer: "irresponsible",
          hint: "responsible starts with r. Which prefix often comes before r?",
          fbOk: "Right.",
          fbBad: "It’s the same prefix as in irregular.",
          fbText: "responsible → <b>irresponsible</b>: two r’s, one from the prefix and one from the word."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes about the school museum.</p>`,
          text: "Last week our school museum opened an {*unusual|inusual} exhibition of old embroidered towels from Zelena Dolyna. The patterns are red, black and gold: really {*colourful|colourless}. Some towels are more than a hundred years old, so visitors have to be very {*careful|careless}. Grandma Hanna gave the museum her rushnyk for a month. It’s a {*priceless|worthless} gift for our village.",
          hint: "un- or in-? Bright colours: with or without? Old towels: with care or without care? Extremely valuable or worth nothing?",
          fbOk: "Well done!",
          fbBad: "Look at the screens “-ful and -less” and “Opposites with prefixes”.",
          fbText: "<b>unusual</b> (un-). Red, black and gold → <b>colourful</b>. With care → <b>careful</b>. Extremely valuable → <b>priceless</b>."
        }
      ],
      outro: {
        text: "Suffixes and prefixes build new adjectives, but -ful and -less aren’t always a pair, and the prefix comes from the dictionary.",
        learned: [
          "Make adjectives with -ful, -less, -ous, -ive, -able, -al and -ic.",
          "Make opposites with un-, in-, im-, ir-, il- and dis-.",
          "Tell the difference between priceless and worthless."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e11s4l5",
      title: "Festivals in Ukraine and the UK",
      short: "Festivals",
      icon: "flag",
      status: "verified",
      why: "Every summer, millions of people go to arts and music festivals. Learn about four of them in the UK and in Kyiv.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "The biggest stage in the world?",
          body: `<p class="lead">Isla writes from Edinburgh.</p><p><i>In August my city turns into one huge stage! The Fringe is on, and there are shows everywhere: in theatres, churches, cafés, even on a bus. Is there anything like that in Ukraine?</i></p><p>What is the Fringe, and who can perform there?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Who do you think can perform at the Edinburgh Festival Fringe?</p>`,
          opts: [
            "only famous actors with an invitation",
            "anyone who wants to",
            "only theatre groups from Scotland"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Anyone</b> can take part: nobody chooses who performs. Read more on the next screen."
        },
        {
          type: "info",
          title: "The Edinburgh Festival Fringe",
          body: `<p>The Fringe <b>takes place</b> in Edinburgh, Scotland, every August. It is the world’s largest festival of the performing arts.</p><p>It started in 1947. That year, eight theatre groups came to the first Edinburgh International Festival without an invitation. They performed in small <b>venues</b> (places for events) on the <b>fringe</b>, the edge, of the official festival.</p><p>The Fringe is <b>open access</b>: there is no selection committee, so anyone can take part with any kind of show.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Why is the festival called the Fringe?</p>`,
          opts: [
            "The first groups performed on the edge of the official festival.",
            "It takes place on the edge of Scotland.",
            "Only eight groups can take part."
          ],
          correct: 0,
          hint: "What does fringe mean? Where did the first eight groups perform?",
          fbOk: "Right.",
          fbBad: "Read the second part of the last screen again.",
          fbText: "In 1947, eight groups performed <b>on the fringe</b>, the edge, of the official festival. Today, anyone can take part, not only eight groups."
        },
        {
          type: "info",
          title: "Glastonbury",
          body: `<p><b>Glastonbury</b> is a five-day festival of music and the performing arts on <b>Worthy Farm</b>, near the village of Pilton in Somerset, England. It usually takes place in June.</p><p>The first festival was held on 19 September 1970. The farmer, Michael Eavis, organised it, and about 1,500 people came. A ticket cost £1.</p><p>Every few years there is a <b>fallow year</b>: no festival, so the land can rest. 2026 was a fallow year.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with the passive.",
          body: `<p>Emma writes about Glastonbury for the club page.</p>`,
          text: "The first Glastonbury festival {*was held|held} in September 1970. It {*was organised|organised} by a farmer, Michael Eavis. Today the festival {*is held|holds} on his farm in most years, but in a fallow year, the fields {*are left|leave} to rest.",
          hint: "The festival didn’t organise itself: was / is + the third form.",
          fbOk: "Exactly.",
          fbBad: "The festival and the fields don’t do the action: the passive.",
          fbText: "It <b>was held</b> in 1970. It <b>was organised</b> by Michael Eavis. It <b>is held</b> on his farm. The fields <b>are left</b> to rest. (In British English, organised has -ise.)"
        },
        {
          type: "info",
          title: "Two festivals in Kyiv",
          body: `<p><b>Book Arsenal</b> is an international festival of books and art. It started in 2011 and takes place every year, usually in late May or June, at Mystetskyi Arsenal. Writers, illustrators and artists come from Ukraine and other countries. In 2019, it was named the best literary festival of the year at the London Book Fair. It didn’t take place in 2020 because of COVID-19, or in 2022 because of Russia’s full-scale invasion, but it came back in 2023.</p><p><b>Atlas Weekend</b> was a huge music festival in Kyiv. It took place every summer from 2015 to 2021, except 2020. In 2024, it came back as a charity festival that raised money for Ukraine’s army.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          left: ["The Fringe", "Glastonbury", "Book Arsenal", "Atlas Weekend"],
          right: ["started in Edinburgh in 1947.", "started on a farm in 1970.", "started at Mystetskyi Arsenal in 2011.", "started as a music festival in Kyiv in 2015."],
          hint: "Which festival started on a farm? Which one is about books?",
          fbOk: "Well done!",
          fbBad: "Look at the dates on the last three screens.",
          fbText: "The Fringe – <b>1947</b>, Edinburgh. Glastonbury – <b>1970</b>, a farm. Book Arsenal – <b>2011</b>, Mystetskyi Arsenal. Atlas Weekend – <b>2015</b>, Kyiv."
        },
        {
          type: "pick",
          sk: "cult",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s note is wrong.</p>`,
          text: "The first Glastonbury festival was held in 1970 on a farm in [Scotland]. About 1,500 people came, and a ticket cost £1.",
          hint: "Look at the screen “Glastonbury” again: the farm, the village, the county.",
          fbOk: "Good eye!",
          fbBad: "Check the place where the farm is.",
          fbText: "Worthy Farm is near Pilton in Somerset, <b>England</b>, not in <s>Scotland</s>. The Fringe is the festival in Scotland."
        },
        {
          type: "info",
          title: "Festival words",
          body: `<ul><li><b><u>an</u>nual</b> → happening once a year</li><li><b>take place</b> / <b>be held</b> → happen</li><li>a <b>line-up</b> → all the performers at a festival</li><li>a <b><u>head</u>liner</b> → the main performer; their name is at the top of the poster</li><li>an <b>open-air</b> stage → a stage outside, with no roof</li><li><b>sell out</b> → all the tickets are sold</li></ul>`,
          cta: "Next"
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Isla’s favourite band plays last on the main stage, and their name is at the top of the poster.</p>`,
          before: "They’re the",
          after: "of the festival.",
          answer: ["headliner", "headliners"],
          hint: "The main performer: head…",
          fbOk: "Yes!",
          fbBad: "Look at the screen “Festival words”.",
          fbText: "The main performer, at the top of the poster, is the <b>headliner</b>."
        },
        {
          type: "multi",
          sk: "cult",
          eyebrow: "Final",
          title: "Choose all the correct answers.",
          body: `<p>Oksana answers Isla.</p><p><i>Kyiv doesn’t have anything as big as the Fringe, but we have Book Arsenal! It’s held every year at Mystetskyi Arsenal, the old building where cannons were made. Last year Halyna and I spent a whole day there. We met an illustrator, went to a talk about comics and bought far too many books.</i></p><p>Which sentences are true?</p>`,
          opts: [
            "Anyone can take part in the Fringe.",
            "Glastonbury takes place every year without a break.",
            "Book Arsenal is an annual festival.",
            "Atlas Weekend started in 2011."
          ],
          correct: [0, 2],
          hint: "Two sentences are true. Think of open access, fallow years and the dates.",
          fbOk: "Well done!",
          fbBad: "Look at the screens about the four festivals again.",
          fbText: "The Fringe is <b>open access</b>: anyone can take part. Book Arsenal is held <b>every year</b>, so it’s annual. Glastonbury has fallow years, and Atlas Weekend started in 2015."
        }
      ],
      outro: {
        text: "The Fringe, Glastonbury, Book Arsenal and Atlas Weekend: four festivals, four different stories.",
        learned: [
          "Talk about festivals in the UK and Ukraine.",
          "Say when and where a festival is held: It’s held every August.",
          "Use festival words: a line-up, a headliner, a venue."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e11s4l6",
      title: "A festival review: how it made me feel",
      short: "A festival review",
      icon: "voice",
      status: "verified",
      why: "A good review tells readers what happened and how it felt. Read Isla’s review of a day at the Fringe and learn to write your own.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Three shows, one day",
          body: `<p class="lead">Isla’s school magazine asked her to review three Fringe shows in one day. Emma came from England to help.</p><p>Was the day a success? Read Isla’s review in three parts and find out.</p>`,
          cta: "Let’s read"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Three shows, one day, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i>I’ve lived in Edinburgh all my life, but this August was different: our school magazine asked me to review three Fringe shows in one day. My friend Emma came from England to help.</i></p><p><i>We met at nine on the Royal Mile, which was already full of performers. A juggler was standing on a box, a choir was singing outside a church, and someone in a dragon costume was giving out leaflets. Emma had never been to the Fringe before, and she kept stopping to take photos. “Is it always like this?” she asked. “Only in August,” I told her. Our programme was as thick as a book, so choosing seemed impossible. In the end, we followed one simple rule. We chose one show with good reviews, one show by people our age and one show we knew nothing about.</i></p><p>How did Isla and Emma choose their shows?</p>`,
          opts: [
            "They chose three shows with famous actors.",
            "They followed a simple rule with three different kinds of show.",
            "A performer in a dragon costume chose for them."
          ],
          correct: 1,
          hint: "Find “In the end” in the text.",
          fbOk: "Right.",
          fbBad: "Read the last sentence of part 1 again.",
          fbText: "They followed <b>one simple rule</b>: a show with good reviews, a show by people their age and a show they knew nothing about."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Three shows, one day, part 2 of 3",
          title: "Read and choose.",
          body: `<p><i>The first show, a comedy about a family holiday, was in a tiny room above a café. The reviews had been excellent, but I found it disappointing: the jokes were old, and the actors seemed tired. Emma laughed more than I did, so maybe it was just me.</i></p><p><i>The second show was by a student theatre group from Lviv. It told the story of a girl who keeps her grandmother’s embroidered towel, a rushnyk, safe when her family has to leave home. There were only six actors and almost no scenery, but the show was incredibly moving. When the girl opened the towel at the end, the whole audience went silent. I was so touched that I forgot to take notes. Afterwards, we talked to the actors outside. They told us they had been rehearsing for a year.</i></p><p>How did Isla feel about the show from Lviv?</p>`,
          opts: [
            "She was so touched that she forgot to take notes.",
            "She found it disappointing because the actors seemed tired.",
            "She laughed more than Emma did."
          ],
          correct: 0,
          hint: "Read the part about the second show again.",
          fbOk: "Exactly.",
          fbBad: "The comedy was disappointing. What about the show from Lviv?",
          fbText: "The show from Lviv was <b>incredibly moving</b>: Isla was <b>so touched</b> that she forgot to take notes. The comedy was the disappointing show, and Emma laughed more than Isla."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Three shows, one day, part 3 of 3",
          title: "Read and choose.",
          body: `<p><i>Our third show was a complete mystery: a dance performance in a church at ten at night. At first I was confused. There was no music, only the dancers moving in the dark. Slowly, I understood that they were telling a story about a city by the sea. By the end, I was fascinated. When it finished, nobody moved for a moment, and then everyone stood up and clapped.</i></p><p><i>So, was the day worth it? Absolutely. It was tiring and sometimes disappointing, but mostly unforgettable. My advice: don’t only choose shows with famous names. The most inspiring show of my day was by people I had never heard of. I’d highly recommend the Fringe to anyone who loves surprises. Next year, Emma and I want to bring our own show!</i></p><p>What is Isla’s main advice?</p>`,
          opts: [
            "Only go to shows with excellent reviews.",
            "Don’t go to dance shows late at night.",
            "Try shows by people you don’t know."
          ],
          correct: 2,
          hint: "Find “My advice” in part 3.",
          fbOk: "Yes!",
          fbBad: "Read the sentences after “My advice” again.",
          fbText: "“Don’t only choose shows with famous names.” The most <b>inspiring</b> show was by people she <b>had never heard of</b>."
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Isla writes: “There were only six actors and almost no <b>scenery</b>.” What is scenery in a theatre?</p>`,
          opts: [
            "the people who watch the show",
            "the painted backgrounds and objects on a stage that show where the story takes place",
            "the music in the show"
          ],
          correct: 1,
          hint: "Six actors and almost no scenery: is scenery people, or things on the stage?",
          fbOk: "Right.",
          fbBad: "The people who watch are the audience. What is on the stage?",
          fbText: "<b>Scenery</b> → the painted backgrounds and objects on a stage that show where the story takes place. The people who watch are the <i>audience</i>."
        },
        {
          type: "info",
          title: "How to write a review",
          body: `<ol><li><b>What, where, when:</b> a dance performance in a church at ten at night</li><li><b>What happened:</b> the story, the performers, the scenery</li><li><b>How you felt:</b> I found it disappointing. It made me feel… I was so touched that…</li><li><b>Your advice:</b> I’d highly recommend it to… It’s well worth seeing (<b>worth + -ing</b>). Don’t miss it!</li></ol><p>A review is honest: you can like one thing and still say what was disappointing.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "func",
          title: "Sort the sentences.",
          body: `<p>Is it a fact about the show or a feeling about it?</p>`,
          bins: ["A fact about the show", "A feeling about the show"],
          items: [
            ["There were only six actors.", 0],
            ["The show was in a church at ten at night.", 0],
            ["The group came from Lviv.", 0],
            ["I found the comedy disappointing.", 1],
            ["By the end, I was fascinated.", 1],
            ["I was so touched that I forgot to take notes.", 1]
          ],
          hint: "Can anybody check it, or is it what Isla felt?",
          fbOk: "Exactly.",
          fbBad: "Look for found, fascinated, touched.",
          fbText: "Six actors, a church, a group from Lviv → <b>facts</b>. Found it disappointing, fascinated, touched → <b>feelings</b>."
        },
        {
          type: "gaps",
          sk: "func",
          title: "Complete the sentences.",
          body: `<p>Emma writes her own short review of the show from Lviv.</p>`,
          text: "The show tells the story of a girl and her grandmother’s rushnyk. I {*found|looked} it incredibly moving. The ending made me {*feel|to feel} proud of my friends in Ukraine. I’d highly {*recommend|advise} it to anyone who loves theatre. It’s well {*worth|worthy} seeing!",
          hint: "I … it moving. made me + verb without to. I’d highly … it to… It’s well … seeing.",
          fbOk: "Well done!",
          fbBad: "Look at the screen “How to write a review” again.",
          fbText: "I <b>found</b> it moving. It made me <b>feel</b> (no <i>to</i> after <i>made me</i>). I’d highly <b>recommend</b> it to… It’s well <b>worth</b> seeing."
        },
        {
          type: "pick",
          sk: "func",
          title: "Find the mistake.",
          body: `<p>One part of Emma’s sentence is wrong.</p>`,
          text: "The show from Lviv was [!well worth] [to see]: I’d recommend it to everyone.",
          hint: "Look at your advice on the screen “How to write a review”.",
          fbOk: "Good eye!",
          fbBad: "What form of the verb comes after worth?",
          fbText: "After <i>worth</i>, use <b>-ing</b>: well worth <b>seeing</b>, not <s>to see</s>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Use the verb <b>visit</b>. Daryna writes about Book Arsenal.</p>`,
          before: "It’s well worth",
          after: "if you love books.",
          answer: "visiting",
          hint: "worth + which form?",
          fbOk: "Right.",
          fbBad: "worth + -ing.",
          fbText: "It’s well worth <b>visiting</b>: <i>worth</i> + <b>-ing</b>."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Isla ends her review with advice.</p>`,
          tiles: ["I’d", "highly", "recommend", "the Fringe", "to", "anyone"],
          extra: ["recommended"],
          answer: ["I’d highly recommend the Fringe to anyone.", "I’d recommend the Fringe highly to anyone."],
          keepCase: true,
          hint: "Start with I’d. What comes after highly?",
          fbOk: "Yes!",
          fbBad: "I’d + the base form of the verb.",
          fbText: "<b>I’d highly recommend the Fringe to anyone.</b> After <i>I’d</i> (I would), use the base form: <b>recommend</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Daryna writes a review of Book Arsenal for the club page.</p>`,
          text: "Last spring I spent a day at Book Arsenal, a festival of books and art in Kyiv. The talk about Ukrainian illustrators was {*fascinating|fascinated}. The only {*disappointing|disappointed} thing was the long queue for coffee. What impressed me most was an exhibition of {*unusual|inusual} handmade books. I’d highly {*recommend|recommended} it to anyone who loves reading.",
          hint: "What caused the feeling? un- or in-? I’d + the base form.",
          fbOk: "Well done!",
          fbBad: "-ing for what causes a feeling. I’d + the base form.",
          fbText: "The talk was <b>fascinating</b>. The only <b>disappointing</b> thing. <b>unusual</b> books. I’d highly <b>recommend</b> it."
        }
      ],
      outro: {
        text: "What, where, when, what happened, how you felt and your advice: that’s a review.",
        learned: [
          "Read a long review and find the writer’s opinion.",
          "Tell facts from feelings in a review.",
          "Recommend a show: I’d highly recommend it. It’s well worth seeing."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e11s4l7",
      title: "Our arts and festivals magazine",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e11s4boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help with the magazine?",
          body: `<p class="lead">The English club is making a magazine: “Art and festivals in Ukraine and the UK”.</p><p>Help Andrii, Mariia, Oksana, Isla and Emma write their pages. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Choose the correct answer.",
          body: `<p>Andrii’s page: “Mr Levchenko is a ___. He makes figures of birds out of clay and metal.”</p>`,
          opts: [
            "sculpture",
            "mural",
            "sculptor"
          ],
          correct: 2,
          pre: "e11s4l1",
          fbOk: "Right.",
          fbBad: "Is Mr Levchenko a person or a work of art?",
          fbText: "A person who makes figures is a <b>sculptor</b>. His birds are sculptures."
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 2",
          title: "Choose the correct answer.",
          body: `<p>Oksana’s page: “At the theatre, we went on a ___ and saw the rooms where the actors get ready.”</p>`,
          opts: [
            "backstage tour",
            "temporary exhibition",
            "programme"
          ],
          correct: 0,
          pre: "e11s4l2",
          fbOk: "Exactly.",
          fbBad: "Which visit shows the parts of a theatre that the audience can’t see?",
          fbText: "A <b>backstage tour</b> shows the parts of a theatre that the audience can’t usually see."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Complete the sentences.",
          body: `<p>Mariia’s page: an exhibition in Kharkiv.</p>`,
          text: "The photos were really {*moving|moved}. I was {*amazed|amazing} by how brave the people in them were. The exhibition was {*impressive|impressed}.",
          pre: "e11s4l3",
          hint: "In each sentence, is it the thing that causes the feeling or the person who has it?",
          fbOk: "Well done!",
          fbBad: "-ing for what causes a feeling, -ed for the person who has it. impressive / impressed.",
          fbText: "The photos caused the feeling → <b>moving</b>. Mariia had the feeling → <b>amazed</b>. The exhibition → <b>impressive</b>."
        },
        {
          type: "pick",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s note is wrong.</p>`,
          text: "The concert was long, and I was [boring] after the first hour.",
          pre: "e11s4l3",
          fbOk: "Good eye!",
          fbBad: "Emma had the feeling.",
          fbText: "Emma had the feeling, so: I was <b>bored</b>, not <s>boring</s>."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 5",
          title: "Complete the sentences.",
          body: `<p>Oksana’s page: Grandma Hanna’s rushnyk.</p>`,
          text: "The rushnyk is more than a hundred years old. It’s {*priceless|worthless}: nobody can make another one like it. When you hold it, you must be very {*careful|careless}.",
          pre: "e11s4l4",
          hint: "Read the words after the colon: what do they tell you about the rushnyk? And how should you hold something very old?",
          fbOk: "Right.",
          fbBad: "Extremely valuable or worth nothing? With care or without care?",
          fbText: "Extremely valuable → <b>priceless</b>. With care → <b>careful</b>."
        },
        {
          type: "word",
          sk: "vocab",
          eyebrow: "Task 6",
          title: "Write the word.",
          body: `<p>Write the opposite of <b>legal</b>. Use a prefix.</p>`,
          before: "legal →",
          answer: "illegal",
          pre: "e11s4l4",
          fbOk: "Yes!",
          fbBad: "Which prefix often comes before l?",
          fbText: "legal → <b>illegal</b>: il- before l."
        },
        {
          type: "match",
          sk: "cult",
          eyebrow: "Task 7",
          title: "Match the halves.",
          body: `<p>Isla’s page: four festivals.</p>`,
          left: ["The Edinburgh Festival Fringe", "Glastonbury", "Book Arsenal", "Atlas Weekend"],
          right: ["takes place in Scotland every August.", "takes place on a farm in Somerset.", "is a festival of books and art in Kyiv.", "was a big music festival in Kyiv from 2015 to 2021."],
          pre: "e11s4l5",
          fbOk: "Well done!",
          fbBad: "Which festival is on a farm? Which one is about books?",
          fbText: "The Fringe – <b>Edinburgh, August</b>. Glastonbury – <b>a farm in Somerset</b>. Book Arsenal – <b>books and art</b>. Atlas Weekend – <b>music, 2015–2021</b>."
        },
        {
          type: "build",
          sk: "write",
          eyebrow: "Task 8",
          title: "Put the words in order.",
          body: `<p>Emma ends her review.</p>`,
          tiles: ["it’s", "well", "worth", "seeing"],
          extra: ["see"],
          answer: "It’s well worth seeing.",
          pre: "e11s4l6",
          fbOk: "Yes!",
          fbBad: "worth + -ing.",
          fbText: "<b>It’s well worth seeing.</b> After <i>worth</i>, use <b>-ing</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Task 9",
          title: "Complete the sentences.",
          body: `<p>Andrii writes a review of the school play.</p>`,
          text: "Our school play was about a family in Kyiv. I {*found|looked} it really touching. The only {*disappointing|disappointed} thing was the sound in the hall. I’d highly {*recommend|recommended} it to everyone.",
          pre: "e11s4l6",
          hint: "Which verb can go before it + an adjective when you give your opinion? And which form of a verb comes after I’d?",
          fbOk: "Well done!",
          fbBad: "I found it… The thing caused the feeling. I’d + the base form.",
          fbText: "I <b>found</b> it touching. The only <b>disappointing</b> thing. I’d highly <b>recommend</b> it."
        }
      ],
      outro: {
        text: "Kinds of art, galleries, feelings, new adjectives, festivals and reviews: now you can talk about art and festivals in English.",
        learned: [
          "Talk about kinds of art, galleries and theatres.",
          "Describe your feelings about art with -ing and -ed adjectives.",
          "Talk about festivals in Ukraine and the UK and write a short review."
        ]
      }
    }
  ]
});
