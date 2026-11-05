import { LoggerService } from '@nestjs/common';

export type Counts = Record<string, number>;
export interface Snapshot { from: number; to: number; counts: Counts }

/**
 * Правило сигналу адміністратору за вікно: `count` ≥ `min` і, якщо задано `of`, частка `count / of` > `share`.
 * `min` відсікає шум (одна 500-ка з двох запитів о 3:00 — ще не сигнал).
 */
export interface SignalRule { signal: string; count: string; of?: string; share?: number; min: number }
export interface Alert { signal: string; count: number; of?: number; share?: number }

/** Сигнали зараз (вікно — година). solution-check додасть свій: частка 422 content_unknown (ai-solution-check.md §3.6). */
export const RULES: SignalRule[] = [
  { signal: 'server_errors', count: 'http.5xx', of: 'http', share: 0.01, min: 5 },
  { signal: 'throttled', count: 'http.429', of: 'http', share: 0.05, min: 20 },
  // Розподілений перебір кодів привʼязки (ліміт на IP його не бачить; docs/BACKEND.md «Відкриті питання»).
  { signal: 'pairing_claim_failures', count: 'POST /v1/pairing/claim 401', min: 100 },
  { signal: 'google_unavailable', count: 'POST /v1/auth/google 503', min: 5 },
];

export const HOUR = 60 * 60 * 1000;

export function evaluate(rules: SignalRule[], counts: Counts): Alert[] {
  return rules.flatMap(({ signal, count, of, share = 0, min }) => {
    const n = counts[count] ?? 0;
    if (n < min) return [];
    if (!of) return [{ signal, count: n }];
    const total = counts[of] ?? 0;
    const s = total ? n / total : 1;
    return s > share ? [{ signal, count: n, of: total, share: Math.round(s * 1e4) / 1e4 }] : [];
  });
}

/**
 * Лічильники в памʼяті процесу за фіксоване вікно (година). Закриття вікна — підсумок у лог (рівень log)
 * і сигнали за правилами (рівень warn, `event: "alert"`): це і є сповіщення адміністратору (docs/BACKEND.md «Спостереження»).
 * Кілька реплік — у кожної свої лічильники й рядки в лозі; підсумовує той, хто читає логи.
 */
export class Metrics {
  private counts: Counts = {};
  private from: number;
  last: Snapshot | null = null;

  constructor(
    private readonly log: Pick<LoggerService, 'log' | 'warn'>,
    readonly rules: SignalRule[] = RULES,
    private readonly now: () => number = Date.now,
    private readonly windowMs = HOUR,
  ) {
    this.from = now();
  }

  inc(name: string, by = 1) { this.counts[name] = (this.counts[name] ?? 0) + by; }

  /** Відповідь HTTP. route — шаблон маршруту (`/v1/progress`), null — маршрут не знайдено (сканери, 404). */
  http(method: string, route: string | null, status: number) {
    const r = `${method} ${route ?? '*'}`;
    this.inc('http');
    if (status >= 500) this.inc('http.5xx');
    if (status === 429) this.inc('http.429');
    this.inc(r);
    this.inc(`${r} ${status}`);
  }

  snapshot(): Snapshot { return { from: this.from, to: this.now(), counts: { ...this.counts } }; }

  rollover(): Alert[] {
    const snap = this.snapshot();
    const alerts = evaluate(this.rules, snap.counts);
    this.log.log({ event: 'metrics', ...snap }, 'metrics');
    for (const a of alerts) this.log.warn({ event: 'alert', ...a }, 'metrics');
    this.last = snap;
    this.counts = {};
    this.from = snap.to;
    return alerts;
  }

  tick() { if (this.now() - this.from >= this.windowMs) this.rollover(); }
}
