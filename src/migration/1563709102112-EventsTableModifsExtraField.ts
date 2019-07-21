import { MigrationInterface, QueryRunner } from "typeorm";

export class EventsTableModifsExtraField1563709102112
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "ALTER TABLE `events` ADD `allDay` BOOLEAN NOT NULL DEFAULT FALSE"
    );
    await queryRunner.query(
      "ALTER TABLE `events` ADD `start` DATETIME NOT NULL AFTER `allDay`"
    );
    await queryRunner.query("ALTER TABLE `events` ADD `end` DATETIME NOT NULL");
    await queryRunner.query("ALTER TABLE `events` ADD `bgColor` VARCHAR(10)");
    await queryRunner.query("ALTER TABLE `events` DROP COLUMN `date`");
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("ALTER TABLE `events` DROP COLUMN `allDay`");
    await queryRunner.query("ALTER TABLE `events` DROP COLUMN `start`");
    await queryRunner.query("ALTER TABLE `events` DROP COLUMN `end`");
    await queryRunner.query("ALTER TABLE `events` DROP COLUMN `bgColor`");
    await queryRunner.query(
      "ALTER TABLE `events` ADD `date` DATETIME NOT NULL"
    );
  }
}
