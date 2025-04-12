import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1744458696869 implements MigrationInterface {
  name = 'Initial1744458696869';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE SCHEMA matrix');
    await queryRunner.query(`CREATE TABLE "matrix"."user"
                                 (
                                     "id"       SERIAL                 NOT NULL,
                                     "username" character varying(255) NOT NULL,
                                     "email"    character varying      NOT NULL,
                                     CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"),
                                     CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"),
                                     CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
                                 )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "matrix"."user"`);
    await queryRunner.query(`DROP SCHEMA matrix`);
  }
}
