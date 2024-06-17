
import {test, expect} from "vitest";
import {validate_date} from "../validators.js";

test.each(
    ["8640000000000001", "-8640000000000001"]
)(
    `Verify that validate_date(%i) fails to return UNIX & UTC
    versions of a date; returns an error message`, (date_in_ms) => {
        const data = validate_date(date_in_ms);
        expect(data).toHaveProperty(
            "error", "Woah...that date is too far out to get timestamps!"
        )
    }
);

test.each(
    [
        ["864000000000000", 864000000000000, "Sun, 26 Jan 29349 00:00:00 GMT"],
        ["0", 0, "Thu, 01 Jan 1970 00:00:00 GMT"],
        ["-8640000000000000", -8640000000000000, "Tue, 20 Apr -271821 00:00:00 GMT"]
    ]
)(
    `Verify that validate_date(%i) returns UNIX & UTC
    versions of a date within a maximum and minimum range (inclusive)`,
    (date_in_ms, unix_date, utc_date) => {
        const data = validate_date(date_in_ms);
        expect(data).toHaveProperty("unix", unix_date)
        expect(data).toHaveProperty("utc", utc_date)
    }
);

test.each([
    ["291998-12-03", "Whoops...the date provided is invalid!"],
    ["2022-13-01", "Whoops...the date provided is invalid!"],
    ["2004-07-36", "Whoops...the date provided is invalid!"]
])(
    `Verify that validate_date(%s) fails to return UNIX & UTC
    versions of a date in the format YYYY-MM-DD`, (date, message) => {
        const data = validate_date(date);
        expect(data).toHaveProperty("error");
    }
);