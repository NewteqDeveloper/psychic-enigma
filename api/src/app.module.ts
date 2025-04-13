import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BridgeModule } from './modules/bridge/bridge.module';
import { UserModule } from './modules/user/user.module';
import { baseDbConfig } from '@shared-ts/database/ormconfig';
import { AuthModule } from './auth/auth.module';
import { AdminSecretModule } from './modules/admin-secret/admin-secret.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...baseDbConfig,
      autoLoadEntities: true,
    }),
    BridgeModule,
    UserModule,
    AuthModule,
    AdminSecretModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
