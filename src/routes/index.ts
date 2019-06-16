import { Router } from "express";
import user from "./User";
import tshirt from "./Tshirt";
import events from "./Events";
import books from "./Books";

const routes = Router()

routes.use("/user", user);
routes.use("/tshirt", tshirt);
routes.use("/events", events);
routes.use("/books", books);

export default routes;
