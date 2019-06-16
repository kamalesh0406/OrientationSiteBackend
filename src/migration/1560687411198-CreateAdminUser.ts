import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { User, BloodGroup, Department} from "../entity/User";
export class CreateAdminUser1560687411198 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let user = new User()
        user.roll_number = 1101;
        user.name = "admin";
        user.password = "admin";
        user.DOB = new Date("2000-04-04");
        user.blood_group = BloodGroup.Oneg;
        user.phone_number = "627282";
        user.department = Department.ARCHI;
        user.is_admin = true;
        user.hashPassword();

        const userRepository = getRepository(User);
        await userRepository.save(user);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
