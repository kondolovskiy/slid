import assert from "node:assert/strict";
import { sentences, screenAllText, words, lessonMetrics, plain, metricText } from "./lib.mjs";

let n = 0;
const eq = (a, b, msg) => { n++; assert.deepEqual(a, b, msg); };
for (const abbreviation of ["р.", "рр.", "ст.", "тис.", "млн.", "н. е.", "див."]) {
  eq(sentences(`У 1922 ${abbreviation} почалася подія. Потім інша.`).length, 2, abbreviation);
  eq(sentences(`Завершилося у 1922 ${abbreviation} Наступна подія.`).length, 2, abbreviation + " at end");
}
eq(sentences("Див. 12 прикладів. Готово!").length, 2);
eq(sentences("Що сталося? Подія завершилася… Далі буде.").length, 3);
const screen = { type:"choice", title:"Обери назву", body:"<p>Прочитай умову.</p>", opts:["Перша довга назва", "Друга назва"], items:[["Назва предмета", 0]] };
eq(sentences(screenAllText(screen)).map(x => words(x).length), [2, 2, 3, 2, 2]);
eq(lessonMetrics({screens:[screen]}).sentenceWords, 2.2);

// engine-lang-p3
// п. 12: знак наголосу U+0301 не розриває слово
eq(words("листопа́д і [йа́ма]"), ["листопа́д", "і", "йа́ма"], "words: U+0301 усередині слова");
// п. 17: тег усередині слова — не межа слова; між словами — як і раніше пробіл
eq(plain("велос<b>и</b>пед, д<b><i>и</i></b>плом"), "велосипед, диплом", "plain: тег між літерами");
eq(plain("слово<br>інше <b>тут</b>"), "слово інше тут", "plain: тег між словами — пробіл");
eq(words(plain("Пишемо велос<b>и</b>пед.")).length, 2, "words: велосипед — одне слово");
// п. 11: пункти <li> без крапки — окремі речення; рядок алфавіту не рахується
eq(sentences(metricText("<p>Запам'ятай:</p><ul><li>жовтий колір</li><li>синє небо</li></ul>")).map(x => words(x).length), [1, 2, 2], "sentences: <li> без крапки");
eq(sentences(metricText("Алфавіт:<br>А Б В Г Ґ Д Е Є Ж З И І Ї Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ь Ю Я<br>Букв 33.")).map(x => words(x).length), [1, 2], "sentences: рядок алфавіту прибрано");
// п. 13: транскрипції й переліки звуків — не в метриках
eq(metricText("Слово яма звучить [йа́ма], а голосні а, о, у, е, и, і — шість."), "Слово яма звучить , а голосні — шість.", "metricText: транскрипція й перелік звуків");
eq(metricText("Ініціали Т. Г. Шевченка і в у нас"), "Ініціали Т. Г. Шевченка і в у нас".replace(" і в у", ""), "metricText: три однолітерні слова поспіль — перелік (рідкісний хибний збіг прийнятний)");
eq(metricText("Точки $A$, $B$, $C$ лежать на прямій."), "Точки Ф , Ф , Ф лежать на прямій.", "metricText: замінник формули Ф — не перелік літер");
// п. 14: ? перед малою літерою (перелік питань) — не кінець речення
eq(sentences("Ставимо питання <i>хто? що? де?</i> до слова. Далі.".replace(/<[^>]+>/g, "")).length, 2, "sentences: хто? що? де?");
eq(sentences("Хто прийшов? Мама.").length, 2, "sentences: ? перед великою — кінець");
const ukr = { screens: [{ type: "info", title: "Питання", body: "<p>Іменник відповідає на питання <i>хто? що? де?</i></p><ul><li>мама</li><li>стіл</li></ul>" }] };
// 10 слів: назва (1) + речення з переліком питань (7) + два пункти (1 + 1) = 4 речення → 2,5 (до п. 11 і 14 — 5 «речень», 2,0)
eq(lessonMetrics(ukr).sentenceWords, 2.5, "lessonMetrics: назва, речення з переліком питань, два пункти");
console.log(`${n} перевірок текстових метрик пройдено`);
