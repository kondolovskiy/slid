import assert from "node:assert/strict";
import { sentences, screenAllText, words, lessonMetrics } from "./lib.mjs";

for (const abbreviation of ["р.", "рр.", "ст.", "тис.", "млн.", "н. е.", "див."]) {
  assert.equal(sentences(`У 1922 ${abbreviation} почалася подія. Потім інша.`).length, 2, abbreviation);
  assert.equal(sentences(`Завершилося у 1922 ${abbreviation} Наступна подія.`).length, 2, abbreviation + " at end");
}
assert.equal(sentences("Див. 12 прикладів. Готово!").length, 2);
assert.equal(sentences("Що сталося? Подія завершилася… Далі буде.").length, 3);
const screen = { type:"choice", title:"Обери назву", body:"<p>Прочитай умову.</p>", opts:["Перша довга назва", "Друга назва"], items:[["Назва предмета", 0]] };
assert.deepEqual(sentences(screenAllText(screen)).map(x => words(x).length), [2, 2, 3, 2, 2]);
assert.equal(lessonMetrics({screens:[screen]}).sentenceWords, 2.2);
console.log("20 перевірок текстових метрик пройдено");
