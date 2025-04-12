import { Controller, Get } from '@nestjs/common';
import { BridgeService } from './bridge.service';

@Controller()
export class BridgeController {
  constructor(private readonly bridgeService: BridgeService) {}

  @Get()
  getHello(): string {
    return this.bridgeService.getHello();
  }
}
