import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ControllerFromClassName } from '../../decos/controller-from-file-name';

@Controller(ControllerFromClassName(UserController))
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
