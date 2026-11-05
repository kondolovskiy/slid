# Публікація й запуск

## Сайт на GitHub Pages
Адреса: **https://kondolovskiy.github.io/slid/**. Публікує `.github/workflows/pages.yml` при кожному пуші в `main`:
збирає контент, запускає валідатор, перевіряє, що згенеровані файли закомічені, проганяє браузерні тести (нижче) і викладає лише файли застосунку
(`index.html`, `manifest.webmanifest`, `sw.js`, `app/`, `content/`, `img/`, `icons/`). Документація, пам'ять і задачі на сайт не потрапляють.
Одноразово в репозиторії: **Settings → Pages → Source: GitHub Actions**.
CI запускає не весь `npm run check`, а тести, перелічені в `pages.yml` (зокрема `tools/test-diff-answers.mjs`: старі версії `learn.js` він бере з фікстур, тож вистачає неглибокого checkout). Решта check (`graph-report`, `stats`) — локально.

### Браузерні тести в CI (job `browser`)
`pages.yml` запускається на пуш у `main`, на pull request у `main` і вручну (Actions → Pages → Run workflow). Job `deploy` чекає **обидва** job — `build` і `browser`;
на pull request публікації немає (збирання сайту й deploy пропущено), лише перевірки. Щоб червоний PR не можна було злити, позначте `build` і `browser`
обов'язковими: Settings → Branches → правило для `main` → Require status checks.

Job `browser` (окремий runner, усе послідовно — паралельні браузерні прогони флейкають TimeoutError):
1. Python 3.12 + `pip install -r tools/requirements-browser.txt` (Playwright, версія закріплена) і `python -m playwright install --with-deps chromium`;
   pip і `~/.cache/ms-playwright` кешуються (ключ — версія Playwright), на влучанні кешу ставляться лише системні бібліотеки.
2. `python tools/test-answer-ui.py --suite regression` — головна регресія рушія (≈ 5–8 хв).
3. Плейтест піднабору: `node tools/playtest-pick.mjs` вибирає (а) змінені розділи й тести рівня (`git diff` з базою PR чи попереднім комітом пушу;
   нові файли першими; не більше 200 уроків, по черзі між предметами — решту названо попередженням «Понад бюджет»), (б) найменший набір уроків,
   що покриває кожен предмет, тип екрана, вид лабораторії й answerKind, (в) усі тести рівня. Далі один процес `python tools/playtest.py --section id1,id2,…`.
   Типово ≈ 60 уроків + 8 тестів рівня ≈ 5 хв; великий пакет — до ≈ 15 хв. Плейтест іде й після червоної регресії (повна картина за один прогін).
4. Повний плейтест усіх уроків (≈ 3,3 с на урок, 800+ уроків ≈ 45–50 хв) — лише вручну: Run workflow → `playtest: full` (на гілці PR — без публікації).

Червоний `browser`: спершу прочитай лог. Флейк під навантаженням у CI малоймовірний (прогони послідовні); якщо «Re-run failed jobs» знову червоний — це баг.
Локально без Python-модуля playwright ці прогони не запускаються (ставити пакети в спільному контейнері заборонено) — тоді перевірка лише в CI.

## PWA (встановлення і офлайн)
- `manifest.webmanifest` + іконки в `icons/` — застосунок можна встановити на телефон чи комп'ютер.
- `sw.js` генерує `tools/build.mjs` із `tools/sw.template.js`: список усіх файлів застосунку й версія-хеш. При першому відкритті все кешується, далі уроки працюють без мережі. Змінився будь-який файл → нова версія кешу → користувач бачить «Оновлено уроки».
- **Після будь-якої зміни в content/, app/, img/ запускай `node tools/build.mjs` і коміть `sw.js`**, інакше користувачі не отримають оновлення (CI це перевіряє).
- `app/pwa.js`: реєстрація service worker, позначка «офлайн» у верхній панелі, картка «Встановити застосунок» у профілі (Android/Chrome — кнопка, iOS — інструкція).
- Service worker працює лише через http(s): з `file://` і в артефакті Claude він тихо вимикається.

## Локально
```bash
python3 -m http.server 8000     # у корені репозиторію
# відкрити http://localhost:8000
```
Відкривати `index.html` подвійним кліком теж можна, але деякі браузери обмежують `localStorage` для `file://`.

## Прототип-артефакт Claude
Прототип також опубліковано як артефакт Claude (приватне посилання власника).
Артефакт сам додає `<!doctype>`/`<head>`/`<body>`, тому публікується не `index.html`, а `build/artifact.html` (`node tools/artifact.mjs`); `app/`, `content/`, `img/` — супровідні файли `files`.
Обмеження артефакту: зовнішні зображення й стилі заблоковано (лише Google Fonts), тому все лежить поруч.

## Мобільний застосунок (план)
Рекомендовано **Capacitor** (а не голий WebView):
```bash
npm i -D @capacitor/cli @capacitor/core @capacitor/android @capacitor/ios
npx cap init "Слід" ua.slid.app --web-dir .
npx cap add android && npx cap add ios
npx cap sync
```
- Файли лежать у пакунку, тож застосунок працює офлайн з першого запуску.
- `localStorage` на iOS можуть очистити, якщо мало місця: для релізу перенесіть стан у `@capacitor/preferences` або SQLite (обгортка навколо `save()` у app.js).
- Шрифти Google Fonts при офлайн-запуску не підвантажаться — для релізу покладіть файли шрифтів локально (`@font-face` у index.html).
- Оновлення уроків без релізу в сторі: завантажувати нові `content/*.js` із сервера й кешувати (Service Worker у PWA-варіанті або файлова система Capacitor).
