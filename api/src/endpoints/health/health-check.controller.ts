import { AutoController } from '@decos';
import { Get } from '@nestjs/common';
import { AllowAnonymousGuard, UserProvider } from '@auth';

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
  pong(@UserProvider() context: any) {
    console.log('in controller, context', context);
    return {
      pong: 'getting your info',
    };
  }
}
