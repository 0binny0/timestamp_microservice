
function validate_date(date) {
    let d;
    if (!/\d{4}-\d{2}-\d{2}/.test(date)) {
        const date_in_ms = parseInt(date);
        if (date_in_ms > 8640000000000000 || date_in_ms < -8640000000000000) {
            return {error: "Woah...that date is too far out to get timestamps!"};
        } else {
            d = new Date(date_in_ms);
        }
    } else {
        d = new Date(date);
        if (d.toString() === "Invalid Date") {
            return {"error": "Whoops...the date provided is invalid!"}
        }
    }
    return {unix: d.getTime(), utc: d.toUTCString()};
}

export {validate_date};