import process from 'node:process';
import { DataSourceOptions } from 'typeorm';
// KEY PIECE THIS
import 'dotenv/config';

const databaseConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
};

export default databaseConfig;
