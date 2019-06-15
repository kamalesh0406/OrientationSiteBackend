import { Router } from "express";
import UserController from "../controller/UserController";


const routes = Router()

routes.post("/register", UserController.register);
routes.post("/login", UserController.login);

export default routes;