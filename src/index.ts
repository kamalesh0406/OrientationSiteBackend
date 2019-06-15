import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as helmet from "helmet";
import routes from "./routes";
import {User} from "./entity/User";

createConnection().then(async connection => {

    // create express app
    const app = express();
    
    app.use(cors());
    app.use(helmet());

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));

    app.use("/", routes);

    app.listen(3000, ()=>{
        console.log("Server started on port 3000");
    });

}).catch(error => console.log(error));
