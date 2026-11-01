import { INestApplication } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule, configureApp } from '../src/app';
import { createDb, requireEnv } from '../src/db/database';
import { migrate } from '../src/db/migrate';
import { GOOGLE_VERIFIER, GoogleVerifier } from '../src/modules/identity';

/** Фейк Google: id_token "sub@hd"; справжню перевірку підпису покриває google.verifier.spec.ts. */
const fakeGoogle: GoogleVerifier = {
  async verify(t) { const m = /^(\w+)@([\w.]*)$/.exec(t); return m ? { sub: m[1], hd: m[2] || undefined } : null; },
};
const uniq = () => `s${Date.now()}${Math.floor(Math.random() * 1e6)}`;

// Потрібен справжній Postgres: DATABASE_URL обовʼязковий (без нього тест падає, а не пропускається).
describe('API (e2e, Postgres)', () => {
  let app: INestApplication;
  let api: ReturnType<typeof request>;

  beforeAll(async () => {
    const db = createDb(requireEnv('DATABASE_URL'));
    await migrate(db);
    await migrate(db); // повторний прогін міграцій — без змін і без помилок
    await db.destroy();
    process.env.GOOGLE_DOMAINS = 'school.ua';
    const moduleRef = await Test.createTestingModule({ imports: [AppModule] })
      .overrideProvider(GOOGLE_VERIFIER).useValue(fakeGoogle).compile();
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

  describe('вхід і пристрої', () => {
    const bearer = (t: string) => ({ Authorization: `Bearer ${t}` });

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
    });
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
