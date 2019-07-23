import { Router } from "express";
// import { checkJwt } from "../middlewares/checkJWT";
import validController from "../controller/validController";
const routes = Router();
<any>async function isValid(req: Request, res: Response) {
  return res.json();
};

routes.get("/isValid", validController.isValid);
// routes.get("/details", [checkJwt], TshirtController.details);

export default routes;
