
import {validate_date} from "./validators.js";

function get_timestamps(req, res) {
    res.send("Access-Control-Allow-Origin", "*");
    res.json(validate_date(req.params.date));
}

export {get_timestamps};