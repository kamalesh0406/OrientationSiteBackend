import { MigrationInterface, QueryRunner } from "typeorm";

export class UserTableModifs1563115110025 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "ALTER TABLE `user` ADD `t_shirt` enum ('S', 'M', 'L', 'XL') NULL DEFAULT NULL AFTER `phone_number`"
    );
    await queryRunner.query("DROP TABLE `tshirt`");
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("ALTER TABLE `user` DROP `t_shirt`");
    await queryRunner.query(
      "CREATE TABLE `tshirt` (`tshirt_id` int NOT NULL AUTO_INCREMENT, `size` enum ('S', 'M', 'L', 'XL') NOT NULL, `nameRollNumber` int NULL, UNIQUE INDEX `REL_b856b81109a6bc38c704a01663` (`nameRollNumber`), PRIMARY KEY (`tshirt_id`)) ENGINE=InnoDB"
    );
  }
}
