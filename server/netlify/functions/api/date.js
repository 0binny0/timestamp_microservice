
const express = require("express");
import {get_timestamps} from "../../../handlers.js";

const dates_router = express.Router();

dates_router.get("/dates/:date", get_timestamps);

export {dates_router};