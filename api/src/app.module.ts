import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BridgeModule } from './modules/bridge.module';
import databaseConfig from '../../shared-ts/database/config';
import path from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...(databaseConfig as TypeOrmModuleOptions),
      entities: [path.join(__dirname, '../../shared-ts/database/models/*.ts')],
      synchronize: false,
    }),
    BridgeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
