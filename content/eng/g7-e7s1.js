/* Слід · Англійська мова, 7 клас — «Family life: housework and traditions» (e7s1)
   Програма: модельна програма «Іноземна мова. 5–9 класи» (Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021):
   7 кл., тема «Я, моя родина, мої друзі» — обов'язки в сім'ї, домашні справи та побут, сімейні традиції та свята
   (с. 32, розд. 5.2.1); граматика B1 (с. 34–35, розд. 5.4.1): Present Perfect з just / already / yet (recent past,
   already для наголосу, прислівник у середині речення, заперечення й питання); for / since (duration, unfinished state);
   reflexive pronouns. Повторення: Present Perfect ever / never, been to (e6s7l4–l5), третя форма неправильних дієслів
   (e6s3l4, e6s7l5), have to (e6s5l5), традиції Present Simple (e5s8l4).
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Розподіл граматики — reports/verify/plan-eng-g7-8-9.md, reports/verify/curate-eng-plan-g7-9.md; рядки plan — content/eng/plan.js (e7s1).
   Герої — канон серії (memory/short/inbox.md NOTE (герої)), на три роки старші, ніж у 4 кл.: Oksana (13) — Zelena Dolyna,
   мама Olena, тато Petro, бабуся Hanna й дідусь Mykola живуть з ними, брат Dmytro (9), кішка Murka;
   Emma (Англія) — мама Sarah, брат Tom (11), кішка Snowy, тато робить Christmas pudding (e5s8); Andrii — Kyiv, шахи з п'яти років (e6s4).
   Факти про свята — по два відкриті джерела (URL — tasks/…/write-eng-g7-e7s1.md, «Нотатки агента»).
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: draft. 7 уроків (6 + фінал).
   Перевірка: node tools/validate.mjs --section e7s1 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e7s1",
  grade: 7,
  weeks: [1, 5],
  title: "Family life: housework and traditions",
  why: "To talk about housework and who does what at home. And to talk about family traditions and things you have just done.",
  requires: ["e6s7l4", "e6s7l5", "e6s3l4", "e5s8l4", "e6s5l5"],
  meta: { author: "writer-e7s1", created: "2026-11-25", factcheck: null, teacher: null },
  badges: [
    { id: "e7s1boss", name: "Family helper", icon: "trophy", desc: "Finish the final lesson “Our family, our traditions”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e7s1l1",
      title: "Housework: who does what at home?",
      short: "Housework",
      icon: "home",
      status: "draft",
      why: "Every family has housework. Learn to say who does what at home.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Who does what at Oksana’s home?",
          body: `<p class="lead">Oksana’s family has a housework list on the fridge.</p><ul><li>Mum: do the shopping.</li><li>Dad: cook dinner.</li><li>Grandma Hanna: do the ironing.</li><li>Grandad Mykola: put the rubbish out.</li><li>Oksana: do the washing-up, feed Murka.</li><li>Dmytro: make his bed, water the plants.</li></ul><p>Who does the washing-up in Oksana’s family?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><i>Oksana: do the washing-up, feed Murka<br>Dmytro: make his bed, water the plants</i></p><p>Murka is the family’s cat. Who feeds her?</p>`,
          opts: [
            "Dmytro",
            "Oksana",
            "Grandad Mykola"
          ],
          correct: 1,
          fbOk: "Yes!",
          fbBad: "Find the word feed in the list.",
          fbText: "The list says: Oksana – <b>feed Murka</b>. Dmytro makes his bed and waters the plants."
        },
        {
          type: "info",
          title: "Housework words",
          body: `<p><b><u>house</u>work</b> – the work you do to keep your home clean and tidy</p><ul><li><b>do the washing-up</b> = wash the dishes: the plates, cups and pans after a meal</li><li><b><u>ti</u>dy</b> your room – put things in the right place</li><li><b>make</b> your bed – after you get up</li><li><b>do the ironing</b> – make clothes flat with an iron</li><li><b>put the <u>rub</u>bish out</b> – take it outside to the bin</li><li><b>feed</b> the cat, <b>water</b> the plants</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["Dmytro makes", "Grandad Mykola puts", "Dmytro waters", "Oksana does"],
          right: ["his bed.", "the rubbish out.", "the plants.", "the washing-up."],
          hint: "Which word goes with out? What do you do with water?",
          fbOk: "Good eye!",
          fbBad: "Look at the housework words again.",
          fbText: "<b>make</b> your bed, <b>put</b> the rubbish <b>out</b>, <b>water</b> the plants, <b>do</b> the washing-up."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Oksana tells Emma about the list.</p>`,
          text: "Every evening, I {*have to|has to} do the washing-up. Dmytro {*has to|have to} make his bed. He {*doesn’t have to|don’t have to} do the ironing. Grandma does it. Do you {*have to|has to} help at home, Emma?",
          hint: "I and you → have to. Dmytro is he → has to.",
          fbOk: "Exactly.",
          fbBad: "Who is it: I, he or you?",
          fbText: "I <b>have to</b>. Dmytro (he) <b>has to</b>. He <b>doesn’t have to</b> do the ironing: it isn’t his job. Do you <b>have to</b>…? – after <i>do</i>, say <b>have to</b>."
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "I make the washing-up every day.",
            "I do the washing-up every days.",
            "I do the washing-up every day."
          ],
          correct: 2,
          hint: "Look at the housework words: do or make?",
          fbOk: "Right.",
          fbBad: "We do the washing-up, but we make a bed.",
          fbText: "<b>I do the washing-up every day.</b> We <b>do</b> the washing-up and <b>do</b> the ironing, but we <b>make</b> a bed. <i>Every day</i> – no -s."
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the words.",
          body: `<p>Do or make?</p>`,
          bins: ["do", "make"],
          items: [
            ["the washing-up", 0],
            ["the ironing", 0],
            ["the shopping", 0],
            ["your homework", 0],
            ["your bed", 1],
            ["pancakes", 1]
          ],
          hint: "Look at Oksana’s list. Which jobs start with do?",
          fbOk: "Well done!",
          fbBad: "Do the washing-up, but make your bed.",
          fbText: "<b>do</b> the washing-up, the ironing, the shopping, your homework. <b>make</b> your bed, <b>make</b> pancakes."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Dmytro’s toys and books are on the floor and on his bed.</p>`,
          before: "Mum: Dmytro, please",
          after: "your room!",
          answer: ["tidy", "clean"],
          hint: "Put things in the right place: … your room.",
          fbOk: "Well done!",
          fbBad: "What do you do with a room when things are on the floor?",
          fbText: "<b>Tidy</b> your room = put things in the right place. Toys go in the box, and books go on the shelf."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes to Emma.</p>`,
          text: "Hi Emma! In our family, everybody helps with the {*housework|houseworks}. I {*do|make} the washing-up after dinner. Dmytro is nine. He {*makes|does} his bed and waters the plants. Grandad puts the {*rubbish|ironing} out. What do you have to do at home?",
          hint: "Look at the housework words: is there an -s? Do the washing-up, make your bed.",
          fbOk: "Well done!",
          fbBad: "Check: do the washing-up, make your bed, put the rubbish out.",
          fbText: "Everybody helps with the <b>housework</b>. I <b>do</b> the washing-up. He <b>makes</b> his bed. Grandad puts the <b>rubbish</b> out. <i>Housework</i> has no -s."
        }
      ],
      outro: {
        text: "Housework is the work you do at home. We do the washing-up and the ironing, but we make a bed.",
        learned: [
          "Name housework: do the washing-up, make your bed, put the rubbish out.",
          "Say who does what at home.",
          "Use do and make with housework.",
          "Say what you have to do at home."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e7s1l2",
      title: "I’ve just washed the dishes: just and already",
      short: "Just, already",
      icon: "check",
      status: "draft",
      why: "Sometimes you finish a job a moment ago. Learn to say: I’ve just done it. I’ve already done it.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Has Oksana done her jobs?",
          body: `<p class="lead">It’s five o’clock. Mum is at work. She sends Oksana a message.</p><p><b>Mum:</b> Hi! Can you feed Murka, please?<br><b>Oksana:</b> I’ve just fed her. She’s eating now!<br><b>Mum:</b> Thank you! And can you do the washing-up?<br><b>Oksana:</b> I’ve already done it, Mum. I did it after lunch.</p><p>When did Oksana feed Murka?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Oksana: “I’ve <b>just</b> fed Murka. She’s eating now!” When did Oksana feed the cat?</p>`,
          opts: [
            "yesterday",
            "a very short time ago",
            "last week"
          ],
          correct: 1,
          fbTitle: "Let’s check.",
          fbOk: "Good guess!",
          fbText: "<b>I’ve just fed her</b> = a very short time ago. Murka is still eating. The next screen shows the rule."
        },
        {
          type: "info",
          title: "just: a very short time ago",
          body: `<p>I<b>’ve just fed</b> Murka. = I fed her a very short time ago.</p><ul><li><b>have / has + just</b> + the third form</li><li>She<b>’s just made</b> her bed.</li><li>feed → <b>fed</b>, make → <b>made</b>, put → <b>put</b>, get → <b>got</b>, do → <b>done</b></li></ul><p>We often use it for news: Look! I<b>’ve just tidied</b> my room!</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Dmytro calls Mum at work.</p>`,
          text: "Dmytro: Mum, I’ve just {*made|make} my bed! Grandad {*has|have} just put the rubbish out. Oksana and I {*have|has} just {*watered|water} the plants.",
          hint: "have / has + just + the third form. Grandad is he.",
          fbOk: "Exactly.",
          fbBad: "Look at the rule: has for he and she, then the third form.",
          fbText: "I’ve just <b>made</b> (make → made). Grandad <b>has</b> just put. Oksana and I (we) <b>have</b> just <b>watered</b>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Dad comes in with bags of food from the shop. Dmytro tells Oksana.</p>`,
          tiles: ["Dad", "has", "just", "got", "home", "with the shopping"],
          answer: "Dad has just got home with the shopping.",
          extra: ["get"],
          keepCase: true,
          hint: "Start with Dad. Where does just go?",
          fbOk: "Well done!",
          fbBad: "Look at the rule: has + just + the third form.",
          fbText: "<b>Dad has just got home with the shopping.</b> <b>just</b> goes after <b>has</b>. get → <b>got</b>, not <i>get</i>."
        },
        {
          type: "info",
          title: "already: before now",
          body: `<p><b>Mum:</b> Can you do the washing-up?<br><b>Oksana:</b> I<b>’ve already done</b> it! (= before Mum asked)</p><ul><li><b>have / has + already</b> + the third form</li><li>Surprise – sooner than you think: You’ve <b>already</b> finished? That was quick!</li></ul><p><b>already</b> goes before the third form: I’ve <b>already</b> done it.<br>Not: <s>I’ve done already it.</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>It’s eight in the evening. Dad asks: “Can somebody do the ironing?”</p>`,
          text: "Grandma: I’ve {*already|just} done it. I did it at ten this morning. Dad: Oh, thank you! {*Has|Have} Oksana fed Murka? Grandma: Yes, she {*has|have}. She’s already {*fed|feed} her.",
          hint: "Ten in the morning is not a very short time ago.",
          fbOk: "Right.",
          fbBad: "When did Grandma do the ironing: a moment ago or in the morning?",
          fbText: "Grandma did it in the morning, before Dad asked: I’ve <b>already</b> done it. <i>Just</i> is for a very short time ago. <b>Has</b> Oksana…? – Yes, she <b>has</b>. She’s already <b>fed</b> her."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "I’ve tidied already my room.",
            "I’ve already tidy my room.",
            "I’ve already tidied my room."
          ],
          correct: 2,
          hint: "Where does already go? And which form comes after have?",
          fbOk: "Yes!",
          fbBad: "Look at the rule: have + already + the third form.",
          fbText: "<b>I’ve already tidied my room.</b> <b>already</b> goes before the third form, not between <i>tidied</i> and <i>my room</i>. After <b>have</b>, say <b>tidied</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Dmytro’s message is wrong.</p>`,
          text: "Mum, I’ve just [make] my bed! And Grandad has already put the rubbish out.",
          hint: "Check the word after just.",
          fbOk: "Good eye!",
          fbBad: "Look at the words after just and already.",
          fbText: "I’ve just <b>made</b> my bed: after <b>have</b>, use the third form, make → <b>made</b>. <b>has already put</b> is correct: put → put."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>It’s six o’clock. Mum: “Can you do the washing-up, please?” Oksana did it after lunch.</p>`,
          before: "Oksana: I’ve",
          after: "done it, Mum!",
          answer: "already",
          hint: "She did it before Mum asked, not a moment ago.",
          fbOk: "Well done!",
          fbBad: "After lunch is not a very short time ago.",
          fbText: "Oksana did the washing-up before Mum asked: I’ve <b>already</b> done it."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes to Emma on Saturday.</p>`,
          text: "Hi Emma! We’re very busy today. Dad has just {*got|get} home with the shopping. Mum has {*already|ever} cooked lunch. I’ve just {*done|did} the washing-up – my hands are still wet! What about you?",
          hint: "has / have + the third form: get → got, do → done.",
          fbOk: "Good eye!",
          fbBad: "Check the third forms: got, done.",
          fbText: "Dad has just <b>got</b> home. Mum has <b>already</b> cooked lunch. I’ve just <b>done</b> the washing-up: my hands are still wet, so it was a very short time ago."
        }
      ],
      outro: {
        text: "Say “I’ve just done it” for a very short time ago. Say “I’ve already done it” when it happened before now.",
        learned: [
          "Say what you have just done: I’ve just fed the cat.",
          "Say what you have already done: I’ve already done the washing-up.",
          "Put just and already after have and has."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e7s1l3",
      title: "Have you tidied your room yet?",
      short: "Yet",
      icon: "target",
      status: "draft",
      why: "Parents often ask about jobs at home. Learn to ask and answer with yet.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Has Tom made his bed?",
          body: `<p class="lead">It’s Saturday morning in England. Emma’s mum, Sarah, asks about the jobs.</p><p><b>Mum:</b> Emma, have you tidied your room yet?<br><b>Emma:</b> Yes, I have. And I’ve already fed Snowy.<br><b>Mum:</b> Tom, have you made your bed yet?<br><b>Tom:</b> No, not yet. I haven’t had breakfast yet!</p><p>Who hasn’t made his bed?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><b>Mum:</b> Tom, have you made your bed yet?<br><b>Tom:</b> No, not yet.</p><p>Has Tom made his bed?</p>`,
          opts: [
            "Yes, he has.",
            "No, he hasn’t.",
            "Yes, he did."
          ],
          correct: 1,
          fbOk: "Yes!",
          fbBad: "Read Tom’s answer again.",
          fbText: "Tom says “No, not yet.” So: <b>No, he hasn’t.</b> He’s going to do it later."
        },
        {
          type: "info",
          title: "yet: in questions and with not",
          body: `<ul><li>Question: <b>Have</b> you tidied your room <b>yet</b>? (Mum thinks you’ll do it.)</li><li>With not: I <b>haven’t</b> had breakfast <b>yet</b>. (I’m going to have it.)</li><li>Short answers: Yes, I <b>have</b>. / No, I <b>haven’t</b>. / No, <b>not yet</b>.</li></ul><p><b>yet</b> usually goes at the end of the sentence.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Mum asks Tom more questions.</p>`,
          text: "Mum: {*Have|Has} you done your homework yet, Tom? Tom: No, I {*haven’t|hasn’t}. Mum: {*Has|Have} Emma fed Snowy yet? Tom: Yes, she {*has|did}.",
          hint: "You → have. Emma is she → has.",
          fbOk: "Exactly.",
          fbBad: "Look at the short answers: Has she…? – Yes, she has.",
          fbText: "<b>Have</b> you…? – No, I <b>haven’t</b>. <b>Has</b> Emma…? – Yes, she <b>has</b>. <i>Yes, she did</i> answers <i>Did she…?</i>"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Mum asks Tom about his bed again.</p>`,
          tiles: ["Have", "you", "made", "your bed", "yet"],
          answer: "Have you made your bed yet?",
          extra: ["make"],
          keepCase: true,
          hint: "Start with Have. Where does yet go?",
          fbOk: "Well done!",
          fbBad: "yet goes at the end. After have: the third form.",
          fbText: "<b>Have you made your bed yet?</b> <b>yet</b> goes at the end. make → <b>made</b>."
        },
        {
          type: "info",
          title: "already or yet?",
          body: `<ul><li>It’s done → <b>already</b>, before the third form:<br>I’ve <b>already</b> fed Snowy.</li><li>It isn’t done → not + <b>yet</b>, at the end:<br>I haven’t fed Snowy <b>yet</b>.</li><li>A question → usually <b>yet</b>, at the end:<br>Have you fed Snowy <b>yet</b>?</li></ul><p>When you’re surprised, you can ask: Have you <b>already</b> fed Snowy?</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Emma tells Oksana about her Saturday.</p>`,
          text: "I’ve {*already|yet} tidied my room. Tom hasn’t made his bed {*yet|already}. Mum has {*already|yet} done the shopping. Dad hasn’t had breakfast {*yet|already}.",
          hint: "Is it done? Is there not in the sentence?",
          fbOk: "Right.",
          fbBad: "Done → already. Not done → not … yet.",
          fbText: "It’s done: I’ve <b>already</b> tidied, Mum has <b>already</b> done. It isn’t done: Tom hasn’t made his bed <b>yet</b>, Dad hasn’t had breakfast <b>yet</b>."
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the words.",
          body: `<p>Emma’s list for Saturday:<br><i>tidy my room – done<br>feed Snowy – done<br>do my homework – not done<br>do the washing-up – not done</i></p><p>What can Emma say?</p>`,
          bins: ["I’ve already …", "I haven’t … yet."],
          items: [
            ["tidied my room", 0],
            ["fed Snowy", 0],
            ["done my homework", 1],
            ["done the washing-up", 1]
          ],
          hint: "Done → already. Not done → haven’t … yet.",
          fbOk: "Well done!",
          fbBad: "Look at Emma’s list: done or not done?",
          fbText: "I’ve <b>already</b> tidied my room and fed Snowy. I <b>haven’t</b> done my homework or the washing-up <b>yet</b>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Which sentence is correct?</p>`,
          opts: [
            "I haven’t done my homework yet.",
            "I haven’t done yet my homework.",
            "I’ve done my homework yet."
          ],
          correct: 0,
          hint: "Where does yet go? Is there not in the sentence?",
          fbOk: "Exactly.",
          fbBad: "yet goes at the end, and we use it with not.",
          fbText: "<b>I haven’t done my homework yet.</b> <b>yet</b> goes at the end. For a job that is done, say <i>I’ve <b>already</b> done my homework</i>, not <i>yet</i>."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>Tom: “Mum, I’m hungry!”<br>Mum: “Have you washed your hands?”</p>`,
          before: "Tom: No, not",
          after: "! I’ll do it now.",
          answer: "yet",
          hint: "A short answer: No, not …",
          fbOk: "Yes!",
          fbBad: "Look at the short answers in the rule.",
          fbText: "<b>No, not yet.</b> Tom hasn’t washed his hands, but he’s going to do it now."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes to Oksana.</p>`,
          text: "Hi Oksana! It’s Saturday, so we’re doing housework. I’ve {*already|yet} tidied my room. Tom {*hasn’t|haven’t} made his bed {*yet|already}. He’s still in his pyjamas! {*Have|Has} you done your jobs yet?",
          hint: "Done → already. Tom is he. Not done → yet.",
          fbOk: "Well done!",
          fbBad: "Check: already for done, not … yet for not done.",
          fbText: "I’ve <b>already</b> tidied my room. Tom <b>hasn’t</b> made his bed <b>yet</b>. <b>Have</b> you done your jobs yet?"
        }
      ],
      outro: {
        text: "Ask “Have you done it yet?” Answer “Yes, I have.” or “No, not yet.” Use already when it’s done.",
        learned: [
          "Ask: Have you tidied your room yet?",
          "Answer: Yes, I have. / No, not yet.",
          "Say what you haven’t done yet.",
          "Choose already or yet."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e7s1l4",
      title: "We’ve lived here for ten years: for and since",
      short: "For and since",
      icon: "users",
      status: "draft",
      why: "Friends ask how long you have lived somewhere or known someone. Learn to answer with for and since.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "How long have they lived here?",
          body: `<p class="lead">Emma asks Oksana about her grandparents.</p><p><b>Emma:</b> How long have your grandparents lived with you?<br><b>Oksana:</b> They’ve lived with us since I was three. But they’ve lived in Zelena Dolyna for fifty years! They know everybody in the village.</p><p>Do Oksana’s grandparents live in Zelena Dolyna now?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Oksana: “They’ve lived in Zelena Dolyna for fifty years.” Do they live there now?</p>`,
          opts: [
            "No, they don’t.",
            "They lived there fifty years ago.",
            "Yes, they do."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "They started living there fifty years ago, and they <b>still live there now</b>. That’s why Oksana says <b>they’ve lived</b>."
        },
        {
          type: "info",
          title: "How long? for and since",
          body: `<p>It started in the past, and it’s still true now → Present Perfect.</p><ul><li><b>for</b> + how long: <b>for</b> fifty years, <b>for</b> two weeks, <b>for</b> a long time</li><li><b>since</b> + when it started: <b>since</b> 2020, <b>since</b> Monday, <b>since</b> I was three</li></ul><p><b>How long have</b> you <b>lived</b> here? – <b>For</b> ten years.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the words.",
          body: `<p>for or since?</p>`,
          bins: ["for", "since"],
          items: [
            ["fifty years", 0],
            ["two weeks", 0],
            ["a long time", 0],
            ["three months", 0],
            ["Monday", 1],
            ["2020", 1],
            ["September", 1],
            ["I was five", 1]
          ],
          hint: "How long? → for. When did it start? → since.",
          fbOk: "Good eye!",
          fbBad: "Is it how long or when it started?",
          fbText: "How long: <b>for</b> fifty years, two weeks, a long time, three months. When it started: <b>since</b> Monday, 2020, September, I was five."
        },
        {
          type: "info",
          title: "have lived, have known, have had",
          body: `<ul><li>live → I<b>’ve lived</b> here since 2020.</li><li>know → knew → <b>known</b>: Oksana<b>’s known</b> Emma for three years.</li><li>have → had → <b>had</b>: We<b>’ve had</b> Murka for four years.</li><li>be → was / were → <b>been</b>: He<b>’s been</b> in the team since May.</li></ul><p>Not: <s>I live here since 2020.</s> → I<b>’ve lived</b> here since 2020.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Facts about the friends.</p>`,
          text: "Grandma Hanna has lived in Zelena Dolyna {*for|since} fifty years. Oksana has known Emma {*since|for} they were ten. Andrii has played chess {*since|for} he was five. Emma’s family has had Snowy {*for|since} five years.",
          hint: "How long? → for. When did it start? → since.",
          fbOk: "Exactly.",
          fbBad: "Look at the word after the gap: a time or a start?",
          fbText: "<b>for</b> fifty years, <b>for</b> five years: how long. <b>since</b> they were ten, <b>since</b> he was five: when it started."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Emma: “How long have you had Murka?”</p><p>What does Oksana say?</p>`,
          opts: [
            "I have her for four years.",
            "I’ve had her for four years.",
            "I’ve had her since four years."
          ],
          correct: 1,
          hint: "It started in the past and it’s true now. Four years: how long?",
          fbOk: "Right.",
          fbBad: "Look at the rule: have + had, and for + how long.",
          fbText: "<b>I’ve had her for four years.</b> It’s still true now → Present Perfect: <b>I’ve had</b>. Four years is how long → <b>for</b>."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Emma asks Andrii about Kyiv.</p>`,
          tiles: ["How long", "have", "you", "lived", "in Kyiv"],
          answer: "How long have you lived in Kyiv?",
          extra: ["live"],
          keepCase: true,
          hint: "Start with How long. Then have, you and the third form.",
          fbOk: "Well done!",
          fbBad: "Look at the rule: How long have you lived…?",
          fbText: "<b>How long have you lived in Kyiv?</b> After <b>have</b>: the third form, <b>lived</b>, not <i>live</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Andrii’s message is wrong.</p>`,
          text: "We’ve lived in our flat for ten years. I’ve played chess [since] eight years. My grandparents have lived in Chernihiv for a long time.",
          hint: "Check the words before a time.",
          fbOk: "Good eye!",
          fbBad: "Eight years: how long or when it started?",
          fbText: "Eight years is how long, so: I’ve played chess <b>for</b> eight years. Or: <b>since</b> I was five. <b>for ten years</b> and <b>for a long time</b> are correct."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Dmytro is nine. He started school when he was six.</p>`,
          before: "Dmytro has been at school",
          after: "he was six.",
          answer: "since",
          hint: "He was six: is it how long or when it started?",
          fbOk: "Well done!",
          fbBad: "When it started → …",
          fbText: "<b>since</b> he was six: that’s when it started. For how long, say: <b>for</b> three years."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes about her grandparents.</p>`,
          text: "My grandparents {*have lived|live} in Zelena Dolyna for fifty years. They’ve lived with us {*since|for} I was three. Grandad has {*known|knew} everybody in the village {*for|since} a long time.",
          hint: "It’s still true now → have + the third form. A long time: how long?",
          fbOk: "Well done!",
          fbBad: "Check: have lived, have known; for + how long, since + start.",
          fbText: "They <b>have lived</b> there for fifty years: it’s still true. <b>since</b> I was three: the start. Grandad has <b>known</b> everybody <b>for</b> a long time."
        }
      ],
      outro: {
        text: "Ask “How long have you lived here?” Answer with for (how long) or since (when it started).",
        learned: [
          "Ask: How long have you lived here?",
          "Use for with how long: for ten years.",
          "Use since with the start: since 2020, since I was five.",
          "Use have lived, have known and have had."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e7s1l5",
      title: "We made it ourselves: myself, yourself, ourselves",
      short: "Ourselves",
      icon: "cake",
      status: "draft",
      why: "Sometimes you do a job with no help. Learn to say: I did it myself.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Who made the cake?",
          body: `<p class="lead">It’s Dad’s birthday. Oksana and Dmytro give him a cake and a card.</p><p><b>Dad:</b> What a beautiful cake! Who made it?<br><b>Oksana:</b> We made it ourselves! Grandma didn’t help.<br><b>Dmytro:</b> And I made the card myself!</p><p>Did Grandma help with the cake?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Oksana: “We made it ourselves! Grandma didn’t help.”</p><p>Who made the cake?</p>`,
          opts: [
            "Grandma",
            "Dad",
            "Oksana and Dmytro, with no help"
          ],
          correct: 2,
          fbOk: "Yes!",
          fbBad: "Read Oksana’s words again.",
          fbText: "<b>We made it ourselves</b> = Oksana and Dmytro made it with no help. Grandma didn’t help."
        },
        {
          type: "info",
          title: "myself, yourself, ourselves",
          body: `<ul><li>I → <b>myself</b>, you (one person) → <b>yourself</b></li><li>he → <b>himself</b>, she → <b>herself</b>, it → <b>itself</b></li><li>we → <b>ourselves</b>, you (two or more) → <b>yourselves</b>, they → <b>themselves</b></li></ul><p>One person: <b>-self</b>. Two or more: <b>-selves</b>.</p><p>We made the cake <b>ourselves</b>. = We made it with no help.</p><p>my<u>self</u>, our<u>selves</u>: the underlined part is strong.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "gram",
          title: "Match the halves.",
          left: ["I", "he", "she", "we", "they"],
          right: ["myself", "himself", "herself", "ourselves", "themselves"],
          hint: "One person: -self. Two or more: -selves.",
          fbOk: "Good eye!",
          fbBad: "Look at the table again.",
          fbText: "I → <b>myself</b>, he → <b>himself</b>, she → <b>herself</b>, we → <b>ourselves</b>, they → <b>themselves</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Before the birthday.</p>`,
          text: "Dmytro made the card {*himself|herself}. Oksana did the shopping {*herself|himself}. Oksana and Dmytro decorated the cake {*themselves|ourselves}. Dad asks them: “Did you make it {*yourselves|yourself}?”",
          hint: "Dmytro – he. Oksana – she. Dad talks to two children.",
          fbOk: "Exactly.",
          fbBad: "Who is it: he, she, they or you (two people)?",
          fbText: "Dmytro (he) → <b>himself</b>. Oksana (she) → <b>herself</b>. Oksana and Dmytro (they) → <b>themselves</b>. Dad talks to two children → <b>yourselves</b>."
        },
        {
          type: "info",
          title: "by myself, help yourself",
          body: `<ul><li><b>by myself</b> = alone, with no help: Dmytro made the card <b>by himself</b>.</li><li><b>Help yourself!</b> = Take some food. You don’t have to ask.</li><li>To two or more people: <b>Help yourselves!</b></li><li><b>Enjoy yourselves!</b> = Have a good time!</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Grandma puts the cake on the table. She says to the family:</p>`,
          opts: [
            "Help ourselves!",
            "Help yourselves!",
            "Help themselves!"
          ],
          correct: 1,
          hint: "Grandma talks to two or more people: you → …",
          fbOk: "Right.",
          fbBad: "Grandma says it to you, and there are lots of people.",
          fbText: "<b>Help yourselves!</b> = Take some cake. Grandma talks to the family, so it’s <b>you</b>, two or more people → <b>yourselves</b>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Dmytro tells Emma about the card.</p>`,
          tiles: ["I", "made", "the card", "myself"],
          answer: ["I made the card myself.", "I myself made the card."],
          extra: ["me"],
          hint: "Start with I. Where does myself go?",
          fbOk: "Well done!",
          fbBad: "I made it with no help: I … myself.",
          fbText: "<b>I made the card myself.</b> I → <b>myself</b>, not <i>me</i>. <b>myself</b> usually goes at the end."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["my|+self", "your|+self", "our|+selves", "them|+selves"],
          fbOk: "Yes!",
          fbBad: "Look at the table: my<u>self</u>, our<u>selves</u>.",
          fbText: "my<u>self</u>, your<u>self</u>, our<u>selves</u>, them<u>selves</u>: the strong part is <b>self</b> or <b>selves</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s message is wrong.</p>`,
          text: "On Sunday, Tom made breakfast [herself]. He made pancakes for Mum! She said: “Did you make them yourself?”",
          hint: "Tom is he or she?",
          fbOk: "Good eye!",
          fbBad: "Check the words that end in -self.",
          fbText: "Tom is <b>he</b>, so: Tom made breakfast <b>himself</b>. Mum talks to one person, Tom: <b>yourself</b> is correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes to Emma.</p>`,
          text: "Hi Emma! Yesterday was Dad’s birthday. Dmytro and I made a cake {*ourselves|themselves}. Dmytro made a card {*himself|myself}. Grandma said: “Help {*yourselves|yourself}, children!” Dad said: “Did you make it all by {*yourselves|ourselves}?”",
          hint: "Dmytro and I → we. Children → two or more.",
          fbOk: "Well done!",
          fbBad: "Who is it: we, he or you (two or more)?",
          fbText: "Dmytro and I (we) → <b>ourselves</b>. Dmytro (he) → <b>himself</b>. To the children → <b>yourselves</b>."
        }
      ],
      outro: {
        text: "Say “I did it myself” or “We made it ourselves” when there was no help. One person: -self, two or more: -selves.",
        learned: [
          "Use myself, yourself, himself, herself, ourselves, yourselves and themselves.",
          "Say that you did something with no help: We made it ourselves.",
          "Say Help yourself! and Enjoy yourselves!"
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e7s1l6",
      title: "Family traditions and celebrations",
      short: "Traditions",
      icon: "star",
      status: "draft",
      why: "Every family has its own traditions. Read about traditions in Ukraine and the UK and talk about yours.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "What are your family traditions?",
          body: `<p class="lead">Emma’s class is making a page about family traditions in different countries. Emma asks Oksana to write about her family.</p><p>Read Oksana’s text in two parts. Then read Emma’s answer.</p>`,
          cta: "Let’s read"
        },
        {
          type: "info",
          title: "Celebration words",
          body: `<ul><li>a <b>tra<u>di</u>tion</b> – something a family or people do every year</li><li><b><u>cel</u>ebrate</b> – do special things on a special day</li><li>a <b>cele<u>bra</u>tion</b> – a special day or a party</li><li>a <b>pysanka</b> (two or more: <b>pysanky</b>) – an Easter egg with beautiful patterns</li><li><b>paska</b> – sweet Easter bread</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Our family traditions, part 1 of 2",
          title: "Read and choose.",
          body: `<p><i>Hi Emma! You asked about our family traditions. Here are three of them. In Ukraine, we celebrate Christmas on 25 December. On Christmas Eve, our family has a big dinner with twelve dishes. Grandma Hanna always makes kutia. It’s a sweet dish with grain, honey and poppy seeds. After dinner, Dmytro and I sing carols with our friends. We’ve done it since we were little.</i></p><p>What do Oksana and Dmytro do after dinner on Christmas Eve?</p>`,
          opts: [
            "They make kutia.",
            "They open their presents.",
            "They sing carols with their friends."
          ],
          correct: 2,
          hint: "Find the words after dinner in the text.",
          fbOk: "Yes!",
          fbBad: "Read the sentence that starts with After dinner.",
          fbText: "<b>After dinner</b>, Oksana and Dmytro <b>sing carols</b> with their friends. Grandma makes the kutia."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Our family traditions, part 2 of 2",
          title: "Choose all the correct answers.",
          body: `<p><i>Our second tradition is at Easter, in spring. A few days before Easter, Grandma and I decorate pysanky. Mum bakes paska. At Easter, we take a basket with paska and pysanky to church. And our third tradition? On every birthday, Grandad Mykola plants a tree in our garden. He has planted thirteen trees for me! Love, Oksana</i></p><p>Which sentences are true?</p>`,
          opts: [
            "Grandma and Oksana decorate pysanky.",
            "Grandma bakes paska.",
            "The family takes a basket to church at Easter.",
            "Grandad has planted ten trees for Oksana."
          ],
          correct: [0, 2],
          hint: "Who bakes paska? How many trees has Grandad planted?",
          fbOk: "Good eye!",
          fbBad: "Read who does what again.",
          fbText: "Grandma and Oksana <b>decorate pysanky</b>. At Easter, the family <b>takes a basket to church</b>. <b>Mum</b> bakes paska, and Grandad has planted <b>thirteen</b> trees."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Think about both parts of Oksana’s text.</p><p>What is the text about?</p>`,
          opts: [
            "housework at Oksana’s home",
            "special days in her family every year",
            "a trip to England"
          ],
          correct: 1,
          fbOk: "Exactly.",
          fbBad: "Look at the name of the text: Our family traditions.",
          fbText: "The text is about <b>family traditions</b>: Christmas Eve, Easter and birthdays."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Reading: Emma’s answer",
          title: "Read and choose.",
          body: `<p><i>Thanks, Oksana! Our traditions are different. On Pancake Day, Dad and I make pancakes. At Easter, we don’t decorate eggs. We give chocolate Easter eggs! At Christmas, we have a Christmas pudding. Dad makes it himself. On my birthday, I always go swimming with my friends. I’ve never decorated a real egg. Can you show me how? – Emma</i></p><p>What does Emma’s family give at Easter?</p>`,
          opts: [
            "chocolate eggs",
            "pysanky",
            "pancakes"
          ],
          correct: 0,
          hint: "Find the word Easter in Emma’s text.",
          fbOk: "Right.",
          fbBad: "Read the sentences about Easter again.",
          fbText: "In the UK, people often give <b>chocolate Easter eggs</b>. Emma’s family doesn’t decorate real eggs."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["tra|+di|tion", "+cel|e|brate", "cel|e|+bra|tion", "+pan|cake"],
          fbOk: "Well done!",
          fbBad: "Look at the celebration words again.",
          fbText: "tra<u>di</u>tion, <u>cel</u>ebrate, cele<u>bra</u>tion, <u>pan</u>cake. <i>Celebrate</i> and <i>celebration</i> have different strong parts!"
        },
        {
          type: "gaps",
          sk: "write",
          title: "Complete the sentences.",
          body: `<p>Oksana writes back to Emma.</p>`,
          text: "Of course! Have you {*ever|since} seen a real pysanka? I’ve {*never|ever} tried a Christmas pudding. We’ve celebrated Easter like this {*for|since} many years. Grandma and I have {*just|for} decorated a pysanka for you. We did it {*ourselves|themselves}!",
          hint: "Have you ever…? Many years: how long? Grandma and I → we.",
          fbOk: "Well done!",
          fbBad: "Check: ever, never, for + how long, we → ourselves.",
          fbText: "Have you <b>ever</b> seen…? I’ve <b>never</b> tried… <b>for</b> many years: how long. We’ve <b>just</b> decorated: a very short time ago. Grandma and I (we) → <b>ourselves</b>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Oksana tells Emma about Grandma’s kutia.</p>`,
          tiles: ["Grandma", "has", "made", "kutia", "for", "fifty years"],
          answer: ["Grandma has made kutia for fifty years.", "For fifty years Grandma has made kutia."],
          extra: ["since"],
          hint: "Fifty years: how long? Start with Grandma.",
          fbOk: "Good eye!",
          fbBad: "Fifty years is how long: for or since?",
          fbText: "<b>Grandma has made kutia for fifty years.</b> Fifty years is how long → <b>for</b>, not <i>since</i>."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Final",
          title: "Write the missing word.",
          body: `<p>Emma’s dad makes the Christmas pudding with no help.</p>`,
          before: "Emma: Dad makes it",
          after: "every year.",
          answer: "himself",
          hint: "Dad – he – …self.",
          fbOk: "Yes!",
          fbBad: "Dad is he: he → …",
          fbText: "Dad (he) → <b>himself</b>: he makes the Christmas pudding with no help."
        }
      ],
      outro: {
        text: "Families celebrate in different ways. In Ukraine, many families decorate pysanky at Easter. In the UK, people often give chocolate eggs.",
        learned: [
          "Read a text about family traditions in two parts.",
          "Talk about Christmas Eve, Easter and birthdays in Ukraine and the UK.",
          "Use the Present Perfect with ever, never, just, for and since."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e7s1l7",
      title: "Our family, our traditions",
      short: "Section final",
      icon: "trophy",
      status: "draft",
      boss: true,
      badge: "e7s1boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help Oksana and Emma?",
          body: `<p class="lead">It’s October. Emma’s class page about family traditions is ready. Oksana and Emma chat about home and family.</p><p>Help them with their messages. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Fill in the gaps.",
          body: `<p>Oksana tells Emma about housework.</p>`,
          text: "At home, I {*do|make} the washing-up. Dmytro {*makes|does} his bed every morning. Grandad puts the {*rubbish|ironing} out.",
          pre: "e7s1l1",
          hint: "Do the washing-up, make your bed.",
          fbOk: "Yes!",
          fbBad: "Check: do or make?",
          fbText: "I <b>do</b> the washing-up. Dmytro <b>makes</b> his bed. Grandad puts the <b>rubbish</b> out."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Choose the correct answer.",
          body: `<p>Mum: “Can you feed Murka, please?” Oksana fed her two minutes ago.</p><p>What does Oksana say?</p>`,
          opts: [
            "I’ve just feed her.",
            "I’ve just fed her.",
            "I’ve just feeded her."
          ],
          correct: 1,
          pre: "e7s1l2",
          fbOk: "Right.",
          fbBad: "have + just + the third form.",
          fbText: "<b>I’ve just fed her.</b> Two minutes ago is a very short time ago → <b>just</b>, after <b>have</b>. feed → <b>fed</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Fill in the gaps.",
          body: `<p>Emma writes about Sunday.</p>`,
          text: "I haven’t done my homework {*yet|already}. Tom has {*already|yet} done his. He did it on Friday!",
          pre: "e7s1l3",
          hint: "Not done → not … yet. Done → already.",
          fbOk: "Exactly.",
          fbBad: "Is it done or not done?",
          fbText: "I <b>haven’t</b> done it <b>yet</b>: not done. Tom has <b>already</b> done his: it’s done, on Friday."
        },
        {
          type: "word",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Write the missing word.",
          body: `<p>Oksana’s grandparents came to Zelena Dolyna fifty years ago. They still live there.</p>`,
          before: "They’ve lived in Zelena Dolyna",
          after: "fifty years.",
          answer: "for",
          pre: "e7s1l4",
          fbOk: "Well done!",
          fbBad: "Fifty years: how long or when it started?",
          fbText: "Fifty years is how long → <b>for</b> fifty years."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Fill in the gaps.",
          body: `<p>Emma remembers Dad’s birthday at Oksana’s home.</p>`,
          text: "Dmytro made the card {*himself|herself}. Oksana and Dmytro made the cake {*themselves|ourselves}.",
          pre: "e7s1l5",
          hint: "Dmytro – he. Oksana and Dmytro – they.",
          fbOk: "Yes!",
          fbBad: "Who is it: he or they?",
          fbText: "Dmytro (he) → <b>himself</b>. Oksana and Dmytro (they) → <b>themselves</b>."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 6",
          title: "Read and choose.",
          body: `<p><i>On Christmas Eve, our family has a big dinner with twelve dishes. At Easter, Grandma and I decorate pysanky, and Mum bakes paska. – Oksana</i></p><p>What is paska?</p>`,
          opts: [
            "an Easter egg with patterns",
            "a sweet dish with grain and honey",
            "sweet Easter bread"
          ],
          correct: 2,
          pre: "e7s1l6",
          fbOk: "Good eye!",
          fbBad: "Mum bakes it. What do you bake?",
          fbText: "<b>Paska</b> is sweet Easter bread. A <b>pysanka</b> is an Easter egg with patterns. <b>Kutia</b> is a sweet dish with grain and honey."
        },
        {
          type: "build",
          sk: "func",
          eyebrow: "Task 7",
          title: "Put the words in order.",
          body: `<p>Emma’s teacher asks Emma about Oksana.</p>`,
          tiles: ["How long", "have", "you", "known", "Oksana"],
          answer: "How long have you known Oksana?",
          extra: ["knew"],
          keepCase: true,
          pre: "e7s1l4",
          hint: "Start with How long. know → knew → …",
          fbOk: "Well done!",
          fbBad: "After have: the third form of know.",
          fbText: "<b>How long have you known Oksana?</b> know → knew → <b>known</b>."
        },
        {
          type: "pick",
          sk: "gram",
          eyebrow: "Task 8",
          title: "Find the mistake.",
          body: `<p>One word in Tom’s message is wrong.</p>`,
          text: "I’ve already made my bed. But I haven’t had breakfast [already]. I’m very hungry!",
          pre: "e7s1l3",
          hint: "Is breakfast done or not done?",
          fbOk: "Good eye!",
          fbBad: "Look at the sentence with haven’t.",
          fbText: "Not done → not … <b>yet</b>: I haven’t had breakfast <b>yet</b>. <b>I’ve already made my bed</b> is correct: it’s done."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about housework and family traditions. And you can say what you have just done, already done or haven’t done yet.",
        learned: [
          "Talk about housework and family traditions.",
          "Use just, already and yet with the Present Perfect.",
          "Say how long with for and since.",
          "Use myself, ourselves and themselves."
        ]
      }
    }
  ]
});
