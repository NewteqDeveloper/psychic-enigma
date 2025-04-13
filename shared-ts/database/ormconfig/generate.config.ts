import { DataSource } from 'typeorm';
import path from 'path';
import { baseDbConfig } from './index';

export default new DataSource({
  ...baseDbConfig,
  entities: [path.join(__dirname, '../models/*.ts')],
  migrations: [path.join(__dirname, '../migrations/*.ts')],
});
