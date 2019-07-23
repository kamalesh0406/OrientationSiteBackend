import { Request, Response } from "express";
import { getRepository, AdvancedConsoleLogger } from "typeorm";
import { User } from "../entity/User";
import { Tshirt } from "../entity/Tshirt";
import { isNull } from "util";

class validController {
  static isValid = async (req: Request, res: Response) => {
    return res.json({ isValid: false });
  };
}

export default validController;
