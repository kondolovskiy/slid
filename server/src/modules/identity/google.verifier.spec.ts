import { ServiceUnavailableException } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';
import { GoogleAuthVerifier } from './google.verifier';

describe('GoogleAuthVerifier', () => {
  const client = (impl: () => unknown, certs: () => Promise<unknown> = async () => ({})) =>
    ({ verifyIdToken: jest.fn(impl), getFederatedSignonCertsAsync: jest.fn(certs) }) as unknown as OAuth2Client;

  it('без GOOGLE_CLIENT_ID — 503 (вхід не налаштовано)', async () => {
    await expect(new GoogleAuthVerifier(undefined).verify('t')).rejects.toThrow(ServiceUnavailableException);
  });

  it('перевіряє aud = client id і повертає лише sub і hd', async () => {
    const c = client(async () => ({ getPayload: () => ({ sub: '42', hd: 'school.ua', email: 'a@school.ua', name: 'Оля' }) }));
    await expect(new GoogleAuthVerifier('cid', c).verify('tok')).resolves.toEqual({ sub: '42', hd: 'school.ua' });
    expect(c.verifyIdToken).toHaveBeenCalledWith({ idToken: 'tok', audience: 'cid' });
  });

  it('невалідний підпис/строк/aud — null', async () => {
    const c = client(async () => { throw new Error('bad'); });
    await expect(new GoogleAuthVerifier('cid', c).verify('tok')).resolves.toBeNull();
  });

  it('збій мережі до Google (сертифікати) — 503, а не «невалідний токен»', async () => {
    const c = client(async () => ({}), async () => { throw new Error('ECONNRESET'); });
    await expect(new GoogleAuthVerifier('cid', c).verify('tok')).rejects.toThrow(ServiceUnavailableException);
    expect(c.verifyIdToken).not.toHaveBeenCalled();
  });

  it('справжній OAuth2Client без мережі — 503', async () => {
    const prev = process.env.HTTPS_PROXY;
    process.env.HTTPS_PROXY = process.env.https_proxy = 'http://127.0.0.1:9'; // закритий порт
    try {
      await expect(new GoogleAuthVerifier('cid', new OAuth2Client()).verify('a.b.c')).rejects.toThrow(ServiceUnavailableException);
    } finally {
      process.env.HTTPS_PROXY = process.env.https_proxy = prev;
      if (prev === undefined) { delete process.env.HTTPS_PROXY; delete process.env.https_proxy; }
    }
  });

  it('порожній токен — null без звернення до Google', async () => {
    const c = client(async () => ({}));
    await expect(new GoogleAuthVerifier('cid', c).verify('')).resolves.toBeNull();
    expect(c.verifyIdToken).not.toHaveBeenCalled();
  });
});

describe('GoogleAuthVerifier на справжньому OAuth2Client (локальний ключ, підмінено лише сертифікати)', () => {
  const { generateKeyPairSync, createSign } = require('crypto') as typeof import('crypto');
  const key = generateKeyPairSync('rsa', { modulusLength: 2048 });
  const other = generateKeyPairSync('rsa', { modulusLength: 2048 });
  const b64 = (o: object) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const now = () => Math.floor(Date.now() / 1000);
  const jwt = (claims: object, signer = key.privateKey) => {
    const head = `${b64({ alg: 'RS256', kid: 'k1', typ: 'JWT' })}.${b64(claims)}`;
    return `${head}.${createSign('RSA-SHA256').update(head).sign(signer).toString('base64url')}`;
  };
  const ok = { iss: 'https://accounts.google.com', aud: 'cid', sub: '42', hd: 'school.ua', iat: now(), exp: now() + 600 };
  const verifier = () => {
    const c = new OAuth2Client();
    const pem = key.publicKey.export({ type: 'spki', format: 'pem' }).toString();
    jest.spyOn(c, 'getFederatedSignonCertsAsync').mockResolvedValue({ certs: { k1: pem } } as never);
    return new GoogleAuthVerifier('cid', c);
  };

  it('валідний токен → sub і hd', async () => {
    await expect(verifier().verify(jwt(ok))).resolves.toEqual({ sub: '42', hd: 'school.ua' });
  });

  it.each([
    ['чужий aud', { ...ok, aud: 'evil' }],
    ['чужий iss', { ...ok, iss: 'https://evil.com' }],
    ['прострочений', { ...ok, iat: now() - 7200, exp: now() - 3600 }],
  ])('відхиляє: %s', async (_, claims) => {
    await expect(verifier().verify(jwt(claims))).resolves.toBeNull();
  });

  it('відхиляє чужий підпис і alg:none', async () => {
    await expect(verifier().verify(jwt(ok, other.privateKey))).resolves.toBeNull();
    await expect(verifier().verify(`${b64({ alg: 'none', kid: 'k1' })}.${b64(ok)}.`)).resolves.toBeNull();
  });
});
