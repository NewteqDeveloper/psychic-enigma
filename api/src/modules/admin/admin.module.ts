import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bridge } from '@shared-ts/database/models/bridge.model';
import { User } from '@shared-ts/database/models/user.model';
import { UserService } from '../user/user.service';
import { AdminSecretController } from './admin-secret.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Bridge, User])],
  controllers: [AdminController, AdminSecretController],
  providers: [AdminService, UserService],
})
export class AdminModule {}
