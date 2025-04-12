import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BridgeModule } from './modules/bridge.module';
import databaseConfig from '../../shared-ts/database/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...(databaseConfig as TypeOrmModuleOptions),
      schema: 'matrix',
      autoLoadEntities: true,
      synchronize: false,
    }),
    BridgeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
