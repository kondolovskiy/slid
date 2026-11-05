#!/usr/bin/env python3
"""Тест tools/verdict.py (tools-playtest-verdict-msg) без браузера: фальшива сторінка замість Playwright.
Запуск: python3 tools/test-verdict.py  (у npm run check і в CI, job build)."""
import asyncio, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from verdict import NO_VERDICT, NotCredited, credited, expect_credited, verdict_msg

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
fails, n = [], 0


def check(name, cond, info=""):
    global n
    n += 1
    if not cond: fails.append(f"{name}: {info}")


class Page:
    """Мінімум API Playwright Page, який читає verdict.py. `boom` — селектори, читання яких кидає."""
    def __init__(self, dock, action="Далі", disabled=False, fb="", boom=()):
        self.v = {"#dock": dock, "#action": action, "#fbText": fb}
        self.disabled, self.boom = disabled, set(boom)
    def _get(self, sel):
        if sel in self.boom: raise TimeoutError(f"{sel} не знайдено")
        return self.v[sel]
    async def get_attribute(self, sel, name): return self._get(sel)
    async def text_content(self, sel): return self._get(sel)
    async def is_disabled(self, sel):
        if sel in self.boom: raise TimeoutError(sel)
        return self.disabled


async def raises(page, where="m урок g6m1l1, екран 3 з 9 (choice)", given=2, **kw):
    try: await expect_credited(page, where, given, **kw)
    except NotCredited as e: return str(e)
    return None


async def main():
    # 1. зараховано — тихо
    check("ok", await raises(Page("dock fixed ok")) is None)
    check("info за замовчуванням (hyp/poll)", await raises(Page("dock fixed info")) is None)
    # 2. мутант choice: правильну відповідь не зараховано, #action — неактивна «Спробувати ще раз»
    m = await raises(Page("dock fixed bad", "Спробувати ще раз", True, " Подумай   ще. "))
    check("bad кидає NotCredited", m is not None)
    for part in ("не зараховано: ", "урок g6m1l1", "екран 3 з 9 (choice)", "відповідь 2", "клас #dock «dock fixed bad»",
                 "#action «Спробувати ще раз» (неактивна)", "відгук «Подумай ще.»"):
        check(f"повідомлення містить «{part}»", m and part in m, m)
    check("NotCredited — AssertionError (fail-fast набору не змінюється)", issubclass(NotCredited, AssertionError))
    check("немає слова Timeout", m and "Timeout" not in m, m)
    # 3. accept=('ok',) — test-answer-ui play_prerequisite: info не рахується
    check("info при accept=ok — не зараховано", await raises(Page("dock fixed info"), accept=("ok",)) is not None)
    # 4. токени, а не підрядок: «look»/«okay» не є класом ok
    check("клас-підрядок не зараховує", not credited("dock fixed lookup") and not credited("dock okay") and credited("ok dock"))
    check("порожній / None клас — не зараховано", not credited("") and not credited(None))
    m = await raises(Page(None, "Перевірити", False))
    check("dock без класу кидає", m is not None and "клас #dock «None»" in m and "(неактивна)" not in m, m)
    # 5. зламане читання деталей не ховає вердикт
    m = await raises(Page("dock fixed bad", boom=("#action", "#fbText")))
    check("читання #action кидає — повідомлення все одно є", m is not None and "не зараховано" in m and "TimeoutError" in m, m)
    m = await verdict_msg(Page("dock bad"), "w", [0, 1])
    check("список у відповіді", "відповідь [0, 1]" in m, m)
    check("NO_VERDICT", set(NO_VERDICT) == {"intro", "info", "explore"})
    # 6. статично: обидва браузерні прогони йдуть через expect_credited, голого assert на #dock у play_prerequisite немає
    pt = open(os.path.join(ROOT, "tools/playtest.py"), encoding="utf-8").read()
    ui = open(os.path.join(ROOT, "tools/test-answer-ui.py"), encoding="utf-8").read()
    check("playtest.py викликає expect_credited", "await expect_credited(pg," in pt)
    check("playtest.py: немає старого «правильну відповідь не зараховано» без деталей", "правильну відповідь не зараховано\")" not in pt)
    body = re.search(r"async def play_prerequisite\(\):(.*?)\n    #", ui, re.S)
    check("test-answer-ui.py: play_prerequisite знайдено", body is not None)
    check("play_prerequisite через expect_credited, без голого assert", body and "expect_credited(" in body.group(1) and "assert " not in body.group(1),
          body and body.group(1))
    print(f"test-verdict: {n - len(fails)}/{n}")
    for f in fails: print("ПОМИЛКА ", f)
    sys.exit(1 if fails else 0)


asyncio.run(main())
