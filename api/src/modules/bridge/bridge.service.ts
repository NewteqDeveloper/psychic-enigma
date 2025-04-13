import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bridge } from '@shared-ts/database/models/bridge.model';
import { Repository } from 'typeorm';

@Injectable()
export class BridgeService {
  constructor(@InjectRepository(Bridge) private bridge: Repository<Bridge>) {}

  async getNextPort(): Promise<any> {
    const a = await this.bridge.query(
      "Select nextval(pg_get_serial_sequence('matrix.bridge', 'port')) as new_id;",
    );

    return a;
  }
}
