import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BridgeModule } from './modules/bridge.module';
import { baseDbConfig } from '@shared-ts/database/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...baseDbConfig,
      schema: 'matrix',
      autoLoadEntities: true,
    }),
    BridgeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
