import { Get } from '@nestjs/common';
import { BridgeService } from './bridge.service';
import { AutoController } from '@decos';

@AutoController(BridgeController)
export class BridgeController {
  constructor(private readonly bridgeService: BridgeService) {}

  @Get()
  async getNextPort() {
    const port = await this.bridgeService.getNextPort();
    return {
      nextPort: port,
    };
  }
}
