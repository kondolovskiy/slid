import { EventEmitter } from 'events';
import { httpLog, learnerHash, LOG_FIELDS } from './log';
import { Metrics } from './metrics';

const fakeLog = () => ({ log: jest.fn(), warn: jest.fn(), error: jest.fn() });

describe('learnerHash', () => {
  it('стабільний короткий хеш, не сам id', () => {
    const id = '6f1c2a9e-0d3b-4c55-9a1e-3b7d2f8c9e10';
    expect(learnerHash(id)).toMatch(/^[0-9a-f]{16}$/);
    expect(learnerHash(id)).toBe(learnerHash(id));
    expect(learnerHash(id)).not.toContain(id.slice(0, 8));
    expect(learnerHash('інший')).not.toBe(learnerHash(id));
  });
});

describe('httpLog', () => {
  const run = (req: object, status: number) => {
    const log = fakeLog();
    const metrics = new Metrics(fakeLog());
    const res = Object.assign(new EventEmitter(), { statusCode: status });
    const next = jest.fn();
    httpLog(metrics, log)(req as never, res as never, next);
    expect(next).toHaveBeenCalled();
    res.emit('finish');
    return { entry: log.log.mock.calls[0][0], context: log.log.mock.calls[0][1], metrics };
  };

  it('один JSON-рядок на запит: метод, маршрут-шаблон, статус, затримка, хеш учня; без токена, IP, шляху з query', () => {
    const token = 'secret-token-value';
    const learnerId = '6f1c2a9e-0d3b-4c55-9a1e-3b7d2f8c9e10';
    const { entry, context, metrics } = run({
      method: 'PUT', url: '/v1/progress?x=1', originalUrl: '/v1/progress?x=1', ip: '10.0.0.7',
      headers: { authorization: `Bearer ${token}`, 'user-agent': 'UA' }, route: { path: '/v1/progress' }, learnerId,
    }, 200);
    expect(context).toBe('http');
    expect(entry).toEqual({ event: 'http', method: 'PUT', route: '/v1/progress', status: 200, ms: expect.any(Number), lh: learnerHash(learnerId) });
    for (const k of Object.keys(entry)) expect(LOG_FIELDS).toContain(k);
    const line = JSON.stringify(entry);
    for (const leak of [token, learnerId, '10.0.0.7', 'UA', 'x=1']) expect(line).not.toContain(leak);
    expect(metrics.snapshot().counts['PUT /v1/progress 200']).toBe(1);
  });

  it('незнайдений маршрут — route null (сирий шлях не пишемо), без lh', () => {
    const { entry, metrics } = run({ method: 'GET', url: '/wp-admin/?u=me@x.ua', headers: {} }, 404);
    expect(entry).toEqual({ event: 'http', method: 'GET', route: null, status: 404, ms: expect.any(Number) });
    expect(metrics.snapshot().counts['GET * 404']).toBe(1);
  });
});
