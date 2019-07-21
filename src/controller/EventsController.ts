import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Events } from "../entity/Events";

class EventsController {
  static register = async (req: Request, res: Response) => {
    let {
      name,
      start,
      end,
      bgColor,
      allDay,
      department,
      description
    } = req.body;
    // let { time, name, department, description } = req.body;
    // console.log(res.locals.jwtPayload.user.is_admin);

    if (!res.locals.jwtPayload.user.is_admin) {
      res.status(400).send("User Does Not Have Permissions");
    }

    if (!(name && start && end && bgColor && allDay && department)) {
      return res.status(400).send("Not all values received");
    }
    if (start > end) {
      res.status(400).send("Start date greater than end date");
      return;
    }

    let eventRepository = getRepository(Events);
    let event = new Events();
    event.name = name;
    // event.date = time;
    event.start = new Date(start);
    event.end = new Date(end);
    event.allDay = allDay;
    event.department = department;
    event.description = description;
    event.bgColor = bgColor;

    try {
      await eventRepository.save(event);
    } catch (error) {
      console.log(error);
      res.status(400).send();
    }
    res.send(200).send();
  };
  static details = async (req: Request, res: Response) => {
    let eventRepository = getRepository(Events);
    let event: any;

    try {
      event = await eventRepository.find();
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
    console.log(event);
    res.json(event);
  };
}

export default EventsController;
