import { CanActivate, createParamDecorator, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { IDENTITY, IdentityPort } from './identity.port';

/** Пускає запит із `Authorization: Bearer <token>` і кладе id учня в request.learnerId. */
@Injectable()
export class LearnerGuard implements CanActivate {
  constructor(@Inject(IDENTITY) private readonly identity: IdentityPort) {}
  async canActivate(ctx: ExecutionContext) {
    const req = ctx.switchToHttp().getRequest();
    req.learnerId = await this.identity.authenticate(bearer(req.headers.authorization));
    if (!req.learnerId) throw new UnauthorizedException();
    return true;
  }
}

export const LearnerId = createParamDecorator((_: unknown, ctx: ExecutionContext): string =>
  ctx.switchToHttp().getRequest().learnerId);

export const bearer = (header: string | undefined) => /^Bearer (.+)$/.exec(header ?? '')?.[1];
