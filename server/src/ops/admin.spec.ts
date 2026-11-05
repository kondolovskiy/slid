import { adminAccess } from './admin';

describe('adminAccess', () => {
  const token = 'a'.repeat(32);
  it('без ADMIN_TOKEN або з коротким (< 32) — ендпоінт вимкнено', () => {
    expect(adminAccess(`Bearer ${token}`, undefined)).toBe('disabled');
    expect(adminAccess('Bearer short', 'short')).toBe('disabled');
  });
  it('правильний Bearer — ok; інший, порожній, без Bearer — denied', () => {
    expect(adminAccess(`Bearer ${token}`, token)).toBe('ok');
    expect(adminAccess(`Bearer ${token}b`, token)).toBe('denied');
    expect(adminAccess(undefined, token)).toBe('denied');
    expect(adminAccess(token, token)).toBe('denied');
  });
});
