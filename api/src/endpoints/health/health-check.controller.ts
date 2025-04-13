import { AutoController } from '@decos';
import { Get } from '@nestjs/common';
import { AllowAnonymousGuard, UserProvider } from '@auth';
import { UserRequest } from '../../models/auth/user.request';

@AutoController(HealthCheckController)
export class HealthCheckController {
  @AllowAnonymousGuard()
  @Get('ping')
  ping() {
    return {
      ping: 'pong',
    };
  }

  @Get('pong')
  pong(@UserProvider() context: UserRequest) {
    return {
      pong: context.mxid,
    };
  }
}
