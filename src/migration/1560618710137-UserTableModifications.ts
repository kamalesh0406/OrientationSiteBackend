import {MigrationInterface, QueryRunner} from "typeorm";

export class UserTableModifications1560618710137 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `is_admin`");
        await queryRunner.query("ALTER TABLE `user` ADD `is_admin` tinyint NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `is_admin`");
        await queryRunner.query("ALTER TABLE `user` ADD `is_admin` binary NOT NULL");
    }

}
