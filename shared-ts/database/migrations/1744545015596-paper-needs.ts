import { MigrationInterface, QueryRunner } from 'typeorm';

export class PaperNeeds1744545015596 implements MigrationInterface {
  name = 'PaperNeeds1744545015596';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE SCHEMA matrix');
    await queryRunner.query(
      `CREATE TYPE "matrix"."bridge_type_enum" AS ENUM('whatsapp')`,
    );
    await queryRunner.query(`CREATE TABLE "matrix"."bridge"
                                 (
                                     "port"     SERIAL                      NOT NULL,
                                     "type"     "matrix"."bridge_type_enum" NOT NULL,
                                     "userMxid" character varying,
                                     CONSTRAINT "bridge_port" PRIMARY KEY ("port")
                                 )`);
    await queryRunner.query(
      'ALTER SEQUENCE matrix.bridge_port_seq RESTART WITH 29340',
    );
    await queryRunner.query(`CREATE TABLE "matrix"."user"
                                 (
                                     "mxid"     character varying NOT NULL,
                                     "password" character varying NOT NULL,
                                     CONSTRAINT "uq_user" UNIQUE ("mxid"),
                                     CONSTRAINT "PK_51934148571760083e7e1850715" PRIMARY KEY ("mxid")
                                 )`);
    await queryRunner.query(`ALTER TABLE "matrix"."bridge"
            ADD CONSTRAINT "FK_903a2e44f9950d8cf9735b8b329" FOREIGN KEY ("userMxid") REFERENCES "matrix"."user" ("mxid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "matrix"."bridge"
            DROP CONSTRAINT "FK_903a2e44f9950d8cf9735b8b329"`);
    await queryRunner.query(`DROP TABLE "matrix"."user"`);
    await queryRunner.query(`DROP TABLE "matrix"."bridge"`);
    await queryRunner.query(`DROP TYPE "matrix"."bridge_type_enum"`);
    await queryRunner.query('DROP SCHEMA matrix');
  }
}
