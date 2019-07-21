import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as helmet from "helmet";
import routes from "./routes";
import * as path from "path";
import { User } from "./entity/User";
import { Books } from "./entity/Books";
import { Tshirt } from "./entity/Tshirt";
import { Events } from "./entity/Events";

createConnection()
  .then(async connection => {
    const dir = path.join(__dirname, "public/OrientationSite-Frontend/build");
    // Set the static and views directory

    // create express app
    const app = express();

    app.use(cors());
    app.use(helmet());

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use("/", routes);
    // Serve front-end content
    if (process.env.NODE_ENV !== "production") {
      app.get("*", (req, res) => res.send("development mode"));
    } else {
      app.set("views", dir);
      app.use(express.static(dir));
      app.get("*", (req, res) => {
        res.sendFile("index.html", { root: dir });
      });
    }
    app.listen(3001, () => {
      console.log("Server started on port 3001");
    });
  })
  .catch(error => console.log(error));
