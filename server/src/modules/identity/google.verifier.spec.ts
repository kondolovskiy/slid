import { ServiceUnavailableException } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';
import { GoogleAuthVerifier } from './google.verifier';

describe('GoogleAuthVerifier', () => {
  const client = (impl: () => unknown) => ({ verifyIdToken: jest.fn(impl) }) as unknown as OAuth2Client;

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

  it('порожній токен — null без звернення до Google', async () => {
    const c = client(async () => ({}));
    await expect(new GoogleAuthVerifier('cid', c).verify('')).resolves.toBeNull();
    expect(c.verifyIdToken).not.toHaveBeenCalled();
  });
});
