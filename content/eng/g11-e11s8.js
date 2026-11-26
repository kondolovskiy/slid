/* Слід · Англійська мова, 11 клас — «Exams, careers and plans» (e11s8), останній розділ курсу
   Програма: П1407 («Іноземні мови. 10–11 класи», наказ МОН № 1407 від 23.10.2017), спеціалізовані школи, B2:
   11 кл., теми «Шкільне життя» (стосунки з товаришами; випускні іспити; перспектива на майбутнє навчання; міжнародні
   освітні програми) і «Робота і професії» (профорієнтація; престижні професії в Україні та за кордоном; плани на
   майбутнє) — с. 23–24 (інтеграція тем — с. 22); функції (с. 23): висловлювати побажання, підводити підсумки
   обговорення, завершувати розмову — l6; обговорювати перспективи — l4–l5; граматика (с. 25): first, second and third
   conditional — огляд, повторення e7s6l3, e8s8l5, e9s8l5, e10s6l3–l5, нове — три умовні поруч, вибір за часом і
   реальністю, could have / might have (l3); overview of all tense forms (active) — огляд: теперішні й минулі (l1),
   майбутні (l4), повторення e8s1l2, e8s5l4, e10s5l4, e9s2l4, e10s4l2, e10s4l5; I hope… / I’d love to… / I wish + Past
   Simple — (наш) для функції «висловлювати побажання» (l6); обсяги — с. 21 (читання 400–450 слів — l2, три уривки):
   https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf
   Розподіл — content/eng/plan.js, reports/verify/plan-eng-g10-11.md. Не дублює e9s7 (професії, якості, поради) і e10s8
   (заклади освіти, НМТ, UCAS, сучасні професії): тут — підготовка до іспитів, програми обміну, вибір професії, престиж.
   Друга правильна відповідь: у вправах на часи й умовні варіанти дібрано так, щоб друга можлива форма (will / going to /
   Present Continuous; Present Perfect / Past Simple; would / could / might; hope + Present Simple / will) не стояла
   хибним варіантом; would / could / might у третьому умовному — multi; I wish I was / were — не оцінюється.
   Факти (НМТ: з 2022, 3 предмети у 2022, 4 у 2026; Erasmus з 1987, Erasmus+ — програма ЄС для освіти, навчання,
   молоді й спорту; угода між університетами для мобільності українських студентів; UK — Turing scheme з 2021, угода
   грудня 2025 про повернення в Erasmus+ у 2027; eTwinning; тривалість медичної освіти: Україна — 6 років, UK — зазвичай
   5) — по два джерела; URL — tasks/…/write-eng-g11-e11s8.md, «Нотатки агента». Опитування класу Andrii — вигадане.
   Діалоги — репліками в body (D-056), без звуку (D-055 п. 4).
   Герої — серія 4–11 кл., на сім років старші, ніж у 4 кл.: Oksana, Andrii, Mariia, Taras, Emma, Daryna, Kyrylo,
   Zoriana, Bohdan — 17; Emma — Year 12. Нові: Ms Hrytsenko (кар’єрна радниця ліцею Oksana в Poltava), Yustyna (20,
   Lviv, колишня учасниця penfriend club, семестр у Lithuania), Solomiia (студентка ветеринарії, Kharkiv).
   Форми, наголос і значення — Cambridge Dictionary (CD), CD Grammar «Wish», OALD.
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: draft (writer-e11s8). 7 уроків (6 + фінал). Будова — за розділами 10–11 кл. (e10s8, e11s1).
   Перевірка: node tools/validate.mjs --section e11s8 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e11s8",
  grade: 11,
  weeks: [32, 35],
  title: "Exams, careers and plans",
  why: "To talk about final exams, studying after school and international programmes. And to choose a career and share your plans and wishes.",
  requires: ["e7s6l3", "e8s1l2", "e8s5l4", "e8s8l5", "e9s2l4", "e9s7l4", "e9s8l5", "e10s2l6", "e10s4l2", "e10s4l5", "e10s5l4", "e10s6l4", "e10s6l5", "e10s8l2", "e10s8l6"],
  meta: { author: "writer-e11s8", created: "2026-11-26", factcheck: null, teacher: null },
  badges: [
    { id: "e11s8boss", name: "Ready for the future", icon: "trophy", desc: "Finish the final lesson “Exams, careers and plans”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e11s8l1",
      title: "Final exams: getting ready",
      short: "Final exams",
      icon: "book",
      status: "draft",
      why: "Final exams are coming. Learn the words for getting ready, and choose the right present or past form.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Four weeks to go",
          body: `<p class="lead">It’s May. Andrii and his friends in Kyiv have a group chat called “NMT prep”.</p><p><b>Andrii:</b> I’ve been revising since February, and I’m doing a practice test right now. Maths is still the hardest part for me.<br><b>Daryna:</b> I took a practice test last Saturday. I was doing the history part when my laptop died!<br><b>Zoriana:</b> Has everyone registered? I registered in March.<br><b>Kyrylo:</b> I’d forgotten about it, but I’ve just done it. Phew!</p><p>How are they getting ready for the test?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><b>Andrii:</b> I’ve been revising since February, and I’m doing a practice test right now.<br><b>Daryna:</b> I took a practice test last Saturday.</p><p>Who is doing a practice test at the moment?</p>`,
          opts: [
            "Daryna",
            "Andrii and Daryna",
            "Andrii"
          ],
          correct: 2,
          hint: "Find the words that mean ‘at the moment’.",
          fbOk: "Right.",
          fbBad: "Read Andrii’s message again: what is he doing right now?",
          fbText: "<b>Andrii</b> is doing a test <i>right now</i>. Daryna did hers <i>last Saturday</i>: that’s finished."
        },
        {
          type: "info",
          title: "Getting ready for exams",
          body: `<ul><li><b>re<u>vise</u></b> (UK) → study again what you have learnt, before an exam; <b>re<u>vi</u>sion</b> → the noun</li><li>a <b>revision timetable</b> → a plan of what to revise and when</li><li>a <b>practice test</b> → a test for practice before the real one</li><li><b>register for</b> a test → put your name on the list to take it; the <b><u>dead</u>line</b> → the last day to do it</li><li><b>take</b> an exam (UK also <b>sit</b> an exam); <b>pass</b> ↔ <b>fail</b>; <b>retake</b> → take it again</li><li>your <b>score</b> → the number of points you get</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["Zoriana made a revision", "Kyrylo registered before the", "Daryna did a practice test", "If you fail an exam, you can sometimes"],
          right: ["timetable for May.", "deadline.", "before the real one.", "retake it."],
          hint: "What do you call the last day to register?",
          fbOk: "Well done!",
          fbBad: "Look at the box “Getting ready for exams” again.",
          fbText: "a revision <b>timetable</b>; before the <b>deadline</b>; a practice test <b>before the real one</b>; you can sometimes <b>retake</b> it."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Andrii got 170 points in his practice test. He’s happy with it.</p>`,
          before: "Andrii got a good",
          after: "in his practice test.",
          answer: ["score", "result", "mark"],
          hint: "The number of points you get → ?",
          fbOk: "Yes!",
          fbBad: "Check the box “Getting ready for exams”.",
          fbText: "Andrii got a good <b>score</b>: the number of points he got."
        },
        {
          type: "choice",
          sk: "cult",
          title: "Read and choose.",
          body: `<p><b>Zoriana:</b> The NMT, the National Multi-subject Test, started in 2022. In 2022, it had three subjects. In 2026, it had four. The rules can change from year to year, so before I register, I always check the official website.</p><p>Why does Zoriana check the official website?</p>`,
          opts: [
            "because the test is on paper",
            "because the rules can change",
            "because the test always has three subjects"
          ],
          correct: 1,
          hint: "Find the sentence with so.",
          fbOk: "Exactly.",
          fbBad: "Read Zoriana’s last sentence again.",
          fbText: "The rules <b>can change</b>: three subjects in 2022, four in 2026. That’s why she checks the official website first."
        },
        {
          type: "info",
          title: "Present forms: an overview",
          body: `<p>Which form? Think about the time and the idea.</p><ul><li>Present Simple → habits, facts and timetables:<br>I <b>revise</b> every evening. The test <b>starts</b> at nine.</li><li>Present Continuous → now or around now:<br>I<b>’m doing</b> a practice test right now.</li><li>Present Perfect → a past action with a result now; life experience:<br>I<b>’ve</b> just <b>registered</b>. I<b>’ve never taken</b> a test on a computer.</li><li>Present Perfect Continuous → it started in the past and is still going; how long:<br>I<b>’ve been revising</b> since February.</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          body: `<p>Andrii writes to Emma.</p>`,
          text: "I {*’m writing|write|’ve written} this message on the bus right now. I {*’ve been revising|’m revising|revise} for the NMT since February. I {*’ve already registered|already register|’ve already register} for it. I {*’ve never taken|never take|’m never taking} a test on a computer before, so I’m a bit nervous.",
          hint: "Look at the time words: right now, since, already, never… before.",
          fbOk: "Well done!",
          fbBad: "Check the time words and the box “Present forms: an overview”.",
          fbText: "<i>right now</i> → <b>’m writing</b>; <i>since February</i>, still going → <b>’ve been revising</b>; a result now → <b>’ve already registered</b>; experience up to now → <b>’ve never taken</b>."
        },
        {
          type: "info",
          title: "Past forms: an overview",
          body: `<ul><li>Past Simple → a finished action at a finished time:<br>I <b>took</b> a practice test last Saturday.</li><li>Past Continuous → in progress at a past moment:<br>I <b>was doing</b> the history part when my laptop died.</li><li>Past Perfect → earlier than another past action:<br>When I got there, the test <b>had</b> already <b>started</b>.</li><li>Past Perfect Continuous → how long, up to a past moment:<br>I<b>’d been revising</b> for three hours when Kyrylo called.</li></ul><p>With a finished time (<i>yesterday, last year, in 2022</i>), use the Past Simple, not the Present Perfect.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Daryna tells the story of her practice test.</p>`,
          text: "Last Saturday, I {*took|have taken|take} a practice test online. I {*was doing|have done|do} the history part when my laptop died. I {*’d been working|’ve been working|work} for almost two hours! Luckily, I {*had saved|have saved|save} my answers a minute before.",
          hint: "It all happened last Saturday. Which action was in progress? Which happened earlier?",
          fbOk: "Exactly.",
          fbBad: "Last Saturday is a finished time. Look at the box “Past forms: an overview”.",
          fbText: "<b>took</b> (finished time); <b>was doing</b> (in progress when the laptop died); <b>’d been working</b> (how long, up to that moment); <b>had saved</b> (earlier than the laptop dying)."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of Kyrylo’s message is wrong.</p>`,
          text: "Yesterday I [have registered] for the NMT. I [!’ve been revising] since March, and now I [!’m doing] a practice test.",
          hint: "Look for a finished time.",
          fbOk: "Good eye!",
          fbBad: "Yesterday is a finished time. Which form goes with it?",
          fbText: "Yesterday I <b>registered</b>: a finished time → the Past Simple. <i>I’ve been revising since March</i> and <i>now I’m doing</i> are correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes a post for the penfriend club.</p>`,
          text: "The NMT is in three weeks. I {*’ve been revising|’m revising|revise} since February, and I {*made|have made|make} a revision timetable on the first day. Yesterday, I {*was doing|have done|do} a practice test when the lights went out. Luckily, I {*had finished|have finished|finish} the maths part by then!",
          hint: "since February → ? on the first day → ? in progress when… → ? earlier than… → ?",
          fbOk: "Well done!",
          fbBad: "Check the time words and the two overview boxes.",
          fbText: "<b>’ve been revising</b> since February; <b>made</b> on the first day (a finished time); <b>was doing</b> when the lights went out; <b>had finished</b> by then (earlier)."
        }
      ],
      outro: {
        text: "Revise, register, take the test: now you can talk about getting ready for exams and choose the right present or past form.",
        learned: [
          "Talk about getting ready for exams: revise, register, a practice test, a score.",
          "Choose the right present form: now, habits, results and how long.",
          "Choose the right past form: finished, in progress or earlier."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e11s8l2",
      title: "International programmes and exchanges",
      short: "Exchanges",
      icon: "globe",
      status: "draft",
      why: "Study abroad for a term or work on a project with a school in another country. Read how three young people learn across borders.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Learning across borders",
          body: `<p class="lead">The penfriend club magazine has a new topic: “Learning across borders”.</p><p>Three people have written about it: Yustyna, a university student from Lviv, Emma from England and Andrii from Kyiv.</p><p>Would you like to study in another country for a few months?</p>`,
          cta: "Let’s read"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p><b>Erasmus</b> is a famous European exchange programme for students.</p><p>When do you think it started?</p>`,
          opts: [
            "in the 1950s",
            "in the 1980s",
            "in the 2010s"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>In the 1980s</b>: the first Erasmus exchanges started in 1987. Read more in Yustyna’s text."
        },
        {
          type: "info",
          title: "Words for the article",
          body: `<ul><li>an <b>ex<u>change</u></b> → students from two countries visit or study at each other’s schools or universities</li><li>a <b><u>part</u>ner university</b> → a university that works with yours</li><li>a <b>host family</b> → a family that a visiting student stays with</li><li>a <b>term</b> → one part of the school or university year</li><li>a <b>grant</b> → money for your studies that you don’t pay back</li><li><b>credits</b> → points for the courses you pass; they count towards your degree</li><li><b>a<u>broad</u></b> → in or to another country</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the meanings.",
          left: ["a host family", "a partner university", "a grant", "a term"],
          right: ["the people you stay with abroad", "a university that works with yours", "money for your studies", "one part of the university year"],
          hint: "Which one is money? Which one is people?",
          fbOk: "Exactly.",
          fbBad: "Look at the box “Words for the article” again.",
          fbText: "a <b>host family</b> → the people you stay with; a <b>partner university</b> → works with yours; a <b>grant</b> → money for your studies; a <b>term</b> → one part of the year."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Learning across borders, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i><b>1. Yustyna, 20, Lviv</b><br>I was in the penfriend club at school, and now I’m in my second year of economics. This spring, I’m spending a term at a partner university in Lithuania through Erasmus+. It’s the European Union’s programme for education, training, youth and sport. The first Erasmus exchanges started in 1987. Students from Ukrainian universities can take part too, but only if their university has an agreement with a university abroad. Mine has a few partners, so I applied in the autumn. I had to write a letter about my reasons and show my level of English. I got a grant, so I don’t pay for my studies here. The courses I take are worth credits, and they will count towards my degree at home. At first, I was nervous about living abroad, but now I feel at home here. I share a flat with students from Spain and Georgia, and we speak English all the time.</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Yustyna pays for her studies in Lithuania.",
            "Yustyna’s courses abroad will count towards her degree.",
            "Any Ukrainian student can take part without an agreement."
          ],
          correct: 1,
          hint: "What happens with her credits?",
          fbOk: "Right.",
          fbBad: "Read the last two sentences again.",
          fbText: "Her courses are worth credits, and they <b>will count towards her degree</b> at home. She got a grant, and her university needs an agreement with a partner."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Learning across borders, part 2 of 3",
          title: "Read and choose.",
          body: `<p><i><b>2. Emma, 17, England</b><br>I’m in Year 12, and next year I’ll apply to universities. When my mum was a student, she spent a term in France through Erasmus, and she still talks about it. She says a term abroad isn’t only about studying: you make friends from all over Europe. But British students haven’t always had this chance. After Brexit, the UK left the programme, and in 2021 it started its own one, the Turing scheme. Then, in December 2025, the UK and the EU agreed that the UK would rejoin Erasmus+ in 2027. If I get into university, I’d love to spend a term abroad, maybe in Spain. You don’t have to wait for university, though. Our class and Andrii’s class in Kyiv made the website “Two countries” together last year.</i></p><p>What happened with the UK and Erasmus+?</p>`,
          opts: [
            "The UK has never taken part in Erasmus.",
            "The UK joined Erasmus+ for the first time in 2021.",
            "The UK left the programme and later agreed to rejoin it."
          ],
          correct: 2,
          hint: "Find Brexit and December 2025 in the text.",
          fbOk: "Well done!",
          fbBad: "Read about Emma’s mum and about Brexit again.",
          fbText: "The UK <b>left</b> after Brexit and started the Turing scheme in 2021. In December 2025, it <b>agreed to rejoin</b> Erasmus+ in 2027. Emma’s mum took part in Erasmus long before that."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Learning across borders, part 3 of 3",
          title: "Choose all the correct answers.",
          body: `<p><i><b>3. Andrii, 17, Kyiv</b><br>I’m taking the NMT this summer, so studying abroad isn’t my plan for now. But I’ve already learnt a lot from other countries without leaving Kyiv. This year, our class joined an eTwinning project. eTwinning is an online platform where schools in Europe work on projects together, and Ukrainian schools take part in it. Our partner is a school in Poland. Every month, we have a video call, and we write a blog about our cities. Our partners asked lots of questions about Kyiv, and I realised how much I love my city. In March, we made a short film together about two rivers, the Dnipro and the Vistula. My advice? Ask your teachers about online projects. And when you choose a university, find out which partner universities it has.</i></p><p>Which sentences are true?</p>`,
          opts: [
            "eTwinning is an online platform for school projects in Europe.",
            "Andrii is going to study abroad this year.",
            "Andrii’s class works with a school in Poland.",
            "The class made a film about two mountains."
          ],
          correct: [0, 2],
          hint: "Check each sentence against the text. Find “eTwinning is” and “Our partner”.",
          fbOk: "Exactly.",
          fbBad: "Two sentences are true. Read about the NMT and the film again.",
          fbText: "eTwinning is <b>an online platform</b> where schools in Europe work on projects together, and Andrii’s class works with <b>a school in Poland</b>. Andrii isn’t studying abroad now: he’s taking the NMT. The film was about two rivers."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Learning across borders",
          title: "Read and choose.",
          body: `<p>Think about all three texts in “Learning across borders”.</p><p>What is the main idea?</p>`,
          opts: [
            "There are different ways to learn with people from other countries.",
            "Only university students can learn from other countries.",
            "Studying abroad is always free for everyone."
          ],
          correct: 0,
          hint: "Yustyna is at university, but Emma and Andrii are still at school.",
          fbOk: "Well done!",
          fbBad: "Think about Andrii’s project and Emma’s website.",
          fbText: "A term abroad, a shared website, an online project: there are <b>different ways</b> to learn with people from other countries. Yustyna has a grant, but nobody says it’s free for everyone."
        },
        {
          type: "gaps",
          sk: "cult",
          title: "Complete the sentences.",
          text: "The first Erasmus exchanges started in {*1987|2021|2027}. Students from Ukrainian universities can take part if their university has an {*agreement|exam|essay} with a partner abroad. The UK started the Turing scheme in {*2021|1987|2025}. eTwinning is an {*online platform|exchange term|open day} for school projects.",
          hint: "Look for the years in the texts of Yustyna and Emma.",
          fbOk: "Yes!",
          fbBad: "Read the three texts again: the years are there.",
          fbText: "Erasmus: <b>1987</b>. Ukrainian universities need an <b>agreement</b> with a partner. The Turing scheme: <b>2021</b>. eTwinning: an <b>online platform</b>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Yustyna is studying in Lithuania for one part of the university year, from February to June.</p>`,
          before: "She’s spending a",
          after: "in Lithuania.",
          answer: ["term", "semester"],
          hint: "One part of the school or university year → ?",
          fbOk: "Right.",
          fbBad: "Look at the box “Words for the article” again.",
          fbText: "She’s spending a <b>term</b> in Lithuania: one part of the university year."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["ex|+change", "+part|ner", "a|+broad", "+dead|line"],
          fbOk: "Right.",
          fbBad: "Look at the underlined parts in the boxes.",
          fbText: "ex<u>change</u>, <u>part</u>ner, a<u>broad</u>, <u>dead</u>line."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes a comment under Yustyna’s text.</p>`,
          text: "Great article, Yustyna! I’d love to spend a {*term|deadline|score} abroad one day. Do you live with a host {*family|university|grant}, or in a student flat? I’m glad you got a {*grant|credit|timetable}. I hope all your courses count {*towards|into|about} your degree!",
          hint: "One part of the year → ? Money for your studies → ? count … your degree.",
          fbOk: "Well done!",
          fbBad: "Check the box “Words for the article”.",
          fbText: "a <b>term</b> abroad; a host <b>family</b>; a <b>grant</b>; count <b>towards</b> your degree."
        }
      ],
      outro: {
        text: "Erasmus+, eTwinning, a term abroad: now you can read and talk about learning with people from other countries.",
        learned: [
          "Read a long article in three parts and find the main idea.",
          "Use words for exchanges: a host family, a partner university, a grant, credits.",
          "Explain what Erasmus+ and eTwinning are."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e11s8l3",
      title: "If I pass, if I passed, if I had passed: conditionals",
      short: "Conditionals",
      icon: "path",
      status: "draft",
      why: "A real future, an imagined present or a different past? Choose the right conditional for each situation.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Three ifs",
          body: `<p class="lead">Taras, Mariia and Bohdan are talking about exams in a video call.</p><p><b>Taras:</b> If I get a good score, I’ll apply to study journalism in Lviv.<br><b>Mariia:</b> I’ve got so little time! If I had more time, I’d revise every subject twice.<br><b>Bohdan:</b> I started revising too late. If I had started earlier, I wouldn’t have been so nervous last week.</p><p>Who is talking about the future, the present and the past?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Read and choose.",
          body: `<p><b>Taras:</b> If I get a good score, I’ll apply to study journalism in Lviv.<br><b>Mariia:</b> If I had more time, I’d revise every subject twice.<br><b>Bohdan:</b> If I had started earlier, I wouldn’t have been so nervous last week.</p><p>Who imagines a different past?</p>`,
          opts: [
            "Taras",
            "Mariia",
            "Bohdan"
          ],
          correct: 2,
          hint: "Who uses had + the third form?",
          fbOk: "Right.",
          fbBad: "Remember the Third Conditional: if + had + the third form.",
          fbText: "<b>Bohdan</b>: <i>If I had started…, I wouldn’t have been…</i> is the Third Conditional. He started late, and that can’t change now."
        },
        {
          type: "info",
          title: "Three conditionals side by side",
          body: `<ul><li>First → real and possible in the future.<br><b>if</b> + Present Simple, <b>will</b> + verb<br>If I <b>get</b> a good score, I<b>’ll apply</b>.</li><li>Second → imagined or not true now; an unlikely future.<br><b>if</b> + Past Simple, <b>would</b> + verb<br>If I <b>had</b> more time, I<b>’d revise</b> every subject twice.</li><li>Third → a different past: it didn’t happen.<br><b>if</b> + Past Perfect, <b>would have</b> + the third form<br>If I <b>had started</b> earlier, I <b>wouldn’t have been</b> so nervous.</li></ul><p>No <i>will</i> or <i>would</i> in the <i>if</i> part.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the sentences.",
          bins: ["First: a real future", "Second: imagined now", "Third: a different past"],
          items: [
            ["If I pass, I’ll celebrate with my friends.", 0],
            ["If you need help with maths, I’ll explain it.", 0],
            ["If I lived in Lviv, I’d see Taras every day.", 1],
            ["If I were a teacher, I’d give fewer tests.", 1],
            ["If I’d known about the deadline, I’d have registered earlier.", 2],
            ["If she hadn’t missed the bus, she wouldn’t have been late.", 2]
          ],
          hint: "Look at the verb after if: Present Simple, Past Simple or had + the third form?",
          fbOk: "Well done!",
          fbBad: "Check the verb in the if part of each sentence.",
          fbText: "<i>pass, need</i> → First. <i>lived, were</i> → Second. <i>’d known, hadn’t missed</i> → Third."
        },
        {
          type: "info",
          title: "How to choose",
          body: `<p>Ask two questions: <b>When?</b> (the future, now or the past) and <b>Is it real?</b></p><ul><li>Taras can get a good score. It’s possible → <b>If I get…, I’ll…</b></li><li>Mariia doesn’t have more time. It isn’t true now → <b>If I had…, I’d…</b></li><li>Bohdan started late. It’s a past fact → <b>If I had started…, I wouldn’t have…</b></li></ul><p>Often one part of the sentence shows the type: <i>’ll</i> → First, <i>’d</i> + verb → Second, <i>’d have</i> → Third.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Zoriana’s laptop is slow. If she {*had|has|had had} a faster laptop, she’d finish her practice tests sooner. Kyrylo’s test is on Friday. If he {*revises|revised|had revised} tonight, he’ll feel more confident. Daryna missed the bus and was late. If she {*hadn’t missed|didn’t miss|doesn’t miss} the bus, she wouldn’t have been late.",
          hint: "Look at the other part of each sentence: ’d + verb, ’ll or wouldn’t have?",
          fbOk: "Exactly.",
          fbBad: "Check the box “How to choose”: the other part shows the type.",
          fbText: "<i>she’d finish</i> → Second → <b>had</b>. <i>he’ll feel</i> → First → <b>revises</b>. <i>wouldn’t have been</i> → Third → <b>hadn’t missed</b>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Andrii didn’t check the website, so he didn’t see the new rules.</p><p>If Andrii had checked the website, he ___ the new rules.</p>`,
          opts: [
            "will see",
            "would have seen",
            "would have see"
          ],
          correct: 1,
          hint: "It’s about the past, and it didn’t happen.",
          fbOk: "Right.",
          fbBad: "A different past: would have + the third form.",
          fbText: "<b>would have seen</b>: would have + the third form (<i>see – saw – seen</i>)."
        },
        {
          type: "info",
          title: "would, could, might",
          body: `<p>In the Second and Third Conditionals, the result part can change:</p><ul><li><b>would</b> → the result: If I passed my driving test, I<b>’d drive</b> us to the lake.</li><li><b>could</b> = would be able to: If I passed my driving test, I <b>could drive</b> us to the lake.</li><li><b>might</b> = would perhaps: If we left now, we <b>might catch</b> the bus.</li><li>In the Third: <b>could have</b> / <b>might have</b> + the third form: If you’d asked me, I <b>could have helped</b> you.</li></ul>`,
          cta: "Next"
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p><b>Mariia:</b> I didn’t go to the university open day last Saturday. Did I miss much?</p><p>Which answers are correct?</p>`,
          opts: [
            "If you had gone, you would have met the teachers.",
            "If you had gone, you might have liked the university.",
            "If you had gone, you could have asked questions.",
            "If you would have gone, you would have met the teachers."
          ],
          correct: [0, 1, 2],
          hint: "Check the if part of each answer.",
          fbOk: "Well done!",
          fbBad: "Three answers are correct. Would, could and might can all go in the result part.",
          fbText: "<b>would have met</b>, <b>might have liked</b> and <b>could have asked</b> are correct. No <i>would</i> in the <i>if</i> part: not <i>If you would have gone</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of Bohdan’s message is wrong.</p>`,
          text: "If I [would have known] about the change, I [!would have checked] the website. But if I [!were] you, I [!wouldn’t worry] now.",
          hint: "Look at the if parts. What can’t go there?",
          fbOk: "Good eye!",
          fbBad: "No would in the if part.",
          fbText: "If I <b>had known</b> about the change… No <i>would</i> after <i>if</i>. <i>would have checked</i>, <i>if I were you</i> and <i>I wouldn’t worry</i> are correct."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Bohdan feels sorry about the past. Start with <b>if</b>.</p>`,
          tiles: ["if", "I’d", "started", "revising earlier,", "I", "wouldn’t have been", "so nervous"],
          extra: ["would have started"],
          answer: "If I’d started revising earlier, I wouldn’t have been so nervous.",
          hint: "if + had + the third form, then wouldn’t have + the third form.",
          fbOk: "Well done!",
          fbBad: "No would in the if part: I’d started = I had started.",
          fbText: "<b>If I’d started revising earlier, I wouldn’t have been so nervous.</b> Here <i>’d</i> + the third form = <i>had</i>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes to Emma.</p>`,
          text: "The NMT is next month. If I {*get|got|had got} a good score, I’ll apply to study journalism in Lviv. If I {*lived|live|had lived} in Kyiv, I’d go to the open days there too, but it’s too far. Last year, I didn’t do any practice tests. If I {*had done|did|do} more, I’d have felt more confident in my school tests in March. So now I’m doing one every week!",
          hint: "Look at the other part: I’ll apply, I’d go, I’d have felt.",
          fbOk: "Well done!",
          fbBad: "Check the box “How to choose”.",
          fbText: "<i>I’ll apply</i> → First → <b>get</b>. <i>I’d go</i>, he doesn’t live in Kyiv → Second → <b>lived</b>. <i>I’d have felt</i> → Third → <b>had done</b>."
        }
      ],
      outro: {
        text: "If you know the time and whether it’s real, you can choose the right conditional every time.",
        learned: [
          "Choose the First, Second or Third Conditional by time and reality.",
          "Use would, could and might in the result part.",
          "Say what would have happened in a different past."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e11s8l4",
      title: "Choosing a career: what suits you?",
      short: "Choosing a career",
      icon: "target",
      status: "draft",
      why: "How do you choose a career? Talk about your strengths and plans, and choose the right form for the future.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "A meeting with the careers adviser",
          body: `<p class="lead">Oksana is in her last year at the lyceum in Poltava. Today she has a meeting with Ms Hrytsenko, the careers adviser.</p><p><b>Ms Hrytsenko:</b> So, Oksana, what are you good at?<br><b>Oksana:</b> Biology and chemistry. And I love animals: I’ve wanted to be a vet since I was little.<br><b>Ms Hrytsenko:</b> Is anything worrying you?<br><b>Oksana:</b> This year, I’ve become interested in art history too. I’m not sure which one suits me better.<br><b>Ms Hrytsenko:</b> Let’s look at your strengths. You’re patient and calm, and you’ve helped on a farm for three years.<br><b>Oksana:</b> You’re right. I’m going to apply for veterinary medicine in Kharkiv. Art can stay my hobby.<br><b>Ms Hrytsenko:</b> Good. The university’s open day is next Saturday. Are you going?<br><b>Oksana:</b> Yes, I’m going with my dad.</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><b>Oksana:</b> You’re right. I’m going to apply for veterinary medicine in Kharkiv. Art can stay my hobby.</p><p>What has Oksana decided?</p>`,
          opts: [
            "to study art history in Kharkiv",
            "to wait a year before university",
            "to apply for veterinary medicine"
          ],
          correct: 2,
          hint: "Find be going to in her answer.",
          fbOk: "Right.",
          fbBad: "Read Oksana’s answer again: what is she going to do?",
          fbText: "She’s going to <b>apply for veterinary medicine</b>. Art history will stay her hobby."
        },
        {
          type: "info",
          title: "Choosing a career",
          body: `<ul><li>a <b>careers adviser</b> → a person whose job is to help you choose a career (ca<u>reer</u>)</li><li>your <b>strengths</b> ↔ your <b><u>weak</u>nesses</b> → what you are good at ↔ not so good at</li><li><b>suit</b> someone → be right for them: <i>This job suits you.</i></li><li><b>make up your mind</b> → decide</li><li>an <b>open day</b> → a day when you can visit a university or college and see what it is like</li><li><b>work experience</b> (UK) → a short time when a student works somewhere to learn about a job</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["Ms Hrytsenko is a careers", "Being patient is one of Oksana’s", "Oksana has finally made up", "At the open day, she can"],
          right: ["adviser.", "strengths.", "her mind.", "see what the university is like."],
          hint: "What do you make up when you decide?",
          fbOk: "Well done!",
          fbBad: "Look at the box “Choosing a career” again.",
          fbText: "a careers <b>adviser</b>; one of her <b>strengths</b>; made up <b>her mind</b> = decided; at the open day, she can <b>see what the university is like</b>."
        },
        {
          type: "info",
          title: "The future: an overview, part 1",
          body: `<ul><li><b>will</b> → a decision now, a prediction, a promise:<br>OK, I<b>’ll</b> call you tonight. I think I<b>’ll</b> enjoy it.</li><li><b>be going to</b> → a plan you have already made:<br>I<b>’m going to</b> apply for veterinary medicine.</li><li>Present Continuous → an arrangement with a time or a place:<br>I<b>’m meeting</b> Ms Hrytsenko on Monday.</li><li>Present Simple → a timetable:<br>The train <b>leaves</b> at 7.15.</li></ul><p>Often more than one form is correct: <i>I’m going to visit</i> / <i>I’m visiting</i> the university on Saturday.</p>`,
          cta: "Next"
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Oksana and her dad have already bought train tickets for the open day next Saturday.</p><p>Which sentences are correct?</p>`,
          opts: [
            "We go to the open day every Saturday.",
            "We’re going to the open day next Saturday.",
            "We went to the open day next Saturday.",
            "We’re going to go to the open day next Saturday."
          ],
          correct: [1, 3],
          hint: "It’s a plan with tickets. Is it a habit? Is it in the past?",
          fbOk: "Exactly.",
          fbBad: "Two answers are correct: an arrangement and a plan.",
          fbText: "<b>We’re going to the open day</b> (an arrangement) and <b>We’re going to go</b> (a plan) are both correct. It isn’t a habit, and it isn’t in the past."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>On Friday evening, Dad talks to Oksana.</p>`,
          text: "Dad: Our train {*leaves|left|has left} at 7.15 tomorrow morning. It’s on the timetable. Oksana: Then I{*’ll set|set|’d set} my alarm for six right now. Dad: Good idea. And Grandma {*is going to|went to|goes to} make us sandwiches for the journey. She told me yesterday.",
          hint: "A timetable → ? A decision at this moment → ? A plan that Grandma has already made → ?",
          fbOk: "Yes!",
          fbBad: "Look at the box “The future: an overview, part 1”.",
          fbText: "A timetable → <b>leaves</b>. A decision now → <b>I’ll set</b>. A plan made yesterday → <b>is going to</b> make."
        },
        {
          type: "info",
          title: "The future: an overview, part 2",
          body: `<ul><li>Future Continuous → <b>will be</b> + -ing: in progress at a time in the future<br><i>This time next year</i>, I<b>’ll be studying</b> in Kharkiv.</li><li>Future Perfect → <b>will have</b> + the third form: finished before a time in the future<br><i>By July</i>, I<b>’ll have finished</b> school.</li></ul><p>Look at the time words: <i>this time next year, at ten tomorrow</i> → in progress; <i>by July, by then</i> → finished before.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          text: "This time next year, Oksana {*will be studying|will have studied|studies} in Kharkiv. By then, she {*will have found|will be finding|finds} a room in a student flat. And by the end of her first year, she {*will have made|will be making|makes} lots of new friends.",
          hint: "This time next year → in progress. By then, by the end → finished before.",
          fbOk: "Well done!",
          fbBad: "Look at the time words and the box “The future: an overview, part 2”.",
          fbText: "<i>This time next year</i> → <b>will be studying</b>. <i>By then</i> → <b>will have found</b>. <i>By the end of her first year</i> → <b>will have made</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Oksana’s message is wrong.</p>`,
          text: "This time next year, I [!’ll be studying] in Kharkiv. By then, I’ll have [find] a student flat, and I [!’ll have made] new friends.",
          hint: "will have + which form of the verb?",
          fbOk: "Good eye!",
          fbBad: "After will have: the third form.",
          fbText: "I’ll have <b>found</b>: will have + the third form (<i>find – found – found</i>). <i>I’ll be studying</i> and <i>I’ll have made</i> are correct."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Oksana writes about her future. Start with <b>this time</b>.</p>`,
          tiles: ["this time", "next year,", "I’ll", "be", "studying", "in Kharkiv"],
          extra: ["study"],
          answer: "This time next year, I’ll be studying in Kharkiv.",
          hint: "In progress at a future time: will be + -ing.",
          fbOk: "Exactly.",
          fbBad: "In progress at a future time: I’ll be studying.",
          fbText: "<b>This time next year, I’ll be studying in Kharkiv.</b> The Future Continuous: <i>will be</i> + -ing."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes to Emma.</p>`,
          text: "I’ve finally made up my {*mind|head|choice}: I’m going to apply for veterinary medicine in Kharkiv. My careers adviser says the job really {*suits|fits in|matches up} me. Dad and I {*are visiting|visited|visit} the university on Saturday: we’ve already got the tickets! And this time next year, I {*’ll be studying|’ll have studied|study} there.",
          hint: "make up your …; be right for someone → ? an arrangement → ? in progress at a future time → ?",
          fbOk: "Well done!",
          fbBad: "Check the box “Choosing a career” and the two future boxes.",
          fbText: "made up my <b>mind</b>; the job <b>suits</b> me; an arrangement → <b>are visiting</b>; in progress next year → <b>’ll be studying</b>."
        }
      ],
      outro: {
        text: "Strengths, an open day, a plan: now you can talk about choosing a career and use every future form.",
        learned: [
          "Talk about choosing a career: strengths, suit, make up your mind, an open day.",
          "Choose between will, be going to, the Present Continuous and the Present Simple for the future.",
          "Use the Future Continuous and the Future Perfect."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e11s8l5",
      title: "Prestigious jobs in Ukraine and abroad",
      short: "Prestigious jobs",
      icon: "star",
      status: "draft",
      why: "What makes a job prestigious? Learn words to talk about jobs, and compare how doctors train in Ukraine and the UK.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Which jobs do people respect?",
          body: `<p class="lead">Andrii’s class in Kyiv has done a survey for the school website. The question was: “Which jobs do you respect most, and why?”</p><p>Fifty people answered: students, parents and teachers. Their top five jobs:</p><ul><li>doctor</li><li>engineer</li><li>teacher</li><li>IT specialist</li><li>firefighter</li></ul><p>It’s only one class survey, not a survey of the whole country. What do you think the most common reason was?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Why did most people in Andrii’s survey respect these jobs?</p>`,
          opts: [
            "The job has a good salary.",
            "The job helps people.",
            "The job is easy to get."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "In Andrii’s survey, the top reason was <b>the job helps people</b>. A good salary came second. Nobody chose “easy to get”."
        },
        {
          type: "info",
          title: "Talking about prestigious jobs",
          body: `<ul><li><b>pres<u>ti</u>gious</b> → very much respected and admired</li><li><b>re<u>spect</u>ed</b> → people think highly of it</li><li><b>well paid</b> → with a good salary: <i>The job is well paid. It’s a well-paid job.</i></li><li>a <b><u>sal</u>ary</b> → the money you get for your job, usually every month</li><li><b>in demand</b> → many employers need these people</li><li><b>highly skilled</b> → with a lot of training and experience</li><li><b>competitive</b> → many people want it, so it’s hard to get</li><li><b>responsi<u>bil</u>ity</b> → you make important decisions, and other people depend on you</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["If 200 people apply for one place, getting it is very", "People with a lot of training and experience are", "A job that pays a lot of money is", "When many employers need nurses, nurses are"],
          right: ["competitive.", "highly skilled.", "well paid.", "in demand."],
          hint: "Which word means ‘many employers need these people’?",
          fbOk: "Exactly.",
          fbBad: "Look at the box “Talking about prestigious jobs” again.",
          fbText: "200 people for one place → <b>competitive</b>; a lot of training and experience → <b>highly skilled</b>; a lot of money → <b>well paid</b>; many employers need them → <b>in demand</b>."
        },
        {
          type: "choice",
          sk: "cult",
          title: "Read and choose.",
          body: `<p><b>Emma:</b> When I was fifteen, I wanted to be a firefighter. Now I’m studying biology and chemistry, and I’m thinking of becoming a doctor. I’ve read that in the UK, a medicine degree usually takes five years. Then new doctors continue their training in a hospital. In Ukraine, you study medicine at university for six years after school, and then you also continue your training.</p><p>Where does a medicine degree take longer?</p>`,
          opts: [
            "in Ukraine",
            "in the UK",
            "It takes the same time in both countries."
          ],
          correct: 0,
          hint: "Compare five years and six years.",
          fbOk: "Right.",
          fbBad: "Find the numbers in Emma’s message.",
          fbText: "<b>In Ukraine</b>: six years after school. In the UK, a medicine degree usually takes five years. In both countries, new doctors continue their training after university."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          text: "Emma thinks being a doctor is a {*prestigious|lazy|boring} job. Doctors are {*highly|high|highest} skilled, and they have a lot of {*responsibility|salary|demand}: patients depend on them. Emma has heard that medicine is a {*competitive|well-paid|highly skilled} course: lots of students apply for every place.",
          hint: "Patients depend on doctors → ? Lots of students for every place → ?",
          fbOk: "Yes!",
          fbBad: "Check the box “Talking about prestigious jobs”.",
          fbText: "a <b>prestigious</b> job; <b>highly</b> skilled; a lot of <b>responsibility</b>; a <b>competitive</b> course: many people want it, so it’s hard to get."
        },
        {
          type: "info",
          title: "Comparing jobs",
          body: `<ul><li><b>The main advantage</b> of being a pilot <b>is that</b> you travel a lot.</li><li><b>One disadvantage is that</b> you’re often away from home.</li><li>It’s <b>not as</b> well paid <b>as</b> some IT jobs, <b>but</b> it’s very respected.</li><li><b>For me</b>, job satisfaction <b>matters more than</b> the salary. (job satisfaction → the good feeling when you enjoy your work)</li><li><b>It depends on</b> the person.</li></ul>`,
          cta: "Next"
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Kyrylo wants to be a history teacher. He gives his opinion. Start with <b>for me</b>.</p>`,
          tiles: ["for me,", "job satisfaction", "matters", "more than", "the salary"],
          extra: ["matter"],
          answer: "For me, job satisfaction matters more than the salary.",
          hint: "For me, + what is important + matters more than…",
          fbOk: "Well done!",
          fbBad: "Job satisfaction is one thing: matters, with -s.",
          fbText: "<b>For me, job satisfaction matters more than the salary.</b> <i>Job satisfaction</i> → it → <i>matters</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Daryna’s comment is wrong.</p>`,
          text: "Being a pilot is [!not] as well paid [than] some IT jobs, but it’s [!very] respected, and you [!travel] a lot.",
          hint: "not as … ?",
          fbOk: "Good eye!",
          fbBad: "not as + adjective + … ?",
          fbText: "not as well paid <b>as</b> some IT jobs: <i>not as … as</i>, not <i>as … than</i>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["pres|+ti|gious", "re|+spect|ed", "+sal|a|ry", "re|spon|si|+bil|i|ty"],
          fbOk: "Right.",
          fbBad: "Look at the underlined parts in the box.",
          fbText: "pres<u>ti</u>gious, re<u>spect</u>ed, <u>sal</u>ary, responsi<u>bil</u>ity."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes about the survey for the school website.</p>`,
          text: "In our class survey, the most {*respected|salary|responsibility} jobs were doctor, engineer and teacher. The main {*advantage|disadvantage|salary} of these jobs is that they help people. Some of them aren’t as well paid {*as|than|like} IT jobs, but for most people, helping others matters more {*than|as|that} the salary.",
          hint: "People think highly of these jobs → ? not as … ? matters more … ?",
          fbOk: "Well done!",
          fbBad: "Check the boxes “Talking about prestigious jobs” and “Comparing jobs”.",
          fbText: "the most <b>respected</b> jobs; the main <b>advantage</b>; not as well paid <b>as</b>; matters more <b>than</b> the salary."
        }
      ],
      outro: {
        text: "Respected, well paid, in demand: now you can say what makes a job prestigious and compare jobs.",
        learned: [
          "Talk about jobs: prestigious, well paid, in demand, highly skilled.",
          "Compare jobs: the main advantage is that…, not as … as…, matters more than…",
          "Compare how doctors train in Ukraine and the UK."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e11s8l6",
      title: "Goodbye, school! Friends, plans and wishes",
      short: "Goodbye, school!",
      icon: "users",
      status: "draft",
      why: "It’s the last day of school. Say what you hope and wish, sum up a discussion and end a conversation warmly.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "The last day",
          body: `<p class="lead">It’s the last day of school in Kyiv. After the last lesson, Andrii, Daryna, Kyrylo and Zoriana are sitting in the school yard.</p><p><b>Daryna:</b> I can’t believe it’s over. I wish we had one more year together!<br><b>Kyrylo:</b> Me too. I hope we’ll keep in touch.<br><b>Zoriana:</b> Of course we will! I’d love to meet up every summer.<br><b>Andrii:</b> So, to sum up: we all agree to meet here on the last Saturday of August.<br><b>Kyrylo:</b> Deal! Anyway, I’d better go. My mum’s waiting.<br><b>Daryna:</b> Take care, Kyrylo! It’s been great being in your class.</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><b>Andrii:</b> So, to sum up: we all agree to meet here on the last Saturday of August.</p><p>What have the friends agreed to do?</p>`,
          opts: [
            "meet at their school at the end of August",
            "study at the same university",
            "stay at school for one more year"
          ],
          correct: 0,
          hint: "Find to sum up. What comes after it?",
          fbOk: "Right.",
          fbBad: "Read Andrii’s words again.",
          fbText: "They agree <b>to meet here</b>, at school, on the last Saturday of August. Andrii sums up what they’ve decided."
        },
        {
          type: "info",
          title: "Hopes and wishes",
          body: `<ul><li><b>I hope</b> + Present Simple or <b>will</b> → something possible in the future:<br>I hope you <b>pass</b>. I hope we<b>’ll keep</b> in touch.</li><li><b>I’d love to</b> + verb → something you would really like to do:<br>I’d love to <b>meet up</b> every summer.</li><li><b>I wish</b> + Past Simple → you’re sorry that something isn’t true now:<br>I wish we <b>had</b> one more year. (We don’t.) I wish I <b>could</b> stay. (I can’t.)</li></ul><p>For a possible future, use <i>hope</i>, not <i>wish</i>. Not: <s>I wish you pass</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Zoriana writes to Taras.</p>`,
          text: "I {*hope|wish} you get a great score in the NMT! I {*wish|hope} I lived closer to you. I’d love {*to visit|visit|for visit} you in Lviv this summer. I hope you {*have|had|would have} a great time at the open day next week!",
          hint: "A possible future → hope. Not true now → wish + Past Simple.",
          fbOk: "Yes!",
          fbBad: "Look at the box “Hopes and wishes”.",
          fbText: "<b>hope</b> you get (possible); <b>wish</b> I lived (I don’t live closer); I’d love <b>to visit</b>; I hope you <b>have</b> (hope + Present Simple)."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Kyrylo can’t go to the summer camp with his friends. He’s sorry about it.</p><p>What does Kyrylo say?</p>`,
          opts: [
            "I hope I can’t go with you.",
            "I wish I can go with you.",
            "I wish I could go with you."
          ],
          correct: 2,
          hint: "He’s sorry about something now. wish + which form of can?",
          fbOk: "Exactly.",
          fbBad: "wish + the past form: can → could.",
          fbText: "<b>I wish I could go with you.</b> He can’t go, and he’s sorry: <i>wish</i> + <i>could</i>."
        },
        {
          type: "info",
          title: "Summing up and ending a conversation",
          body: `<p><b>Summing up</b></p><ul><li><b>So, to sum up,</b> … / <b>All in all,</b> … → when you say the main points at the end</li><li><b>So we all agree that</b> … / <b>So we’ve decided to</b> …</li></ul><p><b>Ending a conversation</b></p><ul><li><b>Anyway, I’d better go.</b> → I should leave now</li><li><b>It’s been great talking to you.</b></li><li><b>Let’s keep in touch.</b> / <b>Take care!</b></li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "func",
          title: "Match the situations and the phrases.",
          left: ["You’re sorry about something that isn’t true now.", "You want something good for a friend in the future.", "You say what everyone has decided.", "You want to end the conversation."],
          right: ["I wish you lived closer.", "I hope you pass your exams.", "So we all agree to meet in August.", "Anyway, I’d better go."],
          hint: "Which phrase sums up? Which one is about leaving?",
          fbOk: "Well done!",
          fbBad: "Look at the boxes “Hopes and wishes” and “Summing up and ending a conversation”.",
          fbText: "Sorry now → <b>I wish you lived closer.</b> Good things in the future → <b>I hope you pass.</b> Everyone’s decision → <b>So we all agree…</b> Leaving → <b>Anyway, I’d better go.</b>"
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p>Zoriana and Andrii have been talking for an hour. Zoriana’s bus comes in five minutes.</p><p><b>Andrii:</b> …and then we could all go to the lake in August!<br><b>Zoriana:</b> …</p><p>What does Zoriana say?</p>`,
          opts: [
            "So, to sum up, I wish my bus came.",
            "Sounds great! Anyway, I’d better go. My bus is coming.",
            "I hope I missed my bus."
          ],
          correct: 1,
          hint: "Zoriana needs to leave. Which phrase ends a conversation politely?",
          fbOk: "Right.",
          fbBad: "She needs to leave now. Look at “Ending a conversation”.",
          fbText: "<b>Anyway, I’d better go.</b> is a polite way to end a conversation. She says <i>Sounds great!</i> first, so Andrii knows she likes his idea."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Daryna’s message is wrong.</p>`,
          text: "I [wish] you get a great score! I [!hope] we’ll meet again soon, and I [!wish] I [!could] come to Lviv this summer.",
          hint: "Which wish is about a possible future?",
          fbOk: "Good eye!",
          fbBad: "For a possible future: hope, not wish.",
          fbText: "I <b>hope</b> you get a great score: a possible future → <i>hope</i>. <i>I wish I could come</i> is correct: she can’t come, and she’s sorry."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Taras doesn’t have a car. He’s sorry about it, because he can’t drive his friends to the lake.</p>`,
          before: "I wish I",
          after: "a car.",
          answer: ["had", "owned"],
          hint: "It isn’t true now. wish + which form of have?",
          fbOk: "Well done!",
          fbBad: "Not true now → wish + the Past Simple.",
          fbText: "<b>I wish I had a car.</b> He doesn’t have one: <i>wish</i> + the Past Simple."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Kyrylo says goodbye to his friends.</p>`,
          tiles: ["I", "hope", "we’ll", "keep", "in touch"],
          extra: ["wish"],
          answer: "I hope we’ll keep in touch.",
          hint: "Is it a possible future or something that isn’t true now?",
          fbOk: "Exactly.",
          fbBad: "A possible future: hope, not wish.",
          fbText: "<b>I hope we’ll keep in touch.</b> <i>hope</i> + <i>will</i> for something possible in the future."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes a message for his class’s last school photo album.</p>`,
          text: "Dear classmates, all {*in|of|for} all, it’s been an amazing year. I {*wish|hope} we had one more year together, but I {*hope|wish} we’ll all keep in {*touch|touching|mind}. I’d love {*to meet|meet|for meeting} up every summer. Take care, everyone!",
          hint: "all … all; not true now → ? a possible future → ? keep in …",
          fbOk: "Well done!",
          fbBad: "Check the boxes “Hopes and wishes” and “Summing up and ending a conversation”.",
          fbText: "<b>All in all</b>; I <b>wish</b> we had (not true now); I <b>hope</b> we’ll keep in <b>touch</b> (a possible future); I’d love <b>to meet</b> up."
        }
      ],
      outro: {
        text: "I hope you keep in touch with your classmates, and I hope all your plans come true!",
        learned: [
          "Say what you hope and wish: I hope…, I’d love to…, I wish + Past Simple.",
          "Sum up a discussion: to sum up, all in all, so we all agree that…",
          "End a conversation politely: Anyway, I’d better go. Take care!"
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e11s8l7",
      title: "Ready for the future",
      short: "Section final",
      icon: "trophy",
      status: "draft",
      boss: true,
      badge: "e11s8boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you help with the club’s last magazine?",
          body: `<p class="lead">It’s the last issue of the penfriend club magazine this school year. Its topic is “Exams, careers and plans”.</p><p>Check the texts and read Oksana’s story. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Complete the sentences.",
          text: "Zoriana made a revision {*timetable|deadline|grant}. She registered for the NMT before the {*deadline|timetable|term}. If you fail an exam, you can sometimes {*retake|revise|register} it.",
          pre: "e11s8l1",
          hint: "a plan of what to revise → ? the last day → ? take it again → ?",
          fbOk: "Yes!",
          fbBad: "Check the words from Lesson 1.",
          fbText: "a revision <b>timetable</b>; before the <b>deadline</b>; <b>retake</b> = take it again."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          text: "Kyrylo {*’s been revising|’s revising|revises} since March. Last Saturday, he {*took|has taken|takes} a practice test. He {*was doing|has done|does} the maths part when his phone rang.",
          pre: "e11s8l1",
          hint: "since March → ? last Saturday → ? in progress when… → ?",
          fbOk: "Exactly.",
          fbBad: "Look at the time words: since, last Saturday, when.",
          fbText: "<b>’s been revising</b> since March; last Saturday → <b>took</b>; in progress when the phone rang → <b>was doing</b>."
        },
        {
          type: "multi",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Choose all the correct answers.",
          body: `<p>Taras lives in Lviv, far from Kyiv. He can’t come to Andrii’s party.</p><p>Which sentences are correct?</p>`,
          opts: [
            "If Taras would live in Kyiv, he would come to the party.",
            "If Taras lived in Kyiv, he would come to the party.",
            "If Taras lives in Kyiv, he would come to the party.",
            "If Taras lived in Kyiv, he could come to the party."
          ],
          correct: [1, 3],
          pre: "e11s8l3",
          hint: "It isn’t true now. Which form goes in the if part?",
          fbOk: "Well done!",
          fbBad: "Two answers are correct: if + Past Simple, then would or could.",
          fbText: "Not true now → the Second Conditional: <b>If Taras lived…, he would / could come</b>. No <i>would</i> in the <i>if</i> part, and not <i>lives … would</i>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Fill in the gaps.",
          text: "Our train {*leaves|left|has left} at 7.15 tomorrow. It’s on the timetable. By July, I {*’ll have finished|’ll be finishing|finish} school. This time next year, I {*’ll be studying|’ll have studied|study} in Kharkiv.",
          pre: "e11s8l4",
          hint: "a timetable → ? finished before July → ? in progress next year → ?",
          fbOk: "Right.",
          fbBad: "Look at the time words: the timetable, by July, this time next year.",
          fbText: "a timetable → <b>leaves</b>; by July → <b>’ll have finished</b>; this time next year → <b>’ll be studying</b>."
        },
        {
          type: "match",
          sk: "vocab",
          eyebrow: "Task 5",
          title: "Match the words and the meanings.",
          left: ["a host family", "a grant", "well paid", "in demand"],
          right: ["the people you stay with abroad", "money for your studies", "with a good salary", "needed by many employers"],
          pre: "e11s8l5",
          fbOk: "Well done!",
          fbBad: "Which one is about money for your studies? Which one is about a salary?",
          fbText: "a <b>host family</b> → the people you stay with; a <b>grant</b> → money for your studies; <b>well paid</b> → a good salary; <b>in demand</b> → many employers need them."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 6",
          title: "Read the dialogue and choose the best answer.",
          body: `<p>The class has talked about the summer for half an hour. Now Daryna says what everyone has decided.</p><p>What does Daryna say?</p>`,
          opts: [
            "Anyway, I’d better go.",
            "So, to sum up, we’re all going to the lake on 10 August.",
            "I wish we went to the lake."
          ],
          correct: 1,
          pre: "e11s8l6",
          fbOk: "Exactly.",
          fbBad: "She says what everyone has decided. Which phrase sums up?",
          fbText: "<b>So, to sum up, …</b> gives the main point at the end of a discussion. <i>Anyway, I’d better go</i> ends a conversation."
        },
        {
          type: "info",
          eyebrow: "Reading: The train to Kharkiv",
          title: "Before you read",
          body: `<p>Oksana has written a short story for the magazine. It’s about her trip to the university open day in Kharkiv with her dad.</p><p>Read it in three parts. After each part, answer one question.</p>`,
          cta: "Let’s read"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: The train to Kharkiv, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i>At 7.15 on Saturday morning, Oksana and her dad were on the train to Kharkiv. Oksana had been nervous all week. What if the university didn’t feel right? What if she had made the wrong choice? For years, she had wanted to be a vet, but this year she had also started to love art history. “If you don’t like it, you can still change your mind,” Dad said. “That’s why we’re going.” Oksana looked out of the window at the fields. She had brought her sketchbook, and she drew the green fields and a small white church. By the time the train arrived, she had filled four pages.</i></p><p>Why was Oksana nervous?</p>`,
          opts: [
            "She had missed the train.",
            "She hadn’t finished her drawing.",
            "She was afraid that she had made the wrong choice."
          ],
          correct: 2,
          pre: "e11s8l4",
          hint: "Find the two questions that start with What if.",
          fbOk: "Right.",
          fbBad: "Read the sentences after “Oksana had been nervous all week”.",
          fbText: "She thought: <i>What if she <b>had made the wrong choice</b>?</i> She loved animals, but she had also started to love art history."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: The train to Kharkiv, part 2 of 3",
          title: "Read and choose.",
          body: `<p><i>At the university, a second-year student called Solomiia showed them around. She took them to the animal clinic, where students were helping a vet with a sick dog. Oksana watched carefully. The dog was scared, but the students were calm and patient. “Do you like it here?” Oksana asked Solomiia. “I love it,” Solomiia said. “It’s hard work, and there’s a lot to learn. But if I had chosen a different course, I would have missed all this,” she explained. Then she smiled and showed Oksana a small drawing of a cat in her notebook. “And I still draw every evening,” she added.</i></p><p>What does Solomiia think about her choice?</p>`,
          opts: [
            "She wishes she had chosen art.",
            "She’s happy that she chose this course.",
            "She’s going to change her course."
          ],
          correct: 1,
          pre: "e11s8l3",
          hint: "Find Solomiia’s sentence with if.",
          fbOk: "Well done!",
          fbBad: "Read what Solomiia says after “I love it”.",
          fbText: "<i>If I had chosen a different course, I would have missed all this.</i> She <b>loves</b> her course, and she still draws every evening."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: The train to Kharkiv, part 3 of 3",
          title: "Read and choose.",
          body: `<p><i>On the train home, Oksana was quiet for a long time. Then she opened her sketchbook and started a new page. “I’ve made up my mind,” she said. “I’m going to apply here. Being a vet suits me, and art will always be part of my life.” Dad smiled. “I hope you get in. And I hope you’ll draw a picture of your first patient for me,” he added. That evening, Oksana wrote to Emma: “This time next year, I’ll be studying in Kharkiv, I hope! I wish you could come and visit.”</i></p><p>What did Oksana decide?</p>`,
          opts: [
            "to study art instead of veterinary medicine",
            "to wait another year before she decides",
            "to apply to the university and keep drawing"
          ],
          correct: 2,
          pre: "e11s8l4",
          hint: "Find “I’ve made up my mind”. What comes next?",
          fbOk: "Exactly.",
          fbBad: "Read Oksana’s words on the train home again.",
          fbText: "She’s going to <b>apply</b> there: being a vet suits her. And art <b>will always be part of her life</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: The train to Kharkiv",
          title: "Read and choose.",
          body: `<p>Think about the whole story “The train to Kharkiv”.</p><p>What is the main idea of the story?</p>`,
          opts: [
            "You have to stop drawing when you go to university.",
            "Visiting a university can help you make up your mind.",
            "Trains to Kharkiv always leave early."
          ],
          correct: 1,
          pre: "e11s8l4",
          fbOk: "Well done!",
          fbBad: "How did Oksana feel before the visit, and after it?",
          fbText: "Before the open day, Oksana wasn’t sure. After she saw the clinic and met Solomiia, she <b>made up her mind</b>. And Solomiia still draws, so Oksana can too."
        }
      ],
      outro: {
        text: "Well done, and congratulations: this is the end of the course! Now you can talk about exams, exchanges, careers and your plans for the future.",
        learned: [
          "Talk about getting ready for exams and choose the right tense.",
          "Read about exchange programmes and prestigious jobs.",
          "Use the First, Second and Third Conditionals.",
          "Say what you hope and wish, and end a conversation politely."
        ]
      }
    }
  ]
});
