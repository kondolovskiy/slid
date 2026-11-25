/* Слід · план предмета «Англійська мова»
   Розділи без уроків: назва, «навіщо», тижні, перелік тем. Файл розділу з тим самим id замінює запис.
   Увесь зміст — англійською, британська норма (D-055); цей коментар — українською.
   4 клас — за Типовою освітньою програмою 3–4 кл. (під керівництвом О. Я. Савченко, 2018), іншомовна галузь,
   «Англійська мова», «4-ий клас»: теми й функції — PDF с. 62–63, граматика — с. 63, інвентар 3 кл. (повторення) — с. 62,
   рівень A1 на кінець 4 кл. — с. 40, дескриптори A1 — с. 50–55:
   https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf
   Програма ліцею вимагає ТОП Шияна (№ 1273); її тексту немає — «роби поки без цього» (D-055, доповнення п. 7).
   Порядок тем програма не задає («рамкова», с. 60); розподіл граматики між розділами — наш, концентричний.
   35 тижнів, ≈ 6 уроків на розділ (D-055, доповнення п. 2). Звірка: reports/verify/plan-eng-g4.md.
   5 клас — за модельною програмою «Іноземна мова. 5–9 класи» (Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021):
   теми, підтеми й функції 5 кл. — с. 20 (розд. 4.2.1), граматика A2 — с. 21–22 (розд. 4.4), результати на кінець 6 кл. — с. 15–19:
   https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf
   Програма рамкова (с. 20): порядок тем і поєднання — вибір учителя; розподіл граматики A2 між 5 і 6 кл. і розділами — наш, концентричний
   (спирається на 4 кл. e4s1–e4s8). requires не ставимо: уроків 4 кл. ще немає (reports/verify/plan-eng-g5.md §6). Звірка: plan-eng-g5.md.
   6 клас — та сама програма МП-ІМ: теми, підтеми й функції 6 кл. — с. 20–21 (розд. 4.2.2), граматика A2 — с. 21–22 (розд. 4.4, спільна для 5–6 кл.).
   Розподіл граматики між розділами — наш, концентричний: лише те, чого ще не було в e4s*–e5s*, або розширення вже пройденого.
   requires — у файлах розділів, не тут (запис плану успадковує файл розділу); зв'язки на уроки 4–5 кл. — reports/verify/plan-eng-g6.md §6.
   Назви уроків 4–5 кл. нижче синхронізовано з verified-розділами (2026-11-20); джерело назви — файл розділу. Звірка 6 кл.: plan-eng-g6.md.
   Перевірка: node tools/validate.mjs && node tools/stats.mjs
   Схема й правила: docs/CONTENT_SCHEMA.md, style/ */
SLID.section("eng", {
  id: "e4s1",
  grade: 4,
  weeks: [1, 5],
  title: "Me, my family and friends: where we live",
  why: "To tell people about your family and friends. And to say where you live: in a city, a town or a village.",
  plan: [
    "Hello again!",
    "My family: who is who?",
    "Jobs: a doctor, an engineer",
    "Cities, towns and villages",
    "Where do you live?",
    "About me: a form"
  ]
});

SLID.section("eng", {
  id: "e4s2",
  grade: 4,
  weeks: [6, 9],
  title: "My home",
  why: "To describe your home and your room. And to say where things are.",
  plan: [
    "Homes: a house or a flat?",
    "Rooms: there is, there are",
    "Furniture in my room",
    "Where is the cat? In, on, under, next to",
    "Is there a lamp? Are there any books?",
    "My dream room: reading and writing"
  ]
});

SLID.section("eng", {
  id: "e4s3",
  grade: 4,
  weeks: [10, 13],
  title: "Free time: sport and heroes",
  why: "To talk about sport and your free time. And to tell a friend about your favourite hero.",
  plan: [
    "Sports: play, go and do",
    "How often? Always, usually, sometimes, never",
    "My week: on Mondays, at the weekend",
    "And, but, or: what I like",
    "Favourite heroes from books and films",
    "A post about my hobby"
  ]
});

SLID.section("eng", {
  id: "e4s4",
  grade: 4,
  weeks: [14, 17],
  title: "Shops and shopping",
  why: "To buy things in a shop. And to ask about prices and say what you would like.",
  plan: [
    "Shops in my town",
    "In a shopping centre: signs and floors",
    "How many? How much?",
    "Prices: how much is it?",
    "I’d like… I’d like to buy…",
    "Buying a present: a dialogue"
  ]
});

SLID.section("eng", {
  id: "e4s5",
  grade: 4,
  weeks: [18, 21],
  title: "Health and hygiene",
  why: "To say how you feel. And to know what helps you stay clean and well.",
  plan: [
    "Keeping clean: wash your hands!",
    "Stay healthy every day",
    "How do you feel?",
    "What’s the matter?",
    "At the doctor’s",
    "Why? Because…"
  ]
});

SLID.section("eng", {
  id: "e4s6",
  grade: 4,
  weeks: [22, 26],
  title: "Nature and weather",
  why: "To talk about the weather and nature. And to say what is happening now.",
  plan: [
    "Seasons and weather",
    "It’s raining now! What’s happening?",
    "Is it snowing? Questions about now",
    "Nature in Ukraine and the UK",
    "Bigger, colder, faster: comparing things",
    "Let’s help nature!"
  ]
});

