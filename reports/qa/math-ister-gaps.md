# QA: математика, пакет уроків за Істером (draft)

Дата прогону: 2026-11-03. Build: коміт e76f423 (не перезбирався, `npm run check` не запускався).
Команда: `python3 tools/playtest.py --section <id>`, послідовно, без паралелі. Exit 0 = ✅, exit 1 = ❌ (JS-помилки або незараховане завдання).
Знімки: `python3 tools/playtest.py --section <id> --shots` (файли в `reports/shots/<lesson-id>-<n>.png`).

| Розділ | Результат | Уроків пройдено | Тестів рівня | Примітка |
|---|---|---|---|---|
| g6m3 | ✅ | 7 | 0 | знімки |
| ms0 | ✅ | 8 | 0 | |
| ms0b | ✅ | 8 | 0 | |
| g6m4 | ✅ | 9 | 0 | |
| ms4 | ✅ | 4 | 0 | |
| g6m6 | ✅ | 5 | 0 | знімки |
| g7m3 | ✅ | 7 | 0 | |
| g7m4 | ✅ | 9 | 0 | |
| g7m6 | ✅ | 5 | 0 | |
| g7m8 | ✅ | 6 | 0 | |
| g8m1 | ✅ | 7 | 0 | |
| g8m2 | ✅ | 7 | 0 | знімки |
| g8m3 | ✅ | 6 | 0 | |
| g8m4 | ✅ | 8 | 0 | знімки |
| g8m5 | ✅ | 8 | 0 | |
| g9m3 | ✅ | 7 | 0 | |
| g9m4 | ✅ | 6 | 0 | |
| g9m5 | ✅ | 5 | 0 | |
| g9m6 | ✅ | 7 | 0 | |
| g9m8 | ✅ | 12 | 0 | знімки |
| g9m7 | ✅ | 4 | 0 | |

Підсумок: 21/21 ✅, ❌ немає.

## Знімки екранів (reports/shots/)
- g9m8: /home/user/slid/reports/shots/g9m8l<N>-<n>.png (112 файлів, приклад: /home/user/slid/reports/shots/g9m8l1-1.png)
- g6m6: /home/user/slid/reports/shots/g6m6l<N>-<n>.png (45 файлів, приклад: /home/user/slid/reports/shots/g6m6l1-1.png)
- g8m4: /home/user/slid/reports/shots/g8m4l<N>-<n>.png (70 файлів, приклад: /home/user/slid/reports/shots/g8m4l1-1.png)
- g8m2: /home/user/slid/reports/shots/g8m2l<N>-<n>.png (62 файли, приклад: /home/user/slid/reports/shots/g8m2l1-1.png)
- g6m3: /home/user/slid/reports/shots/g6m3l<N>-<n>.png (67 файлів, приклад: /home/user/slid/reports/shots/g6m3l1-1.png)

## Не виконано / обмеження
- validate, stats, check не запускалися (поза межами цього завдання).
- Playtest не дає побуквенного звіту по екранах; для ❌ немає що наводити.
