import { Router } from "express";
import { checkJwt } from "../middlewares/checkJWT";
import TshirtController from "../controller/TshirtController";
const routes = Router()

routes.post("/register", [checkJwt], TshirtController.register);
routes.get("/details", [checkJwt], TshirtController.details);

export default routes;