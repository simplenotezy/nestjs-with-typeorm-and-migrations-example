import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangedNameColumn1722862776229 implements MigrationInterface {
    name = 'ChangedNameColumn1722862776229'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "name" TO "full_name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "full_name" TO "name"`);
    }

}
