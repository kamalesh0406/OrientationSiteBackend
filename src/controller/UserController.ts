import { getRepository, getConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import * as jwt from "jsonwebtoken";
import config from "../config/config";
import { Tshirt } from "../entity/Tshirt";

class UserController {
  static register = async (req: Request, res: Response) => {
    let {
      roll_number,
      password
    } = req.body;
    console.log(roll_number, name);
    if (
      !(roll_number && password)
    ) {
      res.status(400).send();
    }

    var monthNames = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec"
    ];

    let user = new User();

    user.roll_number = +roll_number;
    user.name = "random";
    user.DOB = new Date("2019-08-07");
    user.blood_group = "O+";
    user.phone_number = "9080719032";
    user.department = "ICE";
    user.is_admin = false;
    user.t_shirt = null;

    user.password = password;
    console.log(user.password);
    user.hashPassword();

    const UserRepository = getRepository(User);
    console.log("Here");

    try {
      await UserRepository.save(user);
      res.status(200).send("User Created");
    } catch (error) {
      console.log(error);
      res.status(400).send("Check Your Values");
    }
  };
  static login = async (req: Request, res: Response) => {
    let { roll_number, password } = req.body;
    if (!(roll_number && password)) {
      res.status(400).send();
    }

    const UserRepository = getRepository(User);
    let user: User;
    try {
      user = await UserRepository.findOneOrFail({ where: { roll_number } });
      console.log(user);
    } catch (error) {
      res.status(400).send("User does not exist");
      return;
    }

    if (!user.checkIfUnecryptedPasswordisValid(password)) {
      res.status(401).send("Wrong Password!");
      return;
    }

    delete user.password;

    const token = jwt.sign({ user }, config.jwtSecret, {
      expiresIn: config.expiryTime
    });

    res.status(200).json({ JWT: token });
  };
}

export default UserController;
