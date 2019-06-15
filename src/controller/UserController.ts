import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

class UserController {

   static register = async (req: Request, res: Response) => {
        let {username, name, dob, blood_group, phone_number, department} = req.body;
        console.log(username, name);
        if(!(username && name && dob && blood_group && phone_number && department)){
            res.status(400).send();
        }

        var monthNames = ["jan", "feb", "mar", "apr", "may","jun","jul", "aug", "sep", "oct", "nov","dec"];

        let user = new User();

        user.roll_number = +username;
        user.name = name;
        user.DOB = new Date(dob);
        user.blood_group = blood_group;
        user.phone_number = phone_number;
        user.department = department;
        user.is_admin = false;

        user.password = user.blood_group[0] + monthNames[user.DOB.getMonth()] + dob.slice(-2) + user.phone_number.slice(-3);
        console.log(user.password);
        user.hashPassword()

        const UserRepository = getRepository(User);
        console.log("Here");

        try{
            await UserRepository.save(user);
            res.status(200).send("User Created");
        }catch(error){
            console.log(error);
            res.status(400).send("Check Your Values");
        }
   };
}

export default UserController;