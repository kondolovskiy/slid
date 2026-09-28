# Публікація й запуск

## Сайт на GitHub Pages
Адреса: **https://kondolovskiy.github.io/slid/**. Публікує `.github/workflows/pages.yml` при кожному пуші в `main`:
збирає контент, запускає валідатор, перевіряє, що згенеровані файли закомічені, і викладає лише файли застосунку
(`index.html`, `manifest.webmanifest`, `sw.js`, `app/`, `content/`, `img/`, `icons/`). Документація, пам'ять і задачі на сайт не потрапляють.
Одноразово в репозиторії: **Settings → Pages → Source: GitHub Actions**.

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
