import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';
import { ALLOW_SECRET_AUTH_KEY } from '../decos/secret-guard.deco';

@Injectable()
export class JwtGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isSecretGuard = this.reflector.getAllAndOverride<boolean>(
      ALLOW_SECRET_AUTH_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (isSecretGuard) {
      return true; // skip jwt auth, because we're using secrets
    }

    return super.canActivate(context);
  }
}
