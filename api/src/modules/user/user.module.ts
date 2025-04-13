import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bridge } from '@shared-ts/database/models/bridge.model';
import { User } from '@shared-ts/database/models/user.model';

@Module({
  imports: [TypeOrmModule.forFeature([Bridge, User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
