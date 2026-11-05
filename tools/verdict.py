"""Слід · вердикт екрана для браузерних прогонів (tools-playtest-verdict-msg).

Після «Перевірити» з правильною відповіддю рушій ставить на #dock клас `ok` (для hyp/poll — `info`). Якщо ні — вправу не
зараховано, а #action стає неактивною «Спробувати ще раз»; наступний pg.click("#action") висів би 30 с і падав
`TimeoutError`, який легко сплутати з флейком під навантаженням (pitfalls-engine.md, 05.11 сесія 5). Тут вердикт читається
одразу й падіння має явне повідомлення: урок, екран, відповідь, клас #dock, стан #action.

Без залежності від playwright: `page` — будь-який об'єкт з async get_attribute / text_content / is_disabled
(тест — tools/test-verdict.py з фальшивою сторінкою).
"""

NO_VERDICT = ("intro", "info", "explore")   # екрани без оцінювання: «Далі» одразу


class NotCredited(AssertionError):
    """Правильну відповідь не зараховано. Підклас AssertionError: старі `except AssertionError` і fail-fast лишаються."""


def credited(cls, accept=("ok", "info")):
    """Чи означає клас #dock зарахування: є хоч один з токенів `accept` (по словах, не підрядком)."""
    return bool(set((cls or "").split()) & set(accept))


async def verdict_msg(page, where, given):
    """Текст «не зараховано: …» зі станом сторінки. Читання стану не має кидати: повідомлення важливіше за деталі."""
    async def safe(coro, default=None):
        try: return await coro
        except Exception as e: return f"<{type(e).__name__}>" if default is None else default
    cls = await safe(page.get_attribute("#dock", "class"))
    act = await safe(page.text_content("#action"))
    dis = await safe(page.is_disabled("#action"), "?")
    fb = await safe(page.text_content("#fbText"), "")
    act = (act or "").strip()
    tail = f"; відгук «{' '.join(fb.split())[:120]}»" if isinstance(fb, str) and fb.strip() else ""
    return (f"не зараховано: {where}; відповідь {given!r}; клас #dock «{cls}»; "
            f"#action «{act}»{' (неактивна)' if dis is True else ''}{tail}")


async def expect_credited(page, where, given, accept=("ok", "info")):
    """Кидає NotCredited з явним повідомленням, якщо після «Перевірити» на #dock немає класу зарахування."""
    cls = await page.get_attribute("#dock", "class")
    if not credited(cls, accept):
        raise NotCredited(await verdict_msg(page, where, given))
