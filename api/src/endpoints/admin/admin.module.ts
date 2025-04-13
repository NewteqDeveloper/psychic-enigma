import { Module } from '@nestjs/common';
import { AdminController } from './controllers/controller';
import { AdminService } from './admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bridge } from '@shared-ts/database/models/bridge.model';
import { User } from '@shared-ts/database/models/user.model';
import { UserService } from '../user/user.service';
import { SecretController } from './controllers/secret.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Bridge, User])],
  controllers: [AdminController, SecretController],
  providers: [AdminService, UserService],
})
export class AdminModule {}
