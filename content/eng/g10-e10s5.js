/* Слід · Англійська мова, 10 клас — «Painting and Ukrainian artists» (e10s5)
   Програма: П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; спеціалізовані школи, B1 → B2), 10 кл.: тема «Живопис» —
   жанри живопису; відомі художники та їхні твори; відвідування музею, виставки або галереї; українські митці (с. 22);
   функція — описувати події в їхній логічній послідовності, висловлюючи власну точку зору (l5, l6); граматика (с. 23):
   Past Perfect Continuous — нове в нашому плані (пояснюємо з нуля); контраст з Past Perfect (e8s5l4, e10s1l3) і
   Past Continuous (e6s4l4); опис картини — there is / are, Present Continuous (повт. e5s7l2, e4s8l5), нова лексика
   in the foreground / in the background. Passive «was painted by» — повторення e7s7l2. Розподіл — content/eng/plan.js,
   reports/verify/plan-eng-g10-11.md: https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf
   Друга правильна відповідь (plan-eng-g10-11; CD Grammar «Past perfect simple or past perfect continuous?»): з for + дієсловом
   дії правильні і had been painting, і had painted — тут або multi з обома, або «had painted» не стоїть хибним варіантом;
   кількість / результат («had painted twelve pictures») — лише simple; дієслова стану (know) — лише simple.
   Факти про художників — з двох джерел кожен (URL — tasks/…/write-eng-g10-e10s5.md, «Нотатки агента»); цитат не наводимо
   (слова Пікассо про Примаченко й Білокур — легенда, не беремо). Імена: Kateryna Bilokur, Oleksandr Murashko — КМУ № 55;
   Maria Prymachenko — усталене англійське написання (en.wikipedia, Google Arts & Culture; за КМУ № 55 було б Mariia).
   Герої — серія 4–9 кл., на шість років старші, ніж у 4 кл.: Oksana, Halyna (Zelena Dolyna; Halyna малює), Mariia (Kharkiv,
   комікси на планшеті), Taras (Lviv), Andrii, Daryna (Kyiv), Emma (Англія). Нові: Mr Hill — учитель малювання в школі Emma; Megan — подруга Emma;
   Priya — гід у National Gallery; Sam — однокласник Emma. Картини героїв (Halyna, Mariia, Daryna) — вигадані.
   Діалоги — репліками в body (D-056), без звуку (D-055 п. 4). Зображень немає (пропозиція images-* — в inbox).
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: draft. 7 уроків (6 + фінал). Будова — за розділами 9 кл. (e9s5).
   Перевірка: node tools/validate.mjs --section e10s5 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e10s5",
  grade: 10,
  weeks: [19, 22],
  title: "Painting and Ukrainian artists",
  why: "To talk about genres of painting and famous artists and their works. And to tell the story of an artist’s life and describe a visit to a gallery.",
  requires: ["e4s8l5", "e5s7l2", "e6s4l4", "e7s7l1", "e7s7l2", "e8s5l4", "e8s5l5", "e10s1l3"],
  meta: { author: "writer-e10s5", created: "2026-11-26", factcheck: null, teacher: null },
  badges: [
    { id: "e10s5boss", name: "Gallery guide", icon: "trophy", desc: "Finish the final lesson “Painting and Ukrainian artists”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e10s5l1",
      title: "Portrait, landscape, still life: genres of painting",
      short: "Genres",
      icon: "eye",
      status: "draft",
      why: "Paintings can show people, places or things. Learn the names of the main genres and the paints artists use.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Which one should I send?",
          body: `<p class="lead">Mariia posts three new paintings from her art club in Kharkiv.</p><p><i>1. My grandma, sitting by the window with a cup of tea.<br>2. The river near Grandma’s village on a snowy morning: trees, ice and a small wooden bridge.<br>3. Three red apples and an old blue jug on the kitchen table.</i></p><p><i>Which one should I send to the city art competition?</i></p><p>A person, a place, some things: does each kind of painting have a name?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Mariia’s first painting shows her grandma. What do we call a painting of a person?</p>`,
          opts: [
            "a landscape",
            "a portrait",
            "a still life"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A painting of a person is a <b>portrait</b>. The next screen has the other genres."
        },
        {
          type: "info",
          title: "Genres of painting",
          body: `<ul><li>a <b><u>por</u>trait</b> → a painting of a person</li><li>a <b>self-<u>por</u>trait</b> → a portrait of the artist, painted by the artist</li><li>a <b><u>land</u>scape</b> → a painting of the countryside: fields, trees, rivers, mountains</li><li>a <b><u>sea</u>scape</b> → a painting of the sea</li><li>a <b>still <u>life</u></b> → a painting of things: fruit, flowers, a jug, books</li><li>an <b><u>ab</u>stract</b> painting → colours and shapes, not real people or things</li></ul><p>These kinds of painting are called <b>genres</b>.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the descriptions.",
          left: ["a portrait", "a landscape", "a still life", "a seascape", "an abstract painting"],
          right: ["Grandma by the window", "a river, trees and a bridge in the snow", "three apples and a jug", "waves and ships far out at sea", "red circles and blue lines"],
          hint: "Which one has no real people or things? Which one is about things on a table?",
          fbOk: "Well done!",
          fbBad: "Look at the list “Genres of painting” again.",
          fbText: "A person → a <b>portrait</b>. The countryside → a <b>landscape</b>. Things on a table → a <b>still life</b>. The sea → a <b>seascape</b>. Only colours and shapes → an <b>abstract painting</b>."
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Halyna looks in a mirror and paints her own face. What is she painting?</p>`,
          opts: [
            "a self-portrait",
            "a still life",
            "a seascape"
          ],
          correct: 0,
          hint: "Who is in the painting? Who is painting it?",
          fbOk: "Right.",
          fbBad: "The artist paints herself. Which word starts with self-?",
          fbText: "A portrait of the artist, painted by the artist, is a <b>self-portrait</b>. A still life shows things, and a seascape shows the sea."
        },
        {
          type: "info",
          title: "Paints and brushes",
          body: `<ul><li>an <b><u>ar</u>tist</b> or a <b><u>pain</u>ter</b> → a person who paints pictures</li><li><b>oil paints</b> → thick paints; artists often use them on <b><u>can</u>vas</b>, a strong cloth</li><li><b><u>wa</u>tercolours</b> → paints that you mix with water, usually on paper</li><li>a <b><u>paint</u>brush</b> → you paint with it</li><li>an <b>exhi<u>bi</u>tion</b> → a show of paintings that people can visit</li></ul>`,
          cta: "Next"
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+por|trait", "+land|scape", "+can|vas", "ex|hi|+bi|tion"],
          hint: "Look at the underlined parts on the lists “Genres of painting” and “Paints and brushes”.",
          fbOk: "Yes!",
          fbBad: "In one word, the strong part isn’t at the start.",
          fbText: "<u>por</u>trait, <u>land</u>scape, <u>can</u>vas: the first part is strong. exhi<u>bi</u>tion: the third part is strong."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          body: `<p>Mariia writes about her paintings.</p>`,
          text: "I painted the portrait of Grandma with {*oil paints|watercolours} on canvas – the paint is really thick. For the snowy river, I used {*watercolours|oil paints}: I mixed the paints with water and painted on paper.",
          hint: "Thick paint on canvas? Paint mixed with water?",
          fbOk: "Exactly.",
          fbBad: "Look at the list “Paints and brushes” again.",
          fbText: "Thick paints on canvas → <b>oil paints</b>. Paints mixed with water, on paper → <b>watercolours</b>."
        },
        {
          type: "pick",
          sk: "vocab",
          title: "Find the mistake.",
          body: `<p>One word in Mariia’s message is wrong.</p>`,
          text: "My third painting shows three red apples and an old blue jug. My art teacher says it’s my best [portrait].",
          hint: "Apples and a jug: is it a painting of a person?",
          fbOk: "Good eye!",
          fbBad: "Look at the second sentence. Which genre shows things?",
          fbText: "Apples and a jug are things, so it’s not a <s>portrait</s>, but a <b>still life</b>: “it’s my best still life”."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Mariia’s third painting shows three apples and a jug on a table.</p>`,
          before: "It’s a",
          after: "life.",
          answer: "still",
          hint: "A painting of things: a … life.",
          fbOk: "Well done!",
          fbBad: "Look at the list “Genres of painting”: a … life.",
          fbText: "A painting of things is a <b>still life</b>. The plural is <i>still lifes</i>."
        },
        {
          type: "gaps",
          sk: "read",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana answers Mariia.</p>`,
          text: "Send the {*portrait|landscape} of your grandma! People always love faces. I like your {*landscape|still life} with the snowy river too. I’m not very good at people, so I usually paint {*seascapes|self-portraits}: every July I paint the sea in Odesa.",
          hint: "Grandma is a person. The river is the countryside. Oksana isn’t good at people.",
          fbOk: "Exactly.",
          fbBad: "A person, the countryside, the sea: which genre is each one?",
          fbText: "Grandma → a <b>portrait</b>. The snowy river → a <b>landscape</b>. The sea in Odesa → <b>seascapes</b>. A self-portrait shows a person, and Oksana isn’t good at people."
        }
      ],
      outro: {
        text: "Portraits, landscapes, still lifes: every genre shows the world in a different way.",
        learned: [
          "Name genres of painting: a portrait, a landscape, a still life.",
          "Say what a painting shows.",
          "Talk about paints: oil paints and watercolours."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e10s5l2",
      title: "Famous artists and their paintings",
      short: "Famous paintings",
      icon: "star",
      status: "draft",
      why: "Some paintings are famous all over the world. Learn about two great English painters and say who painted what and when.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Can you guess the winner?",
          body: `<p class="lead">Emma writes to Oksana.</p><p><i>In 2005, a BBC radio programme asked people: “What is the greatest painting in Britain?” Two paintings by English artists came first and second. Next month, our art teacher, Mr Hill, is taking us to the National Gallery in London to see them both!</i></p><p>Which paintings were they, and who painted them?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>What do you think the winner shows?</p>`,
          opts: [
            "an old ship on a river at sunset",
            "a portrait of a queen",
            "an abstract painting"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "The winner was <b>The Fighting Temeraire</b> by J. M. W. Turner. It shows an old warship on the River Thames. Read more on the next screen."
        },
        {
          type: "info",
          title: "Turner and Constable",
          body: `<p><b>J. M. W. Turner</b> (1775–1851) was an English painter who loved light, the sea and the sky. His <b>The Fighting Temeraire</b> was first shown in 1839. In it, a small steam boat is pulling an old warship along the River Thames for the last time. The sun is setting.</p><p><b>John Constable</b> (1776–1837) painted the English countryside. <b>The Hay Wain</b> (1821) shows a farm cart in a river. (A <i>wain</i> is an old word for a cart.)</p><p>Both paintings are in the <b>National Gallery</b> in London.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Who painted The Hay Wain?</p>`,
          opts: [
            "J. M. W. Turner",
            "Mr Hill",
            "John Constable"
          ],
          correct: 2,
          hint: "Who painted the English countryside and a farm cart?",
          fbOk: "Right.",
          fbBad: "Look at the last screen: who painted the farm cart?",
          fbText: "<b>John Constable</b> painted The Hay Wain in 1821. Turner painted The Fighting Temeraire."
        },
        {
          type: "info",
          title: "It was painted by…",
          body: `<ul><li>Turner <b>painted</b> The Fighting Temeraire. → The person is more important.</li><li>The Fighting Temeraire <b>was painted by</b> Turner. → The painting is more important.</li></ul><p>This is the Past Simple passive: <b>was / were</b> + the third form (+ <b>by</b> + the person).</p><ul><li>The Hay Wain <b>was painted</b> in 1821.</li><li>Both paintings <b>are kept</b> in the National Gallery.</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with the Past Simple passive.",
          body: `<p>Mr Hill tells the class about The Hay Wain.</p>`,
          text: "The Hay Wain {*was painted|painted} by John Constable. It {*was shown|was show} at an exhibition in London in 1821, but nobody bought it. Later, it {*was given|was give} a gold medal in Paris.",
          hint: "was + the third form: paint – painted, show – shown, give – given.",
          fbOk: "Yes!",
          fbBad: "The painting didn’t do it: it was + the third form.",
          fbText: "It <b>was painted</b> by Constable. It <b>was shown</b> in 1821. It <b>was given</b> a gold medal. show – showed – <b>shown</b>, give – gave – <b>given</b>."
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          left: ["The Hay Wain", "The Fighting Temeraire", "John Constable lived", "J. M. W. Turner lived"],
          right: ["was painted in 1821.", "was first shown in 1839.", "from 1776 to 1837.", "from 1775 to 1851."],
          hint: "Look at the screen “Turner and Constable” again. Which artist died first?",
          fbOk: "Well done!",
          fbBad: "Look at the dates on the screen “Turner and Constable”.",
          fbText: "The Hay Wain – <b>1821</b>. The Fighting Temeraire – first shown in <b>1839</b>. Constable – <b>1776–1837</b>. Turner – <b>1775–1851</b>."
        },
        {
          type: "info",
          title: "Famous for…",
          body: `<ul><li>Turner <b>is famous for</b> his paintings of light and the sea.</li><li>Constable <b>is known for</b> his landscapes.</li><li>a <b><u>mas</u>terpiece</b> → a very great painting, often an artist’s best work</li></ul><p>Turner is on the Bank of England £20 note. Since 2020, the note has shown his face and The Fighting Temeraire.</p>`,
          cta: "Next"
        },
        {
          type: "pick",
          sk: "vocab",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s message is wrong.</p>`,
          text: "Turner is famous [of] his paintings of the sea and the sky. You can see his face on the £20 note!",
          hint: "famous … his paintings: which little word?",
          fbOk: "Good eye!",
          fbBad: "Look at the screen “Famous for…”.",
          fbText: "Not <s>famous of</s>, but <b>famous for</b> his paintings."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Emma writes a caption for her class poster.</p>`,
          tiles: ["The Hay Wain", "was painted", "by", "John Constable", "in 1821"],
          extra: ["painted"],
          answer: [
            "The Hay Wain was painted by John Constable in 1821.",
            "The Hay Wain was painted in 1821 by John Constable.",
            "In 1821 The Hay Wain was painted by John Constable."
          ],
          hint: "Start with the painting. Then was + the third form.",
          fbOk: "Well done!",
          fbBad: "The painting is first, then was painted by…",
          fbText: "<b>The Hay Wain was painted by John Constable in 1821.</b> The passive: was + the third form + by."
        },
        {
          type: "gaps",
          sk: "read",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma’s class poster about the two paintings.</p>`,
          text: "Both of these {*masterpieces|portraits} hang in the National Gallery in London. The Fighting Temeraire {*was painted|painted} by Turner, who is famous {*for|of} his skies. In 2005, people {*voted|were voted} for it as the greatest painting in Britain.",
          hint: "Great paintings of a ship and a cart. The painting didn’t paint itself. famous …? Who voted?",
          fbOk: "Exactly.",
          fbBad: "Neither painting shows a person. was painted by… famous for… People did the voting.",
          fbText: "Very great paintings → <b>masterpieces</b> (they aren’t portraits). It <b>was painted</b> by Turner. Famous <b>for</b>. People <b>voted</b> for it: they did it, so it isn’t passive."
        }
      ],
      outro: {
        text: "The Fighting Temeraire and The Hay Wain: two English masterpieces in one gallery.",
        learned: [
          "Say who painted a famous painting and when.",
          "Use the passive: It was painted by…",
          "Say what an artist is famous for."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e10s5l3",
      title: "Ukrainian artists and their works",
      short: "Ukrainian artists",
      icon: "leaf",
      status: "draft",
      why: "Ukraine has great artists, from village painters to famous portrait painters. Learn about three of them and their works.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Who should be on the poster?",
          body: `<p class="lead">Oksana writes to the English club.</p><p><i>Let’s make a poster: “Ukrainian artists the world should know”. I’m writing about Kateryna Bilokur. She never went to art school, but her flowers are amazing! Mariia is choosing Maria Prymachenko, and Andrii wants Oleksandr Murashko.</i></p><p>What do you know about these three artists?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Kateryna Bilokur never went to art school. How do you think she learnt to paint?</p>`,
          opts: [
            "She studied in Paris.",
            "She taught herself.",
            "Turner was her teacher."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Yes, she <b>taught herself</b>: she was a <b>self-taught</b> artist. Read more on the next screen."
        },
        {
          type: "info",
          title: "Kateryna Bilokur (1900–1961)",
          body: `<p>Kateryna Bilokur was born in 1900 in the village of Bohdanivka, which is now in the Kyiv region. She was a <b>folk artist</b>: an artist from a village who works in the traditions of her people.</p><p>Her parents didn’t want her to paint, and an art school in Myrhorod didn’t accept her. So she <b>taught herself</b>. She is famous for her <b>paintings of flowers</b>. Her first exhibition opened in Poltava in 1940.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Why did Kateryna Bilokur teach herself?</p>`,
          opts: [
            "Her parents didn’t want her to paint, and an art school didn’t accept her.",
            "She didn’t like the teachers in Kyiv.",
            "Her first exhibition opened in Poltava."
          ],
          correct: 0,
          hint: "Look at the second part of the last screen: what happened with her parents and the school?",
          fbOk: "Right.",
          fbBad: "Read the last screen again: her parents and an art school in Myrhorod.",
          fbText: "Her parents didn’t want her to paint, and the school in Myrhorod <b>didn’t accept her</b>. So she <b>taught herself</b>. The exhibition in Poltava came much later, in 1940."
        },
        {
          type: "info",
          title: "Maria Prymachenko (1909–1997)",
          body: `<p>Maria Prymachenko lived almost all her life in the village of Bolotnia, near Kyiv. She was a self-taught folk artist too.</p><p>She painted bright, <b>fantastic animals</b> and flowers, inspired by nature and Ukrainian <b>folk tales</b>: a blue bull, birds and beasts that don’t exist. Her paintings are full of colour.</p><p>In February 2022, during Russia’s full-scale invasion, a museum in Ivankiv that kept some of her works burned.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Mariia writes about Maria Prymachenko for the poster.</p>`,
          text: "Maria Prymachenko was a {*self-taught|famous portrait} artist. She painted {*fantastic animals|abstract shapes} in bright colours. Many of her ideas came from nature and Ukrainian {*folk tales|museums}.",
          hint: "Did anybody teach her? What did she paint? Where did her ideas come from?",
          fbOk: "Well done!",
          fbBad: "Look at the screen about Maria Prymachenko again.",
          fbText: "She was a <b>self-taught</b> folk artist. She painted <b>fantastic animals</b>, like a blue bull. Her ideas came from nature and <b>folk tales</b>."
        },
        {
          type: "info",
          title: "Oleksandr Murashko (1875–1919)",
          body: `<p>Oleksandr Murashko was born in Kyiv. He studied and worked in St Petersburg, Munich and Paris.</p><p>He was a famous <b>portrait painter</b>. His <b>Girl in a Red Hat</b> (1902–1903) is in the National Art Museum of Ukraine in Kyiv. His painting <b>Carousel</b> (1906) won a gold medal at an exhibition in Munich.</p>`,
          cta: "Next"
        },
        {
          type: "pick",
          sk: "cult",
          title: "Find the mistake.",
          body: `<p>One word in Andrii’s note for the poster is wrong.</p>`,
          text: "Oleksandr Murashko was born in [!Kyiv]. He was a famous [!portrait] painter. His Girl in a Red Hat is in the National Art Museum of Ukraine in [London].",
          hint: "Which city is the National Art Museum of Ukraine in?",
          fbOk: "Good eye!",
          fbBad: "Read the screen about Murashko again: where is the museum?",
          fbText: "The National Art Museum of Ukraine is in <b>Kyiv</b>, not in <s>London</s>. Murashko was born in Kyiv, and he was a famous portrait painter."
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the halves.",
          left: ["Kateryna Bilokur", "Maria Prymachenko", "Oleksandr Murashko", "John Constable"],
          right: ["had her first exhibition in Poltava in 1940.", "painted a blue bull and other fantastic animals.", "painted Girl in a Red Hat.", "painted The Hay Wain."],
          hint: "Who painted fantastic animals? Who painted a farm cart in a river?",
          fbOk: "Well done!",
          fbBad: "Look at the screens about the three Ukrainian artists again.",
          fbText: "<b>Bilokur</b> – Poltava, 1940. <b>Prymachenko</b> – a blue bull. <b>Murashko</b> – Girl in a Red Hat. <b>Constable</b> – The Hay Wain."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Nobody taught Maria Prymachenko to paint.</p>`,
          before: "She taught",
          after: "to paint.",
          answer: "herself",
          hint: "She taught … : she → her…",
          fbOk: "Exactly.",
          fbBad: "Kateryna Bilokur taught … too. One word: her + self.",
          fbText: "She taught <b>herself</b> to paint: she was <b>self-taught</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana finishes her part of the poster.</p>`,
          text: "Kateryna Bilokur {*taught|teached} herself to paint. Like Maria Prymachenko, she was a {*folk|abstract} artist. Her first {*exhibition|masterpiece} opened in Poltava in 1940. Today she is famous {*for|of} her paintings of flowers.",
          hint: "teach – taught – taught. A village artist. A show of paintings opened. famous …?",
          fbOk: "Exactly.",
          fbBad: "teach is irregular. A show of paintings opens. famous for…",
          fbText: "She <b>taught</b> herself (teach – taught – taught). She was a <b>folk</b> artist. Her first <b>exhibition</b> opened in 1940. She is famous <b>for</b> her flowers."
        }
      ],
      outro: {
        text: "Bilokur’s flowers, Prymachenko’s fantastic animals, Murashko’s portraits: Ukrainian art the world should know.",
        learned: [
          "Name three Ukrainian artists and their works.",
          "Say what an artist is famous for.",
          "Use folk artist, self-taught and taught herself."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e10s5l4",
      title: "She had been painting for years: the Past Perfect Continuous",
      short: "Past Perfect Continuous",
      icon: "path",
      status: "draft",
      why: "Sometimes an action went on for a long time before something else happened in the past. The Past Perfect Continuous shows how long.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "How long had she been painting?",
          body: `<p class="lead">Oksana finishes her poster about Kateryna Bilokur.</p><p><i>By 1940, Kateryna Bilokur had been painting for many years, but almost nobody outside her village knew her work. That spring, she heard a song on the radio. She wrote to the singer, Oksana Petrusenko, and sent a small painting on a piece of canvas with the letter. The singer showed it to her friends, and later that year, Bilokur’s first exhibition opened in Poltava.</i></p><p>Which action went on for a long time before 1940?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“By 1940, she had been painting for many years.” What does it mean?</p>`,
          opts: [
            "She started painting before 1940 and was still painting in 1940.",
            "She started painting in 1940.",
            "She stopped painting many years before 1940."
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "She started years before 1940, and she was still painting in 1940. <b>had been painting</b> shows an action that went on up to a time in the past."
        },
        {
          type: "info",
          title: "had been + -ing",
          body: `<p>An action started before a time in the past and went on up to that time:</p><p>painting… painting… painting… → <b>1940</b></p><p>By 1940, she <b>had been painting</b> for many years.</p><p><b>had been</b> + the <b>-ing</b> form. This is the Past Perfect Continuous.</p><ul><li><b>for</b> + a period: for two hours, for years</li><li><b>since</b> + a starting point: since ten o’clock, since 1934</li></ul><p>I<b>’d been</b> painting = I <b>had been</b> painting.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with the Past Perfect Continuous.",
          body: `<p>Mariia’s Saturday:</p><ul><li>10.00 am – Mariia starts drawing a comic on her tablet.</li><li>1.00 pm – the battery dies.</li></ul>`,
          text: "When the battery died, Mariia {*had been drawing|has been drawing} for three hours. She {*had been working|had been work} on the same page since ten o’clock.",
          hint: "It’s about the past: had, not has. Then been + the -ing form.",
          fbOk: "Yes!",
          fbBad: "The battery died in the past: had been + -ing.",
          fbText: "She <b>had been drawing</b> for three hours. She <b>had been working</b> on the page since ten. had been + the <b>-ing</b> form."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Taras got to a photo exhibition in Lviv at nine, but the doors opened at ten. He writes: “When the doors finally opened, …”</p>`,
          tiles: ["I", "had", "been", "waiting", "for an hour"],
          extra: ["was"],
          answer: ["I had been waiting for an hour.", "For an hour I had been waiting."],
          hint: "Start with I. Then had + been + the -ing form.",
          fbOk: "Well done!",
          fbBad: "had been + -ing: I had been…",
          fbText: "<b>I had been waiting for an hour.</b> He waited from nine to ten, up to the moment the doors opened."
        },
        {
          type: "info",
          title: "was waiting or had been waiting?",
          body: `<ul><li>At ten o’clock, Taras <b>was waiting</b> at the door. → The Past Continuous: in progress at that moment.</li><li>At ten o’clock, he <b>had been waiting</b> for an hour. → The Past Perfect Continuous: how long, up to that moment.</li></ul><p>With <b>for</b> or <b>since</b> up to a moment in the past, use <b>had been</b> + <b>-ing</b>.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Halyna started painting at nine. Oksana came at twelve.</p><p>When Oksana came, Halyna …</p>`,
          opts: [
            "has been painting for three hours.",
            "was painting for three hours.",
            "had been painting for three hours."
          ],
          correct: 2,
          hint: "How long, up to the moment Oksana came?",
          fbOk: "Right.",
          fbBad: "for three hours, up to a moment in the past: had been + -ing.",
          fbText: "She <b>had been painting</b> for three hours: from nine up to twelve. <i>has been</i> is about now, and <i>was painting</i> doesn’t go with <i>for three hours</i> up to a moment."
        },
        {
          type: "info",
          title: "had painted or had been painting?",
          body: `<ul><li>How long? → She <b>had been painting</b> all morning. Her hands were covered in paint.</li><li>How many? A finished result → She <b>had painted</b> three pictures by lunch.</li><li>Verbs like <b>know, like, believe, understand</b> don’t usually take -ing: They <b>had known</b> each other for years.</li></ul><p>With <b>for</b> and an action verb, both are often fine: she had painted / had been painting for years.</p>`,
          cta: "Next"
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Before her first exhibition, Kateryna Bilokur … for many years.</p>`,
          opts: [
            "had been paint",
            "had been painting",
            "has been painting",
            "had painted"
          ],
          correct: [1, 3],
          hint: "Look at the last screen: with for and an action verb…",
          fbOk: "Exactly.",
          fbBad: "Two answers are correct. Which forms are past?",
          fbText: "Both <b>had been painting</b> and <b>had painted</b> are correct with <i>for many years</i>: the first shows the activity, the second shows it as complete. Not <s>has been painting</s> (that’s about now), not <s>had been paint</s>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Mariia writes about her art club.</p>`,
          text: "By June, our club {*had painted|had been painting} twelve pictures for the exhibition. Our teacher and I {*had known|had been knowing} each other for two years. On the last night, I was so tired because I {*had been drawing|have been drawing} all evening.",
          hint: "How many pictures? Is know an action? A story in the past?",
          fbOk: "Well done!",
          fbBad: "A number → had + the third form. know → no -ing. The story is in the past.",
          fbText: "Twelve pictures – a finished result: <b>had painted</b>. know doesn’t take -ing: <b>had known</b>. How long, in the past: <b>had been drawing</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of Taras’s message is wrong.</p>`,
          text: "I [!met Ostap] at the exhibition. We [had been knowing] each other since primary school, so we [!went round] the photos together.",
          hint: "Is know an action verb?",
          fbOk: "Good eye!",
          fbBad: "Look at the verb know. Does it take -ing?",
          fbText: "Not <s>had been knowing</s>, but <b>had known</b>: know doesn’t usually take -ing. “We had known each other since primary school.”"
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>The last part of Oksana’s poster.</p>`,
          text: "Kateryna Bilokur {*had been painting|has been painting} for years before anyone outside her village saw her work. She {*had been living|had been live} in Bohdanivka all her life. Her first exhibition opened in 1940. There were only eleven paintings in it, and she {*had painted|had been painting} all of them at home.",
          hint: "A story in the past. had been + the -ing form. Eleven finished paintings?",
          fbOk: "Exactly.",
          fbBad: "Before a moment in the past: had been + -ing. Finished pictures → had + the third form.",
          fbText: "She <b>had been painting</b> for years. She <b>had been living</b> in Bohdanivka (<i>had lived</i> is also correct). Eleven finished paintings → she <b>had painted</b> all of them."
        }
      ],
      outro: {
        text: "had been + -ing: how long an action went on before a moment in the past.",
        learned: [
          "Form the Past Perfect Continuous: had been + -ing.",
          "Say how long an action had gone on before a moment in the past.",
          "Choose between had painted and had been painting."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e10s5l5",
      title: "A visit to a museum, an exhibition or a gallery",
      short: "At the gallery",
      icon: "city",
      status: "draft",
      why: "Before you visit a gallery, it helps to know the signs and the words. Then read about a class trip and say what you think.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Ready for the trip?",
          body: `<p class="lead">Emma writes to Oksana.</p><p><i>Tomorrow Mr Hill is taking our class to the National Gallery! We’re meeting at the station at 8.30 am. I’ve already checked the opening hours and the rules on the website. I can’t wait to see The Hay Wain!</i></p><p>What do you need to know before you visit a gallery?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>In a gallery, Emma sees a sign: <b>No flash photography.</b> What does it mean?</p>`,
          opts: [
            "You can’t take any photos.",
            "You can take photos, but without a flash.",
            "You must take photos."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "You can take photos, but <b>without a flash</b>: strong light can be bad for old paintings. More signs are on the next screen."
        },
        {
          type: "info",
          title: "At the gallery",
          body: `<ul><li><b>opening hours</b> → the times when a gallery is open</li><li>a <b>guided tour</b> → a visit with a <b>guide</b>, who tells you about the paintings</li><li><b>on display</b> → in a place where people can see it</li><li>a <b>gift shop</b> → a shop with postcards, books and souvenirs</li><li>a <b>queue</b> → a line of people who are waiting</li></ul><p>Signs: <b>Do not touch.</b> · <b>No flash photography.</b> · <b>No food or drink.</b></p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the signs and the meanings.",
          left: ["Do not touch.", "No flash photography.", "No food or drink.", "Guided tour: 11 am", "Gift shop →"],
          right: ["Don’t put your hands on the paintings.", "Take photos without a flash.", "Don’t eat or drink here.", "A guide shows visitors round at eleven.", "This way to the postcards and souvenirs."],
          hint: "Which one is about a guide? Which one is about postcards?",
          fbOk: "Well done!",
          fbBad: "Look at the screen “At the gallery” again.",
          fbText: "<b>Do not touch</b> → hands off the paintings. <b>No flash photography</b> → photos, but without a flash. <b>No food or drink</b> → don’t eat here. <b>Guided tour</b> → a guide. <b>Gift shop</b> → postcards and souvenirs."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Lots of people are waiting outside the gallery, one after another.</p>`,
          before: "There’s a long",
          after: "outside.",
          answer: ["queue", "line"],
          hint: "A line of people who are waiting: a q…",
          fbOk: "Right.",
          fbBad: "Look at the screen “At the gallery”: a line of people who are waiting.",
          fbText: "A line of people who are waiting is a <b>queue</b>. (Americans usually say <i>line</i>.)"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Mr Hill tells the class about the plan.</p>`,
          text: "I’ve checked the {*opening hours|gift shop}, so we know when the gallery opens. At eleven, we’ve got a {*guided tour|queue}: a {*guide|painter} will tell us about the paintings. The Hay Wain is on {*display|touch} in one of the big rooms.",
          hint: "When is it open? A visit with a guide. Who tells you about the paintings? Where people can see it: on …",
          fbOk: "Exactly.",
          fbBad: "Look at the screen “At the gallery” again.",
          fbText: "The <b>opening hours</b> tell you when it opens. A <b>guided tour</b> is a visit with a <b>guide</b>. The painting is <b>on display</b>: people can see it."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: A day at the National Gallery, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i>We had been looking forward to this trip for weeks, and on Thursday it finally happened. Our train arrived in London at ten, and by the time we got to the gallery, a long queue had formed outside. We had been standing in the queue for twenty minutes when Mr Hill found our guide, a friendly young woman called Priya. She took us up the stairs and into a big, bright room.</i></p><p><i>I had seen The Hay Wain in books many times, but I wasn’t ready for its size: it’s nearly two metres wide! Priya told us that when Constable first showed it, in 1821, nobody bought it. Later, in Paris, it won a gold medal. Now it’s one of the most famous paintings in Britain.</i></p><p>Why was Emma surprised when she saw The Hay Wain?</p>`,
          opts: [
            "Nobody had bought it.",
            "It was much bigger than she had thought.",
            "It was in a big, bright room."
          ],
          correct: 1,
          hint: "Read the second part. What wasn’t Emma ready for?",
          fbOk: "Right.",
          fbBad: "Emma had seen it in books. What was different in the gallery?",
          fbText: "“I wasn’t ready for its <b>size</b>: it’s nearly two metres wide!” In books, the painting looks small."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: A day at the National Gallery, part 2 of 3",
          title: "Choose all the correct answers.",
          body: `<p><i>Next, Priya led us to The Fighting Temeraire. She told us that in 2005, people in Britain had voted for it as the greatest painting in the country. I could see why. The old ship looks like a ghost, and the sky looks as if it’s on fire. Sam, who had been yawning all morning, suddenly started asking questions!</i></p><p><i>After the tour, we had an hour to explore on our own. My friend Megan and I had been walking around for half an hour when we found a room full of portraits. We sat on a bench and drew our favourite faces in our sketchbooks. A guard came over, looked at our drawings and smiled.</i></p><p>Which sentences are true?</p>`,
          opts: [
            "People in Britain voted for The Fighting Temeraire in 2005.",
            "Sam wasn’t very interested at the start of the day.",
            "Emma and Megan found the portraits straight away.",
            "Emma and Megan painted the portraits in oil paints."
          ],
          correct: [0, 1],
          hint: "Two sentences are true. What had Sam been doing all morning? How long had the girls been walking?",
          fbOk: "Exactly.",
          fbBad: "Read part 2 again: the vote, Sam, the half hour, the sketchbooks.",
          fbText: "People <b>voted for</b> it in 2005. Sam <b>had been yawning</b> all morning, so he wasn’t very interested at first. The girls had been walking for half an hour before they found the portraits, and they drew them in their sketchbooks."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: A day at the National Gallery, part 3 of 3",
          title: "Read and choose.",
          body: `<p><i>Before we left, we went to the gift shop. I bought a postcard of The Hay Wain for my penfriend Oksana in Ukraine. She had been telling me about Kateryna Bilokur for months. So I made her a promise: one day I’ll see Bilokur’s flowers in Kyiv, and she’ll see Constable’s cart in London.</i></p><p><i>Was the trip worth it? In my opinion, yes! A painting in a book is just a picture. In a gallery, it’s an experience: you see the real size, the real colours, even the brushstrokes. On the train home, everybody was talking about their favourite painting, even Sam. My only advice for your trip: wear comfortable shoes!</i></p><p>What is Emma’s opinion of the trip?</p>`,
          opts: [
            "Paintings in books are better than real ones.",
            "It was too long, and she was bored.",
            "It was worth it: a real painting is different from a picture in a book."
          ],
          correct: 2,
          hint: "Find “In my opinion” in part 3.",
          fbOk: "Yes!",
          fbBad: "Read the second part of part 3 again.",
          fbText: "“In my opinion, <b>yes</b>!” In a gallery, you see the real size and colours: “it’s an experience”."
        },
        {
          type: "order",
          sk: "read",
          title: "Put the sentences in order.",
          body: `<p>What happened on Emma’s trip?</p>`,
          items: [
            "The class stood in a queue outside the gallery.",
            "Priya showed them The Hay Wain.",
            "They saw The Fighting Temeraire.",
            "Emma and Megan drew portraits in their sketchbooks.",
            "Emma bought a postcard for Oksana."
          ],
          shuffle: [3, 0, 4, 2, 1],
          hint: "What happened before the guided tour? What happened before they left?",
          fbOk: "Good eye!",
          fbBad: "The queue came first. The gift shop came last.",
          fbText: "The queue → The Hay Wain → The Fighting Temeraire → the portraits → the gift shop."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana answers Emma.</p>`,
          text: "Thanks for the postcard! When it arrived, I {*had been waiting|have been waiting} for your story for a week. Last month, my class went to an {*exhibition|gift shop} of folk art in Poltava. We had a {*guided tour|display}, and the {*guide|queue} told us about Bilokur. In my {*opinion|think}, her flowers are even better in real life!",
          hint: "When it arrived: a moment in the past. A show of paintings. A visit with a guide. In my …",
          fbOk: "Well done!",
          fbBad: "had been + -ing up to a past moment. A tour with a guide. In my opinion…",
          fbText: "I <b>had been waiting</b> for a week, up to the moment it arrived. An <b>exhibition</b>, a <b>guided tour</b>, the <b>guide</b>. <b>In my opinion</b>…"
        }
      ],
      outro: {
        text: "Check the opening hours, join a guided tour, read the signs and enjoy the real thing.",
        learned: [
          "Understand gallery words and signs: opening hours, a guided tour, Do not touch.",
          "Follow a story about a gallery visit in the right order.",
          "Say what you think about a visit: In my opinion…"
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e10s5l6",
      title: "My favourite painting: describing a picture",
      short: "Describing a picture",
      icon: "voice",
      status: "draft",
      why: "To talk about a painting, say what is where and what is happening. Then say what you think about it.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "What’s in the painting?",
          body: `<p class="lead">Oksana describes Halyna’s new painting to Emma.</p><p><i>Halyna has painted the river near our village on a summer evening. In the foreground, two children are fishing from the old bridge. In the background, there are sunflower fields and a white church. The sky is pink: the sun is setting. In my opinion, it’s her best painting!</i></p><p>How does Oksana say where things are?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“In the foreground, two children are fishing.” Where are the children?</p>`,
          opts: [
            "far away, at the back of the painting",
            "at the front of the painting, near us",
            "at the top of the painting"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>In the foreground</b> = at the front, near us. The sunflower fields are <b>in the background</b>: far away."
        },
        {
          type: "info",
          title: "Where in the painting?",
          body: `<ul><li><b>in the <u>fore</u>ground</b> → at the front, near you</li><li><b>in the <u>back</u>ground</b> → at the back, far away</li><li><b>in the centre</b> / <b>in the middle</b></li><li><b>on the left</b> · <b>on the right</b></li><li><b>at the top</b> · <b>at the bottom</b></li></ul><p>Careful with the little words: <b>in</b> the foreground, but <b>on</b> the left and <b>at</b> the top.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          body: `<p>Mariia describes her painting of a rainy evening in Kharkiv.</p>`,
          text: "{*In|On} the foreground, there’s a girl with a red umbrella. {*On|In} the left, there’s a tram stop. There are some tall buildings {*in|at} the background.",
          hint: "in the foreground, on the left, in the background.",
          fbOk: "Yes!",
          fbBad: "Look at the screen “Where in the painting?” again.",
          fbText: "<b>In</b> the foreground. <b>On</b> the left. <b>In</b> the background."
        },
        {
          type: "info",
          title: "What is happening?",
          body: `<p>To describe a painting, use <b>there is / there are</b> for things and the <b>Present Continuous</b> for actions:</p><ul><li><b>There’s</b> a bridge in the centre. <b>There are</b> two boats on the right.</li><li>Two children <b>are fishing</b>. The sun <b>is setting</b>.</li></ul><p>Then give your opinion: <b>It looks</b> calm. <b>I think</b>… <b>In my opinion</b>… <b>It reminds me of</b> my grandma’s village.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Daryna describes a painting by her art teacher.</p>`,
          text: "There {*is|are} a big blue jug in the centre. There {*are|is} three lemons next to it. On the left, a black cat {*is sitting|is sit} on a chair and {*looking|look} at the lemons.",
          hint: "One jug or three lemons? Then is + the -ing form.",
          fbOk: "Exactly.",
          fbBad: "One thing → there is. More than one → there are. Action → is + -ing.",
          fbText: "There <b>is</b> a jug. There <b>are</b> three lemons. The cat <b>is sitting</b> and <b>looking</b>: is + the -ing form."
        },
        {
          type: "build",
          sk: "write",
          title: "Put the words in order.",
          body: `<p>Oksana describes Halyna’s painting: the fields are far away.</p>`,
          tiles: ["in the background", "there are", "sunflower fields"],
          extra: ["there is"],
          answer: ["In the background there are sunflower fields.", "There are sunflower fields in the background."],
          hint: "Fields: one or more than one? Far away: in the …",
          fbOk: "Well done!",
          fbBad: "Fields → there are. Far away → in the background.",
          fbText: "<b>In the background, there are sunflower fields.</b> Or: There are sunflower fields in the background."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Mariia’s description is wrong.</p>`,
          text: "It’s a rainy evening in Kharkiv. In the centre, a woman [are] waiting for a tram. On the right, there are two boys with a dog.",
          hint: "One woman: is or are?",
          fbOk: "Good eye!",
          fbBad: "Look at the second sentence. Who is waiting?",
          fbText: "Not <s>a woman are waiting</s>, but <b>a woman is waiting</b>: one person → is + -ing."
        },
        {
          type: "sort",
          sk: "func",
          title: "Sort the sentences.",
          body: `<p>Is it a description or an opinion?</p>`,
          bins: ["Describing the painting", "Giving an opinion"],
          items: [
            ["On the right, there’s a small boat.", 0],
            ["Two women are walking by the river.", 0],
            ["In the background, there are mountains.", 0],
            ["In my opinion, the colours are wonderful.", 1],
            ["It reminds me of my grandma’s village.", 1],
            ["I think it’s a very calm painting.", 1]
          ],
          hint: "What is in the painting? What do you feel or think?",
          fbOk: "Exactly.",
          fbBad: "Look for In my opinion, I think, It reminds me of.",
          fbText: "Where things are and what people are doing → a <b>description</b>. <i>In my opinion, I think, It reminds me of</i> → an <b>opinion</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing words.",
          body: `<p>Emma describes The Hay Wain. Use the Present Continuous of <i>cross</i>.</p>`,
          before: "In the centre, a farm cart",
          after: "the river.",
          answer: ["is crossing", "’s crossing"],
          contractions: true,
          hint: "is + the -ing form of cross.",
          fbOk: "Right.",
          fbBad: "Two words: is and the -ing form.",
          fbText: "A farm cart <b>is crossing</b> the river: an action in the painting → the Present Continuous."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes about her favourite painting for the English club.</p>`,
          text: "My favourite painting is Halyna’s summer evening by the river. In the {*foreground|background}, near us, two children {*are fishing|fishing} from the bridge. Far away, {*in|on} the background, there {*are|is} sunflower fields. In my {*opinion|think}, it’s the most beautiful place in the world.",
          hint: "Near us → in the … . An action → are + -ing. Fields: there is or there are?",
          fbOk: "Well done!",
          fbBad: "Near us – foreground, far away – in the background. are fishing. there are fields.",
          fbText: "Near us → <b>in the foreground</b>. Two children <b>are fishing</b>. Far away → <b>in</b> the background. <b>There are</b> fields. <b>In my opinion</b>…"
        }
      ],
      outro: {
        text: "Where is it? What is happening? What do you think? Three questions for describing any painting.",
        learned: [
          "Say where things are in a painting: in the foreground, on the left.",
          "Describe a painting with there is / are and the Present Continuous.",
          "Give your opinion of a painting: In my opinion…"
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e10s5l7",
      title: "Our online exhibition",
      short: "Section final",
      icon: "trophy",
      status: "draft",
      boss: true,
      badge: "e10s5boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help with the exhibition?",
          body: `<p class="lead">The English club is making an online exhibition: “Art from Ukraine and Britain”.</p><p>Help Oksana, Mariia, Emma and Halyna write about genres, artists, a gallery visit and their favourite paintings. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Choose the correct answer.",
          body: `<p>Mariia’s new painting shows three lemons and a jug on a table. What is it?</p>`,
          opts: [
            "a landscape",
            "a portrait",
            "a still life"
          ],
          correct: 2,
          pre: "e10s5l1",
          fbOk: "Right.",
          fbBad: "Things on a table: which genre?",
          fbText: "Things on a table → a <b>still life</b>. A landscape shows the countryside, and a portrait shows a person."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 2",
          title: "Choose the correct answer.",
          body: `<p>Which painting did people in Britain vote the greatest painting in the country in 2005?</p>`,
          opts: [
            "The Fighting Temeraire",
            "The Hay Wain",
            "Girl in a Red Hat"
          ],
          correct: 0,
          pre: "e10s5l2",
          fbOk: "Yes!",
          fbBad: "Turner’s old warship came first.",
          fbText: "Turner’s <b>The Fighting Temeraire</b> came first, and Constable’s The Hay Wain came second. Girl in a Red Hat is by Murashko."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Fill in the gaps.",
          body: `<p>Emma writes about The Hay Wain.</p>`,
          text: "The Hay Wain {*was painted|painted} by John Constable in 1821. Constable is famous {*for|of} his landscapes.",
          pre: "e10s5l2",
          fbOk: "Well done!",
          fbBad: "The painting didn’t paint itself: was + the third form. famous …?",
          fbText: "It <b>was painted</b> by Constable: the passive. Famous <b>for</b> his landscapes."
        },
        {
          type: "match",
          sk: "cult",
          eyebrow: "Task 4",
          title: "Match the halves.",
          left: ["Kateryna Bilokur", "Maria Prymachenko", "Oleksandr Murashko"],
          right: ["had her first exhibition in Poltava in 1940.", "painted a blue bull and other fantastic animals.", "painted Girl in a Red Hat."],
          pre: "e10s5l3",
          fbOk: "Well done!",
          fbBad: "Who painted fantastic animals? Who was the portrait painter?",
          fbText: "<b>Bilokur</b> – Poltava, 1940. <b>Prymachenko</b> – a blue bull. <b>Murashko</b> – Girl in a Red Hat."
        },
        {
          type: "multi",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Choose all the correct answers.",
          body: `<p>Halyna started painting at ten. Oksana arrived at twelve.</p><p>When Oksana arrived, Halyna … for two hours.</p>`,
          opts: [
            "has been painting",
            "had painted",
            "was painting",
            "had been painting"
          ],
          correct: [1, 3],
          pre: "e10s5l4",
          fbOk: "Exactly.",
          fbBad: "Two answers are correct. With for and an action verb…",
          fbText: "<b>had been painting</b> and <b>had painted</b> are both correct with <i>for two hours</i>. Not <s>has been painting</s> (it’s about now), and <i>was painting</i> doesn’t go with <i>for two hours</i> up to a moment."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 6",
          title: "Fill in the gaps.",
          body: `<p>Mariia writes for the online exhibition.</p>`,
          text: "By the end of the day, I {*had painted|had been painting} three pictures for the exhibition. I {*had known|had been knowing} about Bilokur for years before I saw her paintings in real life.",
          pre: "e10s5l4",
          fbOk: "Right.",
          fbBad: "How many pictures? Is know an action?",
          fbText: "Three pictures – a finished result: <b>had painted</b>. know doesn’t take -ing: <b>had known</b>."
        },
        {
          type: "pick",
          sk: "gram",
          eyebrow: "Task 7",
          title: "Find the mistake.",
          body: `<p>One part of Emma’s story is wrong.</p>`,
          text: "We [have been standing] in the queue for twenty minutes when our guide [!found us]. Then she [!took us] to see The Hay Wain.",
          pre: "e10s5l5",
          fbOk: "Good eye!",
          fbBad: "The story is in the past: … been standing.",
          fbText: "Not <s>have been standing</s>, but <b>had been standing</b>: how long, up to a moment in the past."
        },
        {
          type: "build",
          sk: "write",
          eyebrow: "Task 8",
          title: "Put the words in order.",
          body: `<p>Oksana describes Halyna’s painting: a white church, on the left.</p>`,
          tiles: ["on the left", "there is", "a white church"],
          extra: ["there are"],
          answer: ["On the left there is a white church.", "There is a white church on the left."],
          pre: "e10s5l6",
          fbOk: "Well done!",
          fbBad: "One church → there is.",
          fbText: "<b>On the left, there is a white church.</b> Or: There is a white church on the left."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Task 9",
          title: "Complete the sentences.",
          body: `<p>Halyna writes about her favourite painting for the exhibition.</p>`,
          text: "My favourite painting is Mariia’s rainy evening in Kharkiv. In the centre, a woman {*is waiting|waiting} for a tram. {*On|In} the right, there are two boys with a dog. In my {*opinion|think}, the colours are wonderful.",
          pre: "e10s5l6",
          fbOk: "Exactly.",
          fbBad: "An action → is + -ing. on the right. In my opinion…",
          fbText: "A woman <b>is waiting</b>: the Present Continuous. <b>On</b> the right. <b>In my opinion</b>…"
        }
      ],
      outro: {
        text: "Genres, artists, a gallery visit and your own opinion: now you can talk about painting in English.",
        learned: [
          "Talk about genres of painting and famous artists.",
          "Tell an artist’s story with the Past Perfect Continuous.",
          "Describe a painting and give your opinion."
        ]
      }
    }
  ]
});
