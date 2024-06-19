
function validate_date(date) {
    let d;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) && !/^-?\d+$/.test(date)) {
        return {error: "That is not an accepted date (or even a date at all)!"};
    } else if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        d = new Date(date);
        if (d.toString() === "Invalid Date") {
            return {error: "Whoops...check the year, month and/or day!"}
        }
    } else {
        const date_in_ms = parseInt(date);
        if (date_in_ms > 8640000000000000 || date_in_ms < -8640000000000000) {
            return {error: "Woah...that date is too far out to get timestamps!"};
        } else {
            d = new Date(date_in_ms);
        }
    }
    return {unix: d.getTime(), utc: d.toUTCString()};
}

export {validate_date};