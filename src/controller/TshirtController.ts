import { Request, Response} from "express";
import { getRepository } from "typeorm";
import {User} from "../entity/User";
import { Tshirt } from "../entity/Tshirt";

class TshirtController{
    static register = async (req:Request, res:Response) =>{
        let { size } = req.body;

        const UserRepository = getRepository(User);
        let user: User;
        try{
            user = await UserRepository.findOneOrFail({where: res.locals.jwtPayload })

        }catch(error){
            console.log(error);
            res.status(400).send();
        }

        let tshirt = new Tshirt()
        tshirt.name = user;
        tshirt.size = size;

        const tshirtRepository = getRepository(Tshirt);
        try{
            await tshirtRepository.save(tshirt);
        }catch(error){
            res.status(400).send("Send Correct Values");
        }
        res.status(200).send("Registered");
    };
    static details = async (req:Request, res:Response) =>{
        
        const tshirtRepository = getRepository(Tshirt);
        let tshirt:Tshirt;
        try{
            tshirt = await tshirtRepository.findOneOrFail({where: res.locals.jwtPayload})
        }catch(error){
            res.status(400).send("Tshirt not registered");
        }

        res.status(201).json({"size":tshirt.size});
    }
}

export default TshirtController;