/* Слід · Англійська мова, 11 клас — «Rights, responsibilities and tolerance» (e11s1)
   Програма: П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; спеціалізовані школи, B2), 11 кл.: тема «Я, моя родина,
   мої друзі» — права та обов’язки молоді; норми поведінки та спілкування; толерантність, гуманність, благодійність;
   ведення домашнього господарства (с. 23–24); функції — висловлювати й аргументувати власну точку зору, вступати в дискусію,
   привертаючи увагу співрозмовника, підтримувати дискусію (с. 23); граматика (с. 25): reported speech with changed tenses —
   повторення e6s8l5, e8s3l4–l5, e9s4l4–l5, нове: Past Perfect у непрямій мові, слова часу й місця (l3); reporting verbs +
   that + complement clause — нове: admit, agree, explain, promise, complain, deny, insist, suggest (l4). Розподіл —
   content/eng/plan.js, reports/verify/plan-eng-g10-11.md:
   https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf
   Друга правильна відповідь (plan-eng-g10-11, CD Grammar «Reported speech: indirect speech»): якщо сказане досі правда,
   час можна не змінювати (TQ-144) — тож форма без зміни часу ніде не стоїть хибним варіантом: хибні — неправильні форми
   (had took, will be show, has/have + особа); Past Simple → Past Perfect необов’язкова (British Council) — обидві в multi;
   suggest that + should / базова форма / Past Simple — у завданнях лише suggest + -ing і «suggested that … should» у multi.
   Діалоги — репліками в body (D-056), без звуку (D-055 п. 4).
   Герої — серія 4–10 кл., на сім років старші, ніж у 4 кл.: Oksana, Andrii, Mariia, Taras, Emma — 17, Dmytro — 13.
   Нові: Ms Romaniuk (притулок для тварин у Kyiv), Yehor (новий учень класу Andrii, Kyiv).
   Факти (Конвенція ООН про права дитини, International Volunteer Day) — з двох джерел; URL — tasks/…/write-eng-g11-e11s1.md.
   Форми, наголос і значення — Cambridge Dictionary (CD), CD Grammar, OALD.
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e11s1, reports/verify/write-eng-g11-e11s1.md). 7 уроків (6 + фінал). Будова — за розділами 10 кл. (e10s1).
   Перевірка: node tools/validate.mjs --section e11s1 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e11s1",
  grade: 11,
  weeks: [1, 5],
  title: "Rights, responsibilities and tolerance",
  why: "To talk about young people’s rights and responsibilities, good manners and helping others. And to report what other people said.",
  requires: ["e6s8l5", "e7s1l1", "e8s3l4", "e8s3l5", "e9s4l4", "e9s4l5", "e9s9l3", "e10s1l1", "e10s1l6"],
  meta: { author: "writer-e11s1", created: "2026-11-26", factcheck: "verifier-e11s1, 2026-11-26 (reports/verify/write-eng-g11-e11s1.md)", teacher: null },
  badges: [
    { id: "e11s1boss", name: "Fair Player", icon: "trophy", desc: "Finish the final lesson “Rights, responsibilities and tolerance”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e11s1l1",
      title: "Young people’s rights and responsibilities",
      short: "Rights",
      icon: "scale",
      status: "verified",
      why: "Every child has rights, and every right comes with responsibilities. Learn how to talk about both.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Do we have rights?",
          body: `<p class="lead">Daryna writes for Andrii’s school newspaper in Kyiv.</p><p><i>In 1989, the United Nations adopted (= officially accepted) the Convention on the Rights of the Child. Ukraine ratified it in 1991: our country officially agreed to follow it. Under the Convention, a child is anyone under 18. So yes, that includes us in Year 11! We have the right to education, the right to rest and play, and the right to say what we think about things that affect us. But rights come with responsibilities. If I have the right to learn, I also have to respect other students’ right to learn.</i></p><p>Which rights does Daryna name?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Daryna: “Rights come with responsibilities.”</p><p>What is a <i>responsibility</i>?</p>`,
          opts: [
            "something you can have only when you are 18",
            "something you should do because it’s your duty",
            "a rule that only adults have to follow"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A <b>responsibility</b> is something it’s your duty to do. Daryna has the right to learn, and it’s her responsibility to respect other students’ right to learn."
        },
        {
          type: "info",
          title: "Rights and responsibilities",
          body: `<ul><li>a <b>right</b> → something you are allowed to have or do: <i>the right to education</i></li><li><b>have the right to</b> + noun / verb: <i>You have the right to say what you think.</i></li><li>a <b>responsi<u>bil</u>ity</b> (plural responsibilities) → something it’s your duty to do</li><li><b>be re<u>spon</u>sible for</b> + noun / -ing: <i>I’m responsible for feeding the cat.</i></li><li><b>re<u>spect</u></b> → treat with care: <i>respect other people’s rights</i></li><li>edu<u>ca</u>tion → learning; responsi<u>bil</u>ity → the underlined part is strong</li></ul>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the sentences.",
          body: `<p>Is it a right or a responsibility?</p>`,
          bins: ["A right", "A responsibility"],
          items: [
            ["You can get an education.", 0],
            ["You can have time to rest and play.", 0],
            ["You can say what you think about school rules.", 0],
            ["You should listen when other people speak.", 1],
            ["You should be on time for lessons.", 1],
            ["You should look after the books you borrow.", 1]
          ],
          hint: "Is it something you are allowed to have, or something you should do?",
          fbOk: "Exactly.",
          fbBad: "You can… → a right. You should… → a responsibility.",
          fbText: "Education, rest and play, and saying what you think are <b>rights</b> from the Convention. Listening, being on time and looking after books are <b>responsibilities</b>."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          text: "Every child has the right {*to|for|of} education. You have the right {*to say|saying|say} what you think. In our class, two students are responsible {*for|of|to} watering the plants.",
          hint: "Look at the list: have the right to…, be responsible for…",
          fbOk: "Well done!",
          fbBad: "Check the small words: the right to, responsible for.",
          fbText: "the right <b>to</b> education; the right <b>to say</b>; responsible <b>for</b> watering the plants."
        },
        {
          type: "info",
          title: "Who decides?",
          body: `<ul><li><b>be allowed to</b> → you can, it’s OK: <i>We’re allowed to use our phones in the breaks.</i></li><li><b>it’s up to</b> (someone) → it’s their decision: <i>It’s up to you what you wear at the weekend.</i></li><li><b>take responsibility for</b> (something) → say that it’s your job or your mistake: <i>He took responsibility for the broken window.</i></li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "vocab",
          title: "Choose the correct answer.",
          body: `<p>Bohdan wants to join a second club after school. His parents say: “You decide. But remember, school comes first.”</p><p>What do they mean?</p>`,
          opts: [
            "You aren’t allowed to join another club.",
            "We will choose the club for you.",
            "It’s up to you, but your studies are more important."
          ],
          correct: 2,
          hint: "Who makes the decision: Bohdan or his parents?",
          fbOk: "Right.",
          fbBad: "“You decide” – whose decision is it?",
          fbText: "“You decide” = <b>it’s up to you</b>. But his parents also remind him that school is more important."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Mariia broke the printer in the art club. She told the teacher: “It was me. I’m sorry.”</p>`,
          before: "Mariia took",
          after: "for the broken printer.",
          answer: ["responsibility", "the blame"],
          hint: "take … for → say that it’s your mistake.",
          fbOk: "Yes!",
          fbBad: "Look at the phrases in “Who decides?” again.",
          fbText: "She <b>took responsibility</b> for it: she said it was her mistake. <i>Took the blame</i> is also correct."
        },
        {
          type: "pick",
          sk: "vocab",
          title: "Find the mistake.",
          body: `<p>One word in this sentence from Andrii’s school newspaper is wrong.</p>`,
          text: "Every child has the right [for] rest and play.",
          hint: "Look at the phrase in the list: have the right … + noun.",
          fbOk: "Good eye!",
          fbBad: "Read the list “Rights and responsibilities” again.",
          fbText: "We say <b>the right to</b>: <b>Every child has the right to rest and play.</b>"
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["re|+spon|si|ble", "re|spon|si|+bil|i|ty", "ed|u|+ca|tion", "re|+spect"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts in the list.",
          fbText: "re<u>spon</u>sible, responsi<u>bil</u>ity, edu<u>ca</u>tion, re<u>spect</u>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Last month, our school council (= a group of students who speak for all students) asked Year 11 about a new phone rule. Students explained what they thought, and the teachers listened. That’s our right to be heard in action! In the end, everyone agreed on a compromise: phones stay in our bags during lessons, but we can use them in the breaks. Now it’s our responsibility to keep the rule.</i></p><p>What is the students’ responsibility now?</p>`,
          opts: [
            "to use their phones only in the breaks",
            "to write new rules for the teachers",
            "to give their phones to the school council"
          ],
          correct: 0,
          hint: "Find responsibility in the text. What did everyone agree on?",
          fbOk: "Exactly.",
          fbBad: "Read the sentences about the compromise again.",
          fbText: "Phones stay in bags during lessons, and students use them <b>in the breaks</b>. Keeping this rule is now their <b>responsibility</b>."
        }
      ],
      outro: {
        text: "Rights come with responsibilities: now you can talk about both.",
        learned: [
          "Talk about rights: the right to education, the right to rest and play.",
          "Say who is responsible for something.",
          "Use it’s up to you and take responsibility for."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e11s1l2",
      title: "Good manners: how we behave and communicate",
      short: "Manners",
      icon: "users",
      status: "verified",
      why: "Polite or rude? Talk about good manners and ask people for things politely.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "What’s the rudest thing?",
          body: `<p class="lead">Bright Radio, the school radio in Lviv, asks students: “What’s the rudest thing people do?”</p><p><b>Myroslava:</b> People who jump the queue in the canteen. We’ve all been waiting!<br><b>Ostap:</b> People who look at their phones when you’re talking to them.<br><b>Taras:</b> Interrupting. My sister Zlata never lets me finish a sentence!</p><p>What do you think is the rudest?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Myroslava: “People who jump the queue in the canteen. We’ve all been waiting!”</p><p>What do these people do?</p>`,
          opts: [
            "They wait patiently at the end.",
            "They go to the front before people who were waiting.",
            "They leave the canteen without lunch."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A <b>queue</b> is a line of people waiting. People who <b>jump the queue</b> go to the front before others who were waiting."
        },
        {
          type: "info",
          title: "Good and bad manners",
          body: `<ul><li><b>good manners</b> / <b>bad manners</b> (always plural) → polite or rude ways of behaving</li><li><b>be<u>have</u></b> (verb) → <b>be<u>hav</u>iour</b> (noun): <i>How you behave is your behaviour.</i></li><li><b>po<u>lite</u></b> ↔ <b>rude</b> (= not polite)</li><li>a <b>queue</b> → a line of people who are waiting; <b>jump the queue</b> → go to the front before others</li><li><b>inter<u>rupt</u></b> → start talking when someone else is talking</li><li><b>eye contact</b> → when you look at the person you are talking to</li></ul>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the sentences.",
          body: `<p>Is it good manners or bad manners?</p>`,
          bins: ["Good manners", "Bad manners"],
          items: [
            ["You say thank you to the bus driver.", 0],
            ["You make eye contact when someone speaks to you.", 0],
            ["You let an older person sit down on the bus.", 0],
            ["You jump the queue in the canteen.", 1],
            ["You interrupt your friend all the time.", 1],
            ["You talk loudly on the phone on the bus.", 1]
          ],
          hint: "Would you like other people to do this to you?",
          fbOk: "Right.",
          fbBad: "Read the list “Good and bad manners” again.",
          fbText: "Saying thank you, making eye contact and giving your seat to an older person are <b>good manners</b>. Jumping the queue, interrupting and loud phone calls are <b>bad manners</b>."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          text: "Ostap thinks good {*manners|manner} are important. He always {*behaves|behaviour|behave} politely. On the bus, he speaks quietly on the phone. And he never jumps the {*queue|row|order}.",
          hint: "manners → always plural; he + verb; a line of people waiting.",
          fbOk: "Yes!",
          fbBad: "Check the list: manners, behave / behaviour, queue.",
          fbText: "good <b>manners</b> (plural); he <b>behaves</b> (a verb after he); jump the <b>queue</b>."
        },
        {
          type: "info",
          title: "Asking politely",
          body: `<ul><li><b>Would you mind</b> + -ing? → a polite request: <i>Would you mind moving your bag?</i></li><li><b>Do you mind if I</b> + verb? → asking for permission: <i>Do you mind if I sit here?</i></li><li><b>Sorry to bother you, but…</b> → before you ask a stranger</li></ul><p>Careful with the answer! <i>Would you mind…?</i> means “Is it a problem for you?”. So:</p><ul><li><b>No, not at all.</b> / <b>Of course not.</b> → OK, I’ll do it.</li><li><b>I’m afraid…</b> → no, sorry.</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p>Taras is on a bus in Lviv. An older man is standing next to him.</p><p><b>The man:</b> Sorry to bother you, but would you mind closing the window? It’s cold.<br><b>Taras:</b> …</p><p>Taras is happy to help. What does he say?</p>`,
          opts: [
            "No, not at all.",
            "Yes, I mind.",
            "Yes, I would."
          ],
          correct: 0,
          hint: "Would you mind…? = Is it a problem for you?",
          fbOk: "Well done!",
          fbBad: "Is closing the window a problem for Taras?",
          fbText: "<b>No, not at all.</b> = It isn’t a problem, I’ll do it. <i>Yes, I would</i> means that Taras doesn’t want to close it."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Oksana’s bag is on the seat. A woman wants to sit down. Start with Would.</p>`,
          tiles: ["Would", "you", "mind", "moving", "your bag?"],
          extra: ["to move"],
          answer: "Would you mind moving your bag?",
          hint: "Would you mind + -ing…",
          fbOk: "Yes!",
          fbBad: "After mind, use the -ing form.",
          fbText: "<b>Would you mind moving your bag?</b> mind + <b>-ing</b>, not <i>to move</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of Andrii’s message is wrong.</p>`,
          text: "Excuse me, would you mind [to open] the door for me? I’d like to [!come in].",
          hint: "Read the box “Asking politely” again.",
          fbOk: "Good eye!",
          fbBad: "Would you mind + which form?",
          fbText: "After <i>mind</i>, use -ing: <b>Would you mind opening the door for me?</b> <i>I’d like to come in</i> is correct."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>Emma is at a café. A boy is sitting alone at a table for four. She wants to sit at his table.</p>`,
          before: "Do you mind if I",
          after: "here?",
          answer: ["sit", "sit down"],
          hint: "Do you mind if I + verb…?",
          fbOk: "Exactly.",
          fbBad: "Emma wants a seat. Which verb does she need?",
          fbText: "<b>Do you mind if I sit here?</b> Do you mind if I + verb → asking for permission."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes the summary for the Bright Radio page.</p>`,
          text: "This week on Bright Radio: good manners. Most listeners think that jumping the {*queue|row} is the rudest thing. Others don’t like people who look at their phones instead of making eye {*contact|look|connection}. Our advice: don’t {*interrupt|interruption} people. And if you need help, just ask: “Would you mind {*helping|to help|help} me?”",
          hint: "jump the …; make eye …; a verb after don’t; mind + -ing.",
          fbOk: "Well done!",
          fbBad: "Check the phrases in the lesson and the form after mind.",
          fbText: "jumping the <b>queue</b>; making eye <b>contact</b>; don’t <b>interrupt</b> (a verb); would you mind <b>helping</b>."
        }
      ],
      outro: {
        text: "Would you mind remembering your manners? No, not at all!",
        learned: [
          "Talk about good and bad manners: polite, rude, jump the queue.",
          "Ask politely: Would you mind + -ing? Do you mind if I…?",
          "Answer Would you mind…? correctly."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e11s1l3",
      title: "The day before, the next day: reported speech",
      short: "Reported speech",
      icon: "voice",
      status: "verified",
      why: "Report what people said days ago. Change the tenses and the words for time and place.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "An interview at the shelter",
          body: `<p class="lead">On Monday, Zoriana interviews Ms Romaniuk at an animal shelter in Kyiv.</p><p><b>Ms Romaniuk:</b> I started this shelter five years ago. We have found homes for 300 dogs. Yesterday a family took two puppies. Tomorrow we’re having an open day here.</p><p>A week later, Zoriana writes her article:</p><p><i>Ms Romaniuk said she <b>had started</b> the shelter five years before. She said they <b>had found</b> homes for 300 dogs. She told me a family had taken two puppies <b>the day before</b>. She said they were having an open day <b>there the next day</b>.</i></p><p>What words change?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Ms Romaniuk: “We have found homes for 300 dogs.”</p><p>Zoriana writes: She said they … homes for 300 dogs.</p>`,
          opts: [
            "have found",
            "had found",
            "has found"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<i>Have found</i> (Present Perfect) goes back to <b>had found</b> (Past Perfect). The next screen shows all the changes."
        },
        {
          type: "info",
          title: "Reported speech: the tenses go back",
          body: `<p>You know these changes:</p><ul><li>am / is → <b>was</b>; do → <b>did</b>; can → <b>could</b>; will → <b>would</b></li></ul><p>New:</p><ul><li>Present Perfect → <b>Past Perfect</b>: have found → <b>had found</b></li><li>Past Simple → <b>Past Perfect</b>: started → <b>had started</b></li><li>Past Perfect → no change: had done → had done</li></ul><p>“I <b>started</b> the shelter.” → She said she <b>had started</b> the shelter.</p><p>Still true now? You can keep the tense: <i>She said dogs need / needed walks every day.</i></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Ms Romaniuk: “I have worked with animals for twenty years. I will show you the new building. Our volunteers are very kind.”</p>`,
          text: "She said she {*had worked|had work|have worked} with animals for twenty years. She said she {*would|will be|would to} show us the new building. She said the volunteers {*were|is|was} very kind.",
          hint: "The tenses go back. Who are you talking about: she or the volunteers?",
          fbOk: "Exactly.",
          fbBad: "had + the third form; will → would; the volunteers → plural.",
          fbText: "have worked → <b>had worked</b>; will → <b>would</b>; are → <b>were</b> (the volunteers = they)."
        },
        {
          type: "info",
          title: "Past Simple: two ways",
          body: `<p>“A family <b>took</b> two puppies yesterday.”</p><ul><li>→ She said a family <b>had taken</b> two puppies the day before.</li><li>→ She said a family <b>took</b> two puppies the day before.</li></ul><p>Both are correct. In speaking, people often keep the Past Simple when the order is clear. The Past Perfect shows clearly that it happened earlier, so it’s common in articles and reports.</p>`,
          cta: "Next"
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Ms Romaniuk: “Ten volunteers came yesterday.”</p><p>What can Zoriana write a week later?</p>`,
          opts: [
            "She said ten volunteers had come the day before.",
            "She said ten volunteers came the day before.",
            "She said ten volunteers have come the day before.",
            "She said ten volunteers had came the day before."
          ],
          correct: [0, 1],
          hint: "The Past Simple can go back, or it can stay. Check the forms.",
          fbOk: "Well done!",
          fbBad: "Two answers are correct. come – came – come.",
          fbText: "<b>had come</b> and <b>came</b> are both correct. <i>Have come</i> isn’t a past tense, and <i>had came</i> is the wrong form: come – came – <b>come</b>."
        },
        {
          type: "info",
          title: "Time and place words",
          body: `<p>When you report later or in a different place, these words often change:</p><ul><li>today → <b>that day</b></li><li>yesterday → <b>the day before</b> / the previous day</li><li>tomorrow → <b>the next day</b> / the following day</li><li>last week → <b>the week before</b></li><li>ago → <b>before</b>; now → <b>then</b></li><li>here → <b>there</b>; this → <b>that</b></li></ul><p>Report on the same day, in the same place? Then <i>today</i> and <i>here</i> can stay.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "gram",
          title: "Match the words and the reported words.",
          left: ["yesterday", "tomorrow", "here", "now", "last week"],
          right: ["the day before", "the next day", "there", "then", "the week before"],
          hint: "Which one is about a place?",
          fbOk: "Right.",
          fbBad: "Look at the list “Time and place words” again.",
          fbText: "yesterday → <b>the day before</b>; tomorrow → <b>the next day</b>; here → <b>there</b>; now → <b>then</b>; last week → <b>the week before</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          body: `<p>On Monday, Ms Romaniuk said: “Come back tomorrow. The puppies are sleeping now. You can play with them here.” Zoriana writes on Friday.</p>`,
          text: "Ms Romaniuk told us to come back {*the next day|the day before}. She said the puppies were sleeping {*then|the week before}. She said we could play with them {*there|that}.",
          hint: "tomorrow → …; now → …; here → …",
          fbOk: "Yes!",
          fbBad: "Look at the list “Time and place words”.",
          fbText: "tomorrow → <b>the next day</b>; now → <b>then</b>; here → <b>there</b>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Zoriana: “I’ll visit the shelter tomorrow.” Report her words a week later. Start with She said.</p>`,
          tiles: ["She said", "she", "would visit", "the shelter", "the next day"],
          extra: ["will visits"],
          answer: [
            "She said she would visit the shelter the next day.",
            "She said the next day she would visit the shelter."
          ],
          hint: "will → would; tomorrow → the next day.",
          fbOk: "Well done!",
          fbBad: "will → would. Check the form of the verb.",
          fbText: "<b>She said she would visit the shelter the next day.</b> will → <b>would</b>, tomorrow → <b>the next day</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>Ms Romaniuk spoke to Zoriana last Monday. One word in Zoriana’s sentence is wrong.</p>`,
          text: "Ms Romaniuk [!told me] that a family had taken two puppies [yesterday].",
          hint: "Zoriana is writing a week later. Is every word still right?",
          fbOk: "Good eye!",
          fbBad: "A week has passed. Which word is about time?",
          fbText: "A week later, <i>yesterday</i> is a different day. Say: <b>a family had taken two puppies the day before</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Zoriana’s article, a week after the interview.</p>`,
          text: "Last Monday, I visited an animal shelter in Kyiv. Ms Romaniuk told me that she {*had opened|had open|have opened} it five years before. She said that the volunteers {*had found|has found|had find} homes for ten dogs the week before. She also told me they {*were having|was having|are have} an open day {*the next day|the day before}.",
          hint: "Earlier actions → had + the third form. tomorrow → …",
          fbOk: "Well done!",
          fbBad: "Check the forms after she and they. Then the time words.",
          fbText: "she <b>had opened</b> it; the volunteers <b>had found</b> homes; they <b>were having</b> an open day <b>the next day</b>."
        }
      ],
      outro: {
        text: "Days later, in a different place: now you can report what people said with the right tenses and time words.",
        learned: [
          "Change the Present Perfect and the Past Simple to the Past Perfect in reported speech.",
          "Change time and place words: the day before, the next day, there.",
          "Keep the tense when something is still true."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e11s1l4",
      title: "She admitted that…, he promised that…: reporting verbs",
      short: "Reporting verbs",
      icon: "scroll",
      status: "verified",
      why: "Said and told aren’t the only verbs. Show how people said things: admitted, denied, promised, suggested.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Who broke the microphone?",
          body: `<p class="lead">After the school fair in Lviv, the Bright Radio team finds a broken microphone. Ms Kvitka, the head teacher, asks what happened.</p><p><b>Ostap:</b> Yes, it was me. I dropped it.<br><b>Myroslava:</b> I didn’t touch it! I wasn’t even in the studio.<br><b>Taras:</b> I’ll help to buy a new one. I promise.</p><p>Later, Taras writes in the radio team chat:</p><p><i>Ostap <b>admitted</b> that he had dropped the microphone. Myroslava <b>denied</b> that she had touched it. And I <b>promised</b> that I would help to buy a new one.</i></p><p>Who said, “It wasn’t me”?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Myroslava: “I didn’t touch it!”</p><p>Taras writes: Myroslava … that she had touched it.</p>`,
          opts: [
            "admitted",
            "promised",
            "denied"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "To <b>deny</b> means to say that something isn’t true. Myroslava <b>denied</b> that she had touched it."
        },
        {
          type: "info",
          title: "Reporting verbs + that (1)",
          body: `<ul><li><b>ad<u>mit</u></b> → say that something bad is true: <i>Ostap admitted (that) he had dropped it.</i></li><li><b>de<u>ny</u></b> (denied) → say that something isn’t true: <i>Myroslava denied (that) she had touched it.</i></li><li><b><u>prom</u>ise</b> → say that you will really do it: <i>Taras promised (that) he would help.</i></li><li><b>com<u>plain</u></b> → say that something is wrong or bad: <i>She complained (that) the sound was awful.</i></li><li><b>ex<u>plain</u></b> → make something clear, give a reason: <i>He explained (that) the cable was old.</i></li></ul><p>That can be left out. The tenses go back, as after said.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the reporting verbs.",
          left: ["“Yes, it was me. I broke it.”", "“No, I didn’t do it!”", "“I’ll be there at nine. I promise.”", "“The music is far too quiet!”"],
          right: ["admitted", "denied", "promised", "complained"],
          hint: "Which person says yes, and which person says no?",
          fbOk: "Well done!",
          fbBad: "Look at the meanings in the list again.",
          fbText: "“It was me” → <b>admitted</b>; “I didn’t do it” → <b>denied</b>; “I promise” → <b>promised</b>; “far too quiet” → <b>complained</b>."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          text: "Ostap said, “It was my fault.” He {*admitted|denied|complained} that it was his fault. Myroslava said, “I wasn’t in the studio.” She {*denied|admitted|promised} that she had been in the studio. Myroslava said, “Our equipment is so old!” She {*complained|promised|denied} that the equipment was very old.",
          hint: "Yes, it’s true → … No, it isn’t true → … Something is bad → …",
          fbOk: "Right.",
          fbBad: "Compare the words in quotes and the meaning of each verb.",
          fbText: "Ostap <b>admitted</b> it was his fault. Myroslava <b>denied</b> that she had been there. She <b>complained</b> that the equipment was old."
        },
        {
          type: "info",
          title: "Reporting verbs + that (2)",
          body: `<ul><li><b>a<u>gree</u></b> → say that you have the same opinion: <i>Everyone agreed (that) it was an accident.</i></li><li><b>in<u>sist</u></b> → say something firmly when others don’t agree: <i>Ostap insisted (that) he would pay.</i></li><li><b>sug<u>gest</u></b> → give an idea or a plan: <i>Taras suggested (that) they should sell his photos.</i></li></ul><p><b>suggest + -ing</b> is also correct: <i>Taras suggested selling his photos.</i></p>`,
          cta: "Next"
        },
        {
          type: "info",
          title: "Careful with explain and suggest",
          body: `<ul><li><b>explain</b> something <b>to</b> someone: <i>Ms Kvitka explained to us that the microphone was expensive.</i><br>Not: <s>explained us</s></li><li><b>suggest</b> + -ing, or suggest + that…:<br>Not: <s>suggested us to sell</s>, <s>suggested to sell</s></li><li><b>promise</b> and <b>tell</b> can have a person right after them: <i>He promised me (that)…</i>, <i>He told us (that)…</i></li></ul>`,
          cta: "Next"
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Taras: “Let’s sell my photos at the next school fair.”</p><p>Which reports are correct?</p>`,
          opts: [
            "Taras suggested selling his photos at the next school fair.",
            "Taras suggested that they should sell his photos at the next school fair.",
            "Taras suggested them to sell his photos at the next school fair.",
            "Taras suggested to sell his photos at the next school fair."
          ],
          correct: [0, 1],
          hint: "suggest + -ing, or suggest + that…",
          fbOk: "Exactly.",
          fbBad: "Two answers are correct. Read the box “Careful with explain and suggest”.",
          fbText: "<b>suggested selling</b> and <b>suggested that they should sell</b> are correct. Not: <i>suggested them to sell</i>, <i>suggested to sell</i>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Taras reports Ms Kvitka’s words in the team chat.</p><p>Which sentence is correct?</p>`,
          opts: [
            "Ms Kvitka explained us that a new microphone was very expensive.",
            "Ms Kvitka explained to us that a new microphone was very expensive.",
            "Ms Kvitka explained that us a new microphone was very expensive."
          ],
          correct: 1,
          hint: "Read the box “Careful with explain and suggest” again.",
          fbOk: "Good eye!",
          fbBad: "Can explain have a person right after it?",
          fbText: "We say <b>explain to</b> someone: <b>Ms Kvitka explained to us that a new microphone was very expensive.</b> Not: <i>explained us</i>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Ostap: “I will pay for it. Really, I will!”</p>`,
          tiles: ["Ostap", "insisted", "that", "he", "would pay", "for it"],
          extra: ["to pay"],
          answer: [
            "Ostap insisted that he would pay for it.",
            "He insisted that Ostap would pay for it."
          ],
          hint: "Start with Ostap. Then the reporting verb + that.",
          fbOk: "Yes!",
          fbBad: "insist + that + a person + would…",
          fbText: "<b>Ostap insisted that he would pay for it.</b> will → would. Not: <i>insisted to pay</i>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Myroslava: “No, I didn’t break the microphone!”</p>`,
          before: "Myroslava",
          after: "that she had broken the microphone.",
          answer: "denied",
          hint: "She says it isn’t true. deny → past form?",
          fbOk: "Well done!",
          fbBad: "Look at the list “Reporting verbs + that (1)”. Write the past form.",
          fbText: "Myroslava <b>denied</b> that she had broken it: she said it wasn’t true. deny → denied."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes the notes of the radio team meeting.</p>`,
          text: "At the meeting, Ostap {*admitted|denied} that he had dropped the microphone. Myroslava {*complained|promised} that our equipment was very old. Ms Kvitka {*explained|told} to us that a new microphone was expensive. I suggested {*selling|to sell} my photos at the next fair, and everyone {*agreed|denied} that it was a good idea.",
          hint: "Think about the meaning of each verb. Then: explain to, suggest + -ing.",
          fbOk: "Brilliant!",
          fbBad: "Check the meanings and the box “Careful with explain and suggest”.",
          fbText: "Ostap <b>admitted</b>; Myroslava <b>complained</b>; Ms Kvitka <b>explained</b> to us (not <i>told to us</i>); I suggested <b>selling</b>; everyone <b>agreed</b>."
        }
      ],
      outro: {
        text: "Admitted, denied, promised, suggested: now your reports show how people said things.",
        learned: [
          "Use reporting verbs + that: admit, deny, promise, complain, explain.",
          "Use agree, insist and suggest in reported speech.",
          "Avoid typical mistakes: explain to someone, suggest + -ing."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e11s1l5",
      title: "Tolerance, kindness and charity",
      short: "Kindness",
      icon: "shield",
      status: "verified",
      why: "Small acts of kindness can make a big difference. Talk about tolerance, charity and volunteering.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "A fair for the shelter",
          body: `<p class="lead">Andrii writes on the school website in Kyiv.</p><p><i>On Saturday, Year 11 is holding a charity fair. We’re raising money for the animal shelter that Zoriana wrote about. Bohdan is baking cakes, Kyrylo is selling old books, and Daryna is taking photos of pets for their owners. Our new classmate Yehor has volunteered to make the posters. Everyone is welcome!</i></p><p>Who is the money for?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Andrii: “We’re raising money for the animal shelter.”</p><p>What does <i>raise money</i> mean?</p>`,
          opts: [
            "spend money on things for yourself",
            "collect money from people for a good reason",
            "borrow money from a bank"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "To <b>raise money</b> means to collect money from other people for a reason: here, for the shelter."
        },
        {
          type: "info",
          title: "Charity words",
          body: `<ul><li>a <b><u>char</u>ity</b> → an organisation that helps people or animals in need</li><li><b>raise money for</b> → collect money for a reason</li><li><b>do<u>nate</u></b> (money, food, clothes) <b>to</b> → give to help</li><li>a <b><u>fund</u>raiser</b> → an event that raises money for a charity</li><li>a <b>volun<u>teer</u></b> → a person who helps without being paid; <b>to volunteer</b> → offer to help</li><li><b>people in need</b> → people who don’t have enough of what they need</li><li><b>make a difference</b> → make a situation better</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the meanings.",
          left: ["donate", "a volunteer", "a fundraiser", "people in need"],
          right: ["give money or things to help", "a person who helps without being paid", "an event that raises money for a charity", "people who don’t have enough of what they need"],
          hint: "Which one is an event? Which one is a person?",
          fbOk: "Right.",
          fbBad: "Look at the list “Charity words” again.",
          fbText: "<b>donate</b> → give to help; <b>a volunteer</b> → helps without being paid; <b>a fundraiser</b> → an event that raises money; <b>people in need</b> → don’t have enough."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          text: "Bohdan is baking cakes to raise money {*for|to|on} the shelter. Daryna’s grandma donated warm blankets {*to|on|with} the shelter. Ten students {*volunteered|volunteers|volunteering} to help at the fair. Every small donation can {*make|do|get} a difference.",
          hint: "raise money …; donate … to; a past verb; … a difference.",
          fbOk: "Exactly.",
          fbBad: "Check the phrases in the list “Charity words”.",
          fbText: "raise money <b>for</b>; donated blankets <b>to</b> the shelter; ten students <b>volunteered</b>; <b>make</b> a difference."
        },
        {
          type: "info",
          title: "Tolerance and kindness",
          body: `<p>Remember <i>tolerant</i>? Here are the nouns:</p><ul><li><b><u>tol</u>erant</b> → <b><u>tol</u>erance</b> → accepting people, opinions and ways of life that are different from yours</li><li><b>kind</b> → <b><u>kind</u>ness</b> → being friendly and helpful</li><li><b>re<u>spect</u></b> → treating people with care, even when you disagree</li></ul><p>More phrases:</p><ul><li><b>treat</b> people <b>fairly</b> / <b>equally</b> → in the same good way</li><li><b>judge</b> someone → decide what they are like, often too quickly: <i>Don’t judge people by their clothes.</i></li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          text: "Thank you for your {*kindness|kind|kindly}! {*Tolerance|Tolerant|Tolerate} means accepting people who are different. Don’t {*judge|judging|judgement} people before you know them.",
          hint: "After your → a noun. At the start of the sentence → a noun. After don’t → a verb.",
          fbOk: "Yes!",
          fbBad: "Noun or verb? Look at the word before each gap.",
          fbText: "your <b>kindness</b> (noun); <b>Tolerance</b> means… (noun); don’t <b>judge</b> (verb)."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><i>When Yehor joined our class in September, some people judged him too quickly. He is very quiet, he doesn’t like football, and he listens to jazz. “He’s a bit strange,” said someone. Then Kyrylo noticed Yehor’s drawings in his notebook. They were amazing! Kyrylo asked him to make posters for the charity fair, and Yehor agreed at once. Now everyone knows his name, and two people have asked him for drawing lessons.</i> – Andrii</p><p>Why did Kyrylo ask Yehor to make the posters?</p>`,
          opts: [
            "He had seen Yehor’s amazing drawings.",
            "Yehor had asked him for help.",
            "Yehor liked football and jazz."
          ],
          correct: 0,
          hint: "What did Kyrylo notice in Yehor’s notebook?",
          fbOk: "Well done!",
          fbBad: "Read the sentences about the notebook again.",
          fbText: "Kyrylo noticed Yehor’s <b>drawings</b>: they were amazing. Some people had judged Yehor too quickly, but Kyrylo got to know him."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the word.",
          body: `<p>Make a noun. kind → kindness</p>`,
          before: "tolerant →",
          answer: "tolerance",
          hint: "Look at the list “Tolerance and kindness” again.",
          fbOk: "Right.",
          fbBad: "tolerant → toler…",
          fbText: "tolerant → <b>tolerance</b>: accepting people and ideas that are different."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+char|i|ty", "vol|un|+teer", "do|+nate", "+tol|er|ance"],
          fbOk: "Good eye!",
          fbBad: "Look at the underlined parts in the lists.",
          fbText: "<u>char</u>ity, volun<u>teer</u>, do<u>nate</u>, <u>tol</u>erance."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>Every year on 5 December, people in Ukraine and around the world celebrate International Volunteer Day. The United Nations started this day in 1985. It says thank you to people who give their time to help others. At our school, we don’t wait for December. After the charity fair, twelve students volunteered to walk dogs at the shelter every weekend. Yehor is making a new poster: “You don’t need a lot of money to make a difference.”</i></p><p>What is International Volunteer Day for?</p>`,
          opts: [
            "to raise money for the United Nations",
            "to choose the best volunteer in Ukraine",
            "to thank people who help others in their free time"
          ],
          correct: 2,
          hint: "Find the sentence that starts with It says…",
          fbOk: "Exactly.",
          fbBad: "Read the first three sentences again.",
          fbText: "The day <b>says thank you</b> to volunteers: people who give their time to help others. The UN started it in 1985, and it’s on 5 December."
        }
      ],
      outro: {
        text: "Raise money, donate, volunteer – and don’t judge people too quickly. That’s how you make a difference.",
        learned: [
          "Talk about charity: raise money for, donate to, volunteer.",
          "Talk about tolerance, kindness and respect.",
          "Make nouns: tolerant → tolerance, kind → kindness."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e11s1l6",
      title: "Housework: is it fair? A family discussion",
      short: "Fair housework",
      icon: "home",
      status: "verified",
      why: "Who does the washing-up at your home? Give reasons for your opinion and keep a family discussion going.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "A new rota",
          body: `<p class="lead">Oksana’s family in Zelena Dolyna has had the same housework list on the fridge for four years.</p><p><b>Oksana:</b> Can I say something before dinner? I think our housework rota isn’t fair any more.<br><b>Dad:</b> Really? Why not?<br><b>Oksana:</b> For one thing, I’ve done the washing-up every evening for four years. For another, Dmytro is thirteen now, but he only makes his bed.<br><b>Dmytro:</b> Hang on! I water the plants too!<br><b>Grandma Hanna:</b> Let her finish, Dmytro.<br><b>Oksana:</b> Thanks. That’s why I suggest taking turns with the washing-up.<br><b>Mum:</b> That’s a fair point. What do you think, Dmytro?<br><b>Dmytro:</b> Well… OK. But only if I can choose the music!<br><b>Dad:</b> Fair enough. Let’s write a new rota.</p><p>Do you think Oksana is right?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><b>Oksana:</b> For one thing, I’ve done the washing-up every evening for four years. For another, Dmytro is thirteen now, but he only makes his bed.</p><p>Why does Oksana think the rota isn’t fair?</p>`,
          opts: [
            "She has done the washing-up for years, and Dmytro does very little.",
            "Dmytro doesn’t water the plants any more.",
            "Grandma Hanna does all the housework alone."
          ],
          correct: 0,
          hint: "Oksana gives two reasons. Find them.",
          fbOk: "Right.",
          fbBad: "Read Oksana’s two reasons again: for one thing…, for another…",
          fbText: "Her two reasons: she <b>has done the washing-up</b> every evening for four years, and Dmytro <b>only makes his bed</b>."
        },
        {
          type: "info",
          title: "Giving reasons for your opinion",
          body: `<ul><li><b>For one thing</b>, … <b>For another</b>, … → give two reasons</li><li><b>The main reason is that</b> … → give the most important reason</li><li><b>That’s why</b> I think / I suggest … → say what follows from your reasons</li></ul><p>You know these: <i>I think…, In my opinion…, I see your point, but…</i></p><p><i>For one thing, I do it every day. For another, it takes an hour. <b>That’s why</b> I think it isn’t fair.</i></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "func",
          title: "Complete the sentences.",
          text: "{*For one thing|For first thing|One thing for}, I do the washing-up every day. {*For another|For other|Another one}, Dmytro is old enough to help. {*That’s why|So that|Because of} I think the rota isn’t fair.",
          hint: "Two reasons, then what follows from them.",
          fbOk: "Well done!",
          fbBad: "Look at the phrases in “Giving reasons for your opinion”.",
          fbText: "<b>For one thing</b> → the first reason; <b>For another</b> → the second reason; <b>That’s why</b> → what follows from them."
        },
        {
          type: "info",
          title: "Getting attention and keeping a discussion going",
          body: `<ul><li>you want to speak → <i>Can I say something?</i> / <b>Could I just add something?</b></li><li>you ask a quiet person → <b>What do you think, Dmytro?</b></li><li>you accept an idea → <b>That’s a fair point.</b> / <b>Fair enough.</b> (= OK, I understand and accept that)</li><li>the talk goes off topic → <b>Let’s get back to</b> … (= return to the main topic)</li><li>someone interrupts → <b>Let her / him finish, please.</b></li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "func",
          title: "Match the situations and the phrases.",
          left: ["You want to join the discussion.", "You accept someone’s idea.", "You ask a quiet person.", "The discussion goes off topic."],
          right: ["Could I just add something?", "That’s a fair point.", "What do you think, Dmytro?", "Let’s get back to the rota."],
          hint: "Which phrase brings people back to the main topic?",
          fbOk: "Exactly.",
          fbBad: "Look at the list “Getting attention and keeping a discussion going”.",
          fbText: "Join → <b>Could I just add something?</b>; accept → <b>That’s a fair point.</b>; a quiet person → <b>What do you think…?</b>; off topic → <b>Let’s get back to…</b>"
        },
        {
          type: "info",
          title: "Sharing the housework",
          body: `<ul><li><b>household chores</b> → jobs you do at home regularly, like <i>do the washing-up</i>, <i>do the ironing</i></li><li><b>load</b> / <b>empty the dishwasher</b></li><li><b>do the laundry</b> → wash clothes; <b>hang out the washing</b> → put wet clothes outside to dry</li><li><b>vacuum</b> the floor → clean it with a machine</li><li><b>take out the rubbish</b></li><li>a <b>rota</b> → a list of who does what and when</li><li><b>take turns</b> → do something one after the other</li><li><b>do your fair share</b> → do a fair part of the work</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          body: `<p>The new rota on the fridge.</p>`,
          text: "From now on, Oksana and Dmytro will take {*turns|turn|returns} with the washing-up. Everyone will do their fair {*share|shares|sharing}. Dad will {*vacuum|vacuuming|vacuums} the floors at the weekend, and Grandad will take {*out|off|up} the rubbish.",
          hint: "take …; do your fair …; will + verb; take … the rubbish.",
          fbOk: "Yes!",
          fbBad: "Check the list “Sharing the housework”.",
          fbText: "take <b>turns</b>; their fair <b>share</b>; will <b>vacuum</b> (will + verb); take <b>out</b> the rubbish."
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p>In the middle of the family discussion, Dmytro starts talking about yesterday’s football match.</p><p><b>Dmytro:</b> …and then our team scored in the last minute!<br><b>Mum:</b> …</p><p>What does Mum say?</p>`,
          opts: [
            "That’s a fair point.",
            "Let’s get back to the rota.",
            "Could I just add something?"
          ],
          correct: 1,
          hint: "Is football the main topic?",
          fbOk: "Right.",
          fbBad: "Football isn’t the topic. Which phrase brings everyone back?",
          fbText: "<b>Let’s get back to the rota.</b> = Let’s return to the main topic. The talk about football is off topic."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Oksana gives her idea. Start with I.</p>`,
          tiles: ["I", "suggest", "taking turns", "with", "the washing-up"],
          extra: ["to take turns"],
          answer: "I suggest taking turns with the washing-up.",
          hint: "I suggest + -ing…",
          fbOk: "Well done!",
          fbBad: "suggest + -ing, not suggest + to.",
          fbText: "<b>I suggest taking turns with the washing-up.</b> suggest + <b>-ing</b>."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>Dmytro is still talking about football. Mum wants to return to the main topic.</p>`,
          before: "Let’s get",
          after: "to the rota.",
          answer: "back",
          hint: "get … to → return to the main topic.",
          fbOk: "Exactly.",
          fbBad: "Look at the list “Getting attention and keeping a discussion going”.",
          fbText: "<b>Let’s get back to the rota.</b> get back to = return to the main topic."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes to Emma about the discussion.</p>`,
          text: "Last night I {*explained|told} to my family that the old rota wasn’t fair. Dmytro {*insisted|admitted} that he did enough because he watered the plants. But Mum said it {*was|were|be} a fair point, and in the end Dmytro {*agreed|denied} to take turns. Now we have a new rota, and everyone does their fair {*share|shares}!",
          hint: "explain to; Dmytro thinks he does enough; Mum’s words go back; he says yes.",
          fbOk: "Well done!",
          fbBad: "Check the reporting verbs from Lesson 4 and the list “Sharing the housework”.",
          fbText: "I <b>explained</b> to my family; Dmytro <b>insisted</b> that he did enough; Mum said it <b>was</b> a fair point; Dmytro <b>agreed</b> to take turns; their fair <b>share</b>."
        }
      ],
      outro: {
        text: "For one thing, it’s fair. For another, it’s faster. That’s why sharing the housework works!",
        learned: [
          "Give reasons: for one thing, for another, that’s why.",
          "Join and keep a discussion going: Could I just add something? Let’s get back to…",
          "Talk about sharing the housework: take turns, a rota, do your fair share."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e11s1l7",
      title: "Fair play: rights, responsibilities and tolerance",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e11s1boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help the school newspaper?",
          body: `<p class="lead">Andrii’s school newspaper in Kyiv is making a page about the charity fair.</p><p>Check the texts and read the main story. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Complete the sentences.",
          text: "Every child has the right {*to|for|of} education. Students are responsible {*for|of|to} keeping the classroom tidy. People who jump the {*queue|row|order} have bad manners.",
          pre: "e11s1l2",
          hint: "the right …; responsible …; jump the …",
          fbOk: "Yes!",
          fbBad: "Check the phrases from Lessons 1 and 2.",
          fbText: "the right <b>to</b> education; responsible <b>for</b>; jump the <b>queue</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          body: `<p>On Friday, Bohdan said: “I have baked forty cakes. I will sell them here tomorrow.” Andrii writes about it a week later.</p>`,
          text: "Bohdan said he {*had baked|had bake|have baked} forty cakes. He said he would sell them {*there|that} {*the next day|the day before}.",
          pre: "e11s1l3",
          hint: "Present Perfect → …; here → …; tomorrow → …",
          fbOk: "Exactly.",
          fbBad: "had + the third form; here → there; tomorrow → the next day.",
          fbText: "have baked → <b>had baked</b>; here → <b>there</b>; tomorrow → <b>the next day</b>."
        },
        {
          type: "match",
          sk: "vocab",
          eyebrow: "Task 3",
          title: "Match the words and the reporting verbs.",
          left: ["“Yes, I forgot the posters.”", "“No, I didn’t eat the last cake!”", "“The queue is far too long!”", "“Yes, let’s do it! Good idea.”"],
          right: ["admitted", "denied", "complained", "agreed"],
          pre: "e11s1l4",
          fbOk: "Well done!",
          fbBad: "Yes, it’s true → … No, it isn’t true → …",
          fbText: "“Yes, I forgot” → <b>admitted</b>; “No, I didn’t” → <b>denied</b>; “far too long” → <b>complained</b>; “Good idea” → <b>agreed</b>."
        },
        {
          type: "multi",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Choose all the correct answers.",
          body: `<p>Daryna: “Let’s take photos of pets for their owners.”</p><p>Which reports are correct?</p>`,
          opts: [
            "Daryna suggested taking photos of pets for their owners.",
            "Daryna suggested that they should take photos of pets for their owners.",
            "Daryna suggested us to take photos of pets for their owners.",
            "Daryna explained us to take photos of pets for their owners."
          ],
          correct: [0, 1],
          pre: "e11s1l4",
          fbOk: "Right.",
          fbBad: "Two answers are correct: suggest + -ing, suggest + that…",
          fbText: "<b>suggested taking</b> and <b>suggested that they should take</b> are correct. Not: <i>suggested us to take</i>, <i>explained us</i>."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 5",
          title: "Read the dialogue and choose the best answer.",
          body: `<p>The class is planning the fair. Kyrylo and Bohdan are arguing. Zoriana hasn’t said anything yet, but now she has an idea.</p><p>What does Zoriana say?</p>`,
          opts: [
            "Let’s get back to the rota.",
            "Could I just add something?",
            "Let me finish, please."
          ],
          correct: 1,
          pre: "e11s1l6",
          fbOk: "Exactly.",
          fbBad: "Zoriana hasn’t started talking. She wants to join in.",
          fbText: "<b>Could I just add something?</b> is a polite way to join a discussion. <i>Let me finish</i> is for when you are already speaking."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: The missing money box, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i>On Saturday morning, the school hall was full of tables. Bohdan had baked forty cakes, and Kyrylo had brought two boxes of old books. Daryna was taking photos of pets for their owners. Yehor had made the posters, and they were everywhere: “Every hryvnia makes a difference!” The money went into a big red box on Andrii’s table. By twelve o’clock, the box was heavy. Andrii was very proud. More people were still arriving, and the queue for Bohdan’s cakes went all the way to the door. Then a little boy dropped a glass of juice on the table. Andrii ran to get some paper towels. When he came back five minutes later, the red box had gone. He looked under the table and behind the posters. Nothing. Andrii’s heart was beating fast. All that money for the shelter!</i></p><p>What happened while Andrii was getting paper towels?</p>`,
          opts: [
            "His cousin dropped the money box.",
            "Bohdan sold the last cake.",
            "Somebody took the money box from the table."
          ],
          correct: 2,
          pre: "e11s1l5",
          hint: "What did Andrii find when he came back?",
          fbOk: "Right.",
          fbBad: "Read the sentences after Andrii ran to get some paper towels.",
          fbText: "When Andrii came back, the box <b>had gone</b>: somebody had taken it while he was away."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: The missing money box, part 2 of 3",
          title: "Read and choose.",
          body: `<p><i>A few students came to help. Then someone said, “I saw Yehor near your table.” People started to look at Yehor. He went red. “I didn’t take it,” he said quietly. “I was only putting up a new poster.” Some students didn’t believe him. “He’s new. We don’t really know him,” one boy said. It was true that Yehor was quiet and didn’t talk much, but that didn’t make him a thief. Andrii felt uncomfortable. He remembered how people had judged Yehor in September. “Could I just say something?” he asked. “We don’t know what happened. Let’s not blame anyone yet.” Kyrylo agreed with him. He suggested asking the teachers first. Yehor looked at Andrii and smiled for the first time that day. Then Andrii, Kyrylo and Yehor went to look for the teachers together.</i></p><p>What did Andrii suggest?</p>`,
          opts: [
            "not blaming anyone before they knew what had happened",
            "calling the police at once",
            "asking Yehor to give the money back"
          ],
          correct: 0,
          pre: "e11s1l4",
          hint: "Find Andrii’s words after “Could I just say something?”",
          fbOk: "Well done!",
          fbBad: "Read Andrii’s words again.",
          fbText: "Andrii said they didn’t know what had happened, so they <b>shouldn’t blame anyone yet</b>. Kyrylo suggested asking the teachers."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: The missing money box, part 3 of 3",
          title: "Read and choose.",
          body: `<p><i>They found Ms Lysenko in the staffroom. She was holding the red box. “Oh, I’m so sorry!” she said. “I saw the box on an empty table, so I brought it here for safety. I meant to tell you.” She explained that she had wanted to keep the money safe. Andrii laughed with relief. Yehor laughed too, and suddenly the whole day felt bright again. Later, the boy who had blamed Yehor came to him. He admitted that he had been unfair, and he apologised. Yehor accepted his apology. At the end of the day, they counted the money. The fair had raised 18,600 hryvnias for the shelter. The next week, Zoriana wrote an article about the fair. Her title was “Don’t judge too quickly”. Yehor drew a small picture of a dog for it.</i></p><p>Why had Ms Lysenko taken the box?</p>`,
          opts: [
            "She wanted to count the money.",
            "She thought Yehor had taken it.",
            "She had wanted to keep the money safe."
          ],
          correct: 2,
          pre: "e11s1l3",
          hint: "Find explained in the text.",
          fbOk: "Exactly.",
          fbBad: "Read what Ms Lysenko explained.",
          fbText: "She saw the box on an empty table and took it <b>for safety</b>. She explained that she <b>had wanted to keep the money safe</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: The missing money box",
          title: "Read and choose.",
          body: `<p>Think about the whole story “The missing money box”.</p><p>What is the main idea of the story?</p>`,
          opts: [
            "Never leave money on a table at a fair.",
            "Find out what happened before you blame someone.",
            "Teachers should always count the money."
          ],
          correct: 1,
          pre: "e11s1l5",
          fbOk: "Well done!",
          fbBad: "Think about Zoriana’s title at the end.",
          fbText: "Some students blamed Yehor before they knew the facts. In the end, it was a misunderstanding. Zoriana’s title says it: <b>Don’t judge too quickly</b>."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about rights and responsibilities, manners and charity, and report what people said.",
        learned: [
          "Talk about rights, responsibilities and good manners.",
          "Report what people said with the right tenses and time words.",
          "Use reporting verbs: admit, deny, suggest, agree.",
          "Give reasons and keep a discussion going."
        ]
      }
    }
  ]
});
