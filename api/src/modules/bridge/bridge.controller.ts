import { Controller, Get } from '@nestjs/common';
import { BridgeService } from './bridge.service';
import { ControllerFromClassName } from '../../decos/controller-from-file-name';

@Controller(ControllerFromClassName(BridgeController))
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
