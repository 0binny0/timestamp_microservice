
const request = require("supertest");
import {test, expect} from "vitest";
import {app} from "../netlify/functions/netlify/index.js";

app.listen();

test(
    `Verify that GET /dates/:date returns a JSON response
    containing the UNIX & UTC version of a date in YYYY-MM-DD`, async () => {
        const response = await request(app).get("/api/dates/1970-02-02").connect("127.0.0.1");
        expect(response.status).toBe(200);
        expect(response.type).toBe("application/json");
        expect(response.body).toEqual({"unix":2764800000,"utc":"Mon, 02 Feb 1970 00:00:00 GMT"});
    }
);

test(
    `Verify that GET /dates/:date returns a JSON response
    containing the UNIX & UTC version of a date in milliseconds`, async () => {
        const response = await request(app).get("/api/dates/2823728491").connect("127.0.0.1");
        expect(response.status).toBe(200);
        expect(response.type).toBe("application/json");
        expect(response.body).toEqual({"unix":2823728491,"utc":"Mon, 02 Feb 1970 16:22:08 GMT"});
    }
);

test(
    `Verify that GET /dates/:date returns a JSON response
    containing an error detailing the date (in milliseconds)
     is outside the range of accepted dates`, async () => {
        const response = await request(app).get("/api/dates/282382348972348923487728491").connect("127.0.0.1");
        expect(response.status).toBe(200);
        expect(response.type).toBe("application/json");
        expect(response.body).toEqual({error: "Woah...that date is too far out to get timestamps!"});
    }
);

test.each([
    ["2021-07-83", "day"], ["2018-21-12", "month"], ["238942348-12-02", "year"]
])(
    `Verify that GET /dates/:date returns a JSON response
    containing an error detailing the date (YYYY-MM-DD)
     is invalid due to an bad %s`, async (date, d) => {
        const response = await request(app).get(`/api/dates/${date}`).connect("127.0.0.1");
        expect(response.status).toBe(200);
        expect(response.type).toBe("application/json");
        expect(response.body).toEqual({"error": "Whoops...the date provided is invalid!"});
    }
);