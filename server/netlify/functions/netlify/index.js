
const express = require("express");
import {dates_router} from "./date.js";
import serverless from "serverless-http";

const app = express();
app.use("/api/", dates_router);


const handler = serverless(app);
export {app, handler};