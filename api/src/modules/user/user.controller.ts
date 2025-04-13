import { Get } from '@nestjs/common';
import { UserService } from './user.service';
import { AutoController } from '@decos';

@AutoController(UserController)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getHello() {
    await this.userService.createUser('newt');
    return {
      message: 'Done',
    };
  }
}
