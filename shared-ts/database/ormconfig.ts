import { DataSource, DataSourceOptions } from 'typeorm';
import path from 'path';
import process from 'node:process';
// this import is key to getting the process.env to have the correct value
import 'dotenv/config';

export const baseDbConfig: any = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
} as DataSourceOptions;

export default new DataSource({
  ...baseDbConfig,
  entities: [path.join(__dirname, 'models/*.ts')],
  migrations: [path.join(__dirname, 'migrations/*.ts')],
});
