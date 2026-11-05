import { INestApplication } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule, configureApp } from '../src/app';
import { createDb, requireEnv } from '../src/db/database';
import { migrate } from '../src/db/migrate';
import { createHash, createHmac, randomUUID } from 'crypto';
import { GOOGLE_VERIFIER, GoogleVerifier } from '../src/modules/identity';
// Адаптер напряму, поза публічним API модуля: тест сховища на справжньому Postgres (test/ — не код модулів).
import { PgLearnerStore } from '../src/modules/identity/learner.store';
import { APP_LOG, Metrics, RATE_LIMIT_STORAGE } from '../src/ops';
import { MemoryRateLimitStorage } from '../src/ops/rate-limit';

/** Фейк Google: id_token "sub@hd"; справжню перевірку підпису покриває google.verifier.spec.ts. */
const fakeGoogle: GoogleVerifier = {
  async verify(t) { const m = /^(\w+)@([\w.]*)$/.exec(t); return m ? { sub: m[1], hd: m[2] || undefined } : null; },
};
const bearer = (t: string) => ({ Authorization: `Bearer ${t}` });
/** Очікуване `lh` рахуємо незалежно від коду застосунку: HMAC-SHA-256(id, ключ), перші 16 hex. */
const hmac16 = (key: string, id: string) => createHmac('sha256', key).update(id).digest('hex').slice(0, 16);
const uniq = () => `s${Date.now()}${Math.floor(Math.random() * 1e6)}`;

