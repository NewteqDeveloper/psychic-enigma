import { DataSource } from 'typeorm';
import databaseConfig from './config';
import path from 'path';

export const EnigmaDataSource = new DataSource({
  ...databaseConfig,
  entities: [path.join(__dirname, 'models/*.ts')],
  migrations: [path.join(__dirname, 'migrations/*.ts')],
});
