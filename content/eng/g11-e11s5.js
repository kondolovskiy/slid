/* Слід · Англійська мова, 11 клас — «Science and its impact» (e11s5)
   Програма: П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; спеціалізовані школи, B2), 11 кл.: тема «Наука і
   технічний прогрес» — галузі науки (l1); обладнання та персонал (l2); вплив НТП на життя людини і довкілля (l5);
   розвиток науки і техніки в Україні та за кордоном (l6) (с. 23–24); функція — висловлювати й аргументувати власну
   точку зору (l5, с. 23); граматика (с. 25): overview of tense forms (passive) — повторення Present / Past Simple passive
   (e6s3l2, e6s7l3, e7s7l2–l3, e9s6l2), Present Continuous passive (e8s3l3); нове: Present Perfect passive, Past Continuous
   passive, future passive (l3); modals + passive — повторення should / must / can be + третя форма (e7s2l4, e9s2l5,
   e9s6l4); нове: can / could / might / will / have to be у ствердженні, запереченні й питанні, mustn’t be ↔ don’t have
   to be (l4). Розподіл — content/eng/plan.js, reports/verify/plan-eng-g10-11.md:
   https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf
   Граматика — CD Grammar «Passive: forms» (https://dictionary.cambridge.org/grammar/british-grammar/passive-forms).
   Друга правильна відповідь (plan-eng-g10-11, inbox PITFALL e8s3/e9s6): у пропусках хибні варіанти — лише неграматичні
   форми (has been build, will be announce, were being + однина, can to be); інший граматичний час чи модальне дієслово
   (was / has been / will be / can / could / must / have to) поруч із ключем не стоїть; значення форм перевіряють choice
   і sort. by — лише коли важливо, хто зробив (l6). Назва форми — «the third form» (TQ-128, тимчасово).
   e9s6 (винахідники, «It was invented by…», пристрої) і e10s6 (комп’ютери, комунікація) не дублюємо: тут — галузі науки,
   лабораторія, довкілля, наука в Україні. Факти (НАН України, В. Вернадський, Б. Патон, станція «Академік Вернадський»,
   озонова діра й Монреальський протокол, CERN) — з двох джерел; URL — tasks/…/write-eng-g11-e11s5.md, «Нотатки агента».
   Спірного «першими» не стверджуємо; громадянства Вернадського не називаємо (the scientist).
   Діалоги — репліками в body (D-056), без звуку (D-055 п. 4). Зображень немає.
   Герої — серія 4–10 кл., на сім років старші, ніж у 4 кл.: Oksana, Andrii, Mariia, Emma, Daryna, Zoriana — 17.
   Нові: Dr Shapoval (дослідниця, біологічна лабораторія університету в Kharkiv), Pavlo (її research assistant),
   Mr Ivanenko (lab technician) — день відкритих дверей Oksana й Mariia (l2).
   Форми, наголос і значення — Cambridge Dictionary (CD), CD Grammar, OALD.
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e11s5, 2026-11-26; reports/verify/write-eng-g11-e11s5.md). 7 уроків (6 + фінал). Будова — за розділами 10 кл. (e10s6).
   Перевірка: node tools/validate.mjs --section e11s5 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e11s5",
  grade: 11,
  weeks: [18, 22],
  title: "Science and its impact",
  why: "To talk about branches of science and how science and technology affect people and the environment. And to describe research in Ukraine and abroad.",
  requires: ["e6s3l2", "e6s7l3", "e7s2l4", "e7s7l2", "e7s7l3", "e8s3l3", "e9s2l5", "e9s6l2", "e9s6l4", "e10s6l6"],
  meta: { author: "writer-e11s5", created: "2026-11-26", factcheck: "verifier-e11s5, 2026-11-26 (reports/verify/write-eng-g11-e11s5.md)", teacher: null },
  badges: [
    { id: "e11s5boss", name: "Science reporter", icon: "trophy", desc: "Finish the final lesson “Science and its impact”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e11s5l1",
      title: "Biology, physics, IT: branches of science",
      short: "Branches of science",
      icon: "bulb",
      status: "verified",
      why: "Biology, geology or astronomy: which branch of science interests you? Learn the names of the sciences and of the people who work in them.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Which science is for you?",
          body: `<p class="lead">The penfriend club asks: “Which branch of science interests you most?”</p><p><b>Oksana:</b> Biology and chemistry. I want to study veterinary medicine, so both are important for me.<br><b>Zoriana:</b> Computer science, of course. Next year I’d like to study IT at university.<br><b>Emma:</b> Astronomy! I could look at the stars and planets for hours.<br><b>Daryna:</b> Geology. I love rocks, and I want to know how mountains are made.</p><p>Who is interested in space?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Daryna loves rocks, so she chooses <b>geology</b>.</p><p>What does geology study?</p>`,
          opts: [
            "living things and how they grow",
            "rocks and how the Earth is made",
            "stars, planets and space"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Geology</b> studies rocks and how the Earth is made. Stars and planets are <b>astronomy</b>, Emma’s favourite. More branches are on the next screen."
        },
        {
          type: "info",
          title: "Branches of science",
          body: `<p>A <b>branch</b> of science is one part of it.</p><ul><li><b>bi<u>ol</u>ogy</b> → living things: plants, animals, people</li><li><b><u>chem</u>istry</b> → substances and how they change</li><li><b><u>phys</u>ics</b> → energy, forces, light and heat</li><li><b>as<u>tron</u>omy</b> → stars, planets and space</li><li><b>ge<u>ol</u>ogy</b> → rocks and how the Earth is made</li><li><b>e<u>col</u>ogy</b> → how plants and animals live together in their environment</li><li><b>computer science</b>, <b>IT</b> (information technology) → computers, programs and data</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the descriptions.",
          left: ["biology", "astronomy", "geology", "physics"],
          right: ["plants, animals and people", "stars, planets and space", "rocks and how the Earth is made", "energy, forces, light and heat"],
          hint: "Which one is about space? Which one is about living things?",
          fbOk: "Right.",
          fbBad: "Look at “Branches of science” again.",
          fbText: "<b>biology</b> – living things; <b>astronomy</b> – space; <b>geology</b> – rocks and the Earth; <b>physics</b> – energy, forces, light and heat."
        },
        {
          type: "info",
          title: "Scientists: who does what?",
          body: `<ul><li>biology → a <b>bi<u>ol</u>ogist</b></li><li>geology → a <b>ge<u>ol</u>ogist</b>; ecology → an <b>e<u>col</u>ogist</b></li><li>astronomy → an <b>as<u>tron</u>omer</b></li><li>physics → a <b><u>phys</u>icist</b></li><li>chemistry → a <b><u>chem</u>ist</b></li><li>computer science → a <b>computer scientist</b></li></ul><p>-ology → -ologist. In British English, a <b>chemist</b> is also a person who sells medicines, and a <b>chemist’s</b> is a shop.</p>`,
          cta: "Next"
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Daryna wants to study rocks and mountains. What job is she dreaming of? Use a word from “Scientists: who does what?”.</p>`,
          before: "In the future, Daryna wants to be a",
          after: "",
          answer: "geologist",
          hint: "geology → -ology becomes …",
          fbOk: "Well done!",
          fbBad: "Look at the person for geology in the list.",
          fbText: "geology → a <b>geologist</b>: -ology becomes -ologist, like biology → biologist."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["bi|+ol|o|gy", "+chem|is|try", "as|+tron|o|my", "+phys|i|cist"],
          fbOk: "Good eye!",
          fbBad: "Say the words slowly. Which part is strong?",
          fbText: "bi<u>ol</u>ogy, <u>chem</u>istry, as<u>tron</u>omy, <u>phys</u>icist."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with the Present Simple passive.",
          text: "In biology, plants and animals {*are studied|is studied|are study}. In astronomy, planets {*are looked at|is looked at|are look at} through telescopes. In computer science, a new program {*is tested|are tested|is test} again and again.",
          hint: "is / are + the third form. Is the thing one or more than one?",
          fbOk: "Yes!",
          fbBad: "Remember: is / are + the third form: studied, looked at, tested.",
          fbText: "Plants and animals <b>are studied</b>; planets <b>are looked at</b>; a program <b>is tested</b>. Two or more → <i>are</i>, one → <i>is</i>, then the third form."
        },
        {
          type: "pick",
          sk: "vocab",
          title: "Find the mistake.",
          body: `<p>One word in Zoriana’s post is wrong.</p>`,
          text: "My cousin is a [physic]. She works in a [!lab] in Kyiv and studies [!light] and energy.",
          hint: "Which word is a person? Is it the right word for a person?",
          fbOk: "Good eye!",
          fbBad: "Physics is the science. What do we call the person?",
          fbText: "My cousin is a <b>physicist</b>. <i>Physics</i> is the branch of science; a <i>physicist</i> is the person."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p><i>I’ve always loved the night sky. My grandad gave me his old telescope, and now I watch the planets from our garden. At school, I like physics too, because it explains light and energy. But I’m not very good at chemistry. In the future, I’d like to be an astronomer. – Emma</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Emma wants to be a chemist.",
            "Emma doesn’t like physics.",
            "Emma wants to study stars and planets in the future."
          ],
          correct: 2,
          hint: "Find In the future in the text.",
          fbOk: "Exactly.",
          fbBad: "Read the last sentence of Emma’s post.",
          fbText: "Emma wants to be an <b>astronomer</b>: a scientist who studies stars and planets. She <b>likes physics</b>, but she isn’t very good at chemistry."
        }
      ],
      outro: {
        text: "Biology, geology, astronomy, physicist: now you can talk about branches of science and the people who work in them.",
        learned: [
          "Name branches of science: biology, physics, geology, astronomy.",
          "Say what each branch studies.",
          "Name the scientists: a biologist, a physicist, an astronomer."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e11s5l2",
      title: "In the lab: equipment and the people who work there",
      short: "In the lab",
      icon: "eye",
      status: "verified",
      why: "Who works in a laboratory, and what do they use? Learn the words for lab jobs and equipment.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Who are the people in white coats?",
          body: `<p class="lead">Oksana and Mariia go to an open day at a university in Kharkiv. Dr Shapoval shows them her biology lab.</p><p><b>Dr Shapoval:</b> Welcome to our lab! I’m a researcher: I plan experiments and study the results.<br><b>Oksana:</b> And who are the people in white coats?<br><b>Dr Shapoval:</b> Pavlo is my research assistant. He helps me carry out the experiments. And that’s Mr Ivanenko, our lab technician. He prepares and looks after all the equipment.<br><b>Mariia:</b> What’s in those little glass tubes?<br><b>Dr Shapoval:</b> Water samples from the river. We’re checking them for pollution.</p><p>Who looks after the equipment in the lab?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Dr Shapoval: “Pavlo is my <b>research assistant</b>.”</p><p>What does a research assistant do?</p>`,
          opts: [
            "helps a researcher with experiments",
            "sells medicines in a shop",
            "writes news about science"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A <b>research assistant</b> helps a researcher: Pavlo helps Dr Shapoval carry out the experiments."
        },
        {
          type: "info",
          title: "People in a lab",
          body: `<ul><li>a <b>re<u>search</u>er</b> → plans experiments and studies the results</li><li>a <b>research assistant</b> → helps a researcher with experiments</li><li>a <b>lab tech<u>ni</u>cian</b> → prepares and looks after the equipment</li><li><b>carry out</b> an experiment → do an experiment</li></ul><p><b>lab</b> = <b>la<u>bor</u>atory</b>. Both are correct; <i>lab</i> is shorter and less formal.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["A researcher", "A research assistant", "A lab technician"],
          right: ["plans experiments and studies the results.", "helps a researcher with experiments.", "prepares and looks after the equipment."],
          hint: "Who plans? Who helps? Who looks after the equipment?",
          fbOk: "Well done!",
          fbBad: "Look at “People in a lab” again.",
          fbText: "A <b>researcher</b> plans experiments. A <b>research assistant</b> helps. A <b>lab technician</b> looks after the equipment."
        },
        {
          type: "info",
          title: "Lab equipment",
          body: `<ul><li>a <b>lab coat</b> → a white coat for work in a lab</li><li><b>safety <u>gog</u>gles</b> → protect your eyes</li><li><b>gloves</b> → protect your hands</li><li>a <b>test tube</b> → a small glass tube for liquids</li><li><b>scales</b> → show how heavy something is</li><li>a <b><u>mi</u>croscope</b> → makes very small things look bigger</li><li>a <b><u>sam</u>ple</b> → a small amount of something for testing: a water sample</li></ul>`,
          cta: "Next"
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Pavlo wants to know how heavy a soil sample is. Use a word from “Lab equipment”.</p>`,
          before: "He puts the sample on the",
          after: "",
          answer: "scales",
          hint: "Which equipment shows how heavy something is?",
          fbOk: "Yes!",
          fbBad: "Goggles protect your eyes. A test tube is for liquids. What shows how heavy something is?",
          fbText: "<b>Scales</b> show how heavy something is. In British English, we usually say <i>scales</i>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["tech|+ni|cian", "la|+bor|a|tor|y", "+mi|cro|scope"],
          fbOk: "Good eye!",
          fbBad: "Say the words slowly. Which part is strong?",
          fbText: "tech<u>ni</u>cian, la<u>bor</u>atory, <u>mi</u>croscope. In British English, <i>laboratory</i> has the stress on <u>bor</u>."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          text: "Before an experiment, always put on your {*safety goggles|scales|samples} to protect your eyes. Pavlo pours the river water into a {*test tube|lab coat|microscope}. Dr Shapoval looks at tiny river plants through a {*microscope|test tube|lab coat}.",
          hint: "Which one protects your eyes? Which one is for liquids? Which one makes small things look bigger?",
          fbOk: "Well done!",
          fbBad: "Look at “Lab equipment” again.",
          fbText: "<b>Safety goggles</b> protect your eyes. Water goes into a <b>test tube</b>. A <b>microscope</b> makes tiny plants look bigger."
        },
        {
          type: "info",
          title: "What happens in the lab?",
          body: `<p>To describe work in a lab, we often use the passive. The thing is more important than the person:</p><ul><li>Every morning, the equipment <b>is checked</b>.<br>→ Present Simple passive: <b>is / are</b> + the third form</li><li>Right now, the samples <b>are being tested</b>.<br>→ Present Continuous passive: <b>is / are being</b> + the third form</li></ul><p>keep – kept – <b>kept</b>, test – tested – <b>tested</b></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with the passive.",
          text: "In our lab, samples {*are kept|is kept|are keep} in a special fridge. The microscopes {*are cleaned|is cleaned|been cleaned} every evening. At the moment, a new water sample {*is being tested|are being tested|is being test}.",
          hint: "One or more than one? Then be + the third form.",
          fbOk: "Exactly.",
          fbBad: "Check two things: is or are, and the third form of the verb.",
          fbText: "Samples <b>are kept</b>; the microscopes <b>are cleaned</b>; a new sample <b>is being tested</b> right now. Plural → <i>are</i>; one → <i>is</i>; then the third form."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Mariia points at a big white machine and asks Dr Shapoval a question.</p>`,
          tiles: ["What", "is", "this", "machine", "used", "for?"],
          extra: ["use"],
          keepCase: true,
          answer: ["What is this machine used for?", "What machine is this used for?"],
          hint: "It’s a passive question. Which form of use do you need?",
          fbOk: "Yes!",
          fbBad: "is + the third form: used, not use.",
          fbText: "<b>What is this machine used for?</b> Remember from Year 9: <i>A microscope is used for looking at very small things.</i>"
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes to Emma after the open day.</p>`,
          text: "Yesterday I visited a real biology lab in Kharkiv! Dr Shapoval is a {*researcher|technician}: she plans the experiments. Her research {*assistant|researcher} helps her carry them out. The lab {*technician|researcher} looks after all the equipment. Everyone wears a lab coat and {*safety goggles|scales}. The river samples {*are being tested|are being test} right now. I hope I’ll work in a lab like that one day!",
          hint: "Who plans? Who helps? Who looks after the equipment?",
          fbOk: "Brilliant!",
          fbBad: "Look at the jobs in “People in a lab” again.",
          fbText: "Dr Shapoval – a <b>researcher</b>; Pavlo – her research <b>assistant</b>; Mr Ivanenko – the lab <b>technician</b>. Everyone wears <b>safety goggles</b>. The samples <b>are being tested</b>: is / are being + the third form."
        }
      ],
      outro: {
        text: "Researcher, lab technician, test tube, scales: now you can talk about a lab and the people who work there.",
        learned: [
          "Name the people in a lab: a researcher, a research assistant, a lab technician.",
          "Name lab equipment: safety goggles, a test tube, scales, a microscope.",
          "Describe work in a lab with the passive: The samples are being tested."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e11s5l3",
      title: "It has been discovered, it is being tested: the passive",
      short: "Passive tenses",
      icon: "chart",
      status: "verified",
      why: "Science news often says what has been done, not who did it. Use the passive in all the main tenses.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Robot club news",
          body: `<p class="lead">Zoriana writes the robot club news for the school website in Kyiv.</p><p><i>Our new robot <b>has been built</b>! Right now, it <b>is being tested</b> in the IT room. Last Tuesday, it <b>was being tested</b> when the power suddenly went off, so we lost a whole day. The robot <b>was repaired</b> the next morning. The science fair winners <b>will be announced</b> on Friday.</i></p><p>Is the robot ready now?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Zoriana: “Our new robot <b>has been built</b>!”</p><p>What does she mean?</p>`,
          opts: [
            "Someone is building the robot at the moment.",
            "The work on the robot is finished, and the robot is here now.",
            "Someone will build the robot next week."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>has been built</b> → the building is finished, and we can see the result now. This is the Present Perfect passive."
        },
        {
          type: "info",
          title: "The passive: what you already know",
          body: `<ul><li>Present Simple → <b>am / is / are</b> + the third form:<br>Robots <b>are used</b> in many factories.</li><li>Present Continuous → <b>am / is / are being</b> + the third form:<br>The robot <b>is being tested</b> now.</li><li>Past Simple → <b>was / were</b> + the third form:<br>It <b>was repaired</b> the next morning.</li></ul><p>build – built – <b>built</b>, repair – repaired – <b>repaired</b></p>`,
          cta: "Next"
        },
        {
          type: "info",
          title: "New: has been done, will be done",
          body: `<ul><li>Present Perfect passive → <b>has / have been</b> + the third form:<br>Our robot <b>has been built</b>. (It’s ready now.)<br>Three robots <b>have been sent</b> to the fair.</li><li>Future passive → <b>will be</b> + the third form:<br>The winners <b>will be announced</b> on Friday.</li></ul><p>Questions: <b>Has</b> the robot <b>been tested</b> yet? <b>Will</b> the results <b>be put</b> online?</p><p>an<u>nounce</u> → tell everyone officially</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Good news: the robot’s arm {*has been repaired|has been repair|have been repaired}, so it works again. All the tickets for the fair {*have been sold|has been sold|have been sell} already. Next Friday, the prizes {*will be given|will given|will be give} to the winners.",
          hint: "has / have been + the third form; will be + the third form. One thing or more than one?",
          fbOk: "Well done!",
          fbBad: "Check: has or have? And is the verb in the third form?",
          fbText: "The arm <b>has been repaired</b> (one thing → has). The tickets <b>have been sold</b> (plural → have). The prizes <b>will be given</b>: will be + the third form. sell – sold – <b>sold</b>, give – gave – <b>given</b>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>It’s Monday. The science fair is on Friday. Which sentence is about the future?</p>`,
          opts: [
            "The winners will be announced on Friday.",
            "The winners have been announced.",
            "The winners were announced last Friday."
          ],
          correct: 0,
          hint: "Which form is will be + the third form?",
          fbOk: "Right.",
          fbBad: "have been announced → it’s already done. were announced → the past.",
          fbText: "<b>will be announced</b> → the future passive. <i>Have been announced</i> → already done; <i>were announced</i> → the past."
        },
        {
          type: "info",
          title: "New: was being done",
          body: `<p>Past Continuous passive → <b>was / were being</b> + the third form. An action was in progress at a moment in the past:</p><ul><li>The robot <b>was being tested</b> when the power went off.</li><li>While the samples <b>were being checked</b>, the lab was closed.</li></ul><p>Compare: The robot <b>was tested</b> on Tuesday. → the whole action, from start to finish.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "When I came into the IT room, the robot {*was being charged|were being charged|was been charged}. While the new program {*was being installed|was being install|were being installed}, we couldn’t use the computers.",
          hint: "was / were being + the third form. The robot and the program: one or more?",
          fbOk: "Exactly.",
          fbBad: "One thing → was being + the third form.",
          fbText: "The robot <b>was being charged</b>; the program <b>was being installed</b>. Both actions were in progress at that moment. One thing → <i>was</i>, not <i>were</i>."
        },
        {
          type: "match",
          sk: "gram",
          title: "Match the forms and the names.",
          left: ["has been tested", "was being tested", "will be tested", "is being tested"],
          right: ["Present Perfect passive", "Past Continuous passive", "future passive", "Present Continuous passive"],
          hint: "has been → Present Perfect; was being → past; is being → now.",
          fbOk: "Well done!",
          fbBad: "Look at the first word: has, was, will or is?",
          fbText: "<b>has been</b> – Present Perfect; <b>was being</b> – Past Continuous; <b>will be</b> – future; <b>is being</b> – Present Continuous. After all of them: the third form."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Ms Lysenko asks the robot club a question. Use the Present Perfect passive.</p>`,
          tiles: ["has", "the robot", "been", "tested", "yet?"],
          extra: ["being"],
          answer: "Has the robot been tested yet?",
          hint: "Where does has go in a question? Where does yet go?",
          fbOk: "Yes!",
          fbBad: "Present Perfect passive: has + been, not being.",
          fbText: "<b>Has the robot been tested yet?</b> In a question, <i>has</i> comes first; <i>yet</i> goes at the end."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of Zoriana’s post is wrong.</p>`,
          text: "Our robot [has been build] at last! Right now, it [!is being tested], and the results [!will be announced] on Friday.",
          hint: "Check the third form of each verb.",
          fbOk: "Good eye!",
          fbBad: "build – built – built. Which form comes after has been?",
          fbText: "Our robot <b>has been built</b>: has been + the third form. <i>Is being tested</i> and <i>will be announced</i> are correct."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Zoriana’s news after the science fair.</p>`,
          text: "The science fair is over! On Friday morning, our robot {*was tested|was test} by three judges. While it {*was being tested|was being test}, I was really nervous. Then the winners {*were announced|were announce}, and guess what? Our robot {*has been given|has been give} second prize! Next year, an even better robot {*will be built|will be build}.",
          hint: "Every gap: a form of be + the third form.",
          fbOk: "Brilliant!",
          fbBad: "After was, was being, were, has been and will be: the third form.",
          fbText: "<b>was tested</b>, <b>was being tested</b>, <b>were announced</b>, <b>has been given</b>, <b>will be built</b>. Different tenses, one rule: be + the third form. The judges are important here, so Zoriana uses <i>by</i>."
        }
      ],
      outro: {
        text: "Has been built, was being tested, will be announced: now you can use the passive in all the main tenses.",
        learned: [
          "Use the Present Perfect passive: The robot has been built.",
          "Use the Past Continuous passive: It was being tested when the power went off.",
          "Use the future passive: The winners will be announced on Friday.",
          "Ask questions in the passive: Has it been tested yet?"
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e11s5l4",
      title: "It can be recycled, it must be tested: modals and the passive",
      short: "Modals + passive",
      icon: "shield",
      status: "verified",
      why: "Rules, possibilities and plans are often about things, not people. Use can, could, might, will, must and have to with the passive.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "Can it be recycled?",
          body: `<p class="lead">Daryna is preparing her science fair project “Plastic at our school”. She talks to Ms Lysenko.</p><p><b>Daryna:</b> I’ve checked all the bins at school. Plastic bottles can be recycled in our recycling bins, but crisp packets can’t.<br><b>Ms Lysenko:</b> Could the packets be used again in some way?<br><b>Daryna:</b> Maybe. They might be used for art projects. Mariia from the penfriend club makes pictures from old packets!<br><b>Ms Lysenko:</b> Great idea. But remember: your poster has to be finished by Friday. It will be shown in the hall.</p><p>Which things can be recycled at Daryna’s school?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Daryna: “Crisp packets <b>can’t be recycled</b> in our recycling bins.”</p><p>What does she mean?</p>`,
          opts: [
            "Nobody wants to recycle them.",
            "It isn’t possible to recycle them there.",
            "They have already been recycled."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>can’t be recycled</b> → it isn’t possible. This is a modal verb with the passive."
        },
        {
          type: "info",
          title: "Modal verb + be + the third form",
          body: `<p>You know <i>should be cooked</i> and <i>must be protected</i>. Other modal verbs work in the same way:</p><ul><li>Bottles <b>can be recycled</b>. → it’s possible</li><li>The packets <b>could be used</b> again. They <b>might be used</b> for art. → maybe</li><li>The poster <b>will be shown</b> in the hall. → the future</li><li>It <b>has to be finished</b> by Friday. It <b>must be finished</b>. → it’s necessary</li></ul><p>After a modal verb: <b>be</b> + the third form. No <i>to</i>, no <i>-s</i>: <s>can to be</s>, <s>must is</s>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences with a modal verb and the passive.",
          text: "Glass jars {*can be recycled|can recycled|can be recycle} many times. Old phones {*could be repaired|could be repair|could repaired}, so people don’t always need new ones. My poster {*has to be printed|has to printed|have to be printed} by Thursday.",
          hint: "modal verb + be + the third form. My poster → has or have?",
          fbOk: "Well done!",
          fbBad: "Don’t forget be, and use the third form.",
          fbText: "Glass jars <b>can be recycled</b>; old phones <b>could be repaired</b>; my poster <b>has to be printed</b> (one poster → has to)."
        },
        {
          type: "info",
          title: "Negatives and questions",
          body: `<ul><li>Negative: modal verb + <b>not be</b> + the third form:<br>Crisp packets <b>can’t be recycled</b> here.<br>The results <b>won’t be announced</b> today.</li><li>Question: modal verb + the thing + <b>be</b> + the third form:<br><b>Can</b> this packet <b>be recycled</b>?<br><b>Will</b> my poster <b>be shown</b> in the hall?</li><li>have to: <b>Does</b> it <b>have to be finished</b> today?<br>It <b>doesn’t have to be printed</b> in colour.</li></ul>`,
          cta: "Next"
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Daryna asks the school caretaker a question.</p>`,
          tiles: ["can", "this crisp packet", "be", "recycled?"],
          extra: ["being"],
          answer: ["Can this crisp packet be recycled?", "This crisp packet can be recycled?"],
          hint: "In a question, what comes first: the thing or the modal verb?",
          fbOk: "Yes!",
          fbBad: "After can: be, not being.",
          fbText: "<b>Can this crisp packet be recycled?</b> The modal verb comes first, then the thing, then <i>be</i> + the third form."
        },
        {
          type: "info",
          title: "mustn’t be or doesn’t have to be?",
          body: `<p>The rules in the school lab:</p><ul><li>Food <b>mustn’t be brought</b> into the lab. → it isn’t allowed</li><li>Gloves <b>don’t have to be worn</b> for this experiment. → you can wear them, but it isn’t necessary</li><li>Safety goggles <b>must be worn</b> / <b>have to be worn</b> at all times. → it’s necessary</li></ul><p>bring – brought – <b>brought</b>, wear – wore – <b>worn</b></p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the rules.",
          body: `<p>What does each rule mean?</p>`,
          bins: ["It isn’t allowed", "It isn’t necessary"],
          items: [
            ["Food mustn’t be brought into the lab.", 0],
            ["Phones mustn’t be used during experiments.", 0],
            ["Test tubes mustn’t be taken out of the lab.", 0],
            ["Your notes don’t have to be written in pen.", 1],
            ["Lab coats don’t have to be washed every day.", 1],
            ["This experiment doesn’t have to be finished today.", 1]
          ],
          hint: "mustn’t → not allowed; don’t have to → not necessary.",
          fbOk: "Exactly.",
          fbBad: "Look at the rules again: mustn’t be or don’t have to be?",
          fbText: "<b>mustn’t be</b> + the third form → it isn’t allowed. <b>don’t / doesn’t have to be</b> + the third form → it isn’t necessary, but you can."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>A new lab rule: you aren’t allowed to bring drinks into the lab. Use <i>must</i>.</p>`,
          before: "Drinks",
          after: "be brought into the lab.",
          answer: ["mustn’t", "must not"],
          contractions: true,
          hint: "It isn’t allowed → must + not.",
          fbOk: "Well done!",
          fbBad: "Not allowed: must + not.",
          fbText: "Drinks <b>mustn’t be brought</b> into the lab: it isn’t allowed. <i>Don’t have to</i> would mean it isn’t necessary."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One part of Ms Lysenko’s message is wrong.</p>`,
          text: "Your poster [must be finish] by Friday. It [!will be shown] in the hall, and it [!might be put] on the school website too.",
          hint: "Check the form after be.",
          fbOk: "Good eye!",
          fbBad: "After must be: the third form.",
          fbText: "Your poster <b>must be finished</b>: modal verb + be + the third form. <i>Will be shown</i> and <i>might be put</i> are correct (put – put – <b>put</b>)."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Daryna’s poster: “Plastic at our school”.</p>`,
          text: "We checked all the bins at our school. Plastic bottles {*can be recycled|can be recycle} in our recycling bins, but crisp packets {*can’t be recycled|can’t recycled}. Old packets {*could be used|could be use} for art projects. Next month, more recycling bins {*will be put|will be putted} in the corridors. Plastic bags {*don’t have to be thrown|don’t have to be throw} away: they can be used again and again.",
          hint: "Every gap: modal verb + be + the third form.",
          fbOk: "Brilliant!",
          fbBad: "Check be and the third form in each gap.",
          fbText: "<b>can be recycled</b>, <b>can’t be recycled</b>, <b>could be used</b>, <b>will be put</b> (put – put – put), <b>don’t have to be thrown</b> (throw – threw – thrown)."
        }
      ],
      outro: {
        text: "Can be recycled, will be shown, mustn’t be brought: now you can use modal verbs with the passive.",
        learned: [
          "Use modal verbs with the passive: It can be recycled. It will be shown.",
          "Make negatives and questions: It can’t be recycled. Can it be recycled?",
          "Tell mustn’t be from doesn’t have to be."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e11s5l5",
      title: "Science and the environment: good or bad?",
      short: "Argue your view",
      icon: "leaf",
      status: "verified",
      why: "Has science helped the planet or harmed it? Learn words about the environment and argue your point of view.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "More harm than good?",
          body: `<p class="lead">The penfriend club is having an online discussion about science and the environment.</p><p>The question: <b>Has science done more harm than good?</b></p><p><b>Bohdan:</b> I’m convinced that science has done more harm than good. Think of all the plastic in the sea.<br><b>Daryna:</b> I see your point, but science also helps us solve problems. Let me give you an example: the ozone layer.<br><b>Bohdan:</b> And what about air pollution from factories and cars?<br><b>Emma:</b> You have a point. But electric buses and solar panels were made by scientists and engineers too.<br><b>Taras:</b> I’m not convinced that technology alone can save the planet. People have to change their habits as well.</p><p>Who thinks that science has done more harm than good?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Daryna: “<b>I see your point, but</b> science also helps us solve problems.”</p><p>What is Daryna doing?</p>`,
          opts: [
            "She agrees with Bohdan completely.",
            "She doesn’t understand what Bohdan means.",
            "She understands Bohdan’s idea, but she disagrees."
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>I see your point, but…</b> → I understand your idea, but I don’t agree. It’s a polite way to disagree."
        },
        {
          type: "info",
          title: "The environment: words",
          body: `<ul><li><b>pol<u>lu</u>tion</b> → dirty air, water or land; <b>pol<u>lute</u></b> → make dirty</li><li><b>fossil fuels</b> → coal, oil and gas</li><li><b>renewable energy</b> → energy from the sun, wind and water; it doesn’t run out</li><li><b>plastic waste</b> → plastic that people throw away</li><li><b>the ozone layer</b> → a layer of gas high above the Earth; it protects us from the sun’s harmful light</li><li><b>have an <u>im</u>pact on</b> → have a strong effect on</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the descriptions.",
          left: ["fossil fuels", "renewable energy", "the ozone layer", "pollution"],
          right: ["coal, oil and gas", "energy from the sun and wind", "protects us from the sun’s harmful light", "dirty air, water or land"],
          hint: "Which one doesn’t run out? Which one is high above the Earth?",
          fbOk: "Right.",
          fbBad: "Look at “The environment: words” again.",
          fbText: "<b>fossil fuels</b> – coal, oil, gas; <b>renewable energy</b> – sun and wind; <b>the ozone layer</b> – protects us; <b>pollution</b> – dirty air, water or land."
        },
        {
          type: "info",
          title: "The ozone story",
          body: `<ul><li>In <b>1985</b>, three British scientists – Joe Farman, Brian Gardiner and Jonathan Shanklin – reported that the ozone layer over Antarctica was getting much thinner. People called it the <b>ozone hole</b>.</li><li>Gases called <b>CFCs</b>, which were used in fridges and sprays, were damaging the ozone layer.</li><li>In <b>1987</b>, an agreement called the <b>Montreal Protocol</b> was signed to stop the use of these gases.</li><li>Scientists expect the ozone layer over Antarctica to recover by about <b>2066</b>.</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          title: "Choose the correct answer.",
          body: `<p>Daryna gives the ozone layer as an example. What does the ozone story show?</p>`,
          opts: [
            "Nothing could be done about the ozone hole.",
            "The ozone layer recovered completely in 1987.",
            "Scientists found a problem, and countries worked together to solve it."
          ],
          correct: 2,
          hint: "Read “The ozone story” again: what happened in 1985 and in 1987?",
          fbOk: "Exactly.",
          fbBad: "What was signed in 1987? And when do scientists expect the ozone layer to recover?",
          fbText: "In 1985, scientists <b>reported the problem</b>; in 1987, the <b>Montreal Protocol</b> was signed. The ozone layer is expected to recover by about <b>2066</b>, not 1987."
        },
        {
          type: "info",
          title: "Arguing your point of view",
          body: `<p><b>Supporting your own view</b></p><ul><li><b>I’m convinced that</b> … → I’m sure</li><li><b>The evidence suggests that</b> … → the facts show it</li><li><b>Let me give you an example</b>: …</li></ul><p><b>Disagreeing politely</b></p><ul><li><b>I see your point, but</b> … / <b>I take your point, but</b> …</li><li><b>You have a point, but</b> … → you’re partly right</li><li><b>I’m not convinced that</b> … → I’m not sure it’s true</li></ul>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "func",
          title: "Sort the sentences.",
          body: `<p>Does the speaker support their own view or disagree politely?</p>`,
          bins: ["Supports their own view", "Disagrees politely"],
          items: [
            ["I’m convinced that we need more solar panels.", 0],
            ["The evidence suggests that the ozone layer is recovering.", 0],
            ["Let me give you an example: the Montreal Protocol.", 0],
            ["I see your point, but electric cars are still expensive.", 1],
            ["You have a point, but people in villages need cars.", 1],
            ["I’m not convinced that plastic bags should be banned.", 1]
          ],
          hint: "Find but and not convinced.",
          fbOk: "Well done!",
          fbBad: "Polite disagreement often has but or I’m not convinced.",
          fbText: "Support: <b>I’m convinced that</b>, <b>The evidence suggests that</b>, <b>Let me give you an example</b>. Polite disagreement: <b>I see your point, but</b>, <b>You have a point, but</b>, <b>I’m not convinced that</b>."
        },
        {
          type: "gaps",
          sk: "func",
          title: "Complete the sentences.",
          body: `<p>Bohdan: “Science has done more harm than good.” Daryna answers.</p>`,
          text: "I {*take|convince} your point, but I’m not {*convinced|seeing}. The evidence {*suggests|convinces} that science can solve problems. Let me {*give|take} you an example: the ozone layer.",
          hint: "Look at the phrases in “Arguing your point of view”.",
          fbOk: "Yes!",
          fbBad: "Look at the phrases in “Arguing your point of view” again.",
          fbText: "I <b>take</b> your point, but I’m not <b>convinced</b>. The evidence <b>suggests</b> that… Let me <b>give</b> you an example."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><i>Some people argue that science is the problem. I’m not convinced. Yes, fossil fuels are still burnt in many power stations, and a lot of plastic waste is thrown into the sea. But the ozone hole was discovered by scientists, and most of the gases that caused it are no longer made. In my town, many old buses have been replaced by electric ones. The evidence suggests that science can be part of the answer – but only if people use it wisely. – Emma</i></p><p>What is Emma’s view?</p>`,
          opts: [
            "Science is the main problem for the environment.",
            "Science can help to solve problems with the environment if people use it wisely.",
            "Electric buses cause more pollution than old buses."
          ],
          correct: 1,
          hint: "Find The evidence suggests in the text.",
          fbOk: "Exactly.",
          fbBad: "Read the last sentence of Emma’s post.",
          fbText: "Emma thinks science <b>can be part of the answer</b>, but only if people use it wisely. <i>Science is the problem</i> is what some people argue; Emma isn’t convinced."
        },
        {
          type: "build",
          sk: "func",
          eyebrow: "Final",
          title: "Put the words in order.",
          body: `<p>Bohdan answers Emma. He disagrees politely.</p>`,
          tiles: ["I", "see", "your point,", "but", "plastic", "is still", "a big problem"],
          extra: ["convinced"],
          answer: "I see your point, but plastic is still a big problem.",
          hint: "First show that you understand Emma. Then give your own view.",
          fbOk: "Brilliant!",
          fbBad: "Polite disagreement: I see your point, but…",
          fbText: "<b>I see your point, but plastic is still a big problem.</b> First show you understand, then give your own view after <i>but</i>."
        }
      ],
      outro: {
        text: "Fossil fuels, the ozone layer, I see your point, but…: now you can talk about science and the environment and argue your view.",
        learned: [
          "Talk about the environment: pollution, fossil fuels, renewable energy, the ozone layer.",
          "Support your view: I’m convinced that…, The evidence suggests that…",
          "Disagree politely: I see your point, but…, I’m not convinced that…"
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e11s5l6",
      title: "Science in Ukraine and abroad",
      short: "Ukrainian science",
      icon: "globe",
      status: "verified",
      why: "Read an article about Ukrainian science, from Kyiv to Antarctica and Geneva. Then use the passive to talk about it.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "A station in Antarctica?",
          body: `<p class="lead">Andrii is writing an article for the school newspaper: “Ukrainian science: from Kyiv to Antarctica”.</p><p><b>Andrii:</b> Did you know that Ukraine has its own research station in Antarctica?<br><b>Kyrylo:</b> Really? Who built it?<br><b>Andrii:</b> It was built by the British. Later, it was handed over to Ukraine.<br><b>Kyrylo:</b> But why go so far from home?</p><p>What do you think?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Why do scientists work in Antarctica?</p>`,
          opts: [
            "to study the weather and the ozone layer",
            "to grow fruit and vegetables for shops",
            "to build new cities"
          ],
          correct: 0,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Scientists in Antarctica study the <b>weather</b>, the <b>ozone layer</b> and life there."
        },
        {
          type: "info",
          title: "Words for the article",
          body: `<ul><li>an <b>academy of sciences</b> → an organisation of scientists and their institutes (a<u>cad</u>emy)</li><li>a <b>research institute</b> → a place where scientists do research</li><li>a <b>research station</b> → a place where scientists live and work</li><li><b>found</b> an organisation → start it: It was <b>founded</b> in 1918.</li><li><b>hand over</b> → give something to someone: It was <b>handed over</b> to Ukraine.</li><li><b><u>weld</u>ing</b> → joining metal by melting it</li></ul><p>Official Ukrainian spelling: <i>Vernadskyi</i>.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Ukrainian science, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i>When I started this article, I knew very little about Ukrainian scientists. Here is what I found out. Ukrainian science has a long history. The Ukrainian Academy of Sciences was founded in Kyiv in 1918. Its first president was the scientist Volodymyr Vernadsky, who studied minerals and the Earth. Today it is called the National Academy of Sciences of Ukraine. Research is carried out in its many institutes, from physics and chemistry to biology and history.</i></p><p><i>For many years, the Academy was led by Borys Paton. He was born in Kyiv in 1918, the same year that the Academy was founded. Paton was an expert in welding, a way of joining metal. He was president of the Academy for 58 years, from 1962 to 2020. His father, Yevhen Paton, was a famous engineer too: a bridge over the Dnipro in Kyiv, opened in 1953, is named after him.</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Borys Paton was the first president of the Academy.",
            "Volodymyr Vernadsky led the Academy for 58 years.",
            "The Academy was founded in Kyiv in 1918."
          ],
          correct: 2,
          hint: "Find the words first president and 58 years in the text.",
          fbOk: "Right.",
          fbBad: "Who was the first president? Who led the Academy for 58 years?",
          fbText: "The Academy <b>was founded in Kyiv in 1918</b>. Its first president was <b>Vernadsky</b>; <b>Paton</b> led it for 58 years."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Ukrainian science, part 2 of 3",
          title: "Choose all the correct answers.",
          body: `<p><i>Ukrainian scientists also work very far from home. On Galindez Island, near the Antarctic Peninsula, there is a Ukrainian research station called Akademik Vernadsky. It was named after the first president of the Academy. The station was built by the British, who started it in 1947 and later called it Faraday. In 1996, it was handed over to Ukraine.</i></p><p><i>Life at the station isn’t easy: there are no shops, and the nearest town is very far away. The station works all year round: even in winter, when the days are very short, a small team of scientists stays there. Their work is important. The weather is measured, the ozone layer is studied, and plants and animals are watched closely. Since 1996, a lot of data has been collected there. Changes in Antarctica can tell us a lot about the whole planet.</i></p><p>What is done at the station?</p>`,
          opts: [
            "The weather is measured.",
            "The ozone layer is studied.",
            "New kinds of metal are made.",
            "Plants and animals are watched.",
            "Food is grown for the shops."
          ],
          correct: [0, 1, 3],
          hint: "Read the sentence that starts with The weather.",
          fbOk: "Exactly.",
          fbBad: "Metal is Paton’s welding, in part 1. And there are no shops at the station.",
          fbText: "At the station, <b>the weather is measured</b>, <b>the ozone layer is studied</b>, and <b>plants and animals are watched</b>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Ukrainian science, part 3 of 3",
          title: "Read and choose.",
          body: `<p><i>Ukraine is also part of international science. CERN, a famous physics laboratory, was founded in 1954 near Geneva, on the border between France and Switzerland. You may remember that the World Wide Web was invented there by Tim Berners-Lee in 1989. In 2016, Ukraine became an associate member of CERN. At our school, Ms Lysenko often says that some of us might work in a place like CERN one day. Zoriana is already dreaming about it!</i></p><p><i>What will Ukrainian science look like in the future? I think more of our discoveries will be shared with the world, and new research projects might be started. One thing is clear: science has to be supported, because the problems of tomorrow can’t be solved without it. – Andrii</i></p><p>When did Ukraine become an associate member of CERN?</p>`,
          opts: [
            "in 1954",
            "in 2016",
            "in 1989"
          ],
          correct: 1,
          hint: "Find the words associate member in the text.",
          fbOk: "Well done!",
          fbBad: "1954 is when CERN was founded. 1989 is the year of the Web.",
          fbText: "Ukraine became an associate member of CERN <b>in 2016</b>. CERN was founded in 1954, and the Web was invented there in 1989."
        },
        {
          type: "choice",
          sk: "read",
          title: "Choose the correct answer.",
          body: `<p>Think about all three parts of Andrii’s article. What is his main idea?</p>`,
          opts: [
            "Ukrainian scientists only work in Kyiv.",
            "Science can’t solve the problems of tomorrow.",
            "Ukrainian science is important at home and abroad, and it has to be supported."
          ],
          correct: 2,
          hint: "Look at the end of the article, after One thing is clear.",
          fbOk: "Exactly.",
          fbBad: "Where do Ukrainian scientists work: only in Kyiv?",
          fbText: "Andrii writes about Kyiv, Antarctica and CERN, and he finishes: <b>science has to be supported</b>."
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the dates and the events.",
          left: ["1918", "1954", "1996", "2016"],
          right: ["The Ukrainian Academy of Sciences was founded.", "CERN was founded near Geneva.", "The station in Antarctica was handed over to Ukraine.", "Ukraine became an associate member of CERN."],
          hint: "Which part of the article is about Kyiv, Antarctica and CERN?",
          fbOk: "Well done!",
          fbBad: "Read the dates in the three parts of the article again.",
          fbText: "1918 – the Academy; 1954 – CERN; 1996 – the station <b>was handed over</b>; 2016 – Ukraine joined CERN as an associate member."
        },
        {
          type: "info",
          title: "The passive in the article",
          body: `<ul><li>was founded, was led, was named, was handed over → Past Simple passive</li><li>is carried out, is measured, is studied → Present Simple passive</li><li>has been collected → Present Perfect passive</li><li>will be shared → future passive; might be started, has to be supported, can’t be solved → modal verbs</li></ul><p>Use <b>by</b> only when it’s important who did it:<br>The Web was invented <b>by Tim Berners-Lee</b>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Complete the sentences.",
          body: `<p>Kyrylo writes a summary of Andrii’s article.</p>`,
          text: "The Ukrainian Academy of Sciences {*was founded|was founding|were founded} in 1918. The station in Antarctica {*was handed over|were handed over|was hand over} to Ukraine in 1996. Since then, a lot of data {*has been collected|has been collect|have been collect} there.",
          hint: "be + the third form. The Academy, the station, data: one thing each.",
          fbOk: "Brilliant!",
          fbBad: "Check was or were, has or have, and the third form.",
          fbText: "The Academy <b>was founded</b>; the station <b>was handed over</b>; data <b>has been collected</b>. One thing → was, has; then the third form."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Andrii wants to say who invented the Web. Which sentence is best?</p>`,
          opts: [
            "The Web was invented by Tim Berners-Lee in 1989.",
            "The Web was invented by someone in 1989.",
            "The Web invented Tim Berners-Lee in 1989."
          ],
          correct: 0,
          hint: "Is it important who did it? Then use by + the person.",
          fbOk: "Right.",
          fbBad: "Andrii wants to say who did it. And the Web didn’t invent a person!",
          fbText: "<b>The Web was invented by Tim Berners-Lee.</b> It’s important who did it, so we use <i>by</i> + the person. <i>By someone</i> tells us nothing."
        },
        {
          type: "build",
          sk: "write",
          eyebrow: "Final",
          title: "Put the words in order.",
          body: `<p>Finish Andrii’s article with your own view. Use <i>has to</i> and the passive.</p>`,
          tiles: ["science", "has to", "be", "supported", "in Ukraine"],
          extra: ["support"],
          answer: ["Science has to be supported in Ukraine.", "In Ukraine science has to be supported.", "Science in Ukraine has to be supported."],
          hint: "After has to be, which form of support do you need?",
          fbOk: "Brilliant!",
          fbBad: "After has to be: the third form.",
          fbText: "<b>Science has to be supported in Ukraine.</b> has to + be + the third form: <i>supported</i>, not <i>support</i>."
        }
      ],
      outro: {
        text: "Founded in 1918, handed over in 1996, has to be supported: now you can read and talk about science in Ukraine and abroad.",
        learned: [
          "Read an article about science in Ukraine and abroad and find its main idea.",
          "Talk about Ukrainian science: the National Academy of Sciences and the Akademik Vernadsky station.",
          "Use the passive in different tenses and with modal verbs, with by only when it’s important."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e11s5l7",
      title: "Science Week: the club magazine",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e11s5boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you check the science pages?",
          body: `<p class="lead">The penfriend club is making a magazine for Science Week: “Science and its impact”.</p><p>Check the pages before they go online. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "match",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Match the branches and the scientists.",
          left: ["geology", "astronomy", "physics", "biology"],
          right: ["a geologist", "an astronomer", "a physicist", "a biologist"],
          pre: "e11s5l1",
          hint: "-ology → -ologist. Which one ends in -er?",
          fbOk: "Right.",
          fbBad: "Look at the endings: -ologist, -er, -icist.",
          fbText: "geology – a <b>geologist</b>; astronomy – an <b>astronomer</b>; physics – a <b>physicist</b>; biology – a <b>biologist</b>."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          text: "In the lab, Pavlo pours the water sample into a {*test tube|lab coat|scales}. Before the experiment, everyone puts on {*safety goggles|test tubes|samples}. The lab {*technician|sample|microscope} looks after all the equipment.",
          pre: "e11s5l2",
          hint: "Which one protects your eyes? Which one is for liquids?",
          fbOk: "Yes!",
          fbBad: "Look at the words for lab equipment and lab jobs.",
          fbText: "Water goes into a <b>test tube</b>. <b>Safety goggles</b> protect your eyes. The lab <b>technician</b> looks after the equipment."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 3",
          title: "Fill in the gaps.",
          text: "All the projects {*have been checked|has been checked|have been check}, and the winners {*will be announced|will announced|will be announce} tomorrow.",
          pre: "e11s5l3",
          hint: "have been + the third form; will be + the third form.",
          fbOk: "Well done!",
          fbBad: "The projects → plural. And don’t forget be after will.",
          fbText: "The projects <b>have been checked</b> (plural → have); the winners <b>will be announced</b>."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Fill in the gaps.",
          text: "Glass {*can be recycled|can recycled|can be recycle} many times. Gloves {*don’t have to be worn|doesn’t have to be worn|don’t have to be wear} for this experiment, but goggles {*must be worn|must worn|must be wore}.",
          pre: "e11s5l4",
          hint: "modal verb + be + the third form. Gloves → don’t or doesn’t?",
          fbOk: "Yes!",
          fbBad: "Check be and the third form: worn, not wore.",
          fbText: "Glass <b>can be recycled</b>; gloves <b>don’t have to be worn</b>; goggles <b>must be worn</b>. wear – wore – <b>worn</b>."
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Choose the correct answer.",
          body: `<p>A lab rule: “Food <b>mustn’t be brought</b> into the lab.” What does it mean?</p>`,
          opts: [
            "You can bring food, but it isn’t necessary.",
            "You aren’t allowed to bring food into the lab.",
            "Food has to be brought into the lab."
          ],
          correct: 1,
          pre: "e11s5l4",
          hint: "mustn’t → not allowed or not necessary?",
          fbOk: "Right.",
          fbBad: "mustn’t → it isn’t allowed. don’t have to → it isn’t necessary.",
          fbText: "<b>mustn’t be brought</b> → it isn’t allowed. <i>Doesn’t have to be brought</i> would mean it isn’t necessary."
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 6",
          title: "Fill in the gaps.",
          text: "Coal, oil and gas are {*fossil fuels|renewable energy}. Energy from the sun and wind is {*renewable energy|fossil fuels}. The {*ozone layer|plastic waste} protects us from the sun’s harmful light.",
          pre: "e11s5l5",
          hint: "Which energy doesn’t run out?",
          fbOk: "Well done!",
          fbBad: "Look at the environment words again.",
          fbText: "Coal, oil and gas – <b>fossil fuels</b>. Sun and wind – <b>renewable energy</b>. <b>The ozone layer</b> protects us."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 7",
          title: "Choose the correct answer.",
          body: `<p>Bohdan: “Science has done more harm than good.”</p><p>Which answer disagrees politely?</p>`,
          opts: [
            "I’m convinced that you’re right.",
            "Let me give you an example of plastic in the sea.",
            "I see your point, but science also helps us solve problems."
          ],
          correct: 2,
          pre: "e11s5l5",
          hint: "Which phrase shows you understand, and then says but?",
          fbOk: "Exactly.",
          fbBad: "I’m convinced that you’re right → you agree.",
          fbText: "<b>I see your point, but…</b> disagrees politely. <i>I’m convinced that you’re right</i> agrees; the example about plastic supports Bohdan."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 8",
          title: "Choose the correct answer.",
          body: `<p>Which sentence about Ukrainian science is true?</p>`,
          opts: [
            "The Akademik Vernadsky station was handed over to Ukraine in 1996.",
            "Borys Paton founded CERN.",
            "The Ukrainian Academy of Sciences was founded in 2016."
          ],
          correct: 0,
          pre: "e11s5l6",
          hint: "Remember Andrii’s article.",
          fbOk: "Well done!",
          fbBad: "The Academy was founded in 1918, and Paton led the Academy, not CERN.",
          fbText: "The station <b>was handed over to Ukraine in 1996</b>. The Academy was founded in 1918; Paton led it from 1962 to 2020. In 2016, Ukraine became an associate member of CERN."
        },
        {
          type: "pick",
          sk: "gram",
          eyebrow: "Task 9",
          title: "Find the mistake.",
          body: `<p>One part of the magazine page is wrong.</p>`,
          text: "The station [was build] by the British. It [!was handed over] to Ukraine in 1996, and since then a lot of data [!has been collected] there.",
          pre: "e11s5l6",
          hint: "Check the third form of each verb.",
          fbOk: "Brilliant!",
          fbBad: "build – built – built.",
          fbText: "The station <b>was built</b> by the British: was + the third form. <i>Was handed over</i> and <i>has been collected</i> are correct."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about branches of science, labs, the environment and Ukrainian science, and use the passive in many forms.",
        learned: [
          "Talk about branches of science, lab jobs and lab equipment.",
          "Use the passive in all the main tenses and with modal verbs.",
          "Argue your view about science and the environment.",
          "Talk about science in Ukraine and abroad."
        ]
      }
    }
  ]
});
