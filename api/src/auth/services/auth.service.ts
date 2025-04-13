import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { LoginDto } from '@shared-ts/dto/user.dto';
import { UserService } from '../../endpoints/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async login(userDetails: LoginDto) {
    const { mxid } = await this.userService.assertUserCredentials(userDetails);

    const payload = { username: 'coming soon', sub: mxid };

    const jwt = await this.jwtService.signAsync(payload);

    return {
      access_token: jwt,
    };
  }
}
