import { evaluate, Metrics, SignalRule } from './metrics';

const fakeLog = () => ({ log: jest.fn(), warn: jest.fn(), error: jest.fn() });

describe('Metrics', () => {
  it('рахує відповіді HTTP: усього, 5xx, 429, маршрут і маршрут + статус', () => {
    const m = new Metrics(fakeLog());
    m.http('PUT', '/v1/progress', 200);
    m.http('PUT', '/v1/progress', 409);
    m.http('POST', '/v1/pairing/claim', 429);
    m.http('GET', '/v1/me', 503);
    m.http('GET', null, 404);
    expect(m.snapshot().counts).toEqual({
      http: 5, 'http.429': 1, 'http.5xx': 1,
      'PUT /v1/progress': 2, 'PUT /v1/progress 200': 1, 'PUT /v1/progress 409': 1,
      'POST /v1/pairing/claim': 1, 'POST /v1/pairing/claim 429': 1,
      'GET /v1/me': 1, 'GET /v1/me 503': 1, 'GET *': 1, 'GET * 404': 1,
    });
  });

  it('довільні лічильники (напр. 422 content_unknown для solution-check)', () => {
    const m = new Metrics(fakeLog());
    m.inc('solcheck.content_unknown');
    m.inc('solcheck.content_unknown', 2);
    expect(m.snapshot().counts).toEqual({ 'solcheck.content_unknown': 3 });
  });

  it('закриття вікна: підсумок у лог (log), сигнали (warn), нове вікно з нуля; попереднє лишається доступним', () => {
    let now = 1_000;
    const log = fakeLog();
    const m = new Metrics(log, [{ signal: 'server_errors', count: 'http.5xx', of: 'http', share: 0.01, min: 1 }], () => now);
    m.http('GET', '/v1/me', 500);
    m.http('GET', '/v1/me', 200);
    now = 5_000;
    expect(m.rollover()).toEqual([{ signal: 'server_errors', count: 1, of: 2, share: 0.5 }]);
    expect(log.log).toHaveBeenCalledWith(expect.objectContaining({ event: 'metrics', from: 1_000, to: 5_000, counts: expect.objectContaining({ http: 2 }) }), 'metrics');
    expect(log.warn).toHaveBeenCalledWith({ event: 'alert', signal: 'server_errors', count: 1, of: 2, share: 0.5 }, 'metrics');
    expect(m.snapshot()).toEqual({ from: 5_000, to: 5_000, counts: {} });
    expect(m.last?.counts.http).toBe(2);
  });

  it('tick закриває вікно лише після його тривалості', () => {
    let now = 0;
    const m = new Metrics(fakeLog(), [], () => now, 1_000);
    m.inc('x');
    now = 999; m.tick();
    expect(m.snapshot().counts).toEqual({ x: 1 });
    now = 1_000; m.tick();
    expect(m.snapshot().counts).toEqual({});
  });
});

describe('evaluate (правила сигналів)', () => {
  const share: SignalRule = { signal: 's', count: 'bad', of: 'all', share: 0.01, min: 3 };
  const abs: SignalRule = { signal: 'a', count: 'bad', min: 3 };

  it('частка: спрацьовує, коли частка більша за поріг і подій не менше min', () => {
    expect(evaluate([share], { bad: 3, all: 100 })).toEqual([{ signal: 's', count: 3, of: 100, share: 0.03 }]);
    expect(evaluate([share], { bad: 2, all: 10 })).toEqual([]); // мало подій — шум
    expect(evaluate([share], { bad: 3, all: 300 })).toEqual([]); // рівно 1 % — ще ні
    expect(evaluate([share], { bad: 3 })).toEqual([{ signal: 's', count: 3, of: 0, share: 1 }]);
  });

  it('абсолютний поріг без частки', () => {
    expect(evaluate([abs], { bad: 3 })).toEqual([{ signal: 'a', count: 3 }]);
    expect(evaluate([abs], { bad: 2 })).toEqual([]);
    expect(evaluate([abs], {})).toEqual([]);
  });
});
