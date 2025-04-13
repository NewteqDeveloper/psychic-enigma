import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BridgeModule } from './modules/bridge/bridge.module';
import { UserModule } from './modules/user/user.module';
import { baseDbConfig } from '@shared-ts/database/ormconfig';
import { AuthModule } from './auth/auth.module';
import {AdminModule} from "./modules/admin/admin.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...baseDbConfig,
      autoLoadEntities: true,
    }),
    BridgeModule,
    UserModule,
    AuthModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
