# Публікація й запуск

## Локально
```bash
python3 -m http.server 8000     # у корені репозиторію
# відкрити http://localhost:8000
```
Відкривати `index.html` подвійним кліком теж можна, але деякі браузери обмежують `localStorage` для `file://`.

## Прототип-артефакт Claude
Прототип опубліковано як артефакт Claude (приватне посилання власника; поділитися — меню Share на сторінці).
Щоб оновити з Claude: попросити «опублікуй оновлення Сліду» — агент передає `index.html` як сторінку, а `app/`, `content/`, `img/` як супровідні файли `files`.
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
