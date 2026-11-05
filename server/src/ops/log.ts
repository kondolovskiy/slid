import { ConsoleLogger, LoggerService, LogLevel } from '@nestjs/common';
import { createHmac, randomBytes } from 'crypto';
import { IncomingMessage, ServerResponse } from 'http';
import { Metrics } from './metrics';

/**
 * Структуровані логи: один JSON-рядок на подію (stdout; Railway їх збирає й фільтрує).
 * Без персональних даних і секретів: ні токенів, ні заголовків, ні IP, ні тіла, ні сирого шляху з query, ні `learner_id` —
 * лише його HMAC `lh` (docs/design/ai-solution-check.md §3.6, D-050 п. 5). Нове поле — лише з цього переліку; поле з ПД — за рішенням людини (AGENTS.md §4.12).
 */
export const LOG_FIELDS = ['event', 'method', 'route', 'status', 'ms', 'lh', 'from', 'to', 'counts', 'signal', 'count', 'of', 'share'];

export const jsonLogger = (logLevels: LogLevel[]) => new ConsoleLogger({ json: true, logLevels });

/** Функція id учня → `lh`; провайдер `OpsModule` (ключ — `LOG_HASH_KEY`). */
export const LEARNER_HASH = Symbol('LearnerHash');
export type LearnerHash = (id: string) => string;

/**
 * Короткий HMAC-SHA-256 від id учня з серверним ключем: звʼязує рядки одного учня в лозі, але сам id з логу не відновити,
 * а маючи id (дамп БД, пристрій), без ключа не знайти рядків цього учня — доступ до логів відділено від доступу до БД.
 */
export const learnerHasher = (key: string): LearnerHash =>
  (id) => createHmac('sha256', key).update(id).digest('hex').slice(0, 16);

export const LOG_HASH_KEY_MIN_BYTES = 32;

/**
 * Ключ для `lh`. Заданий — щонайменше 32 байти (UTF-8), інакше відмова старту.
 * Не заданий: у production (`NODE_ENV=production`, так запускає `npm start`) — відмова старту;
 * поза production (тести, розробка) — випадковий ключ процесу з попередженням (`lh` не збігаються між перезапусками).
 */
export function logHashKey(env: Record<string, string | undefined>, warn: (msg: string) => void): string {
  const key = env.LOG_HASH_KEY;
  if (key) {
    if (Buffer.byteLength(key) < LOG_HASH_KEY_MIN_BYTES) throw new Error(`LOG_HASH_KEY коротший за ${LOG_HASH_KEY_MIN_BYTES} байти`);
    return key;
  }
  if (env.NODE_ENV === 'production') throw new Error('Не задано змінну середовища LOG_HASH_KEY (≥ 32 байти, напр. openssl rand -hex 32)');
  warn('LOG_HASH_KEY не задано: згенеровано випадковий ключ процесу, lh не збігатимуться між перезапусками');
  return randomBytes(32).toString('hex');
}

type Req = IncomingMessage & { route?: { path?: string }; learnerId?: string };

/** Middleware: після відповіді — лічильник у Metrics і рядок `event: "http"`. */
export const httpLog = (metrics: Metrics, log: Pick<LoggerService, 'log'>, learnerHash: LearnerHash) =>
  (req: Req, res: ServerResponse, next: () => void) => {
    const t0 = process.hrtime.bigint();
    res.on('finish', () => {
      const route = typeof req.route?.path === 'string' ? req.route.path : null;
      const method = req.method ?? '?';
      metrics.http(method, route, res.statusCode);
      log.log({
        event: 'http', method, route, status: res.statusCode,
        ms: Math.round(Number(process.hrtime.bigint() - t0) / 1e5) / 10, // мс, до 0,1
        ...(req.learnerId ? { lh: learnerHash(req.learnerId) } : {}),
      }, 'http');
    });
    next();
  };
