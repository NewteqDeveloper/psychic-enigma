import { Injectable } from '@nestjs/common';
import { Bridge } from '../../../shared-ts/database/models/bridge.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PortService {
  constructor(@InjectRepository(Bridge) private bridge: Repository<Bridge>) {}

  async getNextPort(): Promise<number> {
    //const bridge = EnigmaDataSource.getRepository(Bridge);

    const bridgeInfo = await this.bridge.find({
      order: {
        bridgePort: 'desc',
      },
      take: 1,
    });

    return bridgeInfo[0]?.bridgePort || Number(process.env.BRIDGE_BASE_PORT);
  }
}
