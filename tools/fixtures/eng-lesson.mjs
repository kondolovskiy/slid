// Слід · фікстура англійського уроку для метрик (engine-eng-stats, tools/test-metrics.mjs). Не зміст: лише текст для підрахунку.
// Екран 2 — текст для читання в body (27 слів: «a.m.» і «e.g.» words() рахує як два слова кожне), екран 3 — інструкція (4 слова)
// і текст мовної вправи gaps (16 слів із підставленими відповідями).
export const ENG_LESSON = {
  id: "fx-eng", title: "My family", status: "draft",
  screens: [
    { type: "intro", title: "Meet Mr. Brown", body: "<p>Mr. Brown lives in Kyiv. He has a beautiful family.</p>" },
    { type: "info", title: "Read the text", body: "<p>Olena is ten. She gets up at 7 a.m. and goes to school. She likes fruit, e.g. apples and pears. Her favourite subject is English.</p>" },
    { type: "gaps", title: "Fill in the gaps", body: "<p>Choose the right word.</p>",
      text: "This is {*a|an} cat. It is {*an|a} orange cat. It sleeps on the sofa every day." },
    { type: "choice", title: "Who is Olena?", body: "<p>Choose one answer.</p>", opts: ["A girl", "A teacher"], items: [["A girl", 0]], fbText: "Olena is ten." }
  ]
};
