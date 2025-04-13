import { AutoController } from '@decos';
import { AllowAnonymousGuard } from '@auth';
import { AuthService } from '../services/auth.service';
import { Body, Get, Post } from '@nestjs/common';
import { LoginDto } from '@shared-ts/dto/user.dto';

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

  @Post()
  signIn(@Body() payload: LoginDto) {
    return this.authService.login(payload);
  }
}
