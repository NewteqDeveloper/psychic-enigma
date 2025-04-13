import { Module } from '@nestjs/common';
import { BridgeController } from './bridge.controller';
import { BridgeService } from './bridge.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bridge } from '@shared-ts/database/models/bridge.model';
import { User } from '@shared-ts/database/models/user.model';

@Module({
  imports: [TypeOrmModule.forFeature([Bridge, User])],
  controllers: [BridgeController],
  providers: [BridgeService],
})
export class BridgeModule {}
