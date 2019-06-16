import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Events } from "../entity/Events";

class EventsController{
    static register = async (req:Request, res:Response) => {

        let {name, description, time, department} = req.body;
        console.log(res.locals.jwtPayload.user.is_admin);

        if (!(res.locals.jwtPayload.user.is_admin)){
            res.status(400).send("User Does Not Have Permissions");
        }

        if (!(name && description && time && department)){
            res.status(400).send("Not all values received");
        }

        let eventRepository = getRepository(Events);
        let event = new Events()
        event.name = name;
        event.description = description;
        event.date = new Date(time);

        try{
            await eventRepository.save(event);
        }catch(error){
            console.log(error)
            res.status(400).send();
        }
        res.send(200).send();
    }
    static details = async (req: Request, res: Response) => {

        let eventRepository = getRepository(Events);
        let event: any;

        try{
            event = await eventRepository.find()
        }catch(error){
            console.log(error);
            res.send(500).send();
        }
        console.log(event);
        res.json(event);
    }

}

export default EventsController;