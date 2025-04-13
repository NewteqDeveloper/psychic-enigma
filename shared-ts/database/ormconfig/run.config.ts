import { DataSource } from 'typeorm';
import path from 'path';
import { migrationRunConfig } from './index';

export default new DataSource({
  ...migrationRunConfig,
  entities: [path.join(__dirname, '../models/*.ts')],
  migrations: [path.join(__dirname, '../migrations/*.ts')],
});
