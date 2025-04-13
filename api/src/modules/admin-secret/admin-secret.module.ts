import { Module } from '@nestjs/common';
import { AdminSecretController } from './admin-secret.controller';
import { AdminSecretService } from './admin-secret.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bridge } from '@shared-ts/database/models/bridge.model';
import { User } from '@shared-ts/database/models/user.model';

@Module({
  imports: [TypeOrmModule.forFeature([Bridge, User])],
  controllers: [AdminSecretController],
  providers: [AdminSecretService],
})
export class AdminSecretModule {}
