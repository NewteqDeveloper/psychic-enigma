import { Get } from '@nestjs/common';
import { AdminSecretService } from './admin-secret.service';
import { AutoController } from '@decos';
import { SecretAuthGuard } from '@auth';

@SecretAuthGuard()
@AutoController(AdminSecretController)
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
