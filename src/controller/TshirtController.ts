import { Request, Response } from "express";
import { getRepository, AdvancedConsoleLogger } from "typeorm";
import { User } from "../entity/User";
import { Tshirt } from "../entity/Tshirt";
import { isNull } from "util";

class TshirtController {
  static register = async (req: Request, res: Response) => {
    let { size } = req.body;

    if (!size) {
      console.log("sizeee");
      res.status(400).send("Size not received");
    }

    const UserRepository = getRepository(User);
    let user: User;
    try {
      user = await UserRepository.findOneOrFail({
        roll_number: res.locals.jwtPayload.user.roll_number
      });
    } catch (error) {
      res.status(400).send("User does not exist");
      return;
    }
    if (!isNull(user.t_shirt)) {
      res.status(400).send("User already registered");
      return;
    }
    user.t_shirt = size;

    try {
      let userRepository = getRepository(User);
      await userRepository.save(user);
    } catch (error) {
      res.status(400).send("Send Correct Values. One of L,M,X or XL");
      return;
    }
    res
      .status(200)
      .json({ message: "Successfully registered", size: user.t_shirt });
  };
  static details = async (req: Request, res: Response) => {
    const UserRepository = getRepository(User);
    let user: User;
    try {
      user = await UserRepository.findOneOrFail({
        roll_number: res.locals.jwtPayload.user.roll_number
      });
    } catch (error) {
      console.log(error);
      res.status(400).send("User does not exist");
      return;
    }
    if (isNull(user.t_shirt)) {
      res.status(400).send("Tshirt not registered");
      return;
    } else {
      res.status(201).json({ size: user.t_shirt });
      return;
    }
  };
}

export default TshirtController;
