import { Get } from '@nestjs/common';
import { AutoController } from '@decos';

@AutoController(AdminController)
export class AdminController {
  constructor() {}

  @Get()
  ping() {
    return {
      ping: 'pong',
    };
  }
}
