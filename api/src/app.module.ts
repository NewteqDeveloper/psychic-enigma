import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BridgeModule } from './modules/bridge/bridge.module';
import { UserModule } from './modules/user/user.module';
import { baseDbConfig } from '@shared-ts/database/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...baseDbConfig,
      autoLoadEntities: true,
    }),
    BridgeModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
