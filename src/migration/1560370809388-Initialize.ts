import {MigrationInterface, QueryRunner} from "typeorm";

export class Initialize1560370809388 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `user` (`roll_number` int NOT NULL, `name` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `department` enum ('archi', 'chem', 'ece', 'eee', 'ice', 'prod', 'mech') NOT NULL, `isAdmin` binary NOT NULL, PRIMARY KEY (`roll_number`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `user`");
    }

}
