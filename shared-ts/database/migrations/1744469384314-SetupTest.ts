import { MigrationInterface, QueryRunner } from 'typeorm';

export class SetupTest1744469384314 implements MigrationInterface {
  name = 'SetupTest1744469384314';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE SCHEMA matrix');
    await queryRunner.query(`CREATE TABLE "matrix"."bridge"
                                 (
                                     "bridge_pk"  SERIAL            NOT NULL,
                                     "type"       character varying NOT NULL,
                                     "bridgePort" integer           NOT NULL,
                                     "userId"     integer           NOT NULL,
                                     CONSTRAINT "UQ_12fc81702ff28159a5f56032d8d" UNIQUE ("bridgePort"),
                                     CONSTRAINT "PK_7f5488b3bb1f2d9cadd38eb46b7" PRIMARY KEY ("bridge_pk")
                                 )`);
    await queryRunner.query(`CREATE TABLE "matrix"."user"
                                 (
                                     "user_pk"  SERIAL            NOT NULL,
                                     "username" character varying NOT NULL,
                                     "email"    character varying NOT NULL,
                                     "password" character varying NOT NULL,
                                     CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"),
                                     CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"),
                                     CONSTRAINT "UQ_638bac731294171648258260ff2" UNIQUE ("password"),
                                     CONSTRAINT "PK_77995dbb713f79934555ac633b0" PRIMARY KEY ("user_pk")
                                 )`);
    await queryRunner.query(`ALTER TABLE "matrix"."bridge"
            ADD CONSTRAINT "FK_70b256ee4249c47a818e4751993" FOREIGN KEY ("userId") REFERENCES "matrix"."user" ("user_pk") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "matrix"."bridge"
            DROP CONSTRAINT "FK_70b256ee4249c47a818e4751993"`);
    await queryRunner.query(`DROP TABLE "matrix"."user"`);
    await queryRunner.query(`DROP TABLE "matrix"."bridge"`);
    await queryRunner.query('DROP SCHEMA matrix');
  }
}
