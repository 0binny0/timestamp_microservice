
import {validate_date} from "./validators";

function get_timestamps(req, res) {
    return res.json(validate_date(req.params.date));
}

export {get_timestamps};