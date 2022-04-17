import Express from "express";
import { connection } from "./Db connection/DB.js";
import dotenv from "dotenv";
import route from "./router/Routes.js";
import cors from "cors";

import path from "path";

const __dirname = path.resolve();

const app = Express();

dotenv.config();
const URL1 = process.env.URL;

app.use(cors());
app.use(route);

connection(URL1);

if (process.env.NODE_ENV == "production") {
  app.use(Express.static("client/build"));
}

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`your server is listning on port :- ${PORT}`);
});
