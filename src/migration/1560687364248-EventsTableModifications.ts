import {MigrationInterface, QueryRunner} from "typeorm";

export class EventsTableModifications1560687364248 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_b856b81109a6bc38c704a01663` ON `tshirt`");
        await queryRunner.query("ALTER TABLE `events` ADD `department` enum ('all', 'archi', 'chem', 'cse', 'ece', 'eee', 'ice', 'prod', 'mech', 'meta') NOT NULL");
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
        await queryRunner.query("ALTER TABLE `events` DROP COLUMN `department`");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_b856b81109a6bc38c704a01663` ON `tshirt` (`nameRollNumber`)");
    }

}
