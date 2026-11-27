/* Слід · Англійська мова, 11 клас — «Ukraine in the world» (e11s7)
   Програма: П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; спеціалізовані школи, B2), 11 кл.: тема «Україна в світі» —
   міжнародні організації (ЄС, ООН, Рада Європи), законодавчі акти, право, норми етикету, благодійна діяльність; «Країни
   виучуваної мови» — міжнародні відносини, знаменні події, видатні люди (с. 23–24); функції — порівнювати (l3), підводити
   підсумки обговорення (l6) (с. 23); граматика (с. 25): defining vs non-defining relative clauses — повт. e6s6l3, e8s4l3–l4,
   e9s5l3–l5; overview of relative pronouns — нове: whom (l4), which про все речення (l5), пропуск займенника-додатка (l4).
   Розподіл — content/eng/plan.js, reports/verify/plan-eng-g10-11.md:
   https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf
   Друга правильна відповідь (plan-eng-g10-11, CD Grammar «Relative pronouns», «Who, whom», «Relative clauses referring to a
   whole sentence»): who / that і which / that у defining не протиставляємо (обидва в multi чи другий — поза варіантами);
   who як додаток = whom (у multi — обидва); після прийменника — лише whom (to who — хибний); у non-defining that — хибний;
   which про все речення — лише which (that, what, it — хибні). Пропуск займенника-додатка — multi.
   Не дублює e10s7 (устрій, Конституція, свята): тут міжнародні організації, права людини, етикет, події й люди.
   Факти — з двох джерел, URL — tasks/…/write-eng-g11-e11s7.md «Нотатки агента». Україна — не член ЄС (кандидат з 2022).
   Діалоги — репліками в body (D-056), без звуку (D-055 п. 4).
   Герої — серія 4–11 кл. (17 років): Andrii (Kyiv, клас Ms Lysenko: Daryna, Bohdan, Kyrylo, Zoriana), Emma й Orysia (England),
   Owen (Cardiff), Mariia (Kharkiv). Нових імен немає.
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e11s7, 2026-11-27; reports/verify/write-eng-g11-e11s7.md). 7 уроків (6 + фінал). Будова — за розділами 10–11 кл. (e10s7, e11s1).
   Перевірка: node tools/validate.mjs --section e11s7 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e11s7",
  grade: 11,
  weeks: [27, 31],
  title: "Ukraine in the world",
  why: "To talk about Ukraine and international organisations, laws, rights and etiquette. And to tell people about important events and outstanding people of English-speaking countries.",
  requires: ["e6s6l3", "e8s4l3", "e8s4l4", "e9s5l3", "e9s5l4", "e9s5l5", "e10s7l2", "e11s1l1", "e11s1l2", "e11s1l6"],
  meta: { author: "writer-e11s7", created: "2026-11-26", factcheck: "verifier-e11s7, 2026-11-27 (reports/verify/write-eng-g11-e11s7.md)", teacher: null },
  badges: [
    { id: "e11s7boss", name: "Global Citizen", icon: "trophy", desc: "Finish the final lesson “Ukraine in the world”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e11s7l1",
      title: "Ukraine, the EU, the UN and the Council of Europe",
      short: "Organisations",
      icon: "globe",
      status: "verified",
      why: "Ukraine works with many countries. Talk about the international organisations it belongs to and the help they give.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Which organisation came first?",
          body: `<p class="lead">Daryna is making a presentation for the class project “Ukraine in the world” in Kyiv.</p><p><i>Ukraine is a member of many international organisations. In 1945, it was one of the 51 founding members of the United Nations (the UN). It joined as the Ukrainian SSR, which was then part of the Soviet Union. In 1995, Ukraine joined the Council of Europe, an organisation that protects human rights and democracy. In 2022, Ukraine applied to join the European Union (the EU), and in June that year it became a candidate country. Membership talks began in 2024. Ukraine isn’t an EU member yet.</i></p><p>Which organisation did Ukraine join first?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Daryna: “Ukraine was one of the 51 founding members of the UN.”</p><p>What is a <i>founding member</i>?</p>`,
          opts: [
            "a country that gives the most money",
            "a country that was a member from the very beginning",
            "a country where the organisation has its main offices"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "A <b>founding member</b> was there from the very beginning. The UN started in 1945 with 51 members, and Ukraine was one of them."
        },
        {
          type: "info",
          title: "International organisations",
          body: `<ul><li>an <b>international organi<u>sa</u>tion</b> → countries work together in it</li><li>a <b><u>mem</u>ber</b> / a <b>member state</b> → a country that belongs to it; <b><u>mem</u>bership</b> → being a member</li><li>a <b>founding member</b> → a member from the very beginning</li><li><b>join</b> → become a member: <i>Ukraine joined the Council of Europe in 1995.</i></li><li><b>apply to join</b> → officially ask to become a member</li><li>a <b><u>can</u>didate country</b> → a country that is getting ready to become a member</li><li><b>head<u>quar</u>ters</b> → the main offices: the UN – New York; the Council of Europe – Strasbourg</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "cult",
          title: "Match the events and the organisations.",
          left: ["Ukraine joined it in 1945.", "Ukraine joined it in 1995.", "Ukraine became a candidate country in 2022."],
          right: ["the United Nations", "the Council of Europe", "the European Union"],
          hint: "Read Daryna’s presentation again. Which organisation is Ukraine not a member of yet?",
          fbOk: "Right.",
          fbBad: "Check the dates in Daryna’s presentation.",
          fbText: "1945 → <b>the UN</b> (as the Ukrainian SSR); 1995 → <b>the Council of Europe</b>; 2022 → a candidate country of <b>the EU</b>."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          text: "Ukraine was a founding {*member|members|membership} of the UN. It {*joined|became|applied} the Council of Europe in 1995. In 2022, Ukraine applied {*to join|joining|for join} the EU. Now it is a {*candidate|founding|headquarters} country.",
          hint: "a founding … (one country); … the Council of Europe; apply …; a … country (getting ready).",
          fbOk: "Well done!",
          fbBad: "Look at the list “International organisations” again.",
          fbText: "a founding <b>member</b>; it <b>joined</b> the Council of Europe; applied <b>to join</b>; a <b>candidate</b> country."
        },
        {
          type: "info",
          title: "Which organisation? A quick review",
          body: `<p>You know these words from earlier years:</p><ul><li>people → <b>who</b> / <b>that</b>: <i>Volunteers are people who help without being paid.</i></li><li>things → <b>which</b> / <b>that</b>: <i>The UN is an organisation which has 193 member states.</i></li><li>places → <b>where</b>: <i>Strasbourg is the city where the Council of Europe has its headquarters.</i></li></ul><p>No commas: the words after who, which or that tell us <b>which</b> person or thing we mean.</p>`,
          cta: "Next"
        },
        {
          type: "info",
          title: "Help in hard times",
          body: `<ul><li><b>humani<u>tar</u>ian aid</b> → food, water, medicine and other help for people in a crisis</li><li><b>pro<u>vide</u></b> → give people something they need: <i>provide food, provide medicine</i></li><li><b>UNICEF</b> → the UN agency that helps children</li><li><b>the World Food Programme</b> (WFP) → the UN agency that provides food</li><li>an <b><u>a</u>gency</b> → an organisation that does one special job</li></ul><p>Both agencies work in Ukraine. Thousands of volunteers help them.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "UNICEF is the UN agency {*that|where|whose} helps children. The World Food Programme is an organisation {*which|who|where} provides food. Aid workers are people {*who|which|where} bring help to places in a crisis. Kyiv is the city {*where|which|who} Daryna gave her presentation.",
          hint: "A person, a thing or a place? And what comes after the gap?",
          fbOk: "Exactly.",
          fbBad: "People → who; things → which or that; places → where.",
          fbText: "an agency <b>that</b> helps; an organisation <b>which</b> provides (<i>that</i> is also correct); people <b>who</b> bring help; the city <b>where</b> she gave her presentation (she gave it <i>there</i>)."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Daryna’s next slide is about the Council of Europe.</p>`,
          before: "The Council of Europe is the organisation",
          after: "Ukraine joined in 1995.",
          answer: ["that", "which"],
          hint: "The Council of Europe is a thing, not a person.",
          fbOk: "Yes!",
          fbBad: "Is the Council of Europe a person, a thing or a place?",
          fbText: "the organisation <b>that</b> (or <b>which</b>) Ukraine joined. A new subject comes next (<i>Ukraine</i>), so you can also leave the word out: <i>the organisation Ukraine joined</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Bohdan’s slide is wrong.</p>`,
          text: "The UN is an organisation [who] has 193 member states. Its headquarters are in New York.",
          hint: "Look at the box “Which organisation? A quick review” again.",
          fbOk: "Good eye!",
          fbBad: "Is the UN a person or a thing?",
          fbText: "The UN is a thing, not a person: <b>an organisation which / that has 193 member states</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+can|di|date", "+mem|ber|ship", "or|gan|i|+sa|tion", "hu|man|i|+tar|i|an"],
          fbOk: "Well done!",
          fbBad: "Look at the underlined parts in the lists.",
          fbText: "<u>can</u>didate, <u>mem</u>bership, organi<u>sa</u>tion, humani<u>tar</u>ian."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Final",
          title: "Read and choose.",
          body: `<p>Daryna ends her presentation.</p><p><i>So Ukraine has been a member of the UN since 1945 and a member of the Council of Europe since 1995. It isn’t an EU member yet, but it has been a candidate country since 2022. And in hard times, UN agencies like UNICEF provide humanitarian aid to people in Ukraine.</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Ukraine became an EU member in 2022.",
            "Ukraine has been a member of the UN since 1945.",
            "Ukraine was a founding member of the Council of Europe."
          ],
          correct: 1,
          hint: "Find the words member and since in the text.",
          fbOk: "Exactly.",
          fbBad: "Read the first two sentences again.",
          fbText: "Ukraine has been a <b>UN member since 1945</b>. It joined the Council of Europe in 1995, and it’s an EU <b>candidate</b>, not a member."
        }
      ],
      outro: {
        text: "Member, candidate, founding member: now you can say where Ukraine belongs in the world.",
        learned: [
          "Talk about international organisations: join, apply to join, a candidate country.",
          "Say what the UN, the Council of Europe and the EU are.",
          "Use who, which, that and where to say which one you mean."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e11s7l2",
      title: "Laws and rights: what the law says",
      short: "Laws and rights",
      icon: "scale",
      status: "verified",
      why: "Laws protect our rights. Talk about the law, human rights and the courts that protect them.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "Born free and equal",
          body: `<p class="lead">Zoriana writes for Andrii’s school newspaper in Kyiv.</p><p><i>On 10 December, people around the world mark Human Rights Day. On this day in 1948, the UN adopted the Universal Declaration of Human Rights in Paris. Its first article says that all human beings are “born free and equal in dignity and rights”. In 1950, the Council of Europe created the European Convention on Human Rights, and Ukraine ratified it in 1997. So if people in Ukraine think that their rights have been broken, they can go to court. And if Ukrainian courts can’t help, they can apply to the European Court of Human Rights in Strasbourg.</i></p><p>Why is 10 December special?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“All human beings are born free and <b>equal</b> in dignity and rights.”</p><p>What does <i>equal</i> mean here?</p>`,
          opts: [
            "being the same age as everyone else",
            "having the same job as everyone else",
            "having the same rights as everyone else"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Equal</b> means the same in value. Every person has the same rights, whoever they are."
        },
        {
          type: "info",
          title: "The law",
          body: `<ul><li>a <b>law</b> → an official rule of a country; <b>pass</b> a law → make it a law (you know this from Year 10)</li><li><b>o<u>bey</u></b> the law ↔ <b>break</b> the law</li><li><b><u>le</u>gal</b> → allowed by the law ↔ <b>il<u>le</u>gal</b> → against the law</li><li>a <b>court</b> → the place where cases are decided; <b>go to court</b></li><li>a <b>judge</b> → the person who decides cases in court</li><li>a <b><u>law</u>yer</b> → a person who helps people with the law</li><li>a <b>fine</b> → money you pay when you break a law or a rule</li></ul>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "vocab",
          title: "Sort the sentences.",
          body: `<p>Is the person obeying the law or breaking it?</p>`,
          bins: ["Obeying the law", "Breaking the law"],
          items: [
            ["She stops at a red light.", 0],
            ["He buys a ticket for the bus.", 0],
            ["They wear seat belts in the car.", 0],
            ["He drives a car without a licence.", 1],
            ["She takes things from a shop without paying.", 1],
            ["They paint graffiti on someone’s house without asking.", 1]
          ],
          hint: "Would a police officer stop this person?",
          fbOk: "Exactly.",
          fbBad: "Which actions are against the law?",
          fbText: "Stopping at a red light, buying a ticket and wearing seat belts → <b>obeying</b> the law. Driving without a licence, taking things without paying and graffiti without asking → <b>breaking</b> it."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Complete the sentences.",
          text: "If you break a rule on the train, you might have to pay a {*fine|judge|court}. A {*judge|lawyer|fine} decides cases in court. Taking things from a shop without paying is {*illegal|legal|law}. If you need help with the law, you can ask a {*lawyer|court|fine}.",
          hint: "money you pay; the person who decides; against the law; the person who helps.",
          fbOk: "Yes!",
          fbBad: "Look at the list “The law” again.",
          fbText: "pay a <b>fine</b>; a <b>judge</b> decides cases; it’s <b>illegal</b> (against the law); ask a <b>lawyer</b>."
        },
        {
          type: "info",
          title: "Human rights",
          body: `<ul><li><b>human rights</b> → the rights that every person has</li><li><b>freedom of speech</b> → the right to say what you think</li><li><b>the right to a fair trial</b> → a court must listen to both sides and be fair</li><li><b>e<u>qual</u>ity</b> (noun of <i>equal</i>) → everyone has the same rights</li><li><b>discrimi<u>na</u>tion</b> → treating someone worse because of who they are</li><li><b>pro<u>tect</u></b> rights ↔ <b>break</b> (or <b>violate</b>) rights</li></ul>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the words and the meanings.",
          left: ["freedom of speech", "the right to a fair trial", "equality", "discrimination"],
          right: ["You can say what you think.", "A court must listen to both sides.", "Everyone has the same rights.", "treating someone worse because of who they are"],
          hint: "Which one is something bad?",
          fbOk: "Well done!",
          fbBad: "Look at the list “Human rights” again.",
          fbText: "<b>freedom of speech</b> → say what you think; <b>a fair trial</b> → the court listens to both sides; <b>equality</b> → the same rights; <b>discrimination</b> → treating someone worse."
        },
        {
          type: "info",
          title: "Defining or non-defining?",
          body: `<ul><li><b>Defining</b> (no commas) → tells us which one: <i>A law that protects children is important.</i> Use who, which or that.</li><li><b>Non-defining</b> (commas) → extra information about someone or something we already know: <i>The European Court of Human Rights, which is in Strasbourg, protects people’s rights.</i> Use who or which, <b>never that</b>.</li></ul><p>In a non-defining clause, you can’t leave out who or which.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "The Universal Declaration of Human Rights, {*which|that|who} the UN adopted in 1948, is about the rights of every person. Eleanor Roosevelt, {*who|which|that} chaired the committee, was from the USA. Strasbourg, {*where|which|that} the Council of Europe has its headquarters, is in France.",
          hint: "There are commas. A person, a thing or a place?",
          fbOk: "Right.",
          fbBad: "With commas, we never use that. Check: person, thing or place?",
          fbText: "the Declaration, <b>which</b>…; Eleanor Roosevelt, <b>who</b>…; Strasbourg, <b>where</b>… (it has its headquarters <i>there</i>). With commas, never <i>that</i>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Zoriana writes about the court. Which sentence is correct?</p>`,
          opts: [
            "The European Court of Human Rights, that is in Strasbourg, protects people’s rights.",
            "The European Court of Human Rights, which is in Strasbourg, protects people’s rights.",
            "The European Court of Human Rights which is in Strasbourg, protects people’s rights."
          ],
          correct: 1,
          hint: "There is only one European Court of Human Rights. Is the information extra?",
          fbOk: "Good eye!",
          fbBad: "Extra information needs two commas and who or which.",
          fbText: "There is only one such court, so <i>which is in Strasbourg</i> is extra information: two commas and <b>which</b>, not <i>that</i>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Zoriana’s draft is wrong.</p>`,
          text: "In 1997, Ukraine ratified the European Convention on Human Rights, [that] protects the rights of people in 46 countries.",
          hint: "Is this extra information? Then read the box “Defining or non-defining?” again.",
          fbOk: "Well done!",
          fbBad: "Extra information between commas: who or which?",
          fbText: "There is only one European Convention, so the information is extra: <b>…on Human Rights, which protects the rights of people in 46 countries</b>. Never <i>that</i> after a comma like this."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Zoriana finishes her article.</p>`,
          text: "Human rights belong to everyone. The Universal Declaration, {*which|that} the UN adopted in 1948, says that all people are born free and {*equal|equality} in dignity and rights. People {*who|which} think their rights have been broken can go to {*court|fine}. And the European Court of Human Rights, {*which|that} is in Strasbourg, can help when Ukrainian courts can’t.",
          hint: "Commas → which, not that. born free and … (adjective). People → who.",
          fbOk: "Brilliant!",
          fbBad: "Check the commas and the list “The law”.",
          fbText: "the Declaration, <b>which</b>…; born free and <b>equal</b>; people <b>who</b> think…; go to <b>court</b>; the Court, <b>which</b> is in Strasbourg."
        }
      ],
      outro: {
        text: "Obey the law, protect human rights – and put commas around extra information.",
        learned: [
          "Talk about the law: legal, illegal, a court, a judge, a fine.",
          "Talk about human rights: freedom of speech, equality, a fair trial.",
          "Tell defining and non-defining relative clauses apart."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e11s7l3",
      title: "Is it polite? Etiquette in different countries",
      short: "Etiquette",
      icon: "users",
      status: "verified",
      why: "What is polite in one family or country can be strange in another. Compare customs without judging.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "Five roses and a pair of slippers",
          body: `<p class="lead">Emma writes to Oksana.</p><p><i>Last Saturday, I went to Orysia’s flat for her mum’s birthday. Orysia, who moved here from Vinnytsia two years ago, had warned me about a few things. So at the door, I took off my shoes, and her mum gave me slippers. I’d bought five roses. Orysia said that was perfect: in Ukraine, people give an odd number of flowers, because even numbers are for funerals. Then I held out my hand to her mum across the doorway, and Orysia laughed: “Not across the threshold! Some people think it brings bad luck.” In my family, guests usually keep their shoes on, and nobody counts the flowers!</i></p><p>What was new for Emma?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Orysia: “In Ukraine, people give an <b>odd</b> number of flowers.”</p><p>Which numbers are odd?</p>`,
          opts: [
            "2, 4, 6, 8",
            "1, 3, 5, 7",
            "10, 20, 30, 40"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Odd</b> numbers are 1, 3, 5, 7… <b>Even</b> numbers are 2, 4, 6, 8… Emma bought five roses: an odd number."
        },
        {
          type: "info",
          title: "Etiquette and customs",
          body: `<ul><li><b><u>et</u>iquette</b> → the rules of polite behaviour</li><li>a <b><u>cus</u>tom</b> → something that people in a place usually do</li><li><b>It’s polite / rude to</b> + verb; <b>It’s considered rude to</b>… → many people think it’s rude</li><li>a <b>super<u>sti</u>tion</b> → a belief that something brings good or bad luck</li><li>an <b>odd</b> number (1, 3, 5) ↔ an <b>even</b> number (2, 4, 6)</li><li>the <b><u>thresh</u>old</b> → the floor at the door of a house or a room</li></ul>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "cult",
          title: "Sort the sentences.",
          body: `<p>Read Emma’s message again. Whose family is it?</p>`,
          bins: ["Orysia’s family", "Emma’s family"],
          items: [
            ["Guests take off their shoes at the door.", 0],
            ["Guests get slippers.", 0],
            ["People don’t shake hands across the threshold.", 0],
            ["Guests usually keep their shoes on.", 1],
            ["Nobody counts the flowers.", 1]
          ],
          hint: "Find “In my family” in Emma’s message.",
          fbOk: "Right.",
          fbBad: "Emma writes about her own family only at the end.",
          fbText: "In <b>Orysia’s</b> family, guests take off their shoes, get slippers and don’t shake hands across the threshold. In <b>Emma’s</b> family, guests keep their shoes on, and nobody counts the flowers."
        },
        {
          type: "info",
          title: "Comparing customs",
          body: `<ul><li><b>whereas</b> → shows a difference between two facts: <i>In Orysia’s family, guests take off their shoes, whereas in Emma’s family, they usually keep them on.</i></li><li><b>unlike</b> + noun → different from: <i>Unlike Emma, Orysia always counts the flowers.</i></li><li><b>both</b> → the same for two people or things: <i>Both girls think it’s polite to bring a small gift.</i></li><li><b>It’s the same in…</b> / <b>It’s different in…</b></li></ul><p>Compare, don’t judge: <i>different</i> doesn’t mean <i>wrong</i>.</p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "func",
          title: "Complete the sentences.",
          text: "In Ukraine, people give an odd number of flowers for a birthday, {*whereas|unlike|both} even numbers are for funerals. {*Unlike|Whereas|Both} her mum, Orysia doesn’t believe in superstitions. {*Both|Unlike|Whereas} Emma and Orysia love roses.",
          hint: "A difference between two facts; different from + noun; the same for two people.",
          fbOk: "Well done!",
          fbBad: "Look at the box “Comparing customs” again.",
          fbText: "…for a birthday, <b>whereas</b> even numbers… (two facts); <b>Unlike</b> her mum (+ noun); <b>Both</b> Emma and Orysia (the same)."
        },
        {
          type: "info",
          title: "What Orysia learnt in England",
          body: `<p>Orysia writes for the class project.</p><p><i>When I came to England, I learnt a few new rules. People queue at bus stops and in shops, and jumping the queue is considered very rude. In restaurants, people often leave a <b>tip</b> (= extra money for the waiter) of about 10–15% of the <b>bill</b>. But if there’s a <b>service charge</b> on the bill, the tip is already included.</i></p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "cult",
          title: "Choose the correct answer.",
          body: `<p>Orysia and her mum are in a café in England. At the bottom of the bill, it says: “Service charge 12.5% included”.</p><p>What can they do?</p>`,
          opts: [
            "They must leave another 15%.",
            "They should ask for a new bill.",
            "They don’t need to leave another tip."
          ],
          correct: 2,
          hint: "What does Orysia say about a service charge?",
          fbOk: "Exactly.",
          fbBad: "Read Orysia’s last sentence again.",
          fbText: "The <b>service charge</b> is on the bill, so the tip is <b>already included</b>. They don’t need to leave another one."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Compare the two families. Start with Unlike.</p>`,
          tiles: ["unlike", "Orysia’s family,", "Emma’s family", "doesn’t count", "the flowers"],
          extra: ["whereas"],
          answer: "Unlike Orysia’s family, Emma’s family doesn’t count the flowers.",
          hint: "unlike + noun, then a comma.",
          fbOk: "Yes!",
          fbBad: "After whereas, we need a full sentence. Here we only have a noun.",
          fbText: "<b>Unlike Orysia’s family, Emma’s family doesn’t count the flowers.</b> unlike + noun; <i>whereas</i> needs a whole sentence after it."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Emma tells Tom about the flowers.</p>`,
          before: "For a birthday in Ukraine, people give an",
          after: "number of flowers: one, three, five or seven.",
          answer: "odd",
          hint: "1, 3, 5, 7 → … numbers.",
          fbOk: "Right.",
          fbBad: "Look at the list “Etiquette and customs” again.",
          fbText: "1, 3, 5, 7 are <b>odd</b> numbers. Even numbers are for funerals."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Emma’s message to Tom is wrong.</p>`,
          text: "Orysia, [that] moved here from Vinnytsia, told me about the flowers. Her mum gave me slippers.",
          hint: "Is this extra information about Orysia, or does it tell us which girl?",
          fbOk: "Good eye!",
          fbBad: "Extra information between commas: who or which, never that.",
          fbText: "We already know who Orysia is, so the information is extra: <b>Orysia, who moved here from Vinnytsia, told me…</b> With commas, never <i>that</i>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma writes for the class project.</p>`,
          text: "Etiquette is different in different families and countries. In Orysia’s family, guests take off their {*shoes|slippers}, {*whereas|unlike} in my family, we usually keep them on. In Ukraine, people give an {*odd|even} number of flowers for a birthday. And in England, people often leave a {*tip|bill} if there’s no service charge. Different doesn’t mean wrong!",
          hint: "What do guests take off? Two facts → whereas. 1, 3, 5 → …",
          fbOk: "Well done!",
          fbBad: "Check the lists “Etiquette and customs” and “Comparing customs”.",
          fbText: "take off their <b>shoes</b>; <b>whereas</b> in my family (two facts); an <b>odd</b> number; leave a <b>tip</b>."
        }
      ],
      outro: {
        text: "Shoes off or shoes on? Now you can compare customs politely – different doesn’t mean wrong.",
        learned: [
          "Talk about etiquette: polite, rude, a custom, a superstition.",
          "Compare customs with whereas, unlike and both.",
          "Talk about tips and service charges in the UK."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e11s7l4",
      title: "Who or whom? Relative pronouns: an overview",
      short: "Who or whom?",
      icon: "user",
      status: "verified",
      why: "Who, whom, which, that, whose: put them all together and use whom in formal writing.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "A journalist from Wales",
          body: `<p class="lead">Owen from Cardiff writes for the project “Ukraine in the world”.</p><p><i>Have you heard of Gareth Jones? He was a Welsh journalist who was born in 1905 in Barry, a town near Cardiff. In March 1933, he travelled through Soviet Ukraine, where he saw a terrible <b>famine</b>: the Holodomor. A famine is a time when there isn’t enough food and many people die. He was the first journalist in the West who reported it openly, under his own name. Not everyone believed him. Jones died in 1935, the day before his 30th birthday. My history teacher, whom I interviewed for this post, says that people in Ukraine still remember him.</i></p><p>Look at <i>whom I interviewed</i>. Why not <i>who</i>?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Owen: “My history teacher, whom I interviewed for this post, says…”</p><p>Which sentence is also correct?</p>`,
          opts: [
            "My history teacher, which I interviewed for this post, says…",
            "My history teacher, whose I interviewed for this post, says…",
            "My history teacher, who I interviewed for this post, says…"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>who</b> is also correct here. <i>Whom</i> is more formal. The next screen shows when we use it."
        },
        {
          type: "info",
          title: "Who or whom?",
          body: `<ul><li><b>who</b> + verb → the person does the action: <i>a journalist <b>who reported</b> the famine</i></li><li><b>whom</b> → the person is the object (formal, in writing): <i>the teacher <b>whom I interviewed</b></i> (I interviewed the teacher)</li><li>In everyday English, <b>who</b> is also correct as the object: <i>the teacher who I interviewed</i></li><li>Right after a preposition → only <b>whom</b>: <i>the people <b>to whom</b> he spoke</i> (formal) = <i>the people who he spoke <b>to</b></i></li></ul><p>Not: <s>a journalist whom reported</s>, <s>the people to who he spoke</s></p>`,
          cta: "Next"
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>Owen: “The historian ___ I met at the museum knows a lot about Gareth Jones.”</p><p>Which words can go in the gap?</p>`,
          opts: [
            "whom",
            "who",
            "that",
            "which"
          ],
          correct: [0, 1, 2],
          hint: "The historian is a person and the object (I met her). How many words fit?",
          fbOk: "Well done!",
          fbBad: "Three answers are correct. Is a historian a thing?",
          fbText: "<b>whom</b> (formal), <b>who</b> and <b>that</b> are all correct: I met <i>the historian</i>. Not <i>which</i>: a historian is a person. You can also leave the word out: <i>the historian I met</i>."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Gareth Jones was a journalist {*who|whom|which} travelled a lot. In Ukraine, he met many people {*whose|whom|who’s} families had no food. The people to {*whom|who|that} he spoke were very hungry.",
          hint: "Who does the action? What comes after the gap: a verb, a noun or a person?",
          fbOk: "Exactly.",
          fbBad: "who + verb; whose + noun; to + whom.",
          fbText: "a journalist <b>who</b> travelled (who does the action); people <b>whose</b> families (+ noun); the people to <b>whom</b> he spoke (after a preposition)."
        },
        {
          type: "info",
          title: "All relative pronouns: an overview",
          body: `<ul><li><b>who</b> → people (subject or object)</li><li><b>whom</b> → people as the object; formal; after a preposition</li><li><b>which</b> → things and animals</li><li><b>that</b> → people or things, only <b>without</b> commas</li><li><b>whose</b> + noun → possession: <i>a man whose articles…</i></li><li><b>where</b> → places; <b>when</b> → times; <b>why</b> → reasons</li></ul><p>You can leave out who, whom, which or that when it’s the object: <i>the articles (that) he wrote</i>. But not when it’s the subject: <i>a man who reported</i>.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "gram",
          title: "Match the phrases and the words.",
          left: ["a journalist ___ reported the famine", "the town ___ he was born", "the year ___ he travelled to Ukraine", "the man ___ articles told the West about it"],
          right: ["who", "where", "when", "whose"],
          hint: "Look at the word before the gap: a person, a place or a time? And after it: a verb or a noun?",
          fbOk: "Right.",
          fbBad: "Look at the overview again.",
          fbText: "a journalist <b>who</b> reported; the town <b>where</b> he was born; the year <b>when</b> he travelled; the man <b>whose</b> articles (+ noun)."
        },
        {
          type: "multi",
          sk: "gram",
          title: "Choose all the correct answers.",
          body: `<p>In which sentences can you leave out the word in bold?</p>`,
          opts: [
            "These are the articles <b>that</b> Jones wrote in 1933.",
            "Jones was the journalist <b>who</b> told the West about the famine.",
            "The people <b>whom</b> he met were very hungry.",
            "Barry is the town <b>where</b> he was born."
          ],
          correct: [0, 2],
          hint: "Is the word the object? Is there a new subject after it?",
          fbOk: "Good eye!",
          fbBad: "Two answers are correct. Look at the word after the word in bold.",
          fbText: "the articles (that) <b>Jones</b> wrote, the people (whom) <b>he</b> met: a new subject comes next, so you can leave the word out. <i>who told</i> → a verb comes next. <i>the town he was born</i> is wrong."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Owen: “I wrote to a historian. She had written a book about Gareth Jones.” Make one formal sentence. Start with The historian.</p>`,
          tiles: ["the historian", "to whom", "I wrote", "had written", "a book about Jones"],
          extra: ["to who"],
          answer: "The historian to whom I wrote had written a book about Jones.",
          hint: "After a preposition: to + whom.",
          fbOk: "Yes!",
          fbBad: "Right after a preposition, use whom.",
          fbText: "<b>The historian to whom I wrote had written a book about Jones.</b> to + <b>whom</b>, not <i>to who</i>. Less formal: <i>The historian who I wrote to…</i>"
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Owen’s draft is wrong.</p>`,
          text: "Jones wrote about the families to [who] he had spoken in the villages. He also kept a diary.",
          hint: "Check every word after a preposition.",
          fbOk: "Well done!",
          fbBad: "Read the box “Who or whom?” again.",
          fbText: "Right after <i>to</i>, use <b>whom</b>: <b>the families to whom he had spoken</b>. Or less formally: <i>the families who he had spoken to</i>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Owen writes about Gareth Jones.</p><p>Jones was the journalist ___ articles told the West about the famine.</p>`,
          opts: [
            "who’s",
            "whose",
            "whom"
          ],
          correct: 1,
          hint: "His articles told the West… Which relative word means his?",
          fbOk: "Exactly.",
          fbBad: "After the gap comes a noun: articles.",
          fbText: "<b>whose</b> + noun = his: <b>the journalist whose articles told the West about the famine</b>."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Owen finishes his post.</p>`,
          text: "Gareth Jones, {*who|that|which} was born in Barry in 1905, was a journalist. In March 1933, he travelled to Soviet Ukraine, {*where|which|when} he saw the famine with his own eyes. The articles {*that|whose|where} he wrote told the world about it. My teacher, to {*whom|who|that} I showed this post, liked it.",
          hint: "Commas → not that. A place → … After a preposition → …",
          fbOk: "Well done!",
          fbBad: "Check the overview: commas, places, objects, prepositions.",
          fbText: "Gareth Jones, <b>who</b>…; Soviet Ukraine, <b>where</b>…; the articles <b>that</b> he wrote (<i>which</i> is also correct); to <b>whom</b> I showed it."
        }
      ],
      outro: {
        text: "Who, whom, which, that, whose, where: now you know them all – and when you can leave them out.",
        learned: [
          "Use whom as the object and after a preposition in formal English.",
          "Choose the right relative pronoun: who, which, that, whose, where, when.",
          "Leave out the relative pronoun when it’s the object."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e11s7l5",
      title: "We won, which surprised everyone: comments with which",
      short: "Comments with which",
      icon: "star",
      status: "verified",
      why: "Comment on a whole event with which: …, which was amazing; …, which is why…",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "Eurovision in Liverpool",
          body: `<p class="lead">Mariia writes on her blog in Kharkiv.</p><p><i>In May 2022, Kalush Orchestra won Eurovision in Turin, which made millions of Ukrainians happy. Their song was Stefania. Usually, the winning country hosts the next contest. But it wasn’t safe to hold it in Ukraine, which was a pity. So the UK, which had come second, hosted it in Liverpool <b>on behalf of</b> (= for) Ukraine. The final was on 13 May 2023, and it opened with Kalush Orchestra. My friend Emma watched it with her family in England, which became a new family tradition for them.</i></p><p>Look at <i>which made millions of Ukrainians happy</i>. What made them happy?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>“Kalush Orchestra won Eurovision in Turin, <b>which</b> made millions of Ukrainians happy.”</p><p>What does <i>which</i> refer to?</p>`,
          opts: [
            "the city of Turin",
            "Eurovision",
            "the fact that Kalush Orchestra won"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "Here <b>which</b> refers to the whole first part: <i>Kalush Orchestra won Eurovision</i>. The win made people happy."
        },
        {
          type: "info",
          title: "Which about a whole sentence",
          body: `<p>Sometimes <b>which</b> doesn’t refer to one noun. It refers to the whole sentence before it:</p><ul><li><i>Ukraine won, <b>which</b> made people happy.</i> (= The win made people happy.)</li><li><i>It wasn’t safe to hold it in Ukraine, <b>which</b> was a pity.</i></li></ul><p>Rules:</p><ul><li>always a <b>comma</b> before which</li><li>always <b>which</b>: not <s>that</s>, not <s>what</s></li><li>we often use it to give an opinion or a comment</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>“The BBC hosted Eurovision in Liverpool, which was a big job.”</p><p>What does <i>which</i> refer to?</p>`,
          opts: [
            "Liverpool",
            "hosting Eurovision in Liverpool",
            "the BBC"
          ],
          correct: 1,
          hint: "What was a big job: a city, a company or an action?",
          fbOk: "Right.",
          fbBad: "Can a city be a job?",
          fbText: "A city can’t be a job. <b>which</b> refers to the whole sentence: <i>hosting Eurovision in Liverpool</i> was a big job."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          text: "Kalush Orchestra won, {*which|what|that} made Ukrainians very happy. The contest couldn’t take place in Ukraine, {*which|what|who} was sad for many fans. The UK hosted it, {*which|that|what} meant a lot to Ukrainians.",
          hint: "A comment on the whole sentence: which word do we always use?",
          fbOk: "Exactly.",
          fbBad: "After the comma: not that, not what.",
          fbText: "Each time it’s <b>which</b>: …, <b>which</b> made them happy; …, <b>which</b> was sad; …, <b>which</b> meant a lot. Not <i>that</i> or <i>what</i>."
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the sentences.",
          body: `<p>What does <i>which</i> refer to: one noun or the whole sentence?</p>`,
          bins: ["One noun", "The whole sentence"],
          items: [
            ["Liverpool, which is in the north-west of England, hosted Eurovision 2023.", 0],
            ["Stefania, which Kalush Orchestra sang in 2022, won the contest.", 0],
            ["The Council of Europe, which Ukraine joined in 1995, protects human rights.", 0],
            ["Kalush Orchestra won, which made many people happy.", 1],
            ["It rained all day, which spoilt our picnic.", 1],
            ["Mariia passed her exam, which means she can go to the camp.", 1]
          ],
          hint: "Can you put the fact that… instead of which?",
          fbOk: "Well done!",
          fbBad: "In three sentences, which comes right after a name.",
          fbText: "<b>One noun:</b> Liverpool, Stefania, the Council of Europe. <b>The whole sentence:</b> the win made people happy; the rain spoilt the picnic; passing the exam means she can go."
        },
        {
          type: "info",
          title: "Useful comments with which",
          body: `<ul><li><b>…, which was amazing / a pity / a surprise.</b> → your opinion</li><li><b>…, which means (that)…</b> → the result now</li><li><b>…, which is why…</b> → this is the reason for…</li></ul><p>More events that connect Ukraine and English-speaking countries:</p><ul><li>In 1996, the UK handed over its Faraday research station in Antarctica to Ukraine, which is why Ukraine has its own station there.</li><li>In 1997, Leonid Kadenyuk flew on the US Space Shuttle Columbia, which made him the first astronaut of independent Ukraine.</li></ul><p>In Ukrainian official documents, the astronaut’s name is written <i>Leonid Kadeniuk</i>.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "gram",
          title: "Match the halves.",
          left: ["Ukraine couldn’t host Eurovision in 2023,", "Kadenyuk flew on Columbia in 1997,", "The UK handed over Faraday station in 1996,", "Ukraine became an EU candidate country in 2022,"],
          right: ["which is why the UK hosted it.", "which made him the first astronaut of independent Ukraine.", "which is why Ukraine has a station in Antarctica.", "which was an important step towards membership."],
          hint: "Two halves start with which is why. Which reason goes with which result?",
          fbOk: "Right.",
          fbBad: "Read the box “Useful comments with which” and Mariia’s blog again.",
          fbText: "couldn’t host → <b>the UK hosted it</b>; Columbia → <b>the first astronaut</b>; Faraday → <b>a station in Antarctica</b>; candidate → <b>a step towards membership</b>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Make one sentence with a comment. Start with Ukraine.</p>`,
          tiles: ["Ukraine", "won", "Eurovision", "in 2022,", "which", "made", "many people", "happy"],
          extra: ["that"],
          answer: "Ukraine won Eurovision in 2022, which made many people happy.",
          hint: "First the event, then the comma and the comment.",
          fbOk: "Well done!",
          fbBad: "After the comma, use which, not that.",
          fbText: "<b>Ukraine won Eurovision in 2022, which made many people happy.</b> The comment refers to the whole event."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Mariia’s blog is wrong.</p>`,
          text: "The final opened with Kalush Orchestra, [what] made many fans cry. Emma watched it at home.",
          hint: "Read the rules in “Which about a whole sentence” again.",
          fbOk: "Good eye!",
          fbBad: "Which word do we always use for a comment on a whole sentence?",
          fbText: "Always <b>which</b>: <b>The final opened with Kalush Orchestra, which made many fans cry.</b> Not <i>what</i>."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Mariia explains why Eurovision 2023 was in the UK.</p><p>It wasn’t safe to hold the contest in Ukraine, ___ is why the UK hosted it.</p>`,
          opts: [
            "which",
            "what",
            "who"
          ],
          correct: 0,
          hint: "…, … is why = this is the reason why.",
          fbOk: "Yes!",
          fbBad: "Look at the box “Useful comments with which”.",
          fbText: "…, <b>which is why</b> the UK hosted it: the first part is the reason."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Mariia ends her blog post.</p>`,
          text: "Liverpool, {*where|which|what} the final took place, is in the north-west of England. Ukraine’s entry, Tvorchi, came sixth, {*which|what|that} was a good result. The UK hosted the contest on behalf of Ukraine, {*which|who|what} meant a lot to us.",
          hint: "A place → … (the final took place there). A comment on the whole sentence → …",
          fbOk: "Well done!",
          fbBad: "Check the place and the comments after the commas.",
          fbText: "Liverpool, <b>where</b> the final took place (it took place <i>there</i>); …, <b>which</b> was a good result; …, <b>which</b> meant a lot to us."
        }
      ],
      outro: {
        text: "Now you can comment on events, which is a very useful skill!",
        learned: [
          "Use which to comment on a whole sentence.",
          "Use …, which means… and …, which is why…",
          "Talk about events that connect Ukraine and English-speaking countries."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e11s7l6",
      title: "Ukraine and English-speaking countries: events and people",
      short: "Events and people",
      icon: "book",
      status: "verified",
      why: "Farmers, scientists and an astronaut: read about people and events that connect Ukraine with English-speaking countries. Then sum up a discussion.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "What connects us?",
          body: `<p class="lead">Andrii’s class in Kyiv is writing an article for the project.</p><p><b>Ms Lysenko:</b> What connects Ukraine with English-speaking countries?<br><b>Kyrylo:</b> Farmers!<br><b>Bohdan:</b> Penguins!<br><b>Zoriana:</b> Space!<br><b>Daryna:</b> Let’s read the article first. Then we can decide.</p><p>Who do you think is right?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Bohdan says, “Penguins!” Why do you think penguins connect Ukraine and the UK?</p>`,
          opts: [
            "Ukrainian zoos buy their penguins in London.",
            "Ukraine has a research station in Antarctica that was British before.",
            "Penguins live in the north of Canada."
          ],
          correct: 1,
          fbTitle: "Let’s read and find out.",
          fbOk: "Good guess!",
          fbText: "Ukraine has a research station in Antarctica, where penguins live. Before 1996, it was a British station. Read part 2 of the article."
        },
        {
          type: "info",
          title: "Words for the article",
          body: `<ul><li><b>settle</b> → go to live in a new place; a <b><u>set</u>tler</b> → a person who does this</li><li><b>roots</b> → the place where your family comes from</li><li>a <b>re<u>search</u> station</b> → a place where scientists live and work</li><li><b>hand over</b> → officially give something to someone</li><li><b>raise a flag</b> → put a flag up</li><li>an <b><u>as</u>tronaut</b>; a <b><u>mis</u>sion</b> → a trip into space</li><li><b>without gravity</b> → when things float and don’t fall</li></ul><p>In Ukrainian official documents, the names in the article are written <i>Ivan Pylypiv</i>, <i>Vasyl Yeleniak</i> and <i>Volodymyr Vernadskyi</i>.</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Small bridges, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i>What connects Ukraine with English-speaking countries? Our class found three stories from three different times. Each of them is about people who travelled far from home. In September 1891, two farmers from the village of Nebyliv in western Ukraine arrived in Montreal, Canada. Their journey across the Atlantic Ocean had taken more than a week. Their names were Ivan Pylypiw and Wasyl Eleniak, and they are often called the first Ukrainian settlers in Canada. They had heard that there was a lot of free land there, which was hard to believe at home, where families had very small fields. Pylypiw went back to his village and told his neighbours about Canada. Soon many families followed. By 1914, thousands of Ukrainian families had settled in Canada, especially on the prairies, where they grew wheat. Today, more than a million Canadians have Ukrainian roots.</i></p><p>Why did Pylypiw and Eleniak go to Canada?</p>`,
          opts: [
            "They wanted to study in Montreal.",
            "Their families already lived there.",
            "They had heard that there was a lot of free land."
          ],
          correct: 2,
          hint: "Find They had heard… in the text.",
          fbOk: "Right.",
          fbBad: "Find They had heard… in the text again.",
          fbText: "They had heard that there was <b>a lot of free land</b> in Canada. At home, families had very small fields."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Small bridges, part 2 of 3",
          title: "Read and choose.",
          body: `<p><i>About a hundred years later, a very different event connected Ukraine and the UK. Since 1947, British scientists had worked at Faraday, a research station on a small island near the Antarctic Peninsula. In the 1990s, the UK planned to close it. Instead, the station was handed over to Ukraine, which at that time had no station of its own in Antarctica. On 6 February 1996, the Ukrainian flag was raised there, and the station got a new name: Akademik Vernadsky. Volodymyr Vernadsky, after whom it was named, was a scientist who studied minerals and the Earth. He was also the first president of the Ukrainian Academy of Sciences. Today, Ukrainian scientists who work at the station study the weather, the ice and the animals of Antarctica, including penguins. Life there isn’t easy: the winters are long and dark, and the nearest town is very far away.</i></p><p>What happened on 6 February 1996?</p>`,
          opts: [
            "British scientists started working at Faraday.",
            "The Ukrainian flag was raised at the station.",
            "Vernadsky became the president of the Academy."
          ],
          correct: 1,
          hint: "Find the date in the text.",
          fbOk: "Exactly.",
          fbBad: "Read the sentence that starts with On 6 February 1996.",
          fbText: "On 6 February 1996, <b>the Ukrainian flag was raised</b>, and Faraday became <b>Akademik Vernadsky</b>. British scientists had worked there since 1947."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: Small bridges, part 3 of 3",
          title: "Choose all the correct answers.",
          body: `<p><i>In November 1997, another event made Ukrainians proud. Leonid Kadenyuk, a test pilot from Ukraine, flew into space on the American Space Shuttle Columbia. Kadenyuk was born in 1951 in Klishkivtsi, a village in Chernivtsi Oblast. The mission lasted about sixteen days, and it made him the first astronaut of independent Ukraine. On board, he did experiments with plants to find out how they grow without gravity. Events like these show that Ukraine has been connected with English-speaking countries for a long time: through farmers, scientists and astronauts. Each of them built a small bridge between our countries. We think there are many more bridges like these, and we want to find them.</i></p><p>What is true about Leonid Kadenyuk?</p>`,
          opts: [
            "He was a test pilot.",
            "He flew on a British space shuttle.",
            "He did experiments with plants on board.",
            "He built a research station in Antarctica."
          ],
          correct: [0, 2],
          hint: "Two answers are correct. Check each one in the text.",
          fbOk: "Well done!",
          fbBad: "Was Columbia British or American? Read the second sentence again.",
          fbText: "Kadenyuk was <b>a test pilot</b>, and on board he <b>did experiments with plants</b>. Columbia was an <b>American</b> shuttle."
        },
        {
          type: "order",
          sk: "read",
          title: "Put the sentences in order.",
          body: `<p>Think about the whole article “Small bridges”. What happened first?</p>`,
          items: [
            "Two farmers from Nebyliv arrived in Montreal.",
            "British scientists started working at Faraday station.",
            "The Ukrainian flag was raised in Antarctica.",
            "Kadenyuk flew into space on Columbia."
          ],
          shuffle: [2, 0, 3, 1],
          hint: "The article goes in time order: part 1, part 2, part 3.",
          fbOk: "Right.",
          fbBad: "Which part of the article is each sentence from?",
          fbText: "1891: the farmers arrive in Montreal → 1947: British scientists at Faraday → 1996: the Ukrainian flag → 1997: Kadenyuk on Columbia."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Small bridges",
          title: "Read and choose.",
          body: `<p>Think about the whole article “Small bridges”.</p><p>What is the main idea?</p>`,
          opts: [
            "Ukraine has been connected with English-speaking countries for a long time.",
            "Most Ukrainians moved to Canada in the past.",
            "Antarctica belongs to Ukraine and the UK."
          ],
          correct: 0,
          hint: "Find the sentence that starts with Events like these show…",
          fbOk: "Exactly.",
          fbBad: "Read the end of part 3 again.",
          fbText: "Farmers, scientists and an astronaut built <b>small bridges</b>: Ukraine has been connected with English-speaking countries <b>for a long time</b>."
        },
        {
          type: "info",
          title: "Summing up a discussion",
          body: `<ul><li><b>Let’s sum up what we’ve said.</b> → before you sum up</li><li><b>To sum up,</b> … → say the main points again at the end</li><li><b>Overall,</b> … → in general</li><li><b>So, we all agree that</b> …</li><li><b>The main point is that</b> …</li><li>In writing: <b>In conclusion,</b> …</li></ul><p><i>To sum up, farmers, scientists and an astronaut have all connected our countries. So, we all agree that Kyrylo, Bohdan and Zoriana were right!</i></p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p>The class has talked about the article for twenty minutes. Everyone has given their ideas. Now Daryna wants to finish the discussion.</p><p><b>Ms Lysenko:</b> Daryna, can you finish for us?<br><b>Daryna:</b> …</p><p>What does Daryna say?</p>`,
          opts: [
            "Could I just add something?",
            "Overall, our countries have been connected for more than a hundred years.",
            "For one thing, I disagree."
          ],
          correct: 1,
          hint: "Daryna is finishing. Which phrase sums up?",
          fbOk: "Right.",
          fbBad: "Daryna doesn’t want to start a new point. She wants to finish.",
          fbText: "<b>Overall, …</b> sums up the main idea. <i>Could I just add something?</i> is for joining a discussion, and <i>For one thing</i> gives a reason."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>Daryna wants to finish the discussion. First she says:</p>`,
          before: "Let’s sum",
          after: "what we’ve said.",
          answer: "up",
          hint: "sum … → say the main points again.",
          fbOk: "Exactly.",
          fbBad: "Look at the box “Summing up a discussion” again.",
          fbText: "<b>Let’s sum up what we’ve said.</b> Then: <i>To sum up, …</i>"
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Daryna writes the summary for the project page.</p>`,
          text: "To sum up, Pylypiw and Eleniak, {*who|that} came to Canada in 1891, were the first of many Ukrainian settlers. Faraday, {*which|that} the UK handed over in 1996, is now Akademik Vernadsky. And Kadenyuk, {*whose|who’s} mission lasted about sixteen days, became the first astronaut of independent Ukraine. {*Overall|At overall}, our countries have been connected for a long time.",
          hint: "Commas → not that. … + noun (mission). In general → …",
          fbOk: "Well done!",
          fbBad: "Check the commas and the box “Summing up a discussion”.",
          fbText: "Pylypiw and Eleniak, <b>who</b>…; Faraday, <b>which</b>…; Kadenyuk, <b>whose</b> mission (who’s = who is); <b>Overall</b>, …"
        }
      ],
      outro: {
        text: "To sum up: farmers, scientists and an astronaut have built bridges between Ukraine and English-speaking countries.",
        learned: [
          "Read an article about events and people that connect Ukraine with other countries.",
          "Sum up a discussion: To sum up, Overall, So, we all agree that…",
          "Talk about settlers, research stations and space missions."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e11s7l7",
      title: "Our class project: Ukraine in the world",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e11s7boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you finish the project?",
          body: `<p class="lead">Andrii’s class and Emma’s class are finishing the project “Ukraine in the world”.</p><p>Check their texts and read the final article. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "gaps",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Complete the sentences.",
          text: "Ukraine was one of the 51 founding {*members|memberships} of the UN. It {*joined|applied} the Council of Europe in 1995. In 2022, it became a {*candidate|member} country of the EU.",
          pre: "e11s7l1",
          hint: "founding …; … the Council of Europe; Ukraine isn’t an EU member yet.",
          fbOk: "Yes!",
          fbBad: "Check the list “International organisations” from Lesson 1.",
          fbText: "founding <b>members</b>; it <b>joined</b> the Council of Europe; a <b>candidate</b> country of the EU (not a member yet)."
        },
        {
          type: "match",
          sk: "vocab",
          eyebrow: "Task 2",
          title: "Match the words and the meanings.",
          left: ["a judge", "a lawyer", "a fine", "illegal"],
          right: ["the person who decides cases in court", "a person who helps people with the law", "money you pay when you break a law or a rule", "against the law"],
          pre: "e11s7l2",
          fbOk: "Well done!",
          fbBad: "Remember the list “The law” from Lesson 2.",
          fbText: "<b>a judge</b> decides cases; <b>a lawyer</b> helps with the law; <b>a fine</b> is money you pay; <b>illegal</b> = against the law."
        },
        {
          type: "gaps",
          sk: "func",
          eyebrow: "Task 3",
          title: "Complete the sentences.",
          body: `<p>Orysia compares customs.</p>`,
          text: "In my family, guests take off their shoes, {*whereas|unlike} in Emma’s family, they keep them on. {*Unlike|Whereas} Emma, I always count the flowers. {*Both|Unlike} of us think that different doesn’t mean wrong.",
          pre: "e11s7l3",
          hint: "The same for two people → …; + noun → …; two facts → …",
          fbOk: "Right.",
          fbBad: "Remember “Comparing customs” from Lesson 3.",
          fbText: "<b>whereas</b> + a whole sentence; <b>Unlike</b> + noun; <b>Both</b> of us (the same)."
        },
        {
          type: "multi",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Choose all the correct answers.",
          body: `<p>Owen: “The people ___ Gareth Jones met in 1933 were very hungry.”</p><p>Which words can go in the gap?</p>`,
          opts: [
            "whom",
            "who",
            "that",
            "whose"
          ],
          correct: [0, 1, 2],
          pre: "e11s7l4",
          fbOk: "Well done!",
          fbBad: "Three answers are correct. Jones met the people: they are the object.",
          fbText: "<b>whom</b> (formal), <b>who</b> and <b>that</b> are correct. Not <i>whose</i>: no noun comes after it. You can also leave the word out."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Fill in the gaps.",
          text: "Ukraine won Eurovision in 2022, {*which|what|that} meant it should host the next contest. But it wasn’t safe to hold it in Ukraine, {*which|what|who} is why the UK hosted it.",
          pre: "e11s7l5",
          hint: "A comment on the whole sentence: always the same word.",
          fbOk: "Exactly.",
          fbBad: "After the comma: not that, not what.",
          fbText: "…, <b>which</b> meant…; …, <b>which</b> is why… Always <i>which</i> for a comment on a whole sentence."
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Task 6",
          title: "Read the dialogue and choose the best answer.",
          body: `<p>Emma’s class has discussed the project for half an hour. Emma speaks last.</p><p><b>Emma:</b> Let’s sum up what we’ve said. …</p><p>What does Emma say next?</p>`,
          opts: [
            "Could I just add something?",
            "Let’s get back to the rota.",
            "To sum up, Ukraine is part of many international organisations."
          ],
          correct: 2,
          pre: "e11s7l6",
          fbOk: "Right.",
          fbBad: "Emma is finishing the discussion.",
          fbText: "<b>To sum up, …</b> repeats the main points at the end of a discussion."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Ukraine in the world, part 1 of 2",
          title: "Read and choose.",
          body: `<p><i>Ukraine has been part of the international community for a long time. In 1945, as the Ukrainian SSR, it was one of the 51 founding members of the UN, which now has 193 member states. Today, UN agencies such as UNICEF and the World Food Programme provide humanitarian aid to people in Ukraine. In 1995, Ukraine joined the Council of Europe, whose headquarters are in Strasbourg. Two years later, it ratified the European Convention on Human Rights. This means that people in Ukraine whose rights have been broken can apply to the European Court of Human Rights. But first, they must go to Ukrainian courts.</i></p><p>When can people in Ukraine apply to the European Court of Human Rights?</p>`,
          opts: [
            "only on Human Rights Day",
            "when Ukrainian courts haven’t helped them",
            "before they go to a Ukrainian court"
          ],
          correct: 1,
          pre: "e11s7l2",
          hint: "Read the last sentence: But first…",
          fbOk: "Well done!",
          fbBad: "What must people do first?",
          fbText: "First they go to <b>Ukrainian courts</b>. If those courts haven’t helped, they can apply to the European Court of Human Rights in Strasbourg."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Ukraine in the world, part 2 of 2",
          title: "Read and choose.",
          body: `<p><i>In 2022, Ukraine applied to join the European Union, and in June that year, EU leaders made it a candidate country. Membership talks began in 2024, but Ukraine isn’t an EU member yet. Ukraine is also connected with English-speaking countries through people and events. In 1933, Gareth Jones, a Welsh journalist, told the West about the Holodomor. In 1996, the UK handed over its Faraday station in Antarctica to Ukraine. And in 2023, when Ukraine couldn’t host Eurovision, the UK hosted it in Liverpool on Ukraine’s behalf, which meant a lot to many Ukrainians.</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Ukraine became an EU member in 2022.",
            "Gareth Jones handed over a station to Ukraine.",
            "Membership talks between Ukraine and the EU began in 2024."
          ],
          correct: 2,
          pre: "e11s7l1",
          hint: "Read the first two sentences carefully.",
          fbOk: "Exactly.",
          fbBad: "Is Ukraine an EU member? Who handed over the station?",
          fbText: "Ukraine became a <b>candidate country</b> in 2022, and <b>membership talks began in 2024</b>. It isn’t a member yet. The UK, not Gareth Jones, handed over the station."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: Ukraine in the world",
          title: "Read and choose.",
          body: `<p>Think about the whole article “Ukraine in the world”.</p><p>What is the best title for it?</p>`,
          opts: [
            "Ukraine: a country with many international connections",
            "How to join the European Union in two years",
            "Eurovision: the best song contest"
          ],
          correct: 0,
          pre: "e11s7l6",
          fbOk: "Well done!",
          fbBad: "Is the article about one event or about many connections?",
          fbText: "The article talks about the UN, the Council of Europe, the EU and English-speaking countries: Ukraine has <b>many international connections</b>."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about Ukraine in the world, compare customs and use all the relative pronouns.",
        learned: [
          "Talk about Ukraine and international organisations.",
          "Talk about laws, human rights and etiquette.",
          "Use who, whom, which, that and whose, and comment with which.",
          "Sum up a discussion."
        ]
      }
    }
  ]
});
