import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

export class SecretGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const secretHeader = request.headers['x-secret'];
    if (!secretHeader || secretHeader !== process.env.SPECIAL_ADMIN_SECRET) {
      throw new UnauthorizedException(
        'The police have been notified 🚔 please stay where you are, they will be there shortly 🚨',
      );
    }
    return true;
  }
}
