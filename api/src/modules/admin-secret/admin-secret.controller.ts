import { Controller, Get } from '@nestjs/common';
import { AdminSecretService } from './admin-secret.service';
import { ControllerFromClassName } from '@decos';
import { SecretAuthGuard } from '@auth';

@SecretAuthGuard()
@Controller(ControllerFromClassName(AdminSecretController))
export class AdminSecretController {
  constructor(private readonly userService: AdminSecretService) {}

  @Get()
  async getHello() {
    await this.userService.createUser('newt');
    return {
      message: 'Done',
    };
  }
}
