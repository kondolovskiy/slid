import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { createApp } from '../src/app';
import { createDb, requireEnv } from '../src/db/database';
import { migrate } from '../src/db/migrate';

// Потрібен справжній Postgres: DATABASE_URL обовʼязковий (без нього тест падає, а не пропускається).
describe('API (e2e, Postgres)', () => {
  let app: INestApplication;
  let api: ReturnType<typeof request>;

  beforeAll(async () => {
    const db = createDb(requireEnv('DATABASE_URL'));
    await migrate(db);
    await migrate(db); // повторний прогін міграцій — без змін і без помилок
    await db.destroy();
    app = await createApp();
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
});
