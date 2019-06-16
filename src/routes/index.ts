import { Request, Response, Router } from "express";
import user from "./User";
import tshirt from "./Tshirt";
import events from "./Events";

const routes = Router()

routes.use("/user", user);
routes.use("/tshirt", tshirt);
routes.use("/events", events);

export default routes;
