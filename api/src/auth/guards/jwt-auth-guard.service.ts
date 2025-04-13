import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ALLOW_ANON_KEY } from '../decos/anon.deco';
import { ALLOW_SECRET_AUTH_KEY } from '../decos/secret.deco';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { JwtModel } from '../../models/auth/jwt.model';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (this.canShortCircuit(context)) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = this.getBearerToken(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync<JwtModel>(token, {
        secret: process.env.JWT_SECRET,
      });
      console.log(payload.somethingElse);
      // attach all the user information to the context here
    } catch {
      throw new UnauthorizedException();
    }

    return true;
    //return super.canActivate(context);
  }

  private getBearerToken(request: Request): string {
    if (!request.headers || !request.headers.authorization) {
      throw new UnauthorizedException();
    }

    const bearerToken = request.headers.authorization.match(/^Bearer (.+?)$/);

    if (!bearerToken) {
      throw new UnauthorizedException();
    }

    return bearerToken[1];
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
