import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { LoginDto } from '@shared-ts/dto/user.dto';
import { UserService } from '../../endpoints/user/user.service';
import { AuthedDto } from '@shared-ts/dto/authed.dto';
import { JwtModel } from '../../models/auth/jwt.model';

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

    const jwtPayload: JwtModel = {
      username: 'coming soon',
      sub: mxid,
      somethingElse: 'testing',
    };

    const jwt = await this.jwtService.signAsync(jwtPayload);

    return {
      accessToken: jwt,
      message: 'The lights are on 💡',
      time: new Date().getTime(),
    };
  }
}
