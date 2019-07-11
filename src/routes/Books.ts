import { Router } from "express";
import BooksController from "../controller/BooksController";
import { checkJwt } from "../middlewares/checkJWT";

let routes = Router()

routes.post("/add", [checkJwt],  BooksController.add);
routes.post("/details", BooksController.details);

export default routes;