SLID.section("eng", {
  id: "e4s7",
  grade: 4,
  weeks: [27, 31],
  title: "Holidays and travel",
  why: "To talk about trips and transport. And to tell people about your holiday plans.",
  plan: [
    "By bus, by train, on foot",
    "Which way? Up, down, across, along",
    "Capital cities: Kyiv, London and more",
    "The biggest and the longest",
    "A postcard from my holiday",
    "Plans for the summer: I think I’ll …"
  ]
});

SLID.section("eng", {
  id: "e4s8",
  grade: 4,
  weeks: [32, 35],
  title: "Celebrations and school events",
  why: "To invite friends to a party and talk about school events. And to say “Happy New Year!” or “Happy birthday!”",
  plan: [
    "A party at a café",
    "Invitations: when and what time?",
    "Happy New Year! Celebrations in Ukraine and the UK",
    "School events: a concert, a sports day, a fair",
    "Every day or now? I play, I’m playing",
    "Notes and messages to friends"
  ]
});

SLID.section("eng", {
  id: "e5s1",
  grade: 5,
  weeks: [1, 4],
  title: "Me, my family and friends",
  why: "To talk about your family and your friends. And to say what your parents do.",
  plan: [
    "My family tree: who is who?",
    "Have you got any brothers or sisters?",
    "Whose is it? My, your, his, her",
    "This, that, these, those: a family photo",
    "What do your parents do? Jobs",
    "My best friend: what does she like?"
  ]
});

SLID.section("eng", {
  id: "e5s2",
  grade: 5,
  weeks: [5, 8],
  title: "School life",
  why: "To talk about your school day and your timetable. And to understand your teacher in your English lessons.",
  plan: [
    "My timetable: subjects and days",
    "My school day: I get up at seven",
    "Does she walk to school? Questions and negatives",
    "She’s always on time: always, usually, never",
    "Open your books! Classroom activities",
    "Can I…? Could you repeat that, please?"
  ]
});

SLID.section("eng", {
  id: "e5s3",
  grade: 5,
  weeks: [9, 12],
  title: "Food and drink",
  why: "To talk about the food you like. And to offer food to a friend and say “Yes, please” or “No, thank you”.",
  plan: [
    "Food and drink: my favourite meals",
    "An apple or some bread? Countable and uncountable",
    "Is there any milk? Some and any",
    "How much? How many? A lot of",
    "Would you like some juice? Offers",
    "Dishes from Ukraine and the UK"
  ]
});

SLID.section("eng", {
  id: "e5s4",
  grade: 5,
  weeks: [13, 15],
  title: "Clothes",
  why: "To talk about clothes for every season. And to say what people are wearing now.",
  plan: [
    "Clothes: a jumper, a skirt, a coat",
    "Trousers, jeans, shorts: a pair of…",
    "What are you wearing today?",
    "Clothes for every season",
    "I usually wear…, but today I’m wearing…",
    "School uniform: do you wear one?"
  ]
});

SLID.section("eng", {
  id: "e5s5",
  grade: 5,
  weeks: [16, 18],
  title: "Weather: rain, sun and storms",
  why: "To talk about the weather and compare days and seasons. And to understand a weather forecast.",
  plan: [
    "What’s the weather like today?",
    "Storms, fog and rainbows",
    "Hotter, colder, wetter: comparing the weather",
    "More beautiful, better, worse",
    "Tomorrow it will be sunny: a weather forecast",
    "Seasons in Ukraine and the UK"
  ]
});

SLID.section("eng", {
  id: "e5s6",
  grade: 5,
  weeks: [19, 21],
  title: "Free time, hobbies and holidays",
  why: "To talk about your hobbies and what you can do well. And to make plans with a friend: say yes or say no politely.",
  plan: [
    "Free time: at home and outside",
    "I love drawing, I don’t like running",
    "Swimming is fun! My hobby",
    "I can swim well, but I can’t skate",
    "Let’s go! Saying yes or no",
    "School holidays: what do you like doing?"
  ]
});

SLID.section("eng", {
  id: "e5s7",
  grade: 5,
  weeks: [22, 24],
  title: "My town or village",
  why: "To say what there is in your town or village. And to ask the way and give directions.",
  plan: [
    "Places in town: a library, a bank, a park",
    "Is there a cinema? There is, there are",
    "Next to, opposite, between: where is it?",
    "Excuse me, where is the bus stop?",
    "A walk around the town with a map",
    "My town: history and culture"
  ]
});

SLID.section("eng", {
  id: "e5s8",
  grade: 5,
  weeks: [25, 27],
  title: "Festivals and traditions",
  why: "To talk about festivals in Ukraine and the UK. And to say dates: “the first of January”.",
  plan: [
    "First, second, third: ordinal numbers",
    "When’s your birthday? Months and dates",
    "A calendar of festivals: Ukraine and the UK",
    "How do you celebrate? Traditions",
    "Our New Year party was great! Was and were",
    "Writing a greetings card"
  ]
});

