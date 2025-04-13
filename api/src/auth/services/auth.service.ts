import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { LoginDto } from '@shared-ts/dto/user.dto';
import { UserService } from '../../endpoints/user/user.service';
import { AuthedDto } from '@shared-ts/dto/authed.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async login(userDetails: LoginDto): Promise<AuthedDto> {
    const { mxid } = await this.userService.assertUserCredentials(
      userDetails,
      'The lights are off 🚨',
    );

    const payload = { username: 'coming soon', sub: mxid };

    const jwt = await this.jwtService.signAsync(payload);

    return {
      accessToken: jwt,
      message: 'The lights are on 💡',
      time: new Date().getTime(),
    };
  }
}
