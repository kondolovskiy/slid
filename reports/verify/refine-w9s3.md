# Верифікація refine-world-w9s3 — урок w9s3l4 «Одна корона на двох»

Верифікатор: verifier-refine-w9s3, 2026-11-11. Правок у файлі автор не робив я; перевіряв зміни коміту з refine (diff bbb420a..HEAD): новий е4 «Імператор і Сісі» (choice), новий е11 «Конгрес у Берліні» (sort), дві правки милозвучності в `learned`. Інші уроки розділу не змінювалися і повторно не перевірялися.

## 1. Факти

| # | Твердження (екран) | Джерела (відкрито в цій сесії) | Вердикт |
|---|---|---|---|
| 1 | Франц Йосиф I став імператором 1848 р., у 18 років (е4) | https://en.wikipedia.org/wiki/Franz_Joseph_I_of_Austria (2.12.1848, «at age 18»); https://www.habsburger.net/en/persons/habsburg-emperor/franz-joseph-i (нар. 18.08.1830, правив 1848–1916) | ✅ |
| 2 | Правив майже 68 років, до смерті 1916 р. (е4) | ті самі два: 2.12.1848 – 21.11.1916 | ✅ |
| 3 | 1854 р. одружився з Єлизаветою, родом із Баварії; прізвисько Сісі (е4) | https://en.wikipedia.org/wiki/Empress_Elisabeth_of_Austria (нар. 24.12.1837 у Мюнхені, шлюб 24.04.1854, «Sisi»); https://en.wikipedia.org/wiki/Franz_Joseph_I_of_Austria («Duchess Elisabeth in Bavaria», 24.04.1854) | ✅ |
| 4 | Сісі вивчила угорську мову й захоплювалася Угорщиною (е4) | https://en.wikipedia.org/wiki/Empress_Elisabeth_of_Austria (почала вчити угорську); https://www.historyofroyalwomen.com/empress-elisabeth-sisi/the-year-of-empress-elisabeth-her-coronation-as-queen-of-hungary/ (говорила угорською; «her good Hungarian»); https://www.habsburger.net/en/chapter/elisabeths-transformation («enthusiasm for the language and culture of Hungary all her life») | ✅ |
| 5 | Палко підтримувала угоду (е4) | https://www.habsburger.net/en/chapter/elisabeths-transformation («fervid support for the project of the Compromise»); https://www.habsburger.net/en/chapter/austro-hungarian-dual-monarchy-coronation-hungarian-royal-couple («Elisabeth had also strongly favoured»); historyofroyalwomen (вище) | ✅ |
| 6 | Дружила з Дюлою Андраші — першим після угоди головою угорського уряду (е4) | https://www.habsburger.net/en/chapter/elisabeths-transformation («intimate friendship with the later Hungarian Prime Minister»); https://en.wikipedia.org/wiki/Gyula_Andr%C3%A1ssy (17.02.1867, «the first prime minister of the Hungarian half of the newly formed Dual Monarchy»); https://en.mandadb.hu/cikk/806254/Count_Gyula_Andrassy_and_the_Compromise («first responsible Hungarian government after the Compromise», 20.02.1867) | ✅ |
| 7 | Угорці полюбили свою королеву (е4) | habsburger.net elisabeths-transformation («made her very popular there»); en.wikipedia Elisabeth («Hungary returned her affection»); historyofroyalwomen («received enthusiastically») | ✅ |
| 8 | 1877–1878 рр. Росія розбила Османську імперію (е11) | https://www.encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/congress-berlin («Russian victory in the Russo-Turkish War (1877–1878)»); https://en.wikipedia.org/wiki/Congress_of_Berlin | ✅ (спрощення: союзники Росії не названі — допустимо) |
| 9 | Інші великі держави не хотіли панування Росії на Балканах (е11) | en.wikipedia Congress of Berlin (мотиви Британії, Австро-Угорщини); encyclopedia.com (конгрес мав замінити мир, нав'язаний Росією) | ✅ |
| 10 | Улітку 1878 р. — Берлінський конгрес; керував Бісмарк (е11) | encyclopedia.com (13.06–13.07.1878; Бісмарк «directed the congress»); en.wikipedia Congress of Berlin (Бісмарк «presided») | ✅ |
| 11 | Визнано незалежними Сербію, Чорногорію, Румунію (е11) | **Текст договору** https://sourcebooks.web.fordham.edu/mod/1878berlin.asp — ст. XXXIV (Сербія), XXVI (Чорногорія), XLIII (Румунія); encyclopedia.com; en.wikipedia | ✅ |
| 12 | Болгарія — князівство зі своїм урядом, але під верховною владою султана (е11) | Договір, ст. I: «autonomous and tributary Principality under the suzerainty of H.I.M. the Sultan… Christian Government»; encyclopedia.com («principality under nominal Ottoman suzerainty»); https://bnrnews.bg/en/post/385154/september-22-1908-bulgaria-breaks-free-from-ottoman-rule (васальне князівство, данина) | ✅ «верховна влада» = сюзеренітет, формулювання точне. Нюанс: сюзеренітет був номінальним (de facto Болгарія діяла самостійно, https://en.wikipedia.org/wiki/Bulgarian_Declaration_of_Independence), Східна Румелія — окремо; для 9 кл. спрощення прийнятне |
| 13 | Повну незалежність Болгарія проголосила 1908 р. (е11) | bnrnews.bg (22.09.1908, Велико-Тирново); en.wikipedia Bulgarian Declaration of Independence (5.10 [22.09 ст. ст.] 1908) | ✅ |
| 14 | Боснію і Герцеговину віддали під управління Австро-Угорщини (е11) | Договір, ст. XXV: «occupied and administered by Austria-Hungary»; encyclopedia.com; en.wikipedia Congress of Berlin | ✅ |

Британіка (britannica.com) у цій сесії віддавала 403 — не використана.

## 2. Відповіді (розв'язав сам, потім звірив)

| Екран | Моя відповідь | `correct` | Дистрактори |
|---|---|---|---|
| е4 choice «Імператор і Сісі» | «Ні: угоду уклав імператор після двох поразок, а Сісі її підтримувала» | 1 ✅ | «імператриця правила замість чоловіка» — суперечить е3 (угоду уклав Франц Йосиф) і е4 (правив 68 років); «Сісі не любила угорців» — суперечить тексту е4. Однозначно хибні. fbText узгоджений. |
| е11 sort «Конгрес у Берліні» | Сербія, Чорногорія, Румунія → «Визнана незалежна держава»; Болгарія, Боснія і Герцеговина → «Незалежності не здобула» | збігається ✅ | fbText не суперечить. |

## 3. Опора (D-019)

| Завдання | Звідки відповідь | Вердикт |
|---|---|---|
| е4 | е3 («Франц Йосиф 1867 р. уклав угоду» після поразок 1859 і 1866 рр.) + body е4 (Сісі «підтримувала угоду») | ✅ |
| е11 | body е11, другий абзац — усі п'ять держав названо з їхнім статусом | ✅ (перевірка читання) |

Факти вперше у `fbText` не з'являються; дати й імена до подачі не питаються. Пастки без підказки немає.

## 4. Тест рівня dgw9 (тема g9-dual)
Питання multi спирається на е3 (1867, поразки 1859 і 1866), е5 (спільне/окреме, парламенти), е7 (Галичина/Буковина/Закарпаття), е10 (угоду лише з угорцями). Ці екрани не змінені (diff: лише вставки е4 і е11). `learned` змінено лише «в» → «у» (зміст той самий) — ✅. `validate --diag dgw9`: 0 помилок, 0 попереджень.

## 5. Педагогіка, стиль, прогони
- `validate --section w9s3`: 0 помилок, 1 попередження (w9s3l4 screens=12 поза [5; 11]).
- `euphony --subject world --section w9s3`: у нових е4, е11 відхилень 0; решта — старі звітні відхилення інших екранів (поза обсягом задачі).
- `stats --subject world`: w9s3l4 — screens 12 (z=2.3), readWordsPerScreen 39 (z=2,0), maxReadWords 73 ≤ 75.
- Чутливих тем немає. Е11 у темі уроку («Австро-Угорщина просунулася на Балкани») прив'язаний слабко, але логічно — через Боснію.
- Плейтест: Python-модуля playwright у контейнері немає — лише CI (job browser).

**12 екранів — оцінка.** Попередження, не помилка; задача вимагала двох одиниць програми саме в цьому уроці, а наявні екрани — опора dgw9. Прийнятно. Мінімальне злиття без зміни фактів dgw9, якщо style-sync захоче повернути урок у профіль: перенести body е8 «Рівні — на папері» (54 слова) у body е9 «Чи стали народи рівними?» (16 слів) → 70 слів ≤ 75, як уже зроблено в е4; у е9 `fbBad` замінити «Перечитай другий абзац попереднього екрана» → «Перечитай другий абзац». На е8/е9 dgw9 не спирається. Наслідок — readWordsPerScreen зросте (~42). Не застосовував: це не критична правка.

## 6. Правки
- Зроблено: w9s3l4 `status: "draft"` → `"verified"` (1 правка). Змісту не змінював.
- Рекомендовано (не критично): у fbText е11 «лишилася під владою султана до 1908 р.» → «формально лишилася під владою султана до 1908 р.» (сюзеренітет був номінальним); злиття е8+е9 (вище).

## 7. Вердикт
w9s3l4 — **verified**. Відкритих ❌ і ⚠️ немає.
