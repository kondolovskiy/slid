import { Test } from '@nestjs/testing';
import { createHash, createHmac } from 'crypto';
import { EventEmitter } from 'events';
import { OpsModule } from '.';
import { httpLog, LEARNER_HASH, LearnerHash, learnerHasher, LOG_FIELDS, logHashKey } from './log';
import { Metrics } from './metrics';

const fakeLog = () => ({ log: jest.fn(), warn: jest.fn(), error: jest.fn() });

const KEY = 'k'.repeat(32);
const learnerHash = learnerHasher(KEY);

describe('learnerHasher (HMAC-SHA-256 із серверним ключем)', () => {
  const id = '6f1c2a9e-0d3b-4c55-9a1e-3b7d2f8c9e10';
  it('стабільний короткий хеш, не сам id', () => {
    expect(learnerHash(id)).toMatch(/^[0-9a-f]{16}$/);
    expect(learnerHash(id)).toBe(learnerHash(id));
    expect(learnerHash(id)).not.toContain(id.slice(0, 8));
    expect(learnerHash('інший')).not.toBe(learnerHash(id));
  });
  it('це HMAC з ключем, а не голий SHA-256: інший ключ — інший lh', () => {
    expect(learnerHash(id)).toBe(createHmac('sha256', KEY).update(id).digest('hex').slice(0, 16));
    expect(learnerHash(id)).not.toBe(createHash('sha256').update(id).digest('hex').slice(0, 16));
    expect(learnerHasher('m'.repeat(32))(id)).not.toBe(learnerHash(id));
  });
});

describe('logHashKey (LOG_HASH_KEY)', () => {
  it('заданий ключ ≥ 32 байти — береться як є, без попередження', () => {
    const warn = jest.fn();
    expect(logHashKey({ LOG_HASH_KEY: KEY, NODE_ENV: 'production' }, warn)).toBe(KEY);
    expect(warn).not.toHaveBeenCalled();
  });
  it('коротший за 32 байти — відмова (і в production, і в dev)', () => {
    expect(() => logHashKey({ LOG_HASH_KEY: 'k'.repeat(31) }, jest.fn())).toThrow(/LOG_HASH_KEY/);
    expect(() => logHashKey({ LOG_HASH_KEY: 'k'.repeat(31), NODE_ENV: 'production' }, jest.fn())).toThrow(/LOG_HASH_KEY/);
    expect(logHashKey({ LOG_HASH_KEY: 'ї'.repeat(16) }, jest.fn())).toBe('ї'.repeat(16)); // 32 байти UTF-8
  });
  it('без ключа в production — відмова старту', () => {
    expect(() => logHashKey({ NODE_ENV: 'production' }, jest.fn())).toThrow(/LOG_HASH_KEY/);
    expect(() => logHashKey({ NODE_ENV: 'production', LOG_HASH_KEY: '' }, jest.fn())).toThrow(/LOG_HASH_KEY/);
  });
  it('без ключа поза production — випадковий ключ процесу і попередження', () => {
    const warn = jest.fn();
    const a = logHashKey({}, warn);
    expect(Buffer.byteLength(a)).toBeGreaterThanOrEqual(32);
    expect(a).not.toBe(logHashKey({}, jest.fn()));
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('LOG_HASH_KEY'));
  });
});

describe('OpsModule: провайдер LEARNER_HASH', () => {
  const saved = { ...process.env };
  afterEach(() => { process.env = { ...saved }; });
  it('бере LOG_HASH_KEY із середовища', async () => {
    process.env.LOG_HASH_KEY = KEY;
    const ref = await Test.createTestingModule({ imports: [OpsModule] }).compile();
    expect(ref.get<LearnerHash>(LEARNER_HASH)('x')).toBe(learnerHash('x'));
  });
  it('production без LOG_HASH_KEY — модуль не стартує', async () => {
    delete process.env.LOG_HASH_KEY;
    process.env.NODE_ENV = 'production';
    await expect(Test.createTestingModule({ imports: [OpsModule] }).compile()).rejects.toThrow(/LOG_HASH_KEY/);
  });
});

describe('httpLog', () => {
  const run = (req: object, status: number) => {
    const log = fakeLog();
    const metrics = new Metrics(fakeLog());
    const res = Object.assign(new EventEmitter(), { statusCode: status });
    const next = jest.fn();
    httpLog(metrics, log, learnerHash)(req as never, res as never, next);
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
