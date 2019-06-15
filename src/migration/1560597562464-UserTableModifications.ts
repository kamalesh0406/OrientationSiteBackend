import {MigrationInterface, QueryRunner} from "typeorm";

export class UserTableModifications1560597562464 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `isAdmin`");
        await queryRunner.query("ALTER TABLE `user` ADD `DOB` date NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `blood_group` enum ('O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-') NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `phone_number` varchar(20) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `is_admin` binary NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `is_admin`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `phone_number`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `blood_group`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `DOB`");
        await queryRunner.query("ALTER TABLE `user` ADD `isAdmin` binary NOT NULL");
    }

}
