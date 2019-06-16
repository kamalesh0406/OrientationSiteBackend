import {MigrationInterface, QueryRunner} from "typeorm";

export class BooksTableModifications1560708417489 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `books` ADD UNIQUE INDEX `IDX_fe83db5011670099b0fa0aeef3` (`link`)");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `books` DROP INDEX `IDX_fe83db5011670099b0fa0aeef3`");
    }

}
