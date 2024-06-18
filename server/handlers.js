
import {validate_date} from "./validators";

function get_timestamps(req, res) {
    res.json(validate_date(req.params.date));
}

export {get_timestamps};