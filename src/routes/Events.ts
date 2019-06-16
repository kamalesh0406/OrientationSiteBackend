import { Router } from "express";
import { checkJwt } from "../middlewares/checkJWT";
import EventsController from "../controller/EventsController";
const routes = Router()

routes.post("/register", [checkJwt], EventsController.register);
routes.get("/details", EventsController.details);

export default routes;