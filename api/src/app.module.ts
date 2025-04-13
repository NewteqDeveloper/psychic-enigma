import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { baseDbConfig } from '@shared-ts/database/ormconfig';
import { AuthModule } from './auth/auth.module';
import { BridgeModule } from './endpoints/bridge/bridge.module';
import { UserModule } from './endpoints/user/user.module';
import { AdminModule } from './endpoints/admin/admin.module';

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
