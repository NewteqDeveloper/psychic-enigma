import { DataSource } from 'typeorm';
import path from 'path';
// this import is key to getting the process.env to have the correct value
import 'dotenv/config';
import { baseDbConfig } from './index';

export default new DataSource({
  ...baseDbConfig,
  entities: [path.join(__dirname, '../models/*.ts')],
  migrations: [path.join(__dirname, '../migrations/*.ts')],
});
