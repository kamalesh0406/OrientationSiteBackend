import { Router } from "express";
import user from "./User";
import tshirt from "./Tshirt";
import events from "./Events";
import books from "./Books";
import helper from "./helper";

const routes = Router();

routes.use("/user", user);
routes.use("/tshirt", tshirt);
routes.use("/events", events);
routes.use("/books", books);
routes.use("/helper", helper);

// let { time, name, department, description } = req
export default routes;
