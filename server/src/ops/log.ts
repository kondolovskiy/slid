import { ConsoleLogger, LoggerService, LogLevel } from '@nestjs/common';
import { createHash } from 'crypto';
import { IncomingMessage, ServerResponse } from 'http';
import { Metrics } from './metrics';

/**
 * Структуровані логи: один JSON-рядок на подію (stdout; Railway їх збирає й фільтрує).
 * Без персональних даних і секретів: ні токенів, ні заголовків, ні IP, ні тіла, ні сирого шляху з query, ні `learner_id` —
 * лише його хеш `lh` (docs/design/ai-solution-check.md §3.6). Нове поле — лише з цього переліку; поле з ПД — за рішенням людини (AGENTS.md §4.12).
 */
export const LOG_FIELDS = ['event', 'method', 'route', 'status', 'ms', 'lh', 'from', 'to', 'counts', 'signal', 'count', 'of', 'share'];

export const jsonLogger = (logLevels: LogLevel[]) => new ConsoleLogger({ json: true, logLevels });

/** Короткий SHA-256 від id учня: звʼязує рядки одного учня в лозі, але сам id з логу не відновити (id — випадковий UUID). */
export const learnerHash = (id: string) => createHash('sha256').update(id).digest('hex').slice(0, 16);

type Req = IncomingMessage & { route?: { path?: string }; learnerId?: string };

/** Middleware: після відповіді — лічильник у Metrics і рядок `event: "http"`. */
export const httpLog = (metrics: Metrics, log: Pick<LoggerService, 'log'>) =>
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
