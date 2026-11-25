/* Слід · Англійська мова, 5 клас — «My town or village» (e5s7)
   Програма: МП-ІМ (наказ МОН № 795 від 12.07.2021), 5 кл., с. 20 (розд. 4.2.1): тема «Рідне місто/село» — місцезнаходження,
   основні історичні та культурні відомості; підтема «Подорожі» — прогулянка містом/селом (поєднано планом, reports/verify/plan-eng-g5.md §4 п. 2–3);
   граматика (с. 21–22, розд. 4.4): there is/are, prepositions of place, imperatives for directions — за content/eng/plan.js:
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Концентрично спирається на 4 кл.: e4s1l4 (city, town, village), e4s2l2/l4/l5 (there is/are, next to, Is there…?), e4s7l2 (along, across).
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги, герої й мапа — власні (docs/design/english.md §8); герої й місця — як у 4 кл.
   Маршрут — «Go straight ahead» (CD straight; «go straight on» у вправах не даємо — pitfalls-content «Англійська» п. 11).
   Факти про І. Котляревського й «Енеїду» — ЕСУ + en/uk.wikipedia; форми й наголос — CD і OALD (URL — tasks/…/write-eng-g5-e5s7.md, «Нотатки агента»).
   Статус: verified (reports/verify/e5s7.md). 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e5s7 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e5s7",
  grade: 5,
  weeks: [22, 24],
  title: "My town or village",
  why: "To say what there is in your town or village. And to ask the way and give directions.",
  requires: ["e4s1l4", "e4s2l2", "e4s2l4", "e4s2l5", "e4s7l2"],
  meta: { author: "writer-e5s7", created: "2026-11-19", factcheck: "verifier-e5s7 (reports/verify/e5s7.md)", teacher: null },
  badges: [
    { id: "e5s7boss", name: "Young town guide", icon: "trophy", desc: "Finish the final lesson “My town or village”" }
  ],
  credits: [
    ["Map of the centre of Emma’s town (img/eng/e5s7/town-map.svg), own drawing for this lesson", "Slid authors (writer-e5s7)", "CC0 1.0", "https://github.com/kondolovskiy/slid/blob/main/img/eng/e5s7/town-map.svg"]
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e5s7l1",
      title: "Places in town: a library, a bank, a park",
      short: "Places",
      icon: "city",
      status: "verified",
      why: "Every town has a library, a bank and a park. Learn their names in English.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Where do they go in Poltava?",
          body: `<p class="lead">Oksana writes to Emma.</p><p><i>On Saturdays I go to Poltava with Mum. My aunt lives there. First, we go to the library. I take two books home. Then Mum goes to the bank. After that, we have ice cream in the park.</i></p><p>What can you do in each place?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Oksana takes two books home for a week. Then she brings them back. Where does she get the books?</p>`,
          opts: [
            "at the bookshop",
            "at the library",
            "at the bank"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "At the <b>library</b>, you take books home and bring them back. At the bookshop, you buy books. The next screen shows more places."
        },
        {
          type: "info",
          title: "Places in town",
          body: `<ul><li>a <b><u>li</u>brary</b> – you borrow books here</li><li>a <b>bank</b> – you get or keep money here</li><li>a <b>park</b> – trees and grass; you walk here</li><li>a <b>mu<u>se</u>um</b> – you see old and interesting things</li><li>a <b><u>cin</u>ema</b> – you watch films</li><li>a <b>post office</b> – you send letters and parcels</li><li>a <b><u>sta</u>tion</b> – you get on a train</li></ul><p><b>borrow</b> = take and bring back later</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Tom wants to watch a new film. Where does he go?</p>`,
          opts: [
            "to the museum",
            "to the library",
            "to the cinema"
          ],
          correct: 2,
          fbOk: "Right.",
          fbBad: "Where do you watch films?",
          fbText: "You watch films at the <b>cinema</b>. At the museum, you see old things. At the library, you borrow books."
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["You borrow books", "You send a parcel", "You keep money", "You see old and interesting things"],
          right: ["at the library.", "at the post office.", "in the bank.", "at the museum."],
          hint: "Look at the list of places again. What do you do in each place?",
          fbOk: "Well done!",
          fbBad: "Check the list of places.",
          fbText: "You borrow books <b>at the library</b>. You send a parcel <b>at the post office</b>. You keep money <b>in the bank</b>. You see old things <b>at the museum</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+li|brar|y", "mu|+se|um", "+cin|e|ma", "+sta|tion"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>li</u>brary, mu<u>se</u>um, <u>cin</u>ema, <u>sta</u>tion. In museum, the strong part is in the middle."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>You can borrow books here. It’s free.</p>`,
          before: "It’s a",
          after: ".",
          answer: "library",
          hint: "Look at the list: where do you borrow books?",
          fbOk: "Exactly.",
          fbBad: "Where do you borrow books?",
          fbText: "You borrow books at a <b>library</b>. At a bookshop, you buy books."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes about her Saturday.</p>`,
          text: "On Saturdays I go to the town centre with Dad. Dad gets money at the {*bank|museum|cinema}. I borrow two books at the {*library|post office|station}. Then we watch a film at the {*cinema|bank|library}. We go home by train from the {*station|museum|park}.",
          hint: "Money, books, a film, a train: where are they?",
          fbOk: "Good eye!",
          fbBad: "Look at the list of places again.",
          fbText: "Money: the <b>bank</b>. Books: the <b>library</b>. A film: the <b>cinema</b>. A train: the <b>station</b>."
        }
      ],
      outro: {
        text: "A town has lots of places: a library, a bank, a museum, a cinema and a station.",
        learned: [
          "Name places in a town.",
          "Say what you do in each place.",
          "Find the stressed syllable: library, museum, cinema."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e5s7l2",
      title: "Is there a cinema? There is, there are",
      short: "There is, there are",
      icon: "home",
      status: "verified",
      why: "Tell a friend what there is in your town or village. Ask about their place too.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "What is there in Zelena Dolyna?",
          body: `<p class="lead">Emma asks Oksana about her village.</p><p><b>Emma:</b> Is there a cinema in your village?<br><b>Oksana:</b> No, there isn’t. But there’s a school and a shop.<br><b>Emma:</b> Are there any museums?<br><b>Oksana:</b> No, there aren’t. But there are lots of fields!</p><p>How do we ask about a place?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Remember?",
          title: "Choose the correct answer.",
          body: `<p>Emma asks about Oksana’s village. Which question is correct?</p>`,
          opts: [
            "Are there a cinema?",
            "Is there a cinema?",
            "Is there cinemas?"
          ],
          correct: 1,
          hint: "One cinema: is or are?",
          fbOk: "Right.",
          fbBad: "Is it one cinema or two?",
          fbText: "One cinema: <b>Is there</b> a cinema? For two or more: <b>Are there any</b> cinemas?"
        },
        {
          type: "info",
          title: "There is, there are",
          body: `<ul><li>one → <b>There is</b> (<b>There’s</b>) a school.<br>There <b>isn’t</b> a cinema.</li><li>two or more → <b>There are</b> two farms.<br>There <b>aren’t any</b> museums.</li></ul><p><b>Is there</b> a bank? – Yes, there <b>is</b>. / No, there <b>isn’t</b>.<br><b>Are there any</b> shops? – Yes, there <b>are</b>. / No, there <b>aren’t</b>.</p><p><b>How many</b> farms <b>are there</b>? – There are two.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Oksana writes about her village.</p>`,
          text: "There {*is|are} a school in my village. There {*are|is} two farms. There {*isn’t|aren’t} a cinema. There {*aren’t|isn’t} any museums.",
          hint: "Is it one thing or two or more?",
          fbOk: "Exactly.",
          fbBad: "Look at the list: one or more?",
          fbText: "One school: <b>there is</b>. Two farms: <b>there are</b>. One cinema: <b>there isn’t</b>. Museums: <b>there aren’t any</b>."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Emma: “Is there a museum in your village?”</p><p>There isn’t a museum in Zelena Dolyna. What does Oksana say?</p>`,
          opts: [
            "No, there isn’t.",
            "No, there aren’t.",
            "No, it isn’t."
          ],
          correct: 0,
          fbOk: "Well done!",
          fbBad: "Look at the short answers again.",
          fbText: "One museum: <b>No, there isn’t.</b> <i>There aren’t</i> is for two or more. <i>It isn’t</i> answers <i>Is it…?</i>"
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s message is wrong.</p>`,
          text: "Hi Oksana! [Are] there a library in your village? In my town there is a big library.",
          hint: "One library: is or are?",
          fbOk: "Good eye!",
          fbBad: "Check the question.",
          fbText: "One library: <b>Is there</b> a library in your village? <i>Are there</i> is for two or more."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Oksana writes about her village.</p>`,
          tiles: ["There", "isn’t", "a cinema", "in our village"],
          extra: ["aren’t"],
          keepCase: true,
          answer: "There isn’t a cinema in our village.",
          hint: "Start with There.",
          fbOk: "Yes!",
          fbBad: "One cinema: isn’t or aren’t?",
          fbText: "<b>There isn’t a cinema in our village.</b> One cinema: <b>isn’t</b>, not <i>aren’t</i>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Emma: “How many farms are there in your village?”</p>`,
          before: "There",
          after: "two farms.",
          answer: "are",
          hint: "Two farms: is or are?",
          fbOk: "Right.",
          fbBad: "Two or more: which word?",
          fbText: "Two farms: there <b>are</b> two farms."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes about her town.</p>`,
          text: "My town isn’t big, but there {*are|is} two parks. There {*is|are} a museum near the station. {*Is|Are} there a cinema in your village? How many shops {*are|is} there?",
          hint: "Look at the word after the gap: one or more?",
          fbOk: "Well done!",
          fbBad: "Look at the list again.",
          fbText: "Two parks: <b>there are</b>. One museum: <b>there is</b>. One cinema: <b>Is there</b>? Shops: how many shops <b>are</b> there?"
        }
      ],
      outro: {
        text: "For one thing, say there is. For two or more, say there are.",
        learned: [
          "Say what there is in a town or village.",
          "Ask: Is there…? Are there any…? How many… are there?",
          "Give short answers: Yes, there is. No, there aren’t."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e5s7l3",
      title: "Next to, opposite, between: where is it?",
      short: "Where is it?",
      icon: "map",
      status: "verified",
      why: "Read a map and say where places are. Help a friend find the bank.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Where is the bank?",
          img: "img/eng/e5s7/town-map.svg",
          fit: true,
          cap: "A map of the centre of Emma’s town",
          body: `<p class="lead">Emma sends Oksana a map of her town centre.</p><p><i>The bank is between the café and the library. The museum is opposite the library.</i></p><p>Find the bank. What do <b>between</b> and <b>opposite</b> mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          img: "img/eng/e5s7/town-map.svg",
          fit: true,
          cap: "A map of the centre of Emma’s town",
          body: `<p>Look at the map. What is opposite the cinema?</p>`,
          opts: [
            "the post office",
            "the station",
            "the school"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Interesting!",
          fbText: "The school is <b>opposite</b> the cinema. It’s on the other side of the street. The next screen shows more."
        },
        {
          type: "info",
          title: "Next to, opposite, between",
          img: "img/eng/e5s7/town-map.svg",
          fit: true,
          cap: "A map of the centre of Emma’s town",
          body: `<ul><li><b>next to</b> – very near, at the side<br>The café is <b>next to</b> the bank.</li><li><b><u>op</u>posite</b> – on the other side of the street<br>The museum is <b>opposite</b> the library.</li><li><b>be<u>tween</u></b> – in the middle of two places<br>The bank is <b>between</b> the café and the library.</li></ul><p><b>Where is</b> the bank? – <b>It’s</b> between the café and the library.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          img: "img/eng/e5s7/town-map.svg",
          fit: true,
          cap: "A map of the centre of Emma’s town",
          body: `<p>Look at the map. What is between the library and the cinema?</p>`,
          opts: [
            "the post office",
            "the bank",
            "the museum"
          ],
          correct: 0,
          hint: "Find the library and the cinema. What is in the middle?",
          fbOk: "Right.",
          fbBad: "Look at the building in the middle.",
          fbText: "The <b>post office</b> is between the library and the cinema. The museum is opposite the library."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          img: "img/eng/e5s7/town-map.svg",
          fit: true,
          cap: "A map of the centre of Emma’s town",
          body: `<p>Look at the map.</p>`,
          text: "The café is {*next to|opposite} the bank. The museum is {*opposite|between} the library. The bank is {*between|opposite} the café and the library.",
          hint: "Same side of the street or the other side?",
          fbOk: "Exactly.",
          fbBad: "Check the map again.",
          fbText: "The café and the bank are on the same side: <b>next to</b>. The museum is on the other side: <b>opposite</b> the library. The bank is in the middle: <b>between</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          img: "img/eng/e5s7/town-map.svg",
          fit: true,
          cap: "A map of the centre of Emma’s town",
          body: `<p>One word in Oksana’s message is wrong. Look at the map.</p>`,
          text: "The museum is opposite the library. The post office is [opposite] the library and the cinema. The park is next to the museum.",
          hint: "Find the post office. Is it in the middle of two places?",
          fbOk: "Good eye!",
          fbBad: "Look at the post office on the map.",
          fbText: "The post office is in the middle: it’s <b>between</b> the library and the cinema. The other sentences are correct."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          img: "img/eng/e5s7/town-map.svg",
          fit: true,
          cap: "A map of the centre of Emma’s town",
          body: `<p>Look at the map.</p>`,
          before: "The bank is",
          after: "the café and the library.",
          answer: "between",
          hint: "The bank is in the middle of two places.",
          fbOk: "Well done!",
          fbBad: "In the middle of two places: which word?",
          fbText: "In the middle of two places: the bank is <b>between</b> the café and the library."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          img: "img/eng/e5s7/town-map.svg",
          fit: true,
          cap: "A map of the centre of Emma’s town",
          body: `<p>Where is the museum?</p>`,
          tiles: ["The museum", "is", "opposite", "the library"],
          extra: ["between"],
          keepCase: true,
          answer: "The museum is opposite the library.",
          hint: "Start with The museum.",
          fbOk: "Yes!",
          fbBad: "Is the museum in the middle, or on the other side?",
          fbText: "<b>The museum is opposite the library.</b> It’s on the other side of the street. <i>Between</i> needs two places."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          img: "img/eng/e5s7/town-map.svg",
          fit: true,
          cap: "A map of the centre of Emma’s town",
          body: `<p>Oksana: “I’m in the building next to the bank. It isn’t the library.”</p><p>Where is Oksana?</p>`,
          opts: [
            "in the library",
            "in the park",
            "in the café"
          ],
          correct: 2,
          hint: "What is next to the bank? There are two places.",
          fbOk: "Good eye!",
          fbBad: "Find the bank. What is next to it?",
          fbText: "Next to the bank, there are the café and the library. It isn’t the library, so Oksana is <b>in the café</b>."
        }
      ],
      outro: {
        text: "Next to, opposite and between tell us where places are.",
        learned: [
          "Say where places are: next to, opposite, between.",
          "Read a simple map of a town.",
          "Ask and answer: Where is the bank? It’s between…"
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e5s7l4",
      title: "Excuse me, where is the bus stop?",
      short: "Directions",
      icon: "path",
      status: "verified",
      why: "Someone asks you the way. Help them in English.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Can Oksana help?",
          body: `<p class="lead">A tourist from England is in Zelena Dolyna. He asks Oksana the way.</p><p><b>Tourist:</b> Excuse me, where is the bus stop?<br><b>Oksana:</b> Go straight ahead. Then turn left at the shop. The bus stop is on the right, opposite the school.<br><b>Tourist:</b> Thank you!</p><p>How do we tell people the way?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Oksana says: “Turn left at the shop.” What does the tourist do at the shop?</p>`,
          opts: [
            "He goes into the shop.",
            "He goes to the left.",
            "He goes to the right."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Turn left</b>: at the shop, he goes to the left. The next screen shows more."
        },
        {
          type: "info",
          title: "Asking and telling the way",
          body: `<p><b>Ask:</b><br>Excuse me, where is the bus stop?<br>Excuse me, how do I get to the school?</p><p><b>Tell the way:</b></p><ul><li><b>Go straight ahead.</b> ↑</li><li><b>Turn left.</b> ← <b>Turn right.</b> →</li><li>Turn left <b>at</b> the shop.</li><li><b>Go along</b> this street. <b>Go across</b> the road.</li><li>It’s <b>on the left</b>. It’s <b>on the right</b>.</li></ul><p>Start with the verb: <b>Go</b>…, <b>Turn</b>…</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>The tourist wants the church. The way is →.</p><p>What does Oksana say?</p>`,
          opts: [
            "Turn left.",
            "Go straight ahead.",
            "Turn right."
          ],
          correct: 2,
          fbOk: "Right.",
          fbBad: "Look at the arrows in the list.",
          fbText: "→ is right: <b>Turn right.</b> ← is left. ↑ is straight ahead."
        },
        {
          type: "match",
          sk: "func",
          title: "Match the questions and the answers.",
          left: ["Excuse me, where is the shop?", "Is it far?", "Is there a café near here?"],
          right: ["Go straight ahead. It’s on the left.", "No, it isn’t. It’s very near.", "No, there isn’t. But there’s a shop."],
          hint: "Is it…? – No, it isn’t. Is there…? – No, there isn’t.",
          fbOk: "Well done!",
          fbBad: "Look at the first words of each question.",
          fbText: "<i>Where is…?</i> – the way: <b>Go straight ahead.</b> <i>Is it far?</i> – <b>No, it isn’t.</b> <i>Is there…?</i> – <b>No, there isn’t.</b>"
        },
        {
          type: "gaps",
          sk: "func",
          title: "Fill in the gaps.",
          body: `<p>Oksana tells the tourist the way to the church.</p>`,
          text: "Go {*along|across} this street to the end. Turn {*left|ahead} at the school. Then go {*across|along} the road to the other side. The church is on the {*right|straight}.",
          hint: "To the end of the street, or to the other side?",
          fbOk: "Exactly.",
          fbBad: "Look at the list again.",
          fbText: "On this street to the end: <b>along</b>. <b>Turn left</b>. To the other side: <b>across</b> the road. It’s <b>on the right</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Oksana’s answer is wrong.</p>`,
          text: "Excuse me, where is the post office? – [Goes] straight ahead. Then turn right. It’s on the left.",
          hint: "We start with the verb. Is it go or goes?",
          fbOk: "Good eye!",
          fbBad: "Check the first word of the answer.",
          fbText: "To tell the way, we say <b>Go</b> straight ahead. Not <i>goes</i>."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>The tourist asks Oksana the way.</p>`,
          tiles: ["Excuse me,", "how", "do", "I", "get to", "the bus stop"],
          extra: ["does"],
          keepCase: true,
          answer: "Excuse me, how do I get to the bus stop?",
          hint: "Start with Excuse me.",
          fbOk: "Well done!",
          fbBad: "With I, it’s do, not does.",
          fbText: "<b>Excuse me, how do I get to the bus stop?</b> With <i>I</i>, we say <i>do</i>."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>The tourist: “Excuse me, where is the school?”</p><p>The way to the school is ←.</p>`,
          before: "Turn",
          after: "at the church.",
          answer: "left",
          hint: "← is …",
          fbOk: "Yes!",
          fbBad: "Look at the arrow: ←.",
          fbText: "← is left: <b>Turn left</b> at the church."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><b>Tourist:</b> Excuse me, how do I get to the post office?<br><b>Oksana:</b> Go along this street. Turn right at the church. The post office is on the left, next to the shop.</p><p>Where is the post office?</p>`,
          opts: [
            "next to the church, on the right",
            "next to the shop, on the left",
            "opposite the shop, on the left"
          ],
          correct: 1,
          hint: "Read Oksana’s last sentence.",
          fbOk: "Good eye!",
          fbBad: "Read the end of Oksana’s answer again.",
          fbText: "Oksana says: “The post office is <b>on the left</b>, <b>next to the shop</b>.” She turns right at the church, but the post office isn’t next to it."
        }
      ],
      outro: {
        text: "To ask the way, say “Excuse me”. To tell the way, start with Go or Turn.",
        learned: [
          "Ask the way: Excuse me, where is…? How do I get to…?",
          "Tell the way: Go straight ahead. Turn left.",
          "Say where a place is: It’s on the right."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e5s7l5",
      title: "A walk around the town with a map",
      short: "Map walk",
      icon: "target",
      status: "verified",
      why: "A map helps you in a new town. Read it and find the way.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "What is Emma’s favourite place?",
          img: "img/eng/e5s7/town-map.svg",
          fit: true,
          cap: "A map of the centre of Emma’s town",
          body: `<p class="lead">Emma writes to the penfriend club.</p><p><i>Start at the station. Go along Station Road to High Street. Turn left. My favourite place is on the left. It’s got old and interesting things!</i></p><p>Can you find the way on the map?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          img: "img/eng/e5s7/town-map.svg",
          fit: true,
          cap: "A map of the centre of Emma’s town",
          body: `<p>Follow Emma’s way on the map. What is her favourite place?</p>`,
          opts: [
            "the library",
            "the museum",
            "the cinema"
          ],
          correct: 1,
          hint: "Put your finger on the station. Go along Station Road. Then turn left.",
          fbOk: "Right.",
          fbBad: "Old and interesting things: where are they?",
          fbText: "From the station, go along Station Road. At High Street, turn left. The <b>museum</b> is on the left. It’s got old things."
        },
        {
          type: "info",
          title: "Reading a map",
          body: `<p>Put your finger on the map. Read one step at a time.</p><ul><li><b>Start at</b> the station.</li><li><b>Go along</b> Station Road <b>to</b> High Street.</li><li><b>Turn left</b> or <b>turn right</b>.</li><li><b>Go across</b> High Street.</li><li><b>Go past</b> the bank. <i>(Don’t stop there.)</i></li><li>It’s <b>on your left</b> or <b>on your right</b>.</li></ul><p>Left and right: think of <b>your</b> left and right on the walk.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "func",
          title: "Fill in the gaps.",
          img: "img/eng/e5s7/town-map.svg",
          fit: true,
          cap: "A map of the centre of Emma’s town",
          body: `<p>The way from the station to the library.</p>`,
          text: "Start at the {*station|school}. Go along Station Road to High Street. Turn {*left|right}. Go {*across|along} High Street to the other side. The library is opposite the {*museum|park}.",
          hint: "The library is on the other side of High Street.",
          fbOk: "Exactly.",
          fbBad: "Follow the way on the map with your finger.",
          fbText: "Start at the <b>station</b>. At High Street, turn <b>left</b>. Go <b>across</b> to the other side. The library is opposite the <b>museum</b>."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          img: "img/eng/e5s7/town-map.svg",
          fit: true,
          cap: "A map of the centre of Emma’s town",
          body: `<p>Start at the café. Walk along High Street. Go past the bank and the library.</p><p>What is the next building?</p>`,
          opts: [
            "the cinema",
            "the museum",
            "the post office"
          ],
          correct: 2,
          hint: "Café, bank, library… What comes after the library?",
          fbOk: "Well done!",
          fbBad: "Find the library. What is next to it?",
          fbText: "Café, bank, library, then the <b>post office</b>. The cinema is after the post office."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          img: "img/eng/e5s7/town-map.svg",
          fit: true,
          cap: "A map of the centre of Emma’s town",
          body: `<p>You are at the school. Go across High Street.</p>`,
          before: "Now you are at the",
          after: ".",
          answer: "cinema",
          hint: "What is opposite the school?",
          fbOk: "Yes!",
          fbBad: "What is on the other side of the street?",
          fbText: "The cinema is opposite the school. Go across High Street, and you are at the <b>cinema</b>."
        },
        {
          type: "order",
          sk: "func",
          title: "Put the sentences in order.",
          img: "img/eng/e5s7/town-map.svg",
          fit: true,
          cap: "A map of the centre of Emma’s town",
          body: `<p>The way from the station to the café.</p>`,
          items: [
            "Start at the station.",
            "Go along Station Road to High Street.",
            "Turn left and go across High Street.",
            "Walk along High Street. Go past the library and the bank.",
            "The café is next to the bank."
          ],
          shuffle: [2, 4, 0, 3, 1],
          hint: "Start at the station. Then follow the map.",
          fbOk: "Good eye!",
          fbBad: "Follow the way on the map with your finger.",
          fbText: "Start at the station. Go along Station Road. Turn left and go across High Street. Go past the library and the bank. The café is next to the bank."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          img: "img/eng/e5s7/town-map.svg",
          fit: true,
          cap: "A map of the centre of Emma’s town",
          body: `<p>Tell a friend the way from the park to Station Road.</p>`,
          tiles: ["Go", "past", "the museum", "and", "turn", "right"],
          extra: ["goes"],
          keepCase: true,
          answer: "Go past the museum and turn right.",
          hint: "Start with Go.",
          fbOk: "Well done!",
          fbBad: "To tell the way, start with the verb: Go.",
          fbText: "<b>Go past the museum and turn right.</b> Station Road is after the museum."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          img: "img/eng/e5s7/town-map.svg",
          fit: true,
          cap: "A map of the centre of Emma’s town",
          body: `<p>Tom is at the school. Emma writes to him.</p><p><i>Go across High Street. Turn left. Go past the post office. I’m in the next building.</i></p><p>Where is Emma?</p>`,
          opts: [
            "in the library",
            "in the bank",
            "in the cinema"
          ],
          correct: 0,
          hint: "From the school, go across to the cinema. Then turn left.",
          fbOk: "Right.",
          fbBad: "Follow the way on the map with your finger.",
          fbText: "Across High Street from the school is the cinema. Turn left and go past the post office. The next building is the <b>library</b>."
        }
      ],
      outro: {
        text: "Read a map one step at a time. Think of your left and your right.",
        learned: [
          "Read a map and follow the way.",
          "Tell the way: go along, go across, go past.",
          "Find a place on a map."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e5s7l6",
      title: "My town: history and culture",
      short: "History",
      icon: "book",
      status: "verified",
      why: "Every town has a story. Tell a friend about famous people and places.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Who is Ivan Kotliarevskyi?",
          body: `<p class="lead">Oksana is at a museum in Poltava with her aunt. She writes to Emma.</p><p><i>Today we are at a museum. It’s about Ivan Kotliarevskyi. He was a famous writer from Poltava.</i></p><p>Why is he famous?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>What does a writer do?</p>`,
          opts: [
            "A writer paints pictures.",
            "A writer builds bridges.",
            "A writer writes books and poems."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A <b>writer</b> writes books, poems and stories. An artist paints pictures. The next screen shows more words."
        },
        {
          type: "info",
          title: "History and culture",
          body: `<ul><li><b><u>his</u>tory</b> – the story of a place, from long ago to today</li><li><b><u>fa</u>mous</b> – lots of people know him, her or it</li><li>a <b><u>wri</u>ter</b> – writes books, poems and stories</li><li>a <b><u>po</u>em</b> – a text in short lines</li><li><b>old</b> ↔ <b>new</b></li></ul><p>Kotliarevskyi is famous <b>for</b> his poem.<br><b>There is</b> an old church in my village.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: a famous writer, part 1 of 2",
          title: "Read and choose.",
          body: `<p><i>Ivan Kotliarevskyi was a famous Ukrainian writer. He lived in Poltava. His poem Eneida is long and funny. It’s in Ukrainian. The first parts are from 1798.</i></p><p>When are the first parts of Eneida from?</p>`,
          opts: [
            "1898",
            "1798",
            "1978"
          ],
          correct: 1,
          fbOk: "Right.",
          fbBad: "Find the number in the text.",
          fbText: "The text says: “The first parts are from <b>1798</b>.” That’s more than 200 years ago!"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Reading: a famous writer, part 2 of 2",
          title: "Read and choose.",
          body: `<p><i>Eneida is very important. New Ukrainian literature starts with this poem. (Literature is books, poems and stories.) Today there is a museum about Kotliarevskyi in Poltava. People come to see his books and things.</i></p><p>What starts with Eneida?</p>`,
          opts: [
            "new Ukrainian literature",
            "the history of Poltava",
            "the museum"
          ],
          correct: 0,
          hint: "Read the second sentence.",
          fbOk: "Good eye!",
          fbBad: "Read the text again.",
          fbText: "<b>New Ukrainian literature</b> starts with Eneida. The museum is about Kotliarevskyi."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Oksana writes about the museum.</p>`,
          text: "Kotliarevskyi was a {*famous|new} writer. His poem Eneida is very {*old|new}: the first parts are from 1798. It’s a {*funny|sad} poem. There {*is|are} a museum about him in Poltava.",
          hint: "Look at the text again. Is 1798 long ago?",
          fbOk: "Exactly.",
          fbBad: "Read the text about Kotliarevskyi again.",
          fbText: "Lots of people know him: he is <b>famous</b>. 1798 is long ago: the poem is <b>old</b>. It’s a <b>funny</b> poem. One museum: <b>there is</b>."
        },
        {
          type: "multi",
          sk: "cult",
          title: "Choose all the correct answers.",
          body: `<p>What is true about Eneida?</p>`,
          opts: [
            "It’s a poem.",
            "It’s from 2020.",
            "It’s in Ukrainian.",
            "It’s a film."
          ],
          correct: [0, 2],
          hint: "Read part 1 of the text again.",
          fbOk: "Well done!",
          fbBad: "Is Eneida old or new? Is it a book or a film?",
          fbText: "Eneida is a <b>poem</b>. It’s <b>in Ukrainian</b>. It’s old: the first parts are from 1798, not 2020. It isn’t a film."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+his|to|ry", "+fa|mous", "+po|em"],
          fbOk: "Yes!",
          fbBad: "Look at the underlined parts again.",
          fbText: "<u>his</u>tory, <u>fa</u>mous, <u>po</u>em: the strong part is at the start."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>He writes books, poems and stories.</p>`,
          before: "He is a",
          after: ".",
          answer: ["writer", "poet", "author"],
          hint: "Look at the list: who writes books?",
          fbOk: "Exactly.",
          fbBad: "Write + er: who is it?",
          fbText: "A <b>writer</b> writes books, poems and stories."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes about her village and Poltava.</p>`,
          text: "My village is small, but it’s very old. There {*is|are} an old church. There {*are|is} lots of old houses. Poltava is a city near my village. My favourite place there is the {*museum|bank} about Kotliarevskyi. His poem Eneida is {*funny|sad}. It’s {*in|from} Ukrainian.",
          hint: "One church, lots of houses: is or are?",
          fbOk: "Well done!",
          fbBad: "Read the text about Kotliarevskyi again.",
          fbText: "One church: <b>there is</b>. Lots of houses: <b>there are</b>. The <b>museum</b> is about Kotliarevskyi. Eneida is <b>funny</b>. It’s <b>in</b> Ukrainian."
        }
      ],
      outro: {
        text: "Every town and village has history. Poltava is famous for the writer Ivan Kotliarevskyi.",
        learned: [
          "Read a short text about a famous person from a town.",
          "Say what is old and famous in your place: There is an old church.",
          "Use the words history, famous, writer and poem."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e5s7l7",
      title: "Welcome to our town!",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e5s7boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you be a town guide?",
          body: `<p class="lead">Today you are a young town guide. You help visitors in Emma’s town and in Oksana’s village.</p><p>You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "word",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Write the missing word.",
          body: `<p>A visitor wants to send a parcel to London.</p>`,
          before: "Go to the post",
          after: ".",
          answer: "office",
          pre: "e5s7l1",
          hint: "Where do you send letters and parcels?",
          fbOk: "Yes!",
          fbBad: "Look at the places list: letters and parcels.",
          fbText: "You send letters and parcels at the <b>post office</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          body: `<p>A visitor asks Oksana about her village.</p>`,
          text: "{*Is|Are} there a museum in your village? – No, there {*isn’t|aren’t}. How many farms {*are|is} there? – There {*are|is} two.",
          pre: "e5s7l2",
          hint: "One museum, two farms: is or are?",
          fbOk: "Exactly.",
          fbBad: "One or two or more?",
          fbText: "One museum: <b>Is there</b>…? – No, there <b>isn’t</b>. Farms: how many farms <b>are</b> there? – There <b>are</b> two."
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Task 3",
          title: "Choose the correct answer.",
          img: "img/eng/e5s7/town-map.svg",
          fit: true,
          cap: "A map of the centre of Emma’s town",
          body: `<p>Look at the map. Where is the post office?</p>`,
          opts: [
            "opposite the school",
            "between the library and the cinema",
            "next to the bank"
          ],
          correct: 1,
          pre: "e5s7l3",
          fbOk: "Right.",
          fbBad: "Find the post office. What is on each side?",
          fbText: "The post office is <b>between the library and the cinema</b>. The school is opposite the cinema."
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Task 4",
          title: "Fill in the gaps.",
          body: `<p>A visitor in Zelena Dolyna asks Oksana the way.</p>`,
          text: "Excuse me, {*where|what} is the church? – Go {*straight|along} ahead. Turn {*right|on} at the shop. The church is on the left.",
          pre: "e5s7l4",
          hint: "Go … ahead. Turn left or right.",
          fbOk: "Well done!",
          fbBad: "Look at the way list again.",
          fbText: "<b>Where</b> is the church? – Go <b>straight</b> ahead. Turn <b>right</b> at the shop."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 5",
          title: "Read and choose.",
          img: "img/eng/e5s7/town-map.svg",
          fit: true,
          cap: "A map of the centre of Emma’s town",
          body: `<p>Start at the station. Go along Station Road to High Street. Turn right.</p><p>What is on your right?</p>`,
          opts: [
            "the post office",
            "the museum",
            "the school"
          ],
          correct: 2,
          pre: "e5s7l5",
          hint: "Put your finger on the map. Think of your right on the walk.",
          fbOk: "Good eye!",
          fbBad: "Follow the way on the map with your finger.",
          fbText: "At High Street, you turn right. The <b>school</b> is on your right. The post office is on your left, on the other side."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 6",
          title: "Choose the correct answer.",
          body: `<p>What is Eneida by Ivan Kotliarevskyi?</p>`,
          opts: [
            "a funny poem in Ukrainian",
            "a museum in Poltava",
            "a street in Poltava"
          ],
          correct: 0,
          pre: "e5s7l6",
          fbOk: "Right.",
          fbBad: "Remember the text about Kotliarevskyi.",
          fbText: "Eneida is a long and <b>funny poem in Ukrainian</b>. The first parts are from 1798. There is a museum about Kotliarevskyi in Poltava."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about your town or village and tell people the way.",
        learned: [
          "Name places in a town and say what there is.",
          "Say where places are: next to, opposite, between.",
          "Ask the way and tell the way.",
          "Tell a friend about a famous person from a town."
        ]
      }
    }
  ]
});
