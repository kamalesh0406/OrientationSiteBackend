import {MigrationInterface, QueryRunner} from "typeorm";

export class Initialize1560579886071 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `books` (`book_id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `link` varchar(255) NOT NULL, `department` enum ('all', 'archi', 'chem', 'cse', 'ece', 'eee', 'ice', 'prod', 'mech', 'meta') NOT NULL, PRIMARY KEY (`book_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `events` (`event_id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` longtext NOT NULL, `date` datetime NOT NULL, PRIMARY KEY (`event_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`roll_number` int NOT NULL, `name` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `department` enum ('archi', 'chem', 'cse', 'ece', 'eee', 'ice', 'prod', 'mech', 'meta') NOT NULL, `isAdmin` binary NOT NULL, PRIMARY KEY (`roll_number`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `tshirt` (`tshirt_id` int NOT NULL AUTO_INCREMENT, `size` enum ('S', 'M', 'L', 'XL') NOT NULL, `nameRollNumber` int NULL, UNIQUE INDEX `REL_b856b81109a6bc38c704a01663` (`nameRollNumber`), PRIMARY KEY (`tshirt_id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `tshirt` ADD CONSTRAINT `FK_b856b81109a6bc38c704a016634` FOREIGN KEY (`nameRollNumber`) REFERENCES `user`(`roll_number`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `tshirt` DROP FOREIGN KEY `FK_b856b81109a6bc38c704a016634`");
        await queryRunner.query("DROP INDEX `REL_b856b81109a6bc38c704a01663` ON `tshirt`");
        await queryRunner.query("DROP TABLE `tshirt`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `events`");
        await queryRunner.query("DROP TABLE `books`");
    }

}
