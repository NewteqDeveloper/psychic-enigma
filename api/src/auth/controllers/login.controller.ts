import { Body, Controller, Get, Post } from '@nestjs/common';
import { AllowAnonymousGuard } from '@auth';
import { AuthService } from '../services/auth.service';
import { LoginDto } from '@shared-ts/dto/user.dto';
import { AuthedDto } from '@shared-ts/dto/authed.dto';

@Controller('auth/login')
@AllowAnonymousGuard()
export class AuthLoginController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  ping() {
    return {
      ping: new Date().getTime(),
      message: 'The lights are on 💡',
    };
  }

  @Post()
  async login(@Body() userDetails: LoginDto): Promise<AuthedDto> {
    return await this.authService.login(userDetails);
  }
}
