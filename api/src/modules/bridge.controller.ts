import { Controller, Get } from '@nestjs/common';
import { BridgeService } from './bridge.service';
import { PortService } from '../common/port.service';

@Controller()
export class BridgeController {
  constructor(
    private readonly bridgeService: BridgeService,
    private portService: PortService,
  ) {}

  @Get()
  async getHello() {
    return await this.portService.getNextPort();
  }
}