// Потрібен справжній Postgres: DATABASE_URL обовʼязковий (без нього тест падає, а не пропускається).
describe('API (e2e, Postgres)', () => {
  let app: INestApplication;
  let api: ReturnType<typeof request>;
  const logged: { level: string; entry: Record<string, unknown> }[] = [];
  const captureLog = {
    log: (entry: Record<string, unknown>) => logged.push({ level: 'log', entry }),
    warn: (entry: Record<string, unknown>) => logged.push({ level: 'warn', entry }),
    error: (entry: Record<string, unknown>) => logged.push({ level: 'error', entry }),
  };
  const ADMIN = 'e2e-admin-token-0123456789abcdef0123';
  const LOG_KEY = 'e2e-log-hash-key-0123456789abcdef0123';
  const compileApp = () => Test.createTestingModule({ imports: [AppModule] })
    .overrideProvider(GOOGLE_VERIFIER).useValue(fakeGoogle)
    .overrideProvider(APP_LOG).useValue(captureLog).compile();

  beforeAll(async () => {
    const db = createDb(requireEnv('DATABASE_URL'));
    await migrate(db);
    await migrate(db); // повторний прогін міграцій — без змін і без помилок
    await db.destroy();
    process.env.GOOGLE_DOMAINS = 'school.ua';
    process.env.ADMIN_TOKEN = ADMIN;
    process.env.LOG_HASH_KEY = LOG_KEY;
    const moduleRef = await compileApp();
    app = configureApp(moduleRef.createNestApplication<NestExpressApplication>({ logger: ['error', 'warn'] }));
    await app.init();
    api = request(app.getHttpServer());
  });
  afterAll(() => app?.close());

  it('health без X-Powered-By', async () => {
    const r = await api.get('/health').expect(200, { ok: true });
    expect(r.headers['x-powered-by']).toBeUndefined();
  });

  it('прогрес без токена або з чужим токеном — 401', async () => {
    await api.get('/v1/progress').expect(401);
    await api.get('/v1/progress').set('Authorization', 'Bearer nope').expect(401);
  });

  it('учень → запис → читання → конфлікт → злиття', async () => {
    const { body: me } = await api.post('/v1/learners').expect(201);
    const auth = { Authorization: `Bearer ${me.token}` };

    await api.get('/v1/progress').set(auth).expect(200, { rev: 0, data: null });
    await api.put('/v1/progress').set(auth).send({ rev: 0, data: { name: 'Оля', xp: 10 } }).expect(200, { rev: 1, data: { xp: 10 } });
    await api.get('/v1/progress').set(auth).expect(200, { rev: 1, data: { xp: 10 } });

    const conflict = await api.put('/v1/progress').set(auth).send({ rev: 0, data: { xp: 99 } }).expect(409);
    expect(conflict.body).toEqual({ rev: 1, data: { xp: 10 } });

    await api.put('/v1/progress').set(auth).send({ rev: 1, data: { xp: 109 } }).expect(200, { rev: 2, data: { xp: 109 } });
  });

  it('паралельні записи з однаковим rev: рівно один успішний', async () => {
    const { body: me } = await api.post('/v1/learners').expect(201);
    const auth = { Authorization: `Bearer ${me.token}` };
    const codes = await Promise.all([1, 2, 3, 4, 5].map((xp) =>
      api.put('/v1/progress').set(auth).send({ rev: 0, data: { xp } }).then((r) => r.status)));
    expect(codes.filter((c) => c === 200)).toHaveLength(1);
    expect(codes.filter((c) => c === 409)).toHaveLength(4);
  });

  it('паралельні оновлення з однаковим rev > 0: рівно одне успішне', async () => {
    const { body: me } = await api.post('/v1/learners').expect(201);
    const auth = { Authorization: `Bearer ${me.token}` };
    await api.put('/v1/progress').set(auth).send({ rev: 0, data: { xp: 0 } }).expect(200);
    const codes = await Promise.all([1, 2, 3, 4, 5].map((xp) =>
      api.put('/v1/progress').set(auth).send({ rev: 1, data: { xp } }).then((r) => r.status)));
    expect(codes.sort()).toEqual([200, 409, 409, 409, 409]);
    await api.get('/v1/progress').set(auth).expect(200).then((r) => expect(r.body.rev).toBe(2));
  });

  it('учні ізольовані', async () => {
    const a = (await api.post('/v1/learners')).body;
    const b = (await api.post('/v1/learners')).body;
    await api.put('/v1/progress').set('Authorization', `Bearer ${a.token}`).send({ rev: 0, data: { xp: 1 } }).expect(200);
    await api.get('/v1/progress').set('Authorization', `Bearer ${b.token}`).expect(200, { rev: 0, data: null });
  });

  it('некоректне тіло — 400, а не 500', async () => {
    const { body: me } = await api.post('/v1/learners');
    const put = (body: object) => api.put('/v1/progress').set('Authorization', `Bearer ${me.token}`).send(body);
    await put({ rev: -1, data: {} }).expect(400);
    await put({ rev: 3000000000, data: {} }).expect(400);
    await put({ rev: 2147483647, data: {} }).expect(400);
    await put({ rev: 0, data: { s: 'a\u0000b' } }).expect(400);
    await put({ rev: 0, data: { s: 'x'.repeat(300 * 1024) } }).expect(400);
    await put({ rev: 0, data: { s: 'x'.repeat(600 * 1024) } }).expect(413);
    await put({ rev: 0, data: { s: '\\u0000' } }).expect(200);
  });

  it('глибока вкладеність data (100 000, ~200 КБ) — 400, а не 500', async () => {
    const { body: me } = await api.post('/v1/learners');
    const n = 100_000;
    const raw = `{"rev":0,"data":{"a":${'['.repeat(n)}${']'.repeat(n)}}}`;
    await api.put('/v1/progress').set('Authorization', `Bearer ${me.token}`).set('Content-Type', 'application/json').send(raw).expect(400);
    await api.get('/v1/progress').set('Authorization', `Bearer ${me.token}`).expect(200, { rev: 0, data: null });
  });

  describe('логи й лічильники', () => {
    const http = () => logged.filter((l) => l.entry.event === 'http').map((l) => l.entry);

    it('рядок на запит: маршрут-шаблон, статус, хеш учня; без токена й id учня', async () => {
      logged.length = 0;
      const me = (await api.post('/v1/learners').expect(201)).body;
      await api.put('/v1/progress').set(bearer(me.token)).send({ rev: 0, data: { xp: 1 } }).expect(200);
      await api.get(`/nope/${me.id}?token=${me.token}`).expect(404);
      expect(http()).toEqual([
        { event: 'http', method: 'POST', route: '/v1/learners', status: 201, ms: expect.any(Number) },
        { event: 'http', method: 'PUT', route: '/v1/progress', status: 200, ms: expect.any(Number), lh: hmac16(LOG_KEY, me.id) },
        { event: 'http', method: 'GET', route: null, status: 404, ms: expect.any(Number) },
      ]);
      const all = JSON.stringify(logged);
      expect(all).not.toContain(me.token);
      expect(all).not.toContain(me.id);
      expect(all).not.toContain(createHash('sha256').update(me.id).digest('hex').slice(0, 16)); // не голий SHA-256 (D-050 п. 5)
    });

    it('lh: той самий ключ — той самий lh для учня; інший ключ (інший процес) — інший lh', async () => {
      const me = (await api.post('/v1/learners').expect(201)).body;
      const other = (await api.post('/v1/learners').expect(201)).body;
      logged.length = 0;
      await api.get('/v1/progress').set(bearer(me.token)).expect(200);
      await api.get('/v1/progress').set(bearer(me.token)).expect(200);
      await api.get('/v1/progress').set(bearer(other.token)).expect(200);
      const [a, b, c] = http().map((e) => e.lh);
      expect(a).toBe(hmac16(LOG_KEY, me.id));
      expect(b).toBe(a);
      expect(c).toBe(hmac16(LOG_KEY, other.id));
      expect(c).not.toBe(a);

      const KEY2 = 'e2e-another-log-hash-key-0123456789abcdef';
      process.env.LOG_HASH_KEY = KEY2;
      const app2 = configureApp((await compileApp()).createNestApplication<NestExpressApplication>({ logger: ['error', 'warn'] }));
      try {
        await app2.init();
        logged.length = 0;
        await request(app2.getHttpServer()).get('/v1/progress').set(bearer(me.token)).expect(200);
        const [d] = http().map((e) => e.lh);
        expect(d).toBe(hmac16(KEY2, me.id));
        expect(d).not.toBe(a);
      } finally {
        process.env.LOG_HASH_KEY = LOG_KEY;
        await app2.close();
      }
    });

    it('production без LOG_HASH_KEY — застосунок не стартує', async () => {
      const saved = { key: process.env.LOG_HASH_KEY, env: process.env.NODE_ENV };
      delete process.env.LOG_HASH_KEY;
      process.env.NODE_ENV = 'production';
      try {
        await expect(compileApp()).rejects.toThrow(/LOG_HASH_KEY/);
      } finally {
        process.env.LOG_HASH_KEY = saved.key;
        if (saved.env === undefined) delete process.env.NODE_ENV; else process.env.NODE_ENV = saved.env;
      }
    });

    it('лічильники: доступ адміністратора лише з ADMIN_TOKEN', async () => {
      await api.get('/v1/admin/metrics').expect(401);
      await api.get('/v1/admin/metrics').set(bearer(`${ADMIN}x`)).expect(401);
      const { body } = await api.get('/v1/admin/metrics').set(bearer(ADMIN)).expect(200);
      expect(body.now.counts['POST /v1/learners 201']).toBeGreaterThanOrEqual(1);
      expect(body.now.counts['GET * 404']).toBeGreaterThanOrEqual(1);
      expect(body.rules.map((r: { signal: string }) => r.signal)).toContain('server_errors');
    });

    it('закриття вікна: сигнал адміністратору — warn з event: alert', async () => {
      const metrics = app.get(Metrics);
      for (let i = 0; i < 5; i++) metrics.http('GET', '/v1/me', 500);
      logged.length = 0;
      metrics.rollover();
      expect(logged).toContainEqual({ level: 'warn', entry: expect.objectContaining({ event: 'alert', signal: 'server_errors', count: 5 }) });
    });
  });

  describe('вхід і пристрої', () => {

    it('шкільний Google: той самий учень і прогрес на двох пристроях', async () => {
      const sub = uniq();
      const a = (await api.post('/v1/auth/google').send({ idToken: `${sub}@school.ua` }).expect(200)).body;
      await api.put('/v1/progress').set(bearer(a.token)).send({ rev: 0, data: { xp: 7 } }).expect(200);
      const b = (await api.post('/v1/auth/google').send({ idToken: `${sub}@school.ua` }).expect(200)).body;
      expect(b.id).toBe(a.id);
      await api.get('/v1/progress').set(bearer(b.token)).expect(200, { rev: 1, data: { xp: 7 } });
      await api.get('/v1/me').set(bearer(b.token)).expect(200, { id: a.id, school: 'school.ua' });
    });

    it('особистий акаунт, чужий домен, сміття — 401', async () => {
      for (const idToken of [`${uniq()}@`, `${uniq()}@other.ua`, '%%%', undefined])
        await api.post('/v1/auth/google').send({ idToken }).expect(401);
    });

    it('анонімний учень привʼязує шкільний акаунт — прогрес не губиться', async () => {
      const anon = (await api.post('/v1/learners').expect(201)).body;
      await api.put('/v1/progress').set(bearer(anon.token)).send({ rev: 0, data: { xp: 3 } }).expect(200);
      const sub = uniq();
      const g = (await api.post('/v1/auth/google').set(bearer(anon.token)).send({ idToken: `${sub}@school.ua`, link: true }).expect(200)).body;
      expect(g.id).toBe(anon.id);
      await api.get('/v1/progress').set(bearer(g.token)).expect(200, { rev: 1, data: { xp: 3 } });
    });

    it('без link: true анонімний учень цього ПК не привʼязується', async () => {
      const anon = (await api.post('/v1/learners')).body;
      const g = (await api.post('/v1/auth/google').set(bearer(anon.token)).send({ idToken: `${uniq()}@school.ua` }).expect(200)).body;
      expect(g.id).not.toBe(anon.id);
    });

    it('дві анонімні сесії одночасно привʼязують той самий акаунт — один учень', async () => {
      const idToken = `${uniq()}@school.ua`;
      const [a, b] = [(await api.post('/v1/learners')).body, (await api.post('/v1/learners')).body];
      const ids = await Promise.all([a, b].map((x) =>
        api.post('/v1/auth/google').set(bearer(x.token)).send({ idToken, link: true }).then((r) => r.body.id)));
      expect(ids[0]).toBe(ids[1]);
    });

    it('одночасний перший вхід тим самим акаунтом — один учень', async () => {
      const idToken = `${uniq()}@school.ua`;
      const ids = await Promise.all([1, 2, 3, 4].map(() => api.post('/v1/auth/google').send({ idToken }).then((r) => r.body.id)));
      expect(new Set(ids).size).toBe(1);
    });

    it('код привʼязки: новий пристрій бачить той самий прогрес, код одноразовий', async () => {
      const me = (await api.post('/v1/learners')).body;
      await api.put('/v1/progress').set(bearer(me.token)).send({ rev: 0, data: { xp: 5 } }).expect(200);
      await api.post('/v1/pairing').expect(401);
      const { code } = (await api.post('/v1/pairing').set(bearer(me.token)).expect(201)).body;
      const other = (await api.post('/v1/pairing/claim').send({ code: code.toLowerCase() }).expect(200)).body;
      expect(other.id).toBe(me.id);
      await api.get('/v1/progress').set(bearer(other.token)).expect(200, { rev: 1, data: { xp: 5 } });
      await api.post('/v1/pairing/claim').send({ code }).expect(401);
    });

    it('перебір кодів обмежено — 429', async () => {
      const codes: number[] = [];
      for (let i = 0; i < 12; i++) codes.push((await api.post('/v1/pairing/claim').send({ code: 'ZZZZZZ' })).status);
      expect(codes).toContain(429);
      // Ліміти рахує сховище з порту RATE_LIMIT_STORAGE (src/ops), а не приватне сховище ThrottlerModule.
      expect((app.get(RATE_LIMIT_STORAGE) as InstanceType<typeof MemoryRateLimitStorage>).storage.size).toBeGreaterThan(0);
    });
  });
});

