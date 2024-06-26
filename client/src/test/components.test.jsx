
import {test, expect} from "vitest";
import {render, screen, waitFor} from "@testing-library/react";

import {MemoryRouter} from "react-router-dom";

import {Home, Timestamps} from "../components.jsx";

test(
    `
    Verify that <Home /> provides information to the user
    on the accepted formats of a date in order to get timestamps
    for that date.
    `, () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Home />
            </MemoryRouter>
        );
        const heading = screen.getByText("Timestamp Generator");
        const date1_example = screen.getByText("YYYY-MM-DD");
        const date2_example = screen.getByText("-8640000000000000 >= date (in milliseconds) <= 8640000000000000");
        expect(heading).toBeVisible();
        expect(date1_example).toBeVisible();
        expect(date2_example).toBeVisible();
    }
);

test(
    `
        Verify that <Timestamps /> shows the UTC & UNIX of versions
        on an accepted date
    `, async () => {
        render(
            <MemoryRouter initialEntries={["/-1723482374"]}>
                <Timestamps />
            </MemoryRouter>
        )
        const pending_sign = screen.getByText("Timestamps pending...");
        expect(pending_sign).toHaveClass("timestamp_pending_msg");
        await waitFor(() => {
            const timestamp = screen.getByText(/UTC timestamp:/);
            expect(timestamp).toHaveTextContent("Fri, 12 Dec 1969 01:15:17 GMT");
            expect(timestamp).toHaveClass("timestamp");
        }, {timeout: 2000});
        await waitFor(() => {
            const timestamp = screen.getByText(/UNIX timestamp:/);
            expect(timestamp).toHaveTextContent("-1723482374");
            expect(timestamp).toHaveClass("timestamp");
        }, {timeout: 2000})
    }
);