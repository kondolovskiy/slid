/* Слід · Англійська мова, 10 клас — «Sport, health and leisure» (e10s2)
   Програма: П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; спеціалізовані школи, 10 кл., B1 → B2):
   тема «Спорт і дозвілля» — роль спорту в житті суспільства та людини; спортивні події/змагання; здоров’я та спорт
   (PDF с. 22); функція — аргументувати свою точку зору (с. 22); граматика (с. 23): verb + -ing vs to-infinitive,
   verbs taking gerund; обсяги B2 (с. 21): https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf
   Розподіл — content/eng/plan.js, reports/verify/plan-eng-g10-11.md, reports/verify/curate-eng-plan-g10-11.md.
   Повторення: like + -ing (e5s6l2, e5s6l6), play / go / do і prefer (e6s4l1–l2), змагання й медалі (e7s5l1, e7s5l5),
   enjoy / avoid / finish + -ing, want / decide / hope + to, like / love / hate / start — обидві форми (e8s2l3), give up
   (e8s2l4), In my opinion / Personally (e9s9l1). Нове для B2: keep, give up, practise, mind, risk, can’t stand + -ing;
   refuse, manage, afford, agree + to; зміна значення stop / remember / forget / try / regret — CD Grammar
   «Verb patterns: verb + infinitive or verb + -ing?»:
   https://dictionary.cambridge.org/grammar/british-grammar/verb-patterns-verb-infinitive-or-verb-ing
   Пастки другої правильної відповіді: like, love, hate, prefer, begin, start, continue + -ing і + to — лише в sort /
   choice з варіантом «both», у gaps як пастку не ставимо; can’t stand + to теж можливе (OALD stand_1 «stand to do
   something») — у пропусках після can’t stand варіанта to немає; try перевіряється лише вибором значення, не пропуском;
   у stop / remember / forget / regret контекст однозначно задає значення.
   Факти (Olympics, Paralympics, Euro 2012, Kharlan, WHO, NHS) — URL у tasks/…/write-eng-g10-e10s2.md, «Нотатки агента».
   Медичних порад немає: правила тренування — слова тренера-героя, твердження WHO / NHS — з джерела.
   Діалоги — репліками в body (D-056), без звуку (D-055 п. 4).
   Герої — серія 4–9 кл., 16 років (Tom 14, Dmytro 12) (memory/short/inbox.md, NOTE (герої)); нових героїв немає.
   Увесь зміст — англійською, британська норма (D-055). Тексти, діалоги й герої — власні (docs/design/english.md §8).
   Статус: verified (verifier-e10s2, 2026-11-26). 7 уроків (6 + фінал). Будова — за розділами 9 кл. (e9s7, e9s9).
   Перевірка: node tools/validate.mjs --section e10s2 && node tools/stats.mjs --subject eng
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e10s2",
  grade: 10,
  weeks: [5, 9],
  title: "Sport, health and leisure",
  why: "To talk about the role of sport in society and in your life and about big sports events. And to explain how sport helps you stay healthy.",
  requires: ["e5s6l2", "e5s6l6", "e6s4l1", "e6s4l2", "e7s5l1", "e7s5l5", "e8s2l3", "e8s2l4", "e9s9l1"],
  meta: { author: "writer-e10s2", created: "2026-11-26", factcheck: "verifier-e10s2, 2026-11-26 (reports/verify/write-eng-g10-e10s2.md)", teacher: null },
  badges: [
    { id: "e10s2boss", name: "Sports editor", icon: "trophy", desc: "Finish the final lesson “Sport, health and leisure”" }
  ],
  lessons: [
    /* ───────────── Урок 1 ───────────── */
    {
      id: "e10s2l1",
      title: "Why do people love sport?",
      short: "Why sport?",
      icon: "users",
      status: "verified",
      why: "Sport gives people much more than medals. Talk about what sport means for you and for society.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 1",
          title: "Why do you do sport?",
          body: `<p class="lead">The penfriend club asks: “What does sport give you?”</p><p><b>Oksana:</b> I’ve done karate since I was nine. It teaches me discipline: I train even when I’m tired.<br><b>Emma:</b> Swimming is how I deal with stress. After a hard day at school, I feel calm in the pool.<br><b>Taras:</b> In our athletics club, we support each other. That team spirit is the best part.<br><b>Andrii:</b> Chess is a sport too! It trains my mind, and I’ve made friends all over the world.</p><p>Sport gives each of them something different. What?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Taras: “That <b>team spirit</b> is the best part.”</p><p>What is team spirit?</p>`,
          opts: [
            "a rule that says how long a match is",
            "the feeling that people in a team help each other and work together",
            "a prize for the best player in a team"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Team spirit</b> is the feeling that the members of a team support each other. The next screen has more words about sport in our lives."
        },
        {
          type: "info",
          title: "Sport in our lives",
          body: `<ul><li><b>keep fit</b> → stay healthy and strong</li><li><b>deal with stress</b> → feel calm again after worries</li><li><b>discipline</b> → doing what you must, even when it’s hard</li><li><b>team spirit</b> → the members of a team support each other</li><li><b>fair play</b> → playing honestly and by the rules</li><li>a <b>role model</b> → a person you admire and want to be like</li><li><b>bring people together</b> → help people feel like one group</li><li>a <b>spectator</b> → a person who watches a sports event</li></ul><p><u>dis</u>cipline, spec<u>ta</u>tor, <u>ath</u>lete, compe<u>ti</u>tion</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["Fair play means", "A role model is", "A spectator is", "Team spirit means"],
          right: ["playing honestly and by the rules.", "a person you admire and want to be like.", "a person who watches a sports event.", "the members of a team support each other."],
          hint: "Which one is about rules? Which one is about watching?",
          fbOk: "Right.",
          fbBad: "Look at the list “Sport in our lives” again.",
          fbText: "<b>Fair play</b> – honestly, by the rules. A <b>role model</b> – a person you want to be like. A <b>spectator</b> watches. <b>Team spirit</b> – the team supports each other."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Mariia writes from Kharkiv.</p>`,
          text: "I run in the park every morning. It helps me {*keep|make|do} fit, and it helps me deal {*with|about|for} stress before exams. Running needs {*discipline|spectators|fair play}: I go out even when it’s cold and dark. My {*role model|spectator|team spirit} is Myroslava from the club: she never misses training.",
          hint: "… fit; deal … stress; doing what you must → ?; a person you want to be like → ?",
          fbOk: "Exactly.",
          fbBad: "Check each phrase in the list “Sport in our lives”.",
          fbText: "<b>keep</b> fit; deal <b>with</b> stress; running needs <b>discipline</b>; Myroslava is her <b>role model</b>."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>Myroslava admires Yaroslava Mahuchikh and wants to be like her.</p>`,
          before: "Yaroslava Mahuchikh is Myroslava’s role",
          after: ".",
          answer: "model",
          hint: "A person you admire and want to be like is a role …",
          fbOk: "Yes!",
          fbBad: "Look at the list: a role … .",
          fbText: "A person you admire and want to be like is your <b>role model</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+dis|ci|pline", "spec|+ta|tor", "+ath|lete", "com|pe|+ti|tion"],
          fbOk: "Good eye!",
          fbBad: "Look at the underlined parts in the list.",
          fbText: "<u>dis</u>cipline, spec<u>ta</u>tor, <u>ath</u>lete, compe<u>ti</u>tion."
        },
        {
          type: "pick",
          sk: "vocab",
          title: "Find the mistake.",
          body: `<p>One word in Andrii’s post is wrong.</p>`,
          text: "Chess is a real sport. It teaches me discipline, and it helps me deal [about] stress before a big tournament.",
          hint: "Look at the phrase with stress.",
          fbOk: "Good eye!",
          fbBad: "deal … stress: which small word?",
          fbText: "We say deal <b>with</b> stress: it helps me deal <b>with</b> stress. <i>Discipline</i> and <i>tournament</i> are correct."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><i>Our club isn’t only about medals. At the city race last week, Lesia fell, and Ilona stopped and helped her up. After the race, all the runners shook hands. Mr Hnatiuk says that’s more important than winning. – Taras</i></p><p>Which idea is Taras’s post about?</p>`,
          opts: [
            "keeping fit",
            "dealing with stress",
            "fair play"
          ],
          correct: 2,
          hint: "Ilona helps a runner from the race. Is that about rules and honesty, about health or about worries?",
          fbOk: "Right.",
          fbBad: "Read what Ilona did and what the runners did after the race.",
          fbText: "Helping a runner who fell and shaking hands after the race is <b>fair play</b>. The post isn’t about health or stress."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Emma answers the club’s question.</p>`,
          text: "Sport {*brings|takes|makes} people together. At our swimming club, we cheer for each other: the team {*spirit|model|play} is amazing. Swimming also helps me {*deal|keep|make} with stress. And my coach always says: fair {*play|spirit|model} is more important than winning.",
          hint: "… people together; team …; … with stress; fair … .",
          fbOk: "Well done!",
          fbBad: "Check the phrases: bring people together, team spirit, deal with stress, fair play.",
          fbText: "Sport <b>brings</b> people together. Team <b>spirit</b>. Swimming helps me <b>deal</b> with stress. Fair <b>play</b> is more important than winning."
        }
      ],
      outro: {
        text: "Discipline, team spirit, fair play: now you can say what sport gives people.",
        learned: [
          "Say what sport gives you: keep fit, deal with stress, discipline.",
          "Use team spirit, fair play, role model and spectator.",
          "Say how sport brings people together."
        ]
      }
    },

    /* ───────────── Урок 2 ───────────── */
    {
      id: "e10s2l2",
      title: "Risk losing, refuse to give up: verb patterns",
      short: "Verb patterns",
      icon: "bolt",
      status: "verified",
      why: "After some verbs we use -ing, and after others we use to. Learn more of them and tell a sports story without mistakes.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 2",
          title: "The race Myroslava didn’t win",
          body: `<p class="lead">Myroslava writes to the penfriend club.</p><p>Last Saturday I ran the 1,500 metres in Lviv. I can’t stand losing, so I was nervous. After 600 metres, I fell! I didn’t mind getting dirty, but it was hard to get up. I knew that if I stopped, I would risk losing my place in the team. So I refused to stop. I kept running, and I managed to finish fourth. Mr Hnatiuk said, “You didn’t give up. I’m proud of you.”</p><p>Look: <b>kept running</b>, <b>refused to stop</b>. Which verbs take -ing? Which take to?</p>`,
          cta: "Let’s see"
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          text: "After she fell, Myroslava kept {*running|to run}.",
          fbTitle: "Let’s find out.",
          fbText: "After <b>keep</b> (= continue) we use -ing: she kept <b>running</b>. The next screen shows more verbs like this."
        },
        {
          type: "info",
          title: "More verbs + -ing",
          body: `<p>You know: <b>enjoy, avoid, finish</b> + -ing.</p><ul><li><b>keep</b> (= continue): I kept <b>running</b>.</li><li><b>give up</b> (= stop): Don’t give up <b>training</b>.</li><li><b>practise</b>: We practise <b>starting</b> fast.</li><li><b>mind</b> (in questions and negatives): I don’t mind <b>getting</b> dirty.</li><li><b>risk</b>: I risked <b>losing</b> my place.</li><li><b>can’t stand</b> (= really hate): I can’t stand <b>losing</b>.</li></ul><p>Not: <s>I kept to run.</s></p>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Taras writes about his friend Ostap.</p>`,
          text: "Ostap practises {*climbing|to climb} at the sports centre twice a week. He doesn’t mind {*falling|to fall}: there are soft mats on the floor. His cousin Marko keeps {*asking|to ask} to come too. Ostap gave up {*playing|to play} football to have more time for climbing.",
          hint: "practise, mind, keep, give up: all of them take the same form.",
          fbOk: "Exactly.",
          fbBad: "Look at the list “More verbs + -ing” again.",
          fbText: "practises <b>climbing</b>, doesn’t mind <b>falling</b>, keeps <b>asking</b>, gave up <b>playing</b>: all + -ing."
        },
        {
          type: "info",
          title: "Verbs + to + verb",
          body: `<p>You know: <b>want, decide, hope</b> + to.</p><ul><li><b>refuse</b> (= say no): She refused <b>to stop</b>.</li><li><b>manage</b> (= do something difficult): She managed <b>to finish</b>.</li><li><b>afford</b> (= have enough money): We can’t afford <b>to buy</b> new skis.</li><li><b>agree</b> (= say yes): The coach agreed <b>to help</b> us.</li></ul><p><b>like, love, hate, prefer, start, begin, continue</b> + both forms:<br>I started <b>running</b>. = I started <b>to run</b>.</p>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the words.",
          body: `<p>Which verbs take -ing? Which take to? Which take both?</p>`,
          bins: ["+ -ing", "+ to", "both"],
          items: [
            ["keep", 0],
            ["risk", 0],
            ["practise", 0],
            ["mind", 0],
            ["refuse", 1],
            ["manage", 1],
            ["afford", 1],
            ["agree", 1],
            ["prefer", 2],
            ["start", 2]
          ],
          hint: "Remember Myroslava: she kept running, refused to stop and managed to finish.",
          fbOk: "Well done!",
          fbBad: "Look at the two lists of verbs again.",
          fbText: "<b>keep, risk, practise, mind</b> + -ing. <b>refuse, manage, afford, agree</b> + to. <b>prefer, start</b>: both forms are correct."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Mariia: “I prefer ___ alone: I can think about my day.”</p><p>Which can go in the gap?</p>`,
          opts: [
            "only running",
            "only to run",
            "both: running and to run"
          ],
          correct: 2,
          hint: "Is prefer in the -ing list, in the to list, or in the both group?",
          fbOk: "Right.",
          fbBad: "Look at the last part of “Verbs + to + verb”.",
          fbText: "After <b>prefer</b>, both forms are correct: I prefer <b>running</b> alone. = I prefer <b>to run</b> alone."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Andrii was losing his chess game, but he played very well at the end. Which sentence is correct?</p>`,
          opts: [
            "In the end, Andrii managed winning the game.",
            "In the end, Andrii managed to win the game.",
            "In the end, Andrii managed win the game."
          ],
          correct: 1,
          hint: "manage + to or -ing?",
          fbOk: "Yes!",
          fbBad: "manage is in the to list.",
          fbText: "After <b>manage</b>: to + verb. Andrii managed <b>to win</b> the game."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in Kyrylo’s post is wrong.</p>`,
          text: "I wasn’t sure about volleyball, but in the end I agreed [joining] the school team. Now I keep asking the coach for extra training.",
          hint: "Look at the verb after agreed.",
          fbOk: "Good eye!",
          fbBad: "agree + -ing or agree + to?",
          fbText: "After <b>agree</b>: to + verb. I agreed <b>to join</b> the team. <i>Keep asking</i> is correct."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Use the verb <i>try</i>.</p>`,
          before: "Our school team was losing 0–1, but the players kept",
          after: "and scored twice in the last ten minutes.",
          answer: "trying",
          hint: "keep + -ing or to?",
          fbOk: "Well done!",
          fbBad: "keep is in the -ing list.",
          fbText: "After <b>keep</b>: -ing. The players kept <b>trying</b>."
        },
        {
          type: "build",
          sk: "gram",
          title: "Put the words in order.",
          body: `<p>Myroslava tells her grandma about the race.</p>`,
          tiles: ["I", "refused", "to give up", "and", "kept", "running"],
          answer: ["I refused to give up and kept running.", "I kept running and refused to give up."],
          extra: ["to run"],
          hint: "refuse + to, keep + -ing.",
          fbOk: "Exactly.",
          fbBad: "Which verb takes to? Which one takes -ing?",
          fbText: "<b>I refused to give up and kept running.</b> refuse + <b>to</b>, keep + <b>-ing</b>. The other order is correct too."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Taras writes about winter training.</p>`,
          text: "Training in winter isn’t easy. I can’t stand {*running|run} in the snow, but Mr Hnatiuk says we risk {*losing|to lose} our speed if we stop. So I keep {*training|to train}. Last week, I managed {*to run|running} 3,000 metres in eleven minutes, my best time! And Mum agreed {*to buy|buying} me new running shoes.",
          hint: "can’t stand, risk, keep → -ing. manage, agree → to.",
          fbOk: "Brilliant!",
          fbBad: "Which list is the verb before each gap in?",
          fbText: "can’t stand <b>running</b>, risk <b>losing</b>, keep <b>training</b>: -ing. managed <b>to run</b>, agreed <b>to buy</b>: to + verb."
        }
      ],
      outro: {
        text: "Keep running, refuse to stop, manage to finish: now you can tell a sports story with the right verb patterns.",
        learned: [
          "Use -ing after keep, give up, practise, mind, risk and can’t stand.",
          "Use to + verb after refuse, manage, afford and agree.",
          "Know that after like, love, hate, prefer and start both forms are correct."
        ]
      }
    },

    /* ───────────── Урок 3 ───────────── */
    {
      id: "e10s2l3",
      title: "Big sports events in Ukraine and the world",
      short: "Sports events",
      icon: "globe",
      status: "verified",
      why: "The Olympics, the Paralympics and big championships bring the world together. Read about them and talk about sports events.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 3",
          title: "From Athens to Kyiv",
          body: `<p class="lead">It’s Sports Week at the penfriend club. Kyrylo loves history, so he has written an article: “Big sports events: from Athens to Kyiv”.</p><p>Which big events do you know? Which of them have taken place in Ukraine?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>In 2012, there was a big European football championship: Euro 2012. Where did the final take place?</p>`,
          opts: [
            "in London",
            "in Athens",
            "in Kyiv"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "The final of Euro 2012 took place in <b>Kyiv</b>. Read about it in Kyrylo’s article."
        },
        {
          type: "info",
          title: "Talking about sports events",
          body: `<ul><li><b>host</b> an event → it takes place in your city or country: London <b>hosted</b> the Olympics.</li><li><b>take place</b> = happen: The final <b>took place</b> in Kyiv.</li><li><b>hold</b> → <b>be held</b>: The Games <b>were held</b> in Rome.</li><li><b>compete</b> → take part to win: Athletes <b>compete</b> in races.</li><li>the <b>opening ceremony</b> → the big show at the start</li><li>the <b>Paralympic Games</b> → the Games for athletes with disabilities</li></ul><p>O<u>lym</u>pic, Para<u>lym</u>pic, <u>cer</u>emony, <u>sta</u>dium</p>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: From Athens to Kyiv, part 1 of 3",
          title: "Read and choose.",
          body: `<p><i>The first modern Olympic Games took place in Athens in 1896. Since then, many cities have hosted them. London was the first city to host the Summer Olympics three times: in 1908, in 1948 and in 2012. Hosting the Games is a huge job. A city needs stadiums, transport and thousands of volunteers. But for many spectators, the best moment comes at the very start: the opening ceremony, when teams from every country walk into the stadium together.</i></p><p>Which sentence is true?</p>`,
          opts: [
            "The first modern Olympic Games took place in London.",
            "London was the first city to host the Summer Olympics three times.",
            "The opening ceremony is at the end of the Games."
          ],
          correct: 1,
          hint: "Find the sentence with three times.",
          fbOk: "Right.",
          fbBad: "Read about Athens, London and the opening ceremony again.",
          fbText: "London was <b>the first city to host</b> the Summer Olympics three times. The first modern Games were in Athens, and the opening ceremony is at the start."
        },
        {
          type: "multi",
          sk: "read",
          eyebrow: "Reading: From Athens to Kyiv, part 2 of 3",
          title: "Choose all the correct answers.",
          body: `<p><i>The Paralympic Games started in England. In 1948, Dr Ludwig Guttmann organised a sports competition for patients in wheelchairs at Stoke Mandeville Hospital. The competition grew every year, and in 1960 the first Paralympic Games were held in Rome. In March 2022, less than two weeks after Russia’s full-scale invasion of Ukraine began, Ukrainian athletes competed at the Winter Paralympics in Beijing. They won 29 medals, 11 of them gold. Only China, the host country, won more.</i></p><p>What does part 2 say?</p>`,
          opts: [
            "The first competition took place at a hospital in England.",
            "The first Paralympic Games were held in Rome.",
            "Ukraine won 29 medals in Beijing.",
            "Ukraine came first in Beijing."
          ],
          correct: [0, 1, 2],
          hint: "Find Stoke Mandeville, Rome and 29 medals. Who won more medals than Ukraine?",
          fbOk: "Well done!",
          fbBad: "Read the last sentence again: only China won more.",
          fbText: "The first competition was at <b>Stoke Mandeville Hospital</b>, the first Paralympics were <b>held in Rome</b> in 1960, and Ukraine won <b>29 medals</b> in Beijing. Ukraine came second: only China won more."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Reading: From Athens to Kyiv, part 3 of 3",
          title: "Read and choose.",
          body: `<p><i>In 2012, Ukraine and Poland hosted Euro 2012, the European Football Championship. Matches took place in eight stadiums, four in each country. The final was held at the Olympic Stadium in Kyiv on 1 July 2012, and Spain beat Italy 4–0. Big events also make heroes. At the Paris Olympics in 2024, the fencer Olha Kharlan won a bronze medal and a team gold. She now has six Olympic medals, more than any other athlete has won for Ukraine.</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Italy won the final in Kyiv.",
            "Olha Kharlan won six medals in Paris.",
            "Euro 2012 took place in two countries."
          ],
          correct: 2,
          hint: "Who hosted Euro 2012? Who beat whom? How many medals did Kharlan win in Paris?",
          fbOk: "Exactly.",
          fbBad: "Read the first and the last two sentences again.",
          fbText: "Euro 2012 took place in <b>Ukraine and Poland</b>. Spain beat Italy. Kharlan won two medals in Paris; she has six Olympic medals in total."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p>Think about the whole article “From Athens to Kyiv”.</p><p>What is it about?</p>`,
          opts: [
            "big sports events and what they have meant for the world and for Ukraine",
            "how to buy tickets for the Olympics",
            "the rules of fencing"
          ],
          correct: 0,
          hint: "Think about all three parts: the Olympics, the Paralympics and Euro 2012.",
          fbOk: "Right.",
          fbBad: "Is the article about one sport or about big events?",
          fbText: "The article is about <b>big sports events</b>: the Olympics, the Paralympics and Euro 2012, and Ukraine’s part in them."
        },
        {
          type: "gaps",
          sk: "vocab",
          title: "Fill in the gaps.",
          body: `<p>Bohdan writes questions for the Sports Week quiz.</p>`,
          text: "The first modern Olympics {*took place|hosted|competed} in Athens. In 1960, the first Paralympic Games {*were held|held|hosted} in Rome. In 2012, Ukraine and Poland {*hosted|took place|were held} Euro 2012. In Paris, Olha Kharlan {*competed|hosted|held} in fencing.",
          hint: "happen → take place; the Games → were held; a country → hosts; athletes → compete.",
          fbOk: "Yes!",
          fbBad: "Look at “Talking about sports events” again.",
          fbText: "The Olympics <b>took place</b> in Athens. The Paralympics <b>were held</b> in Rome. Ukraine and Poland <b>hosted</b> Euro 2012. Kharlan <b>competed</b> in fencing."
        },
        {
          type: "word",
          sk: "vocab",
          title: "Write the missing word.",
          body: `<p>At the start of the Olympics, there is a big show. Teams from every country walk into the stadium.</p>`,
          before: "This show is called the opening",
          after: ".",
          answer: "ceremony",
          hint: "Look at the list: the opening …",
          fbOk: "Well done!",
          fbBad: "It’s in “Talking about sports events”: the opening c… .",
          fbText: "The big show at the start of the Games is the <b>opening ceremony</b>."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["o|+lym|pic", "par|a|+lym|pic", "+cer|e|mo|ny", "+sta|di|um"],
          fbOk: "Good eye!",
          fbBad: "Look at the underlined parts in the list.",
          fbText: "O<u>lym</u>pic, Para<u>lym</u>pic, <u>cer</u>emony, <u>sta</u>dium."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Zoriana writes a short text for the quiz page.</p>`,
          text: "Which city was the first to {*host|take place|compete} the Summer Olympics three times? London! The Games {*were held|held|hosted} there in 1908, 1948 and 2012. And Ukraine? In 2012, the Euro 2012 final {*took place|hosted|held} in Kyiv. Ten years later, Ukrainian Paralympians {*competed|hosted|held} in Beijing and won 29 medals.",
          hint: "a city → hosts; the Games → were held; the final → took place; athletes → compete.",
          fbOk: "Well done!",
          fbBad: "Who or what is the subject of each sentence: a city, the Games, the final or athletes?",
          fbText: "the first to <b>host</b>; the Games <b>were held</b>; the final <b>took place</b>; Paralympians <b>competed</b>."
        }
      ],
      outro: {
        text: "From Athens in 1896 to Kyiv in 2012: now you can talk about big sports events and who hosted them.",
        learned: [
          "Read an article about the Olympics, the Paralympics and Euro 2012.",
          "Use host, take place, be held and compete.",
          "Say what Ukrainian athletes have achieved at big events."
        ]
      }
    },

    /* ───────────── Урок 4 ───────────── */
    {
      id: "e10s2l4",
      title: "Stop, remember, try: a change in meaning",
      short: "Change in meaning",
      icon: "spiral",
      status: "verified",
      why: "With some verbs, -ing and to have different meanings. Choose the right form and say exactly what you mean.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 4",
          title: "A bike ride to the sea",
          body: `<p class="lead">Emma writes to the club.</p><p>On Sunday, Tom and I cycled to the coast. After an hour, we <b>stopped to have</b> a drink. Tom said, “I <b>remember cycling</b> here with Grandad when I was six!” Then I realised I had <b>forgotten to bring</b> my phone. So we didn’t take any photos of the sea. I <b>regret not taking</b> one!</p><p>Stopped to have, remember cycling: do -ing and to mean the same here?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "gram",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Emma: “After an hour, we <b>stopped to have</b> a drink.”</p><p>What does it mean?</p>`,
          opts: [
            "They didn’t drink anything after that.",
            "They stopped cycling so that they could have a drink.",
            "They had a drink while they were cycling."
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>Stop + to</b> means you stop one action to do another one: they stopped cycling to have a drink. The next screen explains it."
        },
        {
          type: "info",
          title: "stop + -ing or stop + to",
          body: `<ul><li><b>stop + -ing</b> → you don’t do it any more:<br>It got dark, so we <b>stopped playing</b> football.</li><li><b>stop + to</b> → you stop one action in order to do another:<br>We <b>stopped to have</b> a drink. (= We stopped cycling. Why? To have a drink.)</li></ul>`,
          cta: "Next"
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Andrii writes about Saturday.</p>`,
          text: "It started to rain, so Bohdan and I stopped {*playing|to play} tennis and went home. On the way, we stopped {*to buy|buying} some juice at a shop.",
          hint: "Did they finish the game? Why did they stop on the way?",
          fbOk: "Exactly.",
          fbBad: "One stop means “no more”, the other means “stop in order to”.",
          fbText: "They stopped <b>playing</b>: no more tennis. They stopped <b>to buy</b> juice: they stopped walking in order to buy it."
        },
        {
          type: "info",
          title: "remember and forget",
          body: `<ul><li><b>remember / forget + to</b> → a job you must do; it comes later:<br><b>Remember to bring</b> water. I <b>forgot to bring</b> my phone.</li><li><b>remember + -ing</b> → a memory; it happened before:<br>I <b>remember cycling</b> here when I was six.</li><li><b>(never) forget + -ing</b> → a memory you will always have:<br>I’ll <b>never forget seeing</b> the sea that day.</li></ul>`,
          cta: "Next"
        },
        {
          type: "sort",
          sk: "gram",
          title: "Sort the sentences.",
          body: `<p>The penfriend club shares memories and reminders. Is it a job for later or a memory?</p>`,
          bins: ["a job for later", "a memory"],
          items: [
            ["Mr Hnatiuk: “Please remember to bring your trainers tomorrow.”", 0],
            ["Ostap: “Don’t forget to charge your phone before the trip.”", 0],
            ["Emma: “Remember to check your bag before you leave.”", 0],
            ["Oksana: “I remember winning my first karate medal.”", 1],
            ["Myroslava: “I’ll never forget running my first race in the snow.”", 1],
            ["Tom: “I remember cycling here with Grandad.”", 1]
          ],
          hint: "remember / forget + to → a job. remember / never forget + -ing → a memory.",
          fbOk: "Right.",
          fbBad: "Look at the form after remember or forget: to or -ing?",
          fbText: "<b>Remember to bring</b>, <b>don’t forget to charge</b>, <b>remember to check</b>: jobs for later. <b>Remember winning</b>, <b>never forget running</b>, <b>remember cycling</b>: memories."
        },
        {
          type: "info",
          title: "try and regret",
          body: `<ul><li><b>try + to</b> → make an effort to do something difficult:<br>I <b>tried to lift</b> the bag, but it was too heavy.</li><li><b>try + -ing</b> → do something to see what happens:<br>Can’t open the app? <b>Try turning</b> your phone off and on.</li><li><b>regret + -ing</b> → be sorry about something you did or didn’t do:<br>I <b>regret not taking</b> a photo.</li><li><b>regret + to</b> → in formal news: sorry to say:<br>We <b>regret to say</b> that the match is cancelled.</li></ul>`,
          cta: "Next"
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Daryna: “I <b>tried to climb</b> the rope in PE, but I couldn’t get to the top.”</p><p>What does she mean?</p>`,
          opts: [
            "It was easy. She did it to see what happens.",
            "She is sorry that she climbed the rope.",
            "It was difficult. She made an effort, but she didn’t manage it."
          ],
          correct: 2,
          hint: "try + to: an effort or a test?",
          fbOk: "Yes!",
          fbBad: "Look at try + to in the list. And read the end of her sentence.",
          fbText: "<b>Try + to</b> = make an effort to do something difficult. Daryna tried, but she couldn’t get to the top."
        },
        {
          type: "choice",
          sk: "gram",
          title: "Choose the correct answer.",
          body: `<p>Taras didn’t warm up before the race, and he ran very slowly. Now he is sorry. What does he say?</p>`,
          opts: [
            "I regret not to warm up.",
            "I regret not warming up.",
            "I regret to not warm up."
          ],
          correct: 1,
          hint: "Sorry about something you didn’t do: regret + ?",
          fbOk: "Well done!",
          fbBad: "regret + to is for formal news. Look at regret + -ing.",
          fbText: "Sorry about something in the past → <b>regret + -ing</b>: I regret <b>not warming up</b>."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>One word in the coach’s note is wrong.</p>`,
          text: "Bohdan, please remember [locking] the gym door when you leave tonight. Last week somebody forgot to lock it.",
          hint: "Is locking the door a memory or a job for later?",
          fbOk: "Good eye!",
          fbBad: "A job for later: remember + to or -ing?",
          fbText: "Locking the door is a job for later → remember <b>to lock</b>. <i>Forgot to lock</i> is correct: somebody didn’t do the job."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Use the verb <i>win</i>. Emma is thinking about the past.</p>`,
          before: "Emma remembers",
          after: "her first swimming medal when she was eight.",
          answer: "winning",
          hint: "A memory: remember + ?",
          fbOk: "Yes!",
          fbBad: "It happened before: remember + -ing.",
          fbText: "A memory → remember + <b>-ing</b>: Emma remembers <b>winning</b> her first medal."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Oksana writes about a karate tournament in Poltava.</p>`,
          text: "Before the tournament, my coach said: “Remember {*to warm up|warming up} properly.” I did, but I forgot {*to bring|bringing} my water bottle! Halyna came to watch, and she stopped {*to buy|buying} me some water on her way. I lost in the semi-final, but I don’t regret {*taking|to take} part. I’ll never forget {*fighting|to fight} on the big mat!",
          hint: "A job → to. A memory → -ing. Stop in order to → to. Sorry or not sorry about the past → -ing.",
          fbOk: "Brilliant!",
          fbBad: "For each gap, ask: a job, a memory, a reason to stop or a feeling about the past?",
          fbText: "Remember <b>to warm up</b> (a job); forgot <b>to bring</b> (a job she didn’t do); stopped <b>to buy</b> (in order to); don’t regret <b>taking</b> part; never forget <b>fighting</b> (a memory)."
        }
      ],
      outro: {
        text: "Stop playing or stop to play, remember doing or remember to do: now you know how the meaning changes.",
        learned: [
          "Use stop + -ing and stop + to with the right meaning.",
          "Use remember and forget + to for jobs and + -ing for memories.",
          "Understand try + to and try + -ing, and use regret + -ing."
        ]
      }
    },

    /* ───────────── Урок 5 ───────────── */
    {
      id: "e10s2l5",
      title: "Avoid injuries, keep moving: sport and health",
      short: "Sport and health",
      icon: "shield",
      status: "verified",
      why: "Sport is good for your body and your mind, but it has risks too. Talk about training safely and read what health experts say.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 5",
          title: "New season, new rules",
          body: `<p class="lead">Mr Hnatiuk puts a notice in the athletics club in Lviv.</p><p><b>1.</b> Always warm up before training: start with gentle exercises.<br><b>2.</b> After hard training, cool down and stretch.<br><b>3.</b> Don’t train when you’re injured. Tell me if something hurts.<br><b>4.</b> Rest is part of training. Your body needs time to recover.</p><p>Warm up, cool down, recover: what do these words mean?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "vocab",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Mr Hnatiuk: “Always <b>warm up</b> before training.”</p><p>What does warm up mean here?</p>`,
          opts: [
            "put on warm clothes",
            "drink a cup of hot tea",
            "do gentle exercises to get your body ready for sport"
          ],
          correct: 2,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "In sport, <b>warm up</b> means do gentle exercises to get ready. The next screen has more words about sport and health."
        },
        {
          type: "info",
          title: "Sport and your body",
          body: `<ul><li><b>warm up</b> → do gentle exercises before sport (noun: a <b>warm-up</b>)</li><li><b>cool down</b> → keep moving gently after hard exercise</li><li><b>stretch</b> → make your arms and legs long and straight</li><li>an <b>injury</b> → harm to your body, for example in sport; be <b>injured</b></li><li><b>recover</b> → get well again after an injury or illness</li><li><b>rest</b> → stop and relax so your body can get stronger</li></ul><p><u>in</u>jury, re<u>cov</u>er, <u>ex</u>ercise, <u>en</u>ergy</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "vocab",
          title: "Match the halves.",
          left: ["warm up", "cool down", "stretch", "recover"],
          right: ["do gentle exercises before sport", "keep moving gently after hard exercise", "make your arms and legs long and straight", "get well again after an injury"],
          hint: "Before sport or after it? Arms and legs or getting well?",
          fbOk: "Right.",
          fbBad: "Look at “Sport and your body” again.",
          fbText: "<b>warm up</b> – before sport; <b>cool down</b> – after hard exercise; <b>stretch</b> – arms and legs long; <b>recover</b> – get well again."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><i>Sport is good for your body and your mind. The World Health Organization (WHO) says that regular physical activity is good for young people’s mental health. It can reduce anxiety and help them feel more confident. But sport has risks too. The NHS, the UK’s health service, says that warming up before exercise can help to prevent injuries.</i></p><p>Which sentence is true, according to the text?</p>`,
          opts: [
            "WHO says that sport is bad for young people’s mood.",
            "The UK’s health service says a warm-up can help to prevent injuries.",
            "The text says that sport has no risks."
          ],
          correct: 1,
          hint: "Find the sentence about the NHS.",
          fbOk: "Exactly.",
          fbBad: "Read the last sentence again.",
          fbText: "The NHS says that <b>warming up</b> can help to prevent injuries. WHO says activity is good for mental health, and the text says sport has risks too."
        },
        {
          type: "gaps",
          sk: "gram",
          title: "Fill in the gaps.",
          body: `<p>Mr Hnatiuk talks to the new members of the club.</p>`,
          text: "“To avoid {*getting|to get} injured, always {*warm up|cool down|recover} before you run. Don’t risk {*training|to train} with an injury. After a hard race, {*cool down|warm up|take up} and stretch. And remember: your body needs time to {*recover|warm up|take up}.”",
          hint: "avoid, risk → -ing. Before running? After a race? Getting well again?",
          fbOk: "Yes!",
          fbBad: "Check the verb patterns and the list “Sport and your body”.",
          fbText: "avoid <b>getting</b>, risk <b>training</b>: -ing. <b>Warm up</b> before you run, <b>cool down</b> after a race. Your body needs time to <b>recover</b>."
        },
        {
          type: "word",
          sk: "gram",
          title: "Write the missing word.",
          body: `<p>Use the verb <i>move</i>. Mr Hnatiuk explains how to cool down.</p>`,
          before: "“After a hard race, don’t sit down straight away. Keep",
          after: "gently for a few minutes.”",
          answer: "moving",
          hint: "keep + -ing or to?",
          fbOk: "Well done!",
          fbBad: "keep is in the -ing list.",
          fbText: "After <b>keep</b>: -ing. Keep <b>moving</b> gently: that’s how you cool down."
        },
        {
          type: "pick",
          sk: "gram",
          title: "Find the mistake.",
          body: `<p>Bohdan has a small injury. One phrase in his post is wrong.</p>`,
          text: "I can’t play tennis for three weeks. I’m trying [!to stay] positive, and I keep [to go] to the club to watch my friends.",
          hint: "Look at the verb after keep.",
          fbOk: "Good eye!",
          fbBad: "keep + -ing or keep + to?",
          fbText: "After <b>keep</b>: -ing. I keep <b>going</b> to the club. <i>Trying to stay</i> is correct."
        },
        {
          type: "stress",
          sk: "phon",
          title: "Find the stressed syllable.",
          words: ["+in|ju|ry", "re|+cov|er", "+ex|er|cise", "+en|er|gy"],
          fbOk: "Good eye!",
          fbBad: "Look at the underlined parts in the list.",
          fbText: "<u>in</u>jury, re<u>cov</u>er, <u>ex</u>ercise, <u>en</u>ergy."
        },
        {
          type: "choice",
          sk: "func",
          title: "Read the dialogue and choose the best answer.",
          body: `<p><b>Mariia:</b> I want to run ten kilometres on Sunday, but I’ve only ever run three.<br><b>Taras:</b> …</p><p>What is the best answer?</p>`,
          opts: [
            "Great! Run twenty kilometres today, then.",
            "Don’t worry, you don’t need to warm up.",
            "Why not start with five and see how you feel?"
          ],
          correct: 2,
          hint: "Which answer helps Mariia avoid an injury?",
          fbOk: "Right.",
          fbBad: "Think about Mr Hnatiuk’s rules.",
          fbText: "<b>Why not start with five and see how you feel?</b> A big jump from three to ten kilometres is a risk. Skipping the warm-up is a risk too."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Myroslava writes to the club.</p>`,
          text: "I couldn’t run for a month because of an {*injury|energy|exercise} in my foot. It was hard, but I managed {*to stay|staying} positive. Now I’ve {*recovered|warmed up|stretched}, and I’m back at training. I never skip the {*warm-up|cool-down} before a race now. Sport makes me happy, so I want to keep {*moving|to move}!",
          hint: "harm to your body → ?; manage → to; get well again → ?; before a race → ?; keep → -ing.",
          fbOk: "Well done!",
          fbBad: "Check the words in “Sport and your body” and the verb patterns.",
          fbText: "an <b>injury</b>; managed <b>to stay</b>; I’ve <b>recovered</b>; the <b>warm-up</b> before a race; keep <b>moving</b>."
        }
      ],
      outro: {
        text: "Warm up, cool down, rest and recover: now you can talk about sport and health.",
        learned: [
          "Use warm up, cool down, stretch, injury and recover.",
          "Read what health experts say about sport.",
          "Use avoid, risk and keep + -ing to talk about training."
        ]
      }
    },

    /* ───────────── Урок 6 ───────────── */
    {
      id: "e10s2l6",
      title: "Is sport good for everyone? Giving your opinion",
      short: "Your opinion",
      icon: "scale",
      status: "verified",
      why: "In a discussion, a good opinion has reasons and examples. Look at both sides of a question and support your view.",
      screens: [
        {
          type: "intro",
          eyebrow: "Lesson 6",
          title: "Is sport good for everyone?",
          body: `<p class="lead">The penfriend club has an online debate: “Is sport good for everyone?”</p><p><b>Zoriana:</b> On the one hand, sport keeps you fit. On the other hand, not everyone enjoys team games. In my view, schools should offer more choice: yoga, dance or chess.<br><b>Andrii:</b> Sport is good for everyone, but tough competition isn’t. For instance, some kids are scared of losing.<br><b>Kateryna:</b> What’s more, sport can cost a lot. Not every family can afford to buy skis.</p><p>How do they show their reasons?</p>`,
          cta: "Let’s see"
        },
        {
          type: "choice",
          sk: "func",
          eyebrow: "Guess!",
          title: "What do you think?",
          hyp: true,
          body: `<p>Zoriana: “<b>On the one hand</b>, sport keeps you fit. <b>On the other hand</b>, not everyone enjoys team games.”</p><p>Why does she say this?</p>`,
          opts: [
            "to give two reasons why team games are the best",
            "to show two different sides of the question",
            "to agree with everyone in the debate"
          ],
          correct: 1,
          fbTitle: "Let’s find out.",
          fbOk: "Good guess!",
          fbText: "<b>On the one hand … On the other hand …</b> shows two sides of a question. The next screen has more phrases for a debate."
        },
        {
          type: "info",
          title: "Supporting your opinion",
          body: `<ul><li><b>In my view</b>, … = In my opinion, …</li><li><b>On the one hand</b>, … <b>On the other hand</b>, … → two sides of a question</li><li><b>For instance</b>, … = For example, …</li><li><b>What’s more</b>, … → you add another, often stronger, point</li><li><b>To sum up</b>, … → at the end: your main idea in short</li></ul><p>Not: <s>From the one hand</s> → <b>On</b> the one hand.</p>`,
          cta: "Next"
        },
        {
          type: "match",
          sk: "func",
          title: "Match the halves.",
          left: ["In my view, …", "For instance, …", "What’s more, …", "To sum up, …"],
          right: ["gives your opinion", "gives an example", "adds another point", "gives your main idea at the end"],
          hint: "Which phrase means for example? Which one comes at the end?",
          fbOk: "Well done!",
          fbBad: "Look at “Supporting your opinion” again.",
          fbText: "<b>In my view</b> – your opinion. <b>For instance</b> – an example. <b>What’s more</b> – another point. <b>To sum up</b> – your main idea at the end."
        },
        {
          type: "gaps",
          sk: "func",
          title: "Fill in the gaps.",
          body: `<p>Kyrylo joins the debate.</p>`,
          text: "{*On|From|In} the one hand, team sport teaches you discipline. On the other {*hand|side|way}, some players only think about winning. {*For|By|As} instance, in one football team at our school, nobody passes the ball to the weaker players. {*In|On|At} my view, coaches should teach fair play first.",
          hint: "… the one hand; on the other …; … instance; … my view.",
          fbOk: "Exactly.",
          fbBad: "Look at the phrases in “Supporting your opinion”.",
          fbText: "<b>On</b> the one hand, on the other <b>hand</b>, <b>for</b> instance, <b>in</b> my view."
        },
        {
          type: "pick",
          sk: "func",
          title: "Find the mistake.",
          body: `<p>One word in Bohdan’s post is wrong.</p>`,
          text: "[From] the one hand, watching sport on TV is exciting. On the other hand, it isn’t the same as doing sport. In my view, it’s better to play.",
          hint: "Look at the start of the post.",
          fbOk: "Good eye!",
          fbBad: "… the one hand: which small word?",
          fbText: "We say <b>On</b> the one hand, not <s>From the one hand</s>. <i>On the other hand</i> and <i>In my view</i> are correct."
        },
        {
          type: "choice",
          sk: "func",
          title: "Choose the correct answer.",
          body: `<p>Taras: “Running is cheap: you only need good shoes. ___, you can run anywhere, even in the city centre.”</p><p>Which phrase goes in the gap?</p>`,
          opts: [
            "On the other hand",
            "To sum up",
            "What’s more"
          ],
          correct: 2,
          hint: "Is Taras adding another good point, showing the other side or finishing?",
          fbOk: "Right.",
          fbBad: "Both points are good things about running.",
          fbText: "Taras adds another point: <b>What’s more</b>, you can run anywhere. <i>On the other hand</i> shows the other side, and <i>To sum up</i> comes at the end."
        },
        {
          type: "build",
          sk: "func",
          title: "Put the words in order.",
          body: `<p>Zoriana shows the other side of the question.</p>`,
          tiles: ["On the other hand,", "not", "everyone", "enjoys", "team games"],
          answer: "On the other hand, not everyone enjoys team games.",
          extra: ["enjoy"],
          hint: "Start with the phrase for the other side. not + everyone + verb.",
          fbOk: "Well done!",
          fbBad: "everyone + enjoys (with -s).",
          fbText: "<b>On the other hand, not everyone enjoys team games.</b> Everyone takes a verb with -s: everyone <b>enjoys</b>."
        },
        {
          type: "word",
          sk: "func",
          title: "Write the missing word.",
          body: `<p>Zoriana finishes her post with her main idea.</p>`,
          before: "To",
          after: "up, sport is good for most people, but schools should offer more choice.",
          answer: "sum",
          hint: "At the end, your main idea in short: To … up.",
          fbOk: "Yes!",
          fbBad: "Look at the last phrase in the list.",
          fbText: "<b>To sum up</b> – your main idea in short, at the end."
        },
        {
          type: "choice",
          sk: "read",
          title: "Read and choose.",
          body: `<p><i>Sport is great, but it isn’t always fair. Football boots, a bike or skis can cost a lot. What’s more, some villages don’t have a sports centre. That’s why, in my view, every school should have a good gym that is free for everyone. – Kateryna</i></p><p>What is Kateryna’s main idea?</p>`,
          opts: [
            "Football boots are cheap.",
            "Sport should be open to everyone, even if they don’t have much money.",
            "Villages don’t need sports centres."
          ],
          correct: 1,
          hint: "Find In my view in the text.",
          fbOk: "Exactly.",
          fbBad: "Read the last sentence again.",
          fbText: "Kateryna thinks every school should have a free gym: sport should be <b>open to everyone</b>. She says sport can cost a lot."
        },
        {
          type: "gaps",
          sk: "write",
          eyebrow: "Final",
          title: "Complete the sentences.",
          body: `<p>Andrii writes his opinion for the debate.</p>`,
          text: "Is sport good for everyone? {*On|From} the one hand, it keeps you fit and helps you deal with stress. On the other {*hand|side}, competition can be hard for some people. {*For|As} instance, my friend Bohdan can’t stand {*losing|lose} and gets angry. {*What’s more|To sum up}, some people simply prefer chess or dancing. {*To sum up|For instance}, I think sport is good for everyone if they can choose a sport they enjoy.",
          hint: "On the one hand … on the other hand; for instance; another point → ?; at the end → ?",
          fbOk: "Brilliant!",
          fbBad: "Which phrase gives an example, which adds a point and which comes at the end?",
          fbText: "<b>On</b> the one hand, on the other <b>hand</b>, <b>for</b> instance, can’t stand <b>losing</b>, <b>What’s more</b> (another point), <b>To sum up</b> (the end)."
        }
      ],
      outro: {
        text: "On the one hand…, on the other hand…, to sum up…: now you can look at both sides of a question and support your view.",
        learned: [
          "Give your view and look at both sides: on the one hand, on the other hand.",
          "Support your opinion with for instance and what’s more.",
          "Finish your opinion with to sum up."
        ]
      }
    },

    /* ───────────── Урок 7 · фінал ───────────── */
    {
      id: "e10s2l7",
      title: "Sports Week: the club magazine",
      short: "Section final",
      icon: "trophy",
      status: "verified",
      boss: true,
      badge: "e10s2boss",
      why: "Check everything from this section. Your points are doubled.",
      screens: [
        {
          type: "intro",
          eyebrow: "Section final · points ×2",
          title: "Can you check the magazine?",
          body: `<p class="lead">The penfriend club is making a magazine for Sports Week: “Sport, health and leisure”.</p><p>Check the articles before they go online. You need everything from this section.</p>`,
          cta: "Let’s go"
        },
        {
          type: "match",
          sk: "vocab",
          eyebrow: "Task 1",
          title: "Match the halves.",
          left: ["fair play", "a spectator", "team spirit", "a role model"],
          right: ["playing honestly and by the rules", "a person who watches a sports event", "the members of a team support each other", "a person you admire and want to be like"],
          pre: "e10s2l1",
          fbOk: "Right.",
          fbBad: "Which one is about rules? Who watches?",
          fbText: "<b>fair play</b> – by the rules; a <b>spectator</b> watches; <b>team spirit</b> – support each other; a <b>role model</b> – a person you want to be like."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 2",
          title: "Fill in the gaps.",
          text: "Daryna keeps {*training|to train} in the rain. Bohdan refused {*to give up|giving up} after he lost the first set. Kateryna managed {*to finish|finishing} her first 5 km race.",
          pre: "e10s2l2",
          fbOk: "Yes!",
          fbBad: "keep → -ing. refuse, manage → to.",
          fbText: "keeps <b>training</b>; refused <b>to give up</b>; managed <b>to finish</b>."
        },
        {
          type: "choice",
          sk: "cult",
          eyebrow: "Task 3",
          title: "Choose the correct answer.",
          body: `<p>Which city hosted the final of Euro 2012?</p>`,
          opts: [
            "Lviv",
            "Kyiv",
            "Rome"
          ],
          correct: 1,
          pre: "e10s2l3",
          fbOk: "Exactly.",
          fbBad: "Remember Kyrylo’s article: the Olympic Stadium.",
          fbText: "The Euro 2012 final took place at the Olympic Stadium in <b>Kyiv</b> on 1 July 2012."
        },
        {
          type: "gaps",
          sk: "gram",
          eyebrow: "Task 4",
          title: "Fill in the gaps.",
          text: "Please remember {*to bring|bringing} your PE kit on Friday. I’ll never forget {*watching|to watch} my first match at the stadium. On the way to the park, we stopped {*to buy|buying} some water.",
          pre: "e10s2l4",
          fbOk: "Well done!",
          fbBad: "A job → to. A memory → -ing. Stop in order to → to.",
          fbText: "remember <b>to bring</b> (a job); never forget <b>watching</b> (a memory); stopped <b>to buy</b> (in order to)."
        },
        {
          type: "pick",
          sk: "gram",
          eyebrow: "Task 5",
          title: "Find the mistake.",
          body: `<p>One phrase in the health page is wrong.</p>`,
          text: "To avoid [to get] injured, always [!warm up] before you run, and cool down after hard training.",
          pre: "e10s2l5",
          fbOk: "Good eye!",
          fbBad: "avoid + -ing or avoid + to?",
          fbText: "After <b>avoid</b>: -ing. To avoid <b>getting</b> injured. <i>Warm up</i> before running is correct."
        },
        {
          type: "build",
          sk: "func",
          eyebrow: "Task 6",
          title: "Put the words in order.",
          body: `<p>Start the opinion page.</p>`,
          tiles: ["On the one hand,", "sport", "keeps", "you", "fit"],
          answer: "On the one hand, sport keeps you fit.",
          extra: ["From the one hand,"],
          pre: "e10s2l6",
          fbOk: "Right.",
          fbBad: "Which is correct: on the one hand or from the one hand?",
          fbText: "<b>On the one hand, sport keeps you fit.</b> Not <s>From the one hand</s>."
        },
        {
          type: "choice",
          sk: "read",
          eyebrow: "Task 7",
          title: "Read and choose.",
          body: `<p><i>At the Paris Olympics in 2024, the fencer Olha Kharlan won a bronze medal and a team gold. She now has six Olympic medals, more than any other athlete has won for Ukraine.</i></p><p>Which sentence is true?</p>`,
          opts: [
            "Kharlan won only a bronze medal in Paris.",
            "Kharlan has two Olympic medals.",
            "Kharlan won two medals in Paris."
          ],
          correct: 2,
          pre: "e10s2l3",
          fbOk: "Well done!",
          fbBad: "Read the first sentence again: a bronze and a team gold.",
          fbText: "In Paris, Kharlan won <b>two medals</b>: a bronze and a team gold. She has six Olympic medals in total."
        }
      ],
      outro: {
        text: "Well done! Now you can talk about the role of sport, big sports events and sport and health, and give your opinion with reasons.",
        learned: [
          "Talk about what sport gives people and society.",
          "Use verbs + -ing and verbs + to, and the change in meaning after stop, remember and forget.",
          "Read about the Olympics, the Paralympics and Euro 2012.",
          "Give your opinion and look at both sides of a question."
        ]
      }
    }
  ]
});