describe('PgLearnerStore.savePairing (адаптер напряму)', () => {
  it('живий код з тим самим хешем — false, а не 500 (UNIQUE)', async () => {
    const db = createDb(requireEnv('DATABASE_URL'));
    try {
      const store = new PgLearnerStore(db);
      const [a, b] = [randomUUID(), randomUUID()];
      await store.create(a);
      await store.create(b);
      const h = `e2e-${randomUUID()}`;
      const soon = new Date(Date.now() + 60_000);
      await expect(store.savePairing(h, a, soon)).resolves.toBe(true);
      await expect(store.savePairing(h, b, soon)).resolves.toBe(false);
      await expect(store.claimPairing(h)).resolves.toBe(a);
      await store.savePairing(h, a, new Date(Date.now() - 1000)); // прострочений — прибирається наступним записом
      await expect(store.savePairing(h, b, soon)).resolves.toBe(true);
      await expect(store.claimPairing(h)).resolves.toBe(b);
    } finally {
      await db.destroy();
    }
  });
});

describe('міграція identity 002 зберігає старі токени', () => {
  it('учень зі схеми 001 автентифікується після 002', async () => {
    const url = new URL(requireEnv('DATABASE_URL'));
    const admin = createDb(url.toString());
    const name = `slid_mig_${Date.now()}`;
    const { sql } = await import('kysely');
    await sql.raw(`create database ${name}`).execute(admin);
    url.pathname = `/${name}`;
    const db = createDb(url.toString());
    try {
      const { Migrator } = await import('kysely');
      const { identityMigrations } = await import('../src/modules/identity');
      const only001 = { '001-learners': identityMigrations['001-learners'] };
      await new Migrator({ db, migrationTableSchema: 'identity', provider: { getMigrations: async () => only001 } }).migrateToLatest();
      await sql`insert into identity.learners (id, token_hash) values ('00000000-0000-0000-0000-000000000001', 'h1')`.execute(db);
      await migrate(db);
      const row = await db.withSchema('identity').selectFrom('tokens').select('learner_id').where('token_hash', '=', 'h1').executeTakeFirst();
      expect(row?.learner_id).toBe('00000000-0000-0000-0000-000000000001');
    } finally {
      await db.destroy();
      await sql.raw(`drop database ${name}`).execute(admin);
      await admin.destroy();
    }
  });
});
