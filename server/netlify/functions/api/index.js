
import express from "express";
import {dates_router} from "./date.js";
import serverless from "serverless-http";

const app = express();
app.use("/api/", dates_router);

// app.listen(3000);
const handler = serverless(app);
export {app, handler};