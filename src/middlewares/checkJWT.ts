import { Request, Response, NextFunction} from "express";
import * as jwt from "jsonwebtoken";
import config from "../config/config";

export const checkJwt = (req:Request, res: Response, next:NextFunction) => {

    const token = <string>req.headers["authorization"].split(' ')[1];
    let jwtPayload;

    try{
        jwtPayload = <any>jwt.verify(token, config.jwtSecret);
        res.locals.jwtPayload = jwtPayload;
        console.log(jwtPayload);
    }catch(error){
        res.status(401).send("Unauthorized");
    }

    next();
};
