import { AutoController } from '@decos';
import { AllowAnonymousGuard } from '@auth';
import { AuthService } from '../services/auth.service';
import { Get } from '@nestjs/common';

@AllowAnonymousGuard()
@AutoController(AuthController)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  ping() {
    return {
      ping: new Date().getTime(),
      message: 'The lights are on 💡',
    };
  }
}
