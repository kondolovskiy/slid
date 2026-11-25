/* Слід · Англійська мова, 8 клас — «Books and libraries» (e8s5)
   Програма: МП-ІМ «Іноземна мова. 5–9 класи» (Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021), 8 кл., тема «Література й бібліотека»:
   вибір книг; улюблений письменник, книга, герой; літературні жанри; бібліотека, її обладнання та послуги (с. 32, розд. 5.2.2);
   відгук про книгу (с. 31); граматика B1 — Past Perfect Simple (time up to then), Past simple — ordering of past events,
   Discourse markers — sequencing (с. 34–35): https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Концентрично: heroes from books (e4s3l5), a library (e5s7l1), First / then / after that (e6s3l3), irregular verbs (e6s3l4–l5),
   Past Continuous + when (e6s4l4–l5), the third form (e6s7l5), already (e7s1l2). Past Perfect Continuous — не вводимо (на вибір автора).
   Герої — серія 4–7 кл., на чотири роки старші, ніж у 4 кл.: Taras (14), Zlata, Ostap (Lviv); Oksana (14), мама Olena, Halyna (Zelena Dolyna,
   бібліотека — у Poltava, як у e5s7l1); Andrii, Bohdan, Daryna, Ms Lysenko (Kyiv); Mariia (Kharkiv); Emma, Tom (Англія).
   Нові: Ms Shevchuk — бібліотекарка в Poltava; Mrs Clarke — бібліотекарка в місті Emma. Вигадані (не справжні): книжка
   The Lighthouse Riddle і письменниця Vira Morska (l6, boss), оповідання Mariia про Lina (l5), Inspector Bond (l1).
   Факти про письменників — з двох джерел (URL — tasks/…/write-eng-g8-e8s5.md, «Нотатки агента»); тексти творів не цитуємо.
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8). Без dialog (D-056), без звуку.
   Форми, рівні слів і наголос — за Cambridge Dictionary і OALD (URL — у нотатках задачі).
   Статус: draft (writer-e8s5, 2026-11-25). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e8s5 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e8s5",
  grade: 8,
  weeks: [18, 22],
  title: "Books and libraries",
  why: "To talk about books, writers and literary genres. And to tell a story about what had happened.",
  requires: ["e4s3l5", "e5s7l1", "e6s3l3", "e6s3l4", "e6s3l5", "e6s4l4", "e6s4l5", "e6s7l5", "e7s1l2"],
  meta: { author: "writer-e8s5", created: "2026-11-25", factcheck: "self", teacher: null },
  badges: [
    { id: "e8s5boss", name: "Book expert", icon: "trophy", desc: "Finish the final lesson “Books and libraries”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e8s5l1",
      title: "Fantasy, poetry or a detective story? Genres",
      short: "Genres",
      icon: "book",
      status: "draft",
      why: "Every reader likes different books. Learn the names of book types and find books you will enjoy.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Which shelf?",
          body: `<p class="lead">Taras’s school library in Lviv has new shelves. The signs say: <i>Detective stories</i>, <i>Fantasy</i>, <i>Science fiction</i>, <i>Poetry</i>, <i>Fairy tales</i>.</p><p><b>Zlata:</b> <i>I want a story with dragons and magic. Where can I find one?</i><br><b>Taras:</b> <i>Look at the signs!</i></p><p>Which shelf is right for Zlata?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Zlata wants a story with dragons and magic. Which shelf should she go to?</p>`,
          opts: [
            "Fantasy",
            "Detective stories",
            "Poetry"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Stories with magic, dragons and other worlds are <b>fantasy</b>. The next screen shows more types of books."
        },
        {
          type: "info",
          title: "Types of books: genres",
          body: `<p>A <b>genre</b> is a type of book or film.</p><ul><li><b><u>fan</u>tasy</b> – magic, dragons, other worlds</li><li>a <b>fairy tale</b> – a magic story for children; it often starts “Once upon a time…”</li><li>a <b>de<u>tec</u>tive story</b> – a detective finds out who did something bad</li><li><b>science fiction</b> – the future, space, robots</li><li><b><u>po</u>etry</b> – poems: short lines, often with rhymes</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          body: `<p>Match the genre and the start of the book.</p>`,
          left: ["a detective story", "science fiction", "a fairy tale", "fantasy", "poetry"],
          right: ["Who took the painting? Inspector Bond, a detective, wants to find out.", "In the year 2250, people and robots live together on Mars.", "Once upon a time, a poor girl lived with her old grandmother.", "Mira opens an old door and finds a world full of dragons.", "Twenty short poems about the sea, the wind and the sky."],
          hint: "Look for key words: a detective, robots, “Once upon a time”, dragons, poems.",
          fbOk: "Yes!",
          fbBad: "Look at the list of genres again.",
          fbText: "A detective wants to find out who took it – <b>a detective story</b>. Robots on Mars – <b>science fiction</b>. “Once upon a time…” – <b>a fairy tale</b>. Dragons and another world – <b>fantasy</b>. Poems – <b>poetry</b>."
        },
        {
          type: "info",
          title: "A novel, a short story, a poem",
          body: `<ul><li>a <b><u>nov</u>el</b> – a long story; it fills a whole book</li><li>a <b>short story</b> – a story of a few pages</li><li>a <b>poem</b> – a short text in lines; <b>poetry</b> = poems</li></ul><p>A <b>writer</b> (an <b>author</b>) writes novels and stories. A <b>poet</b> writes poems.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Taras makes a reading list for the winter holidays.</p>`,
          text: "1. A long {*novel|poem} about a family in old Lviv – 320 pages. 2. A book of {*poems|novels} by one poet. 3. A {*short story|novel} for my English lesson – only six pages.",
          hint: "How long is each one? Who writes poems?",
          fbOk: "Exactly.",
          fbBad: "320 pages is long. Six pages is short. A poet writes…",
          fbText: "320 pages – a long <b>novel</b>. A poet writes <b>poems</b>. Six pages – a <b>short story</b>."
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Andrii loves books about space, robots and life in the future. Which genre does he like?</p>`,
          opts: [
            "poetry",
            "science fiction",
            "fairy tales"
          ],
          correct: 1,
          hint: "Space, robots, the future…",
          fbOk: "Right.",
          fbBad: "Look at the list of genres again: which one is about the future?",
          fbText: "Space, robots and the future – <b>science fiction</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+nov|el", "de|+tec|tive", "+fan|ta|sy", "+po|e|try"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts on the screens with new words.",
          fbText: "<u>nov</u>el, de<u>tec</u>tive, <u>fan</u>tasy, <u>po</u>etry. In detective, the strong part is the second one."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>Zlata finds a book with a dragon on the cover. Inside, a boy finds a magic key to another world.</p>`,
          before: "This book is",
          after: ".",
          answer: "fantasy",
          hint: "Magic, dragons, other worlds: f…",
          fbOk: "Good eye!",
          fbBad: "It isn’t science fiction: there are no robots or space. There’s magic.",
          fbText: "Magic, dragons and another world – <b>fantasy</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes to Emma about the new shelves.</p>`,
          text: "Hi Emma! Our school library has new shelves! Zlata found a {*fairy tale|detective story} that starts “Once upon a time…”. I took a {*detective story|book of poems}: a detective finds out who took an old map. Andrii would love the {*science fiction|poetry} shelf: it’s full of novels about space and robots.",
          hint: "“Once upon a time…”, a detective, novels about space: which genres?",
          fbOk: "Well done!",
          fbBad: "Read each sentence again and find the key words.",
          fbText: "“Once upon a time…” – a <b>fairy tale</b>. A detective – a <b>detective story</b>. Novels about space and robots – <b>science fiction</b>."
        }
      ],
      outro: {
        text: "Now you can name genres: fantasy, fairy tales, detective stories, science fiction and poetry. A novel is long, a short story is short.",
        learned: [
          "Name book genres: fantasy, a detective story, science fiction.",
          "Tell a novel from a short story and a poem.",
          "Say who writes books and poems: a writer, an author, a poet."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e8s5l2",
      title: "At the library: borrowing books and other services",
      short: "At the library",
      icon: "city",
      status: "draft",
      why: "A library gives you more than books. Learn to borrow books and use other services.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Can I borrow this book?",
          body: `<p class="lead">On Saturday, Oksana and her mum are at the library in Poltava.</p><p><b>Oksana:</b> Hello! Can I borrow this book, please?<br><b>Ms Shevchuk:</b> Of course. Have you got your library card?<br><b>Oksana:</b> Yes, here it is.<br><b>Ms Shevchuk:</b> You can keep the book for three weeks. Please return it by 20 March.</p><p>What can you do at a library?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Remember?",
          title: "Choose the correct answer.",
          body: `<p>Oksana borrows a book from the library. What does she do?</p>`,
          opts: [
            "She takes it home and brings it back later.",
            "She buys it and keeps it.",
            "She gives her own book to the library."
          ],
          correct: 0,
          hint: "Remember the lesson “Places in town: a library, a bank, a park”.",
          fbOk: "Yes, you remember!",
          fbBad: "At a bookshop, you buy books. At a library…",
          fbText: "At a library, you <b>borrow</b> books: you take them home and bring them back."
        },
        {
          type: "info",
          title: "borrow or lend?",
          body: `<ul><li><b><u>bor</u>row</b> = take something for a short time:<br>I <b>borrow</b> books <b>from</b> the library.</li><li><b>lend</b> = give something for a short time:<br>The library <b>lends</b> books <b>to</b> readers.</li></ul><p>Can I <b>borrow</b> your pen? = Can you <b>lend</b> me your pen?<br>lend – lent – <b>lent</b>; borrow – borrowed – <b>borrowed</b></p><p>Not: <s>Can I lend your book?</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Zlata talks to Taras at home in Lviv.</p>`,
          text: "Zlata: Taras, can I {*borrow|lend} your fantasy novel? Taras: Yes, I can {*lend|borrow} it to you. But it isn’t my book. I {*borrowed|lent} it from the school library, so give it back on Friday!",
          hint: "Who takes the book? Who gives it?",
          fbOk: "Exactly.",
          fbBad: "Take for a short time → borrow. Give for a short time → lend.",
          fbText: "Zlata takes it: can I <b>borrow</b>. Taras gives it: I can <b>lend</b> it to you. He took it from the library: I <b>borrowed</b> it."
        },
        {
          type: "pick",
          sk: "vocab",
          title: "Find the mistake.",
          body: `<p>Oksana writes to her friend Halyna. One word is wrong.</p>`,
          text: "Hi Halyna! Can I [lend] your English dictionary? I need it for my homework. I’ll give it back tomorrow.",
          hint: "Oksana wants to take the dictionary for a short time.",
          fbOk: "Good eye!",
          fbBad: "Who takes the dictionary: Oksana or Halyna?",
          fbText: "Oksana takes it: <b>Can I borrow your dictionary?</b> Or: Can you lend me your dictionary?"
        },
        {
          type: "info",
          title: "What can you do at a library?",
          body: `<ul><li>a <b>library card</b> – you need it to borrow books</li><li>a <b>li<u>brar</u>ian</b> – a person who works in a library</li><li><b>return</b> a book = bring it back</li><li><b><u>fic</u>tion</b> – stories: novels, fairy tales, fantasy</li><li><b>non-fiction</b> – books with true facts: history, science, sport</li></ul><p>You can also use the computers, print and photocopy, borrow e-books or join a book club.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "func",
          title: "Match the halves.",
          body: `<p>What does each reader need?</p>`,
          left: ["I want to read this novel at home.", "I need to print my project.", "I want to talk about books with other readers.", "I need a book about the history of Poltava."],
          right: ["Borrow it with your library card.", "Use the printer next to the computers.", "Join the book club.", "Look on the non-fiction shelves."],
          hint: "Which one is about true facts? Which one is about other readers?",
          fbOk: "Right.",
          fbBad: "Look at the screen “What can you do at a library?” again.",
          fbText: "A novel at home – <b>borrow it</b>. Print – <b>the printer</b>. Talk with other readers – <b>the book club</b>. History – <b>non-fiction</b>."
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the books.",
          body: `<p>Is it fiction or non-fiction?</p>`,
          bins: ["Fiction", "Non-fiction"],
          items: [
            ["a fantasy novel about a dragon", 0],
            ["a book of fairy tales", 0],
            ["a detective story", 0],
            ["a book about the history of Ukraine", 1],
            ["a science book about the planets", 1]
          ],
          hint: "Stories → fiction. True facts → non-fiction.",
          fbOk: "Exactly.",
          fbBad: "Is it a story, or is it true facts?",
          fbText: "Novels, fairy tales and detective stories – <b>fiction</b>. History and science books – <b>non-fiction</b>. Careful: science fiction is fiction, but a science book is non-fiction!"
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>Ms Shevchuk works in the library in Poltava. She helps readers find books.</p>`,
          before: "Ms Shevchuk is a",
          after: ".",
          answer: "librarian",
          hint: "library → librar…",
          fbOk: "Well done!",
          fbBad: "Look at the screen “What can you do at a library?”.",
          fbText: "A person who works in a library is a <b>librarian</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes to Emma on Saturday evening.</p>`,
          text: "Hi Emma! Today I went to the library in Poltava. I {*borrowed|lent} two novels with my library {*card|book}. The {*librarian|writer}, Ms Shevchuk, helped me find a book about the history of Poltava on the {*non-fiction|fiction} shelves. I have to {*return|borrow} the books in three weeks.",
          hint: "Oksana takes the books. Who helps readers? History is true facts.",
          fbOk: "Well done!",
          fbBad: "Check: take for a short time, a card for the library, a person who works there, true facts.",
          fbText: "I <b>borrowed</b> two novels with my library <b>card</b>. The <b>librarian</b> helped me. History – <b>non-fiction</b>. Bring the books back – <b>return</b> them."
        }
      ],
      outro: {
        text: "At a library, you borrow books with your library card and return them later. The library lends books to readers.",
        learned: [
          "Use borrow and lend correctly.",
          "Talk about library services: a library card, a librarian, a book club.",
          "Tell fiction from non-fiction."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e8s5l3",
      title: "A writer, a poet, a hero: my favourite book",
      short: "Writers",
      icon: "user",
      status: "draft",
      why: "Everybody has a favourite book. Learn about famous writers and talk about your favourite book.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Who is your favourite writer?",
          body: `<p class="lead">Ms Lysenko’s class in Kyiv is making a poster: “Writers we love”.</p><p><b>Bohdan:</b> <i>I loved Fox Mykyta when I was little. It’s by Ivan Franko.</i><br><b>Daryna:</b> <i>My favourite is The Forest Song by Lesia Ukrainka.</i><br><b>Andrii:</b> <i>I like the Sherlock Holmes stories by Arthur Conan Doyle.</i></p><p>What do you know about these writers?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Taras Shevchenko wrote <i>Kobzar</i>. What is <i>Kobzar</i>?</p>`,
          opts: [
            "a book of poems",
            "a detective story",
            "a science fiction novel"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<i>Kobzar</i> is a book of <b>poems</b>. Taras Shevchenko was a poet. Read more on the next screen."
        },
        {
          type: "info",
          title: "Ukrainian writers",
          body: `<ul><li><b>Taras Shevchenko</b> (1814–1861) – a Ukrainian poet and artist. His book of poems <i>Kobzar</i> came out in 1840.</li><li><b>Lesia Ukrainka</b> (1871–1913) – a Ukrainian poet. In 1911, she wrote <i>The Forest Song</i>, a play about Mavka, a magic girl of the forest.</li><li><b>Ivan Franko</b> (1856–1916) – a Ukrainian writer and poet. <i>Fox Mykyta</i> is his story in verse about a clever fox.</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          body: `<p>Match the writer and the book.</p>`,
          left: ["Taras Shevchenko", "Lesia Ukrainka", "Ivan Franko"],
          right: ["Kobzar", "The Forest Song", "Fox Mykyta"],
          hint: "Which book is about a fox? Which one is about Mavka?",
          fbOk: "Yes!",
          fbBad: "Look at the screen “Ukrainian writers” again.",
          fbText: "<b>Kobzar</b> – Taras Shevchenko. <b>The Forest Song</b> – Lesia Ukrainka. <b>Fox Mykyta</b> – Ivan Franko."
        },
        {
          type: "info",
          title: "British writers",
          body: `<ul><li><b>Arthur Conan Doyle</b> (1859–1930) – a Scottish writer. He wrote detective stories about Sherlock Holmes.</li><li><b>Lewis Carroll</b> – an English writer. His novel <i>Alice’s Adventures in Wonderland</i> came out in 1865.</li></ul><p>The <b>main <u>char</u>acter</b> is the most important person in a story. Alice is the main character of Lewis Carroll’s novel.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "cult",
          title: "Choose the correct answer.",
          body: `<p>Andrii likes the Sherlock Holmes stories. What genre are they?</p>`,
          opts: [
            "poetry",
            "fairy tales",
            "detective stories"
          ],
          correct: 2,
          hint: "Look at the screen “British writers”.",
          fbOk: "Right.",
          fbBad: "Arthur Conan Doyle wrote … stories about Sherlock Holmes.",
          fbText: "Arthur Conan Doyle wrote <b>detective stories</b> about Sherlock Holmes."
        },
        {
          type: "info",
          title: "Talking about a book",
          body: `<ul><li>My favourite book is <i>Fox Mykyta</i>.</li><li>It <b>was written by</b> Ivan Franko.</li><li>It<b>’s about</b> a clever fox.</li><li><b>The main character</b> is Mykyta.</li><li>I like it <b>because</b> it’s funny.</li></ul><p><b>was written by</b> + the writer. Not: <s>It wrote by Ivan Franko.</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Bohdan writes about his favourite book for the poster.</p>`,
          text: "My favourite book is Fox Mykyta. It was {*written|wrote} by Ivan Franko. It’s {*about|of} a clever fox. The main {*character|writer} is Mykyta. I like it {*because|so} it’s very funny.",
          hint: "Look at the screen “Talking about a book”.",
          fbOk: "Exactly.",
          fbBad: "was + the third form: written. A book is about something.",
          fbText: "It was <b>written</b> by Ivan Franko. It’s <b>about</b> a clever fox. The main <b>character</b> is Mykyta. I like it <b>because</b> it’s funny."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Daryna tells the class about The Forest Song.</p>`,
          tiles: ["It", "was", "written", "by", "Lesia Ukrainka"],
          extra: ["wrote"],
          keepCase: true,
          answer: "It was written by Lesia Ukrainka.",
          hint: "Start with It. Then was + the third form + by.",
          fbOk: "Well done!",
          fbBad: "was + written, not wrote.",
          fbText: "<b>It was written by Lesia Ukrainka.</b> write – wrote – <b>written</b>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>Taras Shevchenko wrote lots of poems.</p>`,
          before: "Taras Shevchenko was a Ukrainian",
          after: "and artist.",
          answer: "poet",
          hint: "A person who writes poems is a p…",
          fbOk: "Good eye!",
          fbBad: "Look at the screen “Ukrainian writers”.",
          fbText: "Taras Shevchenko was a Ukrainian <b>poet</b> and artist."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Daryna writes about her favourite book for the poster.</p>`,
          text: "My favourite book is The Forest Song by {*Lesia Ukrainka|Ivan Franko}. It’s a play, and it was written in {*1911|1840}. The main {*character|author} is Mavka, a magic girl of the forest. I like it {*because|so} the story is beautiful and sad.",
          hint: "Look at the screen “Ukrainian writers”: who wrote The Forest Song, and when?",
          fbOk: "Well done!",
          fbBad: "1840 is the year of Kobzar. And Mavka is a person in the story.",
          fbText: "The Forest Song – <b>Lesia Ukrainka</b>, <b>1911</b>. Mavka is the main <b>character</b>. I like it <b>because</b>…"
        }
      ],
      outro: {
        text: "You know some Ukrainian and British writers. Talk about a book: It was written by… It’s about… The main character is…",
        learned: [
          "Say who wrote a book: It was written by Lesia Ukrainka.",
          "Name famous Ukrainian and British writers and their books.",
          "Talk about your favourite book and its main character."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e8s5l4",
      title: "When I got to the library, it had closed: the Past Perfect",
      short: "Past Perfect",
      icon: "path",
      status: "draft",
      why: "Sometimes one thing happened before another thing in the past. The Past Perfect shows which came first.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "What happened first?",
          body: `<p class="lead">Oksana writes to Emma.</p><p><i>Last Saturday was a bad day! The library in Poltava closes at three on Saturdays. Mum and I got there at half past three. When we got to the library, it had closed. Ms Shevchuk had already gone home. So I didn’t get any new books.</i></p><p>Which happened first: the library closed or Oksana got there?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“When we got to the library, it had closed.” What happened first?</p>`,
          opts: [
            "The library closed.",
            "Oksana and her mum got to the library.",
            "Both happened at the same time."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "The library closed at three. Oksana got there at half past three. <b>had closed</b> shows the earlier action."
        },
        {
          type: "info",
          title: "had + the third form",
          body: `<p>Two actions in the past. Which came first?</p><ul><li>3.00 pm – the library closed.</li><li>3.30 pm – we got there.</li></ul><p>When we <b>got</b> there, the library <b>had closed</b>.<br>Ms Shevchuk <b>had</b> already <b>gone</b> home.</p><p>The earlier action → <b>had</b> + the third form. This is the Past Perfect.<br>I<b>’d</b> gone = I <b>had</b> gone.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<ul><li>3.30 pm – Ostap took the last copy of Captain Cat from the school library.</li><li>3.45 pm – Ostap went home.</li><li>4.00 pm – Taras came to the library.</li></ul>`,
          text: "When Taras came to the library, Ostap {*had|has} already {*taken|took} the last copy of Captain Cat. Ostap {*had gone|has gone} home too.",
          hint: "The earlier action: had + the third form.",
          fbOk: "Yes!",
          fbBad: "It’s about the past: had, not has. take – took – taken.",
          fbText: "Ostap <b>had</b> already <b>taken</b> the last copy. He <b>had gone</b> home. Past Perfect: <b>had</b> + the third form."
        },
        {
          type: "info",
          title: "Third forms",
          body: `<p>Some verbs have irregular third forms:</p><ul><li>go – went – <b>gone</b></li><li>leave – left – <b>left</b></li><li>forget – forgot – <b>forgotten</b></li><li>take – took – <b>taken</b></li><li>write – wrote – <b>written</b></li><li>read – read – <b>read</b> (the past forms sound like <i>red</i>)</li></ul><p>Regular verbs: close – closed – <b>closed</b>.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Emma went to her town library.</p><ul><li>5.00 pm – Mrs Clarke, the librarian, went home.</li><li>5.10 pm – Emma got to the library.</li></ul><p>When Emma got to the library, Mrs Clarke…</p>`,
          opts: [
            "has gone home.",
            "had gone home.",
            "had went home."
          ],
          correct: 1,
          hint: "Mrs Clarke left first. had + the third form of go.",
          fbOk: "Right.",
          fbBad: "go – went – gone. And it’s the past: had, not has.",
          fbText: "Mrs Clarke left earlier: she <b>had gone</b> home. go – went – <b>gone</b>."
        },
        {
          type: "info",
          title: "hadn’t and Had…?",
          body: `<ul><li>I <b>hadn’t read</b> the book before. = I had not read it.</li><li><b>Had</b> you <b>read</b> it before? – Yes, I <b>had</b>. / No, I <b>hadn’t</b>.</li></ul><p>Mariia couldn’t borrow a book. Why? She <b>had forgotten</b> her library card.</p>`,
          cta: "Next"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Mariia was at the library in Kharkiv, but she couldn’t borrow a book. Why not?</p>`,
          tiles: ["She", "had", "forgotten", "her library card"],
          extra: ["forgot"],
          keepCase: true,
          answer: "She had forgotten her library card.",
          hint: "Start with She. Then had + the third form.",
          fbOk: "Well done!",
          fbBad: "forget – forgot – forgotten. After had: forgotten.",
          fbText: "<b>She had forgotten her library card.</b> had + <b>forgotten</b>, not <i>forgot</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>Emma writes to Oksana. One word is wrong.</p>`,
          text: "I got to the library at ten past five, but Mrs Clarke had already [went] home. I had to come back on Monday.",
          hint: "Look at the word after had already.",
          fbOk: "Good eye!",
          fbBad: "had + the third form: go – went – …",
          fbText: "<b>Mrs Clarke had already gone home.</b> go – went – <b>gone</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Andrii got home, but his library book wasn’t in his bag. Write the third form of <i>leave</i>.</p>`,
          before: "Oh no! I had",
          after: "it on the bus!",
          answer: "left",
          hint: "Look at the list: leave – left – …",
          fbOk: "Exactly.",
          fbBad: "leave – left – left: the third form is the same as the Past Simple.",
          fbText: "leave – left – <b>left</b>: I had <b>left</b> it on the bus."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences with the Past Perfect.",
          body: `<p>Oksana writes to Emma again a week later.</p>`,
          text: "This Saturday, we got to the library at two, before it closed! I gave Ms Shevchuk the book I {*had borrowed|have borrowed} three weeks before. Before I gave it back, I {*had read|have read} it twice! But she couldn’t find the new fantasy novel. Another reader {*had taken|has taken} it the day before.",
          hint: "Each gap is about an earlier action in the past.",
          fbOk: "Well done!",
          fbBad: "The story is in the past. The earlier action → had + the third form.",
          fbText: "The book I <b>had borrowed</b> three weeks before. I <b>had read</b> it twice. Another reader <b>had taken</b> it the day before."
        }
      ],
      outro: {
        text: "Use the Past Perfect for the earlier action in the past: When we got to the library, it had closed.",
        learned: [
          "Form the Past Perfect: had + the third form.",
          "Show which past action happened first.",
          "Use hadn’t and Had…? in questions and answers."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e8s5l5",
      title: "It was raining, and she had lost her key: telling a story",
      short: "Telling a story",
      icon: "scroll",
      status: "draft",
      why: "Good stories use three past forms. Learn to tell a story in the right order.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "How does Mariia’s story start?",
          body: `<p class="lead">Mariia is writing a short story for a school competition in Kharkiv.</p><p><i>It was raining hard, and the streets were empty. Lina was walking home from the library with a bag of books. When she got to her door, she stopped. She had lost her key!</i></p><p>Mariia uses three different past forms. Why?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Which sentence describes the scene – the weather and the street?</p>`,
          opts: [
            "It was raining hard.",
            "She stopped.",
            "She had lost her key!"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>It was raining</b> describes the scene – the background. The next screen shows all three forms."
        },
        {
          type: "info",
          title: "Three past forms in a story",
          body: `<ul><li><b>Past Continuous</b> – the background:<br>It <b>was raining</b>. Lina <b>was walking</b> home.</li><li><b>Past Simple</b> – the main events, one by one:<br>She <b>got</b> to her door. She <b>stopped</b>.</li><li><b>Past Perfect</b> – an earlier event:<br>She <b>had lost</b> her key (before that).</li></ul><p>Remember “I was running when it started to rain”? A story uses the same idea.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the sentences.",
          body: `<p>More sentences from Mariia’s story. Background, main event or earlier event?</p>`,
          bins: ["Background", "Main event", "Earlier event"],
          items: [
            ["The wind was blowing.", 0],
            ["People were hurrying home.", 0],
            ["Lina knocked on the door.", 1],
            ["Nobody answered.", 1],
            ["Her parents had gone to the theatre.", 2],
            ["She had left the key in the library.", 2]
          ],
          hint: "was / were + -ing → background. had + the third form → earlier.",
          fbOk: "Exactly.",
          fbBad: "Look at the verb form in each sentence.",
          fbText: "<b>was blowing</b>, <b>were hurrying</b> – background. <b>knocked</b>, <b>answered</b> – main events. <b>had gone</b>, <b>had left</b> – earlier events."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>The story goes on. The words in brackets tell you what kind of action it is.</p>`,
          text: "(background) The library was quiet. A librarian {*was reading|had read} at her desk. (main event) Lina ran in and {*asked|had asked} about her key. (earlier event) Luckily, a boy {*had found|was finding} it under a table an hour before.",
          hint: "Background → was + -ing. Main event → Past Simple. Earlier event → had + the third form.",
          fbOk: "Yes!",
          fbBad: "Look at the word in brackets before each sentence.",
          fbText: "Background: was <b>reading</b>. Main event: <b>asked</b>. Earlier event: <b>had found</b>."
        },
        {
          type: "info",
          title: "Telling a story in order",
          body: `<p>Remember <b>First</b>, <b>Then</b>, <b>After that</b> from recipes? Stories use them too:</p><ul><li><b>First,</b> – the first event</li><li><b>Then</b> / <b>After that,</b> – the next event</li><li><b>Later,</b> – some time after</li><li><b>In the end,</b> – finally, after a lot of events</li></ul><p><b>In the end,</b> Lina got home, wet but happy.</p>`,
          cta: "Next"
        },
        {
          type: "order",
          sk: "write",
          title: "Put the sentences in order.",
          body: `<p>Put the end of Mariia’s story in order.</p>`,
          items: [
            "First, Lina looked in her bag again.",
            "Then she ran back to the library.",
            "After that, the boy gave her the key.",
            "Later, they had a cup of tea with the librarian.",
            "In the end, Lina got home at eight, wet but happy."
          ],
          shuffle: [3, 0, 4, 2, 1],
          hint: "Look at the first words: First, Then, After that, Later, In the end.",
          fbOk: "Good eye!",
          fbBad: "Which word starts a story? Which one ends it?",
          fbText: "<b>First</b> – she looked in her bag. <b>Then</b> – she ran back. <b>After that</b> – the boy gave her the key. <b>Later</b> – tea. <b>In the end</b> – home."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Mariia writes: “When Lina got to her door, she stopped. She <b>had lost</b> her key.”</p><p>Why does she use <i>had lost</i>?</p>`,
          opts: [
            "Lina lost the key before she got to her door.",
            "It describes the weather in the story.",
            "Lina lost the key later, at the library."
          ],
          correct: 0,
          hint: "had + the third form → an earlier event.",
          fbOk: "Right.",
          fbBad: "Look at the screen “Three past forms in a story”.",
          fbText: "The Past Perfect shows an earlier event: Lina <b>had lost</b> her key <b>before</b> she got to her door."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in this part of Mariia’s story is wrong.</p>`,
          text: "When Lina got home, her mum [has] made hot chocolate for her.",
          hint: "The story is in the past. Mum made it earlier.",
          fbOk: "Good eye!",
          fbBad: "In a past story, the earlier action → had + the third form.",
          fbText: "<b>Her mum had made hot chocolate</b> – the earlier action in the past: <b>had</b>, not <i>has</i>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>The last part of Mariia’s story.</p>`,
          text: "{*In the end|First}, Lina got home at eight. It {*was|were} still raining. Her parents were at home now: they {*had come|have come} back from the theatre. Her mum {*had made|has made} hot chocolate, and her little brother {*was waiting|were waiting} for her at the window.",
          hint: "It’s the end of the story. Check: it was / they were. Earlier events → had.",
          fbOk: "Well done!",
          fbBad: "Which word ends a story? And who is the sentence about: it, he or they?",
          fbText: "<b>In the end</b> ends a story. It <b>was</b> raining. They <b>had come</b> back, Mum <b>had made</b> chocolate – earlier events. Her brother <b>was waiting</b> – the background."
        }
      ],
      outro: {
        text: "A story uses three past forms: the Past Continuous for the background, the Past Simple for events and the Past Perfect for earlier events.",
        learned: [
          "Use the Past Continuous, the Past Simple and the Past Perfect in a story.",
          "Tell a story in order: First, Then, Later, In the end.",
          "Find the earlier event in a story."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e8s5l6",
      title: "A book I recommend: a book review",
      short: "Book review",
      icon: "star",
      status: "draft",
      why: "A good review helps other people choose a book. Read a review and learn to write your own.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Should I read it?",
          body: `<p class="lead">Taras writes book reviews for his school magazine in Lviv. This month, he has read <i>The Lighthouse Riddle</i>.</p><p>A review tells you about a book: what it’s about and what the reviewer thinks. Then you can decide: is it a good book for you?</p><p>Let’s read Taras’s review.</p>`,
          cta: "Let’s read"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Taras’s review, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i><b>The Lighthouse Riddle</b> by Vira Morska. Genre: detective story.</i></p><p><i>The Lighthouse Riddle is a short novel for teenagers. The story happens in a small town near Odesa. The main character is Yeva, a fourteen-year-old girl. Every summer, she stays with her grandad. He looks after an old lighthouse by the sea. One night, the light suddenly goes out. In the morning, Grandad’s old map has disappeared.</i></p><p>Where does the story happen?</p>`,
          opts: [
            "in a big city in England",
            "in a small town near Odesa",
            "in Lviv"
          ],
          correct: 1,
          hint: "Find the word town.",
          fbOk: "Right.",
          fbBad: "Read the sentence that starts “The story happens…”.",
          fbText: "The story happens <b>in a small town near Odesa</b>. Taras lives in Lviv, but the story isn’t there."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Taras’s review, part 2 of 3",
          title: "Read and choose.",
          body: `<p><i>Yeva decides to find out who has taken the map. With her new friend Lev, she follows a man in a red boat, talks to fishermen and reads old letters in the town library. Step by step, she finds the answer to the riddle. I won’t tell you the ending, but it’s really surprising!</i></p><p>Where does Yeva read old letters?</p>`,
          opts: [
            "in the lighthouse",
            "in a red boat",
            "in the town library"
          ],
          correct: 2,
          hint: "Find the words old letters.",
          fbOk: "Exactly.",
          fbBad: "Read the second sentence again.",
          fbText: "She reads old letters <b>in the town library</b>. And Taras doesn’t tell us the ending – a good review never does!"
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Taras’s review, part 3 of 3",
          title: "Choose all the correct answers.",
          body: `<p><i>What I liked: the story is exciting, and I couldn’t stop reading. Yeva is brave and clever, and the little town feels real. What I didn’t like: the beginning is a bit slow. I recommend this book to anyone who likes detective stories and the sea. I’d give it four stars out of five.</i></p><p>What does Taras think about the book?</p>`,
          opts: [
            "The story is exciting.",
            "Yeva is brave and clever.",
            "The beginning is a bit slow.",
            "It’s the best book in the world: five stars."
          ],
          correct: [0, 1, 2],
          hint: "Read “What I liked” and “What I didn’t like”. How many stars?",
          fbOk: "Well done!",
          fbBad: "How many stars does Taras give the book?",
          fbText: "Taras likes the <b>exciting story</b> and <b>brave, clever Yeva</b>. He thinks <b>the beginning is a bit slow</b>. So he gives it <b>four</b> stars, not five."
        },
        {
          type: "info",
          title: "A book review: the plan",
          body: `<ol><li>The title, the writer and the genre.</li><li>What is it about? Tell the story in the Present Simple: Yeva <b>stays</b> with her grandad.</li><li>What I liked and what I didn’t like.</li><li>Who would enjoy it? <b>I recommend it to…</b> I’d give it four stars out of five.</li></ol><p>Don’t tell the ending!</p>`,
          cta: "Next"
        },
        {
          type: "order",
          sk: "write",
          title: "Put the sentences in order.",
          body: `<p>Zlata writes a short review. Put it in order. Use the plan.</p>`,
          items: [
            "Kotyhoroshko is a Ukrainian fairy tale.",
            "It’s about a very strong boy. He fights a dragon and frees his brothers and sister.",
            "I liked it because Kotyhoroshko is brave, but some parts are scary.",
            "I recommend it to young children. I’d give it five stars out of five."
          ],
          shuffle: [2, 3, 0, 1],
          hint: "Title and genre → the story → what I liked → I recommend it…",
          fbOk: "Good eye!",
          fbBad: "Look at the screen “A book review: the plan”.",
          fbText: "1. The title and genre. 2. What it’s about. 3. What Zlata liked. 4. <b>I recommend it to…</b>"
        },
        {
          type: "info",
          title: "recommend",
          body: `<ul><li>I <b>recommend</b> this book.</li><li>I recommend it <b>to</b> anyone who likes fantasy.</li><li>I recommend <b>reading</b> it.</li></ul><p>Not: <s>I recommend to read it.</s><br>After <b>recommend</b>, a verb takes <b>-ing</b>.</p>`,
          cta: "Next"
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>Andrii writes a review of a science fiction novel. One word is wrong.</p>`,
          text: "It’s a great book about robots on Mars. I recommend [to] read it, because the ending is amazing.",
          hint: "What comes after recommend?",
          fbOk: "Good eye!",
          fbBad: "recommend + -ing, without to.",
          fbText: "Not <i>recommend to read</i>. Say: <b>I recommend reading it</b>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>A good review doesn’t tell you the end of the story.</p>`,
          before: "I won’t tell you the",
          after: ", but it’s really surprising!",
          answer: "ending",
          hint: "Look at part 2 of Taras’s review.",
          fbOk: "Right.",
          fbBad: "The end of a story is its e…",
          fbText: "The end of a story is the <b>ending</b>. Don’t tell it in a review!"
        },
        {
          type: "build",
          sk: "write",
          eyebrow: "Final",
          title: "Put the words in order.",
          body: `<p>Daryna finishes her review of The Forest Song.</p>`,
          tiles: ["I", "recommend", "this play", "to anyone", "who likes", "poetry"],
          extra: ["read"],
          keepCase: true,
          answer: "I recommend this play to anyone who likes poetry.",
          hint: "Start with I recommend. What? To whom?",
          fbOk: "Well done!",
          fbBad: "recommend + the book + to anyone who…",
          fbText: "<b>I recommend this play to anyone who likes poetry.</b>"
        }
      ],
      outro: {
        text: "A review gives the title and the genre, tells what the book is about, says what you liked and recommends it. And it never tells the ending!",
        learned: [
          "Read a book review and find the reviewer’s opinion.",
          "Plan a review: the book, the story, likes and dislikes.",
          "Recommend a book: I recommend it to anyone who likes…"
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e8s5l7",
      title: "Book week at school",
      short: "Section final",
      icon: "trophy",
      status: "draft",
      boss: true,
      badge: "e8s5boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help with Book Week?",
          body: `<p class="lead">It’s Book Week at Andrii’s school in Kyiv. Ms Lysenko’s class is making an English page for the school library.</p><p>Check each part of the page. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "match",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Match the halves.",
          body: `<p>Part 1: Genres.</p>`,
          left: ["fantasy", "a detective story", "science fiction", "a fairy tale"],
          right: ["dragons, magic and other worlds", "a detective finds out who did something bad", "space, robots and the future", "a magic story for children: “Once upon a time…”"],
          pre: "e8s5l1",
          hint: "Look for key words: magic, a detective, robots, “Once upon a time”.",
          fbOk: "Yes!",
          fbBad: "Dragons, a detective, robots, “Once upon a time”: which is which?",
          fbText: "Dragons – <b>fantasy</b>. A detective – <b>a detective story</b>. Robots – <b>science fiction</b>. “Once upon a time…” – <b>a fairy tale</b>."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          body: `<p>Part 2: Using our library.</p>`,
          text: "You can {*borrow|lend} three books for two weeks. Show your library {*card|shelf} to the {*librarian|author}. Please {*return|borrow} the books on time. Books with true facts are on the {*non-fiction|fiction} shelves.",
          pre: "e8s5l2",
          hint: "Who takes the books: you or the library? True facts → …",
          fbOk: "Right.",
          fbBad: "Take for a short time → borrow. Bring back → return.",
          fbText: "You <b>borrow</b> books with your library <b>card</b>. Show it to the <b>librarian</b>. <b>Return</b> the books on time. True facts – <b>non-fiction</b>."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 3",
          title: "Choose the correct answer.",
          body: `<p>Part 3: Writers we love. Which sentence is true?</p>`,
          opts: [
            "Ivan Franko wrote Kobzar.",
            "Lesia Ukrainka wrote The Forest Song.",
            "Arthur Conan Doyle wrote Fox Mykyta."
          ],
          correct: 1,
          pre: "e8s5l3",
          hint: "Who wrote the play about Mavka?",
          fbOk: "Exactly.",
          fbBad: "Kobzar – Taras Shevchenko. Fox Mykyta – Ivan Franko.",
          fbText: "<b>Lesia Ukrainka wrote The Forest Song</b> (1911). Kobzar – Taras Shevchenko; Fox Mykyta – Ivan Franko; Arthur Conan Doyle – Sherlock Holmes."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Complete the sentences with the Past Perfect.",
          body: `<p>Part 4: A funny library story. Bohdan came to the library at 4 pm. The library closed at 3 pm that day.</p>`,
          text: "When Bohdan got to the library, it {*had closed|has closed}. He {*hadn’t read|hasn’t read} the sign on the door the day before: “Closed early on Friday”.",
          pre: "e8s5l4",
          hint: "Both actions happened before Bohdan got there.",
          fbOk: "Yes!",
          fbBad: "The earlier action → had / hadn’t + the third form.",
          fbText: "It <b>had closed</b> at three. He <b>hadn’t read</b> the sign the day before – both earlier actions."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Write the missing word.",
          body: `<p>Part 4: Zoriana couldn’t borrow a book. Write the third form of <i>forget</i>.</p>`,
          before: "She had",
          after: "her library card.",
          answer: "forgotten",
          pre: "e8s5l4",
          hint: "forget – forgot – …",
          fbOk: "Good eye!",
          fbBad: "forgot is the Past Simple. After had: the third form.",
          fbText: "forget – forgot – <b>forgotten</b>: She had <b>forgotten</b> her library card."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Fill in the gaps.",
          body: `<p>Part 5: Our class story. The words in brackets tell you what kind of action it is.</p>`,
          text: "(background) It {*was snowing|had snowed} outside. (main event) Suddenly, an old book {*fell|was falling} off the shelf. (earlier event) Somebody {*had hidden|was hiding} a letter inside it years before. {*In the end|First}, we found out who wrote it.",
          pre: "e8s5l5",
          hint: "Background → was + -ing. Event → Past Simple. Earlier → had + the third form. The last sentence ends the story.",
          fbOk: "Well done!",
          fbBad: "Look at the word in brackets before each sentence.",
          fbText: "Background: <b>was snowing</b>. Event: <b>fell</b>. Earlier: <b>had hidden</b>. The end of the story: <b>In the end</b>."
        },
        {
          type: "pick",
          sk: "gram",
          eyebrow: "Task 7",
          title: "Find the mistake.",
          body: `<p>Part 6: A review of The Lighthouse Riddle. One word is wrong.</p>`,
          text: "It’s an exciting detective story about a girl called Yeva. I recommend [to] read it to anyone who likes the sea.",
          pre: "e8s5l6",
          hint: "What comes after recommend?",
          fbOk: "Right.",
          fbBad: "recommend + -ing, or recommend it to…",
          fbText: "Not <i>recommend to read</i>. Say: <b>I recommend it to anyone who likes the sea</b>, or <b>I recommend reading it</b>."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about books, writers and libraries, tell a story in the past and recommend a book.",
        learned: [
          "Name book genres and talk about writers.",
          "Borrow books and use library services.",
          "Tell a story with the Past Continuous, the Past Simple and the Past Perfect.",
          "Recommend a book in a short review."
        ]
      }
    }
  ]
});
