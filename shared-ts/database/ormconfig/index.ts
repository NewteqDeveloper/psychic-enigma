import process from 'node:process';
import { DataSourceOptions } from 'typeorm';
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
  schema: 'matrix',
} as DataSourceOptions;

export const migrationRunConfig: DataSourceOptions = {
  ...baseDbConfig,
  schema: undefined,
};
