import {MigrationInterface, QueryRunner} from "typeorm";

export class TshirtTableModifications1560620300733 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `is_admin`");
        await queryRunner.query("ALTER TABLE `user` ADD `is_admin` binary NOT NULL");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `is_admin`");
        await queryRunner.query("ALTER TABLE `user` ADD `is_admin` tinyint NOT NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_b856b81109a6bc38c704a01663` ON `tshirt` (`nameRollNumber`)");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_b856b81109a6bc38c704a01663` ON `tshirt`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `is_admin`");
        await queryRunner.query("ALTER TABLE `user` ADD `is_admin` binary NOT NULL");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `is_admin`");
        await queryRunner.query("ALTER TABLE `user` ADD `is_admin` tinyint NOT NULL");
    }

}