SLID.section("eng", {
  id: "e5s9",
  grade: 5,
  weeks: [28, 31],
  title: "Travel: places to see",
  why: "To talk about trips and places you want to visit. And to tell people about your plans and your last trip.",
  plan: [
    "Where would you like to go?",
    "At the seaside or in the mountains?",
    "I’m going to visit my grandma: plans",
    "Are you going to travel this summer? Questions",
    "We visited Lviv: the Past Simple",
    "My travel diary"
  ]
});

SLID.section("eng", {
  id: "e5s10",
  grade: 5,
  weeks: [32, 35],
  title: "Ukraine and English-speaking countries",
  why: "To tell people about Ukraine. And to learn about the countries where people speak English.",
  plan: [
    "Ukraine on the map",
    "Where do people speak English?",
    "The UK: England, Scotland, Wales and Northern Ireland",
    "Bigger or smaller? Comparing countries",
    "The longest river, the highest mountain",
    "Facts about my country"
  ]
});

SLID.section("eng", {
  id: "e6s1",
  grade: 6,
  weeks: [1, 4],
  title: "Describing people",
  why: "To say what people look like. And to say what they are like: kind, friendly or shy.",
  plan: [
    "What does he look like? Tall or short?",
    "Long dark hair and big blue eyes",
    "A girl with glasses, a man with a beard",
    "What is she like? Kind, friendly, shy",
    "He looks happy! Very, quite, really",
    "She looks like her mum, but she’s like her dad"
  ]
});

SLID.section("eng", {
  id: "e6s2",
  grade: 6,
  weeks: [5, 8],
  title: "Shopping and money",
  why: "To talk about shops and the things they sell. And to ask about prices and buy things politely.",
  plan: [
    "At the chemist’s, at the newsagent’s: types of shops",
    "Why do you go there? To buy some bread",
    "A few, both, all, no: a shopping list",
    "Paying and getting change: pounds and hryvnias",
    "Can I help you? In a clothes shop",
    "It’s too big! Too small, too expensive"
  ]
});

SLID.section("eng", {
  id: "e6s3",
  grade: 6,
  weeks: [9, 13],
  title: "Food traditions and dishes",
  why: "To name dishes and say what is in them. And to talk about food traditions and meals you had.",
  plan: [
    "What’s on the menu? Names of dishes",
    "What’s in it? It’s made with…",
    "First, then, after that: a simple recipe",
    "We ate pancakes: irregular verbs",
    "Did you try it? I didn’t like it: questions and negatives",
    "Food traditions in Ukraine and the UK"
  ]
});

SLID.section("eng", {
  id: "e6s4",
  grade: 6,
  weeks: [14, 18],
  title: "Sport",
  why: "To talk about different sports and say which ones you prefer. And to tell people what happened in a match.",
  plan: [
    "Football, judo, swimming: kinds of sport",
    "Which sport do you prefer and why?",
    "I could swim when I was five",
    "What were you doing at six o’clock? The Past Continuous",
    "I was running when it started to rain",
    "What a match! Sports news"
  ]
});

SLID.section("eng", {
  id: "e6s5",
  grade: 6,
  weeks: [19, 23],
  title: "Getting ready for a trip",
  why: "To talk about transport and travel plans. And to get ready for a trip: tickets, documents and a suitcase.",
  plan: [
    "By train, by plane or by ferry?",
    "When does the train leave? Timetables",
    "We’re leaving on Friday: travel plans",
    "Packing a suitcase: it might be cold",
    "Tickets and passports: you have to show them",
    "Buying a train ticket at the station"
  ]
});

SLID.section("eng", {
  id: "e6s6",
  grade: 6,
  weeks: [24, 27],
  title: "School life: subjects and lessons",
  why: "To talk about your favourite subjects and what you do in lessons. And to talk about school rules and give advice.",
  plan: [
    "My favourite subject and why",
    "Projects, tests, experiments: what we do in lessons",
    "A subject that I love, a teacher who helps",
    "School rules: you must, you mustn’t",
    "You should ask for help: advice",
    "The best lesson of the year"
  ]
});

SLID.section("eng", {
  id: "e6s7",
  grade: 6,
  weeks: [28, 31],
  title: "Kyiv, the capital of Ukraine",
  why: "To tell people about Kyiv and its famous places. And to talk about places you have visited.",
  plan: [
    "Kyiv on the map: a city on the Dnipro",
    "The main street, the main square: sightseeing in Kyiv",
    "When was it built? Old buildings in Kyiv",
    "Have you ever been to Kyiv?",
    "I’ve visited…, I’ve never seen…: my experiences",
    "A day in Kyiv: a page for visitors"
  ]
});

SLID.section("eng", {
  id: "e6s8",
  grade: 6,
  weeks: [32, 35],
  title: "London, the capital of the UK",
  why: "To tell people about London and its famous places. And to tell a friend what other people said.",
  plan: [
    "London: a city on the Thames",
    "Famous places in London: a map",
    "If it rains, go to a museum!",
    "Kyiv and London: two capitals",
    "Emma told me about London: said and told",
    "A post from London: what I liked most"
  ]
});
