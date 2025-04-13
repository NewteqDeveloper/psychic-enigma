import { applyDecorators, SetMetadata } from '@nestjs/common';

export const ALLOW_ANON_KEY = 'allow-anonymous';

export function AllowAnonymousGuard() {
  return applyDecorators(SetMetadata(ALLOW_ANON_KEY, true));
}
