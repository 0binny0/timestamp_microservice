
import {test, expect, vi} from "vitest";

import {get_timestamps} from "../handlers";

test(
    `Verify that get_timestamps returns a JSON string
    after validating a user supplied date`, () => {
        let mock_req = {
            params: {"date": "92171029387382371"},
        };
        const mock_res = {
            json: vi.fn((object) => JSON.stringify(object))
        };
        const response = get_timestamps(mock_req, mock_res);
        expect(mock_res.json.mock.calls.length).toBe(1);
        expect(mock_res.json.mock.results[0].value).toEqual(
            '{"error":"Woah...that date is too far out to get timestamps!"}'
        );
    }
);