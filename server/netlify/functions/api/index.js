
import express from "express";
import {cors} from "cors";
import serverless from "serverless-http";

import {dates_router} from "./date.js";

const app = express();
app.use("/api/", cors(), dates_router);

// app.listen(3000);
const handler = serverless(app);
export {app, handler};