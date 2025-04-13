import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';
import { ALLOW_ANON_KEY } from '../decos/anon.deco';
import {ALLOW_SECRET_AUTH_KEY} from "../decos/secret.deco";

@Injectable()
export class JwtGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return this.canShortCircuit(context) || super.canActivate(context);
  }

  private canShortCircuit(context: ExecutionContext): boolean {
    if (this.hasAllowAnon(context)) {
      return true;
    } else return this.hasSecretGuard(context);
  }

  /*
              if ture, will skip jwt auth, because we're using secrets to auth
               */
  private hasSecretGuard(context: ExecutionContext): boolean {
    return this.reflector.getAllAndOverride<boolean>(ALLOW_SECRET_AUTH_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
  }

  /*
          For this, if we allow anon - like when signing in, we completely skip all auth
           */
  private hasAllowAnon(context: ExecutionContext): boolean {
    return this.reflector.getAllAndOverride<boolean>(ALLOW_ANON_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
  }
}
