
const request = require("supertest");
import {test, expect} from "vitest";
import {app} from "../netlify/functions/netlify/index.js";

app.listen();

test(
    `Verify that GET /dates/:date returns a JSON response
    containing the UNIX & UTC version of a date in YYYY-MM-DD`, async () => {
        const response = await request(app).get("/api/dates/2823728491").connect("127.0.0.1");
        expect(response.status).toBe(200);
        expect(response.type).toBe("application/json");
        expect(response.body).toEqual({"unix":2823728491,"utc":"Mon, 02 Feb 1970 16:22:08 GMT"});
    }
);

