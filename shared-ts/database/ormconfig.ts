import 'dotenv/config';

import { DataSource } from 'typeorm';
import * as path from 'path';
import * as process from 'node:process';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [path.join(__dirname, 'models/*.ts')],
  migrations: [path.join(__dirname, 'migrations/*.ts')],
});
