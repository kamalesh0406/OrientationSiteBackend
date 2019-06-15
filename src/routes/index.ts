import { Request, Response, Router } from "express";
import user from "./User";
import tshirt from "./Tshirt";

const routes = Router()

routes.use("/user", user);
routes.use("/tshirt", tshirt);

export default routes;
